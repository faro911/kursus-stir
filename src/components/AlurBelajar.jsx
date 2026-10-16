import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Daftar via WhatsApp',
    desc: 'Isi formulir pendaftaran di web ini dan konfirmasi jadwal latihan yang sesuai dengan kesibukan Anda.',
    color: 'bg-primary-700'
  },
  {
    step: '02',
    title: 'Pengenalan Dasar & Keamanan',
    desc: 'Mengenal pedal, transmisi, blind spot, feeling haluan mobil di area latihan yang tenang dan aman.',
    color: 'bg-primary-700'
  },
  {
    step: '03',
    title: 'Praktek Jalan & Tanjakan',
    desc: 'Turun langsung ke jalan raya protokol, tanjakan Manyaran, putar balik, hingga trik parkir mall.',
    color: 'bg-primary-700'
  },
  {
    step: '04',
    title: 'Mahir & Pengurusan SIM A',
    desc: 'Evaluasi akhir kemampuan nyetir mandiri dan pendampingan resmi uji SIM A hingga Anda siap meluncur.',
    color: 'bg-emerald-600'
  }
];

export default function AlurBelajar() {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            4 Langkah Mudah Menuju Mahir Nyetir
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Proses cepat, tanpa ribet, langsung praktek didampingi instruktur profesional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-center flex flex-col items-center"
            >
              <span className={`w-10 h-10 rounded-full text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow ${item.color}`}>
                {item.step}
              </span>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
