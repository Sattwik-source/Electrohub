'use client';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 pt-24 pb-16 flex items-center overflow-hidden transition-colors">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
                ✨ New Collection 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Premium Tech,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              Discover carefully curated electronics designed to elevate your everyday experience.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                Shop Now
              </button>
              <button className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
                View Products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10k+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">4.9</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg overflow-hidden group relative">
                  <img
                    src="https://images.unsplash.com/photo-1592286927505-c6d7c0fd5d6e?w=400&h=400&fit=crop"
                    alt="Smartphones"
                    className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-sm font-semibold text-white">Smartphones</div>
                  <div className="text-xs text-blue-100">Latest Models</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg overflow-hidden group relative">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
                    alt="Laptops"
                    className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-sm font-semibold text-white">Laptops</div>
                  <div className="text-xs text-purple-100">Powerful Devices</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg overflow-hidden group relative">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                    alt="Audio"
                    className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-sm font-semibold text-white">Audio</div>
                  <div className="text-xs text-pink-100">Premium Sound</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg overflow-hidden group relative">
                  <img
                    src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop"
                    alt="Wearables"
                    className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-sm font-semibold text-white">Wearables</div>
                  <div className="text-xs text-orange-100">Smart Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}