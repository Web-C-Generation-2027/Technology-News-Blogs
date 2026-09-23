/*
  data.js
  All categories and articles live here. To add an article, copy one of the
  objects in ARTICLES, give it a new unique "id", and fill in the fields.

  type:     "news" or "blog"
  category: one of the slugs in CATEGORIES
  date:     YYYY-MM-DD
  body:     a list of blocks. Each block is one of:
            { h: "Subheading" }
            { p: "A paragraph" }
            { list: ["Bullet one", "Bullet two"] }
            { ol: ["Step one", "Step two"] }
*/

const CATEGORIES = [
  { slug: "ai", name: "AI", description: "Models, tools and what they mean for everyday life." },
  { slug: "gadgets", name: "Gadgets", description: "Phones, laptops, wearables and the gear around them." },
  { slug: "software", name: "Software", description: "Apps, operating systems, programming and open source." },
  { slug: "security", name: "Cybersecurity", description: "Privacy, passwords, scams and staying safe online." },
  { slug: "gaming", name: "Gaming", description: "Consoles, PC gaming and the technology behind play." },
  { slug: "science", name: "Science & Space", description: "Research, satellites and engineering breakthroughs." },
  { slug: "students", name: "Student Tech", description: "Study tools, budget laptops and learning to code." }
];

