'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const productRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(productRef.current, {
        rotationY: mouseX,
        rotationX: -mouseY,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Auto rotate when idle
    gsap.to(productRef.current, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black pt-32 pb-20">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Left Side */}
        <div className="w-1/2 pr-12">
          <div className="mb-8">
            <p className="text-blue-500 text-xs tracking-[0.2em] font-medium">01 ——</p>
          </div>

          <h1 className="text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            TECHNOLOGY<br />WITHOUT<br />LIMITS.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            Discover the next generation<br />of everyday electronics.
          </p>

          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-gray-200 transition">
              EXPLORE PRODUCTS →
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white font-bold text-sm tracking-widest hover:border-white hover:bg-white/5 transition flex items-center gap-3">
              <span className="text-lg">▶</span> PLAY INTRO
            </button>
          </div>
        </div>

        {/* Right Side - 3D Product */}
        <div className="w-1/2 relative h-[600px] flex items-center justify-center">
          {/* Blue circle glow */}
          <div className="absolute w-96 h-96 border-2 border-blue-500/40 rounded-full" />
          <div className="absolute w-80 h-80 border border-blue-500/20 rounded-full" />

          {/* Product */}
          <div
            ref={productRef}
            className="relative z-10 text-[200px] drop-shadow-2xl"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            🎧
          </div>

          {/* Platform glow */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-600/20 to-transparent blur-3xl" />
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="absolute left-8 top-1/3 space-y-8">
        <a href="#" className="text-gray-600 hover:text-white transition text-2xl block">📷</a>
        <a href="#" className="text-gray-600 hover:text-white transition text-2xl block">𝕏</a>
        <a href="#" className="text-gray-600 hover:text-white transition text-2xl block">▶</a>
        <a href="#" className="text-gray-600 hover:text-white transition text-2xl block">f</a>
      </div>

      {/* Right Sidebar */}
      <div className="absolute right-8 top-1/3 text-right space-y-12">
        <div>
          <p className="text-blue-500 text-2xl font-bold">01</p>
          <p className="text-gray-600 text-xs tracking-widest mt-2">FEATURED</p>
        </div>
        <div>
          <p className="text-gray-600 text-2xl font-bold">02</p>
        </div>
        <div>
          <p className="text-gray-600 text-2xl font-bold">03</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 text-center text-gray-600">
        <p className="text-xs tracking-widest mb-3">SCROLL</p>
        <p className="text-2xl">↓</p>
      </div>
    </section>
  );
}