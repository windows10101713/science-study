import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ResultPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    const sessionData = sessionStorage.getItem(`quiz_${lessonId}`)
    if (sessionData) {
      setResult(JSON.parse(sessionData))
    }
  }, [lessonId])

  if (!result) {
    return <div className="container">데이터를 찾을 수 없습니다</div>
  }

  const correctPercentage = Math.round((result.correctCount / result.totalQuestions) * 100)
  const grade = correctPercentage >= 80 ? '⭐ 잘했어요!' : correctPercentage >= 60 ? '👍 좋아요!' : '💪 조금 더 복습해볼까요?'

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>학습 결과</h1>
          <p>학습을 완료했습니다</p>
        </div>
      </header>

      <main className="container">
        <div className="card" style={{ textAlign: 'center', backgroundColor: '#f0f4ff' }}>
          <h2 style={{ fontSize: '3rem', color: '#667eea', marginBottom: '1rem' }}>
            {correctPercentage}%
          </h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{grade}</h3>
          <p style={{ fontSize: '1.2rem' }}>
            {result.correctCount} / {result.totalQuestions} 문제 정답
          </p>
        </div>

        <div className="card">
          <h3>📊 상세 결과</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
                {result.correctCount}
              </div>
              <div style={{ color: '#065f46' }}>정답</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>
                {result.totalQuestions - result.correctCount}
              </div>
              <div style={{ color: '#991b1b' }}>오답</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#fef3c7' }}>
          <h3>💡 다음 단계</h3>
          {correctPercentage >= 80 ? (
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>✓ 이 개념을 잘 이해했습니다!</li>
              <li>💪 다음 개념을 학습해 볼까요?</li>
              <li>🔗 같은 주제의 심화 문제를 도전해 보세요</li>
            </ul>
          ) : correctPercentage >= 60 ? (
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>📚 틀린 개념을 다시 한 번 복습하세요</li>
              <li>🧪 관찰 활동으로 개념을 직접 확인해 보세요</li>
              <li>🔄 내일 같은 주제를 다시 풀어보세요</li>
            </ul>
          ) : (
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>📖 개념 설명을 천천히 다시 읽어보세요</li>
              <li>🧪 관찰 활동으로 현상을 직접 관찰해 보세요</li>
              <li>⏰ 충분한 시간을 가지고 복습해 보세요</li>
              <li>💬 이해 안 되는 부분을 메모해 두세요</li>
            </ul>
          )}
        </div>

        <div className="card">
          <h3>📝 학습 기록</h3>
          <p>이 결과는 자동으로 저장되었습니다.</p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
            학습 시간: {new Date(result.date).toLocaleString('ko-KR')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ width: '100%' }}>
            홈으로
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/setup')} style={{ width: '100%' }}>
            다른 주제 학습
          </button>
        </div>
      </main>
    </div>
  )
}
