import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { logout, getCurrentUser } from '../lib/auth'
import { SUBJECTS, LEVELS } from '../data/subjects'
import '../styles/index.css'

export default function SettingsPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    userPreferences,
    setUserPreference,
    resetProgress,
    exportData,
    importData,
    progress,
    classes,
    sessions,
  } = useLearningStore()

  const user = getCurrentUser()
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [customConceptCount, setCustomConceptCount] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('customConcepts') || '[]').length
    } catch {
      return 0
    }
  })

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleReset = () => {
    if (confirm('모든 학습 진도, 세션, 오답 및 클래스 기록이 초기화됩니다. 정말 진행하시겠습니까?')) {
      resetProgress()
      alert('학습 기록이 성공적으로 초기화되었습니다.')
    }
  }

  const handleClearCustomConcepts = () => {
    if (confirm('직접 작성한 맞춤 개념이 모두 삭제됩니다. 계속하시겠습니까?')) {
      localStorage.removeItem('customConcepts')
      setCustomConceptCount(0)
      alert('맞춤 개념이 삭제되었습니다.')
    }
  }

  const handleExport = () => {
    const dataStr = exportData()
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `science-study-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      const success = importData(content)
      if (success) {
        setImportStatus({ type: 'success', message: '데이터를 성공적으로 복원했습니다!' })
        setCustomConceptCount(JSON.parse(localStorage.getItem('customConcepts') || '[]').length)
      } else {
        setImportStatus({ type: 'error', message: '올바르지 않은 백업 파일 형식입니다.' })
      }
    }
    reader.readAsText(file)
  }

  const storageSizeKB = (() => {
    try {
      let total = 0
      for (let x in localStorage) {
        if (localStorage.hasOwnProperty(x)) {
          total += (localStorage[x].length + x.length) * 2
        }
      }
      return (total / 1024).toFixed(1)
    } catch {
      return '0'
    }
  })()

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>⚙️ 설정 및 환경 관리</h1>
          <p>학습 환경, 화면 테마, 퀴즈 옵션 및 데이터 백업을 설정하세요</p>
        </div>
      </header>

      <main className="container">
        {/* 1. 프로필 & 학습 목표 */}
        <div className="card">
          <h3>👤 프로필 & 기본 학습 목표</h3>
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label>로그인 계정</label>
            <input type="text" value={user || '게스트'} disabled style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }} />
          </div>

          <div className="form-group">
            <label>닉네임 / 학습자 칭호</label>
            <input
              type="text"
              value={userPreferences.nickname || ''}
              onChange={(e) => setUserPreference('nickname', e.target.value)}
              placeholder="학습자 닉네임을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label>일일 학습 목표 시간</label>
            <select
              value={userPreferences.dailyGoalMinutes || 15}
              onChange={(e) => setUserPreference('dailyGoalMinutes', Number(e.target.value))}
            >
              <option value={10}>⏱️ 10분 (가벼운 복습)</option>
              <option value={15}>⏱️ 15분 (표준 습관)</option>
              <option value={30}>⏱️ 30분 (집중 몰입)</option>
              <option value={60}>⏱️ 60분 (마스터 세션)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>기본 선호 과목</label>
              <select
                value={userPreferences.preferredSubject || 'physics'}
                onChange={(e) => setUserPreference('preferredSubject', e.target.value)}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.icon} {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>기본 선호 교육 단계</label>
              <select
                value={userPreferences.preferredLevelCategory || 'middle'}
                onChange={(e) => setUserPreference('preferredLevelCategory', e.target.value)}
              >
                {LEVELS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn btn-secondary" onClick={handleLogout} style={{ marginTop: '0.5rem' }}>
            🔒 계정 로그아웃
          </button>
        </div>

        {/* 2. 화면 & UI 스타일 */}
        <div className="card">
          <h3>🎨 화면 및 테마 설정</h3>

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>🌙 다크 모드</span>
              <input
                type="checkbox"
                checked={userPreferences.darkMode}
                onChange={(e) => setUserPreference('darkMode', e.target.checked)}
                style={{ width: 'auto' }}
              />
            </label>
          </div>

          <div className="form-group">
            <label>글자 크기 (Font Size)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
              {[
                { id: 'normal', label: '보통 (100%)' },
                { id: 'large', label: '크게 (108%)' },
                { id: 'xlarge', label: '매우 크게 (116%)' },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`btn ${userPreferences.fontSize === item.id ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setUserPreference('fontSize', item.id as any)}
                  style={{ fontSize: '0.9rem', padding: '0.5rem' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>테마 포인트 색상 (Accent Color)</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {[
                { id: 'default', label: '🟣 퍼플', bg: '#667eea' },
                { id: 'blue', label: '🔵 블루', bg: '#2563eb' },
                { id: 'green', label: '🟢 그린', bg: '#059669' },
                { id: 'orange', label: '🟠 오렌지', bg: '#ea580c' },
              ].map((c) => (
                <button
                  key={c.id}
                  className="btn"
                  onClick={() => setUserPreference('accentColor', c.id as any)}
                  style={{
                    backgroundColor: userPreferences.accentColor === c.id ? c.bg : '#f3f4f6',
                    color: userPreferences.accentColor === c.id ? 'white' : '#374151',
                    fontSize: '0.85rem',
                    padding: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>⚡ 애니메이션 / 모션 효과 감축</span>
              <input
                type="checkbox"
                checked={userPreferences.reduceMotion}
                onChange={(e) => setUserPreference('reduceMotion', e.target.checked)}
                style={{ width: 'auto' }}
              />
            </label>
          </div>
        </div>

        {/* 3. 학습 & 문제풀이 방침 */}
        <div className="card">
          <h3>❓ 퀴즈 & 평가 방식 설정</h3>

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label>세션 당 출제 문제 수</label>
            <select
              value={userPreferences.questionsPerQuiz || 6}
              onChange={(e) => setUserPreference('questionsPerQuiz', Number(e.target.value))}
            >
              <option value={3}>3문제 (스피드 풀이)</option>
              <option value={4}>4문제 (기본)</option>
              <option value={6}>6문제 (표준 학습)</option>
              <option value={8}>8문제 (심화 검증)</option>
              <option value={10}>10문제 (실전 마스터)</option>
            </select>
          </div>

          <div className="form-group">
            <label>서술형 채점 모드</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button
                className={`btn ${userPreferences.gradingStrictness === 'lenient' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setUserPreference('gradingStrictness', 'lenient')}
              >
                🌱 관대함 (키워드/수치 오차 인정)
              </button>
              <button
                className={`btn ${userPreferences.gradingStrictness === 'strict' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setUserPreference('gradingStrictness', 'strict')}
              >
                🎯 엄격함 (정확한 문장/값 일치)
              </button>
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>💡 제출 직후 해설 자동 표시</span>
              <input
                type="checkbox"
                checked={userPreferences.immediateExplanation !== false}
                onChange={(e) => setUserPreference('immediateExplanation', e.target.checked)}
                style={{ width: 'auto' }}
              />
            </label>
          </div>
        </div>

        {/* 4. 데이터 현황 및 내보내기/가져오기 */}
        <div className="card">
          <h3>💾 학습 데이터 현황 및 백업</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', margin: '1rem 0' }}>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#667eea' }}>{progress.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>완료 개념 수</div>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#667eea' }}>{classes.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>내 레슨 클래스</div>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#667eea' }}>{sessions.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>누적 풀이 세션</div>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#667eea' }}>{customConceptCount}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>맞춤 정리 개념</div>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#667eea' }}>{storageSizeKB} KB</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>로컬 저장소 용량</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={handleExport} style={{ width: '100%' }}>
              📥 백업 파일 다운로드 (JSON)
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => fileInputRef.current?.click()}
              style={{ width: '100%' }}
            >
              📤 백업 파일 복원 (JSON)
            </button>
            <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          {importStatus && (
            <div
              className={`feedback ${importStatus.type === 'success' ? 'correct' : 'incorrect'}`}
              style={{ marginTop: '1rem' }}
            >
              {importStatus.message}
            </div>
          )}
        </div>

        {/* 5. 위험 구역 */}
        <div className="card" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
          <h3 style={{ color: '#ef4444' }}>🚨 위험 구역</h3>
          <p style={{ fontSize: '0.9rem', color: '#991b1b', marginTop: '0.25rem' }}>
            저장된 모든 진도, 오답 노트, 사용자 맞춤 개념 데이터를 관리할 수 있습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <button className="btn btn-secondary" onClick={handleClearCustomConcepts} style={{ color: '#dc2626' }}>
              📌 내가 만든 개념만 삭제
            </button>
            <button className="btn btn-secondary" onClick={handleReset} style={{ color: '#dc2626', fontWeight: 600 }}>
              🗑 전체 학습 데이터 초기화
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
