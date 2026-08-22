'use client';

import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import FeaturedProduct from '@/components/sections/FeaturedProduct';
import CategoriesSection from '@/components/sections/CategoriesSection';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <FeaturedProduct />
      <CategoriesSection />
    </div>
  );
}