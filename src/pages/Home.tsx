import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import HeroGraphic from '../components/HeroGraphic'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import { serviceCards, projects, testimonials, whyChooseUs } from '../data/content'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
        <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="eyebrow">Founded 2025 &middot; Software Studio</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl">
              Turning Ideas Into <span className="gradient-text">Intelligent Software.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-500 dark:text-slate-400 sm:text-lg">
              We build AI-powered applications, secure digital solutions, modern websites, desktop
              software, and innovative products.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <NavLink to="/projects" className="btn-primary">
                View Our Work <ArrowUpRight size={16} />
              </NavLink>
              <NavLink to="/contact" className="btn-secondary">
                Contact Us
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-pad border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              A small studio, built to think like engineers and ship like a startup.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-500 dark:text-slate-400">
              JDX is a software startup founded in 2025 by three engineering students with a passion
              for building technology that solves real-world problems. We specialize in AI,
              cybersecurity, web development, desktop applications, and custom software &mdash; and
              alongside client work, we build our own products.
            </p>
            <NavLink
              to="/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue dark:text-brand-cyan"
            >
              More about JDX <ArrowRight size={15} />
            </NavLink>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="grid grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2025' },
              { label: 'Founders', value: '3' },
              { label: 'Core Domains', value: '5+' },
              { label: 'Focus', value: 'AI & Security' },
            ].map((stat) => (
              <div key={stat.label} className="card-surface p-6">
                <p className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-400 dark:text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Services engineered around your problem, not our product line."
              description="From first line of code to production deployment, we cover the full spectrum of modern software engineering."
            />
            <AnimatedSection delay={0.15}>
              <NavLink to="/services" className="btn-secondary whitespace-nowrap">
                All Services <ArrowRight size={15} />
              </NavLink>
            </AnimatedSection>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service, i) => (
              <ServiceCard key={service.slug} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-pad border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Work"
              title="Featured Projects"
              description="A mix of client engagements and our own in-house products."
            />
            <AnimatedSection delay={0.15}>
              <NavLink to="/projects" className="btn-secondary whitespace-nowrap">
                All Projects <ArrowRight size={15} />
              </NavLink>
            </AnimatedSection>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JDX */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Why JDX"
            title="Why teams choose to build with us"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-cyan">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500 dark:text-slate-400">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="What Clients Say" title="Trusted by the people we build with" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CTASection />
      </div>
    </>
  )
}
