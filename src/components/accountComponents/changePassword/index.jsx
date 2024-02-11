import React from 'react'
import styles from "./style.module.scss"

const index = () => {
    return (
        <section className={styles.changePassword}>
            <div className={styles.changePassword__top}>
                <h2>Change Password</h2>
            </div>
            <div className={styles.changePassword__bottom}>
                <form>
                    <div className={styles.changePassword__bottom_content}>
                        <label htmlFor="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" />
                    </div>
                    <div className={styles.changePassword__bottom_content}>
                        <label htmlFor="newPassword">New Password</label>
                        <input type="password" id="newPassword" />
                    </div>
                    <div className={styles.changePassword__bottom_content}>
                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                        <input type="password" id="confirmNewPassword" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default index