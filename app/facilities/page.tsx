import { Metadata } from 'next';
import { School, Building2, ShoppingBag, Utensils, Hotel, Dumbbell, Trees, Church, FerrisWheel, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fasilitas BSB City',
  description:
    'Ikhtisar fasilitas kota baru BSB City: danau dan ruang terbuka hijau, sekolah & universitas, office park, area komersial, shopping mall, theme park, pusat kuliner, hotel, sport club, dan rumah ibadah.',
};

const facilityGroups = [
  {
    title: 'Ruang Terbuka & Rekreasi',
    description:
      'BSB City menghadirkan suasana kota hijau dengan danau, taman, dan area rekreasi yang menjadi ruang publik bagi penghuni.',
    items: [
      {
        icon: Trees,
        name: 'Danau & Ruang Terbuka Hijau',
        detail:
          'Area hijau yang luas dan danau sebagai pusat rekreasi, tempat warga berolahraga, bersantai, dan menikmati udara yang lebih sejuk.',
      },
      {
        icon: FerrisWheel,
        name: 'Theme Park & Recreations',
        detail:
          'Area rekreasi dan taman bermain tematik untuk keluarga dan anak-anak, menambah pilihan aktivitas akhir pekan di dalam kawasan.',
      },
      {
        icon: Dumbbell,
        name: 'Sport Club',
        detail:
          'Fasilitas olahraga dan klub kebugaran untuk mendukung gaya hidup sehat, mulai dari lapangan olahraga hingga fasilitas indoor.',
      },
    ],
  },
  {
    title: 'Pendidikan & Komunitas',
    description:
      'Kehadiran sekolah dan perguruan tinggi dalam kawasan menjadikan BSB City lingkungan yang ideal untuk keluarga dan generasi muda.',
    items: [
      {
        icon: School,
        name: 'School & Universities',
        detail:
          'Institusi pendidikan dari tingkat sekolah hingga universitas yang mudah dijangkau dari kawasan hunian BSB City.',
      },
      {
        icon: Church,
        name: 'Rumah Ibadah',
        detail:
          'Berbagai rumah ibadah untuk mendukung kehidupan spiritual dan aktivitas keagamaan masyarakat di BSB City.',
      },
      {
        icon: MapPin,
        name: 'Community Facilities',
        detail:
          'Ruang komunal dan fasilitas pendukung lain yang mendukung interaksi sosial dan kegiatan komunitas di dalam kawasan.',
      },
    ],
  },
  {
    title: 'Bisnis, Komersial & Akomodasi',
    description:
      'Kombinasi area bisnis, komersial, kuliner, dan akomodasi membentuk ekosistem kota mandiri di BSB City.',
    items: [
      {
        icon: Building2,
        name: 'Office Park & Industrial Park',
        detail:
          'Kawasan perkantoran dan area industri yang dirancang untuk mendukung aktivitas bisnis dan investasi di koridor barat Semarang.',
      },
      {
        icon: ShoppingBag,
        name: 'Commercial Area & Shopping Mall',
        detail:
          'Area ruko, pusat belanja, dan shopping mall untuk kebutuhan harian, gaya hidup, dan hiburan penghuni.',
      },
      {
        icon: Utensils,
        name: 'Culinary Center & Restaurant',
        detail:
          'Pusat kuliner, restoran, dan kafe yang tersebar di berbagai titik kawasan, menghadirkan beragam pilihan makanan dan minuman.',
      },
      {
        icon: Hotel,
        name: 'Hotel & Motels',
        detail:
          'Fasilitas akomodasi untuk tamu, pelaku bisnis, maupun wisatawan yang berkunjung ke BSB City dan sekitarnya.',
      },
    ],
  },
];

const FacilitiesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-200/80 mb-3">Facilities</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Fasilitas Kota Baru BSB City
          </h1>
          <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Sebagai kota baru dengan masterplan kurang lebih 1000 hektar, BSB City menghadirkan beragam fasilitas yang saling terhubung:
            mulai dari ruang terbuka hijau, pendidikan, bisnis, komersial, kuliner, hingga akomodasi dan olahraga.
          </p>
        </header>

        <div className="space-y-10 md:space-y-12">
          {facilityGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 md:p-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm"
            >
              <div className="mb-5 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-1.5">{group.title}</h2>
                  <p className="text-xs md:text-sm text-slate-300/90 max-w-2xl leading-relaxed">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-start gap-4 rounded-2xl border border-emerald-500/18 bg-slate-950/70 px-4 py-4 md:px-5 md:py-5 shadow-[0_14px_55px_rgba(15,23,42,0.9)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/50 flex-shrink-0">
                        <Icon className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">{item.name}</h3>
                        <p className="text-xs md:text-[0.8rem] text-slate-300/90 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
