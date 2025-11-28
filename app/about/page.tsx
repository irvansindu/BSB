import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang BSB City',
  description:
    'BSB City adalah pengembangan kota baru di perbukitan sekitar 200 meter di atas permukaan laut dengan masterplan 1000 hektar, mengusung konsep green city with dynamic living.',
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80 mb-3">
            About BSB City
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Green City with Dynamic Living
          </h1>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed mx-auto md:mx-0">
            BSB City adalah kota baru yang dirancang sebagai tempat untuk hidup, bekerja, dan berkreasi sekaligus. Terletak di perbukitan
            sekitar 200 meter di atas permukaan laut, kawasan ini menawarkan udara yang lebih sejuk dan pemandangan yang menenangkan.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.6fr_1.2fr] items-start mb-12 md:mb-14">
          <div className="space-y-5 text-sm md:text-base text-slate-300/90 leading-relaxed">
            <p>
              Dengan masterplan pengembangan seluas kurang lebih 1000 hektar, BSB City dibangun melalui perencanaan matang untuk
              menghadirkan lingkungan hunian yang modern sekaligus hijau. Penataan ruang mengutamakan keseimbangan antara area residensial,
              area komersial, ruang terbuka hijau, dan fasilitas publik.
            </p>
            <p>
              Banyaknya area hijau, taman depan rumah, dan taman bermain menjadikan suasana BSB City lebih sejuk dan segar. Konsep ini
              memberikan kualitas hidup yang lebih baik bagi penghuni, di mana aktivitas harian dapat dilakukan di lingkungan yang nyaman
              dan tertata.
            </p>
            <p>
              BSB City mengusung konsep green city dengan dynamic living: bukan sekadar kawasan perumahan, melainkan kota mandiri yang
              memungkinkan penghuninya tinggal dekat dengan pusat aktivitas bisnis, pendidikan, rekreasi, dan berbagai fasilitas penunjang
              lainnya.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-6 md:p-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm">
            <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-4">Sekilas Angka</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-300">Luas pengembangan</dt>
                <dd className="text-emerald-200 font-medium">± 1.000 ha</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-300">Ketinggian lokasi</dt>
                <dd className="text-emerald-200 font-medium">± 200 mdpl</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-300">Konsep</dt>
                <dd className="text-emerald-200 font-medium">Green City & Dynamic Living</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-300">Fungsi kawasan</dt>
                <dd className="text-emerald-200 font-medium">Live, Work, and Play</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-slate-300/90 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-1.5">Kota Mandiri di Perbukitan</h2>
            <p>
              BSB City dikembangkan sebagai kota mandiri di sisi barat Semarang. Lokasinya yang berada di perbukitan memberikan
              keuntungan alami berupa udara yang lebih bersih, suhu yang lebih nyaman, dan pemandangan lanskap yang luas.
            </p>
            <p>
              Penataan infrastruktur dan jaringan jalan dalam kawasan dirancang untuk mendukung konektivitas yang baik, baik di dalam
              BSB City maupun ke berbagai titik penting di kota Semarang dan sekitarnya.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-1.5">Fasilitas Lengkap untuk Penghuni</h2>
            <p>
              Masterplan BSB City mencakup kawasan bisnis dan komersial, pusat perbelanjaan, area rekreasi, fasilitas pendidikan, pusat
              kuliner, hingga rumah ibadah. Semua dirancang untuk memenuhi kebutuhan penghuni tanpa harus jauh keluar dari kawasan.
            </p>
            <p>
              Dengan kombinasi tersebut, BSB City menawarkan keseharian yang lebih praktis: tinggal, bekerja, bersosialisasi, dan
              berlibur bisa dilakukan dalam satu kawasan yang sama.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
