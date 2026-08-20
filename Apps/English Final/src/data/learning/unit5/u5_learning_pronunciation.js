/**
 * Al-Balqa Applied University — English 102
 * Unit 5: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 5
 */
(function() {
  const u5_learning_pronunciation = {
  "unit": 5,
  "titleEn": "Consonant Clusters: Initial, Medial, Final & Sound Counting",
  "sounds": [
    {
      "symbol": "Initial 'bl-'",
      "name": "Voiced Bilabial Plosive + Lateral (/bl/)",
      "rule": "Two consonants appear consecutively at the start of a word without any intervening vowel.",
      "guide": "Close both lips firmly for /b/, then immediately release airflow around sides of tongue for /l/.",
      "words": [
        {
          "spelling": "black",
          "ipa": "/blæk/"
        },
        {
          "spelling": "blend",
          "ipa": "/blend/"
        },
        {
          "spelling": "blast",
          "ipa": "/blɑːst/"
        }
      ]
    },
    {
      "symbol": "Initial 'dr-'",
      "name": "Voiced Alveolar Plosive + Post-Alveolar (/dr/)",
      "rule": "Plosive /d/ followed immediately by liquid /r/.",
      "guide": "Place tongue tip at alveolar ridge for /d/, then curl tongue slightly backward for /r/.",
      "words": [
        {
          "spelling": "drink",
          "ipa": "/drɪŋk/"
        },
        {
          "spelling": "dress",
          "ipa": "/dres/"
        },
        {
          "spelling": "drought",
          "ipa": "/draʊt/"
        }
      ]
    },
    {
      "symbol": "Initial 'gr-'",
      "name": "Voiced Velar Plosive + Post-Alveolar (/ɡr/)",
      "rule": "Velar /g/ followed immediately by liquid /r/.",
      "guide": "Raise back of tongue to soft palate for /g/, then transition smoothly into retroflex /r/.",
      "words": [
        {
          "spelling": "green",
          "ipa": "/ɡriːn/"
        },
        {
          "spelling": "great",
          "ipa": "/ɡreɪt/"
        },
        {
          "spelling": "graduate",
          "ipa": "/ˈɡrædʒ.u.eɪt/"
        }
      ]
    },
    {
      "symbol": "Initial 'sp-' & 'str-'",
      "name": "Sibilant Clusters (/sp/ & /str/ - 3 Sounds)",
      "rule": "Cluster of 2 to 3 consonants at word onset.",
      "guide": "Hiss on /s/, then immediately close lips for /p/ (or tongue for /t/-/r/) without any vowel insertion.",
      "words": [
        {
          "spelling": "speak",
          "ipa": "/spiːk/ (2 consonants)"
        },
        {
          "spelling": "sport",
          "ipa": "/spɔːt/ (2 consonants)"
        },
        {
          "spelling": "street",
          "ipa": "/striːt/ (3 consonants)"
        }
      ]
    },
    {
      "symbol": "Final '-st', '-mp', '-nd'",
      "name": "Ending Consonant Clusters (/st/, /mp/, /nd/)",
      "rule": "Consecutive consonants at the word coda.",
      "guide": "Articulate each final consonant cleanly without dropping the last sound.",
      "words": [
        {
          "spelling": "best",
          "ipa": "/best/ (-st)"
        },
        {
          "spelling": "post",
          "ipa": "/pəʊst/ (-st)"
        },
        {
          "spelling": "camp",
          "ipa": "/kæmp/ (-mp)"
        },
        {
          "spelling": "lamp",
          "ipa": "/læmp/ (-mp)"
        },
        {
          "spelling": "friend",
          "ipa": "/frend/ (-nd)"
        },
        {
          "spelling": "hand",
          "ipa": "/hænd/ (-nd)"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Consonant Cluster Counting Practice",
    "words": [
      {
        "word": "street",
        "ipa": "3 Initial Consonants (/s-t-r/)"
      },
      {
        "word": "spring",
        "ipa": "3 Initial Consonants (/s-p-r/)"
      },
      {
        "word": "glimpse",
        "ipa": "2 Initial + 3 Final (/ɡ-l/ & /m-p-s/)"
      },
      {
        "word": "texts",
        "ipa": "3 Final Consonants (/k-s-t-s/)"
      }
    ]
  }
};

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.pronunciation = window.COURSE_LEARNING_DATA.pronunciation || {};
    window.COURSE_LEARNING_DATA.pronunciation.unit5 = u5_learning_pronunciation;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u5_learning_pronunciation };
  }
})();
