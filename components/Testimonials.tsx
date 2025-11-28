'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Warga Hilago Cluster',
    avatar: '/images/testimonials/1.jpg',
    content: 'Tinggal di BSB City memberikan ketenangan dan kenyamanan yang sulit ditemukan di tempat lain. Lingkungan yang asri dan fasilitas lengkap bikin betah di rumah.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dewi Lestari',
    role: 'Warga Naraya Residence',
    avatar: '/images/testimonials/2.jpg',
    content: 'Saya dan keluarga sangat puas memilih BSB City sebagai tempat tinggal. Keamanan terjamin, tetangga yang ramah, dan akses ke mana-mana sangat mudah.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'Warga Graha Taman Bunga',
    avatar: '/images/testimonials/3.jpg',
    content: 'Investasi properti terbaik yang pernah saya lakukan. Harga properti di BSB City terus naik setiap tahunnya. Sangat menguntungkan!',
    rating: 5
  },
  {
    id: 4,
    name: 'Rina Wijaya',
    role: 'Warga Puri Arga Golf',
    avatar: '/images/testimonials/4.jpg',
    content: 'Anak-anak saya sangat menikmati fasilitas bermain dan pendidikan di sekitar BSB City. Sekolah berkualitas dan tempat bermain yang aman membuat saya tenang.',
    rating: 5
  },
  {
    id: 5,
    name: 'Hendra Kurniawan',
    role: 'Warga BSB Village',
    avatar: '/images/testimonials/5.jpg',
    content: 'Konsep kota mandiri yang sangat bagus. Semua kebutuhan sehari-hari bisa terpenuhi di dalam kawasan. Tidak perlu jauh-jauh keluar kompleks.',
    rating: 5
  },
  {
    id: 6,
    name: 'Siti Rahayu',
    role: 'Warga Graha Taman Pelangi',
    avatar: '/images/testimonials/6.jpg',
    content: 'Suasana yang sejuk dan udara yang bersih membuat BSB City menjadi tempat tinggal yang ideal untuk keluarga. Sangat direkomendasikan!',
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata <span className="text-emerald-600">Mereka</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari para penghuni BSB City yang telah merasakan kenyamanan tinggal di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-100 p-1 rounded-full">
                    <Quote className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic relative pl-4 border-l-2 border-emerald-200">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
