'use client'

import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Magnetic from '@/utils/common/Magnetic'
import getChars from '@/animation/animatedHeaders/getChars';
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import BecomePartner from '@/components/becomePartner';

const Landing = ({ windowWidth }) => {

    const [becomePartner, setBecomePartner] = useState(false)
    const [becomeMember, setBecomeMember] = useState(false)


    const handleBecomeMember = () => {
        setBecomeMember(!becomeMember)
    }

    const handleBecomePartner = () => {
        setBecomePartner(!becomePartner)
    }

    useEffect(() => {
        if (becomePartner || becomeMember) {
            // Save current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;

        }
        else {
            // Restore original position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            // Restore original position when component unmounts
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

    }, [becomePartner, becomeMember])

    // adding blur filter to the body when the modal is open

    useEffect(() => {
        const appElement = document.querySelector(`.${styles.landing}`);
        const servicesElement = document.querySelector(`.${styles.what}`)

        if (appElement) {
            if (becomePartner || becomeMember) {
                appElement.style.filter = 'blur(5px)';
            } else {
                appElement.style.filter = 'none';
            }
        }
    }, [becomePartner, becomeMember])



    return (
        <>
            <section className={styles.landing} style={{}}>
                <div className={styles.landing__left}>
                    <div className={styles.landing__left_content}>
                        <div className={styles.landing__left_content_upper}>
                            {windowWidth > 1200 ? (
                                <>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('A Creative Agency In Dubai')}
                                    </div>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('With A Focus On Wellness')}
                                    </div>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('And Career Coaching.')}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('A Creative Agency In ')}
                                    </div>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('Dubai With A Focus On')}
                                    </div>
                                    <div className={styles.landing__left_content_upper_content}>
                                        {getChars('Wellness & Community.')}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.landing__left_content_bottom}>
                            {windowWidth > 1200 ? (
                                <span>
                                    We are a creative agency in Dubai, specializing in wellness and <br /> career coaching for young influencers and entrepreneurs. <br />  We offer a range of services to help you achieve your goals.
                                </span>
                            ) : (
                                <p>
                                    We are a creative agency in Dubai, specializing in wellness and career coaching for young influencers and entrepreneurs. We offer a range of services to help you achieve your goals.
                                </p>
                            )}
                            <div className={styles.landing__left_content_bottom_right}>
                                <Magnetic>
                                    <Link href="" onClick={handleBecomePartner}>
                                        <span>
                                            Become A Partner
                                            <FaArrowRight />
                                        </span>
                                    </Link>
                                </Magnetic>
                                <Magnetic>
                                    <Link href="/about" className={styles.landing__left_content_bottom_right_link}>
                                        <span>
                                            IG
                                        </span>
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.landing__right}>
                    <video src="/mainVideo.mp4" loop autoPlay muted playsInline security='restricted' preload="metadata" />
                    <div className={styles.hero_text}>
                        <h1>Unleash Your Potential</h1>
                        <h2>Empowering Women in Health, Growth, and Careers.</h2>
                        <Magnetic>
                            <Link href="/register">
                                <span>
                                    Become A Member
                                    <FaArrowRight />
                                </span>
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </section>


            <AnimatePresence mode='wait'>
                {becomePartner && <BecomePartner handleBecomePartner={handleBecomePartner} />}
            </AnimatePresence>
        </>
    )
}

export default Landing