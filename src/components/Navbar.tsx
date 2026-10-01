import React, { useState } from 'react';
import { Newspaper, BookOpen, HelpCircle, Settings, CheckCircle2, User, Menu, X, ChevronRight } from 'lucide-react';
import { MissionStep } from '../types';

interface NavbarProps {
  currentStep: MissionStep;
  completedSteps: string[];
  onNavigate: (step: MissionStep) => void;
  onOpenHelp: () => void;
  onOpenTeacherSettings: () => void;
  saveStatus?: string;
  isSavedRecently?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  completedSteps,
  onNavigate,
  onOpenHelp,
  onOpenTeacherSettings,
  saveStatus = 'Tersimpan di browser',
  isSavedRecently = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stepsList: { id: MissionStep; label: string; number: string }[] = [
    { id: 'read', label: 'READ', number: '1' },
    { id: 'find', label: 'FIND', number: '2' },
    { id: 'arrange', label: 'ARRANGE', number: '3' },
    { id: 'write', label: 'WRITE', number: '4' },
  ];

  const getStepStatus = (stepId: MissionStep) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (currentStep === stepId) return 'current';
    return 'upcoming';
  };

  const isMainMissionActive = ['read', 'find', 'arrange', 'write'].includes(currentStep);

  const handleMobileNav = (step: MissionStep) => {
    setIsMobileMenuOpen(false);
    onNavigate(step);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#132238] text-white border-b border-[#1f3555] shadow-md">
      {/* Primary Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Mark */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] rounded-md py-1 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#E63946] flex items-center justify-center text-white shadow-sm shrink-0">
              <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-editorial text-base sm:text-xl font-bold tracking-tight text-white block leading-tight">
                NEWS CARD MISSION
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 hidden sm:block tracking-wide">
                Ruang Redaksi Digital Bahasa Indonesia
              </span>
            </div>
          </button>

          {/* Center: Mission Progress Bar (Desktop & Tablet) */}
          {isMainMissionActive && (
            <div className="hidden lg:flex items-center gap-2 lg:gap-3 text-xs">
              <span className="text-slate-400 font-medium mr-1 text-[11px]">TAHAPAN:</span>
              {stepsList.map((step, idx) => {
                const status = getStepStatus(step.id);
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => {
                        if (status === 'completed' || status === 'current') {
                          onNavigate(step.id);
                        }
                      }}
                      disabled={status === 'upcoming'}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all text-xs font-semibold ${
                        status === 'current'
                          ? 'bg-[#E63946] text-white shadow-sm ring-1 ring-[#ff7b86]'
                          : status === 'completed'
                          ? 'bg-[#1b2f4a] text-[#48c78e] hover:bg-[#233d60] cursor-pointer'
                          : 'text-slate-400 bg-transparent cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-80">{step.number}.</span>
                      <span>{step.label}</span>
                      {status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 ml-0.5 text-[#48c78e]" />}
                    </button>
                    {idx < stepsList.length - 1 && (
                      <span className="text-slate-600 text-xs font-mono">→</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Right Zone: Actions & Navigation Links */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Autosave subtle indicator */}
            <div
              className={`hidden xl:flex items-center gap-1.5 text-xs transition-opacity duration-300 mr-1 ${
                isSavedRecently ? 'text-[#48c78e] font-medium' : 'text-slate-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#48c78e] animate-pulse"></span>
              <span className="truncate max-w-[130px] text-[11px]">{saveStatus}</span>
            </div>

            {/* Desktop Menu Links: Beranda | Misi | Profil Pengembang */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => onNavigate('home')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentStep === 'home'
                    ? 'text-white bg-[#1c304d]'
                    : 'text-slate-300 hover:text-white hover:bg-[#1a2c47]'
                }`}
              >
                Beranda
              </button>

              <button
                onClick={() => onNavigate('brief')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  ['brief', 'identity', 'read', 'find', 'arrange', 'write', 'complete'].includes(currentStep)
                    ? 'text-white bg-[#1c304d]'
                    : 'text-slate-300 hover:text-white hover:bg-[#1a2c47]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F4B942]" />
                <span>Misi</span>
              </button>

              <button
                onClick={() => onNavigate('developer')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  currentStep === 'developer'
                    ? 'text-[#F4B942] bg-[#1c304d] ring-1 ring-[#F4B942]/30'
                    : 'text-slate-300 hover:text-white hover:bg-[#1a2c47]'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#E63946]" />
                <span>Profil Pengembang</span>
              </button>
            </div>

            {/* Utilities: Help & Teacher Settings */}
            <div className="flex items-center gap-1 ml-1 border-l border-slate-700/60 pl-2">
              <button
                onClick={onOpenHelp}
                className="p-2 text-slate-300 hover:text-white hover:bg-[#1a2c47] rounded-lg transition-colors cursor-pointer"
                title="Panduan & Bantuan 5W+1H"
                aria-label="Bantuan"
              >
                <HelpCircle className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={onOpenTeacherSettings}
                className="p-2 text-slate-400 hover:text-white hover:bg-[#1a2c47] rounded-lg transition-colors cursor-pointer"
                title="Pengaturan Integrasi Guru (Google Sheets)"
                aria-label="Pengaturan Guru"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-[#1a2c47] rounded-lg transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu when Hamburger is Opened */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 px-2 border-t border-[#1b2f4a] bg-[#132238] space-y-1 animate-fadeIn">
            <button
              onClick={() => handleMobileNav('home')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentStep === 'home'
                  ? 'bg-[#1c304d] text-white'
                  : 'text-slate-300 hover:bg-[#1a2c47] hover:text-white'
              }`}
            >
              <span>Beranda</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleMobileNav('brief')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                ['brief', 'identity', 'read', 'find', 'arrange', 'write', 'complete'].includes(currentStep)
                  ? 'bg-[#1c304d] text-white'
                  : 'text-slate-300 hover:bg-[#1a2c47] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#F4B942]" />
                <span>Misi Pembelajaran</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleMobileNav('developer')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentStep === 'developer'
                  ? 'bg-[#1c304d] text-[#F4B942]'
                  : 'text-slate-300 hover:bg-[#1a2c47] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#E63946]" />
                <span>Profil Pengembang</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between px-2 text-xs text-slate-400">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenHelp();
                }}
                className="flex items-center gap-1.5 py-1.5 hover:text-white"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Panduan 5W+1H</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTeacherSettings();
                }}
                className="flex items-center gap-1.5 py-1.5 hover:text-white"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Google Sheets</span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Mission Progress Strip */}
        {isMainMissionActive && (
          <div className="lg:hidden py-2.5 border-t border-[#1b2f4a] flex items-center justify-between text-[11px] overflow-x-auto">
            <span className="text-slate-400 font-medium shrink-0 mr-2 text-[10px]">Tahap:</span>
            <div className="flex items-center gap-1.5 w-full justify-between">
              {stepsList.map((step, idx) => {
                const status = getStepStatus(step.id);
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => {
                        if (status === 'completed' || status === 'current') {
                          onNavigate(step.id);
                        }
                      }}
                      disabled={status === 'upcoming'}
                      className={`px-2 py-1 rounded text-center whitespace-nowrap font-medium text-[11px] ${
                        status === 'current'
                          ? 'bg-[#E63946] text-white font-bold'
                          : status === 'completed'
                          ? 'bg-[#1b2f4a] text-[#48c78e]'
                          : 'text-slate-400 opacity-60'
                      }`}
                    >
                      {step.number}. {step.label}
                    </button>
                    {idx < stepsList.length - 1 && <span className="text-slate-600">→</span>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
