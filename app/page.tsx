'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const categories = [
    'Mechanical Keyboards',
    'Gaming Mice',
    'Monitors',
    'Headphones',
    'Speakers',
    'Projectors',
    'SSDs',
    'Keycaps',
    'Webcams',
    'Accessories',
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to ElectroHub
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your ultimate destination for premium electronics, gaming peripherals, and tech gadgets
        </motion.p>
        <motion.a
          href="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Start Shopping
        </motion.a>
      </motion.section>

      {/* Categories Section */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={itemVariants}
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={category}
              href={`/products?category=${category.toLowerCase().replace(' ', '-')}`}
              className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition text-center font-semibold hover:text-blue-600"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-12">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Why Choose ElectroHub?
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '✓', title: 'Authentic Products', desc: '100% genuine electronics' },
            { icon: '🚚', title: 'Fast Shipping', desc: 'Quick delivery to your doorstep' },
            { icon: '💳', title: 'Secure Payments', desc: 'Safe checkout with multiple options' },
            { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg text-center"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <motion.div 
                className="text-3xl mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-blue-600 text-white rounded-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Upgrade Your Setup?
        </motion.h2>
        <motion.p 
          className="mb-8 text-lg opacity-90"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Browse thousands of electronics and find the perfect gear for your needs
        </motion.p>
        <motion.a
          href="/products"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-neutral-100 transition font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Browse All Products
        </motion.a>
      </motion.section>
    </div>
  );
}