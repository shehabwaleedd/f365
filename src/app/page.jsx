
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
import WorkWithUs from '@/components/workWithUs/WorkWithUs';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimationShown, setHasAnimationShown] = useState(sessionStorage.getItem('hasAnimationShown'));



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




  return (
    <main>
      <AnimatePresence mode='wait'>
        {!hasAnimationShown && <Opening isLoading={isLoading} setIsLoading={setIsLoading}/>}
      </AnimatePresence>
      <Landing />
      <Marquee />
      <Brief windowWidth={windowWidth} />
      <What />
      <Statement />
      <Events windowWidth={windowWidth}  />
      <LogoMarquee />
      <WorkWithUs />
    </main>
  );
}
