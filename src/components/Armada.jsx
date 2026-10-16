import React from 'react';

const cars = [
  {
    type: 'Transmisi Matic',
    typeColor: 'bg-blue-600',
    title: 'City Car Modern (Matic)',
    sub: 'Toyota Agya / Honda Brio Matic',
    desc: 'Dimensi lincah dan kemudi enteng, sangat pas untuk pemula yang ingin cepat percaya diri berkendara di lalu lintas perkotaan & parkir mall.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=700&auto=format&fit=crop',
    tags: ['AC Dingin', 'Dual Airbag', 'Rem Tambahan']
  },
  {
    type: 'Transmisi Manual',
    typeColor: 'bg-emerald-600',
    title: 'MPV Keluarga (Manual)',
    sub: 'Toyota Avanza / Daihatsu Xenia',
    desc: 'Mobil terpopuler di Indonesia! Sekali mahir menguasai mobil ini, Anda akan dengan mudah mengemudikan jenis mobil apapun.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=700&auto=format&fit=crop',
    tags: ['Pedal Kopling Halus', 'Kopling & Rem Ganda', 'Torsi Kuat Tanjakan']
  },
  {
    type: 'Pilihan Favorit Mahasiswa',
    typeColor: 'bg-amber-600',
    title: 'Compact Hatchback (Manual & Matic)',
    sub: 'Daihatsu Ayla / Toyota Calya',
    desc: 'Kenyamanan maksimal untuk mahasiswa dan ibu-ibu yang ingin antar jemput anak sekolah dengan percaya diri dan aman.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=700&auto=format&fit=crop',
    tags: ['Visibilitas Luas', 'Kamera / Sensor Parkir', 'Kabin Harum']
  }
];

export default function Armada() {
  return (
    <section id="armada" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Armada Modern & Terawat
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mobil Nyaman, Bersih & Berfitur Keamanan Lengkap
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Semua armada kami diservis rutin di bengkel resmi, AC dingin, ruang kabin bersih wangi, serta dilengkapi rem ganda demi keselamatan optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cars.map((car, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={car.image} 
                  alt={car.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow ${car.typeColor}`}>
                  {car.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900">{car.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{car.sub}</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{car.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                  {car.tags.map((t, i) => (
                    <span key={i} className="bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
