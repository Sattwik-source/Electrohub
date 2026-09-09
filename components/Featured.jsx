'use client';

import { useState } from 'react';

export default function Featured() {
  const [likes, setLikes] = useState({});

  const toggleLike = (i) => {
    setLikes((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const products = [
    {
      name: 'MacBook Air M2',
      brand: 'Apple',
      price: '₹89,990',
      original: '₹1,09,990',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
      rating: 4.8,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: '₹1,29,900',
      original: '₹1,39,900',
      image: 'https://images.unsplash.com/photo-1592286927505-c6d7c0fd5d6e?w=600&h=600&fit=crop',
      rating: 4.9,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      price: '₹29,990',
      original: '₹34,990',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      rating: 4.7,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Galaxy Watch 6',
      brand: 'Samsung',
      price: '₹27,999',
      original: '₹32,999',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop',
      rating: 4.6,
      color: 'from-orange-500 to-amber-500'
    },
  ];

  return (
    <section id="products" className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wider">FEATURED</p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Popular Products</h2>
          <p className="text-slate-600 dark:text-slate-400">Handpicked for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700"
            >
              <div className="relative">
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  aria-label={likes[i] ? "Unlike" : "Like"}
                >
                  <span className={`text-lg ${likes[i] ? 'text-pink-500' : 'text-slate-400'}`}>
                    {likes[i] ? '♥' : '♡'}
                  </span>
                </button>

                <div className="aspect-square bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{p.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{p.brand}</p>
                </div>

                <div className="flex items-center gap-1 mb-3 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(p.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 ml-1">{p.rating}</span>
                  <span className="text-slate-400 dark:text-slate-500">(2.3k)</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 line-through">{p.original}</span>
                </div>

                <button className={`w-full py-3 bg-gradient-to-r ${p.color} text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}