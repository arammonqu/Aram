/**
 * Al-Balqa Applied University — English 102
 * Unit 6: Sports
 * Module 2: Grammar Academy (Conditionals 0–3, 'Unless', and Relative Pronouns)
 */
(function() {
  const u6_learning_grammar = {
    unit: 6,
    titleEn: "Conditionals (Types 0, 1, 2, 3) & Relative Pronouns Master Guide",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Conditionals 0, 1, 2, 3 & 'Unless'
      // ---------------------------------------------------------------------
      {
        id: "u6_g_sec1",
        topicEn: "1. The Conditional Architecture: Types 0, 1, 2, 3 & 'Unless'",
        summaryEn: "Conditionals connect a condition (if-clause) with a result (main clause). Type 1 handles real possibilities, Type 2 expresses hypothetical present situations or advice, and Type 3 reflects past regrets or criticisms.",
        ruleTable: {
          headers: ["Conditional Type", "If-Clause Tense Formula", "Main (Result) Clause Formula", "Syntactic Function & Usage"],
          rows: [
            {
              subject: "Zero Conditional",
              formula: "<span class='hl-marker'>If / When</span> + Present Simple",
              ex1: "<span class='hl-verb'>Present Simple</span>",
              ex2: "Universal facts, scientific laws & automatic results.<br>Ex: If you heat ice, it melts."
            },
            {
              subject: "First Conditional (Type 1)",
              formula: "<span class='hl-marker'>If / Unless</span> + Present Simple",
              ex1: "<span class='hl-aux'>will / can / may</span> + <span class='hl-verb'>Base Verb</span>",
              ex2: "Real, likely future events.<br>Ex: If she <span class='hl-verb'>works</span> extra hours, she <span class='hl-change'>will make</span> money."
            },
            {
              subject: "Second Conditional (Type 2)",
              formula: "<span class='hl-marker'>If</span> + Past Simple (were)",
              ex1: "<span class='hl-aux'>would / could / might</span> + <span class='hl-verb'>Base Verb</span>",
              ex2: "Unreal present situations & GIVING ADVICE.<br>Ex: If I <span class='hl-verb'>were</span> you, I <span class='hl-change'>would apply</span> for the job."
            },
            {
              subject: "Third Conditional (Type 3)",
              formula: "<span class='hl-marker'>If</span> + Past Perfect (had + V3)",
              ex1: "<span class='hl-aux'>would / could have</span> + <span class='hl-verb'>V3</span>",
              ex2: "Unreal past events, PAST REGRET & CRITICISM.<br>Ex: If they <span class='hl-verb'>had played</span> as a team, they <span class='hl-change'>would have won</span>."
            }
          ]
        },
        spellingRules: {
          title: "Special Conditional Syntax: 'Unless' & Comma Placement Rules",
          rules: [
            {
              condition: "<strong>'Unless' Rule</strong>",
              change: "'Unless' means 'If... not' (if he/she/it doesn't). The verb following 'unless' is affirmative.",
              examples: "He will win the marathon <span class='hl-marker'>unless</span> he <span class='hl-verb'>injures</span> himself. (= if he doesn't injure himself)."
            },
            {
              condition: "<strong>Comma Rule</strong>",
              change: "If the 'If-clause' comes first, use a comma. If the 'Result clause' comes first, no comma is used.",
              examples: "<span class='hl-marker'>If</span> he finishes on time<span class='hl-marker'>,</span> we will go.<br>We will go <span class='hl-marker'>if</span> he finishes on time."
            },
            {
              condition: "<strong>Subjunctive 'were'</strong>",
              change: "In Type 2 conditionals, 'were' can be used for all persons (If I were, If he were, If she were).",
              examples: "<span class='hl-marker'>If I were you</span>, I would write a letter of complaint."
            }
          ]
        },
        cases: [
          {
            category: "Type 1: Real Possibility (If she works, she will make)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>she</span> <span class='hl-verb'>works</span> extra hours, <span class='hl-subj'>she</span> <span class='hl-aux'>will</span> <span class='hl-verb'>make</span> more money.",
            sentenceAr: "إذا عملت ساعات إضافية، فستجني المزيد من المال (حالة شرطية أولى لموقف حقيقي ممكن الحدوث)."
          },
          {
            category: "Type 1 with 'unless' (unless he injures himself)",
            sentenceEn: "<span class='hl-subj'>He</span> <span class='hl-aux'>will</span> <span class='hl-verb'>win</span> the marathon <span class='hl-marker'>unless</span> <span class='hl-subj'>he</span> <span class='hl-verb'>injures</span> himself from all that exercise.",
            sentenceAr: "سيفوز في الماراثون ما لم يُصب نفسه بأذى (Unless تعني If... not)."
          },
          {
            category: "Type 1: Teenager behaviour (will behave if talks)",
            sentenceEn: "<span class='hl-subj'>This teenager</span> <span class='hl-aux'>will</span> <span class='hl-verb'>behave</span> better <span class='hl-marker'>if</span> <span class='hl-subj'>someone</span> <span class='hl-verb'>talks</span> to him patiently.",
            sentenceAr: "سيتصرف هذا المراهق بشكل أفضل إذا تحدث معه شخص ما بلطف."
          },
          {
            category: "Type 2 Function: Giving Advice (If I were you, I would)",
            sentenceEn: "<span class='hl-marker'>If I were you</span>, <span class='hl-subj'>I</span> <span class='hl-aux'>would</span> <span class='hl-verb'>apply</span> for a new job. <span class='rule-subtext'>[Function: GIVING ADVICE]</span>",
            sentenceAr: "لو كنتُ مكانك، لتقدمتُ بطلب للوظيفة الجديدة (وظيفة الجملة: تقديم النصيحة Giving Advice)."
          },
          {
            category: "Type 2: Unreal Present (If I got the job, I would make)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>I</span> <span class='hl-verb'>got</span> the job, <span class='hl-subj'>I</span> <span class='hl-aux'>would</span> <span class='hl-verb'>make</span> a big celebration party.",
            sentenceAr: "لو حصلتُ على الوظيفة، لأقمتُ حفلة احتفال كبيرة (حالة ثانية افتراضية)."
          },
          {
            category: "Type 2: Unreal Present with 'had' (If Dania had money, she would help)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>Dania</span> <span class='hl-verb'>had</span> more money, <span class='hl-subj'>she</span> <span class='hl-aux'>would</span> <span class='hl-verb'>help</span> her parents.",
            sentenceAr: "لو كان لدى دانيا مال أكثر، لساعدت والديها (had هنا ماضي بسيط للتمني في الحاضر)."
          },
          {
            category: "Type 2: Inverted order (I would come early if I had a car)",
            sentenceEn: "<span class='hl-subj'>I</span> <span class='hl-aux'>would</span> <span class='hl-verb'>come</span> early <span class='hl-marker'>if</span> <span class='hl-subj'>I</span> <span class='hl-verb'>had</span> a car.",
            sentenceAr: "كنتُ سآتي مبكراً لو كنتُ أمتلك سيارة."
          },
          {
            category: "Type 2: Hypothetical team (could play better if didn't let down)",
            sentenceEn: "<span class='hl-subj'>He</span> <span class='hl-aux'>could</span> <span class='hl-verb'>play</span> much better <span class='hl-marker'>if</span> <span class='hl-subj'>his team</span> <span class='hl-verb'>didn't let</span> him down.",
            sentenceAr: "كان بإمكانه اللعب بشكل أفضل لو لم يخذله فريقه."
          },
          {
            category: "Type 3 Function: Past Regret & Criticism (played as a team)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>they</span> <span class='hl-aux'>had</span> <span class='hl-verb'>played</span> as a team, <span class='hl-subj'>they</span> <span class='hl-aux'>would have</span> <span class='hl-verb'>won</span> the game. <span class='rule-subtext'>[Function: PAST REGRET / CRITICISM]</span>",
            sentenceAr: "لو أنهم لعبوا كفريق واحد، لكانوا فازوا بالمباراة (وظيفة الجملة: الندم والنقد على الماضي)."
          },
          {
            category: "Type 3: Overslept regret (wouldn't have been late)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>John</span> <span class='hl-aux'>hadn't</span> <span class='hl-verb'>overslept</span>, <span class='hl-subj'>he</span> <span class='hl-aux'>wouldn't have</span> <span class='hl-verb'>been</span> late for his appointment.",
            sentenceAr: "لو لم يستغرق جون في النوم، لما تأخر عن موعده (حالة شرطية ثالثة)."
          },
          {
            category: "Type 3: Unfulfilled past condition (would have produced better)",
            sentenceEn: "<span class='hl-marker'>If</span> <span class='hl-subj'>you</span> <span class='hl-aux'>had</span> <span class='hl-verb'>helped</span> me, <span class='hl-subj'>I</span> <span class='hl-aux'>would have</span> <span class='hl-verb'>produced</span> something better.",
            sentenceAr: "لو أنك ساعدتني، لأنتجتُ عملاً أفضل بكثير."
          },
          {
            category: "Type 3: Leadership mistake (wouldn't have made mistake if had received)",
            sentenceEn: "<span class='hl-subj'>The leader</span> <span class='hl-aux'>wouldn't have</span> <span class='hl-verb'>made</span> that mistake <span class='hl-marker'>if</span> <span class='hl-subj'>he</span> <span class='hl-aux'>had</span> <span class='hl-verb'>received</span> the correct information.",
            sentenceAr: "ما كان القائد ليرتكب ذلك الخطأ لو أنه استلم المعلومات الصحيحة في الوقت المناسب."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: Relative Pronouns & Clauses
      // ---------------------------------------------------------------------
      {
        id: "u6_g_sec2",
        topicEn: "2. Relative Pronouns: Who, Which, That, Where, When & Omission Rules",
        summaryEn: "Relative pronouns connect two clauses by referring to a shared noun. Choose 'who' for people, 'which' for things, 'where' for locations, and 'when' for time references.",
        ruleTable: {
          headers: ["Relative Pronoun", "Noun Referent Type", "Grammatical Rule & Example", "Pronoun Omission Rule"],
          rows: [
            {
              subject: "who / that",
              formula: "People / Persons",
              ex1: "I thanked the student <span class='hl-rel'>who</span> helped me.",
              ex2: "Cannot omit when subject of verb; can omit when object."
            },
            {
              subject: "which / that",
              formula: "Things / Inanimate Objects / Animals",
              ex1: "I ate the sandwich <span class='hl-rel'>which</span> was for Salma.",
              ex2: "Can be omitted if followed by subject + verb."
            },
            {
              subject: "where",
              formula: "Locations / Places (replaces in/at which)",
              ex1: "This is the restaurant <span class='hl-rel'>where</span> we had lunch.",
              ex2: "Do not include the preposition 'in it' after 'where'."
            },
            {
              subject: "when",
              formula: "Time Moments / Dates / Years",
              ex1: "We leave at 6:00 <span class='hl-rel'>when</span> the siren starts.",
              ex2: "Replaces prepositional time phrase."
            }
          ]
        },
        cases: [
          {
            category: "Relative Pronoun for People: who (the boy who was wearing)",
            sentenceEn: "<span class='hl-subj'>Angie</span> hit <span class='hl-subj'>the boy</span> <span class='hl-rel'>who</span> was wearing a black jacket.",
            sentenceAr: "ضربت آنجي الولد الذي كان يرتدي سترة سوداء (اسم موصول للعاقل who)."
          },
          {
            category: "Sentence Combining: who (the man who fixed my car)",
            sentenceEn: "Why don't you call <span class='hl-subj'>the man</span> <span class='hl-rel'>who</span> fixed my car?",
            sentenceAr: "لماذا لا تتصل بالرجل الذي أصلح سيارتي؟"
          },
          {
            category: "Relative Pronoun for Things: which (the sandwich which was)",
            sentenceEn: "<span class='hl-subj'>I</span> ate <span class='hl-subj'>the sandwich</span> <span class='hl-rel'>which</span> was reserved for Salma.",
            sentenceAr: "أكلتُ الشطيرة التي كانت محجوزة لسلمى (اسم موصول لغير العاقل which)."
          },
          {
            category: "Relative Pronoun for Places: where (the restaurant where we had lunch)",
            sentenceEn: "<span class='hl-subj'>This</span> is <span class='hl-subj'>the restaurant</span> <span class='hl-rel'>where</span> we used to have lunch together.",
            sentenceAr: "هذا هو المطعم حيث كنا نتناول الغداء فيه معاً (اسم موصول للمكان where)."
          },
          {
            category: "Relative Pronoun for Places: where (the room where she studied)",
            sentenceEn: "<span class='hl-subj'>Carla</span> likes <span class='hl-subj'>the room</span> <span class='hl-rel'>where</span> she used to study calculus.",
            sentenceAr: "تحب كارلا الغرفة التي اعتادت أن تدرس فيها التفاضل."
          },
          {
            category: "Relative Pronoun for Time: when (at 6:00 when siren starts)",
            sentenceEn: "<span class='hl-subj'>We</span> are not allowed to go out at 6:00 <span class='hl-rel'>when</span> the emergency siren starts.",
            sentenceAr: "لا يُسمح لنا بالخروج عند الساعة السادسة حينما تنطلق صفارة الإنذار (اسم موصول للزمان when)."
          },
          {
            category: "Relative Pronoun for Time: when (in 2000 when I was in grade six)",
            sentenceEn: "<span class='hl-subj'>Dylan</span> was born in 2000 <span class='hl-rel'>when</span> I was in grade six.",
            sentenceAr: "وُلد ديلان عام 2000 عندما كنتُ أنا في الصف السادس."
          },
          {
            category: "Relative Pronoun Omission (Object Position)",
            sentenceEn: "This is the manager <span class='hl-rel'>[whom / that]</span> I met yesterday. OR: This is the manager <span class='hl-change'>I met</span> yesterday.",
            sentenceAr: "جواز حذف اسم الموصول عندما يقع في موقع المفعول به المتبوع بفاعل وفعل."
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit6 = u6_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u6_learning_grammar };
  }
})();
