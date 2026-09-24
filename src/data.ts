import {
  Server,
  MonitorSmartphone,
  Database,
  Search,
  CreditCard,
  Blocks,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Profile ---------------------------------- */

export const profile = {
  name: "Manoj Kumar",
  role: "PHP / Laravel Full-Stack Developer",
  email: "manoj.kumar23official@gmail.com",
  phone: "+91 87009 56484",
  phoneHref: "+918700956484",
  location: "India",
  linkedin: "https://linkedin.com/in/manoj-kumar-b0a602197",
  github: "https://github.com/Manoj-Kumar1996",
  stack: ["PHP", "Laravel", "React.js", "Inertia.js", "MySQL", "REST APIs", "JavaScript", "On-Page SEO"],
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Websites Delivered" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 6, suffix: "", label: "Payment Gateways Integrated" },
];

/* ---------------------------------- Skills ---------------------------------- */

export type SkillGroup = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: Server,
    title: "Backend Development",
    blurb: "Robust server-side architecture & secure application logic.",
    items: [
      "PHP", "Laravel", "MVC Architecture", "OOP", "RESTful APIs",
      "Authentication & Authorization", "Laravel Passport", "Laravel Sanctum", "JWT", "CRUD Development",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    blurb: "Responsive, dynamic interfaces across modern stacks.",
    items: [
      "React.js", "Inertia.js", "Redux", "Next.js", "JavaScript / ES6+", "Blade",
      "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Vite", "AJAX / jQuery",
    ],
  },
  {
    icon: Database,
    title: "Database",
    blurb: "Data modeling, migrations & query performance.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Database Design", "Query Optimization"],
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    blurb: "Technical & on-page SEO that moves rankings.",
    items: [
      "On-Page SEO", "Technical SEO Fixes", "Meta Optimization", "Schema Markup",
      "Canonical Tags", "Internal Linking", "Sitemap & Robots.txt", "Indexing & Crawlability",
      "Performance Optimization", "Search Console Analysis",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    blurb: "Production-grade transaction integrations.",
    items: ["Razorpay", "Stripe", "PayPal", "Paytm", "HDFC SmartGateway", "CCAvenue"],
  },
  {
    icon: Blocks,
    title: "CMS & Platforms",
    blurb: "Rapid delivery on mature ecosystems.",
    items: ["WordPress", "Shopify", "Shopify Liquid", "Wix", "Botble CMS"],
  },
  {
    icon: Workflow,
    title: "Development Practices",
    blurb: "How I keep codebases healthy & teams unblocked.",
    items: [
      "REST API Development", "Caching", "RBAC", "Agile / Scrum",
      "Code Reviews", "Postman", "Git", "Testing & Deployment",
    ],
  },
];

/* --------------------------------- Experience -------------------------------- */

export type Experience = {
  index: string;
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    index: "01",
    role: "PHP / Laravel Developer",
    company: "Pandaje Web Services",
    period: "3 Years",
    type: "Full-time",
    points: [
      "Developed and maintained production PHP / Laravel applications used by thousands of end-users.",
      "Designed RESTful APIs connecting Laravel backends with React frontends; tested and debugged with Postman.",
      "Built secure authentication with Laravel Passport, Sanctum & JWT, plus role-based access control (RBAC).",
      "Integrated Razorpay, Stripe & PayPal gateways for online payment processing.",
      "Optimized database queries and implemented caching to measurably improve performance.",
      "Diagnosed and fixed on-page & technical SEO issues — metadata, headings, canonicals, indexing and crawlability.",
    ],
    tags: ["Laravel", "React.js", "MySQL", "JWT", "RBAC", "Payments", "SEO"],
  },
  {
    index: "02",
    role: "Freelance Full-Stack Developer",
    company: "Multi-Domain Client Projects",
    period: "50+ Projects",
    type: "Independent",
    points: [
      "Delivered 50+ websites & web apps across real estate, healthcare, construction, interior design and service industries.",
      "Shipped with Laravel, React, Next.js, WordPress, Shopify, Wix & Botble CMS — choosing the stack per project fit.",
      "Audited sites for on-page SEO problems and fixed meta tags, heading hierarchy, URLs, canonicals and internal linking.",
      "Resolved Google Search Console indexing, sitemap, robots.txt and crawlability issues.",
      "Built custom real-estate search & listings (FindYourLand) and an SEO-first Next.js site (Vyom Regency).",
      "Owned full delivery — requirements, development, testing, SEO, deployment and maintenance.",
    ],
    tags: ["Laravel", "Next.js", "WordPress", "Shopify", "Botble CMS", "SEO"],
  },
  {
    index: "03",
    role: "Website Developer",
    company: "Dream Reflection Media Pvt. Ltd.",
    period: "1 Year",
    type: "Full-time",
    points: [
      "Built responsive, cross-browser compatible websites with HTML, CSS, JavaScript and PHP.",
      "Converted UI/UX designs and mockups into pixel-accurate web pages.",
      "Integrated third-party APIs and external services into client websites.",
      "Applied on-page SEO best practices — fixing titles, meta descriptions, headings, URLs, images and internal links.",
      "Handled maintenance, debugging, content updates, performance improvements and feature enhancements.",
    ],
    tags: ["HTML / CSS", "JavaScript", "PHP", "APIs", "SEO"],
  },
];

