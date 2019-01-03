1. Figure out what kind of questions and ideas inspired these answers
2. assign a keyword to each and add to data.js
3. add synonyms
4. update the JSON model accordingly (see sample below the questions for guidance)
 
Alexa: You can ask me for a random fact or tell me a specific meditation issue you are having. For example you could say "I have no time to meditate" 
"Got ants in your pants? Can't sit still? Some think that means meditation is not for them. Actually there are two ways to deal with this: you can try walking meditation instead. Or you learn to be okay with those ants. It's a ninja skill.",
"Are you frustrated that you can't empty your mind and think nothing? That's kind of like sitting down at the piano and being frustrated that you can't just pull a Beethoven on your first try. Leave the empty mind to the pros. If you manage to focus on your breath and become conscious of the hyperactivity of your mind and manage to return to your breath, again and again, you are winning.",
"Listen if you accidentally end up in nirvana great for you. Enlightenment is not the goal of a meditation session. Relax.", 
"Maybe you think there is just one kind of meditation: the one where you sit and observe your breath. That's known as mindfulness meditation. There are many others. This is just the most known and popular one.", 
"With the popularity of meditation people also started using the word incorrectly. If you are quiet and closing your eyes you are probably thinking, not meditating. Reflection and meditation are not the same. In meditation you build skills, such as most notably being present in this very moment.",
"Some people think that working on yourself is selfish. Actually chances are that you are more selfish, constantly caught up in your own head, if you don't meditate.", 
"Meditation is pretty amazing and some are lucky enough to feel instant benefits. If that's not you don't worry. If you manage to practice daily without expecting any concrete effects any time soon you are more likely to progress faster.",
"Many philosophical and religious traditions came up with some form of meditation. You don't have to be a Buddhist to benefit from meditation.",
"You might tell yourself the story that you have no time to meditate. A daily practice of 10 min is enough to feel the effects. If Oprah, a number of mega-successful CEOs and athletes can make the time, so can you.",  
"Are you concerned that you have to practice a decade to benefit from meditation? Unless you want to rival the Dalai Lama that is really not necessary. 10 minutes a day for six to eight weeks works for most people.",
"Do you feel you are not stressed enough to give it a try? Lucky you. If you practice while you are feeling good or even neutral you have the inner skills and resources to master any stressful situation a bit better, that might come your way eventually.",
"Don't build a shrine. You don't need a fancy mat. And unless you like incense you don't have to turn your room into a Turkish bazaar to meditate. These things can be nice and if they help you meditate that's great. However they are not a necessity or a reason to procrastinate your practice.",
"Are the sirens, kiddie-tantrums and badly insulated walls robbing your peace and quiet? Sorry to hear that. You can still meditate though. Meditation pros turn intrusions into reminders to take three deep breaths, straighten their posture and feel their feet.",
"You will not lose your religion to rephrase a popular R.E.M song. If you are too young to know who that is I demand that you stop meditating immediately or you might become an emotionally mature human at a ridiculously young age. But to come back to the religion thing: scientists and practitioners have worked hard to preserve the usefulness of meditation while stripping away the religious part. Chances are you might become better at acting in accordance with your faith.",
"Maybe you really like those fancy robes or just dig the idea of having a guru. This is, like most other things, completely optional. You can get yourself some kind of teacher or you can just let youTube or an app guide the way. Your choice.", 
"Meditation is not necessarily about chilling out. You might feel a bit more relaxed but that is a side-effect and not a goal to aspire to. Part of the practice is learning to be okay with whatever happens, whether it's relaxation or agitation.",
"Sometimes the words mindfulness and meditation are used interchangeably. They are not the same: mindfulness is a state of being in the present. Meditation is a practice that develops a wide range of skills, among them, the ability to be fully in the here and now.",
"How is going to do you any good to put your tush on the cushion and watch your breathing? After all, it's not like your daily life resembles those circumstances. Actually the skills you develop on the cushion can be applied in all domains of your life.",
"Closing your eyes is not mandatory. It helps because it limits the sensory input but if for some reason that doesn't work, you can always practice with your eyes open and see what happens.",
"Do you think meditation is hard? Open up your mind a bit. It can be all kinds of things, hard is just one of many things and it doesn't have to be. Today might be hard and tomorrow not at all.", 
"If you are anything like me that lotus position might actually break your hips. No worries. While good posture is helpful rules such as 'keep a straight back' or 'never lie down' are actually not enforced. There is no meditation police out there that will fine you. Do whatever you need to do to build a regular practice.",
"I have ADHD or OCD or some other condition. You can still be part of our big, happy meditation family. If 10 minutes is too much start with 30 seconds and work your way up.",
"Can't I just watch Guacamole turn brown? It's so much more interesting than meditating. If that sounds like you chances are that your phobia of being bored might stand between you and a sense of inner peace. Meditation can help you bridge that gap.",
"What if I just stop caring and just feel zen all the time about everything? Wouldn't life be dull? That's kind of like worrying whether winning Olympic gold medals in sprinting gets boring eventually. Chill. Chances that you get so great that you become a walking saint are pretty slim.",
"Meditation doesn't solve all your problems. Beware of the hype because what follows is always an epic take-down. Instead focus on the idea, that meditation can give you a skill, that can come in handy with any challenge you face.", 
"You don't have to swear off meat and dairy. You don't have to commit to becoming the perfect human yoga-pretzel. Some people become more conscious of their lifestyle and might choose to make some changes, but it's not a requirement.",
"Maybe you are wondering why ten minutes could help if during the 23 hours and 50 remaining minutes of the day you are not meditating. Actually helps build new neural pathways, which you can also access the rest of the day.",
"Meditation can improve your concentration. It's not designed for that purpose only though. Improved concentration is one of many possible positive effects.",
"Maybe you have a colleague who meditates but still snaps at you. Or like my mother you have seen a monk act like a jerk in the plane. That doesn't mean meditation doesn't work. It just means they would probably behave way more obnoxious without the practice.",
"Has it crossed your mind that the meditation and happiness industry is just a fad? Are you resisting because you think they want your money? Well no fad lasts 5000 years. That's how old meditation is. And it's better to pay for things that make you lastingly happy, then things which don't."



