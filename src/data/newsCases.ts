import { NewsCase } from '../types';

export const NEWS_CASES: NewsCase[] = [
  {
    id: 'case-01',
    caseNumber: '01',
    groupNumber: 1,
    groupName: 'Kelompok 1',
    topicTitle: 'Festival Kuliner Nusantara & Gelar Karya Vokasi Siswa',
    category: 'Vokasi & Kewirausahaan',
    overview: 'Penyelenggaraan festival kuliner tradisional oleh para murid kejuruan sebagai ajang unjuk kompetensi tata boga dan kewirausahaan.',
    cards: [
      {
        id: 'c1-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Festival Kuliner Nusantara bertema “Cita Rasa Tradisi Generasi Vokasi” sukses diselenggarakan di SMKN 4 Yogyakarta sebagai bagian dari pembelajaran praktik kejuruan terpadu.',
        keywords: ['festival', 'kuliner', 'nusantara', 'smkn 4']
      },
      {
        id: 'c1-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Data Partisipan',
        content: 'Kegiatan gelar rasa ini diikuti secara antusias oleh 128 murid kelas XI Konsentrasi Keahlian Kuliner dengan bimbingan penuh para guru kejuruan tata boga.',
        keywords: ['128', 'murid', 'kelas xi', 'kuliner', 'siswa']
      },
      {
        id: 'c1-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Penyelenggaraan',
        content: 'Acara berlangsung meriah di Gedung Serbaguna Sasana Boga dan area pelataran utama kampus SMKN 4 Yogyakarta.',
        keywords: ['gedung serbaguna', 'smkn 4', 'yogyakarta', 'kampus']
      },
      {
        id: 'c1-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Pameran dan penilaian masakan dilaksanakan pada hari Jumat, 25 September 2026, mulai pukul 08.00 hingga 15.00 WIB.',
        keywords: ['jumat', '25', 'september', '2026', '08.00']
      },
      {
        id: 'c1-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan',
        content: 'Festival ini diadakan untuk menguji keterampilan mengolah hidangan autentik nusantara sekaligus melatih mentalitas kewirausahaan murid sebelum memasuki magang industri perhotelan dan restoran.',
        keywords: ['keterampilan', 'mengolah', 'kewirausahaan', 'magang', 'industri']
      },
      {
        id: 'c1-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses & Dinamika',
        content: 'Para murid bekerja secara mandiri mulai dari penyiapan bahan baku segar, pengolahan menu khas berbagai daerah seperti rendang minang, soto banjar, dan papeda, hingga tata saji (plating) berstandar profesional di meja stan pengujian.',
        keywords: ['mandiri', 'pengolahan', 'sajian', 'stan', 'rendang', 'soto']
      },
      {
        id: 'c1-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Data Pengunjung & Penilaian',
        content: 'Tercatat lebih dari 500 pengunjung yang terdiri atas wali murid, perwakilan asosiasi katering, dan chef hotel berbintang hadir mencicipi serta memberikan ulasan langsung pada stan kuliner siswa.',
        keywords: ['500', 'pengunjung', 'chef', 'hotel', 'ulasan']
      },
      {
        id: 'c1-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Kegiatan ini membuktikan anak-anak SMK memiliki daya saing tinggi. Mereka tidak sekadar memasak, melainkan mampu mengelola standar kebersihan dan manajemen penyajian layaknya restoran profesional,” tegas Ibu Ratna Pertiwi, S.Pd., selaku koordinator guru pembimbing.',
        authorNote: 'Ibu Ratna Pertiwi, S.Pd. (Koordinator Guru Pembimbing)',
        keywords: ['ratna pertiwi', 'guru pembimbing', 'profesional', 'standar']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['festival', 'kuliner'],
        hint: 'Sebutkan peristiwa utamanya, yaitu penyelenggaraan Festival Kuliner Nusantara di lingkungan sekolah.'
      },
      who: {
        requiredKeywords: ['murid', 'kuliner', 'xi'],
        hint: 'Perhatikan jumlah murid kelas XI Konsentrasi Keahlian Kuliner yang menjadi peserta utama.'
      },
      when: {
        requiredKeywords: ['jumat', 'september', '2026'],
        hint: 'Sebutkan hari dan tanggal lengkap pelaksanaan kegiatan.'
      },
      where: {
        requiredKeywords: ['smkn 4', 'yogyakarta'],
        hint: 'Sebutkan lokasi spesifik di SMKN 4 Yogyakarta.'
      },
      why: {
        requiredKeywords: ['keterampilan', 'praktik', 'kewirausahaan'],
        hint: 'Jelaskan tujuan kegiatan, yaitu menguji keterampilan memasak hidangan tradisional dan melatih kewirausahaan.'
      },
      how: {
        requiredKeywords: ['mandiri', 'menyiapkan', 'menyajikan'],
        hint: 'Jelaskan bagaimana murid bekerja secara mandiri dalam mengolah bahan hingga menyajikan menu daerah.'
      }
    }
  },

  {
    id: 'case-02',
    caseNumber: '02',
    groupNumber: 2,
    groupName: 'Kelompok 2',
    topicTitle: 'Peluncuran Prototipe Mobil Listrik Siswa Otomotif',
    category: 'Teknologi & Rekayasa',
    overview: 'Pelajar kejuruan otomotif berhasil merakit dan menguji coba prototipe kendaraan listrik ramah lingkungan hemat energi.',
    cards: [
      {
        id: 'c2-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Peluncuran resmi prototipe mobil listrik ramah lingkungan hemat energi bernama “Gama Volt 01” karya siswa kejuruan otomotif berhasil memukau komunitas teknologi.',
        keywords: ['mobil listrik', 'gama volt', 'peluncuran', 'prototipe']
      },
      {
        id: 'c2-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat',
        content: 'Kendaraan ini dirancang dan dibangun oleh tim riset yang terdiri atas 15 murid kelas XII Konsentrasi Keahlian Teknik Kendaraan Ringan Otomotif SMK Negeri 2 Depok Sleman.',
        keywords: ['15', 'murid', 'kelas xii', 'otomotif', 'smk negeri 2 depok']
      },
      {
        id: 'c2-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Pelaksanaan',
        content: 'Peresmian dan uji kelayakan sirkuit tertutup diselenggarakan langsung di Bengkel Otomotif Terpadu SMK Negeri 2 Depok Sleman, D.I. Yogyakarta.',
        keywords: ['bengkel otomotif', 'smk negeri 2 depok', 'sleman']
      },
      {
        id: 'c2-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Kejadian',
        content: 'Uji coba lintasan dan peluncuran berlangsung khidmat pada hari Rabu, 14 Oktober 2026, pukul 09.30 WIB.',
        keywords: ['rabu', '14', 'oktober', '2026', '09.30']
      },
      {
        id: 'c2-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Pembuatan',
        content: 'Pembuatan mobil listrik ini bertujuan mendukung kampanye transisi energi bersih bebas polusi karbon sekaligus memenuhi proyek akhir uji kompetensi kejuruan berbasis riset teknologi.',
        keywords: ['energi bersih', 'karbon', 'uji kompetensi', 'riset']
      },
      {
        id: 'c2-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Pengerjaan',
        content: 'Mobil listrik dirakit selama empat bulan penuh, mencakup perancangan sasis tubular baja ringan, instalasi motor penggerak brushless DC 3 kW, dan pemrograman modul manajemen baterai pintar.',
        keywords: ['empat bulan', 'sasis', 'motor', 'perakitan', 'baterai']
      },
      {
        id: 'c2-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Spesifikasi & Uji Teknis',
        content: 'Berdasarkan pengujian telemetri, Gama Volt 01 mampu melaju hingga kecepatan maksimum 45 km/jam dengan daya jelajah 60 kilometer dalam sekali pengisian baterai selama 3 jam.',
        keywords: ['45 km/jam', '60 kilometer', 'baterai', 'kecepatan']
      },
      {
        id: 'c2-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Melalui riset mobil listrik ini, kami membuktikan siswa SMK bukan sekadar montir servis, melainkan calon inovator yang siap mendukung industri kendaraan masa depan Indonesia,” terang Ahmad Fauzan, ketua tim teknisi siswa.',
        authorNote: 'Ahmad Fauzan (Ketua Tim Teknisi Siswa)',
        keywords: ['ahmad fauzan', 'inovator', 'kendaraan masa depan', 'teknisi']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['mobil listrik', 'gama volt', 'peluncuran'],
        hint: 'Peristiwa utamanya adalah peluncuran prototipe mobil listrik Gama Volt 01 karya siswa.'
      },
      who: {
        requiredKeywords: ['murid', 'otomotif', 'smk negeri 2'],
        hint: 'Pihak yang terlibat adalah 15 murid kelas XII Otomotif SMK Negeri 2 Depok Sleman.'
      },
      when: {
        requiredKeywords: ['rabu', '14', 'oktober', '2026'],
        hint: 'Waktu peresmian adalah hari Rabu, 14 Oktober 2026.'
      },
      where: {
        requiredKeywords: ['depok', 'sleman', 'bengkel'],
        hint: 'Tempat berlangsungnya uji coba di Bengkel Otomotif Terpadu SMK Negeri 2 Depok Sleman.'
      },
      why: {
        requiredKeywords: ['energi', 'bersih', 'uji kompetensi'],
        hint: 'Tujuannya mendukung transisi energi ramah lingkungan dan memenuhi tugas akhir kejuruan.'
      },
      how: {
        requiredKeywords: ['merakit', 'empat bulan', 'baterai', 'sasis'],
        hint: 'Jelaskan proses perakitan selama empat bulan mulai pembuatan sasis hingga sistem motor listrik.'
      }
    }
  },

  {
    id: 'case-03',
    caseNumber: '03',
    groupNumber: 3,
    groupName: 'Kelompok 3',
    topicTitle: 'Pameran Karya Seni Grafis & Desain Desain Komunikasi Visual (DKV)',
    category: 'Seni Rupa & Industri Kreatif',
    overview: 'Pameran desain poster dan kemasan ramah lingkungan yang mengampanyekan kepedulian terhadap krisis iklim global.',
    cards: [
      {
        id: 'c3-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Pameran karya seni grafis, ilustrasi digital, dan desain identitas visual bertajuk “Rupa Masa Depan: Desain Berkelanjutan” resmi digelar dan mencuri perhatian khalayak seni.',
        keywords: ['pameran', 'seni grafis', 'rupa masa depan', 'desain']
      },
      {
        id: 'c3-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Partisipan Pameran',
        content: 'Ekshibisi kreatif ini menampilkan buah karya orisinal dari 85 murid kelas XI Program Keahlian Desain Komunikasi Visual (DKV) SMK Seni Nusantara.',
        keywords: ['85', 'murid', 'dkv', 'smk seni nusantara', 'desain komunikasi visual']
      },
      {
        id: 'c3-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Acara',
        content: 'Pameran dipusatkan di Ruang Galeri Kreatif dan Selasar Gedung Budaya SMK Seni Nusantara, Kota Surakarta.',
        keywords: ['galeri kreatif', 'gedung budaya', 'surakarta', 'smk seni nusantara']
      },
      {
        id: 'c3-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Jadwal Pameran',
        content: 'Acara dibuka resmi pada hari Senin, 19 Oktober 2026 pukul 09.00 WIB dan terbuka untuk umum selama tiga hari penuh.',
        keywords: ['senin', '19', 'oktober', '2026', 'tiga hari']
      },
      {
        id: 'c3-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan & Pesan',
        content: 'Pameran bertujuan mengedukasi generasi muda mengenai ancaman krisis iklim serta mempromosikan kemasan produk daur ulang lewat bahasa visual yang komunikatif.',
        keywords: ['krisis iklim', 'lingkungan', 'daur ulang', 'edukasi']
      },
      {
        id: 'c3-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Dinamika & Konten',
        content: 'Pengunjung dapat mengamati 120 karya poster cetak, kemasan ramah lingkungan berbahan serat bambu, instalasi tipografi, serta demonstrasi karya visual bergerak (motion graphic) berbasis Augmented Reality.',
        keywords: ['120', 'poster', 'kemasan', 'augmented reality', 'motion graphic']
      },
      {
        id: 'c3-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Antusiasme Pengunjung',
        content: 'Sebanyak 750 lembar buku katalog pameran dibagikan kepada pengunjung yang memadati galeri, termasuk puluhan praktisi agensi periklanan ternama yang hadir melirik bakat siswa.',
        keywords: ['750', 'pengunjung', 'katalog', 'agensi periklanan']
      },
      {
        id: 'c3-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Karya murid-murid ini memiliki ketajaman pesan yang kuat. Mereka membuktikan seni grafis mampu menjadi corong advokasi penyelamatan bumi yang sangat relevan,” puji Bapak Danang Wicaksono, kurator seni independen.',
        authorNote: 'Bapak Danang Wicaksono (Kurator Seni Independen)',
        keywords: ['danang wicaksono', 'kurator', 'advokasi', 'seni grafis']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['pameran', 'seni grafis', 'desain'],
        hint: 'Peristiwa utamanya adalah pameran karya seni grafis dan desain bertajuk Rupa Masa Depan.'
      },
      who: {
        requiredKeywords: ['murid', 'dkv', 'smk seni nusantara'],
        hint: 'Diselenggarakan oleh 85 murid kelas XI Desain Komunikasi Visual (DKV) SMK Seni Nusantara.'
      },
      when: {
        requiredKeywords: ['senin', '19', 'oktober', '2026'],
        hint: 'Waktu pembukaan pameran pada hari Senin, 19 Oktober 2026.'
      },
      where: {
        requiredKeywords: ['galeri', 'surakarta', 'gedung budaya'],
        hint: 'Tempat pameran di Ruang Galeri Kreatif SMK Seni Nusantara, Surakarta.'
      },
      why: {
        requiredKeywords: ['iklim', 'edukasi', 'lingkungan', 'daur ulang'],
        hint: 'Tujuannya mengedukasi generasi muda tentang krisis iklim dan desain ramah lingkungan.'
      },
      how: {
        requiredKeywords: ['poster', 'karya', 'instalasi', 'augmented reality'],
        hint: 'Jelaskan bagaimana pameran menyajikan 120 karya seni cetak, kemasan ramah lingkungan, hingga animasi interaktif.'
      }
    }
  },

  {
    id: 'case-04',
    caseNumber: '04',
    groupNumber: 4,
    groupName: 'Kelompok 4',
    topicTitle: 'Aksi Penanaman 1.000 Pohon Mangrove di Kawasan Pesisir',
    category: 'Lingkungan Hidup & Konservasi',
    overview: 'Gerakan kepedulian lingkungan murid sekolah untuk memulihkan ekosistem pesisir dan menahan abrasi air laut.',
    cards: [
      {
        id: 'c4-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Gerakan konservasi lingkungan berupa penanaman serentak 1.000 bibit pohon mangrove (bakau) sukses dilaksanakan guna memulihkan garis pantai yang kritis.',
        keywords: ['penanaman', 'mangrove', '1.000', 'konservasi', 'bakau']
      },
      {
        id: 'c4-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat',
        content: 'Aksi lapangan ini digerakkan oleh 200 murid gabungan ekstrakurikuler Pecinta Alam dan Palang Merah Remaja (PMR) SMA Negeri 1 Banguntapan bersama warga nelayan pesisir.',
        keywords: ['200', 'murid', 'pecinta alam', 'pmr', 'sma negeri 1 banguntapan']
      },
      {
        id: 'c4-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Konservasi',
        content: 'Kegiatan dipusatkan di zona pasang surut Muara Pantai Baros, Kalurahan Tirtohargo, Kapanewon Kretek, Kabupaten Bantul.',
        keywords: ['muara pantai baros', 'tirtohargo', 'kretek', 'bantul']
      },
      {
        id: 'c4-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Penanaman dilaksanakan pada hari Sabtu, 7 November 2026, mulai pukul 06.30 WIB ketika ketinggian air laut sedang surut optimal.',
        keywords: ['sabtu', '7', 'november', '2026', '06.30']
      },
      {
        id: 'c4-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Konservasi',
        content: 'Aksi ini bertujuan membentengi pesisir dari ancaman abrasi gelombang laut, merevitalisasi ekosistem kepiting bakau, sekaligus memperingati Hari Cinta Puspa dan Satwa Nasional.',
        keywords: ['abrasi', 'ekosistem', 'pantai', 'cinta puspa']
      },
      {
        id: 'c4-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses di Lapangan',
        content: 'Mengenakan sepatu bot karet, para murid menerobos lumpur sedalam betis, menggali lubang tanam 30 sentimeter, lalu mengikat bibit mangrove jenis Rhizophora mucronata pada tongkat bambu agar tidak tersapu hempasan ombak.',
        keywords: ['lumpur', 'menanam', 'bambu', 'ombak', 'bibit']
      },
      {
        id: 'c4-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Aksi Bersih Sampah',
        content: 'Di samping menanam pohon, rombongan murid berhasil mengumpulkan 350 kilogram sampah plastik dan jaring bekas yang menyumbat saluran aliran muara sungai.',
        keywords: ['350 kilogram', 'sampah plastik', 'muara sungai', 'bersih pantai']
      },
      {
        id: 'c4-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Menanam mangrove adalah wujud nyata cinta tanah air. Murid-murid kami belajar langsung bahwa menjaga alam bukan slogan teori, tetapi tindakan nyata di tengah lumpur,” tandas Ibu Siti Rahayu, M.Pd., Kepala SMA Negeri 1 Banguntapan.',
        authorNote: 'Ibu Siti Rahayu, M.Pd. (Kepala SMA Negeri 1 Banguntapan)',
        keywords: ['siti rahayu', 'kepala sekolah', 'konservasi', 'alam']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['penanaman', 'mangrove', 'bakau'],
        hint: 'Peristiwa utamanya adalah aksi penanaman serentak 1.000 bibit mangrove.'
      },
      who: {
        requiredKeywords: ['murid', 'sma negeri 1 banguntapan', 'pecinta alam'],
        hint: 'Melibatkan 200 murid pecinta alam dan PMR SMA Negeri 1 Banguntapan bersama nelayan.'
      },
      when: {
        requiredKeywords: ['sabtu', '7', 'november', '2026'],
        hint: 'Dilaksanakan pada hari Sabtu, 7 November 2026 saat pagi hari.'
      },
      where: {
        requiredKeywords: ['muara pantai baros', 'bantul', 'tirtohargo'],
        hint: 'Lokasi kegiatan di Muara Pantai Baros, Tirtohargo, Kretek, Bantul.'
      },
      why: {
        requiredKeywords: ['abrasi', 'ekosistem', 'pantai'],
        hint: 'Tujuannya menahan abrasi gelombang laut dan memulihkan habitat pesisir.'
      },
      how: {
        requiredKeywords: ['lumpur', 'menanam', 'bambu', 'bibit'],
        hint: 'Jelaskan bagaimana murid menyusuri lumpur, menancapkan bibit, dan mengikatnya pada bambu.'
      }
    }
  },

  {
    id: 'case-05',
    caseNumber: '05',
    groupNumber: 5,
    groupName: 'Kelompok 5',
    topicTitle: 'Simulasi Tanggap Darurat Gempa Bumi & Mitigasi Kebakaran',
    category: 'Keselamatan & Kesiapsiagaan Bencana',
    overview: 'Latihan mitigasi akbar seluruh warga sekolah dalam menghadapi potensi gempa bumi dan bahaya kebakaran di gedung bertingkat.',
    cards: [
      {
        id: 'c5-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Simulasi akbar evakuasi mandiri gempa bumi berkekuatan tinggi yang dirangkai dengan pelatihan pemadaman kebakaran gedung sekolah berlangsung sukses tanpa hambatan.',
        keywords: ['simulasi', 'evakuasi', 'gempa bumi', 'kebakaran']
      },
      {
        id: 'c5-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak yang Terlibat',
        content: 'Latihan kesiapsiagaan terpadu ini diikuti serempak oleh 720 murid, 65 dewan guru, staf tata usaha SMKN 1 Semarang, serta instruktur ahli dari BPBD Jawa Tengah.',
        keywords: ['720', 'murid', 'guru', 'smkn 1 semarang', 'bpbd']
      },
      {
        id: 'c5-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Latihan',
        content: 'Simulasi melingkupi tiga blok gedung pembelajaran lantai tiga, area bengkel praktik, dan titik kumpul akhir di lapangan upacara utama SMKN 1 Semarang.',
        keywords: ['smkn 1 semarang', 'gedung pembelajaran', 'lapangan upacara']
      },
      {
        id: 'c5-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Kegiatan',
        content: 'Sirine darurat dibunyikan mendadak menandai dimulainya simulasi pada hari Selasa, 10 November 2026, tepat pukul 08.15 WIB.',
        keywords: ['selasa', '10', 'november', '2026', '08.15']
      },
      {
        id: 'c5-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan',
        content: 'Simulasi ini diselenggarakan guna menanamkan refleks penyelamatan diri yang tenang dan benar saat bencana melanda demi menekan risiko korban luka dan kepanikan massal.',
        keywords: ['penyelamatan diri', 'bencana', 'mitigasi', 'keselamatan']
      },
      {
        id: 'c5-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Evakuasi',
        content: 'Ketika alarm berbunyi kencang, murid serentak berlindung di bawah meja (metode drop-cover-hold on), menutup kepala dengan ransel tebal, lalu berjalan tertib menuruni tangga darurat menuju titik kumpul aman (assembly point).',
        keywords: ['bawah meja', 'tangga darurat', 'tertib', 'titik kumpul']
      },
      {
        id: 'c5-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Waktu Capaian & Latihan APAR',
        content: 'Seluruh penghuni sekolah berhasil mengosongkan gedung dalam rekor waktu 3 menit 40 detik, disusul latihan memadamkan kobaran api menggunakan alat pemadam api ringan (APAR) dan karung basah.',
        keywords: ['3 menit 40 detik', 'apar', 'karung basah', 'rekor waktu']
      },
      {
        id: 'c5-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Ketertiban para murid sangat luar biasa. Mereka tidak panik dan disiplin mengikuti rute evakuasi. Kesiapan seperti inilah yang menjadi kunci keselamatan nyata di lapangan,” ujar Kapten Sugeng Priyono, koordinator instruktur BPBD Jawa Tengah.',
        authorNote: 'Kapten Sugeng Priyono (Koordinator Instruktur BPBD Jateng)',
        keywords: ['sugeng priyono', 'bpbd', 'disiplin', 'keselamatan']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['simulasi', 'gempa', 'kebakaran'],
        hint: 'Peristiwa utamanya adalah simulasi tanggap darurat evakuasi gempa dan kebakaran.'
      },
      who: {
        requiredKeywords: ['murid', 'guru', 'smkn 1 semarang', 'bpbd'],
        hint: 'Diikuti oleh 720 murid, 65 guru SMKN 1 Semarang bersama instruktur BPBD.'
      },
      when: {
        requiredKeywords: ['selasa', '10', 'november', '2026'],
        hint: 'Dilaksanakan pada hari Selasa, 10 November 2026 pukul 08.15 WIB.'
      },
      where: {
        requiredKeywords: ['smkn 1 semarang', 'gedung', 'lapangan'],
        hint: 'Lokasi di kompleks gedung pembelajaran dan lapangan upacara SMKN 1 Semarang.'
      },
      why: {
        requiredKeywords: ['keselamatan', 'menyelamatkan diri', 'mitigasi', 'bencana'],
        hint: 'Tujuannya melatih ketangkasan warga sekolah dalam menyelamatkan diri saat bencana.'
      },
      how: {
        requiredKeywords: ['meja', 'tangga darurat', 'titik kumpul', 'tertib'],
        hint: 'Jelaskan bagaimana murid berlindung di bawah meja lalu berbaris rapi menuju titik kumpul.'
      }
    }
  },

  {
    id: 'case-06',
    caseNumber: '06',
    groupNumber: 6,
    groupName: 'Kelompok 6',
    topicTitle: 'Peresmian Laboratorium Komputer Cloud AI & Bootcamp Siswa',
    category: 'Teknologi Informasi & Digital',
    overview: 'Sekolah kejuruan meresmikan fasilitas laboratorium komputasi cerdas hasil kemitraan industri piranti lunak internasional.',
    cards: [
      {
        id: 'c6-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Peresmian Laboratorium Cloud & Kecerdasan Artifisial (AI) canggih yang dirangkaikan dengan bootcamp intensif pembuatan aplikasi perangkat lunak resmi dibuka.',
        keywords: ['laboratorium', 'cloud', 'kecerdasan artifisial', 'bootcamp', 'ai']
      },
      {
        id: 'c6-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Peserta & Mitra',
        content: 'Fasilitas baru ini disiapkan khusus bagi 110 murid kelas XI dan XII Konsentrasi Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) SMK Telkom Malang bekerja sama dengan perusahaan teknologi multinasional.',
        keywords: ['110', 'murid', 'pplg', 'smk telkom malang', 'perangkat lunak']
      },
      {
        id: 'c6-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Fasilitas',
        content: 'Laboratorium modern berkonsep open-space ini berada di Lantai 2 Gedung Sasana Inovasi Digital SMK Telkom Malang, Jawa Timur.',
        keywords: ['gedung sasana inovasi', 'smk telkom malang', 'jawa timur']
      },
      {
        id: 'c6-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Peresmian dan pemotongan pita digital dilangsungkan pada hari Kamis, 26 November 2026, mulai pukul 09.00 WIB.',
        keywords: ['kamis', '26', 'november', '2026', '09.00']
      },
      {
        id: 'c6-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Program',
        content: 'Penyediaan laboratorium ini bertujuan menyelaraskan kompetensi murid dengan kebutuhan terkini industri piranti lunak global agar lulusan SMK dapat langsung diserap sebagai talenta pengembang profesional.',
        keywords: ['keselarasan', 'industri', 'talenta', 'pengembang', 'kompetensi']
      },
      {
        id: 'c6-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Pembelajaran',
        content: 'Dalam sesi bootcamp perdana, murid langsung dibimbing para insinyur piranti lunak mempraktikkan pengodean (coding) arsitektur cloud dan melatih model analitik data pintar untuk memecahkan problem sekolah sehari-hari.',
        keywords: ['coding', 'bootcamp', 'cloud', 'analisis data', 'insinyur']
      },
      {
        id: 'c6-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Fasilitas Unggulan',
        content: 'Ruang laboratorium ini didukung 40 unit komputer workstation berkemampuan grafis tinggi, koneksi internet berkecepatan 1 Gbps, serta akses sandbox komputasi awan berlisensi resmi.',
        keywords: ['40 unit', 'workstation', '1 gbps', 'sandbox']
      },
      {
        id: 'c6-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Anak-anak SMK memiliki potensi besar. Dengan fasilitas laboratorium AI ini, mereka tidak lagi menjadi konsumen teknologi, melainkan pencipta solusi digital yang berdaya saing global,” ujar Hendra Kusuma, Direktur Teknologi mitra industri.',
        authorNote: 'Hendra Kusuma (Direktur Teknologi Mitra Industri)',
        keywords: ['hendra kusuma', 'solusi digital', 'daya saing global', 'direktur']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['laboratorium', 'cloud', 'ai', 'bootcamp'],
        hint: 'Peristiwa utamanya adalah peresmian laboratorium cloud AI dan bootcamp pemrograman.'
      },
      who: {
        requiredKeywords: ['murid', 'pplg', 'smk telkom malang'],
        hint: 'Melibatkan 110 murid kejuruan PPLG SMK Telkom Malang bersama mitra industri.'
      },
      when: {
        requiredKeywords: ['kamis', '26', 'november', '2026'],
        hint: 'Peresmian diadakan pada Kamis, 26 November 2026.'
      },
      where: {
        requiredKeywords: ['smk telkom malang', 'gedung sasana inovasi'],
        hint: 'Lokasi di Gedung Sasana Inovasi Digital SMK Telkom Malang.'
      },
      why: {
        requiredKeywords: ['industri', 'talenta', 'kompetensi', 'global'],
        hint: 'Tujuannya menyelaraskan kurikulum dengan kebutuhan industri software masa kini.'
      },
      how: {
        requiredKeywords: ['coding', 'bimbingan', 'insinyur', 'praktik'],
        hint: 'Jelaskan bagaimana murid langsung mempraktikkan coding dengan bimbingan insinyur industri.'
      }
    }
  }
];

export function getCaseByGroup(groupName: string): NewsCase {
  const match = NEWS_CASES.find(c => c.groupName.toLowerCase() === groupName.toLowerCase());
  return match || NEWS_CASES[0];
}

export function getCaseById(caseId: string): NewsCase {
  const match = NEWS_CASES.find(c => c.id === caseId);
  return match || NEWS_CASES[0];
}

export function getCaseByGroupNumber(num: number): NewsCase {
  const match = NEWS_CASES.find(c => c.groupNumber === num);
  return match || NEWS_CASES[0];
}
