import React from 'react';
import { ArrowRight, ArrowLeft, User, Users, BookOpen, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { StudentData } from '../types';
import { NEWS_CASES, getCaseByGroup } from '../data/newsCases';

interface StudentIdentitySectionProps {
  data: StudentData;
  onUpdate: (partial: Partial<StudentData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StudentIdentitySection: React.FC<StudentIdentitySectionProps> = ({
  data,
  onUpdate,
  onNext,
  onBack,
}) => {
  const selectedCase = getCaseByGroup(data.group || 'Kelompok 1');

  const handleGroupChange = (groupName: string) => {
    const matched = getCaseByGroup(groupName);
    onUpdate({
      group: groupName,
      caseId: matched.id,
      // If group changed, clear readCards to read new case
      readCards: [],
      hasUnderstoodReading: false,
    });
  };

  const isFormValid =
    data.name.trim().length >= 2 &&
    data.attendanceNumber.trim().length >= 1 &&
    data.className.trim().length >= 2;

  const groupOptions = [
    { name: 'Kelompok 1', caseNum: 'Case 01', topic: 'Festival Kuliner Nusantara' },
    { name: 'Kelompok 2', caseNum: 'Case 02', topic: 'Prototipe Mobil Listrik' },
    { name: 'Kelompok 3', caseNum: 'Case 03', topic: 'Pameran Desain Komunikasi Visual' },
    { name: 'Kelompok 4', caseNum: 'Case 04', topic: 'Penanaman 1.000 Pohon Mangrove' },
    { name: 'Kelompok 5', caseNum: 'Case 05', topic: 'Simulasi Evakuasi Gempa & Kebakaran' },
    { name: 'Kelompok 6', caseNum: 'Case 06', topic: 'Laboratorium Cloud AI & Bootcamp' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-6 text-center sm:text-left space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E63946]/10 text-[#E63946] text-xs font-bold font-mono tracking-wider uppercase mb-1">
          <User className="w-3.5 h-3.5" />
          <span>REGISTRASI JURNALIS</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#132238]">
          Identitas Reporter
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Lengkapi identitas dirimu dan pilih kelompok belajarmu untuk mendapatkan berkas <strong>News Case</strong> secara otomatis.
        </p>
      </div>

      {/* Main Identity Form Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nama */}
          <div className="sm:col-span-2">
            <label htmlFor="student-name" className="block text-xs font-bold text-[#132238] uppercase font-mono mb-1.5">
              Nama Lengkap Murid *
            </label>
            <input
              id="student-name"
              type="text"
              value={data.name}
              onChange={(e) => onUpdate({ name: e.target.value })}
              placeholder="Masukkan nama lengkap kamu..."
              className="w-full px-4 py-3 text-sm text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors"
            />
          </div>

          {/* Nomor Presensi */}
          <div>
            <label htmlFor="student-absen" className="block text-xs font-bold text-[#132238] uppercase font-mono mb-1.5">
              Nomor Presensi *
            </label>
            <input
              id="student-absen"
              type="number"
              min="1"
              max="60"
              value={data.attendanceNumber}
              onChange={(e) => onUpdate({ attendanceNumber: e.target.value })}
              placeholder="Contoh: 14"
              className="w-full px-4 py-3 text-sm text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors"
            />
          </div>

          {/* Kelas */}
          <div>
            <label htmlFor="student-class" className="block text-xs font-bold text-[#132238] uppercase font-mono mb-1.5">
              Kelas *
            </label>
            <input
              id="student-class"
              type="text"
              value={data.className}
              onChange={(e) => onUpdate({ className: e.target.value })}
              placeholder="Contoh: XI Kuliner 2 / XI DKV 1"
              className="w-full px-4 py-3 text-sm text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors"
            />
          </div>

          {/* Kelompok Dropdown */}
          <div className="sm:col-span-2">
            <label htmlFor="student-group" className="block text-xs font-bold text-[#132238] uppercase font-mono mb-1.5">
              Pilih Kelompok Pembelajaran *
            </label>
            <select
              id="student-group"
              value={data.group || 'Kelompok 1'}
              onChange={(e) => handleGroupChange(e.target.value)}
              className="w-full px-4 py-3 text-sm font-semibold text-[#132238] bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132238] transition-colors cursor-pointer"
            >
              {groupOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.name} — Penugasan {opt.caseNum} ({opt.topic})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Automatic Case Assignment Banner */}
        <div className="mt-6 pt-5 border-t border-slate-100 bg-[#FAF8F5] p-4 sm:p-5 rounded-lg border border-[#F4B942]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[#132238] text-white">
                Kelompokmu: {data.group || 'Kelompok 1'}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[#E63946] text-white">
                News Case: {selectedCase.caseNumber}
              </span>
            </div>
            <h3 className="font-editorial text-base sm:text-lg font-bold text-[#132238]">
              {selectedCase.topicTitle}
            </h3>
            <p className="text-xs text-slate-600">
              {selectedCase.overview}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 text-xs text-[#2E9B62] font-semibold bg-white px-3 py-1.5 rounded border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#2E9B62]" />
            <span>Case Terpasang Otomatis</span>
          </div>
        </div>

        {/* Important Rule Notice */}
        <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#132238] shrink-0 mt-0.5" />
          <span>
            <strong>Catatan Redaksi:</strong> Berkas News Card akan disesuaikan dengan topik kelompokmu. Namun pada tahap penulisan akhir nanti, seluruh naskah berita harus ditulis secara <strong>mandiri (individu)</strong>.
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Mission Brief</span>
        </button>

        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg font-semibold text-base shadow-sm transition-all cursor-pointer ${
            isFormValid
              ? 'bg-[#E63946] text-white hover:bg-[#cf2b38]'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>BUKA NEWS CARD KASUSMU</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
