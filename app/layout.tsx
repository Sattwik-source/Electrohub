import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElectroHub - Premium Electronics',
  description: 'Your ultimate destination for premium electronics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <header className="fixed top-0 w-full z-50">
          <nav className="glass-dark max-w-7xl mx-auto px-4 py-4 rounded-b-3xl backdrop-blur-xl">
            <div className="flex justify-between items-center">
              <a href="/" className="text-3xl font-black gradient-text">
                ElectroHub
              </a>

              <div className="flex gap-8 items-center">
                <a href="/" className="text-white hover:text-blue-400">
                  Home
                </a>
                <a href="/products" className="text-white hover:text-blue-400">
                  Shop
                </a>
                <a href="/cart" className="text-white hover:text-blue-400">
                  Cart
                </a>
                <a href="/login" className="glass-light rounded-full font-bold text-white px-6 py-2">
                  Login
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-20">{children}</main>

        <footer className="bg-black/50 border-t border-white/10 mt-12 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>Copyright 2024 ElectroHub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}