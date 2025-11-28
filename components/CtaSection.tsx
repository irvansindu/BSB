'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/95" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/cta-bg.jpg)',
            opacity: 0.1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Siap Memulai Hidup Lebih Baik di BSB City?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100 max-w-3xl mx-auto mb-12"
          >
            Jadwalkan kunjungan Anda sekarang dan dapatkan penawaran spesial untuk pembelian unit terbatas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link href="/booking" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-emerald-50 h-14 px-8 text-lg font-medium">
                <Calendar className="mr-2 h-5 w-5" />
                Jadwalkan Kunjungan
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-medium">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center text-emerald-200 hover:text-white transition-colors"
          >
            <MapPin className="h-5 w-5 mr-2" />
            <span>Jl. Raya BSB City, Tembalang, Semarang, Jawa Tengah</span>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-emerald-300/30 backdrop-blur-sm"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </section>
  );
};

export default CtaSection;
