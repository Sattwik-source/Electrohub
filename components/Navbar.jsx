'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest">ELECTROHUB</div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-blue-400 transition">SHOP</a>
          <a href="#" className="hover:text-blue-400 transition">CATEGORIES</a>
          <a href="#" className="hover:text-blue-400 transition">DEALS</a>
          <a href="#" className="hover:text-blue-400 transition">NEW ARRIVALS</a>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          <button className="hover:text-blue-400 transition">🔍</button>
          <button className="hover:text-blue-400 transition">❤️</button>
          <button className="hover:text-blue-400 transition">👤</button>
          <button className="hover:text-blue-400 transition">🛒 0</button>
        </div>
      </div>
    </nav>
  );
}