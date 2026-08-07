// js/engine/diphthongMatch.js
//
// Renders a single `diphthongMatch` activity. Two real shapes confirmed
// present in unit2.js (Pronunciation Activities 1-2; unit3.js's own
// Activities 1-2 use the same two shapes per IMPLEMENTATION_PLAN.md §2.1):
//   mode:"wordForDiphthong" — { type, id, mode, targetDiphthong, options:[...words], correctIndex }
//     Given a target diphthong symbol, choose which word contains it.
//   mode:"diphthongForWord" — { type, id, mode, prompt, options:[...diphthong symbols], correctIndex }
//     Given a word as `prompt`, choose the matching diphthong symbol.
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
// Interaction: per plan §3.10 ("radio-style choice reused for both...
// activity variants") — this module is built as a single radiogroup that
// branches only on how the question text and options are labeled,
// reusing mcq.js's exact fieldset/legend/radiogroup structure and
// class-naming convention (`.diphthongMatch__prompt/options/option`
// mirroring `.mcq__prompt/options/option` one-for-one) so `exercises.css`
// (3.13) can share base radiogroup rules across mcq.js, trueFalse.js, and
// this module. Grades on submit, locks after one attempt, shows
// correct/incorrect feedback as icon + text together, and still
// highlights the correct option when the student picked wrong — same
// behavior as mcq.js/trueFalse.js.
//
// Deliberately did not add `explanation`/`group` field support (unlike
// mcq.js/trueFalse.js) since the plan's minimal diphthongMatch shape
// doesn't include them and neither field appears in any real
// diphthongMatch activity in unit2.js.
//
// Shared class-naming convention (see engine/mcq.js for the base
// `.activity`/`.activity__hint/feedback` classes reused here) plus a
// `.diphthongMatch` block: `.diphthongMatch__prompt`,
// `.diphthongMatch__options`, `.diphthongMatch__option`
// (+ `.is-correct`/`.is-incorrect` after grading, same convention as
// mcq.js's `.mcq__option`).

/**
 * @param {HTMLElement} container - emptied and rendered into.
 * @param {{ id: string, mode: "wordForDiphthong"|"diphthongForWord", targetDiphthong?: string, prompt?: string, options: string[], correctIndex: number }} activity
 * @param {(id: string, isCorrect: boolean) => void} onAnswered
 */
export function render(container, activity, onAnswered) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "activity activity--diphthongMatch";
  card.dataset.activityId = activity.id;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "diphthongMatch__fieldset";

  const legend = document.createElement("legend");
  legend.className = "diphthongMatch__prompt";
  legend.textContent =
    activity.mode === "diphthongForWord"
      ? `Which diphthong matches "${activity.prompt}"?`
      : `Which word contains the diphthong ${activity.targetDiphthong}?`;
      
  if (activity.audioSrc) {
    let currentAudio = null;
    const playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "play-audio-btn";
    playBtn.setAttribute("aria-label", `Listen to ${activity.prompt || activity.targetDiphthong}`);
    playBtn.innerHTML = "🔊";
    playBtn.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(activity.audioSrc);
      currentAudio.play();
    });
    legend.appendChild(playBtn);
  }
  fieldset.appendChild(legend);

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "diphthongMatch__options";

  const radios = activity.options.map((optionText, index) => {
    const optionId = `${activity.id}-option-${index}`;

    const wrapper = document.createElement("label");
    wrapper.className = "diphthongMatch__option";
    wrapper.setAttribute("for", optionId);

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `${activity.id}-options`;
    radio.id = optionId;
    radio.value = String(index);
    radio.addEventListener("change", () => {
      hint.hidden = true;
    });

    const text = document.createElement("span");
    text.textContent = optionText;

    wrapper.appendChild(radio);
    wrapper.appendChild(text);
    
    if (!optionText.startsWith('/')) {
      const optionPlayBtn = document.createElement("button");
      optionPlayBtn.type = "button";
      optionPlayBtn.className = "play-audio-btn";
      optionPlayBtn.setAttribute("aria-label", `Listen to ${optionText}`);
      optionPlayBtn.innerHTML = "🔊";
      // Prevent clicking the button from selecting the radio option
      optionPlayBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`assets/audio/words/${optionText.toLowerCase()}.mp3`);
        currentAudio.play().catch(err => console.error('Audio play failed:', err));
      });
      wrapper.appendChild(optionPlayBtn);
    }

    optionsWrap.appendChild(wrapper);

    return radio;
  });

  fieldset.appendChild(optionsWrap);
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
    
    radios.forEach((radio) => {
      radio.disabled = false;
      const label = radio.closest("label");
      label.classList.remove("is-correct", "is-incorrect");
    });
    
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

    const selectedIndex = radios.findIndex((radio) => radio.checked);
    if (selectedIndex === -1) {
      hint.hidden = false;
      hint.textContent = "Choose an answer first.";
      return;
    }
    hint.hidden = true;

    const isCorrect = selectedIndex === activity.correctIndex;
    answered = true;

    radios.forEach((radio, index) => {
      radio.disabled = true;
      const label = radio.closest("label");
      if (index === activity.correctIndex) {
        label.classList.add("is-correct");
      }
      if (index === selectedIndex && !isCorrect) {
        label.classList.add("is-incorrect");
      }
    });

    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.innerHTML = isCorrect
      ? '<span aria-hidden="true">\u2713</span> Correct.'
      : `<span aria-hidden="true">\u2717</span> Not quite \u2014 the correct answer is "${activity.options[activity.correctIndex]}".`;

    if (isCorrect) {
      checkButton.disabled = true;
    } else {
      checkButton.hidden = true;
      editButton.hidden = false;
    }
    onAnswered(activity.id, isCorrect);
  }

  checkButton.addEventListener("click", checkAnswer);

  card.appendChild(hint);
  card.appendChild(checkButton);
  card.appendChild(editButton);
  card.appendChild(feedback);

  container.appendChild(card);
}
