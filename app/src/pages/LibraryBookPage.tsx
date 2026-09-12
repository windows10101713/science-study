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
