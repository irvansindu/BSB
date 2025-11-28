import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak BSB City',
  description:
    'Hubungi BSB City untuk informasi lebih lanjut mengenai hunian, kawasan komersial, dan peluang investasi di kota baru BSB City.',
};

const ContactPage = () => {
  return (
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
          <section className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-6 md:p-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm">
            <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-4">Kirim Pesan</h2>
            <form className="space-y-4 text-sm md:text-base">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-slate-200 text-xs md:text-sm">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-slate-200 text-xs md:text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="nama@email.com"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-slate-200 text-xs md:text-sm">
                  Nomor Telepon / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="block text-slate-200 text-xs md:text-sm">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
                  placeholder="Tulis pertanyaan atau kebutuhan Anda di sini"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
              >
                Kirim Pesan
              </button>
              <p className="text-[0.7rem] text-slate-400">
                *Form ini bersifat ilustratif. Integrasi pengiriman data dapat disesuaikan dengan sistem CRM atau email yang digunakan.
              </p>
            </form>
          </section>

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
};

export default ContactPage;
