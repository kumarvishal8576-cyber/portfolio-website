import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}
      <div className="hero-glow"></div>

      {/* Top Bar */}
      <div className="hero-topbar">

        <div className="work-status">
          <span className="status-dot"></span>
          <span>Open To Work</span>
        </div>

        <a
          href="/my-resume.pdf"
          className="resume-btn"
         download="my-resume.pdf"
        >
           Download CV
        </a>
        
       

      </div>

      {/* Main Hero Content */}
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <p className="hero-role">
            FRONTEND DEVELOPER
          </p>

          <h1 className="hero-title">
            VISHAL <br />
            KUMAR
          </h1>

          <p className="hero-description">
            Building modern web experiences,
            AI-powered solutions and digital
            products that create real impact.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/kumarvishal8576-cyber"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-kumar-7ba3b230a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:kumarvishal8576@gmail.com">
              Email
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image-section">

          <div className="image-wrapper">

            <img
              src="/images/hola.png"
              alt="Vishal Kumar"
              className="hero-image"
            />

          </div>

        </div>

      </div>

      {/* Floating Navigation */}
      <nav className="floating-nav">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#education">Education</a>

        <a href="#contact">Contact</a>

      </nav>

    </section>
  )
}

export default Hero