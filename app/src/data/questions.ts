// 모든 문제 데이터
export interface Question {
  id: string
  type: 'multiple_choice' | 'short_answer' | 'calculation'
  question: string
  options?: string[]
  answer: string | string[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export const allQuestions: Question[] = [
  // 초등 - 자석 (elem-sci-01)
  {
    id: 'elem-sci-01-q01',
    type: 'multiple_choice',
    question: '자석의 성질을 설명한 것 중 맞는 것은?',
    options: [
      '자석은 모든 금속을 당긴다',
      '자석의 N극과 N극은 당긴다',
      '자석의 N극과 S극은 당긴다',
      '자석은 열에 약하지 않다'
    ],
    answer: '자석의 N극과 S극은 당긴다',
    explanation: '자석의 같은 극끼리는 밀어내고 다른 극끼리는 당깁니다. 특히 철, 강철 같은 강자성 물질에만 작용합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-01-q02',
    type: 'short_answer',
    question: '자석이 바뀐 금속을 만드는 방법은?',
    options: [],
    answer: '자석으로 여러 번 문지른다',
    explanation: '일반 철 막대를 자석으로 반복적으로 문지르면 철의 원자들이 정렬되어 자석이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-01-q03',
    type: 'multiple_choice',
    question: '다음 중 자석에 붙지 않는 것은?',
    options: ['철못', '알루미늄', '강철 너트', '철 가루'],
    answer: '알루미늄',
    explanation: '알루미늄은 비자성 물질로, 자석에 붙지 않습니다. 반자성 물질입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-01-q04',
    type: 'short_answer',
    question: '나침반이 항상 북쪽을 가리키는 이유는?',
    options: [],
    answer: '지구 자체가 거대한 자석이기 때문',
    explanation: '지구는 자기장을 가지고 있어서 나침반의 자석이 지구 자기장의 방향을 따라 북쪽을 가리킵니다.',
    difficulty: 'medium'
  },

  // 초등 - 식물 성장 (elem-sci-02)
  {
    id: 'elem-sci-02-q01',
    type: 'multiple_choice',
    question: '식물이 자라기 위해 필요한 것은?',
    options: [
      '햇빛과 물',
      '물과 공기',
      '햇빛, 물, 공기',
      '햇빛과 비료만'
    ],
    answer: '햇빛, 물, 공기',
    explanation: '식물은 햇빛에서 에너지를 얻고, 뿌리로 물을 흡수하며, 잎으로 공기 중의 이산화탄소를 흡수하여 양분을 만듭니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-02-q02',
    type: 'short_answer',
    question: '식물의 잎이 초록색인 이유는?',
    options: [],
    answer: '엽록소 때문',
    explanation: '식물의 잎에 있는 엽록소가 햇빛을 흡수하여 광합성을 하기 때문입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-02-q03',
    type: 'multiple_choice',
    question: '식물이 만드는 산소는 어디서 나오는가?',
    options: [
      '흙에서',
      '공기에서',
      '광합성 과정에서',
      '물의 분해에서'
    ],
    answer: '광합성 과정에서',
    explanation: '식물은 광합성 과정에서 물과 이산화탄소를 이용해 포도당과 산소를 만듭니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-02-q04',
    type: 'short_answer',
    question: '어둠 속에서 자란 식물이 노란색인 이유는?',
    options: [],
    answer: '엽록소를 만들지 못했기 때문',
    explanation: '엽록소는 햇빛이 필요하므로, 어둠 속에서는 엽록소가 생성되지 않아 식물이 노란색(또는 흰색)이 됩니다.',
    difficulty: 'medium'
  },

  // 고등 - 미적분 운동 (high-phys-01)
  {
    id: 'high-phys-01-q01',
    type: 'calculation',
    question: '위치 함수 x(t) = 3t² - 2t + 5에서 t = 2s일 때의 속도는?',
    options: [],
    answer: '10 m/s',
    explanation: 'v(t) = dx/dt = 6t - 2. t=2에서 v(2) = 6(2) - 2 = 10 m/s',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-01-q02',
    type: 'calculation',
    question: '위의 함수에서 t = 2s일 때의 가속도는?',
    options: [],
    answer: '6 m/s²',
    explanation: 'a(t) = dv/dt = 6. 가속도는 상수이므로 항상 6 m/s²',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-01-q03',
    type: 'short_answer',
    question: '자유 낙하에서 속도 함수는?',
    options: [],
    answer: 'v(t) = gt 또는 v(t) = 9.8t',
    explanation: '자유 낙하는 상수 가속도 g를 가지므로 v = ∫g dt = gt + C. 초기 속도가 0이면 v(t) = gt',
    difficulty: 'easy'
  },
  {
    id: 'high-phys-01-q04',
    type: 'calculation',
    question: '속도 v(t) = 5t로부터 이동 거리(0초부터 3초까지)는?',
    options: [],
    answer: '22.5 m',
    explanation: 'x = ∫₀³ 5t dt = [5t²/2]₀³ = 5(9)/2 = 22.5 m',
    difficulty: 'hard'
  },
  {
    id: 'high-phys-01-q05',
    type: 'short_answer',
    question: '가속도가 시간에 따라 변할 때 a(t) = 2t²에서 v(t)는?',
    options: [],
    answer: 'v(t) = (2/3)t³ + C',
    explanation: 'v(t) = ∫ a(t) dt = ∫ 2t² dt = (2t³/3) + C',
    difficulty: 'hard'
  },

  // 석사 - 양자역학 (master-phys-01)
  {
    id: 'master-phys-01-q01',
    type: 'short_answer',
    question: 'Schrödinger 방정식에서 |ψ(r,t)|²의 물리적 의미는?',
    options: [],
    answer: '위치 확률 밀도',
    explanation: '|ψ|²는 입자를 위치 r에서 발견할 확률 밀도입니다. 공간적분하면 총 확률이 1입니다(정규화).',
    difficulty: 'medium'
  },
  {
    id: 'master-phys-01-q02',
    type: 'multiple_choice',
    question: '불확정성 원리 ΔxΔp ≥ ℏ/2의 의미는?',
    options: [
      '측정 오차로 인한 불확실성이다',
      '위치와 운동량을 동시에 정확히 알 수 없다는 것이다',
      '기계 계통의 실수이다',
      '상대론적 효과이다'
    ],
    answer: '위치와 운동량을 동시에 정확히 알 수 없다는 것이다',
    explanation: '이것은 측정 오차가 아니라 양자계의 근본적인 성질입니다. 위치를 정확히 측정하면 운동량 불확정성이 커집니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-phys-01-q03',
    type: 'calculation',
    question: '무한 정사각형 우물(0 < x < a)에서 기저 상태의 에너지는?',
    options: [],
    answer: 'E₁ = π²ℏ²/(2ma²)',
    explanation: 'n=1 상태에서 E_n = n²π²ℏ²/(2ma²). 기저 상태는 n=1이므로 E₁ = π²ℏ²/(2ma²)',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-01-q04',
    type: 'short_answer',
    question: 'Hermitian 연산자의 고유값이 실수인 이유는?',
    options: [],
    answer: '관측가능한 물리량은 반드시 실수여야 하기 때문',
    explanation: '에너지, 운동량, 위치 등 모든 관측가능한 물리량은 실수값을 가져야 하므로 대응하는 연산자는 Hermitian이어야 합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-01-q05',
    type: 'multiple_choice',
    question: '조화 진동자의 에너지 준위는?',
    options: [
      'E_n = nℏω',
      'E_n = (n + 1/2)ℏω',
      'E_n = n²ℏω',
      'E_n = (n² + 1)ℏω'
    ],
    answer: 'E_n = (n + 1/2)ℏω',
    explanation: '양자 조화 진동자는 에너지 E_n = (n + 1/2)ℏω를 가지며, n=0 상태에서도 0이 아닌 영점 에너지 E₀ = ℏω/2를 가집니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-01-q06',
    type: 'short_answer',
    question: '수소 원자의 Bohr 모델에서 제1 Bohr 반지름(a₀)은?',
    options: [],
    answer: 'a₀ = ℏ²/(mₑke²) ≈ 0.53 Å',
    explanation: '전자가 원자핵 주위를 도는 가장 작은 허용 궤도의 반지름입니다. 약 0.53 옹스트롱 또는 53 피코미터입니다.',
    difficulty: 'hard'
  },

  // 박사 - 양자장론 (phd-phys-01)
  {
    id: 'phd-phys-01-q01',
    type: 'short_answer',
    question: '양자장론에서 입자는 무엇인가?',
    options: [],
    answer: '양자장의 여기(excitation)',
    explanation: 'QFT에서 입자는 기저 상태(진공) 위의 장의 양자화된 여기 모드입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-phys-01-q02',
    type: 'multiple_choice',
    question: 'Dirac 바다의 개념에서 정공(hole)은?',
    options: [
      '불안정한 상태이다',
      '음의 에너지를 가진 전자이다',
      '반입자(반전자/양전자)로 해석된다',
      '측정 오차이다'
    ],
    answer: '반입자(반전자/양전자)로 해석된다',
    explanation: 'Dirac 바다에서 음의 에너지 상태의 정공은 양의 에너지를 가진 반입자로 재해석됩니다. 이것이 양전자입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-01-q03',
    type: 'calculation',
    question: 'λφ⁴ 이론에서 coupling constant λ의 차원은?',
    options: [],
    answer: '무차원(dimensionless)',
    explanation: 'd=4 시공간에서 φ⁴ 항의 차원은 4이고, Lagrangian 밀도는 차원 4를 가져야 하므로 λ는 무차원입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-01-q04',
    type: 'short_answer',
    question: '게이지 불변성(gauge invariance)의 의미는?',
    options: [],
    answer: '국소적 위상 변환에 대한 불변성',
    explanation: 'φ(x) → exp(iα(x))φ(x) 국소 위상 변환 하에서 물리량이 불변이어야 하며, 이를 보존하려면 게이지 장(광자, W, Z, 글루온)이 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-01-q05',
    type: 'multiple_choice',
    question: 'Renormalization group 방정식에서 β 함수는?',
    options: [
      '커플링 상수의 에너지 스케일 의존성을 나타낸다',
      '입자의 질량이다',
      '파동함수 재규격화 인수이다',
      '상호작용 강도이다'
    ],
    answer: '커플링 상수의 에너지 스케일 의존성을 나타낸다',
    explanation: 'β(g) = μ dg/dμ는 에너지 스케일 μ에 따라 커플링 상수 g가 어떻게 변하는지 나타냅니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-01-q06',
    type: 'short_answer',
    question: '강한 상호작용의 컬러 전하(color charge)는?',
    options: [],
    answer: '빨강(R), 초록(G), 파랑(B) 또는 그 항-색깔',
    explanation: '강한 상호작용(QCD)에서는 쿼크와 글루온이 3가지 컬러 전하와 3가지 항-컬러 전하를 가집니다.',
    difficulty: 'hard'
  }
];

// ID로 빠르게 찾을 수 있도록 맵 생성
export const questionsMap = new Map(allQuestions.map(q => [q.id, q]));

export function getQuestionsByLessonId(lessonId: string): Question[] {
  const prefix = lessonId.split('-').slice(0, -1).join('-');
  return allQuestions.filter(q => q.id.startsWith(prefix));
}
