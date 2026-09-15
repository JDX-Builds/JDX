import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow justify-center">{eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-500 dark:text-slate-400">
            {description}
          </p>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
