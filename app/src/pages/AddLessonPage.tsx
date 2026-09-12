import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { allLessons } from '../data/lessons'
import { SUBJECTS, LEVELS } from '../data/subjects'
import '../styles/index.css'

export default function AddLessonPage() {
  const navigate = useNavigate()
  const { addClass } = useLearningStore()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [subjectId, setSubjectId] = useState('')
  const [levelId, setLevelId] = useState('')

  const level = LEVELS.find((l) => l.id === levelId)

  const matchedLessons = useMemo(() => {
    if (!subjectId || !level) return []
    return allLessons
      .filter((l) => l.subject === subjectId && l.grade >= level.min && l.grade <= level.max)
      .sort((a, b) => a.grade - b.grade)
  }, [subjectId, level])

  const subject = SUBJECTS.find((s) => s.id === subjectId)

  const handleSelectSubject = (id: string) => {
    setSubjectId(id)
    setStep(2)
  }

  const handleSelectLevel = (id: string) => {
    setLevelId(id)
    setStep(3)
  }

  const handleCreateClass = () => {
    if (!subject || !level || matchedLessons.length === 0) return
    addClass({
      id: `class-${Date.now()}`,
      subject: subject.id,
      subjectLabel: subject.label,
      level: level.id,
      levelLabel: level.label,
      title: `${subject.label} · ${level.label}`,
      lessonIds: matchedLessons.map((l) => l.id),
      createdAt: new Date().toISOString(),
    })
    navigate('/')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>➕ 레슨 추가</h1>
          <p>과목과 수준을 선택해서 나만의 학습 트리를 만들어보세요</p>
        </div>
      </header>

      <main className="container">
        {/* 1단계: 과목 선택 */}
        <div className="card">
          <h3>1단계: 어떤 분야를 배우고 싶나요?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                className={`btn ${subjectId === s.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleSelectSubject(s.id)}
                style={{ width: '100%', textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2단계: 수준 선택 */}
        {step >= 2 && (
          <div className="card">
            <h3>2단계: 어떤 수준으로 배우고 싶나요?</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
              선택한 분야: <strong>{subject?.icon} {subject?.label}</strong>
            </p>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {LEVELS.map((l) => (
                <label
                  key={l.id}
                  style={{
                    cursor: 'pointer',
                    padding: '1rem',
                    border: levelId === l.id ? '2px solid #667eea' : '2px solid #e0e7ff',
                    borderRadius: '0.5rem',
                    backgroundColor: levelId === l.id ? '#f0f4ff' : 'white',
                    transition: 'all 0.2s'
                  }}
                >
                  <input
                    type="radio"
                    name="level"
                    value={l.id}
                    checked={levelId === l.id}
                    onChange={() => handleSelectLevel(l.id)}
                    style={{ marginRight: '0.75rem' }}
                  />
                  <strong>{l.label}</strong>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* 3단계: 확인 및 추가 */}
        {step >= 3 && level && (
          <div className="card">
            <h3>3단계: 레슨 트리 미리보기</h3>
            {matchedLessons.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🚧</div>
                <p>선택한 분야·수준의 레슨은 아직 준비 중입니다.</p>
                <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
                  다른 분야나 수준을 선택해보세요.
                </p>
              </div>
            ) : (
              <>
                <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  총 {matchedLessons.length}개의 레슨이 아래에서 위로 이어집니다
                </p>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {matchedLessons.map((l, idx) => (
                    <div key={l.id} style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', background: '#f0f4ff' }}>
                      {idx + 1}. <strong>{l.title}</strong>
                      <span style={{ color: '#999', fontSize: '0.8rem', marginLeft: '0.5rem' }}>{l.unit}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary" onClick={handleCreateClass} style={{ width: '100%' }}>
                  ✅ 이 레슨 추가하기
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
