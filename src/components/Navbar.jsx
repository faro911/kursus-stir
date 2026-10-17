import React, { useState } from 'react';
import { IconSteering, IconPhone, IconArrowRight, IconWhatsApp } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-9 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              <IconSteering className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-2xl text-slate-900 tracking-tight">
                  KURSUS STIR <span className="text-primary-700">RAFA</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                Sampangan &bull; Gajahmungkur, Semarang
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 font-medium text-slate-600 text-sm">
            <a href="#keunggulan" className="hover:text-primary-700 transition">Keunggulan</a>
            <a href="#paket" className="hover:text-primary-700 transition">Paket & Biaya</a>
            <a href="#armada" className="hover:text-primary-700 transition">Armada</a>
            <a href="#testimoni" className="hover:text-primary-700 transition">Testimoni</a>
            <a href="#lokasi" className="hover:text-primary-700 transition">Lokasi & Rute</a>
            <a href="#faq" className="hover:text-primary-700 transition">FAQ</a>
          </nav>

          {/* Header CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:085103095800" 
              className="text-slate-600 hover:text-primary-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-100 transition"
            >
              <IconPhone className="w-4 h-4 text-primary-600" />
              0851-0309-5800
            </a>
            <a 
              href="#daftar" 
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm py-2.5 px-5 rounded-xl shadow-md shadow-primary-700/25 hover:shadow-lg transition flex items-center gap-2"
            >
              <span>Daftar Sekarang</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Buka Menu" 
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 transition-all duration-300">
          <a href="#keunggulan" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Keunggulan Kami</a>
          <a href="#paket" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Pilihan Paket & Biaya</a>
          <a href="#armada" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Armada Latihan</a>
          <a href="#testimoni" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Ulasan Siswa</a>
          <a href="#lokasi" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Lokasi Google Maps</a>
          <a href="#faq" onClick={closeMenu} className="block py-2 px-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">FAQ</a>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="#daftar" 
              onClick={closeMenu} 
              className="w-full py-3 bg-primary-700 text-white font-bold text-center rounded-xl shadow-md"
            >
              Isi Formulir Pendaftaran WA
            </a>
            <a 
              href="https://wa.me/6285103095800?text=Halo%20Kursus%20Mengemudi%20RAFA%2C%20saya%20mau%20tanya%20info%20kursus%20stir%20mobil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 bg-emerald-600 text-white font-bold text-center rounded-xl flex items-center justify-center gap-2"
            >
              <IconWhatsApp className="w-5 h-5" />
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
