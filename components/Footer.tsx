import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    { href: 'mailto:emillydalmeida@gmail.com', icon: '/email.svg', alt: 'Email' },
    { href: 'https://instagram.com/emillydalmeida', icon: '/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/in/emillydalmeida/', icon: '/linkedin.svg', alt: 'LinkedIn' },
  ]

  return (
    <footer id="footer" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            Vamos conversar?
          </h2>
          
          <p className="text-lg mb-2" data-aos="fade-up" data-aos-delay="100">
            Desenvolvido por Emilly Almeida.
          </p>
          
          <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Apaixonada por tecnologia e inovação, busco sempre criar soluções eficientes e impactantes. 
            Se você está procurando uma programadora dedicada e pronta para enfrentar novos desafios, 
            ficarei feliz em fazer parte da sua equipe. Entre em contato e vamos construir o futuro juntos!
          </p>

          {/* Contact Info */}
          <div className="mb-8 space-y-2" data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl font-medium">emillydalmeida@gmail.com</p>
            <p className="text-xl font-medium">85 99910-5460</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8" data-aos="fade-up" data-aos-delay="400">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Image src={link.icon} alt={link.alt} width={24} height={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 mt-8" data-aos="fade-up" data-aos-delay="500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
              <div>
                <p>© {new Date().getFullYear()} Emilly Almeida. Todos os direitos reservados.</p>
              </div>
              
              <div className="flex items-center gap-4">
                <span>Desenvolvido com ❤️ por Emilly Almeida</span>
                <span>•</span>
                <a 
                  href="https://github.com/emillydalmeida/emillydalmeida.github.io/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 underline"
                >
                  Licença MIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
