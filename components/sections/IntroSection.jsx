'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: -200,
        duration: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div ref={textRef} className="text-center opacity-0">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Technology should feel{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              natural
            </span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed">
            ElectroHub brings together the world's most premium electronics,
            carefully curated for those who demand the extraordinary.
          </p>
        </div>
      </div>

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
    </section>
  );
}