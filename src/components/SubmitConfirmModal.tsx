import React from 'react';
import { AlertCircle, Send, X, ArrowLeft } from 'lucide-react';
import { StudentData } from '../types';
import { getCaseById } from '../data/newsCases';

interface SubmitConfirmModalProps {
  isOpen: boolean;
  data: StudentData;
  onConfirm: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export const SubmitConfirmModal: React.FC<SubmitConfirmModalProps> = ({
  isOpen,
  data,
  onConfirm,
  onCancel,
  isSubmitting,
}) => {
  if (!isOpen) return null;

  const currentCase = getCaseById(data.caseId);
  const wordCount = data.newsText.trim()
    ? data.newsText.trim().split(/\s+/).filter(Boolean).length
    : 0;

  const checkedCount = Object.values(data.checklist).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132238]/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E63946]/10 text-[#E63946] flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#132238]">
                Konfirmasi Pengiriman Berita
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                PENGECEKAN AKHIR REDAKSI INDIVIDUAL
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            disabled={isSubmitting}
            className="text-slate-400 hover:text-slate-700 p-1 rounded cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Warning */}
        <div className="bg-[#FAF8F5] border border-amber-200 p-4 rounded-lg space-y-2">
          <p className="text-sm font-semibold text-[#132238]">
            Apakah kamu yakin ingin mengirim berita?
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            Setelah dikirim, periksa kembali jawabanmu sebelum melanjutkan. Hasil naskah beritamu akan disiapkan untuk diunduh dalam bentuk dokumen PDF resmi.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2.5 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Nama Reporter:</span>
            <span className="font-bold text-[#132238]">{data.name || '-'}</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Kelas / No. Presensi:</span>
            <span className="font-bold text-[#132238]">
              {data.className || '-'} / {data.attendanceNumber || '-'}
            </span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Kelompok & News Case:</span>
            <span className="font-bold text-[#E63946]">
              {data.group} (Case {currentCase.caseNumber})
            </span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Judul Berita:</span>
            <span className="font-bold text-[#132238] truncate max-w-[240px]">
              {data.newsTitle}
            </span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Panjang Naskah:</span>
            <span className="font-bold text-[#132238] font-mono">{wordCount} kata</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Checklist Refleksi:</span>
            <span
              className={`font-bold ${
                checkedCount === 6 ? 'text-[#2E9B62]' : 'text-amber-600'
              }`}
            >
              {checkedCount} dari 6 terpenuhi
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI EDIT</span>
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#E63946] text-white hover:bg-[#cf2b38] text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <span>Mengirim & Menyiapkan PDF...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>KIRIM SEKARANG</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
