/**
 * ============================================================
 *  CENTRAL PORTFOLIO DATA — EDIT THIS FILE ONLY
 * ============================================================
 * Everything the website shows comes from this file.
 * Add a project / certification / job by adding an object to the
 * matching array — the UI builds the card automatically.
 * Leave an array empty ([]) and its section hides or shows a
 * tasteful "coming soon" state.
 *
 * Files you can replace (no code changes needed):
 *   public/images/profile.jpg        -> your profile photo
 *   public/images/projects/*.jpg     -> project screenshots
 *   public/images/certificates/*.jpg -> certificate images
 *   public/resume.pdf                -> your CV
 */

export type Social = {
  label: string;
  url: string; // leave "" to hide the icon
  icon:
    | "github"
    | "linkedin"
    | "instagram"
    | "youtube"
    | "facebook"
    | "twitter"
    | "mail";
};

export type Skill = { name: string; note?: string };
export type SkillCategory = { category: string; items: Skill[] };

export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
  url?: string;
};

export type Education = {
  degree: string;
  institution: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  url?: string;
  image?: string;
};

export type Certification = {
  title: string;
  organization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
  skills?: string[];
};

export type ProjectCategory = "Web" | "Mobile" | "AI" | "UI/UX" | "Other";

export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
  date?: string;
  featured?: boolean;
  highlights?: string[];
};

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type Achievement = {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  url?: string;
};

export const personalInfo = {
  name: "Muhammad Dawood Abbasi",
  initials: "MD",
  logoImage: "/images/profile/logo.png",

  title: "Flutter Developer | Web Developer | AI Automation",
  greeting: "Hello, I'm",

  roles: [ "Agentic AI Enthusiast",
           "UI/UX Enthusiast", 
           "Problem Solver", ],

  intro:
    "I build modern web and mobile applications, while exploring AI automation to create smarter and more efficient digital solutions.",

  bio: "Developer focused on mobile and web interfaces, with an eye for detail and maintainable code.",

  email: "dawoodabbasiprivate2007@gmail.com",
  phone: "+923209021535",
  location: "Islamabad, Pakistan",
  availability: "Open to internships & freelance work",

  profileImage: "/images/Dawood.png",
};

