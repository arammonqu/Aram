/**
 * Al-Balqa Applied University — English 102
 * Unit 1: Learning and Education
 * Module 1: Comprehensive Master Vocabulary Table
 */
(function() {
  const u1_learning_vocab = [
    {
        "id": "u1_v_01",
        "term": "lecture",
        "pos": "(n.)",
        "ipa": "/ˈlek.tʃər/",
        "meaningAr": "محاضرة",
        "definitionEn": "A formal educational talk delivered to a class of university students.",
        "definitionAr": "محاضرة أكاديمية رسمية تُلقى على طلاب الجامعة في قاعة التدريس.",
        "synonyms": [
            "academic discourse",
            "talk",
            "presentation"
        ],
        "antonyms": [
            "informal chat"
        ],
        "exampleEn": "I am attending lectures on Greek philosophy this semester.",
        "exampleAr": "أنا أحضر محاضرات في الفلسفة اليونانية هذا الفصل الدراسي.",
        "category": "glossary"
    },
    {
        "id": "u1_v_02",
        "term": "highlight",
        "pos": "(v.)",
        "ipa": "/ˈhaɪ.laɪt/",
        "meaningAr": "يبرز / يسلّط الضوء",
        "definitionEn": "To give special attention, emphasis, or prominence to something.",
        "definitionAr": "يبرز / يسلط الضوء على الشيء ويؤكد أهميته في النص أو النقاش.",
        "synonyms": [
            "emphasize",
            "underline",
            "accentuate"
        ],
        "antonyms": [
            "downplay",
            "ignore"
        ],
        "exampleEn": "The university report highlights the critical need for student counseling.",
        "exampleAr": "يسلط تقرير الجامعة الضوء على الحاجة الماسة للإرشاد الطلابي.",
        "category": "glossary"
    },
    {
        "id": "u1_v_03",
        "term": "inspiration",
        "pos": "(n.)",
        "ipa": "/ˌɪn.spɪˈreɪ.ʃən/",
        "meaningAr": "إلهام",
        "definitionEn": "The process of being mentally stimulated to do or feel something creative.",
        "definitionAr": "إلهام / تحفيز الفكر والمشاعر للقيام بعمل إبداعي استثنائي.",
        "synonyms": [
            "motivation",
            "creativity",
            "stimulus"
        ],
        "antonyms": [
            "discouragement",
            "apathy"
        ],
        "exampleEn": "Her determination to study medicine served as an inspiration to everyone.",
        "exampleAr": "كان إصرارها على دراسة الطب مصدر إلهام للجميع.",
        "category": "glossary"
    },
    {
        "id": "u1_v_04",
        "term": "register",
        "pos": "(v.)",
        "ipa": "/ˈredʒ.ɪ.stər/",
        "meaningAr": "يسجّل",
        "definitionEn": "To officially enroll or enter a student's name into a university list.",
        "definitionAr": "يسجل رسمياً في سجلات الجامعة أو المساقات الأكاديمية.",
        "synonyms": [
            "enroll",
            "sign up",
            "record"
        ],
        "antonyms": [
            "withdraw",
            "quit",
            "drop out"
        ],
        "exampleEn": "Nadia and Sara decided to register for the biology course together.",
        "exampleAr": "قررت ناديا وسارة التسجيل في مساق علم الأحياء معاً.",
        "category": "glossary"
    },
    {
        "id": "u1_v_05",
        "term": "coincidence",
        "pos": "(n.)",
        "ipa": "/kəʊˈɪn.sɪ.dəns/",
        "meaningAr": "صدفة",
        "definitionEn": "A remarkable concurrence of events without apparent causal connection.",
        "definitionAr": "صدفة غير متوقعة وتوافق أحداث دون تخطيط مسبق.",
        "synonyms": [
            "chance",
            "accident",
            "fluke"
        ],
        "antonyms": [
            "plan",
            "deliberate intention"
        ],
        "exampleEn": "What a coincidence that we both enrolled in the same morning lecture!",
        "exampleAr": "يا لها من صدفة رائعة أننا سجلنا في نفس المحاضرة الصباحية!",
        "category": "glossary"
    },
    {
        "id": "u1_v_06",
        "term": "demonstrate",
        "pos": "(v.)",
        "ipa": "/ˈdem.ən.streɪt/",
        "meaningAr": "يوضح / يبرهن",
        "definitionEn": "To clearly show, explain, or prove something by using evidence.",
        "definitionAr": "يوضح / يبرهن ويثبت صحة الشيء بالأدلة والبراهين العملية.",
        "synonyms": [
            "prove",
            "show",
            "illustrate"
        ],
        "antonyms": [
            "disprove",
            "refute",
            "hide"
        ],
        "exampleEn": "Research findings demonstrate that university graduates earn higher salaries.",
        "exampleAr": "تُظهر نتائج الأبحاث وتبرهن أن خريجي الجامعات يتقاضون رواتب أعلى.",
        "category": "glossary"
    },
    {
        "id": "u1_v_07",
        "term": "sophomore",
        "pos": "(n.)",
        "ipa": "/ˈsɒf.ə.mɔːr/",
        "meaningAr": "طالب سنة ثانية",
        "definitionEn": "A student in the second year of study at a college or university.",
        "definitionAr": "طالب في السنة الجامعية الثانية.",
        "synonyms": [
            "second-year student"
        ],
        "antonyms": [
            "freshman",
            "senior"
        ],
        "exampleEn": "As a sophomore, she felt much more confident navigating the campus.",
        "exampleAr": "بصفتها طالبة في السنة الثانية، شعرت بثقة أكبر في التنقل داخل الحرم الجامعي.",
        "category": "glossary"
    },
    {
        "id": "u1_v_08",
        "term": "tutor",
        "pos": "(n.)",
        "ipa": "/ˈtjuː.tər/",
        "meaningAr": "مرشد / معلّم خاص",
        "definitionEn": "A private teacher or university instructor who assists an individual student.",
        "definitionAr": "معلم أو موجه أكاديمي يقدّم دروساً وإرشادات فردية للطلاب.",
        "synonyms": [
            "instructor",
            "private teacher",
            "mentor"
        ],
        "antonyms": [
            "student",
            "pupil"
        ],
        "exampleEn": "He met with his academic tutor to review his calculus assignments.",
        "exampleAr": "التقى بمعلمه الخاص لمراجعة واجبات التفاضل والتكامل.",
        "category": "glossary"
    },
    {
        "id": "u1_v_09",
        "term": "supervisor",
        "pos": "(n.)",
        "ipa": "/ˈsuː.pə.vaɪ.zər/",
        "meaningAr": "مشرف أكاديمي",
        "definitionEn": "A professor appointed to guide and oversee a student's research thesis.",
        "definitionAr": "أستاذ جامعي مكلّف بتوجيه ومتابعة الطالب في بحثه الأكاديمي.",
        "synonyms": [
            "advisor",
            "director",
            "mentor"
        ],
        "antonyms": [
            "subordinate",
            "advisee"
        ],
        "exampleEn": "The supervisor provided valuable feedback on the first draft of the thesis.",
        "exampleAr": "قدم المشرف الأكاديمي ملاحظات قيّمة حول المسودة الأولى للأطروحة.",
        "category": "glossary"
    },
    {
        "id": "u1_v_10",
        "term": "thesis",
        "pos": "(n.)",
        "ipa": "/ˈθiː.sɪs/",
        "meaningAr": "أطروحة / رسالة علمية",
        "definitionEn": "A long research essay written by a candidate for an academic degree.",
        "definitionAr": "بحث علمي مفصل وموسع يقدَّم لنيل درجة الماجستير أو البكالوريوس.",
        "synonyms": [
            "dissertation",
            "treatise",
            "academic paper"
        ],
        "antonyms": [
            "summary",
            "brief note"
        ],
        "exampleEn": "She spent months in the laboratory gathering data for her Master's thesis.",
        "exampleAr": "أمضت شهوراً في المختبر لجمع البيانات لأطروحة الماجستير الخاصة بها.",
        "category": "glossary"
    },
    {
        "id": "u1_v_11",
        "term": "dissertation",
        "pos": "(n.)",
        "ipa": "/ˌdɪs.əˈteɪ.ʃən/",
        "meaningAr": "رسالة دكتوراه",
        "definitionEn": "A substantial, original research treatise written for a doctorate degree (Ph.D.).",
        "definitionAr": "بحث أكاديمي موسع يمثل مساهمة علمية أصيلة للحصول على درجة الدكتوراه.",
        "synonyms": [
            "doctoral thesis",
            "treatise"
        ],
        "antonyms": [
            "short essay"
        ],
        "exampleEn": "His doctoral dissertation explored the phonetic patterns of Semitic languages.",
        "exampleAr": "تناولت رسالة الدكتوراه الخاصة به الأنماط الصوتية للغات السامية.",
        "category": "glossary"
    },
    {
        "id": "u1_v_12",
        "term": "module",
        "pos": "(n.)",
        "ipa": "/ˈmɒdʒ.uːl/",
        "meaningAr": "وحدة دراسية",
        "definitionEn": "One of the individual units of study or courses that make up a complete curriculum.",
        "definitionAr": "جزء أو وحدة تعليمية مستقلة تشكل جزءاً من برنامج دراسي متكامل.",
        "synonyms": [
            "course unit",
            "subject component"
        ],
        "antonyms": [
            "whole program"
        ],
        "exampleEn": "The grammar module is designed to improve students' academic writing skills.",
        "exampleAr": "صُممت الوحدة الدراسية للقواعد لتحسين مهارات الكتابة الأكاديمية للطلاب.",
        "category": "glossary"
    },
    {
        "id": "u1_v_13",
        "term": "bachelor",
        "pos": "(n.)",
        "ipa": "/ˈbætʃ.əl.ər/",
        "meaningAr": "بكالوريوس",
        "definitionEn": "The first degree awarded by a university upon completing undergraduate studies.",
        "definitionAr": "الدرجة الجامعية الأولى الممنوحة بعد إتمام مرحلة البكالوريوس بنجاح.",
        "synonyms": [
            "undergraduate degree",
            "B.A. / B.Sc."
        ],
        "antonyms": [
            "master's",
            "doctorate"
        ],
        "exampleEn": "Omar proudly received his Bachelor of Science in civil engineering.",
        "exampleAr": "حصل عمر بفخر على درجة البكالوريوس في الهندسة المدنية.",
        "category": "glossary"
    },
    {
        "id": "u1_v_14",
        "term": "tuition fees",
        "pos": "(n. phr.)",
        "ipa": "/tjuːˈɪʃ.ən fiːz/",
        "meaningAr": "رسوم دراسية",
        "definitionEn": "The money paid by students to a college or university for their education.",
        "definitionAr": "المبالغ المالية التي يدفعها الطالب للجامعة مقابل تعليمه ومساقاته.",
        "synonyms": [
            "education costs",
            "college charges"
        ],
        "antonyms": [
            "scholarship grant"
        ],
        "exampleEn": "University tuition fees can be paid in scheduled monthly installments.",
        "exampleAr": "يمكن دفع الرسوم الجامعية على أقساط شهرية مجدولة.",
        "category": "glossary"
    },
    {
        "id": "u1_v_15",
        "term": "determination",
        "pos": "(n.)",
        "ipa": "/dɪˌtɜː.mɪˈneɪ.ʃən/",
        "meaningAr": "عزيمة / إصرار",
        "definitionEn": "The firm firmness of purpose and resolution to achieve a difficult goal.",
        "definitionAr": "قوة الإرادة والإصرار الثابت لتحقيق هدف صعب دون استسلام.",
        "synonyms": [
            "resolve",
            "perseverance",
            "willpower"
        ],
        "antonyms": [
            "hesitation",
            "wavering",
            "apathy"
        ],
        "exampleEn": "With hard work and determination, Sami passed his comprehensive exams.",
        "exampleAr": "بالعمل الجاد والعزيمة والإصرار، اجتاز سامي امتحاناته الشاملة.",
        "category": "glossary"
    },
    {
        "id": "u1_v_16",
        "term": "adjust",
        "pos": "(v.)",
        "ipa": "/əˈdʒʌst/",
        "meaningAr": "يتأقلم / يتكيف",
        "definitionEn": "To alter one's habits or behavior to become comfortable in a new environment.",
        "definitionAr": "يتأقلم ويتكيف مع ظروف جديدة أو بيئة أكاديمية مختلفة.",
        "synonyms": [
            "adapt",
            "accommodate",
            "fit in"
        ],
        "antonyms": [
            "resist",
            "remain rigid"
        ],
        "exampleEn": "It took several weeks for international students to adjust to university life.",
        "exampleAr": "استغرق الأمر عدة أسابيع ليتأقلم الطلاب الدوليون مع الحياة الجامعية.",
        "category": "glossary"
    },
    {
        "id": "u1_v_17",
        "term": "administration",
        "pos": "(n.)",
        "ipa": "/ədˌmɪn.ɪˈstreɪ.ʃən/",
        "meaningAr": "إدارة",
        "definitionEn": "The officials and department responsible for managing university operations.",
        "definitionAr": "الجهاز الإداري والمسؤولون عن تنظيم وتسيير شؤون الجامعة.",
        "synonyms": [
            "management",
            "leadership",
            "governance"
        ],
        "antonyms": [
            "student body"
        ],
        "exampleEn": "The university administration announced the registration dates for summer.",
        "exampleAr": "أعلنت إدارة الجامعة عن مواعيد التسجيل للفصل الصيفي.",
        "category": "glossary"
    },
    {
        "id": "u1_v_18",
        "term": "internship",
        "pos": "(n.)",
        "ipa": "/ˈɪn.tɜːn.ʃɪp/",
        "meaningAr": "تدريب عملي",
        "definitionEn": "A period of supervised practical work experience offered by an organization.",
        "definitionAr": "فترة تدريب مهني وعملي ميداني يخوضها الطالب لكسب خبرة عملية.",
        "synonyms": [
            "practical training",
            "apprenticeship"
        ],
        "antonyms": [
            "unemployed period"
        ],
        "exampleEn": "Completing a summer internship is a mandatory requirement for graduation.",
        "exampleAr": "يُعد إكمال تدريب صيفي متطلباً إلزامياً للتخرج.",
        "category": "glossary"
    },
    {
        "id": "u1_v_19",
        "term": "assist",
        "pos": "(v.)",
        "ipa": "/əˈsɪst/",
        "meaningAr": "يساعد / يعاون",
        "definitionEn": "To help or give aid to someone in achieving a task.",
        "definitionAr": "يقدم المساعدة والعون لشخص آخر لإنجاز مهمة.",
        "synonyms": [
            "help",
            "aid",
            "support"
        ],
        "antonyms": [
            "hinder",
            "obstruct",
            "prevent"
        ],
        "exampleEn": "Teaching assistants assist professors during laboratory experiments.",
        "exampleAr": "يقوم مساعدو التدريس بمساعدة الأساتذة أثناء التجارب المخبرية.",
        "category": "glossary"
    },
    {
        "id": "u1_v_20",
        "term": "culture",
        "pos": "(n.)",
        "ipa": "/ˈkʌl.tʃər/",
        "meaningAr": "ثقافة",
        "definitionEn": "The state of intellectual, artistic, and social development of a society.",
        "definitionAr": "حالة التطور الفكري والأدبي والقيم المجتمعية لشعب أو أمة.",
        "synonyms": [
            "civilization",
            "customs",
            "traditions"
        ],
        "antonyms": [
            "barbarism"
        ],
        "exampleEn": "Studying literature deepens our understanding of world culture.",
        "exampleAr": "دراسة الأدب تعمق فهمنا لثقافات العالم المختلفة.",
        "category": "glossary"
    },
    {
        "id": "u1_v_21",
        "term": "massive",
        "pos": "(adj.)",
        "ipa": "/ˈmæs.ɪv/",
        "meaningAr": "ضخم / هائل",
        "definitionEn": "Exceptionally large, solid, heavy, and immense in size or degree.",
        "definitionAr": "كبير الحجم وهائل جداً وضخم بشكل استثنائي.",
        "synonyms": [
            "huge",
            "gigantic",
            "enormous"
        ],
        "antonyms": [
            "tiny",
            "miniature"
        ],
        "exampleEn": "The university built a massive modern library containing thousands of books.",
        "exampleAr": "بنت الجامعة مكتبة ضخمة وحديثة تحتوي على آلاف الكتب.",
        "category": "opposite"
    },
    {
        "id": "u1_v_22",
        "term": "tiny",
        "pos": "(adj.)",
        "ipa": "/ˈtaɪ.ni/",
        "meaningAr": "صغير جداً",
        "definitionEn": "Extremely small in size, amount, or physical dimensions.",
        "definitionAr": "دقيق وصغير الحجم للغاية والضد المباشر لكلمة massive.",
        "synonyms": [
            "minute",
            "microscopic",
            "small"
        ],
        "antonyms": [
            "massive",
            "huge",
            "gigantic"
        ],
        "exampleEn": "A tiny spelling error in the code caused the whole program to fail.",
        "exampleAr": "تسبب خطأ إملائي صغير جداً في الكود في فشل البرنامج بأكمله.",
        "category": "opposite"
    },
    {
        "id": "u1_v_23",
        "term": "retrieve",
        "pos": "(v.)",
        "ipa": "/rɪˈtriːv/",
        "meaningAr": "يسترجع",
        "definitionEn": "To find and get back lost information or recover stored data.",
        "definitionAr": "يسترجع ويستعيد معلومات أو بيانات مخزنة والضد لكلمة lose.",
        "synonyms": [
            "recover",
            "regain",
            "fetch"
        ],
        "antonyms": [
            "lose",
            "misplace"
        ],
        "exampleEn": "Students can easily retrieve their exam transcripts from the university portal.",
        "exampleAr": "يمكن للطلاب استرجاع كشوف علاماتهم بسهولة من بوابة الجامعة الإلكترونية.",
        "category": "opposite"
    },
    {
        "id": "u1_v_24",
        "term": "hinder",
        "pos": "(v.)",
        "ipa": "/ˈhɪn.dər/",
        "meaningAr": "يعيق / يعرقل",
        "definitionEn": "To create difficulties for someone, resulting in delay or obstruction.",
        "definitionAr": "يعيق ويعرقل التقدم ويضع العقبات والضد المباشر لكلمة help أو assist.",
        "synonyms": [
            "obstruct",
            "impede",
            "block"
        ],
        "antonyms": [
            "help",
            "assist",
            "facilitate"
        ],
        "exampleEn": "Loud background noise will hinder your concentration during exams.",
        "exampleAr": "الضوضاء العالية في الخلفية ستعيق تركيزك أثناء الامتحانات.",
        "category": "opposite"
    },
    {
        "id": "u1_v_25",
        "term": "compete",
        "pos": "(v.)",
        "ipa": "/kəmˈpiːt/",
        "meaningAr": "ينافس",
        "definitionEn": "To strive to gain or win something by defeating others in an exam or race.",
        "definitionAr": "يسعى للتفوق والتنافس ضد الآخرين والضد لكلمة share أو collaborate.",
        "synonyms": [
            "contend",
            "vie",
            "rival"
        ],
        "antonyms": [
            "share",
            "cooperate",
            "collaborate"
        ],
        "exampleEn": "Thousands of applicants compete annually for university medical scholarships.",
        "exampleAr": "يتنافس آلاف المتقدمين سنوياً للحصول على المنح الطبية الجامعية.",
        "category": "opposite"
    },
    {
        "id": "u1_v_26",
        "term": "enroll",
        "pos": "(v.)",
        "ipa": "/ɪnˈrəʊl/",
        "meaningAr": "يسجّل / ينضم",
        "definitionEn": "To officially register as a member of a course or university.",
        "definitionAr": "يسجل رسمياً وينضم إلى برنامج دراسي والضد لكلمة quit أو drop out.",
        "synonyms": [
            "register",
            "matriculate",
            "sign up"
        ],
        "antonyms": [
            "quit",
            "withdraw",
            "drop out"
        ],
        "exampleEn": "More than five hundred new freshmen will enroll this semester.",
        "exampleAr": "سيسجل أكثر من خمسمائة طالب جديد في هذا الفصل الدراسي.",
        "category": "opposite"
    },
    {
        "id": "u1_v_27",
        "term": "disbelief",
        "pos": "(n.)",
        "ipa": "/ˌdɪs.bɪˈliːf/",
        "meaningAr": "عدم تصديق / دهشة",
        "definitionEn": "Inability or refusal to accept that something is true or real.",
        "definitionAr": "عدم القدرة على التصديق والشك والذهول والضد المباشر لكلمة belief.",
        "synonyms": [
            "skepticism",
            "incredulity",
            "doubt"
        ],
        "antonyms": [
            "belief",
            "faith",
            "trust"
        ],
        "exampleEn": "He stared in disbelief at his perfect final exam score.",
        "exampleAr": "حدق في دهشة وعدم تصديق في علامته الكاملة في الامتحان النهائي.",
        "category": "opposite"
    },
    {
        "id": "u1_v_28",
        "term": "imperative",
        "pos": "(adj.)",
        "ipa": "/ɪmˈper.ə.tɪv/",
        "meaningAr": "ضروري / إلزامي",
        "definitionEn": "Of vital importance; crucial, mandatory, and urgently required.",
        "definitionAr": "ضروري وإلزامي وبالغ الأهمية ولا يحتمل التأخير.",
        "synonyms": [
            "vital",
            "crucial",
            "essential",
            "urgent"
        ],
        "antonyms": [
            "optional",
            "trivial",
            "unnecessary"
        ],
        "exampleEn": "It is imperative that all students submit their graduation applications today.",
        "exampleAr": "من الضروري والإلزامي أن يقدم جميع الطلاب طلبات تخرجهم اليوم.",
        "category": "reading"
    },
    {
        "id": "u1_v_29",
        "term": "immensely",
        "pos": "(adv.)",
        "ipa": "/ɪˈmens.li/",
        "meaningAr": "بشكل هائل",
        "definitionEn": "To an exceedingly great extent or degree; extremely and immensely.",
        "definitionAr": "بدرجة هائلة وكبيرة للغاية وبشكل غير محدود.",
        "synonyms": [
            "hugely",
            "enormously",
            "vastly"
        ],
        "antonyms": [
            "slightly",
            "barely"
        ],
        "exampleEn": "The tutorial sessions helped students immensely in mastering grammar.",
        "exampleAr": "ساعدت جلسات الإرشاد الطلاب بشكل هائل في إتقان القواعد.",
        "category": "reading"
    },
    {
        "id": "u1_v_30",
        "term": "interact",
        "pos": "(v.)",
        "ipa": "/ˌɪn.təˈrækt/",
        "meaningAr": "يتفاعل",
        "definitionEn": "To act mutually and communicate with others during academic discussions.",
        "definitionAr": "يتفاعل ويتواصل بشكل متبادل مع الزملاء والأساتذة.",
        "synonyms": [
            "communicate",
            "engage",
            "collaborate"
        ],
        "antonyms": [
            "isolate",
            "withdraw"
        ],
        "exampleEn": "Professors encourage students to interact actively during seminars.",
        "exampleAr": "يشجع الأساتذة الطلاب على التفاعل بنشاط أثناء الندوات.",
        "category": "reading"
    },
    {
        "id": "u1_v_31",
        "term": "strategy",
        "pos": "(n.)",
        "ipa": "/ˈstræt.ə.dʒi/",
        "meaningAr": "استراتيجية / خطة",
        "definitionEn": "A plan of action designed to achieve a major or overall academic aim.",
        "definitionAr": "خطة عمل مدروسة وممنهجة لتحقيق أهداف تعليمية وتفوق دراسي.",
        "synonyms": [
            "plan of action",
            "scheme",
            "tactic"
        ],
        "antonyms": [
            "impulsive action"
        ],
        "exampleEn": "Time management is an effective study strategy before final exams.",
        "exampleAr": "تنظيم وإدارة الوقت استراتيجية دراسية فعالة قبل الامتحانات النهائية.",
        "category": "reading"
    },
    {
        "id": "u1_v_32",
        "term": "freshman",
        "pos": "(n.)",
        "ipa": "/ˈfreʃ.mən/",
        "meaningAr": "طالب سنة أولى",
        "definitionEn": "A first-year student at a university, high school, or college.",
        "definitionAr": "طالب مستجد في سنته الجامعية الأولى.",
        "synonyms": [
            "first-year student",
            "novice"
        ],
        "antonyms": [
            "senior",
            "graduate"
        ],
        "exampleEn": "The university holds an orientation week to welcome every freshman.",
        "exampleAr": "تنظم الجامعة أسبوعاً إرشادياً للترحيب بكل طالب في السنة الأولى.",
        "category": "reading"
    },
    {
        "id": "u1_v_33",
        "term": "junior",
        "pos": "(n.)",
        "ipa": "/ˈdʒuː.ni.ər/",
        "meaningAr": "طالب سنة ثالثة",
        "definitionEn": "A student in the third year of study at a four-year college or university.",
        "definitionAr": "طالب في السنة الجامعية الثالثة.",
        "synonyms": [
            "third-year student"
        ],
        "antonyms": [
            "freshman"
        ],
        "exampleEn": "As a junior, Layla began preparing her senior research proposal.",
        "exampleAr": "بصفتها طالبة في السنة الثالثة، بدأت ليلى بإعداد مقترح بحث التخرج.",
        "category": "reading"
    },
    {
        "id": "u1_v_34",
        "term": "senior",
        "pos": "(n.)",
        "ipa": "/ˈsiː.ni.ər/",
        "meaningAr": "طالب سنة رابعة / تخرج",
        "definitionEn": "A student in the final (fourth) year of study before graduation.",
        "definitionAr": "طالب في السنة الجامعية الرابعة والنهائية (سنة التخرج).",
        "synonyms": [
            "final-year student",
            "graduating student"
        ],
        "antonyms": [
            "freshman",
            "sophomore"
        ],
        "exampleEn": "Senior engineering students will present their graduation projects in May.",
        "exampleAr": "سيقدم طلاب الهندسة في سنة التخرج مشاريع تخرجهم في شهر مايو.",
        "category": "reading"
    },
    {
        "id": "u1_v_35",
        "term": "credentials",
        "pos": "(n. pl.)",
        "ipa": "/krɪˈden.ʃəlz/",
        "meaningAr": "مؤهلات / شهادات",
        "definitionEn": "Qualifications, achievements, or documents proving someone's competence.",
        "definitionAr": "المؤهلات العلمية والشهادات الرسمية التي تثبت كفاءة وخبرة الشخص.",
        "synonyms": [
            "qualifications",
            "certificates",
            "testimonials"
        ],
        "antonyms": [
            "incompetence"
        ],
        "exampleEn": "The professor boasts outstanding academic credentials from top universities.",
        "exampleAr": "يتمتع الأستاذ بمؤهلات وشهادات أكاديمية متميزة من أرقى الجامعات.",
        "category": "reading"
    },
    {
        "id": "u1_v_36",
        "term": "aphasia",
        "pos": "(n.)",
        "ipa": "/əˈfeɪ.zi.ə/",
        "meaningAr": "حبسة كلامية",
        "definitionEn": "Loss of ability to understand or express speech, caused by brain damage.",
        "definitionAr": "فقدان القدرة على فهم أو إنتاج الكلام واللغة بسبب تلف في الدماغ.",
        "synonyms": [
            "language disorder",
            "speech impairment"
        ],
        "antonyms": [
            "fluency",
            "articulation"
        ],
        "exampleEn": "Patients with aphasia undergo specialized speech therapy rehabilitation.",
        "exampleAr": "يخضع المصابون بالحبسة الكلامية لعلاج نطقي وإعادة تأهيل تخصصي.",
        "category": "reading"
    },
    {
        "id": "u1_v_37",
        "term": "articulation",
        "pos": "(n.)",
        "ipa": "/ɑːˌtɪk.jəˈleɪ.ʃən/",
        "meaningAr": "نطق / مخارج الحروف",
        "definitionEn": "The formation of clear and distinct sounds in speech.",
        "definitionAr": "النطق الصوتي السليم وإخراج أصوات الحروف بوضوح ودقة.",
        "synonyms": [
            "enunciation",
            "pronunciation",
            "clarity"
        ],
        "antonyms": [
            "mumbling",
            "slurring"
        ],
        "exampleEn": "Clear phonological articulation is crucial for effective public speaking.",
        "exampleAr": "يُعد النطق الصوتي الواضح أمراً جوهرياً للتحدث الفعال أمام الجمهور.",
        "category": "reading"
    },
    {
        "id": "u1_v_38",
        "term": "retention",
        "pos": "(n.)",
        "ipa": "/rɪˈten.ʃən/",
        "meaningAr": "احتفاظ / استبقاء",
        "definitionEn": "The continued use, existence, or mental storage of knowledge in memory.",
        "definitionAr": "القدرة على حفظ المعلومات واستبقائها وتثبيتها في الذاكرة طويلة المدى.",
        "synonyms": [
            "preservation",
            "remembering",
            "holding"
        ],
        "antonyms": [
            "forgetting",
            "loss"
        ],
        "exampleEn": "Active revision techniques significantly boost memory retention.",
        "exampleAr": "تُعزز أساليب المراجعة النشطة القدرة على حفظ واستبقاء المعلومات في الذاكرة.",
        "category": "reading"
    }
];

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.vocab = window.COURSE_LEARNING_DATA.vocab || {};
    window.COURSE_LEARNING_DATA.vocab.unit1 = u1_learning_vocab;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u1_learning_vocab };
  }
})();
