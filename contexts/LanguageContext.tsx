'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '../lib/translations'

type Language = 'pt' | 'en'
type TranslationKeys = typeof translations.pt

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt')

  // Carregar idioma salvo do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // Detectar idioma do navegador
      const browserLanguage = navigator.language.toLowerCase()
      if (browserLanguage.startsWith('en')) {
        setLanguage('en')
      }
    }
  }, [])

  // Salvar idioma no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
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
