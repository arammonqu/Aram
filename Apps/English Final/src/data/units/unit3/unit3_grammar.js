/**
 * Al-Balqa Applied University — English 102
 * Unit 3: Life at Work
 * Section: Grammar (Authentic Exam Style — Batch 12)
 */
(function() {
  const unit3_grammar = [
    // =========================================================================
    // Activity 1 & 2: Textbook Exercises (Student File p. 14)
    // =========================================================================
    {
      "id": "u3_g_01",
      "unit": 3,
      "stream": "grammar",
      "topic": "Past Perfect Sequencing",
      "promptEn": "Tom --------------- his presentation before he went to the office.",
      "promptAr": "توم --------------- عرضه التقديمي قبل أن يذهب إلى المكتب.",
      "choices": [
        { "id": "a", "textEn": "had prepared", "textAr": "كان قد أعد (ماضي تام - حدث أول)" },
        { "id": "b", "textEn": "prepared", "textAr": "أعد (ماضي بسيط)" },
        { "id": "c", "textEn": "has prepared", "textAr": "أعد للتو (مضارع تام)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "We use the Past Perfect ('had prepared') for the earlier event that happened before another past action ('went').",
      "explanationAr": "نستخدم الماضي التام 'had prepared' للتعبير عن الحدث الذي اكتمل أولاً قبل حدث الذهاب في الماضي.",
      "lexiconTokens": {
        "presentation": "عرض تقديمي",
        "before": "قبل",
        "office": "مكتب"
      }
    },
    {
      "id": "u3_g_02",
      "unit": 3,
      "stream": "grammar",
      "topic": "Past Perfect with After",
      "promptEn": "She --------------- lunch after she --------------- the house.",
      "promptAr": "هي --------------- طعام الغداء بعد أن --------------- المنزل.",
      "choices": [
        { "id": "a", "textEn": "prepared / had cleaned", "textAr": "أعدت (ماضي بسيط) / كانت قد نظفت (ماضي تام)" },
        { "id": "b", "textEn": "have prepared / had cleaned", "textAr": "مضارع تام / ماضي تام (غير متطابق)" },
        { "id": "c", "textEn": "prepares / had cleaned", "textAr": "مضارع بسيط / ماضي تام (خاطئ)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "After 'after', the earlier action takes the Past Perfect ('had cleaned'), while the main clause takes Simple Past ('prepared').",
      "explanationAr": "بعد كلمة 'after' يأتي الحدث الأسبق في زمن الماضي التام (had cleaned) ويليه الماضي البسيط (prepared).",
      "lexiconTokens": {
        "prepared": "أعدت",
        "cleaned": "نظفت",
        "lunch": "غداء"
      }
    },
    {
      "id": "u3_g_03",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect with Already",
      "promptEn": "She --------------- already --------------- the assignment.",
      "promptAr": "هي --------------- بالفعل --------------- الواجب المطلوب.",
      "choices": [
        { "id": "a", "textEn": "has / submitted", "textAr": "has + V3 (مضارع تام صحيح مع الفاعل المفرد she)" },
        { "id": "b", "textEn": "has / submit", "textAr": "خطأ: الفعل مجرد بعد has" },
        { "id": "c", "textEn": "have / submitted", "textAr": "خطأ: have لا تناسب الفاعل المفرد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'She' requires auxiliary 'has' + past participle 'submitted' with the adverb 'already'.",
      "explanationAr": "الفاعل المفرد 'She' يأخذ 'has' متبوعاً بالتصريف الثالث 'submitted' مع الظرف 'already'.",
      "lexiconTokens": {
        "already": "بالفعل",
        "submitted": "سلم / قدم",
        "assignment": "واجب / مهمة"
      }
    },
    {
      "id": "u3_g_04",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect Questions",
      "promptEn": "--------------- they ever --------------- Japan?",
      "promptAr": "هل سبق لهم أن --------------- اليابان؟",
      "choices": [
        { "id": "a", "textEn": "Have / visited", "textAr": "Have + V3 (صيغة سؤال صحيحة للجمع في المضارع التام)" },
        { "id": "b", "textEn": "Has / visited", "textAr": "خطأ: Has لا تناسب they" },
        { "id": "c", "textEn": "Had / been visiting", "textAr": "ماضي تام مستمر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Questions with subject 'they' and 'ever' use 'Have + Subject + Past Participle' ('Have they ever visited').",
      "explanationAr": "السؤال عن التجارب الحياتية مع 'they' و'ever' يُصاغ بـ 'Have they visited'.",
      "lexiconTokens": {
        "ever": "في أي وقت مضى",
        "visited": "زار"
      }
    },
    {
      "id": "u3_g_05",
      "unit": 3,
      "stream": "grammar",
      "topic": "Past Perfect Sequences",
      "promptEn": "She --------------- her resignation before her boss fired her.",
      "promptAr": "هي --------------- استقالتها قبل أن يقيلها مديرها.",
      "choices": [
        { "id": "a", "textEn": "had written", "textAr": "كانت قد كتبت (ماضي تام حدث قبل الإقالة)" },
        { "id": "b", "textEn": "had been writing", "textAr": "كانت تكتب (مستمر)" },
        { "id": "c", "textEn": "has written", "textAr": "كتبت (مضارع تام)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Writing the resignation happened before the boss fired her, requiring Past Perfect ('had written').",
      "explanationAr": "كتابة الاستقالة تمت قبل قرار الإقالة، لذا تتبع زمن الماضي التام 'had written'.",
      "lexiconTokens": {
        "resignation": "استقالة",
        "fired": "أقال / طرد"
      }
    },
    {
      "id": "u3_g_06",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect Simple vs Continuous",
      "promptEn": "He --------------- three letters so far this morning.",
      "promptAr": "هو --------------- ثلاث رسائل حتى الآن هذا الصباح.",
      "choices": [
        { "id": "a", "textEn": "has written", "textAr": "كتب (مضارع تام بسيط لتعداد مرات الإنجاز)" },
        { "id": "b", "textEn": "has been writing", "textAr": "مضارع تام مستمر (لا يقترن بعدد منجز)" },
        { "id": "c", "textEn": "wrote", "textAr": "كتب (ماضي بسيط)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "When stating the number of completed items ('three letters') with 'so far', use Present Perfect Simple ('has written').",
      "explanationAr": "عند ذكر عدد الأشياء المنجزة (three letters) مع 'so far' نستخدم المضارع التام البسيط 'has written'.",
      "lexiconTokens": {
        "letters": "رسائل",
        "so far": "حتى الآن"
      }
    },
    {
      "id": "u3_g_07",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect with Recently",
      "promptEn": "My partner --------------- his assignment recently.",
      "promptAr": "شريكي في المشروع --------------- واجبه مؤخراً.",
      "choices": [
        { "id": "a", "textEn": "has finished", "textAr": "أنهى (مضارع تام مع recently)" },
        { "id": "b", "textEn": "has been finishing", "textAr": "مضارع تام مستمر (فعل لحظي لا يستمر)" },
        { "id": "c", "textEn": "finished", "textAr": "أنهى (ماضي بسيط)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Recently' with a completed single achievement uses Present Perfect ('has finished').",
      "explanationAr": "'Recently' مع اكتمال الفعل تأخذ المضارع التام 'has finished'.",
      "lexiconTokens": {
        "partner": "شريك",
        "recently": "مؤخراً / حديثاً"
      }
    },
    {
      "id": "u3_g_08",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect Duration",
      "promptEn": "My neighbors --------------- in the same apartment for five years.",
      "promptAr": "جيراني --------------- في الشقة نفسها منذ خمس سنوات (وما زالوا فيها).",
      "choices": [
        { "id": "a", "textEn": "have stayed", "textAr": "أقاموا وما زالوا (مضارع تام مع for)" },
        { "id": "b", "textEn": "stayed", "textAr": "أقاموا وانتهى الأمر" },
        { "id": "c", "textEn": "stay", "textAr": "يقيمون (عادة)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "For an ongoing state extending over a duration up to the present ('for five years'), use 'have stayed'.",
      "explanationAr": "الحدث المستمر من الماضي حتى الحاضر مع 'for five years' يأخذ المضارع التام 'have stayed'.",
      "lexiconTokens": {
        "neighbors": "جيران",
        "apartment": "شقة"
      }
    },
    {
      "id": "u3_g_09",
      "unit": 3,
      "stream": "grammar",
      "topic": "Past Perfect Sequencing",
      "promptEn": "I --------------- the text carefully before I --------------- the questions.",
      "promptAr": "أنا --------------- النص بعناية قبل أن --------------- الأسئلة.",
      "choices": [
        { "id": "a", "textEn": "had read / answered", "textAr": "كنت قد قرأت (ماضي تام) / أجبت (ماضي بسيط)" },
        { "id": "b", "textEn": "have read / answered", "textAr": "مضارع تام / ماضي بسيط" },
        { "id": "c", "textEn": "has read / have answered", "textAr": "خلط غير صحيح للأزمنة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Reading the text occurred prior to answering questions: 'had read' (earlier) before 'answered' (subsequent).",
      "explanationAr": "قراءة النص سبقت الإجابة عن الأسئلة، فالحدث الأول ماضٍ تام 'had read' والثاني ماضٍ بسيط 'answered'.",
      "lexiconTokens": {
        "carefully": "بعناية",
        "questions": "أسئلة"
      }
    },

    // =========================================================================
    // Sentence Functions & Grammatical Rules (Student File pp. 11–13)
    // =========================================================================
    {
      "id": "u3_g_10",
      "unit": 3,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "Sally has lived in Amman since 1990. The function of this sentence is ---------------",
      "promptAr": "'Sally has lived in Amman since 1990.' وظيفة هذه الجملة تعبر عن ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTION STARTED IN PAST AND CONTINUING TO PRESENT", "textAr": "حدث بدأ في الماضي وما زال مستمراً حتى الآن" },
        { "id": "b", "textEn": "COMPLETED ACTION AT A SPECIFIC PAST TIME", "textAr": "حدث مكتمل في وقت ماضٍ محدد" },
        { "id": "c", "textEn": "SCIENTIFIC FACT", "textAr": "حقيقة علمية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Perfect with 'since' denotes an action or state that started in the past and continues into the present.",
      "explanationAr": "المضارع التام مع 'since' يدل على حدث بدأ في الماضي وما زال قائماً في الحاضر.",
      "lexiconTokens": {
        "function": "وظيفة الجملة",
        "lived": "عاش / سكن",
        "since": "منذ"
      }
    },
    {
      "id": "u3_g_11",
      "unit": 3,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "Ahmed has been a teacher for ten years. The function of this sentence is ---------------",
      "promptAr": "'Ahmed has been a teacher for ten years.' وظيفة واستخدام هذه الجملة هو ---------------",
      "choices": [
        { "id": "a", "textEn": "DURATION EXTENDING FROM THE PAST TO THE PRESENT", "textAr": "فترة زمنية ممتدة من الماضي وتستمر في الحاضر" },
        { "id": "b", "textEn": "ACTION INTERRUPTED IN THE PAST", "textAr": "حدث قوطع في الماضي" },
        { "id": "c", "textEn": "HABITUAL ROUTINE ONLY", "textAr": "روتين اعتيادي فقط" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Perfect with 'for + time span' indicates duration continuing up to the present moment.",
      "explanationAr": "المضارع التام مع 'for ten years' يعبر عن مدة استمرت من الماضي ومستمرة حتى اللحظة.",
      "lexiconTokens": {
        "duration": "مدة / استغراق",
        "teacher": "معلم"
      }
    },
    {
      "id": "u3_g_12",
      "unit": 3,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "Ali and Ahmed were able to get a hotel room because they had booked in advance. The function of 'had booked' is ---------------",
      "promptAr": "وظيفة استخدام صيغة 'had booked' في الجملة السابقة هي ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTION COMPLETED BEFORE ANOTHER PAST EVENT", "textAr": "حدث اكتمل قبل وقوع حدث آخر في الماضي" },
        { "id": "b", "textEn": "FUTURE PLAN", "textAr": "خطة مستقبلية" },
        { "id": "c", "textEn": "COMPLAINT", "textAr": "شكوى" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Perfect ('had booked') shows an earlier past action that served as the cause or antecedent to getting the room.",
      "explanationAr": "الماضي التام 'had booked' يوضح أن الحجز تم واكتمل قبل الوصول والحصول على الغرفة.",
      "lexiconTokens": {
        "advance": "مقدماً / مسبقاً",
        "booked": "حجز"
      }
    },
    {
      "id": "u3_g_13",
      "unit": 3,
      "stream": "grammar",
      "topic": "Signal Words: Since vs For",
      "promptEn": "He has worked at this hospital --------------- last March.",
      "promptAr": "هو يعمل في هذا المستشفى --------------- شهر آذار الماضي.",
      "choices": [
        { "id": "a", "textEn": "since", "textAr": "منذ (نقطة بداية محددة)" },
        { "id": "b", "textEn": "for", "textAr": "لمدة (فترة إجمالية)" },
        { "id": "c", "textEn": "ago", "textAr": "مضت" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Since' is used before a specific starting point in time ('last March').",
      "explanationAr": "'Since' تُستخدم مع نقطة البداية الزمنية المحددة (last March).",
      "lexiconTokens": {
        "since": "منذ",
        "hospital": "مستشفى"
      }
    },
    {
      "id": "u3_g_14",
      "unit": 3,
      "stream": "grammar",
      "topic": "Signal Words: Since vs For",
      "promptEn": "They have been colleagues --------------- more than ten years.",
      "promptAr": "هم زملاء عمل --------------- أكثر من عشر سنوات.",
      "choices": [
        { "id": "a", "textEn": "for", "textAr": "لمدة (فترة زمنية كاملة)" },
        { "id": "b", "textEn": "since", "textAr": "منذ" },
        { "id": "c", "textEn": "already", "textAr": "بالفعل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'For' is used before a period of time / duration ('more than ten years').",
      "explanationAr": "'For' تُستخدم مع المدة الزمنية المجمعة (more than ten years).",
      "lexiconTokens": {
        "colleagues": "زملاء عمل",
        "for": "لمدة"
      }
    },
    {
      "id": "u3_g_15",
      "unit": 3,
      "stream": "grammar",
      "topic": "Negative Form of Present Perfect",
      "promptEn": "The correct negative form is ---------------",
      "promptAr": "صيغة النفي الصحيحة للمضارع التام هي ---------------",
      "choices": [
        { "id": "a", "textEn": "She has not finished her report yet.", "textAr": "has not + V3 + yet (نفي سليم)" },
        { "id": "b", "textEn": "She does not has finished her report yet.", "textAr": "خطأ تركيبي" },
        { "id": "c", "textEn": "She has not finish her report yet.", "textAr": "خطأ: الفعل مجرد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Perfect is negated by adding 'not' to 'have/has' followed by the past participle ('has not finished').",
      "explanationAr": "يتم نفي المضارع التام بإضافة not بعد has/have متبوعة بالتصريف الثالث (has not finished).",
      "lexiconTokens": {
        "negative": "نفي",
        "finished": "أنهى",
        "report": "تقرير"
      }
    },
    {
      "id": "u3_g_16",
      "unit": 3,
      "stream": "grammar",
      "topic": "Past Perfect Question Formation",
      "promptEn": "Which question in the Past Perfect is grammatically correct?",
      "promptAr": "أي صيغة سؤال في الماضي التام هي الصحيحة نحوياً؟",
      "choices": [
        { "id": "a", "textEn": "Had the game finished before you left the stadium?", "textAr": "Had + Subject + V3 (صيغة سؤال صحيحة)" },
        { "id": "b", "textEn": "Did the game had finished before you left the stadium?", "textAr": "خطأ: استخدام Did مع had" },
        { "id": "c", "textEn": "Had the game finish before you left the stadium?", "textAr": "خطأ: فعل مجرد بعد Had" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Perfect questions invert the subject and auxiliary: 'Had + Subject + Past Participle'.",
      "explanationAr": "يبدأ السؤال في الماضي التام بـ Had متبوعة بالفاعل ثم التصريف الثالث (Had the game finished).",
      "lexiconTokens": {
        "stadium": "استاد",
        "finished": "انتهى"
      }
    },
    {
      "id": "u3_g_17",
      "unit": 3,
      "stream": "grammar",
      "topic": "Present Perfect Signal Adverbs",
      "promptEn": "Have you --------------- been to Mecca?",
      "promptAr": "هل سبق لك في أي وقت أن --------------- إلى مكة المكرمة؟",
      "choices": [
        { "id": "a", "textEn": "ever", "textAr": "سبق في حياتك (في الأسئلة)" },
        { "id": "b", "textEn": "yet", "textAr": "بعد" },
        { "id": "c", "textEn": "never", "textAr": "أبداً (للجمل المنفية)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Ever' is the standard adverb used in questions to ask about life experiences up to now.",
      "explanationAr": "'Ever' هو الظرف المستخدم في أسئلة المضارع التام للاستفسار عن التجارب الشخصية.",
      "lexiconTokens": {
        "ever": "سبق / في أي وقت"
      }
    },
    {
      "id": "u3_g_18",
      "unit": 3,
      "stream": "grammar",
      "topic": "Indefinite Past vs Definite Past",
      "promptEn": "I --------------- my wallet yesterday, so I couldn't buy lunch.",
      "promptAr": "أنا --------------- محفظتي أمس، ولذلك لم أتمكن من شراء الغداء.",
      "choices": [
        { "id": "a", "textEn": "lost", "textAr": "أضعت (ماضي بسيط لوجود yesterday)" },
        { "id": "b", "textEn": "have lost", "textAr": "مضارع تام (لا يقترن بوقت محدد مثل yesterday)" },
        { "id": "c", "textEn": "had lost", "textAr": "ماضي تام" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "With a specific past time marker ('yesterday'), the Past Simple ('lost') must be used instead of Present Perfect.",
      "explanationAr": "مع وجود ظرف زمان محدد في الماضي مثل 'yesterday' يجب استخدام الماضي البسيط 'lost'.",
      "lexiconTokens": {
        "wallet": "محفظة نقود",
        "yesterday": "أمس"
      }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.grammar = window.COURSE_DATA.grammar || {};
    window.COURSE_DATA.grammar.unit3 = unit3_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit3_grammar };
  }
})();
