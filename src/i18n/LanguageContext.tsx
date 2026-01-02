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
  'nav.about': { nl: 'Over mij', en: 'About' },
  'nav.experience': { nl: 'Ervaring', en: 'Experience' },
  'nav.skills': { nl: 'Vaardigheden', en: 'Skills' },
  'nav.connect': { nl: 'Contact', en: 'Connect' },

  // Hero
  'hero.title': { nl: 'AI Implementation Specialist', en: 'AI Implementation Specialist' },
  'hero.subtitle': { nl: 'Bedrijven helpen de toekomst te omarmen door', en: 'Helping businesses embrace the future through' },
  'hero.cta1': { nl: 'Bekijk Ervaring', en: 'View Experience' },
  'hero.cta2': { nl: 'Neem Contact Op', en: 'Get in Touch' },

  // About
  'about.subtitle': { nl: '// Over mij', en: '// About me' },
  'about.title1': { nl: 'De brug tussen', en: 'Bridging' },
  'about.title2': { nl: 'Technologie', en: 'Technology' },
  'about.title3': { nl: '&', en: '&' },
  'about.title4': { nl: 'Beleid', en: 'Policy' },
  'about.p1': {
    nl: 'Ik ben een AI Implementation Specialist en afgestudeerd in Technische Bedrijfskunde met een unieke combinatie van technische expertise en politiek inzicht. Momenteel werkzaam bij ZeroPlex, help ik het MKB om de AI-revolutie te omarmen.',
    en: "I'm an AI Implementation Specialist and Technical Business graduate with a unique combination of technical expertise and political insight. Currently working at ZeroPlex, I help SMBs navigate the AI revolution."
  },
  'about.p2': {
    nl: 'Als eigenaar van LTech Consultancy en burgercommissielid in Limburg, breng ik data-gedreven inzichten naar zowel bedrijfsstrategie als openbaar beleid—met focus op digitalisering, energie en financiën.',
    en: 'As owner of LTech Consultancy and a provincial committee member in Limburg, I bring data-driven insights to both business strategy and public policy—focusing on digitalization, energy, and finance.'
  },
  'about.p3': {
    nl: 'Mijn werk aan het verkiezingsprogramma werd door NL-Digital erkend als het beste digitaliseringsprogramma in de Nederlandse politiek.',
    en: 'My election program work was recognized by NL-Digital as the best digitalization program in Dutch politics.'
  },
  'about.stat1': { nl: 'Jaar Ervaring', en: 'Years Experience' },
  'about.stat2': { nl: 'Projecten Afgerond', en: 'Projects Delivered' },
  'about.stat3': { nl: 'Actieve Rollen', en: 'Active Roles' },
  'about.stat4': { nl: 'Erkend Programma', en: 'Recognized Program' },

  // Experience
  'experience.subtitle': { nl: '// Carrière', en: '// Career' },
  'experience.title1': { nl: 'Ervaring', en: 'Experience' },
  'experience.title2': { nl: 'Tijdlijn', en: 'Timeline' },
  'experience.political': { nl: 'Politiek', en: 'Political' },
  'experience.selfEmployed': { nl: 'Zelfstandig', en: 'Self-employed' },
  'experience.partTime': { nl: 'Parttime', en: 'Part-time' },
  'experience.freelance': { nl: 'Freelance', en: 'Freelance' },

  // Experience items
  'exp.zeroplex.title': { nl: 'AI Implementation Specialist', en: 'AI Implementation Specialist' },
  'exp.zeroplex.desc': { nl: 'Regionale bedrijven helpen vooruit te komen met AI-implementatie en strategie.', en: 'Helping regional businesses advance with AI implementation and strategy.' },
  'exp.ltech.title': { nl: 'Eigenaar', en: 'Owner' },
  'exp.ltech.desc': { nl: 'AI-consulting, data-analyse en optimalisatie van bedrijfsprocessen.', en: 'Providing AI consulting, data analytics, and business process optimization.' },
  'exp.provincie.title': { nl: 'Burgercommissielid', en: 'Provincial Committee Member' },
  'exp.provincie.desc': { nl: 'Focusgebieden: Nieuwe Energie, Digitalisering (AI, Data) en Financiën.', en: 'Focus areas: New Energy, Digitalization (AI, Data), and Finance.' },
  'exp.bbb.title': { nl: 'Hoofd Programmacommissie', en: 'Head of Program Committee' },
  'exp.bbb.desc': { nl: 'Leiding gegeven aan het schrijven van het volledige verkiezingsprogramma voor de Tweede Kamerverkiezingen, met focus op digitalisering.', en: 'Led the creation of the entire election program for national elections, with focus on digitalization.' },
  'exp.vdl.title': { nl: 'Data Analist', en: 'Data Analyst' },
  'exp.vdl.desc': { nl: 'Actionable inzichten gecreëerd door data cleaning en geavanceerde dashboards.', en: 'Created actionable insights through data cleaning and advanced dashboards.' },
  'exp.bbb2.title': { nl: 'Mede-auteur Verkiezingsprogramma', en: 'Co-Writer Election Program' },
  'exp.bbb2.desc': { nl: 'Een van 12 schrijvers. Verantwoordelijk voor technologie, wetenschap en onderwijs. Programma erkend als beste op digitalisering door NL-Digital.', en: 'One of 12 writers. Responsible for technology, science, and education. Program recognized as best on digitalization by NL-Digital.' },

  // Skills
  'skills.subtitle': { nl: '// Expertise', en: '// Expertise' },
  'skills.title1': { nl: 'Vaardigheden &', en: 'Skills &' },
  'skills.title2': { nl: 'Capaciteiten', en: 'Capabilities' },
  'skills.technical': { nl: 'Technisch', en: 'Technical' },
  'skills.business': { nl: 'Zakelijk', en: 'Business' },
  'skills.leadership': { nl: 'Leiderschap', en: 'Leadership' },
  'skills.tools': { nl: 'Tools & Technologieën waar ik mee werk', en: 'Tools & Technologies I work with' },

  // Connect
  'connect.subtitle': { nl: 'Verbinden', en: 'Get in touch' },
  'connect.title1': { nl: 'Laten we', en: "Let's" },
  'connect.title2': { nl: 'Connecten', en: 'Connect' },
  'connect.findMe': { nl: 'Vind me op', en: 'Find me on' },
  'connect.basedIn': { nl: 'Gevestigd in', en: 'Based in' },
  'connect.remote': { nl: 'Beschikbaar voor remote werk wereldwijd', en: 'Available for remote work worldwide' },
  'connect.available': { nl: 'Beschikbaar voor Projecten', en: 'Available for Projects' },
  'connect.availableDesc': {
    nl: 'Open voor AI-implementatie consulting, data-analyse projecten en strategische adviesrollen.',
    en: 'Currently open for AI implementation consulting, data analytics projects, and strategic advisory roles.'
  },

  // Footer
  'footer.text': { nl: 'Met passie gemaakt.', en: 'Crafted with passion.' },
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
