'use client';

import { motion } from 'framer-motion';
import { Leaf, TreePine, Mountain, Sun, Trees, MountainSnow } from 'lucide-react';

const features = [
  {
    icon: <Mountain className="h-8 w-8 text-emerald-600" />,
    title: 'Perbukitan 200 mdpl',
    description: 'Kota baru di perbukitan sekitar 200 meter di atas permukaan laut dengan udara lebih sejuk dan nuansa alami.'
  },
  {
    icon: <TreePine className="h-8 w-8 text-emerald-600" />,
    title: 'Banyak Area Hijau',
    description: 'Lingkungan dirancang dengan banyak area hijau, taman depan rumah, dan taman bermain yang menyejukkan.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    title: 'Ramah Lingkungan',
    description: 'Menggunakan teknologi dan desain ramah lingkungan untuk keberlanjutan jangka panjang.'
  },
  {
    icon: <Sun className="h-8 w-8 text-emerald-600" />,
    title: 'Fasilitas Kota Mandiri',
    description: 'Masterplan 1000 hektar dengan kawasan bisnis, area komersial, pusat perbelanjaan, rekreasi, dan ruang publik modern.'
  },
  {
    icon: <Trees className="h-8 w-8 text-emerald-600" />,
    title: 'Lingkungan Keluarga',
    description: 'Taman yang asri dan area hijau luas untuk rekreasi dan aktivitas keluarga di sekitar rumah.'
  },
  {
    icon: <MountainSnow className="h-8 w-8 text-emerald-600" />,
    title: 'Pemandangan Indah',
    description: 'Dikelilingi oleh pemandangan perbukitan yang menenangkan dan memanjakan mata.'
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-950/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-4">
            Keunggulan <span className="text-emerald-300">BSB City</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Kombinasi udara sejuk, masterplan kota mandiri 1000 hektar, dan konsep green living menjadikan BSB City destinasi hunian yang berbeda kelas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-900/70 px-6 py-7 md:px-7 md:py-8 shadow-[0_18px_70px_rgba(15,23,42,0.85)] hover:border-emerald-400/40 hover:shadow-[0_24px_90px_rgba(16,185,129,0.45)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>

              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/10 border border-emerald-400/40 rounded-2xl flex items-center justify-center mb-5 md:mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2.5 text-center">
                {feature.title}
              </h3>
              <p className="text-sm md:text-[0.95rem] text-slate-300/90 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
