import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const skillGroups = [
    {
      title: t('skills.ai'),
      skills: ['AI Implementation', 'LLM Integration', 'Prompt Engineering', 'Automation'],
    },
    {
      title: t('skills.data'),
      skills: ['Data Analytics', 'Power BI', 'Excel VBA', 'SQL', 'Python'],
    },
    {
      title: t('skills.strategy'),
      skills: ['Business Strategy', 'Policy Writing', 'Project Management', 'Process Optimization'],
    },
  ]

  const tools = ['ChatGPT', 'Claude', 'Microsoft Excel', 'Power BI', 'Python', 'SQL', 'Notion', 'Figma']

  return (
    <section id="skills" className="relative py-40 z-10">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xs tracking-[0.3em] text-gray-500 uppercase block mb-16"
        >
          {t('skills.label')}
        </motion.span>

        {/* Skill groups */}
        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + groupIndex * 0.15 }}
            >
              <h3 className="text-lg font-medium text-white mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + groupIndex * 0.15 + i * 0.05 }}
                    className="px-4 py-2 text-sm text-gray-300 border border-white/10 rounded-full hover:border-cyber-purple/50 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <span className="text-xs tracking-[0.3em] text-gray-500 uppercase block mb-8">
            {t('skills.tools')}
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
