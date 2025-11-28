import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lokasi BSB City',
  description:
    'BSB City berlokasi strategis di koridor barat Semarang, terhubung dengan infrastruktur utama dan mudah diakses dari pusat kota, tol, dan fasilitas transportasi lainnya.',
};

const LocationPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80 mb-3">
            Location
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Lokasi Strategis BSB City
          </h1>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed mx-auto md:mx-0">
            BSB City berada di koridor barat Semarang yang berkembang pesat, dengan akses yang baik menuju pusat kota, jaringan jalan
            utama, serta berbagai fasilitas penting di sekitarnya.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.5fr_1.3fr] items-start mb-12 md:mb-14">
          <div className="space-y-4 text-sm md:text-base text-slate-300/90 leading-relaxed">
            <p>
              Lokasi BSB City dirancang untuk mudah diakses dari berbagai arah. Kawasan ini terhubung dengan jaringan jalan utama yang
              menghubungkan Semarang dengan area sekitarnya, termasuk akses ke gerbang tol dan pusat-pusat kegiatan ekonomi.
            </p>
            <p>
              Posisi BSB City menjadikannya berada di titik yang strategis untuk pengembangan kawasan bisnis, hunian, dan fasilitas
              pendukung lain seperti pendidikan, rekreasi, dan komersial.
            </p>
            <p>
              Jarak ke berbagai titik penting dapat ditempuh dalam waktu yang relatif singkat, sehingga penghuni tetap dapat menikmati
              lingkungan perbukitan yang tenang tanpa kehilangan konektivitas dengan pusat kota.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-4 md:p-5 shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
              <iframe
                title="Lokasi BSB City"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.625..."
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-[0.8rem] text-slate-400">
              *Titik lokasi pada peta bersifat ilustratif. Silakan konfirmasi titik pasti melalui marketing gallery BSB City.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3 text-xs md:text-sm text-slate-300/90 leading-relaxed">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">Akses Kendaraan</h2>
            <p>
              Terhubung dengan jaringan jalan utama yang menghubungkan Semarang dan kawasan sekitarnya, serta dekat dengan akses tol
              trans Jawa.
            </p>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">Dekat Fasilitas Kota</h2>
            <p>
              Lokasi mendukung pengembangan kawasan bisnis, komersial, pendidikan, dan rekreasi yang terintegrasi dalam masterplan BSB
              City.
            </p>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">Lingkungan Perbukitan</h2>
            <p>
              Berada di perbukitan membuat BSB City memiliki lingkungan yang lebih sejuk dan pemandangan yang lebih luas dibandingkan
              kawasan perkotaan padat.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationPage;
