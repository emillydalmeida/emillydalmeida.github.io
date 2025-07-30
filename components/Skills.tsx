'use client'

import Image from 'next/image'
import { useAOSInitialization } from '../hooks/useAOSInitialization'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  useAOSInitialization()
  const { t } = useLanguage()
  
  const skills = [
    { 
      name: t.skills.items.web.name, 
      icon: '/code.svg', 
      description: t.skills.items.web.description
    },
    { 
      name: t.skills.items.data.name, 
      icon: '/data.svg', 
      description: t.skills.items.data.description
    },
    { 
      name: t.skills.items.design.name, 
      icon: '/design.svg', 
      description: t.skills.items.design.description
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-6">
            {t.skills.title}
          </h2>
          <p className="text-lg text-text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="filter group-hover:scale-110 transition-transform duration-300 dark:invert"
                />
              </div>
              <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-3">
                {skill.name}
              </h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
