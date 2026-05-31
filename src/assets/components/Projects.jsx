import React from 'react'
import './Projects.css'

const Projects = () => {

  const projects = [
    {
      title: "SurveilAI-X",
      description:
        "Edge AI based surveillance system with real-time monitoring, object detection and intelligent alert generation.",
      tech: ["Python", "OpenCV", "Docker", "K3s"],
      image: "/project/surveilai.png",
      github: "#"
    },

    {
      title: "Restaurant App",
      description:
        "Full stack restaurant application with menu management, ordering system and responsive user experience.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/project/restraunt-app.png",
      github: "#"
    },

    {
      title: "Restaurant Backend",
      description:
        "RESTful backend architecture featuring authentication, database management and scalable API design.",
      tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
      image: "/project/restaurant-backend.png",
      github: "#"
    },

    {
      title: "UniSphere",
      description:
        "Frontend-focused university portal built with React and modern UI principles.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      image: "/project/unisphere.png",
      github: "#"
    },

    {
      title: "Recipe AI App",
      description:
        "AI-powered recipe recommendation platform using intelligent backend processing and user preferences.",
      tech: ["React", "Python", "MongoDB", "API"],
      image: "/project/recipe-ai.jpeg",
      github: "#"
    }
  ]

  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        <span className="projects-tag">
          FEATURED PROJECTS
        </span>

        <h2 className="projects-title">
          Things I've Built
        </h2>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View on GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects