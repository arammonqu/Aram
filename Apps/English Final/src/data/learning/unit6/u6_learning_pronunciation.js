/**
 * Al-Balqa Applied University — English 102
 * Unit 6: Sports
 * Module 3: Pronunciation Studio (Master Homophones Dictionary & 8 Diphthongs Revision)
 */
(function() {
  const u6_learning_pronunciation = {
    unit: 6,
    titleEn: "Master Homophones Dictionary & All 8 English Diphthongs Revision",
    summaryTable: {
      headers: ["Homophone Sound (IPA)", "Spelling Pair 1 (Meaning)", "Spelling Pair 2 / 3 (Meaning)", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "/hɪər/",
          name: "hear (perceive sound)",
          rule: "here (in this place)",
          examples: ["hear", "here"]
        },
        {
          symbol: "/ðeər/",
          name: "their (possessive)",
          rule: "there (place) / they're (they are)",
          examples: ["their", "there", "they're"]
        },
        {
          symbol: "/dɪər/",
          name: "deer (animal)",
          rule: "dear (beloved / expensive)",
          examples: ["deer", "dear"]
        },
        {
          symbol: "/siː/",
          name: "sea (ocean)",
          rule: "see (perceive with eyes)",
          examples: ["sea", "see"]
        },
        {
          symbol: "/reɪnz/",
          name: "reins (horse strap)",
          rule: "rains (precipitation) / reigns (rules)",
          examples: ["reins", "rains", "reigns"]
        },
        {
          symbol: "/stiːl/",
          name: "steal (rob / take)",
          rule: "steel (metal alloy)",
          examples: ["steal", "steel"]
        },
        {
          symbol: "/səʊ/",
          name: "sew (stitch with needle)",
          rule: "sow (plant seeds) / so (therefore)",
          examples: ["sew", "sow", "so"]
        },
        {
          symbol: "/ˈweð.ər/",
          name: "weather (climate)",
          rule: "whether (if / alternative)",
          examples: ["weather", "whether"]
        },
        {
          symbol: "/naɪt/",
          name: "knight (armored warrior)",
          rule: "night (evening / dark hours)",
          examples: ["knight", "night"]
        },
        {
          symbol: "/saɪt/",
          name: "site (plot / location)",
          rule: "sight (vision) / cite (quote)",
          examples: ["site", "sight", "cite"]
        },
        {
          symbol: "/pleɪn/",
          name: "plain (flat ground / clear)",
          rule: "plane (aircraft / level surface)",
          examples: ["plain", "plane"]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "Homophones",
        nameEn: "Homophones in Sentence Context",
        mouthGuideEn: "Homophones have identical phonetic pronunciations but differ in spelling and semantic definition. Choose the correct spelling matching the sentence context.",
        words: [
          { en: "hear (/hɪər/)", ipa: "I didn't hear what she said." },
          { en: "here (/hɪər/)", ipa: "Sit here on the bench." },
          { en: "their (/ðeər/)", ipa: "They took their printouts." },
          { en: "there (/ðeər/)", ipa: "Look over there." },
          { en: "deer (/dɪər/)", ipa: "Venison is meat from a deer." },
          { en: "dear (/dɪər/)", ipa: "She is a dear friend." },
          { en: "sea (/siː/)", ipa: "The house is by the sea." },
          { en: "reins (/reɪnz/)", ipa: "She held the horse's reins." },
          { en: "steal (/stiːl/)", ipa: "They tried to steal the ball." },
          { en: "steel (/stiːl/)", ipa: "Stadium beams of steel." },
          { en: "sew (/səʊ/)", ipa: "Sew the button onto the shirt." },
          { en: "weather (/ˈweð.ər/)", ipa: "I hope the weather is fine." },
          { en: "knight (/naɪt/)", ipa: "A brave medieval knight." },
          { en: "site (/saɪt/)", ipa: "The construction site is huge." }
        ]
      },
      {
        symbol: "8 Diphthongs",
        nameEn: "Master Revision of all 8 English Diphthongs",
        mouthGuideEn: "Diphthongs glide smoothly between two vowel targets in one syllable: 5 Closing (/eɪ, aɪ, ɔɪ, aʊ, əʊ/) and 3 Centring (/ɪə, eə, ʊə/).",
        words: [
          { en: "day /deɪ/", ipa: "/eɪ/ Closing" },
          { en: "smile /smaɪl/", ipa: "/aɪ/ Closing" },
          { en: "royal /ˈrɔɪəl/", ipa: "/ɔɪ/ Closing" },
          { en: "mountain /ˈmaʊntɪn/", ipa: "/aʊ/ Closing" },
          { en: "nose /nəʊz/", ipa: "/əʊ/ Closing" },
          { en: "fear /fɪər/", ipa: "/ɪə/ Centring" },
          { en: "air /eər/", ipa: "/eə/ Centring" },
          { en: "sure /ʃʊər/", ipa: "/ʊə/ Centring" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Unit 6 Diphthong Matching & Homophone Decoding Practice",
      words: [
        { en: "nose", ipa: "/nəʊz/", note: "/əʊ/ Closing Diphthong" },
        { en: "day", ipa: "/deɪ/", note: "/eɪ/ Closing Diphthong" },
        { en: "mountain", ipa: "/ˈmaʊn.tɪn/", note: "/aʊ/ Closing Diphthong" },
        { en: "sure", ipa: "/ʃʊər/", note: "/ʊə/ Centring Diphthong" },
        { en: "air", ipa: "/eər/", note: "/eə/ Centring Diphthong" },
        { en: "royal", ipa: "/ˈrɔɪ.əl/", note: "/ɔɪ/ Closing Diphthong" },
        { en: "smile", ipa: "/smaɪl/", note: "/aɪ/ Closing Diphthong" },
        { en: "fear", ipa: "/fɪər/", note: "/ɪə/ Centring Diphthong" },
        { en: "pie", ipa: "/paɪ/", note: "/aɪ/ Closing Diphthong" },
        { en: "rose", ipa: "/rəʊz/", note: "/əʊ/ Closing Diphthong" }
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit6 = u6_learning_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u6_learning_pronunciation };
  }
})();
