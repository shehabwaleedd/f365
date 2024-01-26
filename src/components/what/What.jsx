import React, { useState, useRef, useEffect } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './style.module.scss'
import Image from 'next/image'

const What = () => {
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);

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
    const translateY2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-10%"]);
    const translateY3 = useTransform(scrollYProgress3, [0, 1], ["10%", "-20%"]);


    const data = [
        {
            title: "Career Coaching",
            description: "We offer a range of career coaching services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.",
            image: "/assets/growth.jpg",
            ref: imgRef,
            translate: translateY
        },
        {
            title: "Wellness",
            description: "We offer a range of wellness services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.",
            image: "/assets/wellness.jpg",
            ref: imgRef2,
            translate: translateY2
        },
        {
            title: "Community",
            description: "We offer a range of community services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.",
            image: "/assets/networking.jpg",
            ref: imgRef3,
            translate: translateY3
        },
    ]




    return (
        <section className={styles.what}>
            <div className={styles.what_upper}>
                <h2><span>/</span> Our Services</h2>
            </div>
            <div className={styles.what_lower}>
                {
                    data.map((item, index) => {
                        return (
                            <motion.div key={index} className={styles.what_lower_card} ref={item.ref} style={{ translateY: item.translate }}>
                                <h3>{item.title}</h3>
                                <motion.img  src={item.image} alt={item.title} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default What