import React, { useState, useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import Stack from './Stack'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Your images for the stack
  const stackCards = [
    <img src="/jems.png" alt="James Orcales 1" className="card-image" />,
    <img src="/jems2.png" alt="James Orcales 2" className="card-image" />,
    <img src="/jems3.png" alt="James Orcales 3" className="card-image" />,
    <img src="/jems4.png" alt="James Orcales 4" className="card-image" />
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Main Content with Image */}
        <div className="about-main-content">
          {/* Left Side - Stack */}
          <ScrollReveal direction="left" delay={0.2} duration={1}>
            <div className="about-image-wrapper">
              <div className="stack-wrapper">
                <Stack
                  cards={stackCards}
                  randomRotation={true}
                  sensitivity={200}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  sendToBackOnClick={true}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Text Content */}
          <div className="about-text-content"  id="scroll-section">
            <ScrollReveal direction="right" delay={0.3} duration={1}>
              <div className="about-label">
                <span className="label-text">about me<span className="label-dot">.</span></span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4} duration={1}>
              <p className="about-description">
                I'm a Computer Science graduate with a passion for building beautiful, functional web applications.
                My journey in tech has been driven by curiosity and a love for solving complex problems through
                elegant code.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5} duration={1}>
              <p className="about-description">
                I specialize in creating seamless user experiences that blend aesthetic design with robust
                functionality. Whether it's crafting pixel-perfect interfaces or architecting scalable backend
                systems, I approach each project with meticulous attention to detail.
              </p>
            </ScrollReveal>

            {/* Resume Button */}
            <ScrollReveal direction="up" delay={0.6} duration={1}>
              <div className="resume-button-wrapper">
                <a
                  href="/Orcales-James_Resume.pdf"
                  download="Orcales-James_Resume.pdf"
                  className="resume-button"
                >
                  <span className="resume-button-text">Download Resume</span>
                  <span className="resume-button-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </span>
                  <span className="resume-button-bg"></span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About