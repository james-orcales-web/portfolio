import React, { useState, useEffect } from 'react'
import Particles from './Particles'

function Loading({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0)
    const [showLogo, setShowLogo] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [exit, setExit] = useState(false)

    /* Simulated loading progress */
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + Math.random() * 10
            })
        }, 150)

        return () => clearInterval(interval)
    }, [])

    /* Logo reveal → exit animation → complete */
    useEffect(() => {
        if (progress >= 100) {
            const logoTimer = setTimeout(() => {
                setShowLogo(true)

                const exitTimer = setTimeout(() => {
                    setExit(true)

                    const completeTimer = setTimeout(() => {
                        setFadeOut(true)
                        onLoadingComplete()
                    }, 700)

                    return () => clearTimeout(completeTimer)
                }, 1200)

                return () => clearTimeout(exitTimer)
            }, 400)

            return () => clearTimeout(logoTimer)
        }
    }, [progress, onLoadingComplete])

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''} ${exit ? 'exit' : ''}`}>
            {/* Particle Background */}
            <Particles
                particleCount={150}
                particleSpread={10}
                speed={0.1}
                alphaParticles
                particleBaseSize={80}
                disableRotation
                className="loading-particles"
            />

            <div className="loading-bg-pattern" />

            <div className="loading-content">
                {!showLogo && (
                    <>
                        <div className="loading-bar-container">
                            <div
                                className="loading-bar"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                        </div>

                        <div className="loading-percentage">
                            {Math.floor(Math.min(progress, 100))}%
                        </div>

                        <div className="loading-dots">
                            <span />
                            <span />
                            <span />
                        </div>
                    </>
                )}

                {showLogo && (
                    <div className="logo-reveal">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="logo-load"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Loading
