import { useState, useMemo } from 'react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'
import { projects } from '../data/content'

const filters = ['All', 'Client', 'Product'] as const

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Client projects &amp; our own products."
        description="A look at what we've shipped — for clients, and for ourselves."
      />

      <section className="section-pad">
        <div className="container-page">
          <AnimatedSection className="mb-10 flex justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === f
                    ? 'bg-navy-900 text-white dark:bg-white dark:text-navy-900'
                    : 'bg-navy-900/[0.04] text-navy-600 hover:bg-navy-900/[0.08] dark:bg-white/[0.06] dark:text-slate-300'
                }`}
              >
                {f}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.1} className="mt-12">
            <div className="card-surface flex flex-col items-center gap-3 border-2 border-dashed border-navy-900/10 p-10 text-center dark:border-white/10">
              <p className="font-display text-base font-bold text-navy-900 dark:text-white">More projects, coming soon</p>
              <p className="max-w-sm text-sm text-navy-500 dark:text-slate-400">
                We&rsquo;re always building. New client work and products will show up here as they ship.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
