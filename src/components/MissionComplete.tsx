import React, { useState } from 'react';
import { Award, CheckCircle2, Home, Download, Copy, Printer, Check, Newspaper, Sparkles, User, FileText, ArrowLeft } from 'lucide-react';
import { StudentData } from '../types';
import { getCaseById } from '../data/newsCases';
import { generateNewsPDF } from '../services/pdfService';

interface MissionCompleteProps {
  data: StudentData;
  submissionMessage: string;
  onGoHome: () => void;
  onRestartMission: () => void;
}

export const MissionComplete: React.FC<MissionCompleteProps> = ({
  data,
  submissionMessage,
  onGoHome,
  onRestartMission,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const currentCase = getCaseById(data.caseId);

  const handleDownloadPDF = () => {
    try {
      generateNewsPDF(data);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('Gagal generate PDF:', err);
      alert('Terjadi kendala saat membuat PDF. Kamu tetap dapat menyalin teks berita.');
    }
  };

  const handleCopy = () => {
    const formatted = `=== LAPORAN TEKS BERITA (NEWS CARD MISSION) ===
Reporter: ${data.name}
Nomor Presensi: ${data.attendanceNumber}
Kelas: ${data.className}
Kelompok: ${data.group}
News Case: Case ${currentCase.caseNumber} (${currentCase.topicTitle})
Tanggal: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}

JUDUL BERITA:
${data.newsTitle}

TEKS BERITA:
${data.newsText}
`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formattedDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-14">
      {/* Celebration Trophy & Banner */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F4B942]/20 text-[#F4B942] border-2 border-[#F4B942] shadow-md animate-bounce">
          <Award className="w-10 h-10 text-[#132238]" />
        </div>

        <div className="space-y-1">
          <span className="font-mono text-xs font-bold tracking-widest text-[#E63946] uppercase">
            REDAKSI TELAH MENERIMA TUGASMU
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#132238]">
            🏆 MISSION COMPLETE!
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#E63946]">
            Selamat, Reporter!
          </h2>
        </div>

        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
          “Kamu telah berhasil menyelesaikan seluruh rangkaian misi dan mengubah potongan informasi menjadi sebuah teks berita yang utuh.”
        </p>

        {/* Success Alert Banner */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-xs mx-auto">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#2E9B62]">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Tugas Berhasil Dikumpulkan!</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="text-xs text-emerald-700 font-medium">
            Data telah terkirim otomatis ke Google Sheets redaksi.
          </span>
        </div>
      </div>

      {/* Completed Stages Checklist */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs mb-8">
        <h3 className="font-editorial text-base font-bold text-[#132238] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F4B942]" />
          <span>Rekapitulasi Tahapan Misi yang Berhasil Diselesaikan</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
            <span className="font-bold text-slate-800 text-xs">✓ READ</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
            <span className="font-bold text-slate-800 text-xs">✓ FIND</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
            <span className="font-bold text-slate-800 text-xs">✓ ARRANGE</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
            <span className="font-bold text-slate-800 text-xs">✓ WRITE</span>
          </div>
        </div>
      </div>

      {/* 📄 DOWNLOAD HASIL BERITA Card (Section 9 & 10 User Request) */}
      <div className="bg-gradient-to-br from-[#132238] to-[#1c304d] text-white rounded-xl p-6 sm:p-8 mb-8 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/10 text-[#F4B942] text-xs font-mono font-bold uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>DOKUMEN HASIL PEMBELAJARAN</span>
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">
              📄 DOWNLOAD HASIL BERITA (PDF)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Unduh naskah berita format A4 resmi beridentitas lengkap untuk dikumpulkan ke guru mata pelajaran Bahasa Indonesia.
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E63946] hover:bg-[#cf2b38] text-white font-bold text-sm shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E63946]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF SEKARANG</span>
            </button>

            {downloadSuccess && (
              <span className="text-[11px] text-[#48c78e] font-semibold text-center flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" /> PDF berhasil diunduh!
              </span>
            )}
          </div>
        </div>

        {/* PDF Metadata Preview Box */}
        <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">REPORTER:</span>
            <strong className="text-white truncate block">{data.name || '-'}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">PRESENSI / KELAS:</span>
            <strong className="text-white block">{data.attendanceNumber || '-'} / {data.className || '-'}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">KELOMPOK:</span>
            <strong className="text-[#F4B942] block">{data.group}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">NEWS CASE:</span>
            <strong className="text-white block">Case {currentCase.caseNumber}</strong>
          </div>
        </div>
      </div>

      {/* Journalist Quote */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 mb-8 shadow-xs border-l-4 border-l-[#E63946]">
        <blockquote className="font-editorial text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
          “Setiap berita dimulai dari informasi. Tugas seorang reporter adalah mengolahnya menjadi cerita yang bermakna dan dapat dipertanggungjawabkan.”
        </blockquote>
        <p className="text-xs font-mono text-[#E63946] uppercase tracking-wider mt-2">
          — Dewan Redaksi News Card Mission
        </p>
      </div>

      {/* Digital Newspaper Clipping Preview (Student Article) */}
      <div className="bg-white rounded-xl border-2 border-slate-300 shadow-md p-6 sm:p-10 mb-8 font-body print:border-none print:shadow-none">
        {/* Newspaper Masthead */}
        <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase pb-2 border-b border-slate-200">
            <span>EDISI REDAKSI SISWA</span>
            <span>{data.group} · CASE {currentCase.caseNumber}</span>
            <span>{formattedDate}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 uppercase">
            Warta Siswa
          </h2>
          <p className="text-xs text-slate-600 italic">
            Media Pembelajaran Jurnalistik Berbahasa Indonesia
          </p>
        </div>

        {/* Article Meta / Byline */}
        <div className="mb-6 pb-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-mono">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#E63946]" />
            <span>Oleh: <strong>{data.name || 'Reporter Siswa'}</strong></span>
          </div>
          <div>
            <span>Kelas: {data.className || '-'} (No. Presensi: {data.attendanceNumber || '-'})</span>
          </div>
        </div>

        {/* News Headline */}
        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mb-5 leading-tight">
          {data.newsTitle || '(Belum ada judul berita)'}
        </h3>

        {/* News Content Paragraphs */}
        <div className="prose max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line text-justify font-serif">
          {data.newsText || '(Belum ada naskah berita.)'}
        </div>

        {/* Newspaper Footer Rule */}
        <div className="mt-8 pt-4 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Kredensial: Verifikasi Redaksi Individual</span>
          <span>News Card Mission — Media Pembelajaran Teks Berita</span>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleDownloadPDF}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#E63946] hover:bg-[#cf2b38] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>📄 DOWNLOAD PDF</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            {copied ? <Check className="w-4 h-4 text-[#2E9B62]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onRestartMission}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
          >
            Tulis Kasus Lain
          </button>

          <button
            onClick={onGoHome}
            className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-[#132238] text-white hover:bg-[#1f3555] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>↩ KEMBALI KE BERANDA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
