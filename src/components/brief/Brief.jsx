'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

const Brief = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    useEffect(() => {
        // Set the initial window width
        setWindowWidth(window.innerWidth);

        // Update the window width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const panelRefs = useRef([]);

    const isDesktop = windowWidth > 1268;


    const url = "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const url2 = "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const url3 = "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

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
                {isDesktop ? (
                    <p>F365, founded in 2023 by Asma Sami and Nihal Sami, is a pioneering wellness community dedicated to supporting women&apos;s health, personal development, and career progression. Incubated by in5 Dubai, an initiative of the Dubai Government, F365 empowers women through innovative programs and resources, fostering a vibrant environment for growth and success in all aspects of life.</p>

                ) : (
                    <span>F365, founded in 2023 by Asma Sami and Nihal Sami, is a pioneering wellness community dedicated to supporting women&apos;s health, personal development, and career progression. Incubated by in5 Dubai, an initiative of the Dubai Government, F365 empowers women through innovative programs and resources, fostering a vibrant environment for growth and success in all aspects of life.</span>
                )}
                <div className={styles.story__right_images}>
                    {isDesktop ? (
                        <div className={styles.story__right_images__container}>
                            <>
                                <motion.img
                                    style={{ translateY }}
                                    ref={imgRef}
                                    className={styles.story__right_images__container__image_left} src={url} />
                                <motion.img
                                    style={{ translateY: translateY2 }}
                                    ref={imgRef2}
                                    className={styles.story__right_images__container__image_top_right} src={url2} />
                                <motion.img
                                    style={{ translateY: translateY3 }}
                                    ref={imgRef3}
                                    className={styles.story__right_images__container__image_bottom_right} src={url3} />

                            </>
                        </div>

                    ) : (
                        <motion.div drag="x" dragConstraints={{ left: -500, right: 0 }} className={styles.story__right_images__drag}>
                            <div className={styles.story__right_images__drag_image}>
                                <Image src={url}
                                    width={500}
                                    height={500}
                                    alt='img'
                                />
                            </div>
                            <div className={styles.story__right_images__drag_image}>
                                <Image src={url}
                                    width={500}
                                    height={500}
                                    alt='img'
                                />
                            </div>
                            <div className={styles.story__right_images__drag_image}>
                                <Image src={url}
                                    width={500}
                                    height={500}
                                    alt='img'
                                />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Brief