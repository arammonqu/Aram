/**
 * Al-Balqa Applied University — English 102
 * Unit 5: Gossip and the Media
 * Module 3: Pronunciation Studio (Consonant Clusters: Initial, Medial, Final & Counting Rules)
 */
(function() {
  const u5_learning_pronunciation = {
    unit: 5,
    titleEn: "Consonant Clusters: Initial, Medial, Final & Sound Counting",
    summaryTable: {
      headers: ["Cluster Category", "Phonetic Cluster", "Position & Phonological Rule", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "bl- / dr- / gr-",
          name: "Initial 2-Consonant Clusters",
          rule: "Two consonants appear consecutively at the start of a word without any intervening vowel.",
          examples: ["black", "blend", "drink", "dress", "green", "great"]
        },
        {
          symbol: "sp- / str-",
          name: "Initial S-Clusters (2 & 3 Consonants)",
          rule: "S-clusters where every consonant sound (/s/+/p/ or /s/+/t/+/r/) is distinctly heard.",
          examples: ["speak", "sport", "street", "strong"]
        },
        {
          symbol: "-st / -mp / -nd",
          name: "Final Consonant Clusters",
          rule: "Consonants occurring consecutively at the end of a syllable or word.",
          examples: ["best", "post", "jump", "lamp", "camp", "hand", "friend"]
        },
        {
          symbol: "Cluster vs. Digraph",
          name: "Phonetic Discrimination",
          rule: "Clusters retain individual consonant sounds (/b/+/l/); Digraphs merge into 1 sound ('sh' = /ʃ/).",
          examples: ["blend (/b/+/l/)", "blast (bl- & -st)", "sure (/ʃ/ digraph)"]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "Initial 'bl-'",
        nameEn: "Voiced Bilabial Plosive + Lateral (/bl/)",
        mouthGuideEn: "Close both lips firmly for /b/, then immediately release airflow around the sides of the tongue for /l/ without inserting a vowel sound.",
        words: [
          { en: "black", ipa: "/blæk/" },
          { en: "blend", ipa: "/blend/" },
          { en: "blast", ipa: "/blɑːst/" }
        ]
      },
      {
        symbol: "Initial 'dr-'",
        nameEn: "Voiced Alveolar Plosive + Post-Alveolar (/dr/)",
        mouthGuideEn: "Place the tongue on the alveolar ridge for /d/, then curl the tongue slightly back for /r/ with slight lip rounding.",
        words: [
          { en: "drink", ipa: "/drɪŋk/" },
          { en: "dress", ipa: "/dres/" },
          { en: "drought", ipa: "/draʊt/" }
        ]
      },
      {
        symbol: "Initial 'gr-'",
        nameEn: "Voiced Velar Plosive + Post-Alveolar (/ɡr/)",
        mouthGuideEn: "Press back of tongue against soft palate for /ɡ/, then glide into /r/ smoothly without pausing.",
        words: [
          { en: "green", ipa: "/ɡriːn/" },
          { en: "great", ipa: "/ɡreɪt/" },
          { en: "graduate", ipa: "/ˈɡrædʒ.u.eɪt/" }
        ]
      },
      {
        symbol: "Initial 'sp-' & 'str-'",
        nameEn: "Sibilant Clusters (/sp/ & /str/ - 3 Sounds)",
        mouthGuideEn: "Hiss through teeth for /s/, then immediately close lips for /p/ (in /sp/), or tap /t/ and curl /r/ (in /str/ -> 3 consonant sounds).",
        words: [
          { en: "speak", ipa: "/spiːk/" },
          { en: "sport", ipa: "/spɔːt/" },
          { en: "street", ipa: "/striːt/" }
        ]
      },
      {
        symbol: "Final '-st', '-mp', '-nd'",
        nameEn: "Ending Consonant Clusters (/st/, /mp/, /nd/)",
        mouthGuideEn: "Do not drop the final consonant; pronounce both closing sounds distinctly at the end of the word.",
        words: [
          { en: "best", ipa: "/best/" },
          { en: "post", ipa: "/pəʊst/" },
          { en: "camp", ipa: "/kæmp/" },
          { en: "lamp", ipa: "/læmp/" },
          { en: "friend", ipa: "/frend/" },
          { en: "hand", ipa: "/hænd/" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Unit 5 Cluster Classification & IPA Decoding",
      words: [
        { en: "blast", ipa: "/blɑːst/", note: "Initial (bl-) and Final (-st) Clusters" },
        { en: "plastic", ipa: "/ˈplæs.tɪk/", note: "Initial (pl-) and Medial (-st-) Clusters" },
        { en: "street", ipa: "/striːt/", note: "3-Sound Initial Cluster (/s/+/t/+/r/)" },
        { en: "friend", ipa: "/frend/", note: "Initial (fr-) and Final (-nd) Clusters" },
        { en: "screen", ipa: "/skriːn/", note: "3-Sound Initial Cluster (/s/+/k/+/r/)" },
        { en: "documentary", ipa: "/ˌdɒk.jəˈmen.tər.i/", note: "Broad IPA Decoding" }
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
