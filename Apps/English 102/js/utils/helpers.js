// js/utils/helpers.js
//
// Small shared utilities used across engine/*.js modules, per
// IMPLEMENTATION_PLAN.md §3.12. Nothing here is tied to any one activity
// type — this file owns generic string/array/storage helpers that
// multiple engine modules would otherwise duplicate.
//
// This step consolidates two TEMPORARY local duplicates already flagged
// in engine module header comments:
//   - `normalize()` in engine/anagram.js and engine/transcriptionSpelling.js
//     (trim + lowercase, for case-insensitive answer comparison) — both
//     become `normalizeForCompare()` here.
//   - the direct `window.localStorage` read/write pair in
//     engine/openResponse.js — becomes `storageGet()`/`storageSet()` here,
//     with the exact same key namespace preserved (see STORAGE_PREFIX
//     below) so no student's already-saved progress is orphaned by this
//     refactor.
//
// `shuffle()` is also added per the plan's §3.12 list ("array shuffle").
// Note: as of this step, no engine module built so far (3.1-3.11)
// actually randomizes option/word-bank order, so nothing consumes this
// yet — it's here ready for Phase 5+ assembly if any real activity turns
// out to need randomized presentation order (e.g. so a word bank isn't
// always shown in answer-adjacent order). Non-mutating by design (returns
// a new array, leaves the input untouched) since engine modules pass in
// activity data arrays that must not be mutated out from under
// re-renders.
//
// An id-generator helper was listed as conditional in the plan ("if
// needed"). Every activity id in this project is a stable, pre-assigned
// string from js/data/unitN.js (per plan §2's explicit "ids must not
// change once used" rule) — there is no runtime id-generation need
// anywhere in the app, so it's deliberately omitted rather than added
// speculatively.

/**
 * Trims surrounding whitespace and lower-cases a string, for
 * case-insensitive/whitespace-insensitive answer comparison. Used by any
 * engine module grading free-text input (anagram, transcription spelling,
 * and any future text-input activity type).
 * @param {string} str
 * @returns {string}
 */
export function normalizeForCompare(str) {
  return str.trim().toLowerCase();
}

// Every storageGet/storageSet key is namespaced under this prefix.
// PRESERVED EXACTLY from engine/openResponse.js's own pre-existing
// `qusaiEnglish:openResponse:<id>` key scheme (its local storageKey()
// built that string as `` `qusaiEnglish:openResponse:${id}` ``) — so
// swapping openResponse.js over to storageGet/storageSet with a
// `openResponse:<id>` sub-key reproduces byte-identical keys and no
// already-saved student draft becomes unreachable after the refactor.
export const STORAGE_PREFIX = "qusaiEnglish:";

/**
 * Reads a value from localStorage under STORAGE_PREFIX + key. Fails soft
 * (returns null) if localStorage is unavailable, the key doesn't exist,
 * or a read throws (e.g. disabled storage, private-browsing restrictions)
 * — callers decide their own fallback value, since "no draft yet" and
 * "storage broken" both simply mean null here.
 * @param {string} key
 * @returns {string | null}
 */
export function storageGet(key) {
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + key);
  } catch {
    return null;
  }
}

/**
 * Writes a value to localStorage under STORAGE_PREFIX + key. Fails soft
 * and reports success/failure via the return value rather than throwing,
 * so callers can show a "couldn't save" status instead of crashing the
 * activity render.
 * @param {string} key
 * @param {string} value
 * @returns {boolean} whether the write succeeded
 */
export function storageSet(key, value) {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns a new array with the same elements in randomized order
 * (Fisher-Yates). Does not mutate the input array.
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
