// 사용자
export interface User {
  id?: string;
  grade: number; // 8-12
  subject: string; // "physics"
  level: "basic" | "curriculum" | "university";
  knownConcepts: string[];
  interestTopics: string[];
}

// 개념/레슨
export interface Concept {
  id: string;
  subject: string;
  grade: number;
  level?: "basic" | "curriculum" | "advanced" | "expert" | "research";
  unit: string;
  title: string;
  summary: string;
  keywords: string[];
  misconceptions: string[];
  explanation?: {
    basic: string;
    curriculum: string;
    university?: string;
  };
  observationActivity?: {
    title: string;
    description: string;
    prediction: string;
    materials: string[];
    steps: string[];
    safetyWarning: string;
  };
  examples: string[];
  questions: string[]; // 문제 ID 배열
}

// 사용자가 직접 등록한 개념
export interface CustomConcept extends Concept {
  createdAt: string;
}

// 문제
export interface Question {
  id: string;
  type: "multiple_choice" | "short_answer" | "calculation";
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

// 풀이 시도
export interface Attempt {
  id?: string;
  questionId: string;
  userId?: string;
  submittedAnswer: string;
  isCorrect: boolean;
  submittedAt: Date;
  timeSpent: number; // 초 단위
}

// 복습 항목
export interface ReviewItem {
  id?: string;
  conceptId: string;
  userId?: string;
  lastAttemptDate: Date;
  nextReviewDate: Date;
  attemptCount: number;
  correctCount: number;
}

// 학습 세션
export interface LearningSession {
  id?: string;
  userId?: string;
  conceptId: string;
  startTime: Date;
  endTime?: Date;
  attempts: Attempt[];
  status: "in_progress" | "completed";
}

// 번역본
export interface Translation {
  contentId: string;
  language: "ko" | "en";
  title: string;
  description?: string;
  text?: string;
  isVerified: boolean;
}

// 용어
export interface Term {
  id: string;
  ko: string;
  en: string;
  definition: string;
  pronunciation?: string;
}
