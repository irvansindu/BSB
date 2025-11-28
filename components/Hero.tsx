'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-slate-950/95 to-slate-950" />
        <Image
          src="/images/hero-bg.jpg"
          alt="BSB City - Green City with Dynamic Living"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto space-y-6 md:space-y-8"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80">
            Green City with Dynamic Living
          </p>

          <h1 className="text-[2.6rem] md:text-6xl lg:text-7xl font-semibold text-white leading-tight md:leading-[1.05] tracking-tight">
            Temukan kehidupan ideal di{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-200 to-cyan-200">
              BSBCITY
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed md:leading-relaxed">
            Pengembangan kota baru di perbukitan pada ketinggian sekitar 200 meter di atas permukaan laut, dengan banyak area hijau, taman depan rumah, dan taman bermain, dilengkapi masterplan 1000 hektar dengan kawasan bisnis, komersial, rekreasi, pendidikan, dan rumah ibadah.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 pt-2 md:pt-4">
            <Link href="/clusters" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-7 md:px-9 rounded-full text-sm md:text-base font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/40">
                Jelajahi Kawasan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 md:h-14 px-7 md:px-9 rounded-full text-sm md:text-base border-emerald-200/70 text-emerald-100 bg-white/0 hover:bg-emerald-500/10 hover:border-emerald-300/90"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
