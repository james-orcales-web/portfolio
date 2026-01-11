import React from 'react'
import ScrollFloat from './ScrollFloat'

function ScrollSection() {
    return (
        <section className="scroll-section" id="scroll-section">
            <div className="quote-frame">

                {/* CORNER MARKERS */}
                <span className="corner top-left" />
                <span className="corner top-right" />
                <span className="corner bottom-left" />
                <span className="corner bottom-right" />

                <div className="quote-outer">
                    <div className="dot-pattern" />

                    <div className="quote-content">
                        <p className="quote-label">I believe in</p>

                        <div className="quote-text">
                            <div className="quote-row">
                                <ScrollFloat containerClassName="bold">
                                    “design that works
                                </ScrollFloat>
                                <ScrollFloat containerClassName="thin">
                                    at a glance,
                                </ScrollFloat>
                                <ScrollFloat containerClassName="thin">
                                    because
                                </ScrollFloat>
                                <ScrollFloat containerClassName="bold">
                                    simple ideas
                                </ScrollFloat>
                                <ScrollFloat containerClassName="thin">
                                    leave the
                                </ScrollFloat>
                                <ScrollFloat containerClassName="bold">
                                    strongest impact.”
                                </ScrollFloat>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ScrollSection
