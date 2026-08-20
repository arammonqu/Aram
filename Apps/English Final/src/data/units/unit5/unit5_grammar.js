/**
 * Al-Balqa Applied University — English 102
 * Unit 5: Gossip and the Media
 * Section: Grammar (Batch 22 — Authentic BAU Exam Style)
 */
(function() {
  const unit5_grammar = [
    // =========================================================================
    // Focus 1: Direct vs Indirect Speech & Say vs Tell Rules (p. 10–12)
    // =========================================================================
    {
      "id": "u5_g_01",
      "unit": 5,
      "stream": "grammar",
      "topic": "Say vs Tell Syntax",
      "promptEn": "Which verb specifically requires a personal object without 'to' (e.g., 'He --------------- us the truth')?",
      "promptAr": "أي فعل يتطلب مفعولاً به مباشراً يدل على الشخص المخاطب دون حرف الجر 'to'؟",
      "choices": [
        {
          "id": "a",
          "textEn": "told",
          "textAr": "told (أخبر - يتطلب مفعولاً مباشراً)"
        },
        {
          "id": "b",
          "textEn": "said",
          "textAr": "said (قال - لا يأخذ مفعولاً مباشراً)"
        },
        {
          "id": "c",
          "textEn": "explained",
          "textAr": "explained (شرح)"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Tell' requires a direct personal object (tell me, he told us, I told Tom), whereas 'say' does not.",
      "explanationAr": "الفعل 'tell' ومصرفه 'told' يتطلب مفعولاً به صريحاً للشخص المخاطب مباشرةً (told us).",
      "lexiconTokens": {
        "told": "أخبر",
        "said": "قال",
        "object": "مفعول به"
      }
    },
    {
      "id": "u5_g_02",
      "unit": 5,
      "stream": "grammar",
      "topic": "Say vs Tell Syntax",
      "promptEn": "Select the grammatically correct sentence:",
      "promptAr": "اختر الجملة الصحيحة نحوياً من بين الخيارات التالية:",
      "choices": [
        {
          "id": "a",
          "textEn": "Sally told me that I should keep it a secret.",
          "textAr": "جملة صحيحة: told متبوعة بالمفعول me"
        },
        {
          "id": "b",
          "textEn": "Sally told that I should keep it a secret.",
          "textAr": "خطأ: told بدون مفعول شخصي"
        },
        {
          "id": "c",
          "textEn": "Sally said me that I should keep it a secret.",
          "textAr": "خطأ: said لا تأخذ مفعولاً مباشراً بدون to"
        },
        {
          "id": "d",
          "textEn": "Sally told to me that I should keep it a secret.",
          "textAr": "خطأ: told لا تأخذ to"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Tell' must be followed by the person addressed (told me), while 'said' cannot take an indirect object without 'to'.",
      "explanationAr": "الصيغة السليمة هي 'told me' لأن فعل tell يحتاج مفعولاً به مباشراً.",
      "lexiconTokens": {
        "secret": "سر",
        "keep": "يكتم / يحفظ"
      }
    },

    // =========================================================================
    // Focus 2: Time and Place Adverbial Transformations (p. 11)
    // =========================================================================
    {
      "id": "u5_g_03",
      "unit": 5,
      "stream": "grammar",
      "topic": "Adverb Shifts",
      "promptEn": "In reported speech, the time expression 'tomorrow' changes to ---------------",
      "promptAr": "عند التحويل إلى الكلام المنقول، يتحول الظرف 'tomorrow' إلى ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "the next day / the following day",
          "textAr": "اليوم التالي / the following day"
        },
        {
          "id": "b",
          "textEn": "the day before",
          "textAr": "اليوم السابق"
        },
        {
          "id": "c",
          "textEn": "that day",
          "textAr": "ذلك اليوم"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Tomorrow' shifts to 'the next day' or 'the following day' in reported speech.",
      "explanationAr": "تتحول كلمة 'tomorrow' في الكلام المنقول إلى 'the next day' أو 'the following day'.",
      "lexiconTokens": {
        "tomorrow": "غداً",
        "following": "التالي"
      }
    },
    {
      "id": "u5_g_04",
      "unit": 5,
      "stream": "grammar",
      "topic": "Adverb Shifts",
      "promptEn": "In reported speech, 'yesterday' changes into ---------------",
      "promptAr": "عند التحويل إلى الكلام المنقول، تتحول كلمة 'yesterday' إلى ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "the day before / the previous day",
          "textAr": "اليوم السابق / the day before"
        },
        {
          "id": "b",
          "textEn": "the next day",
          "textAr": "اليوم التالي"
        },
        {
          "id": "c",
          "textEn": "in two days' time",
          "textAr": "خلال يومين"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Yesterday' shifts to 'the day before' or 'the previous day'.",
      "explanationAr": "تتحول كلمة 'yesterday' إلى 'the day before' أو 'the previous day'.",
      "lexiconTokens": {
        "yesterday": "أمس",
        "previous": "السابق"
      }
    },
    {
      "id": "u5_g_05",
      "unit": 5,
      "stream": "grammar",
      "topic": "Adverb Shifts",
      "promptEn": "In reported speech, 'the day after tomorrow' changes into ---------------",
      "promptAr": "في الكلام المنقول، تتحول العبارة الزمنية 'the day after tomorrow' (بعد الغد) إلى ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "in two days' time",
          "textAr": "في غضون يومين (in two days' time)"
        },
        {
          "id": "b",
          "textEn": "two days before",
          "textAr": "قبل يومين"
        },
        {
          "id": "c",
          "textEn": "the previous week",
          "textAr": "الأسبوع السابق"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "According to the unit's table, 'the day after tomorrow' changes to 'in two days’ time'.",
      "explanationAr": "تتحول 'the day after tomorrow' وفق جدول الوحدة إلى 'in two days' time'.",
      "lexiconTokens": {
        "tomorrow": "غداً",
        "time": "وقت"
      }
    },
    {
      "id": "u5_g_06",
      "unit": 5,
      "stream": "grammar",
      "topic": "Adverb Shifts",
      "promptEn": "In reported speech, 'a year ago' shifts into ---------------",
      "promptAr": "في الكلام غير المباشر، تتحول عبارة 'a year ago' (منذ سنة) إلى ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "a year before / the previous year",
          "textAr": "قبل سنة / the previous year"
        },
        {
          "id": "b",
          "textEn": "the following year",
          "textAr": "العام القادم"
        },
        {
          "id": "c",
          "textEn": "that year",
          "textAr": "ذلك العام"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'A year ago' changes to 'a year before' or 'the previous year'.",
      "explanationAr": "'A year ago' تتحول إلى 'a year before' أو 'the previous year'.",
      "lexiconTokens": {
        "year": "سنة",
        "ago": "مضت"
      }
    },

    // =========================================================================
    // Focus 3: Activity 1 — Direct to Indirect Transformations (p. 12)
    // =========================================================================
    {
      "id": "u5_g_07",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: She said, 'I will give you a call tomorrow.' \nIndirect: She said that she --------------- a call the next day.",
      "promptAr": "تحويل الجملة إلى كلام غير مباشر: 'قالت: سأتصل بك غداً':",
      "choices": [
        {
          "id": "a",
          "textEn": "would give me",
          "textAr": "would give me (تحويل will إلى would)"
        },
        {
          "id": "b",
          "textEn": "will give me",
          "textAr": "will give me (بدون تغيير)"
        },
        {
          "id": "c",
          "textEn": "gives me",
          "textAr": "gives me"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Modal 'will' backshifts to 'would' and 'tomorrow' becomes 'the next day'.",
      "explanationAr": "يتحول الفعل المساعد 'will' إلى 'would' مع تحويل ظرف الزمان إلى the next day.",
      "lexiconTokens": {
        "call": "مكالمة",
        "give": "يعطي"
      }
    },
    {
      "id": "u5_g_08",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: Fred said, 'I am not coming to the meeting.' \nIndirect: Fred said that he --------------- to the meeting.",
      "promptAr": "تحويل الجملة إلى كلام غير مباشر: 'قال فريد: أنا لن أحضر الاجتماع':",
      "choices": [
        {
          "id": "a",
          "textEn": "was not coming",
          "textAr": "was not coming (تحويل المضارع المستمر إلى ماضي مستمر)"
        },
        {
          "id": "b",
          "textEn": "is not coming",
          "textAr": "is not coming"
        },
        {
          "id": "c",
          "textEn": "had not come",
          "textAr": "had not come"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Continuous ('am not coming') backshifts to Past Continuous ('was not coming').",
      "explanationAr": "يتحول المضارع المستمر 'am not coming' إلى ماضي مستمر 'was not coming'.",
      "lexiconTokens": {
        "meeting": "اجتماع",
        "coming": "قادم"
      }
    },
    {
      "id": "u5_g_09",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: Jim said, 'I visited France last year.' \nIndirect: Jim said that he --------------- France the previous year.",
      "promptAr": "تحويل الجملة إلى كلام غير مباشر: 'قال جيم: زرت فرنسا العام الماضي':",
      "choices": [
        {
          "id": "a",
          "textEn": "had visited",
          "textAr": "had visited (تحويل الماضي البسيط إلى ماضي تام)"
        },
        {
          "id": "b",
          "textEn": "visited",
          "textAr": "visited"
        },
        {
          "id": "c",
          "textEn": "has visited",
          "textAr": "has visited"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Simple ('visited') shifts back to Past Perfect ('had visited').",
      "explanationAr": "الماضي البسيط 'visited' يتحول إلى ماضي تام 'had visited'.",
      "lexiconTokens": {
        "visited": "زار",
        "previous": "سابق"
      }
    },
    {
      "id": "u5_g_10",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: John said, 'I have given up my job.' \nIndirect: John said that he --------------- up his job.",
      "promptAr": "تحويل الجملة إلى كلام غير مباشر: 'قال جون: لقد تركت وظيفتي':",
      "choices": [
        {
          "id": "a",
          "textEn": "had given",
          "textAr": "had given (تحويل المضارع التام إلى ماضي تام)"
        },
        {
          "id": "b",
          "textEn": "has given",
          "textAr": "has given"
        },
        {
          "id": "c",
          "textEn": "gave",
          "textAr": "gave"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Perfect ('have given') changes to Past Perfect ('had given').",
      "explanationAr": "المضارع التام 'have given' يتحول إلى ماضي تام 'had given'.",
      "lexiconTokens": {
        "given up": "استسلم / ترك",
        "job": "وظيفة"
      }
    },
    {
      "id": "u5_g_11",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: She said, 'Margaret has had a baby.' \nIndirect: She said that Margaret --------------- a baby.",
      "promptAr": "تحويل الجملة: 'قالت: أنجبت مارغريت طفلاً':",
      "choices": [
        {
          "id": "a",
          "textEn": "had had",
          "textAr": "had had (ماضي تام من has had)"
        },
        {
          "id": "b",
          "textEn": "has had",
          "textAr": "has had"
        },
        {
          "id": "c",
          "textEn": "had",
          "textAr": "had"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Perfect ('has had') shifts to Past Perfect ('had had').",
      "explanationAr": "'has had' (مضارع تام) تصبح في الماضي التام 'had had'.",
      "lexiconTokens": {
        "baby": "رضيع / طفل"
      }
    },
    {
      "id": "u5_g_12",
      "unit": 5,
      "stream": "grammar",
      "topic": "Direct to Indirect",
      "promptEn": "Direct: He said, 'I don't know what Sally is doing.' \nIndirect: He said that he --------------- what Sally was doing.",
      "promptAr": "تحويل الجملة: 'قال: أنا لا أعرف ماذا تفعل سالي':",
      "choices": [
        {
          "id": "a",
          "textEn": "didn't know",
          "textAr": "didn't know (تحويل don't know إلى ماضي بسيط)"
        },
        {
          "id": "b",
          "textEn": "doesn't know",
          "textAr": "doesn't know"
        },
        {
          "id": "c",
          "textEn": "hadn't known",
          "textAr": "hadn't known"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Simple negative ('don't know') shifts to Past Simple negative ('didn't know').",
      "explanationAr": "'don't know' تتحول إلى 'didn't know' في الماضي البسيط.",
      "lexiconTokens": {
        "know": "يعرف",
        "doing": "يفعل"
      }
    },

    // =========================================================================
    // Focus 4: Activity 2 — Indirect to Direct Transformations (p. 13)
    // =========================================================================
    {
      "id": "u5_g_13",
      "unit": 5,
      "stream": "grammar",
      "topic": "Indirect to Direct",
      "promptEn": "Indirect: Jim said that he couldn’t afford to buy a new car. \nDirect: Jim said, '---------------'",
      "promptAr": "إرجاع الجملة للكلام المباشر: 'قال جيم إنه لا يستطيع تحمل تكلفة سيارة جديدة':",
      "choices": [
        {
          "id": "a",
          "textEn": "I can't afford to buy a new car.",
          "textAr": "'I can't afford to buy a new car.'"
        },
        {
          "id": "b",
          "textEn": "He couldn't afford to buy a new car.",
          "textAr": "ضمير وزمن غير مباشر"
        },
        {
          "id": "c",
          "textEn": "I won't afford to buy a new car.",
          "textAr": "معنى مختلف"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "In direct speech, 'couldn't' returns to 'can't' and 3rd person pronoun 'he' returns to 1st person 'I'.",
      "explanationAr": "في الكلام المباشر يعود الضمير إلى 'I' والفعل إلى 'can't'.",
      "lexiconTokens": {
        "afford": "يتحمل تكلفة",
        "car": "سيارة"
      }
    },
    {
      "id": "u5_g_14",
      "unit": 5,
      "stream": "grammar",
      "topic": "Indirect to Direct",
      "promptEn": "Indirect: Laura said that her trip to New York had been fantastic. \nDirect: Laura said, '---------------'",
      "promptAr": "إرجاع الجملة إلى الكلام المباشر: 'قالت لورا إن رحلتها لنيويورك كانت رائعة':",
      "choices": [
        {
          "id": "a",
          "textEn": "My trip to New York was fantastic.",
          "textAr": "'My trip to New York was fantastic.'"
        },
        {
          "id": "b",
          "textEn": "Her trip to New York had been fantastic.",
          "textAr": "كلام غير مباشر"
        },
        {
          "id": "c",
          "textEn": "My trip to New York is being fantastic.",
          "textAr": "صيغة خاطئة"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'had been' in reported speech reverts to 'was' in direct speech, and 'her' becomes 'my'.",
      "explanationAr": "الماضي التام يعود لأصله الماضي البسيط 'was' وصفة الملكية تعود إلى 'my'.",
      "lexiconTokens": {
        "trip": "رحلة",
        "fantastic": "رائع"
      }
    },
    {
      "id": "u5_g_15",
      "unit": 5,
      "stream": "grammar",
      "topic": "Indirect to Direct",
      "promptEn": "Indirect: Charlie said that he was living in London then. \nDirect: Charlie said, '---------------'",
      "promptAr": "إرجاع الجملة للكلام المباشر: 'قال تشارلي إنه كان يعيش في لندن حينها':",
      "choices": [
        {
          "id": "a",
          "textEn": "I am living in London now.",
          "textAr": "'I am living in London now.'"
        },
        {
          "id": "b",
          "textEn": "He was living in London then.",
          "textAr": "صيغة غير مباشرة"
        },
        {
          "id": "c",
          "textEn": "I have lived in London then.",
          "textAr": "زمن غير متطابق"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past continuous 'was living' reverts to 'am living', and the adverb 'then' reverts to 'now'.",
      "explanationAr": "'was living ... then' تعود في المباشر إلى المضارع المستمر 'am living ... now'.",
      "lexiconTokens": {
        "living": "يعيش",
        "now": "الآن"
      }
    },
    {
      "id": "u5_g_16",
      "unit": 5,
      "stream": "grammar",
      "topic": "Indirect to Direct",
      "promptEn": "Indirect: Kelly said that her assignment needed editing. \nDirect: Kelly said, '---------------'",
      "promptAr": "إرجاع الجملة للكلام المباشر: 'قالت كيلي إن واجبها بحاجة إلى تنقيح':",
      "choices": [
        {
          "id": "a",
          "textEn": "My assignment needs editing.",
          "textAr": "'My assignment needs editing.'"
        },
        {
          "id": "b",
          "textEn": "Her assignment needed editing.",
          "textAr": "غير مباشر"
        },
        {
          "id": "c",
          "textEn": "My assignment is needing editing.",
          "textAr": "need فعل حالة لا يأخذ ing"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past 'needed' returns to Present Simple 'needs', and 'her' reverts to 'my'.",
      "explanationAr": "'needed' في المباشر تكون في المضارع البسيط 'needs' مع ضمير 'my'.",
      "lexiconTokens": {
        "assignment": "واجب / مهمة",
        "editing": "تنقيح وتعديل"
      }
    },

    // =========================================================================
    // Focus 5: Activity 3 — Identifying Direct vs Indirect Structures (p. 13–14)
    // =========================================================================
    {
      "id": "u5_g_17",
      "unit": 5,
      "stream": "grammar",
      "topic": "Sentence Identification",
      "promptEn": "Sentence: 'Nadia said that she tried to imagine how things used to be.' This sentence is ---------------",
      "promptAr": "الجملة: 'Nadia said that she tried to imagine how things used to be' تصنف كـ ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "INDIRECT (REPORTED) SPEECH",
          "textAr": "كلام منقول / غير مباشر"
        },
        {
          "id": "b",
          "textEn": "DIRECT SPEECH",
          "textAr": "كلام مباشر"
        },
        {
          "id": "c",
          "textEn": "PASSIVE VOICE",
          "textAr": "مبني للمجهول"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The sentence uses reported clause structure ('said that she...') without quotation marks, indicating Indirect Speech.",
      "explanationAr": "الجملة منقولة بدون علامات اقتباس وباستخدام that، فهي Indirect Speech.",
      "lexiconTokens": {
        "indirect": "غير مباشر",
        "speech": "كلام"
      }
    },
    {
      "id": "u5_g_18",
      "unit": 5,
      "stream": "grammar",
      "topic": "Sentence Identification",
      "promptEn": "Sentence: Nadia said, 'England is a wonderful district.' This sentence is ---------------",
      "promptAr": "الجملة: 'Nadia said, \"England is a wonderful district.\"' تصنف كـ ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "DIRECT SPEECH",
          "textAr": "كلام مباشر (Direct Speech)"
        },
        {
          "id": "b",
          "textEn": "INDIRECT SPEECH",
          "textAr": "كلام منقول"
        },
        {
          "id": "c",
          "textEn": "SECOND CONDITIONAL",
          "textAr": "حالة شرطية ثانية"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The exact words are enclosed in quotation marks following a comma, which defines Direct Speech.",
      "explanationAr": "الجملة تحتوي على كلام المتحدث الأصلي بين علامتي اقتباس، فهي Direct Speech.",
      "lexiconTokens": {
        "direct": "مباشر"
      }
    },
    {
      "id": "u5_g_19",
      "unit": 5,
      "stream": "grammar",
      "topic": "Sentence Identification",
      "promptEn": "Sentence: 'Please don't forget to mail these parcels tomorrow,' the manager said. This sentence is ---------------",
      "promptAr": "الجملة: '\"Please don't forget to mail these parcels tomorrow,\" the manager said.' هي ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "DIRECT SPEECH",
          "textAr": "كلام مباشر"
        },
        {
          "id": "b",
          "textEn": "INDIRECT SPEECH",
          "textAr": "كلام غير مباشر"
        },
        {
          "id": "c",
          "textEn": "PAST PERFECT CONTINUOUS",
          "textAr": "ماضي تام مستمر"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Enclosed within quotation marks with the reporting clause at the end, this is Direct Speech.",
      "explanationAr": "الكلام موضوع بين علامات تنصيص فهو كلام مباشر (Direct Speech).",
      "lexiconTokens": {
        "mail": "يرسل بالبريد",
        "parcels": "طرود بريدية"
      }
    },
    {
      "id": "u5_g_20",
      "unit": 5,
      "stream": "grammar",
      "topic": "Sentence Identification",
      "promptEn": "Sentence: 'Halle Berry said that she didn’t want to revisit that part of her life.' This sentence is ---------------",
      "promptAr": "الجملة: 'Halle Berry said that she didn’t want to revisit that part of her life.' هي ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "INDIRECT (REPORTED) SPEECH",
          "textAr": "كلام منقول / غير مباشر"
        },
        {
          "id": "b",
          "textEn": "DIRECT SPEECH",
          "textAr": "كلام مباشر"
        },
        {
          "id": "c",
          "textEn": "IMPERATIVE COMMAND",
          "textAr": "أمر"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Reported speech conveying the meaning without quotation marks: Indirect Speech.",
      "explanationAr": "الجملة تعبر عن مضمون الكلام بدون تنصيص، فهي كلام غير مباشر (Indirect Speech).",
      "lexiconTokens": {
        "revisit": "يعاود الحديث عن / يزور"
      }
    },
    {
      "id": "u5_g_21",
      "unit": 5,
      "stream": "grammar",
      "topic": "Sentence Identification",
      "promptEn": "Sentence: The reporter said, 'The website will not be banned.' This sentence is ---------------",
      "promptAr": "الجملة: 'The reporter said, \"The website will not be banned.\"' هي ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "DIRECT SPEECH",
          "textAr": "كلام مباشر"
        },
        {
          "id": "b",
          "textEn": "INDIRECT SPEECH",
          "textAr": "كلام منقول"
        },
        {
          "id": "c",
          "textEn": "THIRD CONDITIONAL",
          "textAr": "حالة شرطية ثالثة"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Quoted exact words of the reporter make this Direct Speech.",
      "explanationAr": "نقل كلمات المراسل نصياً بين علامتي اقتباس يمثل كلاماً مباشراً (Direct Speech).",
      "lexiconTokens": {
        "reporter": "مراسل صحفي",
        "banned": "محظور"
      }
    },
    {
      "id": "u5_g_22",
      "unit": 5,
      "stream": "grammar",
      "topic": "Speaker Reporting Own Words",
      "promptEn": "When reporting our own words ('I said, I like my new house'), the pronoun 'I' ---------------",
      "promptAr": "عندما ينقل المتحدث كلامه الخاص ('I said, I like my new house')، فإن الضمير 'I' ---------------",
      "choices": [
        {
          "id": "a",
          "textEn": "remains 'I' without changing to 'he' or 'she'",
          "textAr": "يبقى 'I' كما هو دون تحويله إلى he أو she"
        },
        {
          "id": "b",
          "textEn": "must always change to 'he'",
          "textAr": "يتحول دائماً إلى he"
        },
        {
          "id": "c",
          "textEn": "must change to 'they'",
          "textAr": "يتحول إلى they"
        },
        {
          "id": "d",
          "textEn": "none",
          "textAr": "لا شيء مما ذكر"
        }
      ],
      "correctChoiceId": "a",
      "explanationEn": "As noted on page 11, pronouns do not shift to 3rd person when the speaker is reporting their own words.",
      "explanationAr": "إذا كان المتحدث ينقل كلام نفسه (I said...)، يبقى الضمير 'I' دون تغيير للغائب.",
      "lexiconTokens": {
        "speaker": "المتحدث",
        "pronoun": "ضمير"
      }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.grammar = window.COURSE_DATA.grammar || {};
    window.COURSE_DATA.grammar.unit5 = unit5_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit5_grammar };
  }
})();
