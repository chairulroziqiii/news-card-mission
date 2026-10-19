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
    topicTitle: 'Gelar Inovasi Olahan Mocaf & Kelor: Siswa SMK Ciptakan Pastry Bebas Gluten',
    category: 'Inovasi Produk & Pangan Lokal',
    overview: 'Inovasi siswa kejuruan kuliner dalam mengolah tepung mocaf fermentasi dan serbuk daun kelor menjadi produk pastry modern bernilai jual tinggi serta ramah bagi kesehatan.',
    cards: [
      {
        id: 'c1-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Pameran gelar karya inovasi boga bertajuk “Pastry Sehat Berbasis Pangan Lokal Nusantara” sukses diselenggarakan sebagai wujud terobosan siswa kejuruan kuliner dalam menciptakan aneka olahan kue dan roti bebas gluten (gluten-free).',
        keywords: ['pameran', 'gelar karya', 'pastry sehat', 'pangan lokal', 'bebas gluten', 'inovasi']
      },
      {
        id: 'c1-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak yang Terlibat',
        content: 'Kegiatan riset dan produksi olahan pangan ini digagas oleh 36 murid kelas XI Konsentrasi Keahlian Kuliner SMK Negeri 3 Magelang dengan pendampingan intensif dari praktisi asosiasi pastry nasional.',
        keywords: ['36 murid', 'siswa', 'kelas xi', 'kuliner', 'smk negeri 3 magelang', 'chef']
      },
      {
        id: 'c1-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Kegiatan',
        content: 'Ajang unjuk kreasi dan uji rasa hidangan ini diselenggarakan di Laboratorium Dapur Bakery & Pastry serta Galeri Boga Terbuka SMKN 3 Magelang, Jawa Tengah.',
        keywords: ['laboratorium', 'dapur bakery', 'smkn 3 magelang', 'jawa tengah']
      },
      {
        id: 'c1-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Acara pameran dan uji organoleptik masakan dibuka resmi pada hari Kamis, 22 Oktober 2026, berlangsung mulai pukul 08.30 hingga 14.30 WIB.',
        keywords: ['kamis', '22 oktober 2026', 'oktober', '2026', '08.30']
      },
      {
        id: 'c1-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Pembuatan',
        content: 'Inovasi ini bertujuan menekan ketergantungan gandum impor dengan mendayagunakan komoditas singkong dan daun kelor lokal, sekaligus menghadirkan produk camilan bergizi tinggi yang aman dikonsumsi masyarakat berkebutuhan diet khusus.',
        keywords: ['ketergantungan gandum', 'pangan lokal', 'singkong', 'kelor', 'diet khusus', 'tujuan']
      },
      {
        id: 'c1-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses & Metode Pengolahan',
        content: 'Para murid memformulasikan tepung mocaf terfermentasi dengan serbuk daun kelor mikro, menerapkan teknik laminasi lipatan mentega dingin untuk croissant, serta memanggang adonan pada suhu presisi 180 derajat Celsius guna menjaga kerenyahan tekstur dan warna hijau alami.',
        keywords: ['formulasi', 'mocaf', 'laminasi', 'croissant', 'suhu 180', 'memanggang']
      },
      {
        id: 'c1-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Data Hasil Uji Rasa',
        content: 'Sebanyak 250 boks paket croissant dan muffin kelor ludes terjual dalam kurun 45 menit pertama, dengan nilai survei kepuasan rasa mencapai 92 persen dari 150 panelis pengunjung.',
        keywords: ['250 boks', 'muffin kelor', '45 menit', 'survei kepuasan', '92 persen']
      },
      {
        id: 'c1-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Siswa tidak sekadar membuat kue yang enak, tetapi mampu menguasai ilmu kimia pangan lokal. Tekstur pastry mocaf ini sangat renyah, aromanya harum, dan memiliki nilai komersial tinggi di pasaran,” puji Chef Andira Kusuma, praktisi pastry hotel bintang lima.',
        authorNote: 'Chef Andira Kusuma (Praktisi Pastry & Konsultan Kuliner)',
        keywords: ['andira kusuma', 'pastry', 'kimia pangan', 'komersial', 'renyah']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['pameran', 'pastry', 'mocaf', 'kelor', 'inovasi', 'gluten', 'boga'],
        hint: 'Peristiwa utamanya adalah pameran inovasi pastry sehat berbahan tepung mocaf dan daun kelor bebas gluten karya siswa.'
      },
      who: {
        requiredKeywords: ['36 murid', 'murid', 'siswa', 'smk negeri 3 magelang', 'kuliner', 'kelas xi'],
        hint: 'Pihak yang terlibat adalah 36 murid kelas XI Kuliner SMKN 3 Magelang didampingi praktisi boga.'
      },
      when: {
        requiredKeywords: ['kamis', '22', 'oktober', '2026'],
        hint: 'Peristiwa berlangsung pada hari Kamis, 22 Oktober 2026.'
      },
      where: {
        requiredKeywords: ['laboratorium', 'dapur', 'smkn 3 magelang', 'magelang'],
        hint: 'Lokasi kegiatan di Dapur Bakery & Pastry SMKN 3 Magelang.'
      },
      why: {
        requiredKeywords: ['gandum', 'singkong', 'kelor', 'impor', 'diet', 'pangan', 'lokal', 'kesehatan'],
        hint: 'Tujuannya menekan ketergantungan gandum impor dan memanfaatkan komoditas pangan lokal yang menyehatkan.'
      },
      how: {
        requiredKeywords: ['formulasi', 'laminasi', 'adonan', 'memanggang', 'suhu', 'croissant', 'tekstur', 'mentega'],
        hint: 'Jelaskan bagaimana siswa memformulasi adonan mocaf dan kelor, melaminasi adonan, serta memanggang pada suhu presisi 180°C.'
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
    topicTitle: 'Juara LKS Tingkat Nasional: Siswa SMK Raih Medali Emas Berkat Kreasi Salmon Rawon Kecombrang',
    category: 'Kompetisi & Prestasi Tata Boga',
    overview: 'Keberhasilan gemilang tim siswa kuliner dalam menjuarai ajang Lomba Kompetensi Siswa (LKS) Nasional melalui sajian hidangan fusi tradisional modern.',
    cards: [
      {
        id: 'c2-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Tim siswa konsentrasi kuliner berhasil menorehkan prestasi membanggakan dengan merebut medali emas dalam ajang Lomba Kompetensi Siswa (LKS) SMK Tingkat Nasional Bidang Cooking (Keahlian Memasak).',
        keywords: ['medali emas', 'lomba kompetensi siswa', 'lks', 'cooking', 'prestasi', 'juara']
      },
      {
        id: 'c2-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Berprestasi',
        content: 'Prestasi bergengsi ini diraih oleh dua siswa berbakat, yakni Fadhil Ramadhan dan Nabila Putri, perwakilan siswa kelas XII Konsentrasi Keahlian Kuliner SMK Negeri 5 Surakarta.',
        keywords: ['fadhil', 'nabila', 'smk negeri 5 surakarta', 'murid', 'siswa', 'kelas xii']
      },
      {
        id: 'c2-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Pertandingan',
        content: 'Babak final kompetisi memasak tingkat nasional ini dilangsungkan di Exhibition Hall Grand City Convention Center, Kota Surabaya, Jawa Timur.',
        keywords: ['grand city', 'convention center', 'surabaya', 'jawa timur', 'hall']
      },
      {
        id: 'c2-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pengumuman',
        content: 'Sesi live cooking final berlangsung ketat dan penganugerahan juara resmi diumumkan pada hari Sabtu, 17 Oktober 2026, pukul 16.00 WIB.',
        keywords: ['sabtu', '17 oktober 2026', 'oktober', '2026', '16.00']
      },
      {
        id: 'c2-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Alasan & Tujuan Kompetisi',
        content: 'Keikutsertaan dalam kompetisi ini bertujuan menguji kematangan teknik memasak berstandar internasional, penguasaan manajemen waktu dapur, serta memperebutkan tiket seleksi perwakilan Indonesia pada WorldSkills Asia.',
        keywords: ['standar internasional', 'manajemen waktu', 'worldskills', 'seleksi', 'kompetensi']
      },
      {
        id: 'c2-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Proses Memasak & Kreasi Menu',
        content: 'Menghadapi bahan misteri (mystery black box) dalam durasi 90 menit, kedua siswa memasak hidangan fusion “Pan-seared Salmon Rawon Kecombrang” menggunakan teknik temperatur rendah (sous-vide) yang disajikan dengan reduksi bumbu kluwek pekat dan puree ubi jalar ungu.',
        keywords: ['salmon', 'rawon', 'kecombrang', 'sous-vide', 'black box', '90 menit', 'kluwek']
      },
      {
        id: 'c2-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Penilaian & Catatan Dewan Juri',
        content: 'Tim SMKN 5 Surakarta mengungguli 34 finalis perwakilan provinsi dari seluruh pelosok tanah air dengan perolehan skor tertinggi 94,80 poin pada aspek cita rasa, higienitas kerja, dan kerapian penyajian.',
        keywords: ['34 finalis', 'skor 94,80', 'poin', 'cita rasa', 'higienitas']
      },
      {
        id: 'c2-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Kematangan salmon sangat sempurna dan kuah rawon kluweknya berpadu harmonis dengan segarnya bunga kecombrang. Keterampilan teknik dan ketenangan kerja siswa ini benar-benar setara dengan chef restoran bintang lima,” puji Chef Chandra Wijaya, Ketua Dewan Juri Cooking LKS.',
        authorNote: 'Chef Chandra Wijaya (Ketua Dewan Juri Cooking LKS Nasional)',
        keywords: ['chandra wijaya', 'dewan juri', 'kematangan salmon', 'rawon', 'bintang lima']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['emas', 'lks', 'lomba', 'cooking', 'juara', 'salmon', 'rawon', 'prestasi', 'kompetisi'],
        hint: 'Peristiwa utamanya adalah kemenangan meraih medali emas LKS Nasional Bidang Cooking melalui kreasi Salmon Rawon Kecombrang.'
      },
      who: {
        requiredKeywords: ['fadhil', 'nabila', 'smk negeri 5 surakarta', 'murid', 'siswa', 'tim'],
        hint: 'Pihak yang terlibat adalah Fadhil Ramadhan dan Nabila Putri dari SMKN 5 Surakarta.'
      },
      when: {
        requiredKeywords: ['sabtu', '17', 'oktober', '2026'],
        hint: 'Peristiwa pengumuman juara pada hari Sabtu, 17 Oktober 2026.'
      },
      where: {
        requiredKeywords: ['grand city', 'surabaya', 'convention center', 'jawa timur'],
        hint: 'Lokasi kompetisi di Exhibition Hall Grand City Convention Center Surabaya.'
      },
      why: {
        requiredKeywords: ['worldskills', 'standar', 'kompetensi', 'internasional', 'uji', 'prestasi'],
        hint: 'Tujuannya menguji kompetensi teknik memasak berstandar global dan memperebutkan tiket seleksi WorldSkills Asia.'
      },
      how: {
        requiredKeywords: ['salmon', 'rawon', 'sous-vide', 'black box', '90 menit', 'kluwek', 'kecombrang'],
        hint: 'Jelaskan bagaimana siswa mengolah bahan misteri selama 90 menit dengan teknik sous-vide salmon dan saus rawon kluwek.'
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
    topicTitle: 'Standar Kebersihan Dunia Industri: Dapur Boga SMK Raih Sertifikasi Keamanan Pangan HACCP Bintang Tiga',
    category: 'Sanitasi, Higienitas & Keamanan Pangan',
    overview: 'Pemberian sertifikasi kelayakan higiene dan manajemen keamanan pangan bertaraf internasional untuk laboratorium dapur praktik siswa.',
    cards: [
      {
        id: 'c3-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Laboratorium Dapur Produksi Kuliner sekolah kejuruan secara resmi menerima pengakuan Sertifikasi Keamanan Pangan Hazard Analysis Critical Control Point (HACCP) Tingkat Bintang Tiga dari badan sertifikasi mutu pangan independen.',
        keywords: ['sertifikasi', 'keamanan pangan', 'haccp', 'bintang tiga', 'laboratorium dapur', 'higienitas']
      },
      {
        id: 'c3-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat',
        content: 'Penetapan predikat ini diraih berkat dedikasi 120 murid kejuruan kuliner bersama jajaran guru instruktur tata boga SMK Negeri 1 Cirebon yang didampingi langsung oleh tim auditor Badan Pengawas Obat dan Makanan (BPOM).',
        keywords: ['120 murid', 'guru', 'smk negeri 1 cirebon', 'bpom', 'auditor', 'siswa']
      },
      {
        id: 'c3-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Fasilitas',
        content: 'Pemeriksaan audit dan penyerahan piagam akreditasi diselenggarakan di Kompleks Dapur Pengolahan Komersial Teaching Factory SMKN 1 Cirebon, Jawa Barat.',
        keywords: ['dapur pengolahan', 'smkn 1 cirebon', 'cirebon', 'jawa barat']
      },
      {
        id: 'c3-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pengesahan',
        content: 'Audit verifikasi lapangan rampung dan piagam sertifikat resmi diserahkan pada hari Selasa, 10 November 2026, pukul 10.00 WIB.',
        keywords: ['selasa', '10 november 2026', 'november', '2026', '10.00']
      },
      {
        id: 'c3-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Alasan & Tujuan Sertifikasi',
        content: 'Sertifikasi HACCP ini diraih guna memastikan makanan olahan praktik siswa bebas kontaminasi bakteri bahaya, sekaligus memberi jaminan keahlian higienitas bersertifikat bagi siswa saat bekerja di dapur hotel dan maskapai penerbangan internasional.',
        keywords: ['bebas kontaminasi', 'bakteri', 'hotel', 'maskapai', 'sertifikat kompetensi', 'higienitas']
      },
      {
        id: 'c3-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Prosedur & Disiplin Kerja',
        content: 'Siswa menerapkan sistem zonasi warna talenan pemotong (merah daging, biru seafood, hijau sayur), monitoring temperatur lemari pendingin di bawah 4 derajat Celsius, teknik mencuci tangan enam langkah, serta mengenakan seragam koki steril lengkap dengan hairnet dan sepatu keselamatan.',
        keywords: ['talenan', 'zonasi warna', 'suhu 4 derajat', 'cuci tangan', 'hairnet', 'steril', 'sepatu']
      },
      {
        id: 'c3-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Hasil Uji Laboratorium',
        content: 'Hasil uji usap (swab test) mikrobiologi terhadap 60 titik meja stainless steel, pisau, dan telapak tangan siswa menunjukkan angka kontaminasi bakteri nol (zero bacterial contamination) yang memenuhi standar industri makanan global.',
        keywords: ['swab test', 'mikrobiologi', 'zero contamination', '60 titik', 'stainless steel']
      },
      {
        id: 'c3-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Sangat jarang fasilitas dapur sekolah memiliki kedisiplinan rantai dingin dan pencegahan kontaminasi silang seketat ini. Murid-murid SMKN 1 Cirebon telah siap bekerja di dapur profesional mana pun di dunia,” ujar Dr. Hendro Susanto, Auditor Utama Keamanan Pangan.',
        authorNote: 'Dr. Hendro Susanto (Auditor Utama Lembaga Sertifikasi Keamanan Pangan)',
        keywords: ['hendro susanto', 'auditor', 'kontaminasi silang', 'rantai dingin', 'profesional']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['sertifikasi', 'keamanan pangan', 'haccp', 'bintang tiga', 'dapur', 'higienitas', 'sanitasi'],
        hint: 'Peristiwa utamanya adalah keberhasilan Dapur Boga SMKN 1 Cirebon meraih sertifikasi keamanan pangan HACCP Bintang Tiga.'
      },
      who: {
        requiredKeywords: ['120 murid', 'murid', 'siswa', 'smk negeri 1 cirebon', 'bpom', 'guru'],
        hint: 'Pihak yang terlibat adalah 120 murid kuliner SMKN 1 Cirebon bersama guru pembimbing dan tim auditor BPOM.'
      },
      when: {
        requiredKeywords: ['selasa', '10', 'november', '2026'],
        hint: 'Peristiwa peresmian sertifikasi berlangsung pada Selasa, 10 November 2026.'
      },
      where: {
        requiredKeywords: ['dapur', 'smkn 1 cirebon', 'cirebon', 'laboratorium'],
        hint: 'Lokasi di Laboratorium Dapur Produksi SMKN 1 Cirebon.'
      },
      why: {
        requiredKeywords: ['kontaminasi', 'bakteri', 'keamanan', 'higienitas', 'industri', 'hotel', 'standar'],
        hint: 'Tujuannya memastikan produk bebas kontaminasi bakteri dan membekali siswa standar kebersihan industri perhotelan.'
      },
      how: {
        requiredKeywords: ['talenan', 'warna', 'suhu', 'cuci tangan', 'hairnet', 'zonasi', 'chiller', 'steril'],
        hint: 'Jelaskan bagaimana siswa menerapkan pemisahan talenan warna-warni, menjaga suhu pendingin di bawah 4°C, dan sanitasi ketat.'
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
    topicTitle: 'Kewirausahaan Siswa Boga: Food Truck Siswa SMK Raup Omzet Rp15 Juta dalam Sepekan',
    category: 'Teaching Factory & Bisnis Kuliner Modern',
    overview: 'Keberhasilan proyek kewirausahaan siswa boga dalam mengoperasikan unit food truck komersial dengan sajian menu kekinian bernilai jual tinggi.',
    cards: [
      {
        id: 'c4-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Inisiatif bisnis kuliner mobile berbasis food truck bertajuk “Boga Rasa Wheels” yang dioperasikan sepenuhnya oleh siswa kejuruan sukses membukukan total omzet penjualan mencapai Rp15,4 juta dalam pekan pertama operasionalnya.',
        keywords: ['food truck', 'boga rasa wheels', 'omzet', '15 juta', 'bisnis kuliner', 'kewirausahaan']
      },
      {
        id: 'c4-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Pengelola',
        content: 'Unit usaha keliling ini digerakkan secara bergiliran oleh 24 murid kelas XII Konsentrasi Kuliner SMK Negeri 2 Boyolali yang tergabung dalam program Teaching Factory (TEFA) Boga Mandiri.',
        keywords: ['24 murid', 'siswa', 'kelas xii', 'smk negeri 2 boyolali', 'tefa', 'kuliner']
      },
      {
        id: 'c4-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Operasional',
        content: 'Food truck siswa mangkal melayani pesanan di kawasan pusat keramaian Taman Pandanaran dan Alun-Alun Kidul Boyolali, Jawa Tengah.',
        keywords: ['taman pandanaran', 'alun-alun kidul', 'boyolali', 'jawa tengah']
      },
      {
        id: 'c4-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Puncak penjualan teramai tercatat saat kegiatan Car Free Day pada hari Minggu, 15 November 2026, mulai pukul 06.00 hingga 11.30 WIB.',
        keywords: ['minggu', '15 november 2026', 'november', '2026', 'car free day', '06.00']
      },
      {
        id: 'c4-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Program',
        content: 'Proyek food truck ini dirancang guna melatih keterampilan nyata murid dalam kalkulasi biaya bahan (food costing), manajemen kasir digital, ketahanan mental wirausaha, serta kemampuan komunikasi langsung melayani pelanggan perkotaan.',
        keywords: ['food costing', 'wirausaha', 'kasir digital', 'pelanggan', 'teaching factory', 'mental']
      },
      {
        id: 'c4-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Sistem Kerja & Menu Andalan',
        content: 'Para murid bertugas terbagi dalam tim juru masak (line cook), barista peracik minuman, kasir pembayaran QRIS digital, serta pramuniaga dengan menyajikan menu signature rice bowl ayam asap rempah Boyolali dan artisan iced butterfly pea tea.',
        keywords: ['ayam asap', 'rice bowl', 'artisan tea', 'qris', 'barista', 'line cook', 'kasir']
      },
      {
        id: 'c4-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Data Transaksi & Profit',
        content: 'Tercatat sebanyak 460 porsi makanan utama dan 380 gelas minuman ludes terjual dalam sepekan, menghasilkan keuntungan laba bersih (net profit) sebesar 34 persen setelah dikurangi seluruh biaya bahan baku.',
        keywords: ['460 porsi', '380 gelas', 'laba bersih', '34 persen', 'transaksi']
      },
      {
        id: 'c4-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Kami belajar bahwa memasak hanya separuh dari bisnis kuliner. Yang paling menantang adalah menjaga konsistensi rasa saat antrean mengular dan mengelola arus kas harian tanpa selisih,” ungkap Dimas Bagus Pamungkas, ketua koordinator tim siswa food truck.',
        authorNote: 'Dimas Bagus Pamungkas (Ketua Tim Pengelola Siswa Food Truck)',
        keywords: ['dimas bagus', 'arus kas', 'konsistensi rasa', 'antrean', 'siswa']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['food truck', 'omzet', 'boga rasa', 'bisnis', 'kuliner', 'kewirausahaan', 'penjualan'],
        hint: 'Peristiwa utamanya adalah keberhasilan operasional food truck siswa SMKN 2 Boyolali yang meraup omzet belasan juta.'
      },
      who: {
        requiredKeywords: ['24 murid', 'murid', 'siswa', 'smk negeri 2 boyolali', 'tefa', 'dimas'],
        hint: 'Dikelola oleh 24 murid kelas XII Kuliner SMK Negeri 2 Boyolali.'
      },
      when: {
        requiredKeywords: ['minggu', '15', 'november', '2026'],
        hint: 'Puncak penjualan berlangsung pada hari Minggu, 15 November 2026.'
      },
      where: {
        requiredKeywords: ['taman pandanaran', 'alun-alun', 'boyolali'],
        hint: 'Berlokasi di Taman Pandanaran dan Alun-Alun Kidul Boyolali.'
      },
      why: {
        requiredKeywords: ['wirausaha', 'food costing', 'pelanggan', 'bisnis', 'teaching factory', 'kewirausahaan'],
        hint: 'Tujuannya melatih keterampilan berwirausaha, kalkulasi food costing, dan melayani pembeli secara langsung.'
      },
      how: {
        requiredKeywords: ['rice bowl', 'ayam asap', 'qris', 'barista', 'masak', 'food truck', 'antrean'],
        hint: 'Jelaskan bagaimana siswa membagi tugas memasak menu rice bowl, menyajikan minuman artisan, dan transaksi kasir QRIS.'
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
    topicTitle: 'Sukses Jalani PKL Industri: 18 Siswa SMK Kuliner Dipercaya Mengelola Jamuan Gala Dinner 40 Duta Besar',
    category: 'Praktik Kerja Lapangan & Fine Dining',
    overview: 'Pengalaman murid kejuruan boga yang sedang menjalani Praktik Kerja Lapangan (PKL) dipercaya menangani jamuan resmi makan malam diplomatik tamu kenegaraan di hotel bintang lima.',
    cards: [
      {
        id: 'c5-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Sebanyak 18 siswa kejuruan kuliner yang tengah menjalani Praktik Kerja Lapangan (PKL) menuai apresiasi tinggi setelah sukses mengelola jamuan makan malam resmi (Gala Dinner) kenegaraan bertaraf internasional.',
        keywords: ['gala dinner', 'pkl', 'praktik kerja lapangan', 'duta besar', 'jamuan', 'diplomatik']
      },
      {
        id: 'c5-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Pihak Terlibat',
        content: 'Para siswa merupakan murid kelas XII Konsentrasi Keahlian Kuliner SMK Negeri 57 Jakarta yang magang di bawah arahan langsung Executive Chef hotel bintang lima bertaraf internasional.',
        keywords: ['18 siswa', 'siswa', 'murid', 'smk negeri 57 jakarta', 'executive chef', 'magang']
      },
      {
        id: 'c5-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Acara',
        content: 'Perjamuan makan malam diplomatik diselenggarakan di Grand Ballroom The Heritage Hotel Jakarta, kawasan Jakarta Selatan.',
        keywords: ['grand ballroom', 'the heritage hotel', 'jakarta selatan', 'hotel']
      },
      {
        id: 'c5-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Gala dinner penyambutan delegasi diplomatik berlangsung khidmat pada hari Jumat malam, 20 November 2026, mulai pukul 19.00 sampai 22.30 WIB.',
        keywords: ['jumat', '20 november 2026', 'november', '2026', '19.00']
      },
      {
        id: 'c5-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan & Arti Penting',
        content: 'Penugasan siswa magang dalam acara kenegaraan ini bertujuan membuktikan kesiapan kompetensi lulusan SMK dalam mematuhi standar operasional prosedur (SOP) perjamuan mewah (fine dining) yang menuntut presisi tanpa cela.',
        keywords: ['fine dining', 'sop', 'presisi', 'standar perhotelan', 'kompetensi', 'kenegaraan']
      },
      {
        id: 'c5-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Dinamika Dapur & Menu Sajian',
        content: 'Siswa dibagi ke dalam brigade dapur: divisi Cold Kitchen menyiapkan hidangan pembuka Scallop Asam Kandis, divisi Main Course mematangkan 120 porsi Beef Tenderloin Bumbu Maranggi, serta divisi Pastry menyusun penataan (plating) cokelat ganache emas secara serentak dalam hitungan detik.',
        keywords: ['cold kitchen', 'main course', 'pastry', 'plating', 'tenderloin', 'brigade dapur', 'scallop']
      },
      {
        id: 'c5-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Apresiasi Tamu Diplomatik',
        content: 'Jamuan makan lima babak (5-course meal) yang disajikan kepada 40 Duta Besar negara sahabat menuai tepuk tangan kehormatan (standing ovation), hingga seluruh 18 siswa magang langsung ditawari kontrak kerja profesional setelah lulus.',
        keywords: ['40 duta besar', '5-course', 'standing ovation', 'kontrak kerja', 'diplomat']
      },
      {
        id: 'c5-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Di dapur fine dining perhotelan, kesalahan satu detik bisa merusak hidangan. Murid SMK ini menunjukkan ketenangan, teknik pemotongan presisi, dan etos kerja yang setara dengan staf senior,” puji Chef Guillaume Pierre, Executive Chef The Heritage Hotel.',
        authorNote: 'Chef Guillaume Pierre (Executive Chef The Heritage Hotel Jakarta)',
        keywords: ['guillaume pierre', 'executive chef', 'presisi', 'fine dining', 'etos kerja']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['gala dinner', 'pkl', 'magang', 'jamuan', 'duta besar', 'diplomatik', 'fine dining'],
        hint: 'Peristiwa utamanya adalah kesuksesan 18 siswa SMK saat PKL mengelola jamuan gala dinner 40 duta besar negara sahabat.'
      },
      who: {
        requiredKeywords: ['18 siswa', 'siswa', 'murid', 'smk negeri 57 jakarta', 'duta besar', 'chef'],
        hint: 'Pihak yang terlibat adalah 18 murid PKL Kuliner SMKN 57 Jakarta di bawah bimbingan Executive Chef.'
      },
      when: {
        requiredKeywords: ['jumat', '20', 'november', '2026'],
        hint: 'Waktu pelaksanaan pada Jumat malam, 20 November 2026.'
      },
      where: {
        requiredKeywords: ['grand ballroom', 'the heritage hotel', 'jakarta', 'ballroom'],
        hint: 'Lokasi di Grand Ballroom The Heritage Hotel Jakarta.'
      },
      why: {
        requiredKeywords: ['fine dining', 'sop', 'presisi', 'standar', 'kompetensi', 'hotel'],
        hint: 'Tujuannya membuktikan kesiapan kompetensi siswa dalam menerapkan SOP jamuan fine dining berskala kenegaraan.'
      },
      how: {
        requiredKeywords: ['brigade', 'cold kitchen', 'main course', 'pastry', 'plating', 'tenderloin', 'kursus'],
        hint: 'Jelaskan bagaimana siswa dibagi ke dalam divisi cold kitchen, main course, dan pastry untuk menyiapkan jamuan 5 babak.'
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
    topicTitle: 'Eksplorasi Gastronomi Nusantara: Siswa SMK Pamerkan 45 Hidangan Rempah Kuno yang Nyaris Punah',
    category: 'Gastronomi Budaya & Pelestarian Warisan Kuliner',
    overview: 'Penelitian dan unjuk karya siswa kuliner dalam mendokumentasikan serta menghidupkan kembali puluhan resep pusaka masakan tradisional nusantara.',
    cards: [
      {
        id: 'c6-card-01',
        number: '01',
        label: 'KARTU INFORMASI 01',
        sublabel: 'Laporan Peristiwa',
        content: 'Festival Gastronomi Budaya bertajuk “Menghidupkan Rempah Pusaka yang Terlupakan” resmi digelar, menampilkan rekonstruksi 45 jenis hidangan tradisional kuno nusantara yang hampir punah.',
        keywords: ['festival gastronomi', 'rempah pusaka', '45 hidangan', 'tradisional kuno', 'rekonstruksi', 'kuliner']
      },
      {
        id: 'c6-card-02',
        number: '02',
        label: 'KARTU INFORMASI 02',
        sublabel: 'Tim Riset Siswa',
        content: 'Proyek pelestarian warisan budaya ini diprakarsai oleh 75 murid lintas tingkat Konsentrasi Keahlian Kuliner SMK Negeri 1 Sewon Bantul bekerja sama dengan paguyuban pemerhati sejarah boga nusantara.',
        keywords: ['75 murid', 'siswa', 'smk negeri 1 sewon', 'bantul', 'kuliner', 'riset']
      },
      {
        id: 'c6-card-03',
        number: '03',
        label: 'KARTU INFORMASI 03',
        sublabel: 'Lokasi Penyelenggaraan',
        content: 'Festival diselenggarakan di Pendopo Sasana Hinggil Dhinggir Keraton Yogyakarta dan pelataran Kampus Seni SMKN 1 Sewon, D.I. Yogyakarta.',
        keywords: ['pendopo', 'sasana hinggil', 'keraton', 'yogyakarta', 'smkn 1 sewon']
      },
      {
        id: 'c6-card-04',
        number: '04',
        label: 'KARTU INFORMASI 04',
        sublabel: 'Waktu Pelaksanaan',
        content: 'Pameran dibuka untuk masyarakat luas dan wisatawan pada hari Sabtu, 28 November 2026, mulai pukul 09.00 hingga 17.00 WIB.',
        keywords: ['sabtu', '28 november 2026', 'november', '2026', '09.00']
      },
      {
        id: 'c6-card-05',
        number: '05',
        label: 'KARTU INFORMASI 05',
        sublabel: 'Tujuan Pelestarian',
        content: 'Kegiatan ini diselenggarakan guna merevitalisasi resep warisan leluhur nusantara dari kepunahan, mengenalkan kembali khasiat rempah endemik kepada generasi muda, serta mendokumentasikan kekayaan gastronomi boga bangsa.',
        keywords: ['merevitalisasi', 'warisan leluhur', 'rempah endemik', 'generasi muda', 'gastronomi', 'sejarah']
      },
      {
        id: 'c6-card-06',
        number: '06',
        label: 'KARTU INFORMASI 06',
        sublabel: 'Metode Penggalian Resep',
        content: 'Selama tiga bulan, para murid mewawancarai juru masak keraton sepuh, menerjemahkan naskah resep kuno serat centhini, meracik rempah langka seperti andaliman, temu kunci, dan keluwek hutan, serta memasaknya menggunakan kuali tanah liat dengan teknik perapian kayu bakar perlahan (slow cooking).',
        keywords: ['wawancara', 'naskah kuno', 'rempah langka', 'kuali tanah liat', 'slow cooking', 'kayu bakar']
      },
      {
        id: 'c6-card-07',
        number: '07',
        label: 'KARTU INFORMASI 07',
        sublabel: 'Antusiasme Pengunjung',
        content: 'Sebanyak 1.000 porsi hidangan cicipan seperti Bebek Suwar-Suwir Keraton dan Sayur Brongkos Kluwek Hutan ludes dicicipi oleh 800 pengunjung lokal dan turis mancanegara yang memadati arena pameran.',
        keywords: ['1.000 porsi', '800 pengunjung', 'bebek suwar-suwir', 'brongkos', 'turis']
      },
      {
        id: 'c6-card-08',
        number: '08',
        label: 'KARTU INFORMASI 08',
        sublabel: 'Pernyataan Narasumber',
        content: '“Upaya anak-anak SMK melestarikan resep kuno ini sungguh mulia. Kuliner bukan sekadar makanan pengisi perut, melainkan identitas peradaban bangsa yang tidak boleh hilang ditelan zaman,” tutur KRT Pujaningrat, pemerhati budaya boga Keraton Yogyakarta.',
        authorNote: 'KRT Pujaningrat (Pemerhati Budaya & Kuliner Keraton Yogyakarta)',
        keywords: ['pujaningrat', 'keraton', 'peradaban', 'budaya', 'identitas bangsa']
      }
    ],
    validation: {
      what: {
        requiredKeywords: ['festival', 'gastronomi', 'rempah', 'kuno', 'tradisional', 'punah', '45 hidangan', 'boga'],
        hint: 'Peristiwa utamanya adalah Festival Gastronomi Budaya yang merekonstruksi 45 hidangan rempah kuno nusantara yang hampir punah.'
      },
      who: {
        requiredKeywords: ['75 murid', 'murid', 'siswa', 'smk negeri 1 sewon', 'keraton', 'kuliner'],
        hint: 'Pihak yang terlibat adalah 75 murid kejuruan kuliner SMKN 1 Sewon Bantul bersama narasumber keraton.'
      },
      when: {
        requiredKeywords: ['sabtu', '28', 'november', '2026'],
        hint: 'Peristiwa diselenggarakan pada hari Sabtu, 28 November 2026.'
      },
      where: {
        requiredKeywords: ['pendopo', 'sasana hinggil', 'keraton', 'yogyakarta', 'sewon', 'bantul'],
        hint: 'Lokasi di Pendopo Sasana Hinggil Keraton Yogyakarta dan SMKN 1 Sewon.'
      },
      why: {
        requiredKeywords: ['revitalisasi', 'warisan', 'leluhur', 'rempah', 'punah', 'generasi', 'budaya', 'identitas'],
        hint: 'Tujuannya merevitalisasi resep warisan pusaka nusantara dari kepunahan dan mengedukasi generasi muda.'
      },
      how: {
        requiredKeywords: ['wawancara', 'naskah', 'kuno', 'kuali', 'rempah', 'slow cooking', 'kayu bakar'],
        hint: 'Jelaskan bagaimana siswa mewawancarai juru masak sepuh, menerjemahkan naskah resep kuno, dan memasak dengan kuali tanah liat perlahan.'
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
