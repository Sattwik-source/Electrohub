'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
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
          stagger: 0.1,
          duration: 1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { name: 'Nova X', type: 'Wireless Headphones', price: '₹4,999', emoji: '🎧' },
    { name: 'BeatPro', type: 'True Wireless Earbuds', price: '₹2,999', emoji: '🎵' },
    { name: 'SoundFlex', type: 'Portable Speaker', price: '₹3,499', emoji: '🔊' },
    { name: 'Chrono Fit', type: 'Smart Watch', price: '₹5,999', emoji: '⌚' },
  ];

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Featured heading */}
        <div className="mb-16 flex justify-between items-end">
          <div>
            <div className="text-xs tracking-widest text-blue-400 mb-4">FEATURED</div>
            <h2 className="text-5xl md:text-6xl font-black">
              Curated for
              <br />
              your lifestyle.
            </h2>
          </div>
          <a href="#" className="text-sm tracking-widest hover:text-blue-400 transition">
            VIEW ALL PRODUCTS →
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div key={product.name} className="product-card opacity-0">
              <div className="bg-white/5 backdrop-blur border border-white/10 p-8 hover:border-blue-400/50 transition cursor-pointer group">
                <div className="text-6xl mb-6">{product.emoji}</div>
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="text-2xl group-hover:scale-125 transition">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}