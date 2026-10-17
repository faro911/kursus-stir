import React, { useState, useEffect } from 'react';
import { IconWhatsApp } from './Icons';

export default function FormPendaftaran({ selectedPackage, selectedTransmisi }) {
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [transmisi, setTransmisi] = useState('Manual');
  const [paket, setPaket] = useState('Paket Pemula Mahir (10 Jam)');
  const [jadwal, setJadwal] = useState('Pagi (07.00 - 11.00)');
  const [domisili, setDomisili] = useState('');
  const [catatan, setCatatan] = useState('');

  // Sync when prop updates from clicking pricing cards
  useEffect(() => {
    if (selectedPackage) {
      setPaket(selectedPackage);
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (selectedTransmisi) {
      setTransmisi(selectedTransmisi);
    }
  }, [selectedTransmisi]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama.trim() || !wa.trim()) {
      alert('Mohon lengkapi Nama dan Nomor WhatsApp Anda.');
      return;
    }

    const waNumber = '6285103095800';
    const message = `Halo Admin Kursus Mengemudi RAFA Semarang,
Saya ingin mendaftar kursus mobil dengan data berikut:

📝 *FORMULIR PENDAFTARAN SISWA BARU*
• *Nama Lengkap:* ${nama.trim()}
• *Nomor WhatsApp/HP:* ${wa.trim()}
• *Transmisi Pilihan:* ${transmisi}
• *Paket Kursus:* ${paket}
• *Waktu Latihan:* ${jadwal}
• *Domisili:* ${domisili.trim() || '-'}
• *Catatan Tambahan:* ${catatan.trim() || '-'}

Mohon info ketersediaan jadwal terdekat dan konfirmasi pendaftaran. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
  };

  return (
    <section id="daftar" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full inline-block mb-3">
            Formulir Online &bull; Direct WhatsApp
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Daftar Kursus Sekarang & Amankan Jadwal Latihan Anda!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Silakan isi formulir di bawah ini. Saat klik tombol <strong>"Kirim via WhatsApp"</strong>, pesan akan otomatis terformat dan Anda langsung terhubung dengan CS Kursus Mengemudi RAFA.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Nama & No WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="namaInput" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Nama Lengkap Anda <span className="text-red-500">*</span>
                </label>
                <input 
                  id="namaInput"
                  type="text" 
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required 
                  placeholder="Contoh: Budi Santoso" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition"
                />
              </div>

              <div>
                <label htmlFor="waInput" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP Aktif <span className="text-red-500">*</span>
                </label>
                <input 
                  id="waInput"
                  type="tel" 
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  required 
                  placeholder="Contoh: 081234567890" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition"
                />
              </div>
            </div>

            {/* Row 2: Transmisi & Pilihan Paket */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="transmisiSelect" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Pilihan Jenis Transmisi Mobil <span className="text-red-500">*</span>
                </label>
                <select 
                  id="transmisiSelect"
                  value={transmisi}
                  onChange={(e) => setTransmisi(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white transition"
                >
                  <option value="Manual">🚘 Manual</option>
                  <option value="Matic (Automatic)">🚙 Matic (Automatic)</option>
                  <option value="Manual & Matic (Kombinasi)">🚗 Kombinasi (Manual + Matic)</option>
                  <option value="Belum Yakin (Konsultasi Dulu)">🤔 Belum Yakin / Mau Konsultasi</option>
                </select>
              </div>

              <div>
                <label htmlFor="paketSelect" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Pilihan Paket Kursus <span className="text-red-500">*</span>
                </label>
                <select 
                  id="paketSelect"
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white transition font-semibold text-primary-800"
                >
                  <option value="Paket Pemula Mahir (10 Jam)">⭐ Paket Pemula Mahir (10 Jam) - Terpopuler</option>
                  <option value="Paket Lengkap + SIM A">🪪 Paket Mahir + Pendampingan SIM A</option>
                  <option value="Paket Pelancaran (5 Jam)">🚀 Paket Pelancaran & Mental Jalan (5 Jam)</option>
                  <option value="Paket Khusus Jam-Jaman">⏱️ Paket Khusus / Per Jam</option>
                </select>
              </div>
            </div>

            {/* Row 3: Jadwal Preferensi & Domisili */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="jadwalSelect" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Preferensi Waktu Latihan <span className="text-red-500">*</span>
                </label>
                <select 
                  id="jadwalSelect"
                  value={jadwal}
                  onChange={(e) => setJadwal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white transition"
                >
                  <option value="Pagi (07.00 - 11.00)">🌅 Pagi (07.00 - 11.00 WIB)</option>
                  <option value="Siang (11.00 - 14.00)">☀️ Siang (11.00 - 14.00 WIB)</option>
                  <option value="Sore (14.00 - 17.30)">🌇 Sore (14.00 - 17.30 WIB)</option>
                  <option value="Khusus Weekend (Sabtu / Minggu)">📅 Khusus Weekend (Sabtu/Minggu)</option>
                  <option value="Fleksibel (Mengikuti Rekomendasi)">🔄 Fleksibel / Jam Kosong</option>
                </select>
              </div>

              <div>
                <label htmlFor="domisiliInput" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Domisili / Lokasi Anda (Kecamatan / Kelurahan)
                </label>
                <input 
                  id="domisiliInput"
                  type="text" 
                  value={domisili}
                  onChange={(e) => setDomisili(e.target.value)}
                  placeholder="Misal: Sampangan, Gajahmungkur, Bendan Duwur, Manyaran, dll." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition"
                />
              </div>
            </div>

            {/* Row 4: Catatan Tambahan */}
            <div>
              <label htmlFor="catatanInput" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                Catatan / Kondisi Awal Anda (Opsional)
              </label>
              <textarea 
                id="catatanInput"
                rows="2" 
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Contoh: Saya belum pernah pegang setir sama sekali, agak grogi di tanjakan, atau ingin mulai hari Senin depan..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition"
              ></textarea>
            </div>

            {/* Submit Button Direct WA */}
            <div className="pt-3">
              <button 
                type="submit" 
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-600/30 hover:shadow-2xl transition duration-300 flex items-center justify-center gap-3 active:scale-[0.99]"
              >
                <IconWhatsApp className="w-6 h-6 fill-white shrink-0" />
                <span>Kirim Pendaftaran via WhatsApp Sekarang</span>
              </button>
              <p className="text-center text-xs text-slate-500 mt-2.5">
                🔒 Data Anda aman & langsung terkirim ke WhatsApp Customer Care Kursus Mengemudi RAFA.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
