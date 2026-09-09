'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBlobs({ variant = 'hero' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const blobs = containerRef.current.querySelectorAll('.blob');
    const shapes = containerRef.current.querySelectorAll('.floating-shape');

    blobs.forEach((blob, i) => {
      const speed = i % 2 === 0 ? 0.25 : 0.4;
      gsap.to(blob, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: -15,
        x: i % 2 === 0 ? 8 : -8,
        rotate: i % 2 === 0 ? 12 : -12,
        duration: 3 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-right sphere */}
      <div className="blob absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80 blur-[2px]" />

      {/* Bottom-left large blob */}
      <div className="blob absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full filter blur-[60px] opacity-30" />

      {/* Small decorative shapes */}
      <div className="floating-shape absolute top-40 left-16 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
      <div className="floating-shape absolute top-32 left-40 text-purple-400 text-lg opacity-40 rotate-12">◜</div>
      <div className="floating-shape absolute top-1/3 right-24 text-gray-500 text-lg opacity-30">✦</div>
      <div className="floating-shape absolute bottom-40 right-16 text-purple-400 text-xl opacity-40">+</div>
      <div className="floating-shape absolute top-1/2 right-40 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-400 opacity-40" />
    </div>
  );
}