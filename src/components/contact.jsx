import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Have a project in mind?</h2>

        <p className="contact-description">
          I'm available to help businesses and individuals build clean,
          responsive websites that look great and work smoothly.
          Let's discuss what you have in mind.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:YOUR_EMAIL_HERE"
            className="contact-button primary"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            className="contact-button secondary"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact