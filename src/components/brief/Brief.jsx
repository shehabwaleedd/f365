'use client'
import React from 'react'
import styles from './style.module.scss'
import AnimatedSubs from '@/animation/animatedSubs/AnimatedSubs';
import F365 from "@/components/f365"
import Link from 'next/link';

const Brief = () => {

    return (
        <section className={styles.story}>
            <div>
                <F365 />
            </div>
            <div className={styles.story__content}>
                <div className={styles.story__content__left}>
                    <h2><span>/</span> Our Story</h2>
                </div>
                <div className={styles.story__content__right}>
                    <AnimatedSubs phrase={"F365, founded in 2023 by Asma Sami and Nihal Sami, is a pioneering wellness community dedicated to supporting women's health, personal development, and career progression. Incubated by in5 Dubai, an initiative of the Dubai Government, F365 empowers women through innovative programs and resources, fostering a vibrant environment for growth and success in all aspects of life."} />
                    <Link href="/about">
                        More About Our Story
                    </Link>
                </div>
                <div className={styles.story__content__video}>
                    <video src="/mainVideo.mp4" loop autoPlay muted playsInline security='restricted' preload="metadata" />
                </div>
            </div>
        </section>
    )
}

export default Brief