Sample of JSON model

{
                    "name": "RecipeIntent",
                    "slots": [
                        {
                            "name": "Item",
                            "type": "LIST_OF_ITEMS"
                        }
                    ],
                    "samples": [
                        "how can I develop a {Item}",
                        "how can I develop an {Item}",
                        "how can I develop {Item}",
                        "how can I learn about a {Item}",
                        "how can I learn about an {Item}",
                        "how can I learn {Item}",
                        "how can I get a {Item}",
                        "how can I get an {Item}",
                        "how can I get {Item}",
                        "how can I make a {Item}",
                        "how can I make an {Item}",
                        "how can I make {Item}",
                        "how can you develop a {Item}",
                        "how can you develop an {Item}",
                        "how can you develop {Item}",
                        "how can you learn about a {Item}",
                        "how can you learn about an {Item}",
                        "how can you learn {Item}",
                        "how can you get a {Item}",
                        "how can you get an {Item}",
                        "how can you get {Item}",
                        "how can you make a {Item}",
                        "how can you make an {Item}",
                        "how can you make {Item}",
                        "how do I develop a {Item}",
                        "how do I develop an {Item}",
                        "how do I develop {Item}",
                        "how do I learn about a {Item}",
                        "how do I learn about an {Item}",
                        "how do I learn {Item}",
                        "how do I get a {Item}",
                        "how do I get an {Item}",
                        "how do I get {Item}",
                        "how do I make a {Item}",
                        "how do I make an {Item}",
                        "how do I make {Item}",
                        "how do you develop a {Item}",
                        "how do you develop an {Item}",
                        "how do you develop {Item}",
                        "how do you learn about a {Item}",
                        "how do you learn about an {Item}",
                        "how do you learn about {Item}",
                        "how do you get a {Item}",
                        "how do you get an {Item}",
                        "how do you get {Item}",
                        "how do you make a {Item}",
                        "how do you make an {Item}",
                        "how do you make {Item}",
                        "how is a {Item} developed",
                        "how is a {Item} learned",
                        "how is a {Item} made",
                        "how is an {Item} developed",
                        "how is an {Item} learned",
                        "how is an {Item} made",
                        "how is {Item} developed",
                        "how is {Item} made",
                        "how {Item} is made",
                        "recipe for a {Item}",
                        "recipe for an {Item}",
                        "recipe for {Item}",
                        "recipes for a {Item}",
                        "recipes for an {Item}",
                        "recipes for {Item}",
                        "what are a {Item}",
                        "what are an {Item}",
                        "what are {Item}",
                        "what do I need for a {Item}",
                        "what do I need for an {Item}",
                        "what do I need for {Item}",
                        "what do I need to learn about a {Item}",
                        "what do I need to learn about an {Item}",
                        "what do I need to learn {Item}",
                        "what do I need to develop a {Item}",
                        "what do I need to develop an {Item}",
                        "what do I need to develop {Item}",
                        "what do I need to get for a {Item}",
                        "what do I need to get for an {Item}",
                        "what do I need to get for {Item}",
                        "what do I need to get to develop a {Item}",
                        "what do I need to get to develop an {Item}",
                        "what do I need to get to develop {Item}",
                        "what do I need to get to learn about a {Item}",
                        "what do I need to get to learn about an {Item}",
                        "what do I need to get to learn {Item}",
                        "what do I need to get to make a {Item}",
                        "what do I need to get to make an {Item}",
                        "what do I need to get to make {Item}",
                        "what do I need to have to develop a {Item}",
                        "what do I need to have to develop an {Item}",
                        "what do I need to have to develop {Item}",
                        "what do I need to have to learn about a {Item}",
                        "what do I need to have to learn about an {Item}",
                        "what do I need to have to learn {Item}",
                        "what do I need to have to make a {Item}",
                        "what do I need to have to make an {Item}",
                        "what do I need to have to make {Item}",
                        "what do I need to make a {Item}",
                        "what do I need to make an {Item}",
                        "what do I need to make {Item}",
                        "what do you need for a {Item}",
                        "what do you need for an {Item}",
                        "what do you need for {Item}",
                        "what ingredients do I need to build a {Item}",
                        "what ingredients do I need to build an {Item}",
                        "what ingredients do I need to build {Item}",
                        "what ingredients do I need to craft a {Item}",
                        "what ingredients do I need to craft an {Item}",
                        "what ingredients do I need to craft {Item}",
                        "what ingredients do I need to make a {Item}",
                        "what ingredients do I need to make an {Item}",
                        "what ingredients do I need to make {Item}",
                        "what is a {Item}",
                        "what is an {Item}",
                        "what is {Item}",
                        "what is the recipe for a {Item}",
                        "what is the recipe for an {Item}",
                        "what is the recipe for {Item}",
                        "what's in a {Item}",
                        "what's in an {Item}",
                        "what's in {Item}",
                        "what's the recipe for a {Item}",
                        "what's the recipe for an {Item}",
                        "what's the recipe for {Item}",
                        "how to develop {Item}",
                        "how to develop a {Item}",
                        "how to develop an {Item}",
                        "how to make a {Item}",
                        "how to make an {Item}",
                        "how to make {Item}",
                        "how to learn about a {Item}",
                        "how to learn about an {Item}",
                        "how to learn {Item}",
                        "how to get a {Item}",
                        "how to get an {Item}",
                        "how to get {Item}",
                        "{Item}",
                        "tell me about {Item}",
                        "tell me about the {Item}",
                        "how can I practice {Item}",
                        "how can I practice the {Item}",
                        "how do I get better at {Item}"
                    ]
                }
            ],
                        "types": [
                {
                    "name": "LIST_OF_ITEMS",
                    "values": [
                        {
                            "name": {
                                "value": "wisdom strengths",
                                "synonyms": [
                                    "wisdom"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "creativity"
                            }
                        },
                        {
                            "name": {
                                "value": "curiosity"
                            }
                        },
                        {
                            "name": {
                                "value": "judgment"
                            }
                        },
                        {
                            "name": {
                                "value": "love of learning"
                            }
                        },
                        {
                            "name": {
                                "value": "perspective"
                            }
                        },
                        {
                            "name": {
                                "value": "courage strengths",
                                "synonyms": [
                                    "courage"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "bravery"
                            }
                        },
                        {
                            "name": {
                                "value": "honesty"
                            }
                        },
                        {
                            "name": {
                                "value": "perseverance"
                            }
                        },
                        {
                            "name": {
                                "value": "zest"
                            }
                        },
                        {
                            "name": {
                                "value": "humanity strengths",
                                "synonyms": [
                                    "humanity"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "kindness"
                            }
                        },
                        {
                            "name": {
                                "value": "love"
                            }
                        },
                        {
                            "name": {
                                "value": "social intelligence"
                            }
                        },
                        {
                            "name": {
                                "value": "justice strengths",
                                "synonyms": [
                                    "justice"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "fairness"
                            }
                        },
                        {
                            "name": {
                                "value": "leadership"
                            }
                        },
                        {
                            "name": {
                                "value": "teamwork"
                            }
                        },
                        {
                            "name": {
                                "value": "temperance strengths",
                                "synonyms": [
                                    "temperance"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "forgiveness"
                            }
                        },
                        {
                            "name": {
                                "value": "humility"
                            }
                        },
                        {
                            "name": {
                                "value": "prudence"
                            }
                        },
                        {
                            "name": {
                                "value": "self-regulation"
                            }
                        },
                        {
                            "name": {
                                "value": "transcendence strengths"
                            }
                        },
                        {
                            "name": {
                                "value": "appreciation of beauty"
                            }
                        },
                        {
                            "name": {
                                "value": "gratitude"
                            }
                        },
                        {
                            "name": {
                                "value": "hope"
                            }
                        },
                        {
                            "name": {
                                "value": "humor"
                            }
                        },
                        {
                            "name": {
                                "value": "spirituality"
                            }
                        },
                        {
                            "name": {
                                "value": "character strengths"
                            }
                        },
                        {
                            "name": {
                                "value": "questions"
                            }
                        },
                        {
                            "name": {
                                "value": "my strengths",
                                "synonyms": [
                                    "talent",
                                    "talents"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "categories"
                            }
                        }
                    ]
                }
            ]