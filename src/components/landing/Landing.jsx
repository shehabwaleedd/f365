import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Magnetic from '@/utils/common/Magnetic'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Landing = () => {

    return (
        <section className={styles.landing}>
            <div className={styles.landing__left}>
                <div className={styles.landing__left_content}>
                    <h2>
                        A creative agency in dubai
                    </h2>
                    <div className={styles.landing__left_content_bottom}>
                        <span>
                            We are a creative agency in Dubai, specializing in wellness and career coaching for young influencers and entrepreneurs. We offer a range of services to help you achieve your goals.
                        </span>
                        <div className={styles.landing__left_content_bottom_right}>
                            <Link href="/about">
                                <span>
                                    Become A Member
                                    <FaArrowRight />
                                </span>
                            </Link>
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
            {/* <div className={styles.landing__right}>
                <video src="/mainVideo.mp4" loop autoPlay muted playsInline security='restricted' preload="metadata" />
                <div className={styles.hero_text}>
                    <h1>Unleash Your Potential</h1>
                    <h2>Empowering Women in Health, Growth, and Careers.</h2>
                    <Magnetic>
                        <Link href="/events">
                            <span>
                                Become A Member
                            </span>
                        </Link>
                    </Magnetic>
                </div>
            </div> */}
        </section>
    )
}

export default Landing