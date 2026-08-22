'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.02,
            }
          : {}
      }
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-50px' }}
      className={`glass rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 ${
        glow ? 'glow' : ''
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}