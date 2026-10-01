import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  IdCard, 
  BookOpen, 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  FileText,
  UserCheck
} from 'lucide-react';
import { MissionStep, StudentData } from '../types';

interface DeveloperProfileProps {
  studentData: StudentData;
  lastMissionStep: MissionStep;
  onNavigate: (step: MissionStep) => void;
}

export const DeveloperProfile: React.FC<DeveloperProfileProps> = ({
  studentData,
  lastMissionStep,
  onNavigate,
}) => {
  // Determine suitable resume step based on student progress
  const getResumeStep = (): { step: MissionStep; label: string } => {
    if (['read', 'find', 'arrange', 'write', 'complete'].includes(lastMissionStep)) {
      const labels: Record<string, string> = {
        read: 'Tahap 1: Membaca News Card',
        find: 'Tahap 2: Menemukan Fakta (FIND)',
        arrange: 'Tahap 3: Menyusun Struktur (ARRANGE)',
        write: 'Tahap 4: Menulis Berita (WRITE)',
        complete: 'Hasil Pengiriman Berita',
      };
      return { step: lastMissionStep, label: labels[lastMissionStep] || 'Misi Berita' };
    }

    if (studentData.newsText.trim().length > 0) {
      return { step: 'write', label: 'Tahap 4: Menulis Berita (WRITE)' };
    } else if (Object.values(studentData.newsStructure).some((v) => v.trim().length > 0)) {
      return { step: 'arrange', label: 'Tahap 3: Menyusun Struktur (ARRANGE)' };
    } else if (Object.values(studentData.fiveWOneH).some((v) => v.trim().length > 0)) {
      return { step: 'find', label: 'Tahap 2: Menemukan Fakta (FIND)' };
    } else if (studentData.readCards.length > 0 || studentData.name.trim().length > 0) {
      return { step: 'read', label: 'Tahap 1: Membaca News Card' };
    }
    return { step: 'brief', label: 'Misi Pembelajaran' };
  };

  const resumeInfo = getResumeStep();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fadeIn">
      {/* Top Breadcrumb / Return button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate(resumeInfo.step)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#E63946] transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-200/60"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Misi</span>
        </button>

        <span className="text-xs font-mono font-medium text-slate-400 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
          Profil & Informasi Akademik
        </span>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
        {/* Banner Header with Editorial Theme */}
        <div className="bg-[#132238] text-white px-6 sm:px-10 py-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#E63946]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute right-12 bottom-0 w-32 h-32 bg-[#F4B942]/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63946] text-white text-[11px] font-bold tracking-wider uppercase mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              PROFIL PENGEMBANG
            </span>
            <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              Media Pembelajaran News Card Mission
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Inovasi media pembelajaran digital interaktif berbasis scaffolding untuk materi Teks Berita jenjang SMA/SMK.
            </p>
          </div>
        </div>

        {/* Profile Card Body */}
        <div className="p-6 sm:p-10">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            {/* Avatar / Photo Representation */}
            <div className="relative mb-5">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#132238] via-[#1f375a] to-[#E63946] p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-[#132238] border-4 border-white flex flex-col items-center justify-center text-white overflow-hidden">
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-[#F4B942] mb-1" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
                    CRP
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#2E9B62] text-white p-1.5 rounded-full ring-4 ring-white shadow" title="Pengembang Terverifikasi">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Developer Identity Details */}
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#132238] tracking-tight mb-1">
              Chairul Roziqi Putra
            </h2>
            <p className="text-sm font-semibold text-[#E63946] mb-6">
              Pengembang Media Pembelajaran
            </p>

            {/* Academic Credential Badges & Details Grid */}
            <div className="w-full bg-[#F4F6F8] rounded-xl p-5 border border-slate-200/90 text-left space-y-3.5 mb-8 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#132238] shrink-0 mt-0.5 shadow-2xs">
                  <BookOpen className="w-4 h-4 text-[#E63946]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Program Studi
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#132238]">
                    Program Studi Bahasa Indonesia
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200/80 pt-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#132238] shrink-0 mt-0.5 shadow-2xs">
                  <IdCard className="w-4 h-4 text-[#F4B942]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Nomor Induk Mahasiswa (NIM)
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-[#132238] tracking-wide">
                    25248610008
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200/80 pt-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#132238] shrink-0 mt-0.5 shadow-2xs">
                  <Building2 className="w-4 h-4 text-[#2E9B62]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Lembaga Pendidikan Tenaga Kependidikan (LPTK)
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#132238]">
                    LPTK Universitas PGRI Yogyakarta
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Summary of Educational Intent */}
            <div className="w-full text-left bg-blue-50/60 rounded-xl p-5 border border-blue-100 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
                Tentang News Card Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Aplikasi ini dirancang sebagai media pembelajaran inovatif untuk memfasilitasi murid dalam merekonstruksi teks berita dari potongan-potongan informasi autentik. Pendekatan scaffolding 
                <strong className="text-slate-900 font-semibold"> READ → FIND → ARRANGE → WRITE → SUBMIT </strong> 
                serta penyediaan 6 kasus berbeda memungkinkan pembelajaran kolaboratif dan diferensiasi berbasis kelompok yang mandiri dan berdaya nalar kritis.
              </p>
            </div>

            {/* Key Framework Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8 text-left">
              <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Layers className="w-4 h-4 text-[#E63946]" />
                  <span className="text-xs font-bold text-slate-800">Scaffolding</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Pembimbingan terstruktur dari identifikasi unsur 5W+1H hingga penulisan utuh.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <FileText className="w-4 h-4 text-[#F4B942]" />
                  <span className="text-xs font-bold text-slate-800">6 Kasus Nyata</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  6 News Cases setara untuk 6 kelompok murid dalam kelas.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2E9B62]" />
                  <span className="text-xs font-bold text-slate-800">Mandiri & Autosave</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Penyimpanan draft otomatis di peramban dan unduh hasil dalam format PDF.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <button
                onClick={() => onNavigate(resumeInfo.step)}
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#E63946] hover:bg-[#c92f3b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lanjutkan Pengerjaan Misi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
