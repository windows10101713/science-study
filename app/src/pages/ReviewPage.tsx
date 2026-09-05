import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ReviewPage() {
  const navigate = useNavigate()
  const [reviews, setReviews] = useState<any[]>([])

  useEffect(() => {
    // 세션 스토리지에서 모든 학습 기록 조회
    const allReviews: any[] = []
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i)
      if (key?.startsWith('quiz_')) {
        const data = JSON.parse(sessionStorage.getItem(key) || '{}')
        allReviews.push({
          id: key,
          lessonId: key.replace('quiz_', ''),
          ...data,
        })
      }
    }
    setReviews(allReviews)
  }, [])

  const lessonInfo: Record<string, any> = {
    'physics-middle-01': { title: '힘의 의미', subject: '중학교 물리' },
    'physics-middle-02': { title: '뉴턴의 운동 법칙', subject: '중학교 물리' },
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📝 오답 노트</h1>
          <p>지난 학습을 복습하세요</p>
        </div>
      </header>

      <main className="container">
        {reviews.length === 0 ? (
          <div className="card">
            <h3>아직 학습 기록이 없습니다</h3>
            <p>학습을 시작하면 여기에 기록이 표시됩니다.</p>
            <button className="btn btn-primary" onClick={() => navigate('/setup')} style={{ marginTop: '1rem' }}>
              학습 시작하기
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <h3>총 {reviews.length}개의 학습 기록</h3>
            </div>

            {reviews.map((review) => {
              const correctPercentage = Math.round((review.correctCount / review.totalQuestions) * 100)
              const lesson = lessonInfo[review.lessonId] || { title: review.lessonId, subject: '미정' }
              const status = correctPercentage >= 80 ? '완료' : correctPercentage >= 60 ? '복습 필요' : '집중 복습'

              return (
                <div key={review.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h3>{lesson.title}</h3>
                      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        {lesson.subject}
                      </p>
                      <p style={{ fontSize: '0.9rem', color: '#999' }}>
                        {new Date(review.date).toLocaleString('ko-KR')}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
                        {correctPercentage}%
                      </div>
                      <div
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: status === '완료' ? '#d1fae5' : status === '복습 필요' ? '#fef3c7' : '#fee2e2',
                          color: status === '완료' ? '#065f46' : status === '복습 필요' ? '#92400e' : '#991b1b',
                          borderRadius: '0.25rem',
                          fontSize: '0.85rem',
                          marginTop: '0.5rem',
                        }}
                      >
                        {status}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                        {review.correctCount}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>정답</div>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>
                        {review.totalQuestions - review.correctCount}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>오답</div>
                    </div>
                  </div>

                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/concept/${review.lessonId}`)}
                    style={{ marginTop: '1rem', width: '100%' }}
                  >
                    이 주제 복습하기
                  </button>
                </div>
              )
            })}
          </>
        )}

        <button className="btn btn-primary" onClick={() => navigate('/')} style={{ width: '100%', marginTop: '2rem' }}>
          홈으로 돌아가기
        </button>
      </main>
    </div>
  )
}
