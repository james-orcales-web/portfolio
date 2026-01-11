import React from 'react'
import ScrollReveal from './ScrollReveal'
import './TechStack.css'

const TECH_STACKS = {
    row1: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'SASS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Wordpress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' }
    ],
    row2: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'REST API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
    ],
    row3: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
        { name: 'Webflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
        { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
    ]
}

function TechStack() {
    return (
        <section className="tech-stack-section" id="tech">
            <div className="tech-stack-container">
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="tech-stack-header">
                        <h2 className="tech-stack-title">
                            tech stack<span className="tech-dot">.</span>
                        </h2>
                        <p className="tech-stack-subtitle">MY DEVELOPMENT ARSENAL</p>
                    </div>
                </ScrollReveal>

                <div className="tech-scroll-container">
                    {/* Row 1 - Scroll Right */}
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="tech-scroll-row">
                            <div className="tech-scroll-content scroll-right">
                                {[...TECH_STACKS.row1, ...TECH_STACKS.row1].map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <div className="tech-item-inner">
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="tech-item-logo"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'
                                                }}
                                            />
                                            <span className="tech-item-name">{tech.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Row 2 - Scroll Left */}
                    <ScrollReveal direction="up" delay={0.4}>
                        <div className="tech-scroll-row">
                            <div className="tech-scroll-content scroll-left">
                                {[...TECH_STACKS.row2, ...TECH_STACKS.row2].map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <div className="tech-item-inner">
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="tech-item-logo"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'
                                                }}
                                            />
                                            <span className="tech-item-name">{tech.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Row 3 - Scroll Right */}
                    <ScrollReveal direction="up" delay={0.5}>
                        <div className="tech-scroll-row">
                            <div className="tech-scroll-content scroll-right">
                                {[...TECH_STACKS.row3, ...TECH_STACKS.row3].map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <div className="tech-item-inner">
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="tech-item-logo"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'
                                                }}
                                            />
                                            <span className="tech-item-name">{tech.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default TechStack