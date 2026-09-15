import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  slug,
  index = 0,
}: {
  icon: ComponentType<LucideProps>
  title: string
  description: string
  slug: string
  index?: number
}) {
  return (
    <AnimatedSection delay={index * 0.08} className="h-full">
      <NavLink
        to={`/services#${slug}`}
        className="card-surface group flex h-full flex-col p-7"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue transition-colors group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white dark:text-brand-cyan">
          <Icon size={22} />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-navy-900 dark:text-white">{title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-500 dark:text-slate-400">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue dark:text-brand-cyan">
          Learn more
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </NavLink>
    </AnimatedSection>
  )
}
