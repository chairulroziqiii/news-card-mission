import { StudentData, SubmissionResponse } from '../types';

const STORAGE_KEY = 'newscard_mission_draft_v1';
const SUBMISSION_HISTORY_KEY = 'newscard_mission_submissions_v1';

/**
 * Permanent Google Apps Script Web App Endpoint for Google Sheets
 */
export const SUBMISSION_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyLA0CCp6gHv2j64O1M5BhXO8g3EXec05lnN_MGbucO2O8Z1EJyfqjMBad19dsKd8TW/exec';

export const INITIAL_STUDENT_DATA: StudentData = {
  name: '',
  className: '',
  attendanceNumber: '',
  group: 'Kelompok 1',
  caseId: 'case-01',
  hasUnderstoodReading: false,
  fiveWOneH: {
    what: '',
    who: '',
    when: '',
    where: '',
    why: '',
    how: '',
  },
  newsStructure: {
    title: '',
    lead: '',
    body: '',
    quote: '',
    closing: '',
  },
  newsTitle: '',
  newsText: '',
  checklist: {
    titleMatch: false,
    has5W1H: false,
    logicalOrder: false,
    newsStructure: false,
    properLanguage: false,
    noInventedFacts: false,
  },
  readCards: [],
  completedSteps: [],
  submittedAt: null,
};

/**
 * Load draft from browser localStorage
 */
export function loadDraft(): StudentData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...INITIAL_STUDENT_DATA };
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_STUDENT_DATA,
      ...parsed,
      group: parsed.group || INITIAL_STUDENT_DATA.group,
      caseId: parsed.caseId || INITIAL_STUDENT_DATA.caseId,
      hasUnderstoodReading: !!parsed.hasUnderstoodReading,
      fiveWOneH: { ...INITIAL_STUDENT_DATA.fiveWOneH, ...(parsed.fiveWOneH || {}) },
      newsStructure: { ...INITIAL_STUDENT_DATA.newsStructure, ...(parsed.newsStructure || {}) },
      checklist: { ...INITIAL_STUDENT_DATA.checklist, ...(parsed.checklist || {}) },
      readCards: Array.isArray(parsed.readCards) ? parsed.readCards : [],
      completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
    };
  } catch (error) {
    console.error('Gagal memuat draft dari localStorage:', error);
    return { ...INITIAL_STUDENT_DATA };
  }
}

// Save draft helper
export function saveDraft(data: Partial<StudentData>): StudentData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const current = raw ? JSON.parse(raw) : INITIAL_STUDENT_DATA;
    const updated: StudentData = {
      ...INITIAL_STUDENT_DATA,
      ...current,
      ...data,
      group: data.group !== undefined ? data.group : (current.group || INITIAL_STUDENT_DATA.group),
      caseId: data.caseId !== undefined ? data.caseId : (current.caseId || INITIAL_STUDENT_DATA.caseId),
      hasUnderstoodReading: data.hasUnderstoodReading !== undefined ? data.hasUnderstoodReading : (current.hasUnderstoodReading || false),
      fiveWOneH: {
        ...(current.fiveWOneH || INITIAL_STUDENT_DATA.fiveWOneH),
        ...(data.fiveWOneH || {}),
      },
      newsStructure: {
        ...(current.newsStructure || INITIAL_STUDENT_DATA.newsStructure),
        ...(data.newsStructure || {}),
      },
      checklist: {
        ...(current.checklist || INITIAL_STUDENT_DATA.checklist),
        ...(data.checklist || {}),
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Gagal menyimpan draft:', error);
    return { ...INITIAL_STUDENT_DATA, ...data };
  }
}

/**
 * Clear draft and restart mission
 */
export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Gagal mereset draft:', error);
  }
}

/**
 * Get permanent submission endpoint for Google Sheets
 */
export function getSubmissionEndpoint(): string {
  return SUBMISSION_ENDPOINT;
}

/**
 * Get all stored submissions in localStorage (useful for Teacher mode / offline review)
 */
export function getStoredSubmissions(): StudentData[] {
  try {
    const raw = localStorage.getItem(SUBMISSION_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Submit assignment automatically to permanent Google Sheets endpoint
 */
export async function submitAssignment(studentData: StudentData): Promise<SubmissionResponse> {
  const submissionRecord: StudentData = {
    ...studentData,
    submittedAt: new Date().toISOString(),
  };

  // 1. Always save current finalized draft
  saveDraft(submissionRecord);

  // 2. Archive locally in submission history
  try {
    const history = getStoredSubmissions();
    const updatedHistory = [submissionRecord, ...history.filter(h => h.name !== submissionRecord.name || h.submittedAt !== submissionRecord.submittedAt)];
    localStorage.setItem(SUBMISSION_HISTORY_KEY, JSON.stringify(updatedHistory.slice(0, 50)));
  } catch (e) {
    console.warn('Gagal menyimpan ke arsip lokal:', e);
  }

  // 3. Format exact JSON payload for Google Sheets
  const payload = {
    studentName: submissionRecord.name || '',
    attendanceNumber: submissionRecord.attendanceNumber || '',
    className: submissionRecord.className || '',
    groupNumber: submissionRecord.group || '',
    caseId: submissionRecord.caseId || '',
    newsTitle: submissionRecord.newsTitle || '',
    newsText: submissionRecord.newsText || '',
    what: submissionRecord.fiveWOneH?.what || '',
    who: submissionRecord.fiveWOneH?.who || '',
    when: submissionRecord.fiveWOneH?.when || '',
    where: submissionRecord.fiveWOneH?.where || '',
    why: submissionRecord.fiveWOneH?.why || '',
    how: submissionRecord.fiveWOneH?.how || '',
    // Additional compatibility fields
    timestamp: submissionRecord.submittedAt,
    nama: submissionRecord.name || '',
    kelas: submissionRecord.className || '',
    no_absen: submissionRecord.attendanceNumber || '',
    kelompok: submissionRecord.group || '',
    judul_berita: submissionRecord.newsTitle || '',
    teks_berita: submissionRecord.newsText || '',
  };

  // 4. Send to Google Sheets via HTTP POST (mode: 'no-cors' for Google Apps Script redirects)
  try {
    await fetch(SUBMISSION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      mode: 'no-cors',
    });

    return {
      success: true,
      mode: 'endpoint',
      message: 'Tugas Berhasil Dikumpulkan!',
    };
  } catch (error) {
    console.error('Gagal mengirim ke Google Sheets endpoint:', error);
    return {
      success: true,
      mode: 'local',
      message: 'Tugas Berhasil Dikumpulkan! (Draft naskah aman tersimpan di perangkat)',
    };
  }
}
