/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Life and Nature
 * Section: Vocabulary (Authentic Exam Style)
 * Batch 16: Complete Vocabulary Activities 1–5
 */
(function() {
  const unit4_vocab = [
    // =========================================================================
    // Activity 1: Matching Synonyms (9 Questions)
    // =========================================================================
    {
      "id": "u4_v_01",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'ruin' is ---------------",
      "promptAr": "مرادف كلمة 'ruin' (يدمر / يتلف) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "damage", "textAr": "يضر / يتلف" },
        { "id": "b", "textEn": "save", "textAr": "ينقذ" },
        { "id": "c", "textEn": "steady", "textAr": "يثبت" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Ruin' means to damage something so badly that it loses all its value or usefulness.",
      "explanationAr": "'Ruin' تعني يدمر أو يتلف، ومرادفها 'damage'.",
      "lexiconTokens": { "ruin": "يدمر", "damage": "يتلف", "synonym": "مرادف" }
    },
    {
      "id": "u4_v_02",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'stabilize' is ---------------",
      "promptAr": "مرادف كلمة 'stabilize' (يثبت / يستقر) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "steady", "textAr": "يثبت / يجعله مستقراً" },
        { "id": "b", "textEn": "refuse", "textAr": "يرفض" },
        { "id": "c", "textEn": "damage", "textAr": "يتلف" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Stabilize' means to make something firm, steady, or unlikely to change.",
      "explanationAr": "'Stabilize' تعني يثبت أو يوازن، ومرادفها 'steady'.",
      "lexiconTokens": { "stabilize": "يثبت", "steady": "مستقر / يثبت" }
    },
    {
      "id": "u4_v_03",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'rescue' is ---------------",
      "promptAr": "مرادف كلمة 'rescue' (ينقذ) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "save", "textAr": "ينقذ / يخلص من الخطر" },
        { "id": "b", "textEn": "shortage", "textAr": "نقص" },
        { "id": "c", "textEn": "refuse", "textAr": "يرفض" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Rescue' means to save someone or something from a dangerous or harmful situation.",
      "explanationAr": "'Rescue' تعني يخلص من خطر أو ينقذ، ومرادفها 'save'.",
      "lexiconTokens": { "rescue": "ينقذ", "save": "ينقذ" }
    },
    {
      "id": "u4_v_04",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'scattered' is ---------------",
      "promptAr": "مرادف كلمة 'scattered' (مبعثر / منتشر) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "widespread", "textAr": "واسع الانتشار / مبعثر" },
        { "id": "b", "textEn": "ample", "textAr": "وفير" },
        { "id": "c", "textEn": "damp", "textAr": "رطب" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Scattered' means occurring at widely spaced intervals; widespread.",
      "explanationAr": "'Scattered' تعني مبعثر أو متفرق على نطاق واسع، ومرادفها 'widespread'.",
      "lexiconTokens": { "scattered": "مبعثر", "widespread": "منتشر" }
    },
    {
      "id": "u4_v_05",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'absorb' is ---------------",
      "promptAr": "مرادف كلمة 'absorb' (يمتص / يستوعب) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "take in", "textAr": "يمتص / يتشرب" },
        { "id": "b", "textEn": "refuse", "textAr": "يرفض" },
        { "id": "c", "textEn": "steady", "textAr": "يثبت" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Absorb' means to take in liquid, gas, or other substances.",
      "explanationAr": "'Absorb' تعني يمتص السوائل أو الغازات، ومرادفها 'take in'.",
      "lexiconTokens": { "absorb": "يمتص", "take in": "يمتص" }
    },
    {
      "id": "u4_v_06",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'decline' is ---------------",
      "promptAr": "مرادف كلمة 'decline' (يرفض) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "refuse", "textAr": "يرفض" },
        { "id": "b", "textEn": "save", "textAr": "ينقذ" },
        { "id": "c", "textEn": "ample", "textAr": "وفير" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Decline' means to politely refuse an offer, invitation, or request.",
      "explanationAr": "'Decline' تأتي بمعنى يرفض أدبياً أو يعتذر عن القبول، وتساوي 'refuse'.",
      "lexiconTokens": { "decline": "يرفض", "refuse": "يرفض" }
    },
    {
      "id": "u4_v_07",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'moisture' is ---------------",
      "promptAr": "مرادف كلمة 'moisture' (رطوبة / بلل) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "damp", "textAr": "رطوبة / ندي" },
        { "id": "b", "textEn": "shortage", "textAr": "نقص" },
        { "id": "c", "textEn": "widespread", "textAr": "شائع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Moisture' refers to water or other liquid diffused in a small quantity; dampness.",
      "explanationAr": "'Moisture' تعني الرطوبة أو البلل الخفيف، وتساوي 'damp'.",
      "lexiconTokens": { "moisture": "رطوبة", "damp": "رطب" }
    },
    {
      "id": "u4_v_08",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'poverty' is ---------------",
      "promptAr": "مرادف كلمة 'poverty' (فقر / عوز / شح) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "shortage", "textAr": "نقص / شح في الموارد" },
        { "id": "b", "textEn": "ample", "textAr": "وفرة" },
        { "id": "c", "textEn": "steady", "textAr": "ثابت" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Poverty' implies the state of being extremely poor or having a critical shortage of resources.",
      "explanationAr": "'Poverty' تعني الفقر والشح في الموارد والاحتياجات، وتساوي 'shortage'.",
      "lexiconTokens": { "poverty": "فقر", "shortage": "نقص" }
    },
    {
      "id": "u4_v_09",
      "unit": 4,
      "stream": "vocab",
      "topic": "Synonyms",
      "promptEn": "The synonym of 'adequate' is ---------------",
      "promptAr": "مرادف كلمة 'adequate' (كافٍ / وافٍ) هو ---------------",
      "choices": [
        { "id": "a", "textEn": "ample", "textAr": "وفير / كافٍ تماماً" },
        { "id": "b", "textEn": "damage", "textAr": "تلف" },
        { "id": "c", "textEn": "shortage", "textAr": "نقص" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Adequate' means satisfactory or acceptable in quality or quantity; ample.",
      "explanationAr": "'Adequate' تعني كافٍ ومناسب للغرض، ومرادفها 'ample'.",
      "lexiconTokens": { "adequate": "كافٍ", "ample": "وفير" }
    },

    // =========================================================================
    // Activity 2: Anagrams & Related Terms (7 Questions)
    // =========================================================================
    {
      "id": "u4_v_10",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'eathwer' related to 'climate': ---------------",
      "promptAr": "رتب الحروف 'eathwer' للوصول إلى الكلمة المرتبطة بالمناخ: ---------------",
      "choices": [
        { "id": "a", "textEn": "weather", "textAr": "الطقس" },
        { "id": "b", "textEn": "wither", "textAr": "يذبل" },
        { "id": "c", "textEn": "whether", "textAr": "سواء / إذا" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'eathwer' unjumbles to 'weather', which directly relates to climate.",
      "explanationAr": "الكلمة الصحيحة للطقس المرتبط بالمناخ هي 'weather'.",
      "lexiconTokens": { "weather": "طقس", "climate": "مناخ" }
    },
    {
      "id": "u4_v_11",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'orefst' related to 'wilderness': ---------------",
      "promptAr": "رتب الحروف 'orefst' للوصول إلى كلمة تعني البرية: ---------------",
      "choices": [
        { "id": "a", "textEn": "forest", "textAr": "غابة" },
        { "id": "b", "textEn": "foster", "textAr": "يرعى" },
        { "id": "c", "textEn": "frosty", "textAr": "صقيعي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'orefst' unscrambles to 'forest'.",
      "explanationAr": "الترتيب الصحيح للكلمة المرتبطة بالبرية هو 'forest' (غابة).",
      "lexiconTokens": { "forest": "غابة", "wilderness": "برية" }
    },
    {
      "id": "u4_v_12",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'emairns' related to 'wreckage': ---------------",
      "promptAr": "رتب الحروف 'emairns' للوصول إلى كلمة تدل على حطام الشيء: ---------------",
      "choices": [
        { "id": "a", "textEn": "remains", "textAr": "بقايا / حطام" },
        { "id": "b", "textEn": "marines", "textAr": "مشاة البحرية" },
        { "id": "c", "textEn": "miranes", "textAr": "كلمة غير صحيحة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'emairns' forms the word 'remains', meaning fragments or wreckage.",
      "explanationAr": "الكلمة المطابقة للحطام هي 'remains' (بقايا/حطام).",
      "lexiconTokens": { "remains": "بقايا", "wreckage": "حطام" }
    },
    {
      "id": "u4_v_13",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'armw' related to 'tropical': ---------------",
      "promptAr": "رتب الحروف 'armw' لكلمة مرتبطة بالمناخ الاستوائي: ---------------",
      "choices": [
        { "id": "a", "textEn": "warm", "textAr": "دافئ" },
        { "id": "b", "textEn": "worm", "textAr": "دودة" },
        { "id": "c", "textEn": "warn", "textAr": "يحذر" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'armw' unjumbles to 'warm', characteristic of tropical climates.",
      "explanationAr": "الكلمة المرتبطة بالمناخ الاستوائي هي 'warm' (دافئ).",
      "lexiconTokens": { "warm": "دافئ", "tropical": "استوائي" }
    },
    {
      "id": "u4_v_14",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'dginglo' related to 'shelter': ---------------",
      "promptAr": "رتب الحروف 'dginglo' لكلمة بمعنى المأوى والسكن: ---------------",
      "choices": [
        { "id": "a", "textEn": "lodging", "textAr": "مأوى / مسكن مؤقت" },
        { "id": "b", "textEn": "longing", "textAr": "شوق" },
        { "id": "c", "textEn": "logging", "textAr": "قطع الأشجار" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'dginglo' forms 'lodging', which provides shelter.",
      "explanationAr": "الكلمة المطابقة للمأوى والمسكن هي 'lodging'.",
      "lexiconTokens": { "lodging": "مسكن / مأوى", "shelter": "مأوى" }
    },
    {
      "id": "u4_v_15",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'seningwor' related to 'deterioration': ---------------",
      "promptAr": "رتب الحروف 'seningwor' لكلمة تعني التدهور: ---------------",
      "choices": [
        { "id": "a", "textEn": "worsening", "textAr": "تدهور / زيادة في السوء" },
        { "id": "b", "textEn": "seasoning", "textAr": "تتبيل" },
        { "id": "c", "textEn": "reasoning", "textAr": "استدلال" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'seningwor' unjumbles to 'worsening', synonymous with deterioration.",
      "explanationAr": "الكلمة المرادفة للتدهور هي 'worsening' (تفاقم وتدهور).",
      "lexiconTokens": { "worsening": "تدهور", "deterioration": "تدهور" }
    },
    {
      "id": "u4_v_16",
      "unit": 4,
      "stream": "vocab",
      "topic": "Anagrams",
      "promptEn": "Unscramble the letters 'ansecle' related to 'purify': ---------------",
      "promptAr": "رتب الحروف 'ansecle' لكلمة بمعنى التنقية والتطهير: ---------------",
      "choices": [
        { "id": "a", "textEn": "cleanse", "textAr": "ينظف / يطهر" },
        { "id": "b", "textEn": "cancels", "textAr": "يلغي" },
        { "id": "c", "textEn": "candles", "textAr": "شموع" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'ansecle' forms 'cleanse', meaning to purify.",
      "explanationAr": "الكلمة المطابقة للتنقية والتطهير هي 'cleanse'.",
      "lexiconTokens": { "cleanse": "يطهر", "purify": "ينقي" }
    },

    // =========================================================================
    // Activity 3: Wildlife & Environment Cloze (10 Questions)
    // =========================================================================
    {
      "id": "u4_v_17",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "--------------- results from the removal of trees without sufficient reforestation.",
      "promptAr": "ينتج --------------- عن إزالة وقطع الأشجار دون إعادة زراعة كافية للغابات.",
      "choices": [
        { "id": "a", "textEn": "Deforestation", "textAr": "إزالة الغابات والتصحر" },
        { "id": "b", "textEn": "Photosynthesis", "textAr": "التمثيل الضوئي" },
        { "id": "c", "textEn": "Transpiration", "textAr": "النتح" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Deforestation' is the clearing or thinning of forests by humans.",
      "explanationAr": "'Deforestation' تعني إزالة الغابات وقطع الأشجار الجائر.",
      "lexiconTokens": { "deforestation": "إزالة الغابات", "reforestation": "إعادة تشجير" }
    },
    {
      "id": "u4_v_18",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "The evaporation of water from plants into the atmosphere is called ---------------",
      "promptAr": "عملية تبخر الماء من أوراق النباتات إلى الهواء تسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "transpiration", "textAr": "النتح" },
        { "id": "b", "textEn": "erosion", "textAr": "التعرية" },
        { "id": "c", "textEn": "drought", "textAr": "الجفاف" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Transpiration' is the biological process where moisture is carried through plants to small pores on leaves.",
      "explanationAr": "'Transpiration' (النتح) هي العملية التي يتبخر بها الماء من النبات.",
      "lexiconTokens": { "transpiration": "النتح", "evaporation": "تبخر" }
    },
    {
      "id": "u4_v_19",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "--------------- is a series of enzyme-catalyzed steps for converting light energy into chemical energy.",
      "promptAr": "--------------- هي سلسلة تفاعلات إنزيمية لتحويل الطاقة الضوئية إلى طاقة كيميائية في النبات.",
      "choices": [
        { "id": "a", "textEn": "Photosynthesis", "textAr": "التمثيل الضوئي (البناء الضوئي)" },
        { "id": "b", "textEn": "Deterioration", "textAr": "التدهور" },
        { "id": "c", "textEn": "Erosion", "textAr": "التعرية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Photosynthesis' is the process by which green plants transform light energy into chemical energy.",
      "explanationAr": "'Photosynthesis' هي عملية البناء الضوئي لإنتاج الطاقة في النباتات.",
      "lexiconTokens": { "photosynthesis": "التمثيل الضوئي", "energy": "طاقة" }
    },
    {
      "id": "u4_v_20",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "There are millions of people in this country who are living in ---------------",
      "promptAr": "هناك الملايين من الناس في هذا البلد الذين يعيشون في ---------------",
      "choices": [
        { "id": "a", "textEn": "poverty", "textAr": "الفقر والعوز" },
        { "id": "b", "textEn": "shrubs", "textAr": "شجيرات" },
        { "id": "c", "textEn": "wreckage", "textAr": "حطام" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "People suffering from financial destitution are living in 'poverty'.",
      "explanationAr": "الملايين يعانون من الفقر (poverty).",
      "lexiconTokens": { "poverty": "فقر", "living": "يعيش" }
    },
    {
      "id": "u4_v_21",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "Severe --------------- has affected many agricultural countries in Africa due to lack of rain.",
      "promptAr": "لقد أثر الـ --------------- الحاد على العديد من الدول الزراعية في إفريقيا بسبب انحباس المطر.",
      "choices": [
        { "id": "a", "textEn": "drought", "textAr": "الجفاف" },
        { "id": "b", "textEn": "transpiration", "textAr": "النتح" },
        { "id": "c", "textEn": "photosynthesis", "textAr": "التمثيل الضوئي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Drought' is a prolonged period of abnormally low rainfall.",
      "explanationAr": "'Drought' تعني الجفاف وانقطاع المطر.",
      "lexiconTokens": { "drought": "جفاف", "affected": "أثر على" }
    },
    {
      "id": "u4_v_22",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "The hungry children were --------------- to eat the delicious cakes their mom baked.",
      "promptAr": "كان الأطفال الجياع في حالة --------------- شديدة لأكل الكعك اللذيذ الذي خبزته والدتهم.",
      "choices": [
        { "id": "a", "textEn": "longing", "textAr": "توق وشوق شديد" },
        { "id": "b", "textEn": "wreckage", "textAr": "حطام" },
        { "id": "c", "textEn": "erosion", "textAr": "تعرية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Longing' expresses having a strong, persistent desire or craving.",
      "explanationAr": "'Longing' تعني الشوق والتلهف الشديد.",
      "lexiconTokens": { "longing": "توق / شوق", "cakes": "كعك" }
    },
    {
      "id": "u4_v_23",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "Heavy cigarette smoking had caused the severe --------------- of her health.",
      "promptAr": "تسبب التدخين الشديد للسجائر في الـ --------------- الحاد لصحتها.",
      "choices": [
        { "id": "a", "textEn": "deterioration", "textAr": "تدهور وتراجع" },
        { "id": "b", "textEn": "reforestation", "textAr": "إعادة تشجير" },
        { "id": "c", "textEn": "purification", "textAr": "تنقية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Deterioration' is the process of becoming progressively worse in quality or condition.",
      "explanationAr": "'Deterioration' تعني التدهور والانتكاس الصحي.",
      "lexiconTokens": { "deterioration": "تدهور", "health": "صحة" }
    },
    {
      "id": "u4_v_24",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "There is a huge area behind that mountain covered with many green ---------------",
      "promptAr": "هناك مساحة شاسعة خلف ذلك الجبل مغطاة بالعديد من الـ --------------- الخضراء.",
      "choices": [
        { "id": "a", "textEn": "shrubs", "textAr": "الشجيرات الصغيرة" },
        { "id": "b", "textEn": "droughts", "textAr": "موجات جفاف" },
        { "id": "c", "textEn": "wreckages", "textAr": "حطام" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A 'shrub' is a woody plant smaller than a tree with multiple stems.",
      "explanationAr": "'Shrubs' هي الشجيرات الخضراء الصغيرة.",
      "lexiconTokens": { "shrubs": "شجيرات", "mountain": "جبل" }
    },
    {
      "id": "u4_v_25",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "The --------------- of the sunken ship seemed far away in the sea after the storm.",
      "promptAr": "بدا --------------- السفينة الغارقة بعيداً في عرض البحر بعد العاصفة.",
      "choices": [
        { "id": "a", "textEn": "wreckage", "textAr": "حطام" },
        { "id": "b", "textEn": "poverty", "textAr": "فقر" },
        { "id": "c", "textEn": "transpiration", "textAr": "نتح" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Wreckage' refers to the remains of something that has been destroyed, such as a ship.",
      "explanationAr": "'Wreckage' تعني حطام السفينة المدمرة.",
      "lexiconTokens": { "wreckage": "حطام", "ship": "سفينة" }
    },
    {
      "id": "u4_v_26",
      "unit": 4,
      "stream": "vocab",
      "topic": "Sentence Completion",
      "promptEn": "The --------------- of the coastline by the ocean waves was clearly noticeable.",
      "promptAr": "كانت --------------- الخط الساحلي بفعل أمواج المحيط ملحوظة وواضحة للعيان.",
      "choices": [
        { "id": "a", "textEn": "erosion", "textAr": "التعرية وتآكل الشاطئ" },
        { "id": "b", "textEn": "photosynthesis", "textAr": "التمثيل الضوئي" },
        { "id": "c", "textEn": "longing", "textAr": "الشوق" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Erosion' is the geological process of coastal rock/soil being worn away by sea waves.",
      "explanationAr": "'Erosion' تعني التآكل والتعرية الساحلية بفعل الأمواج.",
      "lexiconTokens": { "erosion": "تعرية", "coastline": "خط ساحلي" }
    },

    // =========================================================================
    // Activity 4: Matching Definitions (8 Questions)
    // =========================================================================
    {
      "id": "u4_v_27",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "To make something known publicly or reveal a secret is to ---------------",
      "promptAr": "أن تجعل الأمر معروفاً أو تكشف سراً يعني أن ---------------",
      "choices": [
        { "id": "a", "textEn": "reveal", "textAr": "يكشف / يعلن عن" },
        { "id": "b", "textEn": "purify", "textAr": "ينقي" },
        { "id": "c", "textEn": "rescue", "textAr": "ينقذ" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Reveal' means to make previously unknown or secret information known.",
      "explanationAr": "'Reveal' تعني يكشف أو يفصح عن الشيء.",
      "lexiconTokens": { "reveal": "يكشف", "known": "معروف" }
    },
    {
      "id": "u4_v_28",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "To free someone or something from imminent danger is to ---------------",
      "promptAr": "تخليص شخص أو شيء من خطر محدق يعني أن ---------------",
      "choices": [
        { "id": "a", "textEn": "rescue", "textAr": "ينقذ" },
        { "id": "b", "textEn": "flood", "textAr": "يفيض" },
        { "id": "c", "textEn": "ash", "textAr": "رماد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "To 'rescue' means to save someone from a dangerous situation.",
      "explanationAr": "'Rescue' تعني ينقذ ويخلص من الخطر.",
      "lexiconTokens": { "rescue": "ينقذ", "danger": "خطر" }
    },
    {
      "id": "u4_v_29",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "The cutting down and clearing away of forests or trees is ---------------",
      "promptAr": "قطع وإزالة الأشجار والغابات بالكامل يسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "deforestation", "textAr": "إزالة الغابات" },
        { "id": "b", "textEn": "purification", "textAr": "التنقية" },
        { "id": "c", "textEn": "atmosphere", "textAr": "الغلاف الجوي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Deforestation' is the large-scale removal of trees from forested areas.",
      "explanationAr": "'Deforestation' تعني إزالة وتدمير الغابات.",
      "lexiconTokens": { "deforestation": "إزالة الغابات", "forests": "غابات" }
    },
    {
      "id": "u4_v_30",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "A great flowing or overflowing of water over dry land is a ---------------",
      "promptAr": "تدفق هائل للمياه وغمرها لليابسة يسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "flood", "textAr": "فيضان" },
        { "id": "b", "textEn": "pit", "textAr": "حفرة" },
        { "id": "c", "textEn": "drought", "textAr": "جفاف" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A 'flood' is an overflowing of a large amount of water beyond its normal confines.",
      "explanationAr": "'Flood' تعني الفيضان المائي.",
      "lexiconTokens": { "flood": "فيضان", "overflowing": "غمر مائي" }
    },
    {
      "id": "u4_v_31",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "The gaseous envelope of air surrounding the earth is the ---------------",
      "promptAr": "الغلاف الغازي والهوائي المحيط بكوكب الأرض يسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "atmosphere", "textAr": "الغلاف الجوي" },
        { "id": "b", "textEn": "vicinity", "textAr": "الجوار" },
        { "id": "c", "textEn": "wilderness", "textAr": "البرية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "The 'atmosphere' is the envelope of gases surrounding the earth.",
      "explanationAr": "'Atmosphere' تعني الغلاف الجوي المحيط بالأرض.",
      "lexiconTokens": { "atmosphere": "الغلاف الجوي", "gaseous": "غازي" }
    },
    {
      "id": "u4_v_32",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "A hole or excavated cavity in the ground is a ---------------",
      "promptAr": "فجوة أو تجويف محفور في الأرض يسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "pit", "textAr": "حفرة" },
        { "id": "b", "textEn": "mound", "textAr": "تلة" },
        { "id": "c", "textEn": "plain", "textAr": "سهل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A 'pit' is a large hollow or hole in the ground.",
      "explanationAr": "'Pit' تعني حفرة أو تجويف في الأرض.",
      "lexiconTokens": { "pit": "حفرة", "ground": "أرض" }
    },
    {
      "id": "u4_v_33",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "To remove contaminants and make clean and safe is to ---------------",
      "promptAr": "إزالة الملوثات وجعل الشيء نقياً وصالحاً يعني أن ---------------",
      "choices": [
        { "id": "a", "textEn": "purify", "textAr": "ينقي / يطهر" },
        { "id": "b", "textEn": "deteriorate", "textAr": "يتدهور" },
        { "id": "c", "textEn": "erode", "textAr": "يتآكل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "To 'purify' means to extract pollutants or make pure.",
      "explanationAr": "'Purify' تعني ينقي الماء أو الهواء من الملوثات.",
      "lexiconTokens": { "purify": "ينقي", "clean": "نظيف" }
    },
    {
      "id": "u4_v_34",
      "unit": 4,
      "stream": "vocab",
      "topic": "Definitions",
      "promptEn": "The powdery gray residue of matter left behind after burning is ---------------",
      "promptAr": "المادة الرمادية المسحوقة المتبقية بعد الاحتراق تسمى ---------------",
      "choices": [
        { "id": "a", "textEn": "ash", "textAr": "رماد" },
        { "id": "b", "textEn": "timber", "textAr": "خشب" },
        { "id": "c", "textEn": "moisture", "textAr": "رطوبة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Ash' is the powdery residue left after the combustion of any substance.",
      "explanationAr": "'Ash' هو الرماد المتبقي بعد احتراق المواد.",
      "lexiconTokens": { "ash": "رماد", "burning": "احتراق" }
    },

    // =========================================================================
    // Activity 5: Multiple Choice Practice (5 Questions)
    // =========================================================================
    {
      "id": "u4_v_35",
      "unit": 4,
      "stream": "vocab",
      "topic": "Contextual Vocabulary",
      "promptEn": "--------------- is considered to be a severe natural disaster caused by prolonged lack of rain.",
      "promptAr": "يعتبر --------------- كارثة طبيعية حادة ناجمة عن انحباس الأمطار لفترات طويلة.",
      "choices": [
        { "id": "a", "textEn": "Drought", "textAr": "الجفاف" },
        { "id": "b", "textEn": "Vicinity", "textAr": "الجوار" },
        { "id": "c", "textEn": "Photosynthesis", "textAr": "التمثيل الضوئي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Drought' is an environmental catastrophe resulting from extreme water scarcity.",
      "explanationAr": "'Drought' هو الجفاف الناتج عن قلة الأمطار.",
      "lexiconTokens": { "drought": "جفاف", "disaster": "كارثة" }
    },
    {
      "id": "u4_v_36",
      "unit": 4,
      "stream": "vocab",
      "topic": "Contextual Vocabulary",
      "promptEn": "In primitive wilderness fishing, you can use a sharpened --------------- to catch fish.",
      "promptAr": "في الصيد البري البدائي، يمكنك استخدام --------------- مشحوذ لصيد الأسماك.",
      "choices": [
        { "id": "a", "textEn": "spear", "textAr": "رمح مدبب" },
        { "id": "b", "textEn": "plain", "textAr": "سهل" },
        { "id": "c", "textEn": "leak", "textAr": "تسريب" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "A 'spear' is a sharpened pole used directly for fishing in streams.",
      "explanationAr": "'Spear' هو الرمح المستخدم في صيد الأسماك بالبرية.",
      "lexiconTokens": { "spear": "رمح", "fish": "سمك" }
    },
    {
      "id": "u4_v_37",
      "unit": 4,
      "stream": "vocab",
      "topic": "Contextual Vocabulary",
      "promptEn": "When I entered my messy room, I found all my clothes --------------- across the floor.",
      "promptAr": "عندما دخلت غرفتي غير المرتبة، وجدت كل ملابسي --------------- في أرجاء المكان.",
      "choices": [
        { "id": "a", "textEn": "scattered", "textAr": "مبعثرة ومنتشرة" },
        { "id": "b", "textEn": "adequate", "textAr": "كافية" },
        { "id": "c", "textEn": "tropical", "textAr": "استوائية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Scattered' means thrown or distributed in an irregular, disorganized manner.",
      "explanationAr": "'Scattered' تعني مبعثرة وغير مرتبة على الأرض.",
      "lexiconTokens": { "scattered": "مبعثر", "clothes": "ملابس" }
    },
    {
      "id": "u4_v_38",
      "unit": 4,
      "stream": "vocab",
      "topic": "Contextual Vocabulary",
      "promptEn": "All the private family secrets were unexpectedly --------------- during the family reunion.",
      "promptAr": "لقد تم --------------- كافة الأسرار العائلية بشكل غير متوقع أثناء اللقاء العائلي.",
      "choices": [
        { "id": "a", "textEn": "revealed", "textAr": "كشفها وفضحها" },
        { "id": "b", "textEn": "rescued", "textAr": "إنقاذها" },
        { "id": "c", "textEn": "conserved", "textAr": "حفظها" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Revealed' means disclosed and made known to others.",
      "explanationAr": "'Revealed' تعني كُشفت للعلن بعد أن كانت سرية.",
      "lexiconTokens": { "revealed": "كُشفت", "secrets": "أسرار" }
    },
    {
      "id": "u4_v_39",
      "unit": 4,
      "stream": "vocab",
      "topic": "Contextual Vocabulary",
      "promptEn": "Many indigenous --------------- live in deep harmony within the Amazon rainforests.",
      "promptAr": "تعيش العديد من الـ --------------- الأصلية في وئام وتناغم داخل غابات الأمازون المطيرة.",
      "choices": [
        { "id": "a", "textEn": "tribes", "textAr": "القبائل" },
        { "id": "b", "textEn": "ecosystems", "textAr": "الأنظمة البيئية" },
        { "id": "c", "textEn": "mounds", "textAr": "التلال الترابية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Indigenous 'tribes' are human communities living traditionally in rainforest regions.",
      "explanationAr": "'Tribes' تعني القبائل السكانية التي تعيش في الغابات المطيرة.",
      "lexiconTokens": { "tribes": "قبائل", "rainforests": "غابات مطيرة" }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.vocab = window.COURSE_DATA.vocab || {};
    window.COURSE_DATA.vocab.unit4 = unit4_vocab;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit4_vocab };
  }
})();
