export const personalInfo = {
  name: "Liche Tsegaye",
  nickname: "Li",
  role: "Software Engineer & AI Developer",
  headline: "Engineering Autonomous AI Agents & Scalable Systems",
  location: "Jimma / Woliso, Ethiopia",
  email: "lichetsega@gmail.com",
  telegram: "https://t.me/Lichetsega",
  telegramHandle: "@Lichetsega",
  github: "https://github.com/Lichetsega",
  githubHandle: "@Lichetsega",
  linkedin: "https://www.linkedin.com/in/liche-tsegaye-05a25b361",
  linkedinHandle: "liche-tsegaye",
  resumePath: "assets/Liche_Tsegaye_Resume.pdf",
  avatarPath: "assets/avatar.jpg",
  availability: "Available for AI & Full-Stack Roles",
  bio: "Software Engineer and 5th-year Software Engineering graduating student at Jimma University specializing in Artificial Intelligence, Agentic RAG, and high-performance backend & full-stack systems. Experienced in engineering autonomous multi-agent routing, vector retrieval pipelines, and interactive voice architectures through 6 months of AI engineering at INSA."
};

export const stats = [
  { value: "29+", label: "GitHub Repositories" },
  { value: "6 Mo.", label: "AI Engineering at INSA" },
  { value: "5th Yr", label: "Jimma University B.Sc." },
  { value: "0.82+", label: "RAG Semantic Cache Match" }
];

export const skillsData = [
  {
    category: "AI & Agentic RAG",
    icon: "cpu",
    description: "LLMs, autonomous agent orchestration & vector retrieval",
    skills: [
      "Agentic RAG",
      "Google Gemini API",
      "LangChain",
      "LlamaIndex",
      "ChromaDB",
      "FAISS",
      "Hybrid Search (BM25)",
      "PyTorch",
      "Phonetic Fuzzy Matching"
    ]
  },
  {
    category: "Backend & Systems",
    icon: "server",
    description: "High-throughput APIs, databases & concurrency",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "WebSockets",
      "RESTful APIs"
    ]
  },
  {
    category: "Frontend & UI/UX",
    icon: "layout",
    description: "Clean, responsive & interactive web interfaces",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "CSS3 Architecture",
      "Responsive UI",
      "State Management",
      "Modern Web APIs"
    ]
  },
  {
    category: "DevOps, Data & Security",
    icon: "shield",
    description: "Privacy models, containers & developer tooling",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux CLI",
      "k-Anonymity (SHA-1)",
      "Postman",
      "GitHub Actions",
      "BeautifulSoup",
      "Data Normalization"
    ]
  }
];

export const experienceData = [
  {
    role: "AI Engineering Intern",
    company: "Information Network Security Administration (INSA)",
    period: "6 Months",
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    description: "Engineered and scaled Retrieval-Augmented Generation (RAG) and Agentic RAG pipelines within the AI Department.",
    highlights: [
      "Designed autonomous multi-agent routing systems incorporating intent detection, document evaluation, and contextual conversation memory.",
      "Implemented hybrid retrieval combining dense vector embeddings (ChromaDB, FAISS) with sparse keyword search (BM25) and phonetic fuzzy matching.",
      "Collaborated on security-first AI pipelines, API rate-limit resilience, and round-robin multi-key failover managers.",
      "Optimized query response latency through multi-tiered semantic query caching."
    ],
    tags: ["Agentic RAG", "ChromaDB", "FAISS", "BM25", "FastAPI", "Python", "Multi-Agent Systems"]
  },
  {
    role: "B.Sc. in Software Engineering",
    company: "Jimma University — Faculty of Computing",
    period: "2015 E.C. – Present",
    location: "Jimma, Ethiopia",
    type: "5th Year Graduating Class",
    description: "Undergraduate degree focusing on software architectures, distributed computing, algorithms, and applied machine learning.",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Distributed Systems, Database Management Systems (PostgreSQL, MySQL), and Machine Learning.",
      "Active participant in campus developer societies, technical workshops, and engineering hackathons.",
      "Graduating in top tier with specialization in artificial intelligence and systems engineering."
    ],
    tags: ["Distributed Systems", "Algorithms", "PostgreSQL", "Machine Learning", "System Design"]
  },
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    period: "Internship",
    location: "Remote",
    type: "Internship",
    description: "Engineered responsive client landing pages, interactive games, and modern web applications.",
    highlights: [
      "Developed interactive browser-based applications with semantic HTML5, modern CSS3 animations, and vanilla JavaScript DOM manipulation.",
      "Implemented state machines for user interaction and game loops.",
      "Ensured cross-browser compatibility and optimized mobile responsiveness."
    ],
    tags: ["JavaScript (ES6+)", "Responsive Design", "DOM Manipulation", "CSS3", "Web APIs"]
  }
];

