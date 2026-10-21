export interface HintGuideItem {
  key: 'what' | 'who' | 'where' | 'when' | 'why' | 'how';
  element: string;
  label: string;
  method: string;
  patterns: string[];
  transitions: string[];
}

export const FIVE_W_ONE_H_HINTS: Record<'what' | 'who' | 'where' | 'when' | 'why' | 'how', HintGuideItem> = {
  what: {
    key: 'what',
    element: 'WHAT',
    label: 'UNSUR WHAT (Apa)',
    method: 'Awali dengan menyebutkan peristiwa atau nama kegiatan utamanya.',
    patterns: [
      'Telah dilaksanakan...',
      'Kegiatan [nama acara] resmi digelar...',
      'Sebanyak [jumlah] siswa mengikuti...',
    ],
    transitions: ['dalam rangka', 'berupa kegiatan', 'yang mencakup', 'terkait dengan'],
  },
  who: {
    key: 'who',
    element: 'WHO',
    label: 'UNSUR WHO (Siapa)',
    method: 'Sebutkan pihak, pelaku, atau panitia yang terlibat beserta perannya.',
    patterns: [
      'Acara ini dihadiri oleh...',
      'Dipimpin langsung oleh...',
      'Para siswa jurusan Kuliner...',
    ],
    transitions: ['didampingi oleh', 'bersama dengan', 'selaku pembimbing', 'serta para juri'],
  },
  where: {
    key: 'where',
    element: 'WHERE',
    label: 'UNSUR WHERE (Di mana)',
    method: 'Sebutkan lokasi spesifik tempat peristiwa terjadi.',
    patterns: [
      'Bertempat di...',
      'Berlokasi di Ruang Dapur Utama SMKN 4 Yogyakarta...',
      'Di area pameran...',
    ],
    transitions: ['yang bertempat di', 'di lingkungan', 'pada area', 'di kompleks sekolah'],
  },
  when: {
    key: 'when',
    element: 'WHEN',
    label: 'UNSUR WHEN (Kapan)',
    method: 'Sebutkan waktu pelaksanaan secara jelas (hari, tanggal, atau jam).',
    patterns: [
      'Pada hari [Nama Hari]...',
      'Kegiatan berlangsung sejak pukul...',
      'Digelar selama dua hari...',
    ],
    transitions: ['pada pagi hari', 'dimulai sejak', 'sepanjang hari', 'tepat pukul'],
  },
  why: {
    key: 'why',
    element: 'WHY',
    label: 'UNSUR WHY (Mengapa)',
    method: 'Jelaskan alasan, latar belakang, atau tujuan digelarnya kegiatan tersebut.',
    patterns: [
      'Hal ini bertujuan untuk...',
      'Guna meningkatkan keterampilan...',
      'Langkah ini diambil karena...',
    ],
    transitions: ['karena', 'oleh sebab itu', 'dengan harapan', 'sebagai upaya', 'agar siswa mampu'],
  },
  how: {
    key: 'how',
    element: 'HOW',
    method: 'Urutkan jalannya acara, proses praktik, atau suasana kegiatan.',
    label: 'UNSUR HOW (Bagaimana)',
    patterns: [
      'Acara diawali dengan...',
      'Kemudian para peserta melakukan...',
      'Suasana kegiatan berlangsung sangat meriah...',
    ],
    transitions: ['diawali dengan', 'kemudian', 'selanjutnya', 'setelah itu', 'hingga akhirnya'],
  },
};

export interface NewsStructureHintItem {
  id: 'title' | 'lead' | 'body' | 'quote' | 'closing';
  label: string;
  guide: string;
  patterns?: string[];
  transitions?: string[];
  role: string;
  placeholder: string;
  rows: number;
  isInput: boolean;
}

export const NEWS_STRUCTURE_HINTS: NewsStructureHintItem[] = [
  {
    id: 'title',
    label: 'JUDUL',
    guide: 'Buat judul yang singkat, padat, dan menarik perhatian pembaca. Gunakan kata kerja aktif atau topik utama.',
    patterns: [
      'Siswa Kuliner SMKN 4 Gelar Inovasi Makanan Olahan Salak',
      'Tingkatkan Keterampilan Dapur melalui Lomba Pastry',
    ],
    role: 'Menarik perhatian pembaca dan memberi gambaran peristiwa dalam satu tarikan nafas.',
    placeholder: 'Tuliskan judul rancangan beritamu di sini...',
    rows: 2,
    isInput: true,
  },
  {
    id: 'lead',
    label: 'TERAS BERITA',
    guide: 'Gunakan informasi paling penting (unsur Apa, Siapa, Kapan, Di mana) untuk memperkenalkan peristiwa kepada pembaca.',
    patterns: [
      'Pada [Hari/Tanggal], [Pihak/Siswa] menggelar kegiatan [Nama Acara] yang bertempat di [Lokasi]...',
    ],
    role: 'Paragraf pertama yang memuat intisari penting peristiwa (perpaduan Apa, Siapa, Kapan, dan Di mana).',
    placeholder: 'Tuliskan teras berita pembuka di sini...',
    rows: 3,
    isInput: false,
  },
  {
    id: 'body',
    label: 'TUBUH BERITA',
    guide: 'Kembangkan alasan (Mengapa) dan proses jalannya acara (Bagaimana). Gunakan kata transisi agar kalimat padu.',
    transitions: [
      'Acara diawali dengan...',
      'Selanjutnya, para peserta...',
      'Guna mendukung kegiatan ini...',
      'Selain itu...',
    ],
    role: 'Pengembangan detail peristiwa, menjawab pertanyaan Bagaimana proses terjadi dan Mengapa kegiatan dilakukan.',
    placeholder: 'Jelaskan kronologi, rincian peristiwa, dan proses kegiatan...',
    rows: 4,
    isInput: false,
  },
  {
    id: 'quote',
    label: 'KUTIPAN',
    guide: 'Tuliskan pernyataan atau tanggapan langsung dari narasumber (guru, kepala sekolah, atau peserta) menggunakan tanda petik.',
    patterns: [
      '"Kegiatan ini sangat bermanfaat untuk melatih kemandirian siswa," ujar [Nama Narasumber] selaku...',
    ],
    role: 'Memperkuat fakta objektif dan kredibilitas tulisan lewat keterangan langsung saksi atau pembimbing.',
    placeholder: 'Masukkan kutipan pernyataan dari narasumber pada News Card...',
    rows: 3,
    isInput: false,
  },
  {
    id: 'closing',
    label: 'PENUTUP (EKOR BERITA)',
    guide: 'Gunakan informasi tambahan, harapan, atau penutup rangkaian acara untuk mengakhiri berita.',
    patterns: [
      'Melalui kegiatan ini diharapkan...',
      'Acara diakhiri dengan foto bersama dan pencicipan hasil karya...',
      'Ke depan, program ini akan...',
    ],
    role: 'Bagian akhir berupa data pelengkap, dampak acara, atau kesimpulan umum.',
    placeholder: 'Tuliskan kalimat penutup atau harapan masa depan...',
    rows: 3,
    isInput: false,
  },
];

