import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { contactInfo } from '../data/content'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

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
        <div className="container-page flex justify-center">
          <AnimatedSection
            delay={0.1}
            className="w-full max-w-xl"
          >
            <div className="card-surface p-8 sm:p-10">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-400 dark:text-slate-500">
                Contact Details
              </h3>

              <ul className="mt-6 space-y-5">
                {/* Email */}
                <li className="flex items-center gap-4 text-sm text-navy-600 dark:text-slate-300">
                  <Mail
                    size={19}
                    className="flex-none text-brand-blue dark:text-brand-cyan"
                  />

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    {contactInfo.email}
                  </a>
                </li>

                {/* GitHub */}
                <li className="flex items-center gap-4 text-sm text-navy-600 dark:text-slate-300">
                  <GithubIcon
                    size={19}
                    className="flex-none text-brand-blue dark:text-brand-cyan"
                  />

                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    {contactInfo.githubLabel}
                  </a>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center gap-4 text-sm text-navy-600 dark:text-slate-300">
                  <LinkedinIcon
                    size={19}
                    className="flex-none text-brand-blue dark:text-brand-cyan"
                  />

                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    {contactInfo.linkedinLabel}
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}