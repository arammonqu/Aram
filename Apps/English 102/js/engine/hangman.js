// js/engine/hangman.js
//
// Renders a single `hangman` activity: { type:"hangman", id, clue,
// correctAnswer }. Reused for every "Hangman"/guess-the-word-from-
// definition activity across Units 1 and 2 (Unit 1 Vocab Act. 3, Unit 2
// Vocab Act. 3) — the same minimal shape IMPLEMENTATION_PLAN.md §2
// specifies, and the only shape any real hangman activity in the data
// uses. Like fillBlank.js, deliberately does NOT add explanation/group
// field support since neither appears in the plan's documented hangman
// shape nor in any of the 13 real hangman activities across both units.
//
// Contract (shared by every engine/*.js module per IMPLEMENTATION_PLAN.md
// Phase 3): export a render(container, activityData, onAnswered) function
// that draws the UI into `container`, grades live (per plan §3 — this
// type is explicitly the one "live" exception to the submit-button
// pattern used by 3.1-3.5, since a letter-guess game has no single
// "submit" moment), shows correct/incorrect feedback via icon + text
// (never color alone — 8.2), and calls onAnswered(activityData.id,
// isCorrect) exactly once per attempt so js/state.js (Phase 4) can record
// it. Once the game ends (win, or 6 wrong guesses used up), every
// remaining letter button is disabled — matching every other module's
// "no try-again reset" convention, just triggered by the game's own end
// condition instead of a Check button.
//
// Interaction: classic single-word hangman. The word's letters render as
// blanks; the student clicks an on-screen A-Z letter button to guess.
// A correct guess reveals every occurrence of that letter at once
// (repeated letters — e.g. "administration"'s three i's — all reveal
// together, the standard hangman rule, not a per-position guess).
// Incorrect guesses count against a fixed budget of 6 (matching the 6
// classic gallows stages: head, body, both arms, both legs) and reveal
// the next stage of an inline SVG hangman figure. The game ends in a win
// once every letter in the word has been revealed, or a loss once the
// 6th wrong guess is made — the word is then revealed in full, marking
// any letters the student never got to guess as `.is-revealed` rather
// than `.is-correct`/`.is-incorrect`, since the student didn't actually
// guess them (mirrors fillBlank.js/mcq.js always showing the correct
// answer even when the student didn't pick it). Letter buttons are plain
// <button> elements, so Tab+Enter/Space keyboard navigation works
// natively — no custom keydown handler needed (unlike anagram.js's
// Enter-to-submit convenience, which exists only because that module's
// single text input needs one; a 26-button keyboard has no single field
// to attach that convenience to, and native button activation already
// covers it).
//
// The SVG hangman figure is marked aria-hidden (decorative) since it's a
// visual flourish, not a second source of truth — the meaningful game
// state (wrong guesses left, which letters were right/wrong, final
// win/loss) is always separately available as text, per 8.2's icon+text-
// not-color-alone rule.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__feedback` classes reused here) plus a
// `.hangman` block: `.hangman__clue`, `.hangman__figure` (wraps the SVG),
// `.hangman__part` (each starts with a `hidden` attribute, removed to
// reveal it — same show/hide mechanism as `.activity__hint`/`__feedback`
// elsewhere, not a separate visibility class), `.hangman__word`,
// `.hangman__letter` (+ `.is-revealed` for loss-only reveals),
// `.hangman__status`, `.hangman__keyboard`, `.hangman__key` (+
// `.is-correct`/`.is-incorrect` once guessed), and the shared
// `.is-correct`/`.is-incorrect` state modifiers on `.activity__feedback`.

const MAX_WRONG_GUESSES = 6;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const SVG_NS = "http://www.w3.org/2000/svg";

// SVG parts revealed one at a time as wrong guesses accumulate, in the
// classic order: head, body, left arm, right arm, left leg, right leg.
const HANGMAN_PARTS = [
  { name: "head", tag: "circle", attrs: { cx: "60", cy: "35", r: "10" } },
  { name: "body", tag: "line", attrs: { x1: "60", y1: "45", x2: "60", y2: "80" } },
  { name: "arm-left", tag: "line", attrs: { x1: "60", y1: "55", x2: "42", y2: "70" } },
  { name: "arm-right", tag: "line", attrs: { x1: "60", y1: "55", x2: "78", y2: "70" } },
  { name: "leg-left", tag: "line", attrs: { x1: "60", y1: "80", x2: "45", y2: "105" } },
  { name: "leg-right", tag: "line", attrs: { x1: "60", y1: "80", x2: "75", y2: "105" } }
];

