'use client'

import React, { useState } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'

const Navbar = () => {
    return (
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
                                <a href="/events">Events</a>
                            </li>
                            <li>
                                <a href="/community">Community</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
    )
}

export default Navbar