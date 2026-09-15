import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function CTASection() {
  return (
    <section className="container-page pb-24">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center shadow-soft-lg sm:px-16">
          <div className="absolute inset-0 bg-glow-gradient" />
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&rsquo;s Build Something Great Together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Have a project in mind? We&rsquo;d love to hear about it and help you figure out the right way to build it.
            </p>
            <NavLink to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-soft-lg transition-transform hover:scale-[1.03] active:scale-[0.98]">
              Contact Us <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