const ARTICLES = [
  {
    id: "ai-study-assistants-daily-habit",
    type: "news",
    category: "ai",
    featured: true,
    title: "AI study assistants are becoming a daily habit for students",
    excerpt: "Summaries, practice questions and plain-language explanations are turning a novelty into a routine part of studying.",
    author: "Maya Chen",
    date: "2026-09-17",
    tags: ["AI", "Education", "Study tips"],
    body: [
      { p: "Across universities and schools, more students are using AI assistants to summarise readings, generate practice questions and explain difficult topics in plain language. What started as an experiment is turning into a routine part of how many people study." },
      { h: "What students are using them for" },
      { list: [
        "Turning long chapters into short summaries to review before class",
        "Creating quiz questions from lecture notes",
        "Getting a second explanation when a textbook is unclear",
        "Checking grammar and structure in early drafts"
      ] },
      { h: "Where the risks are" },
      { p: "AI tools can state wrong answers with confidence, so the output needs checking against course materials. Many institutions are also writing clear rules about when AI help is allowed, and students who ignore those rules risk academic penalties." },
      { p: "The practical takeaway is to treat an AI assistant like a study partner, not an answer key. Use it to understand a topic, then confirm the details yourself." }
    ]
  },
  {
    id: "phones-stretch-battery-with-software",
    type: "news",
    category: "gadgets",
    title: "Phones now stretch battery life with software, not bigger cells",
    excerpt: "Adaptive charging, smarter screens and efficient chips are doing more for battery life than extra capacity.",
    author: "Daniel Okafor",
    date: "2026-09-15",
    tags: ["Phones", "Battery", "Hardware"],
    body: [
      { p: "Battery capacity has grown slowly for years, so phone makers are looking for gains elsewhere. Software now does much of the work: adaptive charging, background app limits and more efficient chips all help a phone last longer between charges." },
      { h: "Where the gains come from" },
      { list: [
        "Screens that lower their refresh rate when nothing is moving",
        "Chips that finish tasks quickly and return to a low-power state",
        "Overnight charging that pauses near 80% to reduce battery wear",
        "Limits on apps that run in the background but are rarely opened"
      ] },
      { h: "What you can do today" },
      { p: "Battery health also matters over the long term. Keeping a phone out of hot places and avoiding constant full drains can help it stay useful for more years. Most phones have a battery section in settings that shows which apps use the most power." }
    ]
  },
  {
    id: "passkeys-replacing-passwords",
    type: "news",
    category: "security",
    title: "Passkeys are replacing passwords on more websites",
    excerpt: "Signing in with a fingerprint or device PIN is becoming an everyday option, and it is harder to steal than a password.",
    author: "Sofia Alvarez",
    date: "2026-09-12",
    tags: ["Security", "Passkeys", "Privacy"],
    body: [
      { p: "Passkeys let you sign in to a website using your fingerprint, face or device PIN instead of typing a password. More services now support them, and the shift is changing how account security works." },
      { h: "How passkeys work" },
      { p: "When you create a passkey, your device generates a pair of cryptographic keys. The public key is stored by the website, while the private key stays on your device. To sign in, your device proves it holds the private key after you unlock it, so no secret is ever sent to the site." },
      { h: "Why they are safer" },
      { list: [
        "There is no password to steal in a data breach or to guess",
        "A passkey only works on the real website, which protects against fake login pages",
        "You unlock it with something you already use, such as a fingerprint"
      ] },
      { p: "Passwords will not disappear overnight, so it is still worth using a password manager for accounts that do not offer passkeys yet." }
    ]
  },
  {
    id: "open-source-tools-beginners",
    type: "news",
    category: "software",
    title: "Open-source coding tools are getting easier for beginners",
    excerpt: "Free editors, browser-based environments and friendly documentation are lowering the barrier to writing your first program.",
    author: "Arjun Patel",
    date: "2026-09-10",
    tags: ["Open source", "Programming", "Beginners"],
    body: [
      { p: "Getting started with programming used to mean a long setup process before you wrote a single line. Today, free open-source editors, browser-based coding environments and beginner-friendly documentation have lowered that barrier." },
      { h: "What makes them beginner friendly" },
      { list: [
        "Editors that highlight errors as you type",
        "Templates that create a working project in a few clicks",
        "Active communities that answer questions and review code",
        "Free lessons and guides written for first-time learners"
      ] },
      { p: "Open source also lets learners read real code written by professionals. Browsing a small project and fixing a typo in its documentation is a common first step toward making a larger contribution." }
    ]
  },
  {
    id: "cloud-gaming-connection-matters",
    type: "news",
    category: "gaming",
    title: "Cloud gaming works well when your connection does",
    excerpt: "Streaming games lets modest devices play demanding titles, but latency and Wi-Fi quality decide how good it feels.",
    author: "Daniel Okafor",
    date: "2026-09-08",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { p: "Cloud gaming runs a game on a remote server and streams the video to your screen. It means a modest laptop or phone can play demanding games, but the experience depends heavily on your internet connection." },
      { h: "What affects quality" },
      { list: [
        "Latency: the delay between pressing a button and seeing the result",
        "Bandwidth: a stable connection prevents blurry or stuttering video",
        "Wi-Fi quality: a wired connection is usually more consistent"
      ] },
      { p: "If you are curious, try a free trial on your own network before paying for a subscription. Play at the times you normally would, because busy evening hours can behave differently from quiet mornings." }
    ]
  },
  {
    id: "satellite-internet-remote-areas",
    type: "news",
    category: "science",
    title: "Satellite internet is bringing remote areas online",
    excerpt: "Satellites in low orbit cut the delay of a connection, making video calls and online lessons possible far from cables.",
    author: "Lena Fischer",
    date: "2026-09-05",
    tags: ["Satellites", "Internet", "Space"],
    body: [
      { p: "Satellites in low Earth orbit sit far closer to the ground than traditional communication satellites, which reduces the delay in a connection. That makes them a practical option for places where laying cables is difficult or expensive." },
      { h: "Why it matters" },
      { p: "Remote schools, ships and rural communities can reach video calls and online learning that were once out of reach. Coverage and prices vary by region, and the service still needs a clear view of the sky." },
      { h: "The trade-offs" },
      { list: [
        "Hardware and monthly costs can be high compared with fixed-line broadband",
        "Large groups of satellites raise questions about space debris and astronomy",
        "Weather and obstructions can affect the signal"
      ] }
    ]
  },
  {
    id: "right-to-repair-laptops",
    type: "news",
    category: "gadgets",
    title: "Right-to-repair rules are making laptops easier to fix",
    excerpt: "Replaceable batteries, standard screws and spare parts are moving from rare features to buying criteria.",
    author: "Maya Chen",
    date: "2026-09-02",
    tags: ["Laptops", "Repair", "Sustainability"],
    body: [
      { p: "Right-to-repair rules in several regions are asking manufacturers to make products easier to fix. For laptops, that can mean replaceable batteries, standard screws and spare parts that anyone can buy." },
      { h: "What it means for buyers" },
      { list: [
        "Repairs can cost less than replacing the whole device",
        "A laptop can stay in use for more years",
        "Independent repair shops can work on more models",
        "Less electronic waste ends up in landfill"
      ] },
      { h: "What to look for" },
      { p: "Before you buy, check whether the battery, storage and memory can be replaced, and whether the maker publishes repair guides. Independent repairability scores and reviews can help you compare models." }
    ]
  },
  {
    id: "how-large-language-models-work",
    type: "blog",
    category: "ai",
    title: "How large language models work, without the maths",
    excerpt: "A plain explanation of how chatbots learn from text, why they sometimes get facts wrong, and how to ask better questions.",
    author: "Maya Chen",
    date: "2026-09-16",
    tags: ["AI", "Explainer", "Chatbots"],
    body: [
      { p: "Chatbots can feel like magic, but the core idea is simple enough to explain without any maths." },
      { h: "Predicting the next word" },
      { p: "A large language model is trained on a huge amount of text. During training it repeatedly tries to predict the next piece of a sentence, and it adjusts itself each time it gets it wrong. After many rounds it becomes very good at continuing text in a way that sounds natural." },
      { h: "Why it sometimes gets things wrong" },
      { p: "The model learns patterns in language, not a guaranteed list of facts. That is why it can write a confident answer that turns out to be false. Good practice is to check important claims with a reliable source." },
      { h: "How to get better answers" },
      { list: [
        "Say exactly what you want and who the answer is for",
        "Give examples of the style or format you expect",
        "Ask it to explain its reasoning, then verify the key steps"
      ] }
    ]
  },
  {
    id: "password-manager-in-15-minutes",
    type: "blog",
    category: "security",
    title: "Set up a password manager in 15 minutes",
    excerpt: "Stop reusing passwords. Here is a short, practical setup that protects your most important accounts first.",
    author: "Sofia Alvarez",
    date: "2026-09-13",
    tags: ["Passwords", "Security", "How-to"],
    body: [
      { p: "Reusing passwords is the easiest mistake to make and one of the most costly. A password manager solves it by creating and remembering a strong, unique password for every account." },
      { h: "What you need" },
      { list: [
        "A password manager app or browser extension you trust",
        "One strong master password that you have not used anywhere else",
        "Your phone, to install the app and turn on biometric unlock"
      ] },
      { h: "Set it up" },
      { ol: [
        "Install the manager on your computer and phone",
        "Create the master password using a phrase of four or more random words",
        "Import saved passwords from your browser, then delete them from the browser",
        "Change the passwords for your email, banking and school accounts first",
        "Turn on two-step verification for the manager itself"
      ] },
      { p: "Start with your most important accounts, then update others whenever you log in. Within a few weeks most of your accounts will be covered." }
    ]
  },
  {
    id: "plan-for-learning-to-code",
    type: "blog",
    category: "students",
    title: "A simple plan for learning to code without burning out",
    excerpt: "A small, repeatable routine beats long study sessions. Here is a four-step plan you can start this week.",
    author: "Arjun Patel",
    date: "2026-09-09",
    tags: ["Coding", "Students", "Learning"],
    body: [
      { p: "When many people start learning to code, they try to study for hours every night and quit within two weeks. What works better is a smaller plan you can repeat." },
      { h: "Start small and stay consistent" },
      { p: "Pick one language and stick with it for a few months. Python and JavaScript are popular first choices because there are many free lessons for both. Thirty focused minutes a day beats a long session once a week." },
      { h: "A plan you can follow" },
      { ol: [
        "Weeks 1 and 2: learn the basics, such as variables, conditions and loops",
        "Weeks 3 and 4: build a tiny project, like a to-do list or a quiz",
        "Week 5 onward: add one feature at a time and read other people's code",
        "Every week: write down one thing you learned"
      ] },
      { p: "Getting stuck is normal. When you hit a problem, describe it in one sentence, search for it, then try a fix before asking for help. That habit is the real skill." }
    ]
  },
  {
    id: "choose-a-university-laptop",
    type: "blog",
    category: "students",
    title: "How to choose a university laptop without overspending",
    excerpt: "Match the laptop to your course, check the details people forget, and consider refurbished models.",
    author: "Lena Fischer",
    date: "2026-09-06",
    tags: ["Laptops", "Students", "Buying guide"],
    body: [
      { p: "A laptop is one of the biggest purchases of student life, and the most expensive option is rarely the best one. Start with what you will actually do on it." },
      { h: "Decide what you need" },
      { list: [
        "Note-taking, browsing and documents: a light laptop with 8 GB of memory or more is enough",
        "Programming: aim for 16 GB of memory and a fast solid-state drive",
        "Video editing or 3D work: look for a dedicated graphics chip"
      ] },
      { h: "Things people forget" },
      { p: "Check battery life, weight and the keyboard, because you will use them every day. Ask whether your university offers student discounts, and look at refurbished models from trusted sellers. A one-year-old business laptop is often better value than a new budget model." }
    ]
  },
  {
    id: "how-rockets-reach-orbit",
    type: "blog",
    category: "science",
    title: "How rockets reach orbit, in plain language",
    excerpt: "Getting to space is about going sideways fast enough to keep missing the ground. Here is why that takes so much fuel.",
    author: "Arjun Patel",
    date: "2026-09-03",
    tags: ["Space", "Rockets", "Explainer"],
    body: [
      { p: "Reaching space is not the hard part. Staying there is. To stay in orbit, a spacecraft has to move sideways fast enough that it keeps missing the ground as it falls." },
      { h: "Speed is the goal" },
      { p: "Low Earth orbit needs a speed of about 7.8 kilometres per second, which is roughly 28,000 kilometres per hour. Most of a rocket's fuel is spent building that sideways speed, not just climbing upward." },
      { h: "Why rockets have stages" },
      { p: "A rocket carries large tanks and engines that are dead weight once they are empty. By dropping empty stages along the way, the rest of the rocket becomes lighter and easier to accelerate. Some modern rockets bring their first stage back to land so it can fly again." }
    ]
  },
  {
    id: "build-your-first-website-weekend",
    type: "blog",
    category: "software",
    title: "Build your first website in a weekend",
    excerpt: "A text editor and a browser are all you need. Here is how to split the work across two days.",
    author: "Sofia Alvarez",
    date: "2026-08-30",
    tags: ["HTML", "CSS", "JavaScript"],
    body: [
      { p: "You do not need a course or a paid tool to publish a website. A text editor and a browser are enough for a first project." },
      { h: "Plan the weekend" },
      { list: [
        "Saturday morning: sketch the pages you want on paper",
        "Saturday afternoon: write the HTML for each page",
        "Sunday morning: add colours and fonts with CSS",
        "Sunday afternoon: add one small interaction with JavaScript and test on your phone"
      ] },
      { h: "Tips for beginners" },
      { p: "Keep the first site small: a home page, an about page and a contact page is plenty. Use real content about something you care about, because it keeps you motivated. When you are happy with it, free hosting services can publish it for you." },
      { p: "Then improve it a little each week." }
    ]
  }
];
