import Image from 'next/image'
import { useAOSInitialization } from '../hooks/useAOSInitialization'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  useAOSInitialization()
  const { t } = useLanguage()
  
  const projects = [
    {
      id: 1,
      title: t.projects.items.cinemyteca.title,
      description: t.projects.items.cinemyteca.description,
      image: '/images/cinemyteca-project.png',
      liveUrl: 'https://cinemyteca.vercel.app/',
      githubUrl: 'https://github.com/emillydalmeida/Cinemyteca',
      technologies: ['Next.js', 'Supabase', 'TMDB API', 'CSS Modules'],
      reversed: false,
    },
    {
      id: 2,
      title: t.projects.items.tincat.title,
      description: t.projects.items.tincat.description,
      image: '/images/tincat-project.png',
      githubUrl: 'https://github.com/emillydalmeida/WebDevelopment/blob/main/11.3%20TinDog%20Project/index.html',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      reversed: true,
    },
    {
      id: 3,
      title: t.projects.items.webAgency.title,
      description: t.projects.items.webAgency.description,
      image: '/images/dev-agency-project.png',
      githubUrl: 'https://github.com/emillydalmeida/WebDevelopment/blob/main/8.4%20Web%20Design%20Agency%20Project/index.html',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      reversed: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-6"
            dangerouslySetInnerHTML={{ __html: t.projects.title }}
          />
          <p className="text-lg text-text-secondary dark:text-gray-300 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                project.reversed ? 'lg:grid-flow-col-dense' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className={`${project.reversed ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${project.reversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-text-primary dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-primary/10 dark:bg-brand-secondary/20 text-brand-primary dark:text-brand-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {t.projects.viewProject}
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-brand-primary dark:border-brand-secondary text-brand-primary dark:text-brand-secondary hover:bg-brand-primary dark:hover:bg-brand-secondary hover:text-white dark:hover:text-gray-900 rounded-lg transition-all duration-300 font-medium"
                  >
                    {t.projects.viewCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
