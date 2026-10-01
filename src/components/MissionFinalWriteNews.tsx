import React, { useState, useMemo } from 'react';
import { ArrowLeft, Send, Save, CheckSquare, Square, FileText, User, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { StudentData, NewsCase } from '../types';

interface MissionFinalWriteNewsProps {
  data: StudentData;
  currentCase: NewsCase;
  onUpdateData: (partial: Partial<StudentData>) => void;
  onSubmitPrompt: () => void;
  onBack: () => void;
}

export const MissionFinalWriteNews: React.FC<MissionFinalWriteNewsProps> = ({
  data,
  currentCase,
  onUpdateData,
  onSubmitPrompt,
  onBack,
}) => {
  const [saveToast, setSaveToast] = useState<string>('');

  // Live word counter
  const wordCount = useMemo(() => {
    const text = data.newsText.trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  }, [data.newsText]);

  const handleTitleChange = (value: string) => {
    onUpdateData({ newsTitle: value });
  };

  const handleTextChange = (value: string) => {
    onUpdateData({ newsText: value });
  };

  const handleChecklistToggle = (key: keyof StudentData['checklist']) => {
    const updated = {
      ...data.checklist,
      [key]: !data.checklist[key],
    };
    onUpdateData({ checklist: updated });
  };

  const handleManualSave = () => {
    onUpdateData({});
    setSaveToast('✓ Draft berita berhasil disimpan');
    setTimeout(() => setSaveToast(''), 3000);
  };

  const checklistItems: { key: keyof StudentData['checklist']; label: string }[] = [
    { key: 'titleMatch', label: 'Judul sesuai dengan isi' },
    { key: 'has5W1H', label: 'Memuat 5W+1H' },
    { key: 'logicalOrder', label: 'Informasi disusun secara logis' },
    { key: 'newsStructure', label: 'Struktur berita sudah jelas' },
    { key: 'properLanguage', label: 'Menggunakan bahasa sendiri' },
    { key: 'noInventedFacts', label: 'Sudah memeriksa kembali tulisan' },
  ];

  const checkedCount = Object.values(data.checklist).filter(Boolean).length;
  const isContentReady = data.newsTitle.trim().length >= 5 && wordCount >= 30;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E63946]/10 text-[#E63946] text-xs font-bold font-mono tracking-wider uppercase">
          <span>LANGKAH 04 — PENULISAN BERITA MANDIRI</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
          ✍️ FINAL MISSION
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-[#E63946]">
          WRITE THE NEWS
        </h2>
        
        {/* Editorial Guidance - Scaffolding is completely removed, student writes independently */}
        <div className="pt-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-1">
          <p className="font-medium text-[#132238]">
            “Sekarang saatnya kamu menjadi reporter.”
          </p>
          <p>
            “Gunakan hasil pembacaan, temuan 5W+1H, dan kerangka yang telah kamu buat sebagai bekal untuk menulis.”
          </p>
          <p className="font-semibold text-[#E63946]">
            “Tulislah teks berita dengan bahasamu sendiri.”
          </p>
        </div>
      </div>

      {/* ⚠️ Prominent Mandatory Individual Writing Banner */}
      <div className="bg-[#132238] text-white rounded-xl p-4 sm:p-5 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-l-4 border-l-[#E63946]">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F4B942] uppercase">
            <Users className="w-4 h-4" />
            <span>Kaidah Penulisan Redaksi</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-white tracking-wide">
            “News Card digunakan berdasarkan kelompok, tetapi teks berita ditulis secara individu.”
          </p>
          <p className="text-xs text-slate-300">
            Setiap murid menghasilkan karya orisinal dengan gaya bahasa masing-masing.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded bg-white/10 text-xs font-mono font-semibold text-slate-200 shrink-0">
          Kasus: Case {currentCase.caseNumber} ({data.group})
        </div>
      </div>

      {/* Main Grid: Large Text Area Editor on Left, Checklist & Submission on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Title & Large Text Area */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Reporter Identity Summary Strip */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <User className="w-4 h-4 text-[#E63946]" />
              <span>Reporter: <strong>{data.name || '(Nama belum diisi)'}</strong></span>
            </div>
            <div className="text-slate-500 font-mono">
              Kelas: {data.className || '-'} · Absen: {data.attendanceNumber || '-'} · {data.group}
            </div>
          </div>

          {/* Headline Input */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="news-title"
                className="font-mono text-xs font-bold text-[#E63946] uppercase tracking-wider"
              >
                JUDUL BERITA
              </label>
              <span className="text-xs text-slate-400">Tulis judul berita yang menarik</span>
            </div>
            <input
              id="news-title"
              type="text"
              value={data.newsTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Tuliskan judul berita kamu di sini..."
              className="w-full px-4 py-3 text-base sm:text-lg font-bold font-editorial text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors"
            />
          </div>

          {/* Large News Text Area (Large size min 550-700px height per requirement) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E63946]" />
                <label
                  htmlFor="news-text"
                  className="font-mono text-xs font-bold text-[#132238] uppercase tracking-wider"
                >
                  TEKS BERITA
                </label>
              </div>

              {/* Word counter */}
              <div className="px-3.5 py-1 bg-[#132238] text-white rounded text-xs font-mono font-bold">
                <span>{wordCount} kata</span>
              </div>
            </div>

            {/* Pure Editor: No AI, no templates, purely student's own voice */}
            <div className="relative">
              <textarea
                id="news-text"
                rows={22}
                value={data.newsText}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Tuliskan teks berita kamu di sini secara utuh dengan menggunakan bahasamu sendiri..."
                className="w-full min-h-[540px] sm:min-h-[620px] p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-[#132238] bg-slate-50/60 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors resize-y font-serif"
              />
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500">
              <span className="italic">
                Naskah berita ditulis sendiri secara independen tanpa generator AI.
              </span>
              <div className="flex items-center gap-3">
                {saveToast && (
                  <span className="text-[#2E9B62] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {saveToast}
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleManualSave}
                  className="px-3.5 py-1.5 rounded border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>SIMPAN DRAFT</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Checklist & Submission */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Checklist Refleksi */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h3 className="font-editorial text-base font-bold text-[#132238]">
                Checklist Refleksi
              </h3>
              <span className="font-mono text-xs font-bold text-[#E63946]">
                {checkedCount}/6 Centang
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Periksa kembali tulisanmu dan beri tanda centang pada poin yang sudah terpenuhi:
            </p>

            <div className="space-y-3">
              {checklistItems.map((item) => {
                const isChecked = !!data.checklist[item.key];
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleChecklistToggle(item.key)}
                    className="w-full flex items-start gap-2.5 text-left p-2 rounded hover:bg-slate-50 transition-colors group cursor-pointer"
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#2E9B62]" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                      )}
                    </div>
                    <span
                      className={`text-xs leading-relaxed ${
                        isChecked ? 'text-slate-900 font-medium' : 'text-slate-600'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submission Action Box */}
          <div className="bg-[#132238] text-white rounded-xl p-5 sm:p-6 shadow-md space-y-4">
            <h4 className="font-editorial text-base font-bold text-white">
              Kirim Naskah Berita
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setelah selesai menulis dan memeriksa checklist refleksi, kirimkan hasil karyamu ke redaksi untuk mengunduh naskah dalam format PDF resmi.
            </p>

            <button
              type="button"
              onClick={onSubmitPrompt}
              disabled={!isContentReady}
              className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isContentReady
                  ? 'bg-[#E63946] text-white hover:bg-[#cf2b38] shadow-sm'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>KIRIM BERITA</span>
              <Send className="w-4 h-4" />
            </button>

            {!isContentReady && (
              <p className="text-[11px] text-amber-300 italic">
                * Isi judul berita dan minimal 30 kata naskah untuk mengaktifkan tombol kirim.
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Mission 02</span>
        </button>

        <button
          type="button"
          onClick={onSubmitPrompt}
          disabled={!isContentReady}
          className={`w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isContentReady
              ? 'bg-[#E63946] text-white hover:bg-[#cf2b38] shadow-sm'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>KIRIM BERITA SEKARANG</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
