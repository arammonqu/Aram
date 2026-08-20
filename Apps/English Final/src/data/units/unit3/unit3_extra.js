/**
 * Al-Balqa Applied University — English 102
 * Unit 3: Extra & Wisdom (Self-Contained Comprehension, Idioms & Quotes)
 * Total Self-Contained Items: 15
 */
(function() {
  const unit3_extra = [
    {
        "id": "u3_e_01",
        "unit": 3,
        "stream": "extra",
        "topic": "Unit Quotes",
        "promptEn": "Francoise De Motteville said: 'The true way to render ourselves happy is to love our --------------- and find in it our pleasure.'",
        "promptAr": "قالت فرانسواز دي موتفيل: 'السبيل الحقيقي لجعل أنفسنا سعداء هو أن نحب --------------- ونجد فيه متعتنا.'",
        "choices": [
            {
                "id": "a",
                "textEn": "work",
                "textAr": "عملنا"
            },
            {
                "id": "b",
                "textEn": "money",
                "textAr": "مالنا"
            },
            {
                "id": "c",
                "textEn": "power",
                "textAr": "سلطتنا"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Francoise De Motteville emphasized that finding joy and satisfaction in one's 'work' is key to happiness.",
        "explanationAr": "تؤكد مقولة فرانسواز دي موتفيل أن حب 'العمل' والشغف به هو طريق السعادة الحقيقية.",
        "lexiconTokens": {
            "work": "عمل",
            "happy": "سعيد",
            "pleasure": "متعة"
        }
    },
    {
        "id": "u3_e_02",
        "unit": 3,
        "stream": "extra",
        "topic": "Unit Quotes",
        "promptEn": "Lena Horne said: 'Always be --------------- than the people who hired you.'",
        "promptAr": "قالت لينا هورن: 'كن دائماً --------------- من الأشخاص الذين قاموا بتوظيفك.'",
        "choices": [
            {
                "id": "a",
                "textEn": "smarter",
                "textAr": "أذكى وأكثر فطنة"
            },
            {
                "id": "b",
                "textEn": "older",
                "textAr": "أكبر سناً"
            },
            {
                "id": "c",
                "textEn": "lazier",
                "textAr": "أكثر كسلاً"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Lena Horne famously advised professionals: 'Always be smarter than the people who hired you.'",
        "explanationAr": "نصيحة لينا هورن المهنية الشهيرة: 'كن دائماً أذكى (smarter) ممن وظفوك'.",
        "lexiconTokens": {
            "smarter": "أذكى",
            "hired": "وظف / استأجر"
        }
    },
    {
        "id": "u3_e_03",
        "unit": 3,
        "stream": "extra",
        "topic": "Unit Quotes",
        "promptEn": "Marian Wright Edelman said: 'Never work just for --------------- or power. They won't save your soul or help you sleep at night.'",
        "promptAr": "قالت ماريان رايت إيدلمان: 'إياك والعمل لمجرد الحصول على --------------- أو السلطة؛ فلن يريحا ضميرك أو يساعداك على النوم ليلاً.'",
        "choices": [
            {
                "id": "a",
                "textEn": "money",
                "textAr": "المال"
            },
            {
                "id": "b",
                "textEn": "skills",
                "textAr": "المهارات"
            },
            {
                "id": "c",
                "textEn": "experience",
                "textAr": "الخبرة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Marian Wright Edelman warned against working purely for wealth ('money') and power.",
        "explanationAr": "تحذر ماريان إيدلمان من حصر غاية العمل في جني 'المال' (money) والنفوذ الزائل.",
        "lexiconTokens": {
            "money": "مال",
            "power": "سلطة / نفوذ"
        }
    },
    {
        "id": "u3_e_04",
        "unit": 3,
        "stream": "extra",
        "topic": "Reading: Nepotism",
        "promptEn": "Critics argue that job opportunities should be ---------------",
        "promptAr": "يرى النقاد ومعارضو المحسوبية أن الفرص الوظيفية يجب أن ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "given based on merit",
                "textAr": "تُمنح بناءً على الجدارة والكفاءة"
            },
            {
                "id": "b",
                "textEn": "go to members of powerful families",
                "textAr": "تذهب لأبناء العائلات النافذة"
            },
            {
                "id": "c",
                "textEn": "be given based on family ties",
                "textAr": "تُمنح بناءً على صلة القرابة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Critics maintain that positions must be awarded purely on merit rather than familial influence.",
        "explanationAr": "يؤكد معارضو المحسوبية أن التوظيف يجب أن يستند إلى الجدارة والاستحقاق (merit).",
        "lexiconTokens": {
            "merit": "جدارة / استحقاق",
            "opportunities": "فرص"
        }
    },
    {
        "id": "u3_e_05",
        "unit": 3,
        "stream": "extra",
        "topic": "Reading: Nepotism",
        "promptEn": "In the United States, nepotism ---------------",
        "promptAr": "في الولايات المتحدة الأمريكية، ظاهرة المحسوبية ومحاباة الأقارب ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "happens in many aspects of life",
                "textAr": "تحدث في مجالات ومفاصل متعددة من الحياة"
            },
            {
                "id": "b",
                "textEn": "happens only in politics",
                "textAr": "تقتصر على السياسة فقط"
            },
            {
                "id": "c",
                "textEn": "happens only in business",
                "textAr": "تقتصر على قطاع الأعمال فقط"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The passage illustrates that nepotism occurs in business, politics, and the film industry.",
        "explanationAr": "يوضح النص أن المحسوبية تمتد لقطاعات الأعمال والسياسة والسينما والفنون.",
        "lexiconTokens": {
            "aspects": "جوانب / مجالات",
            "nepotism": "محسوبية"
        }
    },
    {
        "id": "u3_e_06",
        "unit": 3,
        "stream": "extra",
        "topic": "Idioms: Silver Spoon",
        "promptEn": "Being born with a 'silver spoon in their mouths' means ---------------",
        "promptAr": "التعبير الاصطلاحي 'ولد وفي فمه ملعقة من فضة' يعني ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "having opportunities they didn’t earn because of their family's wealth and influence",
                "textAr": "الحصول على فرص دون جهد بفضل ثروة ونفوذ العائلة"
            },
            {
                "id": "b",
                "textEn": "not being able to speak clearly",
                "textAr": "عدم القدرة على التحدث بوضوح"
            },
            {
                "id": "c",
                "textEn": "caring only about owning precious metals",
                "textAr": "الاهتمام بالمعادن الثمينة فقط"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "This idiom denotes being born into an affluent family with inherited privilege and wealth.",
        "explanationAr": "'Born with a silver spoon' يعني النشأة في عائلة ثرية تؤمن لأبنائها امتيازات دون عناء.",
        "lexiconTokens": {
            "silver": "فضة",
            "spoon": "ملعقة",
            "influence": "نفوذ"
        }
    },
    {
        "id": "u3_e_07",
        "unit": 3,
        "stream": "extra",
        "topic": "Reading: Nepotism",
        "promptEn": "Some people argue that a positive aspect of family-run businesses and nepotism is that it ---------------",
        "promptAr": "يجادل بعض المدافعين عن الشركات العائلية بأن الجانب الإيجابي فيها هو أنها ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "makes family ties stronger",
                "textAr": "تعزز وتوثق الروابط العائلية"
            },
            {
                "id": "b",
                "textEn": "guarantees highest employee intelligence",
                "textAr": "تضمن أعلى درجات الذكاء"
            },
            {
                "id": "c",
                "textEn": "eliminates the need for taxes",
                "textAr": "تلغي الضرائب"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Supporters claim that nepotism helps maintain and strengthen foundational family bonds.",
        "explanationAr": "يرى المؤيدون أن إدارة الأعمال عائلياً تسهم في تقوية أواصر وروابط العائلة.",
        "lexiconTokens": {
            "family ties": "روابط أسرية",
            "stronger": "أقوى"
        }
    },
    {
        "id": "u3_e_08",
        "unit": 3,
        "stream": "extra",
        "topic": "Vocabulary in Context",
        "promptEn": "In the nepotism text, the word 'affluent' means ---------------",
        "promptAr": "في نص المحسوبية، تعني كلمة 'affluent' ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "wealthy and rich",
                "textAr": "ثري وميسور الحال"
            },
            {
                "id": "b",
                "textEn": "mean and cruel",
                "textAr": "لئيم وقاسٍ"
            },
            {
                "id": "c",
                "textEn": "unworthy",
                "textAr": "غير مستحق"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "'Affluent' is a formal synonym for rich, prosperous, or wealthy.",
        "explanationAr": "'Affluent' تعني الثري والغني ذو الوفرة المالية.",
        "lexiconTokens": {
            "affluent": "ثري / ميسور",
            "wealthy": "غني"
        }
    },
    {
        "id": "u3_e_09",
        "unit": 3,
        "stream": "extra",
        "topic": "Job Matching",
        "promptEn": "Nabil is a 20-year-old marketing student seeking a summer sales position with customer service duties. Which job posting suits him best?",
        "promptAr": "نبيل طالب تسويق يبلغ 20 عاماً يبحث عن وظيفة مبيعات صيفية تتطلب مساعدة الزبائن. أي إعلان يناسبه تماماً؟",
        "choices": [
            {
                "id": "a",
                "textEn": "Job 1: Retail Clothes Sales Assistant",
                "textAr": "الوظيفة 1: موظف مبيعات ملابس وتغليف هدايا"
            },
            {
                "id": "b",
                "textEn": "Job 3: IT Budgeting Specialist",
                "textAr": "الوظيفة 3: أخصائي ميزانيات تكنولوجيا المعلومات"
            },
            {
                "id": "c",
                "textEn": "Job 4: Elementary English Teacher",
                "textAr": "الوظيفة 4: معلم لغة إنجليزية للمرحلة الابتدائية"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Job Posting 1 requires assisting shoppers, arranging clothes, and sales interest, which matches Nabil.",
        "explanationAr": "الإعلان رقم 1 خاص بمبيعات الألبسة وخدمة الزبائن وهو ما يتطابق مع رغبة ومؤهلات نبيل.",
        "lexiconTokens": {
            "sales": "مبيعات",
            "retail": "تجزئة"
        }
    },
    {
        "id": "u3_e_10",
        "unit": 3,
        "stream": "extra",
        "topic": "Job Matching",
        "promptEn": "Sami is a 24-year-old Graphic Design graduate specialized in advertising and design software. Which job fits him?",
        "promptAr": "سامي خريج تصميم جرافيكي يبلغ 24 عاماً متخصص في الإعلانات وبرامج التصميم. أي وظيفة تناسبه؟",
        "choices": [
            {
                "id": "a",
                "textEn": "Job 2: Creative Graphic Designer & Advertising Specialist",
                "textAr": "الوظيفة 2: مصمم جرافيكي ومختص إعلانات مبتكر"
            },
            {
                "id": "b",
                "textEn": "Job 1: Clothes Sales Assistant",
                "textAr": "الوظيفة 1: بائع تجزئة"
            },
            {
                "id": "c",
                "textEn": "Job 4: Elementary Teacher",
                "textAr": "الوظيفة 4: معلم مدرسة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Job Posting 2 specifies university degree in Graphic Design, advertising focus, and bilingual creativity.",
        "explanationAr": "الإعلان رقم 2 يطلب بكالوريوس تصميم جرافيكي وتخصص إعلانات، وهو مطابق لسامي.",
        "lexiconTokens": {
            "graphic design": "تصميم جرافيكي",
            "advertising": "إعلان"
        }
    },
    {
        "id": "u3_e_11",
        "unit": 3,
        "stream": "extra",
        "topic": "Job Matching",
        "promptEn": "Sahel is 30 years old with an MS in Computer Science and 5 years experience as an IT Budgeting Specialist in a bank. He matches ---------------",
        "promptAr": "ساحل يبلغ 30 عاماً ويحمل ماجستير علم الحاسوب وخبرة 5 سنوات في ميزانيات IT بالبنوك. الإعلان المطابق له هو ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "Job 3: Global IT Budgeting and Systems Manager",
                "textAr": "الوظيفة 3: إدارة ومتابعة ميزانيات أنظمة تكنولوجيا المعلومات بالبنوك"
            },
            {
                "id": "b",
                "textEn": "Job 2: Graphic Designer",
                "textAr": "الوظيفة 2: مصمم"
            },
            {
                "id": "c",
                "textEn": "Job 1: Sales Assistant",
                "textAr": "الوظيفة 1: بائع"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Job Posting 3 requires 5-10 years technical IT budgeting experience in financial institutions.",
        "explanationAr": "الإعلان رقم 3 يشترط خبرة 5-10 سنوات في ميزانيات IT للبنوك والمؤسسات المالية.",
        "lexiconTokens": {
            "budgeting": "إعداد الميزانيات",
            "financial": "مالي"
        }
    },
    {
        "id": "u3_e_12",
        "unit": 3,
        "stream": "extra",
        "topic": "Job Matching",
        "promptEn": "Suha holds a bachelor's degree in English Language and Literature and wants to teach grades 1-3. She should apply for ---------------",
        "promptAr": "سهى تحمل بكالوريوس في اللغة الإنجليزية وآدابها وترغب بتدريس الصفوف 1-3. يجب أن تتقدم لـ ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "Job 4: Elementary School English Teacher",
                "textAr": "الوظيفة 4: معلمة لغة إنجليزية للمرحلة الأساسية"
            },
            {
                "id": "b",
                "textEn": "Job 3: Bank Budgeting Specialist",
                "textAr": "الوظيفة 3: أخصائي مالي"
            },
            {
                "id": "c",
                "textEn": "Job 5: Multimedia Animator",
                "textAr": "الوظيفة 5: رسام وسائط متعددة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Job Posting 4 requires a BA in English Literature and ability to work with primary grade children.",
        "explanationAr": "الإعلان 4 يطلب بكالوريوس لغة إنجليزية والقدرة على التعامل مع أطفال الصفوف 1-3.",
        "lexiconTokens": {
            "elementary": "ابتدائي / أساسي",
            "children": "أطفال"
        }
    },
    {
        "id": "u3_e_13",
        "unit": 3,
        "stream": "extra",
        "topic": "Listening: How to Find a Job",
        "promptEn": "According to the presentation, competition for good jobs was ---------------",
        "promptAr": "وفقاً لما ورد في العرض التقديمي، كانت المنافسة على الوظائف الجيدة ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "fierce",
                "textAr": "شديدة وضارية"
            },
            {
                "id": "b",
                "textEn": "easy",
                "textAr": "سهلة"
            },
            {
                "id": "c",
                "textEn": "nonexistent",
                "textAr": "معدومة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Nadia mentioned that after graduation 'the competition for jobs was fierce.'",
        "explanationAr": "وصفت ناديا المنافسة في سوق العمل بأنها كانت 'fierce' (شديدة وحامية).",
        "lexiconTokens": {
            "competition": "منافسة",
            "fierce": "شديدة / ضارية"
        }
    },
    {
        "id": "u3_e_14",
        "unit": 3,
        "stream": "extra",
        "topic": "Listening: How to Find a Job",
        "promptEn": "When seeking career opportunities, Melissa stressed the importance of being ---------------",
        "promptAr": "عند البحث عن فرص العمل، شددت ميليسا على أهمية أن يكون الخريج ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "proactive by attending fairs and speaking to advisors",
                "textAr": "مبادراً واستباقياً بحضور معارض التوظيف ولقاء المرشدين"
            },
            {
                "id": "b",
                "textEn": "relying only on classified ads",
                "textAr": "الاعتماد على الإعلانات المبوبة فقط"
            },
            {
                "id": "c",
                "textEn": "unmotivated",
                "textAr": "غير مبالٍ"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "Melissa exclaimed: 'Don't just look in classified ads... BE PROACTIVE!'",
        "explanationAr": "حثت ميليسا الطلاب على المبادرة (BE PROACTIVE) والمشاركة في معارض التوظيف.",
        "lexiconTokens": {
            "proactive": "استباقي / مبادر",
            "advisors": "مرشدون"
        }
    },
    {
        "id": "u3_e_15",
        "unit": 3,
        "stream": "extra",
        "topic": "Writing Focus: Business Letters",
        "promptEn": "When planning a formal business letter, your tone should always be ---------------",
        "promptAr": "عند كتابة رسالة عمل رسمية، يجب أن تكون نبرة الخطاب دائماً ---------------",
        "choices": [
            {
                "id": "a",
                "textEn": "polite and formal",
                "textAr": "مهذبة ورسمية"
            },
            {
                "id": "b",
                "textEn": "casual and humorous",
                "textAr": "عامية ومضحكة"
            },
            {
                "id": "c",
                "textEn": "aggressive and demanding",
                "textAr": "هجومية ومتسلطة"
            },
            {
                "id": "d",
                "textEn": "none",
                "textAr": "لا شيء مما ذكر"
            }
        ],
        "correctChoiceId": "a",
        "explanationEn": "The Writing section states that letters make the best impression when the tone is polite and formal.",
        "explanationAr": "تؤكد إرشادات الكتابة في الوحدة الثالثة على ضرورة الالتزام بنبرة مهذبة ورسمية (polite and formal).",
        "lexiconTokens": {
            "tone": "نبرة / أسلوب الخطاب",
            "polite": "مهذب",
            "formal": "رسمي"
        }
    }
];

  if (typeof window !== 'undefined') {
    window.COURSE_DATA = window.COURSE_DATA || {};
    window.COURSE_DATA.extra = window.COURSE_DATA.extra || {};
    window.COURSE_DATA.extra.unit3 = unit3_extra;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unit3_extra };
  }
})();
