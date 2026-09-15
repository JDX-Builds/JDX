import { Quote } from 'lucide-react'
import type { Testimonial } from '../data/content'
import AnimatedSection from './AnimatedSection'

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <AnimatedSection delay={index * 0.1} className="h-full">
      <figure className="card-surface flex h-full flex-col p-7">
        <Quote className="text-brand-cyan/60" size={26} />
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-600 dark:text-slate-300">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-sm font-semibold text-white">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-900 dark:text-white">{testimonial.name}</p>
            <p className="text-xs text-navy-400 dark:text-slate-500">{testimonial.role}</p>
          </div>
        </figcaption>
      </figure>
    </AnimatedSection>
  )
}
