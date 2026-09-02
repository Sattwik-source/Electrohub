'use client';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-900/50 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-widest">ELECTROHUB</div>

        {/* Nav */}
        <nav className="hidden lg:flex gap-16 text-xs tracking-widest">
          <a href="#" className="text-gray-400 hover:text-white transition">SHOP</a>
          <a href="#" className="text-gray-400 hover:text-white transition">CATEGORIES</a>
          <a href="#" className="text-gray-400 hover:text-white transition">DEALS</a>
          <a href="#" className="text-gray-400 hover:text-white transition">NEW ARRIVALS</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <button className="text-gray-400 hover:text-white transition">🔍</button>
          <button className="text-gray-400 hover:text-white transition">❤️</button>
          <button className="text-gray-400 hover:text-white transition">👤</button>
          <button className="text-gray-400 hover:text-white transition relative">
            🛒
            <span className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}