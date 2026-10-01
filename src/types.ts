export type MissionStep = 
  | 'home'
  | 'brief'
  | 'identity'
  | 'read'
  | 'find'
  | 'arrange'
  | 'write'
  | 'complete'
  | 'developer';

export interface FiveWOneH {
  what: string;
  who: string;
  when: string;
  where: string;
  why: string;
  how: string;
}

export interface NewsStructure {
  title: string;
  lead: string;
  body: string;
  quote: string;
  closing: string;
}

export interface StudentData {
  name: string;
  className: string;
  attendanceNumber: string;
  group: string; // e.g. "Kelompok 1", "Kelompok 2", etc.
  caseId: string; // e.g. "case-01", "case-02", etc.
  hasUnderstoodReading: boolean;
  fiveWOneH: FiveWOneH;
  newsStructure: NewsStructure;
  newsTitle: string;
  newsText: string;
  checklist: {
    titleMatch: boolean;
    has5W1H: boolean;
    logicalOrder: boolean;
    newsStructure: boolean;
    properLanguage: boolean;
    noInventedFacts: boolean;
  };
  readCards: string[];
  completedSteps: string[];
  submittedAt: string | null;
}

export interface NewsCardItem {
  id: string;
  number: string;
  label: string; // Neutral label like "KARTU INFORMASI 01" (NOT WHAT/WHO labels!)
  sublabel: string; // Neutral subtext e.g. "Catatan Lapangan #1"
  content: string;
  authorNote?: string;
  keywords: string[];
}

export interface CaseValidationRules {
  what: { requiredKeywords: string[]; hint: string };
  who: { requiredKeywords: string[]; hint: string };
  when: { requiredKeywords: string[]; hint: string };
  where: { requiredKeywords: string[]; hint: string };
  why: { requiredKeywords: string[]; hint: string };
  how: { requiredKeywords: string[]; hint: string };
}

export interface NewsCase {
  id: string;
  caseNumber: string;
  groupNumber: number;
  groupName: string;
  topicTitle: string;
  category: string;
  overview: string;
  cards: NewsCardItem[];
  validation: CaseValidationRules;
}

export interface SubmissionResponse {
  success: boolean;
  mode: 'local' | 'endpoint';
  message: string;
}
