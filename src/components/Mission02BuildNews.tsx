import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Layers, CheckCircle2, BookOpen, ChevronDown, ChevronUp, Sparkles, Save, Lightbulb, HelpCircle, X, Copy, Check } from 'lucide-react';
import { FiveWOneH, NewsStructure, NewsCase } from '../types';
import { FiveWOneHHintModal } from './FiveWOneHHintModal';
import { NEWS_STRUCTURE_HINTS } from '../data/hintsData';

interface Mission02BuildNewsProps {
  currentCase: NewsCase;
  initialValues: NewsStructure;
  fiveWOneH: FiveWOneH;
  onSave: (values: NewsStructure) => void;
  onNext: () => void;
  onBack: () => void;
  onOpenReference: () => void;
}

export const Mission02BuildNews: React.FC<Mission02BuildNewsProps> = ({
  currentCase,
  initialValues,
  fiveWOneH,
  onSave,
  onNext,
  onBack,
  onOpenReference,
}) => {
  const [form, setForm] = useState<NewsStructure>(initialValues);
  const [show5W1HRef, setShow5W1HRef] = useState<boolean>(true);
  const [showStructureModal, setShowStructureModal] = useState<boolean>(false);
  const [show5W1HHintModal, setShow5W1HHintModal] = useState<boolean>(false);
  const [savedFeedback, setSavedFeedback] = useState<string>('');
  const [copiedPattern, setCopiedPattern] = useState<string>('');

  const handleChange = (field: keyof NewsStructure, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onSave(updated);
  };

  const handleManualSave = () => {
    onSave(form);
    setSavedFeedback('✓ Rancangan berita tersimpan.');
    setTimeout(() => {
      setSavedFeedback('');
    }, 3000);
  };

  const handleCopyPattern = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPattern(text);
    setTimeout(() => {
      setCopiedPattern('');
    }, 2000);
  };

  const handleInsertPattern = (fieldKey: keyof NewsStructure, text: string) => {
    const currentVal = form[fieldKey] || '';
    const updatedVal = currentVal ? `${currentVal} ${text}` : text;
    handleChange(fieldKey, updatedVal);
    handleCopyPattern(text);
  };

  const isFormComplete = Object.values(form).every((val) => val.trim().length >= 5);


  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4B942]/15 text-[#132238] text-xs font-bold font-mono tracking-wider uppercase mb-1">
            <span>LANGKAH 03 — ARRANGE (ORGANISASI STRUKTUR BERITA)</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
            🧩 MISSION 02 — BUILD THE NEWS
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Informasi sudah kamu temukan. Sekarang ubah informasi tersebut menjadi kerangka struktur berita yang teratur untuk kasus <strong>{currentCase.topicTitle}</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShow5W1HHintModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 text-xs font-bold shadow-2xs cursor-pointer transition-colors"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
            <span>💡 Petunjuk 5W+1H</span>
          </button>

          <button
            type="button"
            onClick={() => setShowStructureModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-2xs cursor-pointer transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#132238]" />
            <span>Struktur Berita</span>
          </button>

          <button
            onClick={onOpenReference}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs cursor-pointer transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#E63946]" />
            <span>Lihat Kartu</span>
          </button>
        </div>
      </div>

      {/* Visual Inverted Pyramid / News Structure Schematic */}
      <div className="bg-[#132238] text-white rounded-xl p-6 sm:p-7 mb-8 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#F4B942]" />
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono">
              PIRAMIDA TERBALIK (INVERTED PYRAMID)
            </h2>
          </div>
          <span className="text-xs text-slate-300 hidden sm:inline">
            Informasi terpenting disusun di bagian atas
          </span>
        </div>

        {/* Visual Pyramid Hierarchy */}
        <div className="space-y-2 max-w-2xl mx-auto py-2">
          <div className="bg-[#E63946] text-white text-xs sm:text-sm font-bold py-2 px-4 rounded text-center shadow-xs">
            JUDUL (Singkat, padat, dan mencerminkan inti peristiwa)
          </div>
          <div className="w-[92%] mx-auto bg-[#F4B942] text-[#132238] text-xs sm:text-sm font-bold py-2 px-4 rounded text-center shadow-xs">
            TERAS BERITA / LEAD (Informasi paling krusial untuk pembaca)
          </div>
          <div className="w-[84%] mx-auto bg-slate-200 text-[#132238] text-xs sm:text-sm font-bold py-2 px-4 rounded text-center shadow-xs">
            TUBUH BERITA / BODY (Rincian proses kejadian & data detail)
          </div>
          <div className="w-[76%] mx-auto bg-slate-300 text-[#132238] text-xs sm:text-sm font-bold py-2 px-4 rounded text-center shadow-xs">
            KUTIPAN (Pernyataan langsung narasumber resmi)
          </div>
          <div className="w-[68%] mx-auto bg-slate-400 text-[#132238] text-xs sm:text-sm font-bold py-2 px-4 rounded text-center shadow-xs">
            PENUTUP (EKOR BERITA) (Informasi pelengkap atau kesimpulan)
          </div>
        </div>
      </div>

      {/* Collapsible Quick Peek 5W+1H from Mission 01 */}
      <div className="bg-white rounded-xl border border-slate-200 mb-8 overflow-hidden shadow-2xs">
        <button
          type="button"
          onClick={() => setShow5W1HRef(!show5W1HRef)}
          className="w-full px-5 py-3.5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E63946]" />
            <span className="text-xs sm:text-sm font-bold text-[#132238]">
              Catatan Unsur 5W+1H Hasil Temuanmu di Misi 01
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>{show5W1HRef ? 'Sembunyikan' : 'Tampilkan'}</span>
            {show5W1HRef ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {show5W1HRef && (
          <div className="p-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white">
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">WHAT (Apa):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.what || '(Belum diisi)'}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">WHO (Siapa):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.who || '(Belum diisi)'}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">WHEN (Kapan):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.when || '(Belum diisi)'}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">WHERE (Di mana):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.where || '(Belum diisi)'}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">WHY (Mengapa):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.why || '(Belum diisi)'}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <strong className="text-[#E63946] block font-mono">HOW (Bagaimana):</strong>
              <p className="text-slate-700 mt-0.5">{fiveWOneH.how || '(Belum diisi)'}</p>
            </div>
          </div>
        )}
      </div>

      {/* Structure Form */}
      <div className="space-y-6 mb-8">
        {NEWS_STRUCTURE_HINTS.map((step) => {
          const fieldKey = step.id as keyof NewsStructure;
          return (
            <div
              key={step.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all space-y-3.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-2.5">
                <label
                  htmlFor={`build-${step.id}`}
                  className="font-mono text-xs sm:text-sm font-bold text-[#E63946] uppercase tracking-wider flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E63946]"></span>
                  <span>BAGIAN: {step.label}</span>
                </label>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                  {step.role}
                </span>
              </div>
              
              {/* Petunjuk & Contoh Pola / Kata Transisi Box */}
              <div className="bg-amber-50/70 border border-amber-200/90 rounded-lg p-3.5 sm:p-4 space-y-3 text-xs text-slate-800">
                {/* Petunjuk Baru */}
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-amber-950 font-bold">Petunjuk: </strong>
                    <span className="text-slate-800">&ldquo;{step.guide}&rdquo;</span>
                  </div>
                </div>

                {/* Contoh Pola / Contoh Kata/Pola */}
                {step.patterns && step.patterns.length > 0 && (
                  <div className="pt-2.5 border-t border-amber-200/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#132238] flex items-center gap-1.5">
                        <span className="text-[#E63946]">▶</span>
                        <span>
                          {step.id === 'lead' || step.id === 'closing'
                            ? 'Contoh Kata/Pola:'
                            : 'Contoh Pola:'}
                        </span>
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Klik &lsquo;Salin&rsquo; atau &lsquo;Sisipkan&rsquo; untuk memakai pola
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {step.patterns.map((pat, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white border border-amber-200/90 rounded-lg px-3 py-2 text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#E63946] font-bold">•</span>
                            <span className="font-mono text-amber-950 font-medium select-all">
                              &lsquo;{pat}&rsquo;
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                            <button
                              type="button"
                              onClick={() => handleCopyPattern(pat)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans text-[11px] font-medium transition-colors cursor-pointer"
                              title="Salin ke clipboard"
                            >
                              {copiedPattern === pat ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700 font-bold">Tersalin</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-500" />
                                  <span>Salin</span>
                                </>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleInsertPattern(fieldKey, pat)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-sans text-[11px] font-semibold transition-colors cursor-pointer"
                              title="Sisipkan ke kotak isian"
                            >
                              <span>+ Sisipkan</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contoh Kata Transisi */}
                {step.transitions && step.transitions.length > 0 && (
                  <div className="pt-2.5 border-t border-amber-200/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#132238] flex items-center gap-1.5">
                        <span className="text-[#F4B942]">▶</span>
                        <span>Contoh Kata Transisi:</span>
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Gunakan untuk merangkai kalimat tubuh berita yang padu
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {step.transitions.map((trans, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 bg-white border border-amber-300 rounded-lg pl-2.5 pr-1.5 py-1 text-xs shadow-2xs"
                        >
                          <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                          <span className="font-mono text-amber-950 font-medium">
                            &lsquo;{trans}&rsquo;
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyPattern(trans)}
                            className="p-1 hover:bg-amber-50 rounded text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                            title="Salin kata transisi"
                          >
                            {copiedPattern === trans ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3 text-slate-500" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleInsertPattern(fieldKey, trans)}
                            className="px-1.5 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-[10px] transition-colors cursor-pointer"
                            title="Sisipkan kata transisi"
                          >
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div>
                {step.isInput ? (
                  <input
                    id={`build-${step.id}`}
                    type="text"
                    value={form[fieldKey]}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                    placeholder={step.placeholder}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-base font-semibold text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors"
                  />
                ) : (
                  <textarea
                    id={`build-${step.id}`}
                    rows={step.rows}
                    value={form[fieldKey]}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                    placeholder={step.placeholder}
                    className="w-full px-3.5 py-2.5 text-sm text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors leading-relaxed"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Save Draft Action Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-[#132238]">Simpan Kerangka Berita</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Rancangan ini akan menjadi pegangan dalam menulis naskah berita mandiri pada tahap berikutnya.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {savedFeedback && (
            <span className="text-xs font-semibold text-[#2E9B62] flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              {savedFeedback}
            </span>
          )}

          <button
            type="button"
            onClick={handleManualSave}
            className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4 text-[#132238]" />
            <span>SIMPAN RANCANGAN</span>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Mission 01</span>
        </button>

        <button
          onClick={() => {
            onSave(form);
            onNext();
          }}
          disabled={!isFormComplete}
          className={`w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isFormComplete
              ? 'bg-[#E63946] text-white hover:bg-[#cf2b38] shadow-sm'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>LANJUT KE FINAL MISSION</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Structure Guide Explanation Modal */}
      {showStructureModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132238]/60 backdrop-blur-xs"
          onClick={() => setShowStructureModal(false)}
        >
          <div
            className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#F4B942]" />
                <h3 className="font-editorial text-lg font-bold text-[#132238]">
                  Petunjuk Struktur Berita
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowStructureModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 max-h-[60vh] overflow-y-auto pr-1">
              {NEWS_STRUCTURE_HINTS.map((st) => (
                <div key={st.id} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold uppercase font-mono text-xs text-[#E63946] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]"></span>
                      <span>BAGIAN: {st.label}</span>
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">Piramida Terbalik</span>
                  </div>

                  <p className="text-slate-600 text-xs">
                    <strong>Fungsi:</strong> {st.role}
                  </p>

                  <div className="bg-amber-50/80 p-2.5 rounded border border-amber-200/90 text-xs space-y-1.5">
                    <p className="text-amber-950">
                      <strong>Petunjuk Baru:</strong> &ldquo;{st.guide}&rdquo;
                    </p>

                    {st.patterns && st.patterns.length > 0 && (
                      <div className="pt-1.5 border-t border-amber-200/60">
                        <strong className="text-slate-800 block text-[11px] mb-1">
                          {st.id === 'lead' || st.id === 'closing' ? 'Contoh Kata/Pola:' : 'Contoh Pola:'}
                        </strong>
                        <ul className="space-y-1 font-mono text-[11px] text-amber-950 pl-2">
                          {st.patterns.map((p, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="text-[#E63946] font-bold">•</span>
                              <span>&lsquo;{p}&rsquo;</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {st.transitions && st.transitions.length > 0 && (
                      <div className="pt-1.5 border-t border-amber-200/60">
                        <strong className="text-slate-800 block text-[11px] mb-1">
                          Contoh Kata Transisi:
                        </strong>
                        <div className="flex flex-wrap gap-1 font-mono text-[11px] text-amber-950">
                          {st.transitions.map((t, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 rounded bg-white border border-amber-300">
                              &lsquo;{t}&rsquo;
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setShowStructureModal(false)}
                className="px-4 py-2 bg-[#132238] text-white text-xs font-semibold rounded-lg hover:bg-[#1f3555] cursor-pointer"
              >
                Tutup Petunjuk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global 5W+1H Hint Modal */}
      <FiveWOneHHintModal
        isOpen={show5W1HHintModal}
        onClose={() => setShow5W1HHintModal(false)}
      />
    </div>
  );
};
