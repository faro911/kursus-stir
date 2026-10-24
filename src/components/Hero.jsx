import React from 'react';
import { IconWhatsApp, IconArrowRight, IconCheck, IconExternalLink } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 shadow-sm mx-auto lg:mx-0">
              <div className="flex text-amber-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="font-bold text-slate-800">4.8 / 5.0</span>
              <span className="text-slate-400">&bull;</span>
              <a 
                href="https://maps.app.goo.gl/1pV1uGBezprRAqpKA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-800 hover:underline flex items-center gap-1"
              >
                Google Maps Thamrin Simpang Lima
                <IconExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Belajar Nyetir Mobil Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 via-primary-600 to-blue-600">Mudah, Tenang, & Cepat Mahir!</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Takut grogi di jalan raya? Tenang! Di <strong>Kursus Stir Mobil Thamrin Semarang</strong>, instruktur kami sabar, berpengalaman, dan ramah. Mobil ber-AC nyaman dilengkapi <strong>pedal ganda (safety dual pedal)</strong> untuk keamanan 100%. Buka setiap hari dari pagi hingga malam!
            </p>

            {/* Key Highlights Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Manual & Matic</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Jam 06.00 - 21.00</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Bisa Dibantu SIM A</span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              <a 
                href="#daftar" 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-primary-700/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
              >
                <span>Daftar Kursus Sekarang</span>
                <IconArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/6285865979050?text=Halo%20Admin%20Kursus%20Stir%20Mobil%20Thamrin%2C%20saya%20ingin%20konsultasi%20jadwal%20dan%20biaya%20kursus%20mobil." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-slate-50 text-emerald-700 border-2 border-emerald-500 font-bold text-base px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                <IconWhatsApp className="w-5 h-5 fill-emerald-600" />
                <span>Tanya Langsung di WA</span>
              </a>
            </div>

            {/* Location quick hint */}
            <p className="text-xs text-slate-500 pt-1">
              📍 Lokasi Pusat Kota: <strong>Jl. MH Thamrin No. 118, Miroto</strong> (Kec. Semarang Tengah, dekat Simpang Lima, Paragon Mall, & Pemuda).
            </p>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>

            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop" 
                alt="Instruktur Kursus Stir Mobil Thamrin membimbing siswa belajar nyetir" 
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-amber-300 font-semibold tracking-wide uppercase">1 Siswa 1 Mobil + 1 Instruktur</p>
                    <p className="text-sm font-bold text-white">Privat & Nyaman Maksimal</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow">
                    Bergaransi
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Dual Pedal Safety */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                🛡️
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fitur Keamanan</p>
                <p className="text-xs sm:text-sm font-extrabold text-slate-800">Pedal Rem Ganda (Dual Pedal)</p>
              </div>
            </div>

            {/* Floating Badge 2: Jam Fleksibel */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                ⏰
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Jam Buka Fleksibel</p>
                <p className="text-xs sm:text-sm font-extrabold text-slate-800">Setiap Hari: 06.00 – 21.00 WIB</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
