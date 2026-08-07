// js/engine/transcriptionSpelling.js
//
// Renders a single `transcriptionSpelling` activity: { type, id, ipa,
// correctSpelling }. Used for Unit 1 Pronunciation Activity 3 (16 items,
// the only real activity of this type in the data so far — Units 2/3
// haven't been assembled into the live UI yet, but this module is built
// generically per the plan's minimal shape, not tailored to those 16).
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
// Interaction: per plan §3.9 ("shows IPA, text input for spelling,
// normalized compare") — the mirror image of phoneticSymbol.js: here the
// IPA transcription is the given, and the student types the English
// spelling (not a symbol), so it reuses anagram.js's plain-text-input
// pattern rather than phoneticSymbol.js's slash-framed input + symbol
// picker (there is no symbol picker for spelling out an English word —
// the student's own keyboard is all they need). Grading is
// case-insensitive and trims surrounding whitespace via the shared
// normalizeForCompare() helper from utils/helpers.js, same as
// anagram.js's own comparison. Pressing Enter in the input grades the
// same as clicking "Check answer," matching anagram.js's convenience.
//
// Deliberately did not add an on-screen picker of any kind (unlike
// phoneticSymbol.js) since the student is producing ordinary English
// spelling here, not an IPA symbol string — a picker would add nothing a
// standard keyboard doesn't already provide.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback` classes reused here) plus a
// `.transcriptionSpelling` block: `.transcriptionSpelling__ipa`,
// `.transcriptionSpelling__label`, `.transcriptionSpelling__input`
// (+ `.is-correct`/`.is-incorrect` after grading, same convention as
// anagram.js's and phoneticSymbol.js's inputs).

// String comparison uses the shared normalizeForCompare() helper from
// utils/helpers.js (plan §3.12) — same case-insensitive/whitespace-
// insensitive comparison anagram.js's word-guess grading uses. This
// module previously carried a local TEMPORARY duplicate of that logic
// pending 3.12; now that helpers.js is built and verified, it imports
// the shared version instead, same as anagram.js (swap logged in
// TRACKER.md's 3.12 entry).

import { normalizeForCompare } from "../utils/helpers.js";

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, ipa: string, correctSpelling: string }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--transcriptionSpelling";
  card.dataset.activityId = activity.id;

  const ipaEl = document.createElement("p");
  ipaEl.className = "transcriptionSpelling__ipa";
  ipaEl.textContent = activity.ipa;
  
  let currentAudio = null;
  const playBtn = document.createElement("button");
  playBtn.type = "button";
  playBtn.className = "play-audio-btn";
  playBtn.setAttribute("aria-label", `Listen to ${activity.correctSpelling}`);
  playBtn.innerHTML = "🔊";
  playBtn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`assets/audio/words/${activity.correctSpelling.toLowerCase()}.mp3`);
    currentAudio.play().catch(err => console.error('Audio play failed:', err));
  });
  ipaEl.appendChild(playBtn);

  card.appendChild(ipaEl);

  const inputId = `${activity.id}-input`;

  const label = document.createElement("label");
  label.className = "transcriptionSpelling__label";
  label.setAttribute("for", inputId);
  label.textContent = "Spell the word";
  card.appendChild(label);

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.className = "transcriptionSpelling__input";
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

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "btn btn--secondary";
  editButton.textContent = "Edit answer";
  editButton.hidden = true;
  editButton.style.marginInlineStart = "var(--space-sm)";
  
  editButton.addEventListener("click", () => {
    answered = false;
    editButton.hidden = true;
    checkButton.hidden = false;
    checkButton.disabled = false;
    
    input.disabled = false;
    input.classList.remove("is-correct", "is-incorrect");
    
    feedback.hidden = true;
    feedback.className = "activity__feedback";
  });

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

    const isCorrect = normalizeForCompare(input.value) === normalizeForCompare(activity.correctSpelling);
    answered = true;

    input.disabled = true;
    input.classList.add(isCorrect ? "is-correct" : "is-incorrect");

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correctSpelling}".`;

    if (isCorrect) {
      checkButton.disabled = true;
    } else {
      checkButton.hidden = true;
      editButton.hidden = false;
    }
    
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
  card.appendChild(editButton);
  card.appendChild(feedback);

  container.appendChild(card);
}
