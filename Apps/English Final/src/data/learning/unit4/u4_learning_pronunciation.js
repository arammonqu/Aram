/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Life and Nature
 * Module 3: Pronunciation Studio (English Intonation Patterns: Falling vs. Rising Pitch Contours)
 */
(function() {
  const u4_learning_pronunciation = {
    unit: 4,
    titleEn: "English Intonation Patterns: Standard Falling (↘) vs. Rising (↗) Pitch",
    summaryTable: {
      headers: ["Intonation Type", "Pitch Contour", "Sentence Structures & Triggers", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "Falling (↘)",
          name: "Standard Falling Tone",
          rule: "Signals finality, completeness & certainty (Statements, Wh- Questions, Commands, Exclamations)",
          examples: ["She is ten years old.", "We live in Moscow.", "Where do you live?", "How much is it?", "Who wants to go there?"]
        },
        {
          symbol: "Rising (↗)",
          name: "Open / Incomplete Tone",
          rule: "Signals non-finality, question inquiry, surprise, or direct address at start",
          examples: ["Do you go there often?", "Was she glad to see him?", "Tom, could you help me?", "Sir, you dropped this."]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "↘ Falling",
        nameEn: "Falling Intonation (Statements & Wh- Questions)",
        mouthGuideEn: "The pitch of your voice drops significantly on the last stressed syllable of the sentence, indicating the thought is complete and definitive.",
        words: [
          { en: "We live in Moscow.", ipa: "↘ Declarative Statement" },
          { en: "I haven't read this book.", ipa: "↘ Negative Statement" },
          { en: "Where do you live?", ipa: "↘ Wh- Information Question" },
          { en: "How much is it?", ipa: "↘ Wh- Question" },
          { en: "Who wants to go there?", ipa: "↘ Wh- Question" },
          { en: "They left for London yesterday.", ipa: "↘ Statement" },
          { en: "I'd like a sandwich, please.", ipa: "↘ Polite Request" }
        ]
      },
      {
        symbol: "↗ Rising",
        nameEn: "Rising Intonation (Yes/No Questions & Direct Address)",
        mouthGuideEn: "The pitch of your voice rises upward at the end of the sentence to show open-ended inquiry, or rises on a person's name at the start to alert them.",
        words: [
          { en: "Do you go there often?", ipa: "↗ Yes/No Question" },
          { en: "Was she glad to see him?", ipa: "↗ Yes/No Question" },
          { en: "Have you read this book?", ipa: "↗ Yes/No Question" },
          { en: "Tom, could you help me, please?", ipa: "↗ Direct Address on 'Tom'" },
          { en: "Sir, you dropped your notebook.", ipa: "↗ Direct Address on 'Sir'" },
          { en: "Liz, are you ready to start?", ipa: "↗ Direct Address on 'Liz'" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Unit 4 Intonation Discrimination Practice",
      words: [
        { en: "How much is it? ↘", ipa: "/haʊ mʌtʃ ɪz ɪt/ ↘", note: "Falling Intonation (Wh- Question)" },
        { en: "We live in Moscow. ↘", ipa: "/wiː lɪv ɪn ˈmɒs.kəʊ/ ↘", note: "Falling Intonation (Statement)" },
        { en: "I haven't read this book. ↘", ipa: "/aɪ hævnt red ðɪs bʊk/ ↘", note: "Falling Intonation (Negative)" },
        { en: "Was she glad to see him? ↗", ipa: "/wɒz ʃiː ɡlæd tuː siː hɪm/ ↗", note: "Rising Intonation (Yes/No Question)" },
        { en: "Do you go there often? ↗", ipa: "/duː juː ɡəʊ ðeər ˈɒf.ən/ ↗", note: "Rising Intonation (Yes/No Question)" },
        { en: "Sir, you dropped your notebook. ↗", ipa: "/sɜːr juː drɒpt jɔːr ˈnəʊt.bʊk/", note: "Rising Tone on 'Sir' (Direct Address)" }
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit4 = u4_learning_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u4_learning_pronunciation };
  }
})();