function createSvgElement(tag, attrs) {
  const el = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, clue: string, correctAnswer: string }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const word = activity.correctAnswer.toLowerCase();

  const card = document.createElement("div");
  card.className = "activity activity--hangman";
  card.dataset.activityId = activity.id;

  const clue = document.createElement("p");
  clue.className = "hangman__clue";
  clue.textContent = activity.clue;
  card.appendChild(clue);

  // --- Hangman figure: gallows always drawn, body parts start hidden ---
  const figureWrap = document.createElement("div");
  figureWrap.className = "hangman__figure";
  figureWrap.setAttribute("aria-hidden", "true");

  const svg = createSvgElement("svg", { viewBox: "0 0 100 120", class: "hangman__svg" });
  const gallows = createSvgElement("polyline", {
    class: "hangman__gallows",
    points: "10,115 10,10 60,10 60,25",
    fill: "none"
  });
  svg.appendChild(gallows);

  const partElements = HANGMAN_PARTS.map((part) => {
    const el = createSvgElement(part.tag, part.attrs);
    el.classList.add("hangman__part", `hangman__part--${part.name}`);
    el.setAttribute("hidden", "");
    svg.appendChild(el);
    return el;
  });

  figureWrap.appendChild(svg);
  card.appendChild(figureWrap);

  // --- Word display ---
  const wordDisplay = document.createElement("p");
  wordDisplay.className = "hangman__word";

  const letterSpans = word.split("").map((char) => {
    const span = document.createElement("span");
    span.className = "hangman__letter";
    span.textContent = /[a-z]/.test(char) ? "_" : char;
    wordDisplay.appendChild(span);
    return span;
  });

  card.appendChild(wordDisplay);

  // --- Status (wrong guesses remaining) ---
  const status = document.createElement("p");
  status.className = "hangman__status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.textContent = `${MAX_WRONG_GUESSES} wrong guesses allowed.`;
  card.appendChild(status);

  // --- Letter keyboard ---
  const keyboard = document.createElement("div");
  keyboard.className = "hangman__keyboard";
  keyboard.setAttribute("role", "group");
  keyboard.setAttribute("aria-label", "Guess a letter");

  const feedback = document.createElement("p");
  feedback.className = "activity__feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  feedback.hidden = true;

  const guessedLetters = new Set();
  const remainingLetters = new Set(word.split("").filter((ch) => /[a-z]/.test(ch)));
  let wrongGuesses = 0;
  let gameOver = false;

  function endGame(isCorrect) {
    gameOver = true;
    status.hidden = true;

    if (!isCorrect) {
      // Reveal any letters the student never got to guess, distinguishing
      // them from letters the student actually guessed correctly.
      word.split("").forEach((char, index) => {
        if (/[a-z]/.test(char) && letterSpans[index].textContent === "_") {
          letterSpans[index].textContent = char;
          letterSpans[index].classList.add("is-revealed");
        }
      });
    }

    buttons.forEach((button) => {
      if (!button.disabled) button.disabled = true;
    });

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correctAnswer}".`;

    onAnswered(activity.id, isCorrect);
  }

  function handleGuess(letter, button) {
    if (gameOver || guessedLetters.has(letter)) return;
    guessedLetters.add(letter);
    button.disabled = true;

    if (remainingLetters.has(letter)) {
      word.split("").forEach((char, index) => {
        if (char === letter) letterSpans[index].textContent = letter;
      });
      remainingLetters.delete(letter);
      button.classList.add("is-correct");
      button.textContent = `${letter.toUpperCase()} \u2713`;

      if (remainingLetters.size === 0) endGame(true);
    } else {
      button.classList.add("is-incorrect");
      button.textContent = `${letter.toUpperCase()} \u2717`;
      partElements[wrongGuesses].removeAttribute("hidden");
      wrongGuesses += 1;

      if (wrongGuesses >= MAX_WRONG_GUESSES) {
        endGame(false);
      } else {
        status.textContent = `${MAX_WRONG_GUESSES - wrongGuesses} wrong guesses left.`;
      }
    }
  }

  const buttons = ALPHABET.map((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hangman__key";
    button.textContent = letter.toUpperCase();
    button.dataset.letter = letter;
    button.addEventListener("click", () => handleGuess(letter, button));
    keyboard.appendChild(button);
    return button;
  });

  card.appendChild(keyboard);
  card.appendChild(feedback);

  container.appendChild(card);
}