/* ---------------------------------- Projects --------------------------------- */

export type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "E-Commerce Platform",
    category: "Full-Stack · Multi-Gateway Payments",
    description:
      "A full-stack commerce engine with complete product, cart, order and customer workflows — backed by tri-role access for admins, vendors and customers, and multi-gateway payment processing.",
    features: ["Admin / Vendor / Customer RBAC", "Razorpay + Stripe checkout", "Order & transaction management"],
    tech: ["Laravel", "React.js", "Redux", "MySQL", "Razorpay", "Stripe"],
    image: "/images/project-ecommerce.jpg",
  },
  {
    index: "02",
    title: "RESTful API Management System",
    category: "Backend · API Infrastructure",
    description:
      "A secure REST API suite with CRUD endpoints, pagination and filtering, JWT-based auth and rate-limiting — fully documented in Postman for third-party consumers.",
    features: ["JWT auth & authorization", "Rate-limiting & API security", "Postman-documented endpoints"],
    tech: ["PHP", "Laravel", "MySQL", "JWT", "Postman"],
    image: "/images/project-api.jpg",
  },
  {
    index: "03",
    title: "Student Management System",
    category: "Full-Stack · Laravel + Inertia",
    description:
      "A full-stack academic platform pairing a Laravel backend with a React + Inertia.js frontend — delivering server-driven SPA fluidity for student records, workflows and authentication.",
    features: ["Database-driven student workflows", "Inertia.js server-driven SPA", "Auth + CRUD modules"],
    tech: ["Laravel", "React.js", "Inertia.js", "MySQL"],
    image: "/images/project-student.jpg",
  },
  {
    index: "04",
    title: "FindYourLand",
    category: "Real Estate · CMS Customization",
    description:
      "A real-estate listing platform built on Botble CMS with custom property search, deep CMS-level customization and SEO-friendly structures tuned for search accessibility.",
    features: ["Custom property search & filters", "Botble CMS customization", "SEO-friendly page structures"],
    tech: ["Botble CMS", "PHP", "MySQL", "SEO"],
    image: "/images/project-realestate.jpg",
  },
  {
    index: "05",
    title: "Vyom Regency",
    category: "Real Estate · SEO-First Website",
    description:
      "An SEO-focused real-estate website in Next.js — with deliberate metadata architecture, clean URLs, property-focused content structures and internal linking built for discoverability.",
    features: ["On-page + technical SEO build", "Metadata & URL architecture", "Responsive property pages"],
    tech: ["Next.js", "JavaScript", "SEO", "Tailwind CSS"],
    image: "/images/project-vyom.jpg",
  },
];

/* ------------------------------------- SEO ------------------------------------ */

export const seoCapabilities = [
  "Meta titles & descriptions",
  "Heading structure (H1–H6)",
  "SEO-friendly URL design",
  "Canonical tag implementation",
  "Internal linking strategy",
  "Image alt-text optimization",
  "Sitemap & robots.txt fixes",
  "Indexing & crawlability repair",
  "Structured data / schema markup",
  "Open Graph metadata",
  "Performance optimization",
  "Search Console issue analysis",
];

export const auditScores = [
  { label: "SEO", value: 100 },
  { label: "Performance", value: 96 },
  { label: "Accessibility", value: 98 },
  { label: "Best Practices", value: 97 },
];

export const auditChecks = [
  { label: "Missing meta descriptions", status: "0 found" },
  { label: "Duplicate H1 tags", status: "0 found" },
  { label: "Broken canonical URLs", status: "0 found" },
  { label: "Unindexed pages", status: "resolved" },
  { label: "Images missing alt text", status: "0 found" },
];

/* ------------------------------ Education / misc ------------------------------ */

export const education = {
  degree: "Bachelor of Technology — Mechanical Engineering",
  school: "KCC Institute of Technology & Management",
  period: "2016 — 2020",
};

export const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional" },
];
