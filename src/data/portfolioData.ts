import portfolioImg from "../assets/project_pic/portflio.png"
import sapImg from "../assets/project_pic/sap.jpeg"
import invertyImg from "../assets/project_pic/inverty.jpg"
import mlImg from "../assets/project_pic/ml.jpg"
import iotImg from "../assets/project_pic/iot.jpg"
import fireImg from "../assets/project_pic/fire.png"
import ictisBannerImg from "../assets/project_pic/ictis_banner.png"
import ictisCertImg from "../assets/certification/ictis_certificate.png"
import technoVerseImg from "../assets/project_pic/technoverse_team.png"
import orchestaiImg from "../assets/project_pic/orchestai.png"
import federatedImg from "../assets/project_pic/federated_learning.png"
import biomassImg from "../assets/project_pic/biomass_transformer.png"

import dsaImg from "../assets/certification/DSA C&C++.jpg"
import mlCertImg from "../assets/certification/ML Workshop IISc.jpg"
import digitalImg from "../assets/certification/digital.jpg"
import githubImg from "../assets/certification/github.jpg"
import postmanImg from "../assets/certification/postman.jpg"
import googleAgileImg from "../assets/certification/google_agile.png"
import anthropicClaudeImg from "../assets/certification/anthropic_claude.png"
import mongodbIntroImg from "../assets/certification/mongodb_intro.png"

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  category: 'Web Development' | 'AI/ML' | 'IoT & Embedded' | 'Desktop Application' | 'Enterprise Development'
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  status: 'Live' | 'In Progress' | 'Completed' | 'Competition' | 'Workshop' | 'Hackathon' | 'Internship'
  year: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: { name: string; level?: string }[]
}

export interface TimelineItem {
  year: string
  title: string
  subtitle?: string
  description: string
  icon: string
  category: 'education' | 'experience' | 'achievement' | 'project'
}

export interface Certification {
  title: string
  source: string
  issuedDate: string
  credentialId?: string
  credentialUrl?: string
  skills: string[]
  image: string
}

export interface CurrentlyBuildingItem {
  title: string
  description: string
  status: string
  progress: number
  glowColor: string
}

