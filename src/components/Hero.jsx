function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>

        <h1>Miracle Ebube</h1>

        <h2>Web Developer</h2>

        <p className="hero-description">
          I build clean, responsive websites with a focus on simple design,
          good user experience, and getting the details right.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn-secondary">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="photo-frame">
          <img src="/profile.jpg" alt="Miracle Ebube" />
        </div>
      </div>
    </section>
  )
}

export default Hero