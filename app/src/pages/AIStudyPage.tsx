import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { remoteRequest } from '../lib/remote'
import { useLearningStore } from '../lib/store'
import { SUBJECTS, LEVELS } from '../data/subjects'
import { LIBRARY_BOOKS } from '../data/library'
import '../styles/index.css'

interface ArtifactResponse { artifact?: { id: string; content: any; createdAt: string }; reused?: boolean; error?: string }

export default function AIStudyPage() {
  const [searchParams] = useSearchParams()
  const { userPreferences } = useLearningStore()
  const [survey, setSurvey] = useState('과학 개념을 읽고 문제를 풀 때 가장 어려운 점과 관심 분야를 적어주세요.')
  const [topic, setTopic] = useState('힘과 운동')
  const [subject, setSubject] = useState(userPreferences.preferredSubject || 'physics')
  const [level, setLevel] = useState(userPreferences.level || 'curriculum')
  const [answers, setAnswers] = useState(['', '', ''])
  const [assessment, setAssessment] = useState<any>(null)
  const [quiz, setQuiz] = useState<any>(null)
  const [book, setBook] = useState<any>(null)
  const [busy, setBusy] = useState<'assessment' | 'quiz' | 'book' | null>(null)
  const [error, setError] = useState('')
  const mode = searchParams.get('mode')
  useEffect(() => {
    if (mode) document.getElementById(`ai-${mode}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [mode])
  const relatedBooks = LIBRARY_BOOKS.filter((book) => book.subject === subject).slice(0, 5).map((book) => ({ title: book.title, description: book.description, chapters: book.chapters.slice(0, 3).map((chapter) => chapter.title) }))

  const callAI = async (kind: 'assessment' | 'quiz' | 'book') => {
    setBusy(kind); setError('')
    const payload = kind === 'assessment'
      ? { survey, answers }
      : kind === 'quiz'
        ? { topic, subject, level, count: userPreferences.aiQuestionCount || 6, profileArtifactId: assessment?.id, relatedBooks }
        : { title: `${topic} 완전 정복`, subject, audience: level, pages: userPreferences.aiBookPages || 8, includeCode: userPreferences.aiIncludeCode, includeFormulas: userPreferences.aiIncludeFormulas, includeLinks: userPreferences.aiIncludeLinks, relatedBooks }
    const result = await remoteRequest<ArtifactResponse>(`/ai/${kind}`, { method: 'POST', body: JSON.stringify(payload) })
    setBusy(null)
    if (!result.ok || !result.data) {
      setError(result.data?.error || 'AI API에 연결할 수 없습니다. Azure Functions와 AI 설정을 확인하세요.')
      return
    }
    if (!result.data.artifact) { setError(result.data.error || 'AI 결과가 비어 있습니다.'); return }
    if (kind === 'assessment') setAssessment(result.data.artifact)
    if (kind === 'quiz') setQuiz(result.data.artifact)
    if (kind === 'book') setBook(result.data.artifact)
  }

  return (
    <div className="app">
      <header className="header"><div className="container"><h1>🤖 AI 개인 학습실</h1><p>진단 결과를 바탕으로 고정된 문제 세트와 맞춤형 책을 생성합니다.</p></div></header>
      <main className="container">
        {!userPreferences.aiEnabled && <div className="feedback incorrect">설정에서 AI 학습을 켜야 합니다.</div>}
        <div className="card" id="ai-assessment">
          <h3>1. 수준 진단</h3>
          <p>설문과 진단 문제는 AI 판단의 입력입니다. 생성된 진단 결과는 artifact로 저장되어 같은 입력에서 바뀌지 않습니다.</p>
          <textarea value={survey} onChange={(e) => setSurvey(e.target.value)} style={{ width: '100%', minHeight: 90, marginTop: 12 }} />
          {answers.map((answer, index) => <input key={index} value={answer} onChange={(e) => setAnswers((old) => old.map((v, i) => i === index ? e.target.value : v))} placeholder={`진단 문제 ${index + 1}의 답`} style={{ width: '100%', marginTop: 8 }} />)}
          <button className="btn btn-primary" disabled={busy !== null || !userPreferences.aiEnabled} onClick={() => callAI('assessment')} style={{ marginTop: 12 }}>{busy === 'assessment' ? '진단 중...' : 'AI 수준 판정하기'}</button>
          {assessment && <div className="feedback correct" style={{ marginTop: 12 }}><strong>진단 결과 · {assessment.content.level}</strong><p>{assessment.content.explanation}</p><small>artifact: {assessment.id} · 생성일: {assessment.createdAt}</small></div>}
        </div>

        <div className="card" id="ai-lesson">
          <h3>2. AI 문제 생성</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>{SUBJECTS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select>
            <select value={level} onChange={(e) => setLevel(e.target.value as typeof level)}>{LEVELS.map((item) => <option key={item.conceptLevel} value={item.conceptLevel}>{item.label}</option>)}</select>
          </div>
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="주제" style={{ width: '100%', marginTop: 12 }} />
          <button className="btn btn-primary" disabled={busy !== null || !userPreferences.aiEnabled} onClick={() => callAI('quiz')} style={{ marginTop: 12 }}>{busy === 'quiz' ? '문제 작성 중...' : '고정 문제 세트 만들기'}</button>
          {quiz && <div className="card" style={{ marginTop: 12, background: '#f8fafc' }}><h4>{quiz.content.title}</h4>{quiz.content.questions?.map((question: any, index: number) => <div key={question.id || index} style={{ marginTop: 12 }}><strong>{index + 1}. {question.question}</strong><p>{question.explanation}</p></div>)}<small>한 번 생성된 artifact는 같은 입력으로 재생성하지 않습니다.</small></div>}
        </div>

        <div className="card" id="ai-book">
          <h3>3. AI 책 작성실</h3>
          <p>AI가 페이지를 나누고 본문, 수식, 코드, 링크, 연습문제를 구조화합니다. 생성 중 창이 아니라 저장 가능한 책 artifact로 남깁니다.</p>
          <button className="btn btn-primary" disabled={busy !== null || !userPreferences.aiEnabled} onClick={() => callAI('book')}>{busy === 'book' ? '책 작성 중...' : '맞춤 책 작성 시작'}</button>
          {book && <div className="card" style={{ marginTop: 12, background: '#fff7ed' }}><h4>{book.content.title}</h4><p>{book.content.subtitle}</p>{book.content.pages?.map((page: any) => <article key={page.pageNumber} style={{ marginTop: 16 }}><h5>{page.pageNumber}. {page.heading}</h5>{page.paragraphs?.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}{page.formulas?.map((formula: string) => <code key={formula} style={{ display: 'block' }}>{formula}</code>)}{page.code && <pre style={{ overflowX: 'auto' }}>{page.code}</pre>}{page.links?.map((link: string) => <a key={link} href={link} target="_blank" rel="noreferrer" style={{ display: 'block' }}>{link}</a>)}</article>)}<small>artifact: {book.id} · 이 책은 수정하지 않고 버전으로 보존됩니다.</small></div>}
        </div>
        {error && <div className="feedback incorrect">{error}</div>}
      </main>
    </div>
  )
}
