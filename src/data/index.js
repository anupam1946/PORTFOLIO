export const personalInfo = {
  name: "Anupam Pratap Singh K.C",
  shortName: "Anupam",
  initials: "AK",
  title: "Full Stack Developer & UI Designer",
  degree: "BSc. CSIT Graduate, 2024",
  location: "Bhairahawa, Nepal",
  email: "anupamchettri67@gmail.com",
  phone: "+977 9812951946",
  website: "anupamkc.singh",
  photo: "/hero.jpg",
  bio: "I'm a passionate full stack developer and UI/UX enthusiast who graduated with BSc. CSIT in 2024. I love building elegant, performant web experiences that make people's lives a little easier. Currently open to exciting opportunities.",
  longBio: `Hi! I'm Anupam — a Bhairahawa-based full stack developer with a deep love for clean code and beautiful interfaces. I graduated with a BSc. in Computer Science and Information Technology (CSIT) from Tribhuvan University in 2024.

🚀 Passionate React Developer | Tech Enthusiast | BSc. CSIT Graduate

I’m a results-driven React Developer with a deep passion for building scalable, high-performance web applications. With a strong foundation in computer science and information technology (BSc. CSIT), I specialize in crafting dynamic and user-friendly interfaces that enhance digital experiences.

💡 What Drives Me?
Technology is more than just code—it's about solving real-world problems and creating seamless user experiences. I thrive on staying up-to-date with the latest advancements in React, JavaScript, and front-end technologies, ensuring that my work is innovative, efficient, and future-proof.

🛠 Tech Stack & Expertise:
✔ React.js, Next.js, Redux, TypeScript,Django
✔ JavaScript (ES6+), HTML5, CSS3, Framer Motion,Python.
✔ RESTful APIs, MYSQL, Firebase.
✔ Git, Agile, CI/CD
✔ AI Tools like Chatgpt,Gemini,Deepseek,copilot github


🌟 Why Connect With Me?
I love collaborating with like-minded professionals, sharing insights, and contributing to exciting projects. Whether it’s discussing new technologies, building innovative applications, or problem-solving, I’m always open to new opportunities and connections.

When I'm not in front of a screen, you'll find me hiking the trails around Valleys or buried in a good book.`,
  socials: {
    github: "https://github.com/anupam1946/",
    linkedin: "https://www.linkedin.com/in/anupam-chettri-3b1617323/",
    twitter: "https://twitter.com/anupamkc",
    instagram: "https://instagram.com/anupamkc",
  },
  skills: [
    { category: "Frontend", items: ["HTML","CSS","React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Linux","Canva","WordPress"] },
    { category: "Most Used AI Models", items: ["ChatGPT", "Gemini", "Perplexity", "DeepSeek", "Gpt-4"] },
  ],
  experience: [
    {
      role: "Intern Frontend Developer",
      company: "Xdezo Technologies",
      location: "Pokhara, Nepal",
      period: "June 2023 – September 2023",
      desc: "Building and maintaining client-facing React applications. Collaborating with designers to implement pixel-perfect UIs. Improved app performance by 40% through code splitting and lazy loading.",
    },
    {
      role: "Web Development",
      company: "Milo Logic Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      period: "February 2024 – Present",
      desc: "Developed responsive web pages using HTML, CSS, and JavaScript. Assisted in building a CMS dashboard that reduced content update time by 60% for clients.",
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      location: "Remote",
      period: "2022 – 2023",
      desc: "Delivered 10+ freelance projects including e-commerce sites, landing pages, and portfolio websites Case Studies and Presentation for local businesses and international clients.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University",
      college: "Mount Annapurna Campus, Pokhara",
      location: "Pokhara, Nepal",
      period: "2018 – 2024",
      Percent: "65%/100%",
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Mart_Pos",
    subtitle: "Point of Sale system for marts and small retailers in Nepal",
    desc: "A comprehensive POS system designed for small retailers in Nepal, featuring inventory management, sales tracking, and local payment gateway integration.",
    longDesc: "Made using HTML, CSS, JavaScript for the frontend and python, Flask and MySQL for the backend and database. The system includes features like barcode scanning, real-time sales analytics, and future plans for supporting local payment gateways like eSewa and Khalti.,",
    tags: ["Frontend:HTML, CSS, JavaScript", " Database:MySQL", " Backend:Python, Flask", "Templete Library:Mako"],
    category: "Full Stack",
    year: "2026",
    live: "#",
    github: "https://github.com/anupam1946/point-of-sale",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "college website",
    subtitle: "College website with course catalogs and application system ",
    desc: "A modern, responsive website for a local college, featuring course catalogs, faculty profiles, event calendars, and an online application system.",
    longDesc: "Developed using React for the frontend only now, with plans to integrate a Node.js backend for handling applications and dynamic content. The site includes a course catalog with filtering options, faculty bios with contact info, and an events calendar that can be easily updated by the college staff.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    category: "Web App",
    year: "2025",
    live: "#",
    github: "https://github.com/anupam1946/react-college-website",
    featured: true,
    color: "#a855f7",
  },
  {
    id: 3,
    title: "CodeCollab",
    subtitle: "Real-time Code Editor",
    desc: "A collaborative code editor supporting 20+ languages, real-time cursors, video chat, and session sharing.",
    longDesc: "Built using React, Monaco Editor, Socket.io, and WebRTC. Supports multi-user editing with conflict resolution, syntax highlighting for 20+ languages, and integrated video/audio chat.",
    tags: ["React", "Socket.io", "WebRTC", "Node.js"],
    category: "Full Stack",
    year: "2023",
    live: "#",
    github: "https://github.com/anupamkc/codecollab",
    featured: true,
    color: "#ec4899",
  },
  {
    id: 4,
    title: "WeatherNP",
    subtitle: "Nepal Weather Dashboard",
    desc: "A beautiful weather dashboard covering all 77 districts of Nepal with 7-day forecasts, air quality index, and historical data.",
    tags: ["HTML", "OpenWeather API", "JavaScript", "CSS"],
    category: "Frontend",
    year: "2023",
    live: "https://anupam1946.github.io/weather-app/",
    github: "https://github.com/anupam1946/weather-app",
    featured: false,
    color: "#0ea5e9",
  },
  {
    id: 5,
    title: "ShareStream",
    subtitle: "Instagram Clone with Real-time Features",
    desc: "Social media platform for real-time chats, sharing videos,posts and photos, connecting with friends, story or status uploads and discovering people with similar interests.",
    tags: ["Node.js", "Express.js", "MongoDB", "React","Tailwind.CSS", "INgest API, Clark API,ImageKit API"],
    category: "Full Stack",
    year: "2025",
    live: "https://share-stream-six.vercel.app/",
    github: "https://github.com/anupam1946/ShareStream",
    featured: false,
    color: "#10b981",
  },
  {
    id: 6,
    title: "KhajaGhar",
    subtitle: "Food Delivery website for Local Eateries",
    desc: "A food delivery website that connects customers with third party food providers, offering real-time order tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    year: "2023",
    live: "#",
    github: "https://github.com/anupam1946/my-project-on-food-ordering-system-frontend-",
    featured: false,
    color: "#f59e0b",
  },
  {
    id: 7,
    title: "Image Search Engine",
    subtitle: "Image Search Engine using API",
    desc: "A simple image search engine that allows users to find images based on their queries.",
    tags: ["HTML", "CSS", "JavaScript", "unsplash API"],
    category: "Frontend",
    year: "2024",
    live: " https://anupam1946.github.io/image-search-engine/",
    github: "https://github.com/anupam1946/image-search-engine",
    featured: false,
    color: "#f00000",
  },
];

export const blogs = [
  {
  id: 1,
  title: "Why React Is Still My Go-To for Modern Web Apps",
  excerpt: "A practical look at why React remains my preferred choice for building modern web applications.",
  content: [
    { type: "heading", text: "React Is Everywhere" },
    { 
      type: "paragraph", 
      text: "When I started learning web development, I was overwhelmed by the number of frameworks available—React, Vue, Angular, Svelte, and more. I chose React, and I’ve never looked back." 
    },
    { 
      type: "paragraph", 
      text: "The ecosystem around React is massive. Whatever problem you face, chances are someone has already solved it and published a package for it." 
    },

    { type: "heading", text: "Component Thinking Changed How I Code" },
    { 
      type: "paragraph", 
      text: "React taught me to think in components—small, reusable pieces of UI that you assemble together. This mindset improved not just my React code, but how I approach programming in general." 
    },
    { 
      type: "bullets", 
      items: [
        "Break big problems into smaller pieces",
        "Each component does one thing well",
        "Reuse instead of rewriting"
      ] 
    },

    { type: "heading", text: "The Job Market Loves React" },
    { 
      type: "paragraph", 
      text: "Most frontend job listings in Nepal and abroad mention React. Learning it gave me a clear and practical path into the job market after graduating." 
    },

    { type: "heading", text: "When React Is Not the Right Choice" },
    { 
      type: "paragraph", 
      text: "React is powerful, but it’s not always the best tool for every situation. Choosing the right tool depends on the project." 
    },
    { 
      type: "bullets", 
      items: [
        "Simple sites — use plain HTML/CSS",
        "SEO-heavy apps — use Next.js",
        "Complex SPAs — React is a great fit"
      ] 
    },

    { type: "heading", text: "Final Thoughts" },
    { 
      type: "paragraph", 
      text: "React isn’t just a library—it’s a way of thinking. While it may not fit every project, it remains one of the most practical and reliable choices for modern web development." 
    }
  ],
  tags: ["React", "Web Dev", "Frontend"],
  date: "February 20, 2025",
  readTime: "4 min read",
  featured: true,
},
  {
  id: 2,
  title: "Building Accessible UIs Without Losing Your Mind",
  excerpt: "A simple, practical guide to building accessible user interfaces without overcomplicating your workflow.",
  content: [
    { type: "heading", text: "Start With the Basics" },
    {
      type: "paragraph",
      text: "Accessibility can feel overwhelming, but it starts with simple fundamentals. Using the right HTML elements makes your UI more usable for everyone, including screen reader and keyboard users."
    },
    {
      type: "bullets",
      items: [
        "Use buttons for actions",
        "Add labels to form inputs",
        "Maintain a clear heading structure"
      ]
    },

    { type: "heading", text: "Make Everything Keyboard-Friendly" },
    {
      type: "paragraph",
      text: "Your interface should work without a mouse. Many users rely on keyboards to navigate, so it's essential to support smooth and visible keyboard interactions."
    },
    {
      type: "bullets",
      items: [
        "Ensure users can tab through elements",
        "Keep focus states visible",
        "Support Enter and Space for actions"
      ]
    },

    { type: "heading", text: "Keep Text Easy to Read" },
    {
      type: "paragraph",
      text: "Readable text is one of the easiest wins in accessibility. Make sure your content has strong contrast and doesn’t rely only on color to communicate meaning."
    },

    { type: "heading", text: "Fix Common Form Issues" },
    {
      type: "paragraph",
      text: "Forms are often where accessibility breaks down. Clear labels and helpful error messages make a big difference in usability."
    },
    {
      type: "bullets",
      items: [
        "Always include labels",
        "Write clear error messages",
        "Explain what went wrong"
      ]
    },

    { type: "heading", text: "Use ARIA Carefully" },
    {
      type: "paragraph",
      text: "ARIA can help enhance accessibility, but it should only be used when necessary. Native HTML elements already handle most accessibility needs."
    },

    { type: "heading", text: "Improve Gradually" },
    {
      type: "paragraph",
      text: "You don’t need to fix everything at once. Start with small improvements and build from there."
    },
    {
      type: "bullets",
      items: [
        "Fix contrast issues",
        "Improve keyboard navigation",
        "Add proper labels"
      ]
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "Accessibility isn’t extra work—it’s part of good design. When you build with accessibility in mind, you create better experiences for everyone."
    }
  ],
  tags: ["Accessibility", "UI/UX", "Frontend"],
  date: "March 5, 2025",
  readTime: "4 min read",
  featured: false,
},
 {
  id: 3,
  title: "Understanding Git Beyond Just Push and Pull",
  excerpt: "Most developers know git add, commit, and push—but Git has powerful features that can save your project and your sanity.",
  content: [
    { type: "heading", text: "Git Is More Than the Basics" },
    {
      type: "paragraph",
      text: "Most developers start with git add, commit, and push. While these commands are essential, Git offers many powerful features that go far beyond the basics."
    },
    {
      type: "paragraph",
      text: "Understanding these features can help you manage code better, fix mistakes faster, and collaborate more effectively."
    },

    { type: "heading", text: "Branching Makes Everything Safer" },
    {
      type: "paragraph",
      text: "Branches allow you to work on features or fixes without affecting the main codebase. This keeps your work isolated and reduces the risk of breaking things."
    },
    {
      type: "bullets",
      items: [
        "Create branches for new features",
        "Keep your main branch clean",
        "Merge only when ready"
      ]
    },

    { type: "heading", text: "Undo Mistakes Without Panic" },
    {
      type: "paragraph",
      text: "One of Git’s biggest strengths is its ability to undo changes. Whether you made a bad commit or changed the wrong file, Git gives you tools to recover."
    },
    {
      type: "bullets",
      items: [
        "Use git checkout to restore files",
        "Use git reset to undo commits",
        "Use git revert to safely reverse changes"
      ]
    },

    { type: "heading", text: "Staging Is Your Control Layer" },
    {
      type: "paragraph",
      text: "The staging area lets you choose exactly what goes into a commit. Instead of committing everything, you can stage specific changes for better control."
    },

    { type: "heading", text: "Collaboration Becomes Easier" },
    {
      type: "paragraph",
      text: "Git makes it easier to work with others by tracking changes and resolving conflicts. Tools like pull requests help teams review and improve code before merging."
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "Git is more than just push and pull. Learning its deeper features will make you a more confident and efficient developer."
    }
  ],
  tags: ["Git", "Tools", "Dev Tips"],
  date: "March 15, 2025",
  readTime: "3 min read",
  featured: true,
},
  {
  id: 4,
  title: "How I Structure Every React Project I Build",
  excerpt: "A consistent folder structure saves hours of confusion. Here’s the setup I use for every React project.",
  content: [
    { type: "heading", text: "Why Structure Matters" },
    {
      type: "paragraph",
      text: "A good project structure makes your code easier to navigate, maintain, and scale. Without it, even small projects can quickly become messy and hard to manage."
    },
    {
      type: "paragraph",
      text: "Having a consistent structure across projects also saves time, especially when switching between different codebases."
    },

    { type: "heading", text: "My Go-To Folder Setup" },
    {
      type: "paragraph",
      text: "I like to keep things simple and scalable. Here’s the structure I use in most React projects:"
    },
    {
      type: "bullets",
      items: [
        "components/ – Reusable UI components",
        "pages/ – Page-level components (routes)",
        "hooks/ – Custom React hooks",
        "services/ – API calls and business logic",
        "utils/ – Helper functions",
        "assets/ – Images, icons, and static files"
      ]
    },

    { type: "heading", text: "Keep Components Small and Focused" },
    {
      type: "paragraph",
      text: "Each component should do one thing well. Breaking UI into small, reusable pieces makes your code easier to test and reuse."
    },

    { type: "heading", text: "Separate Logic From UI" },
    {
      type: "paragraph",
      text: "Avoid putting too much logic inside your components. Move data fetching and business logic into hooks or services to keep components clean."
    },

    { type: "heading", text: "Consistency Over Perfection" },
    {
      type: "paragraph",
      text: "There is no single “perfect” structure. What matters most is consistency. Once you choose a pattern, stick with it across your projects."
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "A well-structured React project reduces confusion and improves productivity. Keep it simple, stay consistent, and adjust as your project grows."
    }
  ],
  tags: ["React", "Architecture", "Best Practices"],
  date: "March 25, 2025",
  readTime: "3 min read",
  featured: true,
},
  {
  id: 5,
  title: "How I Structure Every React Project I Build",
  excerpt: "A simple and consistent folder structure that keeps my React projects clean, scalable, and easy to maintain.",
  content: [
    { type: "heading", text: "Start Simple, Scale Later" },
    {
      type: "paragraph",
      text: "When starting a React project, I avoid overcomplicating the structure. A simple setup helps you move faster, and you can always scale it as the project grows."
    },

    { type: "heading", text: "My Standard Folder Layout" },
    {
      type: "paragraph",
      text: "I follow a consistent folder structure across all my projects so I never waste time figuring out where things go."
    },
    {
      type: "bullets",
      items: [
        "components/ – Reusable UI elements",
        "pages/ – Route-based pages",
        "hooks/ – Custom hooks for logic",
        "services/ – API calls and external logic",
        "utils/ – Helper functions",
        "assets/ – Images and static files"
      ]
    },

    { type: "heading", text: "Think in Reusable Components" },
    {
      type: "paragraph",
      text: "I break the UI into small components that can be reused across the app. This reduces duplication and keeps the codebase clean."
    },

    { type: "heading", text: "Keep Logic Separate" },
    {
      type: "paragraph",
      text: "Business logic and data fetching don’t belong inside UI components. I move them into hooks or services to keep components focused and readable."
    },

    { type: "heading", text: "Consistency Is the Real Win" },
    {
      type: "paragraph",
      text: "There’s no perfect structure, but consistency across projects saves a lot of time. Once you follow a pattern, development becomes much smoother."
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "A clean structure helps you scale without confusion. Keep things simple, stay organized, and let your structure evolve with your project."
    }
  ],
  tags: ["React", "Architecture", "Best Practices"],
  date: "April 2, 2025",
  readTime: "3 min read",
  featured: false,
},
  {
  id: 6,
  title: "Lessons From Building My First Full Stack App",
  excerpt: "What I learned the hard way while building my first full stack application—from mistakes to mindset shifts.",
  content: [
    { type: "heading", text: "Start Small, Seriously" },
    {
      type: "paragraph",
      text: "My biggest mistake was trying to build too much at once. A full stack app can get complex quickly, so starting small makes it easier to stay focused and actually finish."
    },

    { type: "heading", text: "Debugging Is the Real Skill" },
    {
      type: "paragraph",
      text: "Things will break—often. Learning how to debug issues across the frontend, backend, and database is one of the most valuable skills you can develop."
    },

    { type: "heading", text: "Frontend and Backend Are Different Worlds" },
    {
      type: "paragraph",
      text: "Working on both sides taught me that frontend and backend require different ways of thinking. One focuses on user experience, the other on data and logic."
    },

    { type: "heading", text: "APIs Are the Backbone" },
    {
      type: "paragraph",
      text: "Connecting the frontend and backend through APIs made everything click. Understanding how data flows between them is key to building any full stack app."
    },

    { type: "heading", text: "You Will Refactor—A Lot" },
    {
      type: "paragraph",
      text: "My initial code was far from perfect, and that’s okay. Refactoring helped me improve structure, readability, and performance over time."
    },

    { type: "heading", text: "Deployment Is a Different Challenge" },
    {
      type: "paragraph",
      text: "Getting the app live was harder than building it. Environment variables, build steps, and server setup all introduced new challenges."
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "Building my first full stack app was challenging but worth it. The key is to keep going, learn from mistakes, and improve with each project."
    }
  ],
  tags: ["Full Stack", "Learning", "Dev Journey"],
  date: "April 10, 2025",
  readTime: "4 min read",
  featured: false,
},
];

export const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    rating: 5,
    status: "Read",
    note: "Small changes, remarkable results. This book changed how I approach building habits and productivity.",
    tags: ["Self-Improvement", "Habits", "Psychology"],
    description: "Transform your life with tiny changes. Discover how small habits compound into extraordinary results over time.",
    details: "Atomic Habits by James Clear is a practical guide on how tiny changes can lead to remarkable results. The book introduces the concept of habit stacking and the power of compounding. It covers how to identify your habits, create new ones, and break bad ones. A must-read for anyone looking to improve their life through better habits.",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    rating: 5,
    status: "Read",
    note: "The ability to focus without distraction is a superpower in our modern world.",
    tags: ["Productivity", "Focus", "Work"],
    description: "Master the skill of focused, uninterrupted work in a distracted world and achieve professional excellence.",
    details: "Deep Work by Cal Newport explores how to cultivate the ability to focus without distraction on cognitively demanding tasks. The book presents strategies for eliminating distractions, structuring your work for deep focus, and maximizing your productivity. In today's world of constant notifications and shallow work, deep work is more valuable than ever.",
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    year: 2019,
    rating: 4,
    status: "Reading",
    note: "Essential practices for software developers - a must read for every programmer.",
    tags: ["Programming", "Best Practices", "Career"],
    description: "Improve your programming skills with practical, timeless advice from experienced software developers.",
    details: "The Pragmatic Programmer is a comprehensive guide to becoming a better software developer. It covers topics like code quality, debugging, testing, and refactoring. The book emphasizes practical approaches to programming challenges and encourages developers to think critically about their work. Each section provides actionable advice that can be immediately applied to your projects.",
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    rating: 5,
    status: "Read",
    note: "Writing code that is readable and maintainable is an art. This book is a masterpiece.",
    tags: ["Programming", "Best Practices", "Code Quality"],
    description: "Learn how to write code that is clean, readable, and maintainable for professional software development.",
    details: "Clean Code by Robert C. Martin teaches you how to write code that is not just functional but also elegant and maintainable. The book covers naming conventions, function design, error handling, and testing. It emphasizes that writing clean code is essential for professional development and long-term project success.",
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: 2013,
    rating: 4,
    status: "Read",
    note: "Understanding user psychology is key to creating great products and experiences.",
    tags: ["Design", "UX", "Psychology"],
    description: "Discover why some products work well and others don't—and learn the psychology behind great design.",
    details: "The Design of Everyday Things explores how good design makes life easier and poor design causes frustration. Don Norman uses real-world examples to explain the principles of good design. The book covers topics like affordances, signifiers, feedback, and conceptual models. Essential reading for anyone creating products or interfaces.",
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    rating: 4,
    status: "Read",
    note: "How our brain works - biases, heuristics, and decision making explained beautifully.",
    tags: ["Psychology", "Decision Making", "Behavior"],
    description: "Understand how your mind works and the cognitive biases that influence your decisions every day.",
    details: "Thinking, Fast and Slow by Daniel Kahneman explores the two systems of thought: fast, intuitive thinking and slow, deliberate thinking. The book reveals how these systems interact and where our intuitions lead us astray. It covers cognitive biases, heuristics, and how to make better decisions. A fascinating look into human psychology and behavior.",
  },
];
