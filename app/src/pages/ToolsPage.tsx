import { useState, useRef, useEffect } from 'react'
import '../styles/index.css'

// 주기율표 주요 원소 데이터 (1~36번)
interface PeriodicElement {
  number: number
  symbol: string
  name: string
  mass: number
  category: string
  electronConfig: string
  description: string
  group: number
  period: number
}

const PERIODIC_ELEMENTS: PeriodicElement[] = [
  { number: 1, symbol: 'H', name: '수소', mass: 1.008, category: '비금속', electronConfig: '1s¹', description: '우주에서 가장 풍부한 원소로 수소 결합과 반응의 기본입니다.', group: 1, period: 1 },
  { number: 2, symbol: 'He', name: '헬륨', mass: 4.0026, category: '비활성기체', electronConfig: '1s²', description: '가장 안정한 비활성 기체로 반응성이 매우 낮습니다.', group: 18, period: 1 },
  { number: 3, symbol: 'Li', name: '리튬', mass: 6.94, category: '알칼리금속', electronConfig: '[He] 2s¹', description: '가장 가벼운 금속으로 리튬 이온 배터리에 활용됩니다.', group: 1, period: 2 },
  { number: 4, symbol: 'Be', name: '베릴륨', mass: 9.0122, category: '알칼리토금속', electronConfig: '[He] 2s²', description: '합금과 합체 제작에 사용되는 가볍고 강한 금속입니다.', group: 2, period: 2 },
  { number: 5, symbol: 'B', name: '붕소', mass: 10.81, category: '준금속', electronConfig: '[He] 2s² 2p¹', description: '반도체 도핑과 유리에 사용되는 준금속 원소입니다.', group: 13, period: 2 },
  { number: 6, symbol: 'C', name: '탄소', mass: 12.011, category: '비금속', electronConfig: '[He] 2s² 2p²', description: '유기화학과 모든 생명체의 골격을 이루는 원소입니다.', group: 14, period: 2 },
  { number: 7, symbol: 'N', name: '질소', mass: 14.007, category: '비금속', electronConfig: '[He] 2s² 2p³', description: '대기의 78%를 차지하며 아미노산의 구성 요소입니다.', group: 15, period: 2 },
  { number: 8, symbol: 'O', name: '산소', mass: 15.999, category: '비금속', electronConfig: '[He] 2s² 2p⁴', description: '세포 호흡과 연소 반응의 필수적인 원소입니다.', group: 16, period: 2 },
  { number: 9, symbol: 'F', name: '플루오린', mass: 18.998, category: '할로젠', electronConfig: '[He] 2s² 2p⁵', description: '가장 전기음성도가 높은 할로젠 원소입니다.', group: 17, period: 2 },
  { number: 10, symbol: 'Ne', name: '네온', mass: 20.180, category: '비활성기체', electronConfig: '[He] 2s² 2p⁶', description: '네온사인의 주황빛 조명에 쓰이는 비활성 기체입니다.', group: 18, period: 2 },
  { number: 11, symbol: 'Na', name: '나트륨', mass: 22.990, category: '알칼리금속', electronConfig: '[Ne] 3s¹', description: '소금(NaCl)의 구성 성분이며 신경 전달에 관여합니다.', group: 1, period: 3 },
  { number: 12, symbol: 'Mg', name: '마그네슘', mass: 24.305, category: '알칼리토금속', electronConfig: '[Ne] 3s²', description: '엽록소의 중심 원소이며 경량 합금재로 쓰입니다.', group: 2, period: 3 },
  { number: 13, symbol: 'Al', name: '알루미늄', mass: 26.982, category: '전이후금속', electronConfig: '[Ne] 3s² 3p¹', description: '가볍고 부식에 강한 가공성 금속입니다.', group: 13, period: 3 },
  { number: 14, symbol: 'Si', name: '규소 (실리콘)', mass: 28.085, category: '준금속', electronConfig: '[Ne] 3s² 3p²', description: '현대 반도체 산업의 핵심 준금속 소재입니다.', group: 14, period: 3 },
  { number: 15, symbol: 'P', name: '인', mass: 30.974, category: '비금속', electronConfig: '[Ne] 3s² 3p³', description: 'DNA, RNA 및 ATP 에너지 분자의 구성 성분입니다.', group: 15, period: 3 },
  { number: 16, symbol: 'S', name: '황', mass: 32.06, category: '비금속', electronConfig: '[Ne] 3s² 3p⁴', description: '단백질의 디설피드 결합 형성에 관여합니다.', group: 16, period: 3 },
  { number: 17, symbol: 'Cl', name: '염소', mass: 35.45, category: '할로젠', electronConfig: '[Ne] 3s² 3p⁵', description: '강한 자극성을 지닌 소독 및 정수용 원소입니다.', group: 17, period: 3 },
  { number: 18, symbol: 'Ar', name: '아르곤', mass: 39.948, category: '비활성기체', electronConfig: '[Ne] 3s² 3p⁶', description: '대기 중 세 번째로 많은 비활성 기체입니다.', group: 18, period: 3 },
  { number: 19, symbol: 'K', name: '칼륨', mass: 39.098, category: '알칼리금속', electronConfig: '[Ar] 4s¹', description: '세포 내 전해질 균형과 삼투압 조절에 필수적입니다.', group: 1, period: 4 },
  { number: 20, symbol: 'Ca', name: '칼슘', mass: 40.078, category: '알칼리토금속', electronConfig: '[Ar] 4s²', description: '뼈와 치아 구성, 근육 수축의 핵심 무기질입니다.', group: 2, period: 4 },
  { number: 26, symbol: 'Fe', name: '철', mass: 55.845, category: '전이금속', electronConfig: '[Ar] 3d⁶ 4s²', description: '혈액 내 적혈구 적혈구 헤모글로빈 중심 원소입니다.', group: 8, period: 4 },
  { number: 29, symbol: 'Cu', name: '구리', mass: 63.546, category: '전이금속', electronConfig: '[Ar] 3d¹⁰ 4s¹', description: '우수한 전기 전도성을 가진 전선용 금속입니다.', group: 11, period: 4 },
  { number: 30, symbol: 'Zn', name: '아연', mass: 65.38, category: '전이금속', electronConfig: '[Ar] 3d¹⁰ 4s²', description: '효소 작용과 도금에 널리 활용되는 전이금속입니다.', group: 12, period: 4 },
]

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'table' | 'calculator' | 'simulation'>('table')

  // === 주기율표 상태 ===
  const [selectedElement, setSelectedElement] = useState<PeriodicElement | null>(PERIODIC_ELEMENTS[0])

  // === 계산기 상태 ===
  const [calcType, setCalcType] = useState<'force' | 'molarity' | 'ohm' | 'energy' | 'ph'>('force')
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

  // === 시뮬레이터 상태 ===
  const [simType, setSimType] = useState<'projectile' | 'atom' | 'wave'>('projectile')

  // 포물선 시뮬레이터
  const [v0, setV0] = useState<number>(50)
  const [angle, setAngle] = useState<number>(45)
  const projCanvasRef = useRef<HTMLCanvasElement>(null)

  // 원자 모형 시뮬레이터
  const [atomZ, setAtomZ] = useState<number>(6) // 탄소 default
  const atomCanvasRef = useRef<HTMLCanvasElement>(null)

  // 파동 간섭 시뮬레이터
  const [waveFreq, setWaveFreq] = useState<number>(2)
  const [waveDist, setWaveDist] = useState<number>(40)
  const waveCanvasRef = useRef<HTMLCanvasElement>(null)

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

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🛠️ 과학 실험실 & 탐구 도구함</h1>
          <p>인터랙티브 주기율표, 정밀 과학 계산기, 시각적 물리/화학 시뮬레이터를 사용해 보세요</p>
        </div>
      </header>

      <main className="container">
        {/* 도구 분류 탭 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <button
            className={`btn ${activeTab === 'table' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('table')}
          >
            🧪 인터랙티브 주기율표
          </button>
          <button
            className={`btn ${activeTab === 'calculator' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('calculator')}
          >
            📐 과학 통합 계산기 (5종)
          </button>
          <button
            className={`btn ${activeTab === 'simulation' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('simulation')}
          >
            🔮 물리/화학 시뮬레이터
          </button>
        </div>

        {/* 탭 1: 인터랙티브 주기율표 */}
        {activeTab === 'table' && (
          <div>
            <div className="card">
              <h3>🧪 원소 주기율표 (1~36번)</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
                원소를 클릭하면 상세한 전하, 원자량, 전자배치, 화학적 성질을 확인하실 수 있습니다.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '0.5rem' }}>
                {PERIODIC_ELEMENTS.map((elem) => (
                  <button
                    key={elem.number}
                    onClick={() => setSelectedElement(elem)}
                    style={{
                      padding: '0.5rem 0.25rem',
                      borderRadius: '0.5rem',
                      border: selectedElement?.number === elem.number ? '2px solid #4338ca' : '1px solid #cbd5e1',
                      backgroundColor:
                        selectedElement?.number === elem.number
                          ? '#e0e7ff'
                          : elem.category === '비금속'
                          ? '#dcfce7'
                          : elem.category === '알칼리금속'
                          ? '#fee2e2'
                          : elem.category === '알칼리토금속'
                          ? '#ffedd5'
                          : elem.category === '비활성기체'
                          ? '#f3e8ff'
                          : '#f1f5f9',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{elem.number}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1e293b' }}>{elem.symbol}</div>
                    <div style={{ fontSize: '0.7rem', color: '#475569' }}>{elem.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 원소 상세 정보 카드 */}
            {selectedElement && (
              <div className="card" style={{ backgroundColor: '#f8fafc', borderLeft: '5px solid #4338ca' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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

        {/* 탭 2: 과학 통합 계산기 */}
        {activeTab === 'calculator' && (
          <div>
            <div className="card">
              <h3>📐 과학 공식 계산기</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                {[
                  { id: 'force', label: '1. F=ma (힘과 가속도)' },
                  { id: 'molarity', label: '2. M=mol/L (몰농도)' },
                  { id: 'ohm', label: '3. V=IR (옴의 법칙)' },
                  { id: 'energy', label: '4. KE/PE (운동·위치에너지)' },
                  { id: 'ph', label: '5. pH (수소이온 지수)' },
                ].map((c) => (
                  <button
                    key={c.id}
                    className={`btn ${calcType === c.id ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setCalcType(c.id as any)}
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
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
          </div>
        )}

        {/* 탭 3: 시뮬레이터 & 물리/화학 모형 */}
        {activeTab === 'simulation' && (
          <div>
            <div className="card">
              <h3>🔮 인터랙티브 시뮬레이터 모형</h3>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  className={`btn ${simType === 'projectile' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('projectile')}
                >
                  🎯 1. 포물선 운동 시뮬레이터
                </button>
                <button
                  className={`btn ${simType === 'atom' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('atom')}
                >
                  ⚛️ 2. 원자 오비탈 껍질 모형
                </button>
                <button
                  className={`btn ${simType === 'wave' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSimType('wave')}
                >
                  🌊 3. 파동 간섭 시뮬레이터
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
                  <label>원자번호 Z (1~18번): {atomZ}번 ({PERIODIC_ELEMENTS.find((e) => e.number === atomZ)?.name})</label>
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
          </div>
        )}
      </main>
    </div>
  )
}
