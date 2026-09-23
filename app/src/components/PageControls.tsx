import { useEffect, useState } from 'react'

export default function PageControls() {
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    if (!showHelp) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowHelp(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showHelp])

  const scrollTo = (top: number) => {
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <div className="page-controls" aria-label="페이지 이동 도구">
        <button className="page-control-button" onClick={() => scrollTo(0)} aria-label="페이지 맨 위로 이동" title="맨 위로">
          ↑
        </button>
        <button className="page-control-button" onClick={() => scrollTo(document.documentElement.scrollHeight)} aria-label="페이지 맨 아래로 이동" title="맨 아래로">
          ↓
        </button>
        <button className="page-control-button page-help-button" onClick={() => setShowHelp(true)} aria-label="도움말 열기" title="도움말">
          ?
        </button>
      </div>

      {showHelp && (
        <div className="help-backdrop" role="presentation" onClick={() => setShowHelp(false)}>
          <section className="help-modal" role="dialog" aria-modal="true" aria-labelledby="help-title" onClick={(event) => event.stopPropagation()}>
            <div className="help-modal-header">
              <div>
                <span className="help-eyebrow">SCIENCE STUDY GUIDE</span>
                <h2 id="help-title">도움말</h2>
              </div>
              <button className="help-close-button" onClick={() => setShowHelp(false)} aria-label="도움말 닫기" title="닫기">
                ×
              </button>
            </div>
            <div className="help-modal-content">
              <div className="help-item">
                <strong>🤖 AI 학습</strong>
                <p>수준 진단 결과를 바탕으로 고정된 문제 세트와 맞춤형 책을 생성합니다.</p>
              </div>
              <div className="help-item">
                <strong>📚 레슨</strong>
                <p>분야와 수준을 고른 뒤 레슨을 열고 개념 학습과 문제 풀이를 진행하세요.</p>
              </div>
              <div className="help-item">
                <strong>🛠️ 도구</strong>
                <p>주기율표, 계산기, Canvas 시뮬레이터로 배운 내용을 직접 확인할 수 있습니다.</p>
              </div>
              <div className="help-item">
                <strong>🔁 복습</strong>
                <p>로그 메뉴에서 풀이 기록과 오답을 확인하고 다시 학습할 수 있습니다.</p>
              </div>
              <div className="help-item">
                <strong>⚙️ 설정</strong>
                <p>학습 목표, 문제 수, 테마, 데이터 백업 옵션을 조정할 수 있습니다.</p>
              </div>
            </div>
            <p className="help-shortcut">Esc 키를 누르거나 바깥 영역을 클릭하면 닫힙니다.</p>
          </section>
        </div>
      )}
    </>
  )
}
