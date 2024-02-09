
'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Landing from "@/components/landing/Landing";
import styles from "./page.module.scss";
import Brief from "@/components/brief/Brief";
import Opening from '@/animation/opening/Opening';
import What from '@/components/what/What';
import LogoMarquee from '@/components/logoMarquee/LogoMarquee';
import Statement from '@/components/statement/Statement';
import Events from '@/components/events/Events';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimationShown, setHasAnimationShown] = useState(false); // Default to false
  const [windowWidth, setWindowWidth] = useState(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const smallerDimension = windowWidth > 1200;

  useEffect(() => {
    // Access sessionStorage only on the client-side
    if (typeof window !== "undefined") {
      setHasAnimationShown(sessionStorage.getItem('hasAnimationShown') === 'true');
      // Set the initial window width
      setWindowWidth(window.innerWidth);

      // Update the window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (smallerDimension) {
      const lenis = new Lenis();
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
      }
    } else {
      const lenis = new Lenis({
        el: document.querySelector('[data-scroll-container]'),
        touchDirection: "vertical",
        duration: 2.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        lerp: 0.1,
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        smoothWheel: true,
        touchMultiplier: 2,
        autoResize: true,

      });

      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
      }
    }


  }, [smallerDimension])





  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {!hasAnimationShown && <Opening isLoading={isLoading} setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <Landing windowWidth={windowWidth} />
      <What />
      <Brief windowWidth={windowWidth} />
      <Statement />
      <Events windowWidth={windowWidth} />
      <LogoMarquee />
    </main>
  );
}
