'use client'

import React from 'react'
import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from '@/animation/animatedSubs/animation';


const Statement = () => {
    const description = useRef(null);
    const isInView = useInView(description, { once: true })
    const phrase1 = "At F365, we passionately believe in empowering women to lead healthier, more fulfilled lives, embracing both personal and professional growth."
    return (
        <section className={styles.statement} ref={description}>
            <div className={styles.statement_upper}>
                <h2>
                    {
                        phrase1.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </h2>
            </div>
            <p>
                Our community is founded on the principles of holistic well-being, offering support and resources in health, personal development, and career progression. We recognize the unique journey of each woman and are committed to nurturing their growth every step of the way. Through a variety of programs, workshops, and coaching, we aim to inspire and empower women to reach their full potential. In our collaborative and supportive environment, we celebrate the diverse experiences of women and foster a culture where everyone can thrive and succeed.
            </p>
        </section>
    )
}

export default Statement