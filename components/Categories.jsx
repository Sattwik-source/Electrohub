'use client';

export default function Categories() {
  const categories = [
    {
      icon: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
      name: 'Laptops',
      count: '120+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      name: 'Phones',
      count: '200+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      name: 'Audio',
      count: '85+',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      name: 'Watches',
      count: '60+',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop',
      name: 'Gaming',
      count: '95+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop',
      name: 'Cameras',
      count: '45+',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="categories" className="bg-white dark:bg-slate-900 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wider">BROWSE</p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Shop by Category</h2>
          </div>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 font-medium">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <a
              key={i}
              href="#"
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-4 hover:shadow-2xl transition-all overflow-hidden border border-slate-100 dark:border-slate-700"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <div className="w-full aspect-square mb-3 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{cat.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{cat.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}