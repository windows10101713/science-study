import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LIBRARY_BOOKS } from '../data/library'
import { GENERAL_SUBJECT, getSubjectMeta, SUBJECTS } from '../data/subjects'
import '../styles/index.css'

export default function LibraryPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')

  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return LIBRARY_BOOKS.filter((book) => {
      if (selectedSubject !== 'all' && book.subject !== selectedSubject) return false
      if (!query) return true
      return [book.title, book.description, book.author, ...book.chapters.map((chapter) => `${chapter.title} ${chapter.content}`)]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
  }, [searchQuery, selectedSubject])

  const grouped = filteredBooks.reduce<Record<string, typeof LIBRARY_BOOKS>>((acc, book) => {
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
          총 {LIBRARY_BOOKS.length}권의 도서, {LIBRARY_BOOKS.reduce((sum, b) => sum + b.chapters.length, 0)}개의 챕터 · 현재 {filteredBooks.length}권 표시
        </p>

        <div className="card">
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>🔍 도서 제목·설명·챕터 검색</label>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="예: Python, Wi-Fi, 광학, 유전, 회귀분석..."
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {[{ id: 'all', label: '🌐 전체 분야' }, GENERAL_SUBJECT, ...SUBJECTS].map((subject) => (
              <button
                key={subject.id}
                className={`btn ${selectedSubject === subject.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedSubject(subject.id)}
                style={{ padding: '0.4rem 0.65rem', fontSize: '0.8rem' }}
              >
                {'icon' in subject ? `${subject.icon} ${subject.label}` : subject.label}
              </button>
            ))}
          </div>
        </div>

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

        {filteredBooks.length === 0 && (
          <div className="card empty-state">
            <div className="empty-icon">📭</div>
            <h3>검색 결과가 없습니다</h3>
            <p style={{ color: '#64748b' }}>다른 제목, 분야 또는 챕터 키워드를 검색해 보세요.</p>
          </div>
        )}
      </main>
    </div>
  )
}
