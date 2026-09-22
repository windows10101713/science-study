import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById } from '../data/library'
import { getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function LibraryBookPage() {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const book = bookId ? getBookById(bookId) : undefined
  const [chapterIdx, setChapterIdx] = useState(0)

  if (!book) {
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>도서를 찾을 수 없습니다</h1>
          </div>
        </header>
        <main className="container">
          <button className="btn btn-primary" onClick={() => navigate('/library')}>도서관으로</button>
        </main>
      </div>
    )
  }

  const subject = getSubjectMeta(book.subject)
  const chapter = book.chapters[chapterIdx]
  const isFirst = chapterIdx === 0
  const isLast = chapterIdx === book.chapters.length - 1

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>{subject?.icon || '📗'} {book.title}</h1>
          <p>{book.author} · {chapter.title}</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>📑 목차</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {book.chapters.map((c, idx) => (
              <button
                key={idx}
                className={`btn ${idx === chapterIdx ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setChapterIdx(idx)}
                style={{ width: '100%', textAlign: 'left' }}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>{chapter.title}</h3>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            {chapter.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>{paragraph}</p>
            ))}
          </div>

          {chapter.learningGoals && (
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eef2ff', borderRadius: '0.6rem' }}>
              <h4 style={{ color: '#3730a3' }}>🎯 이 장에서 배우는 것</h4>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                {chapter.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}
              </ul>
            </div>
          )}

          {chapter.keyTerms && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '0.6rem' }}>
              <h4 style={{ color: '#047857' }}>🔤 핵심 용어</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.6rem' }}>
                {chapter.keyTerms.map((term) => <span key={term} style={{ padding: '0.3rem 0.55rem', borderRadius: '999px', background: 'white', color: '#047857', fontSize: '0.85rem' }}>{term}</span>)}
              </div>
            </div>
          )}

          {chapter.formulas && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff7ed', borderLeft: '4px solid #f97316', borderRadius: '0.4rem' }}>
              <h4 style={{ color: '#c2410c' }}>📐 수식과 계산 기준</h4>
              <div style={{ display: 'grid', gap: '0.35rem', marginTop: '0.5rem' }}>
                {chapter.formulas.map((formula) => <code key={formula} style={{ color: '#7c2d12', whiteSpace: 'pre-wrap' }}>{formula}</code>)}
              </div>
            </div>
          )}

          {chapter.workedExample && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.6rem' }}>
              <h4 style={{ color: '#334155' }}>🧮 풀이 예제</h4>
              <p style={{ marginTop: '0.5rem', lineHeight: '1.7', color: '#475569' }}>{chapter.workedExample}</p>
            </div>
          )}

          {chapter.practiceQuestions && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#fdf4ff', borderRadius: '0.6rem' }}>
              <h4 style={{ color: '#86198f' }}>✍️ 스스로 풀어보기</h4>
              <ol style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: '1.8', color: '#701a75' }}>
                {chapter.practiceQuestions.map((question) => <li key={question}>{question}</li>)}
              </ol>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            className="btn btn-secondary"
            onClick={() => setChapterIdx((i) => Math.max(0, i - 1))}
            disabled={isFirst}
            style={{ width: '100%', opacity: isFirst ? 0.5 : 1 }}
          >
            ← 이전 장
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setChapterIdx((i) => Math.min(book.chapters.length - 1, i + 1))}
            disabled={isLast}
            style={{ width: '100%', opacity: isLast ? 0.5 : 1 }}
          >
            다음 장 →
          </button>
        </div>

        <button className="btn btn-secondary" onClick={() => navigate('/library')} style={{ width: '100%', marginTop: '1rem' }}>
          📚 도서관으로 돌아가기
        </button>
      </main>
    </div>
  )
}
