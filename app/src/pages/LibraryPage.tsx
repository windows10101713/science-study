import { useNavigate } from 'react-router-dom'
import { LIBRARY_BOOKS } from '../data/library'
import { getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function LibraryPage() {
  const navigate = useNavigate()

  const grouped = LIBRARY_BOOKS.reduce<Record<string, typeof LIBRARY_BOOKS>>((acc, book) => {
    acc[book.subject] = acc[book.subject] ? [...acc[book.subject], book] : [book]
    return acc
  }, {})

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📖 도서관</h1>
          <p>분야별 심화 도서로 이론을 깊이 있게 학습해보세요</p>
        </div>
      </header>

      <main className="container">
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          총 {LIBRARY_BOOKS.length}권의 도서, {LIBRARY_BOOKS.reduce((sum, b) => sum + b.chapters.length, 0)}개의 챕터
        </p>

        {Object.entries(grouped).map(([subjectId, books]) => {
          const subject = getSubjectMeta(subjectId)
          return (
            <div key={subjectId} style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
                {subject?.icon || '📘'} {subject?.label || '일반 과학'}
              </h3>
              <div className="class-grid">
                {books.map((book) => (
                  <div key={book.id} className="class-card" onClick={() => navigate(`/library/${book.id}`)}>
                    <div className="class-icon">📗</div>
                    <strong>{book.title}</strong>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.25rem' }}>{book.author}</p>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>{book.description}</p>
                    <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>
                      총 {book.chapters.length}장
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
