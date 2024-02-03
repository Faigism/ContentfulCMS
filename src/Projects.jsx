import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return (
      <section className="projects">
        <h4>Loading...</h4>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title, url } = project
          return (
            <a
              key={id}
              href={url}
              className="project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
