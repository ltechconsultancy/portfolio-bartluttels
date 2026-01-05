import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        {/* Minimal badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Name - big and bold */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-white">Bart</span>
          <span className="block gradient-text">Luttels</span>
        </motion.h1>

        {/* Simple tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 font-light max-w-lg mx-auto"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Minimal scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-0.5 h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyber-purple/10 via-transparent to-transparent blur-3xl pointer-events-none" />
    </section>
  )
}
