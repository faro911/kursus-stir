import React from 'react';

const features = [
  {
    icon: '😊',
    bgColor: 'bg-blue-100 text-blue-700',
    title: 'Instruktur Ramah & Sangat Sabar',
    desc: 'Tidak ada bentakan atau kata kasar! Instruktur kami bersertifikat dan memahami bagaimana membimbing pemula yang gugup agar cepat tenang dan percaya diri.'
  },
  {
    icon: '🛡️',
    bgColor: 'bg-emerald-100 text-emerald-700',
    title: 'Safety Pedal Ganda (Dual Control)',
    desc: 'Semua mobil latihan dilengkapi pedal rem dan kopling darurat di sisi instruktur. Jika ada kondisi mendadak, instruktur siap mengendalikan mobil secara instan.'
  },
  {
    icon: '🚦',
    bgColor: 'bg-amber-100 text-amber-700',
    title: 'Praktek Nyata Jalan Raya & Tanjakan',
    desc: 'Latihan langsung di jalan protokol kota (Simpang Lima, Pemuda, Gajah Mada) dan teknik tanjakan curam (Siranda, Gombel). Kuasai stop & go tanpa melorot!'
  },
  {
    icon: '🚗',
    bgColor: 'bg-purple-100 text-purple-700',
    title: 'Armada Lengkap Manual & Matic',
    desc: 'Tersedia mobil city car dan MPV modern yang terawat, kabin wangi, full AC dingin, serta power steering enteng yang mudah dikendalikan siapapun.'
  },
  {
    icon: '🅿️',
    bgColor: 'bg-rose-100 text-rose-700',
    title: 'Trik Parkir Super Presisi',
    desc: 'Bukan hanya jalan lurus! Kami ajarkan rumus gampang parkir seri, parkir paralel sempit pinggir jalan, serta teknik mundur menggunakan kaca spion dengan presisi.'
  },
  {
    icon: '🪪',
    bgColor: 'bg-cyan-100 text-cyan-700',
    title: 'Pendampingan Pembuatan SIM A',
    desc: 'Tidak perlu bingung atau repot! Kami sediakan paket all-in lengkap dengan pendampingan resmi uji SIM A hingga kartu SIM Anda resmi terbit dan legal berkendara.'
  }
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Mengapa Memilih Kursus Stir Mobil Thamrin?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solusi Belajar Nyetir Paling Aman, Menyenangkan & Bebas Tekanan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Banyak orang takut belajar mobil karena takut dimarahi instruktur atau takut nabrak. Di Kursus Stir Mobil Thamrin Semarang, kenyamanan psikologis dan keselamatan Anda adalah prioritas no. 1!
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-inner ${item.bgColor}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
