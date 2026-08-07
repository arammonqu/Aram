const isStorageAvailable = typeof localStorage !== 'undefined';

export const state = {
    questions: [],
    currentIndex: 0,
    score: 0,
    userAnswers: [], 
    showTranslation: isStorageAvailable ? localStorage.getItem('quizTrans') === 'true' : false, 
    theme: (isStorageAvailable && localStorage.getItem('quizTheme')) || 'light', 
    voiceURI: (isStorageAvailable && localStorage.getItem('quizVoice')) || null, // Saves selected voice
    
    initQuiz(streamQuestions, limit = null) {
        // 1. Shuffle all questions and their options
        let shuffled = streamQuestions.sort(() => Math.random() - 0.5).map(q => {
            return {
                ...q,
                options: q.options.slice().sort(() => Math.random() - 0.5)
            };
        });

        // 2. Apply the question limit if one is provided (15 for Short, 40 for Mixed)
        if (limit && limit < shuffled.length) {
            shuffled = shuffled.slice(0, limit);
        }

        this.questions = shuffled;
        this.currentIndex = 0;
        this.score = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
    },

    getCurrentQuestion() { 
        return this.questions[this.currentIndex] || null; 
    },
    
    nextQuestion() { 
        if (this.currentIndex < this.questions.length) {
            this.currentIndex++; 
        }
    },
    
    prevQuestion() { 
        if (this.currentIndex > 0) {
            this.currentIndex--; 
        }
    },
    
    isFinished() { 
        return this.currentIndex >= this.questions.length; 
    },

    toggleTranslation() {
        this.showTranslation = !this.showTranslation;
        if (isStorageAvailable) {
            localStorage.setItem('quizTrans', this.showTranslation);
        }
        return this.showTranslation;
    },
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        if (isStorageAvailable) {
            localStorage.setItem('quizTheme', this.theme);
        }
        return this.theme;
    },

    setVoice(uri) {
        this.voiceURI = uri;
        if (isStorageAvailable) {
            localStorage.setItem('quizVoice', uri);
        }
    }
};
