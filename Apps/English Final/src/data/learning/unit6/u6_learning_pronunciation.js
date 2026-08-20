/**
 * Al-Balqa Applied University — English 102
 * Unit 6: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 2
 */
(function() {
  const u6_learning_pronunciation = {
  "unit": 6,
  "titleEn": "Master Homophones Dictionary & All 8 English Diphthongs Revision",
  "sounds": [
    {
      "symbol": "Homophones",
      "name": "Homophones in Sentence Context",
      "rule": "Homophones have identical phonetic pronunciations but differ in spelling and semantic definition.",
      "guide": "Identify the phonetic spelling that matches the syntactic and grammatical context of the sentence.",
      "words": [
        {
          "spelling": "hear (/hɪər/)",
          "ipa": "I didn't hear what she said."
        },
        {
          "spelling": "here (/hɪər/)",
          "ipa": "Sit here on the bench."
        },
        {
          "spelling": "their (/ðeər/)",
          "ipa": "They took their printouts."
        },
        {
          "spelling": "there (/ðeər/)",
          "ipa": "Look over there."
        },
        {
          "spelling": "deer (/dɪər/)",
          "ipa": "Venison is meat from a deer."
        },
        {
          "spelling": "dear (/dɪər/)",
          "ipa": "She is a dear friend."
        },
        {
          "spelling": "sea (/siː/)",
          "ipa": "The house is by the sea."
        },
        {
          "spelling": "reins (/reɪnz/)",
          "ipa": "She held the horse's reins."
        },
        {
          "spelling": "steal (/stiːl/)",
          "ipa": "They tried to steal the ball."
        },
        {
          "spelling": "steel (/stiːl/)",
          "ipa": "Stadium beams of steel."
        },
        {
          "spelling": "sew (/səʊ/)",
          "ipa": "Sew the button onto the shirt."
        },
        {
          "spelling": "weather (/ˈweð.ər/)",
          "ipa": "I hope the weather is fine."
        },
        {
          "spelling": "knight (/naɪt/)",
          "ipa": "A brave medieval knight."
        },
        {
          "spelling": "site (/saɪt/)",
          "ipa": "The construction site is huge."
        }
      ]
    },
    {
      "symbol": "8 Diphthongs",
      "name": "Master Revision of all 8 English Diphthongs",
      "rule": "Comprehensive review of all 5 Closing diphthongs and 3 Centring diphthongs.",
      "guide": "Glide smoothly from the first vowel target toward the second target sound.",
      "words": [
        {
          "spelling": "day",
          "ipa": "/deɪ/ (/eɪ/ Closing)"
        },
        {
          "spelling": "smile",
          "ipa": "/smaɪl/ (/aɪ/ Closing)"
        },
        {
          "spelling": "royal",
          "ipa": "/ˈrɔɪəl/ (/ɔɪ/ Closing)"
        },
        {
          "spelling": "mountain",
          "ipa": "/ˈmaʊntɪn/ (/aʊ/ Closing)"
        },
        {
          "spelling": "nose",
          "ipa": "/nəʊz/ (/əʊ/ Closing)"
        },
        {
          "spelling": "fear",
          "ipa": "/fɪər/ (/ɪə/ Centring)"
        },
        {
          "spelling": "air",
          "ipa": "/eər/ (/eə/ Centring)"
        },
        {
          "spelling": "sure",
          "ipa": "/ʃʊər/ (/ʊə/ Centring)"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Homophone Minimal Pair Practice",
    "words": [
      {
        "word": "knight (/naɪt/)",
        "ipa": "vs night (/naɪt/)"
      },
      {
        "word": "steal (/stiːl/)",
        "ipa": "vs steel (/stiːl/)"
      },
      {
        "word": "weather (/ˈweð.ər/)",
        "ipa": "vs whether (/ˈweð.ər/)"
      },
      {
        "word": "sew (/səʊ/)",
        "ipa": "vs so / sow (/səʊ/)"
      }
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
