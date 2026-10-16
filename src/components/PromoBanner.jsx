import React from 'react';

export default function PromoBanner() {
  return (
    <aside aria-label="Pengumuman Promo" className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center sticky top-0 z-50 shadow-sm flex items-center justify-center gap-2">
      <span className="inline-block animate-bounce">🔥</span>
      <span>PROMO BULAN INI: Diskon Pendaftaran Rp 50.000 + Gratis Pendampingan SIM A! Kuota Terbatas!</span>
      <a href="#daftar" className="underline hover:text-amber-200 ml-1">Klaim Promo &rarr;</a>
    </aside>
  );
}
