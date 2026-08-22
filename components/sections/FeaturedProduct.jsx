'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProduct() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        scale: 1.5,
        rotate: 360,
        duration: 3,
      });

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1,
          },
          opacity: 1,
          x: 0,
          duration: 1.5,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div ref={textRef} className="opacity-0">
            <h3 className="text-6xl md:text-7xl font-black text-white mb-6">
              POWER
            </h3>

            <p className="text-2xl text-gray-400 mb-8">
              Premium Gaming Headphones
            </p>

            <p className="text-gray-500 mb-12 text-lg">
              Experience crystal clear audio with noise cancellation technology.
              Built for gamers who demand excellence.
            </p>

            <button className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-bold text-lg hover:bg-purple-500 hover:text-black transition">
              Explore
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div
              ref={imageRef}
              className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-9xl shadow-2xl"
            >
              🎧
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
    </section>
  );
}