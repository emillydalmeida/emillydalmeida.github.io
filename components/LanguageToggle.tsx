'use client'

import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1 transition-colors duration-300">
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === 'pt'
            ? 'bg-white dark:bg-gray-700 shadow-md scale-110'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title={language === 'pt' ? 'Português (atual)' : 'Português'}
        aria-label="Alterar para português"
      >
        <span className="text-lg" role="img" aria-label="Brasil">
          🇧🇷
        </span>
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-white dark:bg-gray-700 shadow-md scale-110'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title={language === 'en' ? 'English (current)' : 'English'}
        aria-label="Switch to English"
      >
        <span className="text-lg" role="img" aria-label="United States">
          🇺🇸
        </span>
      </button>
    </div>
  )
}

export default LanguageToggle