export const projectsData = [
  {
    id: "visit-ethiopia",
    title: "Visit Ethiopia Agentic RAG",
    tagline: "Autonomous Multi-Agent Tourism Intelligence",
    category: "ai",
    categoryLabel: "AI & Multi-Agent",
    featured: true,
    description: "Autonomous multi-agent tourism intelligence system featuring a Fused Supervisor Planner handling intent classification, pronoun resolution, and search query expansion.",
    highlights: [
      "Fused Supervisor Planner routing queries to specialized sub-agents (Itinerary Planning, UNESCO Heritage, Visa Logistics).",
      "Two-tier semantic query caching (≥ 0.82 similarity threshold) returning zero-API-call responses on cache hits.",
      "Hybrid retrieval combining dense vector embeddings with sparse BM25 and phonetic fuzzy matching."
    ],
    stack: ["Agentic RAG", "Python", "ChromaDB", "BM25 Fuzzy", "LangChain", "Streamlit", "Flask"],
    githubUrl: "https://github.com/Lichetsega/Agentic-Retrieval-Augmented-Generation-Agentic-RAG-",
    demoUrl: null
  },
  {
    id: "voice-assistant",
    title: "Li's AI Virtual Voice Assistant",
    tagline: "Full-Duplex Interactive Voice Portfolio",
    category: "ai",
    categoryLabel: "Voice AI & LLMs",
    featured: true,
    description: "Full-duplex interactive voice portfolio assistant powered by Google Gemini AI and FastAPI WebSockets with client-side speech recognition and synthesis.",
    highlights: [
      "Real-time voice streaming with sub-second turnaround and round-robin multi-key API failover.",
      "Custom security guardrails preventing prompt injection and sanitizing outgoing code leaks or system paths.",
      "Offline keyword RAG fallback engine providing uninterrupted answers during quota limits."
    ],
    stack: ["FastAPI", "WebSockets", "Google Gemini AI", "Guardrails", "Python", "Local RAG"],
    githubUrl: "https://github.com/Lichetsega/Li-s-Personal-Assistant",
    demoUrl: null
  },
  {
    id: "rag-chatbot",
    title: "RAG Document Chatbot",
    tagline: "Context-Aware Semantic Retrieval Engine",
    category: "ai",
    categoryLabel: "Semantic Search",
    featured: false,
    description: "Context-aware conversational assistant architecture with semantic retrieval capabilities to parse internal documents and provide precise, hallucination-resistant responses with citations.",
    highlights: [
      "Optimized document chunking with metadata tagging and vector embeddings.",
      "Precise source citation and context window management to eliminate hallucinations.",
      "High-recall retrieval pipeline evaluated against custom test benchmarks."
    ],
    stack: ["Python", "RAG", "ChromaDB", "Document Chunking", "Semantic Search"],
    githubUrl: "https://github.com/Lichetsega/Retrieval-Augmented-generation-RAG-chatbot-",
    demoUrl: null
  },
  {
    id: "world-quiz",
    title: "World Geography Quiz Engine",
    tagline: "Full-Stack Relational Database Web App",
    category: "fullstack",
    categoryLabel: "Full-Stack & DB",
    featured: false,
    description: "Interactive geographic quiz web platform backed by a relational PostgreSQL database and Node.js with automated scoring and session persistence.",
    highlights: [
      "Normalized relational schema in PostgreSQL storing country data, capitals, and session history.",
      "Randomized question generators preventing question repeat patterns.",
      "Clean REST API handling score verification and leaderboard tabulations."
    ],
    stack: ["PostgreSQL", "Node.js", "Express", "JavaScript (ES6+)", "CSS3"],
    githubUrl: "https://github.com/Lichetsega/world-quiz",
    demoUrl: null
  },
  {
    id: "infant-vaccination",
    title: "Infant Immunization Tracking Portal",
    tagline: "Clinical Healthcare Management System",
    category: "fullstack",
    categoryLabel: "Full-Stack & Health",
    featured: false,
    description: "A comprehensive clinical management system built to schedule, track, and record infant immunization histories with relational data integrity.",
    highlights: [
      "Role-based access control for healthcare workers, administrators, and parents.",
      "Automated milestone reminders for scheduled pediatric vaccination schedules.",
      "Relational integrity and audit logs for clinical record modifications."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Lichetsega/infant-vaccination",
    demoUrl: null
  },
  {
    id: "password-checker",
    title: "Password Exposure Auditor",
    tagline: "Zero-Knowledge Credential Security Tool",
    category: "tools",
    categoryLabel: "Security & Privacy",
    featured: false,
    description: "Zero-knowledge credential security tool querying the Have I Been Pwned API using SHA-1 cryptographic hashing and the mathematical k-Anonymity privacy model.",
    highlights: [
      "Zero credential leakage guaranteed by sending solely the 5-character hash prefix over TLS.",
      "Client-side hashing preventing plaintext password transmission.",
      "Fast response evaluation matching the remaining 35 hash characters locally."
    ],
    stack: ["Python", "SHA-1 Hashing", "k-Anonymity", "HIBP API", "Cryptography"],
    githubUrl: "https://github.com/Lichetsega/password_checker",
    demoUrl: null
  },
  {
    id: "hacker-news-scraper",
    title: "Hacker News Signal Filter",
    tagline: "High-Yield Engineering News Crawler",
    category: "tools",
    categoryLabel: "Automation & Scraping",
    featured: false,
    description: "Targeted multi-page web crawler engineered to eliminate technical news noise by extracting, aggregating, and ranking high-signal discussions with score thresholds.",
    highlights: [
      "Multi-page pagination crawling with polite rate limiting and custom request headers.",
      "Weighted scoring filter retaining discussions above 99 points.",
      "Generates clean structured digest outputs for rapid engineering review."
    ],
    stack: ["Python", "BeautifulSoup", "HTTP Requests", "Data Filtering", "Automation"],
    githubUrl: "https://github.com/Lichetsega/hacker_news-scraper",
    demoUrl: null
  }
];

export const aiKnowledgeBase = {
  insa: "During her 6-month AI Engineering internship at the Information Network Security Administration (INSA), Liche engineered and scaled production RAG and Agentic RAG pipelines. She built autonomous multi-agent routing systems incorporating intent detection, contextual memory, and hybrid retrieval (combining dense vector embeddings with sparse BM25 and phonetic fuzzy search). She also collaborated on security-first AI pipelines and multi-key failover managers.",
  rag: "Liche's AI expertise centers on Agentic RAG architectures. Rather than basic single-shot prompts, her systems use Fused Supervisor Planners, specialized sub-agents (e.g. Itinerary, Heritage, Logistics), semantic caching (≥ 0.82 similarity threshold for zero API latency), and hybrid dense/sparse retrieval with ChromaDB, FAISS, and BM25.",
  assistant: "Her 'Li's AI Virtual Voice Assistant' is a full-duplex interactive voice platform built with FastAPI, WebSockets, client-side STT/TTS, Google Gemini AI, prompt injection guardrails, and an offline keyword RAG fallback engine for zero downtime.",
  backend: "Liche's backend toolkit includes Python (FastAPI, Flask, Uvicorn, Pydantic), Node.js (Express), PostgreSQL, and MySQL. She emphasizes clean RESTful API contracts, relational database normalization, WebSocket concurrency, and high-performance server logic.",
  education: "Liche is in her 5th year graduating class pursuing a B.Sc. in Software Engineering at Jimma University (Faculty of Computing). Her studies cover Distributed Systems, Data Structures & Algorithms, Database Systems, and Machine Learning.",
  availability: "Liche is actively seeking full-time Software Engineer, AI Developer, and Full-Stack Engineering roles, as well as contract collaborations. You can reach her directly at lichetsega@gmail.com, message on Telegram @Lichetsega, or connect on LinkedIn (liche-tsegaye-05a25b361).",
  projects: "Her top projects include the Visit Ethiopia Agentic RAG system (multi-agent tourism intelligence), Li's AI Virtual Voice Assistant (FastAPI + Gemini WebSockets), Password Exposure Auditor (zero-knowledge k-Anonymity security), and World Geography Quiz Engine (PostgreSQL + Node.js).",
  default: "Liche Tsegaye is a Software Engineer & AI Developer based in Ethiopia, completing her B.Sc. at Jimma University with 6 months of AI engineering at INSA. Her core focus is Agentic RAG, autonomous multi-agent workflows, and full-stack backend architectures. How can I help you learn more about her work?"
};

export const samplePrompts = [
  { label: "Agentic RAG & INSA AI Experience", query: "Explain your Agentic RAG and INSA AI experience." },
  { label: "Backend & Systems Tech Stack", query: "What is your backend and database architecture stack?" },
  { label: "Visit Ethiopia Multi-Agent System", query: "Tell me about the Visit Ethiopia Agentic RAG system." },
  { label: "Availability & Contact Details", query: "Are you open to full-time roles and how can I contact you?" }
];
