import ContactForm from '@/components/contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak BSB City',
  description:
    'Hubungi BSB City untuk informasi lebih lanjut mengenai hunian, kawasan komersial, dan peluang investasi di kota baru BSB City.',
};

const ContactPage = () => (
  <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-10 md:mb-12 text-center md:text-left">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80 mb-3">
          Contact
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
          Hubungi BSB City
        </h1>
        <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed mx-auto md:mx-0">
          Tim kami siap membantu menjawab pertanyaan Anda seputar produk hunian, kawasan komersial, maupun informasi lainnya
          mengenai pengembangan BSB City.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[1.4fr_1.2fr] items-start">
        <ContactForm />

        <aside className="space-y-6">
          <section className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-5 md:p-6 text-sm shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm">
            <h2 className="text-base font-semibold text-slate-50 mb-3">Marketing Gallery BSB City</h2>
            <div className="space-y-2 text-slate-200">
              <p>Jl. Raya BSB City, Tembalang, Semarang, Jawa Tengah</p>
              <p>
                Telepon:{' '}
                <a href="tel:+62247711111" className="text-emerald-300 hover:text-emerald-200">
                  +62 24 7711 111
                </a>{' '}
                /{' '}
                <a href="tel:+62247711285" className="text-emerald-300 hover:text-emerald-200">
                  +62 24 7711 285
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/6281615003858"
                  target="_blank"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  +62 816 1500 3858
                </a>
              </p>
              <p>Email: info@bsbcity.com</p>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href="https://wa.me/6281615003858"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-5 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/10 transition-colors"
              >
                Chat via WhatsApp
              </a>
              <a
                href="tel:+62247711111"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800/80 transition-colors"
              >
                Hubungi via Telepon
              </a>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 text-[0.75rem] text-slate-300 leading-relaxed">
            <p className="mb-1.5 font-medium text-slate-100">Jam Layanan Marketing Gallery</p>
            <p>Senin - Jumat: 09.00 - 17.00 WIB</p>
            <p>Sabtu - Minggu & Hari Libur: 09.00 - 16.00 WIB</p>
          </section>
        </aside>
      </div>
    </div>
  </div>
);

export default ContactPage;
