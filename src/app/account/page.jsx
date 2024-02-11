'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './page.module.scss'
import { useUser } from '@/context/useUser'
import { logout } from '@/context/useUser'
import { useRouter } from "next/navigation"
import PersonalInfo from '@/components/accountComponents/personalInfo'
import ChangePassword from "@/components/accountComponents/changePassword"
import { AnimatePresence } from 'framer-motion'

const Account = () => {
    const { user, loading, error, userLoggedIn } = useUser();
    const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
    const [changePasswordOpen, setChangePasswordOpen] = useState(false);
    const [userEventsOpen, setUserEventsOpen] = useState(false);
    const router = useRouter()

    const handleLogout = () => {
        logout();
        router.push("/login")
    }

    const handleOpen = (e) => {
        if (e.target.id === "personalInfo") {
            setPersonalInfoOpen(true);
            setChangePasswordOpen(false);
            setUserEventsOpen(false);
        }
        if (e.target.id === "changePassword") {
            setChangePasswordOpen(true);
            setPersonalInfoOpen(false);
            setUserEventsOpen(false);
        }
        if (e.target.id === "userEvents") {
            setUserEventsOpen(true);
            setChangePasswordOpen(false);
            setPersonalInfoOpen(false);
        }
    }




    if (loading) return <div className={styles.please}>Loading...</div>;
    if (error) return <div >Error: {error.message}</div>;
    if (!user) return <div>Please login.</div>;


    return (
        <main className={styles.account}>
            <div className={styles.account__upper}>
                <h1>Account</h1>
                <button onClick={handleLogout}>
                    <span>
                        Logout
                    </span>
                </button>
            </div>
            <div className={styles.account__lower}>
                <div className={styles.account__lower_left}>
                    <div className={styles.account__lower_left_upper}>
                        <div className={styles.account_lower_left_upper_top}>
                            <Image src={user.data.avatar ? user.data.avatar.url : '/user.png'} alt="user" width={300} height={300} quality={100} />
                        </div>
                        <button>
                            <span>
                                change profile picture
                            </span>
                        </button>
                        <div className={styles.account_lower_left_upper_bottom}>
                            <h2>{user.data.name}</h2>
                        </div>
                    </div>
                    <div className={styles.account__lower_left_lower}>
                        <ul>
                            <li id="personalInfo" onClick={handleOpen}>Personal Info</li>
                            <li id="changePassword" onClick={handleOpen}>Change Password</li>
                            <li id="userEvents" onClick={handleOpen}>My Events</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.account__lower_right}>
                    <AnimatePresence mode='wait'>
                        {personalInfoOpen && (
                            <PersonalInfo user={user} />
                        )}
                        {changePasswordOpen && (
                            <ChangePassword />
                        )}
                        {userEventsOpen && (
                            <div>
                                <h2>My Events</h2>
                                <p>My Events</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    )
}

export default Account