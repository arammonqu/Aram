/**
 * Al-Balqa Applied University — English 102
 * Unit 2: Nature or Nurture?
 * Module 3: Pronunciation Studio (Diphthongs Part A & Past -ed Endings)
 */
(function() {
  const u2_learning_pronunciation = {
    unit: 2,
    titleEn: "Diphthongs: Part A (/ɔɪ/, /aɪ/, /əʊ/, /aʊ/) & Past '-ed' Pronunciation Rules",
    summaryTable: {
      headers: ["Target Sound", "Sound Classification", "Articulation & Phonetic Rule", "Clickable Audio Examples"],
      rows: [
        {
          symbol: "/ɔɪ/",
          name: "Closing Diphthong",
          rule: "Glides from open-mid back /ɔː/ to near-close front /ɪ/ (letters 'oy', 'oi')",
          examples: ["boy", "oil", "voice", "toy", "noisy"]
        },
        {
          symbol: "/aɪ/",
          name: "Closing Diphthong",
          rule: "Glides from open front /a/ to near-close front /ɪ/ (letters 'y', 'i_e', 'uy')",
          examples: ["sky", "five", "buy", "shy", "stylish"]
        },
        {
          symbol: "/əʊ/",
          name: "Closing Diphthong",
          rule: "Glides from central Schwa /ə/ to near-close back /ʊ/ (letters 'o', 'o_e', 'oa')",
          examples: ["old", "cold", "gold", "home", "emotional"]
        },
        {
          symbol: "/aʊ/",
          name: "Closing Diphthong",
          rule: "Glides from open /a/ to near-close rounded /ʊ/ (letters 'ow', 'ou')",
          examples: ["how", "now", "hour", "cloud", "foreground"]
        },
        {
          symbol: "/-t/",
          name: "Voiceless '-ed' Ending",
          rule: "After voiceless consonants: /p, k, f, s, ʃ, tʃ/",
          examples: ["laughed", "watched", "stopped", "picnicked"]
        },
        {
          symbol: "/-d/",
          name: "Voiced '-ed' Ending",
          rule: "After voiced consonants: /b, g, v, z, m, n, l, r/ & all vowels",
          examples: ["pleaded", "cleaned", "played", "preferred", "travelled"]
        },
        {
          symbol: "/-ɪd/",
          name: "Extra Syllable Ending",
          rule: "Adds an extra syllable after base verbs ending in /t/ or /d/",
          examples: ["visited", "started", "demanded", "needed"]
        }
      ]
    },
    phoneticCards: [
      {
        symbol: "/ɔɪ/",
        nameEn: "Diphthong /ɔɪ/ (boy, oil, voice)",
        mouthGuideEn: "Start with tongue low and lips rounded /ɔː/, then glide smoothly towards /ɪ/ with lips relaxing into an unrounded smile.",
        words: [
          { en: "boy", ipa: "/bɔɪ/" },
          { en: "toy", ipa: "/tɔɪ/" },
          { en: "oil", ipa: "/ɔɪl/" },
          { en: "voice", ipa: "/vɔɪs/" },
          { en: "noisy", ipa: "/ˈnɔɪ.zi/" }
        ]
      },
      {
        symbol: "/aɪ/",
        nameEn: "Diphthong /aɪ/ (sky, five, buy)",
        mouthGuideEn: "Open mouth wide for the starting sound /a/, then glide the tongue upward forward toward /ɪ/ while narrowing the jaw.",
        words: [
          { en: "sky", ipa: "/skaɪ/" },
          { en: "five", ipa: "/faɪv/" },
          { en: "buy", ipa: "/baɪ/" },
          { en: "shy", ipa: "/ʃaɪ/" },
          { en: "stylish", ipa: "/ˈstaɪ.lɪʃ/" }
        ]
      },
      {
        symbol: "/əʊ/",
        nameEn: "Diphthong /əʊ/ (old, cold, home)",
        mouthGuideEn: "Begin with relaxed lips making a neutral Schwa /ə/, then round your lips and raise the back of your tongue toward /ʊ/.",
        words: [
          { en: "old", ipa: "/əʊld/" },
          { en: "cold", ipa: "/kəʊld/" },
          { en: "gold", ipa: "/ɡəʊld/" },
          { en: "home", ipa: "/həʊm/" },
          { en: "emotional", ipa: "/ɪˈməʊ.ʃən.əl/" }
        ]
      },
      {
        symbol: "/aʊ/",
        nameEn: "Diphthong /aʊ/ (how, now, hour)",
        mouthGuideEn: "Start with an open mouth /a/, then glide smoothly to lip-rounded /ʊ/ (like saying 'ouch').",
        words: [
          { en: "how", ipa: "/haʊ/" },
          { en: "now", ipa: "/naʊ/" },
          { en: "hour", ipa: "/ˈaʊ.ər/" },
          { en: "cloud", ipa: "/klaʊd/" },
          { en: "foreground", ipa: "/ˈfɔː.ɡraʊnd/" }
        ]
      },
      {
        symbol: "/-ed/",
        nameEn: "Past Tense '-ed' Endings (/t/, /d/, /ɪd/)",
        mouthGuideEn: "Notice whether your vocal cords vibrate at the end of the base verb: Voiceless -> /t/, Voiced -> /d/, Ending in /t/ or /d/ -> /ɪd/.",
        words: [
          { en: "laughed", ipa: "/lɑːft/", note: "Ends in /t/" },
          { en: "watched", ipa: "/wɒtʃt/", note: "Ends in /t/" },
          { en: "played", ipa: "/pleɪd/", note: "Ends in /d/" },
          { en: "preferred", ipa: "/prɪˈfɜːd/", note: "Ends in /d/" },
          { en: "visited", ipa: "/ˈvɪz.ɪ.tɪd/", note: "Ends in /ɪd/ (extra syllable)" }
        ]
      }
    ],
    broadTranscriptionDecoding: {
      title: "Unit 2 Broad IPA Decoding Practice",
      words: [
        { en: "metabolism", ipa: "/məˈtæb.əl.ɪ.zəm/", note: "Metabolism" },
        { en: "deprivation", ipa: "/ˌdep.rɪˈveɪ.ʃən/", note: "Deprivation" },
        { en: "craving", ipa: "/ˈkreɪ.vɪŋ/", note: "Craving" },
        { en: "deficit", ipa: "/ˈdef.ɪ.sɪt/", note: "Deficit" },
        { en: "disorder", ipa: "/dɪsˈɔː.dər/", note: "Disorder" },
        { en: "pediatrician", ipa: "/ˌpiː.di.əˈtrɪʃ.ən/", note: "Pediatrician" },
        { en: "anxiety", ipa: "/æŋˈzaɪ.ə.ti/", note: "Anxiety" },
        { en: "quash", ipa: "/kwɒʃ/", note: "Quash" }
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
