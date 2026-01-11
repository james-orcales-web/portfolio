import React from 'react'
import ScrollReveal from './ScrollReveal'
import { FaGithub, FaLinkedin, FaFacebook, FaDribbble, FaInstagram } from 'react-icons/fa'

function Contact() {
    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/james-orcales-web' },
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/james-orcales' },
        { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/jam.exee' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/_itmejam/' }
    ]

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="contact-content-center">
                        <p className="contact-tagline">Have a project in mind?</p>
                        <h2 className="contact-email">
                            <a href="mailto:jamorcales25@gmail.com">
                                jamorcales25@gmail.com
                            </a>
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                    <footer className="footer-minimal">
                        <p className="footer-text">
                            Design & built by James Orcales
                        </p>

                        <div className="footer-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-icon"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </footer>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Contact
