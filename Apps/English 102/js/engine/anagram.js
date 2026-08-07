// js/engine/anagram.js
//
// Renders a single `anagram` activity: { type:"anagram", id, jumbled,
// definition, correctAnswer }. `jumbled` is a scrambled letter string with
// no spaces; `definition` is the clue (verbatim/near-verbatim Word List
// definitions for the word the student must unscramble).
//
// Contract (shared by every engine/*.js module per IMPLEMENTATION_PLAN.md
// Phase 3): export a render(container, activityData, onAnswered) function
// that draws the UI into `container`, grades on submit, shows
// correct/incorrect feedback via icon + text (never color alone — 8.2),
// and calls onAnswered(activityData.id, isCorrect) exactly once per
// attempt so js/state.js (Phase 4) can record it. Grading is locked after
// one attempt per activity, matching state.js's planned one-record-per-id
// shape — this module does not offer a "try again" reset.
//
// Interaction (per plan §3.5): a plain text input, not a click-based
// widget like the other engine modules so far — the student types the
// unscrambled word. Grading is case-insensitive and trims surrounding
// whitespace. Pressing Enter in the input is treated the same as clicking
// "Check answer" (a text-input-specific convenience the click-based
// modules don't need).
//
// String comparison uses the shared normalizeForCompare() helper from
// utils/helpers.js (plan §3.12) — trims whitespace and lowercases, for
// case-insensitive/whitespace-insensitive answer comparison. This module
// previously carried a local TEMPORARY duplicate of that logic pending
// 3.12; now that helpers.js is built and verified, it imports the shared
// version instead (swap logged in TRACKER.md's 3.12 entry).
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback/explanation` classes reused here)
// plus an `.anagram` block: `.anagram__jumbled`, `.anagram__definition`,
// `.anagram__input`, and the shared `.is-correct`/`.is-incorrect` state
// modifiers.

import { normalizeForCompare } from "../utils/helpers.js";

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   jumbled: string,
 *   definition: string,
 *   correctAnswer: string
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--anagram";
  card.dataset.activityId = activity.id;

  const jumbled = document.createElement("p");
  jumbled.className = "anagram__jumbled";
  jumbled.textContent = activity.jumbled;
  card.appendChild(jumbled);

  const definition = document.createElement("p");
  definition.className = "anagram__definition";
  definition.textContent = activity.definition;
  card.appendChild(definition);

  const inputId = `${activity.id}-input`;

  const label = document.createElement("label");
  label.className = "anagram__label";
  label.setAttribute("for", inputId);
  label.textContent = "Your answer";
  card.appendChild(label);

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.className = "anagram__input";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;
  card.appendChild(input);

  const hint = document.createElement("p");
  hint.className = "activity__hint";
  hint.setAttribute("role", "status");
  hint.setAttribute("aria-live", "polite");
  hint.hidden = true;

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "btn btn--check";
  checkButton.textContent = "Check answer";

  const feedback = document.createElement("p");
  feedback.className = "activity__feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  feedback.hidden = true;

  let answered = false;

  function checkAnswer() {
    if (answered) return;

    if (normalizeForCompare(input.value) === "") {
      hint.hidden = false;
      hint.textContent = "Type your answer first.";
      return;
    }
    hint.hidden = true;

    const isCorrect = normalizeForCompare(input.value) === normalizeForCompare(activity.correctAnswer);
    answered = true;

    input.disabled = true;
    input.classList.add(isCorrect ? "is-correct" : "is-incorrect");

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correctAnswer}".`;

    checkButton.disabled = true;
    onAnswered(activity.id, isCorrect);
  }

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      checkAnswer();
    }
  });

  input.addEventListener("input", () => {
    if (!answered) hint.hidden = true;
  });

  checkButton.addEventListener("click", checkAnswer);

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(feedback);

  container.appendChild(card);
}
