import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Connect() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const links = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bart-luttels' },
    { name: 'Email', url: 'mailto:info@bartluttels.nl' },
    { name: 'LTech Consultancy', url: 'https://ltechconsultancy.nl' },
  ]

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

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-0 border-t border-white/5"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-cyber-purple/30 transition-colors"
            >
              <span className="text-xl md:text-2xl text-gray-400 group-hover:text-white transition-colors">
                {link.name}
              </span>
              <span className="text-gray-600 group-hover:text-cyber-purple transition-colors group-hover:translate-x-2 transform duration-300">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Location & Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
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
