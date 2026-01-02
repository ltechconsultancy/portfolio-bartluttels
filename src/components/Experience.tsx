import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  type: string
  period: string
  description: string
  skills: string[]
  highlight?: boolean
}

const experiences: ExperienceItem[] = [
  {
    title: 'AI Implementation Specialist',
    company: 'ZeroPlex',
    type: 'Part-time',
    period: 'Sep 2025 - Present',
    description: 'Helping regional businesses advance with AI implementation and strategy.',
    skills: ['AI', 'Implementation', 'Strategy'],
    highlight: true,
  },
  {
    title: 'Owner',
    company: 'LTech Consultancy',
    type: 'Self-employed',
    period: 'Jul 2023 - Present',
    description: 'Providing AI consulting, data analytics, and business process optimization.',
    skills: ['AI', 'Excel VBA', 'Data Analytics', 'Management'],
    highlight: true,
  },
  {
    title: 'Provincial Committee Member',
    company: 'Provincie Limburg',
    type: 'Political',
    period: 'Sep 2024 - Present',
    description: 'Focus areas: New Energy, Digitalization (AI, Data), and Finance.',
    skills: ['Policy', 'Digitalization', 'Energy'],
  },
  {
    title: 'Head of Program Committee',
    company: 'BBB',
    type: 'Political',
    period: 'Jun 2025 - Aug 2025',
    description: 'Led the creation of the entire election program for national elections, with focus on digitalization.',
    skills: ['Project Management', 'Policy Writing'],
  },
  {
    title: 'Data Analyst',
    company: 'VDL Konings',
    type: 'Freelance',
    period: 'Nov 2022 - Sep 2024',
    description: 'Created actionable insights through data cleaning and advanced dashboards.',
    skills: ['Power Query', 'Excel VBA', 'Data Analytics'],
  },
  {
    title: 'Co-Writer Election Program',
    company: 'BBB',
    type: 'Political',
    period: 'May 2023 - Nov 2023',
    description: 'One of 12 writers. Responsible for technology, science, and education. Program won NL-Digital award.',
    skills: ['Policy Writing', 'Technology', 'Education'],
    highlight: true,
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 z-10">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-cyber-cyan font-mono text-sm">// Career</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-purple via-cyber-cyan to-cyber-pink" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
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
                    <span className={`px-2 py-1 rounded text-xs font-mono ${
                      exp.type === 'Political' ? 'bg-cyber-pink/20 text-cyber-pink' :
                      exp.type === 'Self-employed' ? 'bg-cyber-cyan/20 text-cyber-cyan' :
                      'bg-cyber-purple/20 text-cyber-purple'
                    }`}>
                      {exp.type}
                    </span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-cyber-cyan font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

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
