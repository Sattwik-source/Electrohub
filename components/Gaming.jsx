'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gaming() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef([]);
  const beamRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    );

    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: -12,
        rotate: i % 2 === 0 ? 6 : -6,
        duration: 2.5 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    gsap.fromTo(
      beamRef.current,
      { x: '-150%' },
      { x: '150%', duration: 4, repeat: -1, ease: 'power1.inOut', repeatDelay: 2 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden p-12">
          <div ref={beamRef} className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

          <div className="relative grid grid-cols-2 gap-12 items-center">
            <div ref={textRef} className="opacity-0">
              <h2 className="text-5xl font-bold text-white mb-3">Game On</h2>
              <p className="text-3xl font-bold text-white/40 mb-6">With the Best Gear</p>
              <p className="text-gray-500 mb-8">Controllers • Gaming Laptops • Accessories</p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition hover:scale-105">
                Shop Gaming →
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                {['🎮', '💻', '🕹️', '🖱️'].map((emoji, i) => (
                  <div key={i} ref={(el) => (iconsRef.current[i] = el)} className="text-5xl grayscale opacity-80">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}