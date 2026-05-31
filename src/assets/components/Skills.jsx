import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">

        <span className="skills-tag">
          MY SKILLS
        </span>

        <h2 className="skills-title">
          Technologies I Work With
        </h2>

      </div>

      <div className="skills-grid">

        <div className="skill-card">

          <h3>Frontend</h3>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>

        </div>

        <div className="skill-card">

          <h3>Backend</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>

        </div>

        <div className="skill-card">

          <h3>Languages</h3>

          <ul>
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>

        </div>

        <div className="skill-card">

          <h3>Tools</h3>

          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Selenium webdriver</li>
            <li>Eclipse IDE</li>
          </ul>

        </div>

      </div>

    </section>
  )
}

export default Skills