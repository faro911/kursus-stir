import React, { useState } from 'react';
import { IconCheck, IconArrowRight } from './Icons';

export default function PaketBiaya({ onSelectPackage }) {
  const [transmisiType, setTransmisiType] = useState('manual'); // 'manual' | 'matic'

  const prices = {
    manual: {
      pelancaran: 'Rp 450.000',
      pemula: 'Rp 750.000',
      sima: 'Rp 1.450.000'
    },
    matic: {
      pelancaran: 'Rp 550.000',
      pemula: 'Rp 850.000',
      sima: 'Rp 1.550.000'
    }
  };

  const handlePilih = (namaPaket) => {
    if (onSelectPackage) {
      onSelectPackage(namaPaket, transmisiType === 'manual' ? 'Manual' : 'Matic (Automatic)');
    }
    const daftarElem = document.getElementById('daftar');
    if (daftarElem) {
      daftarElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="paket" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Transparan & Terjangkau
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Paket Kursus Mengemudi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Pilih paket yang paling cocok dengan kebutuhan Anda. Bisa pilih transmisi Manual atau Matic. Seluruh biaya sudah termasuk bensin, mobil ber-AC, dan instruktur!
          </p>

          {/* Toggle Switch Manual / Matic Pill */}
          <div className="mt-6 inline-flex p-1 bg-slate-200 rounded-xl">
            <button 
              type="button" 
              onClick={() => setTransmisiType('manual')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                transmisiType === 'manual' 
                  ? 'bg-white text-primary-800 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🚘 Manual
            </button>
            <button 
              type="button" 
              onClick={() => setTransmisiType('matic')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                transmisiType === 'matic' 
                  ? 'bg-white text-primary-800 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🚙 Matic (Automatic)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Paket 1: Pelancaran */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                  Paket Pelancaran
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Pelancaran & Mental Jalan</h3>
              <p className="text-xs text-slate-500 mt-1">
                Cocok untuk yang sudah bisa dasar / sudah punya SIM tapi masih takut jalan raya
              </p>
              
              <div className="my-6">
                <span className="text-xs text-slate-400 font-medium">Mulai dari</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {prices[transmisiType].pelancaran}
                  </span>
                  <span className="text-xs text-slate-500">/ 5 Jam</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">✓ Jadwal fleksibel per 1-2 jam</p>
              </div>

              <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Durasi 5 Jam Latihan (bisa dibagi hari)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Fokus latihan jalan raya protokol & padat</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Latihan tanjakan curam Manyaran / Sampangan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Termasuk BBM & Mobil AC Ber-Safety Pedal</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button 
                type="button"
                onClick={() => handlePilih('Paket Pelancaran (5 Jam)')} 
                className="w-full py-3.5 px-4 rounded-xl border-2 border-primary-700 text-primary-700 font-bold hover:bg-primary-50 transition text-sm"
              >
                Pilih Paket Pelancaran
              </button>
            </div>
          </div>

          {/* Paket 2: Pemula Mahir (POPULER) */}
          <div className="bg-gradient-to-b from-primary-900 to-slate-900 text-white rounded-3xl p-7 sm:p-8 border-2 border-amber-400 shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
            
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              ⭐ Paling Banyak Dipilih
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                  Paket Pemula Komplit
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">Mahir Total (Nol Sampai Bisa)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Dari belum pernah pegang setir sama sekali hingga lancar mengemudi mandiri
              </p>
              
              <div className="my-6">
                <span className="text-xs text-slate-400 font-medium">Investasi</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                    {prices[transmisiType].pemula}
                  </span>
                  <span className="text-xs text-slate-300">/ 10 Jam</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-1">✓ Garansi dibimbing sampai percaya diri</p>
              </div>

              <ul className="space-y-3 text-sm text-slate-200 border-t border-white/10 pt-5">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Durasi 10 Jam Latihan Intensif (Fleksibel)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Materi Komplit: Haluan, Kopling/Gas, Tanjakan, Turunan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Kombinasi Parkir Lengkap (Seri, Paralel, Garasi Sempit)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Sertifikat Kelulusan Kursus Merdeka</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Termasuk BBM & 1 Siswa 1 Mobil Privat</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button 
                type="button"
                onClick={() => handlePilih('Paket Pemula Mahir (10 Jam)')} 
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black hover:brightness-110 transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Ambil Paket Ini & Daftar Sekarang</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Paket 3: All-In Kursus + SIM A */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                  Paket Komplit + SIM A
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Kursus + Pendampingan SIM A</h3>
              <p className="text-xs text-slate-500 mt-1">
                Paket beres, Anda tinggal fokus latihan, berkas SIM A kami dampingi sampai selesai
              </p>
              
              <div className="my-6">
                <span className="text-xs text-slate-400 font-medium">Investasi All-in</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {prices[transmisiType].sima}
                  </span>
                  <span className="text-xs text-slate-500">/ All-in</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">✓ Tidak perlu antre pusing urus SIM</p>
              </div>

              <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Paket Belajar Mahir 10 Jam (Lengkap)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Pendampingan Pembuatan SIM A Baru Resmi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Simulasi & Pembekalan Ujian Teori & Praktek</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5"><IconCheck /></span>
                  <span>Sertifikat Kursus Mengemudi Resmi</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button 
                type="button"
                onClick={() => handlePilih('Paket Lengkap + SIM A')} 
                className="w-full py-3.5 px-4 rounded-xl border-2 border-primary-700 text-primary-700 font-bold hover:bg-primary-50 transition text-sm"
              >
                Pilih Paket + SIM A
              </button>
            </div>
          </div>

        </div>

        {/* Note on custom hours */}
        <div className="mt-10 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center max-w-2xl mx-auto text-xs sm:text-sm text-primary-900">
          💡 <strong>Butuh paket jam lain atau private weekend?</strong> Kami juga melayani paket jam khusus, latihan dengan mobil sendiri, atau private khusus hari Sabtu & Minggu. Hubungi admin untuk penyesuaian!
        </div>

      </div>
    </section>
  );
}
