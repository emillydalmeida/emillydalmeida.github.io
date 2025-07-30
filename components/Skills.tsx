import Image from 'next/image'

const Skills = () => {
  const skills = [
    {
      icon: '/code.svg',
      title: 'Desenvolvimento Web',
      description: 'Experiência em desenvolvimento fullstack com foco em tecnologias modernas.',
    },
    {
      icon: '/design.svg',
      title: 'Web Design',
      description: 'Habilidade em criar layouts modernos e responsivos, com foco na experiência do usuário.',
    },
    {
      icon: '/data.svg',
      title: 'Gerenciamento de dados',
      description: 'Experiência em ferramentas de gerenciamento e manipulação de dados para controle e organização de aplicações.',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Minha <span className="gradient-text">caixinha de ferramentas</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Descubra as habilidades e ferramentas que domino e que me permitem
            criar soluções criativas e funcionais nas aplicações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <Image src={skill.icon} alt={skill.title} width={32} height={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
                {skill.title}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed">
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