/** Navbar / footer sections, in order. */
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/** Leave url "" to hide a social icon. */
export const socialLinks: Social[] = [
   { label: "GitHub", url: "https://github.com/dawoodabbasi57", icon: "github" },
   { label: "LinkedIn", url: "https://www.linkedin.com/in/dawood-abbasi", icon: "linkedin" },
   { label: "Instagram", url: "https://www.instagram.com/dawood_abbasi57", icon: "instagram" },
   { label: "YouTube", url: "https://www.youtube.com/@dawood_abbasi57", icon: "youtube" },
   { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61595114663640", icon: "facebook" },
   { label: "Twitter / X", url: "https://x.com/dawood_abbasi57", icon: "twitter" },
  
   ];

/** Small numbers row shown under the hero portrait. */
export const stats = [
  { value: "10+", label: "Projects built" },
  { value: "2+", label: "Years learning" },
  { value: "5+", label: "Technologies" },
];

export const about = {
  headline: "Building practical software with development and AI",

  paragraphs: [
    "I'm a developer focused on building clean, responsive and user-friendly applications for mobile and the web. I enjoy turning ideas into practical products and exploring how AI can be used to automate workflows and create more efficient digital solutions.",

    "My current focus is on strengthening my development skills while expanding into AI automation, agentic AI, Python, cybersecurity and computer networking. I learn by building real-world projects, experimenting with new technologies and continuously improving how I approach software development.",
  ],

  currentlyLearning: [
    "Advanced Flutter & Dart",
    "Modern Web Development",
    "Python Programming",
    "AI Automation & Workflows",
    "Agentic AI",
    "Cybersecurity",
    "Computer Networking",
  ],

  whatIBuild: [
    "Cross-platform mobile applications",
    "Responsive websites & web applications",
    "AI-powered automation workflows",
    "Practical AI-assisted solutions",
    "Clean and maintainable user interfaces",
  ],

  goals:
    "My goal is to grow into a well-rounded software engineer who can build reliable digital products, solve real-world problems and use AI to make software and workflows more intelligent and efficient.",
};

export const skills: SkillCategory[] = [
  {
    category: "Mobile Development",
    items: [
      {
        name: "Flutter",
        note: "Cross-platform mobile app development",
      },
      {
        name: "Dart",
        note: "Primary language for Flutter development",
      },
      {
        name: "Firebase",
        note: "Authentication, Firestore and storage",
      },
    ],
  },

  {
    category: "Web Development",
    items: [
      {
        name: "HTML & CSS",
        note: "Semantic and responsive layouts",
      },
      {
        name: "JavaScript",
        note: "ES6+, DOM and web APIs",
      },
      {
        name: "React",
        note: "Components, hooks and modern UI development",
      },
      {
        name: "TypeScript",
        note: "Type-safe frontend development",
      },
    ],
  },

  {
    category: "AI & Automation",
    items: [
      {
        name: "AI Automation",
        note: "AI-powered workflows and automation",
      },
      {
        name: "Agentic AI",
        note: "AI agents and intelligent workflows",
      },
      {
        name: "AI Tools",
        note: "AI-assisted development and productivity",
      },
    ],
  },

  {
    category: "Programming & Tools",
    items: [
      {
        name: "Git & GitHub",
        note: "Version control and collaboration",
      },
      {
        name: "VS Code",
        note: "Daily development environment",
      },
    ],
  },

  {
    category: "Design & UI/UX",
    items: [
      {
        name: "Figma",
        note: "Wireframes and interface design",
      },
      {
        name: "UI/UX",
        note: "User-focused interface design principles",
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    start: "2024",
    end: "Present",

    description:
      "Designing and developing web and mobile applications while exploring AI-powered automation and modern development workflows.",

    responsibilities: [
      "Developed responsive websites and cross-platform Flutter applications",
      "Built practical application prototypes and integrated backend services",
      "Explored AI automation to improve development workflows and digital solutions",
      "Used Git and GitHub for version control and project management",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "React",
      "JavaScript",
      "TypeScript",
      "Firebase",
      "Git & GitHub",
      "AI Automation",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "BS Information Technology",
    institution: "International Islamic University Islamabad (IIUI)",
    location: "Islamabad, Pakistan",
    start: "2025",
    end: "2029 (expected)",
    description:
      "Coursework in programming, data structures, databases and software engineering.",
    image: "/images/education/iiui.png",
  },

  {
    degree: "FSc ICS (Physics)",
    institution: "Alpha School & College",
    location: "Islamabad, Pakistan",
    start: "2023",
    end: "2025",
    description:
      "Intermediate studies with a focus on computer science, mathematics and physics.",
    image: "/images/education/alpha.png",
  },

  {
    degree: "Matriculation (Computer Science)",
    institution: "Paramount High School & College",
    location: "Islamabad, Pakistan",
    start: "2021",
    end: "2023",
    description:
      "Secondary education with a focus on computer science and foundational academic subjects.",
    image: "/images/education/paramount.png",
  },
];

export const certifications: Certification[] = [
  {
    title: "Flutter Development Bootcamp",
    organization: "Murree Development Forum",
    issueDate: "2026",
    description:
      "Completed a hands-on Flutter course covering widgets, state management and Firebase.",
    skills: ["Flutter", "Dart", "Firebase"],
    image: "/images/certificates/flutter-development-bootcamp.jpg",
  },

  {
    title: "AI Driven Web Development",
    organization: "Murree Development Forum",
    issueDate: "2025",
    description:
      "Completed a hands-on web development program covering AI-powered development, modern web technologies and practical project building.",
    skills: [
      "AI-Powered Development",
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "AI Tools",
    ],
    image: "/images/certificates/Web Development.png",
  },

  {
    title: "AI for All",
    organization: "Murree Development Forum",
    issueDate: "2025",
    description:
      "Completed an introductory AI program covering artificial intelligence concepts, practical applications and emerging AI technologies.",
    skills: [
      "Artificial Intelligence",
      "AI Fundamentals",
      "AI Applications",
      "Generative AI",
    ],
    image: "/images/certificates/AI for All.png",
  },

  {
    title: "Education Ambassador & Future Leader Program",
    organization: "Murree Development Forum",
    issueDate: "2024",
    description:
      "Completed a leadership and education program focused on communication, leadership skills, teamwork and personal development.",
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Personal Development",
    ],
    image: "/images/certificates/Education Embassador.png",
  },

  {
    title: "Linux Kernel Development – Beginner's Guide",
    organization: "The Linux Foundation",
    issueDate: "2026",
    description:
      "Successfully completed the Linux Kernel Development – Beginner's Guide (LFD103-JP), covering foundational concepts of Linux kernel development.",
    skills: [
      "Linux",
      "Linux Kernel",
      "Kernel Development",
      "Open Source",
    ],
    image: "/images/certificates/Linux.png",
  },
];

export const projects: Project[] = [
  {
    title: "TaskFlow — Habit & Task Tracker",
    description:
      "A Flutter app for tracking daily habits and tasks with streaks, reminders and local storage. Designed the UI from scratch and built a clean, offline-first experience.",
    technologies: ["Flutter", "Dart", "Hive"],
    category: "Mobile",
    githubUrl: "https://github.com/yourusername/taskflow",
    status: "In progress",
    date: "2025",
    featured: true,
    highlights: [
      "Offline-first local storage",
      "Streak tracking & reminders",
      "Custom animated UI",
    ],
  },

  {
    title: "Portfolio Website",
    description:
      "This very website — a fully responsive personal portfolio with dark mode, scroll animations and a central data file for easy updates.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "",
    date: "2026",
  },

  {
    title: "Weather Now",
    description:
      "A minimal weather web app that fetches live conditions by city, with a clean card layout and loading/error states.",
    technologies: ["JavaScript", "REST API", "CSS"],
    category: "Web",
    githubUrl: "https://github.com/yourusername/weather-now",
    date: "2024",
  },
];

export const services: Service[] = [
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform Flutter apps with clean architecture and polished UI.",
  },

  {
    icon: "globe",
    title: "Web Development",
    description:
      "Responsive, fast websites and web apps built with modern tooling.",
  },

  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Wireframes and interfaces that are simple, consistent and user-friendly.",
  },

  {
    icon: "bot",
    title: "AI Automation",
    description:
      "AI-powered workflows and automations that streamline tasks and improve productivity.",
  },

  {
    icon: "brain",
    title: "AI Solutions",
    description:
      "Practical AI solutions using modern AI tools, APIs and intelligent workflows.",
  },

  {
    icon: "workflow",
    title: "Agentic AI",
    description:
      "AI agents and intelligent workflows designed to automate tasks and handle multi-step processes.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hackathon Participant",
    organization: "University Tech Fest",
    date: "2025",
    description: "Built a working prototype with a team in 24 hours.",
  },
];

export const contact = {
  heading: "Let's work together",
  text: "Have a project, internship or opportunity in mind? My inbox is always open — I'll get back to you as soon as I can.",
};

export const resume = {
  url: "/resume.pdf",
  downloadLabel: "Download CV",
};