import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Clusters from '@/components/Clusters';
import FacilitiesOverview from '@/components/FacilitiesOverview';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSB City | Green City with Dynamic Living',
  description:
    'BSB City adalah pengembangan kota baru di perbukitan sekitar 200 meter di atas permukaan laut dengan masterplan ±1000 hektar, banyak area hijau, taman bermain, serta fasilitas lengkap: bisnis, komersial, rekreasi, pendidikan, dan rumah ibadah.',
  keywords: ['BSB City', 'perumahan', 'properti', 'hunian', 'kota mandiri', 'green living', 'Semarang'],
  openGraph: {
    title: 'BSB City - Green City with Dynamic Living',
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
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Clusters />
      <FacilitiesOverview />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
