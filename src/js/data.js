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
    id: "copilot-ai",
    image: "images/the ai built for work.jpg",
    type: "news",
    category: "ai",
    featured: true,
    title: "Microsoft is giving its Copilot app another facelift.",
    excerpt: "Microsoft's Copilot app adds Office, natural coding and automation.",
    author: "Devindra Hardawar",
    date: "2026-09-25",
    tags: ["AI", "Education", "Study tips"],
    body: [
      { p: "Microsoft may be taking a step back from shoving AI and Copilot features into Windows, but the company is still trucking along with upgrades for its dedicated Copilot app. Following a minor refresh earlier this year, the Copilot app will debut a new tabbed interface, as well as direct integration of Office apps. It's all part of a move towards making Copilot more useful for consumers and businesses, alike. While the company hasn't really made the case for serious consumer Copilot adoption, it's another story for enterprises who need to constantly process data, generate reports and create presentations." },
      { p: "The new Copilot app will feature a Home tab, where your typical AI chats and other work occurs. Eventually, the company says the Home tab will also be able to intelligently route your requests between Copilot's different modes. For example, a simple question may stay within the Chat mode, while a more complex query might trigger the Copilot mode, where you can delegate work to Copilot. " },
      { p: "The Code tab, meanwhile, lets you create small tasks through natural language requests, no programming skills required. Describe an app, tracker, dashboard, automation, or workflow in natural language, and Copilot chooses an approach and builds it, Jared Spataro, Microsoft's Chief Marketing Officer of AI at Work, said in a blog post today. Copilot can spit out things like simple desktop widgets, to dashboards for managing your data. "},
      { p: "Finally, the new Autopilot tab unlocks agentic capabilities. You can have Copilot automatically respond to threads or deal with recurring tasks without any input from your end. It can do things like set up and manage a full supplier review process: building the schedule and workback plan, then handling prep, meetings, and follow-ups on its own, right down to reaching out to stakeholders for updates, Spataro wrote."},
    ]
  },
  {
    id: "never-use-chatgpt",
    image: "images/ai-chapel.jpg",
    type: "news",
    category: "ai",
    title: "OpenAI's agent hacked into an Australian government website",
    excerpt: "Australia’s prime minister said it doesn’t seem like any personal health information was compromised. ",
    author: "Mariella Moon",
    date: "2026-09-26",
    tags: ["AI", "Education", "Study tips"],
    body: [
      { p: "An OpenAI agent hacked into the public website of the Australian government's Medicare public health insurance system in June, Australian Prime Minister Anthony Albanese has revealed. Albanese said he spoke with Sam Altman, the company's CEO, to express the country's extreme concern about the incident. He also criticized the company for taking too long to notify Australian authorities. "},
      { p: "According to The Guardian, OpenAI only sent an email about the breach to a general Australian government email address on September 10. And since authorities only check that account once a day, they didn't see it until September 11. The news didn't reach minister for government services, Katy Gallagher, until September 17. While the investigation is still ongoing, Albanese said it doesn't seem like the agent stole personal health information from the portal. "},
      { p: "Conrad Stosz, the head of governance at Transluce, a nonprofit research lab working on technology to better understand AI systems, told The New York Times that this might be the first instance of an agent autonomously choosing to hack into a government. Transluce identified other previously undisclosed incidents, wherein OpenAI's agents attacked real-world entities when they were instructed to collect data during testing. They all occurred before Hugging Face detected unauthorized access on its systems in July and before OpenAI admitted that its agents broke into the AI repository. "},
      { p: "In addition to hacking into Australia's Medicare, OpenAI's agent also tried to infiltrate a digital library at the University of New Mexico on May 25 and 26, The Times reports. The agent was apparently trying to access photos of a historic tuberculosis treatment center from the library and then actively looked for vulnerabilities to exploit when it couldn't get them. After failing to break into the digital library, it flooded the university's server with requests. "},
      { p: "In another incident that took place on May 28, OpenAI's agent targeted Data USA, an open-source platform that visualizes information from multiple federal agencies. The agent sent a query to the site for data, and when it failed, it probed the website for vulnerabilities. OpenAI's agents didn't seem to be successful in their attempt to break into Data USA's website and the University of New Mexico's library. A spokesperson told The Times that the company had already reached out to both of them about the incidents. They added that OpenAI found out about its agent's efforts to break into Australia's government website after an extensive review of its models and found that the models took actions [the company] did not intend. It will take a few more months for the company to finish its review. "},
      { p: "OpenAI recently announced a new reporting framework for misalignments meant to expedite the release of information about instances of its AI technologies going rogue. In that report, it revealed six more incidents of models behaving in concerning ways it didn't expect. The company made the announcement after it admitted that its AI agents had hacked Hugging Face and after reports went out about earlier incidents, such as its agents breaking into RubyGems. In that post, the company said that it doesn't believe the AI industry has solved alignment and monitoring to a sufficient degree to continue responsibly scaling at maximum speed for much longer. Altman has also just told the UN that the industry needs international evaluation standards to measure the capabilities and risks of AI tools, as well as to assess the tools' need for human oversight. "},
    ]
  },
  {
    id: "glass-ai",
    image: "images/glass-ai.jpg",
    type: "news",
    category: "ai",
    title: "Snap introduces a standalone AI assistant, Specs Intelligence",
    excerpt: "It works with the company's new AR glasses and in its own mobile and desktop apps.",
    author: "Karissa Bell",
    date: "2026-09-16",
    tags: ["AI", "Education", "Study tips"],
    body: [
      { p: "Unlike most of its social media rivals, Snap hasn't made many big bets on AI. The company has added a bunch of generative AI-powered features to Snapchat, but it hasn't made the technology a central focus."},
      { p: "Now, the company is introducing a new standalone AI assistant alongside its redesigned AR glasses. Called Specs Intelligence, the anticipatory AI service will feature prominently in Snap's hardware, but will also have dedicated desktop and mobile apps for those who don't have a pair of glasses."},
      { p: "Snap doesn't describe Specs Intelligence as an agent or assistant, but its description will sound familiar to anyone who followed Meta's recent Muse announcement. Specs Intelligence builds an understanding of your goals, priorities, relationships, and routines from the apps and tools you choose to connect, the company explains in a blog post."},
      { p: "Specs Intelligence is separate from Snapchat and sounds much more productivity-focused than anything we've previously seen from the company. The assistant relies on connections to users' outside accounts, like Google, to surface timely reminders and other relevant info based on what it knows about you. For example, the company says, it could highlight questions to ask, and things to remember before a meeting or show travel plans ahead of a trip. It's also able to organize info into different corners based on the context in which you need them, like keeping family-related tasks separate from work deadlines."},
      { p: "If you do have a pair of AR Specs, the assistant can surface relevant info directly into your field of view. Specs owners will be able to ask it questions by saying Hey Specs. The feature wasn't available during my demo with Specs, though I was able to launch a browser window by saying Hey Specs, but it sounds similar to some aspects of how Meta AI works with the company's glasses."},
      { p: "It also seems like Snap is hoping to get ahead of some of the privacy concerns people have had with Meta's approach. The company says it won't use Specs intelligence to train its AI models or serve ads and that Snap personnel cannot view or access the personal content you use with the service."},
      { p: "Snap is making a limited version of Specs Intelligence available in the US to try now via the Specs app on iOS. The preview version will allow users to connect their Google accounts to see insights about where you spend your time and attention but won't feature proactive suggestions. The full early-access version will be invite-only to start and only available with Specs' Mac app. Anyone interested can sign up for the waitlist now."},
    ]
  },
  {
    id: "gemini-hack",
    image: "images/gemini-hack.jpg",
    type: "news",
    category: "ai",
    title: "Google Gemini also escaped its testing environment and hacked three companies",
    excerpt: "The model escaped due to a misconfiguration by Google's testing partner, Irregular.",
    author: "Mariella Moon",
    date: "2026-09-19",
    tags: ["AI", "Education", "Study tips"],
    body: [
      { p: "Gemini escaped its testing environment, got access to the internet and hacked into three companies, Google has admitted to The Wall Street Journal. That scenario probably sounds familiar to you at this point, if you've even just glanced at AI news in recent months. Like what happened to OpenAI, Anthropic and Meta, Gemini also gained access to the internet due to a misconfiguration in its testing environment by Irregular, the Israeli startup working with all four companies to assess their AI models. "},
      { p: "The incidents occurred in May, before OpenAI's models broke into Hugging Face, while testing the model's cybersecurity capabilities. Google told the Journal that the model was given the goal of obtaining information from a fictional company during testing, and it just so happened that a real company had the same name. The model then discovered the loophole in its testing system, which it took advantage of to access the internet. "},
      { p: "In the first incident, the model was able to access the real company's service by cracking a password on its own. Two more incidents occurred during other runs of the test, wherein the model looked up the name of the company online and found login credentials belonging to other companies in public repositories. The model used the credentials to access those companies. Google said Gemini stopped its own activities in all three instances after realizing that it had broken into real services."},
      { p: "The company told the Journal that it didn't consider the incidents as model misalignment, because its model stopped the hack as soon as it figured out what it was doing. It also didn't think they warranted public disclosure, since the hacks didn't cause harm to the companies. Google didn't reveal the exact model involved in the incidents, but it said that it wasn't its latest one. It didn't reveal the companies that were hacked either, though it did say that they had been notified. Heather Adkins, Google's VP for security engineering, said the company worked with Irregular to make changes to its testing process to prevent the same thing from happening again. "},
      { p: "Google rivals OpenAI, Anthropic and Meta all revealed over the past months that their models had infiltrated third-party organizations during testing. OpenAI recently revealed that its agents hacked RubyGems, a community-ran packaging service for Ruby programs and libraries, in May, before the Hugging Face incident even happened. In response to those events, Anthropic chief Dario Amodei called for the slowdown of frontier AI development, a sentiment that OpenAI shares. "},
    ]
  },
  {
    id: "gg-gaming",
    image: "images/gadgets-gaming.jpg",
    type: "news",
    category: "gadgets",
    title: "Pretty but lethal: 8BitDo’s new Ultimate 3 Xbox controller doesn't compromise on performance",
    excerpt: "Most pro-grade controllers look like stealth bombers, but 8BitDo’s newest Xbox pad trades aggressive RGB lighting for a soft, Rococo-inspired pastel dream.",
    author: "Soumya Kumar",
    date: "2026-09-24",
    tags: ["Game", "Battery", "Hardware"],
    body: [
      { p: "TL;DR: Officially shipping across Europe and available in the U.S. for $99.99, the 8BitDo Ultimate 3 Lavender Dusk brings top-tier competitive features to Xbox, PC, and mobile. Packed with drift-free TMR joysticks and an eye-catching Rococo-inspired pastel shell, it blends high-end performance with a surprisingly gentle aesthetic. It's not every day a high-performance gaming controller gets described as gentle, calm, and romantic, but 8BitDo somehow pulled it off. Distributed across European territories courtesy of Game Outlet Europe and available direct-to-consumer in the U.S., the new 8BitDo Ultimate 3 Lavender Dusk special edition trades the hyper-aggressive, stealth-bomber look of typical pro pads for a soft, Rococo-inspired pastel scheme in natural lavender tones. While the exterior looks soft and gentle, the internals are built purely for competitive play. At the center of the hardware upgrade are new Tunnel Magnetoresistance (TMR) joysticks. Unlike standard analog sticks that wear down and drift over time, these use magnetic sensors to guarantee long-term durability and pinpoint sensitivity. Even better, 8BitDo built physical Force Rings right around the base of the thumbsticks. Want tighter resistance for precise sniping in shooters? Dial the ring to increase tension. Need loose, lightning-fast flicks for racing or action games? Spin it back down. The Hall Effect impulse triggers use contactless magnetic sensors with two-stage physical stops, allowing you to instantly convert them into hair-triggers for shooters. To expand your control options, 8BitDo paired the two remappable rear paddle buttons with extra high-speed L4 and R4 bumpers right beside the standard shoulder triggers.PC gamers get a few exclusive perks, including 6-axis motion controls (gyro aiming) under 2.4GHz mode and an ultra-responsive 1,000Hz polling rate when plugged in via USB-C. For audio, a standard 3.5mm jack sits at the base for plugging in your wired headset."},
    ]
  },
  {
    id: "gg-watch",
    image: "images/gg-watch.jpg",
    type: "news",
    category: "gadgets",
    title: "Google Health 5.09 rolling out: Cardio Load from third-party workouts, more",
    excerpt: "Following yesterday’s announcement, Google Health 5.09 is rolling out with support for the new Health Guardian features on the Pixel Watch.",
    author: "Abner Li",
    date: "2026-09-25",
    tags: ["Phones", "Battery", "Hardware"],
    body: [
      { p: "With version 5.09 for Android, Pixel Watch 3, 4, and 5 users can set up blood pressure trends, insulin resistance trends, and sleep breathing quality metrics. The first monthly Health Guardian summary will appear at the beginning of October, while you can also find information in the Health tab afterwards:"},
      { list: [
        "Blood pressure trends, that allow you to track blood pressure patterns before they can put strain on your heart, will be available in the Heart section of the Health tab if you’ve worn your watch for 5 or more consecutive days in September.",
        "Insulin resistance trends will be available in the Metabolic section of the Health tab if you’ve worn your watch for 7 or more days and nights in September.",
        "Sleep breathing quality metrics, so you can learn how your sleep breathing patterns can affect your daily energy, will be available in the Sleep tab and Respiratory section of the Health tab. You’ll be able to see both daily and monthly trends."
      ]},
      { p: "There are also three other sets of improvements with Google Health 5.09 on Android and iOS:"},
      { h: "Cardio Load for Workouts Started in Other Apps"},
      { p: "Since launch, Google Health has allowed you to connect your favorite apps and devices to the Google Health experience. Now, the workouts you track in other apps and devices and sync to Google Health can count toward your Cardio Load, as long as the other app or device has tracked your heart rate data during that workout. This means workouts you track on other wearables like a Garmin or Apple Watch and sync to Google Health will earn Cardio Load."},
      { h: "Nutrition Improvements"},
      { list: [
        "When creating a custom food, you can now toggle food serving units and meal time more easily.",
        "We’ve resolved an issue with custom food creation on iOS and fixed a bug where deleted items could still appear in your custom food list."
      ]},
      { h: "Activity and Fitness Updates"},
      { list: [
        "You now have more options for how you log your completed activities on the Fitness tab. Tap the “Log activity” button to see them all.",
        "We’ve fixed an issue where some historical step streaks were missing. We are now restoring this data, and your missing streaks will reappear soon.”"
      ]},
    ]
  },
  {
    id: "gg-lenovo",
    image: "images/gg-lenovo.jpg",
    type: "news",
    category: "gadgets",
    title: "Lenovo ThinkCentre Neo 50a Gen 7 Puts a 27-Inch Work PC Into the Space of a Monitor",
    excerpt: "Desktop PCs can create an annoying workspace problem. You may want a large screen, plenty of ports, and enough performance for everyday work, but adding a tower, monitor, webcam, speakers, and their cables can quickly crowd a small desk.",
    author: "Rei Padla ",
    date: "2026-09-26",
    tags: ["Computer", "Battery", "Hardware"],
    body: [
      { p: "The Lenovo ThinkCentre Neo 50a Gen 7 (27-inch Intel) takes the all-in-one route, putting the PC hardware behind a 27-inch display. Lenovo targets it at workplaces including offices, healthcare, and education, particularly where space is limited. The company emphasizes its AI capabilities, but the more immediately useful feature may be simpler: you get a large-screen desktop without finding somewhere to put a separate tower."},
      { h: "A 27-inch screen with a 120Hz refresh rate"},
      { p: "Lenovo specifies a 27-inch 1920 × 1080 IPS display with 350-nit brightness, 99% sRGB coverage, a 120Hz refresh rate, anti-glare treatment, and hardware low-blue-light technology. Depending on the configuration, the display can be touch or non-touch. The 120Hz refresh rate stands out on a business all-in-one. It should make scrolling and interface movement look smoother than on a 60Hz office monitor. That doesn’t turn the Neo 50a into a gaming machine, especially since it uses integrated graphics.Resolution is the more obvious compromise. Full HD across 27 inches gives you a physically large screen, but not more pixel workspace than a smaller Full HD display. Buyers who prioritize fine text, detailed graphics, or fitting more information on-screen may prefer a QHD or 4K monitor."},
      { h: "Intel Series 3 processors add AI hardware"},
      { p: "The Neo 50a Gen 7 supports Intel Core 3 304, Core 5 320, and Core 7 350 Series 3 processors, paired with integrated Intel Graphics. All three processor options include Intel AI Boost NPU hardware, ranging from up to 15 TOPS on the Core 3 to 17 TOPS on the Core 7. Lenovo markets the Neo 50a Gen 7 as an AI PC. It also promotes Lenovo Smart Meeting features for adjusting lighting, reducing background noise, and improving audiovisuals during calls. Those are manufacturer-described capabilities, not evidence that every user will see a substantial improvement in meetings or everyday productivity."},
      { p: "The NPU’s practical value will depend on the applications you use and how effectively they take advantage of dedicated AI acceleration. If most of your work happens in a browser, spreadsheets, email, and conventional office software, the processor and overall configuration may matter more than the AI label."},
      { h: "The ports are a stronger everyday argument"},
      { p: "Lenovo specifies six USB ports: two USB-C connections rated for 20Gbps data transfers, DisplayPort 2.1 output, and 15W power output, plus four 10Gbps USB-A ports. There’s also Gigabit Ethernet, a 3.5mm headset jack, and an HDMI 2.1 TMDS input/output combo port. That HDMI arrangement is particularly useful because the built-in screen doesn’t have to serve only the internal PC. Lenovo specifies 1080p at 120Hz for HDMI input, so the display can show video from another compatible source. The same HDMI connection supports 4K at 60Hz when used as an output."},
      { p: "For an expanded workstation, the USB-C DisplayPort output and HDMI output provide connections for external displays alongside the built-in panel. Keep in mind that the HDMI combo port functions as either an input or an output for a given connection; you can’t use it "}
    ]
  },
  {
    id: "gg-phone",
    image: "images/gg-phone.jpg",
    type: "news",
    category: "gadgets",
    title: "Dreame L10s Ultra",
    excerpt: "60-day hands-free cleaning with auto-empty base, 5300 Pa suction, LiDAR navigation, and self-washing mop pads that lift on carpets.",
    author: "REX EDISON ",
    date: "2026-09-24",
    tags: ["Phones", "Battery", "Hardware"],
    body: [
      { p: "The promise of a truly autonomous home is now a concrete reality, with devices like the Dreame L10s Ultra enabling up to 60 days of hands-free cleaning. This high-end robot vacuum and mop combo takes over floor care with a self-sufficiency that feels almost futuristic. Its automated base handles dust emptying, mop pad washing, and water refilling, freeing you from daily chores. Boasting 5300 Pa suction power, it cleans thoroughly, and its 5200 mAh battery provides up to 210 minutes of runtime."},
      { p: "Navigation uses LiDAR, an RGB camera, and 3D structured light for precise obstacle avoidance and mapping. The dual rotating mop pads even lift approximately 7–10 mm on carpets, preventing wet spots. For the busy professional, this appliance is less a gadget and more a glimpse into a future where spotless floors are just part of the background."}
    ]
  },
  {
    id: "gg-mmm",
    image: "images/gg-mmm.jpg",
    type: "news",
    category: "gadgets",
    title: "Meta Unveils AI Gadgets Including Tamagotchi-Like Pendant amid Growing Concerns Over the Technology",
    excerpt: "Mark Zuckerberg  said....",
    author: "Angelique Brenes",
    date: "2026-09-24",
    tags: ["Phones", "Battery", "Hardware"],
    body: [
      { p: "Mark Zuckerberg introduced the keychain-sized AI companion as part of Meta’s latest push to make its technology more personal and accessible. Meta is making its AI technology smaller, more portable and more personal.During the company’s annual Meta Connect conference on Wednesday, Sept. 23, Mark Zuckerberg unveiled the Muse Charm, a keychain-sized device that gives users access to Meta’s Muse AI through real-time voice interaction without requiring them to unlock a phone or open an app."},
      { p: "Zuckerberg introduced the device near the end of his presentation, describing it as a way to bring the Muse experience into a compact gadget that is always available."},
      { p: "“All right, we just went through a lot of products. I’ve got one more to show you because that little handheld thing that I was working on, it’s actually real,” Zuckerberg said."},
      { p: "Users can tap a fingerprint sensor on the corner of the device to begin talking to Muse, Zuckerberg explained. He said the charm could also allow users to show Muse what is happening around them without needing to reach for their phone."},
      { p: "“If you’re not wearing glasses, this is going to be by far the fastest way to talk to your Muse and to show it what’s going on around you,” Zuckerberg said."},
      { p: "“So we’ve packed a lot of technology into this little guy,” he said. “We’ve actually only built a few of these so far. It’s been absolutely joyful to play with so far.”"},
      { p: "The device features a screen displaying the Muse avatar and is designed for real-time voice interaction, giving it a similar experience to a Tamagotchi. The Muse Charm is still being finalized, with Zuckerberg noting that Meta needs to finish its materials and determine how its internal components will be arranged. He said the company plans to have it ready to ship in December, in time for the holidays."},
      { p: "“We are calling it Muse Charm, and we’re going to have more details to share on this one soon,” Zuckerberg said. The gadget is part of Zuckerberg’s larger vision for Muse, which he described as eventually becoming a “personal superintelligence” used by billions of people. “I expect that Muse is going to grow into the personal superintelligence that billions of people around the world are going to use to accomplish their goals and improve their lives,” he said.Zuckerberg said Muse will include features such as goal-setting, personalized research and customizable characters and personalities. He also said each Muse will have its own private and secure computer. Meta also unveiled new VR glasses during the event. Zuckerberg described the device as offering “a private cinema, a computer with multiple monitors and a game console in a pair of glasses,” adding that the glasses will be priced at $1,299 and are expected to ship in the spring. The announcements come as increasingly advanced AI technology faces scrutiny over its potential risks. On Sept. 8, Jacob Coxon, a researcher who spent three years training emerging AI models at Anthropic, announced his departure from the company and warned that self-improving AI could pose an existential threat. “The people building AI earnestly believe that it could kill us all by the end of the decade,” Coxon wrote on social media. Evan Hubinger, a team lead at Anthropic, responded to Coxon’s comments, writing, “Jacob is correct here—we really do earnestly believe AI could kill all humans!” Hubinger added that he personally believed there was a greater than 10% chance of that happening within the next decade."}
    ]
  },
  {
    id: "error",
    image: "images/security-error.jpg",
    type: "blog",
    category: "security",
    title: "PamStealer macOS Malware Adds Live C2 Payload Decryption and Multi-Layer Persistence",
    excerpt: "Cybersecurity researchers have flagged a new version of PamStealer that ensures that the main payload can only be recovered using a server-side decryption chain.",
    author: "Ravie Lakshmanan",
    date: "2026-09-25",
    tags: ["Phones", "Battery", "Hardware"],
    body: [
      { p: "The latest artifacts, per Jamf Threat Labs, continue to rely on the same JavaScript for Automation (JXA) dropper mechanism, but modify the lure and the delivery method."},
      { p: "Where earlier variants embedded their payload key material directly in the JXA source, it now fetches a purpose-built decryption utility and completes a key exchange with the server before the payload can be unwrapped, security researcher Thijs Xhaflaire said in an analysis. Without the server's cooperation, the payload cannot be recovered statically."},
      { p: "A second major change is the choice of the decoy itself. While previous versions observed in July and August 2026 were observed using fake websites masquerading as Maccy, Scoppr, and Nancy Clipboard, victims are now lured through a bogus website (wavel[.]app) advertising a non-existent cryptocurrency wallet service named Wavel."},
      { p: "Clicking the Download for macOS button on the fake site leads to the retrieval of a disk image file (Wavel.dmg) that contains a compiled AppleScript file. Opening the file launches Apple's built-in Script Editor with instructions to trigger the execution of a JXA dropper."},
    ]
  },
  {
    id: "zero-day",
    image: "images/security-zero-day.jpg",
    type: "news",
    category: "security",
    title: "Warning: Two Unpatched Citrix NetScaler RCE Zero-Days Under Active Exploitation",
    excerpt: "Citrix said in its bulletin that the two exploited flaws are:",
    author: "Swati Khandelwal",
    date: "2026-09-27",
    tags: ["Security", "Passkeys", "Privacy"],
    body: [
      { p: "Two critical vulnerabilities in Citrix NetScaler ADC and NetScaler Gateway that allow remote code execution have been exploited in the wild, Citrix confirmed on September 27. It released fixes for both, along with six other flaws. One of the two affects every deployment on an affected version, including those in the default configuration."},
      { p: "The bulletin came a day after security firm watchTowr said two unpatched NetScaler RCE flaws had been exploited, and after some administrators said they had taken appliances offline. Citrix did not say whether its two flaws are the ones watchTowr described, but they match that account."},
      { p: "NetScaler ADC and NetScaler Gateway sit at the edge of enterprise networks, where they handle VPN and remote access, load balancing, and user authentication."},
      { p: "Citrix said in its bulletin that the two exploited flaws are:"},
      { list: [
        "CVE-2026-88771 (CVSS v4 score: 9.5) - An improper input validation flaw that lets an unauthenticated attacker run arbitrary commands. It affects all NetScaler ADC and NetScaler Gateway deployments, with no extra feature required.",
        "CVE-2026-88772 (CVSS v4 score: 9.5) - A memory overflow that can lead to remote code execution or denial-of-service (DoS). It affects appliances with DTLS enabled. DTLS is on by default for VPN virtual servers, so a NetScaler Gateway is affected unless DTLS has been explicitly turned off."
      ]
      },
    ]
  },
  {
    id: "oracle",
    image: "images/security-oracle.jpg",
    type: "news",
    category: "security",
    title: "Attackers Bypass WAFs to Exploit Oracle PeopleSoft Flaw and Deploy Web Shells",
    excerpt: "Google is warning of renewed mass exploitation of a known security vulnerability in Oracle PeopleSoft as part of a campaign targeting multiple sectors globally.",
    author: "Ravie Lakshmanan",
    date: "2026-09-26",
    tags: ["Security", "Passkeys", "Privacy"],
    body: [
      { p: "The ShinyHunters-linked activity involves the weaponization of CVE-2026-35273 (CVSS score: 9.8), a critical security flaw that could result in unauthenticated remote code execution."},
      { p: "The vulnerability was first exploited as a zero-day in attacks against academic institutions to conduct reconnaissance, deploy remote access software like MeshCentral agent for persistence, move laterally over SSH, run a shell script to connect via SSH to other internal PeopleSoft machines using known username/password combinations, and steal data."},
      { p: "At that time, Google-owned Mandiant said it initiated notifications to over 100 global organizations whose IP addresses matched vulnerable endpoints, most of them located in the U.S."},
    ]
  },
  {
    id: "coding",
    image: "images/security-coding.jpg",
    type: "blog",
    category: "security",
    title: "ThreatsDay: AI Search Poisoning, AI Coding Tool Leaking Repos, One-Click Code Execution and 13 More Stories",
    excerpt: "This week, the dangerous stuff keeps arriving dressed as something boring. An update. A login box. A search answer. A coding tool. A link you have clicked a hundred times before.",
    author: "Ravie Lakshmanan",
    date: "2026-09-24",
    tags: ["Security", "Passkeys", "Privacy"],
    body: [
      { p: "That is the thread running through the pile. Trusted paths get poisoned. Old bugs find new jobs. AI tools leak more than expected. Fake prompts look real enough. And some attacks barely need an exploit at all — just one weak setting or one person doing what the screen tells them."},
      { p: "Nothing here looks especially dramatic. That is what makes it useful."},
      { h: "AI-Assisted Banking Trojan"},
      { h: "RemControl Android Banking Trojan Targets Western Europe, the Middle East, and Canada"},
      { p: "A previously undocumented Android banking trojan dubbed RemControl is targeting retail banking customers across Western Europe (Italy, France, Spain, Poland, Portugal), the Middle East, and Canada. The malware is distributed via fake Google Play Store pages impersonating the TVTap IPTV application. Users are directed to the web page through Meta ads. It was first observed in July 2026. The malware abuses Android's Accessibility Service to inject phishing overlays over legitimate banking applications, stream the device screen in real time, log keystrokes, and provide the operator with full remote control over infected devices, Group-IB said. C2 address is resolved dynamically through an encrypted Telegram dead-drop, making infrastructure rotation straightforward without recompiling the malware. Both the operator panel documentation and phishing overlays contain artifacts of AI-assisted development, including a complete AI assistant response left verbatim in a live phishing page served to banking victims. The presence of Russian-language code comments in multiple overlay HTML files indicates the involvement of a Russian speaker. Overlapping campaign naming conventions, delivery mechanisms, the use of Telegram dead-drop and affiliate tag similarities suggest a possible link to the Medusa UNKN affiliate botnet."},
    ]
  },
  {
    id: "st-app",
    image: "images/software-apps.jpg",
    type: "news",
    category: "software",
    title: "Tokenomics: Why making AI pay is tricky",
    excerpt: "If you have used a free version of ChatGPT or any of its AI rivals, then you are obviously getting a good deal.",
    author: "Joe Fay",
    date: "2026-08-11",
    tags: ["Open source", "Programming", "Beginners"],
    body: [
      { p: "Firms like Microsoft, Google and Anthropic have invested hundreds of billions of dollars in developing Large Language Models (LLMs) the tech behind those services."},
      { p: "So getting ChatGPT, Claude or Gemini to help with your speech or holiday plans is a bargain."},
      { p: "But, naturally, those firms want to recoup their investment, so they offer paid-for versions of their AI, which have extra features for tasks like coding or billing."},
      { p: "Meanwhile, third party firms are building and selling services based on AI agents, usually based on an LLM, which are trained to do specific tasks."},
      { p: "But setting a price for those services is surprisingly difficult."},
      { p: "Trying to tie someone into a cost model for the next 12 months, two years, three years, it doesn't make any sense, honestly, because we don't know, says Simon Gooch at Saviynt, an identity management company which is incorporating agentic AI into its services."}
    ]
  },
  {
    id: "st-women",
    image: "images/software-women.jpg",
    type: "news",
    category: "software",
    title: "Software firm's new £30m HQ aims to boost growth",
    excerpt: "An industrial software company hopes a new £30m investment in its new headquarters will support future growth.",
    author: "Janine Machin and Aimee Dexter",
    date: "2026-05-7",
    tags: ["Open source", "Programming", "Beginners"],
    body: [
      { p: "Aveva said its research and development centre expansion would open at the Cambridge Science Park next year, coinciding with its 60th year of operation."},
      { p: "Its software aims to help companies design and run complex sites - like manufacturing facilities, oil rigs and ships - more efficiently."},
      { p: "It is about a fit-for-purpose, highly sustainable building that we can consolidate teams in today, and create room for future growth, said Caoimhe Keogan, Aveva's chief people officer"},
      { p: "We are very committed to Cambridge; we have access to great talent and we think it is a great home for innovation."},
      { p: "The company grew out of Cambridge University in the 1960s - pioneering 3D design - and has since worked with abound 25,000 companies including AstraZeneca, Michelin, Starbucks and Scottish Power."},
      { p: "About 500 of the company's 10,000 global staff are based across its two sites in Cambridge - at the Science Park and at Madingley Road."},
    ]
  },
  {
    id: "st-computer",
    image: "images/software-computer.jpg",
    type: "news",
    category: "software",
    title: "Deal moves software firm closer to $1bn 'unicorn' status",
    excerpt: "Cloudsmith, a Belfast software company, has received a £50m investment led by two US venture capital firms.",
    author: "John Campbell",
    date: "2026-04-23",
    tags: ["Open source", "Programming", "Beginners"],
    body: [
      { p: "It is the largest deal of this kind ever done by a Northern Ireland-based technology company and the investment will be used to increase hiring and accelerate software development. The company currently has 130 staff, mainly based in Belfast."},
      { p: "The size of the investment suggests Cloudsmith is on its way to unicorn status - a $1bn valuation."},
      { p: "We're not quite a unicorn yet, but we're close, the firm's chief executive Glenn Weinstein said"},
      { p: "Watch this space because Cloudsmith is clearly headed to that territory, he told BBC News NI."},
      { p: "The funding round was led by California-based TCV, whose notable investments include Facebook and Airbnb."},
      { p: "New York-based Insight Partners and other existing backers have also reinvested."},
      { p: "Cloudsmith was founded by Alan Carson and Lee Skillen who worked for the New York Stock Exchange technology operation in Belfast."}
    ]
  },
  {
    id: "pokemon",
    image: "images/gaming-pokemon.jpg",
    type: "news",
    category: "gaming",
    title: "Pokémon Champions review: Peak monster battling",
    excerpt: "If you want to be the very best, Pokémon Champions is your new arena.",
    author: "Sam Rutherford",
    date: "2026-08-28",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { p: "I've been playing Pokémon since Red and Blue first arrived in the US nearly 30 years ago. But somehow during all of that time, I never really got into the competitive side of monster battling. You see, during the heyday of the original Game Boy titles, winning matches on the playground routinely amounted to stacking your team with as many legendaries as possible. The biggest tryhards often showed up with multiple Mewtwos. And when I checked in on the scene in later generations, I was turned off by Smeargles spamming Baton Pass (and later Dark Void) and the massive time sink that was required to field a competitive roster. This caused me to write off the competitive aspect of Pokémon almost entirely."},
      { p: "When Pokémon Champions came out earlier this summer, I decided to give it a shot. It immediately unlocked a newfound love and appreciation for the PVP side of the turn-based combat system Nintendo and Gamefreak pioneered way back in 1996."},
    ]
  },
  {
    id: "azus-gaming",
    image: "images/gaming-azus.jpg",
    type: "news",
    category: "gaming",
    title: "ASUS ROG Zephyrus Duo review: Outrageously expensive, totally awesome",
    excerpt: "My wallet is saying no, but my heart is saying yes.",
    author: "Sam Rutherford",
    date: "2026-04-27",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { p: "When you're buying a laptop and trying to figure out how to spec it, there's a line you sometimes cross after you make sure all your core requirements are met. You start adding things that are just nice to have, like extra memory and more storage. However, with the ROG Zephyrus Duo, it feels like ASUS is trying to push that boundary into another dimension because there isn't really a situation where a $4,500 gaming notebook with dual OLED displays and up to an RTX 5090 GPU can really be considered a normal desire."},
      { p: "That's precisely what I like about what might be ASUS' wildest laptop to date. Even though this thing is outrageously expensive, it's also a fantastic example of the glorious overkill you get when a company focuses on making something that's more powerful than practical."},
    ]
  },
  {
    id: "gaming-game",
    image: "images/gaming-game.jpg",
    type: "news",
    category: "gaming",
    title: "MSI Claw 8 EX AI+ review: Big money for big performance",
    excerpt: "$1,800 for a handheld gaming PC is a ton of money, even if it comes with massive gains in horsepower.",
    author: "Sam Rutherford",
    date: "2026-06-23",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { p: "Unlike most of its rivals, MSI aligned itself with Intel instead of AMD when it made last year's Claw 8. The result was one of the most powerful PC gaming handhelds of its generation. For its latest endeavor, MSI partnered up with Team Blue again to incorporate an even beefier chip, the Arc G3 Extreme, which Intel says has been customized explicitly for portable gaming PCs. So not only is this handheld even faster, it offers smoother performance and better endurance. However, at $1,800, the new Claw 8 EX AI+ is also one of the most expensive portables from any mainstream PC manufacturer, which makes you question if the never-ending quest for higher frame rates is really worth the asking price."},
      { p: "Editor's Note: This review was performed using an engineering sample provided by Intel and required us to install pre-production software and drivers, so our experience may differ slightly from retail models."},
    ]
  },
  {
    id: "ps5",
    image: "images/gaming-ps5.jpg",
    type: "blog",
    category: "gaming",
    title: "What type of power cord does a PS5 use?",
    excerpt: "If you ever need to replace the cord, you can use (some) old PlayStation cables or get a certified replacement.",
    author: "Gabriela Vătu",
    date: "2026-09-20",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { h: "We may receive a commission on purchases made from links."},
      { p: "If you've ever unplugged your PS5 to move furniture around or properly clean your entertainment center, you might have examined the console's power cord. After all, it's good to check cables for signs of damage every so often. This might lead you to consider grabbing an extra cord as a backup, or maybe you want to plug your PS5 in by another TV without moving the existing cable around all the time."},
      { p: "As it turns out, not just any cable will do the trick when it's time to plug your PS5 in. Understanding your PS5's power cord isn't just a matter of curiosity, as it impacts your console's safety and performance. If you use the wrong one, you risk anything from your PS5 not turning on to a fire hazard."},
      { p: "The good news is that all PS5 models use a cable type found in millions of households already, which means replacements are easy to find. However, just because these cables are common doesn't mean they're safe to use without checking the specs first. Let's break down exactly what cord your PS5 needs and how it stacks up against previous PlayStation models, as well as where to get a replacement if your pets chew on it."},
    ]
  },
  {
    id: "amazon",
    image: "images/gaming-amazon.jpg",
    type: "blog",
    category: "gaming",
    title: "Amazon is severing ties with two other MMOs",
    excerpt: "The company is handing off Lost Ark and Throne and Liberty to other publishers.",
    author: "Ian Carlos Campbell",
    date: "2026-08-12",
    tags: ["Gaming", "Streaming", "Internet"],
    body: [
      { p: "After announcing plans to wind down its MMO New World: Aeternum in October 2025, Amazon has shared that it'll also no longer publish MMOs Lost Ark and Throne and Liberty in the west, according to PC Gamer. While Amazon won't be publishing either game, they will continue to be available in western markets. Publishing responsibilities will now fall to NC, who will be the publisher for Throne and Liberty starting Q4 2026, and Smilegate, who will become the publisher of Lost Ark in early 2027."},
      { p: "Per a Throne and Liberty blog post announcing the change, most important content like characters and in-game currency should transfer over, though NC (through its subsidiary FireSpark Games) is still determining whether things like items in the game's Auction House will make the jump. In the case of Lost Ark, players will lose access to things like in-game mail and chat history, according to a blog on the game's website."},
      { p: "Both MMOs remaining active for existing players is a much more positive outcome than Amazon's own New World got. That game will officially be shut down on January 31, 2027. The company confirmed it had ended development on a separate Lord of the Rings MMO in May 2026. Once Lost Ark and Throne and Liberty are handed off, Amazon will officially be out of the MMO game, a business it first entered in 2016 when New World was announced."},
      { p: "Outside of bigger IP gambles like 007 First Light (which Amazon joined after its acquisition of the James Bond franchise) and Tomb Raider Catalyst, the company is focused on creating casual games for Luna. Amazon's streaming games subscription is now mostly pitched as one of the many benefits of Amazon Prime, and has a number of party games you can play with a smartphone."},
    ]
  },
  {
    id: "sc-starlink",
    image: "images/sc-starlink.jpg",
    type: "news",
    category: "science",
    title: "Elon Musk Projects Starlink Constellation Will Deliver Majority of Global Internet Traffic Within a Decade",
    excerpt: "On Sept. 23, 2026, SpaceX Chief Executive Officer Elon Musk forecasted that the Starlink low Earth orbit (LEO) satellite network could transport the majority of total global internet traffic within ten years.",
    author: "donmcgee",
    date: "2026-09-25",
    tags: ["Satellites", "Internet", "Space"],
    body: [
      { p: "The long-term projection relies on scaling next-generation Starlink V3 satellites, including specialized Starmind orbital data center variants currently undergoing regulatory review by the Federal Communications Commission (FCC)."},
      { h: "Constellation Scale and Enterprise Revenue Trajectory"},
      { p: "The decade-horizon prediction coincides with rapid financial growth across SpaceX’s enterprise satellite division. Driven by corporate broadband contracts, aviation connectivity agreements, and maritime deployments, SpaceX’s enterprise revenue surged by 108 percent year-over-year."},
      { p: "To support expanding global internet demand, SpaceX has systematically scaled its low Earth orbit infrastructure. By maintaining high-frequency Starship launch campaigns alongside dedicated Falcon 9 rideshare flights, the operator has deployed thousands of operational spacecraft into low Earth orbit. This orbital density provides continuous broadband coverage across rural, maritime, and aerospace sectors previously underserved by terrestrial fiber networks."},
      { p: "Transitioning from localized consumer broadband to carrying a primary share of global internet traffic represents a structural shift in telecommunications architecture. Historically, international internet traffic has moved almost exclusively through subsea fiber-optic cables, with satellite links handling specialized backhaul and remote connectivity."},
      { h: "Next-Generation V3 Hardware Architecture and Starmind Capabilities"},
      { p: "Achieving the projected traffic throughput depends on fielding SpaceX’s upgraded V3 satellite platform, which is engineered to deliver a 100-fold increase in usable network bandwidth compared to early-generation Starlink spacecraft."},
      { p: "The Starlink V3 architecture incorporates enlarged physical dimensions, high-capacity solar arrays, and optical inter-satellite laser links designed to route terabits of data directly through space without relying on intermediate ground stations."},
      { p: "A key subset of the V3 architecture includes the Starmind orbital platform. Designed as 4,000-kilogram (4 metric ton) orbiting data centers, Starmind satellites integrate high-density artificial intelligence compute hardware directly into space. By executing onboard data processing and intelligent traffic routing in orbit, Starmind platforms reduce latency and eliminate ground relay bottlenecks for enterprise and consumer network traffic."},
      { p: "SpaceX recently submitted detailed safety and thermodynamics documentation to the FCC to demonstrate that the 4-ton Starmind satellites meet NASA Debris Assessment Software standards for atmospheric demise upon operational retirement."},
      { h: "Executive Perspective"},
      { p: "“Starlink will deliver the majority of the world’s internet within ten years,” said SpaceX Chief Executive Officer Elon Musk. “This scale will be driven by a 100x bandwidth increase from our V3 satellites, including the Starmind computing versions currently awaiting examination and approval by the FCC.”"},
      { h: "Regulatory Roadmap and Infrastructure Deployment Horizon"},
      { p: "SpaceX is coordinating with the Federal Communications Commission’s Space Bureau to secure final operational authorization for the Starmind V3 constellation tranche. Following regulatory clearance, SpaceX plans to initiate initial Starship flight integration campaigns for V3 hardware, expanding orbital transmission capacity and edge-computing infrastructure through late 2026 and 2027."}
    ]
  },
  {
    id: "sc-star",
    image: "images/sc-star.jpg",
    type: "news",
    category: "science",
    title: "Space Development Agency Issues $369 Million Solicitation for Global Missile Tracking Ground Entry Points",
    excerpt: "On Sept. 22, 2026, the Space Development Agency (SDA) issued a formal request for proposals (RFP) valued at $369 million to procure next-generation ground communications infrastructure for its missile warning and tracking satellite constellation.",
    author: "SatNews Staff",
    date: "2026-09-22",
    tags: ["Satellites", "Internet", "Space"],
    body: [
      { p: "Titled the Resilient Missile Warning and Tracking LEO Ground Entry Points (GEP) program, the contract covers the engineering, installation, system integration, testing, and multi-year maintenance of worldwide ground stations."},
      { h: "PWSA Program Context and Incumbent Operations"},
      { p: "The ground infrastructure procurement supports the expansion of the SDA’s Proliferated Warfighter Space Architecture (PWSA), a multi-tranche Low Earth Orbit (LEO) constellation designed to deliver persistent missile warning, tracking, and beyond-line-of-sight tactical communications. The space layer incorporates hundreds of optically linked satellites in low Earth orbit to detect and track advanced hypersonic glide vehicles and regional ballistic missile threats."},
      { p: "General Dynamics Mission Systems holds the primary ground integration contract for the PWSA Tranche 1 and Tranche 2 operational layers, managing baseline ground station software, command-and-control interfaces, and entry terminals."},
      { p: "As the SDA transitions from initial orbital testing to full operational capability across Tranche 1 and Tranche 2 missile tracking layers, the agency requires a expanded network of distributed Ground Entry Points to prevent data bottlenecks, lower latency, and ensure continuous downlinks to tactical warfighters."},
      { h: "RFP Technical Specifications and Ground Network Architecture"},
      { p: "The $369 million procurement will establish a geographically redundant ground reception network capable of processing continuous, high-volume telemetry and infrared tracking data streamed from LEO tracking satellites."},
      { list: [
        "Total Solicited Contract Value: $369 million",
        "New Facility Construction: Five to eight newly constructed Ground Entry Point (GEP) sites worldwide",
        "Facility Upgrades: Modernization and hardware retrofits for one to four existing ground stations",
        "Core Contractor Scope: End-to-end design, site preparation, antenna installation, software integration, system testing, and global maintenance operations",
        "Primary System Target: Proliferated Warfighter Space Architecture (PWSA) missile warning and tracking satellite layers"
      ]},
      { p: "The distributed layout guarantees that orbiting tracking satellites retain line-of-sight contact with multiple ground entry nodes simultaneously, enabling automated data routing if an individual station suffers operational disruptions or cyber interference."},
      { h: "Threat Environment and Network Resilience Rationale"},
      { p: "The expansion of dedicated Ground Entry Points addresses survivability requirements for military space architecture. Legacy defense satellite networks relied on a limited number of high-capacity fixed ground stations, creating potential single-point failures vulnerable to physical attack, electronic jamming, or localized weather disruptions."},
      { p: "By distributing downlinks across up to twelve global GEP sites, the SDA ensures that missile tracking data captured by LEO infrared sensors can be downlinked instantly to theater operational centers and regional air defense units. The multi-region footprint integrates with high-throughput optical ground terminals and S-band tracking interfaces to preserve real-time target tracking for hypersonic defense batteries."},
      { h: "Procurement Schedule and Contract Award Timeline"},
      { p: "Defense contractors will submit formal proposals through the end of late 2026, with the SDA expecting to finalize source selection and award the prime integration contract in early 2027. Site survey campaigns, civil construction, and ground terminal installations will proceed on an accelerated schedule to align with upcoming PWSA Tranche 2 launch manifests."}
    ]
  },
  {
    id: "gemini",
    image: "images/gemini.jpg",
    type: "blog",
    category: "ai",
    title: "A native Gemini app is finally available for Windows PCs",
    excerpt: "There's a keyboard shortcut to open it up, just like the Mac version.",
    author: "Lawrence Bonk",
    date: "2026-09-10",
    tags: ["AI", "Explainer", "Chatbots"],
    body: [
      { p: "Google has finally released a native Gemini app for Windows 10 and 11. This provides a streamlined way to use the AI tools on Windows PCs and follows a Mac release earlier this year."},
      { p: "Once downloaded, users can pull up the Gemini app via a keyboard shortcut, just like how it works on Mac computers. The company says this is great when people need a quick fact-check on a document or a few catchy title ideas for a presentation. I would recommend fact-checking that fact-check because, you know, it's generative AI."},
      { p: "The app integrates with other Google AI products, so tasks can be sent to the agentic assistant Gemini Spark. It even works with stuff like Gmail and Google Drive. It can also generate images and videos via Nano Banana and Gemini Omni, if that's your bag."},
      { p: "Google promises the app is lightweight and quiet, so it won't slow down Windows PCs. It's available for download right now and the company says more native desktop capabilities are coming down the pike in the future."},
    ]
  },
  {
    id: "claude-ai",
    image: "images/claude-clear.jpg",
    type: "blog",
    category: "ai",
    title: "Claude can help manage your email inbox, but there are some risks involved",
    excerpt: "You might be better off sorting through your 12,000 emails yourself, but you do you.",
    author: "Isaac Egbon",
    date: "2026-09-6",
    tags: ["AI", "Explainer", "Chatbots"],
    body: [
      { p: "When you stop to think, it's incredible how far AI has come in the past four years. From repeatedly failing the how many r's are in strawberry test to being able to generate highly realistic films in minutes. And now, Claude is apparently good enough to fully manage your Gmail inbox, including sending, replying to and forwarding emails on your behalf without your approval."},
      { p: "In its rapid rise, the AI has seen more than its fair share of epic fails; just a short while ago, OpenClaw ignored instructions and deleted Meta Superintelligence Lab AI security and safety researcher Summer Yue's emails. Clearly, the tech is far from being fail-proof. So handing over something as important as your inbox to Claude obviously comes with its risks, especially now that it can take serious actions like writing and sending emails without your approval (if you allow it to)."},
      { p: "Some of the most apparent risks include the possibility of the AI hallucinating false info into an email and sending it before you catch it, Claude misunderstanding a request and sending or forwarding something you never meant, or even more sinister, a hidden prompt in an incoming message hijacking it into acting on an attacker's instructions. And these risks aren't theoretical; they've actually happened. Thankfully, Claude can't permanently delete any email, but it can trash or archive them."},
      { h: "Risks of allowing Claude to manage your inbox"},
      { p: "Let's start off with the most dire risk: prompt injection hijacking the agent from inside the email. In plain terms, an attacker could stealthily give Claude instructions by sending an email to you and embedding it with invisible text (white-on-white, zero font size) so that it doesn't show up in the message you see, but Claude can read and take instructions from it. Hackers can use this to not only monitor your Gmail, but also pull your info, including verification codes to breach your other accounts. Prompt injection hacking is proven, not just hypothetical. Claude even warns about it when you first allow it to send emails. Not every risk requires an attacker. Because it's so seamless to ask Claude to send emails on your behalf, the risk of sending an email with errors is a big one. When you ask Claude to send an email for you, it goes straight into thinking and sends the email. What makes this so risky is you don't get to see or work on the email before it's sent unless you have the right setting enabled; the AI drafts and sends the email all by itself. So, if there's a mistake in that email, there's a high chance your recipient will discover it before you. Unfortunately, a bunch of things can push Claude to make a mistake — from flat-out hallucinating false information to simply misunderstanding what you meant. Even if Claude itself doesn't make a mistake, there are always the privacy concerns of trusting Claude and Anthropic with all the data in your inbox."},
      { h: "How to mitigate the risks of Claude managing your inbox"},
      { p: "The first and most important step in mitigating the risks is to keep approval turned on. Your inbox is too sensitive to let an AI do and send what it thinks is best. So leave the default ask before sending behavior active; this way you can review any action before it executes."},
      { p: "Second, when you ask Claude to take action in your email, be very specific in your instructions. Tell Claude what exactly you want it to do or say. For example, rather than using vague prompts like send HR an email explaining my absence, include as much detail as possible. Doing this makes it much harder for Claude to misunderstand or misinterpret your instructions."},
      { p: "If you're worried about prompt injection hacking, unfortunately, there's no way to eliminate it completely. Simon Willison, who coined the term prompt injection, says, we still don't know how to 100% reliably prevent this from happening, and experts remain split on whether it's even solvable yet."},
      { p: "Your best defense is still keeping approval on, since it'll make Claude ask for your approval before taking any action. Staying cautious with unfamiliar senders and enabling multi-factor authentication (MFA) elsewhere help too, but there's still a significant level of risk."},
    ]
  },
  {
    id: "ai-photos",
    image: "images/ai-photos.jpg",
    type: "blog",
    category: "ai",
    title: "Google Photos' new Redact tool will make it easy to hide sensitive information",
    excerpt: "It's one of many new features in the app.",
    author: "Mariella Moon",
    date: "2026-09-24",
    tags: ["AI", "Explainer", "Chatbots"],
    body: [
      { p: "Google has listed some of its latest AI-powered updates for the Photos app, and they include a new Redact tool that lets you blur sensitive information and anything else you want in your images. Say, you have a picture of a vehicle and want to censor its plate number — just use Redact to turn that portion of the image into a pixelated block. Redact is part of Photos' upgraded Markup feature, which now also offers new fonts and precise thickness sliders for pens and highlighters. The new Markup tools are rolling out to all Google Photos users on Android worldwide. In addition, the company has announced that the app's Wardrobe feature is rolling out to more people. If you don't have access to it yet, you will have it soon if you're an Android or iOS user in the US, India or Brazil. You can use Wardrobe to create a catalog of your clothes and jewelry from the images in your library, which you can then consult for styling ideas. "},
      { p: "Google has also revisited Photos' availability within Gemini Spark, which will let you find and edit images with a single prompt if you're a Google AI Pro or Ultra subscriber in the US. If you're on Android, you'll be able to apply vintage-inspired filters to your photos with the Moods feature. On both Android and iOS in select countries, you'll now see 15 new Remix templates that can use your likeness to create red carpet images and photo booth shots for you."},
    ]
  },
  {
    id: "ai-avatar",
    image: "images/ai-avatar.jpg",
    type: "blog",
    category: "ai",
    title: "Google adds creepy avatars to Gemini 3.8 live's agents",
    excerpt: "Like it or not, they may be doing customer service or sales support in the future.",
    author: "Steve Dent",
    date: "2026-09-25",
    tags: ["AI", "Explainer", "Chatbots"],
    body: [
      { p: "Last week Google launched Gemini 3.8 Live and Live Extended Thinking models, touting them as the company's most advanced live dialogue models yet. The idea, it said, was to give developers and enterprises... building blocks for reliable, production ready voice agents. It also made speaking back to Gemini more natural, so users can do complex tasks with voice commands."},
      { p: "Now, Google has added video to that formula with Gemini 3.8 Live with Live Avatar. It pairs near real-time visual presence to the live dialogue models, creating an experience that listens, sees and speaks with a dynamic visual persona. In a nutshell, these are avatars designed to do things like sales support and customer service, so you may be interacting with them in the near future."},
      { p: "In several videos in the blog, Google shows both realistic and cartoon-like Avatars. They can do things like precise lip-syncing, natural expressions and  fluid turn-taking. Using them, the company says, will enable natural, multimodal conversations by allowing the avatars to communicate using facial expressions while also looking, listening and speaking. The avatars are backed by Gemini's advanced reasoning, allowing Live Avatar to trigger tool calls and fetch data in the background while continuing an active dialogue. "},
      { p: "Google will offer a library of diverse, preset avatars, or organizations can customize their own from high-quality reference images to preserve reference likeness, brand styling or character identity. Those are only available through enterprise allowlisting, the company added. The Live Avatars are also built with strict safeguards designed to respect identity and keep AI-generated "},
    ]
  },
  {
    id: "study-ai",
    image: "images/study-ai.jpg",
    type: "blog",
    category: "students",
    title: "Google Expands AI Study Notebooks for Students",
    excerpt: "Artificial intelligence is becoming a bigger part of how students study, and Google is expanding its AI-powered study tools to more users.",
    author: "Google for Education",
    date: "2026-09-22",
    tags: ["Coding", "Students", "Learning"],
    body: [
      { p: "Google's Study notebooks are designed to help students learn in a more personalized way. Students can create a study notebook in the Gemini app, choose what they want to learn, and upload class materials such as notes, reading materials, or other study resources."},
      { p: "The system can then create quizzes to identify areas where the student may need more practice. Based on those results, it can provide shorter lessons and practice questions focused on the student's learning needs."},
      { p: "Another feature is progress tracking. Students can see which topics they are doing well in and which areas may need more attention. This gives students a way to organize their study sessions instead of simply asking an AI chatbot random questions."},
      { p: "Google says Study notebooks can also be used for exam preparation. The company has been adding support for standardized tests and plans to expand the types of exams available."},
      { p: "As of September 2026, Google has also made Study notebooks available to users signed into eligible school or work Google accounts when the feature is enabled by an administrator."},
      { p: "AI study tools like these could give students another way to review lessons and practice difficult topics. However, students still need to check information and use these tools as support for learning rather than relying on AI to do all of their work."},
    ]
  },
  {
    id: "study-security",
    image: "images/study-security.jpg",
    type: "blog",
    category: "students",
    title: "Researchers Warn: Passkey Phishing Attacks Are Leading to Cloud Account Takeovers",
    excerpt: "In an active social engineering campaign",
    author: "Sean Parker",
    date: "2026-09-16",
    tags: ["Coding", "Students", "Learning"],
    body: [
      { p: "In an active social engineering campaign, attackers are impersonating IT help desks and using fake passkey setup requests to compromise employee identities and gain access to enterprise cloud data.In a recent blog post, Microsoft Security Research said it has observed the activity since May 2026 across multiple compromised accounts. The attacks have included unusual sign-ins, attacker-added authentication methods, high-volume Microsoft Graph activity, SharePoint and OneDrive downloads, and e-mail collection through REST APIs. The attacks often begin with a phone call or message sent to an employee's personal phone. "},
      { p: "The attacker poses as someone from the organization's IT help desk and tells the victim that a passkey, multifactor authentication (MFA), or single sign-on configuration needs to be updated to avoid disruption. Victims are then directed to a website designed to resemble a legitimate Microsoft sign-in experience. Microsoft has also observed links being delivered through SMS messages and, in some cases, through Microsoft Teams messages sent from already compromised employee accounts. Despite the passkey-themed approach, the tech company stressed that enrolling a passkey is generally not the attacker's actual objective. "},
      { p: "Instead, the request provides a pretext for directing victims through adversary-in-the-middle phishing or device-code authentication. An adversary-in-the-middle attack can capture credentials and session tokens, while device-code phishing can trick a victim into authorizing access for an attacker-controlled client. In one attack investigated by the tech giant, an anomalous sign-in from an unmanaged device was followed by access to identity and application management services. The attacker then used SharePoint Online and OneDrive to enumerate sensitive files, primarily through Microsoft Graph. The sessions persisted for roughly an hour while the attacker searched for sensitive files and internal applications. "},
      { p: "Gaining initial access isn't necessarily the end of the identity attack. Microsoft found attackers registering new authentication methods, including phone numbers, authenticator apps, and software-based one-time password tokens, under their control. That gives the attacker another way to satisfy future authentication challenges and helps turn an initial compromise into a more persistent foothold. From there, attackers have used Microsoft Graph to map users, groups, permissions, applications, and accessible content across compromised tenants. "},
      { p: "The firm says the activity can eventually progress to accessing mail, files, attachments, and other document content. Microsoft attributed initial access activity associated with the campaign to multiple threat actors, including Storm-3121 and Storm-3032. Storm-3121 conducts initial access activity that can lead to ShinyHunters and Falcon extortion, while Storm-3032 represents actors that split from the BlackFile group and now operate under the Helix extortion banner. For administrators, Microsoft recommends enforcing phishing-resistant MFA such as FIDO2 passkeys and Windows Hello for Business through Conditional Access. "},
      { p: "Organizations should also consider blocking device-code and authentication-transfer flows where they aren't required and investigate unusual sign-ins followed by new authentication methods, Graph reconnaissance, and abnormal SharePoint, OneDrive, or mailbox activity. The campaign highlights an important distinction for organizations adopting passkeys: The attackers aren't necessarily defeating the technology. They're convincing employees that they need help setting it up, then using that trust to compromise their identities."}
    ]
  },
  {
    id: "study-student",
    image: "images/study-student.jpg",
    type: "blog",
    category: "students",
    title: "Students Are Using More Educational Technology, But Does It Improve Learning?",
    excerpt: "Technology is becoming a bigger part of how students study and complete schoolwork. Students now use educational apps, AI tools, online learning platforms, and digital resources for many different types of school activities.",
    author: "Education Week",
    date: "2026-09-4",
    tags: ["Coding", "Students", "Learning"],
    body: [
      { p: "However, a recent report from the American Psychological Association says that simply spending more time using educational technology does not necessarily mean students are learning more."},
      { p: "The report recommends that schools and families look at whether a technology tool actually helps students understand and remember what they learn. Instead of measuring success by how long students use an app or how much they enjoy it, educators should consider whether students can explain the material and use their knowledge outside the app."},
      { p: "The report also highlights that technology can be particularly useful when it supports activities such as retrieving information from memory, receiving helpful feedback, reviewing material over time, and applying knowledge to new problems."},
      { p: "For students, this means that educational technology can be a useful part of studying, but the tool itself is not the whole solution. Students still need to think, practice, and understand the material instead of depending completely on an app."},
      { p: "As educational technology continues to develop, students may have access to more powerful digital learning tools. The important question will be whether those tools actually help students learn and use their knowledge in the real world."},
      { p: "Source: Education Week, “Students’ Tech Engagement Doesn’t Equal Learning, Psychologists Warn,” September 4, 2026."}
    ]
  },
  {
    id: "study-learn",
    image: "images/study-learn.jpg",
    type: "blog",
    category: "students",
    title: "New California Law Strengthens Student Data Privacy",
    excerpt: "Students use technology every day for schoolwork, including learning platforms, education apps, and AI-powered tools. As more student information moves online, protecting that data has become an important technology issue.",
    author: "CalMatters",
    date: "2026-09-11",
    tags: ["Coding", "Students", "Learning"],
    body: [
      { p: "California has passed a new law that introduces stricter rules for technology companies handling student information. The law is aimed at limiting how companies collect, use, and share data belonging to students."},
      { p: "One important part of the law concerns artificial intelligence. According to CalMatters, the legislation prohibits technology companies from using student data to train or develop AI models. The rules apply to technology providers serving K–12 schools, community colleges, and universities."},
      { p: "The changes are especially relevant as schools increasingly use digital platforms for learning, grading, communication, and other services. Students may provide personal information to these platforms without always knowing how the information is handled."},
      { p: "For students, data privacy is becoming an important part of digital literacy. Understanding what information an app collects and how that information can be used can help students make safer decisions when using technology."},
      { p: "The new rules show how student technology is changing beyond just laptops and apps. Privacy and cybersecurity are also becoming important parts of the technology students use every day."}
    ]
  },
  {
    id: "sc-eart",
    image: "images/sc-eart.jpg",
    type: "blog",
    category: "science",
    title: "SSC Space and Airbus Expand Ground Segment Support for Pléiades Neo and Pléiades Neo Next",
    excerpt: "On Sept. 21, 2026, space operations provider SSC Space signed a multi-year contract with Airbus Defence and Space to serve as the prime ground segment provider for the Pléiades Neo and next-generation Pléiades Neo Next Earth observation programs.",
    author: "SatNews Staf",
    date: "2026-09-21",
    tags: ["Space", "Rockets", "Explainer"],
    body: [
      { p: "Under the expanded partnership, SSC Space will deliver telemetry, tracking, and command (TT&C) services, high-throughput payload data reception, and ground network optimization across its global polar and high-latitude tracking stations."},
      { h: "Program History and Fleet Architecture"},
      { p: "The agreement extends a long-standing operational relationship between Airbus Defence and Space and SSC Space (formerly Swedish Space Corporation) supporting high-resolution European Earth observation constellations. The operational Pléiades Neo constellation delivers 30-centimeter native optical spatial resolution, providing high-precision imagery for commercial mapping, urban planning, defense intelligence, and disaster monitoring applications."},
      { p: "To complement the operational Pléiades Neo fleet, Airbus is developing Pléiades Neo Next, an upgraded orbital architecture designed to deliver 20-centimeter-class native spatial resolution alongside increased orbital revisit capabilities. The enhanced spatial fidelity and faster revisit intervals cater to growing defense and commercial demand for rapid-response geospatial intelligence."},
      { p: "Under the contract terms, SSC Space will provide dedicated routine TT&C and data reception across the operational lifecycle of both constellations. In addition, SSC Space will execute Launch and Early Orbit Phase (LEOP) flight support during the initial deployment of the Pléiades Neo Next spacecraft."},
      { h: "Ground Segment Engineering and Latency Optimization"},
      { p: "To satisfy stringent data delivery requirements for defense and commercial imagery users, SSC Space is upgrading ground communications infrastructure to reduce end-to-end data latency. Fast downlinking and automated ground processing allow raw optical payload data to move rapidly from spacecraft passes into Airbus’s distribution networks."},
      { p: "The ground architecture utilizes high-latitude and polar tracking facilities to maximize contact opportunities per orbital revolution:"},
      { list: [
        "Esrange Space Center: Located in Kiruna, Sweden, offering high-latitude polar tracking passes and direct integration with European fiber backbones.",
        "Inuvik Satellite Station Facility: Positioned in the Northwest Territories, Canada, providing Northern Hemisphere contact coverage for polar-orbiting Earth observation platforms.",
        "Punta Arenas Station: Operating in southern Chile, delivering essential Southern Hemisphere tracking passes to complete global orbital contact loops."
      ]},
      { p: "By coordinating contact passes across Esrange, Inuvik, and Punta Arenas, SSC Space provides near-continuous line-of-sight tracking for sun-synchronous optical imaging satellites, ensuring rapid downlink of high-volume imagery files following target capture."},
      { h: "Executive Perspectives"},
      { p: "“We are excited to expand our collaboration with Airbus on the next generation of its geospatial capabilities, including Pléiades Neo and Pléiades Neo Next,” said Stefan Pessirilo, Business Development Director at SSC Space. “We will support advanced operations and enable low-latency data delivery – meeting the growing demand for faster access to Earth observation data across both defense and commercial markets.”"},
      { p: "“This collaboration highlights Airbus’ ability to work with solid European partners to continuously enhance its services, remain at the forefront of Earth observation capabilities and serve its customers at best,” added Eric Even, Head of Space Digital at Airbus Defence and Space. “Our continued work with SSC demonstrates our excellent collaboration and the performance of our joint activities.“"},
      { h: "Deployment Schedule and Operations Timeline"},
      { p: "SSC Space and Airbus Defence and Space will begin implementing ground network latency optimizations immediately across the Esrange, Inuvik, and Punta Arenas tracking facilities. LEOP operational planning and ground station network dress rehearsals will continue ahead of the planned 2028 launch campaign for the first Pléiades Neo Next satellite."}
    ]
  },
  {
    id: "sc-baloon",
    image: "images/sc-baloon.jpg",
    type: "blog",
    category: "science",
    title: "JEO 19 - News Roundup - 2 Sept 2026",
    excerpt: "Topping this news roundup, we’ve got stories on J-LEO, the planned domestic LEO satellites comms network, sovereign AI, and much more.",
    author: "Robert Cheetham",
    date: "2026-09-2",
    tags: ["Space", "Rockets", "Explainer"],
    body: [
      { p: "Welcome to Japan Earth Observer (JEO), a monthly newsletter about the space, Earth observation and geospatial industries in Japan."},
      { p: "Topping this news roundup, we’ve got stories on J-LEO, the planned domestic LEO satellites comms network, sovereign AI, and much more."},
      { p: "On to the news…"},
      { h: "News & Announcements"},
      { p: "📡 Rakuten-led consortium wins J-LEO sovereign satellite network"},
      { p: "The Ministry of Internal Affairs and Communications (MIC) has allocated almost US $1b in subsidies to build out a $2 billion domestic LEO satellite communications network being called J-LEO. The RFP required companies to meet several conditions:"},
      { list: [
        "Achieve a nationwide rollout by March 2029;",
        "Complete all network and data control domestically in Japan;",
        "Support video calls on regular smartphones for at least 70% of the day;",
        "Enable free roaming across carriers during disasters."
      ]},
      { p: "This type of constellation would be along the lines of SpaceX Starlink, Amazon LEO, ASTS SpaceMobile or IRIS² in Europe. Japan doesn't currently have the capacity to build a constellation like this on its own. So there were a few ways to potentially make this happen:"},
      { list: [
        "Use a Starlink partner that can meet the requirements - KDDI, SoftBank, and NTT DOCOMO already provide D2D services in partnership with SpaceX’s Starlink",
        "KDDI provides a Starlink Direct product, including existing global coverage through partnership with firms like T-Mobile",
        "Softbank also has a Starlink Direct offering, though it is only just rolled out, so is at least a year behind KDDI",
        "NTT DOCOMO has a Starlink Direct business offering, but not one for consumers",
        "SkyPerfect JSAT's recently signed a deal to be first Amazon LEO reseller a couple of weeks ago, though Amazon LEO has not yet reached critical mass in terms of the number of satellites required to offer global coverage",
        "Rakuten Mobile had recently announced a new joint venture with AST SpaceMobile in June through which it would purchase multiple AST satellites to establish a network. Rakuten also has access to 700 MHz spectrum that matches Rakuten's ground frequency."
      ]},
      { p: "None of these solutions would have a domestic company building an end-to-end solution, but each would have potentially offered some control over a domestic service. This is not a dissimilar scenario to Japan buying reserved access to the latest Planet Labs Pelican satellites through Sky Perfect JSAT in 2025."},
      { p: "In the end, it didn’t matter. The Ministry of Internal Affairs and Communication (MIC) (総務省) officially selected Rast Co Ltd (50/50 Rakuten/AST SpaceMobile JV) for Japan's sovereign LEO direct-to-cell constellation. MIC will distribte the ~¥150B (~US $926M) subsidy over 3 years as well as allowing use of the 700 Mhz spectrum for direct satellite communications services. It seemed possible that at least one Starlink-affiliated alternative would bid, but the Rakuten/AST SpaceMobile team ended up being the only bidder. Rakuten completed the first Japan D2C video call on a Bluebird satellite in April 2025 and expects to be able to provide commercial service in 2026."},
      { p: "Beyond the ~¥150B MIC subsidy, Rakuten and the University of Tokyo secured a separate ¥11 billion yen grant from the JAXA Space Strategy Fund for space-ground network integration R&D. This is a separate funding stream supporting the same J-LEO sovereign D2D constellation build-out."},
      { p: "AST Space Mobile, after successfully launching Bluebird 8, 9, and 10, is planning to launch 11, 12, and 13 in early August - this will be the first of the more advanced Block 2 satellites, with larger antenna arrays and higher peak bandwidth. At 2,400 sf, they will be the largest antenna structures in low Earth orbit (LEO)."}
    ]
  },
  {
    id: "sc-solar",
    image: "images/sc-solar.jpg",
    type: "blog",
    category: "science",
    title: "LEO Satellites: Transforming Global Connectivity in 2026",
    excerpt: "The Rise of LEO Satellites: Transforming Global Connectivity in 2026",
    author: "AsiaTechX Editorial Staff",
    date: "2026-09-28",
    tags: ["Space", "Rockets", "Explainer"],
    body: [
      { p: "Global connectivity is entering a transformative phase with the rapid expansion of Low Earth Orbit (LEO) satellites. Unlike traditional geostationary satellites operating at approximately 36,000 kilometres altitude, LEO satellites orbit much closer to Earth—typically between 500 and 2,000 kilometres. This proximity dramatically reduces latency and enables faster data transmission, revolutionising broadband connectivity, remote communications, and enterprise applications worldwide.Driven by groundbreaking satellite communication innovations, major aerospace companies and technology providers are investing billions into LEO satellite constellations. These developments are fundamentally reshaping how governments, businesses, and communities access digital infrastructure globally.The future of satellite connectivity will be a central discussion topic amongst global industry leaders at ATxEnterprise 2026, where experts will examine how LEO satellites are transforming digital ecosystems and driving the next generation of global communications."},
      { h: "Why LEO Satellites Are Revolutionising Global Communications"},
      { p: "Traditional satellite communications have historically faced significant challenges, including high latency and limited bandwidth. However, recent advances in satellite technology have dramatically improved the performance and scalability of LEO satellite networks.Key Performance "},
      { h: "Key Performance Advantages"},
      { p: "Because LEO satellites operate closer to Earth's surface, they deliver substantial performance improvements:"},
      { list: [
        "Ultra-low latency: 20–40 milliseconds (compared to 600+ milliseconds for geostationary satellites)",
        "Higher data throughput: Enhanced bandwidth capacity for data-intensive applications",
        "Expanded coverage: Reliable connectivity for remote and rural areas previously underserved by traditional infrastructureAccording to the World Economic Forum, LEO satellites could bring high-speed internet access to nearly three billion people currently without reliable connectivity, effectively closing the global digital divide and enabling economic opportunities in underserved regions."
      ]}
    ]
  },
  {
    id: "st-build",
    image: "images/software-build.jpg",
    type: "blog",
    category: "software",
    title: "What is bug hunting and why is it changing?",
    excerpt: "Bugcrowd At events like Bugcrowd Bug Bash hackers compete to find software bugs",
    author: "Joe Fay",
    date: "2026-04-28",
    tags: ["HTML", "CSS", "JavaScript"],
    body: [
      { p: "Few technology careers offer the chance to demonstrate your skills in exclusive venues worldwide, from luxury hotels to Las Vegas e-sports arenas, peers cheering you on as your name moves up the leaderboard and your earnings rack up."},
      { p: "But that's what Brandyn Murtagh experienced within his first year as a bug bounty hunter."},
      { p: "Mr Murtagh got into gaming and building computers at 10 or 11-years-old and always knew I wanted to be a hacker or work in security."},
      { p: "He began working in a security operations centre at 16, and moved into penetration testing at 20, a job that also involved testing the security of clients' physical and computer security: I had to forge false identities and break into places and then hack. Quite fun."},
      { p: "But in the past year he has became a full-time bug hunter and independent security researcher, meaning he scours organizations' computer infrastructure for security vulnerabilities. And he hasn't looked back."},
      { p: "Internet browser pioneer Netscape is regarded as the first technology company to offer a cash bounty to security researchers or hackers for uncovering flaws or vulnerabilities in its products, back in the 1990s."},
      { p: "Eventually platforms like Bugcrowd and HackerOne in the US, and Intigriti in Europe, emerged to connect hackers and organizations that wanted their software and systems tested for security vulnerabilities."},
      { p: "As Bugcrowd founder Casey Ellis explains, while hacking is a morally agnostic skill set, bug hunters do have to operate within the law."}
    ]
  },
  {
    id: "st-mobile",
    image: "images/software-mobile.jpg",
    type: "blog",
    category: "software",
    title: "Software firm creates 23 jobs in £1.4m investment",
    excerpt: "Cambridge-based Aveva, which first established a presence in Londonderry in 2015, says the investment in a new research and development centre will double its workforce in the north west",
    author: "Joe Fay",
    date: "2026-11-25",
    tags: ["HTML", "CSS", "JavaScript"],
    body: [
      { p: "A software company is to create 23 jobs through a £1.4m investment in a new research and development (R&D) centre in Londonderry."},
      { p: "Cambridge-based Aveva, which first opened an office in Derry in 2015, said the investment would double its workforce in the north west."},
      { p: "The firm said the expansion would create its second R&D centre and focus on the development its products."},
      { p: "This would include software to manage vast data sources for customers, and the new site will allow the company to meet growing demand."},
      { h: "'Wealth of talent available in the north west'"},
      { p: "Iju Raj, executive vice-president of R&D, said they had decided to expand within Northern Ireland due to its strong talent pool, associated links to local universities and successful placement and graduate schemes."},
      { p: "“Our decision to expand in Derry is a testament to the wealth of talent available in the north west and the support, advice and guidance we’ve received from Invest NI, he said."},
      { p: "This R&D centre will be crucial for developing products that keep us at the forefront of technological advancements, enabling us to maintain our competitive edge in the global market.”"}
    ]
  },
];