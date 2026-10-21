import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Send,
  Save,
  CheckSquare,
  Square,
  FileText,
  User,
  Users,
  ShieldAlert,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  X,
  PlusCircle,
  BookOpen,
} from 'lucide-react';
import { StudentData, NewsCase } from '../types';
import { FIVE_W_ONE_H_HINTS } from '../data/hintsData';
import { FiveWOneHHintModal } from './FiveWOneHHintModal';

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
  const [showHintModal, setShowHintModal] = useState<boolean>(false);
  const [hintModalDefaultTab, setHintModalDefaultTab] = useState<'all' | 'what' | 'who' | 'where' | 'when' | 'why' | 'how'>('all');
  const [selectedInlineHint, setSelectedInlineHint] = useState<'what' | 'who' | 'where' | 'when' | 'why' | 'how' | null>(null);
  const [copiedPattern, setCopiedPattern] = useState<string | null>(null);

  const handleCopyPattern = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPattern(text);
    setTimeout(() => setCopiedPattern(null), 2000);
  };

  const handleInsertPattern = (pattern: string) => {
    const current = data.newsText;
    const spacer = current.length > 0 && !current.endsWith('\n') ? '\n\n' : '';
    const updated = current + spacer + pattern + ' ';
    onUpdateData({ newsText: updated });
    setSaveToast(`✓ Pola '${pattern.substring(0, 15)}...' disisipkan`);
    setTimeout(() => setSaveToast(''), 2500);
  };

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E63946]" />
                <label
                  htmlFor="news-text"
                  className="font-mono text-xs font-bold text-[#132238] uppercase tracking-wider"
                >
                  TEKS BERITA
                </label>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Word counter */}
                <div className="px-3.5 py-1 bg-[#132238] text-white rounded text-xs font-mono font-bold">
                  <span>{wordCount} kata</span>
                </div>

                {/* Modal trigger button */}
                <button
                  type="button"
                  onClick={() => {
                    setHintModalDefaultTab('all');
                    setShowHintModal(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>💡 Lihat Petunjuk 5W+1H</span>
                </button>
              </div>
            </div>

            {/* Quick 5W+1H Scaffolding & Pattern Dropdown */}
            <div className="bg-slate-50/90 border border-slate-200 rounded-xl p-3 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#F4B942]" />
                  <span className="text-xs font-bold text-[#132238]">
                    Petunjuk Unsur 5W+1H (Pola Kalimat & Kata Transisi):
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      setHintModalDefaultTab('all');
                      setShowHintModal(true);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#132238] text-white hover:bg-[#1f3555] text-[11px] font-semibold transition-colors cursor-pointer shadow-2xs"
                  >
                    <BookOpen className="w-3 h-3 text-[#F4B942]" />
                    <span>Buka Semua Petunjuk</span>
                  </button>
                </div>
              </div>

              {/* 5W+1H Element Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                <span className="text-[11px] font-medium text-slate-500 mr-0.5 shrink-0">Pilih Unsur:</span>
                {(['what', 'who', 'where', 'when', 'why', 'how'] as const).map((key) => {
                  const item = FIVE_W_ONE_H_HINTS[key];
                  const isSelected = selectedInlineHint === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedInlineHint(isSelected ? null : key)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                        isSelected
                          ? 'bg-[#E63946] text-white shadow-2xs'
                          : 'bg-white text-slate-700 hover:text-[#132238] hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span>{item.element}</span>
                      {isSelected ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Dropdown Card with Cara Membuat, Contoh Pola, Kata Transisi */}
              {selectedInlineHint && (
                <div className="p-3.5 bg-amber-50/95 border border-amber-200 rounded-xl text-xs text-slate-800 space-y-3 animate-in fade-in duration-150 shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                      <span className="font-editorial text-sm font-bold text-[#132238]">
                        {FIVE_W_ONE_H_HINTS[selectedInlineHint].label}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedInlineHint(null)}
                      className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-amber-100 cursor-pointer"
                      title="Tutup Petunjuk"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Cara Membuat */}
                  <div className="space-y-1">
                    <div className="font-bold text-[#132238] flex items-center gap-1.5">
                      <span className="text-[#E63946]">▶</span>
                      <span>Cara Membuat:</span>
                    </div>
                    <p className="text-slate-700 pl-4 leading-relaxed font-sans">
                      {FIVE_W_ONE_H_HINTS[selectedInlineHint].method}
                    </p>
                  </div>

                  {/* Contoh Kata / Pola */}
                  <div className="space-y-1.5">
                    <div className="font-bold text-[#132238] flex items-center gap-1.5">
                      <span className="text-[#E63946]">▶</span>
                      <span>Contoh Kata/Pola:</span>
                    </div>
                    <ul className="pl-4 space-y-1.5">
                      {FIVE_W_ONE_H_HINTS[selectedInlineHint].patterns.map((pat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-white border border-amber-200/80"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#E63946] font-bold">•</span>
                            <span className="font-mono text-[11px] sm:text-xs text-amber-950 font-medium">
                              &lsquo;{pat}&rsquo;
                            </span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleInsertPattern(pat)}
                              className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                              title="Sisipkan ke naskah berita"
                            >
                              <PlusCircle className="w-3 h-3" />
                              <span>Sisipkan</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopyPattern(pat)}
                              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                              title="Salin pola"
                            >
                              {copiedPattern === pat ? (
                                <Check className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Kata Transisi / Penghubung */}
                  <div className="space-y-1.5 pt-2 border-t border-amber-200/50">
                    <div className="font-bold text-[#132238] flex items-center gap-1.5">
                      <span className="text-[#F4B942]">▶</span>
                      <span>Daftar Kata Transisi / Penghubung yang Bisa Digunakan:</span>
                    </div>
                    <div className="pl-4 flex flex-wrap gap-1.5">
                      {FIVE_W_ONE_H_HINTS[selectedInlineHint].transitions.map((trans, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white text-slate-700 border border-amber-200 text-[11px] font-medium shadow-2xs"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                          <span>{trans}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
          
          {/* Quick Guide Card: 5W+1H Scaffolding & Sentence Patterns */}
          <div className="bg-amber-50/70 rounded-xl p-5 border border-amber-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400/30 text-amber-900 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-editorial text-sm font-bold text-[#132238]">
                Petunjuk Pola & Transisi
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Bingung merangkai kata awal atau penghubung antarparagraf? Buka panduan pola kalimat untuk keenam unsur 5W+1H.
            </p>
            <button
              type="button"
              onClick={() => {
                setHintModalDefaultTab('all');
                setShowHintModal(true);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#132238] hover:bg-[#1f3555] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>💡 Buka Modal Petunjuk 5W+1H</span>
            </button>
          </div>

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

      {/* Global 5W+1H Modal */}
      <FiveWOneHHintModal
        isOpen={showHintModal}
        onClose={() => setShowHintModal(false)}
        defaultTab={hintModalDefaultTab}
        onSelectPattern={(pattern) => {
          handleInsertPattern(pattern);
          setShowHintModal(false);
        }}
      />
    </div>
  );
};
