// js/engine/trueFalse.js
//
// Renders a single `trueFalse` activity: { type:"trueFalse", id, statement,
// correct:true|false }. Reused as-is for nested trueFalse questions inside
// readingPassage `questions[]` (e.g. Unit 2 Reading Activity 2, "Maria's
// Presentation Experience").
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
// Follows the shared class-naming convention established in engine/mcq.js
// (.activity, .activity--<type>, .activity__hint/feedback/explanation,
// .is-correct/.is-incorrect on the container) with a `.truefalse` block
// mirroring `.mcq`'s two-option radiogroup shape, so css/exercises.css
// (3.13) can share base rules across both modules.

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   statement: string,
 *   correct: boolean,
 *   explanation?: string,
 *   group?: string
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--truefalse";
  card.dataset.activityId = activity.id;

  if (activity.group) {
    const group = document.createElement("p");
    group.className = "activity__group";
    group.textContent = activity.group;
    card.appendChild(group);
  }

  const fieldset = document.createElement("fieldset");
  fieldset.className = "truefalse";

  const legend = document.createElement("legend");
  legend.className = "truefalse__prompt";
  legend.textContent = activity.statement;
  fieldset.appendChild(legend);

  const optionsList = document.createElement("div");
  optionsList.className = "truefalse__options";

  const choices = [
    { label: "True", value: "true" },
    { label: "False", value: "false" }
  ];

  const inputs = [];
  choices.forEach((choice) => {
    const optionId = `${activity.id}-opt-${choice.value}`;

    const wrapper = document.createElement("label");
    wrapper.className = "truefalse__option";
    wrapper.setAttribute("for", optionId);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = activity.id;
    input.id = optionId;
    input.value = choice.value;

    const text = document.createElement("span");
    text.textContent = choice.label;

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    optionsList.appendChild(wrapper);
    inputs.push(input);
  });

  fieldset.appendChild(optionsList);
  card.appendChild(fieldset);

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

  checkButton.addEventListener("click", () => {
    if (answered) return;

    const selected = inputs.find((input) => input.checked);
    if (!selected) {
      hint.hidden = false;
      hint.textContent = "Choose True or False first.";
      return;
    }
    hint.hidden = true;

    const selectedValue = selected.value === "true";
    const isCorrect = selectedValue === activity.correct;
    answered = true;

    const correctValue = activity.correct ? "true" : "false";
    inputs.forEach((input) => {
      input.disabled = true;
      const optionEl = input.closest(".truefalse__option");
      if (input.value === correctValue) {
        optionEl.classList.add("is-correct");
      } else if (input === selected) {
        optionEl.classList.add("is-incorrect");
      }
    });

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.correct ? "True" : "False"}".`;

    if (activity.explanation) {
      const explanation = document.createElement("p");
      explanation.className = "activity__explanation";
      explanation.textContent = activity.explanation;
      card.appendChild(explanation);
    }

    checkButton.disabled = true;
    onAnswered(activity.id, isCorrect);
  });

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(feedback);

  container.appendChild(card);
}
