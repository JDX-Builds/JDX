import type { ComponentType } from 'react'
import {
  Code2, Globe, MonitorSmartphone, BrainCircuit, ShieldCheck,
  Sparkles, Cpu, Lock, Users, Gauge, Lightbulb, type LucideProps
} from 'lucide-react'

export interface Service {
  slug: string
  title: string
  icon: ComponentType<LucideProps>
  summary: string
  description: string
  technologies: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    icon: Code2,
    summary: 'Purpose-built systems designed around how your business actually operates.',
    description:
      'We design and build bespoke software from the ground up — internal tools, automation platforms, and complex business systems — engineered to fit your workflows instead of forcing you to adapt to off-the-shelf limitations.',
    technologies: ['Python', 'TypeScript', 'Node.js', 'SQL', 'Docker'],
    benefits: [
      'Software shaped around your exact workflow, not a generic template',
      'Scalable architecture that grows with your business',
      'Clean, documented codebases your team can maintain long-term',
      'Direct collaboration with the engineers building your product',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: Globe,
    summary: 'Fast, modern websites and web applications built for growth.',
    description:
      'From marketing sites to full-scale web applications, we build fast, accessible, and responsive experiences using modern frameworks — engineered for performance, SEO, and a seamless experience on any device.',
    technologies: ['HTML', 'TypeScript', 'Flask', 'Tailwind CSS', 'Json', 'Deployment'],
    benefits: [
      'Sub-second load times and strong Core Web Vitals',
      'Responsive design that works flawlessly across devices',
      'SEO-friendly architecture built in from day one',
      'Ongoing support as your product evolves',
    ],
  },
  {
    slug: 'desktop-applications',
    title: 'Desktop Applications',
    icon: MonitorSmartphone,
    summary: 'Reliable cross-platform desktop software for demanding workflows.',
    description:
      'We build robust desktop applications for teams that need offline reliability, tight system integration, or heavy data processing — from internal tools to full commercial products.',
    technologies: ['Python (Tkinter/PyQt)', 'C++', 'SQL', 'Cross-platform packaging'],
    benefits: [
      'Works reliably without depending on an internet connection',
      'Deep integration with local files, hardware, and systems',
      'Polished, intuitive interfaces for non-technical users',
      'Packaged and ready to install on Windows, macOS, or Linux',
    ],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    summary: 'Practical AI features that solve real problems, not novelty demos.',
    description:
      'We integrate machine learning and AI where it genuinely adds value — from intelligent automation and computer vision to predictive models and LLM-powered features — always grounded in measurable outcomes.',
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'LLM APIs', 'scikit-learn', 'MediaPipe'],
    benefits: [
      'AI features scoped to real, measurable business value',
      'Models built and evaluated with rigorous testing',
      'Seamless integration into your existing product',
      'Clear guidance on data, cost, and long-term maintenance',
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Services',
    icon: ShieldCheck,
    summary: 'Security built into your software from the first line of code.',
    description:
      'Our team brings a security-first mindset to every engagement — from secure-by-design architecture and hardening to vulnerability assessment — so your systems are resilient, not just functional.',
    technologies: ['OWASP Top 10', 'Static & dynamic analysis', 'Rate limiting & CSRF protection', 'Network security', 'Threat modeling'],
    benefits: [
      'Security embedded from architecture, not bolted on later',
      'Reduced exposure to common attack vectors',
      'Clear, actionable reporting on identified risks',
      'Ongoing hardening as threats evolve',
    ],
  },
  {
    slug: 'consulting',
    title: 'Consulting',
    icon: Lightbulb,
    summary: 'Technical guidance to help you make the right decisions early.',
    description:
      'Before writing a line of code, we help teams and founders think through architecture, technology choices, and feasibility — so the software you build is the software you actually need.',
    technologies: ['Architecture review', 'Technical due diligence', 'Feasibility & cost scoping', 'Roadmapping'],
    benefits: [
      'Objective, technical perspective on your product plans',
      'Avoid costly architectural mistakes before development starts',
      'Clear roadmaps and realistic cost estimates',
      'A technical partner you can return to as you scale',
    ],
  },
]

