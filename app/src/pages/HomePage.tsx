import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function HomePage() {
  const navigate = useNavigate()
  const { classes, getClassProgress } = useLearningStore()

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🏠 홈</h1>
          <p>내가 추가한 레슨을 확인하고 학습을 이어가세요</p>
        </div>
      </header>

      <main className="container">
        {classes.length === 0 ? (
          <div className="card empty-state">
            <div className="empty-icon">📭</div>
            <h3>아직 추가한 레슨이 없습니다</h3>
            <p>과목과 수준을 선택해서 첫 레슨을 추가해보세요</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/add-lesson')}
              style={{ marginTop: '1.5rem' }}
            >
              ➕ 레슨 추가하기
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#667eea' }}>내 레슨 ({classes.length})</h3>
              <button className="btn btn-primary" onClick={() => navigate('/add-lesson')}>
                ➕ 레슨 추가
              </button>
            </div>

            <div className="class-grid">
              {classes.map((cls) => {
                const subject = getSubjectMeta(cls.subject)
                const progressPct = getClassProgress(cls.id)
                return (
                  <div key={cls.id} className="class-card" onClick={() => navigate(`/class/${cls.id}`)}>
                    <div className="class-icon">{subject?.icon || '📘'}</div>
                    <strong>{cls.title}</strong>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>{cls.levelLabel}</p>
                    <div className="progress-bar" style={{ marginTop: '0.75rem' }}>
                      <div className="progress-fill" style={{ width: `${progressPct}%` }} />
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
                      {progressPct}% 완료 · {cls.lessonIds.length}개 레슨
                    </p>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
