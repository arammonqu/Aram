/**
 * Al-Balqa Applied University — English 102
 * Unit 2: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 5
 */
(function() {
  const u2_learning_pronunciation = {
  "unit": 2,
  "titleEn": "Diphthongs: Part A (/ɔɪ/, /aɪ/, /əʊ/, /aʊ/) & Past '-ed' Pronunciation Rules",
  "sounds": [
    {
      "symbol": "/ɔɪ/",
      "name": "Closing Diphthong /ɔɪ/ (boy, oil, voice)",
      "rule": "Letters 'oy' and 'oi'.",
      "guide": "Start with tongue low and lips rounded /ɔː/, then glide smoothly towards /ɪ/ with lips relaxing into a smile.",
      "words": [
        {
          "spelling": "boy",
          "ipa": "/bɔɪ/"
        },
        {
          "spelling": "toy",
          "ipa": "/tɔɪ/"
        },
        {
          "spelling": "oil",
          "ipa": "/ɔɪl/"
        },
        {
          "spelling": "voice",
          "ipa": "/vɔɪs/"
        },
        {
          "spelling": "noisy",
          "ipa": "/ˈnɔɪ.zi/"
        }
      ]
    },
    {
      "symbol": "/aɪ/",
      "name": "Closing Diphthong /aɪ/ (sky, five, buy)",
      "rule": "Letters 'i_e', 'y', 'igh', and 'uy'.",
      "guide": "Start with open mouth at /a/, then glide upward towards /ɪ/ while narrowing the jaw.",
      "words": [
        {
          "spelling": "sky",
          "ipa": "/skaɪ/"
        },
        {
          "spelling": "five",
          "ipa": "/faɪv/"
        },
        {
          "spelling": "buy",
          "ipa": "/baɪ/"
        },
        {
          "spelling": "shy",
          "ipa": "/ʃaɪ/"
        },
        {
          "spelling": "stylish",
          "ipa": "/ˈstaɪ.lɪʃ/"
        }
      ]
    },
    {
      "symbol": "/əʊ/",
      "name": "Closing Diphthong /əʊ/ (old, cold, home)",
      "rule": "Letters 'o_e', 'ow', 'oa', and 'ol'.",
      "guide": "Start at central neutral vowel /ə/, then glide upward towards /ʊ/ while rounding lips.",
      "words": [
        {
          "spelling": "old",
          "ipa": "/əʊld/"
        },
        {
          "spelling": "cold",
          "ipa": "/kəʊld/"
        },
        {
          "spelling": "gold",
          "ipa": "/ɡəʊld/"
        },
        {
          "spelling": "home",
          "ipa": "/həʊm/"
        },
        {
          "spelling": "emotional",
          "ipa": "/ɪˈməʊ.ʃən.əl/"
        }
      ]
    },
    {
      "symbol": "/aʊ/",
      "name": "Closing Diphthong /aʊ/ (how, now, hour)",
      "rule": "Letters 'ou' and 'ow'.",
      "guide": "Start open at /a/, then glide toward /ʊ/ while closing jaw and rounding lips.",
      "words": [
        {
          "spelling": "how",
          "ipa": "/haʊ/"
        },
        {
          "spelling": "now",
          "ipa": "/naʊ/"
        },
        {
          "spelling": "hour",
          "ipa": "/ˈaʊ.ər/"
        },
        {
          "spelling": "cloud",
          "ipa": "/klaʊd/"
        },
        {
          "spelling": "foreground",
          "ipa": "/ˈfɔː.ɡraʊnd/"
        }
      ]
    },
    {
      "symbol": "/-ed/",
      "name": "Past Tense '-ed' Endings (/t/, /d/, /ɪd/)",
      "rule": "Pronounced /t/ after voiceless sounds, /d/ after voiced sounds, and /ɪd/ after 't' or 'd'.",
      "guide": "Check the final sound of the base verb to determine the exact past tense pronunciation.",
      "words": [
        {
          "spelling": "laughed",
          "ipa": "/lɑːft/ (/t/)"
        },
        {
          "spelling": "watched",
          "ipa": "/wɒtʃt/ (/t/)"
        },
        {
          "spelling": "played",
          "ipa": "/pleɪd/ (/d/)"
        },
        {
          "spelling": "preferred",
          "ipa": "/prɪˈfɜːd/ (/d/)"
        },
        {
          "spelling": "visited",
          "ipa": "/ˈvɪz.ɪ.tɪd/ (/ɪd/)"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Textbook Broad IPA Transcription Practice",
    "words": [
      {
        "word": "voice",
        "ipa": "/vɔɪs/"
      },
      {
        "word": "proud",
        "ipa": "/praʊd/"
      },
      {
        "word": "stone",
        "ipa": "/stəʊn/"
      },
      {
        "word": "fright",
        "ipa": "/fraɪt/"
      },
      {
        "word": "noisy",
        "ipa": "/ˈnɔɪ.zi/"
      }
    ]
  }
};

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit2 = u2_learning_pronunciation;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u2_learning_pronunciation };
  }
})();
