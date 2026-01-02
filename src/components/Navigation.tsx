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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-cyber-black/80 backdrop-blur-md py-4' : 'py-6'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-medium text-white"
            whileHover={{ opacity: 0.7 }}
          >
            BL
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -1 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLanguage('nl')}
                className={`px-2 py-1 transition-colors ${
                  language === 'nl' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                NL
              </button>
              <span className="text-gray-700">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 transition-colors ${
                  language === 'en' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-px bg-white block"
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7.5 : 0 }}
              />
              <motion.span
                className="w-full h-px bg-white block"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-full h-px bg-white block"
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7.5 : 0 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-cyber-black/98 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-2xl font-light text-gray-300 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 mt-8 text-lg">
              <button
                onClick={() => setLanguage('nl')}
                className={`transition-colors ${
                  language === 'nl' ? 'text-white' : 'text-gray-500'
                }`}
              >
                NL
              </button>
              <span className="text-gray-700">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-white' : 'text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
