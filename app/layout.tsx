import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BSB City',
  description: 'Temukan kehidupan ideal di BSBCITY, pengembangan kota baru yang menawarkan kenyamanan tak tertandingi di perbukitan dengan ketinggian 200 meter di atas permukaan laut.',
  keywords: 'BSB City, perumahan, properti, hunian, kota mandiri, green living, Semarang',
  authors: [{ name: 'BSB City' }],
  openGraph: {
    title: 'BSB City',
    description: 'Temukan kehidupan ideal di BSBCITY, pengembangan kota baru yang menawarkan kenyamanan tak tertandingi di perbukitan dengan ketinggian 200 meter di atas permukaan laut.',
    url: 'https://www.bsbcity.com',
    siteName: 'BSB City',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BSB City - Green City with Dynamic Living',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSB City',
    description: 'Temukan kehidupan ideal di BSBCITY, pengembangan kota baru yang menawarkan kenyamanan tak tertandingi di perbukitan dengan ketinggian 200 meter di atas permukaan laut.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
