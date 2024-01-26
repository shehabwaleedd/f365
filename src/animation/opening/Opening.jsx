import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './Opening.css';

const Opening = ({ isLoading }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const counterRef = useRef(null);
    const titleRefs = useRef([]);
    const cairoRef = useRef(null);
    const barsRef = useRef(new Array(5).fill(null));


    useEffect(() => {
        let currentValue = 0;
        const updateCounter = () => {
            currentValue++;
            if (currentValue <= 100) {
                if (counterRef.current) {
                    counterRef.current.textContent = currentValue;
                }
            } else {
                clearInterval(interval);
                setAnimationComplete(true);
            }
        };

        const interval = setInterval(updateCounter, 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (animationComplete) {
            const tl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem('hasAnimationShown', 'true');
                    isLoading();
                }
            });

            tl.to(".counter", { duration: 0.5, opacity: 0, ease: 'power2.inOut' });

            tl.to(cairoRef.current, { opacity: 1, duration: 2, ease: 'power2.inOut' })
                .to(cairoRef.current, { opacity: 0, duration: 1, ease: 'power2.inOut' });

            barsRef.current.forEach(bar => {
                tl.to(bar, {
                    duration: 2,
                    opacity: 1,
                    height: 0,
                    y: -400,
                    ease: 'power3.inOut'
                }, "<");
            });
        }
    }, [animationComplete, isLoading]);

    return (
        <div className="opening">
            <h1 className='counter'><span ref={counterRef} >0 </span> - 100</h1>
            <div className="openingAnimation__container">
                <h2 ref={cairoRef} className='cairostudio'>F365</h2>
            </div>
            <div className='overlay'>
                {barsRef.current.map((_, index) => (
                    <div ref={el => barsRef.current[index] = el} className='bar' key={index}></div>
                ))}
            </div>
        </div>
    );
};

export default Opening;
