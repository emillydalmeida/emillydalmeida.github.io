'use client'

import Image from 'next/image'
import { useAOSInitialization } from '../hooks/useAOSInitialization'

const Skills = () => {
  useAOSInitialization()
  
  const skills = [
    { 
      name: 'Desenvolvimento Web', 
      icon: '/code.svg', 
      description: 'Criação de websites e aplicações web modernas utilizando tecnologias como HTML, CSS, JavaScript e frameworks atuais.' 
    },
    { 
      name: 'Análise de Dados', 
      icon: '/data.svg', 
      description: 'Extração de insights valiosos através da análise estatística e visualização de dados complexos.' 
    },
    { 
      name: 'Design Digital', 
      icon: '/design.svg', 
      description: 'Criação de interfaces intuitivas e experiências visuais atrativas focadas na experiência do usuário.' 
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-6">
            Habilidades
          </h2>
          <p className="text-lg text-text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            Principais áreas de expertise que desenvolvi ao longo da minha jornada profissional
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
