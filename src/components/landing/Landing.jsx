import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Magnetic from '@/utils/common/Magnetic'
import getChars from '@/animation/animatedHeaders/getChars';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Landing = ({ windowWidth }) => {

    return (
        <section className={styles.landing}>
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
                            <Link href="/about">
                                <span>
                                    Become A Partner
                                    <FaArrowRight />
                                </span>
                            </Link>
                            <Link href="/about" className={styles.landing__left_content_bottom_right_link}>
                                <span>
                                    IG
                                </span>
                            </Link>
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
                        <Link href="/events">
                            <span>
                                Become A Member
                                <FaArrowRight />
                            </span>
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </section>
    )
}

export default Landing