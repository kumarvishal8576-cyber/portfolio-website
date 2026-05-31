import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <span className="contact-tag">
          CONTACT
        </span>

        <h2 className="contact-title">
          Let's Build Something Amazing Together
        </h2>

        <p className="contact-description">
          I'm always open to discussing new projects,
          internship opportunities and innovative ideas.
          Feel free to reach out.
        </p>

        <a
          href="mailto:kumarvishal8576@gmail.com"
          className="contact-btn"
        >
          Email Me
        </a>

        <div className="contact-links">

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

        </div>

      </div>

    </section>
  )
}

export default Contact