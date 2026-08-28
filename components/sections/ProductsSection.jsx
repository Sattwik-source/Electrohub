'use client';

export default function ProductsSection() {
  const products = [
    { name: 'Nova X', category: 'Wireless Headphones', price: '₹4,999', emoji: '🎧' },
    { name: 'BeatPro', category: 'True Wireless Earbuds', price: '₹2,999', emoji: '🎵' },
    { name: 'SoundFlex', category: 'Portable Speaker', price: '₹3,499', emoji: '🔊' },
    { name: 'Chrono Fit', category: 'Smart Watch', price: '₹5,999', emoji: '⌚' },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Header */}
        <div className="mb-16">
          <div className="text-blue-400 text-sm font-semibold mb-4">FEATURED</div>
          <h2 className="text-5xl font-black mb-4">Curated for your lifestyle.</h2>
          <a href="#" className="text-gray-400 hover:text-white transition">VIEW ALL PRODUCTS →</a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-black p-6 rounded-lg hover:bg-gray-900 transition cursor-pointer group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition">{product.emoji}</div>
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{product.price}</span>
                <button className="hover:text-blue-400 transition">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}