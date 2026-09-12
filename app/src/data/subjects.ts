// 학습 분야(과목) 목록
export interface SubjectMeta {
  id: string
  label: string
  icon: string
}

export const SUBJECTS: SubjectMeta[] = [
  { id: 'physics', label: '물리학', icon: '⚛️' },
  { id: 'chemistry', label: '화학', icon: '🧪' },
  { id: 'math', label: '수학', icon: '📐' },
  { id: 'biology', label: '생물학', icon: '🧬' },
  { id: 'earthscience', label: '지구과학', icon: '🌍' },
  { id: 'astronomy', label: '천문학', icon: '🔭' },
  { id: 'medicine', label: '의학', icon: '🩺' },
]

// 학습 수준(교육 단계) 목록
export interface LevelMeta {
  id: string
  label: string
  min: number
  max: number
  conceptLevel: 'basic' | 'curriculum' | 'advanced' | 'expert' | 'research'
}

export const LEVELS: LevelMeta[] = [
  { id: 'elementary', label: '초등학교 (4-6학년)', min: 4, max: 6, conceptLevel: 'basic' },
  { id: 'middle', label: '중학교 (7-9학년)', min: 7, max: 9, conceptLevel: 'curriculum' },
  { id: 'high', label: '고등학교 (10-12학년)', min: 10, max: 12, conceptLevel: 'advanced' },
  { id: 'master', label: '석사 (대학원)', min: 16, max: 17, conceptLevel: 'expert' },
  { id: 'phd', label: '박사 (연구)', min: 19, max: 20, conceptLevel: 'research' },
]

export function getSubjectMeta(id: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.id === id)
}

export function getLevelMeta(id: string): LevelMeta | undefined {
  return LEVELS.find((l) => l.id === id)
}
