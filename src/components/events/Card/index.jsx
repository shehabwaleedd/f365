'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";

const Card = ({ windowWidth, i, title, description, src, url, color, progress, range, targetScale }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <div className={styles.description_upper}>
              <div>
                <Image src="/assets/profilePic.webp" alt="arrow" width={50} height={50} />
              </div>
              <div>
                <h3>Asma Sami</h3>
                <span>Founder</span>
              </div>
            </div>
            <p>{description}</p>
            <span>
              <Link href={`${url}`} target="_blank">Join Now</Link>
              <FiArrowRight style={{ fontSize: "1.6rem", marginTop: "0.4rem" }} />
            </span>
          </div>

          <div className={styles.imageContainer}>
            {windowWidth > 1268 ? (
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={src}
                  alt="image"
                />
              </motion.div>

            ) : (
              <motion.div className={styles.inner}>
                <Image fill src={src} alt="image" />
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card