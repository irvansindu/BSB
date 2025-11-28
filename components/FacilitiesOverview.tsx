'use client';

import { motion } from 'framer-motion';
import { School, Building2, ShoppingBag, Utensils, Hotel, Dumbbell, Trees, Church, FerrisWheel } from 'lucide-react';

const facilities = [
  {
    icon: <Trees className="h-6 w-6 text-emerald-300" />,
    name: 'Danau & Ruang Terbuka Hijau',
    description: 'Area hijau yang luas dan danau yang menjadi pusat rekreasi dan kualitas udara yang lebih sejuk.',
  },
  {
    icon: <School className="h-6 w-6 text-emerald-300" />,
    name: 'School & Universities',
    description: 'Fasilitas pendidikan dari tingkat sekolah hingga universitas yang mudah dijangkau dalam kawasan.',
  },
  {
    icon: <Building2 className="h-6 w-6 text-emerald-300" />,
    name: 'Office Park & Commercial Area',
    description: 'Kawasan perkantoran dan area komersial yang mendukung aktivitas bisnis dan usaha.',
  },
  {
    icon: <ShoppingBag className="h-6 w-6 text-emerald-300" />,
    name: 'Shopping Mall',
    description: 'Pusat perbelanjaan modern untuk memenuhi kebutuhan harian hingga lifestyle penghuni.',
  },
  {
    icon: <FerrisWheel className="h-6 w-6 text-emerald-300" />,
    name: 'Theme Park & Recreations',
    description: 'Area rekreasi dan taman bermain tematik untuk keluarga dan anak-anak.',
  },
  {
    icon: <Utensils className="h-6 w-6 text-emerald-300" />,
    name: 'Culinary Center & Restaurant',
    description: 'Pilihan restoran, kafe, dan pusat kuliner yang tersebar di dalam kawasan.',
  },
  {
    icon: <Hotel className="h-6 w-6 text-emerald-300" />,
    name: 'Hotel & Motels',
    description: 'Fasilitas akomodasi untuk tamu dan pelaku bisnis yang datang ke BSB City.',
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-emerald-300" />,
    name: 'Sport Club',
    description: 'Fasilitas olahraga dan klub kebugaran untuk mendukung gaya hidup sehat.',
  },
  {
    icon: <Church className="h-6 w-6 text-emerald-300" />,
    name: 'Rumah Ibadah',
    description: 'Berbagai rumah ibadah yang mendukung kehidupan spiritual penghuni.',
  },
];

const FacilitiesOverview = () => {
  return (
    <section className="py-20 bg-slate-950/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-4">
            Fasilitas <span className="text-emerald-300">BSB City</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Menikmati kenyamanan kota baru dengan fasilitas lengkap: mulai dari pendidikan, bisnis, rekreasi,
            hingga kuliner dan akomodasi, semuanya direncanakan dalam satu masterplan terpadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/18 bg-slate-900/70 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] hover:border-emerald-400/50 hover:shadow-[0_24px_90px_rgba(16,185,129,0.45)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/50">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">
                    {facility.name}
                  </h3>
                  <p className="text-xs md:text-[0.8rem] text-slate-300/90 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesOverview;
