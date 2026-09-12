import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface StudentProgress {
  conceptId: string
  completedAt: string
  score: number // 0-100
  timeSpent: number // seconds
  attemptCount: number
}

export interface LearningSession {
  id: string
  conceptId: string
  startTime: string
  endTime?: string
  answers: Record<string, string>
  score?: number
}

export interface MistakeEntry {
  id: string
  conceptId: string
  questionId: string
  userAnswer: string
  correctAnswer: string
  explanation: string
  mistakeDate: string
  reviewCount: number
  lastReviewDate?: string
  isResolved: boolean
}

// 사용자가 추가한 레슨 트랙(클래스). 홈 화면에 카드로 표시되고
// 진도 트리(아래→위)의 노드는 lessonIds 순서를 따른다.
export interface LessonClass {
  id: string
  subject: string
  subjectLabel: string
  level: string
  levelLabel: string
  title: string
  lessonIds: string[]
  createdAt: string
}

interface LearningStore {
  // 학생 진도
  progress: StudentProgress[]
  sessions: LearningSession[]
  mistakes: MistakeEntry[]
  classes: LessonClass[]

  // 기본 설정
  userPreferences: {
    grade: number
    level: 'basic' | 'curriculum' | 'university'
    darkMode: boolean
  }

  // 액션
  addProgress: (p: StudentProgress) => void
  updateProgress: (conceptId: string, score: number, timeSpent: number) => void
  startSession: (conceptId: string) => LearningSession
  endSession: (sessionId: string, answers: Record<string, string>, score: number) => void
  addMistake: (mistake: MistakeEntry) => void
  updateMistake: (id: string, reviewed: boolean) => void
  getConceptProgress: (conceptId: string) => StudentProgress | undefined
  getStudyStreak: () => number
  getTotalStudyTime: () => number
  getMistakesByDate: (days: number) => MistakeEntry[]
  setUserPreference: (key: string, value: any) => void
  getAverageScore: (conceptIds?: string[]) => number
  resetProgress: () => void
  addClass: (c: LessonClass) => void
  removeClass: (id: string) => void
  getClassProgress: (classId: string) => number
}

export const useLearningStore = create<LearningStore>()(
  persist(
    (set, get) => ({
      progress: [],
      sessions: [],
      mistakes: [],
      classes: [],
      userPreferences: {
        grade: 8,
        level: 'curriculum',
        darkMode: false,
      },

      addProgress: (p) =>
        set((state) => ({
          progress: [...state.progress, p],
        })),

      updateProgress: (conceptId, score, timeSpent) =>
        set((state) => {
          const existing = state.progress.find((p) => p.conceptId === conceptId)
          if (existing) {
            return {
              progress: state.progress.map((p) =>
                p.conceptId === conceptId
                  ? { ...p, score, timeSpent: p.timeSpent + timeSpent, attemptCount: p.attemptCount + 1 }
                  : p
              ),
            }
          }
          return {
            progress: [
              ...state.progress,
              {
                conceptId,
                score,
                timeSpent,
                attemptCount: 1,
                completedAt: new Date().toISOString(),
              },
            ],
          }
        }),

      startSession: (conceptId) => {
        const session: LearningSession = {
          id: `session-${Date.now()}`,
          conceptId,
          startTime: new Date().toISOString(),
          answers: {},
        }
        set((state) => ({ sessions: [...state.sessions, session] }))
        return session
      },

      endSession: (sessionId, answers, score) =>
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === sessionId ? { ...s, endTime: new Date().toISOString(), answers, score } : s
          ),
        })),

      addMistake: (mistake) =>
        set((state) => ({
          mistakes: [...state.mistakes, mistake],
        })),

      updateMistake: (id, reviewed) =>
        set((state) => ({
          mistakes: state.mistakes.map((m) =>
            m.id === id ? { ...m, isResolved: reviewed, lastReviewDate: new Date().toISOString(), reviewCount: m.reviewCount + 1 } : m
          ),
        })),

      getConceptProgress: (conceptId) => {
        return get().progress.find((p) => p.conceptId === conceptId)
      },

      getStudyStreak: () => {
        const sessions = get().sessions
        if (sessions.length === 0) return 0

        const dates = sessions
          .map((s) => new Date(s.startTime).toDateString())
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort()

        let streak = 1
        for (let i = dates.length - 1; i > 0; i--) {
          const current = new Date(dates[i])
          const prev = new Date(dates[i - 1])
          const diff = (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
          if (diff === 1) {
            streak++
          } else {
            break
          }
        }
        return streak
      },

      getTotalStudyTime: () => {
        return get()
          .sessions.reduce((total, s) => {
            if (s.endTime) {
              const start = new Date(s.startTime).getTime()
              const end = new Date(s.endTime).getTime()
              return total + (end - start) / 1000 // seconds
            }
            return total
          }, 0)
      },

      getMistakesByDate: (days) => {
        const now = new Date()
        const past = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
        return get().mistakes.filter((m) => new Date(m.mistakeDate) >= past)
      },

      setUserPreference: (key, value) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, [key]: value },
        })),

      getAverageScore: (conceptIds) => {
        const progress = get().progress
        const filtered = conceptIds ? progress.filter((p) => conceptIds.includes(p.conceptId)) : progress
        if (filtered.length === 0) return 0
        return filtered.reduce((sum, p) => sum + p.score, 0) / filtered.length
      },

      resetProgress: () =>
        set(() => ({
          progress: [],
          sessions: [],
          mistakes: [],
        })),

      addClass: (c) =>
        set((state) => ({
          classes: [...state.classes, c],
        })),

      removeClass: (id) =>
        set((state) => ({
          classes: state.classes.filter((c) => c.id !== id),
        })),

      getClassProgress: (classId) => {
        const state = get()
        const cls = state.classes.find((c) => c.id === classId)
        if (!cls || cls.lessonIds.length === 0) return 0
        const completed = cls.lessonIds.filter((id) => state.progress.some((p) => p.conceptId === id)).length
        return Math.round((completed / cls.lessonIds.length) * 100)
      },
    }),
    {
      name: 'learning-store',
    }
  )
)
