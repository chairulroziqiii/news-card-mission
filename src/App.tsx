/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MissionStep, StudentData } from './types';
import {
  loadDraft,
  saveDraft,
  clearDraft,
  submitAssignment,
  INITIAL_STUDENT_DATA,
} from './services/storageService';
import { getCaseById } from './data/newsCases';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { MissionBrief } from './components/MissionBrief';
import { StudentIdentitySection } from './components/StudentIdentitySection';
import { NewsCardsSection } from './components/NewsCardsSection';
import { Mission01FindFacts } from './components/Mission01FindFacts';
import { Mission02BuildNews } from './components/Mission02BuildNews';
import { MissionFinalWriteNews } from './components/MissionFinalWriteNews';
import { SubmitConfirmModal } from './components/SubmitConfirmModal';
import { MissionComplete } from './components/MissionComplete';
import { HelpModal } from './components/HelpModal';
import { TeacherSettingsModal } from './components/TeacherSettingsModal';
import { ReferenceDrawer } from './components/ReferenceDrawer';
import { DeveloperProfile } from './components/DeveloperProfile';

export default function App() {
  const [currentStep, setCurrentStep] = useState<MissionStep>('home');
  const [lastMissionStep, setLastMissionStep] = useState<MissionStep>('brief');
  const [studentData, setStudentData] = useState<StudentData>(() => loadDraft());
  const [saveStatus, setSaveStatus] = useState<string>('Tersimpan di browser');
  const [isSavedRecently, setIsSavedRecently] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionMessage, setSubmissionMessage] = useState<string>('');
  
  // Modals & Panels
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isTeacherSettingsOpen, setIsTeacherSettingsOpen] = useState<boolean>(false);
  const [isReferenceDrawerOpen, setIsReferenceDrawerOpen] = useState<boolean>(false);

  const isInitialMount = useRef(true);

  // Active News Case dynamically resolved from student group assignment
  const currentCase = getCaseById(studentData.caseId || 'case-01');

  // Autosave to localStorage on studentData change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveDraft(studentData);
    setSaveStatus('✓ Draft tersimpan');
    setIsSavedRecently(true);
    const timer = setTimeout(() => {
      setIsSavedRecently(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [studentData]);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleNavigate = (step: MissionStep) => {
    if (step === 'brief') {
      if (['brief', 'identity', 'read', 'find', 'arrange', 'write', 'complete'].includes(currentStep)) {
        // Already inside mission flow
        return;
      }
      if (['identity', 'read', 'find', 'arrange', 'write', 'complete'].includes(lastMissionStep)) {
        setCurrentStep(lastMissionStep);
        return;
      }
      handleContinueDraft();
      return;
    }

    if (currentStep !== 'developer') {
      setLastMissionStep(currentStep);
    }
    setCurrentStep(step);
  };

  const handleUpdateStudentData = useCallback((partial: Partial<StudentData>) => {
    setStudentData((prev) => ({
      ...prev,
      ...partial,
      fiveWOneH: partial.fiveWOneH ? { ...prev.fiveWOneH, ...partial.fiveWOneH } : prev.fiveWOneH,
      newsStructure: partial.newsStructure ? { ...prev.newsStructure, ...partial.newsStructure } : prev.newsStructure,
      checklist: partial.checklist ? { ...prev.checklist, ...partial.checklist } : prev.checklist,
    }));
  }, []);

  const handleMarkCardRead = useCallback((cardId: string) => {
    setStudentData((prev) => {
      if (prev.readCards.includes(cardId)) return prev;
      return {
        ...prev,
        readCards: [...prev.readCards, cardId],
      };
    });
  }, []);

  const handleCompleteStep = (completedStepId: MissionStep, nextStep: MissionStep) => {
    setStudentData((prev) => {
      const completedSteps = prev.completedSteps.includes(completedStepId)
        ? prev.completedSteps
        : [...prev.completedSteps, completedStepId];
      return {
        ...prev,
        completedSteps,
      };
    });
    setCurrentStep(nextStep);
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitAssignment(studentData);
      setSubmissionMessage(result.message);
      
      // Update completed steps
      setStudentData((prev) => {
        const completed = Array.from(new Set([...prev.completedSteps, 'read', 'find', 'arrange', 'write', 'complete']));
        return { ...prev, completedSteps: completed, submittedAt: new Date().toISOString() };
      });

      setIsConfirmModalOpen(false);
      setCurrentStep('complete');
    } catch (error) {
      console.error('Error saat submit berita:', error);
      alert('Terjadi kendala saat mengirim. Draftmu tetap aman tersimpan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRestartMission = () => {
    if (window.confirm('Mulai misi penulisan baru? Data draft saat ini akan direset.')) {
      clearDraft();
      setStudentData({ ...INITIAL_STUDENT_DATA });
      setSaveStatus('Tersimpan di browser');
      setCurrentStep('home');
    }
  };

  const hasExistingDraft =
    studentData.name.trim().length > 0 ||
    studentData.readCards.length > 0 ||
    studentData.newsTitle.trim().length > 0 ||
    studentData.newsText.trim().length > 0 ||
    Object.values(studentData.fiveWOneH).some((v) => v.trim().length > 0);

  const handleContinueDraft = () => {
    if (studentData.newsText.trim().length > 0) {
      setCurrentStep('write');
    } else if (Object.values(studentData.newsStructure).some((v) => v.trim().length > 0)) {
      setCurrentStep('arrange');
    } else if (Object.values(studentData.fiveWOneH).some((v) => v.trim().length > 0)) {
      setCurrentStep('find');
    } else if (studentData.readCards.length > 0) {
      setCurrentStep('read');
    } else if (studentData.name.trim().length > 0) {
      setCurrentStep('read');
    } else {
      setCurrentStep('identity');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] text-[#132238] font-body selection:bg-[#E63946] selection:text-white">
      {/* Universal Top Navigation */}
      <Navbar
        currentStep={currentStep}
        completedSteps={studentData.completedSteps}
        onNavigate={handleNavigate}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenTeacherSettings={() => setIsTeacherSettingsOpen(true)}
        saveStatus={saveStatus}
        isSavedRecently={isSavedRecently}
      />

      {/* Main Mission View Routing */}
      <main className="flex-1 pb-16">
        {currentStep === 'home' && (
          <HomeHero
            onStartMission={() => setCurrentStep('brief')}
            onContinueMission={handleContinueDraft}
            hasExistingDraft={hasExistingDraft}
            onResetDraft={handleRestartMission}
          />
        )}

        {currentStep === 'brief' && (
          <MissionBrief
            onNext={() => setCurrentStep('identity')}
            onBack={() => setCurrentStep('home')}
          />
        )}

        {currentStep === 'identity' && (
          <StudentIdentitySection
            data={studentData}
            onUpdate={handleUpdateStudentData}
            onNext={() => handleCompleteStep('identity', 'read')}
            onBack={() => setCurrentStep('brief')}
          />
        )}

        {currentStep === 'read' && (
          <NewsCardsSection
            currentCase={currentCase}
            readCards={studentData.readCards}
            hasUnderstoodReading={studentData.hasUnderstoodReading}
            onMarkCardRead={handleMarkCardRead}
            onToggleUnderstood={(val) => handleUpdateStudentData({ hasUnderstoodReading: val })}
            onNext={() => handleCompleteStep('read', 'find')}
            onBack={() => setCurrentStep('identity')}
          />
        )}

        {currentStep === 'find' && (
          <Mission01FindFacts
            currentCase={currentCase}
            initialValues={studentData.fiveWOneH}
            onSave={(updated) => handleUpdateStudentData({ fiveWOneH: updated })}
            onNext={() => handleCompleteStep('find', 'arrange')}
            onBack={() => setCurrentStep('read')}
            onOpenReference={() => setIsReferenceDrawerOpen(true)}
          />
        )}

        {currentStep === 'arrange' && (
          <Mission02BuildNews
            currentCase={currentCase}
            initialValues={studentData.newsStructure}
            fiveWOneH={studentData.fiveWOneH}
            onSave={(updated) => handleUpdateStudentData({ newsStructure: updated })}
            onNext={() => handleCompleteStep('arrange', 'write')}
            onBack={() => setCurrentStep('find')}
            onOpenReference={() => setIsReferenceDrawerOpen(true)}
          />
        )}

        {currentStep === 'write' && (
          <MissionFinalWriteNews
            data={studentData}
            currentCase={currentCase}
            onUpdateData={handleUpdateStudentData}
            onSubmitPrompt={() => setIsConfirmModalOpen(true)}
            onBack={() => setCurrentStep('arrange')}
          />
        )}

        {currentStep === 'complete' && (
          <MissionComplete
            data={studentData}
            submissionMessage={submissionMessage}
            onGoHome={() => setCurrentStep('home')}
            onRestartMission={handleRestartMission}
          />
        )}

        {currentStep === 'developer' && (
          <DeveloperProfile
            studentData={studentData}
            lastMissionStep={lastMissionStep}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#132238] text-white border-t border-[#1b2f4a] py-6 text-xs print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div>
            <span className="font-editorial font-bold text-white tracking-wide">
              NEWS CARD MISSION
            </span>
            <span className="mx-2">·</span>
            <span>Media Pembelajaran Bahasa Indonesia SMA/SMK</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
            <button
              onClick={() => handleNavigate('developer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Profil Pengembang
            </button>
            <span>·</span>
            <button
              onClick={() => setIsHelpOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Panduan 5W+1H
            </button>
            <span>·</span>
            <button
              onClick={() => setIsTeacherSettingsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Integrasi Google Sheets
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Slide-over Drawer */}
      <SubmitConfirmModal
        isOpen={isConfirmModalOpen}
        data={studentData}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setIsConfirmModalOpen(false)}
        isSubmitting={isSubmitting}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <TeacherSettingsModal
        isOpen={isTeacherSettingsOpen}
        onClose={() => setIsTeacherSettingsOpen(false)}
      />

      <ReferenceDrawer
        isOpen={isReferenceDrawerOpen}
        onClose={() => setIsReferenceDrawerOpen(false)}
        currentCase={currentCase}
      />
    </div>
  );
}
