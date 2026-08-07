// js/engine/phoneticSymbol.js
//
// Renders a single `phoneticSymbol` activity: { type:"phoneticSymbol", id,
// word, correctSymbol }. Reused for Unit 1 Pronunciation Activity 1 (13
// words, initial-consonant IPA symbol) — the only real activity of this
// type in the data, but built generically per the plan's minimal shape
// rather than tailored to those 13 items.
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
// Interaction: a text input flanked by static "/ /" slash markers (per
// plan §3.7 — a plain text input, same family as anagram.js, but paired
// with "an on-screen IPA symbol picker so students aren't blocked by
// keyboard limitations"). Clicking a picker button inserts that symbol at
// the input's current cursor position (not just appended to the end, so
// a student can fix a middle character of a multi-character answer like
// "/dʒ/" without retyping the whole thing) rather than acting as a
// single-choice selector — a student can type directly if their own
// keyboard supports IPA input, click picker buttons, or mix both. Pressing
// Enter in the input grades the same as clicking "Check answer", the same
// convenience anagram.js established for its own single text input.
// Grading strips whitespace and any stray leading/trailing "/" the
// student might type anyway (defensive — the UI already supplies the
// slashes as static framing, not part of the input's own value) and
// compares the remaining symbol exactly (case-sensitive; IPA transcription
// is not a natural-language spelling where case-folding makes sense).
//
// The picker's 24-symbol set is the standard English consonant phoneme
// inventory (/p b t d k g f v θ ð s z ʃ ʒ h m n ŋ l r j w tʃ dʒ/) — deliberately scoped to
// consonants only, matching this activity type's own plan description
// ("initial consonant IPA symbol"); vowel symbols belong to
// vowelTickbox.js (3.8) and diphthongMatch.js (3.10), which own those
// activity types instead. This covers every symbol used by all 13 real
// activities plus any future initial-consonant item, without pulling in
// vowel symbols this activity type never needs.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback` classes reused here) plus a
// `.phoneticsymbol` block: `.phoneticsymbol__word`, `.phoneticsymbol__label`,
// `.phoneticsymbol__answer` (wraps the slash markers + input),
// `.phoneticsymbol__input` (+ `.is-correct`/`.is-incorrect` on grading,
// same convention as anagram.js's input), `.phoneticsymbol__picker`,
// `.phoneticsymbol__key`.

const CONSONANT_SYMBOLS = [
  "p", "b", "t", "d", "k", "g",
  "f", "v", "\u03b8", "\u00f0", "s", "z",
  "\u0283", "\u0292", "h", "m", "n", "\u014b",
  "l", "r", "j", "w", "t\u0283", "d\u0292"
];

/**
 * Strips surrounding whitespace and any stray leading/trailing "/" marks
 * the student might type despite the UI already supplying them, so the
 * comparison is purely about the symbol itself.
 * @param {string} str
 * @returns {string}
 */
function normalizeSymbol(str) {
  return str.trim().replace(/^\/+|\/+$/g, "");
}

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, word: string, correctSymbol: string }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--phoneticsymbol";
  card.dataset.activityId = activity.id;

  const wordEl = document.createElement("p");
  wordEl.className = "phoneticsymbol__word";
  wordEl.textContent = activity.word;
  
  if (activity.audioSrc) {
    let currentAudio = null;
    const playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "play-audio-btn";
    playBtn.setAttribute("aria-label", `Listen to ${activity.word}`);
    playBtn.innerHTML = "🔊";
    playBtn.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(activity.audioSrc);
      currentAudio.play();
    });
    wordEl.appendChild(playBtn);
  }
  
  card.appendChild(wordEl);

  const inputId = `${activity.id}-input`;

  const label = document.createElement("label");
  label.className = "phoneticsymbol__label";
  label.setAttribute("for", inputId);
  label.textContent = "Symbol for the initial sound";
  card.appendChild(label);

  const answerWrap = document.createElement("div");
  answerWrap.className = "phoneticsymbol__answer";

  const slashBefore = document.createElement("span");
  slashBefore.className = "phoneticsymbol__slash";
  slashBefore.setAttribute("aria-hidden", "true");
  slashBefore.textContent = "/";

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.className = "phoneticsymbol__input";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;

  const slashAfter = document.createElement("span");
  slashAfter.className = "phoneticsymbol__slash";
  slashAfter.setAttribute("aria-hidden", "true");
  slashAfter.textContent = "/";

  answerWrap.appendChild(slashBefore);
  answerWrap.appendChild(input);
  answerWrap.appendChild(slashAfter);
  card.appendChild(answerWrap);

  const picker = document.createElement("div");
  picker.className = "phoneticsymbol__picker";
  picker.setAttribute("role", "group");
  picker.setAttribute("aria-label", "Insert an IPA symbol");

  const pickerButtons = CONSONANT_SYMBOLS.map((symbol) => {
    const key = document.createElement("button");
    key.type = "button";
    key.className = "phoneticsymbol__key";
    key.textContent = symbol;
    key.addEventListener("click", () => {
      if (answered) return;
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? input.value.length;
      input.value = input.value.slice(0, start) + symbol + input.value.slice(end);
      const newPos = start + symbol.length;
      input.focus();
      input.setSelectionRange(newPos, newPos);
      hint.hidden = true;
    });
    picker.appendChild(key);
    return key;
  });

  card.appendChild(picker);

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

    if (normalizeSymbol(input.value) === "") {
      hint.hidden = false;
      hint.textContent = "Type or pick a symbol first.";
      return;
    }
    hint.hidden = true;

    const isCorrect = normalizeSymbol(input.value) === normalizeSymbol(activity.correctSymbol);
    answered = true;

    input.disabled = true;
    input.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    pickerButtons.forEach((key) => {
      key.disabled = true;
    });

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correctSymbol}".`;

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
