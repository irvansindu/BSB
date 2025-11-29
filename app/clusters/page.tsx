import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kawasan Hunian BSB City',
  description:
    'Daftar kawasan hunian di dalam pengembangan kota baru BSB City, seperti Hilago, Naraya Residence, Puri Arga Golf, Graha Taman Pelangi, Graha Taman Bunga, dan BSB Village.',
};

const clusters = [
  { name: 'Hilago Cluster', slug: 'hilago' },
  { name: 'Naraya Residence', slug: 'naraya' },
  { name: 'Puri Arga Golf', slug: 'puri-arga' },
  { name: 'Graha Taman Pelangi', slug: 'graha-pelangi' },
  { name: 'Graha Taman Bunga', slug: 'graha-bunga' },
  { name: 'BSB Village', slug: 'bsb-village' },
];

const ClustersIndexPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80 mb-3">Residential Clusters</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Kawasan Hunian di BSB City
          </h1>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Berikut adalah beberapa kawasan hunian yang dikembangkan di kota baru BSB City. Informasi lebih rinci mengenai masing-masing
            cluster dapat diperoleh melalui marketing gallery atau kanal resmi BSB City.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/clusters/${cluster.slug}`}
              className="group rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 md:p-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] hover:border-emerald-400/50 hover:shadow-[0_24px_90px_rgba(16,185,129,0.45)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-3">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-emerald-300/80 mb-1">Cluster Hunian</p>
                <h2 className="text-base md:text-lg font-semibold text-slate-50">{cluster.name}</h2>
              </div>
              <p className="text-xs md:text-[0.8rem] text-slate-300/90 leading-relaxed">
                Cluster ini merupakan bagian dari pengembangan kawasan hunian BSB City. Detail resmi mengenai produk dan fasilitas dapat
                dikonfirmasi melalui pengembang atau marketing gallery.
              </p>
              <span className="mt-4 inline-flex text-[0.75rem] font-semibold text-emerald-300 group-hover:text-emerald-200">
                Lihat detail cluster
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClustersIndexPage;
