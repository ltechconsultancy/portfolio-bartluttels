import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import LinkedInButton from './LinkedInButton'
import EmailButton from './EmailButton'
import LTechButton from './LTechButton'
import ZeroplexButton from './ZeroplexButton'

export default function Connect() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="connect" className="relative py-40 z-10">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xs tracking-[0.3em] text-gray-500 uppercase block mb-16"
        >
          {t('connect.label')}
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-200 mb-16"
        >
          {t('connect.heading')}
        </motion.h2>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-8 justify-center md:justify-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <LinkedInButton />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <EmailButton />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <LTechButton />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <ZeroplexButton />
          </motion.div>
        </motion.div>

        {/* Location & Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
          className="mt-20 flex flex-col md:flex-row md:items-center gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-gray-500">{t('connect.available')}</span>
          </div>
          <div className="text-sm text-gray-600">
            Limburg, Netherlands
          </div>
        </motion.div>
      </div>
    </section>
  )
}
