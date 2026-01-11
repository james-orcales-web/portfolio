import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollFloat.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollFloat = ({
    children,
    scrollContainerRef,
    containerClassName = '',
    textClassName = '',
    animationDuration = 0.8,
    ease = 'power3.out',
    scrollStart = 'top bottom-=15%',
    scrollEnd = 'center center',
    stagger = 0.02
}) => {
    const containerRef = useRef(null)

    const splitText = useMemo(() => {
        if (typeof children !== 'string') return children

        return children.split('').map((char, index) => (
            <span className="char" key={index}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    }, [children])

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window

        const chars = el.querySelectorAll('.char')

        const tl = gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: 40,
                filter: 'blur(6px)',
                willChange: 'transform, opacity, filter'
            },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: animationDuration,
                ease: ease,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: true
                }
            }
        )

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger
    ])

    return (
        <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
            <span className={`scroll-float-text ${textClassName}`}>
                {splitText}
            </span>
        </h2>
    )
}

export default ScrollFloat
