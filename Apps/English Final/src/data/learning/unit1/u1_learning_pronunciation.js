/**
 * Al-Balqa Applied University — English 102
 * Unit 1: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 7
 */
(function() {
  const u1_learning_pronunciation = {
  "unit": 1,
  "titleEn": "English Sounds: Consonants & Broad IPA Decoding",
  "sounds": [
    {
      "symbol": "/w/",
      "name": "Voiced Labio-Velar Approximant",
      "rule": "Letter 'w' or letter 'o' in 'one'.",
      "guide": "Round your lips tightly (like whistling), raise the back of your tongue toward the soft palate, and vocalize.",
      "words": [
        {
          "spelling": "One",
          "ipa": "/wʌn/"
        },
        {
          "spelling": "Walk",
          "ipa": "/wɔːk/"
        },
        {
          "spelling": "Warm",
          "ipa": "/wɔːm/"
        }
      ]
    },
    {
      "symbol": "/n/",
      "name": "Alveolar Nasal (Silent 'K' Rule)",
      "rule": "The letter 'k' is completely silent before 'n' at the start of a word.",
      "guide": "Touch the tip of your tongue to the alveolar ridge behind your upper teeth and release air through the nose.",
      "words": [
        {
          "spelling": "know",
          "ipa": "/nəʊ/"
        },
        {
          "spelling": "knight",
          "ipa": "/naɪt/"
        },
        {
          "spelling": "knee",
          "ipa": "/niː/"
        }
      ]
    },
    {
      "symbol": "/ʃ/",
      "name": "Voiceless Post-Alveolar Fricative",
      "rule": "Letters 'sh', or letter 's' in specific words like 'sure' and 'sugar'.",
      "guide": "Push lips slightly forward and blow air softly through a broad channel across the tongue (like saying 'shh').",
      "words": [
        {
          "spelling": "Sure",
          "ipa": "/ʃʊər/"
        },
        {
          "spelling": "Sugar",
          "ipa": "/ˈʃʊɡ.ər/"
        },
        {
          "spelling": "Shrub",
          "ipa": "/ʃrʌb/"
        }
      ]
    },
    {
      "symbol": "/s/",
      "name": "Voiceless Alveolar Fricative (Soft 'C' Rule)",
      "rule": "Letter 'c' is soft (/s/) when directly followed by vowels e, i, or y.",
      "guide": "Place the tongue tip close to the roof of your mouth behind your top teeth and hiss gently.",
      "words": [
        {
          "spelling": "Cereal",
          "ipa": "/ˈsɪə.ri.əl/"
        },
        {
          "spelling": "City",
          "ipa": "/ˈsɪt.i/"
        },
        {
          "spelling": "Center",
          "ipa": "/ˈsen.tər/"
        }
      ]
    },
    {
      "symbol": "/k/",
      "name": "Voiceless Velar Plosive (Greek 'CH' Rule)",
      "rule": "Letter combination 'ch' is pronounced /k/ in words of classical Greek origin.",
      "guide": "Press the back of your tongue against the soft palate and release a sharp burst of unvoiced air.",
      "words": [
        {
          "spelling": "Chorus",
          "ipa": "/ˈkɔː.rəs/"
        },
        {
          "spelling": "Character",
          "ipa": "/ˈkær.ək.tər/"
        },
        {
          "spelling": "Chemistry",
          "ipa": "/ˈkem.ɪ.stri/"
        }
      ]
    },
    {
      "symbol": "/tʃ/",
      "name": "Voiceless Post-Alveolar Affricate",
      "rule": "Standard regular English 'ch' and 'tch' letter spellings.",
      "guide": "Combine /t/ and /ʃ/ by stopping airflow with the tongue tip, then releasing it with friction.",
      "words": [
        {
          "spelling": "Chaste",
          "ipa": "/tʃeɪst/"
        },
        {
          "spelling": "Choose",
          "ipa": "/tʃuːz/"
        },
        {
          "spelling": "Chalk",
          "ipa": "/tʃɔːk/"
        }
      ]
    },
    {
      "symbol": "/θ/",
      "name": "Voiceless Dental Fricative",
      "rule": "Letters 'th' (unvoiced sound).",
      "guide": "Place your tongue tip between your upper and lower front teeth and blow air gently without voice.",
      "words": [
        {
          "spelling": "Theme",
          "ipa": "/θiːm/"
        },
        {
          "spelling": "Thesis",
          "ipa": "/ˈθiː.sɪs/"
        },
        {
          "spelling": "Theory",
          "ipa": "/ˈθɪə.ri/"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Textbook Broad IPA Transcription Practice",
    "words": [
      {
        "word": "carpet",
        "ipa": "/ˈkɑːpɪt/"
      },
      {
        "word": "huge",
        "ipa": "/hjuːdʒ/"
      },
      {
        "word": "sneeze",
        "ipa": "/ˈsniːz/"
      },
      {
        "word": "usual",
        "ipa": "/ˈjuːʒwəl/"
      },
      {
        "word": "middle",
        "ipa": "/ˈmɪdl/"
      },
      {
        "word": "psalm",
        "ipa": "/sɑːm/"
      },
      {
        "word": "young",
        "ipa": "/jʌŋ/"
      },
      {
        "word": "think",
        "ipa": "/θɪŋk/"
      },
      {
        "word": "autumn",
        "ipa": "/ˈɔːtəm/"
      }
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
