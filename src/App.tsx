import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    document.body.style.cursor = 'none'
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <div className="noise" />

      {/* Minimal progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-white/20 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Connect />
      </main>

      <footer className="py-12 text-center text-gray-600 text-xs tracking-wider">
        <p>&copy; {new Date().getFullYear()} Bart Luttels</p>
      </footer>
    </div>
  )
}

export default App
