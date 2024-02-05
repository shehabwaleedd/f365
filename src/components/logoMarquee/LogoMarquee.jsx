import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import styles from './style.module.scss'

const LogoMarquee = () => {

    const data = [

        {
            img: "/assets/logos/1.png",
        },
        {
            img: "/assets/logos/3.png",
        },
        {
            img: "/assets/logos/4.png",
        },
        {
            img: "/assets/logos/5.png",
        },
        {
            img: "/assets/logos/6.png",
        },
        {
            img: "/assets/logos/7.png",
        },
    ]

    return (
        <section className={styles.logo_marquee}>
            <Marquee>
                {data.map((item, index) => (
                    <div key={index}>
                        <Image src={item.img} alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}

export default LogoMarquee