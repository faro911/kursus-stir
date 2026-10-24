import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <span className="text-primary-500">🚗</span> KURSUS STIR MOBIL THAMRIN SEMARANG
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Lembaga kursus mengemudi mobil terpercaya di pusat kota Semarang. Melayani latihan manual dan matic, instruktur ramah, armada ber-AC dengan dual control safety pedal, serta pendampingan SIM A.
            </p>
            <p className="text-xs text-slate-400">
              📍 Jl. MH Thamrin No. 118, Miroto, Kec. Semarang Tengah, Kota Semarang 50134 (Dekat Simpang Lima).
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#keunggulan" className="hover:text-white transition">Keunggulan Kami</a></li>
              <li><a href="#paket" className="hover:text-white transition">Daftar Paket & Biaya</a></li>
              <li><a href="#armada" className="hover:text-white transition">Armada Kendaraan</a></li>
              <li><a href="#testimoni" className="hover:text-white transition">Ulasan Siswa</a></li>
              <li><a href="#lokasi" className="hover:text-white transition">Peta Lokasi Google Maps</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ Tanya Jawab</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Layanan Kami</h4>
            <ul className="space-y-2 text-xs">
              <li>Kursus Mobil Manual</li>
              <li>Kursus Mobil Matic (Automatic)</li>
              <li>Paket Pemula dari Nol</li>
              <li>Paket Pelancaran Jalan Raya</li>
              <li>Latihan Tanjakan & Parkir Mall</li>
              <li>Pendampingan Ujian SIM A</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 Kursus Stir Mobil Thamrin Semarang. Hak Cipta Dilindungi.</p>
          <p>
            Direktori Resmi Google Maps: <a href="https://maps.app.goo.gl/1pV1uGBezprRAqpKA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline">maps.app.goo.gl/1pV1uGBezprRAqpKA</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
