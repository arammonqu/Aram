/**
 * Al-Balqa Applied University — English 102
 * Unit 1: Learning and Education
 * Module 3: Pronunciation & Phonetics Studio (English Only & Sound Overview Table)
 */
(function() {
  const u1_learning_pronunciation = {
    unit: 1,
    titleEn: "English Sounds: Consonants & Broad IPA Decoding",
    summaryTable: {
      headers: ["IPA Symbol", "Sound Classification", "Spelling Rule / Key Trigger", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "/w/",
          name: "Voiced Labio-Velar",
          rule: "Letter 'w' or letter 'o' in 'one'",
          examples: ["One", "Walk", "Warm"]
        },
        {
          symbol: "/n/",
          name: "Alveolar Nasal",
          rule: "Silent 'k' before 'n'",
          examples: ["know", "knight", "knee"]
        },
        {
          symbol: "/ʃ/",
          name: "Voiceless Post-Alveolar Fricative",
          rule: "Letters 'sh', or letter 's' in 'sure'/'sugar'",
          examples: ["Sure", "Sugar", "Shrub"]
        },
        {
          symbol: "/s/",
          name: "Voiceless Alveolar Fricative",
          rule: "Soft 'c' before letters e, i, y",
          examples: ["Cereal", "City", "Center"]
        },
        {
          symbol: "/k/",
          name: "Voiceless Velar Plosive",
          rule: "Greek 'ch' in words of Greek origin",
          examples: ["Chorus", "Character", "Chemistry"]
        },
        {
          symbol: "/tʃ/",
          name: "Voiceless Post-Alveolar Affricate",
          rule: "Regular English 'ch'",
          examples: ["Chaste", "Choose", "Chalk"]
        },
        {
          symbol: "/θ/",
          name: "Voiceless Dental Fricative",
          rule: "Letters 'th' (unvoiced)",
          examples: ["Theme", "Thesis", "Theory"]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "/w/",
        nameEn: "Voiced Labio-Velar Approximant",
        mouthGuideEn: "Round your lips tightly (like whistling), raise the back of your tongue toward the soft palate, and vocalize.",
        words: [
          { en: "One", ipa: "/wʌn/", ar: "One (starts with /w/)" },
          { en: "Walk", ipa: "/wɔːk/", ar: "Walk" },
          { en: "Warm", ipa: "/wɔːm/", ar: "Warm" }
        ]
      },
      {
        symbol: "/n/",
        nameEn: "Alveolar Nasal (Silent 'K' Rule)",
        mouthGuideEn: "Touch the tip of your tongue to the alveolar ridge behind your upper teeth. The letter 'k' is completely silent before 'n'.",
        words: [
          { en: "know", ipa: "/nəʊ/", ar: "know (silent k)" },
          { en: "knight", ipa: "/naɪt/", ar: "knight (silent k)" },
          { en: "knee", ipa: "/niː/", ar: "knee (silent k)" }
        ]
      },
      {
        symbol: "/ʃ/",
        nameEn: "Voiceless Post-Alveolar Fricative",
        mouthGuideEn: "Push lips slightly forward and blow air softly through a broad channel across the tongue (like saying 'shh').",
        words: [
          { en: "Sure", ipa: "/ʃʊər/", ar: "Sure (s pronounced as /ʃ/)" },
          { en: "Sugar", ipa: "/ˈʃʊɡ.ər/", ar: "Sugar (s pronounced as /ʃ/)" },
          { en: "Shrub", ipa: "/ʃrʌb/", ar: "Shrub" }
        ]
      },
      {
        symbol: "/s/",
        nameEn: "Voiceless Alveolar Fricative (Soft 'C' Rule)",
        mouthGuideEn: "Place the tongue tip close to the roof of your mouth behind your top teeth. Letter 'c' is soft (/s/) before e, i, y.",
        words: [
          { en: "Cereal", ipa: "/ˈsɪə.ri.əl/", ar: "Cereal (c pronounced as /s/)" },
          { en: "City", ipa: "/ˈsɪt.i/", ar: "City" },
          { en: "Center", ipa: "/ˈsen.tər/", ar: "Center" }
        ]
      },
      {
        symbol: "/k/",
        nameEn: "Voiceless Velar Plosive (Greek 'CH' Rule)",
        mouthGuideEn: "Press the back of your tongue against the soft palate and release a sharp burst of unvoiced air.",
        words: [
          { en: "Chorus", ipa: "/ˈkɔː.rəs/", ar: "Chorus (ch pronounced as /k/)" },
          { en: "Character", ipa: "/ˈkær.ək.tər/", ar: "Character" },
          { en: "Chemistry", ipa: "/ˈkem.ɪ.stri/", ar: "Chemistry" }
        ]
      },
      {
        symbol: "/tʃ/",
        nameEn: "Voiceless Post-Alveolar Affricate",
        mouthGuideEn: "Combine /t/ and /ʃ/ by stopping airflow with the tongue tip, then releasing it with friction.",
        words: [
          { en: "Chaste", ipa: "/tʃeɪst/", ar: "Chaste" },
          { en: "Choose", ipa: "/tʃuːz/", ar: "Choose" },
          { en: "Chalk", ipa: "/tʃɔːk/", ar: "Chalk" }
        ]
      },
      {
        symbol: "/θ/",
        nameEn: "Voiceless Dental Fricative",
        mouthGuideEn: "Place your tongue tip between your upper and lower front teeth and blow air gently without voice.",
        words: [
          { en: "Theme", ipa: "/θiːm/", ar: "Theme" },
          { en: "Thesis", ipa: "/ˈθiː.sɪs/", ar: "Thesis" },
          { en: "Theory", ipa: "/ˈθɪə.ri/", ar: "Theory" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Textbook Broad IPA Transcription Practice",
      words: [
        { en: "carpet", ipa: "/ˈkɑːpɪt/", note: "Carpet" },
        { en: "huge", ipa: "/hjuːdʒ/", note: "Huge" },
        { en: "sneeze", ipa: "/ˈsniːz/", note: "Sneeze" },
        { en: "usual", ipa: "/ˈjuːʒwəl/", note: "Usual" },
        { en: "middle", ipa: "/ˈmɪdl/", note: "Middle" },
        { en: "psalm", ipa: "/sɑːm/", note: "Psalm (silent p & l)" },
        { en: "young", ipa: "/jʌŋ/", note: "Young" },
        { en: "think", ipa: "/θɪŋk/", note: "Think" },
        { en: "autumn", ipa: "/ˈɔːtəm/", note: "Autumn (silent n)" }
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit1 = u1_learning_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u1_learning_pronunciation };
  }
})();
