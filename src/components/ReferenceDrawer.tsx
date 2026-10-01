import React from 'react';
import { Newspaper, X, BookOpen, Quote } from 'lucide-react';
import { NewsCase } from '../types';

interface ReferenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentCase: NewsCase;
}

export const ReferenceDrawer: React.FC<ReferenceDrawerProps> = ({
  isOpen,
  onClose,
  currentCase,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#132238]/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-[#132238] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#E63946] flex items-center justify-center text-white shrink-0">
              <Newspaper className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-base font-bold">
                Arsip Catatan Berita ({currentCase.groupName})
              </h2>
              <span className="text-[11px] text-[#F4B942] font-mono uppercase">
                CASE {currentCase.caseNumber} · {currentCase.topicTitle}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Subtitle */}
        <div className="bg-[#FAF8F5] px-4 py-2.5 border-b border-slate-200 text-xs text-slate-600">
          Gunakan kartu di bawah ini untuk memeriksa kembali fakta dan data peristiwa saat menulis.
        </div>

        {/* Drawer Scrollable Cards List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {currentCase.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-2xs space-y-2 hover:border-[#132238] transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#132238]">{card.label}</span>
                <span className="text-slate-400">{card.sublabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#132238] font-medium bg-slate-50 p-3 rounded border border-slate-100 leading-relaxed">
                “{card.content}”
              </p>
              {card.authorNote && (
                <p className="text-[11px] text-slate-500 italic text-right font-mono">
                  — {card.authorNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {currentCase.cards.length} kartu informasi terverifikasi
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#132238] text-white text-xs font-semibold rounded hover:bg-[#1f3555] transition-colors cursor-pointer"
          >
            Tutup Catatan
          </button>
        </div>
      </div>
    </div>
  );
};
