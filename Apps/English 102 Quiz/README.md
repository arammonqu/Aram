# English 102 Mastery Quiz App 📱

A modern, responsive, and bilingual Single Page Application (SPA) designed to help students master English 102 (Units 1, 2 & 3) across four core streams: Vocabulary, Grammar, Pronunciation, and Word Lists.

---

## 🌟 Key Features (Enhancement 3)

1. **Voice Selector Dropdown (`#voice-select`)**:
   - Dynamically loads and filters all available English voices provided by the user's browser/system (e.g. US, UK, Australian, Neural voices).
   - Saves voice selection in `localStorage` (`quizVoice`).
   - Plays an instant audio preview ("Voice changed") whenever the voice is changed.
2. **Interactive Word Dictionary**:
   - Every English word in questions and explanations is clickable (`.word-clickable`).
   - Clicking any word immediately speaks the word using the selected voice and fetches its Arabic translation via the MyMemory API in a sleek tooltip popup.
3. **Separate Outside Audio Controls**:
   - Options are housed in Flexbox wrappers with the answer choice on the left and a separate speaker icon on the right, preventing accidental answer selections.
4. **Full Back & Forth Question Navigation**:
   - Includes **Previous** (`#btn-prev`) and **Next** (`#btn-next`) buttons.
   - Preserves user answer history: navigating back to previous questions displays your selected choice and explanation.
5. **Sanitized Audio Engine**:
   - Strips HTML tags automatically and terminates active utterances to prevent audio overlap glitches.
6. **Side-by-Side Bilingual Translation Alignment (`ع / EN`)**:
   - Toggles full Arabic translation aligned alongside the English text.
7. **Dark & Light Mode**:
   - Modern glassmorphic cards with responsive layouts and persistence in `localStorage`.

---

## 📂 Project Structure

```text
English 102 Quiz/
├── index.html                 # Main SPA shell with voice dropdown & tooltip
├── README.md                  # Project documentation & run guide
├── css/
│   └── styles.css             # Design system, voice dropdown, navigation & tooltip styles
├── js/
│   ├── app.js                 # App initialization, voice picker, tooltip API & navigation
│   ├── state.js               # State & localStorage management (theme, translation, voice, history)
│   ├── ui.js                  # DOM manipulation, word-click wrapping & past state restoration
│   ├── audio.js               # Web Speech API TTS helper with voice filtering & sanitization
│   └── data/                  # 12 Modular Question Banks
│       ├── unit1_vocab.js
│       ├── unit1_grammar.js
│       ├── unit1_pronunciation.js
│       ├── unit1_wordlist.js
│       ├── unit2_vocab.js
│       ├── unit2_grammar.js
│       ├── unit2_pronunciation.js
│       ├── unit2_wordlist.js
│       ├── unit3_vocab.js
│       ├── unit3_grammar.js
│       ├── unit3_pronunciation.js
│       └── unit3_wordlist.js
```

---

## 🚀 How to Run Locally

Because the application uses ES6 JavaScript Modules (`import` / `export`), serve it over a local server:

### Option 1: VS Code Live Server (Recommended)
1. Open the `English 102 Quiz` folder in **Visual Studio Code**.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python Local Server
```bash
# In the English 102 Quiz directory:
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.
