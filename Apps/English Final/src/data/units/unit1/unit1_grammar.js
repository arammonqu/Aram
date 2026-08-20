/**
 * Al-Balqa Applied University — English 102
 * Unit 1: Learning and Education
 * Section: Grammar (Authentic Exam Style)
 */
(function() {
  const unit1_grammar = [
  {
    "id": "u1_g_01",
    "unit": 1,
    "stream": "grammar",
    "topic": "Sentence Function",
    "promptEn": "I have a book. The function of this sentence is ---------------",
    "promptAr": "'I have a book.' وظيفة هذه الجملة واستخدامها يعبر عن ---------------",
    "choices": [
      {
        "id": "a",
        "textEn": "POSSESSION",
        "textAr": "الملكية"
      },
      {
        "id": "b",
        "textEn": "COMPLAINT",
        "textAr": "الشكوى"
      },
      {
        "id": "c",
        "textEn": "PERMISSION",
        "textAr": "طلب الإذن"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "The verb 'have' in 'I have a book' is a stative verb expressing POSSESSION.",
    "explanationAr": "الفعل 'have' هنا فعل حالة يعبر عن الملكية (Possession).",
    "lexiconTokens": {
      "possession": "ملكية",
      "function": "وظيفة الجملة"
    }
  },
  {
    "id": "u1_g_02",
    "unit": 1,
    "stream": "grammar",
    "topic": "Sentence Function",
    "promptEn": "You are always coming late! The function of this sentence is ---------------",
    "promptAr": "'!You are always coming late' وظيفة هذه الجملة تعبر عن ---------------",
    "choices": [
      {
        "id": "a",
        "textEn": "COMPLAINT / IRRITATION",
        "textAr": "الشكوى والتذمر والانزعاج"
      },
      {
        "id": "b",
        "textEn": "SCIENTIFIC FACT",
        "textAr": "حقيقة علمية"
      },
      {
        "id": "c",
        "textEn": "PERMISSION",
        "textAr": "إذن"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Present Continuous with 'always' expresses annoyance, irritation, or a COMPLAINT.",
    "explanationAr": "المضارع المستمر مع 'always' يعبر عن الشكوى والتذمر (Complaint).",
    "lexiconTokens": {
      "complaint": "شكوى",
      "irritation": "انزعاج"
    }
  },
  {
    "id": "u1_g_03",
    "unit": 1,
    "stream": "grammar",
    "topic": "Sentence Function",
    "promptEn": "Water boils at 100°C. The function of this sentence is ---------------",
    "promptAr": "'Water boils at 100°C.' وظيفة هذه الجملة واستخدامها هو ---------------",
    "choices": [
      {
        "id": "a",
        "textEn": "GENERAL SCIENTIFIC FACT",
        "textAr": "حقيقة علمية عامة وثابتة"
      },
      {
        "id": "b",
        "textEn": "TEMPORARY ACTION",
        "textAr": "حدث مؤقت"
      },
      {
        "id": "c",
        "textEn": "COMPLAINT",
        "textAr": "شكوى"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Present Simple expresses universal SCIENTIFIC FACTS and general truths.",
    "explanationAr": "المضارع البسيط يعبر عن الحقائق العلمية العامة (Scientific Fact).",
    "lexiconTokens": {
      "boils": "يغلي",
      "fact": "حقيقة"
    }
  },
  {
    "id": "u1_g_04",
    "unit": 1,
    "stream": "grammar",
    "topic": "Present Simple Subject-Verb",
    "promptEn": "An --------------- grows in cold climates.",
    "promptAr": "أكمل الفراغ: 'إن الـ --------------- تنمو في المناخات الباردة.'",
    "choices": [
      {
        "id": "a",
        "textEn": "orange tree",
        "textAr": "شجرة البرتقال (مفرد يناسب an و verb+s)"
      },
      {
        "id": "b",
        "textEn": "orange trees",
        "textAr": "أشجار البرتقال (جمع)"
      },
      {
        "id": "c",
        "textEn": "oranges",
        "textAr": "برتقال"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "'An' requires a singular noun with initial vowel ('orange tree') agreeing with singular verb 'grows'.",
    "explanationAr": "أداة التنكير 'An' مع الفعل 'grows' تقتضي فاعلاً مفرداً: 'orange tree'.",
    "lexiconTokens": {
      "orange tree": "شجرة برتقال",
      "grows": "تنمو"
    }
  },
  {
    "id": "u1_g_05",
    "unit": 1,
    "stream": "grammar",
    "topic": "Present Simple Plural",
    "promptEn": "Orange trees --------------- in warm climates.",
    "promptAr": "أشجار البرتقال --------------- في المناخات الدافئة.",
    "choices": [
      {
        "id": "a",
        "textEn": "grow",
        "textAr": "تنمو (مصدر مجرد لفاعل جمع)"
      },
      {
        "id": "b",
        "textEn": "grows",
        "textAr": "تنمو (للمفرد)"
      },
      {
        "id": "c",
        "textEn": "are growing",
        "textAr": "تنمو الآن"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Plural subject ('Orange trees') takes base verb 'grow' in Present Simple facts.",
    "explanationAr": "الفاعل جمع 'Orange trees' يأخذ الفعل المجرد 'grow'.",
    "lexiconTokens": {
      "grow": "تنمو"
    }
  },
  {
    "id": "u1_g_06",
    "unit": 1,
    "stream": "grammar",
    "topic": "Stative vs Dynamic",
    "promptEn": "She is --------------- about her future.",
    "promptAr": "هي --------------- في مستقبلها الآن (نشاط ذهني).",
    "choices": [
      {
        "id": "a",
        "textEn": "thinking",
        "textAr": "تفكر ذهنياً (نشاط مؤقت)"
      },
      {
        "id": "b",
        "textEn": "think",
        "textAr": "يفكر"
      },
      {
        "id": "c",
        "textEn": "thinked",
        "textAr": "صيغة غير صحيحة"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "When 'think' denotes the dynamic mental activity of reflecting/planning ('about'), it takes continuous form.",
    "explanationAr": "'thinking about' تعبر عن عملية تفكير ذهني مستمر الآن.",
    "lexiconTokens": {
      "thinking": "تفكير"
    }
  },
  {
    "id": "u1_g_07",
    "unit": 1,
    "stream": "grammar",
    "topic": "Stative vs Dynamic",
    "promptEn": "I --------------- that English is an important language.",
    "promptAr": "أنا --------------- أن اللغة الإنجليزية لغة مهمة (إبداء رأي).",
    "choices": [
      {
        "id": "a",
        "textEn": "think",
        "textAr": "أعتقد / أرى برأي (فعل حالة)"
      },
      {
        "id": "b",
        "textEn": "am thinking",
        "textAr": "أفكر"
      },
      {
        "id": "c",
        "textEn": "thinks",
        "textAr": "للمفرد الغائب"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "'Think' expressing an opinion is stative and cannot be continuous.",
    "explanationAr": "'think' بمعنى أعتقد تعبر عن الرأي ولا تصاغ في المستمر.",
    "lexiconTokens": {
      "think": "يعتقد"
    }
  },
  {
    "id": "u1_g_08",
    "unit": 1,
    "stream": "grammar",
    "topic": "Stative Verbs",
    "promptEn": "The soup --------------- delicious.",
    "promptAr": "الحساء --------------- شهياً (له مذاق).",
    "choices": [
      {
        "id": "a",
        "textEn": "tastes",
        "textAr": "مذاقه (فعل حاسة)"
      },
      {
        "id": "b",
        "textEn": "is tasting",
        "textAr": "يتذوق"
      },
      {
        "id": "c",
        "textEn": "taste",
        "textAr": "مذاق"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "'Taste' describing the characteristic of food is stative with '-s' for singular subject.",
    "explanationAr": "فعل الحواس 'taste' عند وصف الطعام يكون فعل حالة: 'tastes'.",
    "lexiconTokens": {
      "tastes": "مذاقه"
    }
  },
  {
    "id": "u1_g_09",
    "unit": 1,
    "stream": "grammar",
    "topic": "Dynamic Verbs",
    "promptEn": "The chef is --------------- the soup to see if it needs more salt.",
    "promptAr": "الشيف --------------- الحساء الآن ليرى إن كان يحتاج لمزيد من الملح.",
    "choices": [
      {
        "id": "a",
        "textEn": "tasting",
        "textAr": "يتذوق بالملعقة (حدث إرادي الآن)"
      },
      {
        "id": "b",
        "textEn": "tastes",
        "textAr": "له مذاق"
      },
      {
        "id": "c",
        "textEn": "taste",
        "textAr": "مذاق"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Action of tasting food is dynamic and takes Present Continuous.",
    "explanationAr": "تذوق الطعام كفعل إرادي يأخذ المضارع المستمر: 'is tasting'.",
    "lexiconTokens": {
      "tasting": "يتذوق"
    }
  },
  {
    "id": "u1_g_10",
    "unit": 1,
    "stream": "grammar",
    "topic": "Attention Markers",
    "promptEn": "Hey! We --------------- for the bus.",
    "promptAr": "!Hey نحن --------------- الحافلة الآن.",
    "choices": [
      {
        "id": "a",
        "textEn": "are waiting",
        "textAr": "ننتظر الآن (مضارع مستمر)"
      },
      {
        "id": "b",
        "textEn": "wait",
        "textAr": "ننتظر كعادة"
      },
      {
        "id": "c",
        "textEn": "were waiting",
        "textAr": "كنا ننتظر"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Attention call 'Hey!' signals an immediate action happening now (Present Continuous).",
    "explanationAr": "أسلوب التنبيه '!Hey' يدل على حدث يقع في لحظة الكلام (are waiting).",
    "lexiconTokens": {
      "waiting": "انتظار"
    }
  },
  {
    "id": "u1_g_11",
    "unit": 1,
    "stream": "grammar",
    "topic": "Attention Markers",
    "promptEn": "Look! The baby --------------- to walk.",
    "promptAr": "!Look انظر! الطفل --------------- المشي الآن.",
    "choices": [
      {
        "id": "a",
        "textEn": "is trying",
        "textAr": "يحاول الآن"
      },
      {
        "id": "b",
        "textEn": "tries",
        "textAr": "يحاول"
      },
      {
        "id": "c",
        "textEn": "tried",
        "textAr": "حاول"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "'Look!' indicates an ongoing action right now (is trying).",
    "explanationAr": "'!Look' إشارة للمضارع المستمر (is trying).",
    "lexiconTokens": {
      "trying": "يحاول"
    }
  },
  {
    "id": "u1_g_12",
    "unit": 1,
    "stream": "grammar",
    "topic": "Adverb Placement",
    "promptEn": "The correct sentence is ---------------",
    "promptAr": "الجملة الصحيحة نحوياً من حيث موقع الظرف هي ---------------",
    "choices": [
      {
        "id": "a",
        "textEn": "She sometimes goes to London.",
        "textAr": "تذهب أحياناً إلى لندن (موقع صحيح للظرف)"
      },
      {
        "id": "b",
        "textEn": "Sometimes she go to London.",
        "textAr": "خطأ: go بدون s للمفرد"
      },
      {
        "id": "c",
        "textEn": "She goes sometimes to London.",
        "textAr": "ترتيب غير سليم"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Frequency adverbs (sometimes, always, usually) precede main verbs: 'She sometimes goes'.",
    "explanationAr": "ظروف التكرار تأتي قبل الفعل الرئيسي وتتوافق مع الفاعل المفرد (sometimes goes).",
    "lexiconTokens": {
      "sometimes": "أحياناً",
      "goes": "تذهب"
    }
  },
  {
    "id": "u1_g_13",
    "unit": 1,
    "stream": "grammar",
    "topic": "Spelling Rules",
    "promptEn": "Which spelling is correct?",
    "promptAr": "أي كتابة إملائية هي الصحيحة؟",
    "choices": [
      {
        "id": "a",
        "textEn": "watches",
        "textAr": "watches (إضافة es بعد ch)"
      },
      {
        "id": "b",
        "textEn": "watchis",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "c",
        "textEn": "wachis",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Verbs ending in '-ch' add '-es' for 3rd person singular: 'watches'.",
    "explanationAr": "الأفعال المنتهية بـ ch يضاف لها es: 'watches'.",
    "lexiconTokens": {
      "watches": "يشاهد"
    }
  },
  {
    "id": "u1_g_14",
    "unit": 1,
    "stream": "grammar",
    "topic": "Spelling Rules",
    "promptEn": "Which spelling is correct for the Present Simple of 'study'?",
    "promptAr": "أي كتابة إملائية هي الصحيحة للمفرد الغائب من الفعل 'study'؟",
    "choices": [
      {
        "id": "a",
        "textEn": "studies",
        "textAr": "studies (قلب y إلى i وإضافة es)"
      },
      {
        "id": "b",
        "textEn": "studys",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "c",
        "textEn": "studyed",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Consonant + 'y' changes to '-ies' (studies).",
    "explanationAr": "حرف ساكن + y يُقلب إلى ies (studies).",
    "lexiconTokens": {
      "studies": "يدرس"
    }
  },
  {
    "id": "u1_g_15",
    "unit": 1,
    "stream": "grammar",
    "topic": "Spelling Rules",
    "promptEn": "Which spelling is correct for the Present Simple of 'buy'?",
    "promptAr": "أي كتابة إملائية هي الصحيحة للمفرد الغائب من الفعل 'buy'؟",
    "choices": [
      {
        "id": "a",
        "textEn": "buys",
        "textAr": "buys (حرف علة + y يضاف s فقط)"
      },
      {
        "id": "b",
        "textEn": "buies",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "c",
        "textEn": "buyes",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Vowel + 'y' (buy) just adds '-s' (buys).",
    "explanationAr": "حرف علة + y تضاف له s فقط دون تغيير (buys).",
    "lexiconTokens": {
      "buys": "يشتري"
    }
  },
  {
    "id": "u1_g_16",
    "unit": 1,
    "stream": "grammar",
    "topic": "Spelling Rules",
    "promptEn": "Which spelling is correct for the continuous form of 'swim'?",
    "promptAr": "أي كتابة إملائية هي الصحيحة لصيغة الاستمرار من الفعل 'swim'؟",
    "choices": [
      {
        "id": "a",
        "textEn": "swimming",
        "textAr": "swimming (مضاعفة m)"
      },
      {
        "id": "b",
        "textEn": "swiming",
        "textAr": "كتابة خاطئة بـ m واحدة"
      },
      {
        "id": "c",
        "textEn": "swimmed",
        "textAr": "كتابة خاطئة"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "One-syllable CVC verbs double the final consonant before '-ing': 'swimming'.",
    "explanationAr": "الأفعال ذات المقطع الواحد المنتهية بساكن قبله متحرك تضاعف الحرف الأخير (swimming).",
    "lexiconTokens": {
      "swimming": "سباحة"
    }
  },
  {
    "id": "u1_g_17",
    "unit": 1,
    "stream": "grammar",
    "topic": "Verb To Be",
    "promptEn": "The quiz --------------- easy.",
    "promptAr": "الاختبار --------------- سهلاً.",
    "choices": [
      {
        "id": "a",
        "textEn": "is",
        "textAr": "يكون (للمفرد في المضارع)"
      },
      {
        "id": "b",
        "textEn": "are",
        "textAr": "للجمع"
      },
      {
        "id": "c",
        "textEn": "were",
        "textAr": "كان للجمع"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Singular subject 'The quiz' takes 'is'.",
    "explanationAr": "الفاعل المفرد 'The quiz' يأخذ 'is'.",
    "lexiconTokens": {
      "easy": "سهل"
    }
  },
  {
    "id": "u1_g_18",
    "unit": 1,
    "stream": "grammar",
    "topic": "Questions with Do/Does",
    "promptEn": "--------------- she like studying history?",
    "promptAr": "--------------- هي تحب دراسة التاريخ؟",
    "choices": [
      {
        "id": "a",
        "textEn": "Does",
        "textAr": "Does (للسؤال مع الفاعل المفرد الغائب she)"
      },
      {
        "id": "b",
        "textEn": "Do",
        "textAr": "Do (للجمع)"
      },
      {
        "id": "c",
        "textEn": "Is",
        "textAr": "Is"
      },
      {
        "id": "d",
        "textEn": "none",
        "textAr": "لا شيء مما ذكر"
      }
    ],
    "correctChoiceId": "a",
    "explanationEn": "Questions with 3rd person singular 'she' start with 'Does'.",
    "explanationAr": "السؤال في المضارع البسيط مع 'she' يبدأ بـ 'Does'.",
    "lexiconTokens": {
      "history": "تاريخ"
    }
  }
];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.grammar = window.COURSE_DATA.grammar || {};
    window.COURSE_DATA.grammar.unit1 = unit1_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit1_grammar };
  }
})();
