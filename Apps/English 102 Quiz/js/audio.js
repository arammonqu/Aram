/**
 * Audio TTS Module
 * Handles speech synthesis, English voice filtering, and chosen voice persistence.
 */

export let englishVoices = [];

// Browsers load voices asynchronously, so we use a callback
export function loadVoices(callback) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    const fetchVoices = () => {
        // Filter ONLY for English voices (so it doesn't read English in a different language accent)
        const allVoices = window.speechSynthesis.getVoices() || [];
        englishVoices = allVoices.filter(v => v.lang && v.lang.startsWith('en'));
        if (englishVoices.length > 0 && callback) {
            callback(englishVoices);
        }
    };

    fetchVoices();
    // Some browsers need this event to trigger voice fetching
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = fetchVoices;
    }
}

export function playAudio(htmlText, preferredVoiceURI) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (!htmlText) return;

    // Strip HTML tags (e.g. from the clickable words)
    let cleanText = "";
    if (typeof document !== 'undefined') {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlText;
        cleanText = tempDiv.textContent || tempDiv.innerText || "";
    } else {
        cleanText = String(htmlText).replace(/<[^>]*>?/gm, '');
    }

    cleanText = cleanText.trim();
    if (!cleanText) return;

    window.speechSynthesis.cancel(); // Stop current speech immediately

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9;
    
    // Apply the chosen voice if it exists
    if (preferredVoiceURI && englishVoices.length > 0) {
        const selectedVoice = englishVoices.find(v => v.voiceURI === preferredVoiceURI);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            utterance.lang = 'en-US'; 
        }
    } else {
        utterance.lang = 'en-US';
    }
    
    window.speechSynthesis.speak(utterance);
}

export function stopAudio() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}
