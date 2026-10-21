import React, { useState } from 'react';
import { X, Lightbulb, BookOpen, Copy, Check, Sparkles } from 'lucide-react';
import { FIVE_W_ONE_H_HINTS, HintGuideItem } from '../data/hintsData';

interface FiveWOneHHintModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'all' | 'what' | 'who' | 'where' | 'when' | 'why' | 'how';
  onSelectPattern?: (pattern: string) => void;
}

export const FiveWOneHHintModal: React.FC<FiveWOneHHintModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'all',
  onSelectPattern,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'what' | 'who' | 'where' | 'when' | 'why' | 'how'>(defaultTab);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const hintItems: HintGuideItem[] = Object.values(FIVE_W_ONE_H_HINTS);
  const displayedItems = activeTab === 'all' 
    ? hintItems 
    : hintItems.filter((item) => item.key === activeTab);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const tabs: { id: 'all' | 'what' | 'who' | 'where' | 'when' | 'why' | 'how'; label: string }[] = [
    { id: 'all', label: 'Semua Unsur' },
    { id: 'what', label: 'WHAT (Apa)' },
    { id: 'who', label: 'WHO (Siapa)' },
    { id: 'where', label: 'WHERE (Di mana)' },
    { id: 'when', label: 'WHEN (Kapan)' },
    { id: 'why', label: 'WHY (Mengapa)' },
    { id: 'how', label: 'HOW (Bagaimana)' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#132238]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-[#132238] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-[#F4B942] flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-[#F4B942]" />
            </div>
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>Petunjuk Unsur 5W+1H</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-amber-400/20 text-[#F4B942]">
                  Pola Kalimat & Transisi
                </span>
              </h2>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                Panduan cara menyusun kalimat berita dan kata transisi untuk setiap unsur
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Petunjuk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#E63946] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-[#132238] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-800">
          {displayedItems.map((item) => (
            <div
              key={item.key}
              className="p-4 sm:p-5 rounded-xl border border-amber-200/90 bg-amber-50/40 hover:bg-amber-50/70 transition-colors space-y-3.5"
            >
              {/* Element Title */}
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-[#132238]">
                    {item.label}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {item.element}
                </span>
              </div>

              {/* Cara Membuat */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="text-[#E63946]">▶</span>
                  <span>Cara Membuat:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 pl-4 leading-relaxed font-sans">
                  {item.method}
                </p>
              </div>

              {/* Contoh Kata / Pola */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="text-[#E63946]">▶</span>
                  <span>Contoh Kata/Pola:</span>
                </div>
                <div className="pl-4 space-y-1.5">
                  {item.patterns.map((pattern, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#E63946] font-bold">•</span>
                        <span className="font-mono text-xs sm:text-[13px] text-amber-950">
                          &lsquo;{pattern}&rsquo;
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {onSelectPattern && (
                          <button
                            type="button"
                            onClick={() => onSelectPattern(pattern)}
                            className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 text-[11px] font-semibold cursor-pointer"
                            title="Gunakan pola ini di teks berita"
                          >
                            Gunakan
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleCopy(pattern)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Salin contoh pola"
                        >
                          {copiedText === pattern ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kata Transisi / Penghubung */}
              <div className="space-y-1.5 pt-2 border-t border-amber-200/50">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="text-[#F4B942]">▶</span>
                  <span>Daftar Kata Transisi / Penghubung yang Bisa Digunakan:</span>
                </div>
                <div className="pl-4 flex flex-wrap gap-1.5">
                  {item.transitions.map((trans, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-200 text-slate-700 text-xs font-medium shadow-2xs hover:border-amber-300 transition-colors"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                      <span>{trans}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="italic hidden sm:inline">
            Gunakan pola kalimat dan kata transisi di atas untuk memperkaya tulisan beritamu.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#132238] text-white font-semibold rounded-lg hover:bg-[#1f3555] cursor-pointer transition-colors"
          >
            Tutup Petunjuk
          </button>
        </div>
      </div>
    </div>
  );
};
