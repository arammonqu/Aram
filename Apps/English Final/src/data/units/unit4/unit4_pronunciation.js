/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Life and Nature
 * Section: Pronunciation (Authentic Exam Style)
 * Batch 18: English Intonation Patterns (Falling vs. Rising Intonation)
 */
(function() {
  const unit4_pronunciation = [
    // =========================================================================
    // Part 1: Intonation Rules & Theoretical Concepts (6 Questions)
    // =========================================================================
    {
      "id": "u4_p_01",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "The standard and most common type of intonation in English is ---------------",
      "promptAr": "النوع القياسي والأكثر شيوعاً لنبرة الصوت (Intonation) في اللغة الإنجليزية هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "النبرة الهابطة (Falling Intonation)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "النبرة الصاعدة (Rising Intonation)" },
        { "id": "c", "textEn": "High Pitch Monotone", "textAr": "نبرة رتيبة حادة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Standard falling intonation is the most common type of intonation in English, used in statements, Wh- questions, and commands.",
      "explanationAr": "النبرة الهابطة (Falling Intonation) هي الأكثر شيوعاً في اللغة الإنجليزية وتُستخدم في الجمل الخبرية وأسئلة أدوات الاستفهام والأوامر.",
      "lexiconTokens": { "intonation": "نبرة الصوت", "falling": "هابطة", "standard": "قياسي" }
    },
    {
      "id": "u4_p_02",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "Declarative statements in English normally end with --------------- intonation.",
      "promptAr": "تنتهي الجمل الخبرية والتقريرية (Declarative Statements) عادة بنبرة ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling", "textAr": "هابطة (Falling)" },
        { "id": "b", "textEn": "Rising", "textAr": "صاعدة (Rising)" },
        { "id": "c", "textEn": "Staccato", "textAr": "متقطعة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Declarative statements indicate completeness and conclusion, so they conclude with a falling pitch.",
      "explanationAr": "الجمل الخبرية تعبر عن اكتمال الفكرة وتأكيدها، ولذلك تنتهي دائماً بنبرة صوت هابطة.",
      "lexiconTokens": { "declarative": "خبري", "statements": "جمل تقريرية" }
    },
    {
      "id": "u4_p_03",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "Wh- questions (e.g. Where, When, What, Who) typically take --------------- intonation.",
      "promptAr": "تأخذ أسئلة أدوات الاستفهام (Wh- questions) نبرة صوت ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling", "textAr": "هابطة (Falling)" },
        { "id": "b", "textEn": "Rising", "textAr": "صاعدة (Rising)" },
        { "id": "c", "textEn": "Vocal Fry", "textAr": "نبرة غير واضحة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Information questions starting with Wh- question words standardly use falling intonation at the end.",
      "explanationAr": "أسئلة الاستعلام التي تبدأ بأداة استفهام (Wh-) تنتهي بنبرة هابطة في الإنجليزية القياسية.",
      "lexiconTokens": { "questions": "أسئلة", "falling": "هابطة" }
    },
    {
      "id": "u4_p_04",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "General Yes/No questions normally end with --------------- intonation.",
      "promptAr": "تنتهي الأسئلة العامة التي يجاب عنها بنعم أو لا (Yes/No Questions) بنبرة ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising", "textAr": "صاعدة (Rising)" },
        { "id": "b", "textEn": "Falling", "textAr": "هابطة (Falling)" },
        { "id": "c", "textEn": "Flat", "textAr": "مستوية بدون تغيير" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Yes/No questions inquire about confirmation or unknown facts and characteristically rise in pitch at the end.",
      "explanationAr": "أسئلة (Yes/No) تستفهم عن صحة معلومة، ولذلك ترتفع نبرة الصوت في نهايتها (Rising).",
      "lexiconTokens": { "rising": "صاعدة", "questions": "أسئلة" }
    },
    {
      "id": "u4_p_05",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "Rising intonation is frequently used to express ---------------",
      "promptAr": "تُستخدم النبرة الصاعدة (Rising intonation) في اللغة للتعبير عن ---------------",
      "choices": [
        { "id": "a", "textEn": "NON-FINALITY, INCOMPLETENESS, OR SURPRISE", "textAr": "عدم اكتمال الكلام، الدهشة، أو الاستفهام" },
        { "id": "b", "textEn": "FINAL DEFINITIVE COMMANDS", "textAr": "الأوامر النهائية الحاسمة" },
        { "id": "c", "textEn": "SCIENTIFIC CERTAINTY", "textAr": "اليقين العلمي التام" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Rising intonation conveys that the thought is incomplete, open-ended, or expressive of doubt/surprise.",
      "explanationAr": "تعبر النبرة الصاعدة عن أن الحديث لم يكتمل بعد، أو تظهر المفاجأة والشك والتردد.",
      "lexiconTokens": { "surprise": "مفاجأة", "incompleteness": "عدم اكتمال" }
    },
    {
      "id": "u4_p_06",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Rules",
      "promptEn": "When addressing a person directly at the start of a remark (Direct Address), the intonation on their name is ---------------",
      "promptAr": "عند مناداة شخص مباشرة في بداية الكلام (Direct Address)، تكون نبرة الصوت على اسمه ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising", "textAr": "صاعدة (Rising) لجذب الانتباه" },
        { "id": "b", "textEn": "Falling", "textAr": "هابطة" },
        { "id": "c", "textEn": "Silent", "textAr": "صامتة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Direct address uses rising intonation to alert the listener and keep the channel of communication open.",
      "explanationAr": "المناداة المباشرة (Direct Address) تأخذ نبرة صاعدة لتنبيه المخاطب.",
      "lexiconTokens": { "address": "مناداة / مخاطبة", "rising": "صاعدة" }
    },

    // =========================================================================
    // Part 2: Activity 1 & Course Examples Identification (12 Questions)
    // =========================================================================
    {
      "id": "u4_p_07",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Where do you live?' The intonation pattern in this sentence is ---------------",
      "promptAr": "'?Where do you live' نمط نبرة الصوت في هذه الجملة هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Monotone", "textAr": "نبرة رتيبة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "This is a Wh- question, so it takes a standard falling intonation.",
      "explanationAr": "هذا سؤال يبدأ بأداة استفهام (Where)، ولذلك يأخذ نبرة هابطة (Falling).",
      "lexiconTokens": { "live": "يعيش", "where": "أين" }
    },
    {
      "id": "u4_p_08",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'How much is it?' The intonation pattern used in this question is ---------------",
      "promptAr": "'?How much is it' نمط نبرة الصوت المستخدم في هذا السؤال هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Question Tag Rise", "textAr": "نبرة سؤال مذيل" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'How much is it?' is an information Wh-/How question, requiring falling intonation.",
      "explanationAr": "سؤال عن السعر يبدأ بـ How much، ويأخذ نبرة هابطة في نهايته.",
      "lexiconTokens": { "how much": "كم السعر", "falling": "هابطة" }
    },
    {
      "id": "u4_p_09",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'We live in Moscow.' The intonation pattern in this statement is ---------------",
      "promptAr": "'.We live in Moscow' نمط نبرة الصوت في هذه الجملة هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Hesitation Rise", "textAr": "نبرة تردد" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "This is a standard affirmative declarative statement; it uses falling intonation.",
      "explanationAr": "هذه جملة خبرية مثبتة، ونهايتها تأخذ نبرة هابطة تعبر عن اكتمال المعنى.",
      "lexiconTokens": { "statement": "جملة خبرية" }
    },
    {
      "id": "u4_p_10",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'I haven't read this book.' The intonation pattern in this sentence is ---------------",
      "promptAr": "'.I haven't read this book' نمط نبرة الصوت في هذه الجملة المنفية هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Incomplete Rise", "textAr": "نبرة غير مكتملة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Negative declarative statements take standard falling intonation.",
      "explanationAr": "الجمل الخبرية المنفية تأخذ النبرة الهابطة القياسية في نهايتها.",
      "lexiconTokens": { "read": "يقرأ", "book": "كتاب" }
    },
    {
      "id": "u4_p_11",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Who wants to go there?' The intonation pattern in this structure is ---------------",
      "promptAr": "'?Who wants to go there' نمط نبرة الصوت في هذا التركيب هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Surprise Pitch", "textAr": "نبرة تعجب" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "This is a Wh- question asking for information, so it takes falling intonation.",
      "explanationAr": "سؤال يبدأ بـ 'Who' وهو من أسئلة المعلومات التي تنتهي بنبرة هابطة.",
      "lexiconTokens": { "who": "من", "wants": "يريد" }
    },
    {
      "id": "u4_p_12",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Tom, could you help me, please?' The intonation applied to 'Tom' is ---------------",
      "promptAr": "'?Tom, could you help me, please' نبرة الصوت المطبقة على اسم المنادى 'Tom' هي ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "b", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "c", "textEn": "Monotone", "textAr": "نبرة مستوية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Tom' is a direct address at the start of a sentence, which takes a rising tone.",
      "explanationAr": "المناداة المباشرة 'Tom' في أول الكلام تأخذ نبرة صاعدة لجلب الانتباه.",
      "lexiconTokens": { "help": "يساعد", "please": "من فضلك" }
    },
    {
      "id": "u4_p_13",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Was she glad to see him?' The intonation pattern in this sentence is ---------------",
      "promptAr": "'?Was she glad to see him' نمط نبرة الصوت في هذه الجملة هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "b", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "c", "textEn": "Exclamatory Fall", "textAr": "هبوط تعجبي" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Was she glad to see him?' is a Yes/No question, which takes rising intonation at the end.",
      "explanationAr": "هذا سؤال نعم/لا يبدأ بالفعل المساعد 'Was'، ولذلك يأخذ نبرة صاعدة (Rising).",
      "lexiconTokens": { "glad": "مسرورة", "see": "يرى" }
    },
    {
      "id": "u4_p_14",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Do you go there often?' The intonation pattern used is ---------------",
      "promptAr": "'?Do you go there often' نمط نبرة الصوت المستخدم هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "b", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "c", "textEn": "Level Pitch", "textAr": "نبرة محايدة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Questions beginning with auxiliary 'Do/Does/Did' expect a Yes/No answer and use rising intonation.",
      "explanationAr": "سؤال نعم/لا يبدأ بـ 'Do'، ونهايته ترتفع فيها نبرة الصوت (Rising).",
      "lexiconTokens": { "often": "غالباً", "there": "هناك" }
    },
    {
      "id": "u4_p_15",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'They left for London yesterday.' The intonation pattern in this sentence is ---------------",
      "promptAr": "'.They left for London yesterday' نمط نبرة الصوت في هذه الجملة هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Unfinished Rise", "textAr": "نبرة غير مكتملة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Declarative factual sentences conclude with falling intonation.",
      "explanationAr": "الجمل الخبرية التي تصف أحداثاً واقعية تنتهي بنبرة هابطة.",
      "lexiconTokens": { "left": "غادروا", "yesterday": "أمس" }
    },
    {
      "id": "u4_p_16",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'Sir, you dropped your notebook.' The intonation on 'Sir' is ---------------",
      "promptAr": "'.Sir, you dropped your notebook' نبرة الصوت على كلمة النداء 'Sir' هي ---------------",
      "choices": [
        { "id": "a", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "b", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "c", "textEn": "Whisper", "textAr": "همس" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'Sir' is a polite direct address, which takes a rising tone to engage the person's attention.",
      "explanationAr": "'Sir' نداء مباشر في بداية الكلام، ويأخذ نبرة صاعدة لجلب انتباه الشخص.",
      "lexiconTokens": { "dropped": "أسقطت", "notebook": "دفتر ملاحظات" }
    },
    {
      "id": "u4_p_17",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'What are you reading?' The intonation pattern in this question is ---------------",
      "promptAr": "'?What are you reading' نمط نبرة الصوت في هذا السؤال هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Non-final Tone", "textAr": "نبرة غير تامة" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "'What are you reading?' is a Wh- question, so it ends with falling intonation.",
      "explanationAr": "سؤال يبدأ بأداة الاستفهام 'What'، ونهايته تكون بنبرة هابطة.",
      "lexiconTokens": { "reading": "قراءة", "what": "ماذا" }
    },
    {
      "id": "u4_p_18",
      "unit": 4,
      "stream": "pronunciation",
      "topic": "Intonation Identification",
      "promptEn": "'I'd like a sandwich and a cup of coffee, please.' The final intonation pattern on this complete request is ---------------",
      "promptAr": "'.I'd like a sandwich and a cup of coffee, please' نمط نبرة الصوت الختامي في هذا الطلب التام هو ---------------",
      "choices": [
        { "id": "a", "textEn": "Falling Intonation", "textAr": "نبرة هابطة (Falling)" },
        { "id": "b", "textEn": "Rising Intonation", "textAr": "نبرة صاعدة (Rising)" },
        { "id": "c", "textEn": "Question Pitch", "textAr": "نبرة استفهامية" },
        { "id": "d", "textEn": "none", "textAr": "لا شيء مما ذكر" }
      ],
      "correctChoiceId": "a",
      "explanationEn": "Polite requests phrased as statements ('I'd like...') end with a definitive falling intonation.",
      "explanationAr": "الطلبات المؤدبة المصاغة كجمل خبرية تنتهي بنبرة هابطة توضح اكتمال الطلب.",
      "lexiconTokens": { "sandwich": "شطيرة", "coffee": "قهوة" }
    }
  ];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.pronunciation = window.COURSE_DATA.pronunciation || {};
    window.COURSE_DATA.pronunciation.unit4 = unit4_pronunciation;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit4_pronunciation };
  }
})();
