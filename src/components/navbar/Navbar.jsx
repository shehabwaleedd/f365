'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Nav from './nav/index';
import { FiMenu } from "react-icons/fi";
import styles from './style.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Calendly from './calendly/Calendly';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
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
        <motion.nav className={styles.nav} >
            <div className={styles.nav__container}>
                <div className={styles.nav__left}>
                    <Link className={styles.nav__logo} href="/">
                        <h1 className={styles.logo__name}>F365</h1>
                    </Link>
                    <div className={styles.nav__middle}>
                        <ul className={styles.nav__list}>
                            <Link className={styles.nav__link} href="/portraits">
                                <motion.li className={styles.nav__item}>
                                    Events
                                </motion.li>
                            </Link>
                            <Link className={styles.nav__link} href="/history">
                                <motion.li className={styles.nav__item}>
                                    About
                                </motion.li>
                            </Link>
                            <Link className={styles.nav__link} href="/politics">
                                <motion.li className={styles.nav__item}>
                                    Contact
                                </motion.li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div className={styles.nav__right}>
                    <AnimatePresence>
                        {navOpen && (
                            <motion.div
                                className={styles.extendedMenu}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                            >
                                <Link className={styles.nav__link} href="/mission">
                                    <motion.li
                                        className={styles.nav__item}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        Our Mission
                                    </motion.li>
                                </Link>
                                <Link className={styles.nav__link} href="/about">
                                    <motion.li
                                        className={styles.nav__item}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        About Us
                                    </motion.li>
                                </Link>
                                <Link className={styles.nav__link} href="/careers">
                                    <motion.li
                                        className={styles.nav__item}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        Careers
                                    </motion.li>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <h2 className={styles.nav__item} onClick={toggleNavOpen}>
                        Menu
                    </h2>
                </div>
            </div>
        </motion.nav >
    )
}

export default Navbar

// <button onClick={toggleCalendlyModal} className={styles.calendlyButton}>
//     Schedule a meeting
// </button>
// <AnimatePresence mode='wait'>
//     {showCalendlyModal && <Calendly onClose={toggleCalendlyModal} />}
// </AnimatePresence>