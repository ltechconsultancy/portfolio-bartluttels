import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const experiences = [
    {
      titleKey: 'exp.zeroplex.title',
      company: 'ZeroPlex',
      typeKey: 'experience.partTime',
      period: language === 'nl' ? 'Sep 2025 - Heden' : 'Sep 2025 - Present',
      descKey: 'exp.zeroplex.desc',
      skills: ['AI', 'Implementation', 'Strategy'],
      highlight: true,
    },
    {
      titleKey: 'exp.ltech.title',
      company: 'LTech Consultancy',
      typeKey: 'experience.selfEmployed',
      period: language === 'nl' ? 'Jul 2023 - Heden' : 'Jul 2023 - Present',
      descKey: 'exp.ltech.desc',
      skills: ['AI', 'Excel VBA', 'Data Analytics', 'Management'],
      highlight: true,
    },
    {
      titleKey: 'exp.provincie.title',
      company: 'Provincie Limburg',
      typeKey: 'experience.political',
      period: language === 'nl' ? 'Sep 2024 - Heden' : 'Sep 2024 - Present',
      descKey: 'exp.provincie.desc',
      skills: ['Policy', 'Digitalization', 'Energy'],
    },
    {
      titleKey: 'exp.bbb.title',
      company: 'BBB',
      typeKey: 'experience.political',
      period: language === 'nl' ? 'Jun 2025 - Aug 2025' : 'Jun 2025 - Aug 2025',
      descKey: 'exp.bbb.desc',
      skills: ['Project Management', 'Policy Writing'],
    },
    {
      titleKey: 'exp.vdl.title',
      company: 'VDL Konings',
      typeKey: 'experience.freelance',
      period: 'Nov 2022 - Sep 2024',
      descKey: 'exp.vdl.desc',
      skills: ['Power Query', 'Excel VBA', 'Data Analytics'],
    },
    {
      titleKey: 'exp.bbb2.title',
      company: 'BBB',
      typeKey: 'experience.political',
      period: language === 'nl' ? 'Mei 2023 - Nov 2023' : 'May 2023 - Nov 2023',
      descKey: 'exp.bbb2.desc',
      skills: ['Policy Writing', 'Technology', 'Education'],
      highlight: true,
    },
  ]

  const getTypeColor = (typeKey: string) => {
    if (typeKey === 'experience.political') return 'bg-cyber-pink/20 text-cyber-pink'
    if (typeKey === 'experience.selfEmployed') return 'bg-cyber-cyan/20 text-cyber-cyan'
    return 'bg-cyber-purple/20 text-cyber-purple'
  }

  return (
    <section id="experience" className="relative py-32 z-10">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-cyber-cyan font-mono text-sm">{t('experience.subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            {t('experience.title1')} <span className="gradient-text">{t('experience.title2')}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-purple via-cyber-cyan to-cyber-pink" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.titleKey}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 ${
                  exp.highlight
                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-cyan'
                    : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.5 }}
              />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className={`p-6 rounded-2xl glass ${
                    exp.highlight ? 'border border-cyber-purple/30 glow-purple' : ''
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getTypeColor(exp.typeKey)}`}>
                      {t(exp.typeKey)}
                    </span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{t(exp.titleKey)}</h3>
                  <p className="text-cyber-cyan font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{t(exp.descKey)}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
