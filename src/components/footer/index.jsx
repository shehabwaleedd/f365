
'use client'

import React from 'react'
import styles from "./style.module.scss"
import Link from 'next/link'



const index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__upper}>
                <div className={styles.footer__upper__left}>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <a href="mailto:info@shehabwaleed.com"> hello@f356global.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+201023288200"> +20 10 232 88 200
                            </a>
                        </li>
                    </ul>

                </div>
                <div className={styles.footer__upper__right}>
                    <h2>Follow us</h2>
                    <div className={styles.footer__upper__right_container}>
                        <div >
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/f365movement/" target='_blank' rel="noreferrer">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/f365movement" target='_blank' rel="noreferrer">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/f365movement" target='_blank' rel="noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/community">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__footer}>
                <div className={styles.footer__footer_logoz}>
                    <h2>F356</h2>

                </div>
                <div className={styles.footer__footer_lower}>
                    <ul>
                        <li>
                            <Link href="https://www.instagram.com/kronfol_leb/" target='_blank' rel="noreferrer">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/kronfol_leb/" target='_blank' rel="noreferrer">
                                Privacy
                            </Link>
                        </li>
                    </ul>
                    <span>
                        Copyright © Sheboo 2024
                    </span>
                </div>
            </div>
        </footer >
    )
}

export default index