
'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Landing from "@/components/landing/Landing";
import styles from "./page.module.scss";
import Brief from "@/components/brief/Brief";
import Marquee from "@/animation/marquee/Marquee";
import Opening from '@/animation/opening/Opening';
import What from '@/components/what/What';
import LogoMarquee from '@/components/logoMarquee/LogoMarquee';
import Statement from '@/components/statement/Statement';
import Events from '@/components/events/Events';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimationShown, setHasAnimationShown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Update the window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const hasAnimationShown = sessionStorage.getItem('hasAnimationShown');
    if (hasAnimationShown) {
      setHasAnimationShown(true);
      setIsLoading(false);
    }
  }, []);


  return (
    <main>
      <AnimatePresence mode='wait'>
        <Opening isLoading={isLoading} />
      </AnimatePresence>
      <Landing />
      <Marquee />
      <Brief windowWidth={windowWidth} />
      <What />
      <Statement />
      <Events windowWidth={windowWidth}  />
      <LogoMarquee />
    </main>
  );
}
