'use client'

import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full p-0.5 transition-colors duration-300">
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
          language === 'pt'
            ? 'bg-white dark:bg-gray-700 shadow-md scale-105'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title={language === 'pt' ? 'Português (atual)' : 'Português'}
        aria-label="Alterar para português"
      >
        <Image 
          src="/brasil.svg" 
          alt="Brasil" 
          width={20} 
          height={15}
          className="rounded-sm"
          loading="lazy"
        />
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-white dark:bg-gray-700 shadow-md scale-105'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title={language === 'en' ? 'English (current)' : 'English'}
        aria-label="Switch to English"
      >
        <Image 
          src="/usa.svg" 
          alt="United States" 
          width={20} 
          height={15}
          className="rounded-sm"
          loading="lazy"
        />
      </button>
    </div>
  )
}

export default LanguageToggle
