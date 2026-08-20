/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Extra & Wisdom (Self-Contained Comprehension, Idioms & Quotes)
 * Total Self-Contained Items: 21
 */
(function() {
  const unit4_extra = [
    {
        "id": "u4_e_01",
        "unit": 4,
        "stream": "extra",
        "topic": "Quotes",
        "promptEn": "Zeno stated: 'The goal of life is living in agreement with ---------------.'",
        "promptAr": "قال الفيلسوف زينون: 'غاية الحياة تكمن في العيش في توافق وتناغم مع ---------------.'",
        "choices": [
            {
                "id": "a",
                "textEn": "nature",
                "textAr": "الطبيعة"
            },
            {
                "id": "b",
                "textEn": "business",
                "textAr": "التجارة والمال"
            },
            {
                "id": "c",
                "textEn": "politics",
                "textAr": "السياسة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Zeno, founder of Stoicism, famously said: 'The goal of life is living in agreement with nature.'",
        "explanationAr": "مقولة الفيلسوف زينون تؤكد أن غاية الحياة الحقيقية هي العيش بانسجام مع الطبيعة.",
        "lexiconTokens": {
            "agreement": "توافق",
            "nature": "طبيعة"
        }
    },
    {
        "id": "u4_e_02",
        "unit": 4,
        "stream": "extra",
        "topic": "Quotes",
        "promptEn": "Aristotle said: 'In all things of nature there is something of the ---------------.'",
        "promptAr": "قال أرسطو: 'في كل مظاهر الطبيعة وكائناتها يوجد شيء من ---------------.'",
        "choices": [
            {
                "id": "a",
                "textEn": "marvelous",
                "textAr": "الإعجاز والروعة (marvelous)"
            },
            {
                "id": "b",
                "textEn": "destructive",
                "textAr": "الدمار"
            },
            {
                "id": "c",
                "textEn": "artificial",
                "textAr": "الاصطناع"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Aristotle observed: 'In all things of nature there is something of the marvelous.'",
        "explanationAr": "أكد أرسطو أن في كافة مظاهر الطبيعة لمسة من الروعة والإعجاز.",
        "lexiconTokens": {
            "marvelous": "رائع / معجز",
            "nature": "طبيعة"
        }
    },
    {
        "id": "u4_e_03",
        "unit": 4,
        "stream": "extra",
        "topic": "Quotes",
        "promptEn": "Walt Whitman wrote that after exhausting business, politics, and social life, what permanently remains is ---------------",
        "promptAr": "كتب والت ويتمان أنه بعد استنزاف التجارة والسياسة والحياة الاجتماعية، فإن ما يبقى دائماً هو ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "Nature remains",
                "textAr": "الطبيعة هي ما تبقى"
            },
            {
                "id": "b",
                "textEn": "Wealth remains",
                "textAr": "المال هو ما يبقى"
            },
            {
                "id": "c",
                "textEn": "Fame remains",
                "textAr": "الشهرة هي ما تبقى"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Whitman wrote: 'After you have exhausted what there is in business, politics, conviviality... what remains? Nature remains.'",
        "explanationAr": "يؤكد والت ويتمان أن الطبيعة هي الحقيقة الدائمة والأصيلة التي تبقى بعد زوال كل مشاغل الدنيا.",
        "lexiconTokens": {
            "exhausted": "استنفد",
            "remains": "يبقى"
        }
    },
    {
        "id": "u4_e_04",
        "unit": 4,
        "stream": "extra",
        "topic": "Reading Comprehension",
        "promptEn": "To ensure stream water is completely safe from bacteria and parasites, it should be boiled for ---------------",
        "promptAr": "لضمان خلو مياه الجدول من البكتيريا والطفيليات، يجب غلي الماء لمدة ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "ten minutes",
                "textAr": "عشر دقائق (10 minutes)"
            },
            {
                "id": "b",
                "textEn": "one minute",
                "textAr": "دقيقة واحدة"
            },
            {
                "id": "c",
                "textEn": "two hours",
                "textAr": "ساعتين"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The text explicitly states: 'If they boiled the water for ten minutes, it would be safe to drink.'",
        "explanationAr": "أكد النص أن غلي الماء لمدة 10 دقائق يجعله معقماً وصالحاً للشرب بأمان.",
        "lexiconTokens": {
            "boiled": "مغلي",
            "purify": "ينقي"
        }
    },
    {
        "id": "u4_e_05",
        "unit": 4,
        "stream": "extra",
        "topic": "Reading Comprehension",
        "promptEn": "Besides purifying water and cooking, building a campfire is crucial in the wild because ---------------",
        "promptAr": "بالإضافة إلى تنقية المياه والطهي، فإن إشعال نار المخيم ضروري في البرية لأنه ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "it keeps wild animals and mosquitoes away",
                "textAr": "يبعد الحيوانات المفترسة والبعوض لأنها تخاف من النار"
            },
            {
                "id": "b",
                "textEn": "it generates electrical power",
                "textAr": "يولد طاقة كهربائية"
            },
            {
                "id": "c",
                "textEn": "it summons rescue planes immediately",
                "textAr": "يجلب طائرات الإنقاذ فوراً"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Wild animals and insects are instinctively afraid of fire, which protects the campsite.",
        "explanationAr": "تخاف الحيوانات والبعوض من النار والدخان، مما يوفر حماية للمخيم ليلاً.",
        "lexiconTokens": {
            "campfire": "نار المخيم",
            "mosquitoes": "بعوض"
        }
    },
    {
        "id": "u4_e_06",
        "unit": 4,
        "stream": "extra",
        "topic": "Reading Comprehension",
        "promptEn": "In building their 'lean-to' survival shelter, they placed a large branch between two trees spaced about ---------------",
        "promptAr": "عند بناء مأواهم المؤقت (lean-to)، وضعتا غصناً كبيراً بين شجرتين تفصل بينهما مسافة ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "6 – 8 feet apart",
                "textAr": "6 إلى 8 أقدام"
            },
            {
                "id": "b",
                "textEn": "20 meters apart",
                "textAr": "20 متراً"
            },
            {
                "id": "c",
                "textEn": "1 foot apart",
                "textAr": "قدم واحدة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The text specifies placing the main beam between two trees approximately 6 to 8 feet apart.",
        "explanationAr": "نصت التعليمات على اختيار شجرتين تفصل بينهما مسافة 6-8 أقدام لإنشاء المأوى.",
        "lexiconTokens": {
            "shelter": "مأوى",
            "branch": "غصن"
        }
    },
    {
        "id": "u4_e_07",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "According to the natural medicines text, which plant extract is used to treat headaches and prevent malaria?",
        "promptAr": "وفقاً لنص الأدوية الطبيعية، أي مستخلص نباتي يُستخدم لعلاج الصداع والوقاية من الملاريا؟",
        "choices": [
            {
                "id": "a",
                "textEn": "Willow",
                "textAr": "نبات الصفصاف (Willow)"
            },
            {
                "id": "b",
                "textEn": "Garlic",
                "textAr": "الثوم"
            },
            {
                "id": "c",
                "textEn": "Cranberry",
                "textAr": "التوت البري"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The text states: 'Willow cures headaches and prevents and cures malaria.' (Natural source of salicylic acid/aspirin).",
        "explanationAr": "نبات الصفصاف (Willow) يحتوي على مادة الساليسين المستخدمة في علاج الصداع ومكافحة الملاريا.",
        "lexiconTokens": {
            "willow": "صفصاف",
            "malaria": "ملاريا",
            "headache": "صداع"
        }
    },
    {
        "id": "u4_e_08",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Rosy periwinkle is biologically significant because it serves as the basis for medication treating ---------------",
        "promptAr": "نبات العناقية الوردية (Rosy periwinkle) له أهمية طبية بالغة لأنه أساس لأدوية علاج ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "childhood leukemia",
                "textAr": "سرطان الدم لدى الأطفال (Leukemia)"
            },
            {
                "id": "b",
                "textEn": "broken bones",
                "textAr": "كسور العظام"
            },
            {
                "id": "c",
                "textEn": "common colds only",
                "textAr": "نزلات البرد فقط"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "'Rosy periwinkle is the basis for a new medication that is used to treat childhood leukemia.'",
        "explanationAr": "يُستخرج من نبات Rosy periwinkle مركبات قلوية لعلاج لوكيميا الأطفال.",
        "lexiconTokens": {
            "leukemia": "سرطان الدم",
            "medication": "دواء"
        }
    },
    {
        "id": "u4_e_09",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Garlic contains the active compound allicin, which helps prevent heart attacks by reducing ---------------",
        "promptAr": "يحتوي الثوم على مركب الأليسين الفعال، والذي يساعد في تقليل خطر النوبات القلبية عن طريق خفض ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "blood cholesterol levels",
                "textAr": "مستويات الكوليسترول في الدم"
            },
            {
                "id": "b",
                "textEn": "body temperature",
                "textAr": "حرارة الجسم"
            },
            {
                "id": "c",
                "textEn": "white blood cells",
                "textAr": "خلايا الدم البيضاء"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Garlic's allicin reduces cholesterol levels, which lowers the risks of strokes and heart attacks.",
        "explanationAr": "يساعد مركب الأليسين في الثوم على خفض الكوليسترول والوقاية من الجلطات.",
        "lexiconTokens": {
            "garlic": "ثوم",
            "cholesterol": "كوليسترول"
        }
    },
    {
        "id": "u4_e_10",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Boiling ginger root into a warm tea is effective for relieving ---------------",
        "promptAr": "غلي جذور الزنجبيل وتحضيرها كشاي دافئ مفيد وفعال في علاج ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "indigestion, gas pains, and stomach aches",
                "textAr": "عسر الهضم، آلام الغازات، ومغص المعدة"
            },
            {
                "id": "b",
                "textEn": "childhood leukemia",
                "textAr": "اللوكيميا"
            },
            {
                "id": "c",
                "textEn": "herpes virus",
                "textAr": "فيروس الهربس"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Ginger root tea is traditionally used to soothe digestive disorders, gas pains, and nausea.",
        "explanationAr": "يُستخدم شاي الزنجبيل المغلي لتهدئة اضطرابات الجهاز الهضمي والغازات والمغص.",
        "lexiconTokens": {
            "ginger": "زنجبيل",
            "indigestion": "عسر هضم"
        }
    },
    {
        "id": "u4_e_11",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Aloe Vera is widely applied to treat sunburns, skin wounds, and ---------------",
        "promptAr": "يُستخدم هلام الصبار (Aloe Vera) على نطاق واسع لعلاج حروق الشمس والجروح الجلدية و ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "hair loss",
                "textAr": "تساقط الشعر"
            },
            {
                "id": "b",
                "textEn": "malaria",
                "textAr": "الملاريا"
            },
            {
                "id": "c",
                "textEn": "high blood pressure",
                "textAr": "ضغط الدم"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Aloe Vera accelerates wound healing, soothes sunburns, and treats hair loss.",
        "explanationAr": "يساعد الصبار في سرعة التئام الحروق والجروح ومكافحة تساقط الشعر.",
        "lexiconTokens": {
            "aloe": "صبار",
            "wounds": "جروح",
            "hair loss": "تساقط الشعر"
        }
    },
    {
        "id": "u4_e_12",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Cranberry juice is clinically recognized for helping prevent and treat ---------------",
        "promptAr": "عصير التوت البري (Cranberry juice) معترف بفاعليته في الوقاية من وعلاج ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "urinary tract infections",
                "textAr": "التهابات المسالك البولية"
            },
            {
                "id": "b",
                "textEn": "malaria",
                "textAr": "الملاريا"
            },
            {
                "id": "c",
                "textEn": "hair loss",
                "textAr": "تساقط الشعر"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Cranberry juice contains compounds that prevent bacteria from adhering to the urinary tract walls.",
        "explanationAr": "يمنع عصير التوت البري التصاق البكتيريا بجدران المسالك البولية.",
        "lexiconTokens": {
            "cranberry": "توت بري",
            "infections": "التهابات"
        }
    },
    {
        "id": "u4_e_13",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Banana leaves can be applied directly to the skin to soothe and protect ---------------",
        "promptAr": "يمكن وضع أوراق الموز الطازجة مباشرة على الجلد لتهدئة وحماية ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "wounds and burns",
                "textAr": "الجروح والحروق"
            },
            {
                "id": "b",
                "textEn": "malaria fevers",
                "textAr": "حمى الملاريا"
            },
            {
                "id": "c",
                "textEn": "asthma attacks",
                "textAr": "نوبات الربو"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Banana leaves serve as natural clean dressings applied directly to wounds and burns.",
        "explanationAr": "تُستخدم أوراق الموز كضماد طبيعي ومهدئ للحروق والجروح الجلدية.",
        "lexiconTokens": {
            "banana leaves": "أوراق الموز",
            "burns": "حروق"
        }
    },
    {
        "id": "u4_e_14",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Marshmallow root extract is commonly taken to soothe ---------------",
        "promptAr": "يُؤخذ مستخلص نبات الخطمي (Marshmallow root) لتسكين وتهدئة ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "sore throats",
                "textAr": "التهاب وجفاف الحلق"
            },
            {
                "id": "b",
                "textEn": "broken bones",
                "textAr": "كسور العظام"
            },
            {
                "id": "c",
                "textEn": "cholesterol",
                "textAr": "الكوليسترول"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Marshmallow root produces a mucilage that coats and soothes irritated throat tissue.",
        "explanationAr": "يحتوي نبات الخطمي على مادة هلامية تبطن الحلق وتخفف آلام الالتهاب والسعال.",
        "lexiconTokens": {
            "marshmallow": "نبات الخطمي",
            "sore throat": "التهاب الحلق"
        }
    },
    {
        "id": "u4_e_15",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Chamomile herbal tea is widely consumed to calm upset stomachs and reduce ---------------",
        "promptAr": "يُشرب شاي البابونج (Chamomile) لتهدئة اضطراب المعدة وخفض ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "very high fevers",
                "textAr": "الحمى الشديدة وارتفاع الحرارة"
            },
            {
                "id": "b",
                "textEn": "heart rates",
                "textAr": "ضربات القلب"
            },
            {
                "id": "c",
                "textEn": "kidney size",
                "textAr": "حجم الكلى"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Chamomile tea has antipyretic and anti-inflammatory properties that relieve fevers and stomach spasms.",
        "explanationAr": "يساعد البابونج في خفض الحرارة وتخفيف تشنجات ومغص المعدة.",
        "lexiconTokens": {
            "chamomile": "بابونج",
            "fevers": "حمى"
        }
    },
    {
        "id": "u4_e_16",
        "unit": 4,
        "stream": "extra",
        "topic": "Natural Medicines",
        "promptEn": "Lemon balm extract has demonstrated antiviral properties effective against ---------------",
        "promptAr": "أظهر مستخلص عشبة المليسة (Lemon balm) فاعلية مضادة للفيروسات ضد ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "the herpes virus",
                "textAr": "فيروس الهربس (Herpes virus)"
            },
            {
                "id": "b",
                "textEn": "leukemia cells",
                "textAr": "خلايا اللوكيميا"
            },
            {
                "id": "c",
                "textEn": "asthma",
                "textAr": "الربو"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The text states: 'Lemon balm has been shown to be effective in treating the herpes virus.'",
        "explanationAr": "أثبتت الدراسات فاعلية مستخلص المليسة في محاربة فيروس الهربس.",
        "lexiconTokens": {
            "lemon balm": "عشبة المليسة",
            "virus": "فيروس"
        }
    },
    {
        "id": "u4_e_17",
        "unit": 4,
        "stream": "extra",
        "topic": "Environmental Science",
        "promptEn": "The natural greenhouse effect is positive for human life because it ---------------",
        "promptAr": "تأثير الدفيئة الطبيعي (Greenhouse effect) يعد ظاهرة إيجابية للحياة على الأرض لأنه ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "traps heat in the atmosphere, providing a comfortable average temperature",
                "textAr": "يحبس الحرارة في الغلاف الجوي ليوفر درجات حرارة ملائمة للحياة"
            },
            {
                "id": "b",
                "textEn": "causes volcanoes to explode",
                "textAr": "يفجر البراكين"
            },
            {
                "id": "c",
                "textEn": "destroys all oxygen",
                "textAr": "يدمر الأكسجين"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Without the natural greenhouse effect, Earth would be too cold to sustain human and plant life.",
        "explanationAr": "ظاهرة الاحتباس الحراري الطبيعية تحافظ على دفء الكوكب وصلاحيته للعيش.",
        "lexiconTokens": {
            "greenhouse": "الاحتباس الحراري",
            "temperature": "درجة الحرارة"
        }
    },
    {
        "id": "u4_e_18",
        "unit": 4,
        "stream": "extra",
        "topic": "Environmental Science",
        "promptEn": "A major negative health consequence of air pollution is that it ---------------",
        "promptAr": "من الآثار الصحية السلبية الخطيرة لتلوث الهواء أنه ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "damages and impairs the body's respiratory system",
                "textAr": "يضر بالجهاز التنفسي للإنسان ويسبب أمراض الرئة"
            },
            {
                "id": "b",
                "textEn": "increases eyesight",
                "textAr": "يقوي البصر"
            },
            {
                "id": "c",
                "textEn": "purifies rainwater",
                "textAr": "ينقي مياه الأمطار"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Air pollution directly introduces airborne toxins and particulates into the lungs and respiratory tract.",
        "explanationAr": "يؤدي تلوث الهواء بالغازات السامة إلى اعتلال الجهاز التنفسي والرئتين.",
        "lexiconTokens": {
            "pollution": "تلوث",
            "respiratory": "تنفسي"
        }
    },
    {
        "id": "u4_e_19",
        "unit": 4,
        "stream": "extra",
        "topic": "Environmental Science",
        "promptEn": "Severe water pollution in underdeveloped regions can trigger deadly epidemics of ---------------",
        "promptAr": "يمكن أن يؤدي التلوث المائي الحاد للمياه غير المعقمة إلى تفشي أوبئة قاتلة مثل ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "cholera, diarrhea, and typhoid",
                "textAr": "الكوليرا، الإسهال الشديد، والتيفوئيد"
            },
            {
                "id": "b",
                "textEn": "childhood leukemia",
                "textAr": "اللوكيميا"
            },
            {
                "id": "c",
                "textEn": "sunburns",
                "textAr": "حروق الشمس"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Contaminated water sources transmit waterborne bacterial pathogens causing cholera and typhoid.",
        "explanationAr": "تتسبب المياه الملوثة في انتشار أمراض معوية خطيرة كالكوليرا والتيفوئيد.",
        "lexiconTokens": {
            "cholera": "كوليرا",
            "typhoid": "تيفوئيد"
        }
    },
    {
        "id": "u4_e_20",
        "unit": 4,
        "stream": "extra",
        "topic": "Environmental Science",
        "promptEn": "A major hazard of heavy volcanic ash falls on nearby communities is that ---------------",
        "promptAr": "من المخاطر الشديدة لتساقط الرماد البركاني الكثيف على المناطق السكنية المجاورة أنه ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "it collapses roofs under its weight and makes breathing impossible",
                "textAr": "يهدم أسقف المنازل بثقله ويجعل التنفس مستحيلاً"
            },
            {
                "id": "b",
                "textEn": "it purifies river water",
                "textAr": "ينقي مياه الأنهار"
            },
            {
                "id": "c",
                "textEn": "it prevents all future droughts",
                "textAr": "يمنع الجفاف"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Heavy volcanic ash suffocates the air and exerts enormous structural weight that collapses buildings.",
        "explanationAr": "الرماد البركاني الكثيف يسبب الاختناق ويثقل الأسقف مما يؤدي لانهيارها.",
        "lexiconTokens": {
            "volcano": "بركان",
            "ash": "رماد"
        }
    },
    {
        "id": "u4_e_21",
        "unit": 4,
        "stream": "extra",
        "topic": "Environmental Science",
        "promptEn": "Rising global average temperatures due to climate change particularly endanger populations who ---------------",
        "promptAr": "إن ارتفاع درجات الحرارة العالمية بفعل التغير المناخي يهدد بشكل خاص السكان الذين ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "live near ocean coastlines or already suffer from drought and poverty",
                "textAr": "يعيشون قرب السواحل البحرية أو يعانون أصلاً من الجفاف والفقر"
            },
            {
                "id": "b",
                "textEn": "live inside scientific research laboratories",
                "textAr": "يعيشون في المختبرات"
            },
            {
                "id": "c",
                "textEn": "swim in warm swimming pools",
                "textAr": "يسبحون في المسابح"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Global warming causes sea-level rise threatening coastal areas and intensifies droughts in impoverished regions.",
        "explanationAr": "يهدد الاحتباس الحراري سكان السواحل بارتفاع منسوب البحار ويزيد من حدة الجفاف في المناطق الفقيرة.",
        "lexiconTokens": {
            "global warming": "الاحترار العالمي",
            "drought": "جفاف"
        }
    }
];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.extra = window.COURSE_DATA.extra || {};
    window.COURSE_DATA.extra.unit4 = unit4_extra;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit4_extra };
  }
})();
