'use client'

import Image from 'next/image'
import { useAOSInitialization } from '../hooks/useAOSInitialization'

const Footer = () => {
  useAOSInitialization()
  
  const socialLinks = [
    { name: 'GitHub', icon: '/github.svg', url: 'https://github.com/emillydalmeida' },
    { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://linkedin.com/in/emillydalmeida' },
    { name: 'Instagram', icon: '/instagram.svg', url: 'https://instagram.com/emillydalmeida' },
    { name: 'Email', icon: '/email.svg', url: 'mailto:emilly@example.com' }
  ]

  return (
    <footer id="contact" className="bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-gray-800 dark:to-gray-900 text-white py-16">
      <div className="section-container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos conversar?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Entre em contato comigo!
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 dark:bg-gray-700/50 p-3 rounded-full hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors duration-300"
                aria-label={link.name}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 dark:border-gray-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80 dark:text-gray-300">
            <div>
              <p>© {new Date().getFullYear()} Emilly Almeida. Todos os direitos reservados.</p>
            </div>
            <div>
              <p>
                Desenvolvido por Emilly | 
                <a 
                  href="https://github.com/emillydalmeida/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 hover:text-white dark:hover:text-white transition-colors"
                >
                  Licença MIT
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer