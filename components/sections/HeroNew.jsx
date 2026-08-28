'use client';

import Product3D from '@/components/Product3D';

export default function HeroNew() {
  return (
    <section className="pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-blue-400 text-sm font-semibold mb-4">01</div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              TECHNOLOGY<br />
              WITHOUT<br />
              LIMITS.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Discover the next generation of everyday electronics.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition">
                EXPLORE PRODUCTS →
              </button>
              <button className="px-8 py-3 border border-gray-600 hover:border-white transition flex items-center gap-2">
                ▶ PLAY INTRO
              </button>
            </div>
          </div>

          {/* Right Content - 3D Product */}
          <div className="relative h-96 md:h-full min-h-96">
            <Product3D />

            {/* Glow circle behind product */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-right text-gray-600 text-sm mt-20">
          SCROLL ↓
        </div>
      </div>
    </section>
  );
}