import { useState, useRef, useEffect } from 'react'
import { ALL_ELEMENTS, PeriodicElement } from '../data/elements'
import '../styles/index.css'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'table' | 'calculator' | 'simulation'>('table')

  // === 주기율표 상태 ===
  const [selectedElement, setSelectedElement] = useState<PeriodicElement | null>(ALL_ELEMENTS[0])
  const [elementCategoryFilter, setElementCategoryFilter] = useState<string>('all')
  const [elementSearchQuery, setElementSearchQuery] = useState<string>('')

  // === 계산기 상태 ===
  const [calcType, setCalcType] = useState<'force' | 'molarity' | 'ohm' | 'energy' | 'ph' | 'gas' | 'snell' | 'halflife' | 'centraldogma'>('force')

  // 1. Force: F = m * a
  const [mass, setMass] = useState<number>(10)
  const [accel, setAccel] = useState<number>(9.8)

  // 2. Molarity: M = mol / L
  const [moles, setMoles] = useState<number>(0.5)
  const [volumeL, setVolumeL] = useState<number>(2)

  // 3. Ohm: V = I * R
  const [currentI, setCurrentI] = useState<number>(2)
  const [resistanceR, setResistanceR] = useState<number>(5)

  // 4. Energy: KE = 1/2 m v^2, PE = m g h
  const [objMass, setObjMass] = useState<number>(5)
  const [objVelocity, setObjVelocity] = useState<number>(10)
  const [objHeight, setObjHeight] = useState<number>(20)

  // 5. pH: pH = -log10[H+]
  const [hConc, setHConc] = useState<number>(0.001)

  // 6. Ideal Gas: PV = nRT -> P = nRT/V
  const [gasN, setGasN] = useState<number>(1) // mol
  const [gasT, setGasT] = useState<number>(298.15) // K (25°C)
  const [gasV, setGasV] = useState<number>(22.4) // L

  // 7. Snell's Law: n1 * sin(θ1) = n2 * sin(θ2)
  const [n1, setN1] = useState<number>(1.0) // 공기
  const [n2, setN2] = useState<number>(1.33) // 물
  const [theta1, setTheta1] = useState<number>(30) // 입사각

  // 8. Half-Life: N(t) = N0 * (1/2)^(t / T_half)
  const [n0, setN0] = useState<number>(1000)
  const [tHalf, setTHalf] = useState<number>(5730) // C-14 반감기
  const [elapsedT, setElapsedT] = useState<number>(11460)

  // 9. Central Dogma: DNA -> RNA -> Amino Acid
  const [dnaSeq, setDnaSeq] = useState<string>('TACGTTCAACTG')

  // === 시뮬레이터 상태 ===
  const [simType, setSimType] = useState<'projectile' | 'atom' | 'wave' | 'pendulum'>('projectile')

  // 1) 포물선 시뮬레이터
  const [v0, setV0] = useState<number>(50)
  const [angle, setAngle] = useState<number>(45)
  const projCanvasRef = useRef<HTMLCanvasElement>(null)

  // 2) 원자 모형 시뮬레이터
  const [atomZ, setAtomZ] = useState<number>(6)
  const atomCanvasRef = useRef<HTMLCanvasElement>(null)

  // 3) 파동 간섭 시뮬레이터
  const [waveFreq, setWaveFreq] = useState<number>(2)
  const [waveDist, setWaveDist] = useState<number>(40)
  const waveCanvasRef = useRef<HTMLCanvasElement>(null)

  // 4) 단진자 운동 시뮬레이터
  const [pendulumL, setPendulumL] = useState<number>(1.5) // m
  const [pendulumMaxAngle, setPendulumMaxAngle] = useState<number>(30) // deg
  const pendulumCanvasRef = useRef<HTMLCanvasElement>(null)

  // --- 1. 포물선 시뮬레이터 Canvas 애니메이션 ---
  useEffect(() => {
    if (simType !== 'projectile' || !projCanvasRef.current) return
    const canvas = projCanvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0
    const g = 9.8
    const rad = (angle * Math.PI) / 180
    const vx = v0 * Math.cos(rad)
    const vy = v0 * Math.sin(rad)
    const totalT = (2 * vy) / g
    const maxH = (vy * vy) / (2 * g)
    const maxR = vx * totalT

    const scaleX = (canvas.width - 60) / Math.max(maxR, 10)
    const scaleY = (canvas.height - 60) / Math.max(maxH * 1.3, 10)
    const scale = Math.min(scaleX, scaleY)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 바닥선
      ctx.beginPath()
      ctx.moveTo(30, canvas.height - 30)
      ctx.lineTo(canvas.width - 30, canvas.height - 30)
      ctx.strokeStyle = '#94a3b8'
      ctx.lineWidth = 2
      ctx.stroke()

      // 궤적
      ctx.beginPath()
      ctx.setLineDash([4, 4])
      ctx.strokeStyle = '#cbd5e1'
      for (let stepT = 0; stepT <= totalT; stepT += totalT / 100) {
        const x = vx * stepT
        const y = vy * stepT - 0.5 * g * stepT * stepT
        const cx = 30 + x * scale
        const cy = canvas.height - 30 - y * scale
        if (stepT === 0) ctx.moveTo(cx, cy)
        else ctx.lineTo(cx, cy)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // 현 위치
      const currentX = vx * t
      const currentY = vy * t - 0.5 * g * t * t
      const cx = 30 + currentX * scale
      const cy = canvas.height - 30 - currentY * scale

      ctx.beginPath()
      ctx.arc(cx, cy, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#667eea'
      ctx.fill()
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.stroke()

      t += 0.04
      if (t > totalT) t = 0
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [simType, v0, angle])

  // --- 2. 원자 모형 시뮬레이터 Canvas 애니메이션 ---
  useEffect(() => {
    if (simType !== 'atom' || !atomCanvasRef.current) return
    const canvas = atomCanvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let angleRad = 0

    // 전자 배치: K(2), L(8), M(8)
    const kCount = Math.min(atomZ, 2)
    const lCount = Math.min(Math.max(0, atomZ - 2), 8)
    const mCount = Math.min(Math.max(0, atomZ - 10), 8)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      // 1. 원자핵
      ctx.beginPath()
      ctx.arc(cx, cy, 18, 0, Math.PI * 2)
      ctx.fillStyle = '#ef4444'
      ctx.fill()
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${atomZ}+`, cx, cy)

      // 2. K 껍질 (반지름 50)
      if (kCount > 0) {
        ctx.beginPath()
        ctx.arc(cx, cy, 50, 0, Math.PI * 2)
        ctx.strokeStyle = '#e2e8f0'
        ctx.lineWidth = 1.5
        ctx.stroke()

        for (let i = 0; i < kCount; i++) {
          const a = angleRad + (i * Math.PI * 2) / kCount
          const ex = cx + 50 * Math.cos(a)
          const ey = cy + 50 * Math.sin(a)
          ctx.beginPath()
          ctx.arc(ex, ey, 5, 0, Math.PI * 2)
          ctx.fillStyle = '#2563eb'
          ctx.fill()
        }
      }

      // 3. L 껍질 (반지름 90)
      if (lCount > 0) {
        ctx.beginPath()
        ctx.arc(cx, cy, 90, 0, Math.PI * 2)
        ctx.strokeStyle = '#cbd5e1'
        ctx.lineWidth = 1.5
        ctx.stroke()

        for (let i = 0; i < lCount; i++) {
          const a = -angleRad * 0.7 + (i * Math.PI * 2) / lCount
          const ex = cx + 90 * Math.cos(a)
          const ey = cy + 90 * Math.sin(a)
          ctx.beginPath()
          ctx.arc(ex, ey, 5, 0, Math.PI * 2)
          ctx.fillStyle = '#10b981'
          ctx.fill()
        }
      }

      // 4. M 껍질 (반지름 130)
      if (mCount > 0) {
        ctx.beginPath()
        ctx.arc(cx, cy, 130, 0, Math.PI * 2)
        ctx.strokeStyle = '#94a3b8'
        ctx.lineWidth = 1.5
        ctx.stroke()

        for (let i = 0; i < mCount; i++) {
          const a = angleRad * 0.5 + (i * Math.PI * 2) / mCount
          const ex = cx + 130 * Math.cos(a)
          const ey = cy + 130 * Math.sin(a)
          ctx.beginPath()
          ctx.arc(ex, ey, 5, 0, Math.PI * 2)
          ctx.fillStyle = '#f59e0b'
          ctx.fill()
        }
      }

      angleRad += 0.03
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [simType, atomZ])

  // --- 3. 파동 간섭 시뮬레이터 Canvas ---
  useEffect(() => {
    if (simType !== 'wave' || !waveCanvasRef.current) return
    const canvas = waveCanvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const s1x = canvas.width / 2 - waveDist
    const s1y = canvas.height / 2
    const s2x = canvas.width / 2 + waveDist
    const s2y = canvas.height / 2

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 파원 동심원 그리기
      for (let r = (time * 20) % 25; r < canvas.width / 2; r += 25) {
        ctx.beginPath()
        ctx.arc(s1x, s1y, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(99, 102, 241, ${Math.max(0, 1 - r / (canvas.width / 2))})`
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(s2x, s2y, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(16, 185, 129, ${Math.max(0, 1 - r / (canvas.width / 2))})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // 파원 위치 표시
      ctx.beginPath()
      ctx.arc(s1x, s1y, 7, 0, Math.PI * 2)
      ctx.fillStyle = '#6366f1'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(s2x, s2y, 7, 0, Math.PI * 2)
      ctx.fillStyle = '#10b981'
      ctx.fill()

      time += 0.05 * waveFreq
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [simType, waveFreq, waveDist])

  // --- 4. 단진자 시뮬레이터 Canvas ---
  useEffect(() => {
    if (simType !== 'pendulum' || !pendulumCanvasRef.current) return
    const canvas = pendulumCanvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0
    const g = 9.8
    const omega = Math.sqrt(g / Math.max(0.1, pendulumL))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = 40

      const maxRad = (pendulumMaxAngle * Math.PI) / 180
      const theta = maxRad * Math.cos(omega * time)

      const lengthPx = Math.min(180, pendulumL * 90)
      const bx = cx + lengthPx * Math.sin(theta)
      const by = cy + lengthPx * Math.cos(theta)

      // 천장
      ctx.beginPath()
      ctx.moveTo(cx - 50, cy)
      ctx.lineTo(cx + 50, cy)
      ctx.strokeStyle = '#475569'
      ctx.lineWidth = 4
      ctx.stroke()

      // 실
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(bx, by)
      ctx.strokeStyle = '#64748b'
      ctx.lineWidth = 2
      ctx.stroke()

      // 추
      ctx.beginPath()
      ctx.arc(bx, by, 16, 0, Math.PI * 2)
      ctx.fillStyle = '#6366f1'
      ctx.fill()
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.stroke()

      // 주기 표시
      const periodT = (2 * Math.PI * Math.sqrt(pendulumL / g)).toFixed(2)
      ctx.fillStyle = '#1e293b'
      ctx.font = 'bold 13px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`이론 주기 T = 2π√(L/g) = ${periodT}초`, cx, canvas.height - 20)

      time += 0.03
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [simType, pendulumL, pendulumMaxAngle])

  // 원소 필터링
  const filteredElements = ALL_ELEMENTS.filter((elem) => {
    if (elementCategoryFilter !== 'all' && elem.category !== elementCategoryFilter) return false
    if (elementSearchQuery.trim()) {
      const q = elementSearchQuery.trim().toLowerCase()
      const matchName = elem.name.toLowerCase().includes(q)
      const matchSymbol = elem.symbol.toLowerCase().includes(q)
      const matchNum = String(elem.number) === q
      if (!matchName && !matchSymbol && !matchNum) return false
    }
    return true
  })

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🛠️ 과학 실험실 & 종합 탐구 도구함</h1>
          <p>118개 전체 원소 주기율표, 9종 고급 과학 계산기 및 4종 HTML5 Canvas 시뮬레이터</p>
        </div>
      </header>

      <main className="container">
        {/* 도구 분류 탭 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <button
            className={`btn ${activeTab === 'table' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('table')}
          >
            🧪 118개 원소 주기율표
          </button>
          <button
            className={`btn ${activeTab === 'calculator' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('calculator')}
          >
            📐 과학 통합 계산기 (9종)
          </button>
          <button
            className={`btn ${activeTab === 'simulation' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('simulation')}
          >
            🔮 물리/화학/생물 시뮬레이터 (4종)
          </button>
        </div>

        {/* 탭 1: 인터랙티브 주기율표 (1~118번) */}
        {activeTab === 'table' && (
          <div>
            <div className="card">
              <h3>🧪 원소 주기율표 (1~118번 전체)</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
                검색창에 원소 이름이나 기호를 입력하거나 카테고리별로 필터링해 상세 정보를 확인하세요.
              </p>

              {/* 검색 및 카테고리 필터 */}
              <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  value={elementSearchQuery}
                  onChange={(e) => setElementSearchQuery(e.target.value)}
                  placeholder="원소명, 원소기호 또는 원자번호 검색 (예: 금, Au, 79)..."
                  style={{ padding: '0.6rem 0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {[
                    { id: 'all', label: '전체 (118개)' },
                    { id: '비금속', label: '비금속' },
                    { id: '알칼리금속', label: '알칼리금속' },
                    { id: '알칼리토금속', label: '알칼리토금속' },
                    { id: '전이금속', label: '전이금속' },
                    { id: '전이후금속', label: '전이후금속' },
                    { id: '준금속', label: '준금속' },
                    { id: '할로젠', label: '할로젠' },
                    { id: '비활성기체', label: '비활성기체' },
                    { id: '란타넘족', label: '란타넘족' },
                    { id: '악티늄족', label: '악티늄족' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn ${elementCategoryFilter === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setElementCategoryFilter(cat.id)}
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem' }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 118개 원소 그리드 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))', gap: '0.4rem', maxHeight: '420px', overflowY: 'auto', padding: '0.25rem' }}>
                {filteredElements.map((elem) => (
                  <button
                    key={elem.number}
                    onClick={() => setSelectedElement(elem)}
                    style={{
                      padding: '0.4rem 0.2rem',
                      borderRadius: '0.4rem',
                      border: selectedElement?.number === elem.number ? '2.5px solid #4338ca' : '1px solid #cbd5e1',
                      backgroundColor:
                        selectedElement?.number === elem.number
                          ? '#c7d2fd'
                          : elem.category === '비금속'
                          ? '#dcfce7'
                          : elem.category === '알칼리금속'
                          ? '#fee2e2'
                          : elem.category === '알칼리토금속'
                          ? '#ffedd5'
                          : elem.category === '전이금속'
                          ? '#e0f2fe'
                          : elem.category === '전이후금속'
                          ? '#f1f5f9'
                          : elem.category === '준금속'
                          ? '#fef9c3'
                          : elem.category === '할로젠'
                          ? '#fce7f3'
                          : elem.category === '비활성기체'
                          ? '#f3e8ff'
                          : '#fae8ff',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>{elem.number}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0f172a' }}>{elem.symbol}</div>
                    <div style={{ fontSize: '0.65rem', color: '#334155', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {elem.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 원소 상세 정보 카드 */}
            {selectedElement && (
              <div className="card" style={{ backgroundColor: '#f8fafc', borderLeft: '5px solid #4338ca' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h2 style={{ color: '#1e1b4b', margin: 0 }}>
                      [{selectedElement.number}] {selectedElement.name} ({selectedElement.symbol})
                    </h2>
                    <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      분류: {selectedElement.category} · {selectedElement.period}주기 {selectedElement.group}족
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4338ca' }}>
                      {selectedElement.mass} g/mol
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>원자량</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: '#475569' }}>⚡ 전자 배치 (Electron Config)</strong>
                    <p style={{ fontFamily: 'monospace', fontSize: '1rem', marginTop: '0.25rem', color: '#1e293b' }}>
                      {selectedElement.electronConfig}
                    </p>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: '#475569' }}>💡 원소 특징 및 용도</strong>
                    <p style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: '#334155', lineHeight: '1.5' }}>
                      {selectedElement.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 탭 2: 과학 통합 계산기 (9종) */}
        {activeTab === 'calculator' && (
          <div>
            <div className="card">
              <h3>📐 정밀 과학 공식 계산기 (9종)</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1rem' }}>
                {[
                  { id: 'force', label: '1. F=ma' },
                  { id: 'molarity', label: '2. M=mol/L' },
                  { id: 'ohm', label: '3. V=IR' },
                  { id: 'energy', label: '4. KE/PE' },
                  { id: 'ph', label: '5. pH' },
                  { id: 'gas', label: '6. PV=nRT (이상기체)' },
                  { id: 'snell', label: '7. 스넬 굴절법칙' },
                  { id: 'halflife', label: '8. 반감기 N(t)' },
                  { id: 'centraldogma', label: '9. DNA전사·번역' },
                ].map((c) => (
                  <button
                    key={c.id}
                    className={`btn ${calcType === c.id ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setCalcType(c.id as any)}
                    style={{ padding: '0.35rem 0.7rem', fontSize: '0.85rem' }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 계산기 1: F=ma */}
            {calcType === 'force' && (
              <div className="card">
                <h4>⚛️ F = m × a (힘과 가속도 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>질량 m (kg)</label>
                    <input type="number" value={mass} onChange={(e) => setMass(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>가속도 a (m/s²)</label>
                    <input type="number" value={accel} onChange={(e) => setAccel(Number(e.target.value))} />
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem', textAlign: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>작용하는 알짜힘 (F)</span>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4338ca' }}>
                    {(mass * accel).toFixed(2)} N (뉴턴)
                  </div>
                </div>
              </div>
            )}

            {/* 계산기 2: 몰농도 */}
            {calcType === 'molarity' && (
              <div className="card">
                <h4>🧪 M = mol / L (몰 농도 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>용질의 양 (mol)</label>
                    <input type="number" step="0.1" value={moles} onChange={(e) => setMoles(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>용액 부피 V (L)</label>
                    <input type="number" step="0.1" value={volumeL} onChange={(e) => setVolumeL(Number(e.target.value))} />
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', textAlign: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#047857' }}>몰 농도 (M)</span>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>
                    {volumeL > 0 ? (moles / volumeL).toFixed(3) : 0} M (mol/L)
                  </div>
                </div>
              </div>
            )}

            {/* 계산기 3: 옴의 법칙 */}
            {calcType === 'ohm' && (
              <div className="card">
                <h4>⚡ V = I × R (옴의 법칙 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>전류 I (A - 암페어)</label>
                    <input type="number" step="0.1" value={currentI} onChange={(e) => setCurrentI(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>저항 R (Ω - 옴)</label>
                    <input type="number" step="0.1" value={resistanceR} onChange={(e) => setResistanceR(Number(e.target.value))} />
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', textAlign: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#b45309' }}>전압 (V)</span>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d97706' }}>
                    {(currentI * resistanceR).toFixed(2)} V (볼트)
                  </div>
                </div>
              </div>
            )}

            {/* 계산기 4: 역학적 에너지 */}
            {calcType === 'energy' && (
              <div className="card">
                <h4>🏃 KE = ½mv², PE = mgh (역학적 에너지 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>질량 m (kg)</label>
                    <input type="number" value={objMass} onChange={(e) => setObjMass(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>속도 v (m/s)</label>
                    <input type="number" value={objVelocity} onChange={(e) => setObjVelocity(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>높이 h (m)</label>
                    <input type="number" value={objHeight} onChange={(e) => setObjHeight(Number(e.target.value))} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ padding: '0.85rem', backgroundColor: '#f0f4ff', borderRadius: '0.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>운동에너지 (KE)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4338ca' }}>
                      {(0.5 * objMass * objVelocity * objVelocity).toFixed(1)} J
                    </div>
                  </div>
                  <div style={{ padding: '0.85rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#047857' }}>중력 위치에너지 (PE)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>
                      {(objMass * 9.8 * objHeight).toFixed(1)} J
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 계산기 5: pH 지수 */}
            {calcType === 'ph' && (
              <div className="card">
                <h4>🧪 pH = -log₁₀[H⁺] (수소이온 농도 계산기)</h4>
                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label>수소이온 농도 [H⁺] (mol/L)</label>
                  <input
                    type="number"
                    step="0.00001"
                    value={hConc}
                    onChange={(e) => setHConc(Math.max(0.00000000000001, Number(e.target.value)))}
                  />
                </div>
                {(() => {
                  const val = -Math.log10(hConc)
                  const phVal = Number.isNaN(val) ? 7 : Number(val.toFixed(2))
                  const status = phVal < 7 ? '산성 (Acidic)' : phVal === 7 ? '중성 (Neutral)' : '염기성 (Basic)'
                  const color = phVal < 7 ? '#ef4444' : phVal === 7 ? '#10b981' : '#2563eb'
                  return (
                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>계산된 pH 값</span>
                      <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color }}>
                        pH {phVal} ({status})
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* 계산기 6: 이상기체 상태방정식 PV = nRT */}
            {calcType === 'gas' && (
              <div className="card">
                <h4>🎈 P = nRT / V (이상기체 상태방정식 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>몰수 n (mol)</label>
                    <input type="number" step="0.1" value={gasN} onChange={(e) => setGasN(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>절대온도 T (K)</label>
                    <input type="number" step="0.1" value={gasT} onChange={(e) => setGasT(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>부피 V (L)</label>
                    <input type="number" step="0.1" value={gasV} onChange={(e) => setGasV(Number(e.target.value))} />
                  </div>
                </div>
                {(() => {
                  const R = 0.08206 // L·atm/(mol·K)
                  const pressureAtm = gasV > 0 ? (gasN * R * gasT) / gasV : 0
                  return (
                    <div style={{ padding: '1rem', backgroundColor: '#e0f2fe', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.9rem', color: '#0369a1' }}>계산된 기체 압력 (P) [R = 0.0821 L·atm/(mol·K)]</span>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0284c7' }}>
                        {pressureAtm.toFixed(3)} atm (약 {(pressureAtm * 101.3).toFixed(1)} kPa)
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* 계산기 7: 스넬의 굴절 법칙 n1 sin(θ1) = n2 sin(θ2) */}
            {calcType === 'snell' && (
              <div className="card">
                <h4>🔍 n₁ sin(θ₁) = n₂ sin(θ₂) (스넬의 굴절 법칙 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>매질 1 굴절률 n₁</label>
                    <input type="number" step="0.01" value={n1} onChange={(e) => setN1(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>매질 2 굴절률 n₂</label>
                    <input type="number" step="0.01" value={n2} onChange={(e) => setN2(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>입사각 θ₁ (°도)</label>
                    <input type="number" value={theta1} onChange={(e) => setTheta1(Number(e.target.value))} />
                  </div>
                </div>
                {(() => {
                  const rad1 = (theta1 * Math.PI) / 180
                  const sin2 = (n1 * Math.sin(rad1)) / n2
                  let theta2Deg = 0
                  let isTIR = false
                  if (sin2 > 1) {
                    isTIR = true
                  } else {
                    theta2Deg = (Math.asin(sin2) * 180) / Math.PI
                  }
                  return (
                    <div style={{ padding: '1rem', backgroundColor: isTIR ? '#fee2e2' : '#f0fdf4', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.9rem', color: isTIR ? '#991b1b' : '#047857' }}>계산된 굴절각 (θ₂)</span>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: isTIR ? '#ef4444' : '#059669' }}>
                        {isTIR ? '전반사 (Total Internal Reflection)' : `${theta2Deg.toFixed(2)}°`}
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* 계산기 8: 방사성 동위원소 반감기 N(t) = N0 * (1/2)^(t / T_half) */}
            {calcType === 'halflife' && (
              <div className="card">
                <h4>☢️ N(t) = N₀ × (½)^(t / T½) (방사성 반감기 계산기)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>초기 양 N₀</label>
                    <input type="number" value={n0} onChange={(e) => setN0(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>반감기 T½ (년/시간)</label>
                    <input type="number" value={tHalf} onChange={(e) => setTHalf(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>경과 시간 t</label>
                    <input type="number" value={elapsedT} onChange={(e) => setElapsedT(Number(e.target.value))} />
                  </div>
                </div>
                {(() => {
                  const remaining = tHalf > 0 ? n0 * Math.pow(0.5, elapsedT / tHalf) : 0
                  const ratioPct = n0 > 0 ? ((remaining / n0) * 100).toFixed(2) : '0'
                  return (
                    <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.9rem', color: '#92400e' }}>남은 방사성 시료 양 N(t) 및 잔존율</span>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d97706' }}>
                        {remaining.toFixed(2)} ({ratioPct}% 남음)
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* 계산기 9: DNA전사·번역 생물학 도구 */}
            {calcType === 'centraldogma' && (
              <div className="card">
                <h4>🧬 DNA → mRNA → 아미노산 전사·번역 분자생물학 도구</h4>
                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label>DNA 서열 입력 (A, T, G, C 조합)</label>
                  <input
                    type="text"
                    value={dnaSeq}
                    onChange={(e) => setDnaSeq(e.target.value.toUpperCase().replace(/[^ATGC]/g, ''))}
                    placeholder="예: TACGTTCAACTG"
                    style={{ fontFamily: 'monospace', letterSpacing: '2px' }}
                  />
                </div>

                {(() => {
                  const mrna = dnaSeq
                    .split('')
                    .map((b) => (b === 'A' ? 'U' : b === 'T' ? 'A' : b === 'G' ? 'C' : 'G'))
                    .join('')

                  const codonTable: Record<string, string> = {
                    AUG: 'Met (개시)',
                    UAA: '종결',
                    UAG: '종결',
                    UGA: '종결',
                    UUU: 'Phe',
                    UUC: 'Phe',
                    UUA: 'Leu',
                    UUG: 'Leu',
                    CAA: 'Gln',
                    CAG: 'Gln',
                    AAC: 'Asn',
                    AAG: 'Lys',
                    GAC: 'Asp',
                    GAG: 'Glu',
                  }

                  const codons: string[] = []
                  for (let i = 0; i < mrna.length; i += 3) {
                    if (i + 3 <= mrna.length) {
                      codons.push(mrna.slice(i, i + 3))
                    }
                  }

                  const aminos = codons.map((c) => codonTable[c] || '아미노산')

                  return (
                    <div style={{ display: 'grid', gap: '0.75rem', marginTop: '0.5rem' }}>
                      <div style={{ padding: '0.75rem', background: '#f0f4ff', borderRadius: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: '#4338ca', fontWeight: 600 }}>1. 전사된 mRNA 서열:</span>
                        <div style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold', color: '#1d4ed8', marginTop: '0.2rem' }}>
                          5'- {mrna} -3'
                        </div>
                      </div>

                      <div style={{ padding: '0.75rem', background: '#f0fdf4', borderRadius: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600 }}>2. 번역 코돈 및 아미노산 서열:</span>
                        <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold', color: '#059669', marginTop: '0.2rem' }}>
                          {codons.join(' - ')} ➔ {aminos.join(' — ')}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        )}

        {/* 탭 3: 시뮬레이터 & 물리/화학/생물 모형 (4종) */}
        {activeTab === 'simulation' && (
          <div>
            <div className="card">
              <h3>🔮 인터랙티브 시뮬레이터 모형 (4종)</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                <button
                  className={`btn ${simType === 'projectile' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('projectile')}
                >
                  🎯 1. 포물선 운동
                </button>
                <button
                  className={`btn ${simType === 'atom' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('atom')}
                >
                  ⚛️ 2. 원자 오비탈 껍질
                </button>
                <button
                  className={`btn ${simType === 'wave' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('wave')}
                >
                  🌊 3. 파동 간섭
                </button>
                <button
                  className={`btn ${simType === 'pendulum' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('pendulum')}
                >
                  ⏱️ 4. 단진자 주기도
                </button>
              </div>
            </div>

            {/* 1. 포물선 시뮬레이터 */}
            {simType === 'projectile' && (
              <div className="card">
                <h4>🎯 포물선 운동 궤적 시뮬레이터</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
                  <div className="form-group">
                    <label>초기 발사 속도 v₀: {v0} m/s</label>
                    <input type="range" min="10" max="100" value={v0} onChange={(e) => setV0(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>발사 각도 θ: {angle}°</label>
                    <input type="range" min="15" max="85" value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
                  </div>
                </div>

                <div style={{ textAlign: 'center', background: '#f8fafc', padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <canvas ref={projCanvasRef} width={680} height={260} style={{ width: '100%', maxHeight: '260px' }} />
                </div>
              </div>
            )}

            {/* 2. 원자 모형 시뮬레이터 */}
            {simType === 'atom' && (
              <div className="card">
                <h4>⚛️ 원자번호별 K/L/M 전자 껍질 모형 시뮬레이터</h4>
                <div className="form-group" style={{ margin: '1rem 0' }}>
                  <label>원자번호 Z (1~18번): {atomZ}번 ({ALL_ELEMENTS.find((e) => e.number === atomZ)?.name})</label>
                  <input type="range" min="1" max="18" value={atomZ} onChange={(e) => setAtomZ(Number(e.target.value))} />
                </div>

                <div style={{ textAlign: 'center', background: '#0f172a', padding: '1rem', borderRadius: '0.5rem' }}>
                  <canvas ref={atomCanvasRef} width={400} height={320} style={{ width: '100%', maxHeight: '320px' }} />
                </div>
              </div>
            )}

            {/* 3. 파동 간섭 시뮬레이터 */}
            {simType === 'wave' && (
              <div className="card">
                <h4>🌊 파동의 간섭 (보강/상쇄) 모형 시뮬레이터</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
                  <div className="form-group">
                    <label>파동 진동수 (Frequency): {waveFreq}</label>
                    <input type="range" min="1" max="5" value={waveFreq} onChange={(e) => setWaveFreq(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>두 파원 사이 거리: {waveDist}px</label>
                    <input type="range" min="20" max="100" value={waveDist} onChange={(e) => setWaveDist(Number(e.target.value))} />
                  </div>
                </div>

                <div style={{ textAlign: 'center', background: '#0284c7', padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <canvas ref={waveCanvasRef} width={680} height={260} style={{ width: '100%', maxHeight: '260px' }} />
                </div>
              </div>
            )}

            {/* 4. 단진자 주기도 시뮬레이터 */}
            {simType === 'pendulum' && (
              <div className="card">
                <h4>⏱️ 단진자(Simple Pendulum) 복원력 & 주기 시뮬레이터</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
                  <div className="form-group">
                    <label>줄 길이 L: {pendulumL} m</label>
                    <input type="range" min="0.5" max="3.0" step="0.1" value={pendulumL} onChange={(e) => setPendulumL(Number(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label>최대 흔들림 각도 θ_max: {pendulumMaxAngle}°</label>
                    <input type="range" min="10" max="60" value={pendulumMaxAngle} onChange={(e) => setPendulumMaxAngle(Number(e.target.value))} />
                  </div>
                </div>

                <div style={{ textAlign: 'center', background: '#f8fafc', padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <canvas ref={pendulumCanvasRef} width={680} height={260} style={{ width: '100%', maxHeight: '260px' }} />
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
