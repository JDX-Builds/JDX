import { NavLink } from 'react-router-dom'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import type { Project } from '../data/content'
import AnimatedSection from './AnimatedSection'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <AnimatedSection delay={index * 0.08} className="h-full">
      <div className="card-surface flex h-full flex-col overflow-hidden">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-700 to-brand-blue/60">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <ImageIcon className="relative text-white/40" size={36} />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur">
            {project.type}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-navy-900/70 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {project.status}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500 dark:text-slate-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-navy-900/[0.04] px-2.5 py-1 text-[11px] font-medium text-navy-600 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <NavLink
            to={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue dark:text-brand-cyan"
          >
            View Details <ArrowUpRight size={15} />
          </NavLink>
        </div>
      </div>
    </AnimatedSection>
  )
}
