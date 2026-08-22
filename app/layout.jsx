import './globals.css';

export const metadata = {
  title: 'ElectroHub - The Future of Electronics',
  description: 'Premium electronics and gaming gear',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}