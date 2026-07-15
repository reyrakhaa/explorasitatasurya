# 🚀 Explorasi Tata Surya

**Petualangan Tata Surya** adalah website edukasi interaktif berbahasa Indonesia yang dirancang untuk membantu anak-anak Sekolah Dasar (SD) mengenal Matahari, planet-planet, dan benda langit lainnya dengan cara yang seru dan menyenangkan.

## ✨ Fitur

- **Materi** - Jelajahi informasi setiap planet lengkap dengan model 3D/360° yang bisa diputar-putar.
- **Simulasi** - Lihat animasi orbit tata surya secara real-time, lengkap dengan kontrol *play/pause*, *zoom*, dan kecepatan orbit. Klik pada planet untuk melihat info singkatnya.
- **Kuis** - Uji pengetahuan tentang tata surya dan kumpulkan bintang sebanyak-banyaknya.
- **Efek suara & musik** - Menambah pengalaman belajar yang lebih hidup.
- **Tampilan ramah anak** - Desain penuh warna dengan animasi lembut dan ikon-ikon menggemaskan.

## 🗂️ Struktur Proyek

```
explorasitatasurya/
├── index.html              # Halaman utama (beranda)
├── pages/
│   ├── menu.html             # Menu pilihan petualangan
│   ├── material.html         # Halaman materi planet
│   ├── simulation.html       # Halaman simulasi orbit tata surya
│   ├── quiz.html              # Halaman kuis
│   ├── information.html       # Halaman informasi/tentang
│   └── test.html
├── css/                     # Berkas gaya (styling)
├── js/                      # Logika & interaktivitas
├── quiz-data/               # Data soal kuis per planet (format JSON)
└── assets/
    ├── background/           # Aset latar belakang
    ├── icon/                 # Ikon-ikon
    ├── planet/                # Aset gambar/model planet
    └── sound/                 # Efek suara & musik
```

## 🛠️ Teknologi

Proyek ini dibangun murni dengan:

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

Tanpa framework maupun proses *build*, sehingga mudah dijalankan langsung di browser.

## ▶️ Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/reyrakhaa/explorasitatasurya.git
   ```
2. Masuk ke folder proyek:
   ```bash
   cd explorasitatasurya
   ```
3. Buka `index.html` langsung di browser, atau jalankan menggunakan server lokal, misalnya:
   ```bash
   npx serve .
   ```
   atau dengan ekstensi **Live Server** pada VS Code.

## 🎯 Tujuan Pembelajaran

Melalui website ini, siswa diharapkan dapat:

- Mengenal nama-nama planet dan urutannya dari Matahari.
- Memahami ciri-ciri khas setiap planet.
- Mempelajari fakta-fakta unik seputar tata surya.
- Menguji pemahaman melalui kuis interaktif.

## 🤝 Kontribusi

Kontribusi, saran, dan laporan bug sangat diterima. Silakan buat *issue* atau *pull request* untuk membantu mengembangkan proyek ini lebih lanjut.

## 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan menyelesaikan tugas akhir.
