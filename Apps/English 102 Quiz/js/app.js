import { state } from './state.js';
import * as UI from './ui.js';
import { playAudio, stopAudio, loadVoices } from './audio.js';

// Unit Data Imports
import { unit1Vocab } from './data/unit1_vocab.js';
import { unit1Grammar } from './data/unit1_grammar.js';
import { unit1Pronunciation } from './data/unit1_pronunciation.js';
import { unit1Wordlist } from './data/unit1_wordlist.js';
import { unit2Vocab } from './data/unit2_vocab.js';
import { unit2Grammar } from './data/unit2_grammar.js';
import { unit2Pronunciation } from './data/unit2_pronunciation.js';
import { unit2Wordlist } from './data/unit2_wordlist.js';
import { unit3Vocab } from './data/unit3_vocab.js';
import { unit3Grammar } from './data/unit3_grammar.js';
import { unit3Pronunciation } from './data/unit3_pronunciation.js';
import { unit3Wordlist } from './data/unit3_wordlist.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Voices
    const voiceSelect = document.getElementById('voice-select');
    if (voiceSelect) {
        loadVoices((voices) => {
            voiceSelect.innerHTML = '';
            voices.forEach(voice => {
                const option = document.createElement('option');
                option.value = voice.voiceURI;
                // Shorten the name to look nice in the header (e.g. "Google US English" -> "G US...")
                let shortName = voice.name.replace('Microsoft', 'MS').replace('Google', 'G');
                option.textContent = shortName;
                voiceSelect.appendChild(option);
            });

            // Set saved voice or default
            if (state.voiceURI && voices.find(v => v.voiceURI === state.voiceURI)) {
                voiceSelect.value = state.voiceURI;
            } else if (voices.length > 0) {
                state.setVoice(voiceSelect.value); // Save default if none exists
            }
            
            voiceSelect.classList.remove('hidden');
        });

        voiceSelect.addEventListener('change', (e) => {
            state.setVoice(e.target.value);
            playAudio("Voice changed", state.voiceURI); // Test the new voice immediately
        });
    }

    // 2. Initialize Global Buttons
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.addEventListener('click', () => {
            state.toggleTranslation();
            UI.updateLanguageUI();
        });
    }

    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            state.toggleTheme();
            UI.toggleThemeUI();
        });
    }

    // 3. Stream Selection (Main Menu)
    document.querySelectorAll('.stream-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Because our Mixed button has text inside a span when translated, we use closest()
            const streamType = e.target.closest('.stream-btn').dataset.stream; 
            
            // Check if user selected Short (15) or Full
            const lengthChoice = document.querySelector('input[name="quiz-length"]:checked').value;
            let limit = lengthChoice === 'full' ? null : 15;

            // Combine tracks
            const allVocab = [...unit1Vocab, ...unit2Vocab, ...unit3Vocab];
            const allGrammar = [...unit1Grammar, ...unit2Grammar, ...unit3Grammar];
            const allPronunciation = [...unit1Pronunciation, ...unit2Pronunciation, ...unit3Pronunciation];
            const allWordlist = [...unit1Wordlist, ...unit2Wordlist, ...unit3Wordlist];

            let questionsToLoad = [];
            
            if (streamType === 'vocab') questionsToLoad = allVocab;
            else if (streamType === 'grammar') questionsToLoad = allGrammar;
            else if (streamType === 'pronunciation') questionsToLoad = allPronunciation;
            else if (streamType === 'wordlist') questionsToLoad = allWordlist;
            else if (streamType === 'mixed') {
                // Mix EVERYTHING together
                questionsToLoad = [...allVocab, ...allGrammar, ...allPronunciation, ...allWordlist];
                limit = 40; // Override the limit strictly to 40 for Mixed Mode
            }

            stopAudio();
            state.initQuiz(questionsToLoad, limit);
            UI.renderQuestion();
            UI.showScreen('quiz-screen');
        });
    });

    // 4. Tooltip Dictionary Logic
    const tooltip = document.getElementById('word-tooltip');
    const tipEn = document.getElementById('tooltip-en');
    const tipAr = document.getElementById('tooltip-ar');

    async function showTranslationTooltip(word, x, y) {
        if (!tooltip || !tipEn || !tipAr) return;
        
        tipEn.textContent = word;
        tipAr.textContent = "Loading... / جاري التحميل...";
        
        // Position Tooltip safely on screen
        const safeX = Math.max(12, Math.min(window.innerWidth - 240, x - 40));
        const safeY = Math.max(12, y - 50);
        
        tooltip.style.left = `${safeX}px`;
        tooltip.style.top = `${safeY}px`;
        tooltip.classList.remove('hidden');

        try {
            const cleanWord = encodeURIComponent(word.trim());
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${cleanWord}&langpair=en|ar`);
            const data = await res.json();
            if (data && data.responseData && data.responseData.translatedText) {
                tipAr.textContent = data.responseData.translatedText;
            } else {
                tipAr.textContent = "Translation unavailable";
            }
        } catch (err) {
            tipAr.textContent = "Error loading / خطأ";
        }
    }

    // Hide tooltip when clicking anywhere else
    document.addEventListener('click', (e) => {
        if (tooltip && !e.target.classList.contains('word-clickable')) {
            tooltip.classList.add('hidden');
        }
    });

    // 5. Quiz Interaction & Click Delegation
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen) {
        quizScreen.addEventListener('click', (e) => {
            const q = state.getCurrentQuestion();
            if (!q) return;
            const v = state.voiceURI; // Grab the selected voice

            // A. Clicked a single English Word (Dictionary pop-out)
            if (e.target.classList.contains('word-clickable')) {
                const word = e.target.dataset.word;
                playAudio(word, v);
                showTranslationTooltip(word, e.clientX, e.clientY);
                return;
            }

            // B. Clicked Question Audio Button
            if (e.target.closest('#btn-audio-q')) {
                playAudio(q.question.en, v);
                return;
            }

            // C. Clicked Explanation Audio Button
            if (e.target.closest('#btn-audio-exp')) {
                playAudio(q.explanation.en, v);
                return;
            }

            // D. Clicked Option Audio Button (Separate outside button)
            const optAudioBtn = e.target.closest('.opt-audio-btn');
            if (optAudioBtn) {
                const index = optAudioBtn.dataset.index;
                if (q.options[index]) {
                    playAudio(q.options[index].text.en, v);
                }
                return;
            }

            // E. Clicked the Main Answer Button
            const optionBtn = e.target.closest('.option-btn');
            if (optionBtn) {
                UI.handleAnswer(optionBtn);
            }
        });
    }

    // 6. Navigation Buttons
    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            stopAudio();
            state.nextQuestion();
            if (state.isFinished()) {
                UI.renderResults();
            } else {
                UI.renderQuestion();
            }
        });
    }

    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            stopAudio();
            state.prevQuestion();
            UI.renderQuestion();
        });
    }

    const btnHome = document.getElementById('btn-home');
    if (btnHome) {
        btnHome.addEventListener('click', () => {
            if (confirm("Are you sure you want to quit this quiz? Your progress will be lost.")) {
                stopAudio();
                UI.showScreen('home-screen');
            }
        });
    }

    const btnRestart = document.getElementById('btn-restart');
    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            stopAudio();
            UI.showScreen('home-screen');
        });
    }

    // Initialize Default UI
    UI.updateLanguageUI();
    UI.toggleThemeUI();
});
