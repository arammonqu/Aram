/**
 * Al-Balqa Applied University — English 102
 * Unit 1: Learning and Education
 * Module 2: Grammar Academy (English Rule Mastery & Structured Rule Tables)
 */
(function() {
  const u1_learning_grammar = {
    unit: 1,
    titleEn: "Present Simple vs. Present Continuous & Stative Verbs",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Present Simple Tense (Affirmative Form)
      // ---------------------------------------------------------------------
      {
        id: "u1_g_sec1",
        topicEn: "1. Present Simple Tense: Affirmative Rules & Subject Agreement",
        summaryEn: "The Present Simple is used for universal scientific facts, general truths, regular daily habits, and permanent states.",
        ruleTable: {
          headers: ["Subject / Person", "Verb Form Formula", "Example Verb (work)", "Example Verb (study)"],
          rows: [
            {
              subject: "He / She / It<br><span class='rule-subtext'>Singular Nouns (e.g., Sarah, The teacher, An orange tree)</span>",
              formula: "<span class='hl-verb'>Verb + -s / -es / -ies</span>",
              ex1: "<span class='hl-verb'>works</span>",
              ex2: "<span class='hl-verb'>studies</span>"
            },
            {
              subject: "I / You / We / They<br><span class='rule-subtext'>Plural Nouns & Compound Names (e.g., Sami and Omar, Students)</span>",
              formula: "<span class='hl-verb'>Base Verb (Infinitive)</span>",
              ex1: "<span class='hl-verb'>work</span>",
              ex2: "<span class='hl-verb'>study</span>"
            }
          ]
        },
        spellingRules: {
          title: "Third-Person Singular (-s / -es / -ies) Spelling Rules",
          rules: [
            {
              condition: "General regular verbs",
              change: "Add <strong>-s</strong>",
              examples: "speak -> <span class='hl-verb'>speaks</span> | read -> <span class='hl-verb'>reads</span> | live -> <span class='hl-verb'>lives</span>"
            },
            {
              condition: "Verbs ending in <strong>-ch, -sh, -ss, -x, -o, -zz</strong>",
              change: "Add <strong>-es</strong>",
              examples: "watch -> <span class='hl-verb'>watches</span> | pass -> <span class='hl-verb'>passes</span> | go -> <span class='hl-verb'>goes</span> | fix -> <span class='hl-verb'>fixes</span>"
            },
            {
              condition: "Verbs ending in <strong>Consonant + -y</strong>",
              change: "Change <strong>-y</strong> to <strong>-ies</strong>",
              examples: "study -> <span class='hl-verb'>studies</span> | try -> <span class='hl-verb'>tries</span> | carry -> <span class='hl-verb'>carries</span>"
            },
            {
              condition: "Verbs ending in <strong>Vowel (a,e,i,o,u) + -y</strong>",
              change: "Keep <strong>-y</strong> and add <strong>-s</strong> only",
              examples: "buy -> <span class='hl-verb'>buys</span> | play -> <span class='hl-verb'>plays</span> | enjoy -> <span class='hl-verb'>enjoys</span>"
            }
          ]
        },
        cases: [
          {
            category: "1st Person Singular (I)",
            sentenceEn: "<span class='hl-subj'>I</span> <span class='hl-verb'>study</span> English literature at the university.",
            sentenceAr: "أنا أدرس الأدب الإنجليزي في الجامعة."
          },
          {
            category: "1st Person Plural (We)",
            sentenceEn: "<span class='hl-subj'>We</span> <span class='hl-verb'>attend</span> academic lectures every Monday morning.",
            sentenceAr: "نحن نحضر المحاضرات الأكاديمية كل صباح اثنين."
          },
          {
            category: "2nd Person Singular/Plural (You)",
            sentenceEn: "<span class='hl-subj'>You</span> <span class='hl-verb'>speak</span> English very fluently.",
            sentenceAr: "أنت تتحدث الإنجليزية بطلاقة كبيرة."
          },
          {
            category: "3rd Person Plural Pronoun (They)",
            sentenceEn: "<span class='hl-subj'>They</span> <span class='hl-verb'>live</span> in Amman near the university campus.",
            sentenceAr: "هم يعيشون في عمّان بالقرب من الحرم الجامعي."
          },
          {
            category: "Compound Plural Subjects (2 People with 'and')",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-verb'>study</span> mechanical engineering together.",
            sentenceAr: "سامي وعمر يدرسان الهندسة الميكانيكية معاً."
          },
          {
            category: "Plural Common Nouns",
            sentenceEn: "<span class='hl-subj'>Orange trees</span> <span class='hl-verb'>grow</span> in warm Mediterranean climates.",
            sentenceAr: "أشجار البرتقال تنمو في المناخات المتوسطية الدافئة."
          },
          {
            category: "3rd Person Singular Pronoun (He)",
            sentenceEn: "<span class='hl-subj'>He</span> <span class='hl-verb'>works</span> as an academic tutor in the math department.",
            sentenceAr: "هو يعمل كموجه أكاديمي في قسم الرياضيات."
          },
          {
            category: "3rd Person Singular Pronoun (She)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-verb'>teaches</span> calculus to sophomore students.",
            sentenceAr: "هي تُدرّس التفاضل لطلاب السنة الثانية."
          },
          {
            category: "3rd Person Singular Pronoun (It)",
            sentenceEn: "<span class='hl-subj'>It</span> <span class='hl-verb'>rains</span> heavily in the northern mountains during winter.",
            sentenceAr: "إنها تمطر بغزارة في الجبال الشمالية خلال الشتاء."
          },
          {
            category: "Singular Proper Name (Sarah)",
            sentenceEn: "<span class='hl-subj'>Sarah</span> <span class='hl-verb'>writes</span> her Master's thesis with great determination.",
            sentenceAr: "سارة تكتب رسالة الماجستير الخاصة بها بعزيمة كبيرة."
          },
          {
            category: "Singular Common Noun (An orange tree)",
            sentenceEn: "<span class='hl-subj'>An orange tree</span> <span class='hl-verb'>grows</span> slowly in dry soil.",
            sentenceAr: "تنمو شجرة البرتقال ببطء في التربة الجافة."
          },
          {
            category: "Spelling: -es ending after -ch",
            sentenceEn: "<span class='hl-subj'>Ali</span> <span class='hl-verb'>watches</span> educational documentaries every evening.",
            sentenceAr: "علي يشاهد البرامج الوثائقية التعليمية كل مساء."
          },
          {
            category: "Spelling: -ies ending after consonant + y",
            sentenceEn: "<span class='hl-subj'>Layla</span> <span class='hl-verb'>studies</span> Greek philosophy this semester.",
            sentenceAr: "ليلى تدرس الفلسفة اليونانية هذا الفصل."
          },
          {
            category: "Spelling: -s ending after vowel + y",
            sentenceEn: "<span class='hl-subj'>Zaid</span> <span class='hl-verb'>buys</span> a new textbook from the campus bookstore.",
            sentenceAr: "زيد يشتري كتاباً دراسياً جديداً من مكتبة الجامعة."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: Present Simple (Negative & Question Syntax)
      // ---------------------------------------------------------------------
      {
        id: "u1_g_sec2",
        topicEn: "2. Present Simple: Negative & Question Rules",
        summaryEn: "Negatives and questions use the auxiliary verbs 'do' and 'does'. The main verb always reverts to its base form (infinitive without -s).",
        ruleTable: {
          headers: ["Sentence Type", "Subject", "Auxiliary + Main Verb", "Example"],
          rows: [
            {
              subject: "Negative: Plural",
              formula: "I / You / We / They / Sami and Omar",
              ex1: "<span class='hl-aux'>do not (don't)</span> + <span class='hl-verb'>Base Verb</span>",
              ex2: "They <span class='hl-aux'>don't</span> <span class='hl-verb'>attend</span> class on Fridays."
            },
            {
              subject: "Negative: Singular",
              formula: "He / She / It / Sarah",
              ex1: "<span class='hl-aux'>does not (doesn't)</span> + <span class='hl-verb'>Base Verb</span>",
              ex2: "She <span class='hl-aux'>doesn't</span> <span class='hl-verb'>like</span> noisy environments."
            },
            {
              subject: "Yes/No Question: Plural",
              formula: "Do + (I / you / we / they / 2 people) + Base Verb?",
              ex1: "<span class='hl-aux'>Do</span> ... <span class='hl-verb'>Base Verb</span>?",
              ex2: "<span class='hl-aux'>Do</span> Sami and Omar <span class='hl-verb'>study</span> together?"
            },
            {
              subject: "Yes/No Question: Singular",
              formula: "Does + (he / she / it / singular noun) + Base Verb?",
              ex1: "<span class='hl-aux'>Does</span> ... <span class='hl-verb'>Base Verb</span>?",
              ex2: "<span class='hl-aux'>Does</span> Sarah <span class='hl-verb'>teach</span> English at university?"
            }
          ]
        },
        cases: [
          {
            category: "Negative: Compound Plural (Sami and Omar)",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-aux'>do not</span> <span class='hl-verb'>waste</span> their study time.",
            sentenceAr: "سامي وعمر لا يضيعان وقتهما الدراسي."
          },
          {
            category: "Negative: Singular Pronoun (He)",
            sentenceEn: "<span class='hl-subj'>He</span> <span class='hl-aux'>does not</span> <span class='hl-verb'>need</span> extra tutoring in calculus.",
            sentenceAr: "هو لا يحتاج إلى دروس تقوية إضافية في التفاضل."
          },
          {
            category: "Question: Plural Subjects (Do)",
            sentenceEn: "<span class='hl-aux'>Do</span> <span class='hl-subj'>the students</span> <span class='hl-verb'>understand</span> the module requirements?",
            sentenceAr: "هل يفهم الطلاب متطلبات الوحدة الدراسية؟"
          },
          {
            category: "Question: Singular Subject (Does)",
            sentenceEn: "<span class='hl-aux'>Does</span> <span class='hl-subj'>the supervisor</span> <span class='hl-verb'>review</span> research proposals weekly?",
            sentenceAr: "هل يراجع المشرف مقترحات الأبحاث أسبوعياً؟"
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 3: Present Continuous Tense
      // ---------------------------------------------------------------------
      {
        id: "u1_g_sec3",
        topicEn: "3. Present Continuous Tense: Ongoing Actions & Complaints",
        summaryEn: "Used for actions happening right now at the moment of speaking (signal cues: Look!, Listen!, right now) or expressing frequent irritation/complaint with 'always'.",
        ruleTable: {
          headers: ["Subject", "Be Auxiliary", "Main Verb Form", "Example"],
          rows: [
            {
              subject: "I",
              formula: "<span class='hl-aux'>am</span>",
              ex1: "<span class='hl-verb'>Verb + -ing</span>",
              ex2: "I <span class='hl-aux'>am</span> <span class='hl-verb'>writing</span> my thesis now."
            },
            {
              subject: "He / She / It / Sarah",
              formula: "<span class='hl-aux'>is</span>",
              ex1: "<span class='hl-verb'>Verb + -ing</span>",
              ex2: "Sarah <span class='hl-aux'>is</span> <span class='hl-verb'>studying</span> in the library."
            },
            {
              subject: "We / You / They / Sami and Omar",
              formula: "<span class='hl-aux'>are</span>",
              ex1: "<span class='hl-verb'>Verb + -ing</span>",
              ex2: "Sami and Omar <span class='hl-aux'>are</span> <span class='hl-verb'>waiting</span> for the bus."
            }
          ]
        },
        spellingRules: {
          title: "Present Participle (-ing) Spelling Rules",
          rules: [
            {
              condition: "Monosyllabic CVC verbs (Consonant-Vowel-Consonant)",
              change: "Double the final consonant + <strong>-ing</strong>",
              examples: "swim -> <span class='hl-verb'>swimming</span> | sit -> <span class='hl-verb'>sitting</span> | run -> <span class='hl-verb'>running</span>"
            },
            {
              condition: "Verbs ending in silent <strong>-e</strong>",
              change: "Drop the <strong>-e</strong> and add <strong>-ing</strong>",
              examples: "write -> <span class='hl-verb'>writing</span> | make -> <span class='hl-verb'>making</span> | drive -> <span class='hl-verb'>driving</span>"
            },
            {
              condition: "Verbs ending in <strong>-ie</strong>",
              change: "Change <strong>-ie</strong> to <strong>-y</strong> + <strong>-ing</strong>",
              examples: "lie -> <span class='hl-verb'>lying</span> | die -> <span class='hl-verb'>dying</span> | tie -> <span class='hl-verb'>tying</span>"
            }
          ]
        },
        cases: [
          {
            category: "Action in Progress Right Now (Look!)",
            sentenceEn: "<span class='hl-marker'>Look!</span> <span class='hl-subj'>The baby</span> <span class='hl-aux'>is</span> <span class='hl-verb'>trying</span> to walk across the room.",
            sentenceAr: "انظر! الطفل يحاول المشي عبر الغرفة الآن."
          },
          {
            category: "Immediate Attention Marker (Hey!)",
            sentenceEn: "<span class='hl-marker'>Hey!</span> <span class='hl-subj'>We</span> <span class='hl-aux'>are</span> <span class='hl-verb'>waiting</span> for the university bus.",
            sentenceAr: "مرحباً! نحن ننتظر حافلة الجامعة الآن."
          },
          {
            category: "Two People Ongoing Action (Sami and Ali)",
            sentenceEn: "<span class='hl-subj'>Sami and Ali</span> <span class='hl-aux'>are</span> <span class='hl-verb'>preparing</span> their graduation presentation right now.",
            sentenceAr: "سامي وعلي يجهزان عرض تخرجهما في هذه اللحظة."
          },
          {
            category: "Special Function: Irritation / Complaint with 'always'",
            sentenceEn: "<span class='hl-subj'>You</span> <span class='hl-aux'>are</span> <span class='hl-marker'>always</span> <span class='hl-verb'>coming</span> late to the lecture!",
            sentenceAr: "أنت دائماً ما تأتي متأخراً إلى المحاضرة! (وظيفة الجملة: شكوى وتذمر)."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 4: Stative vs. Dynamic Verbs Master Matrix
      // ---------------------------------------------------------------------
      {
        id: "u1_g_sec4",
        topicEn: "4. Stative vs. Dynamic Verbs Matrix",
        summaryEn: "Stative verbs describe permanent states, thoughts, senses, emotions, or possession. They are NEVER used in the continuous form (-ing) when describing states.",
        ruleTable: {
          headers: ["Verb Category", "Stative Verbs (State / No -ing)", "Dual-Meaning Verb", "Stative (Simple) vs. Dynamic (Continuous) Contrast"],
          rows: [
            {
              subject: "Thoughts & Beliefs",
              formula: "know, realize, understand, believe, think",
              ex1: "<strong>think</strong>",
              ex2: "Stative: I <span class='hl-verb'>think</span> English is easy. (Opinion)<br>Dynamic: I <span class='hl-aux'>am</span> <span class='hl-verb'>thinking</span> about my future. (Mental process)"
            },
            {
              subject: "Sensory Perceptions",
              formula: "taste, smell, see, hear, feel",
              ex1: "<strong>taste</strong>",
              ex2: "Stative: The soup <span class='hl-verb'>tastes</span> delicious. (Characteristic)<br>Dynamic: The chef <span class='hl-aux'>is</span> <span class='hl-verb'>tasting</span> the soup. (Action of tasting)"
            },
            {
              subject: "Possession & Ownership",
              formula: "have, own, belong, possess",
              ex1: "<strong>have</strong>",
              ex2: "Stative: I <span class='hl-verb'>have</span> a car. (Possession)<br>Dynamic: I <span class='hl-aux'>am</span> <span class='hl-verb'>having</span> lunch now. (Eating/Activity)"
            },
            {
              subject: "Emotions & Preferences",
              formula: "like, love, hate, prefer, want, need",
              ex1: "<strong>love / like</strong>",
              ex2: "Stative: She <span class='hl-verb'>loves</span> Greek philosophy. (Permanent feeling)"
            }
          ]
        },
        cases: [
          {
            category: "Stative Possession: have (I have a book)",
            sentenceEn: "<span class='hl-subj'>I</span> <span class='hl-verb'>have</span> a new grammar book. <span class='rule-subtext'>[Sentence Function: POSSESSION]</span>",
            sentenceAr: "أنا أمتلك كتاب قواعد جديداً (وظيفة الجملة: الملكية)."
          },
          {
            category: "Stative Sense: taste (The soup tastes good)",
            sentenceEn: "<span class='hl-subj'>The soup</span> <span class='hl-verb'>tastes</span> delicious without any extra salt.",
            sentenceAr: "الحساء مذاقه لذيذ دون إضافة ملح."
          },
          {
            category: "Dynamic Action: tasting (The chef is tasting)",
            sentenceEn: "<span class='hl-subj'>The chef</span> <span class='hl-aux'>is</span> <span class='hl-verb'>tasting</span> the sauce to check the seasoning.",
            sentenceAr: "الشيف يتذوق الصلصة بالملعقة الآن ليتأكد من البهارات."
          },
          {
            category: "Stative Knowledge: understand (They understand)",
            sentenceEn: "<span class='hl-subj'>Sami and Sarah</span> <span class='hl-verb'>understand</span> the module requirements completely.",
            sentenceAr: "سامي وسارة يفهمان متطلبات الوحدة الدراسية تماماً."
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit1 = u1_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u1_learning_grammar };
  }
})();
