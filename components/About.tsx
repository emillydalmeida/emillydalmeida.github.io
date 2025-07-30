import Image from 'next/image'

const About = () => {
  const socialLinks = [
    { href: 'https://instagram.com/emillydalmeida', icon: '/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/in/emillydalmeida/', icon: '/linkedin.svg', alt: 'LinkedIn' },
    { href: 'https://github.com/emillydalmeida', icon: '/github.svg', alt: 'GitHub' },
  ]

  const technologies = [
    { name: 'HTML5', icon: '/images/html.png' },
    { name: 'CSS3', icon: '/images/css3.png' },
    { name: 'JavaScript', icon: '/images/javascript.png' },
    { name: 'TypeScript', icon: '/images/typescript.png' },
    { name: 'React', icon: '/images/react.png' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Sobre <span className="gradient-text">Emilly Almeida</span>
            </h2>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg leading-relaxed">
                Desenvolvedora fullstack com 4+ anos de experiência, especializada em 
                criar soluções web modernas e eficientes. Formanda em Ciência da Computação 
                pela UFC, focada em entregar código limpo e experiências de usuário excepcionais.
              </p>
              
              <p className="text-base">
                Especializo-me em React, TypeScript e desenvolvimento full-stack, 
                transformando ideias complexas em aplicações funcionais e intuitivas.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Tecnologias</h4>
              <div className="flex space-x-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    title={tech.name}
                  >
                    <Image 
                      src={tech.icon} 
                      alt={tech.name} 
                      width={32} 
                      height={32}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Conecte-se comigo</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Image src={link.icon} alt={link.alt} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div data-aos="fade-left" className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/garoto-programando.png"
                alt="Desenvolvendo soluções"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
