'use client';

export default function Categories() {
  const cats = [
    { emoji: '🎧', name: 'HEADPHONES' },
    { emoji: '💻', name: 'LAPTOPS' },
    { emoji: '📱', name: 'SMARTPHONES' },
    { emoji: '🎮', name: 'GAMING' },
    { emoji: '⌨️', name: 'KEYBOARDS' },
    { emoji: '⌚', name: 'ACCESSORIES' },
  ];

  return (
    <section className="bg-black py-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <p className="text-blue-500 text-xs tracking-widest font-medium mb-6">— CATEGORIES</p>
          <h2 className="text-6xl font-black text-white mb-6 tracking-tight">
            Find what inspires you.
          </h2>
          <a href="#" className="text-white text-xs tracking-widest hover:text-blue-500 transition">
            BROWSE ALL CATEGORIES →
          </a>
        </div>

        <div className="grid grid-cols-6 gap-6">
          {cats.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gray-950 border border-gray-900 rounded-lg p-6 mb-4 hover:border-gray-800 transition aspect-square flex items-center justify-center">
                <div className="text-5xl">{c.emoji}</div>
              </div>
              <p className="text-white text-xs font-bold tracking-widest text-center">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}