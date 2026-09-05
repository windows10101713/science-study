import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCustomConcepts, saveCustomConcept } from '../lib/concepts'

const lessonData = [
  {
    id: 'physics-middle-01',
    title: '힘의 의미',
    description: '물체의 운동 상태나 모양을 바꾸는 원인',
  },
  {
    id: 'physics-middle-02',
    title: '뉴턴의 운동 법칙',
    description: '운동의 기본 원리',
  },
  {
    id: 'physics-middle-03',
    title: '마찰력',
    description: '접촉하는 물체 사이의 저항',
  },
  {
    id: 'physics-middle-04',
    title: '중력과 무게',
    description: '지구가 물체를 당기는 힘',
  },
  {
    id: 'physics-middle-05',
    title: '운동과 속력',
    description: '물체의 움직임과 빠르기',
  },
]

export default function LearningSetupPage() {
  const navigate = useNavigate()
  const [grade, setGrade] = useState(8)
  const [level, setLevel] = useState<'basic' | 'curriculum' | 'university'>('curriculum')
  const [selectedLesson, setSelectedLesson] = useState(lessonData[0].id)
  const [customConcepts, setCustomConcepts] = useState(getCustomConcepts)
  const [customTitle, setCustomTitle] = useState('')
  const [customSummary, setCustomSummary] = useState('')
  const [customKeywords, setCustomKeywords] = useState('')

  const handleStart = () => {
    // 로컬 스토리지에 사용자 설정 저장
    localStorage.setItem('userPreference', JSON.stringify({ grade, level }))
    navigate(`/concept/${selectedLesson}`)
  }

  const handleAddConcept = () => {
    const title = customTitle.trim()
    if (!title) return
    const concept = {
      id: `custom-${Date.now()}`,
      subject: 'physics',
      grade,
      unit: '나의 개념',
      title,
      summary: customSummary.trim() || '내가 직접 정리한 과학 개념',
      keywords: customKeywords.split(',').map((keyword) => keyword.trim()).filter(Boolean),
      misconceptions: [],
      questionIds: [],
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
          <p>당신의 수준에 맞는 학습을 시작하세요</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>1단계: 학년 선택</h3>
          <div className="form-group">
            <label htmlFor="grade">학년</label>
            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
            >
              <option value={8}>중학교 1학년</option>
              <option value={9}>중학교 2학년</option>
              <option value={10}>중학교 3학년</option>
              <option value={11}>고등학교 1학년</option>
              <option value={12}>고등학교 2학년</option>
            </select>
          </div>
        </div>

        <div className="card">
          <h3>2단계: 학습 수준 선택</h3>
          <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
            같은 개념을 다양한 깊이로 설명합니다
          </p>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <label style={{ cursor: 'pointer', padding: '1rem', border: level === 'basic' ? '2px solid #667eea' : '2px solid #ddd', borderRadius: '0.5rem' }}>
              <input
                type="radio"
                name="level"
                value="basic"
                checked={level === 'basic'}
                onChange={(e) => setLevel(e.target.value as 'basic' | 'curriculum' | 'university')}
                style={{ marginRight: '0.5rem' }}
              />
              <strong>🌱 기초 (쉬운 설명)</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', marginLeft: '1.5rem' }}>
                일상의 예시와 직관으로 개념을 이해합니다
              </p>
            </label>

            <label style={{ cursor: 'pointer', padding: '1rem', border: level === 'curriculum' ? '2px solid #667eea' : '2px solid #ddd', borderRadius: '0.5rem' }}>
              <input
                type="radio"
                name="level"
                value="curriculum"
                checked={level === 'curriculum'}
                onChange={(e) => setLevel(e.target.value as 'basic' | 'curriculum' | 'university')}
                style={{ marginRight: '0.5rem' }}
              />
              <strong>📚 교육과정 (표준)</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', marginLeft: '1.5rem' }}>
                학교 교과서 수준의 개념과 기본 수식을 다룹니다
              </p>
            </label>

            <label style={{ cursor: 'pointer', padding: '1rem', border: level === 'university' ? '2px solid #667eea' : '2px solid #ddd', borderRadius: '0.5rem' }}>
              <input
                type="radio"
                name="level"
                value="university"
                checked={level === 'university'}
                onChange={(e) => setLevel(e.target.value as 'basic' | 'curriculum' | 'university')}
                style={{ marginRight: '0.5rem' }}
              />
              <strong>🎓 대학 초급 (심화)</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', marginLeft: '1.5rem' }}>
                수식 유도, 벡터, 미분 등 깊이 있는 설명
              </p>
            </label>
          </div>
        </div>

        <div className="card">
          <h3>3단계: 학습 주제 선택</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {lessonData.map((lesson) => (
              <label
                key={lesson.id}
                style={{
                  cursor: 'pointer',
                  padding: '1rem',
                  border: selectedLesson === lesson.id ? '2px solid #667eea' : '2px solid #ddd',
                  borderRadius: '0.5rem',
                  backgroundColor: selectedLesson === lesson.id ? '#f0f4ff' : 'white',
                }}
              >
                <input
                  type="radio"
                  name="lesson"
                  value={lesson.id}
                  checked={selectedLesson === lesson.id}
                  onChange={(e) => setSelectedLesson(e.target.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                <strong>{lesson.title}</strong>
                <p style={{ fontSize: '0.9rem', color: '#666', marginLeft: '1.5rem' }}>
                  {lesson.description}
                </p>
              </label>
            ))}
            {customConcepts.map((lesson) => (
              <label
                key={lesson.id}
                style={{ cursor: 'pointer', padding: '1rem', border: selectedLesson === lesson.id ? '2px solid #667eea' : '2px solid #ddd', borderRadius: '0.5rem', backgroundColor: selectedLesson === lesson.id ? '#f0f4ff' : 'white' }}
              >
                <input type="radio" name="lesson" value={lesson.id} checked={selectedLesson === lesson.id} onChange={() => setSelectedLesson(lesson.id)} style={{ marginRight: '0.5rem' }} />
                <strong>{lesson.title}</strong>
                <p style={{ fontSize: '0.9rem', color: '#666', marginLeft: '1.5rem' }}>{lesson.summary}</p>
              </label>
            ))}
          </div>
          <div className="custom-concept-form">
            <h4>➕ 나만의 개념 추가</h4>
            <p>수업에서 배운 내용이나 궁금한 주제를 직접 등록해 보세요.</p>
            <div className="form-group">
              <label htmlFor="custom-title">개념 이름</label>
              <input id="custom-title" value={customTitle} onChange={(e) => setCustomTitle(e.target.value)} placeholder="예: 관성" />
            </div>
            <div className="form-group">
              <label htmlFor="custom-summary">내가 아는 내용</label>
              <textarea id="custom-summary" value={customSummary} onChange={(e) => setCustomSummary(e.target.value)} placeholder="개념을 한두 문장으로 적어 보세요." rows={3} />
            </div>
            <div className="form-group">
              <label htmlFor="custom-keywords">핵심 단어 (쉼표로 구분)</label>
              <input id="custom-keywords" value={customKeywords} onChange={(e) => setCustomKeywords(e.target.value)} placeholder="운동, 질량, 저항" />
            </div>
            <button className="btn btn-secondary" onClick={handleAddConcept} disabled={!customTitle.trim()} style={{ opacity: customTitle.trim() ? 1 : 0.5 }}>
              개념 저장하고 선택하기
            </button>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleStart} style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          학습 시작하기
        </button>
      </main>
    </div>
  )
}
