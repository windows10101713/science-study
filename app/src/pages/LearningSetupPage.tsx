import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCustomConcepts, saveCustomConcept } from '../lib/concepts'
import { allLessons } from '../data/lessons'
import '../styles/index.css'

export default function LearningSetupPage() {
  const navigate = useNavigate()
  const [gradeCategory, setGradeCategory] = useState<'elementary' | 'middle' | 'high' | 'master' | 'phd'>('middle')
  const [level, setLevel] = useState<'basic' | 'curriculum' | 'advanced' | 'expert' | 'research'>('curriculum')
  const [selectedLesson, setSelectedLesson] = useState('')
  const [customConcepts, setCustomConcepts] = useState(getCustomConcepts())
  const [customTitle, setCustomTitle] = useState('')
  const [customSummary, setCustomSummary] = useState('')
  const [customKeywords, setCustomKeywords] = useState('')

  // 카테고리별 학년 범위
  const gradeRanges = {
    elementary: { min: 4, max: 6, label: '초등학교 (4-6학년)' },
    middle: { min: 7, max: 9, label: '중학교 (7-9학년)' },
    high: { min: 10, max: 12, label: '고등학교 (10-12학년)' },
    master: { min: 16, max: 17, label: '석사 (대학원)' },
    phd: { min: 19, max: 20, label: '박사 (연구)' }
  }

  // 수준별 레이블
  const levelLabels = {
    basic: '🌱 기초 (쉬운 설명)',
    curriculum: '📚 교육과정 (표준)',
    advanced: '🎓 심화 (대학)',
    expert: '🔬 전문가 (석사)',
    research: '📊 연구 (박사)'
  }

  // 카테고리에 맞는 레슨 필터링
  const filteredLessons = useMemo(() => {
    const range = gradeRanges[gradeCategory]
    return allLessons.filter(l => l.grade >= range.min && l.grade <= range.max)
  }, [gradeCategory])

  // 선택된 레슨이 없으면 첫 번째 선택
  if (!selectedLesson && filteredLessons.length > 0) {
    setSelectedLesson(filteredLessons[0].id)
  }

  const handleStart = () => {
    if (!selectedLesson) return
    localStorage.setItem('userPreference', JSON.stringify({ grade: gradeRanges[gradeCategory].min, level }))
    navigate(`/concept/${selectedLesson}`)
  }

  const handleAddConcept = () => {
    const title = customTitle.trim()
    if (!title) return

    const concept = {
      id: `custom-${Date.now()}`,
      subject: 'custom',
      grade: gradeRanges[gradeCategory].min,
      unit: '내 개념',
      title,
      summary: customSummary.trim() || '내가 직접 정리한 개념',
      keywords: customKeywords.split(',').map(k => k.trim()).filter(Boolean),
      misconceptions: [],
      explanation: {
        basic: customSummary.trim() || '내가 정리한 개념입니다',
        curriculum: customSummary.trim() || '더 자세한 설명이 필요합니다',
        university: customSummary.trim() || '더 깊이 있는 설명이 필요합니다'
      },
      observationActivity: {
        title: '직접 관찰해보기',
        description: '이 개념과 관련된 현상을 관찰해 보세요',
        prediction: '어떤 현상이 관찰될 것 같나요?',
        materials: [],
        steps: ['직접 관찰 계획을 세워보세요'],
        safetyWarning: '안전하게 진행하세요'
      },
      examples: [],
      questions: [],
      createdAt: new Date().toISOString(),
    }

    saveCustomConcept(concept)
    setCustomConcepts([...customConcepts, concept])
    setSelectedLesson(concept.id)
    setCustomTitle('')
    setCustomSummary('')
    setCustomKeywords('')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📖 학습 설정</h1>
          <p>초등부터 박사 과정까지, 당신의 수준에 맞는 학습을 시작하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 1단계: 학년 선택 */}
        <div className="card">
          <h3>1단계: 교육 수준 선택</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {(Object.entries(gradeRanges) as [keyof typeof gradeRanges, any][]).map(([key, range]) => (
              <button
                key={key}
                className={`btn ${gradeCategory === key ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setGradeCategory(key)}
                style={{ width: '100%', textAlign: 'center' }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2단계: 학습 수준 선택 */}
        <div className="card">
          <h3>2단계: 학습 수준 선택</h3>
          <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
            같은 개념을 다양한 깊이로 설명합니다
          </p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {(Object.entries(levelLabels) as [keyof typeof levelLabels, string][]).map(([lv, label]) => (
              <label
                key={lv}
                style={{
                  cursor: 'pointer',
                  padding: '1rem',
                  border: level === lv ? '2px solid #667eea' : '2px solid #e0e7ff',
                  borderRadius: '0.5rem',
                  backgroundColor: level === lv ? '#f0f4ff' : 'white',
                  transition: 'all 0.2s'
                }}
              >
                <input
                  type="radio"
                  name="level"
                  value={lv}
                  checked={level === lv}
                  onChange={() => setLevel(lv as any)}
                  style={{ marginRight: '0.75rem' }}
                />
                <strong>{label}</strong>
              </label>
            ))}
          </div>
        </div>

        {/* 3단계: 학습 주제 선택 */}
        <div className="card">
          <h3>3단계: 학습 주제 선택</h3>
          <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {filteredLessons.length}개의 개념이 있습니다
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {filteredLessons.map(lesson => (
              <label
                key={lesson.id}
                style={{
                  cursor: 'pointer',
                  padding: '1rem',
                  border: selectedLesson === lesson.id ? '2px solid #667eea' : '2px solid #e0e7ff',
                  borderRadius: '0.75rem',
                  backgroundColor: selectedLesson === lesson.id ? '#f0f4ff' : 'white',
                  transition: 'all 0.2s'
                }}
              >
                <input
                  type="radio"
                  name="lesson"
                  value={lesson.id}
                  checked={selectedLesson === lesson.id}
                  onChange={() => setSelectedLesson(lesson.id)}
                  style={{ display: 'none' }}
                />
                <strong style={{ color: '#667eea' }}>{lesson.title}</strong>
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                  {lesson.unit}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
                  {lesson.summary.substring(0, 50)}...
                </p>
              </label>
            ))}
          </div>

          {/* 커스텀 개념 추가 */}
          <div className="custom-concept-form">
            <h4>직접 개념 만들기</h4>
            <p>스스로 공부한 개념을 저장하고 학습해 보세요</p>
            <div className="form-group">
              <label>개념명 *</label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="예: 파동의 간섭"
              />
            </div>
            <div className="form-group">
              <label>설명</label>
              <textarea
                value={customSummary}
                onChange={e => setCustomSummary(e.target.value)}
                placeholder="이 개념에 대해 설명해주세요"
                rows={3}
              />
            </div>
            <div className="form-group">
              <label>키워드 (쉼표로 구분)</label>
              <input
                type="text"
                value={customKeywords}
                onChange={e => setCustomKeywords(e.target.value)}
                placeholder="예: 간섭, 보강, 소강"
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddConcept} style={{ width: '100%' }}>
              ➕ 개념 추가하기
            </button>
          </div>

          {/* 추가된 커스텀 개념 표시 */}
          {customConcepts.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#667eea' }}>📌 내가 만든 개념</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                {customConcepts.map(concept => (
                  <label
                    key={concept.id}
                    style={{
                      cursor: 'pointer',
                      padding: '1rem',
                      border: selectedLesson === concept.id ? '2px solid #10b981' : '2px solid #d1fae5',
                      borderRadius: '0.75rem',
                      backgroundColor: selectedLesson === concept.id ? '#f0fdf4' : '#f9fef6'
                    }}
                  >
                    <input
                      type="radio"
                      name="lesson"
                      value={concept.id}
                      checked={selectedLesson === concept.id}
                      onChange={() => setSelectedLesson(concept.id)}
                      style={{ display: 'none' }}
                    />
                    <strong style={{ color: '#10b981' }}>{concept.title}</strong>
                    <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
                      {concept.summary.substring(0, 50)}...
                    </p>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 시작 버튼 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ width: '100%' }}>
            ← 돌아가기
          </button>
          <button
            className="btn btn-primary"
            onClick={handleStart}
            disabled={!selectedLesson}
            style={{ width: '100%', opacity: selectedLesson ? 1 : 0.5, cursor: selectedLesson ? 'pointer' : 'not-allowed' }}
          >
            학습 시작 →
          </button>
        </div>
      </main>
    </div>
  )
}
