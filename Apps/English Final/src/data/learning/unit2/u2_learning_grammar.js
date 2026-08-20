/**
 * Al-Balqa Applied University — English 102
 * Unit 2: Nature or Nurture?
 * Module 2: Grammar Academy (Past Simple vs. Past Continuous & Irregular Verbs)
 */
(function() {
  const u2_learning_grammar = {
    unit: 2,
    titleEn: "Past Simple vs. Past Continuous & Stative Verbs in the Past",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Past Simple Tense (Completed Actions & Time Cues)
      // ---------------------------------------------------------------------
      {
        id: "u2_g_sec1",
        topicEn: "1. Past Simple Tense: Completed Past Actions & Specific Time Markers",
        summaryEn: "Used for actions that started and finished at a definite, stated point of time in the past (yesterday, two years ago, last weekend, in 2001, this morning).",
        ruleTable: {
          headers: ["Subject / Person", "Verb Form Formula", "Regular Example (visit)", "Irregular Example (give)"],
          rows: [
            {
              subject: "All Subjects<br><span class='rule-subtext'>I, He, She, It, We, You, They, Sarah, Sami and Omar</span>",
              formula: "<span class='hl-verb'>Past Form (V2: -ed or Irregular)</span>",
              ex1: "<span class='hl-verb'>visited</span>",
              ex2: "<span class='hl-verb'>gave</span>"
            }
          ]
        },
        spellingRules: {
          title: "Past Simple (-ed) Spelling Mutation Rules",
          rules: [
            {
              condition: "General regular verbs",
              change: "Add <strong>-ed</strong>",
              examples: "play -> <span class='hl-verb'>played</span> | laugh -> <span class='hl-verb'>laughed</span> | clean -> <span class='hl-verb'>cleaned</span>"
            },
            {
              condition: "Verbs ending in silent <strong>-e</strong>",
              change: "Add <strong>-d</strong> only",
              examples: "live -> <span class='hl-verb'>lived</span> | smile -> <span class='hl-verb'>smiled</span> | die -> <span class='hl-verb'>died</span>"
            },
            {
              condition: "Stressed syllable ending in <strong>1 Vowel + 1 Consonant (CVC)</strong>",
              change: "Double the final consonant + <strong>-ed</strong>",
              examples: "prefer -> <span class='hl-verb'>preferred</span> | commit -> <span class='hl-verb'>committed</span> | rub -> <span class='hl-verb'>rubbed</span>"
            },
            {
              condition: "Verbs ending in consonant + <strong>-y</strong>",
              change: "Change <strong>-y</strong> to <strong>-ied</strong>",
              examples: "study -> <span class='hl-verb'>studied</span> | try -> <span class='hl-verb'>tried</span> | carry -> <span class='hl-verb'>carried</span>"
            },
            {
              condition: "Verbs ending in <strong>-c</strong>",
              change: "Add <strong>-ked</strong> (to preserve /k/ sound)",
              examples: "picnic -> <span class='hl-verb'>picnicked</span> | traffic -> <span class='hl-verb'>trafficked</span>"
            },
            {
              condition: "Verbs ending in <strong>-l</strong> preceded by a vowel (UK)",
              change: "Double the <strong>-l</strong> + <strong>-ed</strong>",
              examples: "travel -> <span class='hl-verb'>travelled</span> | rebel -> <span class='hl-verb'>rebelled</span>"
            }
          ]
        },
        cases: [
          {
            category: "Specific Time Marker: last weekend (Completed Action)",
            sentenceEn: "<span class='hl-subj'>Ahmed</span> <span class='hl-verb'>visited</span> his parents <span class='hl-marker'>last weekend</span>.",
            sentenceAr: "زار أحمد والديه نهاية الأسبوع الماضي (حدث بدأ وانتهى في وقت محدد بالماضي)."
          },
          {
            category: "Specific Time Marker: this morning (Meeting Completed)",
            sentenceEn: "<span class='hl-subj'>The new manager</span> <span class='hl-verb'>met</span> the sales representative <span class='hl-marker'>this morning</span>.",
            sentenceAr: "التقى المدير الجديد بمندوب المبيعات هذا الصباح."
          },
          {
            category: "Time Expression: ago (Married 2 Years Ago)",
            sentenceEn: "<span class='hl-subj'>Jim and Rona</span> <span class='hl-verb'>married</span> <span class='hl-marker'>two years ago</span> after having a long friendship.",
            sentenceAr: "تزوج جيم ورونا منذ سنتين بعد صداقة طويلة."
          },
          {
            category: "Specific Time Marker: yesterday (Book Purchased)",
            sentenceEn: "<span class='hl-subj'>Sam</span> <span class='hl-verb'>gave</span> Maria a self-care book <span class='hl-marker'>yesterday</span>.",
            sentenceAr: "أعطى سام ماريا كتاباً للمساعدة الذاتية يوم أمس."
          },
          {
            category: "Compound Plural Subject (Sami and Omar)",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-verb'>studied</span> in the library until late last night.",
            sentenceAr: "درس سامي وعمر في المكتبة حتى ساعة متأخرة الليلة الماضية."
          },
          {
            category: "Spelling: -ked rule after -c (picnicked)",
            sentenceEn: "<span class='hl-subj'>The students</span> <span class='hl-verb'>picnicked</span> near the mountain stream last Friday.",
            sentenceAr: "تنزه الطلاب بالقرب من جدول الجبل يوم الجمعة الماضي."
          },
          {
            category: "Spelling: Final consonant doubling (preferred)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-verb'>preferred</span> studying alone in a quiet room.",
            sentenceAr: "فضلت الدراسة بمفردها في غرفة هادئة."
          },
          {
            category: "Sequential Series of Completed Past Actions",
            sentenceEn: "<span class='hl-subj'>Maria</span> simply <span class='hl-verb'>focused</span> on the present moment, <span class='hl-verb'>took</span> a deep breath, and <span class='hl-verb'>continued</span> her presentation.",
            sentenceAr: "ركزت ماريا على اللحظة الحاضرة، وأخذت نفساً عميقاً، ثم تابعت عرضها التقديمي."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: Past Simple Negative & Question Syntax
      // ---------------------------------------------------------------------
      {
        id: "u2_g_sec2",
        topicEn: "2. Past Simple: Negative & Question Rules (did / did not)",
        summaryEn: "Negatives use 'did not (didn't) + Base Verb'. Questions use 'Did + Subject + Base Verb?'. The main verb ALWAYS returns to its base infinitive form.",
        ruleTable: {
          headers: ["Sentence Form", "Subject Type", "Auxiliary + Verb Formula", "Example"],
          rows: [
            {
              subject: "Negative: All Subjects",
              formula: "I, He, She, It, We, You, They, Sami and Omar",
              ex1: "<span class='hl-aux'>did not (didn't)</span> + <span class='hl-verb'>Base Verb</span>",
              ex2: "He <span class='hl-aux'>did not</span> <span class='hl-verb'>meet</span> the manager."
            },
            {
              subject: "Yes/No Question: All Subjects",
              formula: "Did + Subject + Base Verb?",
              ex1: "<span class='hl-aux'>Did</span> + Subject + <span class='hl-verb'>Base Verb</span>?",
              ex2: "<span class='hl-aux'>Did</span> Ahmed <span class='hl-verb'>visit</span> his parents?"
            },
            {
              subject: "Wh- Information Question",
              formula: "Wh- Word + did + Subject + Base Verb?",
              ex1: "When / What / Where + <span class='hl-aux'>did</span> + Subject + <span class='hl-verb'>Base Verb</span>?",
              ex2: "When <span class='hl-aux'>did</span> Sally <span class='hl-verb'>leave</span>?"
            },
            {
              subject: "Verb 'To Be' Past Form (No 'did')",
              formula: "was / were (wasn't / weren't)",
              ex1: "<span class='hl-aux'>was / were</span> + Subject...?",
              ex2: "<span class='hl-aux'>Were</span> they absent yesterday?"
            }
          ]
        },
        cases: [
          {
            category: "Past Simple Negative: did not + base (did not meet)",
            sentenceEn: "<span class='hl-subj'>The new manager</span> <span class='hl-aux'>did not</span> <span class='hl-verb'>meet</span> the sales representative this morning.",
            sentenceAr: "لم يقابل المدير الجديد مندوب المبيعات هذا الصباح."
          },
          {
            category: "Past Simple Yes/No Question: Did + subject + base (Did Ahmed visit)",
            sentenceEn: "<span class='hl-aux'>Did</span> <span class='hl-subj'>Ahmed</span> <span class='hl-verb'>visit</span> his parents last weekend?",
            sentenceAr: "هل زار أحمد والديه في نهاية الأسبوع الماضي؟"
          },
          {
            category: "Wh- Question: When did + subject + base (When did Sally leave)",
            sentenceEn: "<span class='hl-marker'>When</span> <span class='hl-aux'>did</span> <span class='hl-subj'>Sally</span> <span class='hl-verb'>leave</span> the lecture hall?",
            sentenceAr: "متى غادرت سالي قاعة المحاضرات؟"
          },
          {
            category: "Verb To Be Exception: Were they absent (No did)",
            sentenceEn: "<span class='hl-aux'>Were</span> <span class='hl-subj'>they</span> absent from the university lecture yesterday?",
            sentenceAr: "هل كانوا غائبين عن المحاضرة الجامعية أمس؟"
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 3: Past Continuous Tense (In Progress, Simultaneous, Interrupted)
      // ---------------------------------------------------------------------
      {
        id: "u2_g_sec3",
        topicEn: "3. Past Continuous Tense: Ongoing, Simultaneous & Interrupted Actions",
        summaryEn: "Used for actions in progress at an exact past moment, two simultaneous ongoing actions with 'while/as', or a long background action interrupted by a shorter Past Simple event with 'when'.",
        ruleTable: {
          headers: ["Subject", "Be Auxiliary", "Main Verb Formula", "Example"],
          rows: [
            {
              subject: "I / He / She / It / Sarah",
              formula: "<span class='hl-aux'>was</span>",
              ex1: "<span class='hl-verb'>Verb + -ing</span>",
              ex2: "She <span class='hl-aux'>was</span> <span class='hl-verb'>working</span> on her slides."
            },
            {
              subject: "We / You / They / Sami and Omar",
              formula: "<span class='hl-aux'>were</span>",
              ex1: "<span class='hl-verb'>Verb + -ing</span>",
              ex2: "They <span class='hl-aux'>were</span> <span class='hl-verb'>discussing</span> the project."
            }
          ]
        },
        cases: [
          {
            category: "Action in progress at exact stated past time (At 8 o'clock)",
            sentenceEn: "<span class='hl-marker'>At 8 o'clock last night</span>, <span class='hl-subj'>she</span> <span class='hl-aux'>was</span> <span class='hl-verb'>working</span> on her presentation.",
            sentenceAr: "في تمام الساعة الثامنة الليلة الماضية، كانت تعمل على عرضها التقديمي (حدث كان مستمراً في وقت محدد)."
          },
          {
            category: "Two Simultaneous Past Actions with 'while' (Two Past Continuous)",
            sentenceEn: "<span class='hl-marker'>While</span> <span class='hl-subj'>Maggy</span> <span class='hl-aux'>was</span> <span class='hl-verb'>explaining</span> binge eating, <span class='hl-subj'>Sally</span> <span class='hl-aux'>was</span> <span class='hl-verb'>listening</span> attentively.",
            sentenceAr: "بينما كانت ماغي تشرح موضوع الأكل القهري، كانت سالي تستمع بانتباه (حدثان متزامنان وقعا معاً)."
          },
          {
            category: "Interrupted Action with 'when' (Continuous interrupted by Simple Past)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-aux'>was</span> <span class='hl-verb'>pleading</span> with her professor <span class='hl-marker'>when</span> <span class='hl-subj'>Sam</span> <span class='hl-verb'>called</span>.",
            sentenceAr: "كانت تتوسل لأستاذها عندما اتصل سام (حدث مستمر قطع حدوثه اتصال سام)."
          },
          {
            category: "Interrupted Action in Progress (gorging when mother came)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-aux'>was</span> <span class='hl-verb'>gorging</span> on her favorite food <span class='hl-marker'>when</span> <span class='hl-subj'>her mother</span> <span class='hl-verb'>came in</span>.",
            sentenceAr: "كانت تلتهم طعامها المفضل عندما دخلت والدتها فجأة."
          },
          {
            category: "Compound Plural Subject (Sami and Omar were studying)",
            sentenceEn: "<span class='hl-subj'>Sami and Omar</span> <span class='hl-aux'>were</span> <span class='hl-verb'>revising</span> their medical notes when the electricity went out.",
            sentenceAr: "كان سامي وعمر يراجعان ملاحظاتهما الطبية عندما انقطع التيار الكهربائي."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 4: Stative Verbs in Past Tense
      // ---------------------------------------------------------------------
      {
        id: "u2_g_sec4",
        topicEn: "4. Stative Verbs in the Past (No Continuous -ing Form)",
        summaryEn: "Verbs of cognition, emotion, sensory properties, and possession remain in the Simple Past (e.g. had, recognized, was, understood) even when referring to ongoing past states.",
        ruleTable: {
          headers: ["Stative Verb", "Correct Simple Past Form", "Incorrect Continuous Form", "Pedagogical Note"],
          rows: [
            {
              subject: "have (possession/feeling)",
              formula: "<span class='hl-verb'>had</span>",
              ex1: "*was having",
              ex2: "Use 'had' for emotions, states, and ownership in the past."
            },
            {
              subject: "recognize (cognition)",
              formula: "<span class='hl-verb'>recognized</span>",
              ex1: "*was recognizing",
              ex2: "Cognitive perception cannot take progressive aspect."
            },
            {
              subject: "be (static attribute)",
              formula: "<span class='hl-verb'>was / were</span>",
              ex1: "*was being (for static facts)",
              ex2: "'This was a symptom...' NOT 'was being a symptom'."
            }
          ]
        },
        cases: [
          {
            category: "Stative Past: have (She had a continuous fear)",
            sentenceEn: "Although Maria was lovely, <span class='hl-subj'>she</span> <span class='hl-verb'>had</span> a continuous fear of embarrassment.",
            sentenceAr: "على الرغم من أن ماريا كانت لطيفة، إلا أنه كان لديها خوف مستمر من الإحراج (فعل حالة stative verb)."
          },
          {
            category: "Stative Past: recognize (She recognized the potential)",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-verb'>recognized</span> the potential for error in the method being used.",
            sentenceAr: "أدركت وميزت احتمالية الخطأ في الأسلوب المستخدم (فعل إدراك لا يأخذ ing)."
          },
          {
            category: "Stative Past: be (This demonstration was a symptom)",
            sentenceEn: "<span class='hl-subj'>This demonstration</span> <span class='hl-verb'>was</span> a symptom of discontent among the students.",
            sentenceAr: "كانت تلك المظاهرة عَرَضاً ودلالة على استياء الطلاب."
          },
          {
            category: "Stative Past: understand (Sami and Layla understood)",
            sentenceEn: "<span class='hl-subj'>Sami and Layla</span> <span class='hl-verb'>understood</span> the consequences immediately.",
            sentenceAr: "فهم سامي وليلى العواقب على الفور."
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit2 = u2_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u2_learning_grammar };
  }
})();
