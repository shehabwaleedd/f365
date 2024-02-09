'use client'
import React from 'react'
import styles from "./style.module.scss"
import { motion } from "framer-motion"

const BecomePartner = ({ handleBecomePartner }) => {

    return (
        <motion.section className={styles.partner} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }} exit={{ opacity: 0 }}>
            <div className={styles.partner__content}>

                <button onClick={handleBecomePartner} >
                    <span className={styles.partner__close}>&times;</span>
                </button>

                <h1 className={styles.partner__title}>Become a Partner</h1>
                <p className={styles.partner__text}>We are looking for partners to help us grow our business. If you are interested in becoming a partner, please fill out the form below and we will get back to you as soon as possible.</p>
                <form action="" className={styles.partner__content__form}>
                    <div className={styles.partner__content__form_group}>
                        <input type="text" placeholder="Name" className={styles.partner__input} />
                        <input type="text" placeholder="Email" className={styles.partner__input} />
                    </div>
                    <div className={styles.partner__content__form_group}>
                    <input type="text" placeholder="Phone" className={styles.partner__input} />
                        <input type="text" placeholder="Location" className={styles.partner__input} />
                        <input type="text" placeholder="Company" className={styles.partner__input} />
                    </div>
                    <input type="text" placeholder="Message" className={styles.partner__input} />
                    <button className={styles.partner__btn}>Send</button>
                </form>
            </div>
        </motion.section>
    )
}

export default BecomePartner