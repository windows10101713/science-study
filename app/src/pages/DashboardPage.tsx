import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import '../styles/index.css'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { progress, getStudyStreak, getTotalStudyTime, getAverageScore, getMistakesByDate } = useLearningStore()

  const streak = getStudyStreak()
  const totalTime = getTotalStudyTime()
  const avgScore = getAverageScore()
  const recentMistakes = getMistakesByDate(7)

  const hours = Math.floor(totalTime / 3600)
  const minutes = Math.floor((totalTime % 3600) / 60)

  const conceptsCompleted = progress.length
  const avgProgressScore = avgScore.toFixed(1)

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📊 학습 대시보드</h1>
          <p>당신의 학습 진도를 한눈에 확인하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 요약 통계 */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <h3>연속 학습</h3>
              <p className="stat-number">{streak}</p>
              <p className="stat-label">일</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3>총 학습 시간</h3>
              <p className="stat-number">{hours}h {minutes}m</p>
              <p className="stat-label">누적</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>완료한 개념</h3>
              <p className="stat-number">{conceptsCompleted}</p>
              <p className="stat-label">개</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>평균 점수</h3>
              <p className="stat-number">{avgProgressScore}%</p>
              <p className="stat-label">달성</p>
            </div>
          </div>
        </div>

        {/* 학습 진도 상세 */}
        <div className="card">
          <h3>📈 개념별 진도</h3>
          {progress.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>아직 학습한 개념이 없습니다.</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {progress.map((p) => (
                <div
                  key={p.conceptId}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>{p.conceptId}</strong>
                    <span>{p.score}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${p.score}%` }}></div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                    {p.attemptCount}회 시도 | {Math.floor(p.timeSpent / 60)}분 소요
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 최근 오답 */}
        <div className="card">
          <h3>🔴 최근 7일 오답</h3>
          {recentMistakes.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>최근 오답이 없습니다!</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {recentMistakes.map((m) => (
                <div
                  key={m.id}
                  style={{
                    padding: '1rem',
                    backgroundColor: m.isResolved ? '#f0fdf4' : '#fef2f2',
                    borderLeft: `4px solid ${m.isResolved ? '#10b981' : '#ef4444'}`,
                    borderRadius: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>{m.conceptId}</strong>
                      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>{m.explanation}</p>
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        backgroundColor: m.isResolved ? '#d1fae5' : '#fee2e2',
                        color: m.isResolved ? '#065f46' : '#991b1b',
                      }}
                    >
                      {m.reviewCount}회 복습
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 액션 버튼 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/setup')} style={{ width: '100%' }}>
            새 학습 시작
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/review')} style={{ width: '100%' }}>
            오답 복습
          </button>
        </div>
      </main>
    </div>
  )
}