export interface ServiceCardData {
  title: string
  icon: ComponentType<LucideProps>
  description: string
  slug: string
}

export const serviceCards: ServiceCardData[] = services.map((s) => ({
  title: s.title,
  icon: s.icon,
  description: s.summary,
  slug: s.slug,
}))

export interface Project {
  slug: string
  title: string
  type: 'Client' | 'Product'
  status: 'Live' | 'In Development' | 'Completed'
  description: string
  overview: string
  problem: string
  solution: string
  technologies: string[]
  gallery: number
}

export const projects: Project[] = [
  {
    slug: 'cherupushpam up school',
    title: 'Cherupushpam UP School',
    type: 'Client',
    status: 'Completed',
    description: "This project reflects JDX's commitment to building modern, accessible, and reliable digital solutions. Working closely with the school, we developed a website that provides students, parents, and visitors with an intuitive platform to explore the institution, its achievements, academics, gallery, announcements, and more.",
    overview:
      'School Website Development involved building and deploying a full-stack website for Cherupushpam U.P. School using Flask and Jinja2. The project included a secure admin panel with session-based authentication, enabling gallery image management with proper file validation and a dynamic announcement system. The team developed a responsive multi-page interface with animations, counters, and a carousel banner for better user experience. A category-based gallery with lightbox preview and dynamic content rendering was also implemented, ensuring efficient media management and an engaging front-end design.',
    problem:
      'The school required a centralized online platform to present academic information, announcements, faculty details, and school activities while allowing administrators to easily manage website content and gallery media.',
    solution:
      'Developed a responsive full-stack school website using Flask and Jinja2 with multiple public pages and a secure admin panel. The system enables administrators to manage gallery images and announcements, while dynamic templates, category-based galleries, lightbox previews, animations, and carousel components provide an interactive and user-friendly experience.',
    technologies: ['Python', 'Java Script', 'Jinja2', 'Html','Css'],
    gallery: 3,
  },
  {
    slug: 'InsightLog',
    title: 'InsightLog: A Lightweight Framework for Explainable Incident Detection in Linux System Logs',
    type: 'Product',
    status: 'Completed',
    description: 'InsightLog was designed to help security analysts and system administrators detect suspicious activities from Linux authentication and system logs in real time. By combining structured log parsing, rule-based anomaly detection, incident correlation, and an explainable decision-support interface, the platform transforms raw log data into actionable security insights.',
    overview:
      'The system focuses on the analysis of Linux authentication and system logs (auth.log and syslog) generated on a single host or small-scale Linux environment. It supports real-time log ingestion and detection as well as historical log replay for post-incident review and auditing. The framework performs rule-based anomaly and incident detection using structured log fields and temporal correlation without relying on machine learning techniques. Detected anomalies are aggregated into incident-level representations that include timelines, affected entities, severity levels, and supporting evidence. An operator-centric decision-support interface provides explainable incident summaries and allows querying of detected incidents within specified time ranges. The system operates under a human-in-the-loop model, where response actions are suggested but not automatically executed.',
    problem:
      'Linux systems generate large volumes of authentication and system logs, making it difficult for security analysts to manually identify suspicious activities. Traditional log monitoring can produce excessive noise and may lack clear explanations or correlations between related events.',
    solution:
      'InsightLog provides a lightweight, rule-based framework that parses and structures Linux logs using regular expressions, extracts suspicious patterns, and correlates events across temporal windows. It stores logs in a lightweight database and provides timelines, summaries, and evidence-based insights to support real-time monitoring and forensic investigation while keeping response decisions under human control.',
    technologies: ['Python', 'Bash', 'Log Analysis', 'Shell Scripting'],
    gallery: 3,
  },
  {
    slug: 'unique brothers accounts manager',
    title: 'Unique Brothers Accounts Manager',
    type: 'Client',
    status: 'Completed',
    description: "Designed to simplify accounting and record management operations, the software was built to provide an efficient, organized, and user-friendly solution tailored to the client's requirements.",
    overview:
      "A desktop application for recording daily income and expenses, built with Python and Tkinter. It captures cash, UPI, and credit income alongside itemized online/cash expenses, then generates a structured Microsoft Word (.docx) report for each day — including opening balance, sales summary, expense breakdown, and closing balance — along with a running cumulative summary across all entries.",
    problem:
      'The client needed a simple and reliable way to record daily income and expenses while maintaining accurate cash, UPI, and credit records. Manual accounting made it difficult to track daily balances, calculate profits, maintain cumulative records, and generate organized financial reports.',
    solution:
      'Developed a desktop accounting application using Python and Tkinter to manage date-based income and itemized expenses. The system records cash, UPI, and credit transactions, calculates opening and closing balances, and automatically generates structured Microsoft Word reports for each day. It also maintains a cumulative summary of sales, expenses, and profit, with features such as a safe calculator, duplicate-date handling, previous-balance tracking, and file-lock error handling.',
    technologies: ['Python', 'Tkinter', 'python-docx', 'OOP'],
    gallery: 2,
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'JDX took a vague idea and turned it into a working product faster than we thought possible, without cutting corners on security or quality.',
    name: 'Anjali Menon',
    role: 'Founder, Early-stage Startup',
  },
  {
    quote: 'What stood out was how much they cared about doing things properly — clean code, real documentation, and clear communication throughout.',
    name: 'Rahul Varma',
    role: 'Operations Lead, Client Organization',
  },
  {
    quote: 'They think like engineers and like product people at the same time. That combination is rare, especially at this stage of their careers.',
    name: 'Priya Nair',
    role: 'Technical Advisor',
  },
]

