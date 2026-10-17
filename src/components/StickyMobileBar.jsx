import React from 'react';
import { IconPhone, IconWhatsApp } from './Icons';

export default function StickyMobileBar() {
  return (
    <aside aria-label="Aksi Cepat Mobile" className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <a 
          href="tel:085103095800" 
          className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200"
          aria-label="Telepon Kantor"
        >
          <IconPhone className="w-5 h-5 text-primary-700" />
        </a>

        {/* Quick Scroll to Form */}
        <a 
          href="#daftar" 
          className="flex-1 py-3 px-3 bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs sm:text-sm rounded-xl text-center shadow-md flex items-center justify-center gap-1.5"
        >
          <span>Daftar Form</span>
        </a>

        {/* Direct WA Button */}
        <a 
          href="https://wa.me/6285103095800?text=Halo%20Kursus%20Mengemudi%20RAFA%20Semarang%2C%20saya%20mau%20daftar%20kursus%20mobil." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl text-center shadow-md flex items-center justify-center gap-1.5"
        >
          <IconWhatsApp className="w-4 h-4 fill-white" />
          <span>Chat WA</span>
        </a>
      </div>
    </aside>
  );
}
