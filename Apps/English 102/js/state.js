// js/state.js
//
// localStorage-backed progress store, per IMPLEMENTATION_PLAN.md §4.1.
//
// Records one { attempted, correct, updatedAt } entry per activity id,
// persisted as one JSON blob per unit (key: "progress:<unitId>", read
// through utils/helpers.js's storageGet/storageSet so every localStorage
// access in this app shares the same STORAGE_PREFIX/fail-soft
// conventions already established by openResponse.js). A blob-per-unit
// (not blob-per-activity, and not one single app-wide blob) keeps a
// section/unit progress read to one localStorage read, keeps a
// "reset everything" to a handful of deletes, and keeps concurrent
// writes to different units from ever needing to merge against each
// other's data.
//
// This module knows nothing about specific unit ids or activity ids in
// advance -- every function that needs to know "how many activities does
// this unit/section have" is handed the real unit data object (the same
// shape exported by js/data/unitN.js) and walks it. That keeps state.js
// reusable for all three units without hardcoding unit1/unit2/unit3
// anywhere, and keeps it correct automatically as Phase 5-7 wire up real
// per-unit rendering -- no changes needed here when that happens.

import { storageGet, storageSet } from "./utils/helpers.js";

// Composite types whose own id is a container, not a directly-gradable
// activity -- per IMPLEMENTATION_PLAN.md §2.1, readingPassage and
// listeningTranscript each wrap a nested `questions` array of real
// mcq/trueFalse activities-with-their-own-ids. Every other type (mcq,
// trueFalse, matching, fillBlank, anagram, hangman, phoneticSymbol,
// vowelTickbox, transcriptionSpelling, diphthongMatch, openResponse, and
// dialogueFillBlank once it has an engine module -- see TRACKER.md's
// Phase 3 gap note) is graded directly against its own top-level id, so
// nothing needs to be listed here for those.
const COMPOSITE_TYPES = new Set(["readingPassage", "listeningTranscript"]);

// openResponse activities have no right/wrong answer -- onAnswered's
// isCorrect param for that type means "has a non-empty saved draft", not
// a graded score (see engine/openResponse.js's own header comment). They
// still count toward completion (a student engaged with the prompt), but
// are excluded from the accuracy/score percentage, since "correct" isn't
// a meaningful concept for open-ended writing. No other current or
// planned type needs this treatment.
function isScorable(type) {
  return type !== "openResponse";
}

/**
 * Walks one unit data object and returns a flat list of every directly
 * gradable activity, recursing into readingPassage/listeningTranscript
 * containers so their nested questions are counted (and recorded
 * against) individually -- exactly matching how those questions will
 * actually be rendered and graded (each nested question goes through its
 * own engine module instance with its own onAnswered call).
 * wordlist sections (terms, not activities) contribute nothing.
 *
 * @param {object} unitData - a js/data/unitN.js export (e.g. unit1)
 * @returns {Array<{id:string, type:string, sectionId:string}>}
 */
export function getUnitActivities(unitData) {
  const out = [];
  for (const [sectionId, section] of Object.entries(unitData.sections || {})) {
    if (!Array.isArray(section.activities)) continue; // e.g. wordlist
    for (const activity of section.activities) {
      if (COMPOSITE_TYPES.has(activity.type)) {
        for (const question of activity.questions || []) {
          out.push({ id: question.id, type: question.type, sectionId });
        }
      } else {
        out.push({ id: activity.id, type: activity.type, sectionId });
      }
    }
  }
  return out;
}

/**
 * Same as getUnitActivities, filtered to one section.
 * @param {object} unitData
 * @param {string} sectionId
 * @returns {Array<{id:string, type:string, sectionId:string}>}
 */
export function getSectionActivities(unitData, sectionId) {
  return getUnitActivities(unitData).filter((a) => a.sectionId === sectionId);
}

function progressStorageKey(unitId) {
  return `progress:${unitId}`;
}

/**
 * Reads the raw { [activityId]: {attempted, correct, updatedAt} } record
 * map for one unit. Always returns an object (never null/throws) -- a
 * missing key, an unavailable localStorage, or corrupted JSON all
 * fail soft to {}, same convention as every other storage access in this
 * app (see utils/helpers.js's storageGet).
 * @param {string} unitId
 * @returns {Object<string, {attempted:boolean, correct:boolean, updatedAt:number}>}
 */
