import { NewsCase } from '../types';

export const NEWS_CASES: NewsCase[] = [
  // ==========================================
  // CASE 01 - KELOMPOK 1
  // ==========================================
  {
    id: 'case-01',
    caseNumber: '01',
    groupNumber: 1,
    groupName: 'Kelompok 1',
    topicTitle: 'Lomba Perdana Membuat Pastry & Roti: Siswa SMK Kuliner Adu Keterampilan Mengolah Adonan',
    category: 'Lomba & Praktik Tata Boga',
    overview: 'Keseruan lomba perdana membuat kreasi pastry dan aneka roti manis di laboratorium boga sekolah untuk mengasah keahlian teknik menguleni adonan, proofing ragi, hingga pemanggangan oven.',
    cards: [
      {
        id: 'c1-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'SMK Negeri 1 Tata Boga menggelar lomba perdana membuat kreasi pastry dan roti manis antar-siswa sebagai ajang menguji keterampilan dasar pembuatan roti dan kue.',
        keywords: ['lomba', 'pastry', 'roti manis', 'smk negeri 1 tata boga', 'kreasi', 'boga']
      },
      {
        id: 'c1-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Lomba ini diikuti oleh 30 siswa kelas X Jurusan Kuliner yang terbagi dalam 10 tim, serta dinilai langsung oleh guru pembimbing pastry, Ibu Chef Ratna.',
        keywords: ['30 siswa', 'siswa', 'kelas x', 'jurusan kuliner', 'chef ratna', 'guru']
      },
      {
        id: 'c1-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Kegiatan lomba berlangsung di Laboratorium Bakery & Pastry Lantai 2 Kampus SMK Negeri 1 Tata Boga.',
        keywords: ['laboratorium', 'bakery', 'pastry', 'lantai 2', 'smk negeri 1 tata boga']
      },
      {
        id: 'c1-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Lomba memasak roti ini dilaksanakan pada hari Selasa, 14 Oktober 2026, mulai pukul 08.00 hingga 12.00 WIB.',
        keywords: ['selasa', '14 oktober 2026', 'oktober', '2026', '08.00']
      },
      {
        id: 'c1-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Tujuan lomba adalah melatih ketelitian siswa dalam menakar resep bahan, menguasai waktu fermentasi (proofing), dan membiasakan siswa bekerja di bawah batas waktu standar kompetisi.',
        keywords: ['melatih', 'ketelitian', 'resep', 'proofing', 'fermentasi', 'tujuan', 'waktu']
      },
      {
        id: 'c1-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa menguleni adonan tepung dan mentega hingga kalis, mengistirahatkan adonan di wadah tertutup agar mengembang, membentuk aneka isian cokelat keju, lalu memanggangnya di dalam oven bersuhu 180 derajat Celsius.',
        keywords: ['menguleni', 'kalis', 'adonan', 'proofing', 'oven', 'suhu 180', 'memanggang']
      },
      {
        id: 'c1-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Seluruh peserta berhasil menghasilkan total 60 loyang roti manis bertekstur empuk dan warna keemasan merata yang langsung dinilai dewan juri.',
        keywords: ['60 loyang', 'roti manis', 'empuk', 'keemasan', 'hasil']
      },
      {
        id: 'c1-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Semua murid sangat disiplin memakai apron dan topi chef. Roti buatan mereka matang merata, aromanya harum, dan tekstur rotinya lembut sekali,” puji Ibu Chef Ratna selaku juri utama.',
        authorNote: 'Ibu Chef Ratna (Guru Pembimbing Pastry & Bakery)',
        keywords: ['chef ratna', 'apron', 'lembut', 'harum', 'disiplin', 'matang']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['lomba', 'pastry', 'roti', 'membuat', 'kreasi', 'boga', 'adonan'],
        hint: 'Peristiwa utamanya adalah lomba perdana membuat kreasi pastry dan roti manis di sekolah.'
      },
      who: {
        requiredKeywords: ['siswa', 'murid', '30', 'kelas x', 'kuliner', 'ratna', 'guru', 'chef'],
        hint: 'Pihak yang terlibat adalah 30 siswa kelas X Kuliner didampingi guru pembimbing Ibu Chef Ratna.'
      },
      when: {
        requiredKeywords: ['selasa', '14', 'oktober', '2026', 'pukul 08.00'],
        hint: 'Lomba diadakan pada hari Selasa, 14 Oktober 2026 (pukul 08.00 - 12.00 WIB).'
      },
      where: {
        requiredKeywords: ['laboratorium', 'bakery', 'pastry', 'smk', 'sekolah'],
        hint: 'Tempat lomba adalah di Laboratorium Bakery & Pastry SMK Negeri 1 Tata Boga.'
      },
      why: {
        requiredKeywords: ['latih', 'resep', 'ketelitian', 'proofing', 'fermentasi', 'keterampilan', 'kompetisi', 'dasar', 'tujuan'],
        hint: 'Tujuan kegiatan untuk melatih ketelitian menakar resep, waktu proofing ragi, dan kecepatan kerja.'
      },
      how: {
        requiredKeywords: ['menguleni', 'kalis', 'adonan', 'oven', 'memanggang', 'panggang', 'suhu', 'proses', 'isi'],
        hint: 'Prosesnya dimulai dari menguleni adonan hingga kalis, proofing hingga mengembang, memberi isian, lalu memanggang di oven 180°C.'
      }
    }
  },

  // ==========================================
  // CASE 02 - KELOMPOK 2
  // ==========================================
  {
    id: 'case-02',
    caseNumber: '02',
    groupNumber: 2,
    groupName: 'Kelompok 2',
    topicTitle: 'Inovasi Menu Kantin Sehat: Siswa Kuliner Sulap Salak Lokal Jadi Puding & Selai Bergizi',
    category: 'Inovasi Kuliner & Olahan Buah Lokal',
    overview: 'Inovasi kreatif siswa jurusan kuliner yang mengolah buah salak lokal melimpah menjadi menu camilan kantin sehat berupa selai dan puding lembut tanpa bahan pengawet buatan.',
    cards: [
      {
        id: 'c2-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'Kantin SMK Negeri 2 Kuliner resmi meluncurkan menu baru berupa olahan selai dan puding salak sehat tanpa pemanis buatan hasil karya inovasi siswa jurusan kuliner.',
        keywords: ['kantin', 'menu baru', 'salak', 'puding', 'selai', 'sehat', 'siswa kuliner']
      },
      {
        id: 'c2-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Produk camilan sehat ini dibuat oleh kelompok siswa kelas XI Kuliner 2 yang bekerja sama dengan pengelola kantin sekolah.',
        keywords: ['siswa', 'murid', 'kelas xi', 'kuliner 2', 'pengelola kantin', 'kelompok']
      },
      {
        id: 'c2-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Penjualan dan peluncuran menu berlangsung di stan Kantin Sehat Kejujuran Kampus SMK Negeri 2 Kuliner.',
        keywords: ['kantin sehat', 'smk negeri 2 kuliner', 'stan', 'sekolah']
      },
      {
        id: 'c2-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Menu olahan salak ini pertama kali disajikan kepada warga sekolah pada hari Rabu, 15 Oktober 2026, tepat saat jam istirahat pertama pukul 09.30 WIB.',
        keywords: ['rabu', '15 oktober 2026', 'oktober', '2026', '09.30', 'istirahat']
      },
      {
        id: 'c2-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Inovasi ini bertujuan memanfaatkan hasil panen buah salak lokal petani sekitar sekolah yang melimpah, sekaligus menyediakan pilihan jajanan bergizi kaya serat bagi para murid.',
        keywords: ['panen', 'salak lokal', 'petani', 'bergizi', 'serat', 'jajanan', 'tujuan']
      },
      {
        id: 'c2-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa mengupas salak segar, memisahkan bijinya, memblender daging buah, lalu memasaknya bersama gula aren asli dan agar-agar rumput laut hingga mengental menjadi puding lembut dan selai roti.',
        keywords: ['mengupas', 'blender', 'gula aren', 'agar-agar', 'mengental', 'memasak', 'proses']
      },
      {
        id: 'c2-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Sebanyak 150 cup puding salak dan 50 botol selai ludes terjual dalam waktu 30 menit dengan harga terjangkau Rp3.000 per cup.',
        keywords: ['150 cup', '50 botol', 'ludes', '30 menit', 'rp3.000', 'laris']
      },
      {
        id: 'c2-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Rasanya manis segar alami dan seratnya terasa. Siswa kuliner kita berhasil membuktikan bahwa buah salak lokal bisa jadi jajanan sekolah yang modern dan sehat,” kata Pak Haryanto, koordinator kantin sekolah.',
        authorNote: 'Pak Haryanto (Koordinator Kantin Sehat Sekolah)',
        keywords: ['haryanto', 'manis', 'segar', 'salak', 'modern', 'sehat', 'kantin']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['salak', 'kantin', 'puding', 'selai', 'menu', 'sehat', 'olahan', 'inovasi'],
        hint: 'Peristiwa utamanya adalah peluncuran menu kantin sehat berupa puding dan selai olahan buah salak lokal.'
      },
      who: {
        requiredKeywords: ['siswa', 'murid', 'kelas xi', 'kuliner', 'haryanto', 'pengelola'],
        hint: 'Pihak yang terlibat adalah siswa kelas XI Kuliner 2 bersama pengelola kantin sekolah.'
      },
      when: {
        requiredKeywords: ['rabu', '15', 'oktober', '2026', '09.30'],
        hint: 'Peristiwa terjadi pada hari Rabu, 15 Oktober 2026 (pukul 09.30 WIB saat istirahat).'
      },
      where: {
        requiredKeywords: ['kantin', 'smk negeri 2 kuliner', 'sekolah'],
        hint: 'Lokasi peluncuran berada di Kantin Sehat SMK Negeri 2 Kuliner.'
      },
      why: {
        requiredKeywords: ['panen', 'salak', 'lokal', 'petani', 'gizi', 'serat', 'sehat', 'jajanan', 'tujuan'],
        hint: 'Alasannya untuk memanfaatkan panen salak lokal yang melimpah dan menyediakan jajanan kaya serat.'
      },
      how: {
        requiredKeywords: ['kupas', 'blender', 'masak', 'gula aren', 'agar-agar', 'aduk', 'proses', 'rebus'],
        hint: 'Caranya dengan mengupas salak, memblender daging buah, lalu memasaknya dengan gula aren dan agar-agar hingga mengental.'
      }
    }
  },

  // ==========================================
  // CASE 03 - KELOMPOK 3
  // ==========================================
  {
    id: 'case-03',
    caseNumber: '03',
    groupNumber: 3,
    groupName: 'Kelompok 3',
    topicTitle: 'Kunjungan Industri Siswa Kuliner: Belajar Olah Bumbu Opor & Standar Dapur Restoran Tradisional',
    category: 'Kunjungan Industri & Kuliner Nusantara',
    overview: 'Pengalaman berharga siswa SMK Kuliner dalam kunjungan industri ke Restoran Tradisional untuk mempelajari racikan bumbu rempah warisan dan alur kerja dapur komersial.',
    cards: [
      {
        id: 'c3-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'Siswa SMK Kuliner melaksanakan kunjungan industri ke Restoran Dapur Nusantara untuk mempelajari teknik meracik bumbu opor tradisional serta standar kebersihan dapur komersial.',
        keywords: ['kunjungan industri', 'siswa kuliner', 'dapur nusantara', 'opor', 'bumbu', 'restoran']
      },
      {
        id: 'c3-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Kegiatan ini diikuti oleh 45 siswa kelas XI Konsentrasi Kuliner didampingi 3 guru pembimbing boga, dan dipandu langsung oleh Head Chef Budi Santoso.',
        keywords: ['45 siswa', 'siswa', 'kelas xi', 'kuliner', 'guru', 'budi santoso', 'head chef']
      },
      {
        id: 'c3-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Kunjungan dilaksanakan di Restoran Tradisional Dapur Nusantara Heritage yang berlokasi di kawasan cagar budaya Kota Lama.',
        keywords: ['restoran', 'dapur nusantara', 'heritage', 'kota lama', 'lokasi']
      },
      {
        id: 'c3-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Acara kunjungan belajar industri berlangsung pada hari Kamis, 16 Oktober 2026, mulai pukul 09.00 sampai 14.00 WIB.',
        keywords: ['kamis', '16 oktober 2026', 'oktober', '2026', '09.00']
      },
      {
        id: 'c3-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Tujuannya adalah mengenalkan siswa pada ritme kerja nyata dapur restoran profesional dan menjaga kelestarian teknik mengolah bumbu rempah asli Indonesia.',
        keywords: ['tujuan', 'alur kerja', 'dapur restoran', 'profesional', 'rempah', 'melestarikan']
      },
      {
        id: 'c3-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa diajak berkeliling mengamati area dapur panas (hot kitchen), praktik menumis bumbu dasar putih secara tepat, serta mempraktikkan teknik plating masakan tradisional dengan daun pisang.',
        keywords: ['hot kitchen', 'menumis', 'bumbu putih', 'plating', 'daun pisang', 'proses']
      },
      {
        id: 'c3-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Seluruh siswa berhasil memasak uji coba 15 porsi opor ayam rempah sesuai standar restoran dan memperoleh sertifikat pengalaman industri.',
        keywords: ['15 porsi', 'opor ayam', 'standar restoran', 'sertifikat', 'hasil']
      },
      {
        id: 'c3-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Dapur komersial menuntut kecepatan tangan, konsistensi takaran rasa, dan kebersihan prima. Murid SMK Kuliner ini menunjukkan semangat kerja yang sangat bagus,” jelas Chef Budi Santoso.',
        authorNote: 'Chef Budi Santoso (Head Chef Restoran Dapur Nusantara)',
        keywords: ['budi santoso', 'kecepatan', 'kebersihan', 'semangat', 'rasa', 'chef']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['kunjungan', 'industri', 'restoran', 'bumbu', 'opor', 'dapur', 'belajar'],
        hint: 'Peristiwa utamanya adalah kunjungan industri siswa kuliner ke restoran tradisional untuk belajar racikan bumbu dan manajemen dapur.'
      },
      who: {
        requiredKeywords: ['45', 'siswa', 'murid', 'kelas xi', 'budi santoso', 'chef', 'guru'],
        hint: 'Pihak yang terlibat adalah 45 siswa kelas XI Kuliner dan Head Chef Budi Santoso.'
      },
      when: {
        requiredKeywords: ['kamis', '16', 'oktober', '2026', '09.00'],
        hint: 'Kunjungan dilakukan pada hari Kamis, 16 Oktober 2026 (pukul 09.00 - 14.00 WIB).'
      },
      where: {
        requiredKeywords: ['restoran', 'dapur nusantara', 'kota lama'],
        hint: 'Lokasi di Restoran Tradisional Dapur Nusantara Heritage, kawasan Kota Lama.'
      },
      why: {
        requiredKeywords: ['alur', 'kerja', 'profesional', 'rempah', 'restoran', 'lestari', 'tujuan', 'nyata'],
        hint: 'Tujuannya untuk mengenalkan ritme kerja dapur restoran profesional dan melestarikan bumbu rempah tradisional.'
      },
      how: {
        requiredKeywords: ['keliling', 'hot kitchen', 'menumis', 'bumbu', 'plating', 'daun pisang', 'proses', 'praktik'],
        hint: 'Prosesnya meliputi mengamati hot kitchen, belajar menumis bumbu dasar putih, dan praktik plating daun pisang.'
      }
    }
  },

  // ==========================================
  // CASE 04 - KELOMPOK 4
  // ==========================================
  {
    id: 'case-04',
    caseNumber: '04',
    groupNumber: 4,
    groupName: 'Kelompok 4',
    topicTitle: 'Aksi Dapur Higienis: Siswa SMK Kuliner Terapkan Standar Sanitasi Ketat Sebelum Praktik',
    category: 'Sanitasi & Keamanan Pangan Dapur',
    overview: 'Penerapan disiplin sanitasi dan keamanan pangan oleh siswa SMK Kuliner, mulai dari sterilisasi meja kerja stainless steel, pemisahan talenan warna, hingga mencuci tangan sesuai SOP.',
    cards: [
      {
        id: 'c4-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'Siswa SMK Kuliner melaksanakan aksi serentak penerapan Dapur Higienis (Hygienic Kitchen) untuk memastikan seluruh area memasak dan peralatan steril sebelum ujian praktik boga.',
        keywords: ['aksi', 'dapur higienis', 'sanitasi', 'steril', 'ujian praktik', 'siswa kuliner']
      },
      {
        id: 'c4-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Kegiatan ini dijalankan oleh seluruh 32 murid kelas XII Kuliner 1 di bawah pengawasan instruktur keamanan pangan sekolah, Ibu Maya.',
        keywords: ['32 murid', 'siswa', 'kelas xii', 'kuliner 1', 'ibu maya', 'instruktur']
      },
      {
        id: 'c4-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Aksi sanitasi ini berlangsung di Ruang Dapur Utama Pengolahan Makanan SMK Negeri 1 Pelita Kuliner.',
        keywords: ['dapur utama', 'pengolahan makanan', 'smk negeri 1 pelita kuliner', 'ruang']
      },
      {
        id: 'c4-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Pemeriksaan dan sterilisasi dapur dilaksanakan pada hari Senin, 20 Oktober 2026, mulai pukul 07.15 hingga 08.30 WIB sebelum kompor dinyalakan.',
        keywords: ['senin', '20 oktober 2026', 'oktober', '2026', '07.15']
      },
      {
        id: 'c4-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Langkah ini dilakukan untuk mencegah kontaminasi silang bakteri pada hidangan dan membiasakan siswa mematuhi standar kebersihan industri perhotelan bintang lima.',
        keywords: ['kontaminasi silang', 'bakteri', 'kebersihan', 'standar industri', 'hotel', 'tujuan']
      },
      {
        id: 'c4-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa menyemprot meja stainless steel dengan cairan pembersih food-grade, memisahkan talenan warna merah untuk daging mentah dan hijau untuk sayuran, serta mencuci tangan 6 langkah memakai sabun antiseptik.',
        keywords: ['stainless steel', 'talenan merah', 'talenan hijau', 'cuci tangan', 'antiseptik', 'prosedur']
      },
      {
        id: 'c4-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Hasil audit kebersihan menunjukkan nilai sempurna skor 100 persen tanpa adanya sisa kotoran atau sisa minyak pada 12 unit kompor praktik.',
        keywords: ['skor 100', 'sempurna', '12 unit kompor', 'audit', 'bersih']
      },
      {
        id: 'c4-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Di dunia kuliner profesional, hidangan lezat tidak ada artinya jika dapurnya kotor. Kebersihan pisau dan talenan adalah kunci utama keselamatan konsumen,” tegas Ibu Maya.',
        authorNote: 'Ibu Maya (Instruktur Sanitasi & Higiene Kuliner)',
        keywords: ['ibu maya', 'lezat', 'kebersihan', 'pisau', 'talenan', 'keselamatan', 'konsumen']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['sanitasi', 'higienis', 'dapur', 'kebersihan', 'steril', 'keamanan', 'pangan'],
        hint: 'Peristiwa utamanya adalah aksi penerapan standar sanitasi dapur higienis sebelum kegiatan praktik memasak.'
      },
      who: {
        requiredKeywords: ['32', 'siswa', 'murid', 'kelas xii', 'maya', 'instruktur', 'guru'],
        hint: 'Pihak yang terlibat adalah 32 siswa kelas XII Kuliner 1 bersama instruktur Ibu Maya.'
      },
      when: {
        requiredKeywords: ['senin', '20', 'oktober', '2026', '07.15'],
        hint: 'Kegiatan berlangsung pada hari Senin, 20 Oktober 2026 (pukul 07.15 - 08.30 WIB).'
      },
      where: {
        requiredKeywords: ['dapur', 'smk', 'pelita kuliner', 'ruang'],
        hint: 'Lokasi di Dapur Utama Praktik Tata Boga SMK Negeri 1 Pelita Kuliner.'
      },
      why: {
        requiredKeywords: ['kontaminasi', 'bakteri', 'bersih', 'standar', 'hotel', 'industri', 'tujuan', 'aman'],
        hint: 'Tujuannya mencegah kontaminasi silang bakteri dan melatih standar kebersihan hotel berbintang.'
      },
      how: {
        requiredKeywords: ['meja', 'talenan', 'merah', 'hijau', 'cuci tangan', 'semprot', 'sabun', 'stainless', 'proses'],
        hint: 'Prosedurnya dengan sterilisasi meja stainless steel, pemisahan talenan warna merah dan hijau, serta cuci tangan 6 langkah.'
      }
    }
  },

  // ==========================================
  // CASE 05 - KELOMPOK 5
  // ==========================================
  {
    id: 'case-05',
    caseNumber: '05',
    groupNumber: 5,
    groupName: 'Kelompok 5',
    topicTitle: 'Pameran Masterpiece Boga: Siswa SMK Tampilkan Seni Plating Makanan Penutup Nusantara yang Memukau',
    category: 'Pameran Karya & Seni Plating Kuliner',
    overview: 'Ajang pameran karya hidangan penutup (dessert) masterpiece karya siswa boga dengan keahlian tata hidang modern, hiasan gula karamel, dan garnish menawan.',
    cards: [
      {
        id: 'c5-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'Pameran tahunan bertajuk “Masterpiece Boga Nusantara” sukses digelar dengan menampilkan aneka kreasi seni tata hidang (food plating) kue tradisional bergaya modern karya siswa SMK.',
        keywords: ['pameran', 'masterpiece boga', 'plating', 'kue tradisional', 'tata hidang', 'siswa']
      },
      {
        id: 'c5-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Pameran ini diikuti oleh 28 siswa tingkat akhir jurusan Tata Boga serta dihadiri dewan juri tamu dari perwakilan hotel bintang empat.',
        keywords: ['28 siswa', 'siswa', 'tata boga', 'dewan juri', 'hotel', 'peserta']
      },
      {
        id: 'c5-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Karya-karya hidangan cantik ini dipamerkan di Aula Utama dan Galeri Kuliner SMK Karya Boga Indah.',
        keywords: ['aula utama', 'galeri kuliner', 'smk karya boga indah', 'sekolah']
      },
      {
        id: 'c5-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Pameran spektakuler ini dibuka pada hari Jumat, 24 Oktober 2026, mulai pukul 09.00 sampai 15.00 WIB.',
        keywords: ['jumat', '24 oktober 2026', 'oktober', '2026', '09.00']
      },
      {
        id: 'c5-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Acara ini bertujuan menguji kemampuan artistik siswa dalam menyajikan makanan tradisional agar memiliki daya tarik visual mewah layaknya hidangan restoran fine dining.',
        keywords: ['artistik', 'visual', 'mewah', 'fine dining', 'tata hidang', 'tujuan']
      },
      {
        id: 'c5-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa mengolah kue klepon dan getuk singkong, lalu menata hidangan di atas piring porselen putih menggunakan saus gula aren cair berbentuk lingkaran artistik dan garnish daun mint segar.',
        keywords: ['klepon', 'getuk', 'piring', 'saus gula aren', 'garnish', 'daun mint', 'proses']
      },
      {
        id: 'c5-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Sebanyak 28 karya hidangan dinilai oleh juri, dan menu “Klepon Lava Tart” karya siswi bernama Salsabila terpilih sebagai karya terfavorit dengan nilai 95.',
        keywords: ['28 karya', 'klepon lava tart', 'salsabila', 'terfavorit', 'nilai 95']
      },
      {
        id: 'c5-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Presentasi piringnya sangat berkelas dunia. Makanan tradisional yang biasanya sederhana berhasil diangkat menjadi sajian mewah yang memesona,” puji Pak Hendra, chef eksekutif juri tamu.',
        authorNote: 'Chef Hendra (Eksekutif Chef Hotel Bintang Empat)',
        keywords: ['chef hendra', 'berkelas dunia', 'sajian mewah', 'plating', 'memesona']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['pameran', 'masterpiece', 'boga', 'plating', 'tata hidang', 'karya', 'kue', 'dessert'],
        hint: 'Peristiwa utamanya adalah pameran Masterpiece Boga yang menampilkan seni plating makanan penutup tradisional bergaya modern.'
      },
      who: {
        requiredKeywords: ['28', 'siswa', 'murid', 'tata boga', 'salsabila', 'hendra', 'juri', 'chef'],
        hint: 'Pihak yang terlibat adalah 28 siswa jurusan Tata Boga dan dewan juri tamu Chef Hendra.'
      },
      when: {
        requiredKeywords: ['jumat', '24', 'oktober', '2026', '09.00'],
        hint: 'Pameran berlangsung pada hari Jumat, 24 Oktober 2026 (pukul 09.00 - 15.00 WIB).'
      },
      where: {
        requiredKeywords: ['aula', 'galeri', 'smk karya boga', 'sekolah'],
        hint: 'Lokasi di Aula Utama dan Galeri Kuliner SMK Karya Boga Indah.'
      },
      why: {
        requiredKeywords: ['artistik', 'visual', 'mewah', 'fine dining', 'tata hidang', 'tujuan', 'daya tarik'],
        hint: 'Tujuannya melatih keterampilan seni plating agar makanan tradisional tampil berkelas layaknya hidangan restoran mewah.'
      },
      how: {
        requiredKeywords: ['tata', 'klepon', 'getuk', 'saus', 'gula aren', 'garnish', 'piring', 'daun mint', 'proses'],
        hint: 'Caranya dengan memadukan kue klepon atau getuk, dihias saus gula aren melingkar artistik, dan garnish daun mint.'
      }
    }
  },

  // ==========================================
  // CASE 06 - KELOMPOK 6
  // ==========================================
  {
    id: 'case-06',
    caseNumber: '06',
    groupNumber: 6,
    groupName: 'Kelompok 6',
    topicTitle: 'Bazar Kewirausahaan Kuliner: Siswa SMK Raup Omzet Jutaan Rupiah dari Jualan Bento & Dessert Box',
    category: 'Kewirausahaan Kuliner (Gastro-Entrepreneurship)',
    overview: 'Program bazar kewirausahaan siswa SMK Kuliner menjual paket bento rice box lezat dan aneka dessert box kekinian yang laris diserbu pembeli hingga meraup omzet jutaan rupiah.',
    cards: [
      {
        id: 'c6-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Peristiwa Utama (Bahan Judul & Teras Berita)',
        content: 'Siswa SMK Kuliner menyelenggarakan bazar kewirausahaan bertajuk “Gastro-Youth Food Market” dengan menjual aneka menu bento rice box dan dessert box kekinian.',
        keywords: ['bazar', 'kewirausahaan', 'gastro-youth', 'bento', 'dessert box', 'siswa smk']
      },
      {
        id: 'c6-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat (Siapa yang Terlibat)',
        content: 'Bazar ini dikelola mandiri oleh 6 stan siswa kelas XI Kuliner dan dibeli antusias oleh ratusan warga sekolah serta masyarakat umum.',
        keywords: ['6 stan', 'siswa', 'kelas xi', 'kuliner', 'warga sekolah', 'masyarakat', 'pembeli']
      },
      {
        id: 'c6-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Peristiwa (Di mana Berlangsung)',
        content: 'Kegiatan bazar diselenggarakan di Halaman Parkir Depan dan Koridor SMK Bina Mandiri Kuliner.',
        keywords: ['halaman', 'koridor', 'smk bina mandiri kuliner', 'sekolah']
      },
      {
        id: 'c6-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Peristiwa (Kapan Terjadi)',
        content: 'Bazar kuliner berlangsung meriah pada hari Sabtu, 25 Oktober 2026, mulai pukul 07.30 hingga 13.00 WIB.',
        keywords: ['sabtu', '25 oktober 2026', 'oktober', '2026', '07.30']
      },
      {
        id: 'c6-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Kegiatan (Mengapa Diadakan)',
        content: 'Kegiatan ini diadakan untuk melatih siswa menghitung modal produksi (HPP), menentukan harga jual bersaing, serta mempraktikkan keterampilan komunikasi melayani pelanggan secara ramah.',
        keywords: ['modal', 'hpp', 'harga jual', 'komunikasi', 'melayani', 'kewirausahaan', 'tujuan']
      },
      {
        id: 'c6-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Kerja (Bagaimana Jalannya)',
        content: 'Siswa memasak hidangan ayam katsu dan saus teriyaki sejak pagi, mengemasnya dalam wadah bento ramah lingkungan, menyusun display stan yang menarik, serta menerima pembayaran nontunai QRIS.',
        keywords: ['ayam katsu', 'teriyaki', 'bento', 'ramah lingkungan', 'display', 'qris', 'proses']
      },
      {
        id: 'c6-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Akhir (Fakta & Angka)',
        content: 'Sebanyak 300 porsi bento dan 180 kotak dessert box ludes terjual dengan total omzet penjualan mencapai Rp5.200.000 dalam waktu kurang dari lima jam.',
        keywords: ['300 porsi', '180 kotak', 'omzet', 'rp5.200.000', 'ludes', 'hasil']
      },
      {
        id: 'c6-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber (Kutipan Tokoh)',
        content: '“Kami belajar bahwa sukses berbisnis kuliner tidak cuma soal rasa makanan yang enak, tetapi juga kemasan rapi dan senyum ramah saat melayani pembeli,” kata Dimas, ketua panitia bazar murid.',
        authorNote: 'Dimas Aditya (Ketua Panitia Bazar Siswa Kelas XI)',
        keywords: ['dimas', 'bisnis kuliner', 'kemasan rapi', 'senyum', 'ramah', 'melayani']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['bazar', 'kewirausahaan', 'bento', 'dessert box', 'jualan', 'gastro', 'kuliner'],
        hint: 'Peristiwa utamanya adalah bazar kewirausahaan kuliner siswa menjual aneka bento box dan dessert box.'
      },
      who: {
        requiredKeywords: ['siswa', 'murid', 'kelas xi', 'stan', 'dimas', 'warga', 'pembeli'],
        hint: 'Pihak yang terlibat adalah siswa kelas XI Kuliner bersama ketua panitia murid Dimas Aditya.'
      },
      when: {
        requiredKeywords: ['sabtu', '25', 'oktober', '2026', '07.30'],
        hint: 'Bazar diadakan pada hari Sabtu, 25 Oktober 2026 (pukul 07.30 - 13.00 WIB).'
      },
      where: {
        requiredKeywords: ['halaman', 'koridor', 'smk bina mandiri', 'sekolah'],
        hint: 'Lokasi bazar di Halaman dan Koridor SMK Bina Mandiri Kuliner.'
      },
      why: {
        requiredKeywords: ['hpp', 'modal', 'harga', 'jual', 'wirausaha', 'bisnis', 'pelanggan', 'tujuan', 'latih'],
        hint: 'Tujuannya melatih siswa menghitung modal/HPP, menentukan harga jual bersaing, dan melayani pelanggan dengan ramah.'
      },
      how: {
        requiredKeywords: ['masak', 'ayam katsu', 'bento', 'kemas', 'display', 'qris', 'jual', 'proses'],
        hint: 'Caranya dengan memasak paket bento ayam katsu sejak pagi, mengemas dalam wadah ramah lingkungan, dan melayani pembeli dengan QRIS.'
      }
    }
  }
];

export function getCaseById(caseId: string): NewsCase {
  return NEWS_CASES.find((c) => c.id === caseId) || NEWS_CASES[0];
}

export function getCaseByGroup(groupName: string): NewsCase {
  return NEWS_CASES.find((c) => c.groupName === groupName) || NEWS_CASES[0];
}

