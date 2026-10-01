import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Layers, CheckCircle2, BookOpen, ChevronDown, ChevronUp, Sparkles, Save, Lightbulb, HelpCircle, X } from 'lucide-react';
import { FiveWOneH, NewsStructure, NewsCase } from '../types';

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
  const [savedFeedback, setSavedFeedback] = useState<string>('');

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

  const isFormComplete = Object.values(form).every((val) => val.trim().length >= 5);

  const structureSteps = [
    {
      id: 'title',
      label: 'JUDUL',
      guide: 'Buat judul yang singkat, jelas, dan menggambarkan peristiwa utama.',
      placeholder: 'Tuliskan judul rancangan beritamu...',
      rows: 2,
      isInput: true,
      role: 'Menarik perhatian pembaca dan memberi gambaran peristiwa dalam satu tarikan nafas.',
    },
    {
      id: 'lead',
      label: 'TERAS BERITA',
      guide: 'Gunakan informasi paling penting untuk memperkenalkan peristiwa kepada pembaca.',
      placeholder: 'Tuliskan teras berita pembuka di sini...',
      rows: 3,
      isInput: false,
      role: 'Paragraf pertama yang memuat intisari penting peristiwa (perpaduan Apa, Siapa, Kapan, dan Di mana).',
    },
    {
      id: 'body',
      label: 'TUBUH BERITA',
      guide: 'Kembangkan informasi penting dan detail dari News Card.',
      placeholder: 'Jelaskan kronologi, rincian peristiwa, dan proses kegiatan...',
      rows: 4,
      isInput: false,
      role: 'Pengembangan detail peristiwa, menjawab pertanyaan Bagaimana proses terjadi dan Mengapa kegiatan dilakukan.',
    },
    {
      id: 'quote',
      label: 'KUTIPAN',
      guide: 'Gunakan informasi dari pernyataan narasumber yang tersedia.',
      placeholder: 'Masukkan kutipan pernyataan dari narasumber pada News Card...',
      rows: 3,
      isInput: false,
      role: 'Memperkuat fakta objektif dan kredibilitas tulisan lewat keterangan langsung saksi atau pembimbing.',
    },
    {
      id: 'closing',
      label: 'PENUTUP',
      guide: 'Gunakan informasi tambahan yang sesuai untuk mengakhiri berita.',
      placeholder: 'Tuliskan kalimat penutup atau harapan masa depan...',
      rows: 3,
      isInput: false,
      role: 'Bagian akhir berupa data pelengkap, dampak acara, atau kesimpulan umum.',
    },
  ];

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

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowStructureModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 text-xs font-bold shadow-2xs cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-amber-700" />
            <span>💡 Petunjuk Struktur</span>
          </button>

          <button
            onClick={onOpenReference}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#E63946]" />
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
            PENUTUP (Informasi pelengkap atau kesimpulan)
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
        {structureSteps.map((step) => {
          const fieldKey = step.id as keyof NewsStructure;
          return (
            <div
              key={step.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <label
                  htmlFor={`build-${step.id}`}
                  className="font-mono text-xs font-bold text-[#E63946] uppercase tracking-wider"
                >
                  BAGIAN: {step.label}
                </label>
              </div>
              
              {/* Requested exact scaffolding petunjuk */}
              <div className="mb-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100 flex items-start gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#F4B942] shrink-0 mt-0.5" />
                <span>Petunjuk: “{step.guide}”</span>
              </div>

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
              {structureSteps.map((st) => (
                <div key={st.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-[#132238] uppercase font-mono text-xs text-[#E63946] mb-1">
                    {st.label}
                  </h4>
                  <p className="text-slate-600 mb-1">
                    <strong>Fungsi:</strong> {st.role}
                  </p>
                  <p className="text-slate-700 italic">
                    <strong>Petunjuk:</strong> “{st.guide}”
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setShowStructureModal(false)}
                className="px-4 py-2 bg-[#132238] text-white text-xs font-semibold rounded-lg hover:bg-[#1f3555]"
              >
                Tutup Petunjuk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
