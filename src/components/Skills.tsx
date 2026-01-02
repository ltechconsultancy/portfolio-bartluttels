import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

function SkillBar({ skill, color, delay }: { skill: { name: string; level: number }; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm">{skill.name}</span>
        <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function FloatingIcon({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="absolute text-4xl"
      style={{
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      }}
    >
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const skillCategories = [
    {
      nameKey: 'skills.technical',
      color: '#8b5cf6',
      skills: [
        { name: 'Artificial Intelligence', level: 90 },
        { name: 'Data Analytics', level: 95 },
        { name: 'Excel VBA', level: 95 },
        { name: 'Power Query', level: 90 },
        { name: 'Dashboard Design', level: 85 },
      ],
    },
    {
      nameKey: 'skills.business',
      color: '#06b6d4',
      skills: [
        { name: 'Project Management', level: 88 },
        { name: 'Process Improvement', level: 85 },
        { name: 'Strategic Planning', level: 82 },
        { name: 'Business Analysis', level: 88 },
        { name: 'Stakeholder Management', level: 85 },
      ],
    },
    {
      nameKey: 'skills.leadership',
      color: '#ec4899',
      skills: [
        { name: 'Policy Writing', level: 90 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Public Speaking', level: 80 },
        { name: 'Strategic Communication', level: 88 },
        { name: 'Social Media Management', level: 85 },
      ],
    },
  ]

  const icons = ['🤖', '📊', '💡', '🎯', '⚡', '🔮']

  return (
    <section id="skills" className="relative py-32 z-10 overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {icons.map((icon, i) => (
          <FloatingIcon key={i} delay={i * 0.2}>
            {icon}
          </FloatingIcon>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-cyber-cyan font-mono text-sm">{t('skills.subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            {t('skills.title1')} <span className="gradient-text">{t('skills.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.nameKey}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
              className="p-8 rounded-3xl glass relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}20, transparent 70%)`,
                }}
              />

              <div className="relative">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: category.color }}
                  />
                  {t(category.nameKey)}
                </div>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={catIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tools section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">{t('skills.tools')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Microsoft Excel', 'Power BI', 'Python', 'SQL', 'ChatGPT', 'Claude', 'Notion', 'Figma'].map(
              (tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 cursor-default"
                >
                  {tool}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
