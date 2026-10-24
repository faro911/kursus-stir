import React from 'react';
import { IconExternalLink } from './Icons';

export default function LokasiMap() {
  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-4 py-1.5 rounded-full inline-block">
              Lokasi Strategis Pusat Kota Semarang
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kunjungi Kantor Kami di Jl. MH Thamrin, Semarang Tengah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Berada tepat di pusat kota Semarang (Jl. MH Thamrin No. 118). Sangat dekat dengan Simpang Lima, Paragon Mall, Mall Ciputra, Jl. Pemuda, dan Pandanaran. Akses jalan sangat mudah dijangkau dari segala penjuru kota.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Alamat Kantor:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Jl. MH Thamrin No. 118, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134
                  </p>
                  <p className="text-xs text-slate-400 mt-1">(Dekat Simpang Lima, Paragon Mall, & Pemuda)</p>
                </div>
              </div>

              {/* Jam Buka item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                  🕒
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Jam Operasional Kursus:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    <strong>Buka Setiap Hari:</strong> 06.00 – 21.00 WIB<br />
                    (Paling fleksibel, bisa latihan pagi sebelum kerja atau malam sepulang kantor)
                  </p>
                </div>
              </div>

              {/* Kontak item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">WhatsApp / Telepon:</h4>
                  <a href="tel:085865979050" className="text-xs sm:text-sm text-primary-700 font-bold hover:underline block mt-0.5">
                    0858-6597-9050 / (024) 3515605
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a 
                href="https://maps.app.goo.gl/1pV1uGBezprRAqpKA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
              >
                <IconExternalLink className="w-4 h-4" />
                <span>Buka Petunjuk Arah di Google Maps</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Maps */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-100 relative h-[380px] sm:h-[440px]">
              <iframe 
                title="Peta Lokasi Kursus Stir Mobil Thamrin Semarang"
                src="https://maps.google.com/maps?q=-6.9843329,110.4177506+(Kursus+Stir+Mobil+Thamrin+Semarang)&z=17&output=embed"
                className="w-full h-full border-0" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-md flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 truncate">Kursus Stir Mobil Thamrin - Semarang Tengah</span>
                <a 
                  href="https://maps.app.goo.gl/1pV1uGBezprRAqpKA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-700 font-extrabold hover:underline whitespace-nowrap ml-2"
                >
                  Buka Link Maps &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
