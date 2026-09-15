import { NavLink } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { contactInfo } from '../data/content'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/[0.06] bg-surface-light dark:border-white/[0.06] dark:bg-navy-950">
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-extrabold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan text-sm text-white">J</span>
              <span className="text-navy-900 dark:text-white">JDX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-500 dark:text-slate-400">
              A software studio building AI-powered applications, secure systems, and modern products
              &mdash; founded in 2025 by three engineers who like solving real problems.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email JDX"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan"
              >
                <Mail size={17} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="JDX on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="JDX on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-navy-900 dark:text-white">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-sm text-navy-500 transition-colors hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-cyan"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-navy-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500 dark:text-slate-400">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                  {contactInfo.githubLabel}
                </a>
              </li>
              <li>Available for client projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-900/[0.06] pt-8 text-xs text-navy-400 dark:border-white/[0.06] dark:text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} JDX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}