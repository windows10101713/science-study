import { useState } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { allLessons } from '../data/lessons'
import { getCustomConcept } from '../lib/concepts'
import { searchTerms, ScienceTerm } from '../data/terms'

export default function ConceptPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const classId = searchParams.get('classId')
  const [showSimulation, setShowSimulation] = useState(false)
  const [activeKeywordTerm, setActiveKeywordTerm] = useState<{ keyword: string; term?: ScienceTerm } | null>(null)
  const userPref = JSON.parse(localStorage.getItem('userPreference') || '{}')
  const level = userPref.level || 'curriculum'
  const customConcept = lessonId ? getCustomConcept(lessonId) : undefined
  const builtInLesson = !customConcept ? allLessons.find((l) => l.id === lessonId) : undefined
  const lessonData = customConcept
    ? {
        ...customConcept,
        unit: '나의 개념',
        explanation: {
          basic: customConcept.summary,
          curriculum: `${customConcept.summary} 이 개념이 어떤 현상과 연결되는지 예시를 들어 확인해 보세요.`,
          university: `${customConcept.summary} 핵심 변인과 조건을 정리하고, 다른 개념과의 관계를 식으로 표현해 보세요.`,
        },
        deepDive: undefined as string[] | undefined,
        observationActivity: {
          title: '내 개념 관찰하기',
          description: '주변에서 이 개념이 나타나는 사례를 찾아 기록합니다.',
          prediction: '관찰한 현상은 내가 정리한 개념과 관련이 있을 것이다.',
          materials: ['노트', '필기도구'],
          steps: ['개념과 관련된 일상 사례를 하나 고릅니다.', '무엇이 변하는지 관찰합니다.', '관찰 결과를 한 문장으로 기록합니다.'],
          safetyWarning: '주변을 관찰할 때 이동 안전과 주변 사람을 주의하세요.',
        },
      }
    : builtInLesson

  if (!lessonData) {
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>레슨을 찾을 수 없습니다</h1>
          </div>
        </header>
        <main className="container">
          <button className="btn btn-primary" onClick={() => navigate('/')}>홈으로</button>
        </main>
      </div>
    )
  }

  const explanationKey = level as keyof typeof lessonData.explanation
  const explanation = (lessonData.explanation as any)[explanationKey] || lessonData.explanation!.curriculum
  const observationActivity = lessonData.observationActivity!
  const backTarget = classId ? `/class/${classId}` : '/lessons'

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

        {lessonData.deepDive && lessonData.deepDive.length > 0 && (
          <div className="card" style={{ backgroundColor: '#f5f3ff' }}>
            <h3>🔬 심화 이론</h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {lessonData.deepDive.map((paragraph, idx) => (
                <p key={idx} style={{ lineHeight: '1.8' }}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        <div className="card">
          <h3>💡 핵심 개념 (클릭 시 상세 해설)</h3>
          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            궁금한 키워드를 클릭하여 용어 사전의 구체적인 해설을 확인하세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {lessonData.keywords.map((keyword, idx) => {
              const matched = searchTerms(keyword, lessonData.subject)[0] || searchTerms(keyword, 'all')[0]
              return (
                <div
                  key={idx}
                  onClick={() => setActiveKeywordTerm({ keyword, term: matched })}
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f0f4ff',
                    borderRadius: '0.5rem',
                    border: '1px solid #c7d2fd',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  className="keyword-chip"
                >
                  <strong style={{ color: '#4338ca' }}>{keyword}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#667eea' }}>🔍 보기</span>
                </div>
              )
            })}
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
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>📌 {observationActivity.title}</h4>
          <p>{observationActivity.description}</p>
          
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🤔 예측</h4>
          <p><em>{observationActivity.prediction}</em></p>

          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🛠️ 준비물</h4>
          <ul style={{ marginLeft: '1.5rem' }}>
            {observationActivity.materials.map((material, idx) => (
              <li key={idx}>{material}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>📋 단계</h4>
          <ol style={{ marginLeft: '1.5rem' }}>
            {observationActivity.steps.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{step}</li>
            ))}
          </ol>

          {observationActivity.safetyWarning && (
            <div style={{ padding: '1rem', backgroundColor: '#fee2e2', borderLeft: '4px solid #ef4444', marginTop: '1rem' }}>
              <strong>⚠️ 안전 안내:</strong> {observationActivity.safetyWarning}
            </div>
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <button className="btn btn-primary" onClick={() => setShowSimulation((v) => !v)} style={{ width: '100%' }}>
              {showSimulation ? '🔽 결과 시뮬레이션 닫기' : '🔮 결과 시뮬레이션 확인하기'}
            </button>
            {showSimulation && (
              <div style={{ padding: '1rem', backgroundColor: '#eef2ff', borderRadius: '0.5rem', marginTop: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#4338ca', marginBottom: '0.5rem' }}>🔬 실제로는 이렇게 됩니다</p>
                <p style={{ lineHeight: '1.8' }}>{lessonData.explanation!.curriculum}</p>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  직접 실험하기 전에 예측과 실제 결과를 비교해 보고, 왜 그런 차이가 나는지 생각해보세요.
                </p>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate(backTarget)} style={{ width: '100%' }}>
            ← 돌아가기
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/quiz/${lessonId}${classId ? `?classId=${classId}` : ''}`)}
            style={{ width: '100%' }}
          >
            문제 풀이 →
          </button>
        </div>

        {/* 핵심 개념 클릭 시 모달 */}
        {activeKeywordTerm && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '1rem',
            }}
            onClick={() => setActiveKeywordTerm(null)}
          >
            <div
              className="card"
              style={{ maxWidth: '550px', width: '100%', margin: 0, maxHeight: '85vh', overflowY: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#667eea', fontWeight: 600 }}>
                  💡 핵심 개념 상세 사전
                </span>
                <button
                  className="btn btn-secondary"
                  onClick={() => setActiveKeywordTerm(null)}
                  style={{ padding: '0.2rem 0.5rem', fontSize: '0.85rem' }}
                >
                  ✕ 닫기
                </button>
              </div>

              <h2 style={{ fontSize: '1.4rem', color: '#1e1b4b', marginTop: '0.5rem' }}>
                {activeKeywordTerm.keyword}
                {activeKeywordTerm.term?.en && (
                  <span style={{ fontSize: '0.95rem', color: '#667eea', fontWeight: 400, marginLeft: '0.5rem' }}>
                    ({activeKeywordTerm.term.en})
                  </span>
                )}
              </h2>

              {activeKeywordTerm.term ? (
                <>
                  <div style={{ padding: '0.85rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem', margin: '1rem 0' }}>
                    <strong>📌 정의</strong>
                    <p style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{activeKeywordTerm.term.definition}</p>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#4338ca' }}>🔬 구체적 설명</strong>
                    <p style={{ marginTop: '0.25rem', lineHeight: '1.7', color: '#374151' }}>
                      {activeKeywordTerm.term.detailedExplanation}
                    </p>
                  </div>
                  {activeKeywordTerm.term.formulaOrExample && (
                    <div style={{ padding: '0.85rem', backgroundColor: '#fff7ed', borderRadius: '0.5rem' }}>
                      <strong style={{ color: '#c2410c' }}>📐 수식 / 적용 예시</strong>
                      <p style={{ marginTop: '0.25rem', fontFamily: 'monospace' }}>{activeKeywordTerm.term.formulaOrExample}</p>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ padding: '1rem 0', lineHeight: '1.7' }}>
                  <p>
                    <strong>'{activeKeywordTerm.keyword}'</strong>은(는) 이 레슨({lessonData.title})에서 다루는 주요 과학 핵심 용어입니다.
                  </p>
                  <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    해당 개념을 깊이 있게 이해하고 활용할 수 있도록 관련 단원({lessonData.unit})과의 연계 설명을 참고하세요.
                  </p>
                </div>
              )}

              <button
                className="btn btn-primary"
                onClick={() => setActiveKeywordTerm(null)}
                style={{ width: '100%', marginTop: '1.25rem' }}
              >
                확인
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
