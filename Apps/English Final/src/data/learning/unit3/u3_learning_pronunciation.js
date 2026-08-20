/**
 * Al-Balqa Applied University — English 102
 * Unit 3: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 4
 */
(function() {
  const u3_learning_pronunciation = {
  "unit": 3,
  "titleEn": "Diphthongs: Part B (/eɪ/, /eə/, /ɪə/, /ʊə/) & Minimal Pair Discrimination",
  "sounds": [
    {
      "symbol": "/eɪ/",
      "name": "Closing Diphthong /eɪ/ (may, today, chase)",
      "rule": "Letters 'ay', 'a_e', 'eigh', and 'ey'.",
      "guide": "Start with mouth half-open in a relaxed /e/ vowel position, then glide smoothly upward towards /ɪ/.",
      "words": [
        {
          "spelling": "may",
          "ipa": "/meɪ/"
        },
        {
          "spelling": "say",
          "ipa": "/seɪ/"
        },
        {
          "spelling": "today",
          "ipa": "/təˈdeɪ/"
        },
        {
          "spelling": "chase",
          "ipa": "/tʃeɪs/"
        },
        {
          "spelling": "overweight",
          "ipa": "/ˌəʊ.vəˈweɪt/"
        },
        {
          "spelling": "came",
          "ipa": "/keɪm/"
        }
      ]
    },
    {
      "symbol": "/eə/",
      "name": "Centring Diphthong /eə/ (air, hair, bear)",
      "rule": "Letters 'air', 'ear', 'are', and 'ere'.",
      "guide": "Start with open-mid front vowel /e/, then glide toward central schwa /ə/ with mouth slightly opening.",
      "words": [
        {
          "spelling": "air",
          "ipa": "/eər/"
        },
        {
          "spelling": "hair",
          "ipa": "/heər/"
        },
        {
          "spelling": "bear",
          "ipa": "/beər/"
        },
        {
          "spelling": "there",
          "ipa": "/ðeər/"
        },
        {
          "spelling": "blonde-haired",
          "ipa": "/ˌblɒndˈheəd/"
        }
      ]
    },
    {
      "symbol": "/ɪə/",
      "name": "Centring Diphthong /ɪə/ (near, beer, hear)",
      "rule": "Letters 'eer', 'ear', and 'ere'.",
      "guide": "Start at close front /ɪ/, then glide smoothly into central schwa /ə/.",
      "words": [
        {
          "spelling": "near",
          "ipa": "/nɪər/"
        },
        {
          "spelling": "beer",
          "ipa": "/bɪər/"
        },
        {
          "spelling": "hear",
          "ipa": "/hɪər/"
        },
        {
          "spelling": "here",
          "ipa": "/hɪər/"
        },
        {
          "spelling": "dear",
          "ipa": "/dɪər/"
        }
      ]
    },
    {
      "symbol": "/ʊə/",
      "name": "Centring Diphthong /ʊə/ (tour, poor, sure)",
      "rule": "Letters 'our', 'oor', and 'ure'.",
      "guide": "Start with lips lightly rounded at /ʊ/, then glide into neutral unrounded schwa /ə/.",
      "words": [
        {
          "spelling": "tour",
          "ipa": "/tʊər/"
        },
        {
          "spelling": "poor",
          "ipa": "/pʊər/"
        },
        {
          "spelling": "sure",
          "ipa": "/ʃʊər/"
        },
        {
          "spelling": "pure",
          "ipa": "/pjʊər/"
        },
        {
          "spelling": "plural",
          "ipa": "/ˈplʊə.rəl/"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Minimal Pair Discrimination Practice",
    "words": [
      {
        "word": "hair (/heər/)",
        "ipa": "vs hear (/hɪər/)"
      },
      {
        "word": "bear (/beər/)",
        "ipa": "vs beer (/bɪər/)"
      },
      {
        "word": "dare (/deər/)",
        "ipa": "vs dear (/dɪər/)"
      },
      {
        "word": "fare (/feər/)",
        "ipa": "vs fear (/fɪər/)"
      }
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
