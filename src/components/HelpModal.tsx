import React from 'react';
import { X, BookOpen, Layers, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132238]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-[#132238] text-white rounded-t-xl">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#F4B942]" />
            <div>
              <h2 className="font-editorial text-lg font-bold">Panduan Materi Teks Berita</h2>
              <p className="text-[11px] text-slate-300 font-mono">PEDOMAN REDAKSI & KAIDAH BAHASA INDONESIA</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Panduan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Section 1: Unsur 5W+1H */}
          <section className="space-y-4">
            <h3 className="font-editorial text-base font-bold text-[#132238] flex items-center gap-2 border-b border-slate-200 pb-1.5">
              <span className="w-6 h-6 rounded bg-[#E63946] text-white flex items-center justify-center text-xs font-mono">1</span>
              <span>Unsur Pokok Berita (5W + 1H) — Pola Kalimat & Kata Transisi</span>
            </h3>

            <div className="space-y-3">
              {/* WHAT */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR WHAT (Apa)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Peristiwa</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Awali dengan menyebutkan peristiwa atau nama kegiatan utamanya.</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Telah dilaksanakan...&rsquo;, &lsquo;Kegiatan [nama acara] resmi digelar...&rsquo;, &lsquo;Sebanyak [jumlah] siswa mengikuti...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> dalam rangka, berupa kegiatan, yang mencakup, terkait dengan</p>
              </div>

              {/* WHO */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR WHO (Siapa)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Pelaku / Tokoh</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Sebutkan pihak, pelaku, atau panitia yang terlibat beserta perannya.</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Acara ini dihadiri oleh...&rsquo;, &lsquo;Dipimpin langsung oleh...&rsquo;, &lsquo;Para siswa jurusan Kuliner...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> didampingi oleh, bersama dengan, selaku pembimbing, serta para juri</p>
              </div>

              {/* WHERE */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR WHERE (Di mana)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Lokasi</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Sebutkan lokasi spesifik tempat peristiwa terjadi.</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Bertempat di...&rsquo;, &lsquo;Berlokasi di Ruang Dapur Utama SMKN 4 Yogyakarta...&rsquo;, &lsquo;Di area pameran...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> yang bertempat di, di lingkungan, pada area, di kompleks sekolah</p>
              </div>

              {/* WHEN */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR WHEN (Kapan)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Waktu</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Sebutkan waktu pelaksanaan secara jelas (hari, tanggal, atau jam).</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Pada hari [Nama Hari]...&rsquo;, &lsquo;Kegiatan berlangsung sejak pukul...&rsquo;, &lsquo;Digelar selama dua hari...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> pada pagi hari, dimulai sejak, sepanjang hari, tepat pukul</p>
              </div>

              {/* WHY */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR WHY (Mengapa)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Tujuan / Alasan</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Jelaskan alasan, latar belakang, atau tujuan digelarnya kegiatan tersebut.</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Hal ini bertujuan untuk...&rsquo;, &lsquo;Guna meningkatkan keterampilan...&rsquo;, &lsquo;Langkah ini diambil karena...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> karena, oleh sebab itu, dengan harapan, sebagai upaya, agar siswa mampu</p>
              </div>

              {/* HOW */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">UNSUR HOW (Bagaimana)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Proses / Kronologi</span>
                </div>
                <p className="text-slate-700"><strong>Cara Membuat:</strong> Urutkan jalannya acara, proses praktik, atau suasana kegiatan.</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Acara diawali dengan...&rsquo;, &lsquo;Kemudian para peserta melakukan...&rsquo;, &lsquo;Suasana kegiatan berlangsung sangat meriah...&rsquo;</p>
                <p className="text-slate-500 text-[11px]"><strong>Kata Transisi:</strong> diawali dengan, kemudian, selanjutnya, setelah itu, hingga akhirnya</p>
              </div>
            </div>
          </section>

          {/* Section 2: Struktur Piramida Terbalik */}
          <section className="space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#132238] flex items-center gap-2 border-b border-slate-200 pb-1.5">
              <span className="w-6 h-6 rounded bg-[#132238] text-white flex items-center justify-center text-xs font-mono">2</span>
              <span>Struktur Berita (Piramida Terbalik) — Pola & Kata Transisi</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm pl-1">
              {/* 1. JUDUL */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">1. BAGIAN: JUDUL</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Puncak Berita</span>
                </div>
                <p className="text-slate-700"><strong>Petunjuk:</strong> &ldquo;Buat judul yang singkat, padat, dan menarik perhatian pembaca. Gunakan kata kerja aktif atau topik utama.&rdquo;</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;Siswa Kuliner SMKN 4 Gelar Inovasi Makanan Olahan Salak&rsquo; atau &lsquo;Tingkatkan Keterampilan Dapur melalui Lomba Pastry&rsquo;</p>
              </div>

              {/* 2. TERAS BERITA */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">2. BAGIAN: TERAS BERITA</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Lead / Pembuka</span>
                </div>
                <p className="text-slate-700"><strong>Petunjuk:</strong> &ldquo;Gunakan informasi paling penting (unsur Apa, Siapa, Kapan, Di mana) untuk memperkenalkan peristiwa kepada pembaca.&rdquo;</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola/Kata:</strong> &lsquo;Pada [Hari/Tanggal], [Pihak/Siswa] menggelar kegiatan [Nama Acara] yang bertempat di [Lokasi]...&rsquo;</p>
              </div>

              {/* 3. TUBUH BERITA */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">3. BAGIAN: TUBUH BERITA</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Body / Kronologi</span>
                </div>
                <p className="text-slate-700"><strong>Petunjuk:</strong> &ldquo;Kembangkan alasan (Mengapa) dan proses jalannya acara (Bagaimana). Gunakan kata transisi agar kalimat padu.&rdquo;</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Kata Transisi:</strong> &lsquo;Acara diawali dengan...&rsquo;, &lsquo;Selanjutnya, para peserta...&rsquo;, &lsquo;Guna mendukung kegiatan ini...&rsquo;, &lsquo;Selain itu...&rsquo;</p>
              </div>

              {/* 4. KUTIPAN */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">4. BAGIAN: KUTIPAN</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Narasumber</span>
                </div>
                <p className="text-slate-700"><strong>Petunjuk:</strong> &ldquo;Tuliskan pernyataan atau tanggapan langsung dari narasumber (guru, kepala sekolah, atau peserta) menggunakan tanda petik.&rdquo;</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Pola:</strong> &lsquo;&quot;Kegiatan ini sangat bermanfaat untuk melatih kemandirian siswa,&quot; ujar [Nama Narasumber] selaku...&rsquo;</p>
              </div>

              {/* 5. PENUTUP (EKOR BERITA) */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#E63946] font-bold">5. BAGIAN: PENUTUP (EKOR BERITA)</strong>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono">Ekor Berita</span>
                </div>
                <p className="text-slate-700"><strong>Petunjuk:</strong> &ldquo;Gunakan informasi tambahan, harapan, atau penutup rangkaian acara untuk mengakhiri berita.&rdquo;</p>
                <p className="text-slate-600 font-mono text-xs"><strong>Contoh Kata/Pola:</strong> &lsquo;Melalui kegiatan ini diharapkan...&rsquo;, &lsquo;Acara diakhiri dengan foto bersama dan pencicipan hasil karya...&rsquo;, &lsquo;Ke depan, program ini akan...&rsquo;</p>
              </div>
            </div>
          </section>

          {/* Section 3: Kaidah Kebahasaan */}
          <section className="space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#132238] flex items-center gap-2 border-b border-slate-200 pb-1.5">
              <span className="w-6 h-6 rounded bg-[#F4B942] text-[#132238] flex items-center justify-center text-xs font-mono">3</span>
              <span>Kaidah Kebahasaan Teks Berita</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Bahasa Baku:</strong> Menggunakan kata baku sesuai KBBI dan kaidah EYD.</li>
              <li><strong>Kalimat Langsung:</strong> Menggunakan tanda petik dua (“...”) untuk mengutip perkataan narasumber secara persis.</li>
              <li><strong>Konjungsi Temporal:</strong> Menggunakan kata penghubung urutan waktu seperti <em>kemudian, setelah itu, selanjutnya, sebelumnya</em>.</li>
              <li><strong>Kata Kerja Aksi / Mental:</strong> Seperti <em>menggelar, mempraktikkan, menjelaskan, mengatakan</em>.</li>
              <li><strong>Faktual & Objektif:</strong> Tidak memasukkan opini subjektif penulis tanpa keterangan narasumber.</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end rounded-b-xl">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#132238] text-white text-xs font-semibold rounded-lg hover:bg-[#1f3555] transition-colors cursor-pointer"
          >
            Mengerti & Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
