// Data statis materi & kuis Tata Surya (tidak butuh backend/database)
window.PLANET_DATA = [
  {
    "id": "matahari",
    "name": "Matahari",
    "type": "star",
    "color": "#FFB93D",
    "color2": "#FF6B35",
    "texture": "../assets/planet/matahari.jpg",
    "tagline": "Raja Tata Surya yang bersinar terang",
    "diameter": "1.392.700 km",
    "distance": "Pusat Tata Surya",
    "moons": 0,
    "rotation": "25 - 35 hari (berbeda di tiap bagian)",
    "revolution": "-",
    "desc": "Matahari adalah bintang raksasa yang menjadi pusat Tata Surya kita. Semua planet, termasuk Bumi, berputar mengelilinginya. Matahari terbuat dari gas hidrogen dan helium yang sangat panas.",
    "facts": [
      "Suhu permukaan Matahari sekitar 5.500°C, tapi intinya bisa mencapai 15 juta °C!",
      "Matahari sudah bersinar selama kurang lebih 4,6 miliar tahun.",
      "Cahaya Matahari butuh waktu sekitar 8 menit untuk sampai ke Bumi.",
      "Matahari sebenarnya adalah bintang, bukan planet."
    ]
  },
  {
    "id": "merkurius",
    "name": "Merkurius",
    "type": "planet",
    "order": 1,
    "color": "#B7B0A6",
    "color2": "#8D6E63",
    "texture": "../assets/planet/merkurius.jpg",
    "tagline": "Si kecil pemberani yang paling dekat Matahari",
    "diameter": "4.879 km",
    "distance": "58 juta km",
    "moons": 0,
    "rotation": "59 hari Bumi",
    "revolution": "88 hari Bumi",
    "desc": "Merkurius adalah planet terkecil sekaligus paling dekat dengan Matahari. Karena tidak punya selimut udara (atmosfer) yang tebal, suhunya bisa sangat panas di siang hari dan sangat dingin di malam hari.",
    "facts": [
      "Merkurius tidak punya satelit sama sekali.",
      "Permukaannya penuh kawah, mirip seperti Bulan kita.",
      "Satu tahun di Merkurius hanya 88 hari Bumi, tapi satu harinya sama dengan 59 hari Bumi!",
      "Suhu siang hari bisa mencapai 430°C, malamnya bisa -180°C."
    ]
  },
  {
    "id": "venus",
    "name": "Venus",
    "type": "planet",
    "order": 2,
    "color": "#E8C384",
    "color2": "#D9A441",
    "texture": "../assets/planet/venus.jpg",
    "tagline": "Si cantik berselimut awan tebal",
    "diameter": "12.104 km",
    "distance": "108 juta km",
    "moons": 0,
    "rotation": "243 hari Bumi (berputar terbalik)",
    "revolution": "225 hari Bumi",
    "desc": "Venus sering disebut \"Bintang Kejora\" karena bersinar terang di langit senja. Venus tertutup awan tebal gas karbon dioksida yang membuatnya menjadi planet paling panas di Tata Surya.",
    "facts": [
      "Venus adalah planet terpanas, suhunya bisa mencapai 470°C.",
      "Venus berputar terbalik dibanding kebanyakan planet lain.",
      "Sehari di Venus lebih lama daripada satu tahunnya!",
      "Awan Venus mengandung asam yang sangat berbahaya."
    ]
  },
  {
    "id": "bumi",
    "name": "Bumi",
    "type": "planet",
    "order": 3,
    "color": "#3F8CDB",
    "color2": "#4CAF50",
    "texture": "../assets/planet/bumi.jpg",
    "tagline": "Rumah kita satu-satunya di alam semesta",
    "diameter": "12.742 km",
    "distance": "150 juta km",
    "moons": 1,
    "rotation": "24 jam",
    "revolution": "365 hari",
    "desc": "Bumi adalah rumah bagi kita semua! Bumi adalah satu-satunya planet yang diketahui memiliki kehidupan, dengan air, udara, dan suhu yang pas untuk manusia, hewan, dan tumbuhan.",
    "facts": [
      "Sekitar 71% permukaan Bumi tertutup air.",
      "Bumi punya satu satelit alami, yaitu Bulan.",
      "Atmosfer Bumi melindungi kita dari sinar berbahaya Matahari.",
      "Bumi adalah planet ketiga dari Matahari."
    ]
  },
  {
    "id": "mars",
    "name": "Mars",
    "type": "planet",
    "order": 4,
    "color": "#C1440E",
    "color2": "#8B2E0E",
    "texture": "../assets/planet/mars.jpg",
    "tagline": "Si Planet Merah yang misterius",
    "diameter": "6.779 km",
    "distance": "228 juta km",
    "moons": 2,
    "rotation": "24,6 jam",
    "revolution": "687 hari Bumi",
    "desc": "Mars dijuluki Planet Merah karena permukaannya berwarna kemerahan akibat banyaknya karat besi di tanahnya. Mars punya gunung tertinggi dan lembah terbesar di Tata Surya.",
    "facts": [
      "Mars punya dua satelit kecil bernama Phobos dan Deimos.",
      "Olympus Mons di Mars adalah gunung tertinggi di Tata Surya.",
      "Ilmuwan menduga dulu Mars pernah memiliki air mengalir.",
      "Satu hari di Mars hampir sama dengan satu hari di Bumi."
    ]
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "type": "planet",
    "order": 5,
    "color": "#D8A46E",
    "color2": "#B97A3E",
    "texture": "../assets/planet/jupiter.jpg",
    "tagline": "Raksasa gas terbesar di Tata Surya",
    "diameter": "139.820 km",
    "distance": "778 juta km",
    "moons": 95,
    "rotation": "10 jam",
    "revolution": "12 tahun Bumi",
    "desc": "Jupiter adalah planet terbesar di Tata Surya! Jupiter adalah bola raksasa yang terbuat dari gas, dengan badai raksasa berwarna merah yang disebut Bintik Merah Besar.",
    "facts": [
      "Jupiter memiliki lebih dari 90 satelit yang diketahui.",
      "Bintik Merah Besar di Jupiter adalah badai yang sudah berlangsung ratusan tahun.",
      "Jupiter berputar sangat cepat, satu hari hanya 10 jam.",
      "Jupiter begitu besar hingga semua planet lain bisa muat di dalamnya."
    ]
  },
  {
    "id": "saturnus",
    "name": "Saturnus",
    "type": "planet",
    "order": 6,
    "color": "#E3C88A",
    "color2": "#C7A15E",
    "texture": "../assets/planet/saturnus.jpg",
    "tagline": "Si cantik bercincin megah",
    "diameter": "116.460 km",
    "distance": "1,4 miliar km",
    "moons": 146,
    "rotation": "10,7 jam",
    "revolution": "29 tahun Bumi",
    "desc": "Saturnus terkenal dengan cincin indahnya yang terbuat dari jutaan bongkahan es dan batu. Saturnus adalah planet paling ringan, saking ringannya ia bisa mengapung jika ada kolam air yang cukup besar!",
    "facts": [
      "Cincin Saturnus terbuat dari es dan batu, bukan benda padat utuh.",
      "Saturnus punya lebih dari 140 satelit.",
      "Saturnus adalah planet paling ringan di Tata Surya.",
      "Warna kuning pucat Saturnus berasal dari awan amonia."
    ]
  },
  {
    "id": "uranus",
    "name": "Uranus",
    "type": "planet",
    "order": 7,
    "color": "#8FE3D9",
    "color2": "#4FB8AC",
    "texture": "../assets/planet/uranus.jpg",
    "tagline": "Si unik yang berputar menyamping",
    "diameter": "50.724 km",
    "distance": "2,9 miliar km",
    "moons": 27,
    "rotation": "17 jam (miring 98°)",
    "revolution": "84 tahun Bumi",
    "desc": "Uranus adalah planet es raksasa berwarna biru kehijauan. Uniknya, Uranus berputar menyamping seperti bola yang menggelinding, tidak seperti planet lain yang berputar tegak.",
    "facts": [
      "Uranus berputar miring 98 derajat, seperti menggelinding.",
      "Warna biru kehijauan Uranus berasal dari gas metana.",
      "Uranus memiliki cincin tipis yang sulit terlihat.",
      "Satu tahun di Uranus sama dengan 84 tahun Bumi."
    ]
  },
  {
    "id": "neptunus",
    "name": "Neptunus",
    "type": "planet",
    "order": 8,
    "color": "#3A5FCD",
    "color2": "#1E3A8A",
    "texture": "../assets/planet/neptunus.jpg",
    "tagline": "Si biru tua yang paling jauh dan berangin kencang",
    "diameter": "49.244 km",
    "distance": "4,5 miliar km",
    "moons": 16,
    "rotation": "16 jam",
    "revolution": "165 tahun Bumi",
    "desc": "Neptunus adalah planet terjauh dari Matahari. Warnanya biru tua yang indah, namun anginnya adalah yang paling kencang di seluruh Tata Surya, bisa mencapai 2.100 km/jam!",
    "facts": [
      "Angin di Neptunus adalah yang tercepat di Tata Surya.",
      "Neptunus butuh 165 tahun Bumi untuk mengelilingi Matahari satu kali.",
      "Warna biru Neptunus berasal dari gas metana di atmosfernya.",
      "Neptunus ditemukan lewat perhitungan matematika sebelum benar-benar terlihat teleskop."
    ]
  }
];

