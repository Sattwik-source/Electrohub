'use client';

export default function Featured() {
  const products = [
    { name: 'Nova X', category: 'Wireless Headphones', price: '₹4,999', emoji: '🎧' },
    { name: 'BeatPro', category: 'True Wireless Earbuds', price: '₹2,999', emoji: '🎧' },
    { name: 'SoundFlex', category: 'Portable Speaker', price: '₹3,499', emoji: '🔊' },
    { name: 'Chrono Fit', category: 'Smart Watch', price: '₹5,999', emoji: '⌚' },
  ];

  return (
    <section className="bg-black py-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <p className="text-blue-500 text-xs tracking-widest font-medium mb-6">— FEATURED</p>
          <h2 className="text-6xl font-black text-white mb-6 tracking-tight">
            Curated for your lifestyle.
          </h2>
          <a href="#" className="text-white text-xs tracking-widest hover:text-blue-500 transition">
            VIEW ALL PRODUCTS →
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="bg-gray-950 border border-gray-900 rounded-lg p-8 mb-6 hover:border-gray-800 transition aspect-square flex items-center justify-center">
                <div className="text-7xl">{p.emoji}</div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{p.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-xl">{p.price}</span>
                <button className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}