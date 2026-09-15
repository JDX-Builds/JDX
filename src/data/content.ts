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
    slug: 'client-website',
    title: 'Client Website',
    type: 'Client',
    status: 'Live',
    description: 'A fully responsive, security-hardened website built for a client, from design to deployment.',
    overview:
      'A modern institutional website designed and deployed end-to-end, covering everything from content architecture and admin tooling to cloud infrastructure.',
    problem:
      'The client needed a professional online presence with an easy-to-manage content system, but lacked any existing technical infrastructure or in-house engineering support.',
    solution:
      'We designed a Flask-based platform with a custom admin panel, image and content management, and production-grade security hardening, deployed on a scalable cloud environment with a custom domain.',
    technologies: ['Flask', 'Python', 'HTML', 'Google Cloud Run', 'CSS'],
    gallery: 4,
  },
  {
    slug: 'desktop-application',
    title: 'Desktop Application',
    type: 'Client',
    status: 'Completed',
    description: 'A modular desktop application for streamlined expense tracking and reporting.',
    overview:
      'A five-module desktop application built to help small teams track, categorize, and report on expenses without relying on spreadsheets or cloud subscriptions.',
    problem:
      'The client needed an offline-first tool for financial tracking that didn\u2019t rely on recurring SaaS costs or an internet connection.',
    solution:
      'We built a modular Tkinter application with automated report generation, exporting clean, formatted documents directly from tracked data.',
    technologies: ['Python', 'Tkinter', 'python-docx', 'OOP'],
    gallery: 3,
  },
  {
    slug: 'product-one',
    title: 'InsightLog',
    type: 'Product',
    status: 'Completed',
    description: 'An in-house analytics and logging product built to surface insights from raw system data.',
    overview:
      'InsightLog is a JDX-built product designed to help teams collect, structure, and understand system-level logs without wrestling with heavyweight observability platforms.',
    problem:
      'Small teams and independent developers often lack access to affordable, approachable logging and insight tools built for their scale.',
    solution:
      'We built a lightweight logging and analytics platform focused on clarity and speed, giving developers meaningful insight without unnecessary complexity.',
    technologies: ['Python', 'Bash', 'Log Analysis', 'Shell Scripting'],
    gallery: 3,
  },
  {
    slug: 'product-two',
    title: 'Product Two',
    type: 'Product',
    status: 'In Development',
    description: 'An upcoming JDX product exploring AI-assisted workflows for everyday software teams.',
    overview:
      'Our second in-house product, currently in active development, applies practical AI to streamline a common, repetitive workflow for small software teams.',
    problem:
      'Teams frequently lose time on repetitive, manual tasks that could be automated with the right AI-assisted tooling.',
    solution:
      'We are building a focused tool that applies AI where it adds clear, measurable value — full details to be announced at launch.',
    technologies: ['Python', 'LLM APIs', 'React', 'TypeScript'],
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