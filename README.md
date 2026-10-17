# Landing Page Kursus Mengemudi RAFA Semarang (Vite + React)

Landing page resmi dan profesional untuk lembaga kursus mengemudi **Kursus Mengemudi RAFA Semarang (Cabang Sampangan)**, dibangun menggunakan **Vite + React (Non-TypeScript / Pure JavaScript)** yang dirancang **super ringan (ultra-lightweight)**, cepat dimuat di HP, dan terintegrasi dengan Google Maps serta pendaftaran langsung ke WhatsApp.

---

## 📌 Ringkasan Data Bisnis (Sesuai Google Maps)
* **Nama Usaha:** Kursus Mengemudi RAFA Semarang
* **Tautan Google Maps:** [https://maps.app.goo.gl/xH19AuL9nmJigimv8](https://maps.app.goo.gl/xH19AuL9nmJigimv8)
* **Koordinat Lokasi:** `-7.0149283, 110.3898932`
* **Alamat:** Jl. Menoreh Raya No. 38, Sampangan, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50232 *(Dekat kampus UNNES Sekaran, UNIKA Soegijapranata Bendan Dhuwur, AKPOL & Manyaran)*
* **Nomor Kontak / WhatsApp:** `0851-0309-5800` (`+62 851-0309-5800`)
* **Rating:** 4.9 / 5.0 ⭐ Ulasan Google Maps
* **Jam Operasional:** Senin – Sabtu: 07.00 – 17.00 WIB (Hari Minggu / di luar jam operasional konfirmasi via WA)

---

## ⚡ Mengapa Dibuat Seringan Mungkin?
* **Non-TypeScript:** Kode bersih, cepat dimodifikasi tanpa kompilasi tipe data rumit.
* **Zero Icon Dependency Bloat:** Menggunakan komponen SVG inline murni di [`src/components/Icons.jsx`](file:///c:/Users/fathu/Documents/client/kursus_mobil/src/components/Icons.jsx) sehingga tidak perlu mengunduh library icon eksternal yang berat.
* **Ukuran Bundle Sangat Kecil:**
  - Total payload gzipped hanya **~67 kB**! Sangat cepat terbuka di HP meski sinyal calon klien sedang lambat.

---

## 📱 Fitur Mobile-First & Direct to WhatsApp

1. **Sticky Bottom Bar di Layar Smartphone:**
   - Tombol telepon kantor langsung (`tel:085103095800`).
   - Tombol cepat loncat ke formulir pendaftaran.
   - Tombol chat WhatsApp instan.
2. **Formulir Pendaftaran Otomatis ke WhatsApp:**
   - Calon siswa mengisi: Nama, Nomor HP, Transmisi (Manual / Matic), Paket Kursus, Waktu Latihan, Domisili, dan Catatan.
   - Saat tombol **"Kirim Pendaftaran via WhatsApp Sekarang"** diklik, pesan otomatis terformat dengan rapi dan langsung membuka WhatsApp CS (`0851-0309-5800`).
3. **Pilihan Paket Interaktif (Manual vs Matic):**
   - Toggle switcher Manual / Matic yang memperbarui harga secara reaktif.
   - Tombol "Pilih Paket" otomatis menyinkronkan paket ke formulir dan menggulirkan halaman dengan halus ke input nama.
4. **Keamanan & Kredibilitas:**
   - Highlight fitur rem ganda instruktur (*Dual Control Safety Pedal*), mobil full AC, review siswa, alur 4 langkah belajar, dan FAQ akordeon interaktif.
5. **Google Maps Tersemat:**
   - Embed iframe peta Sampangan / Semarang Selatan yang responsif + tombol direct link ke rute Maps resmi.

---

## 🛠️ Cara Menjalankan Project

### 1. Mode Development (Jalankan di Laptop/PC)
```powershell
npm run dev
```
Buka browser di: `http://localhost:5173`

### 2. Build untuk Produksi
```powershell
npm run build
```
File hasil build siap tayang berada di dalam folder `dist/`.

### 3. Deploy Otomatis via GitHub
Setiap kali Anda push update ke branch `main`, layanan seperti **Vercel** atau **Netlify** akan otomatis memperbarui situs secara langsung.
