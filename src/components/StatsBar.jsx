import React from 'react';

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary-700">1.800+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Alumni Berhasil Nyetir</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary-700">4.9 ★</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Ulasan Google Maps</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary-700">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Instruktur Sabar & Ramah</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary-700">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Mobil AC & Dual Pedal Rem</p>
          </div>

        </div>
      </div>
    </section>
  );
}
