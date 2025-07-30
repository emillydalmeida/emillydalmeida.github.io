import Image from 'next/image'
import { useAOSInitialization } from '../hooks/useAOSInitialization'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  useAOSInitialization()
  const { t } = useLanguage()
  
  return (
    <header id="header" className="min-h-screen flex items-center pt-20 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary dark:text-white mb-6 leading-tight">
              {t.header.greeting}{' '}
              <span className="gradient-text">{t.header.name}</span>{t.header.title}.
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
              {t.header.subtitle}
            </p>
            
            <a href="#about" className="btn-primary inline-block">
              {t.header.cta}
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl transform rotate-6 scale-105 opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl dark:shadow-gray-900/50 transition-colors duration-300">
                <Image
                  src="/images/emilly-almeida.jpeg"
                  alt="Emilly Almeida"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover animate-float"
                  priority
                />
              </div>
              {/* Background decoration */}
              <Image
                src="/abstract.svg"
                alt="Background decoration"
                width={300}
                height={300}
                className="absolute -z-10 -top-10 -right-10 opacity-30 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
