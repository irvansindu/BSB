import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Puri Arga Golf - BSB City',
  description: 'Puri Arga Golf adalah salah satu kawasan hunian di dalam pengembangan kota baru BSB City.',
};

const PuriArgaPage = () => {
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
                  src="/images/clusters/puri-arga.jpg"
                  alt="Puri Arga Golf - BSB City"
                  fill
                  className="object-cover mix-blend-screen opacity-90"
                  priority
                />
              </div>
              <div className="relative p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80 mb-2">Residential Cluster</p>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">Puri Arga Golf</h1>
                  <p className="text-sm md:text-base text-slate-200 max-w-xl">
                    Puri Arga Golf merupakan salah satu kawasan hunian yang dikembangkan di BSB City. Informasi resmi mengenai produk,
                    tipe unit, dan fasilitas dapat diperoleh langsung dari pengembang atau marketing gallery.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <section>
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 mb-3">Sekilas Puri Arga Golf</h2>
                <p className="text-sm leading-relaxed text-slate-200/90 mb-4">
                  Puri Arga Golf merupakan salah satu cluster hunian yang direncanakan di BSB City. Detail mengenai konsep, tipe unit,
                  dan fasilitas resmi dapat dikonfirmasi melalui pengembang dan marketing gallery BSB City.
                </p>
              </section>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
              <h3 className="text-base font-semibold text-slate-50 mb-2">Ingin unit dengan view golf?</h3>
              <p className="text-sm text-slate-200 mb-4">
                Tim kami siap mengatur private tour kawasan dan menjelaskan pilihan unit terbaik di Puri Arga Golf.
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
                  href="/booking?cluster=puri-arga"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
                >
                  Jadwalkan Kunjungan
                </Link>
                <Link
                  href="/contact?cluster=puri-arga"
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

export default PuriArgaPage;
