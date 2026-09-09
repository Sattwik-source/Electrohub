'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-slate-700 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ElectroHub</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button className="hidden sm:block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-4 py-2">
              Sign in
            </button>

            <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-5 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
              Cart
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-slate-900 dark:text-white p-2"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-1 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-900 dark:text-white font-medium py-3 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}