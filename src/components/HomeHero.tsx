import React from 'react';
import { ArrowRight, Newspaper, CheckCircle2, RotateCcw, Award, Sparkles, BookOpen } from 'lucide-react';
import heroImage from '../assets/images/newsroom_hero_editorial_1790733824502.jpg';

interface HomeHeroProps {
  onStartMission: () => void;
  onContinueMission?: () => void;
  hasExistingDraft: boolean;
  onResetDraft?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onStartMission,
  onContinueMission,
  hasExistingDraft,
  onResetDraft,
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & Action */}
            <div className="lg:col-span-7 space-y-6">
              {/* Editorial Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#132238]/5 border border-[#132238]/10 text-xs font-semibold text-[#132238] tracking-wide">
                <Newspaper className="w-3.5 h-3.5 text-[#E63946]" />
                <span>SIMULASI REDAKSI JURNALISTIK SMA / SMK</span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold tracking-widest text-[#E63946] uppercase font-mono">
                  NEWS CARD MISSION
                </h2>
                <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#132238] leading-[1.15]">
                  Dari Potongan Informasi <br className="hidden sm:inline" />
                  Menjadi Berita
                </h1>
              </div>

              {/* Subheadline & Narrative */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-[#E63946] pl-4 bg-white/50 p-3 rounded-r-md">
                <p className="italic font-medium text-slate-800">
                  “Redaksi menerima sejumlah informasi tentang sebuah peristiwa. Namun, informasi tersebut masih berupa potongan-potongan yang belum tersusun.”
                </p>
                <p className="text-base text-slate-600 not-italic font-normal">
                  Bisakah kamu mengubahnya menjadi sebuah berita yang utuh, akurat, dan sesuai dengan struktur berita?
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  onClick={onStartMission}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[#E63946] text-white font-semibold text-base shadow-sm hover:bg-[#cf2b38] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946] cursor-pointer"
                >
                  <span>MULAI MISSION</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {hasExistingDraft && onContinueMission && (
                  <button
                    onClick={onContinueMission}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#132238] text-white font-medium text-sm hover:bg-[#1f3555] transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#F4B942]" />
                    <span>Lanjutkan Draft Tersimpan</span>
                  </button>
                )}

                {hasExistingDraft && onResetDraft && (
                  <button
                    onClick={() => {
                      if (window.confirm('Mulai misi dari awal? Draft sebelumnya akan direset.')) {
                        onResetDraft();
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-slate-500 hover:text-[#E63946] transition-colors"
                    title="Mulai Ulang dari Awal"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Draft</span>
                  </button>
                )}
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
                  <span>Unsur 5W + 1H</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
                  <span>Piramida Terbalik</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9B62] shrink-0" />
                  <span>Autosave Otomatis</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <div className="aspect-16/10 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={heroImage}
                    alt="Meja Kerja Redaksi Berita Modern"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono tracking-wider text-[#F4B942] uppercase block">
                      Ruang Kerja Redaksi
                    </span>
                    <p className="font-editorial text-sm sm:text-base font-semibold leading-tight">
                      Meja Peliputan & Penulisan Berita
                    </p>
                  </div>
                </div>

                {/* Editor Desk Quote Card */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#132238] text-white flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-[#F4B942]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#132238] uppercase tracking-wider">
                      Pedoman Redaksi
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fakta adalah pondasi berita. Tulis secara objektif tanpa menambahkan asumsi di luar sumber.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Process Showcase Section */}
      <section className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E63946]">
              Alur Kerja Jurnalis
            </h2>
            <h3 className="font-editorial text-2xl font-bold text-[#132238] mt-1">
              5 Langkah Menyusun Berita
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'READ',
                desc: 'Membaca 6 potongan kartu informasi peristiwa secara menyeluruh.',
                color: 'border-l-4 border-l-[#132238]',
              },
              {
                step: '02',
                title: 'FIND',
                desc: 'Mengidentifikasi unsur 5W+1H yang terkandung dalam kartu.',
                color: 'border-l-4 border-l-[#E63946]',
              },
              {
                step: '03',
                title: 'ARRANGE',
                desc: 'Mengorganisasi informasi ke dalam struktur piramida berita.',
                color: 'border-l-4 border-l-[#F4B942]',
              },
              {
                step: '04',
                title: 'WRITE',
                desc: 'Menulis teks berita lengkap dan utuh dengan bahasa baku.',
                color: 'border-l-4 border-l-[#2E9B62]',
              },
              {
                step: '05',
                title: 'SUBMIT',
                desc: 'Mengirimkan hasil karya ke meja redaksi guru untuk dinilai.',
                color: 'border-l-4 border-l-[#132238]',
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`bg-[#F4F6F8] p-4 rounded-lg border border-slate-200 ${item.color} shadow-2xs hover:shadow-xs transition-shadow`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-600">{item.step}</span>
                  <span className="text-xs font-bold tracking-wider text-[#132238]">{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
