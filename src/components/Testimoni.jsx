import React from 'react';
import { IconMapPin } from './Icons';

const reviews = [
  {
    stars: 5,
    text: '"Awalnya takut dan gemeteran banget kalau mau nyetir mobil di jalan raya. Untung daftar di Kursus Stir Mobil Monalia, instrukturnya sabar banget, ramah, dan telaten ngajarin dari dasar. Diajarin sampai benar-benar paham dan percaya diri. Sangat recommended buat cewek atau pemula!"',
    name: 'Dina Novita',
    role: 'Ibu Rumah Tangga • Puri Anjasmoro',
    initials: 'DN',
    color: 'bg-rose-100 text-rose-700'
  },
  {
    stars: 5,
    text: '"Tempat kursus stir mobil paling recomended di Semarang Barat! Mobilnya bersih, full AC dingin, dan ada pedal rem darurat ganda jadi merasa aman banget waktu latihan. Pengurusan SIM A juga dibantu sampai beres."',
    name: 'Rian Pratama',
    role: 'Karyawan Swasta • Karangayu',
    initials: 'RP',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    stars: 5,
    text: '"Instruktur ramah dan tidak pernah marah-marah saat kita salah. Trik parkir paralel dan masuk gang sempit yang diajarkan sangat gampang dipraktekkan. Sekarang bawa mobil ke kantor atau mall sudah santai. Terima kasih Monalia!"',
    name: 'Anisa Kusuma',
    role: 'Karyawati • Madukoro, Semarang Barat',
    initials: 'AK',
    color: 'bg-emerald-100 text-emerald-700'
  }
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Siswa Kursus Stir Mobil Monalia?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Ulasan jujur dari alumni yang sebelumnya trauma atau belum pernah pegang setir sama sekali
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 text-sm mb-3">
                  {'★'.repeat(rev.stars)}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  {rev.text}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm ${rev.color}`}>
                  {rev.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="https://maps.app.goo.gl/R48Va7yMVtBnzzDs8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow transition"
          >
            <IconMapPin className="w-4 h-4 text-red-500" />
            <span>Lihat Ulasan & Lokasi Lengkap di Google Maps &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
