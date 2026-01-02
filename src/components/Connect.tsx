import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Connect() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bart-luttels', icon: '💼' },
    { name: 'Email', url: 'mailto:info@bartluttels.nl', icon: '📧' },
    { name: 'LTech Consultancy', url: 'https://ltechconsultancy.nl', icon: '🚀' },
  ]

  return (
    <section id="connect" className="relative py-32 z-10">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm">// {t('connect.subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            {t('connect.title1')} <span className="gradient-text">{t('connect.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl glass"
          >
            <h3 className="text-xl font-bold text-white mb-6">{t('connect.findMe')}</h3>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-gray-300">{link.name}</span>
                  <span className="ml-auto text-gray-500">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="p-8 rounded-3xl glass">
              <h3 className="text-xl font-bold text-white mb-4">{t('connect.basedIn')}</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🇳🇱</span>
                <div>
                  <p className="text-white font-medium">Limburg, Nederland</p>
                  <p className="text-gray-500 text-sm">{t('connect.remote')}</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <motion.div
              className="p-8 rounded-3xl border border-cyber-cyan/30 bg-cyber-cyan/5"
              animate={{ borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(6, 182, 212, 0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">{t('connect.available')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('connect.availableDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
