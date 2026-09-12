import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function LessonsPage() {
  const navigate = useNavigate()
  const { classes, getClassProgress } = useLearningStore()

  const grouped = classes.reduce<Record<string, typeof classes>>((acc, cls) => {
    acc[cls.subject] = acc[cls.subject] ? [...acc[cls.subject], cls] : [cls]
    return acc
  }, {})

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📚 레슨</h1>
          <p>분야별로 내가 추가한 레슨을 확인하세요</p>
        </div>
      </header>

      <main className="container">
        <button className="btn btn-primary" onClick={() => navigate('/add-lesson')} style={{ marginBottom: '1.5rem' }}>
          ➕ 레슨 추가
        </button>

        {classes.length === 0 ? (
          <div className="card empty-state">
            <div className="empty-icon">📭</div>
            <h3>아직 추가한 레슨이 없습니다</h3>
          </div>
        ) : (
          Object.entries(grouped).map(([subjectId, subjectClasses]) => {
            const subject = getSubjectMeta(subjectId)
            return (
              <div key={subjectId} style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
                  {subject?.icon} {subject?.label || subjectId}
                </h3>
                <div className="class-grid">
                  {subjectClasses.map((cls) => {
                    const progressPct = getClassProgress(cls.id)
                    return (
                      <div key={cls.id} className="class-card" onClick={() => navigate(`/class/${cls.id}`)}>
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
              </div>
            )
          })
        )}
      </main>
    </div>
  )
}
