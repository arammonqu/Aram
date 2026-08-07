import { state } from './state.js';

const els = {
    body: document.body,
    screens: document.querySelectorAll('.screen'),
    menuTitle: document.getElementById('menu-title'),
    lengthTitle: document.getElementById('length-title'),
    lblShort: document.getElementById('lbl-short'),
    lblFull: document.getElementById('lbl-full'),
    btnMixed: document.getElementById('btn-mixed'),
    qText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-container'),
    expContainer: document.getElementById('explanation-container'),
    expText: document.getElementById('explanation-text'),
    expTitle: document.getElementById('exp-title'),
    qCounter: document.getElementById('question-counter'),
    progBar: document.getElementById('progress-bar'),
    btnNext: document.getElementById('btn-next'),
    btnPrev: document.getElementById('btn-prev'),
    btnTheme: document.getElementById('btn-theme'),
    resultsTitle: document.getElementById('results-title'),
    scoreText: document.getElementById('score-text')
};

// Interactive Dictionary: Wrap English words in clickable span
function wrapClickableWords(text) {
    if (!text) return '';
    // Regex matches words with letters and apostrophes
    return text.replace(/\b([a-zA-Z']+)\b/g, '<span class="word-clickable" data-word="$1">$1</span>');
}

function formatText(obj, isEnglishClickable = false) {
    if (!obj) return '';
    let enHtml = isEnglishClickable ? wrapClickableWords(obj.en) : obj.en;
    
    if (state.showTranslation && obj.ar) {
        return `<div class="trans-container"><div class="text-en">${enHtml}</div><div class="text-ar" dir="rtl">${obj.ar}</div></div>`;
    }
    return `<div class="text-en">${enHtml}</div>`;
}

export function showScreen(screenId) {
    els.screens.forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
    }
}

export function updateLanguageUI() {
    els.menuTitle.innerHTML = formatText({ en: "Select a Stream", ar: "اختر القسم" });
    if (els.lengthTitle) els.lengthTitle.innerHTML = formatText({ en: "Quiz Length", ar: "طول الاختبار" });
    if (els.lblShort) els.lblShort.innerHTML = formatText({ en: "Short (15 Qs)", ar: "قصير (15 سؤال)" });
    if (els.lblFull) els.lblFull.innerHTML = formatText({ en: "Full Track", ar: "كامل" });
    if (els.btnMixed) els.btnMixed.innerHTML = formatText({ en: "Mixed Quiz (40 Qs)", ar: "اختبار مختلط (40 سؤال)" });
    els.btnNext.innerHTML = formatText({ en: "Next <i class='fas fa-arrow-right'></i>", ar: "التالي <i class='fas fa-arrow-left'></i>" });
    els.btnPrev.innerHTML = formatText({ en: "<i class='fas fa-arrow-left'></i> Prev", ar: "<i class='fas fa-arrow-right'></i> السابق" });
    els.resultsTitle.innerHTML = formatText({ en: "Quiz Completed!", ar: "اكتمل الاختبار!" });
    els.expTitle.innerHTML = formatText({ en: "Explanation", ar: "الشرح" });
    
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen && !quizScreen.classList.contains('hidden') && state.getCurrentQuestion()) {
        renderQuestion(true); 
    }
}

export function toggleThemeUI() {
    if (state.theme === 'dark') {
        els.body.classList.add('dark-mode');
        els.btnTheme.innerHTML = '<i class="fas fa-sun"></i>';
        els.btnTheme.setAttribute('title', 'Switch to Light Mode');
    } else {
        els.body.classList.remove('dark-mode');
        els.btnTheme.innerHTML = '<i class="fas fa-moon"></i>';
        els.btnTheme.setAttribute('title', 'Switch to Dark Mode');
    }
}

export function renderQuestion(preserveState = false) {
    const q = state.getCurrentQuestion();
    if (!q) return;
    
    // Always hide explanation initially when drawing a fresh question
    if (!preserveState) {
        els.expContainer.classList.add('hidden');
    }
    
    // 1. Setup Options (Create wrappers, main answer buttons, and separate audio buttons)
    if (!preserveState) {
        els.optionsGrid.innerHTML = '';
        q.options.forEach((opt, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'option-wrapper';

            // Main Answer Button
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.index = index;
            btn.dataset.correct = opt.isCorrect ? 'true' : 'false';
            wrapper.appendChild(btn);

            // Separate Audio Button
            const audioBtn = document.createElement('button');
            audioBtn.className = 'audio-btn opt-audio-btn';
            audioBtn.dataset.index = index;
            audioBtn.title = 'Listen to option';
            audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            wrapper.appendChild(audioBtn);

            els.optionsGrid.appendChild(wrapper);
        });
    }

    // 2. Fill Text Content (Make English words in Question and Explanation clickable)
    els.qText.innerHTML = formatText(q.question, true);
    els.expText.innerHTML = formatText(q.explanation, true);
    
    const buttons = els.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        if (q.options[index]) {
            btn.innerHTML = formatText(q.options[index].text, false);
        }
    });

    // 3. Navigation State
    els.qCounter.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
    els.progBar.style.width = `${((state.currentIndex) / state.questions.length) * 100}%`;
    if (els.btnPrev) {
        els.btnPrev.disabled = state.currentIndex === 0;
    }

    // 4. Restore state if user already answered this question!
    const pastAnswerIndex = state.userAnswers[state.currentIndex];
    if (pastAnswerIndex !== null && !preserveState) {
        const selectedBtn = els.optionsGrid.querySelector(`.option-btn[data-index='${pastAnswerIndex}']`);
        if (selectedBtn) {
            handleAnswer(selectedBtn, false); // false = don't increment score again
        }
    }
}

export function handleAnswer(selectedBtn, isNewAnswer = true) {
    if (selectedBtn.disabled && isNewAnswer) return; // Prevent double clicks on new attempts

    const isCorrect = selectedBtn.dataset.correct === 'true';
    
    if (isNewAnswer) {
        if (isCorrect) state.score++;
        state.userAnswers[state.currentIndex] = parseInt(selectedBtn.dataset.index); // Save history
    }

    // Lock all buttons and highlight correct
    const buttons = els.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true; 
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });

    if (!isCorrect) {
        selectedBtn.classList.add('wrong');
    }

    // Show Explanation
    els.expContainer.classList.remove('hidden');
}

export function renderResults() {
    els.scoreText.innerHTML = formatText({ 
        en: `Your score: ${state.score} / ${state.questions.length}`, 
        ar: `نتيجتك: ${state.score} / ${state.questions.length}` 
    });
    els.progBar.style.width = '100%';
    showScreen('results-screen');
}
