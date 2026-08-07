// js/engine/dialogueFillBlank.js
//
// Renders a single `dialogueFillBlank` activity: { type:"dialogueFillBlank",
// id, title?, instructions?, wordBank:[...], lines:[{speaker, text}],
// blanks:[{id, correctAnswer}] }. `text` contains inline placeholders like
// "{{b1}}" referencing `blanks[].id`. The only real activity of this type
// is Unit 1 Grammar Activity 2 (Fatima/Ms. Miller, 12 blanks, 6-word bank,
// "you may use some verbs more than once") — this module is built to that
// real shape (per plan §2.1) rather than a hypothetical generic one, since
// it's the only consumer.
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
// Interaction: deliberately does NOT reuse fillBlank.js's click-to-fill-
// active-chip pattern. That pattern assumes one blank at a time; here
// there are 12 simultaneous blanks sharing one word bank where words are
// explicitly reused ("you may use some verbs more than once" — several
// blanks share the same correct answer), so a single shared chip pool
// with an "active blank" concept would need extra state and extra
// instructions just to be usable, and would still need custom ARIA to
// stay keyboard-accessible across that many targets. Instead each blank
// gets its own native <select> populated with a copy of the full word
// bank (in the data's given order): selects are fully keyboard-navigable
// with zero custom ARIA, and word reuse falls out for free since every
// select owns an independent option list. The full word bank is also
// rendered once at the top as an inert, non-interactive reference list
// (chip-styled to visually match fillBlank.js's bank, but not clickable),
// since the activity's own instructions text explicitly says "fill in the
// blanks with the correct verb from the list below."
//
// Grading: one onAnswered call for the whole activity (matching.js's and
// vowelTickbox.js's whole-activity-correctness convention, needed here
// for the same reason — one activity id, many sub-answers): correct only
// if every blank's selected value exactly equals that blank's
// correctAnswer. Submit is blocked with a hint until every select has a
// real value chosen (still allows an all-wrong attempt through, same as
// every other module — it only guards against blanks silently left at
// the placeholder). Per-blank icon+text feedback naming the correct
// answer is shown under the dialogue when wrong, plus a summary line
// ("N of M blanks correct"), the same dual whole-grade-plus-per-item-
// feedback pattern matching.js/vowelTickbox.js established. Deliberately
// skipped explanation/group field support, same reasoning as every other
// module that lacks it: neither field is in this type's plan shape nor
// in the one real activity of this type.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__title/instructions/hint/feedback` classes
// reused here) plus a `.dialogueFillBlank` block (camelCase, matching the
// naming already used for `.vowelTickbox`/`.diphthongMatch`/
// `.transcriptionSpelling`'s block+element names rather than the
// lowercase-block group): `.dialogueFillBlank__wordBank` (+ `__wordBankItem`,
// inert reference chips), `.dialogueFillBlank__line` (+ `__speaker`,
// `__text`), `.dialogueFillBlank__blank` (the inline <select>,
// `.is-correct`/`.is-incorrect` after grading, same state-class
// convention as every other module's inputs), `.dialogueFillBlank__blankFeedback`
// (per-blank icon+text row shown only when that blank was wrong),
// `.dialogueFillBlank__summary`.

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   title?: string,
 *   instructions?: string,
 *   wordBank: string[],
 *   lines: { speaker: string, text: string }[],
 *   blanks: { id: string, correctAnswer: string }[]
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--dialogueFillBlank";
  card.dataset.activityId = activity.id;

  if (activity.title) {
    const title = document.createElement("h3");
    title.className = "activity__title";
    title.textContent = activity.title;
    card.appendChild(title);
  }

  if (activity.instructions) {
    const instructions = document.createElement("p");
    instructions.className = "activity__instructions";
    instructions.textContent = activity.instructions;
    card.appendChild(instructions);
  }

  // Inert reference list of the shared word bank — not interactive, just
  // there for the "list below" the instructions text points to.
  const bankRef = document.createElement("div");
  bankRef.className = "dialogueFillBlank__wordBank";
  bankRef.setAttribute("aria-hidden", "true");
  activity.wordBank.forEach((word) => {
    const item = document.createElement("span");
    item.className = "dialogueFillBlank__wordBankItem";
    item.textContent = word;
    bankRef.appendChild(item);
  });
  card.appendChild(bankRef);

  const blanksById = new Map(activity.blanks.map((b) => [b.id, b]));
  const selectsById = new Map();

  const dialogue = document.createElement("div");
  dialogue.className = "dialogueFillBlank__dialogue";

  const placeholderPattern = /\{\{(\w+)\}\}/g;

  activity.lines.forEach((line) => {
    const lineEl = document.createElement("p");
    lineEl.className = "dialogueFillBlank__line";

    const speaker = document.createElement("span");
    speaker.className = "dialogueFillBlank__speaker";
    speaker.textContent = `${line.speaker}: `;
    lineEl.appendChild(speaker);

    const textSpan = document.createElement("span");
    textSpan.className = "dialogueFillBlank__text";

    let lastIndex = 0;
    let match;
    placeholderPattern.lastIndex = 0;
    while ((match = placeholderPattern.exec(line.text)) !== null) {
      const before = line.text.slice(lastIndex, match.index);
      if (before) textSpan.appendChild(document.createTextNode(before));

      const blankId = match[1];
      const blankData = blanksById.get(blankId);

      const select = document.createElement("select");
      select.className = "dialogueFillBlank__blank";
      select.setAttribute("aria-label", `Blank ${blankId}`);
      select.dataset.blankId = blankId;

      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = "\u2014 choose \u2014";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      select.appendChild(placeholderOption);

      activity.wordBank.forEach((word) => {
        const option = document.createElement("option");
        option.value = word;
        option.textContent = word;
        select.appendChild(option);
      });

      select.addEventListener("change", () => {
        hint.hidden = true;
      });

      textSpan.appendChild(select);
      if (blankData) selectsById.set(blankId, select);

      lastIndex = placeholderPattern.lastIndex;
    }

    const rest = line.text.slice(lastIndex);
    if (rest) textSpan.appendChild(document.createTextNode(rest));

    lineEl.appendChild(textSpan);
    dialogue.appendChild(lineEl);
  });

  card.appendChild(dialogue);

  const hint = document.createElement("p");
  hint.className = "activity__hint";
  hint.setAttribute("role", "status");
  hint.setAttribute("aria-live", "polite");
  hint.hidden = true;

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "btn btn--check";
  checkButton.textContent = "Check answers";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "btn btn--secondary";
  editButton.textContent = "Edit answers";
  editButton.hidden = true;
  editButton.style.marginInlineStart = "var(--space-sm)";
  
  editButton.addEventListener("click", () => {
    answered = false;
    editButton.hidden = true;
    checkButton.hidden = false;
    checkButton.disabled = false;
    
    summary.hidden = true;
    summary.className = "activity__feedback dialogueFillBlank__summary";
    
    activity.blanks.forEach((b) => {
      const select = selectsById.get(b.id);
      select.disabled = false;
      select.classList.remove("is-correct", "is-incorrect");
      
      const feedback = select.nextElementSibling;
      if (feedback && feedback.classList.contains("dialogueFillBlank__blankFeedback")) {
        feedback.remove();
      }
    });
  });

  const summary = document.createElement("p");
  summary.className = "activity__feedback dialogueFillBlank__summary";
  summary.setAttribute("role", "status");
  summary.setAttribute("aria-live", "polite");
  summary.hidden = true;

  let answered = false;

  checkButton.addEventListener("click", () => {
    if (answered) return;

    const anyUnfilled = activity.blanks.some((b) => {
      const select = selectsById.get(b.id);
      return !select || select.value === "";
    });
    if (anyUnfilled) {
      hint.hidden = false;
      hint.textContent = "Choose an answer for every blank first.";
      return;
    }
    hint.hidden = true;
    answered = true;

    let correctCount = 0;

    activity.blanks.forEach((b) => {
      const select = selectsById.get(b.id);
      select.disabled = true;
      const isCorrect = select.value === b.correctAnswer;
      if (isCorrect) {
        correctCount += 1;
        select.classList.add("is-correct");
      } else {
        select.classList.add("is-incorrect");

        const feedback = document.createElement("span");
        feedback.className = "dialogueFillBlank__blankFeedback is-incorrect";
        feedback.innerHTML = `<span aria-hidden="true">\u2717</span> correct: "${b.correctAnswer}"`;
        select.insertAdjacentElement("afterend", feedback);
      }
    });

    const allCorrect = correctCount === activity.blanks.length;

    summary.hidden = false;
    summary.classList.add(allCorrect ? "is-correct" : "is-incorrect");
    summary.innerHTML = allCorrect
      ? `<span aria-hidden="true">\u2713</span> All ${activity.blanks.length} of ${activity.blanks.length} correct.`
      : `<span aria-hidden="true">\u2717</span> ${correctCount} of ${activity.blanks.length} blanks correct.`;

    if (allCorrect) {
      checkButton.disabled = true;
    } else {
      checkButton.hidden = true;
      editButton.hidden = false;
    }
    onAnswered(activity.id, allCorrect);
  });

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(editButton);
  card.appendChild(summary);

  container.appendChild(card);
}
