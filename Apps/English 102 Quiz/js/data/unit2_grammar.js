export const unit2Grammar = [
    // --- ACTIVITY 1: FOOD AND NUTRITION ---
    {
        id: "u2_g_01",
        question: {
            en: "Choose the correct form: 'I __________ a number of books on nutrition last week.'",
            ar: "اختر الصيغة الصحيحة: 'أنا __________ عدداً من الكتب عن التغذية الأسبوع الماضي.'"
        },
        options: [
            { text: { en: "was buying", ar: "كنت أشتري" }, isCorrect: false },
            { text: { en: "bought", ar: "اشتريت" }, isCorrect: true },
            { text: { en: "buying", ar: "يشتري" }, isCorrect: false },
            { text: { en: "buy", ar: "أشتري" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Simple Past ('bought') because 'last week' indicates an action that started and ended at a specific point in the past.",
            ar: "نستخدم الماضي البسيط ('bought') لأن عبارة 'الأسبوع الماضي' تشير إلى حدث بدأ وانتهى في نقطة محددة في الماضي."
        }
    },
    {
        id: "u2_g_02",
        question: {
            en: "Choose the correct form: 'There __________ a shortage of food in some countries after the war.'",
            ar: "اختر الصيغة الصحيحة: '__________ نقص في الغذاء في بعض البلدان بعد الحرب.'"
        },
        options: [
            { text: { en: "were", ar: "كانوا" }, isCorrect: false },
            { text: { en: "was being", ar: "كان يكون" }, isCorrect: false },
            { text: { en: "was", ar: "كان" }, isCorrect: true },
            { text: { en: "is", ar: "يكون" }, isCorrect: false }
        ],
        explanation: {
            en: "We use 'was' because 'shortage' is a singular noun and the sentence refers to a completed past period ('after the war').",
            ar: "نستخدم 'was' لأن 'shortage' (نقص) اسم مفرد والجملة تشير إلى فترة ماضية مكتملة ('بعد الحرب')."
        }
    },
    {
        id: "u2_g_03",
        question: {
            en: "Choose the correct form: 'She __________ uncontrollably when I came in.'",
            ar: "اختر الصيغة الصحيحة: 'هي __________ بشكل لا يمكن السيطرة عليه عندما دخلتُ.'"
        },
        options: [
            { text: { en: "ate", ar: "أكلت" }, isCorrect: false },
            { text: { en: "was eating", ar: "كانت تأكل" }, isCorrect: true },
            { text: { en: "were eating", ar: "كانوا يأكلون" }, isCorrect: false },
            { text: { en: "eating", ar: "تأكل" }, isCorrect: false }
        ],
        explanation: {
            en: "The Past Continuous ('was eating') is used for a past action that was in progress when it was interrupted by another action ('came in').",
            ar: "يُستخدم الماضي المستمر ('was eating') لحدث ماضٍ كان مستمراً عندما قاطعه حدث آخر ('دخلت')."
        }
    },
    {
        id: "u2_g_04",
        question: {
            en: "Choose the correct verbs: 'She __________ her way of dealing with emotions as soon as she __________ the consequences of binge eating.'",
            ar: "اختر الأفعال الصحيحة: 'لقد __________ طريقتها في التعامل مع المشاعر بمجرد أن __________ عواقب الإفراط في الأكل.'"
        },
        options: [
            { text: { en: "was changing / realized", ar: "كانت تغير / أدركت" }, isCorrect: false },
            { text: { en: "changed / was realizing", ar: "غيرت / كانت تدرك" }, isCorrect: false },
            { text: { en: "was changing / was realizing", ar: "كانت تغير / كانت تدرك" }, isCorrect: false },
            { text: { en: "changed / realized", ar: "غيرت / أدركت" }, isCorrect: true }
        ],
        explanation: {
            en: "'As soon as' links two completed, consecutive actions in the past. Therefore, both verbs must be in the Simple Past.",
            ar: "عبارة 'As soon as' (بمجرد أن) تربط بين حدثين مكتملين ومتتاليين في الماضي. لذلك، يجب أن يكون كلا الفعلين في الماضي البسيط."
        }
    },
    {
        id: "u2_g_05",
        question: {
            en: "Choose the correct verbs: 'She __________ on her favorite binge food when her mother __________ in.'",
            ar: "اختر الأفعال الصحيحة: 'هي __________ في طعامها المفضل عندما __________ والدتها.'"
        },
        options: [
            { text: { en: "was gorging / came", ar: "كانت تلتهم / دخلت" }, isCorrect: true },
            { text: { en: "gorged / was coming", ar: "التهتمت / كانت تدخل" }, isCorrect: false },
            { text: { en: "was gorging / was coming", ar: "كانت تلتهم / كانت تدخل" }, isCorrect: false },
            { text: { en: "gorged / came", ar: "التهتمت / دخلت" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Past Continuous ('was gorging') for the action in progress, and the Simple Past ('came') for the short action that interrupted it.",
            ar: "نستخدم الماضي المستمر ('was gorging') للحدث المستمر، والماضي البسيط ('came') للحدث القصير الذي قاطعه."
        }
    },

    // --- ACTIVITY 2: SOCIAL PHOBIAS ---
    {
        id: "u2_g_06",
        question: {
            en: "Choose the correct form: 'Although Maria was a lovely person, she __________ a continuous fear of embarrassment.'",
            ar: "اختر الصيغة الصحيحة: 'على الرغم من أن ماريا كانت شخصاً لطيفاً، إلا أنه __________ لديها خوف مستمر من الإحراج.'"
        },
        options: [
            { text: { en: "was having", ar: "كان لديها (مستمر)" }, isCorrect: false },
            { text: { en: "have", ar: "تملك" }, isCorrect: false },
            { text: { en: "had", ar: "كان لديها (بسيط)" }, isCorrect: true },
            { text: { en: "were having", ar: "كان لديهم" }, isCorrect: false }
        ],
        explanation: {
            en: "'Have' here is a stative verb meaning possession or experiencing a condition. Stative verbs are not used in the continuous form, so we use the Simple Past ('had').",
            ar: "الفعل 'Have' هنا هو فعل حالة يعني الامتلاك أو المرور بحالة. أفعال الحالة لا تستخدم في صيغة الاستمرار، لذا نستخدم الماضي البسيط ('had')."
        }
    },
    {
        id: "u2_g_07",
        question: {
            en: "Choose the correct form: 'Sam __________ Maria a book about social phobia yesterday.'",
            ar: "اختر الصيغة الصحيحة: '__________ سام لماريا كتاباً عن الرهاب الاجتماعي أمس.'"
        },
        options: [
            { text: { en: "was giving", ar: "كان يعطي" }, isCorrect: false },
            { text: { en: "gave", ar: "أعطى" }, isCorrect: true },
            { text: { en: "gives", ar: "يعطي" }, isCorrect: false },
            { text: { en: "were giving", ar: "كانوا يعطون" }, isCorrect: false }
        ],
        explanation: {
            en: "'Yesterday' indicates a completed past action. The Simple Past of 'give' is 'gave'.",
            ar: "كلمة 'Yesterday' (أمس) تشير إلى حدث ماضٍ مكتمل. الماضي البسيط من 'give' هو 'gave'."
        }
    },
    {
        id: "u2_g_08",
        question: {
            en: "Choose the correct verbs: 'Before she __________ the presentation, Sam __________ her a lot.'",
            ar: "اختر الأفعال الصحيحة: 'قبل أن __________ العرض التقديمي، __________ سام كثيراً.'"
        },
        options: [
            { text: { en: "was doing / encouraged", ar: "كانت تقوم / شجعها" }, isCorrect: false },
            { text: { en: "did / was encouraging", ar: "قامت / كان يشجعها" }, isCorrect: false },
            { text: { en: "did / encouraged", ar: "قامت / شجعها" }, isCorrect: true },
            { text: { en: "was doing / was encouraging", ar: "كانت تقوم / كان يشجعها" }, isCorrect: false }
        ],
        explanation: {
            en: "Both actions represent sequential or completed past events rather than a background interruption, so both take the Simple Past.",
            ar: "كلا الحدثين يمثلان أحداثاً ماضية متتالية أو مكتملة بدلاً من حدث يقطع حدثاً مستمراً، لذلك يأخذ كلاهما الماضي البسيط."
        }
    },
    {
        id: "u2_g_09",
        question: {
            en: "Choose the correct sequence of verbs: 'Maria simply __________ on the present moment, __________ a deep breath and __________ her presentation.'",
            ar: "اختر التسلسل الصحيح للأفعال: 'ببساطة __________ ماريا على اللحظة الحالية، و__________ نفساً عميقاً، و__________ عرضها التقديمي.'"
        },
        options: [
            { text: { en: "was focusing / took / continued", ar: "كانت تركز / أخذت / تابعت" }, isCorrect: false },
            { text: { en: "focused / took / continued", ar: "ركزت / أخذت / تابعت" }, isCorrect: true },
            { text: { en: "focused / was taking / was continuing", ar: "ركزت / كانت تأخذ / كانت تتابع" }, isCorrect: false },
            { text: { en: "was focusing / was taking / was continuing", ar: "كانت تركز / كانت تأخذ / كانت تتابع" }, isCorrect: false }
        ],
        explanation: {
            en: "When describing a sequence of consecutive actions completed in the past, we use the Simple Past for all of them.",
            ar: "عند وصف سلسلة من الإجراءات المتتالية المكتملة في الماضي، نستخدم الماضي البسيط لجميعها."
        }
    },
    {
        id: "u2_g_10",
        question: {
            en: "Choose the correct verbs: 'When Maria __________ the presentation, she __________ proud of herself.'",
            ar: "اختر الأفعال الصحيحة: 'عندما __________ ماريا من العرض التقديمي، __________ بالفخر بنفسها.'"
        },
        options: [
            { text: { en: "was finishing / felt", ar: "كانت تنهي / شعرت" }, isCorrect: false },
            { text: { en: "finished / felt", ar: "أنهت / شعرت" }, isCorrect: true },
            { text: { en: "finished / was feeling", ar: "أنهت / كانت تشعر" }, isCorrect: false },
            { text: { en: "was finishing / was feeling", ar: "كانت تنهي / كانت تشعر" }, isCorrect: false }
        ],
        explanation: {
            en: "Both actions are completed states/events. 'Finished' is the action, and 'felt' is the resulting completed state.",
            ar: "كلا الحدثين هما حالات/أحداث مكتملة. 'أنهت' هو الفعل، و'شعرت' هو الحالة المكتملة الناتجة عنه."
        }
    },

    // --- ACTIVITY 3: CHOOSING THE CORRECT TENSE ---
    {
        id: "u2_g_11",
        question: {
            en: "Choose the correct tense: 'Jim and Rona __________ two years ago after having a long friendship.'",
            ar: "اختر الزمن الصحيح: 'جيم ورونا __________ قبل عامين بعد صداقة طويلة.'"
        },
        options: [
            { text: { en: "married", ar: "تزوجا" }, isCorrect: true },
            { text: { en: "marry", ar: "يتزوجان" }, isCorrect: false },
            { text: { en: "were marrying", ar: "كانا يتزوجان" }, isCorrect: false },
            { text: { en: "was marrying", ar: "كان يتزوج" }, isCorrect: false }
        ],
        explanation: {
            en: "The time marker 'two years ago' indicates a specific completed event in the past, so we use the Simple Past ('married').",
            ar: "العلامة الزمنية 'قبل عامين' تشير إلى حدث مكتمل محدد في الماضي، لذا نستخدم الماضي البسيط ('married')."
        }
    },
    {
        id: "u2_g_12",
        question: {
            en: "Choose the correct verb: 'Jim __________ to hide his intense feelings when he was talking to his parents.'",
            ar: "اختر الفعل الصحيح: 'جيم __________ إخفاء مشاعره القوية عندما كان يتحدث إلى والديه.'"
        },
        options: [
            { text: { en: "try", ar: "يحاول" }, isCorrect: false },
            { text: { en: "were trying", ar: "كانوا يحاولون" }, isCorrect: false },
            { text: { en: "is trying", ar: "يحاول (الآن)" }, isCorrect: false },
            { text: { en: "was trying", ar: "كان يحاول" }, isCorrect: true }
        ],
        explanation: {
            en: "The Past Continuous ('was trying') is used because the action was happening at the same time as another past continuous action ('was talking').",
            ar: "يُستخدم الماضي المستمر ('was trying') لأن الحدث كان يحدث في نفس وقت حدث ماضٍ مستمر آخر ('was talking')."
        }
    },
    {
        id: "u2_g_13",
        question: {
            en: "Choose the correct tense: 'My problems at school __________ my life miserable when I was at school.'",
            ar: "اختر الزمن الصحيح: 'مشاكلي في المدرسة __________ حياتي بائسة عندما كنت في المدرسة.'"
        },
        options: [
            { text: { en: "were making", ar: "كانت تجعل" }, isCorrect: true },
            { text: { en: "was making", ar: "كانت تجعل (للمفرد)" }, isCorrect: false },
            { text: { en: "make", ar: "تجعل" }, isCorrect: false },
            { text: { en: "is making", ar: "تجعل (الآن)" }, isCorrect: false }
        ],
        explanation: {
            en: "The subject 'problems' is plural, and the action was an ongoing background situation in the past, so we use the Past Continuous ('were making').",
            ar: "الفاعل 'problems' (مشاكل) جمع، والحدث كان موقفاً مستمراً في الماضي، لذا نستخدم الماضي المستمر ('were making')."
        }
    },
    {
        id: "u2_g_14",
        question: {
            en: "Choose the correct tense: 'College __________ a big leap forward, but it was very stressful.'",
            ar: "اختر الزمن الصحيح: 'الكلية __________ قفزة كبيرة إلى الأمام، لكنها كانت مرهقة جداً.'"
        },
        options: [
            { text: { en: "were", ar: "كانوا" }, isCorrect: false },
            { text: { en: "was being", ar: "كانت تكون" }, isCorrect: false },
            { text: { en: "was", ar: "كانت" }, isCorrect: true },
            { text: { en: "is", ar: "تكون" }, isCorrect: false }
        ],
        explanation: {
            en: "We use 'was' because 'college' is singular, and it refers to a completed state in the past. 'Be' verbs are rarely used in continuous form.",
            ar: "نستخدم 'was' لأن 'الكلية' مفرد، وهي تشير إلى حالة مكتملة في الماضي. نادراً ما تُستخدم أفعال الكينونة في صيغة الاستمرار."
        }
    },
    {
        id: "u2_g_15",
        question: {
            en: "Choose the correct tense: 'Although I __________ in some ways, I also had many strengths.'",
            ar: "اختر الزمن الصحيح: 'على الرغم من أنني __________ في بعض النواحي، إلا أنه كان لدي أيضاً العديد من نقاط القوة.'"
        },
        options: [
            { text: { en: "was struggled", ar: "تمت معاناتي (مبني للمجهول)" }, isCorrect: false },
            { text: { en: "were struggling", ar: "كانوا يعانون" }, isCorrect: false },
            { text: { en: "was struggling", ar: "كنت أعاني" }, isCorrect: true },
            { text: { en: "struggle", ar: "أعاني" }, isCorrect: false }
        ],
        explanation: {
            en: "The action describes an ongoing state of difficulty over a past period alongside having strengths. 'I' takes 'was' in the past continuous.",
            ar: "الحدث يصف حالة مستمرة من الصعوبة خلال فترة ماضية جنباً إلى جنب مع وجود نقاط قوة. الضمير 'I' يأخذ 'was' في الماضي المستمر."
        }
    },
    {
        id: "u2_g_16",
        question: {
            en: "Choose the correct sequence: 'When they were at school together, they shared a lot of experiences; they __________, cried and played together.'",
            ar: "اختر التسلسل الصحيح: 'عندما كانوا في المدرسة معاً، شاركوا الكثير من التجارب؛ لقد __________، وبكوا ولعبوا معاً.'"
        },
        options: [
            { text: { en: "were laughing", ar: "كانوا يضحكون" }, isCorrect: false },
            { text: { en: "laugh", ar: "يضحكون" }, isCorrect: false },
            { text: { en: "laughed", ar: "ضحكوا" }, isCorrect: true },
            { text: { en: "was laughing", ar: "كان يضحك" }, isCorrect: false }
        ],
        explanation: {
            en: "When listing consecutive or habitual completed actions in the past (laughed, cried, played), we keep them all in the Simple Past.",
            ar: "عند سرد أحداث متتالية أو اعتيادية مكتملة في الماضي (ضحكوا، بكوا، لعبوا)، نبقيها جميعاً في صيغة الماضي البسيط."
        }
    },

    // --- ACTIVITY 4: WHICH SENTENCE IS CORRECT? ---
    {
        id: "u2_g_17",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She was recognizing the potential for error in the method being used.", ar: "كانت تدرك احتمالية الخطأ... (مستمر)" }, isCorrect: false },
            { text: { en: "She recognized the potential for error in the method being used.", ar: "أدركت احتمالية الخطأ في الطريقة المستخدمة. (بسيط)" }, isCorrect: true },
            { text: { en: "She were recognizing the potential for error.", ar: "كانت تدرك... (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "She recognize the potential for error.", ar: "تدرك... (مضارع ناقص s)" }, isCorrect: false }
        ],
        explanation: {
            en: "'Recognize' is a stative verb referring to a mental realization. It does not take the continuous (-ing) form.",
            ar: "الفعل 'Recognize' (يدرك/يتعرف) هو فعل حالة يشير إلى إدراك عقلي. لا يأخذ صيغة الاستمرار (-ing)."
        }
    },
    {
        id: "u2_g_18",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "What was leading you to this conclusion?", ar: "ما الذي كان يقودك إلى هذا الاستنتاج؟" }, isCorrect: false },
            { text: { en: "What led you to this conclusion?", ar: "ما الذي قادك إلى هذا الاستنتاج؟" }, isCorrect: true },
            { text: { en: "What leads you to this conclusion yesterday?", ar: "ما الذي يقودك... (تناقض زمني)" }, isCorrect: false },
            { text: { en: "What were leading you to this conclusion?", ar: "ما الذي كان يقودك... (قواعد خاطئة)" }, isCorrect: false }
        ],
        explanation: {
            en: "The question asks about a specific completed action in the past, so the Simple Past ('led') is proper.",
            ar: "السؤال يسأل عن فعل محدد مكتمل في الماضي، لذا فإن الماضي البسيط ('led') هو الأصح."
        }
    },
    {
        id: "u2_g_19",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "This demonstration was being a symptom of discontent among the students.", ar: "هذه المظاهرة كانت تكون عرضاً... (مستمر)" }, isCorrect: false },
            { text: { en: "This demonstration is be a symptom of discontent.", ar: "هذه المظاهرة تكون عرضاً... (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "This demonstration was a symptom of discontent among the students.", ar: "هذه المظاهرة كانت عرضاً من أعراض الاستياء بين الطلاب." }, isCorrect: true },
            { text: { en: "This demonstration were a symptom of discontent.", ar: "هذه المظاهرة كان عرضاً... (جمع خاطئ)" }, isCorrect: false }
        ],
        explanation: {
            en: "The verb 'be' is a stative verb. It is used in its simple past form ('was') to describe a state.",
            ar: "الفعل 'be' (يكون) هو فعل حالة. يُستخدم في صيغته الماضية البسيطة ('was') لوصف حالة."
        }
    },
    {
        id: "u2_g_20",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She was depriving herself of food for a while, but she ended up binging and regretted it afterwards.", ar: "كانت تحرم نفسها من الطعام... (مستمر)" }, isCorrect: false },
            { text: { en: "She deprived herself of food for a while, but she ended up binging and regretted it afterwards.", ar: "حرمت نفسها من الطعام لفترة، لكن انتهى بها الأمر بالإفراط في الأكل وندمت على ذلك لاحقاً." }, isCorrect: true },
            { text: { en: "She deprives herself of food for a while, but she ended up binging.", ar: "تحرم نفسها... لكن انتهى بها الأمر (خلط أزمنة)" }, isCorrect: false },
            { text: { en: "She were depriving herself of food for a while.", ar: "كانت تحرم نفسها... (قواعد خاطئة)" }, isCorrect: false }
        ],
        explanation: {
            en: "This is a series of completed actions in the past (deprived, ended up, regretted). Therefore, all verbs should be in the Simple Past.",
            ar: "هذه سلسلة من الإجراءات المكتملة في الماضي (حرمت، انتهى بها، ندمت). لذلك، يجب أن تكون جميع الأفعال في الماضي البسيط."
        }
    },
    {
        id: "u2_g_21",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She had a continuous fear of being humiliated in front of others.", ar: "كان لديها خوف مستمر من التعرض للإهانة أمام الآخرين." }, isCorrect: true },
            { text: { en: "She were having a continuous fear of being humiliated.", ar: "كان لديها خوف... (قواعد خاطئة)" }, isCorrect: false },
            { text: { en: "She was having a continuous fear of being humiliated.", ar: "كان لديها خوف... (مستمر)" }, isCorrect: false },
            { text: { en: "She having a continuous fear of being humiliated.", ar: "كان لديها خوف... (بدون فعل مساعد)" }, isCorrect: false }
        ],
        explanation: {
            en: "'Have' indicating possession or experiencing a condition is a stative verb. It must be used in the simple past ('had'), not past continuous.",
            ar: "'Have' الذي يشير إلى الامتلاك أو تجربة حالة هو فعل حالة. يجب استخدامه في الماضي البسيط ('had')، وليس الماضي المستمر."
        }
    },
    {
        id: "u2_g_22",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She was imposing her ideas on the group during our last meeting.", ar: "كانت تفرض أفكارها على المجموعة خلال اجتماعنا الأخير." }, isCorrect: false },
            { text: { en: "She imposed her ideas on the group during our last meeting.", ar: "فرضت أفكارها على المجموعة خلال اجتماعنا الأخير." }, isCorrect: true },
            { text: { en: "She impose her ideas on the group during our last meeting.", ar: "فرض أفكارها... (ناقص d)" }, isCorrect: false },
            { text: { en: "She were imposing her ideas on the group.", ar: "كانت تفرض... (قواعد خاطئة)" }, isCorrect: false }
        ],
        explanation: {
            en: "'During our last meeting' marks a specific, completed period in the past. Therefore, the Simple Past ('imposed') is the correct form.",
            ar: "تحدد عبارة 'خلال اجتماعنا الأخير' فترة محددة ومكتملة في الماضي. لذلك، فإن الماضي البسيط ('imposed') هو الصيغة الصحيحة."
        }
    }
];
