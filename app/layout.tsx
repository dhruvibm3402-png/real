import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumière Estates — Luxury Real Estate',
  description:
    'Discover extraordinary living. Luxury properties crafted for modern lifestyles — penthouses, villas, and landmark residences worldwide.',
  keywords: 'luxury real estate, premium properties, villas, penthouses, investment',
  openGraph: {
    title: 'Lumière Estates — Luxury Real Estate',
    description: 'Discover extraordinary living.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#0D0D0D] text-[#F5F5F0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
