// 과목별 핵심 용어 사전 데이터
import { expandedScienceTerms } from './termsExpansion'
export interface ScienceTerm {
  id: string
  subject: string // physics, chemistry, math, biology, earthscience, astronomy, medicine, general
  ko: string
  en: string
  category: string
  definition: string
  detailedExplanation: string
  formulaOrExample?: string
}

export const SCIENCE_TERMS: ScienceTerm[] = [
  // === 물리학 (physics) ===
  {
    id: 'term-magnet',
    subject: 'physics',
    ko: '자석',
    en: 'Magnet',
    category: '전자기학',
    definition: '철, 강철 등의 물질을 끌어당기는 자기장을 만드는 물체.',
    detailedExplanation: '자석은 자성 물질의 원자 자기 모멘트가 같은 방향으로 정렬되어 자기장을 형성하는 물체입니다. 항상 N극과 S극이 쌍으로 존재하며, 잘라도 각각 새로운 N극과 S극을 가집니다.',
    formulaOrExample: '예: 냉장고 자석, 나침반 바늘, 모터의 영구자석'
  },
  {
    id: 'term-magnetic-field',
    subject: 'physics',
    ko: '자기장',
    en: 'Magnetic Field',
    category: '전자기학',
    definition: '자석이나 전류 주변에 자기력이 작용하는 공간.',
    detailedExplanation: '자기장은 N극에서 나와 S극으로 들어가는 자기력선으로 가시화할 수 있는 벡터장(B)입니다. 운동하는 전하에 롤렌츠 힘 F = q(v × B)을 가합니다.',
    formulaOrExample: '수식: F = q(v × B), 테슬라(T) 단위'
  },
  {
    id: 'term-gravity',
    subject: 'physics',
    ko: '중력',
    en: 'Gravity',
    category: '역학',
    definition: '질량을 가진 모든 물체 사이에 서로 끌어당기는 상호작용 힘.',
    detailedExplanation: '뉴턴의 만유인력 법칙에 따르면 두 질량 m1, m2 사이에는 거리의 제곱에 반비례하고 질량의 곱에 비례하는 중력이 작용합니다. 아인슈타인의 일반상대성이론에서는 질량에 의한 시공간의 휘어짐으로 설명됩니다.',
    formulaOrExample: '수식: F = G(m1·m2)/r², 지구 표면 가속도 g ≈ 9.8 m/s²'
  },
  {
    id: 'term-velocity',
    subject: 'physics',
    ko: '속도',
    en: 'Velocity',
    category: '역학',
    definition: '물체의 위치가 시간에 따라 변하는 정도를 나타내는 벡터량 (크기와 방향 포함).',
    detailedExplanation: '속력(크기만 있는 스칼라)과 달리 방향 정보를 포함합니다. 위치 x(t)의 시간에 대한 1차 미분 v = dx/dt로 정의됩니다.',
    formulaOrExample: '수식: v = dx/dt [m/s]'
  },
  {
    id: 'term-acceleration',
    subject: 'physics',
    ko: '가속도',
    en: 'Acceleration',
    category: '역학',
    definition: '속도가 시간에 따라 변화하는 비율을 나타내는 벡터량.',
    detailedExplanation: '속도 v(t)의 시간에 대한 미분 a = dv/dt = d²x/dt²입니다. 알짜힘 F가 작용하면 뉴턴 제2법칙 F=ma에 따라 가속도가 발생합니다.',
    formulaOrExample: '수식: a = dv/dt = F/m [m/s²]'
  },
  {
    id: 'term-work',
    subject: 'physics',
    ko: '일',
    en: 'Work',
    category: '역학',
    definition: '물체에 힘을 가하여 그 힘의 방향으로 물체를 이동시켰을 때 가해진 에너지.',
    detailedExplanation: '힘 F와 이동거리 d의 내적으로 정의되는 스칼라량(W = F · d = F d cosθ)입니다. 단위는 줄(J)을 사용합니다.',
    formulaOrExample: '수식: W = ∫ F · dr [J = N·m]'
  },
  {
    id: 'term-kinetic-energy',
    subject: 'physics',
    ko: '운동에너지',
    en: 'Kinetic Energy',
    category: '역학',
    definition: '운동하고 있는 물체가 가지고 있는 에너지.',
    detailedExplanation: '질량이 m이고 속도가 v인 물체가 가지는 운동에너지는 KE = ½mv²입니다. 일-에너지 정리에 의해 알짜힘이 한 일은 운동에너지의 변화량과 같습니다.',
    formulaOrExample: '수식: KE = ½mv² [J]'
  },
  {
    id: 'term-potential-energy',
    subject: 'physics',
    ko: '위치에너지 (퍼텐셜 에너지)',
    en: 'Potential Energy',
    category: '역학',
    definition: '물체의 위치나 상태에 따라 계 안에 저장되어 있는 에너지.',
    detailedExplanation: '중력장이나 탄성력 같은 보존력에 의해 정의됩니다. 기준점 대비 높이 h에 있을 때 중력 위치에너지는 PE = mgh입니다.',
    formulaOrExample: '수식: PE = mgh (중력), PE = ½kx² (용수철)'
  },
  {
    id: 'term-schrodinger',
    subject: 'physics',
    ko: '슈뢰딩거 방정식',
    en: 'Schrödinger Equation',
    category: '양자역학',
    definition: '양자 상태 파동함수의 시간적 변화와 고유값을 기술하는 양자역학의 기본 방정식.',
    detailedExplanation: '1926년 에르빈 슈뢰딩거가 제안한 방정식으로, 입자의 위치와 상태를 파동함수 ψ(r,t)로 표현하고 해밀토니안 연산자를 이용해 시간에 따른 상태 진화를 다룹니다.',
    formulaOrExample: '수식: iℏ (∂ψ/∂t) = Ĥψ'
  },
  {
    id: 'term-entropy-phys',
    subject: 'physics',
    ko: '엔트로피',
    en: 'Entropy',
    category: '열역학',
    definition: '계의 무질서도 또는 가능한 미시 상태의 수를 나타내는 열역학적 상태량.',
    detailedExplanation: '열역학 제2법칙에 따라 고립계의 엔트로피는 자발적 과정에서 항상 증가하거나 유지됩니다. 통계역학에서는 S = k_B ln Ω 로 미시상태의 수 Ω와 연결됩니다.',
    formulaOrExample: '수식: dS = dQ_rev / T, S = k_B ln Ω'
  },

  // === 화학 (chemistry) ===
  {
    id: 'term-element',
    subject: 'chemistry',
    ko: '원소',
    en: 'Element',
    category: '물질의 구성',
    definition: '더 이상 다른 화학적 방법으로 분해되지 않는 한 종류의 원자로 이루어진 순물질.',
    detailedExplanation: '원소는 원자핵의 양성자 수(원자번호)로 구별되며, 수소(H), 산소(O), 철(Fe) 등이 있습니다. 주기율표에 118개의 원소가 정리되어 있습니다.',
    formulaOrExample: '예: 수소(H, 1번), 산소(O, 8번), 금(Au, 79번)'
  },
  {
    id: 'term-atom',
    subject: 'chemistry',
    ko: '원자',
    en: 'Atom',
    category: '물질의 구성',
    definition: '화학적 성질을 유지하는 물질의 가장 작은 기본 입자.',
    detailedExplanation: '원자는 중심으로 양성자와 중성자로 이루어진 원자핵이 있고, 그 주위에 전자가 오비탈(전자구름)을 이루며 존재합니다.',
    formulaOrExample: '구성: 원자핵(양성자+중성자) + 전자'
  },
  {
    id: 'term-mole',
    subject: 'chemistry',
    ko: '몰',
    en: 'Mole',
    category: '화학량론',
    definition: '원자, 분자, 이온 등의 입자 6.022×10²³개를 나타내는 화학의 물질량 단위.',
    detailedExplanation: '아보가드로수(Na = 6.022×10²³)를 기준으로 입자의 개수를 세는 단위입니다. 탄소-12 12g에 들어있는 원자 수가 정확히 1몰입니다.',
    formulaOrExample: '수식: 1 mol = 6.022 × 10²³ 개, 몰수 n = m / M'
  },
  {
    id: 'term-ph',
    subject: 'chemistry',
    ko: 'pH (수소 이온 농도 지수)',
    en: 'pH Value',
    category: '산과 염기',
    definition: '수용액의 산성이나 염기성의 정도를 나타내는 수소이온 농도의 음의 로그값.',
    detailedExplanation: 'pH = -log10[H⁺]로 정의됩니다. 25°C 기준 pH 7은 중성, 7 미만은 산성, 7 초과는 염기성입니다.',
    formulaOrExample: '수식: pH = -log10[H⁺]'
  },
  {
    id: 'term-catalyst',
    subject: 'chemistry',
    ko: '촉매',
    en: 'Catalyst',
    category: '반응속도론',
    definition: '자신은 소모되지 않으면서 화학 반응의 활성화 에너지를 낮추어 반응 속도를 변화시키는 물질.',
    detailedExplanation: '촉매는 더 낮거나 다른 경로의 반응 경로를 제공하여 활성화 에너지(Ea)를 낮춥니다. 반응 속도를 높이지만 화학 평형 위치나 평형상수 K는 바꾸지 않습니다.',
    formulaOrExample: '예: 차량 촉매변환기(백금), 생체 촉매(효소)'
  },
  {
    id: 'term-oxidation',
    subject: 'chemistry',
    ko: '산화·환원',
    en: 'Oxidation-Reduction (Redox)',
    category: '전기화학',
    definition: '전자를 잃는 산화 반응과 전자를 얻는 환원 반응이 동시 일어나는 화학 반응.',
    detailedExplanation: '산화는 전자를 잃거나 산소를 얻거나 산화수가 증가하는 과정이고, 환원은 전자를 얻거나 산소를 잃거나 산화수가 감소하는 과정입니다. 두 반응은 항상 함께 일어납니다.',
    formulaOrExample: '예: Zn + Cu²⁺ → Zn²⁺ + Cu'
  },

  // === 수학 (math) ===
  {
    id: 'term-derivative',
    subject: 'math',
    ko: '미분',
    en: 'Derivative',
    category: '미적분학',
    definition: '함수의 특정 점에서의 순간 변화율 및 접선의 기울기를 구하는 수학적 연산.',
    detailedExplanation: '함수 f(x)의 미분계수 f\'(a) = lim(h→0) [f(a+h) - f(a)]/h 입니다. 속도, 가속도, 경사하강법 등 물리학과 인공지능에 핵심적으로 사용됩니다.',
    formulaOrExample: '수식: f\'(x) = lim(Δx→0) Δy/Δx'
  },
  {
    id: 'term-integral',
    subject: 'math',
    ko: '적분',
    en: 'Integral',
    category: '미적분학',
    definition: '미분의 역연산이자, 곡선으로 둘러싸인 도형의 넓이나 누적량을 구하는 연산.',
    detailedExplanation: '정적분 ∫[a,b] f(x)dx는 f(x) 그래프와 x축 사이의 면적을 나타냅니다. 미적분학의 기본정리에 의해 부정적분과 정적분이 서로 연결됩니다.',
    formulaOrExample: '수식: ∫ xⁿ dx = (1/(n+1)) xⁿ⁺¹ + C'
  },
  {
    id: 'term-matrix',
    subject: 'math',
    ko: '행렬',
    en: 'Matrix',
    category: '선형대수학',
    definition: '수의 집합을 사각형 모양의 행(row)과 열(column)로 배열한 것.',
    detailedExplanation: '행렬은 연립방정식을 간결하게 표현하고 다차원 공간에서의 선형변환(회전, 이동, 투영)을 계산하는 핵심 구조입니다.',
    formulaOrExample: '예: 2×2 행렬 [[a, b], [c, d]]'
  },
  {
    id: 'term-eigenvalue',
    subject: 'math',
    ko: '고유값과 고유벡터',
    en: 'Eigenvalue and Eigenvector',
    category: '선형대수학',
    definition: '선형변환 A를 가해도 방향이 변하지 않고 크기만 배율 λ만큼 변하는 벡터 v.',
    detailedExplanation: '관계식 A v = λ v 에서 λ를 고유값, v를 고유벡터라 합니다. 주성분분석(PCA), 퀀텀 계산, 구글 페이지랭크 알고리즘에 응용됩니다.',
    formulaOrExample: '수식: A v = λ v, det(A - λI) = 0'
  },

  // === 생물학 (biology) ===
  {
    id: 'term-cell',
    subject: 'biology',
    ko: '세포',
    en: 'Cell',
    category: '세포생물학',
    definition: '모든 생명체의 구조적, 기능적 기본 단위.',
    detailedExplanation: '세포는 세포막으로 싸여 유전물질(DNA)과 세포질을 가지며, 핵의 유무에 따라 원핵세포와 진핵세포로 구분됩니다.',
    formulaOrExample: '예: 동물세포, 식물세포, 대장균(원핵)'
  },
  {
    id: 'term-dna',
    subject: 'biology',
    ko: 'DNA (디옥시리보핵산)',
    en: 'Deoxyribonucleic Acid',
    category: '분자생물학',
    definition: '모든 생명체의 유전 정보를 담고 있는 이중나선 구조의 핵산.',
    detailedExplanation: '뉴클레오타이드(당, 인산, 염기)가 사슬을 이룬 이중나선 구조입니다. 염기 A-T, G-C 상보적 수소결합으로 유전정보를 안정적으로 보존합니다.',
    formulaOrExample: '염기쌍: A(아데닌)-T(티민), G(구아닌)-C(시토신)'
  },
  {
    id: 'term-photosynthesis',
    subject: 'biology',
    ko: '광합성',
    en: 'Photosynthesis',
    category: '식물생리',
    definition: '식물이 햇빛 에너지를 이용해 이산화탄소와 물로부터 포도당과 산소를 만드는 과정.',
    detailedExplanation: '식물 엽록체에서 일어나는 반응으로, 6CO₂ + 6H₂O + 빛에너지 → C₆H₁₂O₆ + 6O₂ 화학식을 가집니다. 지구 생태계 에너지 공급의 근원입니다.',
    formulaOrExample: '수식: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'
  },
  {
    id: 'term-crispr',
    subject: 'biology',
    ko: '크리스퍼 (CRISPR-Cas9)',
    en: 'CRISPR-Cas9',
    category: '유전공학',
    definition: '특정 DNA 염기서열을 정밀하게 표적하여 절단 및 편집하는 유전자 교정 기술.',
    detailedExplanation: '가이드 RNA가 표적 DNA 서열을 인식하고 Cas9 효소가 해당 부위를 자르는 유전자 자르개 도구입니다. 유전병 치료와 품종 개량에 혁신을 가져왔습니다.',
    formulaOrExample: '구성: 가이드 RNA + Cas9 절단 효소'
  },

  // === 지구과학 (earthscience) ===
  {
    id: 'term-plate-tectonics',
    subject: 'earthscience',
    ko: '판구조론',
    en: 'Plate Tectonics',
    category: '지질학',
    definition: '지구 겉면이 여러 개의 단단한 판(암석권)으로 나뉘어 맨틀 대류에 의해 이동한다는 이론.',
    detailedExplanation: '판의 경계에서 발산(갈라짐), 수렴(충돌/섭입), 보존(어긋남) 운동이 일어나며 지진, 화산, 산맥 형성 등 지각 변동의 원인을 통합적으로 설명합니다.',
    formulaOrExample: '예: 히말라야 산맥(수렴), 대서양 중앙해령(발산), 산안드레아스 단층(보존)'
  },
  {
    id: 'term-climate-change',
    subject: 'earthscience',
    ko: '기후변화와 온실효과',
    en: 'Climate Change & Greenhouse Effect',
    category: '대기과학',
    definition: '온실기체가 지구에서 방출되는 적외선 복사에너지를 흡수하여 지표 온도를 높이는 현상.',
    detailedExplanation: 'CO₂, CH₄ 등 온실기체 농도 증가로 지구 평균 기온이 상승하는 지구온난화가 진행되며, 극단적 기후, 해수면 상승을 초래합니다.',
    formulaOrExample: '주요 온실기체: 이산화탄소(CO₂), 메탄(CH₄), 수증기(H₂O)'
  },

  // === 천문학 (astronomy) ===
  {
    id: 'term-big-bang',
    subject: 'astronomy',
    ko: '빅뱅 이론',
    en: 'Big Bang Theory',
    category: '우주론',
    definition: '우주가 약 138억 년 전 초고온·초고밀도 한 점에서 시작되어 지금까지 팽창해왔다는 이론.',
    detailedExplanation: '허블의 은하 후퇴속도 관측(적색편이)과 우주배경복사(CMB, 2.7K), 수소/헬륨 질량비(3:1)가 3대 핵심 관측 증거입니다.',
    formulaOrExample: '증거: 허블의 법칙 v = H₀d, 2.7K 우주배경복사'
  },
  {
    id: 'term-black-hole',
    subject: 'astronomy',
    ko: '블랙홀',
    en: 'Black Hole',
    category: '천체물리학',
    definition: '중력이 극도로 강하여 빛조차 빠져나올 수 없는 시공간 영역.',
    detailedExplanation: '거대한 별의 초신성 폭발 후 중력붕괴로 형성됩니다. 탈출속도가 빛의 속도를 넘어서는 경계를 사건의 지평선(Event Horizon)이라 부릅니다.',
    formulaOrExample: '슈바르츠실트 반지름: rs = 2GM/c²'
  },

  // === 의학 (medicine) ===
  {
    id: 'term-homeostasis',
    subject: 'medicine',
    ko: '항상성',
    en: 'Homeostasis',
    category: '생리학',
    definition: '체온, 혈당, 수분, pH 등 신체 내부 환경을 일정한 범위로 유지하려는 성질.',
    detailedExplanation: '자율신경계와 내분비계(호르몬)의 음성 되먹임(Negative Feedback) 조절을 통해 내부 환경의 안정을 유지합니다.',
    formulaOrExample: '예: 체온 36.5°C 조절, 인슐린/글루카곤에 의한 혈당 조절'
  },
  {
    id: 'term-precision-medicine',
    subject: 'medicine',
    ko: '정밀의학 (맞춤의학)',
    en: 'Precision Medicine',
    category: '임상의학',
    definition: '개인의 유전체 정보, 환경, 생활습관을 종합 분석하여 최적의 맞춤 치료를 제공하는 의학.',
    detailedExplanation: '단일 표준 치료에서 벗어나, 환자의 유전자 변이(바이오마커)를 검사하여 표적항암제 등 가장 효과적인 약물과 용량을 선별하는 현대 의학 접근법입니다.',
    formulaOrExample: '예: HER2 양성 유방암 표적치료제 트라스투주맙 처방'
  },
  ...expandedScienceTerms,
]

export function getTermsBySubject(subjectId: string): ScienceTerm[] {
  if (subjectId === 'all') return SCIENCE_TERMS
  return SCIENCE_TERMS.filter((t) => t.subject === subjectId)
}

export function searchTerms(query: string, subjectId = 'all'): ScienceTerm[] {
  const q = query.trim().toLowerCase()
  let list = getTermsBySubject(subjectId)
  if (!q) return list
  return list.filter(
    (t) =>
      t.ko.toLowerCase().includes(q) ||
      t.en.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.detailedExplanation.toLowerCase().includes(q)
  )
}
