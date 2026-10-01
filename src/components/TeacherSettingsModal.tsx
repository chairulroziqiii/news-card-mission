import React, { useState, useEffect } from 'react';
import { X, Settings, Check, Copy, Download, Database, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SUBMISSION_ENDPOINT, getStoredSubmissions } from '../services/storageService';
import { StudentData } from '../types';

interface TeacherSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherSettingsModal: React.FC<TeacherSettingsModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [storedSubmissions, setStoredSubmissions] = useState<StudentData[]>([]);

  useEffect(() => {
    if (isOpen) {
      setStoredSubmissions(getStoredSubmissions());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sampleAppsScriptCode = `// KODE GOOGLE APPS SCRIPT UNTUK GOOGLE SHEETS
// Buka Google Sheets -> Ekstensi -> Apps Script -> Tempel kode ini:
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Jika baris pertama kosong, buat header otomatis
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Waktu Kirim", 
        "Nama Siswa", 
        "No Presensi", 
        "Kelas", 
        "Kelompok", 
        "News Case",
        "Judul Berita", 
        "Teks Berita",
        "What", 
        "Who", 
        "When", 
        "Where", 
        "Why", 
        "How"
      ]);
    }
    
    // Masukkan data siswa ke baris baru
    sheet.appendRow([
      data.timestamp || new Date(),
      data.studentName || data.nama || "-",
      data.attendanceNumber || data.no_absen || "-",
      data.className || data.kelas || "-",
      data.groupNumber || data.kelompok || "-",
      data.caseId || data.news_case || "-",
      data.newsTitle || data.judul_berita || "-",
      data.newsText || data.teks_berita || "-",
      data.what || data.unsur_what || "-",
      data.who || data.unsur_who || "-",
      data.when || data.unsur_when || "-",
      data.where || data.unsur_where || "-",
      data.why || data.unsur_why || "-",
      data.how || data.unsur_how || "-"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil dicatat" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleAppsScriptCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleExportCSV = () => {
    if (storedSubmissions.length === 0) {
      alert('Belum ada data pengiriman murid tersimpan di perangkat ini.');
      return;
    }

    const headers = ['Waktu', 'Nama', 'Kelas', 'Absen', 'Kelompok', 'Case', 'Judul', 'Teks Berita'];
    const rows = storedSubmissions.map((s) => [
      `"${s.submittedAt || ''}"`,
      `"${(s.name || '').replace(/"/g, '""')}"`,
      `"${(s.className || '').replace(/"/g, '""')}"`,
      `"${s.attendanceNumber || ''}"`,
      `"${s.group || ''}"`,
      `"${s.caseId || ''}"`,
      `"${(s.newsTitle || '').replace(/"/g, '""')}"`,
      `"${(s.newsText || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rekap_tugas_berita_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-[#132238] text-white rounded-t-xl">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-[#F4B942]" />
            <div>
              <h2 className="font-editorial text-lg font-bold">Integrasi Google Sheets Redaksi</h2>
              <p className="text-[11px] text-slate-300 font-mono">AUTOMATED BACKEND & SPREADSHEET RECAP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Pengaturan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Section 1: Automated Connection Status (NO manual input field) */}
          <div className="bg-emerald-50 border border-emerald-200/90 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#2E9B62] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase font-mono tracking-wide">
                  Koneksi Google Sheets: Terhubung Otomatis
                </h3>
                <span className="inline-flex items-center gap-1 bg-[#2E9B62] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Sistem Aktif
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Endpoint Google Apps Script redaksi telah tertanam permanen pada sistem. Setiap kali murid menyelesaikan dan mengirim naskah berita, data 12 parameter (identitas, 5W+1H, dan teks berita) akan langsung tercatat secara otomatis ke Google Sheets guru tanpa perlu konfigurasi manual dari murid.
              </p>
              <div className="pt-1">
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200 block truncate">
                  Target Endpoint: {SUBMISSION_ENDPOINT}
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Code Snippet to copy for Apps Script */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#132238] uppercase font-mono flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#E63946]" />
                Referensi Script Penampung Data (Google Apps Script)
              </span>
              <button
                onClick={handleCopyCode}
                className="text-xs font-semibold text-[#E63946] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-[#2E9B62]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Tersalin!' : 'Salin Kode'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-200 rounded-lg text-[11px] font-mono overflow-x-auto max-h-44 leading-relaxed">
              {sampleAppsScriptCode}
            </pre>
            <p className="text-[11px] text-slate-500">
              * Script di atas disesuaikan dengan parameter JSON: <code>studentName</code>, <code>attendanceNumber</code>, <code>className</code>, <code>groupNumber</code>, <code>caseId</code>, <code>newsTitle</code>, <code>newsText</code>, serta unsur <code>what</code>, <code>who</code>, <code>when</code>, <code>where</code>, <code>why</code>, <code>how</code>.
            </p>
          </div>

          {/* Section 3: Offline Data Backup & Local Storage Inspect */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#132238] uppercase font-mono">
                  Cadangan Arsip di Perangkat ({storedSubmissions.length} Tugas)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Salinan pengerjaan murid juga tetap dicadangkan secara lokal di perangkat dan dapat diekspor ke format CSV kapan saja.
                </p>
              </div>

              <button
                onClick={handleExportCSV}
                disabled={storedSubmissions.length === 0}
                className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                  storedSubmissions.length > 0
                    ? 'bg-[#2E9B62] text-white hover:bg-[#258252]'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh CSV</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end rounded-b-xl">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
