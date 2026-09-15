import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center"
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="relative"
        >

          {/* Blue glow behind logo */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: [0, 0.5, 0.2],
              scale: [0.8, 1.15, 1],
            }}
            transition={{
              delay: 0.5,
              duration: 1.2,
              ease: 'easeOut',
            }}
            className="absolute inset-0 rounded-full bg-brand-cyan blur-3xl"
          />

          {/* JDX Logo */}

          <motion.img
            src="/jdx_logo1.png"
            alt="JDX Software Development & Consultancy"
            initial={{
              opacity: 0,
              scale: 0.85,
              filter: 'brightness(0.5)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'brightness(1)',
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="relative z-10 h-40 w-auto object-contain md:h-52"
          />

        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className="mt-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/60 sm:text-sm"
        >
          Software Development & Consultancy
        </motion.p>

      </motion.div>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>


      <Layout>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Services */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* Individual Project */}
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </Layout>

    </ThemeProvider>
  )
}


export default App