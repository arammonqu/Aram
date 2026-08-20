/**
 * Balqa Applied English (2) — Master Application Engine
 * Zero-build Vanilla Architecture
 * Features:
 * - Dynamic Viewport Router (Quiz Mode & Learning Hub)
 * - 633 Interactive BAU Exam Questions across 30 Partitions
 * - 40 Random Questions Final Exam Simulation
 * - Mistake Bank ("Missed Questions Vault" with auto-removal upon correct resolution)
 * - Completion & Study Statistics Dashboard (Quiz Solved % & Study Milestones)
 * - Dual-layer Bilingual Engine (Sentence-level translation & Word Popovers)
 * - Web Speech Synthesis (TTS) Engine with Garbage-Collection Retention
 * - Custom In-App Modal Dialog System
 */

// ==========================================================================
// 1. Web Speech Synthesis Audio Engine
// ==========================================================================
class AudioEngine {
  constructor() {
    this.synth = (typeof window !== 'undefined') ? window.speechSynthesis : null;
    this.voices = [];
    this.selectedVoice = null;
    this.rate = parseFloat(localStorage.getItem('app_rate') || '0.9');
    
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices().filter(v => v.lang.startsWith('en'));
    const savedURI = localStorage.getItem('app_voice');
    
    if (savedURI) {
      this.selectedVoice = this.voices.find(v => v.voiceURI === savedURI) || null;
    }
    if (!this.selectedVoice && this.voices.length > 0) {
      // Prefer Google or Natural US English voices if present
      this.selectedVoice = this.voices.find(v => v.name.includes('Google') || v.name.includes('Natural')) || this.voices[0];
    }
    this.populateVoiceSelect();
  }

  populateVoiceSelect() {
    const select = document.getElementById('voice-select');
    if (!select || this.voices.length === 0) return;
    select.innerHTML = '';
    this.voices.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.voiceURI;
      opt.textContent = `${v.name} (${v.lang})`;
      if (this.selectedVoice && this.selectedVoice.voiceURI === v.voiceURI) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });
  }

  stop() {
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn('Speech cancellation error:', e);
      }
    }
  }

  speak(text) {
    if (!this.synth) return;
    this.stop();
    if (!text || !text.trim()) return;

    // Sanitize non-pronounceable prompt markers & parenthesized IPA notations
    let sanitized = text
      .replace(/<[^>]+>/g, '') // remove HTML tags
      .replace(/\s*\(\/[^\)]+\/\)/g, '') // remove (/ipa/)
      .replace(/\s*\([^\)]+\)/g, '') // remove (notes)
      .replace(/[-_]{2,}/g, ' blank ')
      .replace(/[\/\\\[\]]/g, ' ')
      .trim();

    // Fallback if sanitized becomes empty (e.g. pure sound symbol)
    if (!sanitized) {
      sanitized = text.replace(/[\/\\\[\]]/g, '').trim();
    }

    try {
      const utterance = new SpeechSynthesisUtterance(sanitized || text);
      
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
        utterance.lang = this.selectedVoice.lang;
      } else {
        utterance.lang = 'en-US';
      }
      utterance.rate = this.rate;
      utterance.pitch = 1.0;

      window._activeUtterance = utterance;
      utterance.onend = () => { window._activeUtterance = null; };
      utterance.onerror = (e) => {
        window._activeUtterance = null;
        console.warn('SpeechSynthesis error:', e);
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('AudioEngine speak error:', err);
    }
  }
}

const audio = new AudioEngine();

// ==========================================================================
// 2. Mistake Bank & Completion Statistics Storage Engines
// ==========================================================================

const MistakesEngine = {
  getMistakesMap() {
    try {
      return JSON.parse(localStorage.getItem('app_mistake_bank') || '{}');
    } catch (e) {
      return {};
    }
  },
  
  getMistakeIds() {
    return Object.keys(this.getMistakesMap());
  },

  addMistake(questionId) {
    const map = this.getMistakesMap();
    map[questionId] = { addedAt: Date.now() };
    localStorage.setItem('app_mistake_bank', JSON.stringify(map));
    updateMistakesBadge();
  },

  removeMistake(questionId) {
    const map = this.getMistakesMap();
    if (map[questionId]) {
      delete map[questionId];
      localStorage.setItem('app_mistake_bank', JSON.stringify(map));
      updateMistakesBadge();
    }
  },

  clearAll() {
    localStorage.removeItem('app_mistake_bank');
    updateMistakesBadge();
  }
};

