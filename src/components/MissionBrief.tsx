import React from 'react';
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Target, Compass, FileText, Send, Sparkles } from 'lucide-react';

interface MissionBriefProps {
  onNext: () => void;
  onBack: () => void;
}

export const MissionBrief: React.FC<MissionBriefProps> = ({ onNext, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left space-y-2 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E63946]/10 text-[#E63946] text-xs font-bold font-mono tracking-wider uppercase">
          <Target className="w-3.5 h-3.5" />
          <span>TAHAP PERSIAPAN</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
          🎯 MISSION BRIEF
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-[#E63946]">
          Hari ini kamu adalah reporter!
        </p>
      </div>

      {/* Narrative Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8 space-y-4">
        <div className="prose text-slate-700 text-base sm:text-lg leading-relaxed space-y-3">
          <p className="border-l-4 border-[#132238] pl-4 font-medium text-slate-800">
            “Sebuah peristiwa telah terjadi. Informasinya sudah tersedia, tetapi masih berupa potongan-potongan informasi.”
          </p>
          <p className="text-slate-600">
            Tugasmu adalah menemukan informasi penting, memahami unsur <strong>5W+1H</strong>, menyusun informasi, lalu mengubahnya menjadi sebuah <strong>teks berita</strong> yang faktual, utuh, dan menarik untuk pembaca.
          </p>
        </div>

        {/* Mission Map Section */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4 text-[#132238]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#132238]">
              Mission Map (Peta Misi Redaksi)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { num: '01', title: 'READ', desc: 'Baca informasi', icon: FileText, color: 'border-l-4 border-l-[#132238]' },
              { num: '02', title: 'FIND', desc: 'Temukan 5W+1H', icon: Target, color: 'border-l-4 border-l-[#E63946]' },
              { num: '03', title: 'ARRANGE', desc: 'Susun informasi', icon: Sparkles, color: 'border-l-4 border-l-[#F4B942]' },
              { num: '04', title: 'WRITE', desc: 'Tulis berita', icon: FileText, color: 'border-l-4 border-l-[#2E9B62]' },
              { num: '05', title: 'SUBMIT', desc: 'Kirim hasil', icon: Send, color: 'border-l-4 border-l-[#132238]' },
            ].map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className={`bg-[#F4F6F8] p-3.5 rounded-lg border border-slate-200 ${step.color} relative`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
                    <span>{step.num}</span>
                    <IconComp className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <div className="font-bold text-[#132238] text-sm">{step.title}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{step.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MISSION RULES Box */}
      <div className="bg-[#132238] text-white rounded-xl p-6 sm:p-8 mb-8 shadow-md">
        <div className="flex items-center gap-2.5 mb-4 text-[#F4B942]">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="text-base font-bold uppercase tracking-wider font-mono">
            MISSION RULES (Aturan Misi Redaksi)
          </h2>
        </div>

        <ul className="space-y-3 text-sm sm:text-base text-slate-200">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E9B62] shrink-0 mt-0.5" />
            <span><strong>Kerjakan penulisan secara individu.</strong> Meskipun News Card dibagikan berdasarkan kelompok belajarmu, naskah akhir ditulis mandiri.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E9B62] shrink-0 mt-0.5" />
            <span><strong>Baca setiap informasi dengan teliti.</strong> Pahami seluruh potongan berita pada News Case kelompokmu.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E9B62] shrink-0 mt-0.5" />
            <span><strong>Gunakan informasi yang tersedia.</strong> Jangan menambahkan fakta rekaan yang tidak ada pada sumber berita.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
            <span><strong>Jangan menggunakan generator AI.</strong> Latih daya analisis dan kemampuan menulismu dengan bahasamu sendiri.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E9B62] shrink-0 mt-0.5" />
            <span><strong>Periksa checklist refleksi sebelum kirim.</strong> Unduh hasil naskah dalam format PDF resmi setelah selesai.</span>
          </li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-[#E63946] text-white font-semibold text-base shadow-sm hover:bg-[#cf2b38] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
        >
          <span>ISI IDENTITAS & PILIH KELOMPOK</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
