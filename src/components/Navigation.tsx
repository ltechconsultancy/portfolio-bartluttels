import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.connect'), href: '#connect' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            BL
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors line-glow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4">
              <motion.button
                onClick={() => setLanguage('nl')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'nl'
                    ? 'bg-cyber-purple/30 text-cyber-purple'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                NL
              </motion.button>
              <span className="text-gray-600">|</span>
              <motion.button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-cyber-purple/30 text-cyber-purple'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-30 bg-cyber-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-3xl font-light text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 mt-8">
              <motion.button
                onClick={() => setLanguage('nl')}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  language === 'nl'
                    ? 'bg-cyber-purple/30 text-cyber-purple'
                    : 'text-gray-500'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                Nederlands
              </motion.button>
              <motion.button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-cyber-purple/30 text-cyber-purple'
                    : 'text-gray-500'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                English
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
