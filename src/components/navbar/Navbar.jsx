'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Nav from './nav/index';
import { FiMenu } from "react-icons/fi";
import styles from './style.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import getChars from '@/animation/animatedHeaders/getChars';
import Calendly from './calendly/Calendly';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
    const controls = useAnimation();
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


    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, []);
    const toggleCalendlyModal = () => {
        setShowCalendlyModal(prevShow => !prevShow);
    };


    return (
        <header>
            <motion.nav className={styles.navbar}
                animate={controls}
                transition={{ ease: "easeOut" }}>
                <Link className={styles.navbar__logo} href="/">
                    <div className={styles.navbar__logo_anim}>
                        {getChars('F365')}
                    </div>
                </Link>
                <div className={styles.navbar__links}>
                    <ul>
                        <li>
                            <Link href="/events">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.menu} onClick={toggleNavOpen}>
                    <span><FiMenu style={{fontSize: "2rem", position: "relative", right: "0.5rem"}}/></span>
                </div>
                <AnimatePresence mode='wait'>
                    {navOpen && <Nav setNavOpen={setNavOpen} />}
                </AnimatePresence>
            </motion.nav>
        </header>
    )
}

export default Navbar

// <button onClick={toggleCalendlyModal} className={styles.calendlyButton}>
//     Schedule a meeting
// </button>
// <AnimatePresence mode='wait'>
//     {showCalendlyModal && <Calendly onClose={toggleCalendlyModal} />}
// </AnimatePresence>