import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'border-b border-navy-900/[0.06] bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-navy-950/80'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-page flex h-18 items-center justify-between py-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="/jdx_logo.png"
            alt="JDX Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-navy-900 dark:text-white font-extrabold ">JDX</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive
                  ? 'text-brand-blue dark:text-brand-cyan'
                  : 'text-navy-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition-colors hover:border-brand-blue/30 hover:text-brand-blue dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <NavLink to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Contact Us <ArrowUpRight size={16} />
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 dark:border-white/10 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 dark:border-white/10 dark:text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-navy-900/[0.06] bg-white/95 backdrop-blur-xl dark:border-white/[0.06] dark:bg-navy-950/95 md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${isActive ? 'bg-brand-blue/10 text-brand-blue dark:text-brand-cyan' : 'text-navy-600 dark:text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
