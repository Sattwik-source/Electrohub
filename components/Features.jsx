'use client';

export default function Features() {
  const features = [
    { icon: '🚚', title: 'Fast Delivery', desc: 'Free shipping on orders over ₹999', color: 'from-blue-500 to-cyan-500' },
    { icon: '💳', title: 'Secure Payment', desc: 'Multiple payment options available', color: 'from-purple-500 to-pink-500' },
    { icon: '🔄', title: 'Easy Returns', desc: '7-day hassle-free returns', color: 'from-pink-500 to-rose-500' },
    { icon: '✨', title: 'Authentic Products', desc: '100% genuine products guaranteed', color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 hover:shadow-xl transition-all overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}