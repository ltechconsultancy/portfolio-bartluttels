import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ParticleField from './components/ParticleField'
import { useLanguage } from './i18n/LanguageContext'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { t } = useLanguage()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    document.body.style.cursor = 'none'
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <CustomCursor />
      <div className="noise" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-pink z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />
      <ParticleField />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Connect />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Bart Luttels. {t('footer.text')}</p>
      </footer>
    </div>
  )
}

export default App
