'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const clusters = [
  {
    name: 'Hilago Cluster',
    description: 'Kawasan hunian Hilago di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/hilago.jpg',
    url: '/clusters/hilago',
    features: ['Rumah Type 36/72', 'Fasilitas Olahraga', 'Taman Bermain', '24/7 Security']
  },
  {
    name: 'Naraya Residence',
    description: 'Kawasan hunian Naraya Residence di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/naraya.jpg',
    url: '/clusters/naraya',
    features: ['Rumah Type 45/90', 'Kolam Renang', 'Area Jogging Track', '24/7 Security']
  },
  {
    name: 'Puri Arga Golf',
    description: 'Kawasan hunian Puri Arga Golf di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/puri-arga.jpg',
    url: '/clusters/puri-arga',
    features: ['Dekat Lapangan Golf', 'Club House', 'Area Hijau Luas', 'Keamanan 24 Jam']
  },
  {
    name: 'Graha Taman Pelangi',
    description: 'Kawasan hunian Graha Taman Pelangi di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/graha-pelangi.jpg',
    url: '/clusters/graha-pelangi',
    features: ['Taman Bermain Anak', 'Jogging Track', 'Area BBQ', 'Keamanan 24 Jam']
  },
  {
    name: 'Graha Taman Bunga',
    description: 'Kawasan hunian Graha Taman Bunga di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/graha-bunga.jpg',
    url: '/clusters/graha-bunga',
    features: ['Taman Bunga Indah', 'Area Bermain', 'Jogging Track', 'Keamanan 24 Jam']
  },
  {
    name: 'BSB Village',
    description: 'Kawasan hunian BSB Village di dalam pengembangan kota baru BSB City.',
    image: '/images/clusters/bsb-village.jpg',
    url: '/clusters/bsb-village',
    features: ['Fasilitas Lengkap', 'Area Komersial', 'Sekolah', 'Pusat Kesehatan']
  }
];

const Clusters = () => {
  return (
    <section className="py-20 bg-slate-950/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-4">
            Kawasan <span className="text-emerald-300">Eksklusif</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Pilih kawasan hunian yang paling sesuai dengan karakter dan gaya hidup Anda, dari cluster keluarga hingga golf residence premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clusters.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-emerald-500/18 bg-slate-900/70 shadow-[0_18px_70px_rgba(15,23,42,0.85)] hover:border-emerald-400/50 hover:shadow-[0_26px_90px_rgba(16,185,129,0.45)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                  src={cluster.image}
                  alt={cluster.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1.5 md:mb-2">
                    {cluster.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-5 md:p-6">
                <p className="text-sm md:text-[0.95rem] text-slate-300/90 mb-4 leading-relaxed">
                  {cluster.description}
                </p>
                
                <Link href={cluster.url} className="inline-block">
                  <Button
                    variant="outline"
                    className="w-full h-11 md:h-12 rounded-full border-emerald-300/70 text-emerald-100 bg-white/0 hover:bg-emerald-500/10 hover:border-emerald-300/90 text-sm md:text-[0.95rem] font-semibold flex items-center justify-center"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-14 text-center">
          <Link href="/clusters">
            <Button className="h-12 md:h-13 rounded-full px-8 md:px-10 text-sm md:text-base font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/40">
              Lihat Semua Kawasan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clusters;
