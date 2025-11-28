'use client';

import { motion } from 'framer-motion';
import { Home, TreePine, Users, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Luas Kawasan',
    value: '1,000',
    unit: 'Hektar',
    icon: <TreePine className="h-8 w-8 text-white" />,
    description: 'Total luas kawasan BSB City yang dikembangkan',
  },
  {
    id: 2,
    name: 'Unit Hunian',
    value: '25,000',
    unit: '+',
    icon: <Home className="h-8 w-8 text-white" />,
    description: 'Jumlah unit hunian yang tersedia',
  },
  {
    id: 3,
    name: 'Penghuni',
    value: '100,000',
    unit: '+',
    icon: <Users className="h-8 w-8 text-white" />,
    description: 'Jumlah penghuni yang telah mempercayakan huniannya',
  },
  {
    id: 4,
    name: 'Penghargaan',
    value: '50',
    unit: '+',
    icon: <Award className="h-8 w-8 text-white" />,
    description: 'Penghargaan yang telah diraih',
  },
];

const Stats = () => {
  return (
    <section className="py-18 md:py-20 bg-slate-950/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight text-slate-50">
            BSB City <span className="text-emerald-300">Dalam Angka</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Gambaran skala pengembangan, jumlah hunian, dan komunitas yang telah memilih BSB City sebagai rumah mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 px-6 py-7 md:px-7 md:py-8 text-center shadow-[0_18px_70px_rgba(15,23,42,0.85)] hover:border-emerald-400/50 hover:shadow-[0_24px_90px_rgba(16,185,129,0.45)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>

              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/15 border border-emerald-400/50 rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center mb-1.5 md:mb-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-50 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-lg md:text-xl font-medium text-emerald-200 ml-1">
                  {stat.unit}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-medium text-slate-100 mb-1.5 md:mb-2">
                {stat.name}
              </h3>
              <p className="text-xs md:text-[0.8rem] text-slate-300/90 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
