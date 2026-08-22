'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top center',
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${80 - i * 10}%`,
              end: 'center center',
              scrub: 1,
            },
            opacity: 1,
            x: 0,
            duration: 1,
            delay: i * 0.1,
          }
        );

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { x: 20, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { x: 0, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { title: 'SMARTPHONES', emoji: '📱', color: 'from-blue-600' },
    { title: 'LAPTOPS', emoji: '💻', color: 'from-purple-600' },
    { title: 'GAMING', emoji: '🎮', color: 'from-pink-600' },
    { title: 'ACCESSORIES', emoji: '⌨️', color: 'from-cyan-600' },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-7xl md:text-8xl font-black text-center mb-20 text-white opacity-0"
        >
          EXPLORE
        </h2>

        <div className="space-y-32">
          {categories.map((category, i) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group cursor-pointer opacity-0"
            >
              <div className="flex items-center gap-12">
                <div
                  className={`w-40 h-40 bg-gradient-to-br ${category.color} to-purple-900 rounded-full flex items-center justify-center text-6xl shadow-2xl hover:scale-110 transition-transform duration-300`}
                >
                  {category.emoji}
                </div>

                <div>
                  <h3 className="text-6xl md:text-7xl font-black text-white mb-2 group-hover:text-purple-400 transition">
                    {category.title}
                  </h3>
                  <div className="w-0 h-1 bg-purple-500 group-hover:w-32 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}