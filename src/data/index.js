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
    { category: "AI Models", items: ["ChatGPT", "Gemini", "Perplexity", "DeepSeek", "Gpt-4"] },
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
    title: "Why I Chose React Over Next.js for My Latest Project",
    excerpt: "A deep dive into the trade-offs between React and Next.js, and why sometimes a simpler setup is the right choice.",
    content: "...",
    tags: ["React", "Next.js", "Web Dev"],
    date: "April 10, 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Accessible UIs Without Losing Your Mind",
    excerpt: "Practical tips for making your React apps more accessible — from semantic HTML to ARIA roles and keyboard navigation.",
    content: "...",
    tags: ["Accessibility", "React", "UI"],
    date: "March 22, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "GSAP Animations That Don't Feel Like a Theme Park",
    excerpt: "How to use GSAP to create smooth, meaningful animations that enhance UX rather than distract from it.",
    content: "...",
    tags: ["GSAP", "Animation", "CSS"],
    date: "March 5, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 4,
    title: "My First Year as a Developer: Lessons Learned",
    excerpt: "Looking back on my journey from CS graduate to working developer — the good, the bad, and the deeply humbling.",
    content: "...",
    tags: ["Career", "Learning", "Personal"],
    date: "February 18, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "PostgreSQL vs MongoDB: Choosing the Right Database",
    excerpt: "A practical comparison of relational and document databases with real-world use cases and performance benchmarks.",
    content: "...",
    tags: ["Database", "PostgreSQL", "MongoDB"],
    date: "January 30, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

export const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 5,
    status: "Read",
    year: "2024",
    note: "A must-read for every developer. Changed how I think about naming variables and writing functions.",
    tags: ["Programming", "Best Practices"],
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    rating: 5,
    status: "Read",
    year: "2024",
    note: "Full of timeless wisdom. The 'broken windows' theory alone is worth the entire book.",
    tags: ["Career", "Programming"],
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4,
    status: "Read",
    year: "2023",
    note: "Applied this directly to my coding practice routines. The 1% improvement concept is genuinely life-changing.",
    tags: ["Productivity", "Self-improvement"],
  },
  {
    id: 4,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    rating: 5,
    status: "Reading",
    year: "2024",
    note: "Dense but incredibly rewarding. The best resource I've found for understanding distributed systems.",
    tags: ["Systems", "Database"],
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    rating: 4,
    status: "Read",
    year: "2023",
    note: "Fundamentally changed how I look at UX. Now I notice bad affordances everywhere.",
    tags: ["Design", "UX"],
  },
];
