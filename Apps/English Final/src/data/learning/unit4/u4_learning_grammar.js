/**
 * Al-Balqa Applied University — English 102
 * Unit 4: Life and Nature
 * Module 2: Grammar Academy (The Passive Voice: Full Tense Matrix, Transformations & Voice Identification)
 */
(function() {
  const u4_learning_grammar = {
    unit: 4,
    titleEn: "The Passive Voice: Full Tense Matrix & Voice Transformations",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Core Passive Structure & Complete Tense Matrix
      // ---------------------------------------------------------------------
      {
        id: "u4_g_sec1",
        topicEn: "1. Passive Voice Formation: General Formula & Master Tense Matrix",
        summaryEn: "Passive voice is used to change the focal point of the sentence to the action, recipient, or result rather than the doer. The universal formula is: BE (matching the tense) + Past Participle (V3).",
        ruleTable: {
          headers: ["Tense Category", "Active Verb Form", "Passive Verb Formula", "Active vs. Passive Example"],
          rows: [
            {
              subject: "Present Simple",
              formula: "break / breaks",
              ex1: "<span class='hl-aux'>am / is / are</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: The storm breaks windows.<br>Passive: The window <span class='hl-change'>is broken</span> by the wind."
            },
            {
              subject: "Present Continuous",
              formula: "am / is / are breaking",
              ex1: "<span class='hl-aux'>am / is / are being</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: The farmer is building a barn.<br>Passive: A barn <span class='hl-change'>is being built</span>."
            },
            {
              subject: "Present Perfect",
              formula: "has / have broken",
              ex1: "<span class='hl-aux'>has / have been</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: Mrs. Jones has sent the letter.<br>Passive: The letter <span class='hl-change'>has been sent</span>."
            },
            {
              subject: "Past Simple",
              formula: "broke",
              ex1: "<span class='hl-aux'>was / were</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: The volcano burnt houses.<br>Passive: Many houses <span class='hl-change'>were burnt</span>."
            },
            {
              subject: "Past Continuous",
              formula: "was / were breaking",
              ex1: "<span class='hl-aux'>was / were being</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: A dog was chasing the man.<br>Passive: The man <span class='hl-change'>was being chased</span>."
            },
            {
              subject: "Past Perfect",
              formula: "had broken",
              ex1: "<span class='hl-aux'>had been</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: Someone had broken the door.<br>Passive: Our door <span class='hl-change'>had been broken down</span>."
            },
            {
              subject: "Modals (can, must, will)",
              formula: "can / must / will break",
              ex1: "<span class='hl-aux'>modal + be</span> + <span class='hl-verb'>V3</span>",
              ex2: "Active: People must obey the law.<br>Passive: The law <span class='hl-change'>must be obeyed</span>."
            }
          ]
        },
        spellingRules: {
          title: "4-Step Algorithm for Transforming Active Sentences to Passive",
          rules: [
            {
              condition: "<strong>Step 1: Move the Object</strong>",
              change: "The direct object of the active verb becomes the subject of the passive sentence.",
              examples: "Active: 'The company sent <span class='hl-subj'>the email</span>.' -> Passive Subject: '<span class='hl-subj'>The email</span>...'"
            },
            {
              condition: "<strong>Step 2: Insert BE Auxiliary</strong>",
              change: "Choose the correct form of BE matching the original tense and agreeing with the new subject in number.",
              examples: "Present Continuous: <span class='hl-aux'>is being</span> | Past Simple: <span class='hl-aux'>was / were</span> | Perfect: <span class='hl-aux'>has/have been</span>"
            },
            {
              condition: "<strong>Step 3: Main Verb to V3</strong>",
              change: "Convert the main active verb into its Past Participle (V3).",
              examples: "send -> <span class='hl-verb'>sent</span> | build -> <span class='hl-verb'>built</span> | explain -> <span class='hl-verb'>explained</span>"
            },
            {
              condition: "<strong>Step 4: Optional 'by + Agent'</strong>",
              change: "Add 'by + doer' only when the identity of the agent is necessary to the sentence meaning.",
              examples: "...<span class='hl-marker'>by</span> the volcano | ...<span class='hl-marker'>by</span> Dr. Brown | ...<span class='hl-marker'>by</span> our neighbors"
            }
          ]
        },
        cases: [
          {
            category: "Present Simple Passive: Singular (is broken)",
            sentenceEn: "<span class='hl-subj'>The window</span> <span class='hl-aux'>is</span> <span class='hl-verb'>broken</span> <span class='hl-marker'>by</span> the strong wind.",
            sentenceAr: "النافذة كُسرت بفعل الرياح الشديدة (مضارع بسيط مجهول يركز على النتيجة)."
          },
          {
            category: "Present Simple Passive: Plural (are broken)",
            sentenceEn: "<span class='hl-subj'>The windows</span> <span class='hl-aux'>are</span> <span class='hl-verb'>broken</span> <span class='hl-marker'>by</span> the falling branches.",
            sentenceAr: "النوافذ كُسرت بواسطة الأغصان المتساقطة."
          },
          {
            category: "Present Continuous Passive: is being helped",
            sentenceEn: "<span class='hl-subj'>She</span> <span class='hl-aux'>is being</span> <span class='hl-verb'>helped</span> with the housework right now.",
            sentenceAr: "هي تتلقى المساعدة في أعمال المنزل في هذه اللحظة."
          },
          {
            category: "Present Continuous Passive: is being built",
            sentenceEn: "<span class='hl-subj'>A new barn</span> <span class='hl-aux'>is being</span> <span class='hl-verb'>built</span> <span class='hl-marker'>by</span> the hardworking farmer.",
            sentenceAr: "حظيرة جديدة تُبنى حالياً بواسطة المزارع النشيط."
          },
          {
            category: "Present Perfect Passive: has been sent",
            sentenceEn: "<span class='hl-subj'>The letter</span> <span class='hl-aux'>has been</span> <span class='hl-verb'>sent</span> <span class='hl-marker'>by</span> Mrs. Jones this morning.",
            sentenceAr: "أُرسلت الرسالة بواسطة السيدة جونز هذا الصباح."
          },
          {
            category: "Past Simple Passive: was sent",
            sentenceEn: "<span class='hl-subj'>Mrs. Green</span> <span class='hl-aux'>was</span> <span class='hl-verb'>sent</span> a parcel by the mail-order company.",
            sentenceAr: "أُرسل طرد بريدي إلى السيدة غرين بواسطة شركة البريد."
          },
          {
            category: "Past Simple Passive: were burnt (Plural)",
            sentenceEn: "<span class='hl-subj'>Many houses</span> <span class='hl-aux'>were</span> <span class='hl-verb'>burnt</span> <span class='hl-marker'>by</span> the volcanic eruption.",
            sentenceAr: "أُحرقت منازل كثيرة بفعل الثوران البركاني."
          },
          {
            category: "Past Continuous Passive: was being chased",
            sentenceEn: "<span class='hl-subj'>The man</span> <span class='hl-aux'>was being</span> <span class='hl-verb'>chased</span> <span class='hl-marker'>by</span> an aggressive dog.",
            sentenceAr: "كان الرجل يُطارد بواسطة كلب شرس."
          },
          {
            category: "Past Perfect Passive: had been broken down",
            sentenceEn: "<span class='hl-subj'>Our front door</span> <span class='hl-aux'>had been</span> <span class='hl-verb'>broken down</span> before the police arrived.",
            sentenceAr: "كان بابنا الأمامي قد كُسر وخُلع قبل وصول الشرطة."
          },
          {
            category: "Modal Passive: must be obeyed",
            sentenceEn: "<span class='hl-subj'>The environmental law</span> <span class='hl-aux'>must be</span> <span class='hl-verb'>obeyed</span> by every citizen.",
            sentenceAr: "يجب أن يُطاع القانون البيئي ويُحترم من قِبل جميع المواطنين."
          },
          {
            category: "Modal Passive: will be paid",
            sentenceEn: "<span class='hl-subj'>You</span> <span class='hl-aux'>will be</span> <span class='hl-verb'>paid</span> your full salary within the next few days.",
            sentenceAr: "سيُدفع لك راتبك كاملاً خلال الأيام القليلة القادمة."
          },
          {
            category: "Modal Passive: can be improved",
            sentenceEn: "<span class='hl-subj'>Your cardiovascular health</span> <span class='hl-aux'>can be</span> <span class='hl-verb'>improved</span> with regular exercise.",
            sentenceAr: "صحة قلبك وأوعيتك الدموية يمكن أن تتحسن بالتمارين المنتظمة."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: Passive to Active Transformation & Active/Passive Voice ID
      // ---------------------------------------------------------------------
      {
        id: "u4_g_sec2",
        topicEn: "2. Passive-to-Active Reversal & Voice Identification Rules",
        summaryEn: "To convert a passive sentence into active: make the agent the subject, remove the auxiliary BE, conjugate the main verb into the active tense, and place the passive subject in the object position.",
        ruleTable: {
          headers: ["Sentence Example", "Voice Classification", "Grammatical Indicator", "Pedagogical Explanation"],
          rows: [
            {
              subject: "The helmsman stopped the boat.",
              formula: "ACTIVE",
              ex1: "Subject performs action directly",
              ex2: "'The helmsman' actively stopped 'the boat'."
            },
            {
              subject: "The Titanic sank in 1912.",
              formula: "ACTIVE",
              ex1: "Intransitive verb (no 'be + V3')",
              ex2: "'sank' is simple past active (no passive aux)."
            },
            {
              subject: "Male passengers were not allowed in lifeboats.",
              formula: "PASSIVE",
              ex1: "were + V3 (allowed)",
              ex2: "Subject received the action of being denied entry."
            },
            {
              subject: "Da Vinci painted the Mona Lisa.",
              formula: "ACTIVE",
              ex1: "Subject performs action directly",
              ex2: "'Da Vinci' performed the painting."
            },
            {
              subject: "The product will be advertised on television.",
              formula: "PASSIVE",
              ex1: "will be + V3 (advertised)",
              ex2: "'product' receives the advertising action."
            }
          ]
        },
        cases: [
          {
            category: "Active Voice Identification (helmsman stopped)",
            sentenceEn: "<span class='hl-subj'>The helmsman</span> <span class='hl-verb'>stopped</span> the boat only a few yards from an enormous iceberg.",
            sentenceAr: "أوقف الملاح القارب على بعد ياردات قليلة من جبل جليدي ضخم (جملة مبنية للمعلوم Active)."
          },
          {
            category: "Active Voice Identification: Intransitive (Titanic sank)",
            sentenceEn: "<span class='hl-subj'>The Titanic</span> <span class='hl-verb'>sank</span> in 1912 after hitting an iceberg.",
            sentenceAr: "غرقت سفينة التايتانيك عام 1912 (مبني للمعلوم Active لأن الفعل لازم ولا يحتوي على be + V3)."
          },
          {
            category: "Passive Voice Identification (were not allowed)",
            sentenceEn: "<span class='hl-subj'>Male passengers</span> <span class='hl-aux'>were not</span> <span class='hl-verb'>allowed</span> to get in the lifeboats.",
            sentenceAr: "لم يُسمح للركاب الذكور بالصعود إلى قوارب النجاة (مبني للمجهول Passive لوجود were + V3)."
          },
          {
            category: "Active Voice Identification (Someone stole)",
            sentenceEn: "<span class='hl-subj'>Someone</span> <span class='hl-verb'>stole</span> my laptop from the library.",
            sentenceAr: "سرق شخص ما حاسوبي من المكتبة (مبني للمعلوم Active)."
          },
          {
            category: "Passive Voice Identification (was arranged by)",
            sentenceEn: "<span class='hl-subj'>The wilderness trip</span> <span class='hl-aux'>was</span> <span class='hl-verb'>arranged</span> <span class='hl-marker'>by</span> the tour guides.",
            sentenceAr: "رُتبت الرحلة البرية بواسطة المرشدين السياحيين (مبني للمجهول Passive)."
          },
          {
            category: "Passive-to-Active: Modal (ought to paint)",
            sentenceEn: "Passive: The garage ought to be painted by our neighbors.<br>Active: <span class='hl-subj'>Our neighbors</span> <span class='hl-aux'>ought to</span> <span class='hl-verb'>paint</span> the garage.",
            sentenceAr: "تحويل للمعلوم: ينبغي على جيراننا أن يدهنوا الكراج."
          },
          {
            category: "Passive-to-Active: Present Perfect (have brought up)",
            sentenceEn: "Passive: He has been brought up to be polite by his parents.<br>Active: <span class='hl-subj'>His parents</span> <span class='hl-aux'>have</span> <span class='hl-verb'>brought</span> him up to be polite.",
            sentenceAr: "تحويل للمعلوم: ربّاه والداه على الأدب وحسن الخلق."
          },
          {
            category: "Passive-to-Active: Past Simple (fixed after earthquake)",
            sentenceEn: "Passive: The railroad was fixed by workers after the earthquake.<br>Active: <span class='hl-subj'>The workers</span> <span class='hl-verb'>fixed</span> the railroad after the earthquake.",
            sentenceAr: "تحويل للمعلوم: أصلح العمال السكة الحديدية بعد الزلزال."
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit4 = u4_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u4_learning_grammar };
  }
})();
