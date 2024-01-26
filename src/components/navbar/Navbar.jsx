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

const PopupButton = dynamic(
    () => import('react-calendly').then((mod) => mod.PopupButton),
    { ssr: false }
);

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);


    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, []);
    // const handleCalendlyClick = () => {
    //     const calendlyUrl = "https://calendly.com/demoon0007";
    //     window.open(calendlyUrl);
    // };

    const toggleCalendlyModal = () => {
        setShowCalendlyModal(prevShow => !prevShow);
    };


    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.navbar_container}>
                        <div className={styles.navbar_container_left}>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/services">Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.navbar_container_middle}>
                            <Link href="/">
                                <h2>
                                    F365
                                </h2>
                            </Link>
                        </div>
                        <div className={styles.navbar_container_right}>
                            <ul>
                                <li>
                                    <Link href="/events">Events</Link>
                                </li>
                                <li>
                                    <Link href="/community">Community</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <button onClick={toggleCalendlyModal} className={styles.calendlyButton}>
                            Schedule a meeting
                        </button>
                        <AnimatePresence mode='wait'>
                            {showCalendlyModal && <Calendly onClose={toggleCalendlyModal} />}
                        </AnimatePresence>

                        <div className={styles.menu} onClick={toggleNavOpen}>
                            <span><FiMenu style={{ fontSize: "2rem", color: "var(--container-color)" }} /></span>
                        </div>
                    </div>
                    <AnimatePresence mode='wait'>
                        {navOpen && <Nav setNavOpen={setNavOpen} />}
                    </AnimatePresence>
                </nav >
                <section className={styles.second_navbar}>
                    <div className={styles.second_navbar_container}>
                        <ul>
                            <li>
                                <Link href="/">Lifestyle</Link>
                            </li>
                            <li>
                                <Link href="/about">Health</Link>
                            </li>
                            <li>
                                <Link href="/services">Culture</Link>
                            </li>
                            <li>
                                <Link href="/events">Careers</Link>
                            </li>
                            <li>
                                <Link href="/events">Fashion</Link>
                            </li>
                        </ul>
                    </div>
                </section>

            </header>
        </>
    )
}

export default Navbar