export const projectsData: Project[] = [
  {
    id: "financial-rag",
    title: "AI Financial Intelligence Engine",
    description: "Production-ready RAG system utilizing FastAPI, ChromaDB, and Next.js to provide semantic analysis and insights on financial documents.",
    longDescription: "Built a comprehensive Retrieval-Augmented Generation (RAG) system tailored for financial intelligence. The platform combines a FastAPI and ChromaDB local backend for vector search with a Next.js 15 dashboard for visualizing financial data, ingesting documents, and enabling natural language querying. Incorporates automated testing with Ragas to quantify hallucination rates and answer faithfulness.",
    image: mlImg,
    category: "AI/ML",
    technologies: ["Next.js", "Python", "FastAPI", "ChromaDB", "RAG", "LLMs"],
    githubUrl: "https://github.com/HarishkannaR11/AI-Financial-Intelligence-Engine-using-RAG",
    featured: true,
    status: "In Progress",
    year: "2026"
  },
  {
    id: "ictis-neurocomputing",
    title: "Financial Market Dynamics — Neurocomputing (ICTIS 2026)",
    description: "First-author Springer-published research paper analyzing financial market regime transitions during COVID-19 using neurocomputing techniques.",
    longDescription: "Research paper titled 'Analysis of Financial Market Dynamics using Neurocomputing for COVID-19 Regime Transitions', digitally presented at the 11th International Conference on Information and Communication Technology for Intelligent Systems (ICTIS 2026) in Bangkok, Thailand (April 9–11, 2026). Published in Springer's Lecture Notes in Networks and Systems (LNNS) series. The work explores how neurocomputing techniques analyze financial market behavior and regime shifts during the COVID-19 period, applying AI/ML models to financial time-series data.",
    image: ictisBannerImg,
    category: "AI/ML",
    technologies: ["Python", "Neurocomputing", "Machine Learning", "Financial Analytics", "Time-Series Analysis", "Springer LNNS"],
    featured: true,
    status: "Completed",
    year: "2026"
  },
  {
    id: "orchestai",
    title: "OrchestAI",
    description: "AI-powered B2B competitor market intelligence platform automating competitor activity monitoring and insight generation.",
    longDescription: "Developed during the 24-hour SNUC Hacks '26 hackathon, OrchestAI is a B2B market intelligence platform. It features automated web scraper agents to monitor competitor landing pages and pricing updates, LLM-driven analysis agents that synthesize strategic business recommendations, and a Next.js dashboard to visualize competitor intelligence in real-time.",
    image: orchestaiImg,
    category: "AI/ML",
    technologies: ["Next.js", "Python", "FastAPI", "LLM Agents", "Web Scraping", "Tailwind CSS"],
    githubUrl: "https://github.com/BHUVANESH-SSN/B2B-Market-Intelligence",
    featured: true,
    status: "Hackathon",
    year: "2026"
  },
  {
    id: "jewelry-crm",
    title: "Jewelry CRM Platform",
    description: "Multi-tenant CRM platform for jewelry businesses with role-based access, GST invoice management, order tracking, and gold rate management.",
    longDescription: "A modern multi-tenant software solution designed specifically for retail and wholesale jewelry owners. Features include secure role-based login (Admin, Staff, Customer), dynamic automated GST invoicing, orders and inventory ledger tracking, and integrations to fetch live gold and silver rates. Built to withstand high-volume retail transactions.",
    image: invertyImg,
    category: "Web Development",
    technologies: ["React", "MongoDB Atlas", "Tailwind CSS", "Node.js", "Express"],
    featured: true,
    status: "Internship",
    year: "2025"
  },
  {
    id: "resume-ranking",
    title: "Placement Prediction & AI Resume Optimizer",
    description: "Top 10 at TechnoVerse Hackathon '26 (out of 260 teams, ₹10K prize). ML-based placement prediction with AI-powered resume tailoring using semantic search and ensemble models.",
    longDescription: "Built an ML-based placement prediction and AI-resume tailoring system that secured a Top 10 finish (out of 260 teams) at the TechnoVerse Hackathon '26, winning a ₹10,000 cash prize. Uses semantic search and ensemble machine learning models to analyze student academic performance, predict placement opportunities, and optimize resumes against target job descriptions. Features an intelligent resume parser leveraging LLMs for structural and content recommendations.",
    image: technoVerseImg,
    category: "AI/ML",
    technologies: ["Python", "Machine Learning", "Semantic Search", "Ensemble Models", "OpenAI API", "n8n"],
    githubUrl: "https://github.com/HarishkannaR11/Placement-Prediction-with-AI-Resume-Optimizer",
    featured: true,
    status: "Hackathon",
    year: "2025"
  },
  {
    id: "federated-learning",
    title: "Federated Client Selection Simulation",
    description: "Collaborative machine learning simulation analyzing optimized client selection algorithms in heterogeneous federated networks.",
    longDescription: "A research project and simulation platform focused on improving federated learning efficiency under data heterogeneity (non-IID data distribution). Focuses on client selection algorithms to minimize global aggregation latency, reduce round delays, and optimize network convergence speed.",
    image: federatedImg,
    category: "AI/ML",
    technologies: ["Python", "Jupyter Notebook", "PyTorch", "Federated Learning", "Research"],
    githubUrl: "https://github.com/HarishkannaR11/Federated_Client_Selection_Simulation",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: "image2biomass",
    title: "Multimodal Transformer Biomass Prediction",
    description: "Transformer-based (ViT + DINO) multimodal ML system combining self-supervised plant imagery embeddings with tabular data for biomass prediction.",
    longDescription: "An end-to-end multimodal machine learning system that replaces conventional CNN pipelines with a Vision Transformer (ViT) and combines it with structured tabular data. Features self-supervised learning via DINO embeddings to capture global context, multimodal fusion (ViT + MLP) for joint representation learning, and a Flask inference layer. Tracked and versioned using MLflow and DagsHub.",
    image: biomassImg,
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "Vision Transformer (ViT)", "DINO", "LightGBM", "Flask", "MLflow", "DagsHub"],
    githubUrl: "https://github.com/HarishkannaR11/Image2BioMass",
    featured: true,
    status: "Completed",
    year: "2026"
  },
  {
    id: "sap-hackfest",
    title: "SAP Hackfest 2025 Solution",
    description: "Enterprise solution developed for sustainable business workflows which successfully qualified as a national Finalist.",
    longDescription: "A sustainability-focused enterprise application built during the SAP Hackfest 2025 competition. Combines cloud databases and automated reporting pipelines on SAP Business Technology Platform (BTP) to optimize resource consumption and compliance tracking for large-scale operations.",
    image: sapImg,
    category: "Enterprise Development",
    technologies: ["SAP BTP", "Cloud Platform", "Sustainability Tech", "Node.js"],
    githubUrl: "https://github.com/HarishkannaR11/SAP-Hackfest-2025",
    featured: false,
    status: "Competition",
    year: "2025"
  },
  {
    id: "fire-fighting-robot",
    title: "Fire Fighting Robot",
    description: "Autonomous robot utilizing microcontrollers and flame sensors to detect and extinguish localized fire sources.",
    longDescription: "An embedded systems project featuring a physical mobile robot equipped with infrared flame sensors, obstacle avoidance capabilities, and an onboard pump system to detect, navigate to, and extinguish fire hazards autonomously.",
    image: fireImg,
    category: "IoT & Embedded",
    technologies: ["Arduino", "Sensors", "Robotics", "Obstacle Avoidance", "C++"],
    githubUrl: "https://github.com/HarishkannaR11/FIRE-FIGHTING-ROBOT-USING-ARDUINO",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: "iot-weather-station",
    title: "IoT Weather Station",
    description: "Real-time environmental monitoring station syncing telemetry to Blynk cloud dashboards.",
    longDescription: "A solar-capable smart station measuring ambient temperature, humidity, and barometric pressure. Uses ESP8266 to push sensor telemetry to a centralized Blynk cloud dashboard, enabling remote monitoring and historical trend analytics.",
    image: iotImg,
    category: "IoT & Embedded",
    technologies: ["Arduino", "ESP8266", "Blynk Cloud", "Sensors", "C++"],
    githubUrl: "https://github.com/HarishkannaR11/IOT-WEATHER-STATION-WITH-ARDUINO-",
    featured: false,
    status: "Completed",
    year: "2024"
  }
]

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "HTML5/CSS3" },
      { name: "Bootstrap" }
    ]
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Java (JDBC)" }
    ]
  },
  {
    name: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB Atlas" },
      { name: "MySQL" },
      { name: "SQL Plus" }
    ]
  },
  {
    name: "AI/ML",
    icon: "Cpu",
    skills: [
      { name: "Python" },
      { name: "Vision Transformers (ViT)" },
      { name: "Machine Learning" },
      { name: "Computer Vision (CV)" },
      { name: "Federated Learning" },
      { name: "OpenAI APIs" },
      { name: "MLflow / DagsHub" },
      { name: "n8n / LLM Orchestration" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-Learn" }
    ]
  },
  {
    name: "Cloud & Tools",
    icon: "Wrench",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Postman" },
      { name: "Git" },
      { name: "VS Code" }
    ]
  },
  {
    name: "IoT",
    icon: "Zap",
    skills: [
      { name: "Arduino" },
      { name: "ESP8266" },
      { name: "Blynk Cloud" },
      { name: "Sensors & Actuators" }
    ]
  }
]

