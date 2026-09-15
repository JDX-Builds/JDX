import { useParams, NavLink } from 'react-router-dom'
import { ArrowLeft, ImageIcon } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'
import { projects } from '../data/content'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-2xl font-bold text-navy-900 dark:text-white">Project not found</h1>
        <NavLink to="/projects" className="btn-primary mt-6 inline-flex">
          Back to Projects
        </NavLink>
      </div>
    )
  }

  return (
    <>
      <section className="border-b border-navy-900/[0.06] bg-surface-light py-16 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page">
          <AnimatedSection>
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-cyan"
            >
              <ArrowLeft size={15} /> Back to Projects
            </NavLink>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-navy-900 px-3.5 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-navy-900">
                {project.type}
              </span>
              <span className="rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-xs font-semibold text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                {project.status}
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-500 dark:text-slate-400">
              {project.overview}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <AnimatedSection>
              <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">The Problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-slate-400">{project.problem}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">The Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-slate-400">{project.solution}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {Array.from({ length: project.gallery }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 via-navy-700 to-brand-blue/60"
                  >
                    <ImageIcon className="text-white/40" size={28} />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1} className="h-fit rounded-2xl bg-surface-light p-7 dark:bg-white/[0.03]">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-400 dark:text-slate-500">
              Technologies Used
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy-600 shadow-soft dark:bg-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-3 border-t border-navy-900/[0.06] pt-6 dark:border-white/[0.06]">
              <div className="flex justify-between text-sm">
                <span className="text-navy-400 dark:text-slate-500">Status</span>
                <span className="font-semibold text-navy-900 dark:text-white">{project.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-navy-400 dark:text-slate-500">Type</span>
                <span className="font-semibold text-navy-900 dark:text-white">{project.type}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
