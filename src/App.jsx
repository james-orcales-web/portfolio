import React, { useState } from 'react'
import Loading from './components/Loading'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import StaggeredMenu from './components/StaggeredMenu'
import Particles from './components/Particles'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import ScrollSection from './components/ScrollSection'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Tech Stack', ariaLabel: 'View my tech stack', link: '#tech' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ]

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/james-orcales-web' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/james-orcales' },
    { label: 'Facebook', link: 'https://www.facebook.com/jam.exee' },
    { label: 'Instagram', link: 'https://www.instagram.com/_itmejam/' }
  ]

  if (isLoading) {  
    return <Loading onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <SmoothScroll>
      <ScrollProgress />

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <Particles
          particleColors={['#ff6b5a', '#ffd166', '#ffffff']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          sizeRandomness={1}
          pixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#e5980c', '#ffd166']}
          logoUrl="/logo-invert.png"
          accentColor="#e5980c"
          isFixed={true}
          closeOnClickAway={true}
        />
        <Sidebar />
        <Hero />
        <ScrollSection />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </SmoothScroll>
  )
}

export default App