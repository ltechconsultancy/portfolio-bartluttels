import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    icon: '🏆',
    title: 'NL-Digital Award',
    subtitle: 'Best Digitalization Program',
    description: 'BBB\'s election program was crowned as the best in digitalization by NL-Digital - the tech industry association.',
    year: '2023',
    color: '#f59e0b',
  },
  {
    icon: '📋',
    title: 'Head of Program Committee',
    subtitle: 'National Elections 2025',
    description: 'Led the creation of the entire election program for BBB with senator Eugène Heijnen.',
    year: '2025',
    color: '#8b5cf6',
  },
  {
    icon: '🎓',
    title: 'Excellent Internship',
    subtitle: 'HATO Agricultural Lighting',
    description: 'Completed 3rd year internship for Technical Business Administration with a grade of 8.7.',
    year: '2024',
    color: '#06b6d4',
  },
  {
    icon: '🏛️',
    title: 'Provincial Committee',
    subtitle: 'Provincie Limburg',
    description: 'Appointed as committee member focusing on energy, digitalization, and finance.',
    year: '2024',
    color: '#ec4899',
  },
]

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-cyber-cyan font-mono text-sm">// Recognition</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: achievement.color + '30' }}
              />

              <div className="relative p-8 rounded-3xl glass border border-white/5 overflow-hidden">
                {/* Year badge */}
                <div
                  className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-mono"
                  style={{ backgroundColor: achievement.color + '20', color: achievement.color }}
                >
                  {achievement.year}
                </div>

                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="font-medium mb-4" style={{ color: achievement.color }}>
                  {achievement.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed">{achievement.description}</p>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ background: achievement.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '30%' } : {}}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto p-10 rounded-3xl glass relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl opacity-20">"</div>
            <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
              The future belongs to those who understand both the technology
              and the human context in which it operates.
            </p>
            <div className="mt-6 text-cyber-purple font-medium">— Bart Luttels</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
