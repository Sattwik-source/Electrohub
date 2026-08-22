'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollProducts() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // Transform values - input and output ranges MUST match length
  const keyboard = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const mouse = useTransform(scrollYProgress, [0.15, 0.25, 0.40], [0, 1, 0]);
  const headphones = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [0, 1, 0]);
  const monitor = useTransform(scrollYProgress, [0.55, 0.65, 0.80], [0, 1, 0]);
  const speaker = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 0]);

  // Rotation effects
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const products = [
    {
      icon: '⌨️',
      name: 'Mechanical Keyboards',
      desc: 'Premium typing experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🖱️',
      name: 'Gaming Mice',
      desc: 'Precision & speed',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: '🎧',
      name: 'Headphones',
      desc: 'Crystal clear sound',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: '🖥️',
      name: 'Monitors',
      desc: '4K Ultra HD displays',
      color: 'from-green-500 to-cyan-500',
    },
    {
      icon: '🔊',
      name: 'Speakers',
      desc: 'Immersive audio',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '💾',
      name: 'SSDs',
      desc: 'Lightning fast storage',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div ref={ref} className="relative py-32">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-blue-950 to-neutral-950">
        {/* Background blur circles */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            rotateX,
            rotateY,
            perspective: '1000px',
          }}
        >
          <motion.div
            className="w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Main 3D Container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center"
          style={{
            scale,
            perspective: '1200px',
          }}
        >
          {/* Keyboard */}
          <motion.div
            className="absolute"
            style={{
              opacity: keyboard,
              rotateX: useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 45, 90]),
              rotateY: useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 22, 45]),
            }}
          >
            <div className="text-9xl drop-shadow-2xl filter brightness-125">⌨️</div>
            <motion.div className="text-center mt-6 text-white">
              <h3 className="text-3xl font-bold">Mechanical Keyboards</h3>
              <p className="text-gray-300">Premium typing experience</p>
            </motion.div>
          </motion.div>

          {/* Mouse */}
          <motion.div
            className="absolute"
            style={{
              opacity: mouse,
              rotateX: useTransform(scrollYProgress, [0.15, 0.25, 0.40], [-90, 0, 90]),
              rotateY: useTransform(scrollYProgress, [0.15, 0.25, 0.40], [-45, 0, 45]),
            }}
          >
            <div className="text-9xl drop-shadow-2xl filter brightness-125">🖱️</div>
            <motion.div className="text-center mt-6 text-white">
              <h3 className="text-3xl font-bold">Gaming Mice</h3>
              <p className="text-gray-300">Precision & speed</p>
            </motion.div>
          </motion.div>

          {/* Headphones */}
          <motion.div
            className="absolute"
            style={{
              opacity: headphones,
              rotateX: useTransform(scrollYProgress, [0.35, 0.45, 0.60], [-90, 0, 90]),
              rotateY: useTransform(scrollYProgress, [0.35, 0.45, 0.60], [45, 0, -45]),
            }}
          >
            <div className="text-9xl drop-shadow-2xl filter brightness-125">🎧</div>
            <motion.div className="text-center mt-6 text-white">
              <h3 className="text-3xl font-bold">Headphones</h3>
              <p className="text-gray-300">Crystal clear sound</p>
            </motion.div>
          </motion.div>

          {/* Monitor */}
          <motion.div
            className="absolute"
            style={{
              opacity: monitor,
              rotateX: useTransform(scrollYProgress, [0.55, 0.65, 0.80], [-90, 0, 90]),
              rotateY: useTransform(scrollYProgress, [0.55, 0.65, 0.80], [-45, 0, 45]),
            }}
          >
            <div className="text-9xl drop-shadow-2xl filter brightness-125">🖥️</div>
            <motion.div className="text-center mt-6 text-white">
              <h3 className="text-3xl font-bold">Monitors</h3>
              <p className="text-gray-300">4K Ultra HD displays</p>
            </motion.div>
          </motion.div>

          {/* Speaker */}
          <motion.div
            className="absolute"
            style={{
              opacity: speaker,
              rotateX: useTransform(scrollYProgress, [0.75, 0.85, 1], [-90, 0, 90]),
              rotateY: useTransform(scrollYProgress, [0.75, 0.85, 1], [45, 0, -45]),
            }}
          >
            <div className="text-9xl drop-shadow-2xl filter brightness-125">🔊</div>
            <motion.div className="text-center mt-6 text-white">
              <h3 className="text-3xl font-bold">Speakers</h3>
              <p className="text-gray-300">Immersive audio</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm opacity-70">↓ Scroll to see more ↓</p>
        </motion.div>
      </div>

      {/* Product Details - Appear while scrolling */}
      <div className="py-20 space-y-20 max-w-4xl mx-auto px-4">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="text-8xl mb-6 inline-block"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {product.icon}
            </motion.div>

            <h3 className="text-4xl font-bold text-white mb-3">{product.name}</h3>
            <p className="text-xl text-gray-400 mb-6">{product.desc}</p>

            <motion.button
              className={`px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r ${product.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}