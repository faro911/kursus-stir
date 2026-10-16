# Landing Page Kursus Stir Merdeka - Semarang (Vite + React)

Landing page resmi dan profesional untuk lembaga kursus mengemudi **Kursus Stir Merdeka Semarang**, dibangun menggunakan **Vite + React (Non-TypeScript / Pure JavaScript)** yang dirancang **super ringan (ultra-lightweight)**, cepat dimuat di HP, dan terintegrasi dengan Google Maps serta pendaftaran langsung ke WhatsApp.

---

## 📌 Ringkasan Data Bisnis (Sesuai Google Maps)
* **Nama Usaha:** Kursus Stir Merdeka Semarang
* **Tautan Google Maps:** [https://maps.app.goo.gl/6Z4XY9RzRAHzjAqQ9](https://maps.app.goo.gl/6Z4XY9RzRAHzjAqQ9)
* **Koordinat Lokasi:** `-7.002762, 110.3812171`
* **Alamat:** Ruko Grand Manyaran, Jl. Abdulrahman Saleh No. 1, Manyaran, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50147 *(Dekat kawasan Ringin Telu, Kalipancur, Sampangan & Ngaliyan)*
* **Nomor Kontak / WhatsApp:** `0823-1922-0698` (`+62 823-1922-0698`)
* **Rating:** 4.9 / 5.0 ⭐ Ulasan Google Maps
* **Jam Operasional:** Buka Setiap Hari (Senin – Sabtu: 08.00 – 18.00 WIB | Minggu: 07.30 – 17.00 WIB)

---

## ⚡ Mengapa Dibuat Seringan Mungkin?
* **Non-TypeScript:** Kode bersih, cepat dimodifikasi tanpa kompilasi tipe data rumit.
* **Zero Icon Dependency Bloat:** Menggunakan komponen SVG inline murni di [`src/components/Icons.jsx`](file:///c:/Users/fathu/Documents/client/kursus_mobil/src/components/Icons.jsx) sehingga tidak perlu mengunduh library icon eksternal yang berat.
* **Ukuran Bundle Sangat Kecil:**
  - `dist/index.html`: ~2.3 kB (gzip: 1.1 kB)
  - `dist/assets/*.css`: ~35 kB (gzip: 6.4 kB)
  - `dist/assets/*.js`: ~202 kB (gzip: ~60 kB)
  - Total payload gzipped hanya **~67 kB**! Sangat cepat terbuka di HP meski sinyal calon klien sedang lambat.

---

## 📱 Fitur Mobile-First & Direct to WhatsApp

1. **Sticky Bottom Bar di Layar Smartphone:**
   - Tombol telepon kantor langsung (`tel:082319220698`).
   - Tombol cepat loncat ke formulir pendaftaran.
   - Tombol chat WhatsApp instan.
2. **Formulir Pendaftaran Otomatis ke WhatsApp:**
   - Calon siswa mengisi: Nama, Nomor HP, Transmisi (Manual / Matic), Paket Kursus, Waktu Latihan, Domisili, dan Catatan.
   - Saat tombol **"Kirim Pendaftaran via WhatsApp Sekarang"** diklik, pesan otomatis terformat dengan rapi dan langsung membuka WhatsApp CS (`0823-1922-0698`).
3. **Pilihan Paket Interaktif (Manual vs Matic):**
   - Toggle switcher Manual / Matic yang memperbarui harga secara reaktif.
   - Tombol "Pilih Paket" otomatis menyinkronkan paket ke formulir dan menggulirkan halaman dengan halus ke input nama.
4. **Keamanan & Kredibilitas:**
   - Highlight fitur rem ganda instruktur (*Dual Control Safety Pedal*), mobil full AC, review siswa, alur 4 langkah belajar, dan FAQ akordeon interaktif.
5. **Google Maps Tersemat:**
   - Embed iframe peta Manyaran / Semarang Barat yang responsif + tombol direct link ke rute Maps resmi.

---

## 📂 Struktur Project

```text
kursus_mobil/
├── index.html                  # Entry point HTML (Google Fonts & SEO Meta)
├── package.json                # Dependensi Vite, React, Tailwind CSS
├── postcss.config.js           # Konfigurasi PostCSS
├── tailwind.config.js          # Konfigurasi Tailwind CSS
├── vite.config.js              # Konfigurasi Vite
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Komponen utama & state management
    ├── index.css               # Directive Tailwind & styling
    └── components/
        ├── Icons.jsx           # SVG icons ringan (zero dependency)
        ├── PromoBanner.jsx     # Banner promo berjalan di atas
        ├── Navbar.jsx          # Navigasi desktop & drawer mobile
        ├── Hero.jsx            # Headline, rating maps, CTA, foto instruktur
        ├── StatsBar.jsx        # Statistik siswa lulus & ulasan
        ├── Keunggulan.jsx      # 6 kartu keunggulan kursus
        ├── AlurBelajar.jsx     # 4 langkah alur pelatihan
        ├── PaketBiaya.jsx      # Tabel paket & harga interaktif (Manual/Matic)
        ├── Armada.jsx          # Showcase kendaraan latihan
        ├── Testimoni.jsx       # Ulasan siswa
        ├── FormPendaftaran.jsx # Form registrasi direct to WhatsApp
        ├── LokasiMap.jsx       # Peta Google Maps Manyaran Semarang
        ├── Faq.jsx             # Tanya jawab akordeon
        ├── Footer.jsx          # Footer & copyright
        ├── FloatingWhatsApp.jsx# Tombol chat WA melayang
        └── StickyMobileBar.jsx # Bilah aksi cepat bawah layar HP
```

---

## 🛠️ Cara Menjalankan Project

### 1. Mode Development (Jalankan di Laptop/PC)
```powershell
npm run dev
```
Buka browser di: `http://localhost:3000`

### 2. Build untuk Produksi
```powershell
npm run build
```
File hasil build siap tayang berada di dalam folder `dist/`.

### 3. Preview Hasil Build
```powershell
npm run preview
```
Buka di browser untuk menguji performa produksi.

---

## 🌐 Cara Deploy / Online-kan Gratis
Folder `dist/` hasil `npm run build` bisa langsung diunggah ke:
* **Vercel / Netlify:** Cukup hubungkan repo GitHub atau drag-and-drop folder `dist/` ke [Netlify Drop](https://app.netlify.com/drop).
* **cPanel Hosting:** Unggah seluruh isi dalam folder `dist/` ke `public_html` domain Anda.
