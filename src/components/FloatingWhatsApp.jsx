import React from 'react';
import { IconWhatsApp } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Kontak WhatsApp Langsung" className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a 
        href="https://wa.me/6282319220698?text=Halo%20Admin%20Kursus%20Stir%20Merdeka%2C%20saya%20ingin%20tanya%20info%20pendaftaran%20kursus%20mobil." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition duration-300"
        aria-label="Chat WhatsApp Admin"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white pulse-badge"></div>
        <IconWhatsApp className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm px-0 group-hover:px-2">
          Chat CS Sekarang
        </span>
      </a>
    </aside>
  );
}
