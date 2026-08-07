// js/engine/mcq.js
//
// Renders a single `mcq` activity: { type:"mcq", id, prompt, options:[...],
// correctIndex, explanation?, group? }. Reused as-is for nested mcq
// questions inside readingPassage/listeningTranscript `questions[]`, and
// for activities modeled as 2-option "which sentence/tense is correct"
// choices (Unit 1 Grammar Act. 3/4, Unit 2 Grammar Act. 4, etc).
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
// Shared class-naming convention adopted here for all engine modules to
// follow (so css/exercises.css, built in 3.13, can share base rules):
//   .activity                 — outer card, every engine module uses this
//   .activity--<type>         — per-type modifier, e.g. .activity--mcq
//   .activity__group          — optional small group/cluster label
//   .activity__hint           — inline validation message (e.g. "choose an
//                                answer first"), before grading
//   .activity__feedback       — post-grading correct/incorrect message
//   .activity__explanation    — optional post-grading explanation text
//   .is-correct / .is-incorrect — state modifiers on both option elements
//                                and the feedback message

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{
 *   id: string,
 *   prompt: string,
 *   options: string[],
 *   correctIndex: number,
 *   explanation?: string,
 *   group?: string
 * }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--mcq";
  card.dataset.activityId = activity.id;

  if (activity.group) {
    const group = document.createElement("p");
    group.className = "activity__group";
    group.textContent = activity.group;
    card.appendChild(group);
  }

  const fieldset = document.createElement("fieldset");
  fieldset.className = "mcq";

  const legend = document.createElement("legend");
  legend.className = "mcq__prompt";
  legend.textContent = activity.prompt;
  fieldset.appendChild(legend);

  const optionsList = document.createElement("div");
  optionsList.className = "mcq__options";

  const inputs = [];
  activity.options.forEach((optionText, index) => {
    const optionId = `${activity.id}-opt${index}`;

    const wrapper = document.createElement("label");
    wrapper.className = "mcq__option";
    wrapper.setAttribute("for", optionId);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = activity.id;
    input.id = optionId;
    input.value = String(index);

    const text = document.createElement("span");
    text.textContent = optionText;

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
    
    inputs.forEach((input) => {
      input.disabled = false;
      const optionEl = input.closest(".mcq__option");
      optionEl.classList.remove("is-correct", "is-incorrect");
    });
    
    feedback.hidden = true;
    feedback.className = "activity__feedback";
    
    const explanation = card.querySelector(".activity__explanation");
    if (explanation) explanation.remove();
  });
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
      hint.textContent = "Choose an answer first.";
      return;
    }
    hint.hidden = true;

    const selectedIndex = Number(selected.value);
    const isCorrect = selectedIndex === activity.correctIndex;
    answered = true;

    inputs.forEach((input, index) => {
      input.disabled = true;
      const optionEl = input.closest(".mcq__option");
      if (index === activity.correctIndex) {
        optionEl.classList.add("is-correct");
      } else if (index === selectedIndex) {
        optionEl.classList.add("is-incorrect");
      }
    });

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.options[activity.correctIndex]}".`;

    if (activity.explanation) {
      const explanation = document.createElement("p");
      explanation.className = "activity__explanation";
      explanation.textContent = activity.explanation;
      card.appendChild(explanation);
    }

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
