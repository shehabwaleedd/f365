'use client'
import React from 'react'
import styles from '@/app/account/page.module.scss'
import { motion } from 'framer-motion'
const index = ({ user }) => {
    return (
        <motion.section className={styles.account__lower_right_content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.account__lower_right_content_top}>
                <h2>Personal Info</h2>
                <button>
                    <span>
                        Edit
                    </span>
                </button>
            </div>
            <div className={styles.account__lower_right_content_bottom}>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Name</h3>
                    <p>{user.data.name}</p>
                </div>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Email</h3>
                    <p>{user.data.email}</p>
                </div>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Phone</h3>
                    <p>{user.data.phone}</p>
                </div>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Country</h3>
                    <p>{user.data.country}</p>
                </div>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Region</h3>
                    <p>{user.data.region}</p>
                </div>
                <div className={styles.account__lower_right_content_bottom_content}>
                    <h3>Age</h3>
                    <p>{user.data.age}</p>
                </div>
            </div>
        </motion.section>
    )
}

export default index