export function getUnitRecords(unitId) {
  const raw = storageGet(progressStorageKey(unitId));
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/**
 * Reads the stored record for one activity, or null if never attempted.
 * @param {string} unitId
 * @param {string} activityId
 * @returns {{attempted:boolean, correct:boolean, updatedAt:number} | null}
 */
export function getRecord(unitId, activityId) {
  const records = getUnitRecords(unitId);
  return records[activityId] || null;
}

/**
 * Records the outcome of one activity attempt. Called by engine modules'
 * onAnswered(activityId, isCorrect) callback (via the per-unit/section
 * renderer that owns the unitId context an individual engine module
 * doesn't know about). Overwrites any prior record for the same id --
 * per plan §2, ids are stable/unique for the lifetime of the app, so
 * "record again" always means "the student redid (or, for openResponse,
 * kept revising) this same activity."
 * @param {string} unitId
 * @param {string} activityId
 * @param {boolean} isCorrect
 * @returns {boolean} whether the write succeeded
 */
export function recordAnswer(unitId, activityId, isCorrect) {
  const records = getUnitRecords(unitId);
  records[activityId] = {
    attempted: true,
    correct: !!isCorrect,
    updatedAt: Date.now(),
  };
  return storageSet(progressStorageKey(unitId), JSON.stringify(records));
}

/**
 * Computes progress over an arbitrary list of {id, type} activities
 * against one unit's stored records. Shared by getSectionProgress and
 * getUnitProgress so the two never drift in how they define
 * "complete"/"correct".
 * @param {Array<{id:string, type:string}>} activities
 * @param {Object<string, {attempted:boolean, correct:boolean}>} records
 */
function summarize(activities, records) {
  let attempted = 0;
  let correct = 0;
  let scorableTotal = 0;
  let scorableAttempted = 0;
  for (const { id, type } of activities) {
    const record = records[id];
    const scorable = isScorable(type);
    if (scorable) scorableTotal++;
    if (record && record.attempted) {
      attempted++;
      if (scorable) {
        scorableAttempted++;
        if (record.correct) correct++;
      }
    }
  }
  const total = activities.length;
  return {
    total,
    attempted,
    correct,
    scorableTotal,
    scorableAttempted,
    // Percent of all activities (including openResponse) attempted --
    // this is the "did the student engage with this?" number used for
    // completion checkmarks / progress bars.
    percentComplete: total === 0 ? 0 : Math.round((attempted / total) * 100),
    // Percent of *scorable* attempts answered correctly -- this is the
    // "how well did they do?" number. null (not 0) when nothing scorable
    // has been attempted yet, so callers can distinguish "0% correct"
    // from "no score yet" and choose not to render a misleading 0%.
    percentCorrect:
      scorableAttempted === 0
        ? null
        : Math.round((correct / scorableAttempted) * 100),
    isComplete: total > 0 && attempted === total,
  };
}

/**
 * Progress summary for one section of one unit.
 * @param {object} unitData
 * @param {string} sectionId
 * @returns {ReturnType<typeof summarize>}
 */
export function getSectionProgress(unitData, sectionId) {
  const activities = getSectionActivities(unitData, sectionId);
  const records = getUnitRecords(unitData.id);
  return summarize(activities, records);
}

/**
 * Progress summary for a whole unit, plus a per-section breakdown under
 * `.bySection`. Sections with zero gradable activities (currently just
 * `wordlist`, which holds glossary `terms` rather than activities) are
 * included in `.bySection` with total:0/isComplete:false so callers can
 * choose to skip rendering a checkmark for them, rather than being
 * silently omitted from the map.
 * @param {object} unitData
 * @returns {ReturnType<typeof summarize> & {bySection: Object<string, ReturnType<typeof summarize>>}}
 */
export function getUnitProgress(unitData) {
  const records = getUnitRecords(unitData.id);
  const allActivities = getUnitActivities(unitData);
  const overall = summarize(allActivities, records);
  const bySection = {};
  for (const sectionId of Object.keys(unitData.sections || {})) {
    const sectionActivities = allActivities.filter((a) => a.sectionId === sectionId);
    bySection[sectionId] = summarize(sectionActivities, records);
  }
  return { ...overall, bySection };
}

/**
 * Clears all recorded progress across every unit. Used by the "Reset my
 * progress" control (plan §4.3) -- deliberately scans localStorage for
 * every `progress:*` key under this app's STORAGE_PREFIX rather than
 * requiring a caller-supplied list of unit ids, so it stays correct even
 * if a unit is added later and reaches every unit that has ever recorded
 * progress on this device, not just the three currently known ones. Does
 * NOT touch openResponse's own saved drafts (a different key namespace,
 * `openResponse:<id>`) -- resetting quiz/exercise progress and discarding
 * a student's in-progress writing are different actions and shouldn't be
 * bundled into one irreversible click.
 * @returns {number} how many progress records were cleared
 */
export function resetProgress() {
  let cleared = 0;
  try {
    const prefix = "qusaiEnglish:progress:";
    const keysToRemove = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key && key.startsWith(prefix)) keysToRemove.push(key);
    }
    for (const key of keysToRemove) {
      window.localStorage.removeItem(key);
      cleared++;
    }
  } catch {
    // fail soft, same convention as storageGet/storageSet -- caller
    // sees 0 cleared and can show a "couldn't reset" state if desired.
  }
  return cleared;
}
