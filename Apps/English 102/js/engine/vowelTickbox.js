// js/engine/vowelTickbox.js
//
// Renders a single `vowelTickbox` activity: { type:"vowelTickbox", id,
// instructions?, columns:[...12 IPA symbols], rows:[{word, correctColumns:[...]}] }.
// Used for Unit 1 Pronunciation Activity 2 (12 words x 12 IPA vowel columns,
// the only real activity of this type in the data — its table shape was
// visually recovered from the PDF per IMPLEMENTATION_PLAN.md §10.1, not
// captured by text extraction) — built generically per the plan's minimal
// shape rather than hardcoded to 12x12.
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
// Interaction: a table with one checkbox per (row, column) cell, per plan
// §3.8 ("renders the N-column x M-row grid, supports rows needing 1 or 2
// correct ticks, grades whole-row correctness"). A row is correct only if
// its ticked columns are an exact set match to `correctColumns` — no
// missing tick, no extra tick — since some words need one box ticked and
// others need two, and a partial tick (only one of two required) is not
// treated as a free pass. The whole activity is one `onAnswered` call
// (matching `matching.js`'s whole-activity-correctness convention, and the
// approach `diphthongMatch.js` (3.10) will need too for its own set-style
// grading): correct only if every row is exactly correct, reported to
// onAnswered as a single boolean — while still showing full per-row
// feedback (icon + text under each row naming the correct symbol(s) when
// wrong) plus a summary line ("N of M rows correct"), the same dual
// whole-activity-grade-plus-per-item-feedback pattern `matching.js`
// established.
//
// A submit is blocked with a hint until every row has at least one ticked
// box (rows needing 2 ticks are still allowed to submit with just 1 — an
// incomplete-but-attempted row is graded as incorrect via the exact-set
// rule above, not blocked at submit time, since the table doesn't know in
// advance which rows need 1 vs. 2 without leaking the answer).
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback` classes reused here) plus a
// `.vowelTickbox` block: `.vowelTickbox__instructions`,
// `.vowelTickbox__table` (wrapped in `.vowelTickbox__scroll` for
// horizontal overflow on narrow viewports per plan §8.1),
// `.vowelTickbox__word`, `.vowelTickbox__cell` (+ `.is-target` marking a
// correct-column cell after grading), `.vowelTickbox__checkbox`
// (+ `.is-correct`/`.is-incorrect` after grading, same convention as
// every other module's input elements), `.vowelTickbox__rowFeedback`
// (+ `.is-correct`/`.is-incorrect`), `.vowelTickbox__summary`.

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, instructions?: string, columns: string[], rows: { word: string, correctColumns: string[] }[] }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--vowelTickbox";
  card.dataset.activityId = activity.id;

  if (activity.instructions) {
    const instructions = document.createElement("p");
    instructions.className = "vowelTickbox__instructions";
    instructions.textContent = activity.instructions;
    card.appendChild(instructions);
  }

  const scroll = document.createElement("div");
  scroll.className = "vowelTickbox__scroll";

  const table = document.createElement("table");
  table.className = "vowelTickbox__table";

  // Header row: blank corner cell + one <th> per IPA column symbol.
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const cornerTh = document.createElement("th");
  cornerTh.scope = "col";
  headRow.appendChild(cornerTh);
  activity.columns.forEach((symbol) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = symbol;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  // rowState[rowIndex] = { checkboxesByColumn: Map(symbol -> input), feedbackEl }
  const rowStates = [];

  activity.rows.forEach((rowData, rowIndex) => {
    const tr = document.createElement("tr");
    tr.className = "vowelTickbox__row";

    const wordTh = document.createElement("th");
    wordTh.scope = "row";
    wordTh.className = "vowelTickbox__word";
    wordTh.textContent = rowData.word;
    tr.appendChild(wordTh);

    const checkboxesByColumn = new Map();

    activity.columns.forEach((symbol) => {
      const td = document.createElement("td");
      td.className = "vowelTickbox__cell";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "vowelTickbox__checkbox";
      checkbox.setAttribute("aria-label", `${rowData.word}: ${symbol}`);
      checkbox.addEventListener("change", () => {
        hint.hidden = true;
      });

      td.appendChild(checkbox);
      tr.appendChild(td);
      checkboxesByColumn.set(symbol, checkbox);
    });

    tbody.appendChild(tr);

    const feedbackRow = document.createElement("tr");
    feedbackRow.className = "vowelTickbox__feedbackRow";
    const feedbackCell = document.createElement("td");
    feedbackCell.colSpan = activity.columns.length + 1;
    const rowFeedback = document.createElement("p");
    rowFeedback.className = "vowelTickbox__rowFeedback";
    rowFeedback.setAttribute("role", "status");
    rowFeedback.setAttribute("aria-live", "polite");
    rowFeedback.hidden = true;
    feedbackCell.appendChild(rowFeedback);
    feedbackRow.appendChild(feedbackCell);
    tbody.appendChild(feedbackRow);

    rowStates.push({ rowData, checkboxesByColumn, rowFeedback });
  });

  table.appendChild(tbody);
  scroll.appendChild(table);
  card.appendChild(scroll);

  const hint = document.createElement("p");
  hint.className = "activity__hint";
  hint.setAttribute("role", "status");
  hint.setAttribute("aria-live", "polite");
  hint.hidden = true;

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "btn btn--check";
  checkButton.textContent = "Check answers";

  const summary = document.createElement("p");
  summary.className = "activity__feedback vowelTickbox__summary";
  summary.setAttribute("role", "status");
  summary.setAttribute("aria-live", "polite");
  summary.hidden = true;

  let answered = false;

  function checkedColumnsFor(rowState) {
    const checked = [];
    rowState.checkboxesByColumn.forEach((checkbox, symbol) => {
      if (checkbox.checked) checked.push(symbol);
    });
    return checked;
  }

  function isExactSetMatch(checkedColumns, correctColumns) {
    if (checkedColumns.length !== correctColumns.length) return false;
    const correctSet = new Set(correctColumns);
    return checkedColumns.every((symbol) => correctSet.has(symbol));
  }

  function checkAnswers() {
    if (answered) return;

    const anyRowEmpty = rowStates.some(
      (rowState) => checkedColumnsFor(rowState).length === 0
    );
    if (anyRowEmpty) {
      hint.hidden = false;
      hint.textContent = "Tick at least one box for every word first.";
      return;
    }
    hint.hidden = true;

    answered = true;
    let correctRowCount = 0;

    rowStates.forEach((rowState) => {
      const { rowData, checkboxesByColumn, rowFeedback } = rowState;
      const checkedColumns = checkedColumnsFor(rowState);
      const rowCorrect = isExactSetMatch(checkedColumns, rowData.correctColumns);
      if (rowCorrect) correctRowCount += 1;

      checkboxesByColumn.forEach((checkbox, symbol) => {
        checkbox.disabled = true;
        const isTarget = rowData.correctColumns.includes(symbol);
        if (isTarget) {
          checkbox.closest("td").classList.add("is-target");
        }
        if (checkbox.checked && !isTarget) {
          checkbox.classList.add("is-incorrect");
        } else if (checkbox.checked && isTarget) {
          checkbox.classList.add("is-correct");
        }
      });

      rowFeedback.hidden = false;
      rowFeedback.classList.add(rowCorrect ? "is-correct" : "is-incorrect");
      rowFeedback.innerHTML = rowCorrect
        ? '<span aria-hidden="true">\u2713</span> Correct.'
        : `<span aria-hidden="true">\u2717</span> Not quite \u2014 correct: ${rowData.correctColumns.join(", ")}.`;
    });

    const allCorrect = correctRowCount === rowStates.length;

    summary.hidden = false;
    summary.classList.add(allCorrect ? "is-correct" : "is-incorrect");
    summary.innerHTML = allCorrect
      ? `<span aria-hidden="true">\u2713</span> All ${rowStates.length} of ${rowStates.length} correct.`
      : `<span aria-hidden="true">\u2717</span> ${correctRowCount} of ${rowStates.length} rows correct.`;

    checkButton.disabled = true;
    onAnswered(activity.id, allCorrect);
  }

  checkButton.addEventListener("click", checkAnswers);

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(summary);

  container.appendChild(card);
}
