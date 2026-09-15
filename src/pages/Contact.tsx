import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { contactInfo } from '../data/content'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const budgetOptions = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Not sure yet']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell us about your project."
        description="Whether it's a full product build or a focused engagement, we'd love to hear the details."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <AnimatedSection className="card-surface p-8 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 className="text-brand-cyan" size={48} />
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-navy-500 dark:text-slate-400">
                  Thanks for reaching out — we'll get back to you within one to two business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" type="text" required className="input-field" placeholder="Jane Doe" />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" required className="input-field" placeholder="jane@company.com" />
                  </Field>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Company" htmlFor="company" optional>
                    <input id="company" name="company" type="text" className="input-field" placeholder="Company name" />
                  </Field>
                  <Field label="Budget" htmlFor="budget" optional>
                    <select id="budget" name="budget" className="input-field" defaultValue="">
                      <option value="" disabled>Select a range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Project Details" htmlFor="details">
                  <input id="details" name="details" type="text" required className="input-field" placeholder="e.g. AI-powered web app, desktop tool, security audit" />
                </Field>
                <Field label="Message" htmlFor="message">
                  <textarea id="message" name="message" required rows={5} className="input-field resize-none" placeholder="Tell us more about what you're building..." />
                </Field>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="space-y-6">
            <div className="card-surface p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-400 dark:text-slate-500">
                Contact Details
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3 text-sm text-navy-600 dark:text-slate-300">
                  <Mail size={17} className="text-brand-blue dark:text-brand-cyan flex-none" />
                  <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-600 dark:text-slate-300">
                  <GithubIcon size={17} className="text-brand-blue dark:text-brand-cyan flex-none" />
                  <a href={contactInfo.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                    {contactInfo.githubLabel}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-600 dark:text-slate-300">
                  <LinkedinIcon size={17} className="text-brand-blue dark:text-brand-cyan flex-none" />
                  <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                    {contactInfo.linkedinLabel}
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-surface-light dark:bg-white/[0.03]">
                <MapPin className="text-navy-300 dark:text-slate-600" size={32} />
                <p className="text-xs text-navy-400 dark:text-slate-500">Map placeholder</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-sm font-medium text-navy-700 dark:text-slate-300">
        {label}
        {optional && <span className="text-xs font-normal text-navy-400 dark:text-slate-500">(optional)</span>}
      </label>
      {children}
    </div>
  )
}