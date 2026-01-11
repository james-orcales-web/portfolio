import React, { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import { HiOutlineChat } from 'react-icons/hi';

function Hero() {
  const titles = ['Web Developer', 'Web Designer', 'UI/UX Designer', 'Frontend Developer', 'Artist']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
          setTypingSpeed(150)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1))
          setTypingSpeed(100)
        } else {
          setIsDeleting(false)
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titles])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('scroll-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="hero" id="home"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="hero-content">
        <ScrollReveal direction="up" delay={0.2} duration={1}>
          <h1 className="hero-title">
            <span className="hero-name">JAMES</span>
            <span className="hero-name">ORCALES</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4} duration={1}>
          <p className="hero-subtitle">
            <svg className="sparkle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L17.5 14.5L32 16L17.5 17.5L16 32L14.5 17.5L0 16L14.5 14.5L16 0Z" fill="white" />
            </svg>
            <span className="typing-text">
              {displayedText}
              <span className="cursor">|</span>
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6} duration={1}>
          <p className="hero-description">
            Computer Science graduate passionate about merging technology with creativity. Experienced in Front-End
            and Back-End Development, with strong UI/UX design skills.
          </p>
        </ScrollReveal>

        {/* GET IN TOUCH BUTTON */}
        <ScrollReveal direction="up" delay={0.8} duration={1}>
          <div className="hero-button-wrapper">
            <a
              href="#contact"
              className="hero-button"
            >
              <span className="hero-button-text">Get In Touch</span>
              <span className="hero-button-icon">
                <HiOutlineChat size={20} />
              </span>
              <span className="hero-button-bg"></span>
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* SCROLL INDICATOR */}
      <ScrollReveal direction="up" delay={1} duration={1}>
        <div className="scroll-indicator" onClick={scrollToNextSection}>
          <div className="scroll-icon"></div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Hero
