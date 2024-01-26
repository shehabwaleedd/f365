import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import anime from 'animejs';
import './Opening.css';

const Opening = ({ isLoading }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const counterRef = useRef(null);
    const textWrapperRef = useRef(null);
    const loaderContentRef = useRef(null);
    const preLoaderRef = useRef(null);

    useEffect(() => {
        // Count to 100 over 6 seconds
        let currentValue = 0;
        const updateCounter = () => {
            currentValue += 100 / (6000 / 30);
            if (currentValue <= 100) {
                if (counterRef.current) {
                    counterRef.current.textContent = `${Math.floor(currentValue)}`;
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
            textWrapperRef.current.innerHTML = textWrapperRef.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline({ loop: false })
                .add({
                    targets: '.ml16 .letter',
                    translateY: [0, 100],
                    easing: "easeInExpo",
                    duration: 1000,
                    delay: (el, i) => 30 * i,
                })
                .add({
                    targets: counterRef.current,
                    translateY: [0, 100],
                    opacity: [1, 0],
                    easing: "easeInExpo",
                    duration: 1000,
                    delay: 100,
                    complete: () => {
                        // Animate up the pre-loader after text and counter animation
                        gsap.to(preLoaderRef.current, { y: -window.innerHeight, ease: "power2.inOut", duration: 1 });
                    }
                }, '-=800');
        }
    }, [animationComplete]);

    return (
        <div className='container'>
            <div className='pre-loader' ref={preLoaderRef}>
                <div className='loader'></div>
                <div className='loader-bg'></div>
            </div>
            <div className="loader-content" ref={loaderContentRef}>
                <div className='count'><p ref={counterRef}>0</p></div>
                <div className='copy'><p ref={textWrapperRef} className='ml16'>F365</p></div>
            </div>
        </div>
    );
};

export default Opening;
