import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-header">

        <span className="about-tag">
          ABOUT ME
        </span>

        <h2 className="about-title">
          Building Digital Experiences &
          Intelligent Systems
        </h2>

      </div>

      <div className="about-content">

        <div className="about-left">

          <div className="about-image-card">

            <img
              src="/images/abc.png"
              alt="Vishal Kumar"
              className="about-image"
            />

          </div>

        </div>

        <div className="about-right">

          <p className="about-text">
            I'm Vishal Kumar, a B.Tech student from Thapar Institute of Engineering and Technology, passionate
            about Frontend Development, AI Systems and
            building products that solve real-world
            problems.
          </p>

          <p className="about-text">
            My interests include React development,
            Data Structures & Algorithms, Machine Learning,
            and exploring the latest trends in web
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About