window.QUIZ_DATA = {
  "merkurius": [
    {
      "q": "Planet apa yang letaknya paling dekat dengan Matahari?",
      "o": [
        "Venus",
        "Merkurius",
        "Bumi",
        "Mars"
      ],
      "a": 1,
      "e": "Merkurius adalah planet pertama dari Matahari, jaraknya sekitar 58 juta km."
    },
    {
      "q": "Berapa jumlah satelit alami Merkurius?",
      "o": [
        "0",
        "1",
        "2",
        "3"
      ],
      "a": 0,
      "e": "Merkurius tidak memiliki satelit alami sama sekali."
    },
    {
      "q": "Merkurius dikenal sebagai planet apa di Tata Surya?",
      "o": [
        "Terbesar",
        "Terpanas",
        "Terkecil",
        "Terjauh"
      ],
      "a": 2,
      "e": "Merkurius adalah planet terkecil di Tata Surya, diameternya hanya 4.879 km."
    },
    {
      "q": "Berapa lama Merkurius mengelilingi Matahari (1 tahun Merkurius)?",
      "o": [
        "88 hari",
        "225 hari",
        "365 hari",
        "687 hari"
      ],
      "a": 0,
      "e": "Merkurius mengelilingi Matahari dalam waktu 88 hari Bumi saja."
    },
    {
      "q": "Berapa lama Merkurius berputar pada porosnya (1 hari Merkurius)?",
      "o": [
        "24 jam",
        "59 hari",
        "243 hari",
        "10 jam"
      ],
      "a": 1,
      "e": "Satu hari di Merkurius sama dengan 59 hari Bumi, jauh lebih lama dari tahunnya!"
    },
    {
      "q": "Mengapa suhu Merkurius sangat ekstrem antara siang dan malam?",
      "o": [
        "Tidak punya atmosfer tebal",
        "Terlalu jauh dari Matahari",
        "Terbuat dari es",
        "Berputar sangat cepat"
      ],
      "a": 0,
      "e": "Tanpa atmosfer tebal, panas Matahari tidak bisa tersimpan sehingga suhu berubah drastis."
    },
    {
      "q": "Permukaan Merkurius penuh dengan kawah, mirip seperti benda langit apa?",
      "o": [
        "Matahari",
        "Bulan",
        "Cincin Saturnus",
        "Awan Venus"
      ],
      "a": 1,
      "e": "Permukaan Merkurius yang berkawah-kawah sangat mirip dengan permukaan Bulan."
    },
    {
      "q": "Merkurius adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Pertama",
        "Kedua",
        "Ketiga",
        "Keempat"
      ],
      "a": 0,
      "e": "Merkurius berada di urutan pertama, paling dekat dengan Matahari."
    },
    {
      "q": "Berapa suhu tertinggi yang bisa dicapai permukaan Merkurius di siang hari?",
      "o": [
        "Sekitar 100°C",
        "Sekitar 250°C",
        "Sekitar 430°C",
        "Sekitar 30°C"
      ],
      "a": 2,
      "e": "Di siang hari suhu Merkurius bisa mencapai sekitar 430°C, sangat panas!"
    },
    {
      "q": "Berapa perkiraan diameter Merkurius?",
      "o": [
        "4.879 km",
        "12.742 km",
        "139.820 km",
        "6.779 km"
      ],
      "a": 0,
      "e": "Diameter Merkurius sekitar 4.879 km, menjadikannya planet terkecil."
    }
  ],
  "venus": [
    {
      "q": "Venus sering dijuluki sebagai bintang apa?",
      "o": [
        "Bintang Utara",
        "Bintang Kejora",
        "Bintang Jatuh",
        "Bintang Kutub"
      ],
      "a": 1,
      "e": "Venus disebut Bintang Kejora karena tampak sangat terang di langit senja dan pagi."
    },
    {
      "q": "Apa yang membuat Venus menjadi planet terpanas di Tata Surya?",
      "o": [
        "Jaraknya paling dekat Matahari",
        "Efek rumah kaca dari awan tebal",
        "Terbuat dari api",
        "Ukurannya sangat besar"
      ],
      "a": 1,
      "e": "Awan tebal karbon dioksida di Venus menjebak panas, membuatnya lebih panas dari Merkurius."
    },
    {
      "q": "Bagaimana arah rotasi Venus dibanding kebanyakan planet lain?",
      "o": [
        "Sama saja",
        "Berputar terbalik",
        "Tidak berputar",
        "Berputar sangat cepat"
      ],
      "a": 1,
      "e": "Venus berputar terbalik (retrograde) dibanding kebanyakan planet lain di Tata Surya."
    },
    {
      "q": "Berapa jumlah satelit alami yang dimiliki Venus?",
      "o": [
        "0",
        "1",
        "2",
        "4"
      ],
      "a": 0,
      "e": "Venus tidak memiliki satelit alami sama sekali, sama seperti Merkurius."
    },
    {
      "q": "Manakah yang benar tentang sehari dan setahun di Venus?",
      "o": [
        "Setahun lebih lama dari sehari",
        "Sehari lebih lama dari setahun",
        "Sama panjang",
        "Venus tidak punya hari"
      ],
      "a": 1,
      "e": "Uniknya, satu hari di Venus (243 hari Bumi) lebih lama dari satu tahunnya (225 hari Bumi)!"
    },
    {
      "q": "Gas apa yang paling banyak menyelimuti atmosfer Venus?",
      "o": [
        "Oksigen",
        "Nitrogen",
        "Karbon dioksida",
        "Metana"
      ],
      "a": 2,
      "e": "Atmosfer Venus didominasi oleh gas karbon dioksida yang tebal."
    },
    {
      "q": "Berapa perkiraan suhu permukaan Venus?",
      "o": [
        "Sekitar 100°C",
        "Sekitar 470°C",
        "Sekitar 20°C",
        "Sekitar -50°C"
      ],
      "a": 1,
      "e": "Suhu permukaan Venus bisa mencapai sekitar 470°C, terpanas di Tata Surya."
    },
    {
      "q": "Venus adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Pertama",
        "Kedua",
        "Ketiga",
        "Keempat"
      ],
      "a": 1,
      "e": "Venus berada di urutan kedua dari Matahari, setelah Merkurius."
    },
    {
      "q": "Apa bahaya yang terkandung dalam awan Venus?",
      "o": [
        "Air murni",
        "Asam berbahaya",
        "Debu emas",
        "Salju"
      ],
      "a": 1,
      "e": "Awan Venus mengandung asam sulfat yang sangat berbahaya bagi makhluk hidup."
    },
    {
      "q": "Berapa jarak rata-rata Venus dari Matahari?",
      "o": [
        "58 juta km",
        "108 juta km",
        "150 juta km",
        "228 juta km"
      ],
      "a": 1,
      "e": "Venus berjarak sekitar 108 juta km dari Matahari."
    }
  ],
  "bumi": [
    {
      "q": "Berapa persen permukaan Bumi yang tertutup air?",
      "o": [
        "Sekitar 30%",
        "Sekitar 50%",
        "Sekitar 71%",
        "Sekitar 90%"
      ],
      "a": 2,
      "e": "Sekitar 71% permukaan Bumi tertutup oleh air, sisanya daratan."
    },
    {
      "q": "Apa nama satelit alami Bumi?",
      "o": [
        "Bulan",
        "Titan",
        "Europa",
        "Phobos"
      ],
      "a": 0,
      "e": "Satelit alami Bumi bernama Bulan, dan hanya ada satu."
    },
    {
      "q": "Mengapa Bumi adalah satu-satunya planet yang diketahui memiliki kehidupan?",
      "o": [
        "Paling besar",
        "Punya cincin indah",
        "Punya air, udara, dan suhu yang pas",
        "Paling dekat Matahari"
      ],
      "a": 2,
      "e": "Kombinasi air, udara (atmosfer), dan suhu yang sesuai membuat Bumi mendukung kehidupan."
    },
    {
      "q": "Berapa lama Bumi berputar pada porosnya (1 hari)?",
      "o": [
        "24 jam",
        "12 jam",
        "48 jam",
        "365 hari"
      ],
      "a": 0,
      "e": "Bumi berputar pada porosnya selama 24 jam, itulah satu hari."
    },
    {
      "q": "Berapa lama Bumi mengelilingi Matahari (1 tahun)?",
      "o": [
        "88 hari",
        "225 hari",
        "365 hari",
        "687 hari"
      ],
      "a": 2,
      "e": "Bumi membutuhkan waktu sekitar 365 hari untuk mengelilingi Matahari satu kali."
    },
    {
      "q": "Apa fungsi atmosfer bagi Bumi?",
      "o": [
        "Membuat Bumi lebih berat",
        "Melindungi dari sinar berbahaya Matahari",
        "Membuat Bumi berputar",
        "Menambah gravitasi"
      ],
      "a": 1,
      "e": "Atmosfer melindungi kehidupan di Bumi dari radiasi berbahaya dan menjaga suhu tetap stabil."
    },
    {
      "q": "Bumi adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Kedua",
        "Ketiga",
        "Keempat",
        "Kelima"
      ],
      "a": 1,
      "e": "Bumi berada di urutan ketiga dari Matahari."
    },
    {
      "q": "Berapa jarak rata-rata Bumi dari Matahari?",
      "o": [
        "108 juta km",
        "150 juta km",
        "228 juta km",
        "58 juta km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Bumi ke Matahari adalah sekitar 150 juta km."
    },
    {
      "q": "Warna Bumi jika dilihat dari luar angkasa didominasi warna apa?",
      "o": [
        "Merah dan oranye",
        "Biru dan hijau",
        "Kuning pucat",
        "Abu-abu"
      ],
      "a": 1,
      "e": "Bumi terlihat biru karena lautan dan hijau karena daratan yang subur."
    },
    {
      "q": "Berapa jumlah satelit alami yang dimiliki Bumi?",
      "o": [
        "0",
        "1",
        "2",
        "3"
      ],
      "a": 1,
      "e": "Bumi memiliki satu satelit alami, yaitu Bulan."
    }
  ],
  "mars": [
    {
      "q": "Mengapa Mars dijuluki \"Planet Merah\"?",
      "o": [
        "Karena dekat Matahari",
        "Karena banyak karat besi di tanahnya",
        "Karena selalu terbakar",
        "Karena punya cincin merah"
      ],
      "a": 1,
      "e": "Permukaan Mars berwarna kemerahan karena kandungan oksida besi (karat) di tanahnya."
    },
    {
      "q": "Berapa jumlah satelit alami Mars?",
      "o": [
        "0",
        "1",
        "2",
        "4"
      ],
      "a": 2,
      "e": "Mars memiliki dua satelit kecil bernama Phobos dan Deimos."
    },
    {
      "q": "Apa nama gunung tertinggi di Mars sekaligus di Tata Surya?",
      "o": [
        "Everest",
        "Olympus Mons",
        "Puncak Jaya",
        "Kilimanjaro"
      ],
      "a": 1,
      "e": "Olympus Mons di Mars adalah gunung tertinggi yang diketahui di seluruh Tata Surya."
    },
    {
      "q": "Apa dugaan ilmuwan tentang Mars di masa lalu?",
      "o": [
        "Pernah memiliki air mengalir",
        "Pernah menjadi bintang",
        "Pernah memiliki cincin",
        "Pernah lebih dekat ke Matahari"
      ],
      "a": 0,
      "e": "Banyak bukti menunjukkan Mars dulu mungkin memiliki air yang mengalir di permukaannya."
    },
    {
      "q": "Berapa lama satu hari di Mars?",
      "o": [
        "Sekitar 24 jam",
        "Sekitar 24,6 jam",
        "Sekitar 10 jam",
        "Sekitar 48 jam"
      ],
      "a": 1,
      "e": "Satu hari di Mars hampir sama dengan Bumi, yaitu sekitar 24,6 jam."
    },
    {
      "q": "Berapa lama satu tahun di Mars (revolusi)?",
      "o": [
        "88 hari",
        "225 hari",
        "687 hari",
        "365 hari"
      ],
      "a": 2,
      "e": "Mars membutuhkan waktu 687 hari Bumi untuk mengelilingi Matahari satu kali."
    },
    {
      "q": "Mars adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Ketiga",
        "Keempat",
        "Kelima",
        "Kedua"
      ],
      "a": 1,
      "e": "Mars berada di urutan keempat dari Matahari, setelah Bumi."
    },
    {
      "q": "Berapa jarak rata-rata Mars dari Matahari?",
      "o": [
        "150 juta km",
        "228 juta km",
        "778 juta km",
        "108 juta km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Mars dari Matahari adalah sekitar 228 juta km."
    },
    {
      "q": "Siapa nama kedua satelit Mars?",
      "o": [
        "Titan dan Europa",
        "Phobos dan Deimos",
        "Io dan Callisto",
        "Ariel dan Miranda"
      ],
      "a": 1,
      "e": "Kedua satelit Mars bernama Phobos dan Deimos, keduanya berukuran kecil."
    },
    {
      "q": "Berapa perkiraan diameter Mars?",
      "o": [
        "4.879 km",
        "6.779 km",
        "12.742 km",
        "139.820 km"
      ],
      "a": 1,
      "e": "Diameter Mars sekitar 6.779 km, lebih kecil dari Bumi."
    }
  ],
  "jupiter": [
    {
      "q": "Jupiter dikenal sebagai planet apa di Tata Surya?",
      "o": [
        "Terkecil",
        "Terbesar",
        "Terpanas",
        "Terjauh"
      ],
      "a": 1,
      "e": "Jupiter adalah planet terbesar di Tata Surya dengan diameter 139.820 km."
    },
    {
      "q": "Apa nama badai raksasa yang terkenal di Jupiter?",
      "o": [
        "Badai Kutub",
        "Bintik Merah Besar",
        "Pusaran Biru",
        "Topan Jupiter"
      ],
      "a": 1,
      "e": "Bintik Merah Besar adalah badai raksasa di Jupiter yang sudah berlangsung ratusan tahun."
    },
    {
      "q": "Berapa lama satu hari di Jupiter?",
      "o": [
        "24 jam",
        "10 jam",
        "48 jam",
        "5 jam"
      ],
      "a": 1,
      "e": "Jupiter berputar sangat cepat, satu harinya hanya sekitar 10 jam."
    },
    {
      "q": "Berapa lama satu tahun di Jupiter?",
      "o": [
        "12 tahun Bumi",
        "29 tahun Bumi",
        "84 tahun Bumi",
        "1 tahun Bumi"
      ],
      "a": 0,
      "e": "Jupiter membutuhkan sekitar 12 tahun Bumi untuk mengelilingi Matahari."
    },
    {
      "q": "Kira-kira berapa banyak satelit yang dimiliki Jupiter?",
      "o": [
        "Sekitar 5",
        "Sekitar 27",
        "Lebih dari 90",
        "Tidak ada"
      ],
      "a": 2,
      "e": "Jupiter memiliki lebih dari 90 satelit yang telah diketahui para ilmuwan."
    },
    {
      "q": "Jupiter terbuat dari apa?",
      "o": [
        "Batu padat",
        "Es tebal",
        "Gas raksasa",
        "Logam cair semua"
      ],
      "a": 2,
      "e": "Jupiter adalah planet gas raksasa, sebagian besar terdiri dari hidrogen dan helium."
    },
    {
      "q": "Jupiter adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Keempat",
        "Kelima",
        "Keenam",
        "Ketujuh"
      ],
      "a": 1,
      "e": "Jupiter berada di urutan kelima dari Matahari."
    },
    {
      "q": "Berapa jarak rata-rata Jupiter dari Matahari?",
      "o": [
        "228 juta km",
        "778 juta km",
        "1,4 miliar km",
        "150 juta km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Jupiter dari Matahari adalah sekitar 778 juta km."
    },
    {
      "q": "Apa julukan yang cocok untuk Jupiter karena ukurannya?",
      "o": [
        "Raja Tata Surya",
        "Planet Kecil",
        "Planet Es",
        "Bintang Kejora"
      ],
      "a": 0,
      "e": "Karena ukurannya yang sangat besar, Jupiter sering dijuluki \"Raja Tata Surya\"."
    },
    {
      "q": "Jika semua planet lain digabung, bagaimana ukurannya dibanding Jupiter?",
      "o": [
        "Masih lebih besar dari Jupiter",
        "Muat semua di dalam Jupiter",
        "Sama persis",
        "Tidak bisa dibandingkan"
      ],
      "a": 1,
      "e": "Jupiter begitu besar hingga semua planet lain di Tata Surya bisa muat di dalamnya."
    }
  ],
  "saturnus": [
    {
      "q": "Apa ciri khas paling terkenal dari Saturnus?",
      "o": [
        "Warnanya merah",
        "Cincinnya yang megah",
        "Ukurannya kecil",
        "Tidak punya satelit"
      ],
      "a": 1,
      "e": "Saturnus sangat terkenal karena cincin indahnya yang mengelilingi planet."
    },
    {
      "q": "Cincin Saturnus terbuat dari apa?",
      "o": [
        "Awan tebal",
        "Es dan batu",
        "Logam cair",
        "Gas beracun"
      ],
      "a": 1,
      "e": "Cincin Saturnus terbuat dari jutaan bongkahan es dan batu berbagai ukuran."
    },
    {
      "q": "Mengapa Saturnus disebut planet paling ringan?",
      "o": [
        "Karena kecil",
        "Karena bisa mengapung di air jika ada kolam yang cukup besar",
        "Karena terbuat dari kapas",
        "Karena tidak punya gravitasi"
      ],
      "a": 1,
      "e": "Kepadatan Saturnus lebih ringan dari air, sehingga secara teori ia bisa mengapung."
    },
    {
      "q": "Kira-kira berapa banyak satelit yang dimiliki Saturnus?",
      "o": [
        "Sekitar 27",
        "Lebih dari 140",
        "Sekitar 16",
        "Tidak ada"
      ],
      "a": 1,
      "e": "Saturnus memiliki lebih dari 140 satelit yang telah ditemukan."
    },
    {
      "q": "Berapa lama satu tahun di Saturnus?",
      "o": [
        "12 tahun Bumi",
        "29 tahun Bumi",
        "84 tahun Bumi",
        "165 tahun Bumi"
      ],
      "a": 1,
      "e": "Saturnus membutuhkan sekitar 29 tahun Bumi untuk mengelilingi Matahari."
    },
    {
      "q": "Warna Saturnus didominasi oleh warna apa?",
      "o": [
        "Kuning pucat",
        "Merah menyala",
        "Hijau tua",
        "Ungu"
      ],
      "a": 0,
      "e": "Awan amonia membuat Saturnus tampak berwarna kuning pucat."
    },
    {
      "q": "Saturnus adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Kelima",
        "Keenam",
        "Ketujuh",
        "Kedelapan"
      ],
      "a": 1,
      "e": "Saturnus berada di urutan keenam dari Matahari."
    },
    {
      "q": "Berapa lama satu hari di Saturnus?",
      "o": [
        "Sekitar 10,7 jam",
        "Sekitar 24 jam",
        "Sekitar 48 jam",
        "Sekitar 5 jam"
      ],
      "a": 0,
      "e": "Saturnus berputar cukup cepat, satu harinya sekitar 10,7 jam."
    },
    {
      "q": "Berapa jarak rata-rata Saturnus dari Matahari?",
      "o": [
        "778 juta km",
        "1,4 miliar km",
        "2,9 miliar km",
        "4,5 miliar km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Saturnus dari Matahari adalah sekitar 1,4 miliar km."
    },
    {
      "q": "Saturnus termasuk planet apa berdasarkan bahan pembentuknya?",
      "o": [
        "Planet gas raksasa",
        "Planet batu kecil",
        "Planet es padat",
        "Planet logam"
      ],
      "a": 0,
      "e": "Saturnus adalah planet gas raksasa, mirip dengan Jupiter namun lebih ringan."
    }
  ],
  "uranus": [
    {
      "q": "Apa yang unik dari cara Uranus berputar?",
      "o": [
        "Berputar sangat lambat",
        "Berputar menyamping seperti menggelinding",
        "Tidak pernah berputar",
        "Berputar terlalu cepat"
      ],
      "a": 1,
      "e": "Uranus miring sekitar 98 derajat sehingga tampak berputar menyamping seperti bola menggelinding."
    },
    {
      "q": "Apa yang menyebabkan warna biru kehijauan pada Uranus?",
      "o": [
        "Gas metana",
        "Air laut",
        "Pasir biru",
        "Cahaya Matahari"
      ],
      "a": 0,
      "e": "Gas metana di atmosfer Uranus menyerap warna merah dan memantulkan warna biru kehijauan."
    },
    {
      "q": "Berapa lama satu tahun di Uranus?",
      "o": [
        "29 tahun Bumi",
        "84 tahun Bumi",
        "165 tahun Bumi",
        "12 tahun Bumi"
      ],
      "a": 1,
      "e": "Uranus membutuhkan waktu 84 tahun Bumi untuk mengelilingi Matahari satu kali."
    },
    {
      "q": "Apakah Uranus memiliki cincin?",
      "o": [
        "Tidak sama sekali",
        "Ya, cincin tipis",
        "Ya, cincin sangat tebal seperti Saturnus",
        "Hanya debu biasa"
      ],
      "a": 1,
      "e": "Uranus memiliki cincin tipis yang sulit terlihat dari Bumi tanpa teleskop khusus."
    },
    {
      "q": "Kira-kira berapa banyak satelit yang dimiliki Uranus?",
      "o": [
        "Sekitar 27",
        "Sekitar 95",
        "Sekitar 146",
        "Tidak ada"
      ],
      "a": 0,
      "e": "Uranus memiliki sekitar 27 satelit yang telah diketahui."
    },
    {
      "q": "Uranus adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Keenam",
        "Ketujuh",
        "Kedelapan",
        "Kelima"
      ],
      "a": 1,
      "e": "Uranus berada di urutan ketujuh dari Matahari."
    },
    {
      "q": "Berapa lama satu hari di Uranus?",
      "o": [
        "Sekitar 17 jam",
        "Sekitar 24 jam",
        "Sekitar 10 jam",
        "Sekitar 48 jam"
      ],
      "a": 0,
      "e": "Satu hari di Uranus berlangsung sekitar 17 jam."
    },
    {
      "q": "Uranus termasuk jenis planet apa?",
      "o": [
        "Planet batu",
        "Planet es raksasa",
        "Planet gas panas",
        "Planet logam"
      ],
      "a": 1,
      "e": "Uranus disebut planet es raksasa karena banyak mengandung es air, metana, dan amonia."
    },
    {
      "q": "Berapa jarak rata-rata Uranus dari Matahari?",
      "o": [
        "1,4 miliar km",
        "2,9 miliar km",
        "4,5 miliar km",
        "778 juta km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Uranus dari Matahari adalah sekitar 2,9 miliar km."
    },
    {
      "q": "Berapa derajat kemiringan poros rotasi Uranus?",
      "o": [
        "Sekitar 23 derajat",
        "Sekitar 98 derajat",
        "Sekitar 0 derajat",
        "Sekitar 180 derajat"
      ],
      "a": 1,
      "e": "Poros Uranus miring sekitar 98 derajat, sangat unik dibanding planet lain."
    }
  ],
  "neptunus": [
    {
      "q": "Neptunus dikenal sebagai planet apa di Tata Surya?",
      "o": [
        "Terdekat dengan Matahari",
        "Terjauh dari Matahari",
        "Terkecil",
        "Terpanas"
      ],
      "a": 1,
      "e": "Neptunus adalah planet paling jauh dari Matahari di Tata Surya kita."
    },
    {
      "q": "Apa keunikan angin di Neptunus?",
      "o": [
        "Anginnya paling lambat",
        "Anginnya paling kencang di Tata Surya",
        "Tidak ada angin sama sekali",
        "Anginnya hanya bertiup di siang hari"
      ],
      "a": 1,
      "e": "Angin di Neptunus bisa mencapai 2.100 km/jam, tercepat di seluruh Tata Surya."
    },
    {
      "q": "Berapa lama satu tahun di Neptunus?",
      "o": [
        "84 tahun Bumi",
        "165 tahun Bumi",
        "225 tahun Bumi",
        "12 tahun Bumi"
      ],
      "a": 1,
      "e": "Neptunus membutuhkan waktu 165 tahun Bumi untuk mengelilingi Matahari satu kali."
    },
    {
      "q": "Bagaimana cara Neptunus pertama kali ditemukan?",
      "o": [
        "Dilihat langsung dengan mata telanjang",
        "Dihitung lewat matematika sebelum terlihat teleskop",
        "Ditemukan oleh astronot",
        "Ditemukan secara kebetulan"
      ],
      "a": 1,
      "e": "Neptunus ditemukan berkat perhitungan matematika para ilmuwan sebelum benar-benar diamati lewat teleskop."
    },
    {
      "q": "Apa yang menyebabkan warna biru tua pada Neptunus?",
      "o": [
        "Air laut",
        "Gas metana",
        "Es kering",
        "Pasir biru"
      ],
      "a": 1,
      "e": "Gas metana di atmosfer Neptunus membuatnya tampak berwarna biru tua yang indah."
    },
    {
      "q": "Kira-kira berapa banyak satelit yang dimiliki Neptunus?",
      "o": [
        "Sekitar 16",
        "Sekitar 95",
        "Sekitar 146",
        "Tidak ada"
      ],
      "a": 0,
      "e": "Neptunus memiliki sekitar 16 satelit yang telah diketahui."
    },
    {
      "q": "Neptunus adalah planet urutan keberapa dari Matahari?",
      "o": [
        "Ketujuh",
        "Kedelapan",
        "Kesembilan",
        "Keenam"
      ],
      "a": 1,
      "e": "Neptunus berada di urutan kedelapan (terakhir) dari Matahari."
    },
    {
      "q": "Berapa lama satu hari di Neptunus?",
      "o": [
        "Sekitar 16 jam",
        "Sekitar 24 jam",
        "Sekitar 48 jam",
        "Sekitar 10 jam"
      ],
      "a": 0,
      "e": "Satu hari di Neptunus berlangsung sekitar 16 jam."
    },
    {
      "q": "Berapa jarak rata-rata Neptunus dari Matahari?",
      "o": [
        "2,9 miliar km",
        "4,5 miliar km",
        "1,4 miliar km",
        "778 juta km"
      ],
      "a": 1,
      "e": "Jarak rata-rata Neptunus dari Matahari adalah sekitar 4,5 miliar km."
    },
    {
      "q": "Neptunus termasuk jenis planet apa?",
      "o": [
        "Planet batu kecil",
        "Planet es raksasa",
        "Planet gas panas",
        "Planet logam padat"
      ],
      "a": 1,
      "e": "Sama seperti Uranus, Neptunus termasuk planet es raksasa."
    }
  ]
};
