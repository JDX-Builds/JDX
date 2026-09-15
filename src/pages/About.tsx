import { Target, Eye, User } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'
import { LinkedinIcon } from '../components/BrandIcons'
import { coreValues, team } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About JDX"
        title="Three engineers. One studio. A lot of late-night debugging."
        description="JDX was built on a simple idea: software should be built properly, by people who care about getting it right."
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white">
              Founded in 2025, out of a shared frustration with software built to look good, not work well.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-5 text-base leading-relaxed text-navy-500 dark:text-slate-400">
            <p>
              JDX was founded in 2025 by three engineering students who kept ending up on the same
              side of every project &mdash; the side that cared more about clean architecture and
              real security than shipping something that merely looked finished.
            </p>
            <p>
              What started as personal projects and freelance work slowly became something bigger: a
              studio that takes on client work while also building its own products, treating both
              with the same rigor we&rsquo;d want from a team we hired ourselves.
            </p>
            <p>
              Today, JDX works across AI, cybersecurity, web and desktop development, and custom
              software &mdash; still small, still hands-on, and still building everything ourselves.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <AnimatedSection className="card-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-cyan">
              <Target size={22} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-slate-400">
              To build software that solves real problems &mdash; engineered with the same rigor,
              security, and care we would want in the tools we rely on ourselves.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="card-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-cyan">
              <Eye size={22} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-slate-400">
              To grow into a studio known for combining startup speed with engineering discipline
              &mdash; building products and partnerships that last well beyond launch day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="What We Stand For" title="Core Values" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08} className="card-surface p-6">
                <h3 className="font-display text-base font-bold text-navy-900 dark:text-white">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-500 dark:text-slate-400">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-pad border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container-page">
          <SectionHeading eyebrow="The People" title="Meet the Team" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1} className="card-surface overflow-hidden">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy-900 via-navy-700 to-brand-blue/60">
                  <User className="text-white/40" size={48} />
                </div>
                <div className="p-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2"
                  >
                    <h3 className="font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-cyan">
                      {member.name}
                    </h3>
                    <LinkedinIcon size={16} className="text-navy-400 transition-colors group-hover:text-brand-blue dark:text-slate-500 dark:group-hover:text-brand-cyan" />
                  </a>
                  <p className="mt-1 text-sm font-medium text-brand-blue dark:text-brand-cyan">{member.role}</p>
                </div>
              </AnimatedSection>
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