import React, { useState } from 'react';

const faqs = [
  {
    q: 'Saya sama sekali belum pernah pegang setir & penakut, apakah bisa?',
    a: 'Sangat bisa! Sebagian besar siswa kami (lebih dari 70%) adalah pemula dari nol dan awalnya merasa cemas atau takut. Instruktur kami sangat ramah, sabar, dan tidak pernah memarahi siswa. Mobil kami juga dilengkapi pedal rem ganda darurat di sisi instruktur sehingga sangat aman 100%.'
  },
  {
    q: 'Apakah 1 mobil diisi banyak siswa bergantian?',
    a: 'Tidak! Di Kursus Mengemudi RAFA sistemnya adalah Privat (1 Mobil = 1 Siswa + 1 Instruktur). Waktu latihan Anda murni fokus untuk Anda tanpa harus menunggu giliran orang lain.'
  },
  {
    q: 'Apakah jadwal latihannya bisa fleksibel?',
    a: 'Bisa sekali! Anda dapat memilih jadwal pagi, siang, sore, atau akhir pekan (Sabtu & Minggu). Jadwal juga bisa disesuaikan secara dinamis setiap pertemuannya bersama instruktur sesuai waktu luang Anda.'
  },
  {
    q: 'Bagaimana dengan bantuan pengurusan SIM A?',
    a: 'Kami menyediakan paket All-in yang mencakup pendampingan pembuatan SIM A resmi. Kami akan membimbing dan mendampingi Anda mulai dari kelengkapan berkas, pembekalan ujian teori, simulasi ujian praktek di lapangan, sampai SIM A Anda resmi terbit.'
  },
  {
    q: 'Apakah diajarkan teknik tanjakan dan parkir yang sulit?',
    a: 'Pasti! Mengingat topografi Semarang yang berbukit (Sampangan, Menoreh, Gombel, Manyaran), teknik stop & go di tanjakan curam tanpa melorot menjadi materi wajib kami. Selain itu, kami ajarkan rumus mudah parkir paralel, parkir seri mall, dan cara putar balik di jalan sempit.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Pertanyaan yang Sering Diajukan Calon Siswa
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <button 
                  type="button" 
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex justify-between items-center font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <span className={`text-primary-700 text-xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
