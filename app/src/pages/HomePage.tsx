import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { getSubjectMeta } from '../data/subjects'
import { LIBRARY_BOOKS } from '../data/library'
import { allLessons } from '../data/lessons'
import '../styles/index.css'

export default function HomePage() {
  const navigate = useNavigate()
  const {
    classes,
    getClassProgress,
    userPreferences,
    getStudyStreak,
    getTotalStudyTime,
    getAverageScore,
    progress,
  } = useLearningStore()

  const nickname = userPreferences.nickname || '학습자'
  const streak = getStudyStreak()
  const totalSeconds = getTotalStudyTime()
  const totalMinutes = Math.round(totalSeconds / 60)
  const goalMinutes = userPreferences.dailyGoalMinutes || 15
  const goalProgressPct = Math.min(100, Math.round((totalMinutes / goalMinutes) * 100))
  const avgScore = getAverageScore().toFixed(0)
  const completedCount = progress.length
  const totalLessonCount = allLessons.length
  const completionPct = totalLessonCount > 0 ? Math.round((completedCount / totalLessonCount) * 100) : 0
  const totalChapterCount = LIBRARY_BOOKS.reduce((sum, book) => sum + book.chapters.length, 0)
  const nextLessonIndex = completedCount % allLessons.length
  const dailyChallenge = allLessons[nextLessonIndex]

  // 오늘의 추천 도서 (선호 과목 중심 또는 무작위)
  const recommendedBook =
    LIBRARY_BOOKS.find((b) => b.subject === userPreferences.preferredSubject) || LIBRARY_BOOKS[0]

  // 아직 완료하지 않은 추천 레슨
  const uncompletedLesson = allLessons.find(
    (l) => !progress.some((p) => p.conceptId === l.id) && l.subject === (userPreferences.preferredSubject || 'physics')
  ) || allLessons[0]

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🔬 대시보드 홈</h1>
          <p>반갑습니다, <strong>{nickname}</strong>님! 오늘도 과학적 탐구를 이어가세요.</p>
        </div>
      </header>

      <main className="container">
        {/* 일일 학습 목표 카운터 */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)', border: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div>
              <strong style={{ fontSize: '1.1rem', color: '#4338ca' }}>🎯 오늘의 학습 목표</strong>
              <p style={{ fontSize: '0.9rem', color: '#6366f1', marginTop: '0.2rem' }}>
                목표 {goalMinutes}분 중 <strong>{totalMinutes}분</strong> 달성 ({goalProgressPct}%)
              </p>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4338ca' }}>
              🔥 {streak}일 연속
            </div>
          </div>
          <div className="progress-bar" style={{ height: '10px', backgroundColor: '#c7d2fd' }}>
            <div className="progress-fill" style={{ width: `${goalProgressPct}%`, backgroundColor: '#4f46e5' }} />
          </div>
        </div>

        {/* 핵심 학습 통계 카드 */}
        <div className="stats-grid" style={{ marginTop: '1rem' }}>
          <div className="stat-card" onClick={() => navigate('/log')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>완료한 개념</h3>
              <p className="stat-number">{progress.length}</p>
              <p className="stat-label">개 완료</p>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/log')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>평균 퀴즈 점수</h3>
              <p className="stat-number">{avgScore}%</p>
              <p className="stat-label">달성률</p>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/library')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon">📖</div>
            <div className="stat-content">
              <h3>심화 도서관</h3>
              <p className="stat-number">{LIBRARY_BOOKS.length}</p>
              <p className="stat-label">권 수록</p>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/lessons')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon">🧭</div>
            <div className="stat-content">
              <h3>전체 커리큘럼</h3>
              <p className="stat-number">{completionPct}%</p>
              <p className="stat-label">{completedCount}/{totalLessonCount}개 완료</p>
            </div>
          </div>
        </div>

        {/* 빠른 탐구 메뉴 */}
        <div className="card" style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ color: '#1e1b4b', margin: 0 }}>⚡ 바로 시작하기</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                학습, 실험, 복습 중 지금 필요한 활동을 선택하세요.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.5rem', width: 'min(100%, 620px)' }}>
              <button className="btn btn-primary" onClick={() => navigate('/lessons')} style={{ padding: '0.65rem 0.4rem', fontSize: '0.82rem' }}>📚 레슨 찾기</button>
              <button className="btn btn-secondary" onClick={() => navigate('/tools')} style={{ padding: '0.65rem 0.4rem', fontSize: '0.82rem' }}>🧪 실험실</button>
              <button className="btn btn-secondary" onClick={() => navigate('/review')} style={{ padding: '0.65rem 0.4rem', fontSize: '0.82rem' }}>🔁 복습하기</button>
              <button className="btn btn-secondary" onClick={() => navigate('/dictionary')} style={{ padding: '0.65rem 0.4rem', fontSize: '0.82rem' }}>📖 사전 열기</button>
            </div>
          </div>
        </div>

        {/* 진행 중인 내 레슨 클래스 */}
        <div className="card" style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ color: '#4338ca', margin: 0 }}>📌 내 학습 트랙 ({classes.length})</h3>
            <button className="btn btn-primary" onClick={() => navigate('/add-lesson')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              ➕ 트랙 추가
            </button>
          </div>

          {classes.length === 0 ? (
            <div className="empty-state" style={{ padding: '1.5rem 0' }}>
              <div className="empty-icon">📭</div>
              <p style={{ color: '#666' }}>아직 등록된 학습 트랙이 없습니다.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/add-lesson')}
                style={{ marginTop: '1rem' }}
              >
                첫 학습 트랙 만들기
              </button>
            </div>
          ) : (
            <div className="class-grid">
              {classes.map((cls) => {
                const subject = getSubjectMeta(cls.subject)
                const progressPct = getClassProgress(cls.id)
                return (
                  <div key={cls.id} className="class-card" onClick={() => navigate(`/class/${cls.id}`)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="class-icon">{subject?.icon || '📘'}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', background: '#e0e7ff', color: '#4338ca' }}>
                        {cls.levelLabel}
                      </span>
                    </div>
                    <strong style={{ display: 'block', marginTop: '0.5rem' }}>{cls.title}</strong>
                    <div className="progress-bar" style={{ marginTop: '0.75rem' }}>
                      <div className="progress-fill" style={{ width: `${progressPct}%` }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#666' }}>{progressPct}% 완료</span>
                      <span style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 600 }}>▶️ 학습 이어하기</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* 오늘의 추천 도서 & 추천 레슨 2열 카드 */}
        <div className="row" style={{ marginTop: '1rem' }}>
          {/* 오늘의 추천 도서 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 600, marginBottom: '0.25rem' }}>
                💡 오늘의 추천 도서
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e1b4b' }}>
                {recommendedBook.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.6' }}>
                {recommendedBook.description}
              </p>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => navigate(`/library/${recommendedBook.id}`)}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              📖 도서 읽기 →
            </button>
          </div>

          {/* 오늘의 추천 개념 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600, marginBottom: '0.25rem' }}>
                🌱 추천 탐구 개념
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#065f46' }}>
                {uncompletedLesson.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.6' }}>
                단원: {uncompletedLesson.unit} ({uncompletedLesson.grade}학년)
                <br />
                {uncompletedLesson.summary}
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/concept/${uncompletedLesson.id}`)}
              style={{ marginTop: '1rem', width: '100%', backgroundColor: '#059669' }}
            >
              🔬 개념 탐구하기 →
            </button>
          </div>
        </div>

        {/* 오늘의 도전과 전체 자산 현황 */}
        <div className="row" style={{ marginTop: '1rem' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', border: '1px solid #a7f3d0' }}>
            <div style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700 }}>🏁 오늘의 도전 레슨</div>
            <h4 style={{ color: '#065f46', marginTop: '0.4rem' }}>{dailyChallenge.title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#065f46', lineHeight: '1.55', marginTop: '0.4rem' }}>
              {dailyChallenge.summary}
            </p>
            <button className="btn btn-primary" onClick={() => navigate(`/concept/${dailyChallenge.id}`)} style={{ marginTop: '1rem', backgroundColor: '#047857', width: '100%' }}>
              도전 시작하기 →
            </button>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.8rem', color: '#4338ca', fontWeight: 700 }}>🌐 Science Study 전체 규모</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: '#4338ca' }}>{totalLessonCount}</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>레슨</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: '#059669' }}>{LIBRARY_BOOKS.length}</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>도서</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: '#d97706' }}>{totalChapterCount}</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>챕터</span>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.5', marginTop: '1rem' }}>
              개념을 읽고, 문제를 풀고, 도구로 직접 확인하는 순서로 학습하면 기억이 오래 남습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
