'use client';

import Navbar from '@/components/Navbar';
import HeroNew from '@/components/sections/HeroNew';
import ProductsSection from '@/components/sections/ProductsSection';
import CategoriesNew from '@/components/sections/CategoriesNew';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroNew />
      <ProductsSection />
      <CategoriesNew />
    </div>
  );
}