export const timelineData: TimelineItem[] = [
  {
    year: "2026",
    title: "AI-Augmented Software Development Intern",
    subtitle: "TechLift Digital · Chennai, Tamil Nadu (Remote)",
    description: "Currently building AI-augmented software solutions with Next.js, CRM platforms, and modern full-stack tooling in a remote internship role.",
    icon: "Briefcase",
    category: "experience"
  },
  {
    year: "2026",
    title: "Springer Research Paper — ICTIS 2026",
    subtitle: "First Author / Digital Presentation — Bangkok, Thailand",
    description: "Published 'Analysis of Financial Market Dynamics using Neurocomputing for COVID-19 Regime Transitions' in Springer LNNS. Digitally presented at the 11th International Conference on ICT for Intelligent Systems.",
    icon: "GraduationCap",
    category: "achievement"
  },
  {
    year: "2026",
    title: "SNUC Hacks '26",
    subtitle: "Hackathon Participant",
    description: "Built OrchestAI, a competitor intelligence system featuring web scrapers and AI agents within 24 hours.",
    icon: "Trophy",
    category: "achievement"
  },
  {
    year: "2026",
    title: "TechnoVerse Hackathon '26",
    subtitle: "Top 10 Finalist / ₹10,000 Cash Prize",
    description: "Secured a Top 10 position out of 260 participating teams. Built an ML-based Placement Prediction & AI Resume Tailoring system using semantic search and ensemble models.",
    icon: "Trophy",
    category: "achievement"
  },
  {
    year: "2025",
    title: "Federated Learning Research Paper",
    subtitle: "Lead Researcher / Author",
    description: "Published research simulation modeling client selection algorithms in heterogeneous, non-IID Federated Learning networks.",
    icon: "GraduationCap",
    category: "achievement"
  },
  {
    year: "2025",
    title: "SAP Hackfest 2025 - Finalist",
    subtitle: "Competition",
    description: "Proposed and built enterprise sustainable business workflows under the Hackfest program, qualifying as national finalists.",
    icon: "Trophy",
    category: "achievement"
  },
  {
    year: "2025",
    title: "Software Engineer Intern",
    subtitle: "TechLift Digital · Chennai, Tamil Nadu (Remote) · Part-time",
    description: "Built production micro-SaaS products and full-stack applications using Next.js over a 5-month part-time engagement (Dec 2025 – Apr 2026).",
    icon: "Briefcase",
    category: "experience"
  },
  {
    year: "2025",
    title: "SSN IEEE PELS Club Officer",
    subtitle: "Marketing and Social Media Executive",
    description: "Spearheaded digital content creation, technological promotions, and event outreach campaigns for IEEE Power Electronics Society Club.",
    icon: "Megaphone",
    category: "experience"
  },
  {
    year: "2025",
    title: "SSN Lakshya Entrepreneurship Club Officer",
    subtitle: "Deputy Head of Sponsorship",
    description: "Secured corporate partnerships and managed financial resource allocation for university-wide entrepreneurship programs.",
    icon: "Briefcase",
    category: "experience"
  },
  {
    year: "2024 - Present",
    title: "Pursuing B.E. in Computer Science",
    subtitle: "SSN College of Engineering",
    description: "Currently working on full-stack web applications, distributed AI, machine learning and systems engineering.",
    icon: "GraduationCap",
    category: "education"
  },
  {
    year: "2021 - 2024",
    title: "Diploma in Electrical & Electronics",
    subtitle: "Technical Education",
    description: "Studied electronic hardware, power grids, and basic controllers, setting up the hardware context for IoT engineering projects.",
    icon: "Zap",
    category: "education"
  }
]

