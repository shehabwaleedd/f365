'use client'
import styles from './style.module.scss'
import { motion } from 'framer-motion';

export default function Calendly({ onClose }) {
    return (
        <motion.div className={styles.modalBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.modalContainer}>
                <button onClick={onClose} className={styles.closeButton}><span>X</span></button>
                <iframe
                    src="https://calendly.com/demoon0007"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
        </motion.div>
    );
}