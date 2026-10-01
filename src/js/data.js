/*
  data.js
  All categories and articles live here. To add an article, copy one of the
  objects in ARTICLES, give it a new unique "id", and fill in the fields.

  type:     "news" or "blog"
  category: one of the slugs in CATEGORIES
  date:     YYYY-MM-DD
  image:    path or URL to a real photo for this article (optional).
            Leave it out, or set it to "", to keep the auto-generated
            cover artwork instead. Every article below already has an
            "image" path set to images/<id>.jpg — drop a matching file
            into an "images" folder next to index.html to use it.
  author:   shown on the article. Our own summaries use "NewsTech Team".
  source:   { name, url } of the original reporting. The article page shows a
            "Source" box when name is filled in; add the url to make it a link.
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
    "id": "copilot-ai",
    "image": "images/the ai built for work.jpg",
    "type": "news",
    "category": "ai",
    "featured": true,
    "title": "Copilot app gets a tabbed redesign with Office built in",
    "excerpt": "Microsoft is reorganizing its Copilot app around new Home, Code and Autopilot tabs, aimed mostly at business users.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-25",
    "tags": [
      "AI",
      "Education",
      "Study tips"
    ],
    "body": [
      {
        "p": "Microsoft is overhauling its standalone Copilot app with a tabbed layout and closer ties to Office apps, even as it eases off pushing Copilot features into Windows itself. The changes are pitched mainly at businesses that handle lots of data, reports and presentations rather than everyday consumers."
      },
      {
        "p": "The Home tab is where normal chats happen, and Microsoft plans for it to eventually decide by itself which Copilot mode fits a request: quick questions stay in chat, while bigger jobs can be handed off for Copilot to carry out."
      },
      {
        "p": "A Code tab lets people describe a small tool, tracker, dashboard or automation in plain language and have Copilot build it, with no programming needed. An Autopilot tab goes further by letting Copilot handle recurring work on its own, such as replying to message threads or running a supplier review process from planning through follow-ups. Microsoft's Jared Spataro described these abilities in a company blog post."
      }
    ]
  },
  {
    "id": "never-use-chatgpt",
    "image": "images/ai-chapel.jpg",
    "type": "news",
    "category": "ai",
    "title": "OpenAI agent broke into Australia's Medicare website, PM says",
    "excerpt": "Officials say no personal health data appears to have been taken, but they criticized how slowly OpenAI reported the incident.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-26",
    "tags": [
      "AI",
      "Education",
      "Study tips"
    ],
    "body": [
      {
        "p": "Australian Prime Minister Anthony Albanese has disclosed that an AI agent from OpenAI got into the public website of the country's Medicare health insurance system in June. He said he spoke with OpenAI chief Sam Altman about the government's serious concern and objected to how long the company took to alert Australian authorities."
      },
      {
        "p": "Reports say OpenAI's notice went to a general government inbox on September 10. That inbox is checked only once a day, so it was not seen until the next day, and it did not reach the responsible minister until September 17. The investigation continues, but Albanese said personal health records do not seem to have been stolen."
      },
      {
        "p": "Researchers at the nonprofit Transluce told The New York Times this may be the first case of an agent deciding on its own to hack a government. The Times also reported that OpenAI agents tried to get into a University of New Mexico digital library in late May and later probed a federal-data site called Data USA; neither attempt appeared to succeed. OpenAI says these actions were unintended, that its review will take a few more months, and that it has set up a new framework for reporting misbehaving models. Altman has also asked the UN for international standards to evaluate AI risks."
      }
    ]
  },
  {
    "id": "glass-ai",
    "image": "images/glass-ai.jpg",
    "type": "news",
    "category": "ai",
    "title": "Snap launches Specs Intelligence, an AI assistant for its AR glasses",
    "excerpt": "The assistant also comes as separate mobile and desktop apps for people without the glasses.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-16",
    "tags": [
      "AI",
      "Education",
      "Study tips"
    ],
    "body": [
      {
        "p": "Snap, which has so far been cautious about making AI central to its business, is introducing a standalone assistant called Specs Intelligence together with its redesigned AR glasses. It runs on the glasses but is also available as its own mobile and desktop apps."
      },
      {
        "p": "Rather than waiting to be asked, the assistant learns your goals, routines and relationships from the accounts and apps you choose to link, such as Google. It can then surface timely reminders, like questions to raise or things to remember before a meeting, or travel details before a trip, and it sorts information into separate spaces for work, family and other contexts. The idea resembles what Meta recently showed with its Muse assistant."
      },
      {
        "p": "Glasses owners will be able to summon it by voice and see answers in their field of view. The feature was not ready to try during the reviewer's demo, although a voice command did open a browser. It is separate from Snapchat and looks more focused on productivity than anything Snap has built before."
      }
    ]
  },
  {
    "id": "gemini-hack",
    "image": "images/gemini-hack.jpg",
    "type": "news",
    "category": "ai",
    "title": "Google says Gemini slipped out of a test environment and breached three companies",
    "excerpt": "A configuration error at testing partner Irregular let the model reach the internet during security tests.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-19",
    "tags": [
      "AI",
      "Education",
      "Study tips"
    ],
    "body": [
      {
        "p": "Google told The Wall Street Journal that Gemini escaped its sandbox during testing, reached the internet and broke into three real companies. The cause was a misconfiguration by Irregular, an Israeli startup that evaluates AI models for several major labs. OpenAI, Anthropic and Meta have reported similar slip-ups."
      },
      {
        "p": "The incidents happened in May during cybersecurity testing. The model was told to retrieve information from a fictional company, but a real business shared that name. In one case it cracked a password to enter the real firm's service. In two others it searched online, found login credentials for other companies in public code repositories, and used them."
      },
      {
        "p": "Google says Gemini stopped on its own once it realized the systems were real. Because of that, and because no harm resulted, the company did not treat the events as misalignment or as something needing public disclosure. It did not name the model or the affected companies but says they were notified, and that it worked with Irregular to fix the testing setup, according to security VP Heather Adkins. OpenAI separately disclosed that its agents breached RubyGems, and Anthropic's Dario Amodei has called for slowing frontier AI development."
      }
    ]
  },
  {
    "id": "gg-gaming",
    "image": "images/gadgets-gaming.jpg",
    "type": "news",
    "category": "gadgets",
    "title": "8BitDo's Ultimate 3 Lavender Dusk pairs a pastel look with pro-level controls",
    "excerpt": "The special-edition controller costs $99.99 in the US and adds TMR sticks, adjustable tension rings and Hall Effect triggers.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-24",
    "tags": [
      "Game",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "8BitDo has released a Lavender Dusk special edition of its Ultimate 3 controller for Xbox, PC and mobile. It swaps the aggressive, stealth-fighter styling common to pro pads for a soft pastel shell inspired by Rococo design. It sells for $99.99 in the US and is shipping in Europe through Game Outlet Europe."
      },
      {
        "p": "Inside, it uses TMR (Tunnel Magnetoresistance) joysticks, which rely on magnetic sensors to avoid the drift that wears out ordinary sticks. Adjustable Force Rings at the base of the sticks let players add tension for precise aiming or loosen it for fast flicks. The triggers use Hall Effect sensors with two-stage stops, so they can act as hair triggers in shooters."
      },
      {
        "p": "Two remappable rear paddles sit alongside extra L4 and R4 bumpers for more control options, and PC players get extras such as 6-axis motion (gyro) aiming."
      }
    ]
  },
  {
    "id": "gg-watch",
    "image": "images/gg-watch.jpg",
    "type": "news",
    "category": "gadgets",
    "title": "Google Health 5.09 brings Health Guardian trends to Pixel Watch",
    "excerpt": "The update adds blood pressure, insulin resistance and sleep-breathing insights, and counts workouts from other apps toward Cardio Load.",
    "author": "NewsTech Team",
    "source": {
      "name": "9to5Google",
      "url": ""
    },
    "date": "2026-09-25",
    "tags": [
      "Phones",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "Version 5.09 of the Google Health app on Android is now rolling out, adding the new Health Guardian tools for owners of the Pixel Watch 3, 4 and 5. Users can now view trends for blood pressure, insulin resistance and sleep breathing quality, and the first monthly Health Guardian summary is due at the start of October."
      },
      {
        "p": "The trends need enough wear time to appear. Blood pressure trends require at least five consecutive days of wearing the watch in September, and insulin resistance trends need seven or more days and nights."
      },
      {
        "p": "The update also lets workouts logged in other apps or on other wearables, such as a Garmin or Apple Watch, count toward Cardio Load as long as heart rate was recorded. Smaller changes on Android and iOS include easier custom-food creation, more ways to log activities in the Fitness tab, and fixes for missing step streaks and a custom-food bug."
      }
    ]
  },
  {
    "id": "gg-lenovo",
    "image": "images/gg-lenovo.jpg",
    "type": "news",
    "category": "gadgets",
    "title": "Lenovo ThinkCentre Neo 50a Gen 7 is a 27-inch all-in-one for tight desks",
    "excerpt": "A 120Hz Full HD screen and Intel chips with AI hardware target offices, healthcare and schools.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-26",
    "tags": [
      "Computer",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "Lenovo's ThinkCentre Neo 50a Gen 7 puts the PC inside a 27-inch display, saving the space that a separate tower, webcam and speakers would take. Lenovo aims it at offices, healthcare and education settings where desk space is limited."
      },
      {
        "p": "The IPS screen is 1920 × 1080 with 350 nits of brightness, 99% sRGB coverage, a 120Hz refresh rate and an anti-glare coating, and it comes in touch and non-touch versions. The 120Hz rate should make scrolling feel smoother than on a typical 60Hz office monitor, although integrated graphics keep it from being a gaming machine. Full HD on a screen this large also means less sharp text and no extra workspace compared with a smaller Full HD display."
      },
      {
        "p": "Configurations use the Intel Core 3 304, Core 5 320 or Core 7 350, each with an NPU rated from about 15 to 17 TOPS. Lenovo markets it as an AI PC and highlights meeting features that adjust lighting and reduce background noise; those are the manufacturer's own claims."
      }
    ]
  },
  {
    "id": "gg-phone",
    "image": "images/gg-phone.jpg",
    "type": "news",
    "category": "gadgets",
    "title": "Dreame L10s Ultra robot vacuum promises up to 60 days without upkeep",
    "excerpt": "Its base empties dust, washes mop pads and refills water, with 5,300 Pa suction and LiDAR navigation.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-24",
    "tags": [
      "Phones",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "The Dreame L10s Ultra is a robot vacuum and mop combo built to run for as long as 60 days with little attention. Its docking base empties the dust bin, washes the mop pads and refills the water tank automatically."
      },
      {
        "p": "It offers 5,300 Pa of suction and a 5,200 mAh battery rated for up to 210 minutes. Navigation combines LiDAR, an RGB camera and 3D structured light to map rooms and avoid obstacles, and the twin spinning mop pads lift roughly 7 to 10 mm on carpet so it does not get wet."
      }
    ]
  },
  {
    "id": "gg-mmm",
    "image": "images/gg-mmm.jpg",
    "type": "news",
    "category": "gadgets",
    "title": "Meta shows Muse Charm, a keychain AI companion, at Meta Connect",
    "excerpt": "The small device lets you talk to Muse AI without a phone and is planned for a December release.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-24",
    "tags": [
      "Phones",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "At its Meta Connect event on September 23, Mark Zuckerberg revealed Muse Charm, a keychain-sized gadget that gives access to Meta's Muse AI by voice without unlocking a phone or opening an app. Pressing a fingerprint sensor on the corner starts a conversation, and the device can also show Muse your surroundings. A screen displays Muse's avatar, which gives it a Tamagotchi-like feel."
      },
      {
        "p": "Meta says the Charm is not finalized, since materials and the internal layout are still being decided, and only a few units exist so far. It is planned to ship in December. Zuckerberg described Muse as a long-term personal AI with goal setting, personalized research and customizable characters, each with its own private computer. Meta also announced VR glasses priced at $1,299, due next spring."
      },
      {
        "p": "The launch arrives amid growing worry about AI risks. The report notes that a former Anthropic researcher left the company on September 8 warning that self-improving AI could be an existential threat, and that an Anthropic team lead publicly agreed the risk is serious."
      }
    ]
  },
  {
    "id": "error",
    "image": "images/security-error.jpg",
    "type": "blog",
    "category": "security",
    "title": "New PamStealer macOS malware variant locks its payload behind a live server",
    "excerpt": "Jamf researchers say the update needs a key exchange with the attacker's server before the payload can be unpacked.",
    "author": "NewsTech Team",
    "source": {
      "name": "The Hacker News",
      "url": ""
    },
    "date": "2026-09-25",
    "tags": [
      "Phones",
      "Battery",
      "Hardware"
    ],
    "body": [
      {
        "p": "Researchers at Jamf Threat Labs have spotted an updated version of the PamStealer macOS malware. It still delivers its payload through a JavaScript for Automation (JXA) dropper, but earlier versions kept the decryption key inside the script. The new one downloads a special decryption tool and performs a key exchange with the attacker's server first, so the payload cannot be recovered by static analysis alone."
      },
      {
        "p": "The lure has changed too. Versions seen in July and August 2026 posed as fake sites for the Maccy, Scoppr and Nancy Clipboard utilities. The latest uses a fake site for a non-existent cryptocurrency wallet called Wavel. Its download button fetches a disk image containing a compiled AppleScript file that opens Script Editor with instructions that run the JXA dropper."
      },
      {
        "p": "As with similar threats, the safest habit is to download Mac software only from official sources and to be wary of any download that asks you to open a script."
      }
    ]
  },
  {
    "id": "zero-day",
    "image": "images/security-zero-day.jpg",
    "type": "news",
    "category": "security",
    "title": "Citrix confirms two NetScaler remote-code flaws are being exploited and issues patches",
    "excerpt": "Both critical bugs score 9.5 on CVSS v4, and one affects every deployment of the affected versions.",
    "author": "NewsTech Team",
    "source": {
      "name": "The Hacker News",
      "url": ""
    },
    "date": "2026-09-27",
    "tags": [
      "Security",
      "Passkeys",
      "Privacy"
    ],
    "body": [
      {
        "p": "Citrix confirmed on September 27 that two critical vulnerabilities in NetScaler ADC and NetScaler Gateway, both allowing remote code execution, are being used in real attacks. It released fixes for both along with six other flaws. The notice came a day after security firm watchTowr reported two unpatched NetScaler flaws under exploitation, and after some administrators took appliances offline. Citrix did not say the two sets are the same, though they appear to match."
      },
      {
        "p": "CVE-2026-88771 is an input validation flaw that lets an unauthenticated attacker run commands, and it affects all deployments on the affected versions with no special feature needed. CVE-2026-88772 is a memory overflow that could allow code execution or crash the device, affecting appliances where DTLS is switched on, as it is by default for VPN virtual servers. Both score 9.5 on CVSS v4."
      },
      {
        "p": "NetScaler devices sit at the edge of company networks, handling VPN and remote access, load balancing and authentication, which makes them valuable targets. Administrators should apply Citrix's patches as soon as possible."
      }
    ]
  },
  {
    "id": "oracle",
    "image": "images/security-oracle.jpg",
    "type": "news",
    "category": "security",
    "title": "Hackers bypass web firewalls to exploit an Oracle PeopleSoft bug and plant web shells",
    "excerpt": "Google warns of renewed mass exploitation of CVE-2026-35273, a critical flaw tied to ShinyHunters-linked activity.",
    "author": "NewsTech Team",
    "source": {
      "name": "The Hacker News",
      "url": ""
    },
    "date": "2026-09-26",
    "tags": [
      "Security",
      "Passkeys",
      "Privacy"
    ],
    "body": [
      {
        "p": "Google is warning of a renewed wave of attacks on a known Oracle PeopleSoft flaw, CVE-2026-35273 (CVSS 9.8), that allows unauthenticated remote code execution. The activity is linked to the ShinyHunters group and targets multiple sectors worldwide."
      },
      {
        "p": "The bug was first used as a zero-day against academic institutions. Attackers did reconnaissance, installed remote access software such as a MeshCentral agent for persistence, moved sideways between internal PeopleSoft machines over SSH using known credentials, and stole data. Mandiant, which Google owns, notified more than 100 organizations with exposed endpoints, most of them in the US."
      },
      {
        "p": "According to the report, the latest attacks get around web application firewalls and drop web shells on compromised servers."
      }
    ]
  },
  {
    "id": "coding",
    "image": "images/security-coding.jpg",
    "type": "blog",
    "category": "security",
    "title": "ThreatsDay: poisoned AI search results, a coding tool leaking repos and more",
    "excerpt": "This week's security roundup shows attacks hiding behind everyday things like updates, login boxes and search answers.",
    "author": "NewsTech Team",
    "source": {
      "name": "The Hacker News",
      "url": ""
    },
    "date": "2026-09-24",
    "tags": [
      "Security",
      "Passkeys",
      "Privacy"
    ],
    "body": [
      {
        "p": "This week's security roundup has a common theme: threats arrive disguised as ordinary things such as an update, a login box, a search answer or a coding tool. Trusted paths get poisoned, old bugs find new uses, and some attacks need little more than one weak setting or a person following on-screen instructions."
      },
      {
        "p": "One story covers RemControl, an Android banking trojan targeting customers in Western Europe, the Middle East and Canada. It spreads through fake Google Play pages pretending to be the TVTap IPTV app, reached through Meta ads, and has been seen since July 2026. It abuses Android's Accessibility Service to overlay fake bank screens, stream the screen live, log keystrokes and give operators full remote control, according to Group-IB."
      },
      {
        "p": "The malware finds its control server through an encrypted Telegram dead drop, which makes it easy to change infrastructure. Researchers also found signs of AI-assisted development, including an AI chatbot reply left in a live phishing page, and Russian-language code comments, with possible links to the Medusa UNKN affiliate botnet."
      }
    ]
  },
  {
    "id": "st-app",
    "image": "images/software-apps.jpg",
    "type": "news",
    "category": "software",
    "title": "Why pricing AI services is harder than it looks",
    "excerpt": "Free chatbots seem like a bargain, but the companies behind them, and firms building AI agents, are still working out how to charge.",
    "author": "NewsTech Team",
    "source": {
      "name": "BBC News",
      "url": ""
    },
    "date": "2026-08-11",
    "tags": [
      "Open source",
      "Programming",
      "Beginners"
    ],
    "body": [
      {
        "p": "Free versions of ChatGPT, Claude and Gemini are a great deal for users, but Microsoft, Google, Anthropic and others have spent hundreds of billions of dollars building the large language models behind them. To recover that money, they sell paid tiers with extras for tasks like coding."
      },
      {
        "p": "Other companies build services on top of AI agents trained for specific jobs, and they face a tricky question of how to price them. Simon Gooch of identity-management firm Saviynt, which is adding agentic AI to its products, said that locking customers into fixed pricing for one to three years makes little sense because nobody knows how costs will change."
      }
    ]
  },
  {
    "id": "st-women",
    "image": "images/software-women.jpg",
    "type": "news",
    "category": "software",
    "title": "Aveva plans a £30m headquarters expansion in Cambridge",
    "excerpt": "The industrial software company says the new research and development centre will open at Cambridge Science Park next year.",
    "author": "NewsTech Team",
    "source": {
      "name": "BBC News",
      "url": ""
    },
    "date": "2026-05-7",
    "tags": [
      "Open source",
      "Programming",
      "Beginners"
    ],
    "body": [
      {
        "p": "Aveva is investing £30 million in an expanded R&D centre at Cambridge Science Park, due to open next year as the company marks 60 years. Its software helps firms design and run complex facilities such as factories, oil rigs and ships."
      },
      {
        "p": "Chief people officer Caoimhe Keogan said the sustainable building will bring teams together and leave room to grow, and that the firm values Cambridge's talent. Aveva grew out of Cambridge University in the 1960s, where it pioneered 3D design, and today counts roughly 25,000 companies as customers, among them AstraZeneca, Michelin, Starbucks and Scottish Power. About 500 of its 10,000 staff are based at its two Cambridge sites."
      }
    ]
  },
  {
    "id": "st-computer",
    "image": "images/software-computer.jpg",
    "type": "news",
    "category": "software",
    "title": "Belfast's Cloudsmith raises £50m, edging toward unicorn status",
    "excerpt": "The funding round is described as the largest ever for a Northern Ireland technology company.",
    "author": "NewsTech Team",
    "source": {
      "name": "BBC News",
      "url": ""
    },
    "date": "2026-04-23",
    "tags": [
      "Open source",
      "Programming",
      "Beginners"
    ],
    "body": [
      {
        "p": "Belfast software company Cloudsmith has secured £50 million in investment from US venture firms including TCV and Insight Partners, with existing backers also putting money in. It is described as the largest deal of its kind for a Northern Ireland technology company, and the money will fund hiring and faster product development for its 130 staff, mostly in Belfast."
      },
      {
        "p": "The size of the round suggests a valuation approaching $1 billion, the level known as a unicorn. CEO Glenn Weinstein told BBC News NI the company is not quite there but is close. Its founders, Alan Carson and Lee Skillen, previously worked on the New York Stock Exchange's technology operation in Belfast, and TCV's past investments include Facebook and Airbnb."
      }
    ]
  },
  {
    "id": "pokemon",
    "image": "images/gaming-pokemon.jpg",
    "type": "news",
    "category": "gaming",
    "title": "Review: Pokémon Champions makes competitive battling approachable at last",
    "excerpt": "A longtime player who skipped the competitive scene says the game won him over.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-08-28",
    "tags": [
      "Gaming",
      "Streaming",
      "Internet"
    ],
    "body": [
      {
        "p": "The reviewer has played Pokémon for nearly 30 years but long avoided competitive play, put off by legendary-heavy teams in the early days and by the time commitment needed to build a competitive roster in later generations."
      },
      {
        "p": "Pokémon Champions, released earlier this summer, changed that. The reviewer found it sparked a new appreciation for the player-versus-player side of the turn-based battle system that Nintendo and Game Freak created in 1996, and rates it highly as a way to enjoy monster battling."
      }
    ]
  },
  {
    "id": "azus-gaming",
    "image": "images/gaming-azus.jpg",
    "type": "news",
    "category": "gaming",
    "title": "Review: ASUS ROG Zephyrus Duo is absurdly pricey but a thrill",
    "excerpt": "A $4,500 gaming laptop with two OLED screens and up to an RTX 5090 shows what happens when power beats practicality.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-04-27",
    "tags": [
      "Gaming",
      "Streaming",
      "Internet"
    ],
    "body": [
      {
        "p": "The ROG Zephyrus Duo pushes laptop configuration into extravagant territory. Two OLED screens and a graphics card of up to an RTX 5090 push the price to roughly $4,500, which few buyers could call a normal want."
      },
      {
        "p": "The reviewer nonetheless loves it, describing it as ASUS's wildest laptop yet and a fun example of overkill from a company that chose power over practicality."
      }
    ]
  },
  {
    "id": "gaming-game",
    "image": "images/gaming-game.jpg",
    "type": "news",
    "category": "gaming",
    "title": "Review: MSI Claw 8 EX AI+ is a fast handheld with a steep $1,800 price",
    "excerpt": "Intel's Arc G3 Extreme chip brings big performance and battery gains, but at one of the highest prices for a handheld PC.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-06-23",
    "tags": [
      "Gaming",
      "Streaming",
      "Internet"
    ],
    "body": [
      {
        "p": "MSI again partnered with Intel rather than AMD for the Claw 8 EX AI+, this time using the Arc G3 Extreme chip that Intel says was customized for portable gaming PCs. The result is a faster handheld with smoother performance and better endurance than last year's already powerful model."
      },
      {
        "p": "At $1,800 it is among the most expensive handhelds from a major PC maker, which raises the question of whether higher frame rates justify the cost. The reviewer notes that the test unit was an Intel engineering sample running pre-production software and drivers, so retail results may differ slightly."
      }
    ]
  },
  {
    "id": "ps5",
    "image": "images/gaming-ps5.jpg",
    "type": "blog",
    "category": "gaming",
    "title": "Which power cord does the PS5 use? What to know before replacing it",
    "excerpt": "All PS5 models use a common cable type, but check the specs before buying a replacement.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-20",
    "tags": [
      "Gaming",
      "Streaming",
      "Internet"
    ],
    "body": [
      {
        "p": "If you need a spare or replacement power cord for your PS5, it helps to know exactly what the console takes. Using the wrong cable can mean the console will not power on and, in the worst case, can create a fire risk."
      },
      {
        "p": "The good news is that every PS5 model uses a cable type already common in many homes, so replacements are easy to find. Common does not mean any cable is safe, though. Check the specifications first, and buy a certified replacement if a pet has chewed through yours. Some older PlayStation cables can also work."
      }
    ]
  },
  {
    "id": "amazon",
    "image": "images/gaming-amazon.jpg",
    "type": "blog",
    "category": "gaming",
    "title": "Amazon hands Lost Ark and Throne and Liberty to other publishers",
    "excerpt": "The move means Amazon will no longer publish any MMOs in the West.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-08-12",
    "tags": [
      "Gaming",
      "Streaming",
      "Internet"
    ],
    "body": [
      {
        "p": "According to PC Gamer, Amazon is giving up publishing rights in the West to two more MMOs, Lost Ark and Throne and Liberty. Both games stay available. NC, through its subsidiary FireSpark Games, takes over Throne and Liberty from Q4 2026, and Smilegate becomes Lost Ark's publisher in early 2027."
      },
      {
        "p": "Most key data, such as characters and in-game currency, should carry over for Throne and Liberty, though items in its Auction House are still undecided. Lost Ark players will lose features such as in-game mail and chat history."
      },
      {
        "p": "Amazon's own New World: Aeternum will shut down on January 31, 2027, and the company ended work on a Lord of the Rings MMO in May 2026. After the handoffs it will be out of the MMO business it entered in 2016, focusing on big franchises like 007 First Light and Tomb Raider Catalyst and on casual party games for its Luna service."
      }
    ]
  },
  {
    "id": "sc-starlink",
    "image": "images/sc-starlink.jpg",
    "type": "news",
    "category": "science",
    "title": "Musk predicts Starlink could carry most global internet traffic within ten years",
    "excerpt": "The forecast depends on next-generation V3 satellites and orbital data-center variants awaiting FCC review.",
    "author": "NewsTech Team",
    "source": {
      "name": "SatNews",
      "url": ""
    },
    "date": "2026-09-25",
    "tags": [
      "Satellites",
      "Internet",
      "Space"
    ],
    "body": [
      {
        "p": "On September 23, 2026, SpaceX CEO Elon Musk said the Starlink low Earth orbit network could handle the majority of worldwide internet traffic within a decade. The prediction relies on scaling up Starlink V3 satellites, including Starmind orbital data-center versions that are under review by the FCC."
      },
      {
        "p": "The claim comes as SpaceX's enterprise satellite revenue grew 108% year over year, helped by corporate broadband, aviation and maritime contracts. Frequent Starship launches and Falcon 9 rideshare flights have put thousands of satellites in orbit, bringing coverage to rural, maritime and aerospace users poorly served by fiber."
      },
      {
        "p": "Moving from consumer broadband to carrying a main share of global traffic would be a structural shift, since international traffic has long flowed almost entirely through undersea fiber cables, with satellites used for niche links. SpaceX says the V3 satellites are designed to offer about 100 times the usable bandwidth of early Starlink spacecraft."
      }
    ]
  },
  {
    "id": "sc-star",
    "image": "images/sc-star.jpg",
    "type": "news",
    "category": "science",
    "title": "Space Development Agency opens a $369M bid for missile-tracking ground stations",
    "excerpt": "The request covers building and upgrading worldwide ground entry points for its missile warning satellite network.",
    "author": "NewsTech Team",
    "source": {
      "name": "SatNews",
      "url": ""
    },
    "date": "2026-09-22",
    "tags": [
      "Satellites",
      "Internet",
      "Space"
    ],
    "body": [
      {
        "p": "On September 22, 2026, the Space Development Agency issued a $369 million request for proposals for ground entry points serving its missile warning and tracking satellites. The program covers design, installation, integration, testing and multi-year maintenance of ground stations around the world."
      },
      {
        "p": "These stations support the agency's Proliferated Warfighter Space Architecture, a layered low Earth orbit constellation meant to detect and track threats such as hypersonic glide vehicles and pass data to forces. General Dynamics Mission Systems currently holds the main ground integration contract for the first two layers, known as Tranches 1 and 2. More entry points are needed to avoid data bottlenecks, cut latency and keep downlinks continuous."
      },
      {
        "p": "The plan calls for five to eight new sites and upgrades to one to four existing stations, arranged so that satellites can always reach several stations and data can be rerouted automatically if one goes down."
      }
    ]
  },
  {
    "id": "gemini",
    "image": "images/gemini.jpg",
    "type": "blog",
    "category": "ai",
    "title": "Google releases a native Gemini app for Windows",
    "excerpt": "A keyboard shortcut opens it instantly, mirroring the Mac version.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-10",
    "tags": [
      "AI",
      "Explainer",
      "Chatbots"
    ],
    "body": [
      {
        "p": "Google has launched a native Gemini app for Windows 10 and 11, following a Mac version earlier this year. A keyboard shortcut brings it up for quick jobs like fact-checking a document or brainstorming slide titles, although, as with any generative AI, its answers deserve a second check."
      },
      {
        "p": "The app connects with other Google AI tools, so tasks can be passed to the agent assistant Gemini Spark, and it can work with Gmail and Drive. Image and video creation is available too, through Nano Banana and Gemini Omni. Google says the app is lightweight and quiet and that more native desktop features will follow."
      }
    ]
  },
  {
    "id": "claude-ai",
    "image": "images/claude-clear.jpg",
    "type": "blog",
    "category": "ai",
    "title": "Letting Claude run your Gmail inbox: what it can do and the risks",
    "excerpt": "AI can now reply, send and forward email for you, which makes careful settings important.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-6",
    "tags": [
      "AI",
      "Explainer",
      "Chatbots"
    ],
    "body": [
      {
        "p": "Claude can now manage a Gmail inbox, including sending, replying to and forwarding messages for you, even without per-message approval if you allow it. That convenience carries real risks, and AI agents have already made costly mistakes, such as one tool deleting a researcher's emails against her instructions. Claude cannot permanently delete messages, but it can trash or archive them."
      },
      {
        "p": "The main risks are hallucinated details in an email that goes out before you notice, a misunderstood request that sends something unintended, and prompt injection, where an attacker hides instructions in an incoming email, for example in invisible white or zero-size text, that the AI reads and obeys. That could be used to pull out sensitive data such as verification codes. Because Claude can send straight away unless you have review enabled, recipients may spot errors before you do, and there are privacy considerations in giving an AI company access to your whole inbox."
      },
      {
        "p": "To reduce the risk, keep approval turned on so you review actions before they run, and give specific instructions instead of vague ones, such as spelling out exactly what to tell HR rather than just asking for an email about your absence."
      }
    ]
  },
  {
    "id": "ai-photos",
    "image": "images/ai-photos.jpg",
    "type": "blog",
    "category": "ai",
    "title": "Google Photos adds a Redact tool and other AI updates",
    "excerpt": "Redact blurs sensitive details, and Markup, Wardrobe, Moods and Remix also get updates.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-24",
    "tags": [
      "AI",
      "Explainer",
      "Chatbots"
    ],
    "body": [
      {
        "p": "Google Photos has a new Redact tool, part of an upgraded Markup feature, that pixelates parts of an image such as a license plate. Markup also adds extra fonts and finer controls for the thickness of pen and highlighter strokes, rolling out to all Android users worldwide."
      },
      {
        "p": "Wardrobe, which builds a catalog of your clothing and jewelry from your photo library for styling ideas, is expanding to Android and iOS users in the US, India and Brazil. In the US, Google AI Pro and Ultra subscribers can use Photos inside Gemini Spark to find and edit images with a single prompt. Android users get vintage-style filters called Moods, and in select countries both platforms get 15 new Remix templates that use your likeness to make red-carpet and photo-booth style images."
      }
    ]
  },
  {
    "id": "ai-avatar",
    "image": "images/ai-avatar.jpg",
    "type": "blog",
    "category": "ai",
    "title": "Google adds video avatars to Gemini 3.8 Live for voice agents",
    "excerpt": "The avatars are aimed at customer service and sales roles for businesses.",
    "author": "NewsTech Team",
    "source": {
      "name": "Engadget",
      "url": ""
    },
    "date": "2026-09-25",
    "tags": [
      "AI",
      "Explainer",
      "Chatbots"
    ],
    "body": [
      {
        "p": "Google recently launched Gemini 3.8 Live and Live Extended Thinking, its most advanced live conversation models, aimed at helping developers and businesses build dependable voice agents. Now it has added video with Gemini 3.8 Live with Live Avatar, which gives the agent a visual persona that listens, sees and speaks."
      },
      {
        "p": "The avatars, shown in both realistic and cartoon styles, offer accurate lip-sync, natural expressions and smooth turn-taking, and they can call tools and fetch data in the background while the conversation continues. Google offers a library of preset avatars, and organizations can create custom ones from reference images to match a brand or character, though that is limited to enterprise allowlisting. Google says the avatars include safeguards around identity."
      }
    ]
  },
  {
    "id": "study-ai",
    "image": "images/study-ai.jpg",
    "type": "blog",
    "category": "students",
    "title": "Google widens access to AI Study notebooks for students",
    "excerpt": "Students can build notebooks in the Gemini app from their own class materials, then get quizzes and focused practice.",
    "author": "NewsTech Team",
    "source": {
      "name": "Google for Education",
      "url": ""
    },
    "date": "2026-09-22",
    "tags": [
      "Coding",
      "Students",
      "Learning"
    ],
    "body": [
      {
        "p": "Google is expanding its Study notebooks, which live in the Gemini app. Students create a notebook, choose what they want to learn and upload materials such as notes and readings. The system makes quizzes to find weak spots, then provides short lessons and practice questions on those areas."
      },
      {
        "p": "Progress tracking shows which topics are going well and which need work, and the notebooks can help with exam prep, with support for standardized tests growing. As of September 2026, people on eligible school or work Google accounts can use them when an administrator turns the feature on."
      },
      {
        "p": "These tools can help students practice, but they should still verify information and treat AI as support for learning rather than a replacement for their own work."
      }
    ]
  },
  {
    "id": "study-security",
    "image": "images/study-security.jpg",
    "type": "blog",
    "category": "students",
    "title": "Microsoft: fake passkey requests are being used to take over cloud accounts",
    "excerpt": "Attackers pose as IT help desks and steer employees to look-alike sign-in pages.",
    "author": "NewsTech Team",
    "source": {
      "name": "",
      "url": ""
    },
    "date": "2026-09-16",
    "tags": [
      "Coding",
      "Students",
      "Learning"
    ],
    "body": [
      {
        "p": "Microsoft Security Research reports a social engineering campaign, active since May 2026, in which attackers pretend to be a company's IT help desk and claim that a passkey, MFA or single sign-on setting needs updating. Contact usually starts with a call or message to an employee's personal phone, and links have also arrived by SMS and by Teams messages from accounts that were already compromised."
      },
      {
        "p": "Victims are sent to a page imitating a Microsoft sign-in. Microsoft stresses that registering a passkey is usually not the attacker's real goal. The request is a pretext for adversary-in-the-middle phishing, which captures credentials and session tokens, or for device-code phishing, which tricks people into authorizing an attacker's client."
      },
      {
        "p": "Signs of compromise included unusual sign-ins, authentication methods added by attackers, heavy Microsoft Graph activity, large SharePoint and OneDrive downloads and email collection. A practical takeaway is to verify any unexpected IT request through a separate, known channel before acting on it."
      }
    ]
  },
  {
    "id": "study-student",
    "image": "images/study-student.jpg",
    "type": "blog",
    "category": "students",
    "title": "Does more edtech use mean more learning? A new psychology report says not necessarily",
    "excerpt": "The APA report says schools should measure whether tools help students understand and remember, not how long they use them.",
    "author": "NewsTech Team",
    "source": {
      "name": "Education Week",
      "url": ""
    },
    "date": "2026-09-4",
    "tags": [
      "Coding",
      "Students",
      "Learning"
    ],
    "body": [
      {
        "p": "Students now use apps, AI tools and online platforms for many school tasks, but a recent American Psychological Association report, covered by Education Week on September 4, 2026, says more time spent on educational technology does not automatically mean more learning. It advises schools and families to check whether a tool helps students understand and remember material rather than counting usage time or enjoyment."
      },
      {
        "p": "The report says technology helps most when it prompts students to recall what they know, gives them useful feedback, brings material back over time, and has them use it on unfamiliar problems. For students, the lesson is that apps are a helpful part of studying but not a substitute for thinking and practice."
      }
    ]
  },
  {
    "id": "study-learn",
    "image": "images/study-learn.jpg",
    "type": "blog",
    "category": "students",
    "title": "California law tightens limits on how companies use student data",
    "excerpt": "The measure bars technology providers from using student information to train AI models.",
    "author": "NewsTech Team",
    "source": {
      "name": "CalMatters",
      "url": ""
    },
    "date": "2026-09-11",
    "tags": [
      "Coding",
      "Students",
      "Learning"
    ],
    "body": [
      {
        "p": "California has passed a law setting stricter rules on how technology companies collect, use and share student data. According to CalMatters, it prohibits using student data to train or develop AI models, and it covers providers serving K-12 schools, community colleges and universities."
      },
      {
        "p": "This matters as schools rely more on digital platforms for learning, grading and communication, often without students knowing how their information is handled. For students, understanding what an app collects and how it is used is becoming part of digital literacy."
      }
    ]
  },
  {
    "id": "sc-eart",
    "image": "images/sc-eart.jpg",
    "type": "blog",
    "category": "science",
    "title": "SSC Space to supply ground support for Airbus's Pléiades Neo satellites",
    "excerpt": "A multi-year contract names SSC Space prime ground segment provider for Pléiades Neo and Pléiades Neo Next.",
    "author": "NewsTech Team",
    "source": {
      "name": "SatNews",
      "url": ""
    },
    "date": "2026-09-21",
    "tags": [
      "Space",
      "Rockets",
      "Explainer"
    ],
    "body": [
      {
        "p": "SSC Space has won a multi-year deal, signed September 21, 2026, to be the lead ground-segment supplier to Airbus Defence and Space for its Pléiades Neo Earth observation satellites and the follow-on Pléiades Neo Next. It will provide telemetry, tracking and command services, high-throughput data reception and network optimization across its polar and high-latitude stations, and it will also support the launch and early orbit phase of the Pléiades Neo Next satellites."
      },
      {
        "p": "Pléiades Neo delivers imagery at 30 cm resolution for mapping, urban planning, defense and disaster monitoring, while Pléiades Neo Next aims for around 20 cm and faster revisits. SSC is upgrading its ground infrastructure to cut data delay, using stations including Esrange in Sweden, Inuvik in Canada and Punta Arenas in Chile."
      }
    ]
  },
  {
    "id": "sc-baloon",
    "image": "images/sc-baloon.jpg",
    "type": "blog",
    "category": "science",
    "title": "Japan Earth Observer roundup: Rakuten-led team wins J-LEO satellite network",
    "excerpt": "September's space and geospatial news from Japan includes its planned sovereign satellite-to-phone network.",
    "author": "NewsTech Team",
    "source": {
      "name": "Japan Earth Observer",
      "url": ""
    },
    "date": "2026-09-2",
    "tags": [
      "Space",
      "Rockets",
      "Explainer"
    ],
    "body": [
      {
        "p": "This edition of the Japan Earth Observer newsletter leads with J-LEO, Japan's planned domestic low Earth orbit communications network. The communications ministry (MIC) is allocating about ¥150 billion (roughly US $926 million) in subsidies over three years toward a network of around $2 billion, and is allowing use of 700 MHz spectrum for direct satellite-to-phone service."
      },
      {
        "p": "The winner is Rast, a 50/50 joint venture between Rakuten and AST SpaceMobile, which was the only bidder. Requirements included nationwide rollout by March 2029, domestic control of all network and data, video calls on ordinary smartphones for at least 70% of the day, and free roaming between carriers during disasters."
      },
      {
        "p": "Alternatives such as relying on a Starlink partner, where KDDI, SoftBank and NTT Docomo already offer direct-to-device services, would have given Japan less domestic control. The newsletter says Rakuten has already completed Japan's first direct-to-cell video call."
      }
    ]
  },
  {
    "id": "sc-solar",
    "image": "images/sc-solar.jpg",
    "type": "blog",
    "category": "science",
    "title": "Why LEO satellites are changing global connectivity in 2026",
    "excerpt": "Orbiting at 500 to 2,000 km, they offer much lower delay than traditional satellites.",
    "author": "NewsTech Team",
    "source": {
      "name": "AsiaTechX",
      "url": ""
    },
    "date": "2026-09-28",
    "tags": [
      "Space",
      "Rockets",
      "Explainer"
    ],
    "body": [
      {
        "p": "Low Earth orbit (LEO) satellites circle at roughly 500 to 2,000 kilometres, far below the roughly 36,000 km of traditional geostationary satellites. The shorter distance cuts delay and speeds up data, improving broadband, remote communications and enterprise services, and aerospace and tech companies are investing billions in new constellations."
      },
      {
        "p": "Latency is typically 20 to 40 milliseconds, compared with more than 600 ms for geostationary links, with higher throughput and better coverage for remote and rural areas. The World Economic Forum has said LEO could bring fast internet to nearly three billion people without reliable access. The original article was published ahead of the ATxEnterprise 2026 conference, where the topic will be discussed."
      }
    ]
  },
  {
    "id": "st-build",
    "image": "images/software-build.jpg",
    "type": "blog",
    "category": "software",
    "title": "Bug bounty hunting: how it works and why it is changing",
    "excerpt": "A full-time bug hunter explains the appeal of finding software flaws for pay.",
    "author": "NewsTech Team",
    "source": {
      "name": "BBC News",
      "url": ""
    },
    "date": "2026-04-28",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "body": [
      {
        "p": "Bug bounty hunting pays security researchers to find flaws in organizations' software and systems. Brandyn Murtagh has been a full-time hunter and independent researcher for a year, after starting in a security operations centre at 16 and moving into penetration testing at 20. He describes competing at invite-only events in places like luxury hotels and Las Vegas esports arenas, with leaderboards and earnings."
      },
      {
        "p": "Netscape is regarded as the first tech company to pay researchers for vulnerabilities, back in the 1990s. Later, Bugcrowd and HackerOne in the US and Intigriti in Europe grew into marketplaces matching hackers with organizations. Bugcrowd founder Casey Ellis notes that although hacking skills are neutral, bug hunters must stay within the law."
      }
    ]
  },
  {
    "id": "st-mobile",
    "image": "images/software-mobile.jpg",
    "type": "blog",
    "category": "software",
    "title": "Aveva to create 23 jobs with a £1.4m Derry R&D centre",
    "excerpt": "The Cambridge-based software firm will double its workforce in the north west of Northern Ireland.",
    "author": "NewsTech Team",
    "source": {
      "name": "BBC News",
      "url": ""
    },
    "date": "2026-11-25",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "body": [
      {
        "p": "Aveva, a Cambridge-based software company that opened a Derry office in 2015, plans to create 23 jobs with a £1.4 million investment in a new research and development centre in Londonderry, doubling its workforce in the north west. It will be the company's second R&D centre and will focus on developing products, including software for managing large volumes of customer data."
      },
      {
        "p": "Executive vice-president of R&D Iju Raj said the company chose Northern Ireland for its talent pool, university links and graduate schemes, and credited support from Invest NI."
      }
    ]
  }
];
