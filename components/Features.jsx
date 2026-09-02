'use client';

export default function Features() {
  return (
    <section className="bg-black py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-12">
          <div className="flex gap-6">
            <div className="text-4xl flex-shrink-0">🚚</div>
            <div>
              <h3 className="text-white font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">Quick and reliable delivery at your doorstep.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-4xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-white font-bold mb-2">Genuine Products</h3>
              <p className="text-gray-500 text-sm">100% original products you can trust.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-4xl flex-shrink-0">↩️</div>
            <div>
              <h3 className="text-white font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-500 text-sm">Hassle-free returns within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}