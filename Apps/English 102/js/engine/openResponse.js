// js/engine/openResponse.js
//
// Renders a single `openResponse` activity: { type:"openResponse", id,
// prompt, guidance? }. Used for every Speaking and Writing activity in all
// three units (offline team-discussion prompts and paragraph-writing
// tasks) -- per IMPLEMENTATION_PLAN.md Section 0, these are inherently
// open-ended and are explicitly NOT auto-graded.
//
// Contract (shared by every engine/*.js module per IMPLEMENTATION_PLAN.md
// Phase 3): export a render(container, activityData, onAnswered) function
// that draws the UI into `container` and calls
// onAnswered(activityData.id, isCorrect) so js/state.js (Phase 4) can
// record it. **This module deliberately deviates from the rest of that
// contract in two ways -- flagged here for whoever builds state.js (4.1),
// since it doesn't exist yet:**
//   1. There is no right/wrong to grade, so `isCorrect` here really means
//      "has the student saved a non-empty response" -- it becomes true
//      once content exists and is not re-fired false if the student later
//      clears the textarea (state.js should treat this as an "attempted"
//      signal for completion %, not a pass/fail score).
//   2. onAnswered can fire MORE THAN ONCE per activity -- once per
//      autosave that lands with non-empty content -- unlike every other
//      module's "exactly once per attempt" contract. This module never
//      locks its textarea the way graded modules lock after one attempt,
//      since open-ended writing is meant to be revisited and revised
//      across a session (and across page reloads -- see the persistence
//      note below).
//
// Interaction (per plan section 3.11): a plain textarea, autosaved to
// localStorage on input after a short debounce (so every keystroke isn't
// a separate storage write), plus a live word count and a "Saved" status
// indicator. No submit/check button and no grading UI at all -- nothing
// blocks the student from leaving content empty.
//
// Persistence: on mount, any previously saved draft for this activity id
// is loaded back into the textarea (this is how the app's "progress
// persists across a page reload" requirement is met for open-ended
// activities, since there's no correct/incorrect state to restore).
//
// Debounce + flush: a pending autosave is flushed early (bypassing the
// debounce wait) on the textarea losing focus (`blur`) and on the window
// `beforeunload` event, so a student who clicks away or closes the tab
// mid-pause doesn't lose their last few keystrokes. The `beforeunload`
// listener is intentionally never removed -- this project's engine
// modules have no unmount hook, but `beforeunload` only ever fires once,
// when the whole page actually closes/reloads (this app's internal
// hash-route navigation does not trigger it), so listeners accumulated
// across many rendered activities in one session sit inert until then
// and all fire harmlessly together at that point.
//
// Reads/writes go through the shared storageGet()/storageSet() wrapper
// from utils/helpers.js (plan section 3.12) rather than touching
// window.localStorage directly. This module previously read/wrote
// localStorage directly under a `qusaiEnglish:openResponse:<id>` key as a
// TEMPORARY measure pending 3.12; now that helpers.js is built and
// verified, it calls storageGet/storageSet with an `openResponse:<id>`
// sub-key instead -- helpers.js's STORAGE_PREFIX ("qusaiEnglish:")
// reproduces the exact same raw key
// (`qusaiEnglish:openResponse:<id>`, confirmed byte-identical in
// helpers.js's own browser test suite), so no already-saved student
// draft is orphaned by this swap. Key naming still awaits reconciliation
// with however js/state.js (4.1, not yet built) ends up namespacing its
// own keys -- noted here so it isn't missed.
//
// Shared class-naming convention: `.activity`/`.activity--openresponse`
// (no `.activity__hint`/`.activity__feedback` -- there's nothing to grade
// or validate before saving) plus an `.openresponse` block:
// `.openresponse__prompt`, `.openresponse__guidance`,
// `.openresponse__label`, `.openresponse__textarea`, `.openresponse__meta`,
// `.openresponse__count`, `.openresponse__status`, and the shared
// `.is-correct`/`.is-incorrect` modifiers reused here for the save-status
// indicator (correct = saved fine, incorrect = save failed) rather than
// for any answer grading.

