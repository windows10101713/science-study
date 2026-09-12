import { useParams, useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { allLessons } from '../data/lessons'
import { getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function ClassDetailPage() {
  const { classId } = useParams()
  const navigate = useNavigate()
  const { classes, getConceptProgress, removeClass } = useLearningStore()

  const cls = classes.find((c) => c.id === classId)

  if (!cls) {
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

  const subject = getSubjectMeta(cls.subject)
  const nodes = cls.lessonIds
    .map((id) => allLessons.find((l) => l.id === id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))

  const handleDelete = () => {
    if (confirm('이 레슨을 삭제할까요? 진도 기록은 유지됩니다.')) {
      removeClass(cls.id)
      navigate('/')
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>{subject?.icon} {cls.title}</h1>
          <p>아래에서 위로, 작은 레슨을 하나씩 완료해보세요</p>
        </div>
      </header>

      <main className="container">
        <div className="skill-tree">
          {nodes.map((lesson, idx) => {
            const progress = getConceptProgress(lesson.id)
            const completed = Boolean(progress)
            const prevCompleted = idx === 0 || Boolean(getConceptProgress(nodes[idx - 1].id))
            const locked = !prevCompleted
            const status = completed ? 'completed' : locked ? 'locked' : 'available'

            return (
              <div className="skill-tree-node-wrapper" key={lesson.id}>
                <div
                  className={`skill-node ${status}`}
                  onClick={() => {
                    if (locked) return
                    navigate(`/concept/${lesson.id}?classId=${cls.id}`)
                  }}
                >
                  <div className="skill-node-grade">{lesson.grade}학년 · {lesson.unit}</div>
                  <div className="skill-node-title">
                    {completed ? '✅' : locked ? '🔒' : '▶️'} {lesson.title}
                  </div>
                  {completed && (
                    <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>
                      점수 {progress!.score}점
                    </div>
                  )}
                </div>
                {idx < nodes.length - 1 && <div className={`skill-connector ${completed ? 'completed' : ''}`} />}
              </div>
            )
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ width: '100%' }}>
            ← 홈으로
          </button>
          <button className="btn btn-secondary" onClick={handleDelete} style={{ width: '100%', color: '#ef4444' }}>
            🗑 레슨 삭제
          </button>
        </div>
      </main>
    </div>
  )
}
