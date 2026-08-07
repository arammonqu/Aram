// js/engine/matching.js
//
// Renders a single `matching` activity: { type:"matching", id, title?,
// instructions?, left:[...], right:[...], correctPairs:{leftIndex:rightIndex} }.
// `left`/`right` items may be short words (vocabulary matching) or long
// text (Unit 3 Reading Activity 2's bios-to-job-postings matching) — this
// module makes no assumption about item length.
//
// Contract (shared by every engine/*.js module per IMPLEMENTATION_PLAN.md
// Phase 3): export a render(container, activityData, onAnswered) function
// that draws the UI into `container`, grades on submit, shows
// correct/incorrect feedback via icon + text (never color alone — 8.2),
// and calls onAnswered(activityData.id, isCorrect) exactly once per
// attempt so js/state.js (Phase 4) can record it. Grading is locked after
// one attempt per activity, matching state.js's planned one-record-per-id
// shape — this module does not offer a "try again" reset. `isCorrect`
// here means every pair matched correctly (whole-activity correctness,
// same convention `vowelTickbox.js` will use for whole-row correctness
// per the plan's 3.8 note) — the per-pair breakdown is still shown
// visually even though only one boolean is reported to state.js.
//
// Click-to-pair interaction (per plan §3.3, preferred over drag-and-drop
// for mobile-friendliness): click an unpaired item on either side to
// select it, then click an item on the *other* side to form a pair
// (replacing either item's previous pair, if any, so every item is used
// in at most one pair at a time). Click a selected item again to
// deselect it without pairing. Click an already-paired item with nothing
// else selected to unpair it. Each pair gets a shared numeric badge (the
// left item's 1-based position) shown on both items, so pairing state is
// never color-only.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback/explanation` classes reused here)
// plus a `.matching` block: `.matching__columns`, `.matching__column`,
// `.matching__item` (+ `--left`/`--right` modifiers), `.matching__badge`,
// `.matching__item-feedback`, and the shared `.is-selected`/`.is-paired`/
// `.is-correct`/`.is-incorrect` state modifiers.

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   title?: string,
 *   instructions?: string,
 *   left: string[],
 *   right: string[],
 *   correctPairs: Record<number, number>
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--matching";
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

  const columns = document.createElement("div");
  columns.className = "matching__columns";

  const leftColumn = document.createElement("div");
  leftColumn.className = "matching__column matching__column--left";
  const rightColumn = document.createElement("div");
  rightColumn.className = "matching__column matching__column--right";

  // leftIndex -> rightIndex for the student's current attempt (not the
  // answer key — that's activity.correctPairs).
  const pairs = {};
  // { side: "left"|"right", index: number } | null
  let selected = null;
  let answered = false;

  const leftEls = [];
  const rightEls = [];

  function pairedRightIndexFor(leftIndex) {
    return Object.prototype.hasOwnProperty.call(pairs, leftIndex) ? pairs[leftIndex] : null;
  }

  function pairedLeftIndexFor(rightIndex) {
    for (const key of Object.keys(pairs)) {
      if (pairs[key] === rightIndex) return Number(key);
    }
    return null;
  }

  function clearPairVisuals(leftIndex, rightIndex) {
    if (leftIndex !== null && leftEls[leftIndex]) {
      leftEls[leftIndex].classList.remove("is-paired");
      const badge = leftEls[leftIndex].querySelector(".matching__badge");
      if (badge) badge.remove();
    }
    if (rightIndex !== null && rightEls[rightIndex]) {
      rightEls[rightIndex].classList.remove("is-paired");
      const badge = rightEls[rightIndex].querySelector(".matching__badge");
      if (badge) badge.remove();
    }
  }

  function addBadge(el, label) {
    const badge = document.createElement("span");
    badge.className = "matching__badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = String(label);
    el.prepend(badge);
  }

  function setSelected(next) {
    if (selected) {
      const prevEl = selected.side === "left" ? leftEls[selected.index] : rightEls[selected.index];
      prevEl.classList.remove("is-selected");
      prevEl.setAttribute("aria-pressed", "false");
    }
    selected = next;
    if (selected) {
      const el = selected.side === "left" ? leftEls[selected.index] : rightEls[selected.index];
      el.classList.add("is-selected");
      el.setAttribute("aria-pressed", "true");
    }
  }

  function formPair(leftIndex, rightIndex) {
    // Each item can belong to at most one pair — break any existing
    // pairs that involve either item first.
    const existingRightForLeft = pairedRightIndexFor(leftIndex);
    if (existingRightForLeft !== null) clearPairVisuals(leftIndex, existingRightForLeft);
    const existingLeftForRight = pairedLeftIndexFor(rightIndex);
    if (existingLeftForRight !== null) {
      clearPairVisuals(existingLeftForRight, rightIndex);
      delete pairs[existingLeftForRight];
    }

    pairs[leftIndex] = rightIndex;
    leftEls[leftIndex].classList.add("is-paired");
    rightEls[rightIndex].classList.add("is-paired");
    addBadge(leftEls[leftIndex], leftIndex + 1);
    addBadge(rightEls[rightIndex], leftIndex + 1);
  }

  function unpairLeft(leftIndex) {
    const rightIndex = pairedRightIndexFor(leftIndex);
    if (rightIndex === null) return;
    clearPairVisuals(leftIndex, rightIndex);
    delete pairs[leftIndex];
  }

  function handleItemClick(side, index) {
    if (answered) return;

    hint.hidden = true;

    const el = side === "left" ? leftEls[index] : rightEls[index];
    const isThisSelected = selected && selected.side === side && selected.index === index;

    if (isThisSelected) {
      setSelected(null);
      return;
    }

    if (selected && selected.side !== side) {
      const leftIndex = side === "left" ? index : selected.index;
      const rightIndex = side === "right" ? index : selected.index;
      formPair(leftIndex, rightIndex);
      setSelected(null);
      return;
    }

    if (selected && selected.side === side) {
      setSelected({ side, index });
      return;
    }

    // No current selection.
    const isPaired = el.classList.contains("is-paired");
    if (isPaired) {
      if (side === "left") {
        unpairLeft(index);
      } else {
        const leftIndex = pairedLeftIndexFor(index);
        if (leftIndex !== null) unpairLeft(leftIndex);
      }
      return;
    }

    setSelected({ side, index });
  }

  activity.left.forEach((text, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "matching__item matching__item--left";
    item.setAttribute("aria-pressed", "false");
    const span = document.createElement("span");
    span.textContent = text;
    item.appendChild(span);
    item.addEventListener("click", () => handleItemClick("left", index));
    leftColumn.appendChild(item);
    leftEls.push(item);
  });

  activity.right.forEach((text, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "matching__item matching__item--right";
    item.setAttribute("aria-pressed", "false");
    const span = document.createElement("span");
    span.textContent = text;
    item.appendChild(span);
    item.addEventListener("click", () => handleItemClick("right", index));
    rightColumn.appendChild(item);
    rightEls.push(item);
  });

  columns.appendChild(leftColumn);
  columns.appendChild(rightColumn);
  card.appendChild(columns);

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
    
    leftEls.forEach((el) => {
      el.disabled = false;
      el.classList.remove("is-correct", "is-incorrect");
      const itemFeedback = el.querySelector(".matching__item-feedback");
      if (itemFeedback) itemFeedback.remove();
    });
    
    rightEls.forEach((el) => {
      el.disabled = false;
      el.classList.remove("is-correct", "is-incorrect");
    });
    
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

    const leftIndices = activity.left.map((_, i) => i);
    const unpaired = leftIndices.filter((i) => pairedRightIndexFor(i) === null);
    if (unpaired.length > 0) {
      hint.hidden = false;
      hint.textContent = "Match every item on the left before checking.";
      return;
    }
    hint.hidden = true;

    setSelected(null);
    answered = true;

    let correctCount = 0;
    leftIndices.forEach((leftIndex) => {
      const studentRight = pairedRightIndexFor(leftIndex);
      const correctRight = activity.correctPairs[leftIndex];
      const isPairCorrect = studentRight === correctRight;
      if (isPairCorrect) correctCount++;

      const leftEl = leftEls[leftIndex];
      const rightEl = studentRight !== null ? rightEls[studentRight] : null;
      leftEl.classList.add(isPairCorrect ? "is-correct" : "is-incorrect");
      if (rightEl) rightEl.classList.add(isPairCorrect ? "is-correct" : "is-incorrect");
      if (!isPairCorrect) {
        rightEls[correctRight].classList.add("is-correct");
      }

      const itemFeedback = document.createElement("p");
      itemFeedback.className = "matching__item-feedback";
      itemFeedback.innerHTML = isPairCorrect
        ? '<span aria-hidden="true">\u2713</span> Correct.'
        : `<span aria-hidden="true">\u2717</span> Correct match: "${activity.right[correctRight]}"`;
      itemFeedback.classList.add(isPairCorrect ? "is-correct" : "is-incorrect");
      leftEl.appendChild(itemFeedback);
    });

    leftEls.forEach((el) => (el.disabled = true));
    rightEls.forEach((el) => (el.disabled = true));

    const isCorrect = correctCount === leftIndices.length;
    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct \u2014 all pairs match.'
      : `<span aria-hidden="true">\u2717</span> ${correctCount} of ${leftIndices.length} pairs correct \u2014 see the notes above for the rest.`;

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