export const certificationsData: Certification[] = [
  {
    title: "ICTIS 2026 — Springer Conference Paper",
    source: "Springer / ICTIS 2026",
    issuedDate: "Apr 2026",
    skills: ["Neurocomputing", "Financial Analytics", "Machine Learning", "Research", "Time-Series Analysis"],
    image: ictisCertImg
  },
  {
    title: "Agile Project Management",
    source: "Google",
    issuedDate: "Jan 2026",
    credentialId: "EEKRT7Q61XCH",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EEKRT7Q61XCH",
    skills: ["Project Management", "Scrum"],
    image: googleAgileImg
  },
  {
    title: "Claude Code in Action",
    source: "Anthropic",
    issuedDate: "Feb 2026",
    credentialId: "niyyy8vdu72c",
    credentialUrl: "https://verify.skilljar.com/c/niyyy8vdu72c",
    skills: ["Context Management", "Hook System"],
    image: anthropicClaudeImg
  },
  {
    title: "Introduction to MongoDB",
    source: "MongoDB",
    issuedDate: "Mar 2026",
    credentialId: "20UKYOID6IHL",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/20UKYOID6IHL",
    skills: ["MongoDB", "NoSQL", "Database"],
    image: mongodbIntroImg
  },
  {
    title: "Postman API Fundamentals Student Expert",
    source: "Badgr / Postman",
    issuedDate: "2025",
    credentialUrl: "https://badgr.com/public/assertions/XgRZUCU3QYOUn8xKNTGAHw?identity__email=krisharish11%40gmail.com",
    skills: ["API Development", "Postman", "REST APIs", "API Testing"],
    image: postmanImg
  },
  {
    title: "GitHub Foundation",
    source: "Credly / GitHub",
    issuedDate: "2024",
    credentialUrl: "https://www.credly.com/badges/543b9faf-d647-4000-bb0c-855f336c23e1/public_url",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    image: githubImg
  },
  {
    title: "Foundations of Digital Marketing and E-commerce",
    source: "Google",
    issuedDate: "Jun 2025",
    credentialId: "YK739AIIMI2V",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/YK739AIIMI2V",
    skills: ["Brand Awareness", "Online Advertising", "Digital Marketing", "SEO", "Analytics"],
    image: digitalImg
  },
  {
    title: "ML Workshop Certification",
    source: "IISc Bangalore",
    issuedDate: "2024",
    skills: ["Machine Learning", "Python", "Data Analysis", "AI Models"],
    image: mlCertImg
  },
  {
    title: "Data Structures & Algorithms in C/C++",
    source: "Udemy",
    issuedDate: "2024",
    skills: ["Data Structures", "Algorithms", "C++"],
    image: dsaImg
  }
]

