/**
 * Al-Balqa Applied University — English 102
 * Unit 2: Nature or Nurture?
 * Section: Grammar (Authentic Exam Style)
 */
(function() {
  const unit2_grammar = [
    // ==========================================
    // Grammar Concepts & Sentence Functions
    // ==========================================
    {
      "id": "u2_g_01",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "Ahmed visited his parents last weekend. The function of this sentence is ---------------",
      "promptAr": "'Ahmed visited his parents last weekend.' وظيفة هذه الجملة واستخدامها يعبر عن ---------------",
      "choices": [
        { "id": "a", "textEn": "AN ACTION COMPLETED AT A SPECIFIC TIME IN THE PAST", "textAr": "حدث بدأ وانتهى في وقت محدد بالماضي" },
        { "id": "b", "textEn": "AN ACTION HAPPENING RIGHT NOW", "textAr": "حدث يقع الآن في لحظة التكلم" },
        { "id": "c", "textEn": "A FUTURE PREDICTION", "textAr": "تنبؤ مستقبلي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The Simple Past ('visited') with a specific past time marker ('last weekend') expresses an action completed in the past.",
      "explanationAr": "الماضي البسيط مع ظرف زمني محدد (last weekend) يعبر عن حدث انتهى تماماً في الماضي.",
      "lexiconTokens": {
        "visited": "زار",
        "action": "حدث / فعل",
        "function": "وظيفة الجملة"
      }
    },
    {
      "id": "u2_g_02",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "At 8 o'clock last night, she was working on her presentation. The function of this sentence is ---------------",
      "promptAr": "'At 8 o'clock last night, she was working on her presentation.' وظيفة هذه الجملة تعبر عن ---------------",
      "choices": [
        { "id": "a", "textEn": "AN ACTION IN PROGRESS AT A SPECIFIC POINT IN THE PAST", "textAr": "حدث كان مستمراً في نقطة زمنية محددة بالماضي" },
        { "id": "b", "textEn": "A PERMANENT SCIENTIFIC FACT", "textAr": "حقيقة علمية دائمة" },
        { "id": "c", "textEn": "A PRESENT COMPLAINT", "textAr": "شكوى في الحاضر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Continuous ('was working') expresses an action in progress at an exact stated past moment ('at 8 o'clock last night').",
      "explanationAr": "الماضي المستمر (was working) يعبر عن حدث كان في طور الحدوث في وقت محدد بدقة في الماضي.",
      "lexiconTokens": {
        "working": "يعمل",
        "presentation": "عرض تقديمي",
        "function": "وظيفة"
      }
    },
    {
      "id": "u2_g_03",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "While Maggy was explaining binge eating, Sally was listening attentively. The function of this sentence is ---------------",
      "promptAr": "'While Maggy was explaining binge eating, Sally was listening attentively.' وظيفة الجملة تعبر عن ---------------",
      "choices": [
        { "id": "a", "textEn": "TWO SIMULTANEOUS ACTIONS HAPPENING TOGETHER IN THE PAST", "textAr": "حدثان متزامنان كانا مستمرين معاً في نفس الوقت بالماضي" },
        { "id": "b", "textEn": "AN ACTION INTERRUPTED BY ANOTHER", "textAr": "حدث قاطعه حدث آخر" },
        { "id": "c", "textEn": "A HABITUAL ACTION IN THE PRESENT", "textAr": "عادة في المضارع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Two Past Continuous clauses connected with 'while' represent simultaneous actions in the past.",
      "explanationAr": "وجود جملتين في الماضي المستمر مع 'while' يعبر عن حدثين متزامنين وقعا معاً في الماضي.",
      "lexiconTokens": {
        "explaining": "يشرح",
        "listening": "يستمع",
        "simultaneous": "متزامن"
      }
    },
    {
      "id": "u2_g_04",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sentence Function",
      "promptEn": "She was pleading with her professor when Sam called. The function of 'was pleading' is ---------------",
      "promptAr": "'She was pleading with her professor when Sam called.' استخدام 'was pleading' يعبر عن ---------------",
      "choices": [
        { "id": "a", "textEn": "AN ONGOING PAST ACTION THAT WAS INTERRUPTED", "textAr": "حدث ماضٍ كان مستمراً ثم قاطعه حدث آخر" },
        { "id": "b", "textEn": "AN ACTION FINISHED BEFORE ANOTHER IN PAST PERFECT", "textAr": "حدث اكتمل في الماضي التام" },
        { "id": "c", "textEn": "A FUTURE SCHEDULED PLAN", "textAr": "خطة مستقبلية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Continuous indicates the ongoing background action ('was pleading') that was interrupted by a Simple Past action ('called').",
      "explanationAr": "الماضي المستمر يعبر عن الحدث الذي كان مستمراً حين قطعه اتصال سام في الماضي البسيط.",
      "lexiconTokens": {
        "pleading": "يتوسل",
        "called": "اتصل",
        "interrupted": "قوطع"
      }
    },

    // ==========================================
    // Negation & Question Syntax
    // ==========================================
    {
      "id": "u2_g_05",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Negation",
      "promptEn": "The new manager --------------- the sales representative this morning.",
      "promptAr": "المدير الجديد --------------- مندوب المبيعات هذا الصباح (نفي الماضي البسيط).",
      "choices": [
        { "id": "a", "textEn": "did not meet", "textAr": "لم يقابل (نفي سليم: did not + المصدر)" },
        { "id": "b", "textEn": "did not met", "textAr": "خطأ: تصريف ثانٍ بعد did not" },
        { "id": "c", "textEn": "was not meet", "textAr": "تركيب خاطئ" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past simple negative is formed using 'did not + base form of the verb' (did not meet).",
      "explanationAr": "يُصاغ النفي في الماضي البسيط باستخدام 'did not + الفعل المجرد' (did not meet).",
      "lexiconTokens": {
        "manager": "مدير",
        "representative": "مندوب",
        "meet": "يقابل"
      }
    },
    {
      "id": "u2_g_06",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Interrogative",
      "promptEn": "--------------- Ahmed visit his parents last weekend?",
      "promptAr": "--------------- أحمد والديه نهاية الأسبوع الماضي؟",
      "choices": [
        { "id": "a", "textEn": "Did", "textAr": "Did (فعل مساعد لسؤال الماضي البسيط)" },
        { "id": "b", "textEn": "Was", "textAr": "Was" },
        { "id": "c", "textEn": "Does", "textAr": "Does (للمضارع)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Simple questions begin with 'Did + subject + base verb' (Did Ahmed visit...).",
      "explanationAr": "السؤال في الماضي البسيط يبدأ بـ 'Did + الفاعل + المصدر المجرد'.",
      "lexiconTokens": {
        "visit": "يزور",
        "parents": "الوالدان"
      }
    },
    {
      "id": "u2_g_07",
      "unit": 2,
      "stream": "grammar",
      "topic": "Verb To Be in the Past",
      "promptEn": "They --------------- absent from the lecture yesterday.",
      "promptAr": "هم --------------- غائبين عن المحاضرة أمس.",
      "choices": [
        { "id": "a", "textEn": "were", "textAr": "كانوا (صيغة الجمع من verb to be في الماضي)" },
        { "id": "b", "textEn": "was", "textAr": "كان للمفرد" },
        { "id": "c", "textEn": "did", "textAr": "فعل did" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The past form of 'to be' for plural subject 'They' is 'were'.",
      "explanationAr": "الفاعل الجمع 'They' يأخذ 'were' في الماضي من أفعال الكينونة.",
      "lexiconTokens": {
        "absent": "غائب",
        "lecture": "محاضرة"
      }
    },

    // ==========================================
    // Spelling Rules (-ed Formations)
    // ==========================================
    {
      "id": "u2_g_08",
      "unit": 2,
      "stream": "grammar",
      "topic": "Spelling Rules (-ed)",
      "promptEn": "Which spelling is correct for the past tense of 'prefer'?",
      "promptAr": "أي كتابة إملائية هي الصحيحة لصيغة الماضي من الفعل 'prefer'؟",
      "choices": [
        { "id": "a", "textEn": "preferred", "textAr": "preferred (مضاعفة حرف r لأن المقطع الأخير مشدد)" },
        { "id": "b", "textEn": "prefered", "textAr": "خطأ إملائي بـ r واحدة" },
        { "id": "c", "textEn": "preferrid", "textAr": "كتابة خاطئة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "When a multi-syllable verb ends in a vowel + consonant and the final syllable is stressed, double the final consonant: 'preferred'.",
      "explanationAr": "الفعل المنتهي بساكن قبله متحرك مع تشديد المقطع الأخير يضاعف الحرف الأخير: 'preferred'.",
      "lexiconTokens": {
        "preferred": "فضّل"
      }
    },
    {
      "id": "u2_g_09",
      "unit": 2,
      "stream": "grammar",
      "topic": "Spelling Rules (-ed)",
      "promptEn": "Which spelling is correct for the past tense of 'picnic'?",
      "promptAr": "أي كتابة إملائية هي الصحيحة للماضي من الفعل 'picnic'؟",
      "choices": [
        { "id": "a", "textEn": "picnicked", "textAr": "picnicked (تحويل c إلى ck قبل إضافة ed)" },
        { "id": "b", "textEn": "picniced", "textAr": "كتابة خاطئة" },
        { "id": "c", "textEn": "picnickeded", "textAr": "كتابة خاطئة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "In verbs ending in '-c', change '-c' to '-ck' before adding '-ed' (picnic -> picnicked, traffic -> trafficked).",
      "explanationAr": "الأفعال المنتهية بـ c يُضاف لها k قبل ed للحفاظ على نطق الكاف: 'picnicked'.",
      "lexiconTokens": {
        "picnic": "يتنزه"
      }
    },
    {
      "id": "u2_g_10",
      "unit": 2,
      "stream": "grammar",
      "topic": "Spelling Rules (-ed)",
      "promptEn": "Which spelling is correct for the past tense of 'study'?",
      "promptAr": "أي كتابة إملائية هي الصحيحة للماضي من الفعل 'study'؟",
      "choices": [
        { "id": "a", "textEn": "studied", "textAr": "studied (قلب y إلى i وإضافة ed)" },
        { "id": "b", "textEn": "studyed", "textAr": "كتابة خاطئة دون قلب y" },
        { "id": "c", "textEn": "studid", "textAr": "كتابة خاطئة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Verbs ending in a consonant + 'y' change 'y' to 'i' before '-ed' (study -> studied).",
      "explanationAr": "الفعل المنتهي بساكن يليه y تُقلب فيه الـ y إلى i ثم يُضاف ed: 'studied'.",
      "lexiconTokens": {
        "studied": "درس"
      }
    },
    {
      "id": "u2_g_11",
      "unit": 2,
      "stream": "grammar",
      "topic": "Spelling Rules (-ed)",
      "promptEn": "Which spelling is correct for the past tense of 'travel' in British English?",
      "promptAr": "أي كتابة إملائية هي الصحيحة للماضي من الفعل 'travel'؟",
      "choices": [
        { "id": "a", "textEn": "travelled", "textAr": "travelled (مضاعفة حرف l)" },
        { "id": "b", "textEn": "traveledd", "textAr": "كتابة خاطئة" },
        { "id": "c", "textEn": "traveld", "textAr": "كتابة خاطئة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "In verbs ending in '-l' preceded by a vowel, the '-l' is doubled before '-ed': 'travelled'.",
      "explanationAr": "الأفعال المنتهية بـ l مسبوقة بمتحرك تضاعف الـ l: 'travelled'.",
      "lexiconTokens": {
        "travelled": "سافر"
      }
    },

    // ==========================================
    // Activity 1: Food and Nutrition
    // ==========================================
    {
      "id": "u2_g_12",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple vs Continuous",
      "promptEn": "I --------------- a number of books on nutrition last week.",
      "promptAr": "أنا --------------- عدداً من كتب التغذية الأسبوع الماضي.",
      "choices": [
        { "id": "a", "textEn": "bought", "textAr": "اشتريتُ (ماضي بسيط لوقت محدد)" },
        { "id": "b", "textEn": "was buying", "textAr": "كنت أشتري" },
        { "id": "c", "textEn": "buy", "textAr": "أشتري" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "With completed past time 'last week', Simple Past 'bought' is used.",
      "explanationAr": "مع الظرف الزمني 'last week' نستخدم الماضي البسيط 'bought'.",
      "lexiconTokens": {
        "bought": "اشترى",
        "nutrition": "تغذية"
      }
    },
    {
      "id": "u2_g_13",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Agreement",
      "promptEn": "There --------------- a severe shortage of food in some countries after the war.",
      "promptAr": "لقد --------------- نقص حاد في الغذاء في بعض الدول بعد الحرب.",
      "choices": [
        { "id": "a", "textEn": "was", "textAr": "كان (مفرد متوافق مع shortage)" },
        { "id": "b", "textEn": "were", "textAr": "كانوا للجمع" },
        { "id": "c", "textEn": "are", "textAr": "يكونون" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'A shortage' is singular, so it takes 'was'.",
      "explanationAr": "الاسم المفرد 'a shortage' (نقص) يتطلب الفعل المفرد 'was'.",
      "lexiconTokens": {
        "shortage": "نقص / عجز",
        "war": "حرب"
      }
    },
    {
      "id": "u2_g_14",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple vs Continuous",
      "promptEn": "She --------------- uncontrollably when I came in.",
      "promptAr": "كانت --------------- دون سيطرة عندما دخلتُ أنا الغرفة.",
      "choices": [
        { "id": "a", "textEn": "was eating", "textAr": "تأكل (ماضي مستمر قاطعه الدخول)" },
        { "id": "b", "textEn": "ate", "textAr": "أكلت" },
        { "id": "c", "textEn": "eats", "textAr": "تأكل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Continuous 'was eating' represents the ongoing action interrupted by 'came in'.",
      "explanationAr": "'was eating' ماضي مستمر للحدث الذي كان جارياً عند لحظة الدخول.",
      "lexiconTokens": {
        "eating": "أكل",
        "uncontrollably": "بلا سيطرة"
      }
    },
    {
      "id": "u2_g_15",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sequential Past Actions",
      "promptEn": "She --------------- her diet as soon as she --------------- the consequences of binge eating.",
      "promptAr": "لقد --------------- حميتها الغذائية بمجرد أن --------------- عواقب الأكل القهري.",
      "choices": [
        { "id": "a", "textEn": "changed / realized", "textAr": "غيرت / أدركت (أحداث متتالية في الماضي البسيط)" },
        { "id": "b", "textEn": "was changing / was realizing", "textAr": "صيغة مستمرة غير صحيحة" },
        { "id": "c", "textEn": "changed / was realizing", "textAr": "غير متطابق مع realize كفعل حالة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Two consecutive completed actions introduced by 'as soon as' both take Simple Past ('changed / realized').",
      "explanationAr": "الأحداث المتتالية مع 'as soon as' تصاغ كلاهما في الماضي البسيط، وفعل 'realize' فعل حالة لا يأخذ ing.",
      "lexiconTokens": {
        "changed": "غيرت",
        "realized": "أدركت",
        "consequences": "عواقب"
      }
    },
    {
      "id": "u2_g_16",
      "unit": 2,
      "stream": "grammar",
      "topic": "Interrupted Past Actions",
      "promptEn": "She --------------- on her favorite food when her mother ---------------",
      "promptAr": "كانت --------------- طعامها المفضل عندما --------------- والدتها.",
      "choices": [
        { "id": "a", "textEn": "was gorging / came in", "textAr": "تلتهم بشراهة (مستمر) / دخلت (ماضي بسيط)" },
        { "id": "b", "textEn": "gorged / was coming in", "textAr": "ترتيب زمني معكوس" },
        { "id": "c", "textEn": "was gorging / was coming in", "textAr": "كلاهما مستمر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The interrupted action takes Past Continuous ('was gorging') and the interrupting action takes Simple Past ('came in').",
      "explanationAr": "الحدث المستمر يأخذ الماضي المستمر (was gorging) بينما حدث المقاطعة يأخذ الماضي البسيط (came in).",
      "lexiconTokens": {
        "gorging": "يلتهم بشراهة",
        "came": "أتى / دخل"
      }
    },

    // ==========================================
    // Activity 2: Social Phobias
    // ==========================================
    {
      "id": "u2_g_17",
      "unit": 2,
      "stream": "grammar",
      "topic": "Stative Verbs in Past",
      "promptEn": "Although Maria was a lovely person, she --------------- a continuous fear of embarrassment.",
      "promptAr": "على الرغم من أن ماريا كانت شخصاً لطيفاً، إلا أنها --------------- خوفاً مستمراً من الإحراج.",
      "choices": [
        { "id": "a", "textEn": "had", "textAr": "كان لديها (فعل حالة stative verb في الماضي البسيط)" },
        { "id": "b", "textEn": "was having", "textAr": "خطأ: have للملكية والشعور لا تأخذ ing" },
        { "id": "c", "textEn": "has", "textAr": "مضارع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Have' meaning possession of a feeling is stative and cannot be used in the continuous form ('had').",
      "explanationAr": "'Have' عند التعبير عن حالة شعورية تكون فعل حالة ولا تصاغ في المستمر، فتأخذ 'had'.",
      "lexiconTokens": {
        "had": "كان لديها",
        "fear": "خوف",
        "embarrassment": "إحراج"
      }
    },
    {
      "id": "u2_g_18",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Completed Action",
      "promptEn": "Sam --------------- Maria a self-care book yesterday.",
      "promptAr": "سام --------------- ماريا كتاباً للمساعدة الذاتية يوم أمس.",
      "choices": [
        { "id": "a", "textEn": "gave", "textAr": "أعطى (ماضي بسيط مع yesterday)" },
        { "id": "b", "textEn": "was giving", "textAr": "كان يعطي" },
        { "id": "c", "textEn": "gives", "textAr": "يعطي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Yesterday' specifies a completed past action, requiring the Simple Past irregular verb 'gave'.",
      "explanationAr": "مع 'yesterday' نستخدم التصريف الثاني البسيط 'gave'.",
      "lexiconTokens": {
        "gave": "أعطى",
        "yesterday": "أمس"
      }
    },
    {
      "id": "u2_g_19",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Actions Before Sequence",
      "promptEn": "Before she --------------- the presentation, Sam --------------- her a lot.",
      "promptAr": "قبل أن --------------- العرض التقديمي، كان سام قد --------------- كثيراً.",
      "choices": [
        { "id": "a", "textEn": "did / encouraged", "textAr": "قدّمت / شجعها (أفعال ماضية بسيطة متتالية)" },
        { "id": "b", "textEn": "was doing / was encouraging", "textAr": "صيغ مستمرة غير مناسبة للسياق" },
        { "id": "c", "textEn": "did / was encouraging", "textAr": "غير متطابق" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Sequential completed past actions use Simple Past ('did / encouraged').",
      "explanationAr": "الأحداث المكتملة في سياق سرد القصة تأخذ الماضي البسيط ('did / encouraged').",
      "lexiconTokens": {
        "encouraged": "شجع",
        "presentation": "عرض تقديمي"
      }
    },
    {
      "id": "u2_g_20",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sequential Series of Past Actions",
      "promptEn": "Maria simply --------------- on the moment, --------------- a deep breath, and --------------- her speech.",
      "promptAr": "قامت ماريا ببساطة بـ --------------- على اللحظة الحاضرة، و--------------- نفساً عميقاً، و--------------- خطابها.",
      "choices": [
        { "id": "a", "textEn": "focused / took / continued", "textAr": "ركزت / أخذت / تابعت (سلسلة أفعال ماضية متتابعة)" },
        { "id": "b", "textEn": "was focusing / took / continued", "textAr": "خلط غير مبرر في الأزمنة" },
        { "id": "c", "textEn": "focuses / takes / continues", "textAr": "مضارع بسيط" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A series of consecutive past events must all use Simple Past ('focused, took, continued').",
      "explanationAr": "سلسلة الأحداث المتتالية في السرد الماضي تأخذ جميعها صيغة الماضي البسيط: 'focused, took, continued'.",
      "lexiconTokens": {
        "focused": "ركزت",
        "took": "أخذت",
        "continued": "تابعت"
      }
    },

    // ==========================================
    // Activity 3: Choosing the Correct Tense
    // ==========================================
    {
      "id": "u2_g_21",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Time Expression",
      "promptEn": "Jim and Rona --------------- two years ago after having a long friendship.",
      "promptAr": "تزوج جيم ورونا منذ سنتين --------------- بعد صداقة طويلة.",
      "choices": [
        { "id": "a", "textEn": "married", "textAr": "تزوجا (ماضي بسيط مع ago)" },
        { "id": "b", "textEn": "marry", "textAr": "يتزوج" },
        { "id": "c", "textEn": "were marrying", "textAr": "كانا يتزوجان" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The time expression 'two years ago' requires the Simple Past tense 'married'.",
      "explanationAr": "الظرف الزمني 'two years ago' يقتضي استخدام الماضي البسيط 'married'.",
      "lexiconTokens": {
        "married": "تزوج",
        "friendship": "صداقة"
      }
    },
    {
      "id": "u2_g_22",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Continuous Background Action",
      "promptEn": "Jim --------------- to hide his intense feelings when he was talking to his parents.",
      "promptAr": "كان جيم --------------- إخفاء مشاعره الجياشة عندما كان يتحدث مع والديه.",
      "choices": [
        { "id": "a", "textEn": "was trying", "textAr": "يحاول (ماضي مستمر متزامن مع was talking)" },
        { "id": "b", "textEn": "try", "textAr": "يحاول مضارع" },
        { "id": "c", "textEn": "were trying", "textAr": "خطأ توافق فاعل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Singular subject 'Jim' takes 'was trying' to describe ongoing effort while talking.",
      "explanationAr": "الفاعل المفرد 'Jim' يأخذ 'was trying' للدلالة على محاولة مستمرة أثناء الحديث.",
      "lexiconTokens": {
        "trying": "يحاول",
        "feelings": "مشاعر"
      }
    },
    {
      "id": "u2_g_23",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Continuous Agreement",
      "promptEn": "My problems at school --------------- my life miserable when I was a student.",
      "promptAr": "كانت مشاكلي في المدرسة --------------- حياتي بائسة عندما كنت طالباً.",
      "choices": [
        { "id": "a", "textEn": "were making", "textAr": "تجعل (ماضي مستمر مع فاعل جمع problems)" },
        { "id": "b", "textEn": "was making", "textAr": "خطأ للمفرد" },
        { "id": "c", "textEn": "make", "textAr": "مضارع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Plural subject 'My problems' agrees with 'were making'.",
      "explanationAr": "الفاعل الجمع 'My problems' يتطلب الفعل المساعد 'were making'.",
      "lexiconTokens": {
        "problems": "مشاكل",
        "miserable": "بائس"
      }
    },
    {
      "id": "u2_g_24",
      "unit": 2,
      "stream": "grammar",
      "topic": "Verb To Be Past State",
      "promptEn": "College --------------- a big leap forward, but it was very stressful.",
      "promptAr": "لقد --------------- مرحلة الكلية قفزة كبيرة للأمام، لكنها كانت مليئة بالضغوطات.",
      "choices": [
        { "id": "a", "textEn": "was", "textAr": "كانت (ماضي بسيط لبيان الحالة)" },
        { "id": "b", "textEn": "were", "textAr": "للجمع" },
        { "id": "c", "textEn": "was being", "textAr": "استمرار غير مناسب لحالة ثابتة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Singular subject 'College' takes the Simple Past stative verb 'was'.",
      "explanationAr": "'College' اسم مفرد يعبر عن حالة ماضية فيأخذ 'was'.",
      "lexiconTokens": {
        "college": "كلية",
        "stressful": "ضاغط / مرهق"
      }
    },
    {
      "id": "u2_g_25",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Continuous with Although",
      "promptEn": "Although I --------------- in some academic subjects, I also had many strengths.",
      "promptAr": "على الرغم من أنني --------------- في بعض المواد الأكاديمية، إلا أنني كنت أمتلك نقاط قوة كثيرة.",
      "choices": [
        { "id": "a", "textEn": "was struggling", "textAr": "كنت أعاني وأكابد (ماضي مستمر)" },
        { "id": "b", "textEn": "was struggled", "textAr": "مبني للمجهول خاطئ" },
        { "id": "c", "textEn": "were struggling", "textAr": "خطأ توافق مع I" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'I was struggling' correctly describes an ongoing past struggle.",
      "explanationAr": "'I was struggling' تعبر بشكل صحيح عن المعاناة المستمرة في تلك الفترة.",
      "lexiconTokens": {
        "struggling": "يكابد / يعاني",
        "strengths": "نقاط قوة"
      }
    },
    {
      "id": "u2_g_26",
      "unit": 2,
      "stream": "grammar",
      "topic": "Coordinated Past Simple Verbs",
      "promptEn": "When they were at school together, they shared experiences; they ---------------, cried, and played together.",
      "promptAr": "عندما كانوا بالمدرسة معاً، تشاركوا التجارب؛ لقد ---------------، وبكوا، ولعبوا معاً.",
      "choices": [
        { "id": "a", "textEn": "laughed", "textAr": "ضحكوا (ماضي بسيط متناسق مع cried and played)" },
        { "id": "b", "textEn": "were laughing", "textAr": "كانا يضحكان" },
        { "id": "c", "textEn": "laugh", "textAr": "مضارع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Parallel coordinated verbs must share the same tense: 'laughed, cried, and played'.",
      "explanationAr": "الأفعال المعطوفة في الجملة يجب أن تتبع نفس الزمن الماضي البسيط: 'laughed, cried, and played'.",
      "lexiconTokens": {
        "laughed": "ضحك",
        "cried": "بكى",
        "played": "لعب"
      }
    },

    // ==========================================
    // Activity 4: Identifying Correct Sentences
    // ==========================================
    {
      "id": "u2_g_27",
      "unit": 2,
      "stream": "grammar",
      "topic": "Stative Verbs in Past",
      "promptEn": "Which sentence is grammatically correct?",
      "promptAr": "أي جملة هي الصحيحة نحوياً؟",
      "choices": [
        { "id": "a", "textEn": "She recognized the potential for error in the method being used.", "textAr": "صحيح: فعل recognize حالة لا يأخذ ing" },
        { "id": "b", "textEn": "She was recognizing the potential for error in the method being used.", "textAr": "خطأ: صياغة recognize في المستمر" },
        { "id": "c", "textEn": "She recognize the potential for error yesterday.", "textAr": "خطأ في زمن الفعل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Recognize' is a stative verb of cognition and is not used in continuous tenses.",
      "explanationAr": "الفعل 'recognize' فعل إدراك وحالة لا يُصاغ في زمن الاستمرار، فتكون الجملة الصحيحة هي 'recognized'.",
      "lexiconTokens": {
        "recognized": "أدرك / ميز",
        "potential": "احتمالية",
        "error": "خطأ"
      }
    },
    {
      "id": "u2_g_28",
      "unit": 2,
      "stream": "grammar",
      "topic": "Past Simple Questions",
      "promptEn": "Which question is grammatically correct?",
      "promptAr": "أي صيغة سؤال هي الصحيحة نحوياً؟",
      "choices": [
        { "id": "a", "textEn": "What led you to this conclusion?", "textAr": "صحيح: ماضي بسيط للسؤال عن الفاعل" },
        { "id": "b", "textEn": "What was leading you to this conclusion?", "textAr": "غير دقيق في الاستمرار" },
        { "id": "c", "textEn": "What did led you to this conclusion?", "textAr": "خطأ: جمع did مع led" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'What led you to this conclusion?' correctly uses Simple Past 'led' to ask about a completed result.",
      "explanationAr": "صيغة السؤال الصحيحة في الماضي البسيط هي: 'What led you to this conclusion?'.",
      "lexiconTokens": {
        "led": "قاد / أدى إلى",
        "conclusion": "استنتاج"
      }
    },
    {
      "id": "u2_g_29",
      "unit": 2,
      "stream": "grammar",
      "topic": "Verb To Be Past State",
      "promptEn": "Which sentence is grammatically correct?",
      "promptAr": "أي جملة هي الصحيحة نحوياً؟",
      "choices": [
        { "id": "a", "textEn": "This demonstration was a symptom of discontent among students.", "textAr": "صحيح: was كفعل كينونة ماضٍ بسيط" },
        { "id": "b", "textEn": "This demonstration was being a symptom of discontent among students.", "textAr": "خطأ: was being لا تصف حالة ثابتة" },
        { "id": "c", "textEn": "This demonstration were a symptom of discontent.", "textAr": "خطأ في توافق الجمع والمفرد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Was a symptom' is the correct past stative form; 'was being' is not used for static attributes.",
      "explanationAr": "نستخدم 'was a symptom' لأن الجملة تصف دلالة وحالة ثابتة في الماضي.",
      "lexiconTokens": {
        "demonstration": "مظاهرة / إيضاح",
        "discontent": "استياء"
      }
    },
    {
      "id": "u2_g_30",
      "unit": 2,
      "stream": "grammar",
      "topic": "Sequential Actions",
      "promptEn": "Which sentence is grammatically correct?",
      "promptAr": "أي جملة هي الصحيحة نحوياً؟",
      "choices": [
        { "id": "a", "textEn": "She deprived herself of food, but ended up binging and regretted it.", "textAr": "صحيح: سلسلة أفعال ماضية بسيطة (deprived, ended, regretted)" },
        { "id": "b", "textEn": "She was depriving herself of food, but was ending up binging and regretted it.", "textAr": "تداخل أزمنة غير صحيح" },
        { "id": "c", "textEn": "She deprive herself of food yesterday.", "textAr": "فعل مضارع مع ظرف ماضٍ" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Completed sequential past events use Simple Past consistently across clauses.",
      "explanationAr": "تسلسل الأحداث المنتهية يقتضي استخدام الماضي البسيط لكافة الأفعال المعطوفة.",
      "lexiconTokens": {
        "deprived": "حرمت",
        "regretted": "ندمت"
      }
    },
    {
      "id": "u2_g_31",
      "unit": 2,
      "stream": "grammar",
      "topic": "Subject-Verb Agreement",
      "promptEn": "Which sentence is grammatically correct?",
      "promptAr": "أي جملة هي الصحيحة نحوياً من حيث التوافق الإفرادي والفعلي؟",
      "choices": [
        { "id": "a", "textEn": "She had a continuous fear of being humiliated in front of others.", "textAr": "صحيح: had للماضي المفرد مع فعل حالة" },
        { "id": "b", "textEn": "She were having a continuous fear of being humiliated.", "textAr": "خطأ: were having لا تتطابق مع she" },
        { "id": "c", "textEn": "She was had a continuous fear.", "textAr": "تركيب فاسد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'She had' has correct subject agreement and uses the simple past for stative possession.",
      "explanationAr": "'She had' صحيحة لتوافق الفاعل المفرد مع الفعل الماضي البسيط لأفعال الحالة.",
      "lexiconTokens": {
        "humiliated": "مُهان / مُحرج",
        "fear": "خوف"
      }
    },
    {
      "id": "u2_g_32",
      "unit": 2,
      "stream": "grammar",
      "topic": "Completed Action at Stated Time",
      "promptEn": "Which sentence is grammatically correct?",
      "promptAr": "أي جملة هي الصحيحة نحوياً للتعبير عن حدث في اجتماع سابق؟",
      "choices": [
        { "id": "a", "textEn": "She imposed her ideas on the group during our last meeting.", "textAr": "صحيح: imposed ماضي بسيط لحدث اكتمل في الاجتماع السابق" },
        { "id": "b", "textEn": "She was imposing her ideas during our last meeting completed yesterday.", "textAr": "استخدام غير دقيق للمستمر" },
        { "id": "c", "textEn": "She impose her ideas on the group last week.", "textAr": "فعل غير مصرف في الماضي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "With a completed time period ('during our last meeting'), the Simple Past 'imposed' is required.",
      "explanationAr": "الحدث الذي تم واكتمل في اجتماع ماضٍ محدد يأخذ الماضي البسيط 'imposed'.",
      "lexiconTokens": {
        "imposed": "فرضت",
        "meeting": "اجتماع"
      }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.grammar = window.COURSE_DATA.grammar || {};
    window.COURSE_DATA.grammar.unit2 = unit2_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit2_grammar };
  }
})();
