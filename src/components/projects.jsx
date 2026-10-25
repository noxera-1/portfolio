import './Projects.css'

const projects = [
  {
    title: 'Campus Ride',
    description:
      'A transportation website designed to help students and residents explore ride options and request transportation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://noxera-1.github.io/campusride/',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A personal portfolio showcasing my web development skills, projects, and services.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://noxera-1.github.io/portfolio',
  },
  {
    title: 'Dominion Restaurant',
    description:
      'A responsive website designed to showcase Nigeria dish and make it easy for customers to explore the restuarant services and get in touch.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://noxera-1.github.io/dominion/',
  },
  {
    title: 'PurpleVoice AI',
    description:
      'An AI-powered voice assistant designed to help users with various tasks and information retrieval.',
    tech: ['Python', 'TensorFlow', 'JavaScript'],
    link: 'https://noxera-1.github.io/purplevoice/',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <p className="projects-label">MY WORK</p>

        <h2>Projects I've Worked On</h2>

        <p className="projects-intro">
          Here are some projects that reflect my skills and what I can build.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects