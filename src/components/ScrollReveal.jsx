import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    once = false  // Changed from true to false
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-100px" })
    const controls = useAnimation()

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        }
    }

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        } else {
            controls.start('hidden')  // Added this to reset animation
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal