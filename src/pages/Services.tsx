import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-spectrum software engineering."
        description="From first architecture decision to production deployment, we cover every layer your product needs."
      />

      <section className="section-pad">
        <div className="container-page space-y-6">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.slug}
              delay={i * 0.05}
              className="scroll-mt-28"
            >
              <div id={service.slug} className="card-surface grid gap-8 p-8 lg:grid-cols-[1fr_1.4fr] lg:p-12">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-cyan">
                    <service.icon size={22} />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-navy-500 dark:text-slate-400">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-navy-900/[0.04] px-3 py-1.5 text-xs font-medium text-navy-600 dark:bg-white/[0.06] dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-light p-7 dark:bg-white/[0.03]">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-400 dark:text-slate-500">
                    Benefits
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                          <Check size={13} />
                        </span>
                        <span className="text-sm leading-relaxed text-navy-600 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
