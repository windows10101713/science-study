import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { allLessons } from '../data/lessons'
import { SUBJECTS, LEVELS } from '../data/subjects'
import '../styles/index.css'

export default function LessonsPage() {
  const navigate = useNavigate()
  const { addClass, progress } = useLearningStore()
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // 전체 레슨 필터링
  const filteredLessons = useMemo(() => {
    return allLessons.filter((lesson) => {
      if (selectedSubject !== 'all' && lesson.subject !== selectedSubject) return false
      if (selectedLevel !== 'all') {
        const levelMeta = LEVELS.find((l) => l.id === selectedLevel)
        if (levelMeta && (lesson.grade < levelMeta.min || lesson.grade > levelMeta.max)) {
          return false
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase()
        const matchTitle = lesson.title.toLowerCase().includes(q)
        const matchUnit = lesson.unit.toLowerCase().includes(q)
        const matchSummary = lesson.summary.toLowerCase().includes(q)
        const matchKeywords = lesson.keywords.some((k) => k.toLowerCase().includes(q))
        if (!matchTitle && !matchUnit && !matchSummary && !matchKeywords) return false
      }
      return true
    })
  }, [selectedSubject, selectedLevel, searchQuery])

  // 분야x수준별로 트랙 그룹핑
  const groupedTracks = useMemo(() => {
    const tracks: {
      key: string
      subjectId: string
      levelId: string
      subjectLabel: string
      levelLabel: string
      icon: string
      lessons: typeof allLessons
    }[] = []

    SUBJECTS.forEach((sub) => {
      LEVELS.forEach((lvl) => {
        const lessonsInTrack = filteredLessons.filter(
          (l) => l.subject === sub.id && l.grade >= lvl.min && l.grade <= lvl.max
        )
        if (lessonsInTrack.length > 0) {
          tracks.push({
            key: `${sub.id}-${lvl.id}`,
            subjectId: sub.id,
            levelId: lvl.id,
            subjectLabel: sub.label,
            levelLabel: lvl.label,
            icon: sub.icon,
            lessons: lessonsInTrack.sort((a, b) => a.grade - b.grade),
          })
        }
      })
    })

    return tracks
  }, [filteredLessons])

  const handleAddTrackAsClass = (track: (typeof groupedTracks)[0]) => {
    const newClassId = `class-${Date.now()}`
    addClass({
      id: newClassId,
      subject: track.subjectId,
      subjectLabel: track.subjectLabel,
      level: track.levelId,
      levelLabel: track.levelLabel,
      title: `${track.subjectLabel} · ${track.levelLabel}`,
      lessonIds: track.lessons.map((l) => l.id),
      createdAt: new Date().toISOString(),
    })
    navigate(`/class/${newClassId}`)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📚 전체 커리큘럼 카탈로그</h1>
          <p>모든 분야와 단계의 {allLessons.length}개 레슨을 탐색하고, 원하는 커리큘럼 트랙을 학습에 추가하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 검색 및 필터 컨트롤 */}
        <div className="card">
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>🔍 레슨 검색 (제목, 단원, 키워드)</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요 (예: 자석, 미분, 슈뢰딩거, 유전)..."
            />
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem' }}>
              과목 분야
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <button
                className={`btn ${selectedSubject === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedSubject('all')}
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                🌐 전체 분야
              </button>
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  className={`btn ${selectedSubject === s.id ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedSubject(s.id)}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem' }}>
              교육 단계
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <button
                className={`btn ${selectedLevel === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedLevel('all')}
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                🎓 전체 단계
              </button>
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  className={`btn ${selectedLevel === l.id ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedLevel(l.id)}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 결과 통계 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: '#666', fontSize: '0.9rem' }}>
            총 <strong>{filteredLessons.length}개</strong>의 레슨이 검색되었습니다 ({groupedTracks.length}개 트랙)
          </span>
          <button className="btn btn-primary" onClick={() => navigate('/add-lesson')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            ➕ 마법사로 추가하기
          </button>
        </div>

        {/* 커리큘럼 트랙 카드 목록 */}
        {groupedTracks.length === 0 ? (
          <div className="card empty-state">
            <div className="empty-icon">📭</div>
            <h3>조건에 맞는 레슨이 없습니다</h3>
            <p style={{ color: '#666' }}>검색어나 필터를 변경해 보세요.</p>
          </div>
        ) : (
          groupedTracks.map((track) => (
            <div key={track.key} className="card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <strong style={{ fontSize: '1.15rem', color: '#1e1b4b' }}>
                    {track.icon} {track.subjectLabel} · {track.levelLabel}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: '#667eea', marginLeft: '0.5rem' }}>
                    ({track.lessons.length}개 레슨 세트)
                  </span>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddTrackAsClass(track)}
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                >
                  ➕ 내 학습 트랙으로 추가
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {track.lessons.map((lesson) => {
                  const isDone = progress.some((p) => p.conceptId === lesson.id)
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => navigate(`/concept/${lesson.id}`)}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '0.5rem',
                        background: isDone ? '#f0fdf4' : '#f8fafc',
                        border: `1px solid ${isDone ? '#86efac' : '#e2e8f0'}`,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {lesson.grade}학년 · {lesson.unit} {isDone && '✅ 완료'}
                      </div>
                      <strong style={{ display: 'block', marginTop: '0.25rem', color: isDone ? '#15803d' : '#334155' }}>
                        {lesson.title}
                      </strong>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', lineHeight: '1.4' }}>
                        {lesson.summary.slice(0, 45)}...
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  )
}
