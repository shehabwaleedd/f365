'use client';
import styles from './page.module.scss'
import { projects } from './data';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Events = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section ref={container} className={styles.events}>
            <div className={styles.events_left}>
                <h2>Events</h2>
                <p>At F365, we are proud to host a diverse range of events designed to inspire, empower, and connect women from all walks of life. Our events are carefully curated to support your journey in health, personal development, and career progression. Whether it&apos;s through interactive workshops, networking gatherings, or empowering seminars, each event is an opportunity to learn, grow, and be part of a vibrant community committed to making a positive impact.</p>
            </div>
            <div className={styles.events_right}>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </div>
        </section>
    )
}

export default Events