'use client';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-16 mb-16">
          <div>
            <h4 className="text-white font-black tracking-widest mb-6">ELECTROHUB</h4>
            <p className="text-gray-500 text-sm mb-8">Technology without limits. Premium electronics for everyone.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-white transition">📷</a>
              <a href="#" className="text-gray-600 hover:text-white transition">𝕏</a>
              <a href="#" className="text-gray-600 hover:text-white transition">▶</a>
              <a href="#" className="text-gray-600 hover:text-white transition">f</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">Top Deals</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">HELP</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">ABOUT</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">STAY UPDATED</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive deals.</p>
            <div className="flex">
              <input type="email" placeholder="Enter email" className="bg-gray-950 text-white text-sm px-4 py-2 flex-1 placeholder-gray-700 border border-r-0 border-gray-900" />
              <button className="bg-white text-black px-4 py-2 font-bold">→</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-12 flex justify-between items-center text-gray-600 text-xs">
          <p>© 2024 ElectroHub. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}