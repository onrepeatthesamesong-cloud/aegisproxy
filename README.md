# AegisProxy v3.0 — Aplikasi Web Proxy & Network Inspector Lintas Perangkat

Paket ini berisi aplikasi **AegisProxy** yang sudah ditingkatkan menjadi **Progressive Web App (PWA)** layar penuh dengan dukungan offline, penyimpanan pengaturan otomatis (`localStorage`), bilah navigasi bawah khusus layar sentuh HP, serta konfigurasi **Capacitor** untuk kompilasi menjadi file instalasi native **Android (.apk)** maupun **iOS (.ipa)**.

## Struktur Paket
- `index.html` — Antarmuka utama aplikasi responsif (Mobile + Desktop) dengan tombol **Instal App** otomatis.
- `manifest.json` — Konfigurasi instalasi aplikasi mandiri (ikon, layar penuh `standalone`, warna tema).
- `sw.js` — *Service Worker* agar antarmuka aplikasi tetap cepat, stabil, dan dapat dibuka saat offline.
- `icons/` — Ikon aplikasi resolusi tinggi (`192x192`, `512x512`, dan `SVG`).
- `capacitor.config.json` & `package.json` — Konfigurasi siap pakai untuk membungkus aplikasi menjadi file **APK Android**.

## Cara Penggunaan & Instalasi di Perangkat Manapun

### 1. Instal Langsung di HP (Android, iPhone/iPad, HarmonyOS) & PC (Tanpa Build APK)
1. Unggah isi folder ini ke layanan hosting gratis berbasis HTTPS (seperti **GitHub Pages**, **Cloudflare Pages**, **Vercel**, atau **Netlify**).
2. Buka tautannya di browser HP Anda (**Chrome** di Android atau **Safari** di iPhone).
3. Ketuk tombol **"Instal App"** di pojok kanan atas aplikasi (atau pilih *"Tambahkan ke Layar Utama"* / *"Install app"* di menu browser).
4. Ikon **AegisProxy** akan muncul di layar utama HP Anda dan berjalan layaknya aplikasi native tanpa bilah alamat browser.

### 2. Mengubah Paket Ini Menjadi File `.apk` Android (Opsional)
Jika ingin membagikan file mentah `.apk` untuk diinstal langsung ke HP Android:
```bash
npm install
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```
File APK siap instal akan otomatis dihasilkan di `android/app/build/outputs/apk/debug/app-debug.apk`.
