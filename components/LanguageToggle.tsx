'use client'

import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 md:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full p-0.5 md:p-1 transition-colors duration-300">
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 ${
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
          width={16} 
          height={12}
          className="rounded-sm md:w-5 md:h-4"
          loading="lazy"
        />
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 ${
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
          width={16} 
          height={12}
          className="rounded-sm md:w-5 md:h-4"
          loading="lazy"
        />
      </button>
    </div>
  )
}

export default LanguageToggle
