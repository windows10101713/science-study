import { useState } from 'react'
import { ScienceTerm, searchTerms } from '../data/terms'
import { SUBJECTS, GENERAL_SUBJECT, getSubjectMeta } from '../data/subjects'
import '../styles/index.css'

export default function DictionaryPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTerm, setSelectedTerm] = useState<ScienceTerm | null>(null)

  const terms = searchTerms(searchQuery, selectedSubject)
  const allSubjectOptions = [
    { id: 'all', label: '전체 분야', icon: '🌐' },
    ...SUBJECTS,
    GENERAL_SUBJECT,
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>📖 과학 용어 사전</h1>
          <p>모든 과학 분야의 핵심 용어와 개념을 탐색하고 깊이 있게 이해하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 필터 및 검색 */}
        <div className="card">
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>🔍 용어 검색</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="단어명, 영문명, 설명으로 검색 (예: 자석, DNA, 미분, 중력)..."
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>분야 선택</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {allSubjectOptions.map((s) => (
                <button
                  key={s.id}
                  className={`btn ${selectedSubject === s.id ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedSubject(s.id)}
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.9rem' }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 용어 목록 */}
        <div style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}>
          총 <strong>{terms.length}개</strong>의 과학 용어가 검색되었습니다
        </div>

        <div className="class-grid">
          {terms.map((term) => {
            const subjectMeta = getSubjectMeta(term.subject)
            return (
              <div
                key={term.id}
                className="class-card"
                onClick={() => setSelectedTerm(term)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem' }}>{subjectMeta?.icon || '🔬'}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                      background: '#e0e7ff',
                      color: '#4338ca',
                      fontWeight: 600,
                    }}
                  >
                    {term.category}
                  </span>
                </div>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '0.25rem', color: '#333' }}>{term.ko}</h3>
                <p style={{ fontSize: '0.8rem', color: '#667eea', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {term.en}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
                  {term.definition}
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#667eea', fontWeight: 600 }}>
                  상세 해설 보기 →
                </div>
              </div>
            )
          })}
        </div>

        {/* 용어 상세 모달 */}
        {selectedTerm && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '1rem',
            }}
            onClick={() => setSelectedTerm(null)}
          >
            <div
              className="card"
              style={{
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                margin: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#667eea', fontWeight: 600 }}>
                  {getSubjectMeta(selectedTerm.subject)?.icon} {getSubjectMeta(selectedTerm.subject)?.label} · {selectedTerm.category}
                </span>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedTerm(null)}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.85rem' }}
                >
                  ✕ 닫기
                </button>
              </div>

              <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem', color: '#1e1b4b' }}>
                {selectedTerm.ko} <span style={{ fontSize: '1rem', color: '#667eea', fontWeight: 400 }}>({selectedTerm.en})</span>
              </h2>

              <div style={{ padding: '0.9rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem', margin: '1rem 0' }}>
                <strong>📌 기본 정의</strong>
                <p style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{selectedTerm.definition}</p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#4338ca' }}>🔬 심화 설명</strong>
                <p style={{ marginTop: '0.5rem', lineHeight: '1.8', color: '#374151' }}>
                  {selectedTerm.detailedExplanation}
                </p>
              </div>

              {selectedTerm.formulaOrExample && (
                <div style={{ padding: '0.9rem', backgroundColor: '#fff7ed', borderRadius: '0.5rem', borderLeft: '4px solid #f97316' }}>
                  <strong style={{ color: '#c2410c' }}>📐 수식 / 실생활 예시</strong>
                  <p style={{ marginTop: '0.25rem', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    {selectedTerm.formulaOrExample}
                  </p>
                </div>
              )}

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <button className="btn btn-primary" onClick={() => setSelectedTerm(null)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
