import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: '#header', label: t.navbar.home },
    { href: '#about', label: t.navbar.about },
    { href: '#skills', label: t.navbar.skills },
    { href: '#projects', label: t.navbar.projects },
    { href: '#footer', label: t.navbar.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-50 transition-colors duration-300">
      <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-3 md:py-4 min-w-0">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Emilly Almeida" 
              width={100}
              height={32}
              className="h-6 sm:h-8 md:h-10 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-text-primary dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Image 
                src="/menu.svg" 
                alt="Menu" 
                width={18}
                height={18}
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="block text-text-primary dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
