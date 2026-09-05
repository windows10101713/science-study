import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import lessonData from '../../../data/lessons/physics-middle-01.json'

const sampleQuestions = [
  {
    id: 'q01',
    type: 'multiple_choice' as const,
    text: '다음 중 물체에 작용하는 힘이 아닌 것은?',
    choices: ['밀기', '당기기', '무게', '생각하기'],
    answer: '3',
    explanation: '힘은 물체를 밀거나 당기거나 접촉을 통해 작용합니다. 생각하기는 물체에 직접적인 힘을 주지 않습니다.',
  },
  {
    id: 'q02',
    type: 'short_answer' as const,
    text: '책상 위에 놓인 공을 손으로 밀었을 때, 공이 움직이는 이유는?',
    answer: '손의 힘이 공에 작용하기 때문',
    explanation: '물체가 움직이려면 힘이 필요합니다. 손이 공을 밀 때 힘이 작용하여 공의 운동 상태가 변합니다.',
  },
  {
    id: 'q03',
    type: 'multiple_choice' as const,
    text: '뉴턴의 2법칙(F=ma)에서 a는 무엇을 나타내나요?',
    choices: ['가속도', '면적', '각도', '높이'],
    answer: '0',
    explanation: '뉴턴의 2법칙에서 F=ma는 힘 = 질량 × 가속도를 의미합니다.',
  },
  {
    id: 'q04',
    type: 'short_answer' as const,
    text: '같은 크기의 힘으로 가벼운 공과 무거운 공을 밀 때, 어느 공이 더 빨리 움직일까요?',
    answer: '가벼운 공',
    explanation: 'F=ma에서 같은 F에 대해 질량 m이 작을수록 가속도 a는 커집니다. 따라서 가벼운 공이 더 빨리 움직입니다.',
  },
]

export default function QuizPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = sampleQuestions[currentQuestionIdx]
  const isLastQuestion = currentQuestionIdx === sampleQuestions.length - 1
  const answered = answers[currentQuestion.id] !== undefined

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer })
  }

  const handleSubmit = () => {
    if (!answered) return
    setSubmitted(true)
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      // 결과 페이지로 이동
      const correctCount = sampleQuestions.reduce((count, q) => {
        const submitted = answers[q.id]
        const isCorrect = q.type === 'short_answer' 
          ? submitted?.includes((q.answer as string).split(' ')[0])
          : submitted === q.answer
        return isCorrect ? count + 1 : count
      }, 0)
      
      sessionStorage.setItem(`quiz_${lessonId}`, JSON.stringify({
        totalQuestions: sampleQuestions.length,
        correctCount,
        answers,
        date: new Date().toISOString(),
      }))
      navigate(`/result/${lessonId}`)
    } else {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
      setSubmitted(false)
      setShowExplanation(false)
    }
  }

  const progress = ((currentQuestionIdx + 1) / sampleQuestions.length) * 100

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>문제 풀이</h1>
          <p>{lessonData.title}</p>
        </div>
      </header>

      <main className="container">
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            문제 {currentQuestionIdx + 1} / {sampleQuestions.length}
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="card">
          <h3>{currentQuestion.text}</h3>
          
          {currentQuestion.type === 'multiple_choice' && (
            <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              {(currentQuestion.choices as string[]).map((choice, idx) => (
                <label
                  key={idx}
                  style={{
                    cursor: 'pointer',
                    padding: '1rem',
                    border: answers[currentQuestion.id] === String(idx) ? '2px solid #667eea' : '2px solid #ddd',
                    borderRadius: '0.5rem',
                    backgroundColor: answers[currentQuestion.id] === String(idx) ? '#f0f4ff' : 'white',
                  }}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={String(idx)}
                    checked={answers[currentQuestion.id] === String(idx)}
                    onChange={(e) => handleAnswer(e.target.value)}
                    disabled={submitted}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {choice}
                </label>
              ))}
            </div>
          )}

          {currentQuestion.type === 'short_answer' && (
            <input
              type="text"
              placeholder="답을 입력하세요"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              disabled={submitted}
              style={{ marginTop: '1rem', padding: '0.75rem', width: '100%', fontSize: '1rem' }}
            />
          )}

          {showExplanation && (
            <div>
              <div className={`feedback ${answers[currentQuestion.id] === currentQuestion.answer || (currentQuestion.type === 'short_answer' && answers[currentQuestion.id]?.includes((currentQuestion.answer as string).split(' ')[0])) ? 'correct' : 'incorrect'}`}>
                {answers[currentQuestion.id] === currentQuestion.answer || (currentQuestion.type === 'short_answer' && answers[currentQuestion.id]?.includes((currentQuestion.answer as string).split(' ')[0])) 
                  ? '✓ 정답입니다!' 
                  : `✗ 틀렸습니다. 정답: ${currentQuestion.answer}`}
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', marginTop: '1rem' }}>
                <h4>해설</h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          {submitted ? (
            <>
              <button className="btn btn-secondary" onClick={() => navigate(`/concept/${lessonId}`)} style={{ width: '100%' }}>
                개념 다시 보기
              </button>
              <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%' }}>
                {isLastQuestion ? '결과 보기' : '다음 문제'}
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={() => navigate(`/concept/${lessonId}`)} style={{ width: '100%' }}>
                돌아가기
              </button>
              <button className="btn btn-primary" onClick={handleSubmit} disabled={!answered} style={{ width: '100%', opacity: answered ? 1 : 0.5 }}>
                제출하기
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