import { storageGet, storageSet } from "../utils/helpers.js";

const AUTOSAVE_DEBOUNCE_MS = 600;

function draftKey(id) {
  return `openResponse:${id}`;
}

/**
 * Reads a previously saved draft for this activity id. storageGet()
 * already fails soft and returns null for a missing/broken read; this
 * wrapper just supplies the "" fallback this module's callers expect.
 * @param {string} id
 * @returns {string}
 */
function loadSaved(id) {
  return storageGet(draftKey(id)) ?? "";
}

/**
 * @param {string} id
 * @param {string} value
 * @returns {boolean} whether the write succeeded
 */
function saveDraft(id, value) {
  return storageSet(draftKey(id), value);
}

/**
 * @param {string} text
 * @returns {number}
 */
function countWords(text) {
  const trimmed = text.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, prompt: string, guidance?: string }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--openresponse";
  card.dataset.activityId = activity.id;

  const prompt = document.createElement("p");
  prompt.className = "openresponse__prompt";
  prompt.textContent = activity.prompt;
  card.appendChild(prompt);

  if (activity.guidance) {
    const guidance = document.createElement("div");
    guidance.className = "openresponse__guidance";
    activity.guidance
      .split("\n")
      .filter((line) => line.trim() !== "")
      .forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        guidance.appendChild(p);
      });
    card.appendChild(guidance);
  }

  const textareaId = `${activity.id}-textarea`;

  const label = document.createElement("label");
  label.className = "openresponse__label";
  label.setAttribute("for", textareaId);
  label.textContent = "Your response";
  card.appendChild(label);

  const textarea = document.createElement("textarea");
  textarea.id = textareaId;
  textarea.className = "openresponse__textarea";
  textarea.rows = 8;
  const initialValue = loadSaved(activity.id);
  textarea.value = initialValue;
  card.appendChild(textarea);

  const meta = document.createElement("div");
  meta.className = "openresponse__meta";

  const count = document.createElement("span");
  count.className = "openresponse__count";
  meta.appendChild(count);

  const status = document.createElement("span");
  status.className = "openresponse__status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.hidden = true;
  meta.appendChild(status);

  card.appendChild(meta);
  container.appendChild(card);

  function updateWordCount() {
    const n = countWords(textarea.value);
    count.textContent = n === 1 ? "1 word" : `${n} words`;
  }

  function setStatus(message, icon, cls) {
    if (!message) {
      status.hidden = true;
      status.innerHTML = "";
      status.className = "openresponse__status";
      return;
    }
    status.hidden = false;
    status.className = "openresponse__status";
    if (cls) status.classList.add(cls);
    status.innerHTML = icon
      ? `<span aria-hidden="true">${icon}</span> ${message}`
      : message;
  }

  let saveTimer = null;

  function doSave() {
    const value = textarea.value;
    const ok = saveDraft(activity.id, value);
    if (!ok) {
      setStatus(
        "Couldn't save \u2014 your browser storage may be full or disabled.",
        "\u2717",
        "is-incorrect"
      );
      return;
    }
    const nonEmpty = value.trim() !== "";
    if (nonEmpty) {
      setStatus("Saved", "\u2713", "is-correct");
      onAnswered(activity.id, true);
    } else {
      setStatus(null);
    }
  }

  function flushSave() {
    if (saveTimer !== null) {
      clearTimeout(saveTimer);
      saveTimer = null;
      doSave();
    }
  }

  updateWordCount();
  if (initialValue.trim() !== "") setStatus("Saved", "\u2713", "is-correct");

  textarea.addEventListener("input", () => {
    updateWordCount();
    if (saveTimer !== null) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveTimer = null;
      doSave();
    }, AUTOSAVE_DEBOUNCE_MS);
  });

  textarea.addEventListener("blur", flushSave);
  window.addEventListener("beforeunload", flushSave);
}