export const whyChooseUs = [
  { icon: Sparkles, title: 'Innovative Solutions', description: 'We approach every problem with fresh thinking, not recycled templates.' },
  { icon: Cpu, title: 'Modern Technologies', description: 'We build with current, production-proven tools \u2014 never outdated stacks.' },
  { icon: Lock, title: 'Secure Development', description: 'Security is designed in from the architecture stage, not added afterward.' },
  { icon: Users, title: 'Client-Centric Approach', description: 'We build with you, not just for you \u2014 clear communication at every stage.' },
  { icon: Gauge, title: 'Quality Engineering', description: 'Clean, tested, maintainable code that\u2019s built to last, not just to ship.' },
]

export interface TeamMember {
  name: string
  role: string
  linkedin: string
}

export const team: TeamMember[] = [
  {
    name: 'Hridhay Krishna H',
    role: '',
    linkedin: 'https://www.linkedin.com/in/hridhay-krishna-h',
  },
  {
    name: 'Jaise Joy',
    role: '',
    linkedin: 'https://www.linkedin.com/in/jaise-joy-jj11',
  },
  {
    name: 'Abhiram MP',
    role: '',
    linkedin: 'https://www.linkedin.com/in/abhiram-m-p-dvt007',
  },
]

export const coreValues = [
  { title: 'Integrity', description: 'We build honestly \u2014 realistic timelines, transparent pricing, and no overselling.' },
  { title: 'Craftsmanship', description: 'We take pride in clean architecture and code that\u2019s built to be maintained, not just to ship.' },
  { title: 'Curiosity', description: 'We stay close to new tools and research, and bring what\u2019s genuinely useful into our work.' },
  { title: 'Ownership', description: 'We treat every client project with the same care we bring to our own products.' },
]

export const contactInfo = {
  email: 'jdx3377@gmail.com',
  github: 'https://github.com/JDX-Builds',
  githubLabel: 'github.com/JDX-Builds',
  linkedin: 'https://www.linkedin.com/company/jdx-builds',
  linkedinLabel: 'linkedin.com/company/jdx-builds',
}