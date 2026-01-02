import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-40 z-10">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] text-gray-500 uppercase block mb-12"
          >
            {t('about.label')}
          </motion.span>

          {/* Main text - large and impactful */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-200"
          >
            {t('about.main1')} <span className="text-cyber-purple">{t('about.highlight1')}</span> {t('about.main2')} <span className="text-cyber-cyan">{t('about.highlight2')}</span>{t('about.main3')}
          </motion.p>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-500 mt-12 max-w-2xl"
          >
            {t('about.secondary')}
          </motion.p>

          {/* Minimal stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex gap-16 mt-20 pt-12 border-t border-white/5"
          >
            {[
              { value: '5+', label: t('about.stat1') },
              { value: '20+', label: t('about.stat2') },
              { value: '3', label: t('about.stat3') },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
