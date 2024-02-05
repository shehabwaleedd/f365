import React from 'react'
import styles from "./style.module.scss"

const index = () => {
    return (
        <section className={styles.f365}>
            <div className={styles.f365__left}>
                <h2>3</h2>
                <p>
                    Our three pillars are wellness, career coaching, and community. We believe that these three pillars are essential to the growth and success
                </p>
            </div>
            <div className={styles.f365__middle}>
                <h2>6</h2>
                <p>
                    Our six core values are: Empowerment, Integrity, Innovation, Inclusivity, Growth, and Community. We believe that these values are essential to the growth and success
                </p>
            </div>
            <div className={styles.f365__right}>
                <h2>5</h2>
                <p>
                    Our five year goal is to have 5000 active members in our community, 50% of which are actively engaged in our wellness programs, and 50% of which are actively engaged in our career coaching programs.
                </p>
            </div>
        </section>
    )
}

export default index