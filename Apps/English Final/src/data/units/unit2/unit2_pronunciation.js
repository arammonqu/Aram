/**
 * Al-Balqa Applied University — English 102
 * Unit 2: Nature or Nurture?
 * Section: Pronunciation (Authentic Exam Style)
 */
(function() {
  const unit2_pronunciation = [
    // ==========================================
    // Core Theoretical Concepts & Definitions
    // ==========================================
    {
      "id": "u2_p_01",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Phonetics Definitions",
      "promptEn": "A gliding vowel formed by the combination of two short vowel sounds within the same syllable is a ---------------",
      "promptAr": "صوت العلة الانزلاقي المتشكل من التقاء صوتي علة قصيرين داخل نفس المقطع الصوتي يسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "diphthong", "textAr": "صوت علة مزدوج (ديفثونغ)" },
        { "id": "b", "textEn": "monophthong", "textAr": "صوت علة نقي مفرد" },
        { "id": "c", "textEn": "consonant cluster", "textAr": "مجموعة ساكنة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A 'diphthong' is a complex vowel sound that glides from one vowel quality to another within a single syllable.",
      "explanationAr": "الـ 'Diphthong' هو صوت العلة المزدوج الناتج عن انزلاق الصوت من حركة علة إلى أخرى في المقطع الواحد.",
      "lexiconTokens": {
        "diphthong": "صوت علة مزدوج",
        "gliding": "انزلاقي",
        "syllable": "مقطع صوتي"
      }
    },
    {
      "id": "u2_p_02",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "IPA Symbol Identification",
      "promptEn": "The diphthong sound /ɔɪ/ is present in the word ---------------",
      "promptAr": "الصوت المزدوج /ɔɪ/ موجود في نطق كلمة ---------------",
      "choices": [
        { "id": "a", "textEn": "boy", "textAr": "ولد (/bɔɪ/)" },
        { "id": "b", "textEn": "buy", "textAr": "يشتري (/baɪ/)" },
        { "id": "c", "textEn": "bow", "textAr": "قوس (/bəʊ/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Boy' is phonetically transcribed as /bɔɪ/, containing the /ɔɪ/ diphthong.",
      "explanationAr": "كلمة 'Boy' تنتهي بالصوت المزدوج /bɔɪ/.",
      "lexiconTokens": {
        "boy": "ولد",
        "sound": "صوت"
      }
    },
    {
      "id": "u2_p_03",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "IPA Symbol Identification",
      "promptEn": "The diphthong sound /aɪ/ is present in the word ---------------",
      "promptAr": "الصوت المزدوج /aɪ/ موجود في نطق كلمة ---------------",
      "choices": [
        { "id": "a", "textEn": "sky", "textAr": "سماء (/skaɪ/)" },
        { "id": "b", "textEn": "ski", "textAr": "تزلج (/skiː/)" },
        { "id": "c", "textEn": "say", "textAr": "يقول (/seɪ/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Sky' is transcribed as /skaɪ/, containing the /aɪ/ diphthong.",
      "explanationAr": "كلمة 'Sky' تحتوي على الصوت المزدوج /skaɪ/.",
      "lexiconTokens": {
        "sky": "سماء"
      }
    },
    {
      "id": "u2_p_04",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "IPA Symbol Identification",
      "promptEn": "The diphthong sound /əʊ/ is present in the word ---------------",
      "promptAr": "الصوت المزدوج /əʊ/ موجود في نطق كلمة ---------------",
      "choices": [
        { "id": "a", "textEn": "cold", "textAr": "بارد (/kəʊld/)" },
        { "id": "b", "textEn": "cloud", "textAr": "سحابة (/klaʊd/)" },
        { "id": "c", "textEn": "call", "textAr": "يتصل (/kɔːl/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Cold' is transcribed as /kəʊld/, featuring the /əʊ/ diphthong.",
      "explanationAr": "كلمة 'Cold' تحتوي على الصوت المزدوج /kəʊld/.",
      "lexiconTokens": {
        "cold": "بارد"
      }
    },
    {
      "id": "u2_p_05",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "IPA Symbol Identification",
      "promptEn": "The diphthong sound /aʊ/ is present in the word ---------------",
      "promptAr": "الصوت المزدوج /aʊ/ موجود في نطق كلمة ---------------",
      "choices": [
        { "id": "a", "textEn": "now", "textAr": "الآن (/naʊ/)" },
        { "id": "b", "textEn": "no", "textAr": "لا (/nəʊ/)" },
        { "id": "c", "textEn": "new", "textAr": "جديد (/njuː/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Now' is transcribed as /naʊ/, containing the closing diphthong /aʊ/.",
      "explanationAr": "كلمة 'Now' تلفظ بالصوت المزدوج /naʊ/.",
      "lexiconTokens": {
        "now": "الآن"
      }
    },

    // ==========================================
    // Activity 1: Matching Diphthongs in Word Groups
    // ==========================================
    {
      "id": "u2_p_06",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Diphthong Matching (/aɪ/)",
      "promptEn": "Which word has the same diphthong /aɪ/ as in 'five'?",
      "promptAr": "أي كلمة تحتوي على نفس الصوت المزدوج /aɪ/ الموجود في 'five'؟",
      "choices": [
        { "id": "a", "textEn": "shy", "textAr": "خجول (/ʃaɪ/)" },
        { "id": "b", "textEn": "dear", "textAr": "عزيزي (/dɪə/)" },
        { "id": "c", "textEn": "shame", "textAr": "عار (/ʃeɪm/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Shy' (/ʃaɪ/) shares the exact /aɪ/ diphthong with 'five' (/faɪv/).",
      "explanationAr": "'Shy' (/ʃaɪ/) تحتوي على نفس الصوت المزدوج /aɪ/ الموجود في 'five'.",
      "lexiconTokens": {
        "shy": "خجول",
        "five": "خمسة"
      }
    },
    {
      "id": "u2_p_07",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Diphthong Matching (/aɪ/)",
      "promptEn": "Which word has the diphthong /aɪ/?",
      "promptAr": "أي من الكلمات التالية تحتوي على الصوت المزدوج /aɪ/؟",
      "choices": [
        { "id": "a", "textEn": "buy", "textAr": "يشتري (/baɪ/)" },
        { "id": "b", "textEn": "cloud", "textAr": "سحابة (/klaʊd/)" },
        { "id": "c", "textEn": "mail", "textAr": "بريد (/meɪl/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Buy' is pronounced /baɪ/, containing the /aɪ/ diphthong.",
      "explanationAr": "'Buy' تُنطق /baɪ/ وبها صوت العلة المزدوج /aɪ/.",
      "lexiconTokens": {
        "buy": "يشتري"
      }
    },
    {
      "id": "u2_p_08",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Diphthong Matching (/ɔɪ/)",
      "promptEn": "Which word has the same diphthong /ɔɪ/ as in 'toy' and 'oil'?",
      "promptAr": "أي كلمة تحتوي على الصوت المزدوج /ɔɪ/ كما في 'toy' و 'oil'؟",
      "choices": [
        { "id": "a", "textEn": "voice", "textAr": "صوت (/vɔɪs/)" },
        { "id": "b", "textEn": "soap", "textAr": "صابون (/səʊp/)" },
        { "id": "c", "textEn": "wrote", "textAr": "كتب (/rəʊt/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Voice' is pronounced /vɔɪs/, sharing the /ɔɪ/ sound.",
      "explanationAr": "'Voice' (/vɔɪs/) تحتوي على الصوت المزدوج /ɔɪ/.",
      "lexiconTokens": {
        "voice": "صوت",
        "oil": "زيت"
      }
    },
    {
      "id": "u2_p_09",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Diphthong Matching (/əʊ/)",
      "promptEn": "Which word has the same diphthong /əʊ/ as in 'gold' and 'old'?",
      "promptAr": "أي كلمة تحتوي على الصوت المزدوج /əʊ/ كما في 'gold' و 'old'؟",
      "choices": [
        { "id": "a", "textEn": "home", "textAr": "منزل (/həʊm/)" },
        { "id": "b", "textEn": "about", "textAr": "حول (/əˈbaʊt/)" },
        { "id": "c", "textEn": "coin", "textAr": "عملة معدنية (/kɔɪn/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Home' is transcribed as /həʊm/, containing the /əʊ/ diphthong.",
      "explanationAr": "'Home' (/həʊm/) تحتوي على الصوت المزدوج /əʊ/.",
      "lexiconTokens": {
        "home": "منزل",
        "gold": "ذهب"
      }
    },
    {
      "id": "u2_p_10",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Diphthong Matching (/aʊ/)",
      "promptEn": "Which word has the same diphthong /aʊ/ as in 'hour'?",
      "promptAr": "أي كلمة تحتوي على الصوت المزدوج /aʊ/ كما في 'hour' (/ˈaʊə/)؟",
      "choices": [
        { "id": "a", "textEn": "how", "textAr": "كيف (/haʊ/)" },
        { "id": "b", "textEn": "chose", "textAr": "اختار (/tʃəʊz/)" },
        { "id": "c", "textEn": "point", "textAr": "نقطة (/pɔɪnt/)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'How' is transcribed as /haʊ/, sharing the /aʊ/ diphthong.",
      "explanationAr": "'How' (/haʊ/) تحتوي على نفس الصوت المزدوج /aʊ/.",
      "lexiconTokens": {
        "how": "كيف",
        "hour": "ساعة"
      }
    },

    // ==========================================
    // Activity 2: Matching Diphthongs in Specific Words
    // ==========================================
    {
      "id": "u2_p_11",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Word Classification",
      "promptEn": "The diphthong sound found in the word 'emotional' is ---------------",
      "promptAr": "الصوت المزدوج الموجود في المقطع المشدد لكلمة 'emotional' هو ---------------",
      "choices": [
        { "id": "a", "textEn": "/əʊ/", "textAr": "صوت /əʊ/ (/ɪˈməʊʃənl/)" },
        { "id": "b", "textEn": "/aʊ/", "textAr": "صوت /aʊ/" },
        { "id": "c", "textEn": "/ɔɪ/", "textAr": "صوت /ɔɪ/" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Emotional' is transcribed as /ɪˈməʊʃənl/, featuring the /əʊ/ diphthong.",
      "explanationAr": "'Emotional' تحتوي على الصوت المزدوج /əʊ/ في مقطع /məʊ/.",
      "lexiconTokens": {
        "emotional": "عاطفي"
      }
    },
    {
      "id": "u2_p_12",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Word Classification",
      "promptEn": "The diphthong sound found in the word 'noisy' is ---------------",
      "promptAr": "الصوت المزدوج الموجود في كلمة 'noisy' هو ---------------",
      "choices": [
        { "id": "a", "textEn": "/ɔɪ/", "textAr": "صوت /ɔɪ/ (/ˈnɔɪzi/)" },
        { "id": "b", "textEn": "/əʊ/", "textAr": "صوت /əʊ/" },
        { "id": "c", "textEn": "/aɪ/", "textAr": "صوت /aɪ/" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Noisy' is transcribed as /ˈnɔɪzi/, containing the /ɔɪ/ diphthong.",
      "explanationAr": "'Noisy' تحتوي على الصوت المزدوج /ɔɪ/.",
      "lexiconTokens": {
        "noisy": "صاخب / مزعج"
      }
    },
    {
      "id": "u2_p_13",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Word Classification",
      "promptEn": "The diphthong sound found in the second syllable of 'foreground' is ---------------",
      "promptAr": "الصوت المزدوج الموجود في المقطع الثاني لكلمة 'foreground' هو ---------------",
      "choices": [
        { "id": "a", "textEn": "/aʊ/", "textAr": "صوت /aʊ/ (/ˈfɔːɡraʊnd/)" },
        { "id": "b", "textEn": "/əʊ/", "textAr": "صوت /əʊ/" },
        { "id": "c", "textEn": "/ɔɪ/", "textAr": "صوت /ɔɪ/" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Foreground' is transcribed as /ˈfɔːɡraʊnd/, containing the /aʊ/ sound in '-ground'.",
      "explanationAr": "'Foreground' تحتوي في مقطع '-ground' على الصوت المزدوج /aʊ/.",
      "lexiconTokens": {
        "foreground": "المقدمة / الواجهة"
      }
    },
    {
      "id": "u2_p_14",
      "unit": 2,
      "stream": "pronunciation",
      "topic": "Word Classification",
      "promptEn": "The diphthong sound found in the word 'stylish' is ---------------",
      "promptAr": "الصوت المزدوج الموجود في كلمة 'stylish' هو ---------------",
      "choices": [
        { "id": "a", "textEn": "/aɪ/", "textAr": "صوت /aɪ/ (/ˈstaɪlɪʃ/)" },
        { "id": "b", "textEn": "/eɪ/", "textAr": "صوت /eɪ/" },
        { "id": "c", "textEn": "/əʊ/", "textAr": "صوت /əʊ/" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Stylish' is transcribed as /ˈstaɪlɪʃ/, featuring the /aɪ/ diphthong in the first syllable.",
      "explanationAr": "'Stylish' تحتوي في مقطعها الأول على صوت العلة المزدوج /aɪ/.",
      "lexiconTokens": {
        "stylish": "أنيق"
      }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.pronunciation = window.COURSE_DATA.pronunciation || {};
    window.COURSE_DATA.pronunciation.unit2 = unit2_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit2_pronunciation };
  }
})();
