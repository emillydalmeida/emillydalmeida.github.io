import Image from 'next/image'

const Header = () => {
  return (
    <header id="header" className="min-h-screen flex items-center pt-20 pb-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Olá! Sou{' '}
              <span className="gradient-text">Emilly Almeida</span>, uma{' '}
              <span className="gradient-text">Desenvolvedora Fullstack</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
              Desenvolvedora fullstack com paixão por criar soluções eficientes e escaláveis. 
              Com experiência em front-end e back-end, estou sempre em busca de novos 
              desafios para transformar ideias em realidade através da tecnologia.
            </p>
            
            <a href="#about" className="btn-primary inline-block">
              Saiba Mais!
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
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
