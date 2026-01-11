import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollYProgress } = useScroll()

    // Smooth spring animation
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        // Show progress bar after scrolling a bit
        const unsubscribe = scrollYProgress.onChange((value) => {
            setIsVisible(value > 0.01)
        })

        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <div className={`scroll-progress-wrapper ${isVisible ? 'visible' : ''}`}>
            <div className="scroll-progress-track">
                <motion.div
                    className="scroll-progress-fill"
                    style={{ scaleY }}
                />
            </div>
        </div>
    )
}

export default ScrollProgress