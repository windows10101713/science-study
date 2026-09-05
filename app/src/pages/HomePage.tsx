import { useNavigate } from 'react-router-dom'
import '../styles/index.css'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🔬 Science Study</h1>
          <p>AI와 함께 과학을 탐구하는 개인화 학습 플랫폼</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>환영합니다!</h3>
          <p>
            기초부터 전문가 수준까지, 당신의 수준에 맞는 설명과 문제 풀이를 반복하며 과학을 깊이 있게 이해하세요.
          </p>
        </div>

        <div className="card">
          <h3>📚 지원 과목</h3>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>중학교 물리</strong> (10개 개념, 40개 문제) - 현재 준비 중</li>
            <li>중학교 화학 - 준비 중</li>
            <li>중학교 생물 - 준비 중</li>
          </ul>
        </div>

        <div className="card">
          <h3>⭐ MVP 기능</h3>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>✓ 10~15분 짧은 학습 세션</li>
            <li>✓ 로그인 없이 사용 가능</li>
            <li>✓ 개념 설명 + 문제 풀이 + 오답 노트</li>
            <li>✓ 브라우저에 자동 저장</li>
            <li>✓ 안전한 관찰 활동 안내</li>
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={() => navigate('/setup')} style={{ width: '100%' }}>
            지금 시작하기
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/review')} style={{ width: '100%' }}>
            오답 복습
          </button>
        </div>

        <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f4ff' }}>
          <h3>💡 팁</h3>
          <p>
            이 앱은 실제 실험실을 대체하지 않습니다. 
            가정에서 안전하게 할 수 있는 관찰 활동과 예측을 통해 
            과학적 사고력을 키워보세요!
          </p>
        </div>
      </main>
    </div>
  )
}
