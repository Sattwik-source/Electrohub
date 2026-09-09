'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading bar expand
    gsap.fromTo(
      '.loading-bar',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }
    );

    // Lightning bolt animation
    gsap.fromTo(
      '.lightning-path',
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' }
    );

    // Fade out loading screen
    gsap.to('.loading-screen', {
      opacity: 0,
      delay: 1.2,
      duration: 0.5,
      onComplete: () => setIsLoading(false),
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      {/* Lightning SVG */}
      <svg width="60" height="80" viewBox="0 0 60 80" className="mb-8">
        <polyline
          className="lightning-path"
          points="30,10 45,40 35,40 50,80"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <h1 className="text-4xl font-black text-white mb-8 tracking-widest">
        ElectroHub
      </h1>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-gray-900 rounded-full overflow-hidden">
        <div
          className="loading-bar h-full bg-gradient-to-r from-purple-600 to-blue-600 origin-left"
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}