function updateMistakesBadge() {
  const badge = document.getElementById('mistakes-count-badge');
  if (!badge) return;
  const count = MistakesEngine.getMistakeIds().length;
  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

const StatsEngine = {
  getQuizStats() {
    try {
      return JSON.parse(localStorage.getItem('app_stats_quiz') || '{"solved":{}}');
    } catch (e) {
      return { solved: {} };
    }
  },

  getLearningStats() {
    try {
      return JSON.parse(localStorage.getItem('app_stats_learning') || '{"terms":[],"grammar":[],"pron":[]}');
    } catch (e) {
      return { terms: [], grammar: [], pron: [] };
    }
  },

  recordQuestionAnswer(questionId, isCorrect, stream, unit) {
    const data = this.getQuizStats();
    if (!data.solved) data.solved = {};
    
    data.solved[questionId] = {
      isCorrect: isCorrect,
      stream: stream,
      unit: unit,
      timestamp: Date.now()
    };
    localStorage.setItem('app_stats_quiz', JSON.stringify(data));
  },

  recordStudyTerm(termId) {
    const data = this.getLearningStats();
    if (!data.terms) data.terms = [];
    if (!data.terms.includes(termId)) {
      data.terms.push(termId);
      localStorage.setItem('app_stats_learning', JSON.stringify(data));
    }
  },

  recordStudyGrammar(unitNum) {
    const data = this.getLearningStats();
    if (!data.grammar) data.grammar = [];
    const u = Number(unitNum);
    if (!data.grammar.includes(u)) {
      data.grammar.push(u);
      localStorage.setItem('app_stats_learning', JSON.stringify(data));
    }
  },

  recordStudyPron(unitNum) {
    const data = this.getLearningStats();
    if (!data.pron) data.pron = [];
    const u = Number(unitNum);
    if (!data.pron.includes(u)) {
      data.pron.push(u);
      localStorage.setItem('app_stats_learning', JSON.stringify(data));
    }
  },

  resetAll() {
    localStorage.removeItem('app_stats_quiz');
    localStorage.removeItem('app_stats_learning');
  }
};

// ==========================================================================
// 3. Application State Management & Helper Functions
// ==========================================================================
const state = {
  mode: 'quiz', // 'quiz' | 'learning'
  view: 'streams', // 'streams' | 'units' | 'quiz' | 'summary' | 'learning_unit' | 'stats' | 'mistakes'
  stream: null,    // 'vocab' | 'grammar' | 'pronunciation' | 'wordlist' | 'extra' | 'all_streams' | 'mistakes'
  unit: null,      // 1..6 | 'all' | 'random40' | 'mistakes'
  learningTab: 'vocab', // 'vocab' | 'grammar' | 'pronunciation'
  searchQuery: '',
  questions: [],
  currentIndex: 0,
  userAnswers: {},
  theme: localStorage.getItem('app_theme') || 'light',
  showTranslation: JSON.parse(localStorage.getItem('app_trans') ?? 'true')
};

function getAllCourseQuestions() {
  const courseData = window.COURSE_DATA || {};
  const streams = ['vocab', 'grammar', 'pronunciation', 'wordlist', 'extra'];
  let list = [];
  streams.forEach(s => {
    for (let u = 1; u <= 6; u++) {
      const uKey = `unit${u}`;
      if (courseData[s] && courseData[s][uKey]) {
        list = list.concat(courseData[s][uKey]);
      }
    }
  });
  return list;
}

function tokenizeEnglishText(text, localOverrides = null) {
  if (!text) return '';
  const globalLex = (typeof window !== 'undefined') ? window.COURSE_LEXICON || {} : {};
  
  return text.replace(/\b([A-Za-z]+)\b/g, (match, word) => {
    const lower = word.toLowerCase();
    let trans = null;
    
    if (localOverrides && localOverrides[lower]) {
      trans = localOverrides[lower];
    } else if (globalLex[lower]) {
      trans = globalLex[lower];
    }
    
    if (trans) {
      const safeTrans = encodeURIComponent(trans);
      return `<span class="trans-word" data-word="${word}" data-trans="${safeTrans}" tabindex="0" role="button">${word}</span>`;
    }
    return `<span class="trans-word" data-word="${word}" tabindex="0" role="button">${word}</span>`;
  });
}

function setHeaderTags(streamName, unitName) {
  const sTag = document.getElementById('header-stream-tag');
  const uTag = document.getElementById('header-unit-tag');
  if (sTag) sTag.textContent = streamName;
  if (uTag) uTag.textContent = unitName;
}

const viewport = document.getElementById('view-container');

// ==========================================================================
// 4. View Renderers
// ==========================================================================

// 4.1 Streams Home View
function renderStreamsView() {
  state.view = 'streams';
  state.stream = null;
  state.unit = null;
  state.questions = [];
  state.currentIndex = 0;
  state.userAnswers = {};
  state.searchQuery = '';

  updateMistakesBadge();
  setHeaderTags(state.mode === 'learning' ? 'Learning Hub' : 'Quiz Mode', 'Select Module');

  if (state.mode === 'learning') {
    renderLearningStreamsView();
    return;
  }

  const mistakeCount = MistakesEngine.getMistakeIds().length;
  const allQs = getAllCourseQuestions();
  const stats = StatsEngine.getQuizStats();
  const solvedCount = Object.keys(stats.solved || {}).length;
  const compPct = allQs.length > 0 ? Math.round((solvedCount / allQs.length) * 100) : 0;

  viewport.innerHTML = `
    <div class="hero-banner">
      <h1 class="hero-title">Balqa Applied English (2)</h1>
      <p class="hero-sub">Comprehensive Final Exam Preparation & Syllabus Mastery Platform</p>
    </div>

    <!-- Featured 40-Question Full Database Mock Exam -->
    <div class="featured-exam-box">
      <button class="mock-exam-btn" id="start-random-40-btn">
        <div class="mock-exam-icon">
          <svg class="svg-icon" style="width:28px;height:28px;"><use href="#icon-academic"/></svg>
        </div>
        <div class="mock-exam-info">
          <h3>⚡ Final Exam Simulation (40 Random Questions)</h3>
          <p>40 randomly sampled questions across all 6 Units & 5 Streams from the entire 633-question database</p>
        </div>
        <div class="mock-exam-badge">START EXAM</div>
      </button>
    </div>

    <!-- Quick Action Cards: Mistake Bank & Stats Dashboard -->
    <div class="action-cards-grid">
      <div class="action-card action-card-mistakes" id="home-mistakes-card">
        <div class="action-card-icon">
          <svg class="svg-icon" style="width:24px;height:24px;"><use href="#icon-bookmark"/></svg>
        </div>
        <div class="action-card-body">
          <h4>Mistake Bank</h4>
          <p>${mistakeCount > 0 ? `${mistakeCount} questions to clear & practice` : 'Zero errors! All caught up'}</p>
        </div>
        <div class="action-card-badge">${mistakeCount} Qs</div>
      </div>

      <div class="action-card action-card-stats" id="home-stats-card">
        <div class="action-card-icon">
          <svg class="svg-icon" style="width:24px;height:24px;"><use href="#icon-chart"/></svg>
        </div>
        <div class="action-card-body">
          <h4>Completion & Stats</h4>
          <p>${solvedCount} / ${allQs.length} Questions Solved (${compPct}%)</p>
        </div>
        <div class="action-card-badge">${compPct}%</div>
      </div>
    </div>

    <div class="section-label">Quiz Learning Streams</div>
    <div class="stream-grid">
      <div class="stream-card" data-stream="vocab">
        <div class="stream-icon-box icon-vocab"><svg class="svg-icon"><use href="#icon-book"/></svg></div>
        <div class="stream-info">
          <h3>Vocabulary</h3>
          <p>Synonyms, antonyms, cloze, definitions & collocations</p>
        </div>
      </div>
      <div class="stream-card" data-stream="grammar">
        <div class="stream-icon-box icon-grammar"><svg class="svg-icon"><use href="#icon-academic"/></svg></div>
        <div class="stream-info">
          <h3>Grammar</h3>
          <p>Tenses, stative verbs, passives, reported speech & conditionals</p>
        </div>
      </div>
      <div class="stream-card" data-stream="pronunciation">
        <div class="stream-icon-box icon-pron"><svg class="svg-icon"><use href="#icon-volume"/></svg></div>
        <div class="stream-info">
          <h3>Pronunciation</h3>
          <p>IPA phonetics, diphthongs, clusters, homophones & intonation</p>
        </div>
      </div>
      <div class="stream-card" data-stream="wordlist">
        <div class="stream-icon-box icon-wordlist"><svg class="svg-icon"><use href="#icon-book"/></svg></div>
        <div class="stream-info">
          <h3>Word List Glossary</h3>
          <p>Full 1-to-1 definitions from official textbook glossaries</p>
        </div>
      </div>
      <div class="stream-card" data-stream="extra">
        <div class="stream-icon-box icon-extra"><svg class="svg-icon"><use href="#icon-academic"/></svg></div>
        <div class="stream-info">
          <h3>Extra & Wisdom</h3>
          <p>Wisdom quotes, reading comprehension passages & listening</p>
        </div>
      </div>
    </div>
  `;
}

// 4.1.1 Learning Hub Unit Selector View
function renderLearningStreamsView() {
  viewport.innerHTML = `
    <div class="hero-banner">
      <h1 class="hero-title">Learning Hub (مركز التعلّم)</h1>
      <p class="hero-sub">In-depth Master Dictionary, Grammar Academy & Phonetics Studio</p>
    </div>

    <div class="section-label">Select Course Unit to Study</div>
    <div class="unit-list-grid">
      <button class="unit-card-btn learn-unit-btn" data-unit="1">
        <h4>Unit 1</h4>
        <p>Learning & Education</p>
      </button>
      <button class="unit-card-btn learn-unit-btn" data-unit="2">
        <h4>Unit 2</h4>
        <p>Nature or Nurture?</p>
      </button>
      <button class="unit-card-btn learn-unit-btn" data-unit="3">
        <h4>Unit 3</h4>
        <p>Life at Work</p>
      </button>
      <button class="unit-card-btn learn-unit-btn" data-unit="4">
        <h4>Unit 4</h4>
        <p>Life and Nature</p>
      </button>
      <button class="unit-card-btn learn-unit-btn" data-unit="5">
        <h4>Unit 5</h4>
        <p>Gossip & the Media</p>
      </button>
      <button class="unit-card-btn learn-unit-btn" data-unit="6">
        <h4>Unit 6</h4>
        <p>Sports</p>
      </button>
    </div>
  `;
}

// 4.2 Unit Selection View (Quiz Mode)
function renderUnitsView(streamKey) {
  state.view = 'units';
  state.stream = streamKey;
  
  const streamTitles = {
    vocab: 'Vocabulary',
    grammar: 'Grammar',
    pronunciation: 'Pronunciation',
    wordlist: 'Word List',
    extra: 'Extra & Wisdom'
  };

  setHeaderTags(streamTitles[streamKey] || 'Quiz', 'Select Unit');

  viewport.innerHTML = `
    <div class="hero-banner">
      <h2 class="hero-title">${streamTitles[streamKey] || streamKey}</h2>
      <p class="hero-sub">Choose a specific unit or take the all-unit comprehensive exam</p>
    </div>
    <div class="section-label">Course Units</div>
    <div class="unit-list-grid">
      <button class="unit-card-btn" data-unit="1">
        <h4>Unit 1</h4>
        <p>Learning & Education</p>
      </button>
      <button class="unit-card-btn" data-unit="2">
        <h4>Unit 2</h4>
        <p>Nature or Nurture?</p>
      </button>
      <button class="unit-card-btn" data-unit="3">
        <h4>Unit 3</h4>
        <p>Life at Work</p>
      </button>
      <button class="unit-card-btn" data-unit="4">
        <h4>Unit 4</h4>
        <p>Life and Nature</p>
      </button>
      <button class="unit-card-btn" data-unit="5">
        <h4>Unit 5</h4>
        <p>Gossip & the Media</p>
      </button>
      <button class="unit-card-btn" data-unit="6">
        <h4>Unit 6</h4>
        <p>Sports</p>
      </button>
      <button class="unit-card-btn random-exam-btn" data-unit="random40">
        <h4>🎲 40 Random Questions (${streamTitles[streamKey] || streamKey})</h4>
        <p>40 randomly sampled questions from all units in this stream</p>
      </button>
      <button class="unit-card-btn full-width" data-unit="all">
        <h4>Practice All Questions in this Stream (Combined)</h4>
      </button>
    </div>
  `;
}

// 4.3 Mistake Bank View
function renderMistakesView() {
  state.view = 'mistakes';
  setHeaderTags('Mistake Bank', 'Review & Practice');

  const allQuestions = getAllCourseQuestions();
  const mistakeIds = MistakesEngine.getMistakeIds();
  const mistakeQuestions = allQuestions.filter(q => mistakeIds.includes(q.id));

  if (mistakeQuestions.length === 0) {
    viewport.innerHTML = `
      <div class="mistakes-container">
        <div class="empty-state-card">
          <div class="empty-state-icon">
            <svg class="svg-icon" style="width:32px;height:32px;"><use href="#icon-check"/></svg>
          </div>
          <h3>Mistake Bank is Empty!</h3>
          <p>You currently have zero recorded mistakes. As you practice quizzes, any question you answer incorrectly will automatically appear here until you answer it correctly.</p>
          <button class="btn btn-primary" id="mistakes-home-btn">Practice Quizzes</button>
        </div>
      </div>
    `;
    return;
  }

  viewport.innerHTML = `
    <div class="mistakes-container">
      <div class="mistakes-header-card">
        <h2>📕 Mistake Bank (${mistakeQuestions.length} Questions)</h2>
        <p>Questions you previously answered incorrectly. Whenever you answer any question correctly, it will be immediately removed from this vault!</p>
        <div class="mistakes-btn-row">
          <button class="btn btn-primary" id="start-mistakes-quiz-btn">
            ⚡ Start Practice Quiz on Mistake Bank (${mistakeQuestions.length} Qs)
          </button>
          <button class="btn btn-outline" id="clear-mistakes-vault-btn">
            Clear Bank
          </button>
        </div>
      </div>

      <div class="section-label">Saved Mistake Questions (${mistakeQuestions.length})</div>
      <div class="mistake-list">
        ${mistakeQuestions.map((q, idx) => {
          const correctChoice = q.choices.find(c => c.id === q.correctChoiceId);
          return `
            <div class="mistake-card-item">
              <div class="mistake-meta">
                <div class="mistake-tags">
                  <span class="mistake-tag">#${idx + 1}</span>
                  <span class="mistake-tag">Unit ${q.unit}</span>
                  <span class="mistake-tag">${q.stream.toUpperCase()}</span>
                </div>
                <span class="topic-badge">${q.topic}</span>
              </div>
              <div class="mistake-prompt-en">${q.promptEn}</div>
              <div class="mistake-prompt-ar">${q.promptAr}</div>
              <div class="mistake-correct-box">
                <span>✓ Correct Answer:</span> <strong>${correctChoice ? correctChoice.textEn : q.correctChoiceId}</strong>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 4.4 Completion Statistics Dashboard View
function renderStatsView() {
  state.view = 'stats';
  setHeaderTags('Completion Statistics', 'Detailed Progress');

  const allQuestions = getAllCourseQuestions();
  const totalQuestionsCount = allQuestions.length; // 633
  const statsData = StatsEngine.getQuizStats();
  const solvedMap = statsData.solved || {};
  const solvedCount = Object.keys(solvedMap).length;
  const correctCount = Object.values(solvedMap).filter(s => s.isCorrect).length;
  const accuracyPct = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;
  const overallCompletionPct = totalQuestionsCount > 0 ? Math.round((solvedCount / totalQuestionsCount) * 100) : 0;

  // Learning hub stats
  const learnStats = StatsEngine.getLearningStats();
  const studiedTermsCount = (learnStats.terms || []).length;
  const grammarUnitsCount = (learnStats.grammar || []).length;
  const pronUnitsCount = (learnStats.pron || []).length;

  // Stream stats
  const streams = [
    { key: 'vocab', name: 'Vocabulary', fillClass: 'fill-vocab', total: 205 },
    { key: 'grammar', name: 'Grammar', fillClass: 'fill-grammar', total: 145 },
    { key: 'pronunciation', name: 'Pronunciation', fillClass: 'fill-pron', total: 82 },
    { key: 'wordlist', name: 'Word List', fillClass: 'fill-wordlist', total: 107 },
    { key: 'extra', name: 'Extra & Wisdom', fillClass: 'fill-extra', total: 66 }
  ];

  // Unit stats
  const unitsInfo = [
    { u: 1, name: 'Learning & Education', total: 80 },
    { u: 2, name: 'Nature or Nurture?', total: 115 },
    { u: 3, name: 'Life at Work', total: 99 },
    { u: 4, name: 'Life and Nature', total: 133 },
    { u: 5, name: 'Gossip & Media', total: 91 },
    { u: 6, name: 'Sports', total: 87 }
  ];

  viewport.innerHTML = `
    <div class="stats-container">
      <div class="hero-banner">
        <h1 class="hero-title">Completion & Study Statistics</h1>
        <p class="hero-sub">Detailed breakdown of your syllabus progress, solved questions, and study milestones</p>
      </div>

      <!-- Hero Stat Cards -->
      <div class="stats-hero-grid">
        <div class="stat-hero-card">
          <div class="stat-hero-number">${overallCompletionPct}%</div>
          <div class="stat-hero-label">Overall Quiz Solved</div>
          <div class="stat-hero-sub">${solvedCount} / ${totalQuestionsCount} Questions</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-number" style="color:#10b981;">${accuracyPct}%</div>
          <div class="stat-hero-label">Mastery Accuracy</div>
          <div class="stat-hero-sub">${correctCount} Correct / ${solvedCount} Attempted</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-number" style="color:#8b5cf6;">${studiedTermsCount}</div>
          <div class="stat-hero-label">Dictionary Terms Studied</div>
          <div class="stat-hero-sub">Out of 256 Headwords</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-number" style="color:#f59e0b;">${Math.max(grammarUnitsCount, pronUnitsCount)} / 6</div>
          <div class="stat-hero-label">Grammar & Phonetics Units</div>
          <div class="stat-hero-sub">Modules Visited</div>
        </div>
      </div>

      <!-- Streams Progress Box -->
      <div class="stats-section-box">
        <h3><span>📊 Progress by Learning Stream</span></h3>
        ${streams.map(s => {
          const streamSolved = Object.keys(solvedMap).filter(qid => {
            const q = allQuestions.find(x => x.id === qid);
            return q && q.stream === s.key;
          }).length;
          const sPct = Math.round((streamSolved / s.total) * 100);
          return `
            <div class="stat-row-item">
              <div class="stat-row-header">
                <span>${s.name}</span>
                <span class="stat-row-counts">${streamSolved} / ${s.total} (${sPct}%)</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill ${s.fillClass}" style="width: ${sPct}%"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Units Progress Box -->
      <div class="stats-section-box">
        <h3><span>📚 Progress by Course Unit</span></h3>
        <div class="unit-stats-grid">
          ${unitsInfo.map(u => {
            const uSolved = Object.keys(solvedMap).filter(qid => {
              const q = allQuestions.find(x => x.id === qid);
              return q && q.unit === u.u;
            }).length;
            const uPct = Math.round((uSolved / u.total) * 100);
            return `
              <div class="unit-stat-mini-card">
                <div class="unit-stat-mini-title">
                  <span>Unit ${u.u}: ${u.name}</span>
                  <span class="stat-row-counts">${uSolved}/${u.total}</span>
                </div>
                <div class="stat-bar-track">
                  <div class="stat-bar-fill fill-general" style="width: ${uPct}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="stats-actions-bar">
        <button class="btn btn-outline" id="reset-stats-btn" style="color:#e11d48; border-color:#e11d48;">
          Reset Statistics
        </button>
        <button class="btn btn-primary" id="stats-home-btn">
          Back to Quizzes
        </button>
      </div>
    </div>
  `;
}

// 4.5 Learning Hub Unit View (3 Sub-Tabs)

function renderTableRowCells(row) {
  if (Array.isArray(row)) {
    return row.map(cell => renderTableCellContent(cell)).join('');
  }
  if (typeof row === 'object' && row !== null) {
    return Object.values(row).map(cell => renderTableCellContent(cell)).join('');
  }
  return `<td>${row}</td>`;
}

function renderTableCellContent(cell) {
  if (Array.isArray(cell)) {
    return `<td><div class="cell-pill-wrap">${cell.map(w => `<button class="word-sound-mini-pill learn-audio-btn" data-speak-text="${w}">${w}</button>`).join(' ')}</div></td>`;
  }
  return `<td>${cell}</td>`;
}

function renderLearningUnitView(unitNum) {
  state.view = 'learning_unit';
  state.unit = unitNum;
  const learningData = window.COURSE_LEARNING_DATA || {};
  const uKey = `unit${unitNum}`;

  // Record stats
  StatsEngine.recordStudyGrammar(unitNum);
  StatsEngine.recordStudyPron(unitNum);

  const vocabList = (learningData.vocab && learningData.vocab[uKey]) || [];
  const grammarObj = (learningData.grammar && learningData.grammar[uKey]) || null;
  const pronObj = (learningData.pronunciation && learningData.pronunciation[uKey]) || null;

  setHeaderTags(`Unit ${unitNum} Learning Hub`, state.learningTab.toUpperCase());

  viewport.innerHTML = `
    <div class="learning-hub-container">
      <div class="learning-tabs-header">
        <button class="learning-tab-btn ${state.learningTab === 'vocab' ? 'active' : ''}" data-tab="vocab">
          <svg class="svg-icon"><use href="#icon-book"/></svg> Master Dictionary (${vocabList.length})
        </button>
        <button class="learning-tab-btn ${state.learningTab === 'grammar' ? 'active' : ''}" data-tab="grammar">
          <svg class="svg-icon"><use href="#icon-academic"/></svg> Grammar Academy
        </button>
        <button class="learning-tab-btn ${state.learningTab === 'pronunciation' ? 'active' : ''}" data-tab="pronunciation">
          <svg class="svg-icon"><use href="#icon-volume"/></svg> Phonetics Studio
        </button>
      </div>

      <div class="learning-tab-content">
        ${
          state.learningTab === 'vocab' ? renderLearningVocabSection(vocabList) :
          state.learningTab === 'grammar' ? renderLearningGrammarSection(grammarObj) :
          renderLearningPronSection(pronObj)
        }
      </div>
    </div>
  `;

  // Attach real-time search input listener for Vocab tab
  if (state.learningTab === 'vocab') {
    const searchInput = document.getElementById('dict-search-input');
    if (searchInput) {
      searchInput.value = state.searchQuery;
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        const container = document.getElementById('dict-table-container');
        if (container) {
          container.innerHTML = renderVocabTableOnly(vocabList, state.searchQuery);
        }
      });
    }
  }
}

// 4.5.1 Vocab Master Dictionary Table Renderer
function renderLearningVocabSection(vocabList) {
  return `
    <div class="dict-control-bar">
      <div class="dict-search-wrap">
        <svg class="svg-icon search-icon"><use href="#icon-search"/></svg>
        <input type="text" id="dict-search-input" class="dict-search-input" placeholder="Search by word, definition, or Arabic meaning..." value="${state.searchQuery}">
      </div>
      <div class="dict-counter">Total Terms: <strong>${vocabList.length}</strong></div>
    </div>

    <div id="dict-table-container">
      ${renderVocabTableOnly(vocabList, state.searchQuery)}
    </div>
  `;
}

function renderVocabTableOnly(vocabList, query) {
  const q = (query || '').trim().toLowerCase();
  const filtered = vocabList.filter(item => {
    if (!q) return true;
    return item.term.toLowerCase().includes(q) ||
           item.definitionEn.toLowerCase().includes(q) ||
           (item.meaningAr && item.meaningAr.toLowerCase().includes(q)) ||
           (item.definitionAr && item.definitionAr.toLowerCase().includes(q));
  });

  if (filtered.length === 0) {
    return `
      <div class="dict-empty-state">
        <p>No matching vocabulary terms found for "${query}".</p>
      </div>
    `;
  }

  return `
    <div class="dict-table-wrap">
      <table class="dict-master-table">
        <thead>
          <tr>
            <th class="th-num">#</th>
            <th class="th-term">Word / Pronunciation</th>
            <th class="th-mean">Arabic Meaning</th>
            <th class="th-action">Audio</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map((item, idx) => `
            <tr class="dict-word-row" data-word-id="${item.id}" data-term="${item.term}">
              <td class="cell-num">${idx + 1}</td>
              <td class="cell-term">
                <div class="term-line">
                  <span class="dict-term-title">${item.term}</span>
                  <span class="dict-pos-tag">${item.pos}</span>
                </div>
                <div class="dict-ipa-line">${item.ipa}</div>
              </td>
              <td class="cell-mean">
                <div class="dict-mean-ar">${item.meaningAr || '—'}</div>
              </td>
              <td class="cell-action cell-no-click">
                <button class="speaker-btn learn-audio-btn" data-speak-text="${item.term}" title="Pronounce ${item.term}" aria-label="Pronounce ${item.term}">
                  <svg class="svg-icon"><use href="#icon-volume"/></svg>
                </button>
              </td>
            </tr>
            <!-- Expanded Details Drawer Card -->
            <tr id="dict-detail-${item.id}" class="dict-detail-row hidden">
              <td colspan="4" class="dict-detail-cell">
                <div class="dict-drawer-card">
                  <div class="drawer-header">
                    <span class="drawer-badge-cat">${item.category.toUpperCase()}</span>
                    <span class="drawer-badge-unit">Unit ${state.unit} Term</span>
                  </div>
                  <div class="drawer-grid">
                    <div class="drawer-col-en">
                      <div class="drawer-label">Pedagogical Definition (English):</div>
                      <div class="drawer-text-en">${item.definitionEn}</div>
                      <div class="drawer-label" style="margin-top:12px;">Curated Example Sentence:</div>
                      <div class="drawer-example-en">
                        <span>${item.exampleEn}</span>
                        <button class="speaker-btn learn-audio-btn" data-speak-text="${item.exampleEn}" title="Listen to example">
                          <svg class="svg-icon" style="width:16px;height:16px;"><use href="#icon-volume"/></svg>
                        </button>
                      </div>
                    </div>
                    <div class="drawer-col-ar">
                      <div class="drawer-label">الشرح والتوضيح الأكاديمي:</div>
                      <div class="drawer-text-ar">${item.definitionAr}</div>
                      <div class="drawer-label" style="margin-top:12px;">ترجمة المثال:</div>
                      <div class="drawer-example-ar">${item.exampleAr}</div>
                    </div>
                  </div>
                  ${(item.synonyms?.length || item.antonyms?.length) ? `
                    <div class="drawer-tokens-bar">
                      ${item.synonyms?.length ? `
                        <div class="token-group">
                          <span class="token-title">Synonyms:</span>
                          ${item.synonyms.map(s => `<span class="dict-syn-pill">${s}</span>`).join('')}
                        </div>
                      ` : ''}
                      ${item.antonyms?.length ? `
                        <div class="token-group">
                          <span class="token-title">Antonyms:</span>
                          ${item.antonyms.map(a => `<span class="dict-ant-pill">${a}</span>`).join('')}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// 4.5.2 Grammar Academy Section Renderer
function renderLearningGrammarSection(grammarObj) {
  if (!grammarObj || !grammarObj.sections || grammarObj.sections.length === 0) {
    return `<div class="empty-state-card"><p>Grammar module is being compiled.</p></div>`;
  }

  return `
    <div class="grammar-academy-wrap">
      <div class="grammar-unit-hero">
        <h2>${grammarObj.titleEn || grammarObj.title || 'Grammar Academy'}</h2>
      </div>

      ${grammarObj.sections.map((sec, sIdx) => {
        const title = sec.topicEn || sec.title || `Lesson ${sIdx + 1}`;
        const summary = sec.summaryEn || sec.summary || '';
        const spellingObj = sec.spellingRules || null;
        const spellingTitle = spellingObj ? (spellingObj.titleEn || spellingObj.title || 'Spelling Rules') : '';
        const spellingList = spellingObj ? (spellingObj.items || spellingObj.rules || []) : [];

        return `
          <div class="grammar-section-card">
            <div class="grammar-sec-header">
              <span class="grammar-sec-num">Lesson ${sIdx + 1}</span>
              <div class="grammar-sec-titles">
                <h3 class="grammar-topic-en">${title}</h3>
                ${summary ? `<p class="grammar-summary-en">${summary}</p>` : ''}
              </div>
            </div>

            ${sec.ruleTable ? `
              <div class="grammar-table-wrap">
                <table class="grammar-rule-table">
                  <thead>
                    <tr>
                      ${(sec.ruleTable.headers || []).map(h => `<th>${h}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${(sec.ruleTable.rows || []).map(r => `
                      <tr>
                        ${renderTableRowCells(r)}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}

            ${spellingList.length > 0 ? `
              <div class="grammar-spelling-box">
                <h4>${spellingTitle}</h4>
                <div class="spelling-items-grid">
                  ${spellingList.map(item => {
                    const cond = item.rule || item.condition || '';
                    const ex = item.examples || item.change || '';
                    return `
                      <div class="spelling-rule-pill">
                        <span class="spelling-rule-tag">${cond}</span>
                        <span class="spelling-rule-example">${ex}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}

            ${sec.cases && sec.cases.length > 0 ? `
              <div class="grammar-cases-list">
                <div class="section-label" style="margin-top:16px;">Comprehensive Case Examples (${sec.cases.length})</div>
                ${sec.cases.map(c => `
                  <div class="grammar-case-item">
                    <div class="case-badge-row">
                      <span class="case-cat-badge">${c.category}</span>
                    </div>
                    <div class="case-sentence-en">
                      <span>${c.sentenceEn}</span>
                      <button class="speaker-btn learn-audio-btn" data-speak-text="${c.sentenceEn}" title="Listen to sentence">
                        <svg class="svg-icon" style="width:16px;height:16px;"><use href="#icon-volume"/></svg>
                      </button>
                    </div>
                    <div class="case-sentence-ar">${c.sentenceAr}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 4.5.3 Pronunciation Studio Section Renderer (Clean Quick-Review Table - No Tongue Descriptions)
function renderLearningPronSection(pronObj) {
  if (!pronObj) {
    return `<div class="empty-state-card"><p>Pronunciation module is being compiled.</p></div>`;
  }

  const soundsList = pronObj.sounds || pronObj.phoneticCards || [];
  const decObj = pronObj.broadTranscriptionDecoding;
  const decTitle = decObj ? (decObj.title || decObj.titleEn || 'Broad IPA Transcription Practice') : '';
  const decWords = decObj ? (Array.isArray(decObj) ? decObj : (decObj.words || decObj.items || [])) : [];

  return `
    <div class="pron-studio-wrap">
      <div class="pron-unit-hero">
        <h2>${pronObj.titleEn || pronObj.title || 'Phonetics & Pronunciation Studio'}</h2>
      </div>

      <!-- Quick Review Master Table Card -->
      <div class="dict-table-wrap">
        <table class="dict-master-table pron-review-table">
          <thead>
            <tr>
              <th style="width: 40px;" class="cell-num">#</th>
              <th style="width: 140px;">Sound / IPA</th>
              <th style="min-width: 220px;">Spelling Rule / Key Trigger</th>
              <th>Interactive Audio Examples (Click to Listen)</th>
            </tr>
          </thead>
          <tbody>
            ${soundsList.map((s, idx) => {
              const symbol = s.symbol || s.sound || '';
              const name = s.name || s.nameEn || '';
              const rule = s.rule || '';
              const words = s.words || [];

              return `
                <tr class="pron-table-row">
                  <td class="cell-num">${idx + 1}</td>
                  <td class="cell-sound-compact">
                    <div class="sound-symbol-badge-compact">${symbol}</div>
                    <div class="sound-name-compact">${name}</div>
                  </td>
                  <td class="cell-rule-compact">
                    <div class="sound-rule-compact">${rule || 'Standard pronunciation pattern.'}</div>
                  </td>
                  <td class="cell-words-compact">
                    <div class="word-pill-grid-compact">
                      ${words.map(w => {
                        const sp = w.spelling || w.en || '';
                        const ipa = w.ipa || '';
                        return `
                          <button class="word-sound-pill-compact learn-audio-btn" data-speak-text="${sp}" title="Listen to ${sp}">
                            <span class="pill-spelling">${sp}</span>
                            ${ipa ? `<span class="pill-ipa-compact">${ipa}</span>` : ''}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      ${decWords.length > 0 ? `
        <div class="pron-decoding-box" style="margin-top:20px;">
          <h3>${decTitle}</h3>
          <div class="ipa-decoding-grid">
            ${decWords.map(item => {
              const word = item.standardWord || item.word || item.en || '';
              const ipa = item.ipa || '';
              return `
                <button class="ipa-decode-card learn-audio-btn" data-speak-text="${word}">
                  <span class="decode-ipa">${ipa}</span>
                  <span class="decode-arrow">➔</span>
                  <span class="decode-word">${word}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 4.6 Start Quiz Session
function startQuiz(streamKey, unitKey, customQuestions = null) {
  state.view = 'quiz';
  state.stream = streamKey;
  state.unit = unitKey;
  state.currentIndex = 0;
  state.userAnswers = {};

  const courseData = window.COURSE_DATA || {};
  let rawList = [];

  if (customQuestions && customQuestions.length > 0) {
    rawList = customQuestions;
  } else if (streamKey === 'mistakes' || unitKey === 'mistakes') {
    const allQs = getAllCourseQuestions();
    const mistakeIds = MistakesEngine.getMistakeIds();
    rawList = allQs.filter(q => mistakeIds.includes(q.id));
  } else if (unitKey === 'random40') {
    const streams = (streamKey === 'all_streams' || streamKey === 'mock_exam') 
      ? ['vocab', 'grammar', 'pronunciation', 'wordlist', 'extra'] 
      : [streamKey];
    
    let pool = [];
    streams.forEach(s => {
      for (let u = 1; u <= 6; u++) {
        const uKey = `unit${u}`;
        if (courseData[s] && courseData[s][uKey]) {
          pool = pool.concat(courseData[s][uKey]);
        }
      }
    });

    const sampleCount = Math.min(40, pool.length);
    rawList = shuffleArray(pool).slice(0, sampleCount);
  } else if (unitKey === 'all') {
    for (let u = 1; u <= 6; u++) {
      const uKey = `unit${u}`;
      if (courseData[streamKey] && courseData[streamKey][uKey]) {
        rawList = rawList.concat(courseData[streamKey][uKey]);
      }
    }
  } else {
    const uKey = `unit${unitKey}`;
    rawList = (courseData[streamKey] && courseData[streamKey][uKey]) ? [...courseData[streamKey][uKey]] : [];
  }

  if (rawList.length === 0) {
    showInAppConfirm({
      title: 'Section Empty',
      message: 'No questions available in this section.',
      okText: 'Back to Home',
      cancelText: null,
      onConfirm: () => renderStreamsView()
    });
    return;
  }

  // Deep clone and shuffle option choices per question using Fisher-Yates
  state.questions = rawList.map(q => {
    return { ...q, choices: shuffleArray(q.choices) };
  });

  renderQuestion();
}

// 4.7 Render Active Question Card
function renderQuestion() {
  audio.stop();
  const popover = document.getElementById('word-popover');
  if (popover) popover.classList.add('hidden');

  const q = state.questions[state.currentIndex];
  const total = state.questions.length;
  const answered = state.userAnswers[state.currentIndex];

  const streamTitles = {
    vocab: 'Vocabulary',
    grammar: 'Grammar',
    pronunciation: 'Pronunciation',
    wordlist: 'Word List',
    extra: 'Extra & Wisdom',
    all_streams: 'Final Exam Simulation',
    mock_exam: 'Final Exam Simulation',
    mistakes: 'Mistake Bank Quiz'
  };

  let streamLabel = (streamTitles[state.stream] || state.stream).toUpperCase();
  let unitLabel = `Unit ${q.unit} (Q ${state.currentIndex + 1}/${total})`;

  if (state.stream === 'mistakes' || state.unit === 'mistakes') {
    streamLabel = 'MISTAKE BANK QUIZ';
    unitLabel = `Review (Q ${state.currentIndex + 1}/${total})`;
  } else if (state.stream === 'all_streams' || state.stream === 'mock_exam') {
    streamLabel = 'FINAL EXAM SIMULATION';
    unitLabel = `40 Random Qs (Q ${state.currentIndex + 1}/${total})`;
  } else if (state.unit === 'random40') {
    unitLabel = `40 Random Qs (Q ${state.currentIndex + 1}/${total})`;
  } else if (state.unit === 'all') {
    unitLabel = `All Units (Q ${state.currentIndex + 1}/${total})`;
  }

  setHeaderTags(streamLabel, unitLabel);

  const progressPercent = ((state.currentIndex + 1) / total) * 100;
  const letters = ['A', 'B', 'C', 'D'];
  const tokenizedEnPrompt = tokenizeEnglishText(q.promptEn, q.lexiconTokens);

  viewport.innerHTML = `
    <div class="quiz-header">
      <div class="progress-track">
        <div class="progress-fill" style="width: ${progressPercent}%"></div>
      </div>
      <div class="quiz-meta-row">
        <span>Question ${state.currentIndex + 1} of ${total}</span>
        <span class="topic-badge">${q.topic}</span>
      </div>
    </div>

    <!-- Question Prompt Card -->
    <div class="prompt-card">
      <div class="prompt-top">
        <div class="prompt-text-en">${tokenizedEnPrompt}</div>
        <button class="speaker-btn" id="prompt-speaker-btn" title="Pronounce Question" aria-label="Pronounce Question">
          <svg class="svg-icon"><use href="#icon-volume"/></svg>
        </button>
      </div>
      <div class="prompt-text-ar">${q.promptAr}</div>
    </div>

    <!-- Options List -->
    <div class="options-list" id="options-list">
      ${q.choices.map((c, i) => {
        let rowState = '';
        let letterIndicator = letters[i];
        if (answered) {
          if (c.id === q.correctChoiceId) {
            rowState = 'correct';
            letterIndicator = '✓';
          } else if (c.id === answered.choiceId) {
            rowState = 'incorrect';
            letterIndicator = '✕';
          }
        }
        return `
          <div class="option-row ${rowState}" data-choice-id="${c.id}">
            <button class="option-btn" data-choice-id="${c.id}" ${answered ? 'disabled' : ''}>
              <span class="option-letter">${letterIndicator}</span>
              <div class="option-text-wrap">
                <span class="opt-en">${c.textEn}</span>
                <span class="opt-ar">${c.textAr}</span>
              </div>
            </button>
            <button class="speaker-btn opt-audio-btn" data-audio-text="${c.textEn}" title="Listen to option" aria-label="Listen to option ${letters[i]}">
              <svg class="svg-icon"><use href="#icon-volume"/></svg>
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Explanation Container -->
    <div id="explanation-container">
      ${answered ? `
        <div class="explanation-card">
          <div class="explanation-header">
            <span class="explanation-title">${answered.isCorrect ? '✓ Correct Answer' : '✕ Explanation'}</span>
            <button class="speaker-btn" id="exp-speaker-btn" title="Listen to Explanation" aria-label="Listen to explanation">
              <svg class="svg-icon"><use href="#icon-volume"/></svg>
            </button>
          </div>
          <div class="exp-en">${tokenizeEnglishText(q.explanationEn, q.lexiconTokens)}</div>
          <div class="exp-ar">${q.explanationAr}</div>
        </div>
      ` : ''}
    </div>

    <!-- Navigation Footer -->
    <div class="quiz-nav-bar">
      <button class="btn btn-outline" id="prev-btn" ${state.currentIndex === 0 ? 'disabled' : ''}>
        <svg class="svg-icon"><use href="#icon-chevron-left"/></svg> Previous
      </button>
      <button class="btn btn-primary" id="next-btn">
        ${state.currentIndex === total - 1 ? 'Finish Quiz' : 'Next'} <svg class="svg-icon"><use href="#icon-chevron-right"/></svg>
      </button>
    </div>
  `;

  // Attach Audio Event Listeners for Prompt and Explanation
  const promptSpeaker = document.getElementById('prompt-speaker-btn');
  if (promptSpeaker) {
    promptSpeaker.addEventListener('click', () => audio.speak(q.promptEn));
  }
  
  const expSpeaker = document.getElementById('exp-speaker-btn');
  if (expSpeaker) {
    expSpeaker.addEventListener('click', () => audio.speak(q.explanationEn));
  }
}

// 4.8 Handle Option Selection, Scoring & Mistake Bank Auto-Removal
function handleOptionSelect(selectedChoiceId) {
  const q = state.questions[state.currentIndex];
  const isCorrect = (selectedChoiceId === q.correctChoiceId);
  
  state.userAnswers[state.currentIndex] = {
    choiceId: selectedChoiceId,
    isCorrect: isCorrect
  };

  // Record stats
  StatsEngine.recordQuestionAnswer(q.id, isCorrect, q.stream, q.unit);

  // If answered correctly, remove from Mistake Bank! If wrong, save it!
  if (isCorrect) {
    MistakesEngine.removeMistake(q.id);
  } else {
    MistakesEngine.addMistake(q.id);
  }

  renderQuestion();
}

// 4.9 Quiz Summary View
function renderSummaryView() {
  state.view = 'summary';
  setHeaderTags('Quiz Results', 'Performance Summary');

  const total = state.questions.length;
  let correctCount = 0;
  const incorrectQuestions = [];

  state.questions.forEach((q, idx) => {
    const ans = state.userAnswers[idx];
    if (ans && ans.isCorrect) {
      correctCount++;
    } else {
      incorrectQuestions.push(q);
    }
  });

  const percentage = Math.round((correctCount / total) * 100);

  viewport.innerHTML = `
    <div class="summary-card">
      <div class="score-circle">
        <span class="score-number">${percentage}%</span>
        <span class="score-label">${correctCount} of ${total} Correct</span>
      </div>
      <h2 class="summary-heading">${percentage >= 70 ? '🎉 Outstanding Performance!' : '📚 Good Practice Session!'}</h2>
      <p class="summary-feedback">
        ${percentage >= 85 ? 'You have thoroughly mastered the syllabus material for this section.' :
          percentage >= 70 ? 'Solid performance. Review the missed items to ensure total exam readiness.' :
          'Review the textbook explanations below and practice your Mistake Bank to solidify key concepts.'}
      </p>

      <div class="summary-btn-group">
        ${incorrectQuestions.length > 0 ? `
          <button class="btn btn-primary" id="summary-review-btn">
            Review Missed Questions (${incorrectQuestions.length})
          </button>
        ` : ''}
        <button class="btn btn-outline" id="summary-retake-btn">
          Retake Full Quiz
        </button>
        <button class="btn btn-secondary" id="summary-home-btn">
          Back to Home
        </button>
      </div>
    </div>
  `;

  document.getElementById('summary-home-btn').addEventListener('click', renderStreamsView);
  document.getElementById('summary-retake-btn').addEventListener('click', () => startQuiz(state.stream, state.unit));
  
  const reviewBtn = document.getElementById('summary-review-btn');
  if (reviewBtn) {
    reviewBtn.addEventListener('click', () => startQuiz(state.stream, state.unit, incorrectQuestions));
  }
}

// ==========================================================================
// 5. In-App Confirmation & Modal Dialog System
// ==========================================================================
function showInAppConfirm({
  title = 'Quit Quiz?',
  message = 'Are you sure you want to quit the current quiz and return to Home? Your progress will be lost.',
  okText = 'Quit to Home',
  cancelText = 'Cancel',
  onConfirm = null,
  onCancel = null
}) {
  const modal = document.getElementById('confirm-modal');
  if (!modal) {
    if (onConfirm) onConfirm();
    return;
  }

  const titleEl = document.getElementById('confirm-modal-title');
  const messageEl = document.getElementById('confirm-modal-message');
  const okBtn = document.getElementById('confirm-modal-ok');
  const cancelBtn = document.getElementById('confirm-modal-cancel');

  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;

  if (okBtn) okBtn.textContent = okText;

  if (cancelBtn) {
    if (cancelText) {
      cancelBtn.textContent = cancelText;
      cancelBtn.classList.remove('hidden');
    } else {
      cancelBtn.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');

  const cleanup = () => {
    modal.classList.add('hidden');
    if (okBtn) okBtn.onclick = null;
    if (cancelBtn) cancelBtn.onclick = null;
  };

  if (okBtn) {
    okBtn.onclick = () => {
      cleanup();
      if (onConfirm) onConfirm();
    };
  }

  if (cancelBtn) {
    cancelBtn.onclick = () => {
      cleanup();
      if (onCancel) onCancel();
    };
  }
}

// ==========================================================================
// 6. Global Event Delegations & Interactivity
// ==========================================================================

viewport.addEventListener('click', (e) => {
  // 6.1 Home Action Cards Click
  if (e.target.closest('#home-mistakes-card')) {
    renderMistakesView();
    return;
  }

  if (e.target.closest('#home-stats-card')) {
    renderStatsView();
    return;
  }

  if (e.target.closest('#mistakes-home-btn') || e.target.closest('#stats-home-btn')) {
    renderStreamsView();
    return;
  }

  if (e.target.closest('#start-mistakes-quiz-btn')) {
    startQuiz('mistakes', 'mistakes');
    return;
  }

  if (e.target.closest('#clear-mistakes-vault-btn')) {
    showInAppConfirm({
      title: 'Clear Mistake Vault?',
      message: 'Are you sure you want to clear all questions from the Mistake Bank?',
      okText: 'Clear Vault',
      cancelText: 'Cancel',
      onConfirm: () => {
        MistakesEngine.clearAll();
        renderMistakesView();
      }
    });
    return;
  }

  if (e.target.closest('#reset-stats-btn')) {
    showInAppConfirm({
      title: 'Reset Statistics?',
      message: 'Are you sure you want to reset all quiz and study progress data? This cannot be undone.',
      okText: 'Reset Progress',
      cancelText: 'Cancel',
      onConfirm: () => {
        StatsEngine.resetAll();
        renderStatsView();
      }
    });
    return;
  }

  // 6.2 Learning Hub Dictionary Table Row clicked -> Speak word & Toggle expanded card
  const dictRow = e.target.closest('.dict-word-row');
  if (dictRow && !e.target.closest('.cell-no-click') && !e.target.closest('.learn-audio-btn')) {
    const wordId = dictRow.getAttribute('data-word-id');
    const term = dictRow.getAttribute('data-term');
    const detailRow = document.getElementById(`dict-detail-${wordId}`);
    if (detailRow) {
      const isCurrentlyHidden = detailRow.classList.contains('hidden');
      document.querySelectorAll('.dict-detail-row:not(.hidden)').forEach(r => {
        if (r.id !== `dict-detail-${wordId}`) r.classList.add('hidden');
      });
      document.querySelectorAll('.dict-word-row.active-word-row').forEach(r => {
        if (r !== dictRow) r.classList.remove('active-word-row');
      });

      detailRow.classList.toggle('hidden');
      dictRow.classList.toggle('active-word-row', isCurrentlyHidden);
      
      if (isCurrentlyHidden && term) {
        audio.speak(term);
        StatsEngine.recordStudyTerm(wordId);
      }
    }
    return;
  }

  // 6.3 Learning Hub dedicated audio button or sound pill clicked
  const learnAudioBtn = e.target.closest('.learn-audio-btn');
  if (learnAudioBtn) {
    e.stopPropagation();
    const speakText = learnAudioBtn.getAttribute('data-speak-text');
    if (speakText) {
      audio.speak(speakText);
    }
    return;
  }

  // 6.4 Learning Unit selection
  const learnUnitBtn = e.target.closest('.learn-unit-btn');
  if (learnUnitBtn && state.mode === 'learning') {
    const unit = learnUnitBtn.getAttribute('data-unit');
    renderLearningUnitView(unit);
    return;
  }

  // 6.5 Learning Sub-Tab clicked
  const tabBtn = e.target.closest('.learning-tab-btn');
  if (tabBtn) {
    state.learningTab = tabBtn.getAttribute('data-tab');
    renderLearningUnitView(state.unit);
    return;
  }

  // 6.6 Featured 40-Question Mock Exam Clicked
  const mockBtn = e.target.closest('#start-random-40-btn');
  if (mockBtn && state.view === 'streams' && state.mode === 'quiz') {
    startQuiz('all_streams', 'random40');
    return;
  }

  // 6.7 Quiz Stream selection
  const streamCard = e.target.closest('.stream-card');
  if (streamCard && state.view === 'streams' && state.mode === 'quiz') {
    const stream = streamCard.getAttribute('data-stream');
    renderUnitsView(stream);
    return;
  }

  // 6.8 Quiz Unit selection
  const unitBtn = e.target.closest('.unit-card-btn');
  if (unitBtn && state.view === 'units' && state.mode === 'quiz') {
    const unit = unitBtn.getAttribute('data-unit');
    startQuiz(state.stream, unit);
    return;
  }

  // 6.9 Option audio button
  const optAudio = e.target.closest('.opt-audio-btn');
  if (optAudio) {
    e.stopPropagation();
    const text = optAudio.getAttribute('data-audio-text');
    audio.speak(text);
    return;
  }

  // 6.10 Option selection
  const optionBtn = e.target.closest('.option-btn');
  if (optionBtn && !state.userAnswers[state.currentIndex]) {
    const choiceId = optionBtn.getAttribute('data-choice-id');
    handleOptionSelect(choiceId);
    return;
  }

  // 6.11 Navigation buttons
  if (e.target.closest('#prev-btn')) {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion();
    }
    return;
  }

  if (e.target.closest('#next-btn')) {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderQuestion();
    } else {
      renderSummaryView();
    }
    return;
  }

  // 6.12 Interactive Word Translation Popover Trigger
  const wordSpan = e.target.closest('.trans-word');
  const popover = document.getElementById('word-popover');
  if (wordSpan && popover) {
    const word = wordSpan.getAttribute('data-word');
    const encoded = wordSpan.getAttribute('data-trans');
    
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    const lexicon = window.COURSE_LEXICON || {};
    const translation = encoded ? decodeURIComponent(encoded) : (lexicon[cleanWord] || '—');

    document.getElementById('popover-en').textContent = word;
    document.getElementById('popover-ar').textContent = translation;

    const rect = wordSpan.getBoundingClientRect();
    let top = rect.top - 10;
    popover.classList.remove('arrow-up', 'arrow-down');

    if (rect.top < 85) {
      top = rect.bottom + 10;
      popover.style.transform = 'translate(-50%, 0)';
      popover.classList.add('arrow-up');
    } else {
      popover.style.transform = 'translate(-50%, -100%)';
      popover.classList.add('arrow-down');
    }

    let left = rect.left + rect.width / 2;
    left = Math.max(90, Math.min(window.innerWidth - 90, left));

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
    popover.classList.remove('hidden');

    audio.speak(word);
    return;
  }

  if (popover) popover.classList.add('hidden');
});

// ==========================================================================
// 7. Header Navigation & Mode Toggling Listeners
// ==========================================================================

// 7.1 Home Button
document.getElementById('nav-home-btn').addEventListener('click', () => {
  if (state.view === 'quiz') {
    showInAppConfirm({
      title: 'Quit Quiz?',
      message: 'Quit current quiz and return to Home? Your progress will not be saved.',
      okText: 'Quit to Home',
      cancelText: 'Stay in Quiz',
      onConfirm: () => {
        state.searchQuery = '';
        renderStreamsView();
      }
    });
    return;
  }
  state.searchQuery = '';
  renderStreamsView();
});

// 7.2 Mistake Bank Header Button
const navMistakesBtn = document.getElementById('nav-mistakes-btn');
if (navMistakesBtn) {
  navMistakesBtn.addEventListener('click', () => {
    if (state.view === 'quiz') {
      showInAppConfirm({
        title: 'Open Mistake Bank?',
        message: 'Leave the current quiz session to open the Mistake Bank?',
        okText: 'Open Bank',
        cancelText: 'Stay in Quiz',
        onConfirm: () => renderMistakesView()
      });
      return;
    }
    renderMistakesView();
  });
}

// 7.3 Statistics Header Button
const navStatsBtn = document.getElementById('nav-stats-btn');
if (navStatsBtn) {
  navStatsBtn.addEventListener('click', () => {
    if (state.view === 'quiz') {
      showInAppConfirm({
        title: 'View Statistics?',
        message: 'Leave current quiz session to view your progress statistics?',
        okText: 'View Stats',
        cancelText: 'Stay in Quiz',
        onConfirm: () => renderStatsView()
      });
      return;
    }
    renderStatsView();
  });
}

// 7.4 Mode Toggle Button (Learning Hub <-> Quiz Mode)
const modeBtn = document.getElementById('toggle-mode-btn');
function updateModeUI() {
  const label = document.getElementById('mode-label');
  const icon = document.getElementById('mode-icon');
  if (state.mode === 'learning') {
    if (label) label.textContent = 'Quiz Mode';
    if (icon) icon.innerHTML = '<svg class="svg-icon"><use href="#icon-academic"/></svg>';
    if (modeBtn) modeBtn.classList.add('active-learning');
  } else {
    if (label) label.textContent = 'Learning Hub';
    if (icon) icon.innerHTML = '<svg class="svg-icon"><use href="#icon-book"/></svg>';
    if (modeBtn) modeBtn.classList.remove('active-learning');
  }
}

if (modeBtn) {
  modeBtn.addEventListener('click', () => {
    if (state.view === 'quiz') {
      showInAppConfirm({
        title: 'Switch Mode?',
        message: 'Quitting the current quiz to switch to the Learning Hub. Continue?',
        okText: 'Switch Mode',
        cancelText: 'Stay in Quiz',
        onConfirm: () => {
          state.mode = (state.mode === 'quiz') ? 'learning' : 'quiz';
          updateModeUI();
          renderStreamsView();
        }
      });
      return;
    }
    state.mode = (state.mode === 'quiz') ? 'learning' : 'quiz';
    updateModeUI();
    renderStreamsView();
  });
}

// 7.5 Arabic Translation Toggle
const transBtn = document.getElementById('toggle-trans-btn');
function applyTranslationVisibility() {
  if (state.showTranslation) {
    document.body.classList.remove('hide-trans');
    if (transBtn) transBtn.style.opacity = '1';
  } else {
    document.body.classList.add('hide-trans');
    if (transBtn) transBtn.style.opacity = '0.6';
  }
  localStorage.setItem('app_trans', JSON.stringify(state.showTranslation));
}
if (transBtn) {
  transBtn.addEventListener('click', () => {
    state.showTranslation = !state.showTranslation;
    applyTranslationVisibility();
  });
}

// 7.6 Theme Toggle
const themeBtn = document.getElementById('toggle-theme-btn');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('app_theme', theme);
  state.theme = theme;
}
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });
}

// 7.7 Voice Settings Modal
const voiceModal = document.getElementById('voice-modal');
const audioSettingsBtn = document.getElementById('audio-settings-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const voiceSelect = document.getElementById('voice-select');
const speechRateInput = document.getElementById('speech-rate');
const rateValueSpan = document.getElementById('rate-value');
const testVoiceBtn = document.getElementById('test-voice-btn');

if (audioSettingsBtn) {
  audioSettingsBtn.addEventListener('click', () => {
    if (voiceModal) voiceModal.classList.remove('hidden');
  });
}
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    if (voiceModal) voiceModal.classList.add('hidden');
  });
}
if (voiceModal) {
  voiceModal.addEventListener('click', (e) => {
    if (e.target === voiceModal) voiceModal.classList.add('hidden');
  });
}
if (voiceSelect) {
  voiceSelect.addEventListener('change', (e) => {
    const uri = e.target.value;
    const v = audio.voices.find(item => item.voiceURI === uri);
    if (v) {
      audio.selectedVoice = v;
      localStorage.setItem('app_voice', uri);
    }
  });
}
if (speechRateInput) {
  speechRateInput.value = audio.rate;
  if (rateValueSpan) rateValueSpan.textContent = `${audio.rate}x`;
  speechRateInput.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    audio.rate = val;
    if (rateValueSpan) rateValueSpan.textContent = `${val}x`;
    localStorage.setItem('app_rate', val.toString());
  });
}
if (testVoiceBtn) {
  testVoiceBtn.addEventListener('click', () => {
    audio.speak("Welcome to Balqa Applied English Learning and Quiz Hub!");
  });
}

// ==========================================================================
// 8. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  applyTranslationVisibility();
  updateModeUI();
  updateMistakesBadge();
  renderStreamsView();
});
