import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    })
  }

  const name = "Bart Luttels"

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
        {/* Glowing orb background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 blur-3xl" />

        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full glass text-sm text-cyber-cyan font-mono">
            AI Implementation Specialist
          </span>
        </motion.div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 overflow-hidden">
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={letter === ' ' ? 'inline-block w-4 md:w-8' : 'inline-block gradient-text'}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
        >
          Helping businesses embrace the future through{' '}
          <span className="text-cyber-purple">AI</span>,{' '}
          <span className="text-cyber-cyan">Data Analytics</span> &{' '}
          <span className="text-cyber-pink">Innovation</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white font-medium text-lg glow-purple"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
          <motion.a
            href="#experience"
            className="px-8 py-4 rounded-full glass text-white font-medium text-lg border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Experience
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-cyber-purple animate-pulse" />
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-cyber-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-cyber-pink animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}
