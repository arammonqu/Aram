// js/data/unit2.js
// Unit 2 — "Nature or Nurture?"
// Transcribed from source-content/unit2-extracted.txt.
//
// ANSWER KEY NOTE: these are Student Files with no official answer key.
// Every auto-graded answer below was derived by the implementing agent from
// this unit's own Word List, by re-reading the passage/transcript in
// context, from this unit's own grammar rules (simple past vs. past
// continuous — notably, sentences with no while/when/stated-clock-time
// trigger word default to simple past per this unit's own USE rules), or
// from standard English phonetics — per IMPLEMENTATION_PLAN.md §1.
// Non-obvious derivations are commented inline. The Pronunciation Activity 1
// diphthong table came through text extraction visibly garbled/misaligned;
// it was re-derived from a visual page-image check of the source PDF
// (physical page 20 / printed page 19), which also confirmed the textbook's
// own worked example (column 1, "shy" circled) matches standard phonetic
// derivation — see inline note on that activity.
// Two genuinely ambiguous items are flagged in ANSWER_KEY_FLAGS.md rather
// than guessed silently: u2-reading-a2-q2 and u2-listening-a1-q4.

export const unit2 = {
  id: "unit2",
  title: "Nature or Nurture?",
  theme: "nature",
  sections: {

    // ---------------------------------------------------------------------
    vocabulary: {
      activities: [
        {
          type: "matching",
          id: "u2-vocab-a1",
          title: "Matching Synonyms",
          instructions:
            "Write the words below in the spaces provided beside the words that mean the same meaning.",
          left: [
            "utilize", "quash", "twist", "inherit", "stockpile",
            "gorge", "break down", "trigger", "continue", "perceive"
          ],
          right: [
            "revolve", "store", "overeat", "understand", "use",
            "suppress", "break", "activate", "receive", "uphold"
          ],
          // right-index derived per left-index; word bank used exactly once
          // each. Eight of ten pairs are direct dictionary synonyms (utilize=
          // use, quash=suppress [worked example given in the plan itself],
          // inherit=receive, stockpile=store, gorge=overeat, break down=
          // break, trigger=activate, perceive=understand). The remaining two
          // (twist/revolve, continue/uphold) are the leftover pair by
          // elimination — both plausible (twist/revolve share a "turning"
          // sense; uphold can mean "keep going/maintain," overlapping with
          // continue) and each word bank entry is used exactly once, so
          // confidence is high despite being the less obvious pair.
          correctPairs: { 0: 4, 1: 5, 2: 0, 3: 8, 4: 1, 5: 2, 6: 6, 7: 7, 8: 9, 9: 3 }
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q1",
          jumbled: "ingavcr",
          definition: "strong desire",
          correctAnswer: "craving"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q2",
          jumbled: "ialned",
          definition: "refusal to accept reality",
          correctAnswer: "denial"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q3",
          jumbled: "inav",
          definition: "having no value or significance",
          correctAnswer: "vain"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q4",
          jumbled: "icfdeit",
          definition: "amount by which something is too small",
          correctAnswer: "deficit"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q5",
          jumbled: "seauna",
          definition: "feeling of sickness or disgust",
          correctAnswer: "nausea"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q6",
          jumbled: "nishav",
          definition: "disappear completely and suddenly",
          correctAnswer: "vanish"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q7",
          jumbled: "allegnehc",
          definition: "test the ability of somebody",
          correctAnswer: "challenge"
        },
        {
          type: "anagram",
          id: "u2-vocab-a2-q8",
          jumbled: "dealp",
          definition: "make repeated urgent requests to somebody for something",
          correctAnswer: "plead"
        },
        // Activity 3 — guess-the-word-from-definition (hangman-style, same
        // pattern as Unit 1 Vocab Activity 3). Six of eight clues are
        // verbatim/near-verbatim Word List definitions for this unit
        // (pediatrician, trait, anxiety, compulsive, passion, deprivation).
        // "distract" and "excel" are not in this unit's printed Word List
        // but are unambiguous standard-dictionary matches for their clues.
        {
          type: "hangman",
          id: "u2-vocab-a3-q1",
          clue: "A specialist in the care of babies",
          correctAnswer: "pediatrician"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q2",
          clue: "To stop somebody from concentrating on something",
          correctAnswer: "distract"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q3",
          clue: "Distinguishing characteristic in somebody's personality",
          correctAnswer: "trait"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q4",
          clue: "Troubled feeling in the mind caused by fear and uncertainty about the future",
          correctAnswer: "anxiety"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q5",
          clue: "Caused by an obsession",
          correctAnswer: "compulsive"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q6",
          clue: "Thing for which somebody has a strong liking or enthusiasm",
          correctAnswer: "passion"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q7",
          clue: "Be exceptionally good at something",
          correctAnswer: "excel"
        },
        {
          type: "hangman",
          id: "u2-vocab-a3-q8",
          clue: "State of not having the normal benefits of adequate food",
          correctAnswer: "deprivation"
        },
        // Activity 4 — Complete the Sentences. Shared word bank, each item
        // uses one word exactly once (verified: all 10 bank words consumed).
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q1",
          sentence: "Everyone began shouting at once and the meeting finally ended due to the ___.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "disorder"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q2",
          sentence: "If you are obese, you have an increased risk of developing ___.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "diabetes"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q3",
          sentence: "Having high ___ helps you accomplish your goals in life.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "self-esteem"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q4",
          sentence: "Frequent anxiety can be a ___ of social phobia.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "symptom"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q5",
          sentence: "___ on by his colleagues, he applied for the position.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "urged"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q6",
          sentence: "A good education should ___ you for life.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "equip"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q7",
          sentence: "She suffered public ___ when she forgot the words to her speech.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "humiliation"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q8",
          sentence: "It is easier to lose weight if you have fast ___.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "metabolism"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q9",
          sentence: "She believed she had ___, but she didn't know how to make the most of it.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "potential"
        },
        {
          type: "fillBlank",
          id: "u2-vocab-a4-q10",
          sentence: "She visited many ___, but she still couldn't stop eating junk food.",
          wordBank: ["metabolism", "urged", "disorder", "potential", "symptom", "humiliation", "self-esteem", "nutritionists", "diabetes", "equip"],
          correctAnswer: "nutritionists"
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q1",
          prompt: "A ___ diagnosed her son with autism.",
          options: ["pediatrician", "symptom", "disorder"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q2",
          prompt: "One of his less attractive ___ is criticizing his family in public.",
          options: ["traits", "passion", "potential"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q3",
          prompt: "Everyone should ___ what he or she can afford.",
          options: ["perceive", "escalate", "contribute"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q4",
          prompt: "He ___ with his parents for a more understanding attitude.",
          options: ["eliminated", "pleaded", "excelled"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q5",
          prompt: "I was ___ for a nice refreshing drink.",
          options: ["craving", "sustaining", "twisting"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-vocab-a5-q6",
          prompt: "I eat normally in front of people, but I ___ when I'm alone.",
          options: ["quash", "gorge", "equip"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    reading: {
      activities: [
        {
          type: "readingPassage",
          id: "u2-reading-a1",
          title: "Sally's Challenge at School",
          passage:
            "Throughout my early years at school, my teachers always seemed frustrated with me. I would always hear them say: \"You forgot your homework! You don't ever complete assignments on time! You are so slow! You're such a moody child!\" I still hear all of those voices in my head and they bring back very hurtful memories. Those memories remind me of how my teachers used to become upset each time I failed to answer a simple question. I used to be the subject of ridicule in class. I also can't forget how my parents were worried all the time. They were always wondering what was going on. Even my classmates used to pick on me and bully me all day long. I couldn't wait for the weekend to come so that I could hide in my house and have a break from school. Truly, they were days I wish I could forget.\n\n" +
            "One day I read an article that helped me understand. The article was about attention deficit disorder (ADD). When I was a student at school, I found it difficult to stay focused for long periods of time. Sometimes, each hour that passed felt like a day. I just couldn't listen to the teachers for more than ten minutes. I felt deep inside that I had good potential, but my problems at school were making my life miserable. When it came to school work, most of the time I felt frustrated. However, when I read that article many questions about why those things were happening to me at school were answered.\n\n" +
            "Amazingly, I made it to college, but it was very challenging. To help me reach my goals, I started making to-do lists just to get everything done without forgetting anything. It was really hard to prioritize my work because even if I started with small things, they would take so long. When things became very stressful, sometimes I couldn't concentrate at all. At one point, I felt like everything was collapsing, even my relationships with everyone around me. Throughout my years at college, I failed many courses. Part of the problem was because I would sign up for too many courses, and by the time I realized how much work they would require, I would wait too long before deciding to drop courses. So I ended up with a lot of 'Fs'. College was a big leap forward though. I stuck to it and, even though it took me longer than it took my friends, I made it!\n\n" +
            "I still think the article on ADD helped me through many difficult times. Just knowing that others had the same challenges made me feel better. The article mentioned that the symptoms of ADD were not all negative. Adults with ADD also have many positive traits such as having free spirits and lively minds. The article also said that people with ADD have a spontaneous approach to life -- and that approach can be infectious. Although I was struggling in some ways, I also had all of these attributes as well. So the news wasn't all bad.\n\n" +
            "I felt as though no one could really accept me as I was. Although I had such problems focusing for prolonged periods of time, and I found it difficult to meet deadlines, I was creative. In fact, my boss once told me, \"You excel at thinking outside of the box.\" This was one of the few times I felt proud of myself. It didn't use to last long though because my colleagues used to find a way to twist it all back to the fact that I wasn't as competent as they were.\n\n" +
            "After reading the article, I realized that I wasn't the only one who was facing these challenges. I scheduled an appointment with a counselor so that I could discuss my issues with someone who understood my specific challenges. I also wanted to find out whether treatment would be appropriate for me. The ball was in my court. I decided to put all of my energy into getting things on track. I joined the ADD Association where I met other people who also had ADD. Together we shared our experiences, laughed together and cried together, but mostly we all began feeling less alone in dealing with our challenges. Together, we began to look at the bright side of our situations. Things are much better now, and will still improve tremendously if I keep it up. And, the good news is: I AM KEEPING IT UP!",
          questions: [
            {
              type: "mcq",
              id: "u2-reading-a1-q1",
              prompt: "The narrator's life began to change dramatically when:",
              options: [
                "she read an article about ADD.",
                "she used to hear many disturbing comments throughout her early years at school.",
                "she used to ignore all the disturbing comments directed to her."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q2",
              prompt: "When the narrator was a student at school, she:",
              options: [
                "used to be able to pay attention.",
                "found it difficult to stay focused.",
                "used to have lots of friends."
              ],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q3",
              prompt: "The narrator was devastated because:",
              options: [
                "she knew she didn't have potential.",
                "of her problems at school.",
                "she was brilliant."
              ],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q4",
              prompt: "When she enrolled in college, she:",
              options: [
                "had everything fixed by that time.",
                "turned into an organized person.",
                "had to deal with many stressful situations."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q5",
              prompt: "\"I started looking at the bright side,\" means:",
              options: [
                "she was a fun person.",
                "she appreciated everything her eyes fell on.",
                "she looked at things in a positive way."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q6",
              // Sequence in the passage: (1) scheduled a counselor appointment,
              // (2) "decided to put all of my energy into getting things on
              // track" — the second step — (3) joined the ADD Association.
              prompt: "The second step she took after reading the article was:",
              options: [
                "putting all her energy to work things out.",
                "setting an appointment with a counselor.",
                "working on her self-esteem."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q7",
              prompt: "\"Thinking out of the box\" means:",
              options: [
                "thinking negatively.",
                "thinking positively.",
                "thinking in a creative way."
              ],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u2-reading-a1-q8",
              prompt: "\"The ball was in my court\" means:",
              options: [
                "she was a good football player.",
                "everything was up to her.",
                "everything was under control."
              ],
              correctIndex: 1
            }
          ]
        },
        {
          type: "readingPassage",
          id: "u2-reading-a2",
          title: "Maria's Presentation Experience",
          passage:
            "One day Maria's professor told the class that each of them had to do a presentation. Maria was a good student, so she enjoyed doing the research, but the thought of presenting it made her feel extremely anxious. She pleaded with her professor, but she couldn't persuade him to let her hand in an assignment instead. There was no way out – she had to do the presentation.\n\n" +
            "Maria was the kind of person who had few friends at school. Although she was a lovely person, she had a continuous fear of saying something that would lead to embarrassing her in front of everyone. In fact, that was why she often spent most of her time alone or with her best friend, Sam, who was the only person she felt comfortable with.\n\n" +
            "People with social phobia usually find their anxiety triggered by situations such as: being the centre of attention, being watched or observed while doing something, having to speak in public or even having eye contact with others. The thought of standing in front of the class to give a presentation horrified Maria. She was worried that she would embarrass herself in public and would start blushing, and sweating excessively. What if she had nausea? She was not ready to deal with all of that. Deep inside she knew she was had to confront her fears.\n\n" +
            "Two weeks before the due date of the presentation, Sam gave Maria a book about social phobia self care. The book helped Maria understand, live with and, eventually, overcome her phobia. Maria had to shift her feelings and turn them into positive thoughts. She had to stop the negative thoughts that that caused her fear of social situations. Once she was able to identify these negative thoughts, she would be able to challenge them. She wanted to steer herself away from denial and face reality. Instead of saying, \"I am going to look stupid,\" she thought, \"Even if I am nervous, will people necessarily think I look stupid?\" Instead of, \"I don't have anything interesting to say,\" she thought, \"I worked hard to make sure that I knew a lot about my research topic so I will have lots of interesting things to say.\" By changing her way of thinking, Maria was able to perceive anxiety-triggering situations. Sam's friendship helped too.\n\n" +
            "The day of the presentation approached. Maria was so nervous that she vomited. \"I can do it!\" Maria kept on reminding herself. \"I can do it and I will!\" she said repeatedly. On stage, she slipped many times but she just paused for a moment, and refused to let her fears take over. She simply focused on the present moment, took a deep breath and continued. Maria was so grateful to Sam for providing her with that book. That presentation was an enormous challenge, but Maria succeeded.",
          questions: [
            {
              type: "trueFalse",
              id: "u2-reading-a2-q1",
              statement: "Social Phobia is an overwhelming fear of embarrassment in everyday situations.",
              correct: true
            },
            {
              // FLAGGED — see ANSWER_KEY_FLAGS.md. The passage lists being the
              // centre of attention as one of several equally-weighted
              // triggers, without ranking it "the worst"; Maria's own
              // strongest reaction described is specifically to public
              // speaking. Marked false as the closer reading, but this is a
              // generalization the source text doesn't explicitly rank.
              type: "trueFalse",
              id: "u2-reading-a2-q2",
              statement: "For a person with social phobia, being the center of attention is the worst thing.",
              correct: false
            },
            {
              type: "trueFalse",
              id: "u2-reading-a2-q3",
              statement: "Sam wanted Maria to embarrass herself.",
              correct: false
            },
            {
              // Maria overcame her phobia via a self-help book Sam gave her
              // and her own reframing of negative thoughts — no therapist is
              // mentioned anywhere in the passage.
              type: "trueFalse",
              id: "u2-reading-a2-q4",
              statement: "Going to a therapist helped Maria to perceive anxiety-triggering situations.",
              correct: false
            },
            {
              type: "trueFalse",
              id: "u2-reading-a2-q5",
              statement: "Sam was the only friend Maria felt comfortable with.",
              correct: true
            },
            {
              type: "trueFalse",
              id: "u2-reading-a2-q6",
              statement: "Maria believed that she would do worse with her next presentation.",
              correct: false
            },
            {
              type: "trueFalse",
              id: "u2-reading-a2-q7",
              statement: "Excessive sweating and nausea can be symptoms of social phobia.",
              correct: true
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    grammar: {
      intro:
        "## Simple Past and Past Continuous\n\n" +
        "### Focus 1: Simple Past\n" +
        "**Form:** regular verbs add *-ed* to the base form (play → played). Irregular verbs have no general rule (have → had, is/are → was/were, go → went, give → gave).\n\n" +
        "**Use:** an action that started and ended at specific points in the past (yesterday, ago, last week, in 2001, in the past, at the time).\n\n" +
        "**Negative:** did not + base form (contracted: didn't + base). **Interrogative:** did + subject + base form. **Exception (to be):** was/were used directly (\"Was she absent yesterday?\").\n\n" +
        "**Spelling rules:**\n" +
        "- Consonant preceded by a vowel, monosyllabic or stressed final syllable → double the consonant (rub → rubbed, prefer → preferred).\n" +
        "- Consonant + *-y* → change *y* to *i* (study → studied).\n" +
        "- Verbs ending in *-c* → add *k* before *-ed* (picnic → picnicked).\n" +
        "- *-l* preceded by a vowel → double the *l* (travel → travelled).\n\n" +
        "### Focus 2: Past Continuous Tense\n" +
        "**Form:** was/were + verb+ing.\n\n" +
        "**Use:**\n" +
        "1. An action in the middle of happening at a stated point of time in the past (\"At 8 o'clock last night she was working on her presentation.\").\n" +
        "2. Two or more actions happening at the same time in the past, usually with *while* (\"While Maggy was explaining binge eating, Sally was listening attentively.\").\n" +
        "3. A past action in progress when another action interrupted it — past continuous for the interrupted action, past simple for the interrupting action, usually with *when* (\"She was pleading with her professor when Sam called.\").\n\n" +
        "**Time expressions used with the past continuous:** while, when, as.",
      activities: [
        // Activity 1 — "Food and Nutrition." Circle-the-correct-form fill
        // blanks (mode:"options"). Items 4 and 5 each have two blanks in one
        // sentence; each blank is modeled as its own entry with the other
        // blank already filled in as context, per this project's convention
        // for multi-blank non-dialogue sentences.
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q1",
          mode: "options",
          sentence: "I ___ a number of books on nutrition last week.",
          options: ["was buying", "bought"],
          correctAnswer: "bought"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q2",
          mode: "options",
          sentence: "There ___ a shortage of food in some countries after the war.",
          options: ["was", "were"],
          correctAnswer: "was"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q3",
          mode: "options",
          // "when I came in" interrupts an action in progress — classic
          // past-continuous-interrupted-by-past-simple pattern.
          sentence: "She ___ uncontrollably when I came in.",
          options: ["ate", "was eating"],
          correctAnswer: "was eating"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q4a",
          mode: "options",
          sentence: "She ___ her way of dealing with negative emotions as soon as she realized the consequences of binge eating.",
          options: ["changed", "was changing"],
          correctAnswer: "changed"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q4b",
          mode: "options",
          sentence: "She changed her way of dealing with negative emotions as soon as she ___ the consequences of binge eating.",
          options: ["realized", "was realizing"],
          correctAnswer: "realized"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q5a",
          mode: "options",
          sentence: "She ___ on her favorite binge food when her mother came in.",
          options: ["gorged", "was gorging"],
          correctAnswer: "was gorging"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a1-q5b",
          mode: "options",
          sentence: "She was gorging on her favorite binge food when her mother ___.",
          options: ["came in", "was coming in"],
          correctAnswer: "came in"
        },
        // Activity 2 — "Social Phobias." Same mode:"options" pattern.
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q1",
          mode: "options",
          // "have" as a stative verb (continuous fear = a state, not an
          // action in progress) — not normally used in the continuous form.
          sentence: "Although Maria was a lovely person, she ___ a continuous fear of embarrassment.",
          options: ["had", "was having"],
          correctAnswer: "had"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q2",
          mode: "options",
          sentence: "Sam ___ Maria a book about social phobia self care yesterday.",
          options: ["gave", "was giving"],
          correctAnswer: "gave"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q3a",
          mode: "options",
          sentence: "Before she ___ the presentation, Sam encouraged her a lot.",
          options: ["did", "was doing"],
          correctAnswer: "did"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q3b",
          mode: "options",
          sentence: "Before she did the presentation, Sam ___ her a lot.",
          options: ["encouraged", "was encouraging"],
          correctAnswer: "encouraged"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q4a",
          mode: "options",
          // Exact phrasing from the Reading passage's closing lines — a
          // sequence of three completed past actions.
          sentence: "Maria simply ___ on the present moment, took a deep breath and continued her presentation.",
          options: ["focused", "was focusing"],
          correctAnswer: "focused"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q4b",
          mode: "options",
          sentence: "Maria simply focused on the present moment, ___ a deep breath and continued her presentation.",
          options: ["took", "was taking"],
          correctAnswer: "took"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q4c",
          mode: "options",
          sentence: "Maria simply focused on the present moment, took a deep breath and ___ her presentation.",
          options: ["continued", "was continuing"],
          correctAnswer: "continued"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q5a",
          mode: "options",
          sentence: "When Maria ___ the presentation, she felt proud of herself.",
          options: ["finished", "was finishing"],
          correctAnswer: "finished"
        },
        {
          type: "fillBlank",
          id: "u2-grammar-a2-q5b",
          mode: "options",
          sentence: "When Maria finished the presentation, she ___ proud of herself.",
          options: ["felt", "was feeling"],
          correctAnswer: "felt"
        },
        // Activity 3 — "Choosing the Correct Tense" MCQ.
        {
          type: "mcq",
          id: "u2-grammar-a3-q1",
          prompt: "Jim and Rona ___ two years ago after having a long friendship.",
          options: ["married", "marry", "were marrying"],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-grammar-a3-q2",
          prompt: "Jim ___ to hide his intense feelings when he was talking to his parents.",
          options: ["try", "was trying", "were trying"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u2-grammar-a3-q3",
          prompt: "My problems at school ___ my life miserable when I was at school.",
          options: ["make", "were making", "was making"],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u2-grammar-a3-q4",
          prompt: "College ___ a big leap forward, but it was very stressful.",
          options: ["were", "was being", "was"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u2-grammar-a3-q5",
          prompt: "Although I ___ in some ways, I also had many strengths.",
          options: ["was struggled", "were struggling", "was struggling"],
          correctIndex: 2
        },
        {
          type: "mcq",
          id: "u2-grammar-a3-q6",
          prompt: "When they were at school together, they shared a lot of experiences; they ___, cried and played together.",
          options: ["laughed", "were laughing", "laugh"],
          correctIndex: 0
        },
        // Activity 4 — "Which Sentence Is Correct?" modeled as 2-option MCQ
        // per pair, same convention as Unit 1 Grammar Activity 3. None of
        // these six sentences contain a while/when/stated-clock-time trigger
        // for past continuous, so per this unit's own Focus 2 USE rules,
        // simple past is the grammatically taught choice except where one
        // option has a blatant subject-verb agreement error (items 3 and 5).
        {
          type: "mcq",
          id: "u2-grammar-a4-q1",
          prompt: "Which sentence is grammatically correct?",
          options: [
            "She recognized the potential for error in the method being used.",
            "She was recognizing the potential for error in the method being used."
          ],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-grammar-a4-q2",
          prompt: "Which sentence is grammatically correct?",
          options: [
            "What led you to this conclusion?",
            "What was leading you to this conclusion?"
          ],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-grammar-a4-q3",
          prompt: "Which sentence is grammatically correct?",
          options: [
            "This demonstration was being a symptom of discontent among the students.",
            "This demonstration was a symptom of discontent among the students."
          ],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u2-grammar-a4-q4",
          prompt: "Which sentence is grammatically correct?",
          options: [
            "She deprived herself of food for a while, but she ended up binging and regretted it afterwards.",
            "She was depriving herself of food for a while, but she ended up binging and regretted it afterwards."
          ],
          correctIndex: 0
        },
        {
          type: "mcq",
          id: "u2-grammar-a4-q5",
          // "She were" is a subject-verb agreement error (should be "was").
          prompt: "Which sentence is grammatically correct?",
          options: [
            "She were having a continuous fear of being humiliated in front of others.",
            "She had a continuous fear of being humiliated in front of others."
          ],
          correctIndex: 1
        },
        {
          type: "mcq",
          id: "u2-grammar-a4-q6",
          prompt: "Which sentence is grammatically correct?",
          options: [
            "She imposed her ideas on the group during our last meeting.",
            "She was imposing her ideas on the group during our last meeting."
          ],
          correctIndex: 0
        }
      ]
    },

    // ---------------------------------------------------------------------
    listening: {
      activities: [
        {
          type: "listeningTranscript",
          id: "u2-listening-a1",
          title: "Autism",
          audioSrc: "assets/audio/u2-listening-a1.mp3",
          transcript: [
            { speaker: "Narrator", line: "Autism is a brain disorder that impedes the brain from absorbing information. It leads to an inability to communicate with others, and it frequently disrupts education and social behavior and affects how a child talks, plays or interacts." },
            { speaker: "Narrator", line: "The symptoms of autism vary from one person to another, but they all share the following main characteristics. Typically, autistic children have difficulty understanding what others are thinking and feeling. They seem to live in their own world. They have trouble sharing emotions and making friends because they lack interest in people around them or the surrounding environment. Autistic children often perform repeated hand movements, such as playing the same game repeatedly. In fact, this is also considered to be a main symptom of autism. In addition to that, autistic children are extremely sensitive to change. For instance, they are disturbed by small changes in their routine, such as moving from one place to another. They also respond negatively to everyday sounds because they are so overly sensitive to sounds." },
            { speaker: "Narrator", line: "Melanie is a married woman who has three children. When her third child arrived, things just didn't seem right. At the age of 6 months, her child didn't show any joyful expressions or even smile. When her son was two years old, he still couldn't pronounce a word. He never looked at her when she talked to him. She tried many times to make eye contact with her son, but couldn't. He used to spend many hours just stacking blocks - one on top of the other. Whenever they fell, he would cry a bit, then he would just begin stacking them all over again. If they put him in front of the TV, he would spend hours watching without any movement. She realized that his behavior wasn't really normal. When she took him to the pediatrician, she received the shock of her life – she found out that her son was autistic." },
            { speaker: "Narrator", line: "Life was harsh for Melanie and the people around her didn't make it any easier. If she took her son to a park, the other kids would stare in astonishment at her son's behavior. The mothers would say things like \"What's wrong with your son?\" No one really understood which made her feel very lonely. However, she found an organization for people who shared the same challenges. They also had autistic children. Having an autistic child wasn't something easy to talk about. She felt better when she joined this group because the members shared their experiences with each other. She felt they knew exactly what she was going through, because they were going through the same vicious cycle. Suddenly, she didn't feel quite as alone. In spite of everything, Melanie, like the other parents, loved their autistic children." }
          ],
          questions: [
            {
              type: "mcq",
              id: "u2-listening-a1-q1",
              // Option (a) captures the overall definition given in the
              // opening lines; (b)/(c) are narrower symptoms discussed later,
              // not the definition of autism itself.
              prompt: "Autism is:",
              options: [
                "a brain disorder that affects a child's development.",
                "lacking the ability to communicate.",
                "having the difficulty to understand what other people think or feel."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u2-listening-a1-q2",
              prompt: "The symptoms of autism are:",
              options: [
                "being stressed and unfocused.",
                "inability to communicate and repetitive behavior.",
                "talking and laughing too much."
              ],
              correctIndex: 1
            },
            {
              type: "mcq",
              id: "u2-listening-a1-q3",
              prompt: "Melanie's autistic child was:",
              options: ["the fourth child.", "the third child.", "the second child."],
              correctIndex: 1
            },
            {
              // FLAGGED — see ANSWER_KEY_FLAGS.md. The transcript describes a
              // gradual realization ("she realized that his behavior wasn't
              // really normal") rather than stating what Melanie thought "at
              // first." Marked (c) neutral on the reasoning that alarm only
              // came after the realization, but this is inferred, not stated.
              type: "mcq",
              id: "u2-listening-a1-q4",
              prompt: "At first, Melanie thought her child's behavior was:",
              options: ["positive.", "negative.", "neutral."],
              correctIndex: 2
            },
            {
              type: "mcq",
              id: "u2-listening-a1-q5",
              prompt: "People around her used to:",
              options: [
                "stare at her son's behavior in astonishment.",
                "make fun of her son's behavior.",
                "tell her to keep her son quiet."
              ],
              correctIndex: 0
            },
            {
              type: "mcq",
              id: "u2-listening-a1-q6",
              prompt: "Melanie started feeling better when she:",
              options: [
                "went to a counselor.",
                "joined an organization for parents with autistic children.",
                "ignored her autistic child."
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
        "## Diphthongs: Part A\n\n" +
        "A diphthong is a gliding vowel formed by a combination of two short vowel sounds within the same syllable. Part A covers: `/ɔɪ/`, `/aɪ/`, `/əʊ/`, `/aʊ/`.\n\n" +
        "| Symbol | Examples |\n|---|---|\n" +
        "| /ɔɪ/ | boy /bɔɪ/, toy /tɔɪ/, oil /ɔɪl/ |\n" +
        "| /aɪ/ | eye /aɪ/, sky /skaɪ/, five /faɪv/ |\n" +
        "| /əʊ/ | old /əʊld/, cold /kəʊld/, gold /gəʊld/ |\n" +
        "| /aʊ/ | how /haʊ/, now /naʊ/, hour /ˈaʊə/ |",
      activities: [
        // Activity 1 — "Circle the word which has the same diphthong."
        // Source text extraction came through with garbled/misaligned
        // columns; re-derived from a visual check of the source PDF
        // (physical page 20 / printed page 19). The table's first column is
        // a worked example (target /aɪ/: a. dear, b. shy [circled as the
        // correct answer in the source], c. shame) confirming that standard
        // phonetic derivation is the intended method — "shy" /ʃaɪ/ contains
        // /aɪ/ while "dear" /dɪə/ and "shame" /ʃeɪm/ do not. The four real
        // questions follow the same column layout, one target diphthong each.
        {
          type: "diphthongMatch",
          id: "u2-pron-a1-q1",
          mode: "wordForDiphthong",
          targetDiphthong: "/aɪ/",
          audioSrc: "assets/audio/words/buy.mp3",
          // buy /baɪ/ ✓; cloud /klaʊd/ has /aʊ/; mail /meɪl/ has /eɪ/.
          options: ["buy", "cloud", "mail"],
          correctIndex: 0
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a1-q2",
          mode: "wordForDiphthong",
          targetDiphthong: "/ɔɪ/",
          audioSrc: "assets/audio/words/voice.mp3",
          // soap /səʊp/ has /əʊ/; voice /vɔɪs/ ✓; wrote /rəʊt/ has /əʊ/.
          options: ["soap", "voice", "wrote"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a1-q3",
          mode: "wordForDiphthong",
          targetDiphthong: "/əʊ/",
          audioSrc: "assets/audio/words/home.mp3",
          // about /əˈbaʊt/ has /aʊ/; home /həʊm/ ✓; coin /kɔɪn/ has /ɔɪ/.
          options: ["about", "home", "coin"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a1-q4",
          mode: "wordForDiphthong",
          targetDiphthong: "/aʊ/",
          audioSrc: "assets/audio/words/how.mp3",
          // chose /tʃəʊz/ has /əʊ/; point /pɔɪnt/ has /ɔɪ/; how /haʊ/ ✓.
          options: ["chose", "point", "how"],
          correctIndex: 2
        },
        // Activity 2 — "choose the diphthong that matches the sound."
        {
          type: "diphthongMatch",
          id: "u2-pron-a2-q1",
          mode: "diphthongForWord",
          // emotional /ɪˈməʊʃənl/
          prompt: "emotional",
          audioSrc: "assets/audio/words/emotional.mp3",
          options: ["/aʊ/", "/əʊ/"],
          correctIndex: 1
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a2-q2",
          mode: "diphthongForWord",
          // noisy /ˈnɔɪzi/
          prompt: "noisy",
          audioSrc: "assets/audio/words/noisy.mp3",
          options: ["/ɔɪ/", "/əʊ/"],
          correctIndex: 0
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a2-q3",
          mode: "diphthongForWord",
          // foreground /ˈfɔːɡraʊnd/
          prompt: "foreground",
          audioSrc: "assets/audio/words/foreground.mp3",
          options: ["/aʊ/", "/əʊ/"],
          correctIndex: 0
        },
        {
          type: "diphthongMatch",
          id: "u2-pron-a2-q4",
          mode: "diphthongForWord",
          // stylish /ˈstaɪlɪʃ/
          prompt: "stylish",
          audioSrc: "assets/audio/words/stylish.mp3",
          options: ["/eɪ/", "/aɪ/"],
          correctIndex: 1
        }
      ]
    },

    // ---------------------------------------------------------------------
    speaking: {
      activities: [
        {
          type: "openResponse",
          id: "u2-speaking-a1",
          prompt: "Class Presentations — how do you feel about giving presentations in front of the class?",
          guidance:
            "Offline team activity. Form teams of four. Think and talk about how you feel about giving presentations in front of the class, then share your ideas among your team. Your instructor will call on you to express these feelings in front of the rest of your class."
        },
        {
          type: "openResponse",
          id: "u2-speaking-a2",
          prompt: "Binge Eaters Everywhere! — discuss occasional overeating vs. binge eating.",
          guidance:
            "Offline team activity. Form teams of four. Discuss the differences between occasionally overeating and binge eating. Do you have a friend who binges? How can you help that friend? What advice would you give him/her? Your instructor will check with each team to listen to your conversations."
        },
        {
          type: "openResponse",
          id: "u2-speaking-a3",
          prompt: "Pick and Choose — discuss one of the three questions.",
          guidance:
            "Form teams of four, choose one question card, discuss possible replies, and express your thoughts in complete sentences. One member presents your team's answers.\n\n" +
            "Card 1: How would you deal with an autistic friend or relative?\n" +
            "Card 2: What would you do if someone you cared about was diagnosed with ADD? How would you help that person? Would you show your support?\n" +
            "Card 3: If you had a very serious problem, who would you talk to about it? Would you seek a counselor for help? Why or why not?"
        }
      ]
    },

    // ---------------------------------------------------------------------
    writing: {
      intro:
        "## The Topic, Supporting, and Concluding Sentences\n\n" +
        "**The Topic Sentence** states the main idea of a paragraph. It is usually the first sentence and informs the reader of what the paragraph is going to be about.\n\n" +
        "**Supporting Sentences** follow the topic sentence and provide specific information that supports the main idea. A paragraph needs enough information to develop the topic sentence — a minimum of three supporting sentences, with examples where appropriate — or it ends up weak, empty, and uninteresting.\n\n" +
        "**The Concluding Sentence** may summarize or restate the paragraph's main idea, useful when a paragraph is long or complicated, or includes details the writer wants to emphasize.",
      activities: [
        {
          type: "openResponse",
          id: "u2-writing-a1",
          prompt: "Are you emotionally intelligent? Write about a time you demonstrated emotional intelligence.",
          guidance:
            "Write the first draft of a paragraph about a time you felt you demonstrated emotional intelligence — for example, a time you used your emotional intelligence to resolve a conflict or solve a problem. Try to include words from this unit's Word List, and write your paragraph using the past tense. Check the first draft with a classmate and correct any mistakes, then save your second draft."
        },
        {
          type: "openResponse",
          id: "u2-writing-a2",
          prompt: "What makes you anxious? Write about a time you felt anxious.",
          guidance:
            "Write an extended paragraph about a time when you felt anxious. How did you handle it? What did you do to overcome your anxiety? Check the first draft with a classmate and correct any mistakes, then save your second draft."
        }
      ]
    },

    // ---------------------------------------------------------------------
    wordlist: {
      // Source lists "anxiety" twice (once as "troubled feeling in the
      // mind", once with the fuller "...caused by fear and uncertainty
      // about the future") — an apparent duplication/OCR artifact.
      // Consolidated into one entry using the fuller definition, which also
      // matches Vocabulary Activity 3's clue verbatim.
      terms: [
        { term: "metabolism", pos: "n.", definition: "chemical process by which living matter is broken down into simpler substances", arabic: "عملية الأيض / التمثيل الغذائي" },
        { term: "deprivation", pos: "n.", definition: "state of not having the normal benefits of adequate food, housing, self care, etc.", arabic: "حرمان" },
        { term: "craving", pos: "n.", definition: "strong desire", arabic: "رغبة شديدة / اشتهاء" },
        { term: "urge", pos: "n.", definition: "strong desire or impulse", arabic: "دافع / رغبة ملحة" },
        { term: "deficit", pos: "n.", definition: "amount by which something is too small", arabic: "عجز / نقص" },
        { term: "disorder", pos: "n.", definition: "lack of order", arabic: "اضطراب / خلل" },
        { term: "potential", pos: "n.", definition: "qualities that exist and can be developed", arabic: "إمكانية / قدرة" },
        { term: "pediatrician", pos: "n.", definition: "a specialist in the care of babies", arabic: "طبيب أطفال" },
        { term: "symptom", pos: "n.", definition: "sign of the existence of something else, such as a disease", arabic: "عرض (طبي)" },
        { term: "trait", pos: "n.", definition: "distinguishing characteristic in somebody's personality", arabic: "سمة / ميزة" },
        // Source lists "Vain (n.)" — vain is grammatically an adjective;
        // pos corrected here, term/definition kept as given.
        { term: "vain", pos: "adj.", definition: "having no value or significance", arabic: "بلا قيمة / تافه" },
        { term: "humiliation", pos: "n.", definition: "the act of making somebody feel ashamed or disgraced", arabic: "إذلال / إهانة" },
        { term: "anxiety", pos: "n.", definition: "troubled feeling in the mind caused by fear and uncertainty about the future", arabic: "قلق / توتر" },
        { term: "self-esteem", pos: "n.", definition: "good opinion of one's own character and abilities", arabic: "تقدير الذات" },
        { term: "denial", pos: "n.", definition: "refusal to accept reality", arabic: "إنكار" },
        { term: "nausea", pos: "n.", definition: "feeling of sickness or disgust", arabic: "غثيان" },
        { term: "nutritionist", pos: "n.", definition: "an expert in the study of human diet", arabic: "أخصائي تغذية" },
        { term: "compulsive", pos: "adj.", definition: "caused by an obsession", arabic: "قهري" },
        { term: "diabetes", pos: "n.", definition: "disease of the pancreas which prevents sugar and starch being properly absorbed", arabic: "مرض السكري" },
        { term: "passion", pos: "n.", definition: "thing for which somebody has a strong liking or enthusiasm", arabic: "شغف" }
      ]
    }
  }
};
