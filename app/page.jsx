'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Featured from '@/components/Featured';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
      <Header />
      <Hero />
      <Categories />
      <Featured />
      <Features />
      <Footer />
    </div>
  );
}