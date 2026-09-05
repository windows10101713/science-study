import { useParams, useNavigate } from 'react-router-dom'
import defaultLessonData from '../../../data/lessons/physics-middle-01.json'
import { getCustomConcept } from '../lib/concepts'

export default function ConceptPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const userPref = JSON.parse(localStorage.getItem('userPreference') || '{}')
  const level = userPref.level || 'curriculum'
  const customConcept = lessonId ? getCustomConcept(lessonId) : undefined
  const lessonData = customConcept
    ? {
        ...customConcept,
        unit: '나의 개념',
        explanation: {
          basic: customConcept.summary,
          curriculum: `${customConcept.summary} 이 개념이 어떤 현상과 연결되는지 예시를 들어 확인해 보세요.`,
          university: `${customConcept.summary} 핵심 변인과 조건을 정리하고, 다른 개념과의 관계를 식으로 표현해 보세요.`,
        },
        observationActivity: {
          title: '내 개념 관찰하기',
          description: '주변에서 이 개념이 나타나는 사례를 찾아 기록합니다.',
          prediction: '관찰한 현상은 내가 정리한 개념과 관련이 있을 것이다.',
          materials: ['노트', '필기도구'],
          steps: ['개념과 관련된 일상 사례를 하나 고릅니다.', '무엇이 변하는지 관찰합니다.', '관찰 결과를 한 문장으로 기록합니다.'],
          safetyWarning: '주변을 관찰할 때 이동 안전과 주변 사람을 주의하세요.',
        },
      }
    : defaultLessonData

  const explanationKey = level as keyof typeof lessonData.explanation
  const explanation = (lessonData.explanation as any)[explanationKey] || lessonData.explanation.curriculum

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>{lessonData.title}</h1>
          <p>{lessonData.unit}</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>📚 개념 설명</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            {explanation}
          </p>
          <p style={{ color: '#667eea', fontStyle: 'italic' }}>
            수준: <strong>{level === 'basic' ? '🌱 기초' : level === 'curriculum' ? '📚 교육과정' : '🎓 대학'}</strong>
          </p>
        </div>

        <div className="card">
          <h3>💡 핵심 개념</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {lessonData.keywords.map((keyword, idx) => (
              <div key={idx} style={{ padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem' }}>
                <strong>{keyword}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>🔍 자주 하는 오해</h3>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            {lessonData.misconceptions.map((misconception, idx) => (
              <li key={idx} style={{ color: '#c41e3a', marginBottom: '0.5rem' }}>
                ❌ {misconception}
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ backgroundColor: '#fff7ed' }}>
          <h3>🧪 관찰 활동</h3>
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>📌 {lessonData.observationActivity.title}</h4>
          <p>{lessonData.observationActivity.description}</p>
          
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🤔 예측</h4>
          <p><em>{lessonData.observationActivity.prediction}</em></p>
          
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🛠️ 준비물</h4>
          <ul style={{ marginLeft: '1.5rem' }}>
            {lessonData.observationActivity.materials.map((material, idx) => (
              <li key={idx}>{material}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>📋 단계</h4>
          <ol style={{ marginLeft: '1.5rem' }}>
            {lessonData.observationActivity.steps.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{step}</li>
            ))}
          </ol>

          {lessonData.observationActivity.safetyWarning && (
            <div style={{ padding: '1rem', backgroundColor: '#fee2e2', borderLeft: '4px solid #ef4444', marginTop: '1rem' }}>
              <strong>⚠️ 안전 안내:</strong> {lessonData.observationActivity.safetyWarning}
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/setup')} style={{ width: '100%' }}>
            ← 돌아가기
          </button>
          <button className="btn btn-primary" onClick={() => navigate(`/quiz/${lessonId}`)} style={{ width: '100%' }}>
            문제 풀이 →
          </button>
        </div>
      </main>
    </div>
  )
}
