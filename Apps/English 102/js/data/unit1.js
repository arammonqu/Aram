// js/data/unit1.js
// Unit 1 — "Learning and Education"
// Transcribed from source-content/unit1-extracted.txt + IMPLEMENTATION_PLAN.md §10
// (vowel tick-box table §10.1, Cross Sign decorative-graphic confirmation §10.2).
//
// ANSWER KEY NOTE: these are Student Files with no official answer key.
// Every auto-graded answer below was derived by the implementing agent from
// this unit's own Word List, by re-reading the passage/dialogue/grammar
// explanation in context, or from standard English phonetics — per
// IMPLEMENTATION_PLAN.md §1. Non-obvious derivations are commented inline.
// One genuinely ambiguous item (Listening Activity 2, Q4) is flagged in
// ANSWER_KEY_FLAGS.md rather than guessed silently.

export const unit1 = {
  id: "unit1",
  title: "Learning and Education",
  theme: "education",
  sections: {

    // ---------------------------------------------------------------------
    vocabulary: {
      activities: [
        {
          type: "matching",
          id: "u1-vocab-a1",
          title: "Matching the Opposites",
          instructions:
            "Write the words below in the spaces provided beside the words that mean the opposite.",
          left: [
            "coincidence", "occupy", "disbelief", "demonstrate", "massive",
            "retrieve", "assist", "compete", "enroll", "determination"
          ],
          right: [
            "lose", "unengaged", "disprove", "hinder", "plan",
            "share", "indetermination", "belief", "quit", "tiny"
          ],
          // right-index derived per left-index; word bank used exactly once each.
          correctPairs: { 0: 4, 1: 1, 2: 7, 3: 2, 4: 9, 5: 0, 6: 3, 7: 5, 8: 8, 9: 6 }
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q1",
          jumbled: "ostratedemn",
          definition: "to show or prove something",
          correctAnswer: "demonstrate"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q2",
          jumbled: "moreoophs",
          definition: "a student in the second year of a course at a college or university",
          correctAnswer: "sophomore"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q3",
          jumbled: "orttu",
          definition: "a person who teaches one person or a small group at a time",
          correctAnswer: "tutor"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q4",
          jumbled: "visorpusre",
          definition: "a person who is in charge of someone",
          correctAnswer: "supervisor"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q5",
          jumbled: "isthes",
          definition: "long written essay submitted by a candidate for a university degree",
          correctAnswer: "thesis"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q6",
          jumbled: "tationssdire",
          definition: "thesis",
          correctAnswer: "dissertation"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q7",
          jumbled: "uledom",
          definition: "a part of a course of learning",
          correctAnswer: "module"
        },
        {
          type: "anagram",
          id: "u1-vocab-a2-q8",
          jumbled: "baclorhe",
          definition: "a person who has earned a four year degree conferred by a college or university",
          correctAnswer: "bachelor"
        },
        // Activity 3 — Hangman. All 5 clues are verbatim Word List definitions,
        // so confidence is high for every item.
        {
          type: "hangman",
          id: "u1-vocab-a3-q1",
          clue: "A talk about a subject to an audience or a class",
          correctAnswer: "lecture"
        },
        {
          type: "hangman",
          id: "u1-vocab-a3-q2",
          clue: "To give special attention to something; emphasize",
          correctAnswer: "highlight"
        },
        {
          type: "hangman",
          id: "u1-vocab-a3-q3",
          clue: "Stimulation of mind or feelings to do something beyond a person's usual ability; creativity",
          correctAnswer: "inspiration"
        },
        {
          type: "hangman",
          id: "u1-vocab-a3-q4",
          clue: "All the activities involved in the management or supervision of affairs or business",
          correctAnswer: "administration"
        },
        {
          type: "hangman",
          id: "u1-vocab-a3-q5",
          clue: "Any official or formal program to provide practical experience for beginners in an occupation or profession",
          correctAnswer: "internship"
        },
        // Activity 4 — Complete the Sentences. Shared word bank, each item
        // uses one word exactly once (verified: all 10 bank words consumed).
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q1",
          sentence: "I am attending ___ on Greek philosophy.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "lectures"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q2",
          sentence: "The election ___ democracy in action.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "demonstrates"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q3",
          sentence: "The government is trying to find a new economic ___ to improve the situation.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "strategy"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q4",
          sentence: "It is ___ that we make a quick decision.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "imperative"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q5",
          sentence: "A ___ is a person who checks on others' work to make sure it is done properly.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "supervisor"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q6",
          sentence: "It is interesting to watch people ___ with each other at parties.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "interact"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q7",
          sentence: "Her ___ to learn English is amazing.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "determination"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q8",
          sentence: "This TV program ___ the problems of the unemployed.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "highlights"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q9",
          sentence: "He listened in ___ to his son's story.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "disbelief"
        },
        {
          type: "fillBlank",
          id: "u1-vocab-a4-q10",
          sentence: "They enjoyed the film ___.",
          wordBank: ["interact", "strategy", "disbelief", "supervisor", "immensely", "highlights", "lectures", "determination", "imperative", "demonstrates"],
          correctAnswer: "immensely"
        },
        {
          type: "mcq",
          id: "u1-vocab-a5-q1",
          prompt: "Profits have risen ___.",
          options: ["phonologically", "genetically", "significantly"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-vocab-a5-q2",
          prompt: "A ___ is a student in his/her first year in university.",
          options: ["senior", "sophomore", "freshman"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-vocab-a5-q3",
          prompt: "She has the perfect ___ for this job.",
          options: ["coincidence", "credentials", "module"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-vocab-a5-q4",
          prompt: "A student in his/her third year of a four-year course at college or high school is called a ___.",
          options: ["junior", "senior", "freshman"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-vocab-a5-q5",
          prompt: "A student in his/her last year at college is called a ___.",
          options: ["junior", "senior", "sophomore"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    reading: {
      activities: [
        {
          type: "readingPassage",
          id: "u1-reading-a1",
          title: "Our Brain",
          passage:
            "Our brain is divided into two parts called right hemisphere and left hemisphere. Scientists maintain that language is related to the left side of the brain, namely the front part; that is, we speak with the left hemisphere. Therefore, injuries to the left side of the brain result in language aphasia, such as poor articulation and other language difficulties.\n\n" +
            "The period of brain development which is suited for language acquisition occurs before cerebral dominance has been established. Scientists call this period the critical period, because once this period ends, it is nearly impossible for language to be acquired. Initially, scientists believed that this period ended by the time puberty started. Certain cases however have proven this theory to be wrong. Children who grew up in isolation without learning a first language, have been able to learn how to acquire language speaking skills later. Yet some aspects of language acquisition are nearly impossible to learn after this point. For instance, a girl named Genie was discovered at the age of thirteen. When they found her, she was locked in a cellar without exposure to language or other forms of intellectual stimulation for thirteen years. Many specialists worked with her to help her learn how to speak. She did, eventually, learn some aspects of language and could communicate with those around her. Yet, she could not grasp grammar and word order. As a result of this case, scientists concluded that people who have not acquired language before puberty may be able to learn a language in a general sense; however, there are some aspects of language that they will not be able to learn.\n\n" +
            "Our brain works in a fascinating way. It stores new information and uses it according to need. This is why it is imperative to continually apply what you are learning. For example, if your mother tongue is Arabic, and you are learning Spanish, the information you acquire will only be retrieved when you are attempting to communicate in Spanish. Learning theories prove that long-life learning won't be achieved if not subjected to real practice. If, again, you are learning a new language, you need to use it over and over so that you can retain it on a long-term basis. When you learn something, you acquire new information. To retain that information on a long-term basis, you have to use it as often as possible. Remember, if you don't use it, you'll lose it!",
          questions: [
            {
              type: "mcq",
              id: "u1-reading-a1-q1",
              prompt: "In the second paragraph, 'retain it on a long-term basis' means:",
              options: [
                "remember what you learn and be able to use it.",
                "forget it.",
                "speak the new language for a long time."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a1-q2",
              prompt: "In the second paragraph, 'according to need' means:",
              options: [
                "your brain keeps the information that you use a lot.",
                "your brain does not store important information.",
                "your brain deletes information if there is too much of it."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a1-q3",
              // Text: "language is related to the left side of the brain, namely
              // the front part" — left side is the primary/complete claim tested;
              // "the front part" (c) describes a sub-region of it, not a rival answer.
              prompt: "The part of the brain responsible for language is:",
              options: ["the left side.", "the right side.", "the front part."],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a1-q4",
              prompt: "People who have not acquired language before puberty:",
              options: [
                "can learn language in a general sense.",
                "can learn every aspect of language perfectly.",
                "can not learn language."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a1-q5",
              prompt: "According to scientists, learning theories prove that long-life learning can only be achieved:",
              options: ["if subject to real practice.", "if we lead a normal life.", "spontaneously."],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a1-q6",
              prompt: "Injuries to the left side of the brain result in:",
              options: ["language problems.", "language acquisition.", "good articulation."],
              correctIndex: 0
            }
          ]
        },
        {
          type: "readingPassage",
          id: "u1-reading-a2",
          title: "The Benefits of a University Education",
          passage:
            "Individuals benefit from attaining higher levels of education. Research findings demonstrate that university graduates earn more money, have more opportunities for promotion and better working conditions than those who are not university educated. University graduates have a raised awareness of their health. According to research findings, they take better care of their health by exercising more and having more medical and dental check ups. For example, when university educated women are compared to non-university educated women, they are found to have healthier families.\n\n" +
            "Moreover, university graduates are found to have a higher self-esteem than those who have not attained a university degree. Compared with high school graduates and non-university graduates, university graduates are more satisfied with their jobs, they change their jobs less frequently and are more enthusiastic about life. In addition to this, university graduates are less likely to engage in illegal activities.\n\n" +
            "Society, in turn, benefits from having more educated citizens. University graduates earn higher salaries and pay higher taxes. This definitely benefits society because that money will be invested in social programs or infrastructure development. Generally speaking, university graduates have better problem solving skills and they are more inclined to treat those from other cultures or those of different opinions with respect and tolerance. By doing this, they strengthen ties among the members of their communities. Finally, university educated people are more likely to be concerned about their environment; consequently, they tend to be more active in their communities, volunteer more often, inform themselves about current events, and they tend to vote. This will of course increase productivity at work immensely which is good for the economy.",
          questions: [
            {
              type: "mcq",
              id: "u1-reading-a2-q1",
              prompt: "In the second paragraph, 'graduates have a higher self-esteem' means:",
              options: [
                "graduates earn higher salaries.",
                "graduates are smarter than those who are not university graduates.",
                "graduates have a positive opinion about themselves."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-reading-a2-q2",
              prompt: "University graduates probably change their jobs less frequently because:",
              options: [
                "they have better working conditions and more opportunities for promotion.",
                "they are healthier than non-university educated people",
                "they don't engage in illegal activities"
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a2-q3",
              prompt: "University graduates pay higher taxes because:",
              options: [
                "governments want them to pay for their education.",
                "they have higher levels of education.",
                "they earn higher salaries."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-reading-a2-q4",
              // Text compares university-educated women to non-university women,
              // not to men, so (c) is a distractor.
              prompt: "Women who are university educated:",
              options: [
                "tend to take better care of their health",
                "tend to take little care of their health.",
                "tend to take more care of their health than men."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-reading-a2-q5",
              prompt: "In the third paragraph, \"treating those from other cultures with respect and tolerance' means:",
              options: [
                "to treat others with acceptance.",
                "to work with others even though you don't think they are as good as you are.",
                "to work with people you don't like being around."
              ],
              correctIndex: 0
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    grammar: {
      intro:
        "## Present Simple Tense and Present Continuous: Revision\n\n" +
        "### Present Simple\n" +
        "**Form:** the infinitive [with I, we, you, they] and the infinitive+s [with he, she, it].\n\n" +
        "**Use:** habitual/regular actions (with adverbs of frequency), and facts.\n\n" +
        "**Negation/Questions:** formed with do/does (do not/does not, contracted don't/doesn't). Do, does, do not and does not are always followed by the bare infinitive — never add -s after do/does.\n\n" +
        "**Spelling:** verbs ending in -ss, -sh, -ch, -x, -o, -zz add -es (watch → watches, go → goes). Verbs ending in consonant+y change y→ies (study → studies), but vowel+y just adds s (buy → buys).\n\n" +
        "### Present Continuous\n" +
        "**Form:** am/is/are + verb+ing.\n\n" +
        "**Use:** actions happening now or around now. With always/constantly, it expresses complaint (e.g. \"You are always coming late.\").\n\n" +
        "**Stative verbs** (know, realize, understand, see, hear, love, like, hate, have, belong, own, contain, seem, sound, look, smell...) describe states, not actions, and are not normally used in the continuous form — though some can be, when they describe an action rather than a state (\"This soup tastes delicious\" vs. \"She is tasting the soup\").\n\n" +
        "**Spelling:** one stressed vowel between two consonants → double the final consonant (sit → sitting). Verbs ending in -ie → remove ie, add y (lie → lying). Verbs ending in -e → remove e, add -ing (write → writing).",
      activities: [
        // Activity 1 — "Cross Sign" groups. Confirmed decorative-only per plan §10.2;
        // grouped visually via the `group` field, 12 standard MCQ underneath.
        {
          type: "mcq",
          id: "u1-grammar-a1-g1-q1",
          group: "Cross Sign no. 1",
          prompt: "My parents ___ in Irbid.",
          options: ["lives", "Live", "Are living"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g1-q2",
          group: "Cross Sign no. 1",
          prompt: "The weather is cold. I think it ___.",
          options: ["rain", "rains", "is raining"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g1-q3",
          group: "Cross Sign no. 1",
          prompt: "Hurry up! Everyone ___ for you.",
          options: ["is waiting", "are waiting", "waits"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g2-q1",
          group: "Cross Sign no. 2",
          prompt: "I ___ really happy to see you.",
          options: ["am", "Is", "are"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g2-q2",
          group: "Cross Sign no. 2",
          prompt: "She usually ___ for two hours on daily basis.",
          options: ["studeis", "Studys", "Studies"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g2-q3",
          group: "Cross Sign no. 2",
          prompt: "They ___ to the library very often.",
          options: ["go", "goes", "are going"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g3-q1",
          group: "Cross Sign no. 3",
          // "always losing" — present continuous + always = complaint (see intro).
          prompt: "I've lost my key again. Oh, I ___ things.",
          options: ["always lose", "am always losing", "always loses"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g3-q2",
          group: "Cross Sign no. 3",
          prompt: "You ___ television. You should do something more active.",
          options: ["are always watching", "always watch", "always watches"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g3-q3",
          group: "Cross Sign no. 3",
          prompt: "George is never satisfied. He ___.",
          options: ["is always complaining", "are complaining", "always complains"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g4-q1",
          group: "Cross Sign no. 4",
          prompt: "Education ___ the key to knowledge.",
          options: ["are", "be", "is"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g4-q2",
          group: "Cross Sign no. 4",
          // matches the exact example sentence given earlier in this unit's grammar intro.
          prompt: "I ___ of selling my car. What do you think?",
          options: ["think", "Thinks", "am thinking"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u1-grammar-a1-g4-q3",
          group: "Cross Sign no. 4",
          prompt: "I don't understand why he ___ so selfish today.",
          options: ["is being", "is be", "is"],
          correctIndex: 0
        },
        // Activity 2 — dialogue fill-blank (Fatima / Ms. Miller).
        {
          type: "dialogueFillBlank",
          id: "u1-grammar-a2",
          title: "Select the Correct Verb",
          instructions:
            "Read the conversation between Fatima and Ms. Miller, Head of the Students' Services Department, then fill in the blanks with the correct verb from the list below. You may use some verbs more than once.",
          wordBank: ["is", "are providing", "am going", "am", "feel", "am looking"],
          lines: [
            { speaker: "Fatima", text: "Good morning." },
            { speaker: "Ms. Miller", text: "Good morning. How may I help you?" },
            { speaker: "Fatima", text: "My name {{b1}} Fatima. I'm from Jordan and this {{b2}} my first semester at this university. I {{b3}} very excited about starting here, but I {{b4}} worried about how I {{b5}} to adjust to all of the differences." },
            { speaker: "Ms. Miller", text: "Hello Fatima, my name {{b6}} Ms. Miller. Don't worry, we have many international students and every September, many of them feel the same way that you feel right now. This semester, we {{b7}} specific programs to help our international students adjust to the cultural differences between their cultures and this culture." },
            { speaker: "Fatima", text: "Really? What a relief!" },
            { speaker: "Ms. Miller", text: "We also have many different student groups that welcome students from a wide variety of countries and cultures. That's one of our strong points." },
            { speaker: "Fatima", text: "I {{b8}} forward to participating in these programs and student groups?" },
            { speaker: "Ms. Miller", text: "Just search our website for events or clubs. The information you need {{b9}} just a click away." },
            { speaker: "Fatima", text: "That sounds simple enough." },
            { speaker: "Ms. Miller", text: "Before you know it, you will feel right at home here." },
            { speaker: "Fatima", text: "Thanks a lot, Ms. Miller. I {{b10}} much better now." },
            { speaker: "Ms. Miller", text: "It {{b11}} my pleasure Fatima. I {{b12}} here everyday during the week. Please stop by and let me know how things work out for you." }
          ],
          blanks: [
            { id: "b1", correctAnswer: "is" },
            { id: "b2", correctAnswer: "is" },
            { id: "b3", correctAnswer: "am" },
            { id: "b4", correctAnswer: "feel" },
            { id: "b5", correctAnswer: "am going" },
            { id: "b6", correctAnswer: "is" },
            { id: "b7", correctAnswer: "are providing" },
            { id: "b8", correctAnswer: "am looking" },
            { id: "b9", correctAnswer: "is" },
            { id: "b10", correctAnswer: "feel" },
            { id: "b11", correctAnswer: "is" },
            { id: "b12", correctAnswer: "am" }
          ]
        },
        // Activity 3 — "Which Sentence Is Correct?" — modeled as 2-option MCQ per pair.
        {
          type: "mcq",
          id: "u1-grammar-a3-q1",
          prompt: "Which sentence is grammatically correct?",
          options: ["We usually grow vegetables in our garden.", "We are usually growing vegetables in our garden."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q2",
          prompt: "Which sentence is grammatically correct?",
          options: ["Don't take the dictionary away, I need it.", "Don't take the dictionary away, I am needing it."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q3",
          prompt: "Which sentence is grammatically correct?",
          options: ["The water boils. Can you turn it off?", "The water is boiling. Can you turn it off?"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q4",
          prompt: "Which sentence is grammatically correct?",
          options: ["I must go now. It is getting late.", "I must go now. It gets late."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q5",
          prompt: "Which sentence is grammatically correct?",
          options: ["Do you usually work hard?", "Are you usually working hard?"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q6",
          prompt: "Which sentence is grammatically correct?",
          options: ["She normally finishing work at 5 p.m.", "She normally finishes work at 5 p.m."],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q7",
          prompt: "Which sentence is grammatically correct?",
          options: ["I am thinking of selling my car.", "I think of selling my car."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q8",
          prompt: "Which sentence is grammatically correct?",
          options: ["Sam and I are going to the library.", "Sam and I am going to the library."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q9",
          prompt: "Which sentence is grammatically correct?",
          options: ["She doesn't know how to drive.", "She don't know how to drive."],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a3-q10",
          prompt: "Which sentence is grammatically correct?",
          options: ["Please speak up. Now I hear you.", "Please speak up. Now I am hearing you."],
          correctIndex: 0
        },
        // Activity 4 — "Select the Correct Option" — bracketed 2-option choices.
        {
          type: "mcq",
          id: "u1-grammar-a4-q1",
          prompt: "They ___ a new campus outside the city.",
          options: ["are designing", "design"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q2",
          prompt: "The assessment ___ next week.",
          options: ["are", "is"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q3",
          prompt: "___ how to use a dictionary?",
          options: ["Do you know", "Are you knowing"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q4",
          prompt: "She ___ how to use the computer.",
          options: ["doesn't know", "don't know"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q5",
          prompt: "She ___ to win that scholarship.",
          options: ["are dying", "is dying"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q6",
          prompt: "Tim ___ how to treat others with respect.",
          options: ["know", "knows"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q7",
          prompt: "How often ___ Arabic?",
          options: ["do you study", "are you studying"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q8",
          prompt: "A liar is someone who ___ the truth.",
          options: ["doesn't tell", "don't tell"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u1-grammar-a4-q9",
          prompt: "Vegetarians ___ meat.",
          options: ["are not eating", "don't eat"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    listening: {
      activities: [
        {
          type: "listeningTranscript",
          id: "u1-listening-a1",
          title: "First Day in College",
          audioSrc: "assets/audio/u1-listening-a1.mp3",
          transcript: [
            { speaker: "Nadia", line: "Excuse me, hello there!" },
            { speaker: "Sara", line: "Oh, hello!" },
            { speaker: "Nadia", line: "Is this your first day at college?" },
            { speaker: "Sara", line: "Yes, it is. How did you know that?" },
            { speaker: "Nadia", line: "You seem lost. How can I help you?" },
            { speaker: "Sara", line: "Well, I am trying to find the computer labs because my first lecture is being held there." },
            { speaker: "Nadia", line: "That's great. I am heading to the same place. I can show you around the campus." },
            { speaker: "Sara", line: "Oh, thank you." },
            { speaker: "Nadia", line: "The building that is ahead of us is the Faculty of Medicine. It is the largest building in the university. Many students from other faculties take their lectures there because it is situated in the middle and its classrooms are spacious." },
            { speaker: "Sara", line: "I see. Actually, I take my biology course there." },
            { speaker: "Nadia", line: "Really? I registered for a biology course there, too." },
            { speaker: "Sara", line: "Such a co-incidence! I will be really happy to be your classmate." },
            { speaker: "Nadia", line: "Me too. I usually spend my time in the cafeteria right next to that classroom. So whenever you have free time you can pass by there." },
            { speaker: "Sara", line: "What do they serve?" },
            { speaker: "Nadia", line: "Well, they make all kinds of sandwiches for breakfast. As for lunch, they prepare three main meals: hamburger with French fries, chicken with broccoli and pasta." },
            { speaker: "Sara", line: "Yummy, I really like broccoli!" },
            { speaker: "Nadia", line: "Oops, we just passed by the computer labs! I'd better run to class. I am looking forward to seeing you in the biology lecture. Have a great day!" },
            { speaker: "Sara", line: "You, too! Thank you so much for showing me around." },
            { speaker: "Nadia", line: "You're welcome ……, by the way, what's your name?" },
            { speaker: "Sara", line: "My name is Sara, and yours?" },
            { speaker: "Nadia", line: "Mine is Nadia. OK -- I'll see you soon then Sara." },
            { speaker: "Sara", line: "Take care and thanks again." }
          ],
          questions: [
            {
              type: "mcq",
              id: "u1-listening-a1-q1",
              // Not stated explicitly, but "first day at college" strongly implies freshman.
              prompt: "Sara is a ___.",
              options: ["freshman", "sophomore", "faculty"],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-listening-a1-q2",
              prompt: "The Faculty of ___ is the largest in the university.",
              options: ["Administration", "Medicine", "Education"],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u1-listening-a1-q3",
              prompt: "Sara thanked Nadia for showing her ___.",
              options: ["into", "back", "around"],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-listening-a1-q4",
              prompt: "Sara is happy to be Nadia's ___.",
              options: ["classmate", "supervisor", "tutor"],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-listening-a1-q5",
              prompt: "Sara and Nadia are ___ in the same biology course.",
              options: ["registered", "failing", "interested"],
              correctIndex: 0
            }
          ]
        },
        {
          type: "listeningTranscript",
          id: "u1-listening-a2",
          title: "Dr. Mills and Dr. Scott",
          audioSrc: "assets/audio/u1-listening-a2.mp3",
          transcript: [
            { speaker: "Dr. Mills", line: "Oh, my God! This lecture was a disaster!" },
            { speaker: "Dr. Scott", line: "Why? What happened?" },
            { speaker: "Dr. Mills", line: "I really don't know what to do. I tried many ways to make the lesson as interesting as possible, but the students didn't interact at all!" },
            { speaker: "Dr. Scott", line: "What is your lesson about?" },
            { speaker: "Dr. Mills", line: "It is about the water cycle." },
            { speaker: "Dr. Scott", line: "Well, I know what you mean. I've found that, at this level, most students like to do things themselves instead of passively listening to lectures." },
            { speaker: "Dr. Mills", line: "What do you mean?" },
            { speaker: "Dr. Scott", line: "Well, I find that my students like getting involved – actively participating in activities. They want to be active learners." },
            { speaker: "Dr. Mills", line: "But I have all my lectures prepared." },
            { speaker: "Dr. Scott", line: "Yes, but you might just find that it's worth it to include activities that your students can participate in. For instance, you can take them to the computer lab during the lesson and let them conduct their own research related to the topic and find websites related to the lessons. This way, they will be involved in the work and it will generate enthusiasm. Some of them will compete to find the most interesting website." },
            { speaker: "Dr. Mills", line: "Or, instead of writing an essay about it, they can illustrate it in a diagram." },
            { speaker: "Dr. Scott", line: "See, there you go!" }
          ],
          questions: [
            {
              type: "mcq",
              id: "u1-listening-a2-q1",
              prompt: "Dr. Mills and Dr. Scott are:",
              options: ["students", "parents", "instructors"],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-listening-a2-q2",
              prompt: "Which one was frustrated?",
              options: ["Dr. Mills", "Dr. Scott", "neither"],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u1-listening-a2-q3",
              prompt: "The lesson was about:",
              options: ["genetics", "DNA", "the water cycle"],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-listening-a2-q4",
              // FLAGGED — see ANSWER_KEY_FLAGS.md: in the transcript it's actually
              // Dr. Scott who proposes the computer-lab/engagement idea; Dr. Mills'
              // own line only adds the diagram idea, which isn't one of the options.
              prompt: "Dr. Mills suggested:",
              options: ["engaging the students", "taking the students to the computer lab", "both (a) and (b)"],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u1-listening-a2-q5",
              prompt: "Browsing the internet:",
              options: [
                "helps the students illustrate the water cycle in a diagram",
                "may generate more enthusiasm",
                "none of the above"
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
        "## English Sounds: Consonants and Vowels (Revision)\n\n" +
        "This section reviews the International Phonetic Alphabet (IPA) symbols used for English consonant and vowel sounds.",
      activities: [
        // Activity 1 — initial consonant IPA symbol.
        { type: "phoneticSymbol", id: "u1-pron-a1-q1", word: "One", audioSrc: "assets/audio/words/one.mp3", correctSymbol: "/w/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q2", word: "know", audioSrc: "assets/audio/words/know.mp3", correctSymbol: "/n/" },
        // "Thomas" — the 'Th' here is pronounced /t/, an exception to the usual /θ/.
        { type: "phoneticSymbol", id: "u1-pron-a1-q3", word: "Thomas", audioSrc: "assets/audio/words/thomas.mp3", correctSymbol: "/t/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q4", word: "sure", audioSrc: "assets/audio/words/sure.mp3", correctSymbol: "/ʃ/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q5", word: "cereal", audioSrc: "assets/audio/words/cereal.mp3", correctSymbol: "/s/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q6", word: "jaguar", audioSrc: "assets/audio/words/jaguar.mp3", correctSymbol: "/dʒ/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q7", word: "unity", audioSrc: "assets/audio/words/unity.mp3", correctSymbol: "/j/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q8", word: "theme", audioSrc: "assets/audio/words/theme.mp3", correctSymbol: "/θ/" },
        // "chorus" — 'ch' pronounced /k/ (Greek-origin word).
        { type: "phoneticSymbol", id: "u1-pron-a1-q9", word: "chorus", audioSrc: "assets/audio/words/chorus.mp3", correctSymbol: "/k/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q10", word: "chaste", audioSrc: "assets/audio/words/chaste.mp3", correctSymbol: "/tʃ/" },
        // "wrong" — the 'w' is silent before 'r'.
        { type: "phoneticSymbol", id: "u1-pron-a1-q11", word: "wrong", audioSrc: "assets/audio/words/wrong.mp3", correctSymbol: "/r/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q12", word: "zero", audioSrc: "assets/audio/words/zero.mp3", correctSymbol: "/z/" },
        { type: "phoneticSymbol", id: "u1-pron-a1-q13", word: "ghost", audioSrc: "assets/audio/words/ghost.mp3", correctSymbol: "/g/" },

        // Activity 2 — vowel tick-box table. Data from IMPLEMENTATION_PLAN.md §10.1
        // (visually confirmed against PDF page 22; not captured by text extraction).
        {
          type: "vowelTickbox",
          id: "u1-pron-a2",
          instructions:
            "Identify the vowel sounds in each word and tick the correct box. For some words, you will have to tick two boxes.",
          columns: ["/e/", "/ɒ/", "/ʊ/", "/iː/", "/ʌ/", "/ɪ/", "/ə/", "/æ/", "/ɔː/", "/ɑː/", "/ɜː/", "/uː/"],
          rows: [
            { word: "bring", correctColumns: ["/ɪ/"] },
            { word: "box", correctColumns: ["/ɒ/"] },
            { word: "artist", correctColumns: ["/ɑː/", "/ɪ/"] },
            { word: "mother", correctColumns: ["/ʌ/", "/ə/"] },
            { word: "stamp", correctColumns: ["/æ/"] },
            { word: "daughter", correctColumns: ["/ɔː/", "/ə/"] },
            { word: "thirdly", correctColumns: ["/ɜː/", "/ɪ/"] },
            { word: "sugar", correctColumns: ["/ʊ/", "/ə/"] },
            { word: "breakfast", correctColumns: ["/e/", "/ə/"] },
            { word: "blue", correctColumns: ["/uː/"] },
            { word: "police", correctColumns: ["/ə/", "/iː/"] },
            { word: "woman", correctColumns: ["/ʊ/", "/ə/"] }
          ]
        },

        // Activity 3 — IPA to spelling.
        { type: "transcriptionSpelling", id: "u1-pron-a3-q1", ipa: "/ˈjuːʒwəl/", correctSpelling: "usual" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q2", ipa: "/ʤæz/", correctSpelling: "jazz" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q3", ipa: "/ˈkɑːpɪt/", correctSpelling: "carpet" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q4", ipa: "/sniːz/", correctSpelling: "sneeze" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q5", ipa: "/ˈmɪdl/", correctSpelling: "middle" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q6", ipa: "/ˈrɪŋɪŋ/", correctSpelling: "ringing" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q7", ipa: "/hjuːʤ/", correctSpelling: "huge" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q8", ipa: "/nɜːs/", correctSpelling: "nurse" },
        // "psalm" — silent 'p', pronounced /sɑːm/.
        { type: "transcriptionSpelling", id: "u1-pron-a3-q9", ipa: "/sɑːm/", correctSpelling: "psalm" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q10", ipa: "/ˈɔːtəm/", correctSpelling: "autumn" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q11", ipa: "/wɔːk/", correctSpelling: "walk" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q12", ipa: "/jʌŋ/", correctSpelling: "young" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q13", ipa: "/rɪˈzɪst/", correctSpelling: "resist" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q14", ipa: "/bɔːt/", correctSpelling: "bought" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q15", ipa: "/θɪŋk/", correctSpelling: "think" },
        { type: "transcriptionSpelling", id: "u1-pron-a3-q16", ipa: "/ˈpædl/", correctSpelling: "paddle" }
      ]
    },

    // ---------------------------------------------------------------------
    speaking: {
      activities: [
        {
          type: "openResponse",
          id: "u1-speaking-a1",
          prompt: "Share Your Opinion — Is team work an effective way of learning?",
          guidance:
            "Offline team activity. Form teams of four. Discuss whether team work is an effective way of learning. Work together to form eight sentences to explain your opinion (each team member presents two). Questions to help you:\n" +
            "1. Do you prefer to work by yourself or as part of a team?\n" +
            "2. What are the advantages of studying with your teammates?\n" +
            "3. What are the disadvantages of studying with your teammates?\n" +
            "4. Would you prefer to study in a quiet place (e.g. a library) or a crowded place (e.g. a coffee shop)? Why?"
        },
        {
          type: "openResponse",
          id: "u1-speaking-a2",
          prompt: "What Do You Think? — discuss a quotation with your team.",
          guidance:
            "Offline team activity. Form teams of four. Discuss your thoughts about one of the quotations below — do you agree or disagree? Try using Word List words in your discussion.\n\n" +
            "Quotation 1: \"Tell me and I'll forget; show me and I may remember; involve me and I'll understand.\" — Chinese Proverb\n" +
            "Quotation 2: \"It is a thousand times better to have common sense without education than to have education without common sense.\" — Robert Green Ingersoll\n" +
            "Quotation 3: \"Education is not received. It is achieved.\" — Unknown\n" +
            "Quotation 4: \"I never completed high school and I am very rich and very successful.\" — Unknown"
        },
        {
          type: "openResponse",
          id: "u1-speaking-a3",
          prompt: "Pick and Choose — discuss one of the three questions.",
          guidance:
            "Form teams of four, choose one question card, discuss possible replies, and express your thoughts in complete sentences.\n\n" +
            "Card 1: Is it important to have a dictionary while reading something for the first time? Why?\n" +
            "Card 2: Which kind of learning activities do you like best? Why?\n" +
            "Card 3: What was the most important or useful thing you learned today?"
        }
      ]
    },

    // ---------------------------------------------------------------------
    writing: {
      intro:
        "## Summarizing\n\n" +
        "A good way to remember a story or an article is to think about the most important ideas after you finish reading it, then write a summary. A summary is a short statement, in your own words, that highlights the main ideas of an article or the most important parts of a story, leaving out unimportant details. Ask yourself who, what, when and where to help you find the main ideas.\n\n" +
        "**Summary Guidelines**\n" +
        "1. Consider the purpose and the audience for a summary before reading.\n" +
        "2. Read through the article carefully.\n" +
        "3. Look for main ideas while reading.\n" +
        "4. Concentrate on what you read.\n" +
        "5. Read the article again.\n" +
        "6. Paraphrase the main ideas in other words.\n" +
        "7. Write the first draft — no longer than one third of the original length.\n" +
        "8. Revise the first draft.\n" +
        "9. Write the final draft.",
      activities: [
        {
          type: "openResponse",
          id: "u1-writing-a1",
          prompt: "Summarize one of the two articles from the Reading section (\"Our Brain\" or \"The Benefits of a University Education\").",
          guidance: "Follow the Summary Guidelines above. Your summary should be no longer than one third of the original article's length."
        }
      ]
    },

    // ---------------------------------------------------------------------
    wordlist: {
      terms: [
        { term: "lecture", pos: "n.", definition: "a talk about a subject to an audience or a class", arabic: "محاضرة" },
        { term: "highlight", pos: "v.", definition: "to give special attention to something; emphasize", arabic: "يبرز / يسلط الضوء" },
        { term: "inspiration", pos: "n.", definition: "stimulation of mind or feelings to do something beyond a person's usual ability; creativity", arabic: "إلهام" },
        { term: "register", pos: "v.", definition: "to put someone's name in an official list", arabic: "يسجل" },
        { term: "coincidence", pos: "n.", definition: "events that accidentally happen at the same time but seem to be connected", arabic: "صدفة" },
        { term: "demonstrate", pos: "v.", definition: "to show or prove something", arabic: "يوضح / يبرهن" },
        { term: "sophomore", pos: "n.", definition: "a student in the second year of a course at a high school, college or university", arabic: "طالب في السنة الثانية" },
        { term: "tutor", pos: "n.", definition: "a person who teaches one person or a small group at a time", arabic: "مدرس خصوصي" },
        { term: "supervisor", pos: "n.", definition: "a person who is in charge of someone", arabic: "مشرف" },
        { term: "thesis", pos: "n.", definition: "long written essay submitted by a candidate for a university degree", arabic: "أطروحة" },
        { term: "dissertation", pos: "n.", definition: "thesis", arabic: "رسالة دكتوراه / أطروحة" },
        { term: "module", pos: "n.", definition: "a part of a course of learning", arabic: "وحدة دراسية" },
        { term: "bachelor", pos: "n.", definition: "a person who has earned a degree conferred by a 4 year college or university", arabic: "بكالوريوس / أعزب" },
        { term: "tuition fees", pos: "n.", definition: "the charge for instruction at a private school, college or university", arabic: "رسوم دراسية" },
        { term: "determination", pos: "n.", definition: "quality of being firmly committed to doing something", arabic: "عزيمة / إصرار" },
        { term: "adjust", pos: "v.", definition: "to become or make suited to new conditions; adapt", arabic: "يتأقلم / يتكيف" },
        { term: "administration", pos: "n.", definition: "all the activities involved in the management or supervision of affairs or business", arabic: "إدارة" },
        { term: "internship", pos: "n.", definition: "any official or formal program to provide practical experience for beginners in an occupation or profession", arabic: "فترة تدريب" },
        { term: "assist", pos: "v.", definition: "to give support or aid", arabic: "يساعد" },
        { term: "culture", pos: "n.", definition: "state of intellectual development of a society", arabic: "ثقافة" }
      ]
    }
  }
};
