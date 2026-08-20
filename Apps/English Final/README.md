# Balqa Applied English (2) — Mastery & Learning Hub Web Application

An interactive, responsive, zero-build bilingual web application designed specifically for students taking **English 102 (English 2)** at **Al-Balqa Applied University (BAU)**.

The platform provides a dual-mode experience:
1. **Quiz Mode (605 Self-Contained Questions across 30 Partitions)**: Interactive testing, instant scoring, dual-layer English/Arabic translations, native speech synthesis audio, and interactive dictionary popovers.
2. **Learning Hub (18 Modules across 6 Units)**: In-depth study center featuring an interactive **Master Dictionary Table** (256 terms with concise 1–2 word Arabic meanings and expandable detailed cards), **Grammar Academy** (17 English-first lessons with color-coded syntax and comprehensive case tables), and **Phonetics Studio** (25 sound cards and overview tables with clickable audio).

---

## 📖 Table of Contents
1. [Overview & Key Features](#-overview--key-features)
2. [Dual-Mode Experience: Quiz vs. Learning Hub](#-dual-mode-experience-quiz-vs-learning-hub)
3. [Course Content & Syllabus Coverage](#-course-content--syllabus-coverage)
4. [Learning Hub Module Architecture](#-learning-hub-module-architecture)
5. [Question & Learning Data Schemas](#-question--learning-data-schemas)
6. [Application Architecture & Tech Stack](#-application-architecture--tech-stack)
7. [Project Directory Layout](#-project-directory-layout)
8. [How to Run & Test](#-how-to-run--test)

---

## 🚀 Overview & Key Features

* **Zero-Build Vanilla Architecture**: Runs natively in any modern web browser without Node.js, bundlers, compilers, or npm dependencies.
* **Dual-Mode Platform**: Toggle seamlessly between **Quiz Mode** (Testing & Evaluation) and **Learning Hub** (Study & Glossaries) directly from the top header navigation.
* **Master Dictionary Table**:
  * Clean, scannable table view: `| English Word (with POS & IPA) | Arabic Meaning (1–2 words) | Audio Button |`.
  * Click any row to automatically play its native pronunciation and reveal an expandable card with full definitions, example sentences, and synonyms/antonyms.
  * Real-time search bar filtering across words, definitions, and Arabic translations.
* **Grammar Academy**:
  * English-first rule breakdowns without distracting translation clutter.
  * **Rule Structure Tables** at the top of each section.
  * Syntax color-coding design tokens (`Subject`, `Auxiliary`, `Main Verb`, `Signal Marker`, `Transformation`).
  * Comprehensive case coverage including single pronouns, names, compound subjects with `and`, plural nouns, negatives, questions, and stative contrasts.
* **Pronunciation & Phonetics Studio**:
  * Sound Overview Tables with clickable audio sound pills.
  * Articulation guides and mouth formation instructions.
  * Textbook Broad IPA Transcription Practice grids.
* **Isolated Web Speech Synthesis (TTS)**:
  * Dedicated speaker buttons with Chromium and iOS garbage-collection retention.
  * Speech rate control ($0.5\times$ to $1.3\times$) and English system voice selection.
* **Modern Design System**:
  * Responsive mobile-first layout with touch targets $\ge 48\text{px}$.
  * Persistent Light and Dark themes stored in `localStorage`.
  * Typography: `Plus Jakarta Sans` (English), `Tajawal` (Arabic), and `JetBrains Mono` (IPA & code).

---

## 📊 Course Content & Syllabus Coverage

### 1. Quiz Mode (605 Self-Contained Questions across 30 Partitions)

| Unit | Course Title | Vocab | Grammar | Pronunciation | Word List | Extra & Wisdom | Unit Total |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Unit 1** | Learning and Education | 38 | 18 | 8 | 10 | 6 | **80** |
| **Unit 2** | Nature or Nurture? | 41 | 32 | 14 | 20 | 8 | **115** |
| **Unit 3** | Life at Work | 34 | 18 | 12 | 20 | 15 | **99** |
| **Unit 4** | Life and Nature | 39 | 35 | 18 | 20 | 21 | **133** |
| **Unit 5** | Gossip and the Media | 28 | 22 | 12 | 18 | 11 | **91** |
| **Unit 6** | Sports | 25 | 20 | 18 | 19 | 5 | **87** |
| **TOTAL** | **All 6 Units** | **205** | **145** | **82** | **107** | **66** | **605 Questions** |

### 2. Learning Hub Stream (18 Data Files across Units 1–6)

| Unit | Focus Topic | Glossary Terms | Grammar Academy Modules | Phonetics Studio Focus |
| :---: | :--- | :---: | :--- | :--- |
| **Unit 1** | *Learning and Education* | **38 Terms** | Present Simple vs. Present Continuous & Stative vs. Dynamic Verbs | Initial Consonants & Broad IPA Decoding (`/w/`, `/n/`, `/ʃ/`, `/s/`, `/k/`, `/tʃ/`, `/θ/`) |
| **Unit 2** | *Nature or Nurture?* | **42 Terms** | Past Simple vs. Past Continuous & Stative Verbs in Past | Past `-ed` Endings (`/-t/`, `/-d/`, `/-ɪd/`) & Broad IPA Decoding |
| **Unit 3** | *Life at Work* | **43 Terms** | Present Perfect Simple vs. Past Perfect (Sequencing & Adverbs) | Vowel Diphthongs (Part A: `/eɪ/`, `/aɪ/`, `/ɔɪ/`) & Connected Speech |
| **Unit 4** | *Life and Nature* | **45 Terms** | The Passive Voice: Full Tense Matrix & Agent Transformations | Vowel Diphthongs (Part B: `/aʊ/`, `/əʊ/`, `/ɪə/`, `/eə/`, `/ʊə/`) |
| **Unit 5** | *Gossip & the Media* | **43 Terms** | Direct & Reported Speech (Backshifting, Pronoun & Time Mutations) | Consonant Clusters (Initial & Final: `/str/`, `/spl/`, `/spt/`, `/ksts/`) |
| **Unit 6** | *Sports* | **45 Terms** | Conditionals (0, 1st, 2nd, 3rd) & Relative Pronouns | Homophones (*knight/night*, *steel/steal*), Intonation Contours (↗/↘) |
| **TOTAL** | **Master Learning Hub** | **256 Terms** | **17 Rule Sections (117 Syntax Cases)** | **25 Sound Modules + IPA Practice Grids** |

---

## 📐 Data Schemas

### 1. Learning Hub Vocabulary Entry Schema
```typescript
interface LearningVocabEntry {
  id: string;             // e.g. "u1_v_01"
  term: string;           // English headword
  pos: string;            // "(n.)", "(v.)", "(adj.)", "(adv.)", "(phr. v.)"
  ipa: string;            // Broad IPA transcription e.g. "/ˈlek.tʃər/"
  meaningAr: string;      // Strictly 1-2 Arabic words for table view (e.g. "محاضرة")
  definitionEn: string;   // Full English pedagogical definition
  definitionAr: string;   // Full detailed Arabic explanation for expanded card
  synonyms?: string[];    // Direct synonyms
  antonyms?: string[];    // Direct antonyms
  exampleEn: string;      // Curated example sentence
  exampleAr: string;      // Arabic sentence translation
  category: 'glossary' | 'opposite' | 'reading' | 'idiom';
}
```

### 2. Quiz Question Object Schema
```typescript
interface QuestionChoice {
  id: string;             // "a", "b", "c", "d"
  textEn: string;         // English option text
  textAr: string;         // Arabic translation
}

interface Question {
  id: string;             // Unique ID (e.g. "u1_g_01", "u2_v_05")
  unit: number;           // Unit number (1 to 6)
  stream: 'vocab' | 'grammar' | 'pronunciation' | 'wordlist' | 'extra';
  topic: string;          // Academic topic label (e.g. "Sentence Function")
  promptEn: string;       // English question stem with dashed line "---------------"
  promptAr: string;       // Arabic translation of the question stem
  choices: QuestionChoice[]; // Exactly 4 choices
  correctChoiceId: string;// Pointer to correct choice ID ("a", "b", "c", or "d")
  explanationEn: string;  // Detailed pedagogical explanation in English
  explanationAr: string;  // Detailed pedagogical explanation in Arabic
  lexiconTokens?: Record<string, string>; // Word-to-Arabic mapping
}
```

---

## 📂 Project Directory Layout

```text
English Final/
├── index.html                   # Main single-page application shell
├── style.css                    # Design tokens, typography, dark mode & Learning Hub styles
├── app.js                       # Core Engine: Router, Quiz Engine, Speech TTS & Search
├── README.md                    # System documentation
├── batches/                     # Source Markdown datasets
│   ├── batch1.md – batch30.md   # 30 Quiz source batches (633 questions)
│   └── LearningBatch1.md – 6.md # 6 Learning Hub source batches (256 terms)
└── src/
    └── data/
        ├── lexicon/
        │   └── dictionary.js    # Master Dictionary Lexicon (2,159 headwords)
        ├── units/               # 30 Active Quiz Data Files (633 Questions)
        │   ├── unit1/ – unit6/  # (unitX_vocab.js, grammar, pron, wordlist, extra)
        └── learning/            # 18 Active Learning Hub Data Files
            ├── unit1/ – unit6/  # (uX_learning_vocab.js, grammar, pronunciation)
```

---

## 🧪 How to Run & Test

1. **Launch the Application**:
   - Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).
   - Alternatively, serve locally:
     ```bash
     python -m http.server 8000
     ```
2. **Run the Automated Master Audit Suite**:
   ```bash
   node scratch/audit_all_learning_and_quiz_hub.js
   ```
   *Verifies 100% data integrity across all 18 Learning Hub files and 30 Quiz partitions with 0 errors.*
