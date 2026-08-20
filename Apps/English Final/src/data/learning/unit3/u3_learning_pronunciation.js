/**
 * Al-Balqa Applied University — English 102
 * Unit 3: Life at Work
 * Module 3: Pronunciation Studio (Diphthongs Part B: /eɪ/, /eə/, /ɪə/, /ʊə/)
 */
(function() {
  const u3_learning_pronunciation = {
    unit: 3,
    titleEn: "Diphthongs: Part B (/eɪ/, /eə/, /ɪə/, /ʊə/) & Minimal Pair Discrimination",
    summaryTable: {
      headers: ["IPA Symbol", "Diphthong Type", "Glide Direction & Spelling Triggers", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "/eɪ/",
          name: "Closing Diphthong",
          rule: "Glides from open-mid /e/ to near-close /ɪ/ (letters: 'ay', 'a_e', 'eigh', 'ey')",
          examples: ["may", "say", "today", "chase", "overweight", "came"]
        },
        {
          symbol: "/eə/",
          name: "Centring Diphthong",
          rule: "Glides from open-mid /e/ to neutral Schwa /ə/ (letters: 'air', 'ear', 'ere')",
          examples: ["air", "hair", "bear", "there", "blonde-haired"]
        },
        {
          symbol: "/ɪə/",
          name: "Centring Diphthong",
          rule: "Glides from near-close /ɪ/ to neutral Schwa /ə/ (letters: 'ear', 'eer', 'ere')",
          examples: ["near", "beer", "hear", "here", "dear"]
        },
        {
          symbol: "/ʊə/",
          name: "Centring Diphthong",
          rule: "Glides from near-close rounded /ʊ/ to central Schwa /ə/ (letters: 'our', 'oor', 'ure')",
          examples: ["tour", "poor", "sure", "pure", "plural"]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "/eɪ/",
        nameEn: "Diphthong /eɪ/ (may, today, chase)",
        mouthGuideEn: "Start with mouth half-open in a relaxed /e/ vowel position, then glide smoothly upward towards /ɪ/ while spreading lips slightly into a smile.",
        words: [
          { en: "may", ipa: "/meɪ/" },
          { en: "say", ipa: "/seɪ/" },
          { en: "today", ipa: "/təˈdeɪ/" },
          { en: "chase", ipa: "/tʃeɪs/" },
          { en: "overweight", ipa: "/ˌəʊ.vəˈweɪt/" },
          { en: "came", ipa: "/keɪm/" }
        ]
      },
      {
        symbol: "/eə/",
        nameEn: "Diphthong /eə/ (air, hair, bear)",
        mouthGuideEn: "Open mouth moderately for /e/, then glide tongue back toward the relaxed center of your mouth to produce the final Schwa /ə/.",
        words: [
          { en: "air", ipa: "/eər/" },
          { en: "hair", ipa: "/heər/" },
          { en: "bear", ipa: "/beər/" },
          { en: "there", ipa: "/ðeər/" },
          { en: "blonde-haired", ipa: "/ˌblɒndˈheəd/" }
        ]
      },
      {
        symbol: "/ɪə/",
        nameEn: "Diphthong /ɪə/ (near, beer, hear)",
        mouthGuideEn: "Start with tongue high and forward in the short /ɪ/ position (like 'bit'), then relax the jaw and tongue toward the neutral center /ə/.",
        words: [
          { en: "near", ipa: "/nɪər/" },
          { en: "beer", ipa: "/bɪər/" },
          { en: "hear", ipa: "/hɪər/" },
          { en: "here", ipa: "/hɪər/" },
          { en: "dear", ipa: "/dɪər/" }
        ]
      },
      {
        symbol: "/ʊə/",
        nameEn: "Diphthong /ʊə/ (tour, poor, sure)",
        mouthGuideEn: "Start with lips loosely rounded in the short /ʊ/ vowel position (like 'put'), then unround the lips and glide into the central Schwa /ə/.",
        words: [
          { en: "tour", ipa: "/tʊər/" },
          { en: "poor", ipa: "/pʊər/" },
          { en: "sure", ipa: "/ʃʊər/" },
          { en: "pure", ipa: "/pjʊər/" },
          { en: "plural", ipa: "/ˈplʊə.rəl/" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Minimal Pair & Broad IPA Discrimination Practice",
      words: [
        { en: "beer /bɪər/", ipa: "/bɪər/", note: "Contains /ɪə/ (Centring)" },
        { en: "bear /beər/", ipa: "/beər/", note: "Contains /eə/ (Centring)" },
        { en: "here /hɪər/", ipa: "/hɪər/", note: "Contains /ɪə/ (Centring)" },
        { en: "hair /heər/", ipa: "/heər/", note: "Contains /eə/ (Centring)" },
        { en: "today /təˈdeɪ/", ipa: "/təˈdeɪ/", note: "Contains /eɪ/ (Closing)" },
        { en: "tour /tʊər/", ipa: "/tʊər/", note: "Contains /ʊə/ (Centring)" },
        { en: "pure /pjʊər/", ipa: "/pjʊər/", note: "Contains /ʊə/ (Centring)" },
        { en: "overweight", ipa: "/ˌəʊ.vəˈweɪt/", note: "Contains /eɪ/ in '-weight'" }
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit3 = u3_learning_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u3_learning_pronunciation };
  }
})();
