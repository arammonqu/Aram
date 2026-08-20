/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Life and Nature
 * Section: Grammar (Authentic Exam Style)
 * Batch 17: Passive Voice Forms, Active/Passive Transformations & Voice Identification
 */
(function() {
  const unit4_grammar = [
    // =========================================================================
    // Part 1: Passive Tense Rules & Structures (5 Questions)
    // =========================================================================
    {
      "id": "u4_g_01",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive Voice Structure",
      "promptEn": "The general rule for forming any passive verb in English is ---------------",
      "promptAr": "القاعدة العامة لصياغة أي فعل مبني للمجهول في اللغة الإنجليزية هي ---------------",
      "choices": [
        { "id": "a", "textEn": "be + past participle (V3)", "textAr": "فعل Be مناسب + التصريف الثالث" },
        { "id": "b", "textEn": "have + base form", "textAr": "Have + الفعل المجرد" },
        { "id": "c", "textEn": "do + ing form", "textAr": "Do + الفعل مضاف له ing" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "All passive constructions require an appropriate form of the auxiliary verb 'to be' followed by the past participle of the main verb.",
      "explanationAr": "جميع صيغ المبني للمجهول تتكون من تصريف مناسب للفعل 'be' متبوعاً بالتصريف الثالث (Past Participle).",
      "lexiconTokens": { "passive": "مبني للمجهول", "rule": "قاعدة" }
    },
    {
      "id": "u4_g_02",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive Voice Function",
      "promptEn": "The windows have been broken by the wind. The function of using the passive voice here is ---------------",
      "promptAr": "'The windows have been broken by the wind.' وظيفة استخدام المبني للمجهول هنا هي ---------------",
      "choices": [
        { "id": "a", "textEn": "TO CHANGE THE FOCAL POINT / FOCUS ON THE RESULT", "textAr": "تغيير نقطة التركيز والاهتمام بالنتيجة والمفعول به" },
        { "id": "b", "textEn": "TO EXPRESS A FUTURE PLAN", "textAr": "التعبير عن خطة مستقبلية" },
        { "id": "c", "textEn": "TO ASK FOR PERMISSION", "textAr": "طلب الإذن" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Speakers use the passive voice to shift the focal point of the sentence toward the recipient or result of the action rather than the doer.",
      "explanationAr": "يُستخدم المبني للمجهول لنقل محور التركيز إلى الحدث والمفعول المتأثر به بدلاً من الفاعل.",
      "lexiconTokens": { "function": "وظيفة", "focal": "محوري / تركيز" }
    },
    {
      "id": "u4_g_03",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive Form (Present Continuous)",
      "promptEn": "The passive form for the Present Continuous tense is ---------------",
      "promptAr": "صيغة المبني للمجهول لزمن المضارع المستمر هي ---------------",
      "choices": [
        { "id": "a", "textEn": "am / is / are being + V3", "textAr": "am/is/are + being + التصريف الثالث" },
        { "id": "b", "textEn": "was / were being + V3", "textAr": "was/were + being + التصريف الثالث" },
        { "id": "c", "textEn": "has / have been + V3", "textAr": "has/have + been + التصريف الثالث" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present Continuous passive uses 'am/is/are + being + past participle'.",
      "explanationAr": "المضارع المستمر في المجهول يصاغ عبر 'am/is/are + being + V3'.",
      "lexiconTokens": { "continuous": "مستمر", "form": "صيغة" }
    },
    {
      "id": "u4_g_04",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive Form (Past Perfect)",
      "promptEn": "The passive form for the Past Perfect tense is ---------------",
      "promptAr": "صيغة المبني للمجهول لزمن الماضي التام هي ---------------",
      "choices": [
        { "id": "a", "textEn": "had been + V3", "textAr": "had been + التصريف الثالث" },
        { "id": "b", "textEn": "has been + V3", "textAr": "has been + التصريف الثالث" },
        { "id": "c", "textEn": "was / were + V3", "textAr": "was/were + التصريف الثالث" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past Perfect passive is constructed with 'had been + past participle'.",
      "explanationAr": "الماضي التام في المجهول يُصاغ باستخدام 'had been + V3'.",
      "lexiconTokens": { "past perfect": "ماضي تام" }
    },
    {
      "id": "u4_g_05",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive Form (Modals)",
      "promptEn": "The passive form for modal verbs (can, must, will) is ---------------",
      "promptAr": "صيغة المبني للمجهول مع الأفعال الناقصة (can, must, will) هي ---------------",
      "choices": [
        { "id": "a", "textEn": "modal + be + V3", "textAr": "modal + be + التصريف الثالث" },
        { "id": "b", "textEn": "modal + been + V3", "textAr": "modal + been + التصريف الثالث" },
        { "id": "c", "textEn": "modal + being + V3", "textAr": "modal + being + التصريف الثالث" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Modals in the passive voice are followed by the base 'be' and the past participle ('must be done', 'can be seen').",
      "explanationAr": "الأفعال الناقصة في المجهول تتبعها الصيغة المجردة 'be' ثم التصريف الثالث.",
      "lexiconTokens": { "modals": "أفعال ناقصة" }
    },

    // =========================================================================
    // Activity 1: Active to Passive Transformations (10 Questions)
    // =========================================================================
    {
      "id": "u4_g_06",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'Someone is helping her with the housework.' \nPassive: She --------------- with the housework.",
      "promptAr": "تحويل للمجهول: 'شخص ما يساعدها في أعمال المنزل.' \nالمجهول: هي --------------- في أعمال المنزل.",
      "choices": [
        { "id": "a", "textEn": "is being helped", "textAr": "تُساعَد حالياً (مضارع مستمر مجهول)" },
        { "id": "b", "textEn": "was helped", "textAr": "سُوعِدت (ماضي)" },
        { "id": "c", "textEn": "is helped", "textAr": "تُساعَد (مضارع بسيط)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present continuous active ('is helping') becomes 'is being helped' in the passive.",
      "explanationAr": "المضارع المستمر 'is helping' يتحول في المجهول مع الفاعل المفرد 'she' إلى 'is being helped'.",
      "lexiconTokens": { "housework": "أعمال المنزل", "helped": "يُساعد" }
    },
    {
      "id": "u4_g_07",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'The mail-order company sent Mrs. Green a parcel.' \nPassive: Mrs. Green --------------- a parcel.",
      "promptAr": "تحويل للمجهول: 'أرسلت شركة البريد طرداً للسيدة غرين.' \nالمجهول: السيدة غرين --------------- طرداً.",
      "choices": [
        { "id": "a", "textEn": "was sent", "textAr": "أُرسِل إليها (ماضي بسيط مجهول)" },
        { "id": "b", "textEn": "is sent", "textAr": "يُرسَل إليها" },
        { "id": "c", "textEn": "has been sent", "textAr": "قد أُرسل إليها" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past simple active ('sent') becomes 'was sent' for the singular subject 'Mrs. Green'.",
      "explanationAr": "الفعل الماضي البسيط 'sent' يتحول مع المفرد إلى 'was sent'.",
      "lexiconTokens": { "parcel": "طرد بريدي", "sent": "أُرسل" }
    },
    {
      "id": "u4_g_08",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'Someone will pay you within the next few days.' \nPassive: You --------------- within the next few days.",
      "promptAr": "تحويل للمجهول: 'سيدفع لك شخص ما خلال الأيام القادمة.' \nالمجهول: أنت --------------- خلال الأيام القادمة.",
      "choices": [
        { "id": "a", "textEn": "will be paid", "textAr": "سيُدفع لك (مستقبل مجهول)" },
        { "id": "b", "textEn": "are paid", "textAr": "يُدفع لك" },
        { "id": "c", "textEn": "will paid", "textAr": "صيغة خاطئة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Future active with will ('will pay') becomes 'will be paid' in the passive.",
      "explanationAr": "صيغة المستقبل مع will تتحول إلى 'will be + V3' فتصبح 'will be paid'.",
      "lexiconTokens": { "pay": "يدفع", "paid": "مدفوع" }
    },
    {
      "id": "u4_g_09",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'You can improve your health with more exercise.' \nPassive: Your health --------------- with more exercise.",
      "promptAr": "تحويل للمجهول: 'يمكنك تحسين صحتك بالمزيد من التمارين.' \nالمجهول: صحتك --------------- بالمزيد من التمارين.",
      "choices": [
        { "id": "a", "textEn": "can be improved", "textAr": "يمكن أن تتحسن (Modal مجهول)" },
        { "id": "b", "textEn": "can improve", "textAr": "يمكن أن تحسن (معلوم)" },
        { "id": "c", "textEn": "is improved", "textAr": "تتحسن" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Modal active ('can improve') becomes 'can be improved' in the passive.",
      "explanationAr": "الفعل الناقص 'can improve' يتحول في المجهول إلى 'can be improved'.",
      "lexiconTokens": { "health": "صحة", "improved": "محسن" }
    },
    {
      "id": "u4_g_10",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'The farmer is building a new barn.' \nPassive: A new barn --------------- by the farmer.",
      "promptAr": "تحويل للمجهول: 'يبني المزارع حظيرة جديدة.' \nالمجهول: حظيرة جديدة --------------- بواسطة المزارع.",
      "choices": [
        { "id": "a", "textEn": "is being built", "textAr": "تُبنى حالياً (مضارع مستمر مجهول)" },
        { "id": "b", "textEn": "was built", "textAr": "بُنيت" },
        { "id": "c", "textEn": "is built", "textAr": "تُبنى (مضارع بسيط)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present continuous active ('is building') becomes 'is being built' for singular subject 'A new barn'.",
      "explanationAr": "المضارع المستمر 'is building' يتحول إلى 'is being built' في المجهول.",
      "lexiconTokens": { "barn": "حظيرة", "built": "مبني" }
    },
    {
      "id": "u4_g_11",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'Mrs. Jones has sent the letter.' \nPassive: The letter --------------- by Mrs. Jones.",
      "promptAr": "تحويل للمجهول: 'أرسلت السيدة جونز الرسالة.' \nالمجهول: الرسالة --------------- بواسطة السيدة جونز.",
      "choices": [
        { "id": "a", "textEn": "has been sent", "textAr": "قد أُرسلت (مضارع تام مجهول)" },
        { "id": "b", "textEn": "have been sent", "textAr": "للجمع (غير مطابق)" },
        { "id": "c", "textEn": "was sent", "textAr": "ماضي بسيط" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Present perfect active ('has sent') becomes 'has been sent' for singular 'The letter'.",
      "explanationAr": "المضارع التام 'has sent' يتحول إلى 'has been sent' مع الفاعل المفرد.",
      "lexiconTokens": { "letter": "رسالة", "sent": "أُرسلت" }
    },
    {
      "id": "u4_g_12",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'Someone had broken our door down.' \nPassive: Our door ---------------",
      "promptAr": "تحويل للمجهول: 'قام شخص ما بخلع بابنا.' \nالمجهول: بابنا ---------------",
      "choices": [
        { "id": "a", "textEn": "had been broken down", "textAr": "كان قد خُلع وكُسر (ماضي تام مجهول)" },
        { "id": "b", "textEn": "has been broken down", "textAr": "مضارع تام" },
        { "id": "c", "textEn": "was broken down", "textAr": "ماضي بسيط" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past perfect active ('had broken') becomes 'had been broken' in the passive.",
      "explanationAr": "الماضي التام 'had broken' يتحول في المجهول إلى 'had been broken'.",
      "lexiconTokens": { "door": "باب", "broken": "مكسور" }
    },
    {
      "id": "u4_g_13",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'People must obey the law.' \nPassive: The law ---------------",
      "promptAr": "تحويل للمجهول: 'يجب على الناس إطاعة القانون.' \nالمجهول: القانون ---------------",
      "choices": [
        { "id": "a", "textEn": "must be obeyed", "textAr": "يجب أن يُطاع ويُحترم" },
        { "id": "b", "textEn": "must obeyed", "textAr": "صيغة ناقصة بدون be" },
        { "id": "c", "textEn": "is obeyed", "textAr": "يُطاع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Modal active ('must obey') becomes 'must be obeyed' in the passive.",
      "explanationAr": "الفعل الناقص 'must obey' يتحول إلى 'must be obeyed' بإضافة be والتصريف الثالث.",
      "lexiconTokens": { "law": "قانون", "obeyed": "مُطاع" }
    },
    {
      "id": "u4_g_14",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'The teacher explained the lesson to the students.' \nPassive: The lesson --------------- to the students by the teacher.",
      "promptAr": "تحويل للمجهول: 'شرح المعلم الدرس للطلاب.' \nالمجهول: الدرس --------------- للطلاب بواسطة المعلم.",
      "choices": [
        { "id": "a", "textEn": "was explained", "textAr": "شُرِح (ماضي بسيط مجهول)" },
        { "id": "b", "textEn": "is explained", "textAr": "يُشرح" },
        { "id": "c", "textEn": "were explained", "textAr": "شُرِحت (للجمع)" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past simple active ('explained') becomes 'was explained' for the singular noun 'The lesson'.",
      "explanationAr": "الماضي البسيط 'explained' يصبح 'was explained' مع الاسم المفرد 'The lesson'.",
      "lexiconTokens": { "lesson": "درس", "explained": "مشروح" }
    },
    {
      "id": "u4_g_15",
      "unit": 4,
      "stream": "grammar",
      "topic": "Active to Passive",
      "promptEn": "Active: 'The volcano burnt many houses.' \nPassive: Many houses --------------- by the volcano.",
      "promptAr": "تحويل للمجهول: 'أحرق البركان منازل كثيرة.' \nالمجهول: منازل كثيرة --------------- بواسطة البركان.",
      "choices": [
        { "id": "a", "textEn": "were burnt", "textAr": "أُحرقت (ماضي بسيط مجهول للجمع)" },
        { "id": "b", "textEn": "was burnt", "textAr": "أُحرق (للمفرد)" },
        { "id": "c", "textEn": "are burnt", "textAr": "تُحرق حالياً" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Past simple active ('burnt') becomes 'were burnt' for the plural subject 'Many houses'.",
      "explanationAr": "الفعل الماضي البسيط 'burnt' يتحول مع الجمع 'Many houses' إلى 'were burnt'.",
      "lexiconTokens": { "volcano": "بركان", "houses": "منازل", "burnt": "محروق" }
    },

    // =========================================================================
    // Activity 2: Passive to Active Transformations (10 Questions)
    // =========================================================================
    {
      "id": "u4_g_16",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'The garage ought to be painted by our neighbors.' \nActive: Our neighbors --------------- the garage.",
      "promptAr": "تحويل للمعلوم: 'ينبغي أن يُدهن الكراج بواسطة جيراننا.' \nالمعلوم: ينبغي على جيراننا --------------- الكراج.",
      "choices": [
        { "id": "a", "textEn": "ought to paint", "textAr": "أن يدهنوا (Modal معلوم)" },
        { "id": "b", "textEn": "painted", "textAr": "دهنوا" },
        { "id": "c", "textEn": "are painting", "textAr": "يدهنون الآن" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Passive modal 'ought to be painted' changes back to active 'ought to paint'.",
      "explanationAr": "صيغة المجهول 'ought to be painted' تعود في المعلوم إلى 'ought to paint'.",
      "lexiconTokens": { "neighbors": "جيران", "garage": "كراج" }
    },
    {
      "id": "u4_g_17",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'He was presented a medal by the queen.' \nActive: The queen --------------- him a medal.",
      "promptAr": "تحويل للمعلوم: 'قُلد وساماً من قِبل الملكة.' \nالمعلوم: الملكة --------------- وساماً.",
      "choices": [
        { "id": "a", "textEn": "presented", "textAr": "قلدته / قدمت له (ماضي بسيط معلوم)" },
        { "id": "b", "textEn": "presents", "textAr": "تقدم" },
        { "id": "c", "textEn": "was presenting", "textAr": "كانت تقدم" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'was presented' is Past Simple passive; its active form is the simple past verb 'presented'.",
      "explanationAr": "'was presented' ماضي بسيط مجهول، يعود إلى الماضي البسيط المعلوم 'presented'.",
      "lexiconTokens": { "medal": "ميدالية / وسام", "queen": "ملكة" }
    },
    {
      "id": "u4_g_18",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'The man is being chased by a dog.' \nActive: A dog --------------- the man.",
      "promptAr": "تحويل للمعلوم: 'الرجل يُطارَد بواسطة كلب.' \nالمعلوم: كلبٌ --------------- الرجل.",
      "choices": [
        { "id": "a", "textEn": "is chasing", "textAr": "يطارد (مضارع مستمر معلوم)" },
        { "id": "b", "textEn": "chased", "textAr": "طارد" },
        { "id": "c", "textEn": "was chasing", "textAr": "كان يطارد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'is being chased' is Present Continuous passive; its active counterpart is 'is chasing'.",
      "explanationAr": "'is being chased' مضارع مستمر في المجهول، يعود في المعلوم إلى 'is chasing'.",
      "lexiconTokens": { "chasing": "يطارد", "dog": "كلب" }
    },
    {
      "id": "u4_g_19",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'Ted has been sold a second-hand car by Bob.' \nActive: Bob --------------- Ted a second-hand car.",
      "promptAr": "تحويل للمعلوم: 'بيع لتيد سيارة مستعملة من قِبل بوب.' \nالمعلوم: بوب --------------- تيد سيارة مستعملة.",
      "choices": [
        { "id": "a", "textEn": "has sold", "textAr": "باع (مضارع تام معلوم)" },
        { "id": "b", "textEn": "sold", "textAr": "باع (ماضي بسيط)" },
        { "id": "c", "textEn": "is selling", "textAr": "يبيع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'has been sold' is Present Perfect passive; the active form is 'has sold'.",
      "explanationAr": "'has been sold' مضارع تام مجهول، يعود إلى المضارع التام المعلوم 'has sold'.",
      "lexiconTokens": { "sold": "باع", "second-hand": "مستعمل" }
    },
    {
      "id": "u4_g_20",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'You will be given some advice by Dr. Brown.' \nActive: Dr. Brown --------------- you some advice.",
      "promptAr": "تحويل للمعلوم: 'سوف تُعطى نصيحة من قِبل د. براون.' \nالمعلوم: د. براون --------------- بعض النصائح.",
      "choices": [
        { "id": "a", "textEn": "will give", "textAr": "سيعطيك (مستقبل معلوم)" },
        { "id": "b", "textEn": "gives", "textAr": "يعطي" },
        { "id": "c", "textEn": "gave", "textAr": "أعطى" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'will be given' is Future passive; its active form is 'will give'.",
      "explanationAr": "'will be given' مجهول في المستقبل، وأصله في المعلوم 'will give'.",
      "lexiconTokens": { "advice": "نصيحة", "give": "يعطي" }
    },
    {
      "id": "u4_g_21",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'The hotel will be redecorated by a famous designer.' \nActive: A famous designer --------------- the hotel.",
      "promptAr": "تحويل للمعلوم: 'سوف يُعاد تزيين الفندق من قبل مصمم مشهور.' \nالمعلوم: مصمم مشهور --------------- الفندق.",
      "choices": [
        { "id": "a", "textEn": "will redecorate", "textAr": "سيعيد تزيين وتأثيث (مستقبل معلوم)" },
        { "id": "b", "textEn": "redecorated", "textAr": "أعاد تزيين (ماضي)" },
        { "id": "c", "textEn": "is redecorating", "textAr": "يعيد تزيين الآن" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'will be redecorated' is Future passive; its active counterpart is 'will redecorate'.",
      "explanationAr": "'will be redecorated' مجهول، يعود إلى صيغة المعلوم 'will redecorate'.",
      "lexiconTokens": { "redecorated": "مُعاد تزيينه", "designer": "مصمم" }
    },
    {
      "id": "u4_g_22",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'He has been brought up to be polite by his parents.' \nActive: His parents --------------- him up to be polite.",
      "promptAr": "تحويل للمعلوم: 'لقد تمت تربيته على الأدب من قِبل والديه.' \nالمعلوم: والداه --------------- على الأدب.",
      "choices": [
        { "id": "a", "textEn": "have brought", "textAr": "ربّياه (مضارع تام معلوم للجمع)" },
        { "id": "b", "textEn": "has brought", "textAr": "للمفرد" },
        { "id": "c", "textEn": "brought", "textAr": "ماضي بسيط" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'has been brought' is Present Perfect passive; with plural subject 'parents', the active is 'have brought'.",
      "explanationAr": "'has been brought' مضارع تام مجهول، ومع الفاعل الجمع 'parents' يتحول إلى 'have brought'.",
      "lexiconTokens": { "polite": "مهذب", "brought up": "تربى" }
    },
    {
      "id": "u4_g_23",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'That film is being remarked by someone.' \nActive: Someone --------------- that film.",
      "promptAr": "تحويل للمعلوم: 'ذلك الفيلم يتم إبداء الملاحظات عليه حالياً من قِبل شخص ما.' \nالمعلوم: شخص ما --------------- ذلك الفيلم.",
      "choices": [
        { "id": "a", "textEn": "is remarking", "textAr": "يبدي ملاحظاته (مضارع مستمر معلوم)" },
        { "id": "b", "textEn": "remarked", "textAr": "أبدى ملاحظة" },
        { "id": "c", "textEn": "was remarking", "textAr": "كان يبدي ملاحظة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'is being remarked' is Present Continuous passive; the active form is 'is remarking'.",
      "explanationAr": "'is being remarked' مضارع مستمر مجهول، يعود إلى المعلوم 'is remarking'.",
      "lexiconTokens": { "remarking": "يبدي ملاحظة", "film": "فيلم" }
    },
    {
      "id": "u4_g_24",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'The email was sent by the company.' \nActive: The company --------------- the email.",
      "promptAr": "تحويل للمعلوم: 'أُرسل البريد الإلكتروني من قِبل الشركة.' \nالمعلوم: الشركة --------------- البريد الإلكتروني.",
      "choices": [
        { "id": "a", "textEn": "sent", "textAr": "أرسلت (ماضي بسيط معلوم)" },
        { "id": "b", "textEn": "sends", "textAr": "ترسل" },
        { "id": "c", "textEn": "has sent", "textAr": "أرسلت للتو" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'was sent' is Past Simple passive; active form is 'sent'.",
      "explanationAr": "'was sent' ماضي بسيط مجهول، يعود إلى الماضي البسيط المعلوم 'sent'.",
      "lexiconTokens": { "email": "بريد إلكتروني", "sent": "أرسل" }
    },
    {
      "id": "u4_g_25",
      "unit": 4,
      "stream": "grammar",
      "topic": "Passive to Active",
      "promptEn": "Passive: 'The railroad was fixed by the workers after the earthquake.' \nActive: The workers --------------- the railroad after the earthquake.",
      "promptAr": "تحويل للمعلوم: 'أُصلحت السكة الحديدية بواسطة العمال بعد الزلزال.' \nالمعلوم: العمال --------------- السكة الحديدية بعد الزلزال.",
      "choices": [
        { "id": "a", "textEn": "fixed", "textAr": "أصلحوا (ماضي بسيط معلوم)" },
        { "id": "b", "textEn": "fix", "textAr": "يصلحون" },
        { "id": "c", "textEn": "were fixing", "textAr": "كانوا يصلحون" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'was fixed' is Past Simple passive; its active equivalent is 'fixed'.",
      "explanationAr": "'was fixed' ماضي بسيط مجهول، وأصله في المعلوم هو الماضي البسيط 'fixed'.",
      "lexiconTokens": { "railroad": "سكة حديدية", "earthquake": "زلزال", "fixed": "أصلح" }
    },

    // =========================================================================
    // Activity 3: Active vs. Passive Voice Identification (10 Questions)
    // =========================================================================
    {
      "id": "u4_g_26",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The helmsman stopped the boat only a few yards from an enormous iceberg.' This sentence is in the --------------- voice.",
      "promptAr": "'The helmsman stopped the boat only a few yards from an enormous iceberg.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "MODAL CONDITIONAL", "textAr": "شرطي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The subject 'The helmsman' actively performs the action 'stopped' on the object 'the boat'.",
      "explanationAr": "الجملة مبنية للمعلوم لأن الفاعل 'The helmsman' قام بالفعل مباشرة على المفعول به.",
      "lexiconTokens": { "helmsman": "ربان / ملاح", "iceberg": "جبل جليدي" }
    },
    {
      "id": "u4_g_27",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The Titanic sank in 1912.' This sentence is in the --------------- voice.",
      "promptAr": "'The Titanic sank in 1912.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "REPORTED", "textAr": "كلام منقول" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Sank' is an intransitive past active verb with no 'be + V3' structure.",
      "explanationAr": "الجملة مبنية للمعلوم لأن الفعل 'sank' فعل لازم ماضٍ ولا يحتوي على تركيب be + V3.",
      "lexiconTokens": { "sank": "غرقت" }
    },
    {
      "id": "u4_g_28",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'Male passengers were not allowed to get in the lifeboats.' This sentence is in the --------------- voice.",
      "promptAr": "'Male passengers were not allowed to get in the lifeboats.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "b", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "c", "textEn": "IMPERATIVE", "textAr": "أمر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'were not allowed' is formed with 'were + past participle (allowed)', indicating the passive voice.",
      "explanationAr": "الجملة مبنية للمجهول لوجود التركيب 'were + allowed (V3)'.",
      "lexiconTokens": { "passengers": "ركاب", "lifeboats": "قوارب النجاة" }
    },
    {
      "id": "u4_g_29",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'Someone stole my pen.' This sentence is in the --------------- voice.",
      "promptAr": "'Someone stole my pen.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "STATIVE", "textAr": "حالة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Someone' is the subject performing the simple past action 'stole'.",
      "explanationAr": "الجملة مبنية للمعلوم (Active) لأن الفاعل 'Someone' قام بفعل السرقة.",
      "lexiconTokens": { "stole": "سرق" }
    },
    {
      "id": "u4_g_30",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The trip was arranged by the Gordons.' This sentence is in the --------------- voice.",
      "promptAr": "'The trip was arranged by the Gordons.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "b", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "c", "textEn": "CONTINUOUS", "textAr": "مستمر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'was arranged by' contains 'was + V3' along with the agent introduced by 'by', making it passive.",
      "explanationAr": "الجملة مبنية للمجهول لوجود 'was arranged' مع ذكر الفاعل بعد 'by'.",
      "lexiconTokens": { "trip": "رحلة", "arranged": "رُتّبت" }
    },
    {
      "id": "u4_g_31",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'Larry is going to send a letter to Tom.' This sentence is in the --------------- voice.",
      "promptAr": "'Larry is going to send a letter to Tom.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "PAST PERFECT", "textAr": "ماضي تام" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The subject 'Larry' is planning to execute the action 'send' (Active voice).",
      "explanationAr": "الجملة مبنية للمعلوم لأن الفاعل 'Larry' هو من سيقوم بإرسال الرسالة.",
      "lexiconTokens": { "send": "يرسل" }
    },
    {
      "id": "u4_g_32",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'Da Vinci painted the Mona Lisa.' This sentence is in the --------------- voice.",
      "promptAr": "'Da Vinci painted the Mona Lisa.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "SUBJUNCTIVE", "textAr": "افتراضي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The painter 'Da Vinci' is the subject directly performing the action 'painted'.",
      "explanationAr": "الجملة مبنية للمعلوم لأن الفاعل دافنشي مذكور في البداية وقام بفعل الرسم.",
      "lexiconTokens": { "painted": "رسم" }
    },
    {
      "id": "u4_g_33",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The product will be advertised on television.' This sentence is in the --------------- voice.",
      "promptAr": "'The product will be advertised on television.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "b", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "c", "textEn": "HABITUAL", "textAr": "عادة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'will be advertised' is formed using 'will be + V3', denoting future passive.",
      "explanationAr": "الجملة مبنية للمجهول لوجود التركيب 'will be + advertised (V3)'.",
      "lexiconTokens": { "advertised": "يُعلَن عنه", "product": "منتج" }
    },
    {
      "id": "u4_g_34",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The pictures were captured by the photographer.' This sentence is in the --------------- voice.",
      "promptAr": "'The pictures were captured by the photographer.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "b", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "c", "textEn": "STATIVE", "textAr": "حالة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'were captured by' has the structure 'were + V3 + by agent', which is passive.",
      "explanationAr": "الجملة مبنية للمجهول لوجود 'were captured' متبوعة بـ by والفاعل.",
      "lexiconTokens": { "captured": "التقطت", "photographer": "مصور" }
    },
    {
      "id": "u4_g_35",
      "unit": 4,
      "stream": "grammar",
      "topic": "Voice Identification",
      "promptEn": "'The girl twisted her ankle while she was playing basketball.' This sentence is in the --------------- voice.",
      "promptAr": "'The girl twisted her ankle while she was playing basketball.' هذه الجملة في صيغة المبني ---------------",
      "choices": [
        { "id": "a", "textEn": "ACTIVE", "textAr": "للمعلوم (Active)" },
        { "id": "b", "textEn": "PASSIVE", "textAr": "للمجهول (Passive)" },
        { "id": "c", "textEn": "PASSIVE PERFECT", "textAr": "ماضي تام مجهول" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Both clauses ('twisted', 'was playing') are in the active voice with their respective subjects.",
      "explanationAr": "كلا شطري الجملة مبني للمعلوم حيث يقوم الفاعل بالحدث.",
      "lexiconTokens": { "twisted": "لوت", "ankle": "كاحل" }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.grammar = window.COURSE_DATA.grammar || {};
    window.COURSE_DATA.grammar.unit4 = unit4_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit4_grammar };
  }
})();
