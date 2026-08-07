// js/data/unit3.js
// Unit 3 — "Life at Work"
// Transcribed from source-content/unit3-extracted.txt.
//
// ANSWER KEY NOTE: these are Student Files with no official answer key.
// Every auto-graded answer below was derived by the implementing agent from
// this unit's own Word List, by re-reading the passage/transcript in
// context, from this unit's own grammar rules (Past Perfect for the
// earlier of two past actions, Present Perfect for indefinite-past/
// still-continuing actions signaled by words like "so far," "recently,"
// "for," "since"), or from standard English phonetics plus this unit's own
// Diphthongs Part B reference table — per IMPLEMENTATION_PLAN.md §1.
// Non-obvious derivations are commented inline. One item is flagged in
// ANSWER_KEY_FLAGS.md rather than guessed silently: u3-reading-a2 (the
// Rana <-> Posting 5 pairing in the jobs-matching activity).

export const unit3 = {
  id: "unit3",
  title: "Life at Work",
  theme: "work",
  sections: {

    // ---------------------------------------------------------------------
    vocabulary: {
      activities: [
        {
          type: "matching",
          id: "u3-vocab-a1",
          title: "Matching Synonyms",
          instructions:
            "Write the words below in the spaces provided beside the words that mean the same meaning.",
          left: [
            "fear", "exhausted", "lazy", "effectual", "requirement",
            "sneaky", "improve", "lovingly", "go about"
          ],
          right: [
            "effective", "unmotivated", "devious", "drained", "enhance",
            "qualification", "fondly", "dread", "approach"
          ],
          // right-index derived per left-index; word bank used exactly once
          // each. All nine are direct dictionary synonyms (fear=dread,
          // exhausted=drained, lazy=unmotivated, effectual=effective,
          // requirement=qualification, sneaky=devious, improve=enhance,
          // lovingly=fondly, go about=approach) — no leftover-pair
          // elimination needed here, unlike Unit 2's Activity 1.
          correctPairs: { 0: 7, 1: 3, 2: 1, 3: 0, 4: 5, 5: 2, 6: 4, 7: 6, 8: 8 }
        },
        // Activity 2 — Complete the Sentences. Shared word bank, each item
        // uses one word exactly once (verified: all 10 bank words
        // consumed). Item 10's word bank entry is plural ("annoyances")
        // even though the sentence reads more naturally with a singular
        // noun ("the only annoyance I have to deal with") — kept exactly as
        // printed in the source word bank rather than silently corrected.
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q1",
          sentence: "The company was worried about the lack of money and how it will affect the ___.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "budget"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q2",
          sentence: "The organizer was familiar with the ___ of royal visits.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "protocol"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q3",
          sentence: "I don't usually like films with bad plots and ___ characters.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "stereotype"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q4",
          sentence: "No one doubts her ___ as a teacher. Everyone agrees that she's good.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "competence"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q5",
          sentence: "The theory is based on a series of wrong ___.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "assumptions"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q6",
          sentence: "Tom was ___ so he couldn't pay his debts.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "bankrupt"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q7",
          sentence: "Most parents teach their children to be ___ around strangers.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "cautious"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q8",
          sentence: "I ___ to say the position has been already filled.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "regret"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q9",
          sentence: "He accepted my resignation with a nasty ___ on his face.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "grin"
        },
        {
          type: "fillBlank",
          id: "u3-vocab-a2-q10",
          sentence: "Lack of parking near the office is the only ___ I have to deal with.",
          wordBank: ["budget", "protocol", "stereotype", "competence", "assumptions", "bankrupt", "cautious", "regret", "grin", "annoyances"],
          correctAnswer: "annoyances"
        },
        // Activity 3 — Matching Words with Definitions. Derived mostly
        // verbatim/near-verbatim against this unit's own Word List
        // (inventory, interpersonal, dread, implement all match exactly);
        // "frustrated"->Disappointed, "resign"->Quit, "unmotivated"->Not
        // very keen to do something, "enhance"->Improve the good qualities
        // are direct dictionary/Word-List matches. "proactive" vs.
        // "resentful" for the two cynicism/unexpected-occurrence
        // definitions was resolved using this unit's own Word List entry
        // for proactive ("serving to prepare for, intervene in, or control
        // an expected occurrence or situation" — matching definition 1
        // almost word-for-word, "unexpected" vs. "expected" aside), leaving
        // "Marked by strong cynicism" to resentful by elimination.
        {
          type: "matching",
          id: "u3-vocab-a3",
          title: "Matching Words with Definitions",
          instructions:
            "Write the words in the box next to their corresponding definitions.",
          left: [
            "frustrated", "proactive", "resentful", "implement", "enhance",
            "inventory", "interpersonal", "unmotivated", "dread", "resign"
          ],
          right: [
            "Serving to prepare for or control an unexpected occurrence",
            "Marked by strong cynicism",
            "Disappointed",
            "Detailed list",
            "Put something into effect",
            "Existing or done between two people",
            "Improve the good qualities of somebody or something",
            "Fear something greatly",
            "Quit",
            "Not very keen to do something"
          ],
          correctPairs: { 0: 2, 1: 0, 2: 1, 3: 4, 4: 6, 5: 3, 6: 5, 7: 9, 8: 7, 9: 8 }
        },
        {
          type: "mcq",
          id: "u3-vocab-a4-q1",
          prompt: "That silly law is no longer ___.",
          options: ["drained", "effective", "interpersonal"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u3-vocab-a4-q2",
          prompt: "___ is the practice among people with power or influence of favoring their own relatives, especially by giving them jobs.",
          options: ["Annoyance", "Qualification", "Nepotism"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u3-vocab-a4-q3",
          prompt: "She found it difficult to establish a new ___ after retirement.",
          options: ["prescription", "routine", "attribute"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u3-vocab-a4-q4",
          prompt: "He was ___ when he realized that his work was shredded into pieces.",
          options: ["enraged", "cautious", "unmotivated"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u3-vocab-a4-q5",
          prompt: "Some people ___ going to work when they don't enjoy what they're doing.",
          options: ["enhance", "dread", "oblige"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    reading: {
      activities: [
        {
          type: "readingPassage",
          id: "u3-reading-a1",
          title: "Nepotism in America",
          passage:
            "1. What is nepotism?\n2. Does nepotism exist in your country?\n\n" +
            "The word nepotism means favoritism toward family or relatives. Generally, people understand nepotism to mean providing opportunities to relatives even when other people who are competing for the same positions may have better qualifications. For many Americans, the word nepotism conjures up images of unworthy, incompetent people taking opportunities from more deserving people. As a result, nepotism often causes resentment in those who have not been born into affluent or privileged families. Frequently, people refer to children of wealthy families as being born 'with a silver spoon in their mouths,' to say that these people did not earn their opportunities.\n\n" +
            "When we look at the world of business, for instance, many of the Fortune 500 businesses began as family businesses. Consequently, in many of these businesses, the founders have been appointing their relatives to powerful positions in these companies. The Ford Company and McGraw-Hill Publishing are just two examples of family run businesses.\n\n" +
            "Let's look at nepotism in politics as another example. George Bush was born into a very powerful and rich family. His father, George Bush Senior was the former President and his brother was the governor of Florida. When George W. Bush won the 2000 presidential election, many who voted for his opponent, Al Gore Junior, pointed to Bush's victory as the result of nepotism. Similarly, when John F. Kennedy appointed his brother, Robert Kennedy, as Attorney General, he was accused of nepotism.\n\n" +
            "We can also see many instances of nepotism in the film industry as well. Famous parents have used their contacts, wealth and power to provide their children with opportunities to become famous. The Baldwin family, Sylvester Stallone, Martin Sheen, Goldie Hawn and Kirk Douglas are all examples of actors who have given opportunities to their sons or daughters. As a result, their children are famous celebrities.\n\n" +
            "It is not all bad though. Many people argue that opportunities should be given to those people who deserve them, based on merit instead of family ties. Others argue that nepotism helps to strengthen family ties. By strengthening family ties, nepotism upholds the very foundation of human communities.",
          questions: [
            {
              type: "mcq",
              id: "u3-reading-a1-q1",
              prompt: "Critics say that opportunities should:",
              options: [
                "go to members of powerful families.",
                "be given based on merit.",
                "be given based on family ties."
              ],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u3-reading-a1-q2",
              prompt: "Nepotism in America:",
              options: [
                "happens only in politics.",
                "happens only in business.",
                "happens in many aspects of life."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u3-reading-a1-q3",
              prompt: "Sylvester Stallone is one example of:",
              options: [
                "a parent who provided his child with the opportunity to succeed in business.",
                "a parent who provided his child with the opportunity to succeed in politics.",
                "a parent who provided his child with the opportunity to succeed in acting."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u3-reading-a1-q4",
              prompt: "Being born with a 'silver spoon in their mouths' means:",
              options: [
                "not being able to say anything intelligent.",
                "having opportunities they didn't earn but have because of the influence of their families.",
                "only caring about silver."
              ],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u3-reading-a1-q5",
              prompt: "Some people argue that the positive side of nepotism is that it:",
              options: [
                "provides the best and brightest people with opportunities.",
                "only exists in America.",
                "makes family ties stronger."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u3-reading-a1-q6",
              prompt: "In the first paragraph, affluent means:",
              options: ["wealthy", "mean", "unworthy"],
              correctIndex: 0
            }
          ]
        },
        // Activity 2 — Matching Postings for Jobs. Per IMPLEMENTATION_PLAN.md
        // §3 (Phase 2, step 2.4 note): modeled with the `matching` type,
        // `left` = the five candidate bios, `right` = the five job
        // postings (shown in full since they're long). Four of five pairs
        // are unambiguous skill/degree matches (Sami's Graphic Design
        // degree -> Posting 2; Suha's English Lit degree + wants to teach
        // grades 1-3 -> Posting 4; Sahel's MS Computer Science + 5 years as
        // an IT Budgeting Specialist at a bank -> Posting 3, an exact
        // experience/domain match; Nabil, a marketing student wanting a
        // summer sales job -> Posting 1, entry-level retail needing only a
        // high school diploma). Rana (IT bachelor's, fresh graduate) is
        // left with Posting 5 (web/multimedia design — Flash, Photoshop,
        // Illustrator, HTML/JavaScript) by elimination; this is a weaker
        // skills match than the other four and is flagged in
        // ANSWER_KEY_FLAGS.md rather than presented with full confidence.
        {
          type: "matching",
          id: "u3-reading-a2",
          title: "Matching Postings for Jobs",
          instructions:
            "Read the descriptions of the people below and match each of them with the most suitable job posting for him/her, according to their qualifications.",
          left: [
            "a. My name is Rana. I am 22 years old. I am a fresh graduate with a bachelor degree in Information Technology. I am looking for a job that is interesting in my specialization. I have excellent English language skills.",
            "b. My name is Sami. I am 24 years old. I just graduated with a bachelor degree in Graphic Design. I am looking for a job in my area of specialization.",
            "c. My name is Suha. I am 23 years old. I am a recent graduate with a bachelor degree in English Language and Literature. I am looking for a job vacancy in an elementary school as an English teacher.",
            "d. My name is Sahel. I am 30 years old. I have an MS degree in computer science. I worked in a bank for 5 years as an IT Budgeting Specialist. I would like to work in another bank.",
            "e. My name is Nabil. I am 20 years old. I am still a university student. I am studying Marketing. I am looking for a job during the summer that is related to sales. I have good communication skills."
          ],
          right: [
            "Posting 1: Job Description and Requirements — Assist customers in finding what they are looking for and interest them in buying our clothes. Describe a product's features, demonstrate its use, help stock shelves, arrange for delivery purchases and mark price tags. Must have a high school diploma or equivalent, enjoy working with others, have the patience to deal with difficult customers, a neat appearance, the ability to communicate clearly and effectively, an interest in sales work, and be able to stand for long hours and wrap gifts.",
            "Posting 2: Job Description and Requirements — Creative, a university graduate with a background in Graphic Design, specialized in advertising. Self-motivated, energetic, pleasant and a strong team player. Bilingual (Arabic and English) and a great writer. Fluent in design software and a fast learner.",
            "Posting 3: Job Description — Contribute to IT long-term strategic plans and annual budgets; manage and support the global IT budgeting process; prepare MIS based on budget/spending trends and forecasts; generate budget reports for management; coordinate budget-process communication across departments. Job Requirements: a graduate degree in a technical discipline (e.g. computer engineering/computer science); 5-10 years of experience preferably in IT technical positions at a major financial institution or banking solutions vendor, at least 2 years in a similar position; good English language, presentation and interpersonal skills.",
            "Posting 4: Job Description and Requirements — A bachelor degree in English Language and Literature; fluent in English, oral and written; the ability to deal with children, grades 1-3; computer literacy; the ability to work in teams.",
            "Posting 5: Job Description and Requirements — Strong written and oral English communication skills; creative design skills; strong Flash skills including Flash animation; good knowledge of Adobe Suite (Photoshop and Illustrator); good knowledge of web technologies (HTML, xHTML, JavaScript, etc); creative and enthusiastic, willing to explore and adopt new technologies in a multimedia environment; able to work independently in a dynamic environment."
          ],
          correctPairs: { 0: 4, 1: 1, 2: 3, 3: 2, 4: 0 }
        }
      ]
    },

    // ---------------------------------------------------------------------
    grammar: {
      intro:
        "## Past Perfect and Present Perfect\n\n" +
        "### Grammar Focus 1: Past Perfect\n" +
        "**Form:** had + past participle (I/we/you/they/he/she/it had arrived).\n\n" +
        "**Use:** mainly to show which of two past events happened first. Words like *after*, *before*, and *when* often signal the sequence.\n\n" +
        "*Sally had studied English before she moved to New York.* (studying English happened first)\n" +
        "*Ali and Ahmed were able to get a hotel room because they had booked in advance.*\n" +
        "*Ahmed had already posted the letter when I saw him yesterday.*\n\n" +
        "**Negative:** had not + past participle. **Interrogative:** Had + subject + past participle? (\"Had you called him before you left?\")\n\n" +
        "### Grammar Focus 2: Present Perfect\n" +
        "**Form:** have/has + past participle.\n\n" +
        "*She has just arrived. They have already posted the letter. Have you ever been to Mecca?*\n\n" +
        "**Use:**\n" +
        "1. An action that happened at an indefinite point in the past — often used with *just, yet, since, for, recently, already* (\"She has gone to work\" — we don't know exactly when).\n" +
        "2. An action that started in the past and still continues, especially with *since* and *for* (\"Sally has lived in Amman since 1990.\" \"Ahmed has been a teacher for ten years.\")\n\n" +
        "**Negative:** have/has + not + past participle. **Interrogative:** Have/Has + subject + past participle? (\"Have they finished?\" \"When has she finished?\")",
      activities: [
        // Activity 1 — "Circle It" (5 items). Items 1 and 5 are single-blank
        // with three full verb-phrase options each, modeled as
        // fillBlank/mode:"options". Item 2's bracketed options all share
        // the same second-verb form ("had cleaned"), so only the first verb
        // truly varies across the three choices — that constant second form
        // is folded into the sentence as fixed text, and the item is
        // modeled as a single-blank choice on the first verb only. Items 3
        // and 4 give combined two-blank verb-phrase alternatives that don't
        // decompose into independent per-blank options, so they're modeled
        // as `mcq` with the bracketed combinations as the answer choices.
        {
          type: "fillBlank",
          id: "u3-grammar-a1-q1",
          mode: "options",
          sentence: "Tom ___ his presentation before he went to the office.",
          options: ["prepared", "had prepared", "has prepared"],
          correctAnswer: "had prepared"
        },
        {
          type: "fillBlank",
          id: "u3-grammar-a1-q2",
          mode: "options",
          // Source options: (prepared, had cleaned / have prepared, had
          // cleaned / prepares, had cleaned) — "had cleaned" is constant
          // across all three, so it's folded into the sentence as given.
          sentence: "She ___ lunch after she had cleaned the house.",
          options: ["prepared", "have prepared", "prepares"],
          correctAnswer: "prepared"
        },
        {
          type: "mcq",
          id: "u3-grammar-a1-q3",
          prompt: "She ___ already ___ the assignment.",
          options: ["has submit", "has submitted", "have submitted"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u3-grammar-a1-q4",
          prompt: "___ they ever ___ Japan?",
          options: ["Has ... visited", "Had ... been visiting", "Have ... visited"],
          correctIndex: 2
        },
        {
          type: "fillBlank",
          id: "u3-grammar-a1-q5",
          mode: "options",
          sentence: "She ___ her resignation before her boss fired her.",
          options: ["had written", "had been writing", "has written"],
          correctAnswer: "had written"
        },
        // Activity 2 — "Circle It" (4 items). Items 1-3 are single-blank
        // full-phrase choices; item 4 is a combined two-blank item modeled
        // as `mcq`, same convention as Activity 1's items 3/4.
        {
          type: "fillBlank",
          id: "u3-grammar-a2-q1",
          mode: "options",
          // "so far" signals present perfect for an ongoing count/total.
          sentence: "He ___ three letters so far.",
          options: ["has written", "has been writing", "wrote"],
          correctAnswer: "has written"
        },
        {
          type: "fillBlank",
          id: "u3-grammar-a2-q2",
          mode: "options",
          // "recently" signals present perfect (indefinite recent past).
          sentence: "My partner ___ his assignment recently.",
          options: ["has finished", "has been finishing", "finished"],
          correctAnswer: "has finished"
        },
        {
          type: "fillBlank",
          id: "u3-grammar-a2-q3",
          mode: "options",
          // "for five years" — duration continuing to the present, present
          // perfect per this unit's own Use rule 2.
          sentence: "My neighbors ___ stayed in the same apartment for five years.",
          options: ["stayed", "have stayed", "stay"],
          correctAnswer: "have stayed"
        },
        {
          type: "mcq",
          id: "u3-grammar-a2-q4",
          prompt: "I ___ the text carefully before I ___ the questions.",
          options: ["have read ... answered", "had read ... answered", "has read ... have answered"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    listening: {
      activities: [
        {
          type: "listeningTranscript",
          id: "u3-listening-a1",
          title: "How to find a job?",
          audioSrc: "assets/audio/u3-listening-a1.mp3",
          transcript: [
            { speaker: "Melissa", line: "Our fellow seniors, just 3 years ago, we were sitting in your places. The two of us were lucky that each of us found jobs we love, but we didn't find them easily and we didn't find them right away." },
            { speaker: "Nadia", line: "It is a great pleasure to be here today. Both of us spent such wonderful years of our lives at this university, although you're probably at the stage at which you can't wait to have university behind you, one day you'll look back fondly on these years. Once we graduated, we were unsure of what to do and the competition for jobs was fierce." },
            { speaker: "Melissa", line: "Once you begin looking for a job, the key question is: how do you find a job (paid or volunteer) that utilizes your skills and your passions? To discover the most suitable job for you, you need to focus on your strengths and weaknesses." },
            { speaker: "Nadia", line: "To begin with, you should take a 'personal inventory' of your strengths and weaknesses, skills, abilities and qualifications. Do you have strong interpersonal or communication skills? Are you good at research? Do you work well in a team or do you prefer working alone? Make a list of your personal attributes. Then make another list — hopefully a short one — of the things you would like to enhance. For instance, do you have a problem meeting deadlines? Think about all of these factors thoroughly — and be honest with yourself. Once you have done that, you will be in a better position to be able to determine the most suitable type of job for you." },
            { speaker: "Melissa", line: "In your senior year, you will have to do some research about opportunities in that area. After you have discovered what you want, your questions will become more specific. You will move from, \"Where can I find employers who might hire me?\" to \"How do I get interviewed by my preferred employer?\"" },
            { speaker: "Nadia", line: "Be creative and don't limit yourself. Match your skill, or attribute set, with opportunities. Try to imagine several different scenarios. After you narrow your focus, look at the more practical aspects for instructions." },
            { speaker: "Melissa", line: "Don't just look in the classified advertisements for jobs. Go to job fairs, attend the school workshops and speak to your professors and academic advisors. BE PROACTIVE!" },
            { speaker: "Nadia", line: "You should also create professional CV. Attend the university workshops to find out how to create a professional looking CV. Then, when you send your CVs out, follow-up to make sure that your CV didn't just get filed away in the Human Resources Department without receiving the attention it deserves." },
            { speaker: "Melissa", line: "Remember, the first contact probably won't hire you. However, with determination everything becomes achievable. Just set a goal, realize your abilities and give it your best shot. Keep trying until you get the job you deserve." }
          ],
          questions: [
            {
              type: "mcq",
              id: "u3-listening-a1-q1",
              prompt: "Nadia and Melissa graduated:",
              options: ["a year ago", "three years ago", "two years ago"],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u3-listening-a1-q2",
              prompt: "To find the most suitable job, they advised students to:",
              options: [
                "relax and be calm.",
                "make a list of instructors and advisors.",
                "make a list of their strengths and weaknesses."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u3-listening-a1-q3",
              prompt: "According to Nadia and Melissa, competition for jobs was:",
              options: ["easy", "fierce", "creative"],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u3-listening-a1-q4",
              prompt: "To learn more about what jobs are available, they advised students to:",
              options: [
                "do some research.",
                "ask their friends.",
                "wait for a company to call them."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u3-listening-a1-q5",
              // Not verbatim in the transcript, but the best fit by
              // elimination: (a) contradicts "BE PROACTIVE!", (c)
              // contradicts "the first contact probably won't hire you" —
              // the presentation's overall message is preparation-focused
              // (personal inventory, research, a professional CV).
              prompt: "If a potential employer calls to arrange an interview, seniors should:",
              options: [
                "only wait.",
                "prepare themselves before hand.",
                "relax because that means they were accepted for the job."
              ],
              correctIndex: 1
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    pronunciation: {
      intro:
        "## Diphthongs: Part B\n\n" +
        "*(Part A is in Unit 2.)* Part B covers: `/ɪə/`, `/ʊə/`, `/eə/`, `/eɪ/`.\n\n" +
        "| Symbol | Examples |\n|---|---|\n" +
        "| /ɪə/ | near /nɪə/, beer /bɪə/, hear /hɪə/ |\n" +
        "| /ʊə/ | tour /tʊə/, poor /pʊə/, sure /ʃʊə/ |\n" +
        "| /eə/ | air /eə/, hair /heə/, bear /beə/ |\n" +
        "| /eɪ/ | may /meɪ/, say /seɪ/, today /təˈdeɪ/ |",
      activities: [
        // Activity 1 — "Circle the word which has the same diphthong."
        // Source table columns are headed by target diphthongs /eɪ/, /eə/,
        // /ɪə/, /ʊə/; the /eɪ/ column's rows are printed a/b/d (skipping
        // "c" — a labeling typo in the source, kept as three options here).
        {
          type: "diphthongMatch",
          id: "u3-pron-a1-q1",
          mode: "wordForDiphthong",
          targetDiphthong: "/eɪ/",
          audioSrc: "assets/audio/words/chase.mp3",
          // dear /dɪə/ has /ɪə/; chase /tʃeɪs/ ✓ has /eɪ/; shy /ʃaɪ/ has /aɪ/.
          options: ["dear", "chase", "shy"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a1-q2",
          mode: "wordForDiphthong",
          targetDiphthong: "/eə/",
          audioSrc: "assets/audio/words/there.mp3",
          // vowel /ˈvaʊəl/ has /aʊ/; There /ðeə/ ✓ has /eə/; plural /ˈplʊərəl/ has /ʊə/.
          options: ["vowel", "There", "plural"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a1-q3",
          mode: "wordForDiphthong",
          targetDiphthong: "/ɪə/",
          audioSrc: "assets/audio/words/here.mp3",
          // behind /bɪˈhaɪnd/ has /aɪ/; sure /ʃʊə/ has /ʊə/; here /hɪə/ ✓ has /ɪə/.
          options: ["behind", "sure", "here"],
          correctIndex: 2
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a1-q4",
          mode: "wordForDiphthong",
          targetDiphthong: "/ʊə/",
          audioSrc: "assets/audio/words/pure.mp3",
          // came /keɪm/ has /eɪ/; pure /pjʊə/ ✓ has /ʊə/; height /haɪt/ has /aɪ/.
          options: ["came", "pure", "height"],
          correctIndex: 1
        },
        // Activity 2 — "choose the diphthong that matches the sound."
        {
          type: "diphthongMatch",
          id: "u3-pron-a2-q1",
          mode: "diphthongForWord",
          // overweight /ˌəʊvəˈweɪt/ — stressed final syllable has /eɪ/.
          prompt: "overweight",
          audioSrc: "assets/audio/words/overweight.mp3",
          options: ["/eɪ/", "/aɪ/"],
          correctIndex: 0
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a2-q2",
          mode: "diphthongForWord",
          // here /hɪə/.
          prompt: "here",
          audioSrc: "assets/audio/words/here_again.mp3",
          options: ["/ɪə/", "/eə/"],
          correctIndex: 0
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a2-q3",
          mode: "diphthongForWord",
          // blonde-haired — "haired" /heəd/ has /eə/.
          prompt: "blonde-haired",
          audioSrc: "assets/audio/words/blonde-haired.mp3",
          options: ["/ɪə/", "/eə/"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u3-pron-a2-q4",
          mode: "diphthongForWord",
          // tour — this unit's own Part B reference table gives tour /tʊə/.
          prompt: "tour",
          audioSrc: "assets/audio/words/tour.mp3",
          options: ["/əʊ/", "/ʊə/"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    speaking: {
      activities: [
        {
          type: "openResponse",
          id: "u3-speaking-a1",
          prompt: "Fairness — have you ever seen examples of nepotism?",
          guidance:
            "Offline team activity. Form teams of four. Discuss whether you have ever seen examples of nepotism. Think of examples and discuss those examples with your teammates."
        },
        {
          type: "openResponse",
          id: "u3-speaking-a2",
          prompt: "Pick and Choose — discuss one of the two question cards.",
          guidance:
            "Form teams of four, choose one card, discuss possible replies, and form five proper sentences to express your thoughts. Each team will be called upon to present their answers; select one member to present.\n\n" +
            "Card 1: Imagine you are a head of a department in a company. What would be the most important traits you would like to have in the workers under your supervision?\n" +
            "Card 2: Imagine you are a worker under someone's supervision. What would be the most important trait you would like to have in your supervisor?"
        }
      ]
    },

    // ---------------------------------------------------------------------
    writing: {
      intro:
        "## Writing a Business Letter\n\n" +
        "As a professional or business person, business letters are an important way to communicate with other professionals or with clients — to request information, apply for a job, or apply for entrance to a university for a higher degree.\n\n" +
        "### Planning a Business Letter\n" +
        "1. **Consider your purpose.** Think about the reason you are writing the letter.\n" +
        "2. **Consider your audience.** Keep in mind who you are writing to.\n" +
        "3. **Consider your tone.** Your letter will make a better impression if the tone is polite and formal.\n" +
        "4. **Gather your ideas.** Jot down exactly what you want to say or whatever information you intend to convey.\n" +
        "5. **Be brief.** Check that you haven't included any unnecessary information — but don't leave out any important details.",
      activities: [
        {
          type: "openResponse",
          id: "u3-writing-a1",
          prompt: "All About You! — what would make you more employable?",
          guidance:
            "In MS Word, write the first draft of a paragraph answering: Of the things you have done this year, which would help you obtain a job? Which skills have you developed? Which abilities do you have that would make you more employable? Try to include words from this unit's Word List and write using the perfect tenses. Check the first draft with a classmate, correct any mistakes, and save your second draft."
        },
        {
          type: "openResponse",
          id: "u3-writing-a2",
          prompt: "Applying for a Job — write two paragraphs.",
          guidance:
            "In MS Word, write two paragraphs: the first about the type of job you would like to work at, the second about why you think you would be suitable for that job. The tone should be formal and business-like. Check your work with a classmate, correct any mistakes, and save your work."
        }
      ]
    },

    // ---------------------------------------------------------------------
    wordlist: {
      // Source capitalizes "Attribute (n.)" — normalized to lowercase term
      // for consistency with every other entry. "unmotivated" and "devious"
      // came through text extraction visibly garbled ("Not very something
      // keen to do" / "dishonest, straight sneaky; forward; not
      // trustworthy") — cleaned up here to standard phrasing that preserves
      // the source meaning (and matches Vocabulary Activity 3's own clue
      // text for "unmotivated" verbatim).
      terms: [
        { term: "inventory", pos: "n.", definition: "detailed list", arabic: "جرد / قائمة مفصلة" },
        { term: "qualification", pos: "n.", definition: "training, examination or experience that qualifies somebody for work, training, etc.", arabic: "مؤهل" },
        { term: "interpersonal", pos: "adj.", definition: "existing or done between two people", arabic: "بين الأشخاص" },
        { term: "attribute", pos: "n.", definition: "quality regarded as a natural or typical part of somebody or someone", arabic: "صفة / سمة" },
        { term: "enhance", pos: "v.", definition: "increase the good qualities of somebody or something", arabic: "يعزز / يحسن" },
        { term: "fondly", pos: "adv.", definition: "lovingly; gently", arabic: "بمودة" },
        { term: "pharmaceutical", pos: "adj.", definition: "connected with the making and distribution of drugs and medicines", arabic: "دوائي / صيدلاني" },
        { term: "proactive", pos: "adj.", definition: "serving to prepare for, intervene in, or control an expected occurrence or situation", arabic: "استباقي" },
        { term: "drained", pos: "adj.", definition: "made weaker or poorer, etc., by gradually using up strength, money, etc.", arabic: "مستنزف / منهك" },
        { term: "dread", pos: "v.", definition: "fear something greatly", arabic: "يخشى / رهبة" },
        { term: "effective", pos: "adj.", definition: "producing the intended result", arabic: "فعال" },
        { term: "prescription", pos: "n.", definition: "doctor's written instruction for the composition and use of a medicine", arabic: "وصفة طبية" },
        { term: "nepotism", pos: "n.", definition: "practice among people with power or influence of favoring their own relatives, especially by giving them jobs", arabic: "محسوبية" },
        { term: "manipulative", pos: "adj.", definition: "tending to control or influence somebody cleverly or by unfair means", arabic: "متلاعب" },
        { term: "unmotivated", pos: "adj.", definition: "not very keen to do something", arabic: "فاقد للدافع / غير متحفز" },
        { term: "devious", pos: "adj.", definition: "dishonest, sneaky, and not trustworthy", arabic: "مخادع / ماكر" },
        { term: "oblige", pos: "v.", definition: "compel or require somebody by law, agreement or moral pressure to do something", arabic: "يلزم / يجبر" },
        { term: "fund", pos: "v.", definition: "provide (an institution, a project, etc.) with money", arabic: "يمول / صندوق" },
        { term: "approach", pos: "v.", definition: "go to somebody for help or support, or in order to offer something", arabic: "نهج / يقترب" },
        { term: "implement", pos: "v.", definition: "put something into effect; carry out", arabic: "ينفذ / يطبق" }
      ]
    }
  }
};
