import React, { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

function Experience() {
    const timelineRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return

            const timeline = timelineRef.current
            const rect = timeline.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Start animation slightly after section enters viewport
            const startOffset = windowHeight * 0.2
            const totalHeight = rect.height + startOffset

            let progress =
                (windowHeight - rect.top - startOffset) / totalHeight

            progress = Math.max(0, Math.min(progress, 1))

            timeline.style.setProperty('--line-progress', progress)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const experiences = [
        {
            type: 'work',
            badge: 'Professional Experience',
            title: 'Web Designer / Developer',
            company: 'eClerx Philippines Inc.',
            location: 'Muntinlupa City, Philippines',
            period: 'July 2024 - December 2025',
            description:
                'Managed and updated client websites using Duda and other editing tools. Handled content updates, design adjustments, and website maintenance with accuracy and efficiency.',
            highlights: [
                'Managed client websites using Duda',
                'Collaborated remotely with teams',
                'Researched digital solutions'
            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png'
        },
        {
            type: 'work',
            badge: 'Pre-Professional Experience',
            title: 'Full Stack Web Developer',
            company: 'A Link Realty Inc.',
            location: 'Pasay City, Philippines',
            period: 'June 2023 - August 2023',
            description:
                'Started as an I.T. intern and advanced to Full-Stack Developer. Designed and managed real estate website using WordPress.',
            highlights: [
                'Advanced from intern to Full-Stack Developer',
                'Designed company website with WordPress',
                'Maintained digital assets'
            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png'
        },
        {
            type: 'education',
            badge: "Bachelor's Degree",
            title: 'BS in Computer Science',
            company: 'Bicol University',
            location: 'Legazpi City, Philippines',
            period: '2020 - 2024',
            description:
                "Graduated with honors. Dean's Lister for multiple terms and Service Awardee.",
            highlights: [
                "Dean's Lister (2021–2022, 2023–2024)",
                'Service Awardee',
                'Artist, Scientia Publication'
            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/3074/3074767.png'
        },
        {
            type: 'education',
            badge: 'Senior High School',
            title: 'Information and Communications Technology',
            company: 'La Purisima National High School',
            location: 'Nabua, Camarines Sur',
            period: '2018 - 2020',
            description:
                'Senior High School graduate with Academic Excellence, graduating with honors.',
            highlights: [
                'Academic Excellence Awardee',
                'Service Awardee',
                'Outstanding Performance Awardee'
            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/3976/3976625.png'
        }
    ]

    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <ScrollReveal direction="up">
                    <div className="experience-header">
                        <h2 className="experience-title">
                            experience<span className="experience-dot">.</span>
                        </h2>
                        <p className="experience-subtitle">
                            MY JOURNEY SO FAR
                        </p>
                    </div>
                </ScrollReveal>

                <div className="timeline" ref={timelineRef}>
                    {experiences.map((exp, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={0.15 * index}
                        >
                            <div
                                className={`timeline-item ${exp.type} ${index % 2 === 0 ? 'left' : 'right'
                                    }`}
                            >
                                <div className="timeline-marker">
                                    <div className="timeline-icon-wrapper">
                                        <img
                                            src={exp.icon}
                                            alt={exp.title}
                                            className="timeline-icon-img"
                                        />
                                    </div>
                                </div>

                                <div className="timeline-content">
                                    <div className="timeline-badge">
                                        {exp.badge}
                                    </div>

                                    <h3 className="timeline-title">
                                        {exp.title}
                                    </h3>
                                    <h4 className="timeline-company">
                                        {exp.company}
                                    </h4>

                                    <div className="timeline-meta">
                                        <span className="meta-item">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle
                                                    cx="12"
                                                    cy="10"
                                                    r="3"
                                                />
                                            </svg>
                                            {exp.location}
                                        </span>

                                        <span className="meta-item">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <rect
                                                    x="3"
                                                    y="4"
                                                    width="18"
                                                    height="18"
                                                    rx="2"
                                                />
                                                <line
                                                    x1="16"
                                                    y1="2"
                                                    x2="16"
                                                    y2="6"
                                                />
                                                <line
                                                    x1="8"
                                                    y1="2"
                                                    x2="8"
                                                    y2="6"
                                                />
                                                <line
                                                    x1="3"
                                                    y1="10"
                                                    x2="21"
                                                    y2="10"
                                                />
                                            </svg>
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="timeline-description">
                                        {exp.description}
                                    </p>

                                    <ul className="timeline-highlights">
                                        {exp.highlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
