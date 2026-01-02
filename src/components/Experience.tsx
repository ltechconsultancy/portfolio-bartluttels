import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const experiences = [
    {
      title: t('exp.zeroplex.title'),
      company: 'ZeroPlex',
      period: language === 'nl' ? '2025 — Heden' : '2025 — Present',
      desc: t('exp.zeroplex.desc'),
      current: true,
    },
    {
      title: t('exp.ltech.title'),
      company: 'LTech Consultancy',
      period: language === 'nl' ? '2023 — Heden' : '2023 — Present',
      desc: t('exp.ltech.desc'),
      current: true,
    },
    {
      title: t('exp.provincie.title'),
      company: 'Provincie Limburg',
      period: language === 'nl' ? '2024 — Heden' : '2024 — Present',
      desc: t('exp.provincie.desc'),
      current: true,
    },
    {
      title: t('exp.program.title'),
      company: t('exp.political'),
      period: '2023 — 2025',
      desc: t('exp.program.desc'),
    },
    {
      title: t('exp.vdl.title'),
      company: 'VDL Konings',
      period: '2022 — 2024',
      desc: t('exp.vdl.desc'),
    },
  ]

  return (
    <section id="experience" className="relative py-40 z-10">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xs tracking-[0.3em] text-gray-500 uppercase block mb-16"
        >
          {t('experience.label')}
        </motion.span>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="py-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start">
                {/* Left side - period & company */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{exp.company}</span>
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    )}
                  </div>
                </div>

                {/* Right side - title & description */}
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-200 mb-2 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
