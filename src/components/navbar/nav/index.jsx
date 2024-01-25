import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Index({ setNavOpen }) {


  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={height}
      className={styles.nav}>

      <div className={styles.wrapper}>
        <div className={styles.hamburger} onClick={() => setNavOpen(false)}>
          X
        </div>
        <div className={styles.container}>
          <Body links={links} />
          <Footer />
        </div>
      </div>
    </motion.div >
  )
}