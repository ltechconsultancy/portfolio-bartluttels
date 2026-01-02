import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '3', label: 'Active Roles' },
    { value: '1', label: 'Award-Winning Program' },
  ]

  return (
    <section id="about" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image/Visual */}
          <div className="relative">
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Rotating border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-cyber-purple/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-3xl border-2 border-cyber-cyan/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center content */}
              <div className="absolute inset-8 rounded-2xl glass flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text mb-4">BL</div>
                  <div className="text-sm text-gray-400 font-mono">Limburg, NL</div>
                </div>

                {/* Animated background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-purple/20 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyber-cyan/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-cyber-cyan font-mono text-sm"
            >
              // About me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Bridging <span className="gradient-text">Technology</span> & <span className="gradient-text">Policy</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                I'm an AI Implementation Specialist and Technical Business graduate with a unique
                combination of technical expertise and political insight. Currently working at
                <span className="text-cyber-purple"> ZeroPlex</span>, I help SMBs navigate the
                AI revolution.
              </p>
              <p>
                As owner of <span className="text-cyber-cyan">LTech Consultancy</span> and a
                provincial committee member in Limburg, I bring data-driven insights to both
                business strategy and public policy—focusing on digitalization, energy, and finance.
              </p>
              <p>
                My election program work was recognized by NL-Digital as the
                <span className="text-cyber-pink"> best digitalization program</span> in Dutch politics.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-center p-4 rounded-xl glass"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
