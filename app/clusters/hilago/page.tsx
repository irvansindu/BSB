import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, MapPin, Home, Ruler, Trees, ShieldCheck, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hilago Cluster - BSB City',
  description: 'Hilago, where luxury meets nature: hunian di perbukitan BSB City dengan Hilago Park dan jogging track mengelilingi danau yang menenangkan.',
};

const HilagoPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/clusters" className="inline-flex items-center gap-2 hover:text-emerald-300">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke daftar kawasan
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.7fr_1.1fr] items-start">
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-950 mb-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),_transparent_55%)]" />
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/clusters/hilago.jpg"
                  alt="Hilago Cluster - BSB City"
                  fill
                  className="object-cover mix-blend-screen opacity-90"
                  priority
                />
              </div>
              <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80 mb-2">Where Luxury Meets Nature</p>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">Hilago Cluster</h1>
                  <p className="text-sm md:text-base text-slate-200 max-w-xl">
                    Hilago bukan hanya tempat untuk tinggal, tetapi juga tempat untuk menikmati hidup yang tenang dan rileks.
                    Di dalamnya terdapat Hilago Park dengan jogging track yang mengelilingi danau yang indah, menghadirkan suasana resort di tengah kota baru BSB City.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="rounded-2xl border border-emerald-400/40 bg-slate-900/70 px-6 py-4 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-300 mb-1">Mulai dari</p>
                    <p className="text-2xl font-semibold text-emerald-200">Rp600 Juta-an</p>
                    <p className="mt-1 text-xs text-slate-300">Cicilan fleksibel, tenor hingga 20 tahun</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <section>
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 mb-3">Konsep Hunian</h2>
                <p className="text-sm leading-relaxed text-slate-200/90 mb-4">
                  Mengusung konsep where luxury meets nature, Hilago memadukan arsitektur modern minimalis dengan sentuhan alam.
                  Fasad clean, bukaan jendela lebar, dan pemandangan hijau di sekitar kawasan menciptakan suasana tinggal yang tenang namun tetap modern.
                </p>
                <p className="text-sm leading-relaxed text-slate-200/90">
                  Kehadiran Hilago Park dengan jogging track mengelilingi danau menambah kualitas hidup penghuni, menjadi ruang rekreasi harian yang mudah dijangkau hanya dengan beberapa langkah dari rumah.
                </p>
              </section>

              <section className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6">
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 mb-4">Highlight Cluster</h2>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    <div>
                      <dt className="text-slate-300">Lokasi</dt>
                      <dd className="text-slate-100">Zona premium BSB City, dekat kawasan komersial utama</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-4 w-4 text-emerald-300" />
                    <div>
                      <dt className="text-slate-300">Tipe Unit</dt>
                      <dd className="text-slate-100">Type 36/72, 45/90, dan 60/120</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler className="h-4 w-4 text-emerald-300" />
                    <div>
                      <dt className="text-slate-300">Ketinggian</dt>
                      <dd className="text-slate-100">± 200 mdpl dengan udara sejuk sepanjang tahun</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trees className="h-4 w-4 text-emerald-300" />
                    <div>
                      <dt className="text-slate-300">Ruang Terbuka Hijau</dt>
                      <dd className="text-slate-100">Taman tematik, jalur pedestrian rindang, kids playground</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" />
                    <div>
                      <dt className="text-slate-300">Keamanan</dt>
                      <dd className="text-slate-100">One gate system, CCTV, dan security 24 jam</dd>
                    </div>
                  </div>
                </dl>
              </section>
            </div>

            <section className="mt-10 rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 md:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 mb-5">Fasilitas Kawasan</h2>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="space-y-2">
                  <p className="font-medium text-slate-100">Lifestyle & Rekreasi</p>
                  <ul className="space-y-1 text-slate-200/90">
                    <li>• Club house eksklusif</li>
                    <li>• Kolam renang dewasa & anak</li>
                    <li>• Jogging track dan bicycle lane</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-100">Kenyamanan Harian</p>
                  <ul className="space-y-1 text-slate-200/90">
                    <li>• Area drop-off elegan</li>
                    <li>• Parkir tamu terpusat</li>
                    <li>• Street lighting modern</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-100">Akses & Sekitar</p>
                  <ul className="space-y-1 text-slate-200/90">
                    <li>• Dekat kawasan komersial BSB</li>
                    <li>• Akses cepat ke sekolah & kampus</li>
                    <li>•  ±20 menit ke pusat kota</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
              <h3 className="text-base font-semibold text-slate-50 mb-2">Tertarik dengan Hilago?</h3>
              <p className="text-sm text-slate-200 mb-4">
                Konsultasikan kebutuhan hunian Anda dengan tim sales kami dan dapatkan penawaran terbaik untuk unit terbatas di Hilago Cluster.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-slate-200 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-emerald-300" />
                  Marketing Gallery BSB City
                </p>
                <p className="text-slate-200">
                  Telp: <a href="tel:+62247711111" className="text-emerald-300 hover:text-emerald-200">+62 24 7711 111</a>
                </p>
                <p className="text-slate-200">
                  WhatsApp: <a href="https://wa.me/6281615003858" target="_blank" className="text-emerald-300 hover:text-emerald-200">+62 816 1500 3858</a>
                </p>
              </div>
              <div className="mt-5 grid gap-3">
                <Link
                  href="/booking?cluster=hilago"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
                >
                  Jadwalkan Kunjungan
                </Link>
                <Link
                  href="/contact?cluster=hilago"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-5 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/10 transition-colors"
                >
                  Hubungi Konsultan
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 text-xs text-slate-300 leading-relaxed">
              <p className="mb-2 font-medium text-slate-100">Disclaimer</p>
              <p>Seluruh data, gambar, dan ilustrasi bersifat konseptual dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu sesuai kebijakan pengembang.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HilagoPage;
