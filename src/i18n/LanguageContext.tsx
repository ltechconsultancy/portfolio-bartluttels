import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'nl' | 'en'

interface Translations {
  [key: string]: {
    nl: string
    en: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.about': { nl: 'Over', en: 'About' },
  'nav.experience': { nl: 'Ervaring', en: 'Experience' },
  'nav.skills': { nl: 'Skills', en: 'Skills' },
  'nav.connect': { nl: 'Contact', en: 'Connect' },

  // Hero
  'hero.badge': { nl: 'AI Implementation Specialist', en: 'AI Implementation Specialist' },
  'hero.tagline': {
    nl: 'AI implementatie, data analytics & strategisch advies voor bedrijven en overheid.',
    en: 'AI implementation, data analytics & strategic consulting for business and government.'
  },

  // About
  'about.label': { nl: 'Over mij', en: 'About' },
  'about.main1': { nl: 'Ik help organisaties', en: 'I help organizations' },
  'about.highlight1': { nl: 'AI te omarmen', en: 'embrace AI' },
  'about.main2': { nl: 'en', en: 'and' },
  'about.highlight2': { nl: 'data-gedreven', en: 'data-driven' },
  'about.main3': { nl: ' beslissingen te nemen.', en: ' decisions.' },
  'about.secondary': {
    nl: 'Met een achtergrond in Technische Bedrijfskunde combineer ik technische expertise met strategisch inzicht. Actief in zowel het bedrijfsleven als de politiek.',
    en: 'With a background in Technical Business Administration, I combine technical expertise with strategic insight. Active in both business and politics.'
  },
  'about.stat1': { nl: 'Jaar ervaring', en: 'Years experience' },
  'about.stat2': { nl: 'Projecten', en: 'Projects' },
  'about.stat3': { nl: 'Actieve rollen', en: 'Active roles' },

  // Experience
  'experience.label': { nl: 'Ervaring', en: 'Experience' },
  'exp.zeroplex.title': { nl: 'AI Implementation Specialist', en: 'AI Implementation Specialist' },
  'exp.zeroplex.desc': {
    nl: 'Regionale bedrijven helpen met AI-implementatie en digitale strategie.',
    en: 'Helping regional businesses with AI implementation and digital strategy.'
  },
  'exp.ltech.title': { nl: 'Eigenaar', en: 'Owner' },
  'exp.ltech.desc': {
    nl: 'AI consulting, data analytics en proces optimalisatie.',
    en: 'AI consulting, data analytics and process optimization.'
  },
  'exp.provincie.title': { nl: 'Burgercommissielid', en: 'Provincial Committee Member' },
  'exp.provincie.desc': {
    nl: 'Focus: Energie, Digitalisering en Financiën.',
    en: 'Focus: Energy, Digitalization and Finance.'
  },
  'exp.program.title': { nl: 'Hoofd Programmacommissie', en: 'Head of Program Committee' },
  'exp.program.desc': {
    nl: 'Leiding gegeven aan het schrijven van het verkiezingsprogramma met focus op digitalisering.',
    en: 'Led the creation of the election program with focus on digitalization.'
  },
  'exp.political': { nl: 'Politieke Partij', en: 'Political Party' },
  'exp.vdl.title': { nl: 'Data Analist', en: 'Data Analyst' },
  'exp.vdl.desc': {
    nl: 'Data cleaning, dashboards en actionable insights.',
    en: 'Data cleaning, dashboards and actionable insights.'
  },

  // Skills
  'skills.label': { nl: 'Expertise', en: 'Expertise' },
  'skills.ai': { nl: 'AI & Automatisering', en: 'AI & Automation' },
  'skills.data': { nl: 'Data & Analytics', en: 'Data & Analytics' },
  'skills.strategy': { nl: 'Strategie & Beleid', en: 'Strategy & Policy' },
  'skills.tools': { nl: 'Tools', en: 'Tools' },

  // Connect
  'connect.label': { nl: 'Contact', en: 'Connect' },
  'connect.heading': {
    nl: "Laten we samenwerken.",
    en: "Let's work together."
  },
  'connect.available': { nl: 'Beschikbaar voor projecten', en: 'Available for projects' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl')

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
