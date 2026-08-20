/**
 * Al-Balqa Applied University — English 102
 * Unit 3: Life at Work
 * Module 2: Grammar Academy (Present Perfect vs. Past Perfect & Event Sequencing)
 */
(function() {
  const u3_learning_grammar = {
    unit: 3,
    titleEn: "Present Perfect Simple vs. Past Perfect Simple & Event Sequencing",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Present Perfect Simple Tense
      // ---------------------------------------------------------------------
      {
        id: "u3_g_sec1",
        topicEn: "1. Present Perfect Simple: Indefinite Past & Continuing Actions",
        summaryEn: "Used for actions that occurred at an unspecified/indefinite time before now with present relevance, or actions that started in the past and continue into the present moment (with since & for).",
        ruleTable: {
          headers: ["Subject Category", "Auxiliary Formula", "Example Verb (finish)", "Example Verb (write)"],
          rows: [
            {
              subject: "I / We / You / They<br><span class='rule-subtext'>Compound Plural: Sami and Omar</span>",
              formula: "<span class='hl-aux'>have</span> + <span class='hl-verb'>Past Participle (V3)</span>",
              ex1: "have <span class='hl-verb'>finished</span>",
              ex2: "have <span class='hl-verb'>written</span>"
            },
            {
              subject: "He / She / It<br><span class='rule-subtext'>Singular Nouns: Sarah, The manager</span>",
              formula: "<span class='hl-aux'>has</span> + <span class='hl-verb'>Past Participle (V3)</span>",
              ex1: "has <span class='hl-verb'>finished</span>",
              ex2: "has <span class='hl-verb'>written</span>"
            },
            {
              subject: "Negative Construction",
              formula: "have not (haven't) / has not (hasn't) + V3",
              ex1: "haven't <span class='hl-verb'>finished</span>",
              ex2: "hasn't <span class='hl-verb'>written</span>"
            },
            {
              subject: "Question Inversion",
              formula: "Have / Has + Subject + V3...?",
              ex1: "<span class='hl-aux'>Have</span> you <span class='hl-verb'>finished</span>?",
              ex2: "<span class='hl-aux'>Has</span> she <span class='hl-verb'>written</span>?"
            }
          ]
        },
        spellingRules: {
          title: "Key Signal Adverbs & Usage Triggers",
          rules: [
            {
              condition: "<strong>since + Starting Point</strong>",
              change: "Marks the exact moment the action began (since 1990, since last March)",
              examples: "Sally has lived in Amman <span class='hl-marker'>since 1990</span>."
            },
            {
              condition: "<strong>for + Duration / Period</strong>",
              change: "Measures the total elapsed time span (for ten years, for five weeks)",
              examples: "Ahmed has been a teacher <span class='hl-marker'>for ten years</span>."
            },
            {
              condition: "<strong>already / just / recently</strong>",
              change: "Emphasizes completion before the expected time or recently completed events",
              examples: "She has <span class='hl-marker'>already</span> <span class='hl-verb'>submitted</span> the assignment."
            },
            {
              condition: "<strong>yet (Negatives & Questions)</strong>",
              change: "Placed at sentence end to ask or state if an expected action occurred",
              examples: "He has not finished his budget report <span class='hl-marker'>yet</span>."
            },
            {
              condition: "<strong>so far (Itemized Count)</strong>",
              change: "Pairs with Present Perfect Simple to state counted accomplishments",
              examples: "He has written three letters <span class='hl-marker'>so far</span> this morning."
            }
          ]
        },
        cases: [
          {
            category: "Indefinite Past Completion (already submitted)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-aux'>has</span> <span class='hl-marker'>already</span> <span class='hl-verb'>submitted</span> the final course assignment.",
            sentenceAr: "لقد سلمت الواجب النهائي للمساق بالفعل (حدث مكتمل في وقت غير محدد في الماضي وله أثر حالي)."
          },
          {
            category: "Continuing Duration with 'since' (since 1990)",
            sentenceEn: "<span class='hl-subj'>Sally</span> <span class='hl-aux'>has</span> <span class='hl-verb'>lived</span> in Amman <span class='hl-marker'>since 1990</span>. <span class='rule-subtext'>[Function: Action continuing to present]</span>",
            sentenceAr: "تعيش سالي في عمّان منذ عام 1990 (حدث بدأ في الماضي وما زال مستمراً حتى الوقت الحاضر)."
          },
          {
            category: "Continuing Duration with 'for' (for ten years)",
            sentenceEn: "<span class='hl-subj'>Ahmed</span> <span class='hl-aux'>has</span> <span class='hl-verb'>been</span> a teacher <span class='hl-marker'>for ten years</span>. <span class='rule-subtext'>[Function: Duration extending to present]</span>",
            sentenceAr: "يعمل أحمد معلماً منذ عشر سنوات (فترة زمنية استمرت من الماضي وتتواصل في الحاضر)."
          },
          {
            category: "Compound Plural Subject (Sami and Omar have stayed)",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-aux'>have</span> <span class='hl-verb'>stayed</span> in the same apartment <span class='hl-marker'>for five years</span>.",
            sentenceAr: "أقام سامي وعمر في الشقة نفسها لمدة خمس سنوات وما زالا فيها."
          },
          {
            category: "Accomplishment Count with 'so far' (three letters)",
            sentenceEn: "<span class='hl-subj'>He</span> <span class='hl-aux'>has</span> <span class='hl-verb'>written</span> three formal business letters <span class='hl-marker'>so far</span> this morning.",
            sentenceAr: "كتب ثلاث رسائل عمل رسمية حتى الآن هذا الصباح (تعداد مرات الإنجاز يتطلب مضارعاً تاماً بسيطاً)."
          },
          {
            category: "Life Experience Question (ever visited)",
            sentenceEn: "<span class='hl-aux'>Have</span> <span class='hl-subj'>they</span> <span class='hl-marker'>ever</span> <span class='hl-verb'>visited</span> Japan during their summer vacation?",
            sentenceAr: "هل سبق لهم في أي وقت زيارة اليابان أثناء عطلتهم الصيفية؟"
          },
          {
            category: "Recent Action with 'recently'",
            sentenceEn: "<span class='hl-subj'>My partner</span> <span class='hl-aux'>has</span> <span class='hl-verb'>finished</span> his corporate budgeting assignment <span class='hl-marker'>recently</span>.",
            sentenceAr: "أنهى شريكي واجبه الخاص بإعداد ميزانية الشركة مؤخراً."
          },
          {
            category: "Indefinite Past vs. Definite Simple Past Contrast",
            sentenceEn: "<span class='hl-subj'>I</span> <span class='hl-verb'>lost</span> my wallet <span class='hl-marker'>yesterday</span>, so I <span class='hl-aux'>could not</span> buy lunch.",
            sentenceAr: "أضعت محفظتي أمس (وجود yesterday يفرض استخدام الماضي البسيط lost وليس المضارع التام)."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: Past Perfect Simple Tense (Earlier Past Action)
      // ---------------------------------------------------------------------
      {
        id: "u3_g_sec2",
        topicEn: "2. Past Perfect Simple: Earlier Past Action & Event Sequencing",
        summaryEn: "Used to demonstrate which of two past events happened first. The earlier event takes the Past Perfect (had + V3), and the subsequent event takes the Past Simple.",
        ruleTable: {
          headers: ["Clause Connector", "First Past Action (Action 1)", "Second Past Action (Action 2)", "Combined Sentence Structure"],
          rows: [
            {
              subject: "before",
              formula: "<span class='hl-aux'>had</span> + <span class='hl-verb'>Past Participle (V3)</span>",
              ex1: "<span class='hl-verb'>Past Simple (V2)</span>",
              ex2: "Action 1 <span class='hl-marker'>before</span> Action 2:<br>Tom <span class='hl-aux'>had</span> <span class='hl-verb'>prepared</span> his slides before he <span class='hl-verb'>went</span> to office."
            },
            {
              subject: "after",
              formula: "<span class='hl-verb'>Past Simple (V2)</span>",
              ex1: "<span class='hl-aux'>had</span> + <span class='hl-verb'>Past Participle (V3)</span>",
              ex2: "Action 2 <span class='hl-marker'>after</span> Action 1:<br>She <span class='hl-verb'>prepared</span> lunch after she <span class='hl-aux'>had</span> <span class='hl-verb'>cleaned</span> the house."
            },
            {
              subject: "because (Reason)",
              formula: "<span class='hl-verb'>Past Simple (Result)</span>",
              ex1: "<span class='hl-aux'>had</span> + <span class='hl-verb'>Past Participle (Cause)</span>",
              ex2: "They <span class='hl-verb'>got</span> a room because they <span class='hl-aux'>had</span> <span class='hl-verb'>booked</span> in advance."
            },
            {
              subject: "when",
              formula: "<span class='hl-aux'>had</span> + <span class='hl-verb'>already + V3</span>",
              ex1: "<span class='hl-verb'>Past Simple (V2)</span>",
              ex2: "Ahmed <span class='hl-aux'>had</span> already <span class='hl-verb'>posted</span> the letter when I <span class='hl-verb'>saw</span> him."
            }
          ]
        },
        cases: [
          {
            category: "Sequencing with 'before': had prepared before went",
            sentenceEn: "<span class='hl-subj'>Tom</span> <span class='hl-aux'>had</span> <span class='hl-verb'>prepared</span> his presentation <span class='hl-marker'>before</span> <span class='hl-subj'>he</span> <span class='hl-verb'>went</span> to the corporate office.",
            sentenceAr: "كان توم قد أعد عرضه التقديمي قبل أن يذهب إلى مكتب الشركة (إعداد العرض حدث أولاً بالماضي التام)."
          },
          {
            category: "Sequencing with 'after': prepared lunch after had cleaned",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-verb'>prepared</span> lunch <span class='hl-marker'>after</span> <span class='hl-subj'>she</span> <span class='hl-aux'>had</span> <span class='hl-verb'>cleaned</span> the house.",
            sentenceAr: "أعدت طعام الغداء بعد أن كانت قد نظفت المنزل بالكامل (التنظيف تم واكتمل أولاً)."
          },
          {
            category: "Prior Cause with 'because': had booked in advance",
            sentenceEn: "<span class='hl-subj'>Ali and Ahmed</span> were able to get a hotel room <span class='hl-marker'>because</span> <span class='hl-subj'>they</span> <span class='hl-aux'>had</span> <span class='hl-verb'>booked</span> in advance.",
            sentenceAr: "تمكن علي وأحمد من الحصول على غرفة فندقية لأنهما كانا قد حجزا مسبقاً (الحجز المسبق هو السبب الأسبق)."
          },
          {
            category: "Earlier Event: had written before was fired",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-aux'>had</span> <span class='hl-verb'>written</span> her resignation <span class='hl-marker'>before</span> <span class='hl-subj'>her boss</span> <span class='hl-verb'>fired</span> her.",
            sentenceAr: "كانت قد كتبت استقالتها قبل أن يقيلها مديرها من العمل."
          },
          {
            category: "Sequencing with 'before': had read before answered",
            sentenceEn: "<span class='hl-subj'>I</span> <span class='hl-aux'>had</span> <span class='hl-verb'>read</span> the text carefully <span class='hl-marker'>before</span> <span class='hl-subj'>I</span> <span class='hl-verb'>answered</span> the questions.",
            sentenceAr: "كنت قد قرأت النص بعناية فائقة قبل أن أجيب عن أسئلة الامتحان."
          },
          {
            category: "Compound Plural Subject (Sami and Omar had finished)",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-aux'>had</span> <span class='hl-verb'>completed</span> the project <span class='hl-marker'>before</span> <span class='hl-subj'>the deadline</span> <span class='hl-verb'>passed</span>.",
            sentenceAr: "كان سامي وعمر قد أتما المشروع قبل أن ينتهي الموعد النهائي المحدد."
          },
          {
            category: "Question Form in Past Perfect (Had the game finished)",
            sentenceEn: "<span class='hl-aux'>Had</span> <span class='hl-subj'>the meeting</span> <span class='hl-verb'>finished</span> <span class='hl-marker'>before</span> <span class='hl-subj'>you</span> <span class='hl-verb'>left</span> the office?",
            sentenceAr: "هل كان الاجتماع قد انتهى قبل أن تغادر أنت المكتب؟"
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit3 = u3_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u3_learning_grammar };
  }
})();
