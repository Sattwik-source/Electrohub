'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bornRef = useRef(null);
  const ofRef = useRef(null);
  const cultureRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // BORN text animation
      gsap.to(bornRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
          markers: false,
        },
        y: -100,
        opacity: 1,
        duration: 1,
      });

      // OF text animation
      gsap.to(ofRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        y: 100,
        opacity: 1,
        duration: 1,
      });

      // CULTURE text animation
      gsap.to(cultureRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        y: -100,
        opacity: 1,
        duration: 1,
      });

      // Image scale and rotate
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        scale: 1.3,
        rotate: 360,
        duration: 2,
      });

      // Initial animations on page load
      gsap.fromTo(
        bornRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );

      gsap.fromTo(
        ofRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
      );

      gsap.fromTo(
        cultureRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gray-500 uppercase animate-fade-in">
            Welcome to the future
          </p>
        </div>

        <div className="relative h-96 flex flex-col items-center justify-center">
          <h1
            ref={bornRef}
            className="text-8xl md:text-9xl font-black text-white text-center leading-none opacity-0"
          >
            BORN
          </h1>

          <h2
            ref={ofRef}
            className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center leading-none my-4 opacity-0"
          >
            OF
          </h2>

          <div
            ref={imageRef}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-6xl my-8 shadow-2xl"
          >
            ⚡
          </div>

          <h3
            ref={cultureRef}
            className="text-8xl md:text-9xl font-black text-white text-center leading-none mt-16 opacity-0"
          >
            CULTURE
          </h3>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}