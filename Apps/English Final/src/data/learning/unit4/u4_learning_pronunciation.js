/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Pronunciation & Phonetics Studio (Unified Single Master Table)
 * Total Sounds: 2
 */
(function() {
  const u4_learning_pronunciation = {
  "unit": 4,
  "titleEn": "English Intonation Patterns: Standard Falling (↘) vs. Rising (↗) Pitch",
  "sounds": [
    {
      "symbol": "↘ Falling",
      "name": "Falling Intonation (Statements & Wh- Questions)",
      "rule": "Used in Declarative Statements, Wh- Information Questions, Commands, and Definitive Answers.",
      "guide": "The pitch of your voice drops significantly on the last stressed syllable, signaling finality and completeness.",
      "words": [
        {
          "spelling": "We live in Moscow.",
          "ipa": "↘ Statement"
        },
        {
          "spelling": "I haven't read this book.",
          "ipa": "↘ Negative"
        },
        {
          "spelling": "Where do you live?",
          "ipa": "↘ Wh- Question"
        },
        {
          "spelling": "How much is it?",
          "ipa": "↘ Wh- Question"
        },
        {
          "spelling": "Who wants to go there?",
          "ipa": "↘ Wh- Question"
        },
        {
          "spelling": "They left for London yesterday.",
          "ipa": "↘ Statement"
        },
        {
          "spelling": "I'd like a sandwich, please.",
          "ipa": "↘ Request"
        }
      ]
    },
    {
      "symbol": "↗ Rising",
      "name": "Rising Intonation (Yes/No Questions & Direct Address)",
      "rule": "Used in Yes/No Questions, Echo Questions, and Direct Personal Addresses.",
      "guide": "The pitch of your voice rises steadily at the end of the clause, inviting confirmation or response.",
      "words": [
        {
          "spelling": "Do you go there often?",
          "ipa": "↗ Yes/No Question"
        },
        {
          "spelling": "Was she glad to see him?",
          "ipa": "↗ Yes/No Question"
        },
        {
          "spelling": "Have you read this book?",
          "ipa": "↗ Yes/No Question"
        },
        {
          "spelling": "Tom, could you help me, please?",
          "ipa": "↗ Direct Address on 'Tom'"
        },
        {
          "spelling": "Sir, you dropped your notebook.",
          "ipa": "↗ Direct Address on 'Sir'"
        },
        {
          "spelling": "Liz, are you ready to start?",
          "ipa": "↗ Direct Address on 'Liz'"
        }
      ]
    }
  ],
  "broadTranscriptionDecoding": {
    "title": "Intonation Pattern Decoding Practice",
    "words": [
      {
        "word": "Are you ready?",
        "ipa": "↗ Rising Pitch"
      },
      {
        "word": "What time is it?",
        "ipa": "↘ Falling Pitch"
      },
      {
        "word": "Open your book.",
        "ipa": "↘ Falling Pitch"
      },
      {
        "word": "Did he call you?",
        "ipa": "↗ Rising Pitch"
      }
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
