export const unit1Grammar = [
    // --- ACTIVITY 1: DON'T GET TENSE! ---
    {
        id: "u1_g_01",
        question: {
            en: "Choose the correct verb: 'My parents __________ in Irbid.'",
            ar: "اختر الفعل الصحيح: 'والداي __________ في إربد.'"
        },
        options: [
            { text: { en: "lives", ar: "يعيش (للمفرد)" }, isCorrect: false },
            { text: { en: "live", ar: "يعيشون" }, isCorrect: true },
            { text: { en: "are living", ar: "يعيشون (الآن)" }, isCorrect: false },
            { text: { en: "living", ar: "يعيش" }, isCorrect: false }
        ],
        explanation: {
            en: "Use the Simple Present ('live') for facts or permanent situations. 'Parents' is plural, so we do not add an 's' to the verb.",
            ar: "نستخدم المضارع البسيط ('live') للحقائق أو الحالات الدائمة. كلمة 'Parents' (والدان) جمع، لذا لا نضيف 's' للفعل."
        }
    },
    {
        id: "u1_g_02",
        question: {
            en: "Choose the correct form: 'The weather is cold. I think it __________.'",
            ar: "اختر الصيغة الصحيحة: 'الطقس بارد. أعتقد أنها __________.'"
        },
        options: [
            { text: { en: "rain", ar: "تمطر (بسيط)" }, isCorrect: false },
            { text: { en: "rains", ar: "تمطر (بسيط)" }, isCorrect: false },
            { text: { en: "is raining", ar: "تمطر (مستمر)" }, isCorrect: true },
            { text: { en: "raining", ar: "تمطر" }, isCorrect: false }
        ],
        explanation: {
            en: "The action is happening right now ('The weather is cold' currently), so we use the Present Continuous ('is raining').",
            ar: "الحدث يقع الآن ('الطقس بارد' حالياً)، لذلك نستخدم المضارع المستمر ('is raining')."
        }
    },
    {
        id: "u1_g_03",
        question: {
            en: "Choose the correct form: 'Hurry up! Everyone __________ for you.'",
            ar: "اختر الصيغة الصحيحة: 'أسرع! الجميع __________ من أجلك.'"
        },
        options: [
            { text: { en: "is waiting", ar: "ينتظر (مستمر مفرد)" }, isCorrect: true },
            { text: { en: "are waiting", ar: "ينتظرون (مستمر جمع)" }, isCorrect: false },
            { text: { en: "waits", ar: "ينتظر (بسيط)" }, isCorrect: false },
            { text: { en: "wait", ar: "ينتظرون (بسيط)" }, isCorrect: false }
        ],
        explanation: {
            en: "The action is happening right now (Hurry up!). 'Everyone' is an indefinite pronoun and takes a singular verb, so 'is waiting' is correct.",
            ar: "الحدث يقع الآن (أسرع!). كلمة 'Everyone' (الجميع) تعامل كفاعل مفرد نحوياً، لذا 'is waiting' هي الصحيحة."
        }
    },
    {
        id: "u1_g_04",
        question: {
            en: "Choose the correct form: 'I __________ really happy to see you.'",
            ar: "اختر الصيغة الصحيحة: 'أنا __________ سعيد جداً برؤيتك.'"
        },
        options: [
            { text: { en: "is", ar: "يكون" }, isCorrect: false },
            { text: { en: "are", ar: "تكون" }, isCorrect: false },
            { text: { en: "am", ar: "أكون" }, isCorrect: true },
            { text: { en: "be", ar: "يكون" }, isCorrect: false }
        ],
        explanation: {
            en: "The correct 'be' verb for the pronoun 'I' in the present tense is 'am'.",
            ar: "الفعل الصحيح من أفعال الكينونة 'be' للضمير 'I' في المضارع هو 'am'."
        }
    },
    {
        id: "u1_g_05",
        question: {
            en: "Choose the correct spelling/form: 'She usually __________ for two hours on a daily basis.'",
            ar: "اختر التهجئة/الصيغة الصحيحة: 'هي عادة __________ لمدة ساعتين يومياً.'"
        },
        options: [
            { text: { en: "studeis", ar: "تدرس (تهجئة خاطئة)" }, isCorrect: false },
            { text: { en: "studys", ar: "تدرس (تهجئة خاطئة)" }, isCorrect: false },
            { text: { en: "studies", ar: "تدرس" }, isCorrect: true },
            { text: { en: "studying", ar: "تدرس (مستمر)" }, isCorrect: false }
        ],
        explanation: {
            en: "'Usually' indicates a habit (Simple Present). For verbs ending in consonant + 'y' (study), we drop the 'y' and add 'ies' with he/she/it.",
            ar: "كلمة 'Usually' (عادة) تشير إلى عادة (مضارع بسيط). للأفعال المنتهية بحرف ساكن + 'y'، نحذف الـ 'y' ونضيف 'ies' مع المفرد الغائب (هي)."
        }
    },
    {
        id: "u1_g_06",
        question: {
            en: "Choose the correct option: 'I've lost my key again. Oh, I __________ things!'",
            ar: "اختر الخيار الصحيح: 'لقد فقدت مفتاحي مرة أخرى. أوه، أنا __________ الأشياء!'"
        },
        options: [
            { text: { en: "always lose", ar: "دائماً أفقد" }, isCorrect: false },
            { text: { en: "am always losing", ar: "دائماً أفقد (للتعبير عن الانزعاج)" }, isCorrect: true },
            { text: { en: "always loses", ar: "دائماً يفقد" }, isCorrect: false },
            { text: { en: "always losing", ar: "دائماً أفقد (بدون فعل مساعد)" }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Present Continuous with 'always' to express a complaint or an annoying repeated habit.",
            ar: "نستخدم المضارع المستمر مع كلمة 'always' (دائماً) للتعبير عن شكوى أو عادة متكررة مزعجة."
        }
    },
    {
        id: "u1_g_07",
        question: {
            en: "Choose the correct form: 'You __________ television. You should do something more active.'",
            ar: "اختر الصيغة الصحيحة: 'أنت __________ التلفاز. يجب أن تفعل شيئاً أكثر نشاطاً.'"
        },
        options: [
            { text: { en: "always watch", ar: "تشاهد دائماً" }, isCorrect: false },
            { text: { en: "are always watching", ar: "تشاهد دائماً (للانزعاج)" }, isCorrect: true },
            { text: { en: "always watches", ar: "يشاهد دائماً" }, isCorrect: false },
            { text: { en: "is always watching", ar: "يشاهد دائماً (للانزعاج)" }, isCorrect: false }
        ],
        explanation: {
            en: "This is a complaint. The Present Continuous + 'always' expresses annoyance about a frequent action.",
            ar: "هذه الجملة عبارة عن شكوى. المضارع المستمر + كلمة 'always' يعبران عن الانزعاج من فعل متكرر بكثرة."
        }
    },
    {
        id: "u1_g_08",
        question: {
            en: "Choose the correct form: 'George is never satisfied. He __________.'",
            ar: "اختر الصيغة الصحيحة: 'جورج لا يرضى أبداً. إنه __________.'"
        },
        options: [
            { text: { en: "always complains", ar: "يشتكي دائماً" }, isCorrect: false },
            { text: { en: "is always complaining", ar: "يشتكي دائماً (للانزعاج)" }, isCorrect: true },
            { text: { en: "are complaining", ar: "يشتكون" }, isCorrect: false },
            { text: { en: "complains always", ar: "يشتكي دائماً" }, isCorrect: false }
        ],
        explanation: {
            en: "Again, this is a complaint about someone's annoying habit. We use 'is always complaining'.",
            ar: "مجدداً، هذه شكوى حول عادة مزعجة لشخص ما. نستخدم المضارع المستمر 'is always complaining'."
        }
    },
    {
        id: "u1_g_09",
        question: {
            en: "Choose the correct form: 'I __________ of selling my car. What do you think?'",
            ar: "اختر الصيغة الصحيحة: 'أنا __________ في بيع سيارتي. ما رأيك؟'"
        },
        options: [
            { text: { en: "think", ar: "أعتقد" }, isCorrect: false },
            { text: { en: "am thinking", ar: "أفكر (الآن)" }, isCorrect: true },
            { text: { en: "thinks", ar: "يعتقد" }, isCorrect: false },
            { text: { en: "am think", ar: "أفكر (خاطئة نحوياً)" }, isCorrect: false }
        ],
        explanation: {
            en: "While 'think' (believe) is a stative verb, 'think' (considering an action) describes a dynamic mental process and CAN be used in the continuous form.",
            ar: "على الرغم من أن 'think' (بمعنى يعتقد) فعل حالة، إلا أن 'think' (بمعنى يفكر/يدرس فكرة) يصف عملية عقلية مستمرة ويمكن استخدامه بصيغة الاستمرار."
        }
    },
    {
        id: "u1_g_10",
        question: {
            en: "Choose the correct form: 'I don’t understand why he __________ so selfish today.'",
            ar: "اختر الصيغة الصحيحة: 'لا أفهم لماذا __________ أنانياً جداً اليوم.'"
        },
        options: [
            { text: { en: "is being", ar: "يتصرف (اليوم فقط)" }, isCorrect: true },
            { text: { en: "is", ar: "يكون (طبيعته)" }, isCorrect: false },
            { text: { en: "be", ar: "يكون" }, isCorrect: false },
            { text: { en: "is be", ar: "يكون (خاطئة)" }, isCorrect: false }
        ],
        explanation: {
            en: "Usually, 'be' is stative. But 'is being' + adjective describes a temporary behavior or action happening right now (today), not a permanent personality trait.",
            ar: "عادةً، الفعل 'be' هو فعل حالة. لكن 'is being' + صفة يصف سلوكاً مؤقتاً يحدث الآن (اليوم فقط)، وليس سمة شخصية دائمة."
        }
    },

    // --- ACTIVITY 3: WHICH SENTENCE IS CORRECT? ---
    {
        id: "u1_g_11",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "We are usually growing vegetables in our garden.", ar: "نحن عادة نزرع الخضروات في حديقتنا (مستمر)." }, isCorrect: false },
            { text: { en: "We usually grow vegetables in our garden.", ar: "نحن عادة نزرع الخضروات في حديقتنا (بسيط)." }, isCorrect: true },
            { text: { en: "We usually grows vegetables in our garden.", ar: "نحن عادة نزرع... (بسيط خاطئ)." }, isCorrect: false },
            { text: { en: "We are usually grow vegetables in our garden.", ar: "نحن عادة... (قواعد خاطئة)." }, isCorrect: false }
        ],
        explanation: {
            en: "The word 'usually' indicates a habit or routine, which requires the Simple Present tense.",
            ar: "كلمة 'usually' تشير إلى عادة أو روتين، مما يتطلب استخدام زمن المضارع البسيط (Simple Present)."
        }
    },
    {
        id: "u1_g_12",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "Don’t take the dictionary away, I am needing it.", ar: "لا تأخذ القاموس، أنا أحتاجه (الآن)." }, isCorrect: false },
            { text: { en: "Don't take the dictionary away, I need it.", ar: "لا تأخذ القاموس، أنا أحتاجه." }, isCorrect: true },
            { text: { en: "Don't take the dictionary away, I needs it.", ar: "لا تأخذ القاموس، أنا أحتاجه (نحو خاطئ)." }, isCorrect: false },
            { text: { en: "Don't taking the dictionary away, I need it.", ar: "لا تأخذ... (نحو خاطئ)." }, isCorrect: false }
        ],
        explanation: {
            en: "The verb 'need' is a stative verb. It is never used in the continuous (-ing) form, even if referring to the present moment.",
            ar: "الفعل 'need' (يحتاج) هو فعل حالة. لا يُستخدم أبداً في صيغة الاستمرار (-ing)، حتى لو كان يشير إلى اللحظة الحالية."
        }
    },
    {
        id: "u1_g_13",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "The water boils. Can you turn it off?", ar: "الماء يغلي (بسيط). هل يمكنك إطفاؤه؟" }, isCorrect: false },
            { text: { en: "The water is boiling. Can you turn it off?", ar: "الماء يغلي (مستمر). هل يمكنك إطفاؤه؟" }, isCorrect: true },
            { text: { en: "The water boiling. Can you turn it off?", ar: "الماء يغلي (بدون فعل مساعد)." }, isCorrect: false },
            { text: { en: "The water are boiling. Can you turn it off?", ar: "الماء يغلي (جمع خاطئ)." }, isCorrect: false }
        ],
        explanation: {
            en: "The action of the water boiling is happening right now in front of the speaker, so the Present Continuous is required.",
            ar: "عملية غليان الماء تحدث الآن أمام المتحدث، لذا يتطلب الأمر استخدام المضارع المستمر."
        }
    },
    {
        id: "u1_g_14",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "I must go now. It gets late.", ar: "يجب أن أذهب الآن. الوقت يتأخر (بسيط)." }, isCorrect: false },
            { text: { en: "I must go now. It getting late.", ar: "يجب أن أذهب الآن. (نحو خاطئ)." }, isCorrect: false },
            { text: { en: "I must go now. It is getting late.", ar: "يجب أن أذهب الآن. الوقت يتأخر (مستمر)." }, isCorrect: true },
            { text: { en: "I must go now. It are getting late.", ar: "يجب أن أذهب الآن. (نحو خاطئ)." }, isCorrect: false }
        ],
        explanation: {
            en: "We use the Present Continuous to talk about changes happening around now (the situation is changing from early to late).",
            ar: "نستخدم المضارع المستمر للتحدث عن التغييرات التي تحدث الآن (الوضع يتغير من مبكر إلى متأخر)."
        }
    },
    {
        id: "u1_g_15",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She normally finishing work at 5 p.m.", ar: "هي تنهي عملها عادة في الخامسة. (نحو خاطئ)" }, isCorrect: false },
            { text: { en: "She normally finish work at 5 p.m.", ar: "هي تنهي... (ناقص 'es')." }, isCorrect: false },
            { text: { en: "She normally is finishing work at 5 p.m.", ar: "هي عادة تنهي... (مستمر خاطئ)." }, isCorrect: false },
            { text: { en: "She normally finishes work at 5 p.m.", ar: "هي عادة تنهي عملها في الخامسة مساءً." }, isCorrect: true }
        ],
        explanation: {
            en: "'Normally' refers to a routine. We use Simple Present. Because 'She' is third-person singular and the verb ends in -sh, we add '-es'.",
            ar: "كلمة 'Normally' (عادةً) تشير إلى روتين. نستخدم المضارع البسيط. ولأن الفاعل 'She' مفرد غائب والفعل ينتهي بـ -sh، نضيف '-es'."
        }
    },
    {
        id: "u1_g_16",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "Sam and I am going to the library.", ar: "سام وأنا ذاهبون إلى المكتبة. (استخدام خاطئ لـ am)" }, isCorrect: false },
            { text: { en: "Sam and I are going to the library.", ar: "سام وأنا ذاهبون إلى المكتبة." }, isCorrect: true },
            { text: { en: "Sam and I is going to the library.", ar: "سام وأنا ذاهبون... (استخدام خاطئ لـ is)" }, isCorrect: false },
            { text: { en: "Sam and I going to the library.", ar: "سام وأنا ذاهبون... (بدون فعل مساعد)" }, isCorrect: false }
        ],
        explanation: {
            en: "'Sam and I' forms a plural subject ('we'). Therefore, the correct 'be' verb is 'are', not 'am'.",
            ar: "'Sam and I' (سام وأنا) يشكلان فاعلاً جمعاً ('we'). لذلك، فعل الكينونة الصحيح هو 'are' وليس 'am'."
        }
    },
    {
        id: "u1_g_17",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "She don’t know how to drive.", ar: "هي لا تعرف كيف تقود. (نحو خاطئ)" }, isCorrect: false },
            { text: { en: "She doesn’t knows how to drive.", ar: "هي لا تعرف... (إضافة s خاطئة)" }, isCorrect: false },
            { text: { en: "She doesn’t know how to drive.", ar: "هي لا تعرف كيف تقود." }, isCorrect: true },
            { text: { en: "She isn't knowing how to drive.", ar: "هي لا تعرف... (مستمر خاطئ)" }, isCorrect: false }
        ],
        explanation: {
            en: "For third-person singular (she) in the negative Simple Present, we use 'doesn't' + base verb (know).",
            ar: "للمفرد الغائب (she) في حالة النفي للمضارع البسيط، نستخدم 'doesn't' + الفعل في المصدر (know)."
        }
    },
    {
        id: "u1_g_18",
        question: {
            en: "Identify the grammatically correct sentence:",
            ar: "حدد الجملة الصحيحة نحوياً:"
        },
        options: [
            { text: { en: "Please speak up. Now I am hearing you.", ar: "يرجى التحدث بصوت أعلى. الآن أنا أسمعك. (مستمر خاطئ)" }, isCorrect: false },
            { text: { en: "Please speak up. Now I hear you.", ar: "يرجى التحدث بصوت أعلى. الآن أنا أسمعك." }, isCorrect: true },
            { text: { en: "Please speak up. Now I hears you.", ar: "يرجى التحدث... (s خاطئة)" }, isCorrect: false },
            { text: { en: "Please speaking up. Now I hear you.", ar: "يرجى التحدث... (نحو خاطئ)" }, isCorrect: false }
        ],
        explanation: {
            en: "Verbs of senses (hear, see, smell, taste) are stative verbs and are not typically used in the continuous form.",
            ar: "أفعال الحواس (مثل يسمع hear، يرى، يشم، يتذوق) هي أفعال حالة ولا تستخدم عادة في صيغة الاستمرار."
        }
    },

    // --- ACTIVITY 4: SELECT THE CORRECT OPTION ---
    {
        id: "u1_g_19",
        question: {
            en: "Choose the correct option: 'They __________ a new campus outside the city.'",
            ar: "اختر الخيار الصحيح: 'هم __________ حُرماً جامعياً جديداً خارج المدينة.'"
        },
        options: [
            { text: { en: "design", ar: "يصممون (بسيط)" }, isCorrect: false },
            { text: { en: "designs", ar: "يصمم" }, isCorrect: false },
            { text: { en: "are designing", ar: "يصممون (الآن)" }, isCorrect: true },
            { text: { en: "is designing", ar: "يصمم (الآن)" }, isCorrect: false }
        ],
        explanation: {
            en: "Designing a campus is a long-term action happening around the current period, so we use the Present Continuous.",
            ar: "تصميم حرم جامعي هو عمل طويل الأمد يحدث في الفترة الحالية، لذلك نستخدم المضارع المستمر."
        }
    },
    {
        id: "u1_g_20",
        question: {
            en: "Choose the correct form: '__________ how to use a dictionary?'",
            ar: "اختر الصيغة الصحيحة: '__________ كيف تستخدم القاموس؟' (هل تعرف)"
        },
        options: [
            { text: { en: "Are you knowing", ar: "Are you knowing" }, isCorrect: false },
            { text: { en: "Do you know", ar: "Do you know" }, isCorrect: true },
            { text: { en: "Does you know", ar: "Does you know" }, isCorrect: false },
            { text: { en: "Are you know", ar: "Are you know" }, isCorrect: false }
        ],
        explanation: {
            en: "'Know' is a stative verb of knowledge and cannot take the '-ing' continuous form. We must use the simple present: 'Do you know'.",
            ar: "الفعل 'Know' هو فعل حالة للمعرفة ولا يمكن أن يأخذ صيغة الاستمرار '-ing'. يجب أن نستخدم المضارع البسيط: 'Do you know'."
        }
    },
    {
        id: "u1_g_21",
        question: {
            en: "Choose the correct option: 'She __________ to win that scholarship.'",
            ar: "اختر الخيار الصحيح: 'هي __________ للفوز بتلك المنحة الدراسية.' (تتوق بشدة)"
        },
        options: [
            { text: { en: "dies", ar: "تموت" }, isCorrect: false },
            { text: { en: "is dying", ar: "تتوق بشدة (الآن)" }, isCorrect: true },
            { text: { en: "are dying", ar: "تتوق بشدة" }, isCorrect: false },
            { text: { en: "die", ar: "تموت" }, isCorrect: false }
        ],
        explanation: {
            en: "'Is dying to...' is an idiom meaning wanting something very badly right now. We use the Present Continuous for this current intense feeling.",
            ar: "'Is dying to...' هو تعبير يعني الرغبة الشديدة في شيء الآن. نستخدم المضارع المستمر لهذا الشعور القوي الحالي."
        }
    },
    {
        id: "u1_g_22",
        question: {
            en: "Choose the correct option: 'How often __________ Arabic?'",
            ar: "اختر الخيار الصحيح: 'كم مرة __________ اللغة العربية؟'"
        },
        options: [
            { text: { en: "are you studying", ar: "تدرس (الآن)" }, isCorrect: false },
            { text: { en: "do you study", ar: "تدرس (كعادة)" }, isCorrect: true },
            { text: { en: "you study", ar: "تدرس (خاطئة نحوياً)" }, isCorrect: false },
            { text: { en: "does you study", ar: "تدرس (خاطئة نحوياً)" }, isCorrect: false }
        ],
        explanation: {
            en: "'How often' asks about the frequency of a habit or routine. We always use the Simple Present for frequency.",
            ar: "'How often' تسأل عن تكرار عادة أو روتين. نستخدم دائماً المضارع البسيط للتكرار."
        }
    },
    {
        id: "u1_g_23",
        question: {
            en: "Choose the correct option: 'A liar is someone who __________ the truth.'",
            ar: "اختر الخيار الصحيح: 'الكاذب هو شخص __________ الحقيقة.'"
        },
        options: [
            { text: { en: "don't tell", ar: "لا يقول" }, isCorrect: false },
            { text: { en: "isn't telling", ar: "لا يقول (الآن)" }, isCorrect: false },
            { text: { en: "doesn't tell", ar: "لا يقول" }, isCorrect: true },
            { text: { en: "not telling", ar: "لا يقول" }, isCorrect: false }
        ],
        explanation: {
            en: "This is a factual definition. 'Someone' is singular, so we use the singular negative Simple Present 'doesn't tell'.",
            ar: "هذا تعريف لواقع. كلمة 'Someone' (شخص ما) مفرد، لذلك نستخدم النفي للمضارع البسيط المفرد 'doesn't tell'."
        }
    },
    {
        id: "u1_g_24",
        question: {
            en: "Choose the correct option: 'Vegetarians __________ meat.'",
            ar: "اختر الخيار الصحيح: 'النباتيون __________ اللحم.'"
        },
        options: [
            { text: { en: "don't eat", ar: "لا يأكلون (عادة/حقيقة)" }, isCorrect: true },
            { text: { en: "are not eating", ar: "لا يأكلون (الآن)" }, isCorrect: false },
            { text: { en: "doesn't eat", ar: "لا يأكل (مفرد)" }, isCorrect: false },
            { text: { en: "not eat", ar: "لا يأكل" }, isCorrect: false }
        ],
        explanation: {
            en: "This states a universal fact about a group. Facts use the Simple Present. 'Vegetarians' is plural, so we use 'don't'.",
            ar: "هذا يوضح حقيقة عامة عن مجموعة. الحقائق تستخدم المضارع البسيط. 'Vegetarians' جمع، لذا نستخدم 'don't'."
        }
    }
];
