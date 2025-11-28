import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Lokasi', href: '/location' },
      { name: 'Fasilitas', href: '/facilities' },
      { name: 'Kawasan', href: '/clusters' },
      { name: 'Berita', href: '/news' },
      { name: 'Kontak', href: '/contact' },
      { name: 'Kebijakan Privasi', href: '/privacy-policy' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://facebook.com/bsbcity',
        icon: FaFacebook,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/bsbcity',
        icon: FaInstagram,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/bsbcity',
        icon: FaTwitter,
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com/bsbcity',
        icon: FaYoutube,
      },
    ],
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'Jl. Raya BSB City, Tembalang, Semarang, Jawa Tengah',
    },
    {
      icon: FaPhoneAlt,
      text: '+62 24 7711 111',
      href: 'tel:+62247711111',
    },
    {
      icon: FaPhoneAlt,
      text: '+62 24 7711 285',
      href: 'tel:+62247711285',
    },
    {
      icon: FaEnvelope,
      text: 'info@bsbcity.com',
      href: 'mailto:info@bsbcity.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-400">BSB</span>
              <span className="text-2xl font-bold text-white">CITY</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              BSBCITY menawarkan pengembangan kota baru di ketinggian 200 mdpl dengan udara sejuk dan pemandangan perbukitan yang indah. Konsep perencanaan lingkungan dengan area hijau dan taman menjadi ciri khasnya.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Tautan Cepat</h3>
            <ul role="list" className="mt-6 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kawasan */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Kawasan</h3>
            <ul role="list" className="mt-6 space-y-3">
              <li>
                <a href="/clusters/hilago" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Hilago Cluster
                </a>
              </li>
              <li>
                <a href="/clusters/naraya" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Naraya Residence
                </a>
              </li>
              <li>
                <a href="/clusters/puri-arga-golf" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Puri Arga Golf
                </a>
              </li>
              <li>
                <a href="/clusters/graha-taman-pelangi" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Graha Taman Pelangi
                </a>
              </li>
              <li>
                <a href="/clusters/graha-taman-bunga" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Graha Taman Bunga
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Hubungi Kami</h3>
            <ul role="list" className="mt-6 space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex">
                  <item.icon className="flex-shrink-0 h-5 w-5 text-emerald-400 mt-0.5" aria-hidden="true" />
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="ml-3 text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="ml-3 text-base text-gray-300">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} BSBCITY. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
