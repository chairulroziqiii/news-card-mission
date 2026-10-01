import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Eye, BookOpen, Quote, Sparkles, X, HelpCircle, CheckSquare, Square, FileText } from 'lucide-react';
import { NewsCase, NewsCardItem } from '../types';

interface NewsCardsSectionProps {
  currentCase: NewsCase;
  readCards: string[];
  hasUnderstoodReading: boolean;
  onMarkCardRead: (cardId: string) => void;
  onToggleUnderstood: (understood: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const NewsCardsSection: React.FC<NewsCardsSectionProps> = ({
  currentCase,
  readCards,
  hasUnderstoodReading,
  onMarkCardRead,
  onToggleUnderstood,
  onNext,
  onBack,
}) => {
  const [activeCardModal, setActiveCardModal] = useState<NewsCardItem | null>(null);

  const cards = currentCase.cards;
  const isAllRead = cards.every((card) => readCards.includes(card.id));
  const readCount = cards.filter((card) => readCards.includes(card.id)).length;

  const handleCardClick = (card: NewsCardItem) => {
    onMarkCardRead(card.id);
    setActiveCardModal(card);
  };

  const readingGuideQuestions = [
    'Peristiwa apa yang sedang dibahas dalam kumpulan kartu ini?',
    'Siapa saja pihak, kelompok, atau individu yang terlibat di dalamnya?',
    'Kapan waktu pelaksanaan atau momen terjadinya peristiwa?',
    'Di mana lokasi tepat peristiwa atau kegiatan tersebut diselenggarakan?',
    'Mengapa kegiatan/peristiwa tersebut dilakukan dan apa tujuannya?',
    'Bagaimana proses tahapan atau kronologi kegiatan berlangsung?',
    'Informasi atau angka data apa yang menurutmu paling penting untuk pembaca?'
  ];

  const canProceed = isAllRead && hasUnderstoodReading;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#132238]/5 text-[#132238] text-xs font-bold font-mono tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#E63946]" />
              <span>LANGKAH 01 — READ (MEMBACA SUMBER INFORMASI)</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
              🗂 NEWS CARD
            </h1>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#132238] text-white">
                {currentCase.groupName}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#E63946] text-white">
                Case {currentCase.caseNumber}
              </span>
              <span className="text-sm font-semibold text-slate-700">
                — {currentCase.topicTitle}
              </span>
            </div>
          </div>

          {/* Read Counter Indicator */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#132238] text-white flex items-center justify-center font-bold text-sm font-mono shrink-0">
              {readCount}/{cards.length}
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-700 block">
                Status Pembacaan Kartu
              </span>
              <span className="text-xs text-slate-500">
                {isAllRead ? (
                  <span className="text-[#2E9B62] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Seluruh {cards.length} kartu telah dibuka
                  </span>
                ) : (
                  `Buka ${cards.length - readCount} kartu lagi`
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative instruction */}
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
          Berikut adalah potongan-potongan informasi mengenai peristiwa kelompokmu. Bacalah setiap kartu dengan saksama tanpa terburu-buru. Temukan hubungan antar-informasi untuk menyelesaikan misi analisis selanjutnya.
        </p>
      </div>

      {/* 📖 READING GUIDE Scaffolding Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-7 shadow-xs mb-8 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <div className="w-7 h-7 rounded bg-[#F4B942]/20 text-[#132238] flex items-center justify-center font-bold text-sm">
            📖
          </div>
          <div>
            <h2 className="font-editorial text-base sm:text-lg font-bold text-[#132238]">
              READING GUIDE (Panduan Pemahaman Membaca)
            </h2>
            <p className="text-xs text-slate-500">
              Gunakan pertanyaan pemantik di bawah ini sebagai alat bantu berpikir untuk memahami isi berita:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-1">
          {readingGuideQuestions.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
              <span className="font-mono text-slate-600 font-bold text-[11px] shrink-0 mt-0.5">
                0{idx + 1}.
              </span>
              <span className="leading-relaxed">{q}</span>
            </div>
          ))}
        </div>

        {/* Understood Action Button Toggle */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500 italic">
            * Pertanyaan di atas berfungsi sebagai scaffolding (panduan berpikir), bukan kuis berbobot nilai.
          </p>

          <button
            type="button"
            onClick={() => onToggleUnderstood(!hasUnderstoodReading)}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              hasUnderstoodReading
                ? 'bg-[#2E9B62] text-white hover:bg-[#258252] shadow-xs'
                : 'border-2 border-slate-300 text-slate-700 hover:border-[#132238] bg-white'
            }`}
          >
            {hasUnderstoodReading ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ Saya sudah memahami informasi</span>
              </>
            ) : (
              <>
                <Square className="w-4 h-4 text-slate-400" />
                <span>Konfirmasi: Saya sudah memahami informasi</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dynamic News Cards Grid (Naturally formatted, NO 5W1H labels!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((card) => {
          const isRead = readCards.includes(card.id);

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(card);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Buka ${card.label}`}
              className={`group text-left rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                isRead
                  ? 'bg-white border-slate-200 hover:border-[#132238] shadow-2xs hover:shadow-md'
                  : 'bg-[#FAF8F5] border-[#F4B942]/60 hover:border-[#132238] shadow-xs'
              } hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]`}
            >
              <div>
                {/* Card Top Label (Neutral title, NOT revealing 5W+1H directly) */}
                <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-700 block">
                      {card.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {card.sublabel}
                    </span>
                  </div>

                  {isRead ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#2E9B62] bg-[#2E9B62]/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Dibaca</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-800 bg-amber-100/70 px-1.5 py-0.5 rounded">
                      <Eye className="w-3 h-3 text-amber-700" />
                      <span>Buka</span>
                    </span>
                  )}
                </div>

                {/* Card Content Snippet */}
                <p className="text-xs sm:text-sm font-medium text-[#132238] leading-relaxed line-clamp-4">
                  “{card.content}”
                </p>

                {card.authorNote && (
                  <p className="text-[11px] text-slate-500 mt-2 italic font-mono">
                    — {card.authorNote}
                  </p>
                )}
              </div>

              {/* Bottom footer */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[10px] text-slate-400">Berkas Lapangan</span>
                <span className="font-medium text-[#132238] group-hover:underline flex items-center gap-1 text-xs">
                  <span>Baca Detail</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion & Next Mission Status Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-editorial text-lg font-bold text-[#132238]">
              Langkah Selanjutnya: Menganalisis Fakta 5W+1H
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {!isAllRead
                ? `Masih ada ${cards.length - readCount} kartu yang belum dibuka. Buka seluruh kartu terlebih dahulu.`
                : !hasUnderstoodReading
                ? 'Klik tombol "Saya sudah memahami informasi" di bagian Reading Guide untuk membuka tahap berikutnya.'
                : 'Bagus sekali! Semua kartu telah dibaca dan dikonfirmasi. Saatnya melangkah ke tahap FIND THE FACTS.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ganti Identitas / Kelompok</span>
            </button>

            <button
              onClick={onNext}
              disabled={!canProceed}
              className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                canProceed
                  ? 'bg-[#E63946] text-white hover:bg-[#cf2b38] shadow-sm'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>LANJUT KE MISSION 01</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for detailed Card Inspection */}
      {activeCardModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132238]/60 backdrop-blur-xs"
          onClick={() => setActiveCardModal(null)}
        >
          <div
            className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 block uppercase">
                  {currentCase.groupName} · {activeCardModal.sublabel}
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#132238]">
                  {activeCardModal.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveCardModal(null)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <Quote className="w-6 h-6 text-slate-300 mb-2" />
              <p className="text-base sm:text-lg font-medium text-[#132238] leading-relaxed">
                “{activeCardModal.content}”
              </p>
              {activeCardModal.authorNote && (
                <p className="mt-3 text-sm text-slate-600 font-mono italic">
                  — {activeCardModal.authorNote}
                </p>
              )}
            </div>

            {/* Reporter Reflection Note */}
            <div className="text-xs text-slate-500 bg-[#FAF8F5] p-3 rounded-lg border border-[#F4B942]/30">
              <strong className="text-slate-800">Catatan Telaah Reporter: </strong>
              Perhatikan apakah kalimat di atas memuat unsur peristiwa, siapa pelakunya, waktu, tempat, alasan, atau cara terjadinya.
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#2E9B62] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Kartu telah dicatat
              </span>
              <button
                onClick={() => setActiveCardModal(null)}
                className="px-5 py-2 rounded-lg bg-[#132238] text-white text-xs font-semibold hover:bg-[#1f3555] transition-colors cursor-pointer"
              >
                Tutup & Lanjut Baca
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
