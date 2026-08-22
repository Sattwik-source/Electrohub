'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export default function GlassButton({
  children,
  href,
  onClick,
  size = 'md',
  glow = true,
}: GlassButtonProps) {
  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }[size];

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`glass-light rounded-full font-bold text-white ${sizeClass} relative overflow-hidden group ${
          glow ? 'glow' : ''
        }`}
      >
        {/* Shimmer effect */}
        <motion.div
          className="shimmer absolute inset-0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Text */}
        <motion.span
          className="relative flex items-center gap-2 justify-center"
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 -z-10"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          style={{ filter: 'blur(20px)' }}
        />
      </Component>
    </motion.div>
  );
}