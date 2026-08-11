import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://kabulcustomkitchens.ca'),
  title: 'Kabul Custom Kitchens & Closets | Premium Custom Kitchens in Edmonton, AB',
  description:
    'Kabul Custom Kitchens and Closets designs and builds premium custom kitchens, closets, wardrobes and cabinets in Edmonton, AB. Book your free in-home estimate today.',
  keywords: [
    'custom kitchens Edmonton',
    'custom closets Edmonton',
    'kitchen renovation Edmonton',
    'cabinet installation Edmonton',
    'kitchen remodeling Alberta',
    'Kabul Custom Kitchens',
  ],
  openGraph: {
    title: 'Kabul Custom Kitchens & Closets | Edmonton, AB',
    description:
      'Premium custom kitchens, closets and cabinetry in Edmonton, AB. Free in-home estimates.',
    type: 'website',
    locale: 'en_CA',
    images: ['/images/project-1.jpeg'],
  },
};

export const viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-base text-white">{children}</body>
    </html>
  );
}
