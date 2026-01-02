import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bart-luttels', icon: '💼' },
    { name: 'Email', url: 'mailto:contact@bartluttels.nl', icon: '📧' },
    { name: 'GitHub', url: 'https://github.com/bartluttels', icon: '💻' },
  ]

  return (
    <section id="contact" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-cyber-cyan font-mono text-sm">// Get in touch</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Looking for AI implementation guidance?
            Or just want to chat about technology and policy? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl glass text-center"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white font-medium text-lg relative overflow-hidden group disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="p-8 rounded-3xl glass">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-gray-300">{link.name}</span>
                    <span className="ml-auto text-gray-500">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-8 rounded-3xl glass">
              <h3 className="text-xl font-bold text-white mb-4">Based in</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🇳🇱</span>
                <div>
                  <p className="text-white font-medium">Limburg, Netherlands</p>
                  <p className="text-gray-500 text-sm">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="p-8 rounded-3xl border border-cyber-cyan/30 bg-cyber-cyan/5"
              animate={{ borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(6, 182, 212, 0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">Available for Projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open for AI implementation consulting, data analytics projects,
                and strategic advisory roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
