import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import '../styles/index.css'

export default function DetailedReviewPage() {
  const navigate = useNavigate()
  const { updateMistake, getMistakesByDate } = useLearningStore()
  const [filterDays, setFilterDays] = useState(30)

  const filteredMistakes = getMistakesByDate(filterDays)

  const handleMarkResolved = (id: string, isResolved: boolean) => {
    updateMistake(id, !isResolved)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📝 상세 오답 노트</h1>
          <p>틀린 문제를 분석하고 복습하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 필터 */}
        <div className="card">
          <h3>필터링</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
            {[7, 14, 30, 90].map((days) => (
              <button
                key={days}
                className={`btn ${filterDays === days ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterDays(days)}
                style={{ width: '100%' }}
              >
                {days}일
              </button>
            ))}
          </div>
        </div>

        {/* 오답 목록 */}
        <div className="card">
          <h3>
            오답 목록 ({filteredMistakes.length}개)
          </h3>
          {filteredMistakes.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>오답이 없습니다!</p>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {filteredMistakes.map((m) => (
                <div
                  key={m.id}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.75rem',
                    border: `2px solid ${m.isResolved ? '#d1fae5' : '#fee2e2'}`,
                  }}
                >
                  {/* 헤더 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>
                        {m.isResolved ? '✅' : '❌'} {m.conceptId}
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                        {new Date(m.mistakeDate).toLocaleDateString('ko-KR')}
                      </p>
                    </div>
                    <button
                      className={`btn ${m.isResolved ? 'btn-secondary' : 'btn-primary'}`}
                      onClick={() => handleMarkResolved(m.id, m.isResolved)}
                      style={{ padding: '0.5rem 1rem' }}
                    >
                      {m.isResolved ? '미해결로 변경' : '해결됨'}
                    </button>
                  </div>

                  {/* 문제 분석 */}
                  <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>
                      <strong>내 답:</strong> {m.userAnswer}
                    </p>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#10b981' }}>
                      <strong>정답:</strong> {m.correctAnswer}
                    </p>
                    <p style={{ margin: 0, color: '#666' }}>
                      <strong>해설:</strong> {m.explanation}
                    </p>
                  </div>

                  {/* 복습 통계 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                    <div>
                      <span style={{ color: '#666' }}>복습 횟수: </span>
                      <strong>{m.reviewCount}회</strong>
                    </div>
                    {m.lastReviewDate && (
                      <div>
                        <span style={{ color: '#666' }}>마지막 복습: </span>
                        <strong>{new Date(m.lastReviewDate).toLocaleDateString('ko-KR')}</strong>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 액션 버튼 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/log')} style={{ width: '100%' }}>
            ← 돌아가기
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/add-lesson')} style={{ width: '100%' }}>
            계속 학습하기
          </button>
        </div>
      </main>
    </div>
  )
}
