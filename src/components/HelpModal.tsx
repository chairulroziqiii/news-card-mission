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
          <section className="space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#132238] flex items-center gap-2 border-b border-slate-200 pb-1.5">
              <span className="w-6 h-6 rounded bg-[#E63946] text-white flex items-center justify-center text-xs font-mono">1</span>
              <span>Unsur Pokok Berita (5W + 1H / ADIKSIMBA)</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm pl-2">
              <li><strong className="text-[#E63946]">WHAT (Apa):</strong> Menjelaskan peristiwa apa yang sedang terjadi atau diberitakan.</li>
              <li><strong className="text-[#E63946]">WHO (Siapa):</strong> Menjelaskan pihak atau subjek yang terlibat langsung dalam peristiwa.</li>
              <li><strong className="text-[#E63946]">WHERE (Di mana):</strong> Menyebutkan tempat atau lokasi terjadinya peristiwa.</li>
              <li><strong className="text-[#E63946]">WHEN (Kapan):</strong> Menyebutkan waktu pelaksanaan (hari, tanggal, waktu).</li>
              <li><strong className="text-[#E63946]">WHY (Mengapa):</strong> Mengungkapkan alasan atau latar belakang terselenggaranya peristiwa.</li>
              <li><strong className="text-[#E63946]">HOW (Bagaimana):</strong> Menerangkan proses, suasana, atau cara kegiatan berlangsung.</li>
            </ul>
          </section>

          {/* Section 2: Struktur Piramida Terbalik */}
          <section className="space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#132238] flex items-center gap-2 border-b border-slate-200 pb-1.5">
              <span className="w-6 h-6 rounded bg-[#132238] text-white flex items-center justify-center text-xs font-mono">2</span>
              <span>Struktur Berita (Piramida Terbalik)</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm pl-2">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <strong className="text-[#132238] block font-semibold">1. Judul Berita (Headline):</strong>
                Mencerminkan pokok masalah secara singkat, padat, dan menarik tanpa menipu pembaca.
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <strong className="text-[#132238] block font-semibold">2. Teras Berita (Lead):</strong>
                Paragraf pertama yang memuat intisari penting (biasanya gabungan Apa, Siapa, Kapan, dan Di mana).
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <strong className="text-[#132238] block font-semibold">3. Tubuh Berita (Body):</strong>
                Pengembangan informasi kronologis, menjelaskan unsur Mengapa (Why) dan Bagaimana (How).
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <strong className="text-[#132238] block font-semibold">4. Kutipan & Pernyataan:</strong>
                Kalimat langsung atau tidak langsung dari narasumber terpercaya untuk menguatkan fakta.
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <strong className="text-[#132238] block font-semibold">5. Ekor / Penutup:</strong>
                Informasi tambahan atau harapan yang tidak berdampak fatal jika dipotong.
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
