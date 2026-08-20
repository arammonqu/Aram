/**
 * Al-Balqa Applied University — English 102
 * Unit 5: Gossip and the Media
 * Module 2: Grammar Academy (Direct and Indirect / Reported Speech & Reporting Verbs)
 */
(function() {
  const u5_learning_grammar = {
    unit: 5,
    titleEn: "Direct and Indirect (Reported) Speech & Reporting Verbs",
    sections: [
      // ---------------------------------------------------------------------
      // Section 1: Reporting Verbs (Say vs. Tell) & Punctuation Rules
      // ---------------------------------------------------------------------
      {
        id: "u5_g_sec1",
        topicEn: "1. Direct vs. Indirect Speech & Reporting Verbs (Say vs. Tell)",
        summaryEn: "Direct speech quotes exact words inside inverted commas. Indirect speech reports the meaning without quotes. 'Tell' requires an immediate personal object without 'to', while 'say' does not.",
        ruleTable: {
          headers: ["Reporting Verb", "Syntactic Requirement", "Correct Structure", "Incorrect Common Error"],
          rows: [
            {
              subject: "tell (told)",
              formula: "<strong>Must</strong> have a personal indirect object (me, us, him, Tom)",
              ex1: "He <span class='hl-aux'>told</span> <span class='hl-subj'>me</span> (that) he was tired.",
              ex2: "*He told that he was tired. (Missing personal object)<br>*He told to me that... (Incorrect preposition)"
            },
            {
              subject: "say (said)",
              formula: "Used without a direct personal object",
              ex1: "Tom <span class='hl-aux'>said</span> (that) he had lost his job.",
              ex2: "*Tom said me that... (Cannot take personal object directly without 'to')"
            }
          ]
        },
        spellingRules: {
          title: "Direct Speech Punctuation vs. Indirect Formatting",
          rules: [
            {
              condition: "<strong>Direct (Quoted) Speech</strong>",
              change: "Exact words placed between inverted commas ('...'), preceded by a comma or colon.",
              examples: "He said, <span class='hl-marker'>'I lost my job as a reporter.'</span>"
            },
            {
              condition: "<strong>Indirect (Reported) Speech</strong>",
              change: "No quotation marks and no comma after 'said/told'. The conjunction 'that' is optional.",
              examples: "He said <span class='hl-marker'>that</span> he had lost his job as a reporter."
            }
          ]
        },
        cases: [
          {
            category: "Using 'tell' with personal object (told me)",
            sentenceEn: "<span class='hl-subj'>Sally</span> <span class='hl-aux'>told</span> <span class='hl-subj'>me</span> that I should keep it a secret.",
            sentenceAr: "أخبرتني سالي بأنه ينبغي علي كتمان السر (الفعل told يتطلب مفعولاً مباشراً me دون حرف جر)."
          },
          {
            category: "Using 'say' without personal object (He said that)",
            sentenceEn: "<span class='hl-subj'>Fred</span> <span class='hl-aux'>said</span> that he was not coming to the staff meeting.",
            sentenceAr: "قال فريد إنه لن يحضر اجتماع الموظفين (الفعل said لا يأخذ مفعولاً مباشراً)."
          },
          {
            category: "Direct Speech format (Exact quotes with comma)",
            sentenceEn: "<span class='hl-subj'>Tom</span> said, <span class='hl-marker'>'I have just heard the breaking news.'</span>",
            sentenceAr: "قال توم: 'لقد سمعت للتو الأخبار العاجلة' (كلام مباشر بين علامتي تنصيص)."
          },
          {
            category: "Speaker reporting own words (Pronoun 'I' preserved)",
            sentenceEn: "<span class='hl-subj'>I</span> said that <span class='hl-subj'>I</span> <span class='hl-verb'>liked</span> my new house.",
            sentenceAr: "قلتُ إنني أحببتُ منزلي الجديد (عندما ينقل المتحدث كلامه بنفسه، يبقى الضمير I كما هو دون تحويل للغائب)."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 2: The Tense Backshift Ladder
      // ---------------------------------------------------------------------
      {
        id: "u5_g_sec2",
        topicEn: "2. The Backshift Ladder: Tense Mutations in Reported Speech",
        summaryEn: "When the reporting verb is in the past (said/told), the verb tenses in the reported clause shift one step back into the past.",
        ruleTable: {
          headers: ["Direct Speech Tense", "Direct Quoted Example", "Indirect (Reported) Tense", "Backshifted Reported Example"],
          rows: [
            {
              subject: "Present Simple",
              formula: "'I <span class='hl-verb'>never eat</span> meat,' he explained.",
              ex1: "<strong>Past Simple</strong>",
              ex2: "He explained that he <span class='hl-change'>never ate</span> meat."
            },
            {
              subject: "Present Continuous",
              formula: "'I <span class='hl-aux'>am</span> <span class='hl-verb'>waiting</span> for Ann,' he said.",
              ex1: "<strong>Past Continuous</strong>",
              ex2: "He said that he <span class='hl-change'>was waiting</span> for Ann."
            },
            {
              subject: "Present Perfect",
              formula: "'I <span class='hl-aux'>have</span> <span class='hl-verb'>found</span> a flat,' he said.",
              ex1: "<strong>Past Perfect</strong>",
              ex2: "He said that he <span class='hl-change'>had found</span> a flat."
            },
            {
              subject: "Past Simple",
              formula: "'I <span class='hl-verb'>visited</span> France,' Jim said.",
              ex1: "<strong>Past Perfect</strong>",
              ex2: "Jim said that he <span class='hl-change'>had visited</span> France."
            },
            {
              subject: "Future (will)",
              formula: "'I <span class='hl-aux'>will</span> <span class='hl-verb'>give</span> you a call,' she said.",
              ex1: "<strong>Conditional (would)</strong>",
              ex2: "She said that she <span class='hl-change'>would give</span> me a call."
            },
            {
              subject: "Modal (can)",
              formula: "'I <span class='hl-aux'>can't</span> <span class='hl-verb'>afford</span> a car,' Jim said.",
              ex1: "<strong>Past Modal (could)</strong>",
              ex2: "Jim said that he <span class='hl-change'>couldn't afford</span> a car."
            }
          ]
        },
        cases: [
          {
            category: "Future 'will' to 'would' + Tomorrow transformation",
            sentenceEn: "Direct: She said, 'I will give you a call tomorrow.'<br>Indirect: <span class='hl-subj'>She</span> said that she <span class='hl-change'>would give</span> me a call <span class='hl-marker'>the next day</span>.",
            sentenceAr: "تحويل will إلى would وتحويل tomorrow إلى the next day."
          },
          {
            category: "Present Continuous to Past Continuous (was not coming)",
            sentenceEn: "Direct: Fred said, 'I am not coming to the meeting.'<br>Indirect: <span class='hl-subj'>Fred</span> said that he <span class='hl-change'>was not coming</span> to the meeting.",
            sentenceAr: "تحويل المضارع المستمر am not coming إلى الماضي المستمر was not coming."
          },
          {
            category: "Past Simple to Past Perfect (had visited)",
            sentenceEn: "Direct: Jim said, 'I visited France last year.'<br>Indirect: <span class='hl-subj'>Jim</span> said that he <span class='hl-change'>had visited</span> France <span class='hl-marker'>the previous year</span>.",
            sentenceAr: "تحويل الماضي البسيط visited إلى ماضٍ تام had visited مع تحويل last year إلى the previous year."
          },
          {
            category: "Present Perfect to Past Perfect (had given up)",
            sentenceEn: "Direct: John said, 'I have given up my job.'<br>Indirect: <span class='hl-subj'>John</span> said that he <span class='hl-change'>had given</span> up his job.",
            sentenceAr: "تحويل المضارع التام have given إلى ماضٍ تام had given."
          },
          {
            category: "Present Perfect of 'have' (has had -> had had)",
            sentenceEn: "Direct: She said, 'Margaret has had a baby.'<br>Indirect: <span class='hl-subj'>She</span> said that Margaret <span class='hl-change'>had had</span> a baby.",
            sentenceAr: "تحويل المضارع التام has had إلى ماضٍ تام had had."
          },
          {
            category: "Present Simple Negative (don't know -> didn't know)",
            sentenceEn: "Direct: He said, 'I don't know what Sally is doing.'<br>Indirect: <span class='hl-subj'>He</span> said that he <span class='hl-change'>didn't know</span> what Sally was doing.",
            sentenceAr: "تحويل المضارع البسيط المنفي don't know إلى ماضٍ بسيط didn't know."
          }
        ]
      },

      // ---------------------------------------------------------------------
      // Section 3: Time, Place & Pronoun Mutation Reference Table
      // ---------------------------------------------------------------------
      {
        id: "u5_g_sec3",
        topicEn: "3. Time, Place & Pronoun Mutation Reference Table",
        summaryEn: "Adverbs of time and place change to reflect the shifted viewpoint of the speaker in reported speech.",
        ruleTable: {
          headers: ["Direct Speech Expression", "Reported Speech Shift", "Direct Example", "Reported Sentence Example"],
          rows: [
            {
              subject: "today",
              formula: "<span class='hl-change'>that day</span>",
              ex1: "'I am busy today.'",
              ex2: "He said he was busy <span class='hl-change'>that day</span>."
            },
            {
              subject: "yesterday",
              formula: "<span class='hl-change'>the day before / the previous day</span>",
              ex1: "'I called yesterday.'",
              ex2: "She said she had called <span class='hl-change'>the day before</span>."
            },
            {
              subject: "tomorrow",
              formula: "<span class='hl-change'>the next day / the following day</span>",
              ex1: "'We start tomorrow.'",
              ex2: "They said they started <span class='hl-change'>the following day</span>."
            },
            {
              subject: "the day after tomorrow",
              formula: "<span class='hl-change'>in two days' time</span>",
              ex1: "'I leave the day after tomorrow.'",
              ex2: "He said he was leaving <span class='hl-change'>in two days' time</span>."
            },
            {
              subject: "last week / year",
              formula: "<span class='hl-change'>the previous week / year</span>",
              ex1: "'I graduated last year.'",
              ex2: "She said she had graduated <span class='hl-change'>the previous year</span>."
            },
            {
              subject: "a year ago",
              formula: "<span class='hl-change'>a year before / the previous year</span>",
              ex1: "'I saw him a year ago.'",
              ex2: "He said he had seen him <span class='hl-change'>a year before</span>."
            },
            {
              subject: "now",
              formula: "<span class='hl-change'>then</span>",
              ex1: "'I am living in London now.'",
              ex2: "He said he was living in London <span class='hl-change'>then</span>."
            }
          ]
        },
        cases: [
          {
            category: "Reversal: Indirect to Direct (couldn't afford -> can't afford)",
            sentenceEn: "Indirect: Jim said that he couldn't afford to buy a new car.<br>Direct: <span class='hl-subj'>Jim</span> said, <span class='hl-marker'>'I can't afford to buy a new car.'</span>",
            sentenceAr: "إرجاع الجملة إلى الكلام المباشر: تحويل couldn't إلى can't وإعادة الضمير إلى I."
          },
          {
            category: "Reversal: Indirect to Direct (had been -> was)",
            sentenceEn: "Indirect: Laura said that her trip to New York had been fantastic.<br>Direct: <span class='hl-subj'>Laura</span> said, <span class='hl-marker'>'My trip to New York was fantastic.'</span>",
            sentenceAr: "إرجاع الجملة: تحويل had been إلى was وإعادة صفة الملكية إلى My."
          },
          {
            category: "Reversal: Indirect to Direct (was living then -> am living now)",
            sentenceEn: "Indirect: Charlie said that he was living in London then.<br>Direct: <span class='hl-subj'>Charlie</span> said, <span class='hl-marker'>'I am living in London now.'</span>",
            sentenceAr: "إرجاع الجملة: تحويل was living إلى am living وتحويل then إلى now."
          },
          {
            category: "Sentence Identification: Direct Speech (Quotation Marks)",
            sentenceEn: "<span class='hl-subj'>The reporter</span> said, <span class='hl-marker'>'The website will not be banned.'</span> <span class='rule-subtext'>[Classification: DIRECT SPEECH]</span>",
            sentenceAr: "تصنيف الجملة: كلام مباشر (Direct Speech) لوجود علامات الاقتباس والفاصلة."
          },
          {
            category: "Sentence Identification: Indirect Speech (that-clause)",
            sentenceEn: "<span class='hl-subj'>Nadia</span> said <span class='hl-marker'>that</span> she tried to imagine how things used to be. <span class='rule-subtext'>[Classification: INDIRECT SPEECH]</span>",
            sentenceAr: "تصنيف الجملة: كلام غير مباشر / منقول (Indirect Speech)."
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.COURSE_LEARNING_DATA = window.COURSE_LEARNING_DATA || {};
    window.COURSE_LEARNING_DATA.grammar = window.COURSE_LEARNING_DATA.grammar || {};
    window.COURSE_LEARNING_DATA.grammar.unit5 = u5_learning_grammar;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { u5_learning_grammar };
  }
})();