export const currentlyBuildingData: CurrentlyBuildingItem[] = [
  {
    title: "Jewelry CRM SaaS",
    description: "Adding multi-tenant architecture, offline invoice caching, and automated ledger reporting.",
    status: "Building",
    progress: 80,
    glowColor: "rgba(6, 182, 212, 0.4)" // cyan
  },
  {
    title: "AI Resume Ranking System",
    description: "Optimizing candidate parsing and embedding comparisons for higher accuracy.",
    status: "Polishing",
    progress: 95,
    glowColor: "rgba(16, 185, 129, 0.4)" // emerald
  },
  {
    title: "Cloud Computing Skills",
    description: "Learning AWS serverless architecture (Lambda, API Gateway) and Docker containerization.",
    status: "Learning",
    progress: 60,
    glowColor: "rgba(99, 102, 241, 0.4)" // indigo
  },
  {
    title: "Full Stack Development",
    description: "Deep diving into Next.js App Router, server actions, and PostgreSQL optimization.",
    status: "Exploring",
    progress: 75,
    glowColor: "rgba(236, 72, 153, 0.4)" // pink
  },
  {
    title: "Financial RAG Intelligence",
    description: "Building a production-ready RAG system using FastAPI, ChromaDB, and Next.js for semantic financial analysis.",
    status: "Building",
    progress: 85,
    glowColor: "rgba(234, 179, 8, 0.4)" // yellow
  }
]
