# Landing Page Kursus Stir Mobil Monalia Semarang (Vite + React)

Landing page resmi dan profesional untuk lembaga kursus mengemudi **Kursus Stir Mobil Monalia Semarang**, dibangun menggunakan **Vite + React (Non-TypeScript / Pure JavaScript)** yang dirancang **super ringan (ultra-lightweight)**, cepat dimuat di HP, dan terintegrasi dengan Google Maps serta pendaftaran langsung ke WhatsApp.

---

## 📌 Ringkasan Data Bisnis (Sesuai Google Maps)
* **Nama Usaha:** Kursus Stir Mobil Monalia Semarang
* **Tautan Google Maps:** [https://maps.app.goo.gl/R48Va7yMVtBnzzDs8](https://maps.app.goo.gl/R48Va7yMVtBnzzDs8)
* **Koordinat Lokasi:** `-6.9802652, 110.3907786`
* **Alamat:** Jl. Anjasmoro IV No. 21, RT.05/RW.03, Karangayu, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149 *(Dekat Puri Anjasmoro, Madukoro, & Pamularsih)*
* **Nomor Kontak / WhatsApp:** `0881-8799-816` / `(024) 7605320`
* **Rating:** 4.9 / 5.0 ⭐ Ulasan Google Maps
* **Jam Operasional:** Buka Setiap Hari: 08.00 – 17.00 WIB

---

## ⚡ Mengapa Dibuat Seringan Mungkin?
* **Non-TypeScript:** Kode bersih, cepat dimodifikasi tanpa kompilasi tipe data rumit.
* **Zero Icon Dependency Bloat:** Menggunakan komponen SVG inline murni di [`src/components/Icons.jsx`](file:///c:/Users/fathu/Documents/client/kursus_mobil/src/components/Icons.jsx) sehingga tidak perlu mengunduh library icon eksternal yang berat.
* **Ukuran Bundle Sangat Kecil:** Total payload gzipped hanya **~67 kB**! Sangat cepat terbuka di HP.

---

## 📱 Fitur Mobile-First & Direct to WhatsApp

1. **Sticky Bottom Bar di Layar Smartphone:**
   - Tombol telepon kantor langsung (`tel:08818799816`).
   - Tombol cepat loncat ke formulir pendaftaran.
   - Tombol chat WhatsApp instan.
2. **Formulir Pendaftaran Otomatis ke WhatsApp:**
   - Calon siswa mengisi: Nama, Nomor HP, Transmisi (Manual / Matic), Paket Kursus, Waktu Latihan, Domisili, dan Catatan.
   - Saat tombol **"Kirim Pendaftaran via WhatsApp Sekarang"** diklik, pesan otomatis terformat dengan rapi dan langsung membuka WhatsApp CS (`0881-8799-816`).
3. **Pilihan Paket Interaktif (Manual vs Matic):**
   - Toggle switcher Manual / Matic yang memperbarui harga secara reaktif.
   - Tombol "Pilih Paket" otomatis menyinkronkan paket ke formulir dan menggulirkan halaman dengan halus ke input nama.
4. **Keamanan & Kredibilitas:**
   - Highlight instruktur sabar telaten (ramah wanita & pemula), fitur rem ganda instruktur (*Dual Control Safety Pedal*), mobil full AC, review siswa, alur 4 langkah belajar, dan FAQ akordeon interaktif.
5. **Google Maps Tersemat:**
   - Embed iframe peta Semarang Barat / Anjasmoro yang responsif + tombol direct link ke rute Maps resmi.

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
