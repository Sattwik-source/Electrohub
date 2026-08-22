'use client';

import ScrollProducts from '@/components/ScrollProducts';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Your existing hero section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 pt-20">
        <motion.div
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ElectroHub
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium Electronics & Gaming Gear
          </motion.p>

          <motion.a
            href="#products"
            className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            🚀 Explore Products
          </motion.a>
        </motion.div>
      </section>

      {/* 3D Scroll Products */}
      <div id="products">
        <ScrollProducts />
      </div>
    </div>
  );
}