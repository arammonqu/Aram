// js/engine/fillBlank.js
//
// Renders a single `fillBlank` activity: { type:"fillBlank", id, sentence,
// wordBank:[...], correctAnswer } (default mode:"wordBank", a shared word
// bank across sibling "Complete the Sentences" activities) or
// { type:"fillBlank", id, mode:"options", sentence, options:[...],
// correctAnswer } (2-3 per-blank choices, no shared bank — Units 2-3's
// "circle the correct form" grammar activities). `sentence` contains
// exactly one "___" placeholder marking the blank's position.
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
// Interaction: the word bank/options are shown as clickable chips (per
// plan §3.4). Click a chip to fill it into the blank (shown inline in the
// sentence); click the same chip again to clear the blank; click a
// different chip to swap the selection — only one chip can be "in" the
// single blank at a time. Mirrors the click-to-select button pattern
// established in engine/matching.js (aria-pressed toggle buttons) rather
// than mcq.js/trueFalse.js's radiogroup, since chips aren't mutually
// exclusive alternatives of *each other* so much as candidates for one
// slot — but grading/lock/feedback conventions are identical to every
// other engine module.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback/explanation` classes reused here)
// plus a `.fillblank` block: `.fillblank__sentence`, `.fillblank__blank`
// (the inline slot, `.is-filled` when a chip is selected), `.fillblank__bank`,
// `.fillblank__chip`, and the shared `.is-selected`/`.is-correct`/
// `.is-incorrect` state modifiers.

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   sentence: string,
 *   mode?: "wordBank" | "options",
 *   wordBank?: string[],
 *   options?: string[],
 *   correctAnswer: string
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--fillblank";
  card.dataset.activityId = activity.id;

  const choices = activity.mode === "options" ? activity.options : activity.wordBank;

  const blankIndex = activity.sentence.indexOf("___");
  const before = blankIndex === -1 ? activity.sentence : activity.sentence.slice(0, blankIndex);
  const after = blankIndex === -1 ? "" : activity.sentence.slice(blankIndex + 3);

  const sentenceEl = document.createElement("p");
  sentenceEl.className = "fillblank__sentence";

  sentenceEl.appendChild(document.createTextNode(before));

  const blank = document.createElement("span");
  blank.className = "fillblank__blank";
  blank.setAttribute("aria-live", "polite");
  blank.textContent = "\u2003\u2003\u2003";

  sentenceEl.appendChild(blank);
  sentenceEl.appendChild(document.createTextNode(after));
  card.appendChild(sentenceEl);

  const bank = document.createElement("div");
  bank.className = "fillblank__bank";
  bank.setAttribute("role", "group");
  bank.setAttribute("aria-label", "Word choices");

  const chips = [];
  let selectedChip = null;
  let answered = false;

  function selectChip(chip) {
    if (selectedChip === chip) {
      // Clicking the already-selected chip clears the blank.
      chip.classList.remove("is-selected");
      chip.setAttribute("aria-pressed", "false");
      selectedChip = null;
      blank.textContent = "\u2003\u2003\u2003";
      blank.classList.remove("is-filled");
      return;
    }

    if (selectedChip) {
      selectedChip.classList.remove("is-selected");
      selectedChip.setAttribute("aria-pressed", "false");
    }

    chip.classList.add("is-selected");
    chip.setAttribute("aria-pressed", "true");
    selectedChip = chip;
    blank.textContent = chip.textContent;
    blank.classList.add("is-filled");
  }

  choices.forEach((choiceText) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "fillblank__chip";
    chip.setAttribute("aria-pressed", "false");
    chip.textContent = choiceText;
    chip.addEventListener("click", () => {
      if (answered) return;
      hint.hidden = true;
      selectChip(chip);
    });
    bank.appendChild(chip);
    chips.push(chip);
  });

  card.appendChild(bank);

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
    
    chips.forEach((chip) => {
      chip.disabled = false;
      chip.classList.remove("is-correct", "is-incorrect");
    });
    
    blank.classList.remove("is-correct", "is-incorrect");
    
    feedback.hidden = true;
    feedback.className = "activity__feedback";
  });

  const feedback = document.createElement("p");
  feedback.className = "activity__feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  feedback.hidden = true;

  checkButton.addEventListener("click", () => {
    if (answered) return;

    if (!selectedChip) {
      hint.hidden = false;
      hint.textContent = "Choose a word first.";
      return;
    }
    hint.hidden = true;

    const selectedText = selectedChip.textContent;
    const isCorrect = selectedText === activity.correctAnswer;
    answered = true;

    chips.forEach((chip) => {
      chip.disabled = true;
      if (chip.textContent === activity.correctAnswer) {
        chip.classList.add("is-correct");
      } else if (chip === selectedChip) {
        chip.classList.add("is-incorrect");
      }
    });

    blank.classList.add(isCorrect ? "is-correct" : "is-incorrect");

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correctAnswer}".`;

    if (isCorrect) {
      checkButton.disabled = true;
    } else {
      checkButton.hidden = true;
      editButton.hidden = false;
    }
    onAnswered(activity.id, isCorrect);
  });

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(editButton);
  card.appendChild(feedback);

  container.appendChild(card);
}
