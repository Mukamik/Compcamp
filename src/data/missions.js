/**
 * Mission data for CodeQuest, parsed from README.md.
 * Each mission contains a title, goal, and levels.
 */
const missions = [
  {
    id: "variables",
    zone: "Mission Zone 1",
    title: "Code Secrets - What are Variables?",
    goal: "Learn how to use 'variables' – they're like secret storage boxes for your code!",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What's a 'variable'? Think of something in real life that's like a variable (Hint: your score in a video game, or a box with a label).",
        skills: ["Define", "Name", "Identify"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "Why are variables handy in coding? Imagine trying to remember everyone's score in a game without writing them down – variables help with that!",
        skills: ["Explain", "Describe", "Discuss"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "I can totally do this!",
        quest: "Try writing a tiny bit of code. Make a variable called myPoints, give it a number (like 100), and then show what myPoints is.",
        skills: ["Use", "Show", "Implement"],
        example: "myPoints = 100\nprint(myPoints) # This will show 100"
      },
      {
        level: 4,
        color: "#FFD700",
        title: "I'm so good, I can teach my friends!",
        quest: "Create a super short guide (like a comic strip or a few quick steps) to explain variables to a friend who knows NOTHING about code. Show them how to make one and why they're awesome.",
        skills: ["Create", "Design", "Teach"]
      }
    ]
  },
  {
    id: "loops-ifs",
    zone: "Mission Zone 2",
    title: "Code Secrets - Loops & Ifs!",
    goal: "Learn about 'loops' (doing things over and over) and 'ifs' (making choices in code).",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What's a 'loop' in coding? What's an 'if' statement?",
        skills: ["Define", "Name", "Recognize"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "Why are 'if' statements cool for making games or apps smart?",
        skills: ["Explain", "Compare", "Discuss"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "I can totally do this!",
        quest: "Imagine you're coding. Write down the steps:\nAsk someone for a number. If the number is bigger than 10, say 'That's a big number!'. Else, say 'That's a small number!'. Then, use a loop to say 'Coding is fun!' 3 times.",
        skills: ["Implement", "Solve", "Use"]
      },
      {
        level: 4,
        color: "#FFD700",
        title: "I'm so good, I can teach my friends!",
        quest: "Sketch out an idea for a super simple game (like 'guess the number'). Where would you use loops? Where would you use 'if' statements? Show your game plan!",
        skills: ["Design", "Plan", "Construct (a plan)"]
      }
    ]
  },
  {
    id: "scratch",
    zone: "Mission Zone 3",
    title: "Scratch Power-Up! 🐱",
    goal: "Use Scratch (it's like digital LEGOs for coding!) to make cool stories, games, and animations.",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What's Scratch? What can you build with it? Check out the Scratch website and find a project you think is awesome.",
        skills: ["Identify", "Find", "List"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "What are the main parts of Scratch? How do you make a cat sprite meow or walk?",
        skills: ["Explain", "Describe", "Report"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "I can totally do this!",
        quest: "Jump into Scratch and try this: Make a sprite move left/right with arrow keys. If it bumps into another sprite or the wall, make it say 'Boing!' or change color.",
        skills: ["Build", "Use", "Execute"]
      },
      {
        level: 4,
        color: "#FFD700",
        title: "I'm so good, I can teach my friends!",
        quest: "Create your own Scratch game or story! At least two characters, different backgrounds, sound, and a goal. Show it off!",
        skills: ["Create", "Design", "Develop"]
      }
    ]
  },
  {
    id: "python-basics",
    zone: "Mission Zone 4",
    title: "Python Power-Up - The Basics! 🐍",
    goal: "Learn to write simple programs using Python, a super popular coding language.",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What's Python? Why do people use it?",
        skills: ["Define", "List", "State"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "In Python, how do you tell the computer to show some text on the screen? What's the difference between a number and text?",
        skills: ["Explain", "Describe", "Differentiate"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "I can totally do this!",
        quest: "Ask for someone's name and age. Say, 'Hi [Name]! Next year you'll be [Age+1]!'",
        skills: ["Implement", "Solve", "Operate"],
        example: `name = "CoderKid"\nage = 12\nprint(f"Hi {name}! Next year you'll be {age + 1}!")`
      },
      {
        level: 4,
        color: "#FFD700",
        title: "I'm so good, I can teach my friends!",
        quest: "Create a simple Python calculator. Ask for two numbers, ask the operation, show the answer! Bonus: Handle divide by zero.",
        skills: ["Design", "Construct", "Test"]
      }
    ]
  },
  {
    id: "html-css",
    zone: "Mission Zone 5",
    title: "Website Wiz - HTML & CSS Basics! 🕸️🎨",
    goal: "Learn HTML (the bones of a website) and CSS (the cool clothes and style for a website).",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What are HTML and CSS? Which one builds the parts of a webpage, and which one makes it look good?",
        skills: ["Define", "List", "Identify"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "How do you tell an HTML file to use your CSS styles? What's the difference between a <div> and a <span>?",
        skills: ["Explain", "Compare", "Discuss"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "I can totally do this!",
        quest: "Create a simple webpage about your favorite game or animal. Use HTML for titles and paragraph. Use CSS for background and text color.",
        skills: ["Build", "Use", "Implement (styles)"]
      },
      {
        level: 4,
        color: "#FFD700",
        title: "I'm so good, I can teach my friends!",
        quest: "Design and build a mini-website with 2-3 pages. Use HTML for the parts and CSS to make it look awesome!",
        skills: ["Design", "Create", "Assemble"]
      }
    ]
  },
  {
    id: "ai-superpowers",
    zone: "Mission Zone 6",
    title: "Website Wiz - AI Superpowers! (The Big Idea Zone) 🤖✨",
    goal: "Think about how you could add an AI feature, like a story idea generator, to a website.",
    levels: [
      {
        level: 1,
        color: "#7DF9FF",
        title: "I've kinda heard of this.",
        quest: "What's 'Generative AI'? What's an 'API'?",
        skills: ["Define", "List", "Recognize"]
      },
      {
        level: 2,
        color: "#C300C3",
        title: "I can tell you a bit about it.",
        quest: "How could a website use an API to get info from somewhere else? What cool stuff could an AI API send back?",
        skills: ["Explain", "Relate", "Connect (ideas)"]
      },
      {
        level: 3,
        color: "#FF8C00",
        title: "Big Brain Time!",
        quest: "Sketch a webpage with a box where someone can type something and a button that says 'Get Story Idea!'. How would your webpage ask the AI for an idea and show it?",
        skills: ["Sketch (a plan)", "Operate (conceptually)", "Differentiate (steps)"]
      },
      {
        level: 4,
        color: "#FFD700",
        title: "Mega Boss Challenge!",
        quest: "Plan out a cool web app that uses an AI to do something fun. Draw what it would look like. What info does the AI need and what would it give back? (Super Bonus: Try using JavaScript to get a random fact from https://catfact.ninja/fact and show it!)",
        skills: ["Formulate (a plan)", "Develop (ideas)", "Investigate (APIs)", "Justify (choices)"]
      }
    ]
  }
];

export default missions;