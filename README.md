# AegisProxy v3.1 — Aplikasi Web Proxy & Network Inspector Stabil (Offline & Online Ready)

Paket ini adalah versi perbaikan menyeluruh dari **AegisProxy** agar berjalan **100% stabil dan responsif** baik saat di-hosting online (GitHub Pages, Vercel, Netlify, Cloudflare Pages), dijalankan lewat server lokal, maupun dibuka langsung secara offline (`file://`) di Android, iPhone/iPad, dan PC.

## Perbaikan Utama pada v3.1
1. **Event Delegation & Safe Initialization**: Semua tombol tetap berfungsi normal meskipun CDN eksternal (Tailwind CSS / Lucide Icons) lambat dimuat atau sedang dalam kondisi offline.
2. **Perbaikan Iframe Sandboxed Bridge**: Menambahkan izin `allow-scripts` secara terkontrol pada `iframe` serta mekanisme sanitasi atribut `onclick`/`onload` sehingga klik tautan di dalam halaman hasil proxy (`AEGIS_NAVIGATE`) benar-benar bisa dipencet dan langsung berpindah halaman!
3. **Resilient Fallback CSS & Offline Icons**: Dilengkapi CSS bawaan (*fallback stylesheet*) sehingga tampilan tetap rapi dan tombol tetap terbaca meski tanpa internet.
4. **Input URL Fleksibel**: Menggunakan `type="text"` dengan `inputmode="url"` agar mengetik domain tanpa `https://` (misalnya `wikipedia.org`) tidak tertahan validasi HTML5 bawaan browser HP.
5. **Multi-Relay dengan Timeout & Auto-Fallback**: Mendukung 3 jalur relay publik (AllOrigins, CodeTabs, CorsProxy) dengan pemulihan otomatis ke Hybrid Sandbox jika situs tujuan memblokir CORS.

## Cara Menjalankan
- **Langsung di Browser / HP**: Unggah seluruh isi folder ke hosting HTTPS (seperti GitHub Pages / Netlify / Vercel) atau jalankan `npx serve .` lalu buka di browser dan pilih **"Instal App"**.
- **Buka Lokal Tanpa Server**: Klik dua kali `index.html` — seluruh fitur UI dan mode Sandbox langsung aktif tanpa macet.
