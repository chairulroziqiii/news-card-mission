import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, BookOpen, Lightbulb, RefreshCw, ChevronDown, ChevronUp, Sparkles, Copy, Check } from 'lucide-react';
import { FiveWOneH, NewsCase } from '../types';
import { FIVE_W_ONE_H_HINTS } from '../data/hintsData';
import { FiveWOneHHintModal } from './FiveWOneHHintModal';

interface Mission01FindFactsProps {
  currentCase: NewsCase;
  initialValues: FiveWOneH;
  onSave: (values: FiveWOneH) => void;
  onNext: () => void;
  onBack: () => void;
  onOpenReference: () => void;
}

interface ValidationStatus {
  checked: boolean;
  isValid: boolean;
  message: string;
}

export const Mission01FindFacts: React.FC<Mission01FindFactsProps> = ({
  currentCase,
  initialValues,
  onSave,
  onNext,
  onBack,
  onOpenReference,
}) => {
  const [form, setForm] = useState<FiveWOneH>(initialValues);
  const [showGlobalModal, setShowGlobalModal] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [openHints, setOpenHints] = useState<Record<keyof FiveWOneH, boolean>>({
    what: false,
    who: false,
    when: false,
    where: false,
    why: false,
    how: false,
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const [validationResults, setValidationResults] = useState<Record<keyof FiveWOneH, ValidationStatus>>({
    what: { checked: false, isValid: false, message: '' },
    who: { checked: false, isValid: false, message: '' },
    when: { checked: false, isValid: false, message: '' },
    where: { checked: false, isValid: false, message: '' },
    why: { checked: false, isValid: false, message: '' },
    how: { checked: false, isValid: false, message: '' },
  });
  const [hasCheckedAtLeastOnce, setHasCheckedAtLeastOnce] = useState<boolean>(false);

  const toggleHint = (field: keyof FiveWOneH) => {
    setOpenHints((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field: keyof FiveWOneH, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onSave(updated);
  };

  const validateField = (field: keyof FiveWOneH, text: string): ValidationStatus => {
    const trimmed = text.trim().toLowerCase();
    if (!trimmed || trimmed.length < 3) {
      return {
        checked: true,
        isValid: false,
        message: '⚠ Belum diisi. Masukkan informasi yang kamu temukan dari News Card.',
      };
    }

    const rule = currentCase.validation[field];
    const matches = rule.requiredKeywords.filter((kw) => trimmed.includes(kw.toLowerCase()));
    const isValid = matches.length >= 1 && trimmed.length >= 6;

    if (isValid) {
      return {
        checked: true,
        isValid: true,
        message: '✓ Temuanmu sudah tepat dan relevan dengan fakta kartu.',
      };
    } else {
      return {
        checked: true,
        isValid: false,
        message: `⚠ Periksa kembali News Card dan coba lagi. (${rule.hint})`,
      };
    }
  };

  const handleCheckAnswers = () => {
    const results: Record<keyof FiveWOneH, ValidationStatus> = {
      what: validateField('what', form.what),
      who: validateField('who', form.who),
      when: validateField('when', form.when),
      where: validateField('where', form.where),
      why: validateField('why', form.why),
      how: validateField('how', form.how),
    };

    setValidationResults(results);
    setHasCheckedAtLeastOnce(true);
    onSave(form);
  };

  const allFilled = Object.values(form).every((v) => v.trim().length >= 3);
  const correctCount = Object.values(validationResults).filter((r) => r.checked && r.isValid).length;
  const isAllValid = correctCount === 6;

  const questionsConfig: {
    key: keyof FiveWOneH;
    element: string;
    label: string;
    question: string;
    hintText: string;
    placeholder: string;
  }[] = [
    {
      key: 'what',
      element: 'WHAT',
      label: 'WHAT (Apa)',
      question: 'Apa peristiwa utama yang terjadi?',
      hintText: 'Cari informasi yang menjelaskan peristiwa utama.',
      placeholder: 'Tuliskan peristiwa utama yang sedang berlangsung...',
    },
    {
      key: 'who',
      element: 'WHO',
      label: 'WHO (Siapa)',
      question: 'Siapa yang terlibat?',
      hintText: 'Cari pihak atau orang yang terlibat dalam peristiwa.',
      placeholder: 'Sebutkan pihak, peserta, murid, atau narasumber yang terlibat...',
    },
    {
      key: 'when',
      element: 'WHEN',
      label: 'WHEN (Kapan)',
      question: 'Kapan peristiwa berlangsung?',
      hintText: 'Cari informasi mengenai waktu atau tanggal.',
      placeholder: 'Sebutkan hari, tanggal, bulan, tahun, atau jam kejadian...',
    },
    {
      key: 'where',
      element: 'WHERE',
      label: 'WHERE (Di mana)',
      question: 'Di mana peristiwa berlangsung?',
      hintText: 'Cari lokasi terjadinya peristiwa.',
      placeholder: 'Tuliskan nama tempat, gedung, atau kota terjadinya peristiwa...',
    },
    {
      key: 'why',
      element: 'WHY',
      label: 'WHY (Mengapa)',
      question: 'Mengapa peristiwa/kegiatan tersebut dilakukan?',
      hintText: 'Cari alasan atau tujuan kegiatan/peristiwa.',
      placeholder: 'Jelaskan latar belakang, maksud, atau tujuan kegiatan...',
    },
    {
      key: 'how',
      element: 'HOW',
      label: 'HOW (Bagaimana)',
      question: 'Bagaimana peristiwa tersebut berlangsung?',
      hintText: 'Cari informasi mengenai proses atau bagaimana peristiwa berlangsung.',
      placeholder: 'Uraikan tahapan, cara kerja, atau suasana saat peristiwa berlangsung...',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E63946]/10 text-[#E63946] text-xs font-bold font-mono tracking-wider uppercase mb-1">
            <span>LANGKAH 02 — FIND (IDENTIFIKASI 5W+1H)</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
            🔎 MISSION 01 — FIND THE FACTS
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Temukan dan petakan unsur <strong>5W+1H</strong> dari News Card <strong>{currentCase.groupName} ({currentCase.topicTitle})</strong>.
          </p>
        </div>

        {/* Peek News Cards Button */}
        <button
          onClick={onOpenReference}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs cursor-pointer shrink-0"
        >
          <BookOpen className="w-4 h-4 text-[#E63946]" />
          <span>Lihat Kartu Referensi</span>
        </button>
      </div>

      {/* Scaffolding Explanation Banner */}
      <div className="bg-[#FAF8F5] border border-[#F4B942]/60 rounded-xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700 shadow-2xs">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[#F4B942] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#132238]">Bantuan Scaffolding 5W+1H: </strong>
            Klik tombol <strong>“💡 Lihat Petunjuk”</strong> pada setiap unsur untuk melihat <em>Cara Membuat</em>, <em>Contoh Pola Kalimat</em>, dan <em>Daftar Kata Transisi/Penghubung</em>.
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowGlobalModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#132238] hover:bg-[#1f3555] text-white text-xs font-semibold cursor-pointer shrink-0 transition-colors shadow-2xs"
        >
          <Lightbulb className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>Buka Semua Petunjuk 5W+1H</span>
        </button>
      </div>

      {/* Form Questions */}
      <div className="space-y-6 mb-10">
        {questionsConfig.map((item) => {
          const status = validationResults[item.key];
          const isHintOpen = openHints[item.key];
          const hint = FIVE_W_ONE_H_HINTS[item.key];

          return (
            <div
              key={item.key}
              className={`bg-white rounded-xl p-5 sm:p-6 border transition-all ${
                status.checked
                  ? status.isValid
                    ? 'border-[#2E9B62]/50 shadow-xs'
                    : 'border-[#E63946]/50 shadow-xs'
                  : 'border-slate-200 shadow-2xs hover:border-slate-300'
              }`}
            >
              {/* Question Header & Hint Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-1 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-[#E63946] uppercase tracking-wider">
                  UNSUR {item.element}
                </span>

                <button
                  type="button"
                  onClick={() => toggleHint(item.key)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold text-[#132238] hover:text-[#E63946] hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-[#F4B942]" />
                  <span>{isHintOpen ? 'Sembunyikan Petunjuk' : '💡 Lihat Petunjuk'}</span>
                  {isHintOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>

              {/* Scaffolding Hint Box (Cara Membuat, Contoh Kata/Pola, Kata Transisi) */}
              {isHintOpen && hint && (
                <div className="mb-4 p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-slate-800 space-y-3 animate-in fade-in duration-150 shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                      <span className="font-editorial text-sm font-bold text-[#132238]">
                        {hint.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded">
                      PETUNJUK KATA
                    </span>
                  </div>

                  {/* Cara Membuat */}
                  <div className="space-y-1">
                    <div className="font-bold text-[#132238] flex items-center gap-1.5">
                      <span className="text-[#E63946]">▶</span>
                      <span>Cara Membuat:</span>
                    </div>
                    <p className="text-slate-700 pl-4 leading-relaxed font-sans">
                      {hint.method}
                    </p>
                  </div>

                  {/* Contoh Kata / Pola */}
                  <div className="space-y-1.5">
                    <div className="font-bold text-[#132238] flex items-center gap-1.5">
                      <span className="text-[#E63946]">▶</span>
                      <span>Contoh Kata/Pola:</span>
                    </div>
                    <ul className="pl-4 space-y-1.5">
                      {hint.patterns.map((pat, idx) => (
                        <li key={idx} className="flex items-center justify-between gap-2 p-1.5 rounded bg-white border border-amber-200/80">
                          <div className="flex items-center gap-2">
                            <span className="text-[#E63946] font-bold">•</span>
                            <span className="font-mono text-[11px] sm:text-xs text-amber-950 font-medium">
                              &lsquo;{pat}&rsquo;
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(pat)}
                            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                            title="Salin pola"
                          >
                            {copiedText === pat ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
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
                      {hint.transitions.map((trans, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white text-slate-700 border border-amber-200 text-[11px] font-medium"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                          <span>{trans}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <h2 className="text-sm sm:text-base font-semibold text-[#132238] mb-2.5">
                {item.question}
              </h2>

              <textarea
                id={`input-${item.key}`}
                rows={2}
                value={form[item.key]}
                onChange={(e) => handleChange(item.key, e.target.value)}
                placeholder={item.placeholder}
                className="w-full px-3.5 py-2.5 text-sm text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors leading-relaxed"
              />

              {/* Live validation feedback */}
              {status.checked && (
                <div
                  className={`mt-2.5 text-xs font-medium flex items-start gap-1.5 ${
                    status.isValid ? 'text-[#2E9B62]' : 'text-[#E63946]'
                  }`}
                >
                  {status.isValid ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Check Answer Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#132238]">
              Verifikasi Fakta Redaksi
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {hasCheckedAtLeastOnce
                ? `Skor Verifikasi: ${correctCount} dari 6 unsur sudah sesuai dengan kartu.`
                : 'Tekan "Cek Jawaban" untuk memastikan kelengkapan data temuanmu.'}
            </p>
          </div>

          <button
            onClick={handleCheckAnswers}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#132238] text-white text-xs sm:text-sm font-semibold hover:bg-[#1f3555] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>CEK JAWABAN</span>
          </button>
        </div>

        {hasCheckedAtLeastOnce && (
          <div
            className={`p-3.5 rounded-lg text-xs font-medium border ${
              isAllValid
                ? 'bg-[#2E9B62]/10 border-[#2E9B62]/30 text-[#2E9B62]'
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}
          >
            {isAllValid ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9B62]" />
                Luar biasa! Seluruh unsur 5W+1H telah berhasil kamu temukan dengan tepat. Lanjutkan ke langkah pengorganisasian struktur berita.
              </span>
            ) : (
              <span>
                Catatan Editor: Masih ada beberapa unsur yang perlu dilengkapi sesuai petunjuk di atas. Kamu dapat memperbaiki jawaban atau melanjutkan bila merasa sudah cukup.
              </span>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke News Card</span>
        </button>

        <button
          onClick={() => {
            onSave(form);
            onNext();
          }}
          disabled={!allFilled}
          className={`w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
            allFilled
              ? 'bg-[#E63946] text-white hover:bg-[#cf2b38] shadow-sm'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>LANJUT KE MISSION 02</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Global 5W+1H Scaffolding & Pattern Modal */}
      <FiveWOneHHintModal
        isOpen={showGlobalModal}
        onClose={() => setShowGlobalModal(false)}
      />
    </div>
  );
};
