'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Featured />
      <Categories />
      <Features />
      <Footer />
    </div>
  );
}