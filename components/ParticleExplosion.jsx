'use client';

import { useEffect, useRef } from 'react';

export default function ParticleExplosion() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Particle class - VOLUMETRIC EXPLOSION
    class Particle {
      constructor(x, y, depth = Math.random()) {
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        
        // Depth creates layering effect
        this.depth = depth; // 0 to 1
        
        // Random direction with turbulence
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4;
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        // Turbulence for more organic movement
        this.turbulenceX = (Math.random() - 0.5) * 2;
        this.turbulenceY = (Math.random() - 0.5) * 2;
        
        // Size varies by depth
        this.size = (Math.random() * 8 + 2) * (0.5 + depth * 0.5);
        this.opacity = 1;
        
        // PURPLE/MAGENTA COLORS - Deep and rich
        const colors = [
          { r: 200, g: 50, b: 200 },   // Magenta
          { r: 220, g: 60, b: 200 },   // Pink-Magenta
          { r: 180, g: 40, b: 220 },   // Purple
          { r: 255, g: 100, b: 200 },  // Light Magenta
          { r: 150, g: 80, b: 220 },   // Deep Purple
          { r: 255, g: 150, b: 255 },  // Light Purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(progress) {
        // Move particles outward with turbulence
        this.x = this.startX + this.vx * progress * 500 + this.turbulenceX * progress * 200;
        this.y = this.startY + this.vy * progress * 500 + this.turbulenceY * progress * 200;
        
        // Fade out smoothly
        this.opacity = Math.max(0, 1 - progress * 1.2);
        
        // Size grows slightly
        this.size = (Math.random() * 8 + 2) * (0.5 + this.depth * 0.5) * (1 + progress * 0.8);
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Strong GLOW effect - key to the look
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`;
        ctx.shadowBlur = 40 + this.depth * 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Draw particle with soft edges
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add outer glow for depth
        ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.6})`;
        ctx.lineWidth = this.size * 0.5;
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Create particles with depth layering
    for (let i = 0; i < 200; i++) {
      const depth = Math.random();
      particlesRef.current.push(new Particle(centerX, centerY, depth));
    }

    // Sort particles by depth for proper rendering
    particlesRef.current.sort((a, b) => a.depth - b.depth);

    // Animation loop
    const animate = () => {
      // Dark background with slight purple tint for atmosphere
      ctx.fillStyle = 'rgba(10, 5, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add foggy overlay for volumetric effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 800);
      gradient.addColorStop(0, 'rgba(100, 50, 150, 0.1)');
      gradient.addColorStop(1, 'rgba(20, 5, 40, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const progress = scrollProgressRef.current;

      // Update and draw particles in depth order
      particlesRef.current.forEach((particle) => {
        particle.update(progress);
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollProgressRef.current = Math.min(scrollTop / 700, 1);
    };

    window.addEventListener('scroll', handleScroll);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
        display: 'block',
        backgroundColor: 'transparent',
      }}
    />
  );
}