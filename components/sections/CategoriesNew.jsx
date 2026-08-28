'use client';

export default function CategoriesNew() {
  const categories = [
    { icon: '🎧', name: 'HEADPHONES' },
    { icon: '💻', name: 'LAPTOPS' },
    { icon: '📱', name: 'SMARTPHONES' },
    { icon: '🎮', name: 'GAMING' },
    { icon: '⌨️', name: 'KEYBOARDS' },
    { icon: '⌚', name: 'ACCESSORIES' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-blue-400 text-sm font-semibold mb-4">CATEGORIES</div>
          <h2 className="text-5xl font-black mb-4">Find what inspires you.</h2>
          <a href="#" className="text-gray-400 hover:text-white transition">BROWSE ALL CATEGORIES →</a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-gray-950 p-8 rounded-lg hover:bg-gray-900 transition cursor-pointer text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{cat.icon}</div>
              <p className="text-xs font-semibold text-gray-400">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}