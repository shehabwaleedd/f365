'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import AnimatedSubs from '@/animation/animatedSubs/AnimatedSubs';
import Link from 'next/link';

const Brief = ({ windowWidth }) => {

    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const panelRefs = useRef([]);

    const isDesktop = windowWidth > 1268;

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: imgRef2,
        offset: ["start end", "center start"]
    });

    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: imgRef2,
        offset: ["start end", "center start"]
    });



    const translateY = useTransform(scrollYProgress1, [0, 1], ["-10%", "10%"]);
    const translateY2 = useTransform(scrollYProgress2, [0, 1], ["10%", "-14%"]);
    const translateY3 = useTransform(scrollYProgress3, [0, 1], ["10%", "-14%"]);



    return (
        <section className={styles.story}>
            <div className={styles.story__left}>
                <h2><span>/</span> Our Story</h2>
            </div>
            <div className={styles.story__right}>
                <AnimatedSubs phrase={"F365, founded in 2023 by Asma Sami and Nihal Sami, is a pioneering wellness community dedicated to supporting women's health, personal development, and career progression. Incubated by in5 Dubai, an initiative of the Dubai Government, F365 empowers women through innovative programs and resources, fostering a vibrant environment for growth and success in all aspects of life."} />
                <Link href="/about">
                    More About Our Story
                </Link>
            </div>
        </section>
    )
}

export default Brief