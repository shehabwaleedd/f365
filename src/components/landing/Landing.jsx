import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'

const Landing = () => {
    return (
        <section className={styles.landing}>
            <div className={styles.hero_img}>
                <video src="/mainVideo.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className={styles.hero_text}>
                    <h1>Unleash Your Potential</h1>
                    <h2>Empowering Women in Health, Growth, and Careers.</h2>
                    <button>
                        <Link href="/events">
                            Join Our Community
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Landing