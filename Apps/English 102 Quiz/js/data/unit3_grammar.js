export const unit3Grammar = [
    // --- ACTIVITY 1: PAST PERFECT & PRESENT PERFECT ---
    {
        id: "u3_g_01",
        question: {
            en: "Choose the correct form: 'Tom __________ his presentation before he went to the office.'",
            ar: "اختر الصيغة الصحيحة: 'توم __________ عرضه التقديمي قبل أن يذهب إلى المكتب.'"
        },
        options: [
            { text: { en: "has prepared", ar: "أعد (مضارع تام)" }, isCorrect: false },
            { text: { en: "prepared", ar: "أعد (ماضي بسيط)" }, isCorrect: false },
            { text: { en: "had prepared", ar: "كان قد أعد (ماضي تام)" }, isCorrect: true },
            { text: { en: "prepares", ar: "يعد (مضارع بسيط)" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Past Perfect ('had prepared') to show that one past action happened before another past action ('went').",
            ar: "نستخدم الماضي التام ('had prepared') للإشارة إلى أن حدثاً في الماضي وقع قبل حدث آخر في الماضي ('went')."
        }
    },
    {
        id: "u3_g_02",
        question: {
            en: "Choose the correct verbs: 'She __________ lunch after she __________ the house.'",
            ar: "اختر الأفعال الصحيحة: 'هي __________ الغداء بعد أن __________ المنزل.'"
        },
        options: [
            { text: { en: "prepared / had cleaned", ar: "أعدت / كانت قد نظفت" }, isCorrect: true },
            { text: { en: "have prepared / had cleaned", ar: "أعدت / كانت قد نظفت (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "prepares / had cleaned", ar: "تعد / كانت قد نظفت" }, isCorrect: false },
            { text: { en: "had prepared / cleaned", ar: "كانت قد أعدت / نظفت" }, isCorrect: false }
        ],
        explanation: {
            en: "The action of cleaning happened first (Past Perfect: 'had cleaned'), followed by preparing lunch (Simple Past: 'prepared').",
            ar: "حدث التنظيف وقع أولاً (ماضي تام: 'had cleaned')، تلاه إعداد الغداء (ماضي بسيط: 'prepared')."
        }
    },
    {
        id: "u3_g_03",
        question: {
            en: "Choose the correct verbs: 'She __________ already __________ the assignment.'",
            ar: "اختر الأفعال الصحيحة: 'لقد __________ الواجب بالفعل.'"
        },
        options: [
            { text: { en: "has / submit", ar: "has / submit" }, isCorrect: false },
            { text: { en: "has / submitted", ar: "has / submitted" }, isCorrect: true },
            { text: { en: "have / submitted", ar: "have / submitted" }, isCorrect: false },
            { text: { en: "had / submit", ar: "had / submit" }, isCorrect: false }
        ],
        explanation: {
            en: "The keyword 'already' is used with the Present Perfect (has/have + past participle). 'She' takes 'has' + 'submitted'.",
            ar: "تُستخدم كلمة 'already' (بالفعل) مع المضارع التام (has/have + التصريف الثالث). الضمير 'She' يأخذ 'has' + 'submitted'."
        }
    },
    {
        id: "u3_g_04",
        question: {
            en: "Choose the correct verbs: '__________ they ever __________ Japan?'",
            ar: "اختر الأفعال الصحيحة: 'هل __________ اليابان من قبل؟'"
        },
        options: [
            { text: { en: "Has / visited", ar: "Has / visited" }, isCorrect: false },
            { text: { en: "Had / been visiting", ar: "Had / been visiting" }, isCorrect: false },
            { text: { en: "Have / visited", ar: "Have / visited" }, isCorrect: true },
            { text: { en: "Do / visit", ar: "Do / visit" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Present Perfect with 'ever' to ask about life experiences up to now. 'They' takes 'Have' + 'visited'.",
            ar: "نستخدم المضارع التام مع 'ever' للسؤال عن تجارب الحياة حتى الآن. الضمير 'They' يأخذ 'Have' + 'visited'."
        }
    },
    {
        id: "u3_g_05",
        question: {
            en: "Choose the correct form: 'She __________ her resignation before her boss fired her.'",
            ar: "اختر الصيغة الصحيحة: 'هي __________ استقالتها قبل أن يطردها مديرها.'"
        },
        options: [
            { text: { en: "has written", ar: "كتبت (مضارع تام)" }, isCorrect: false },
            { text: { en: "had been writing", ar: "كانت تكتب (ماضي تام مستمر)" }, isCorrect: false },
            { text: { en: "had written", ar: "كانت قد كتبت (ماضي تام)" }, isCorrect: true },
            { text: { en: "wrote", ar: "كتبت (ماضي بسيط)" }, isCorrect: false }
        ],
        explanation: {
            en: "The action of writing the resignation was completed before another past action (being fired). Therefore, we use the Past Perfect.",
            ar: "حدث كتابة الاستقالة اكتمل قبل حدث ماضٍ آخر (الطرد). لذلك، نستخدم الماضي التام."
        }
    },

    // --- ACTIVITY 2: CIRCLE IT (MORE PERFECT TENSES) ---
    {
        id: "u3_g_06",
        question: {
            en: "Choose the correct form: 'He __________ three letters so far.'",
            ar: "اختر الصيغة الصحيحة: 'لقد __________ ثلاث رسائل حتى الآن.'"
        },
        options: [
            { text: { en: "wrote", ar: "كتب (ماضي بسيط)" }, isCorrect: false },
            { text: { en: "has written", ar: "كتب (مضارع تام)" }, isCorrect: true },
            { text: { en: "had written", ar: "كان قد كتب (ماضي تام)" }, isCorrect: false },
            { text: { en: "has been writing", ar: "كان يكتب (مضارع تام مستمر)" }, isCorrect: false }
        ],
        explanation: {
            en: "The phrase 'so far' is a strong indicator of the Present Perfect, describing an action completed at an indefinite point in the past up to now.",
            ar: "عبارة 'so far' (حتى الآن) هي مؤشر قوي على المضارع التام، حيث تصف حدثاً اكتمل في نقطة غير محددة في الماضي وحتى الآن."
        }
    },
    {
        id: "u3_g_07",
        question: {
            en: "Choose the correct form: 'My partner __________ his assignment recently.'",
            ar: "اختر الصيغة الصحيحة: 'شريكي __________ واجبه مؤخراً.'"
        },
        options: [
            { text: { en: "has finished", ar: "أنهى (مضارع تام)" }, isCorrect: true },
            { text: { en: "has been finishing", ar: "كان ينهي (مضارع تام مستمر)" }, isCorrect: false },
            { text: { en: "finished", ar: "أنهى (ماضي بسيط)" }, isCorrect: false },
            { text: { en: "had finished", ar: "كان قد أنهى (ماضي تام)" }, isCorrect: false }
        ],
        explanation: {
            en: "The word 'recently' is commonly used with the Present Perfect to talk about a very recent event.",
            ar: "تُستخدم كلمة 'recently' (مؤخراً) عادةً مع المضارع التام للتحدث عن حدث وقع حديثاً جداً."
        }
    },
    {
        id: "u3_g_08",
        question: {
            en: "Choose the correct form: 'My neighbors __________ in the same apartment for five years.'",
            ar: "اختر الصيغة الصحيحة: 'جيراني __________ في نفس الشقة لمدة خمس سنوات.'"
        },
        options: [
            { text: { en: "stayed", ar: "مكثوا (ماضي بسيط)" }, isCorrect: false },
            { text: { en: "have stayed", ar: "مكثوا (مضارع تام)" }, isCorrect: true },
            { text: { en: "stay", ar: "يمكثون (مضارع بسيط)" }, isCorrect: false },
            { text: { en: "had stayed", ar: "كانوا قد مكثوا (ماضي تام)" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Present Perfect with 'for' to describe an action that started in the past and continues into the present.",
            ar: "نستخدم المضارع التام مع 'for' (لمدة) لوصف حدث بدأ في الماضي ويستمر حتى الحاضر."
        }
    },
    {
        id: "u3_g_09",
        question: {
            en: "Choose the correct verbs: 'I __________ the text carefully before I __________ the questions.'",
            ar: "اختر الأفعال الصحيحة: 'أنا __________ النص بعناية قبل أن __________ الأسئلة.'"
        },
        options: [
            { text: { en: "have read / answered", ar: "قرأت / أجبت (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "had read / answered", ar: "كنت قد قرأت / أجبت" }, isCorrect: true },
            { text: { en: "has read / have answered", ar: "قرأ / أجبت (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "read / had answered", ar: "قرأت / كنت قد أجبت" }, isCorrect: false }
        ],
        explanation: {
            en: "The action of reading happened first (Past Perfect: 'had read'). The action of answering happened second (Simple Past: 'answered').",
            ar: "حدث القراءة وقع أولاً (ماضي تام: 'had read'). حدث الإجابة وقع ثانياً (ماضي بسيط: 'answered')."
        }
    }
];
