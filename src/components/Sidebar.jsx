import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

function Sidebar() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/james-orcales-web',
      icon: <FaGithub className="socials" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/james-orcales',
      icon: <FaLinkedin className="socials" />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jam.exee',
      icon: <FaFacebook className="socials" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_itmejam/',
      icon: <FaInstagram className="socials" />
    }
  ]

  return (
    <aside className="sidebar">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
      <div className="sidebar-divider"></div>
      <span className="follow-text">Follow Me</span>
    </aside>
  )
}

export default Sidebar