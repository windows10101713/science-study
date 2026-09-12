import type { Concept } from '../types'

// 초등 과학 레슨 (4-6학년)
export const elementaryLessons: Concept[] = [
  {
    id: 'elem-sci-01',
    subject: 'physics',
    grade: 4,
    level: 'basic',
    unit: '물질과 에너지',
    title: '자석의 성질',
    summary: '자석은 철을 당기는 힘을 가지고 있고, 같은 극끼리는 밀어내고 다른 극끼리는 당긴다.',
    keywords: ['자석', 'N극', 'S극', '자력', '자기장'],
    misconceptions: ['모든 금속이 자석에 붙는다', '자석의 힘은 항상 같다'],
    explanation: {
      basic: '자석은 특별한 돌로 만들어진 물건입니다. 자석은 철과 강철을 당깁니다. 자석의 양쪽 끝을 극이라고 부르는데, 같은 극끼리는 밀어내고 다른 극끼리는 당깁니다.',
      curriculum: '자석의 성질: N극(북극)과 S극(남극). 같은 극 간 반발력, 다른 극 간 인력. 자기장은 자석 주변의 공간에서 자기력이 작용하는 영역.',
      university: '자기 쌍극자 모멘트(magnetic dipole moment). 자기장 B의 정의와 측정. Lorentz 힘 F = qv × B. 페르자성 물질(ferromagnetic materials)의 원자 자기 모멘트 정렬.'
    },
    examples: [
      '냉장고에 붙어있는 자석',
      '나침반의 바늘이 북쪽을 가리킨다',
      '자석 두 개를 가까이 하면 밀어내거나 당긴다'
    ],
    observationActivity: {
      title: '자석으로 물체 끌어당기기',
      description: '자석으로 다양한 물체를 끌어당겨 자석에 붙는 것과 붙지 않는 것을 구분합니다.',
      prediction: '모든 금속이 자석에 붙을 것이다',
      materials: ['자석', '철 물체', '알루미늄', '구리', '종이'],
      steps: [
        '1. 자석을 준비합니다',
        '2. 다양한 물체를 자석에 가까이 합니다',
        '3. 붙는 물체와 붙지 않는 물체를 분류합니다',
        '4. 붙는 물체의 공통점을 찾습니다'
      ],
      safetyWarning: '강한 자석은 조심스럽게 다루세요'
    },
    questions: ['elem-sci-01-q01', 'elem-sci-01-q02', 'elem-sci-01-q03', 'elem-sci-01-q04', 'elem-sci-01-q05', 'elem-sci-01-q06']
  },
  {
    id: 'elem-sci-02',
    subject: 'biology',
    grade: 5,
    level: 'basic',
    unit: '생물과 환경',
    title: '식물의 성장',
    summary: '식물은 햇빛, 물, 공기, 흙에서 얻는 영양분으로 자란다.',
    keywords: ['식물', '광합성', '뿌리', '줄기', '잎'],
    misconceptions: ['식물은 흙에서 영양분을 흡수한다', '식물은 호흡하지 않는다'],
    explanation: {
      basic: '식물은 햇빛을 받으면 자라갑니다. 뿌리는 물을 빨아들이고, 잎은 햇빛을 받습니다. 식물은 이들을 이용해 양분을 만들어 자라납니다.',
      curriculum: '광합성: 식물이 햇빛 에너지를 화학 에너지(포도당)로 변환. 반응식: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. 호흡작용: 식물도 산소를 호흡한다.',
      university: 'C3 광합성과 C4 광합성. RuBisCO 효소의 역할. 광계 I, II와 전자전달계. Calvin cycle. 엽록체의 틸라코이드와 스트로마 구조.'
    },
    examples: [
      '해바라기는 햇빛을 따라 회전한다',
      '씨앗이 흙에 심어지면 싹이 난다',
      '넝쿨식물은 벽을 타고 올라간다'
    ],
    observationActivity: {
      title: '콩나물 기르기',
      description: '콩을 물에 불려 빛과 어둠 환경에서 기르며 성장 차이를 관찰합니다.',
      prediction: '빛을 받은 콩이 더 빨리 자랄 것이다',
      materials: ['콩', '물', '용기', '자'],
      steps: [
        '1. 콩을 물에 불립니다',
        '2. 용기 두 개에 나누어 담습니다',
        '3. 한 개는 빛이 드는 곳에, 다른 하나는 어두운 곳에 놓습니다',
        '4. 매일 물을 주고 자라는 높이를 측정합니다'
      ],
      safetyWarning: '곰팡이가 피지 않도록 적절히 통풍시켜주세요'
    },
    questions: ['elem-sci-02-q01', 'elem-sci-02-q02', 'elem-sci-02-q03', 'elem-sci-02-q04', 'elem-sci-02-q05', 'elem-sci-02-q06']
  },
  {
    id: 'elem-sci-03',
    subject: 'earthscience',
    grade: 6,
    level: 'basic',
    unit: '지구와 우주',
    title: '지구의 자전과 공전',
    summary: '지구는 자신의 축 주위로 자전하며 태양 주위를 공전한다.',
    keywords: ['자전', '공전', '시간대', '계절', '낮과 밤'],
    misconceptions: ['지구 자전이 빠르면 물체가 날아간다', '공전 때문에 하루가 생긴다'],
    explanation: {
      basic: '지구는 하루에 한 바퀴 도네요(자전). 이 때문에 낮과 밤이 생깁니다. 지구는 또한 1년에 태양 주위를 한 바퀴 돕니다(공전). 이 때문에 계절이 바뀝니다.',
      curriculum: '자전 주기: 약 24시간. 자전 방향: 서에서 동으로. 공전 주기: 약 365.25일. 자전축 기울기: 23.5도 → 계절 변화.',
      university: '지구의 각속도 ω = 2π/24hr. 원심 가속도 a = ωr (적도 ≈ 0.034 m/s²). 공전 궤도 반지름 ≈ 1.496×10¹¹ m (1 AU). 공전 속도 ≈ 30 km/s.'
    },
    examples: [
      '해는 동쪽에서 떠서 서쪽으로 진다',
      '봄에는 날이 길어지고 가을에는 짧아진다',
      '남반구에서는 계절이 반대이다'
    ],
    observationActivity: {
      title: '그림자 길이 변화 관찰',
      description: '같은 위치에서 하루 동안 물체의 그림자 길이를 여러 번 측정합니다.',
      prediction: '정오에 그림자가 가장 짧을 것이다',
      materials: ['막대', '자', '종이'],
      steps: [
        '1. 막대를 수직으로 세웁니다',
        '2. 아침, 오전, 정오, 오후, 저녁에 그림자 길이를 재봅니다',
        '3. 시간별 그림자 길이를 기록합니다',
        '4. 결과를 그래프로 그립니다'
      ],
      safetyWarning: '햇빛이 강할 때 눈을 보호하세요'
    },
    questions: ['elem-sci-03-q01', 'elem-sci-03-q02', 'elem-sci-03-q03', 'elem-sci-03-q04', 'elem-sci-03-q05', 'elem-sci-03-q06']
  },
  {
    id: 'elem-sci-04',
    subject: 'physics',
    grade: 4,
    level: 'basic',
    unit: '물질과 에너지',
    title: '열의 이동',
    summary: '열은 뜨거운 곳에서 찬 곳으로 이동한다.',
    keywords: ['열', '온도', '온난한', '전도', '대류'],
    misconceptions: ['찬 것이 뜨거운 곳에 있는 것이다', '열과 온도는 같다'],
    explanation: {
      basic: '뜨거운 물과 찬 물이 섞이면 따뜻한 물이 된다. 이것이 열이 이동하는 것입니다. 열은 항상 뜨거운 곳에서 찬 곳으로 움직인다.',
      curriculum: '열 전도: 물질을 통한 에너지 전달. 열 대류: 유체의 흐름을 통한 열 이동. 열복사: 전자기파를 통한 열 전달. Q = mcΔT.',
      university: '열 도도율(thermal conductivity) κ. Fourier의 열전도 방정식: q = -κ∇T. 대류 열전달 계수 h. Stefan-Boltzmann 법칙: P = σAT⁴.'
    },
    examples: [
      '금속 숟가락을 뜨거운 물에 담그면 손잡이도 뜨거워진다',
      '라디에이터 주변 공기가 올라간다',
      '햇빛이 검은 물체를 더 많이 데운다'
    ],
    observationActivity: {
      title: '물의 냉각 속도 측정',
      description: '뜨거운 물을 다양한 용기에 담아 식는 속도를 비교합니다.',
      prediction: '금속 용기에 담긴 물이 가장 빨리 식을 것이다',
      materials: ['뜨거운 물', '유리잔', '금속잔', '종이컵', '온도계'],
      steps: [
        '1. 각 용기에 같은 양의 뜨거운 물을 붓습니다',
        '2. 1분마다 온도를 측정합니다',
        '3. 15분 동안 계속 측정합니다',
        '4. 냉각 속도를 비교합니다'
      ],
      safetyWarning: '매우 뜨거운 물입니다. 화상을 입지 않도록 주의하세요'
    },
    questions: ['elem-sci-04-q01', 'elem-sci-04-q02', 'elem-sci-04-q03', 'elem-sci-04-q04', 'elem-sci-04-q05', 'elem-sci-04-q06']
  },
  {
    id: 'elem-sci-05',
    subject: 'biology',
    grade: 5,
    level: 'basic',
    unit: '생물과 환경',
    title: '동물의 생식과 성장',
    summary: '동물은 암컷과 수컷이 만나서 새로운 생명을 만든다.',
    keywords: ['생식', '번식', '태자', '알', '성장'],
    misconceptions: ['모든 동물이 알을 낳는다', '새끼 동물은 어른 동물의 축소판이다'],
    explanation: {
      basic: '많은 동물들은 암수가 새끼를 낳는다. 어떤 동물은 알을 낳고, 어떤 동물은 새끼를 낳는다. 새끼는 점차 자라서 어른이 된다.',
      curriculum: '무성생식(분열, 출아) vs 유성생식(암수 결합). 난생(알 낳음), 태생(새끼 낳음), 반태생. 변태: 완전변태(달걀-유충-번데기-성충), 불완전변태.',
      university: '게임 이론적 성비 결정 이론. 유성생식의 진화적 장점: 유전적 다양성. Meiosis와 유전 정보 혼합. 다양한 생식 전략의 진화적 트레이드오프.'
    },
    examples: [
      '개미는 여왕개미가 알을 낳는다',
      '나비는 애벌레에서 나비로 변한다',
      '사람은 어머니 뱃속에서 자란다'
    ],
    observationActivity: {
      title: '나방 또는 나비의 변태 관찰',
      description: '나방이나 나비의 알에서 성충까지의 변태 과정을 관찰합니다.',
      prediction: '약 한 달 후 나방이 나타날 것이다',
      materials: ['나방 애벌레(키트)', '먹이', '용기'],
      steps: [
        '1. 나방 키트를 준비합니다',
        '2. 매일 애벌레의 모습을 관찰하고 기록합니다',
        '3. 번데기로 변하는 과정을 촬영합니다',
        '4. 성충이 나타날 때까지 기록합니다'
      ],
      safetyWarning: '생명체를 소중히 다루고, 실험 후 적절히 방생하세요'
    },
    questions: ['elem-sci-05-q01', 'elem-sci-05-q02', 'elem-sci-05-q03', 'elem-sci-05-q04', 'elem-sci-05-q05', 'elem-sci-05-q06']
  },
  {
    id: 'elem-chem-01',
    subject: 'chemistry',
    grade: 4,
    level: 'basic',
    unit: '물질의 성질',
    title: '물질의 상태 변화',
    summary: '물질은 고체, 액체, 기체 상태로 존재하며 온도에 따라 상태가 바뀐다.',
    keywords: ['고체', '액체', '기체', '녹는점', '끓는점'],
    misconceptions: ['기체는 무게가 없다', '얼음이 녹으면 다른 물질이 된다'],
    explanation: {
      basic: '물은 얼면 얼음(고체)이 되고, 데우면 물(액체)에서 수증기(기체)가 됩니다. 물질의 종류는 바뀌지 않고 상태만 바뀝니다.',
      curriculum: '상태 변화: 융해(고체→액체), 응고(액체→고체), 기화(액체→기체), 액화(기체→액체), 승화(고체↔기체). 각 물질은 고유한 녹는점과 끓는점을 가집니다.',
      university: '상평형 다이어그램(phase diagram)의 P-T 곡선. 삼중점과 임계점. 상전이의 잠열(latent heat)과 Clausius-Clapeyron 방정식 dP/dT = L/(TΔV).'
    },
    deepDive: [
      '물질의 상태는 입자 사이의 거리와 운동 에너지로 설명됩니다. 고체는 입자가 규칙적으로 배열되어 진동만 하고, 액체는 입자들이 서로 미끄러지듯 움직이며, 기체는 입자들이 자유롭게 날아다닙니다.',
      '상태가 변할 때 온도가 잠시 멈추는 구간이 있는데, 이는 흡수하거나 방출한 열이 온도를 올리는 대신 입자 배열을 바꾸는 데(잠열) 사용되기 때문입니다.'
    ],
    examples: [
      '얼음이 녹아 물이 된다',
      '물을 끓이면 수증기가 된다',
      '드라이아이스는 액체 없이 바로 기체가 된다(승화)'
    ],
    observationActivity: {
      title: '얼음이 녹는 시간 측정',
      description: '같은 크기의 얼음을 다른 환경에서 녹이며 녹는 속도를 비교합니다.',
      prediction: '따뜻한 곳의 얼음이 더 빨리 녹을 것이다',
      materials: ['얼음 조각', '접시 2개', '온도계', '시계'],
      steps: [
        '1. 같은 크기의 얼음을 두 접시에 놓습니다',
        '2. 하나는 실온에, 하나는 따뜻한 곳에 둡니다',
        '3. 5분마다 녹은 정도를 관찰합니다',
        '4. 완전히 녹는 데 걸린 시간을 비교합니다'
      ],
      safetyWarning: '뜨거운 물을 사용할 때는 화상에 주의하세요'
    },
    questions: ['elem-chem-01-q01', 'elem-chem-01-q02', 'elem-chem-01-q03', 'elem-chem-01-q04', 'elem-chem-01-q05', 'elem-chem-01-q06']
  },
  {
    id: 'elem-math-01',
    subject: 'math',
    grade: 4,
    level: 'basic',
    unit: '수와 연산',
    title: '분수와 소수의 이해',
    summary: '전체를 여러 부분으로 나눈 것을 분수와 소수로 나타낼 수 있다.',
    keywords: ['분수', '소수', '분자', '분모', '자리값'],
    misconceptions: ['분모가 클수록 분수의 크기도 크다', '분수는 소수로 나타낼 수 없다'],
    explanation: {
      basic: '피자를 4조각으로 나누면 한 조각은 전체의 1/4입니다. 분수는 전체를 몇 개로 나누었는지(분모)와 그중 몇 개를 가졌는지(분자)로 나타냅니다.',
      curriculum: '분수 a/b는 b등분한 것 중 a개를 의미합니다. 분수는 나눗셈 a÷b와 같으며 소수로 변환할 수 있습니다(예: 1/4 = 0.25). 통분과 약분으로 크기를 비교합니다.',
      university: '유리수 체계 ℚ에서 분수는 정수의 순서쌍 동치류로 정의됩니다((a,b) ~ (c,d) ⟺ ad=bc). 소수 전개는 유한소수와 순환소수로 나뉘며, 분모의 소인수가 2와 5뿐이면 유한소수가 됩니다.'
    },
    deepDive: [
      '분수와 소수는 같은 수를 표현하는 두 가지 방법입니다. 분모가 2와 5의 거듭제곱으로만 이루어진 분수는 유한소수로, 그렇지 않으면 순환소수로 표현됩니다.',
      '분수의 크기를 비교할 때는 분모가 같으면 분자가 클수록 크고, 분모가 다르면 통분(공통분모로 맞춤)해서 비교해야 정확합니다.'
    ],
    examples: [
      '피자 한 판을 8조각으로 나누면 한 조각은 1/8',
      '1/2 = 0.5, 1/4 = 0.25',
      '거스름돈 계산에서 소수점 사용'
    ],
    observationActivity: {
      title: '종이 접어서 분수 만들기',
      description: '종이를 여러 번 접어 나오는 조각 수로 분수 개념을 확인합니다.',
      prediction: '두 번 접으면 4등분, 세 번 접으면 8등분이 될 것이다',
      materials: ['색종이 여러 장', '가위', '자'],
      steps: [
        '1. 종이를 반으로 접습니다(1/2)',
        '2. 다시 반으로 접습니다(1/4)',
        '3. 한 번 더 접어봅니다(1/8)',
        '4. 접힌 자국 수와 분수의 관계를 정리합니다'
      ],
      safetyWarning: '가위 사용 시 손을 다치지 않도록 주의하세요'
    },
    questions: ['elem-math-01-q01', 'elem-math-01-q02', 'elem-math-01-q03', 'elem-math-01-q04', 'elem-math-01-q05', 'elem-math-01-q06']
  },
  {
    id: 'elem-astro-01',
    subject: 'astronomy',
    grade: 5,
    level: 'basic',
    unit: '태양계와 별',
    title: '태양계와 행성',
    summary: '태양계는 태양과 그 주위를 도는 8개의 행성, 위성, 소행성 등으로 이루어져 있다.',
    keywords: ['태양계', '행성', '위성', '공전', '태양'],
    misconceptions: ['별과 행성은 같은 것이다', '태양은 지구 주위를 돈다'],
    explanation: {
      basic: '태양계에는 태양을 중심으로 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성 8개의 행성이 있습니다. 행성들은 태양 주위를 돕니다(공전).',
      curriculum: '태양계 행성은 지구형 행성(수성~화성, 암석)과 목성형 행성(목성~해왕성, 기체/얼음)으로 나뉩니다. 행성은 스스로 빛을 내지 않고 태양빛을 반사합니다.',
      university: 'Kepler의 행성 운동 법칙: 타원 궤도, 면적 속도 일정, T² ∝ a³. 태양계 형성 이론(성운설): 원시 태양계 원반의 중력 수축과 미행성체 집적 과정.'
    },
    deepDive: [
      '별은 스스로 핵융합 반응을 통해 빛을 내는 천체이고, 행성은 별 주위를 돌며 스스로 빛을 내지 못하고 별빛을 반사하는 천체입니다. 태양은 별이고, 지구를 포함한 8개는 행성입니다.',
      '케플러의 법칙에 따르면 태양에서 멀리 있는 행성일수록 공전 주기가 길어집니다. 이는 태양의 중력이 거리 제곱에 반비례해 약해지기 때문입니다.'
    ],
    examples: [
      '지구는 태양으로부터 세 번째 행성이다',
      '목성은 태양계에서 가장 큰 행성이다',
      '토성은 뚜렷한 고리를 가지고 있다'
    ],
    observationActivity: {
      title: '태양계 축척 모형 만들기',
      description: '태양과 행성들의 상대적 크기와 거리를 비율로 계산해 모형으로 표현합니다.',
      prediction: '실제 비율로 만들면 행성 사이 거리가 매우 멀어질 것이다',
      materials: ['색종이 또는 점토', '줄자', '큰 공간(운동장 등)'],
      steps: [
        '1. 태양과 각 행성의 상대적 크기 비율을 계산합니다',
        '2. 태양으로부터의 거리 비율도 계산합니다',
        '3. 축척에 맞게 모형을 배치합니다',
        '4. 실제 우주가 얼마나 광활한지 토의합니다'
      ],
      safetyWarning: '야외 활동 시 안전에 유의하세요'
    },
    questions: ['elem-astro-01-q01', 'elem-astro-01-q02', 'elem-astro-01-q03', 'elem-astro-01-q04', 'elem-astro-01-q05', 'elem-astro-01-q06']
  }
];

// 고등 과학 레슨 (10-12학년)
export const highSchoolLessons: Concept[] = [
  {
    id: 'high-phys-01',
    subject: 'physics',
    grade: 10,
    level: 'advanced',
    unit: '역학',
    title: '미적분을 이용한 운동 분석',
    summary: '위치, 속도, 가속도의 관계를 미적분으로 표현하고 분석한다.',
    keywords: ['미분', '적분', '운동 방정식', '속도', '위치'],
    misconceptions: ['속도와 속력이 같다', '가속도는 속도가 증가하는 것만 의미한다'],
    explanation: {
      basic: '물체의 위치가 시간에 따라 어떻게 바뀌는지 함수로 나타낼 수 있습니다. 그 함수를 미분하면 속도를 얻고, 다시 미분하면 가속도를 얻습니다.',
      curriculum: 'x(t) 함수에서 v(t) = dx/dt, a(t) = dv/dt = d²x/dt². 역으로 a(t)를 적분하면 v(t), v(t)를 적분하면 x(t). 초기 조건(x₀, v₀)이 필요.',
      university: 'Newtonian mechanics의 완전한 수학적 형식화. Lagrangian L = T - V, Hamilton의 정준 방정식 q̇ = ∂H/∂p, ṗ = -∂H/∂q. Phase space 분석. 보존량과 Noether 정리의 연결.'
    },
    examples: [
      'x(t) = 5t² - 2t + 3에서 t=2초일 때의 속도와 가속도',
      '자유 낙하: x = ½gt², v = gt',
      '포물선 운동의 궤적 분석'
    ],
    observationActivity: {
      title: '비디오 분석을 통한 실제 운동 측정',
      description: '공을 던진 영상을 프레임 단위로 분석하여 실제 x(t), v(t), a(t)를 구합니다.',
      prediction: '실제 측정값이 이론값과 일치할 것이다',
      materials: ['스마트폰(카메라)', '공', '자'],
      steps: [
        '1. 공을 던지는 영상을 고속 촬영합니다 (120fps 이상)',
        '2. 각 프레임에서 공의 위치를 측정합니다',
        '3. 시간차에 따른 위치 변화를 계산합니다',
        '4. v(t)와 a(t)를 구하고 그래프로 그립니다'
      ],
      safetyWarning: '실내에서 물건이 부서지지 않도록 주의하세요'
    },
    questions: ['high-phys-01-q01', 'high-phys-01-q02', 'high-phys-01-q03', 'high-phys-01-q04', 'high-phys-01-q05', 'high-phys-01-q06']
  },
  {
    id: 'high-phys-02',
    subject: 'physics',
    grade: 11,
    level: 'advanced',
    unit: '전자기',
    title: 'Maxwell 방정식과 전자기파',
    summary: 'Maxwell 방정식으로부터 전자기파의 존재를 유도하고 빛의 본질을 이해한다.',
    keywords: ['Maxwell', '전자기파', '빛', 'EM wave', '파동'],
    misconceptions: ['빛은 입자인가 파동인가', '전자기파는 매질이 필요하다'],
    explanation: {
      basic: '변하는 전기장은 자기장을 만들고, 변하는 자기장은 전기장을 만듭니다. 이 둘이 함께 진동하면서 공간을 통해 퍼져나가는 것이 빛입니다.',
      curriculum: 'Gauss 법칙, Ampère-Maxwell 법칙으로부터 파동 방정식 도출. 빛의 속도 c = 1/√(ε₀μ₀). Poynting vector S = E × H로 에너지 흐름. 편광, 간섭, 회절.',
      university: '특수상대론과의 연결: Maxwell 방정식은 Lorentz 불변. 4-벡터 formalism. Lagrangian 밀도. 양자 전자기역학 (QED)으로의 확장. Dirac 방정식과 반입자 예측.'
    },
    examples: [
      '라디오파, 마이크로파, 가시광선, 자외선, X선 모두 EM파',
      '빛의 속도는 c = 3×10⁸ m/s (상수)',
      '전자기파는 진공에서도 전파된다'
    ],
    observationActivity: {
      title: '전파의 성질 실험',
      description: 'AM/FM 라디오의 수신 성능을 다양한 조건에서 측정합니다.',
      prediction: '금속 차폐에 의해 신호가 감소할 것이다',
      materials: ['라디오', '금속 상자', '알루미늄 호일'],
      steps: [
        '1. 라디오를 특정 주파수로 맞춥니다',
        '2. 신호 강도를 측정합니다',
        '3. 금속으로 일부를 차폐합니다',
        '4. 신호 강도 변화를 기록합니다'
      ],
      safetyWarning: '안전한 환경에서 진행하세요'
    },
    questions: ['high-phys-02-q01', 'high-phys-02-q02', 'high-phys-02-q03', 'high-phys-02-q04', 'high-phys-02-q05', 'high-phys-02-q06']
  },
  {
    id: 'high-chem-01',
    subject: 'chemistry',
    grade: 10,
    level: 'advanced',
    unit: '화학량론',
    title: '몰과 화학량론',
    summary: '몰(mol) 개념을 이용해 화학 반응에서 물질의 양적 관계를 계산한다.',
    keywords: ['몰', '아보가드로수', '몰질량', '화학량론', '화학 반응식'],
    misconceptions: ['몰은 질량의 단위이다', '반응식의 계수는 질량 비율이다'],
    explanation: {
      basic: '몰은 입자 6.02×10²³개를 세는 단위입니다. 마치 "한 다스"가 12개를 뜻하듯, "1몰"은 특정 개수의 입자 묶음을 의미합니다.',
      curriculum: '아보가드로수 N_A = 6.02×10²³ /mol. 몰질량(g/mol)은 원소의 원자량과 같은 값. 화학 반응식의 계수는 몰 비율을 나타내며 질량 비율이 아닙니다.',
      university: '이상기체 몰부피 22.4 L/mol(STP). 몰 농도 M = mol/L. 한계 반응물(limiting reagent) 계산과 수율(yield) 개념. 화학량론적 비율을 이용한 정량 분석.'
    },
    deepDive: [
      '몰은 화학에서 매우 작은 입자(원자, 분자)를 다루기 위한 "숫자를 세는 단위"입니다. 실생활의 "한 타"(12개), "한 묶음" 개념과 비슷하지만, 아보가드로수는 상상하기 힘들 정도로 큰 숫자입니다.',
      '화학 반응식의 계수비는 항상 몰 수의 비율입니다. 질량으로 비교하려면 각 물질의 몰질량을 곱해 변환해야 하며, 이 과정을 놓치는 것이 가장 흔한 오개념입니다.'
    ],
    examples: [
      '물 18g은 정확히 1몰(H₂O의 몰질량 18 g/mol)',
      '2H₂ + O₂ → 2H₂O에서 수소 2몰과 산소 1몰이 반응',
      'STP에서 기체 1몰의 부피는 22.4L'
    ],
    observationActivity: {
      title: '베이킹소다와 식초 반응의 화학량론 확인',
      description: '베이킹소다(NaHCO₃)와 식초(아세트산)의 비율을 바꿔가며 생성되는 이산화탄소의 양을 비교합니다.',
      prediction: '한계 반응물이 소진되면 더 이상 기체가 발생하지 않을 것이다',
      materials: ['베이킹소다', '식초', '풍선', '삼각플라스크', '저울'],
      steps: [
        '1. 베이킹소다의 양을 고정하고 식초의 양을 다르게 준비합니다',
        '2. 플라스크에 베이킹소다를 넣고 풍선을 입구에 씌웁니다',
        '3. 식초를 부어 반응시키고 풍선이 부푸는 정도를 관찰합니다',
        '4. 식초 양에 따른 풍선 크기 변화를 기록하고 한계 반응물을 추론합니다'
      ],
      safetyWarning: '반응이 격렬할 수 있으니 실험 후 환기하세요'
    },
    questions: ['high-chem-01-q01', 'high-chem-01-q02', 'high-chem-01-q03', 'high-chem-01-q04', 'high-chem-01-q05', 'high-chem-01-q06']
  },
  {
    id: 'high-math-01',
    subject: 'math',
    grade: 10,
    level: 'advanced',
    unit: '미적분',
    title: '함수의 극한과 미분',
    summary: '함수가 특정 값에 가까워질 때의 극한과, 순간 변화율을 나타내는 미분을 배운다.',
    keywords: ['극한', '미분', '순간변화율', '접선', '연속함수'],
    misconceptions: ['극한값은 그 점에서의 함수값과 항상 같다', '미분은 그래프를 그리는 기술일 뿐이다'],
    explanation: {
      basic: '자동차의 속도계는 매 순간의 속도를 보여줍니다. 미분은 이렇게 "그 순간"의 변화율을 계산하는 방법입니다.',
      curriculum: 'lim(x→a) f(x)는 x가 a에 한없이 가까워질 때 f(x)가 가까워지는 값. 미분계수 f\'(a) = lim(h→0) [f(a+h)-f(a)]/h는 그 점에서의 순간변화율(접선의 기울기)입니다.',
      university: 'ε-δ 논법에 의한 극한의 엄밀한 정의. 미분가능성과 연속성의 관계(미분가능이면 연속이지만 역은 성립하지 않음). 평균값 정리와 Taylor 급수 전개.'
    },
    deepDive: [
      '극한은 "그 값에 도달하는가"가 아니라 "그 값에 한없이 가까워지는가"를 다룹니다. 함수가 그 점에서 정의되지 않아도 극한은 존재할 수 있습니다.',
      '미분은 기하학적으로 접선의 기울기, 물리학적으로 순간변화율(속도, 가속도 등)을 의미합니다. 두 관점이 같은 수학적 대상을 다르게 해석한 것임을 이해하는 것이 중요합니다.'
    ],
    examples: [
      'f(x) = x²에서 x=3일 때 순간변화율은 f\'(3) = 6',
      '자유낙하하는 물체의 순간 속도',
      '그래프의 특정 점에서 접선 그리기'
    ],
    observationActivity: {
      title: '평균변화율로 순간변화율 근사하기',
      description: '아주 작은 구간의 평균변화율을 계산해 미분계수에 근사시킵니다.',
      prediction: '구간을 좁힐수록 평균변화율이 특정 값에 수렴할 것이다',
      materials: ['그래프 용지', '계산기'],
      steps: [
        '1. f(x) = x²에서 x=2와 x=2+h 사이의 평균변화율을 계산합니다',
        '2. h를 1, 0.1, 0.01로 줄여가며 값을 기록합니다',
        '3. 값이 어떤 수에 가까워지는지 관찰합니다',
        '4. 실제 미분계수 f\'(2)=4와 비교합니다'
      ],
      safetyWarning: '계산 과정의 반올림 오차에 유의하세요'
    },
    questions: ['high-math-01-q01', 'high-math-01-q02', 'high-math-01-q03', 'high-math-01-q04', 'high-math-01-q05', 'high-math-01-q06']
  },
  {
    id: 'high-bio-01',
    subject: 'biology',
    grade: 11,
    level: 'advanced',
    unit: '유전',
    title: '유전의 법칙과 DNA',
    summary: '멘델의 유전 법칙과 DNA의 구조를 통해 형질이 자손에게 전달되는 원리를 이해한다.',
    keywords: ['DNA', '유전자', '멘델', '우열의 법칙', '염색체'],
    misconceptions: ['우성 형질이 열성보다 더 흔하거나 더 좋은 형질이다', 'DNA와 유전자는 같은 것이다'],
    explanation: {
      basic: '부모의 특징은 DNA라는 설계도를 통해 자식에게 전달됩니다. 눈 색깔, 혈액형 같은 형질은 부모에게서 물려받은 유전자의 조합으로 결정됩니다.',
      curriculum: '멘델의 법칙: 우열의 법칙, 분리의 법칙, 독립의 법칙. 유전자형(Rr)과 표현형(둥근콩)의 구분. DNA는 이중나선 구조로 염기서열(A-T, G-C)에 유전정보가 저장됩니다.',
      university: '감수분열에서의 교차(crossing over)와 유전적 재조합. Hardy-Weinberg 평형. 유전자 발현: 전사(transcription)와 번역(translation), 중심원리(central dogma). 돌연변이의 종류와 진화적 의미.'
    },
    deepDive: [
      '우성과 열성은 "좋고 나쁨"이 아니라 단지 이형접합(Rr)일 때 어느 형질이 표현형으로 드러나는지를 나타내는 개념입니다. 열성 형질도 집단에서 흔하게 나타날 수 있습니다.',
      'DNA는 유전 정보 전체를 담은 화학적 분자(이중나선)이고, 유전자는 그 DNA 중 특정 단백질을 만드는 정보를 담은 부분 구간입니다. 즉 유전자는 DNA의 일부입니다.'
    ],
    examples: [
      '완두콩의 둥근 모양(R)과 주름진 모양(r) 교배 실험',
      'ABO식 혈액형의 유전',
      '적록색맹의 반성유전'
    ],
    observationActivity: {
      title: '가상의 교배 실험으로 유전 비율 확인',
      description: '동전 던지기로 대립유전자의 무작위 조합을 시뮬레이션하여 3:1 분리비를 확인합니다.',
      prediction: '이형접합끼리 교배하면 표현형이 대략 3:1 비율로 나올 것이다',
      materials: ['동전 2개', '기록지'],
      steps: [
        '1. 동전 앞면을 R(우성), 뒷면을 r(열성)로 정합니다',
        '2. 두 동전을 동시에 던져 유전자형(RR, Rr, rr)을 기록합니다',
        '3. 40회 반복하여 표현형 비율을 계산합니다',
        '4. 이론적 비율(3:1)과 비교합니다'
      ],
      safetyWarning: '없음 (시뮬레이션 활동)'
    },
    questions: ['high-bio-01-q01', 'high-bio-01-q02', 'high-bio-01-q03', 'high-bio-01-q04', 'high-bio-01-q05', 'high-bio-01-q06']
  },
  {
    id: 'high-astro-01',
    subject: 'astronomy',
    grade: 11,
    level: 'advanced',
    unit: '우주론',
    title: '우주의 팽창과 빅뱅 이론',
    summary: '우주는 빅뱅으로부터 시작되어 계속 팽창하고 있으며, 이는 여러 관측 증거로 뒷받침된다.',
    keywords: ['빅뱅', '허블의 법칙', '적색편이', '우주배경복사', '우주팽창'],
    misconceptions: ['빅뱅은 공간 속에서 일어난 폭발이다', '은하들은 우주 공간 속을 이동해서 멀어진다'],
    explanation: {
      basic: '우주는 약 138억 년 전 아주 작고 뜨거운 상태에서 시작해 계속 팽창해 왔습니다. 멀리 있는 은하일수록 우리에게서 더 빨리 멀어지고 있습니다.',
      curriculum: '허블의 법칙: v = H₀d (은하의 후퇴속도는 거리에 비례). 적색편이(redshift)로 후퇴속도 측정. 우주배경복사(CMB)는 빅뱅의 잔광으로 빅뱅 이론의 강력한 증거입니다.',
      university: 'Friedmann 방정식으로 기술되는 우주의 팽창. 스케일 인자 a(t)와 곡률, 암흑에너지 Λ의 역할. 급팽창 이론(inflation)이 설명하는 우주의 평탄성과 지평선 문제.'
    },
    deepDive: [
      '빅뱅은 이미 존재하던 빈 공간 속에서 물질이 폭발한 사건이 아니라, 공간 자체가 팽창하기 시작한 사건입니다. 은하들은 공간 속을 움직이는 것이 아니라 공간 자체가 늘어나면서 서로 멀어집니다.',
      '우주배경복사는 빅뱅 후 약 38만 년이 지나 우주가 투명해지면서 방출된 빛의 흔적으로, 오늘날 절대온도 약 2.7K의 마이크로파로 우주 전역에서 매우 균일하게 관측됩니다.'
    ],
    examples: [
      '허블 우주망원경의 은하 후퇴속도 관측',
      '우주배경복사(CMB) 지도',
      '가장 오래된 빛으로 추정되는 우주 초기 은하 관측'
    ],
    observationActivity: {
      title: '풍선 모형으로 우주 팽창 이해하기',
      description: '풍선 표면에 점을 찍고 부풀리며 은하 사이의 거리 변화를 시뮬레이션합니다.',
      prediction: '풍선을 불수록 모든 점 사이의 거리가 서로 멀어질 것이다',
      materials: ['풍선', '유성펜'],
      steps: [
        '1. 풍선을 약간만 불고 표면에 점을 여러 개 찍습니다',
        '2. 점 사이의 거리를 측정합니다',
        '3. 풍선을 더 불면서 거리를 다시 측정합니다',
        '4. 모든 점 사이의 거리가 고르게 늘어나는 것을 확인합니다'
      ],
      safetyWarning: '풍선이 터질 수 있으니 눈 가까이에서 불지 마세요'
    },
    questions: ['high-astro-01-q01', 'high-astro-01-q02', 'high-astro-01-q03', 'high-astro-01-q04', 'high-astro-01-q05', 'high-astro-01-q06']
  },
  {
    id: 'high-med-01',
    subject: 'medicine',
    grade: 12,
    level: 'advanced',
    unit: '인체와 건강',
    title: '인체의 항상성과 면역',
    summary: '우리 몸은 다양한 조절 시스템으로 내부 환경을 일정하게 유지하고 병원체로부터 스스로를 보호한다.',
    keywords: ['항상성', '면역', '백혈구', '항체', '자율신경계'],
    misconceptions: ['체온이 항상 정확히 36.5도로 고정되어 있다', '한 번 걸린 병에는 절대 다시 걸리지 않는다'],
    explanation: {
      basic: '우리 몸은 체온, 혈당, 수분량 등을 일정하게 유지하려고 끊임없이 조절합니다. 이를 항상성이라고 하며, 세균이나 바이러스가 침입하면 면역 시스템이 맞서 싸웁니다.',
      curriculum: '항상성 조절: 되먹임 조절(feedback control), 특히 음성 되먹임이 대부분. 선천면역(피부, 백혈구의 식균작용)과 후천면역(항체, 기억세포)의 차이. 예방접종의 원리.',
      university: '체액성 면역(B세포-항체)과 세포성 면역(T세포)의 상호작용. 사이토카인 신호전달. 자가면역질환과 면역관용의 붕괴. 백신의 종류(약독화, 불활성화, mRNA)와 작용 기전.'
    },
    deepDive: [
      '체온이나 혈당 같은 값은 정확히 고정되는 것이 아니라 좁은 범위 안에서 오르내리며 조절됩니다. 이 조절은 대부분 "변화를 감지하면 반대 방향으로 되돌리는" 음성 되먹임 방식으로 이루어집니다.',
      '면역계는 한 번 만난 병원체를 기억하는 기억세포를 만들어 재감염 시 더 빠르고 강하게 반응합니다. 예방접종은 실제 감염 없이 이 기억을 미리 만들어 두는 방법입니다.'
    ],
    examples: [
      '더우면 땀을 흘려 체온을 낮춘다',
      '상처가 나면 백혈구가 몰려들어 세균과 싸운다',
      '홍역 예방접종 후 항체가 생겨 재감염을 막는다'
    ],
    observationActivity: {
      title: '운동 전후 심박수 변화로 항상성 조절 관찰',
      description: '운동 전후의 심박수 변화와 회복 시간을 측정하여 항상성 조절을 확인합니다.',
      prediction: '운동 직후 심박수가 크게 증가했다가 시간이 지나면 안정 시 수준으로 돌아올 것이다',
      materials: ['시계 또는 스톱워치', '기록지'],
      steps: [
        '1. 안정 시 1분간 맥박수를 측정합니다',
        '2. 제자리에서 1분간 가볍게 뛴 후 맥박수를 측정합니다',
        '3. 이후 1분마다 맥박수를 측정하며 회복 과정을 기록합니다',
        '4. 심박수가 안정 시 수준으로 돌아오는 데 걸린 시간을 분석합니다'
      ],
      safetyWarning: '무리한 운동은 피하고 몸 상태에 따라 조절하세요'
    },
    questions: ['high-med-01-q01', 'high-med-01-q02', 'high-med-01-q03', 'high-med-01-q04', 'high-med-01-q05', 'high-med-01-q06']
  }
];

// 중등 과학 레슨 (7-9학년)
export const middleLessons: Concept[] = [
  {
    id: 'middle-phys-01',
    subject: 'physics',
    grade: 7,
    level: 'curriculum',
    unit: '힘과 운동',
    title: '힘과 운동의 관계',
    summary: '물체에 작용하는 힘은 운동 상태(속력과 방향)를 변화시킨다.',
    keywords: ['힘', '운동', '속력', '관성', '뉴턴의 법칙'],
    misconceptions: ['힘이 없으면 물체는 멈춘다', '무거운 물체가 항상 더 빨리 떨어진다'],
    explanation: {
      basic: '가만히 있는 공을 발로 차면 움직입니다. 힘은 물체를 움직이게 하거나, 움직이는 방향과 속력을 바꿉니다.',
      curriculum: '관성의 법칙(뉴턴 제1법칙): 힘이 작용하지 않으면 물체는 현재의 운동 상태를 유지합니다. 가속도의 법칙(제2법칙): F=ma. 작용-반작용의 법칙(제3법칙).',
      university: '뉴턴 역학의 벡터적 형식화: ΣF = ma (벡터 방정식). 관성기준계와 비관성기준계에서의 겉보기 힘(원심력, 코리올리 힘). 운동량 보존과 뉴턴 제3법칙의 연결.'
    },
    deepDive: [
      '뉴턴의 제1법칙(관성의 법칙)은 "힘이 없으면 멈춘다"는 일상적 직관과 반대로, 외부 힘이 없으면 물체는 등속 직선 운동(또는 정지)을 계속한다고 말합니다. 우리가 흔히 보는 "멈추는" 현상은 마찰력이라는 힘이 작용하기 때문입니다.',
      '같은 힘이라도 질량이 클수록 가속도는 작아집니다(a=F/m). 이것이 무거운 트럭을 밀기 어려운 이유이며, 무게와 가속도를 혼동하지 않는 것이 중요합니다.'
    ],
    examples: [
      '정지한 버스가 갑자기 출발하면 몸이 뒤로 쏠린다(관성)',
      '같은 힘으로 밀어도 무거운 카트는 천천히 가속된다',
      '로켓이 가스를 분출하며 반대 방향으로 나아간다(작용-반작용)'
    ],
    observationActivity: {
      title: '수레의 질량과 가속도 관계 실험',
      description: '같은 힘으로 질량이 다른 수레를 밀어 가속도 차이를 비교합니다.',
      prediction: '무거운 수레일수록 가속도가 작을 것이다',
      materials: ['장난감 수레', '추(무게 추)', '고무줄 또는 용수철저울', '자'],
      steps: [
        '1. 수레에 일정한 힘(고무줄의 늘어난 길이 동일)을 가합니다',
        '2. 수레의 질량을 바꿔가며 이동 거리와 시간을 측정합니다',
        '3. 가속도를 계산합니다(a = 2s/t²)',
        '4. 질량과 가속도의 관계를 그래프로 그립니다'
      ],
      safetyWarning: '수레가 튀어나가지 않도록 주변을 정리하세요'
    },
    questions: ['middle-phys-01-q01', 'middle-phys-01-q02', 'middle-phys-01-q03', 'middle-phys-01-q04', 'middle-phys-01-q05', 'middle-phys-01-q06']
  },
  {
    id: 'middle-phys-02',
    subject: 'physics',
    grade: 8,
    level: 'curriculum',
    unit: '일과 에너지',
    title: '일과 에너지 보존',
    summary: '에너지는 형태를 바꿀 수 있지만 새로 생기거나 없어지지 않고 총량이 보존된다.',
    keywords: ['일', '에너지', '위치에너지', '운동에너지', '에너지 보존 법칙'],
    misconceptions: ['에너지는 사용하면 사라진다', '높이 있는 물체는 항상 에너지가 크다'],
    explanation: {
      basic: '높은 곳에 있는 공을 떨어뜨리면 점점 빨라집니다. 위치에너지가 운동에너지로 바뀌는 것이며, 에너지는 형태만 바뀔 뿐 없어지지 않습니다.',
      curriculum: '일 W = F·d(힘 방향 이동거리). 운동에너지 KE = ½mv². 위치에너지 PE = mgh. 역학적 에너지 보존 법칙: 마찰이 없으면 KE+PE는 일정합니다.',
      university: '일-에너지 정리: W_net = ΔKE. 보존력과 비보존력의 구분, 퍼텐셜 에너지 함수 U(x)와 F=-dU/dx. 에너지 소산(마찰, 공기저항)과 열역학 제1법칙과의 연결.'
    },
    deepDive: [
      '에너지가 "사라진다"고 느끼는 경우 대부분은 열이나 소리 등 눈에 보이지 않는 형태로 전환된 것입니다. 마찰이 있는 계에서도 에너지 총량(역학적 에너지+열에너지 등)은 보존됩니다.',
      '위치에너지는 높이만으로 결정되지 않고 기준점 설정에 따라 달라지는 상대적인 양입니다. 중요한 것은 에너지의 "차이"이지 절대적인 값 자체가 아닙니다.'
    ],
    examples: [
      '롤러코스터가 내려갈 때 속도가 빨라진다',
      '진자가 흔들리며 운동에너지와 위치에너지가 서로 바뀐다',
      '수력발전은 물의 위치에너지를 전기에너지로 바꾼다'
    ],
    observationActivity: {
      title: '경사면에서 구슬의 에너지 전환 관찰',
      description: '높이가 다른 경사면에서 구슬을 굴려 바닥에서의 속력을 비교합니다.',
      prediction: '경사면 높이가 높을수록 바닥에서의 속력이 빠를 것이다',
      materials: ['경사로(책이나 널빤지)', '구슬', '자', '스톱워치'],
      steps: [
        '1. 경사면의 높이를 다르게 설정합니다',
        '2. 각 높이에서 구슬을 굴려 바닥 통과 시간을 측정합니다',
        '3. 평균 속력을 계산합니다',
        '4. 높이와 속력의 관계를 정리하고 에너지 보존과 연결합니다'
      ],
      safetyWarning: '구슬이 튀어나가지 않도록 벽이나 상자로 막아두세요'
    },
    questions: ['middle-phys-02-q01', 'middle-phys-02-q02', 'middle-phys-02-q03', 'middle-phys-02-q04', 'middle-phys-02-q05', 'middle-phys-02-q06']
  },
  {
    id: 'middle-chem-01',
    subject: 'chemistry',
    grade: 7,
    level: 'curriculum',
    unit: '물질의 구성',
    title: '원소와 원자',
    summary: '모든 물질은 더 이상 쪼갤 수 없는 기본 입자인 원자로 이루어져 있으며, 원소는 한 종류의 원자로 된 물질이다.',
    keywords: ['원소', '원자', '주기율표', '원자핵', '전자'],
    misconceptions: ['원자는 눈에 보이지 않으니 존재하지 않는 것과 같다', '원소와 화합물은 같은 개념이다'],
    explanation: {
      basic: '모든 물질은 아주 작은 알갱이인 원자로 이루어져 있습니다. 한 가지 원자로만 이루어진 물질을 원소라고 하고, 여러 원소가 결합한 것을 화합물이라고 합니다.',
      curriculum: '원자는 원자핵(양성자+중성자)과 그 주위를 도는 전자로 구성됩니다. 원소는 양성자 수(원자번호)로 구분되며 주기율표에 정리되어 있습니다.',
      university: '보어 모형에서 현대 양자역학적 원자 모형(오비탈, 전자구름)으로의 발전. 동위원소와 질량수. 유효 핵전하와 주기적 성질(이온화 에너지, 전기음성도)의 경향성.'
    },
    deepDive: [
      '원자는 매우 작아서 눈에 보이지 않지만, 전자현미경이나 원자간력현미경(AFM) 같은 도구로 실제로 관찰되고 조작할 수 있습니다. "보이지 않는다"는 것이 "존재하지 않는다"를 의미하지 않습니다.',
      '원소는 순물질 중에서도 한 종류의 원자로만 구성된 것(예: 산소 O₂, 철 Fe)이고, 화합물은 두 종류 이상의 원소가 일정한 비율로 결합한 것(예: 물 H₂O)입니다.'
    ],
    examples: [
      '산소 기체(O₂)는 산소 원소로만 이루어진 원소',
      '물(H₂O)은 수소와 산소가 결합한 화합물',
      '주기율표에서 같은 세로줄(족)의 원소는 비슷한 성질을 가진다'
    ],
    observationActivity: {
      title: '주기율표에서 원소 성질 패턴 찾기',
      description: '주기율표를 보고 같은 족 원소들의 공통점을 찾아봅니다.',
      prediction: '같은 족(세로줄) 원소들은 반응성이 비슷할 것이다',
      materials: ['주기율표 인쇄물', '색연필'],
      steps: [
        '1. 1족(알칼리 금속)과 17족(할로젠) 원소들을 표시합니다',
        '2. 각 족 원소의 이름과 기호를 정리합니다',
        '3. 자료를 참고해 반응성 패턴을 조사합니다',
        '4. 같은 족 원소들의 공통점을 정리해 발표합니다'
      ],
      safetyWarning: '실제 알칼리 금속은 물과 격렬히 반응하므로 직접 다루지 않습니다'
    },
    questions: ['middle-chem-01-q01', 'middle-chem-01-q02', 'middle-chem-01-q03', 'middle-chem-01-q04', 'middle-chem-01-q05', 'middle-chem-01-q06']
  },
  {
    id: 'middle-math-01',
    subject: 'math',
    grade: 7,
    level: 'curriculum',
    unit: '문자와 식',
    title: '일차방정식',
    summary: '미지수가 하나이고 차수가 1인 방정식을 세우고 풀어 문제를 해결한다.',
    keywords: ['방정식', '미지수', '등식의 성질', '일차방정식', '해'],
    misconceptions: ['등식의 양변에 다른 수를 더해도 등식이 유지된다', '방정식의 해는 항상 하나뿐이다'],
    explanation: {
      basic: '어떤 수를 모를 때 x로 놓고 식을 세워 그 값을 구하는 것이 방정식입니다. 저울처럼 양쪽이 같아지도록 맞춰야 합니다.',
      curriculum: '등식의 성질: 양변에 같은 수를 더하거나 빼거나 곱하거나(0이 아닌 수로) 나누어도 등식은 성립합니다. 이항을 이용해 ax+b=0 꼴로 정리하여 해를 구합니다.',
      university: '체(field) 위에서의 선형방정식 이론으로의 일반화. 선형방정식 시스템과 행렬을 이용한 해법(가우스 소거법)으로 연결되는 개념적 기초.'
    },
    deepDive: [
      '방정식을 푸는 과정은 저울의 평형을 유지하는 것과 같습니다. 양변에 항상 "같은 연산"을 적용해야 등식이 유지되며, 한쪽에만 연산을 하면 평형이 깨집니다.',
      '일차방정식은 일반적으로 해가 하나이지만, 특수한 경우(양변이 항등식이 되거나 모순이 되는 경우) 해가 무수히 많거나 없을 수도 있습니다.'
    ],
    examples: [
      '어떤 수에 5를 더하면 12가 될 때 그 수 구하기: x+5=12',
      '나이 문제: 올해 나이의 2배에서 3을 빼면 15일 때 나이 구하기',
      '거리=속력×시간 공식을 이용한 방정식 세우기'
    ],
    observationActivity: {
      title: '저울 모형으로 방정식 원리 체험하기',
      description: '양팔 저울과 물건을 이용해 등식의 성질을 직접 체험합니다.',
      prediction: '양쪽에 같은 무게를 더하거나 빼면 저울은 계속 평형을 유지할 것이다',
      materials: ['양팔 저울(또는 옷걸이로 만든 모형)', '같은 무게의 추 여러 개'],
      steps: [
        '1. 저울 양쪽에 추를 놓아 평형을 맞춥니다',
        '2. 한쪽에 추를 추가하고 다른 쪽에도 같은 만큼 추가해봅니다',
        '3. 양쪽에서 같은 만큼 덜어내 봅니다',
        '4. 평형이 유지되는 규칙을 등식의 성질과 연결해 정리합니다'
      ],
      safetyWarning: '무거운 추를 다룰 때 발등에 떨어지지 않도록 주의하세요'
    },
    questions: ['middle-math-01-q01', 'middle-math-01-q02', 'middle-math-01-q03', 'middle-math-01-q04', 'middle-math-01-q05', 'middle-math-01-q06']
  },
  {
    id: 'middle-bio-01',
    subject: 'biology',
    grade: 8,
    level: 'curriculum',
    unit: '생명의 구성',
    title: '세포와 물질대사',
    summary: '생물의 몸은 세포로 이루어져 있으며, 세포는 물질대사를 통해 생명활동에 필요한 에너지를 얻는다.',
    keywords: ['세포', '세포막', '미토콘드리아', '물질대사', '핵'],
    misconceptions: ['식물세포에는 세포벽만 있고 세포막은 없다', '작은 생물일수록 세포도 작다'],
    explanation: {
      basic: '우리 몸은 아주 작은 세포들이 모여 이루어져 있습니다. 세포 안의 미토콘드리아는 음식으로부터 에너지를 만들어내는 발전소 역할을 합니다.',
      curriculum: '동물세포와 식물세포의 공통점(세포막, 핵, 미토콘드리아)과 차이점(세포벽, 엽록체, 큰 액포는 식물세포에만 있음). 세포호흡: 포도당+산소 → 이산화탄소+물+에너지(ATP).',
      university: '세포소기관의 미세구조와 기능(소포체, 골지체, 리보솜). 세포호흡의 단계: 해당과정, TCA회로, 전자전달계. ATP 합성의 화학삼투 이론(chemiosmosis).'
    },
    deepDive: [
      '세포의 크기는 생물 전체 크기와 직접적인 관련이 없습니다. 코끼리와 생쥐의 세포 크기는 비슷하며, 코끼리가 더 큰 이유는 세포의 수가 훨씬 많기 때문입니다.',
      '식물세포에는 세포벽과 함께 세포막도 반드시 존재합니다. 세포벽은 세포막 바깥을 감싸는 단단한 구조물이며, 물질 출입을 조절하는 것은 여전히 세포막입니다.'
    ],
    examples: [
      '운동을 하면 근육세포의 미토콘드리아가 더 많은 에너지를 생산한다',
      '양파 표피세포를 현미경으로 관찰하면 세포벽과 핵이 보인다',
      '효모는 산소가 없을 때 발효를 통해 에너지를 얻는다'
    ],
    observationActivity: {
      title: '양파 표피세포 현미경 관찰',
      description: '양파의 얇은 표피를 벗겨 현미경으로 세포의 구조를 관찰합니다.',
      prediction: '세포벽과 핵이 뚜렷하게 보일 것이다',
      materials: ['양파', '핀셋', '슬라이드글라스', '현미경', '아이오딘 용액'],
      steps: [
        '1. 양파의 얇은 속껍질을 핀셋으로 벗겨냅니다',
        '2. 슬라이드글라스에 놓고 아이오딘 용액을 한 방울 떨어뜨립니다',
        '3. 덮개유리를 덮고 현미경으로 관찰합니다',
        '4. 관찰한 세포 구조를 그림으로 기록합니다'
      ],
      safetyWarning: '현미경 조명과 유리 기구 사용 시 깨지지 않도록 조심하세요'
    },
    questions: ['middle-bio-01-q01', 'middle-bio-01-q02', 'middle-bio-01-q03', 'middle-bio-01-q04', 'middle-bio-01-q05', 'middle-bio-01-q06']
  },
  {
    id: 'middle-earth-01',
    subject: 'earthscience',
    grade: 8,
    level: 'curriculum',
    unit: '지구의 구조',
    title: '지층과 판구조론',
    summary: '지구의 겉껍질은 여러 개의 판으로 나뉘어 있으며, 판의 움직임이 지진과 화산, 지층 형성을 일으킨다.',
    keywords: ['판구조론', '지층', '지진', '화산', '대륙이동설'],
    misconceptions: ['대륙은 절대 움직이지 않는다', '지진은 예고 없이 아무 이유 없이 발생한다'],
    explanation: {
      basic: '지구의 겉면은 여러 조각(판)으로 나뉘어 있고, 이 판들은 아주 천천히 움직입니다. 판이 부딪히거나 갈라지는 경계에서 지진과 화산이 자주 일어납니다.',
      curriculum: '판의 경계 종류: 발산 경계(판이 갈라짐, 해령), 수렴 경계(판이 부딪힘, 섭입대·습곡산맥), 보존 경계(판이 어긋남, 변환단층). 지층은 퇴적물이 쌓여 만들어지며 아래층이 더 오래된 것이 원칙(지층누중의 법칙).',
      university: '맨틀대류설과 판을 움직이는 힘(mantle convection, ridge push, slab pull). 고지자기(paleomagnetism) 자료로 확인된 해저확장설의 증거. 지진파(P파, S파) 분석을 통한 지구 내부 구조 규명.'
    },
    deepDive: [
      '대륙이동설은 처음 제안됐을 때 이동시키는 힘을 설명하지 못해 받아들여지지 않았지만, 이후 맨틀대류와 해저확장 증거가 발견되며 판구조론으로 발전해 현재는 지구과학의 핵심 이론으로 확립되었습니다.',
      '지진은 오랫동안 축적된 판 경계의 변형 에너지가 갑자기 방출되는 현상으로, 원인 없이 무작위로 일어나는 것이 아니라 판의 상대적 움직임이라는 명확한 물리적 원인이 있습니다.'
    ],
    examples: [
      '히말라야 산맥은 인도판과 유라시아판의 충돌로 형성됨',
      '태평양 주변의 불의 고리(Ring of Fire)에서 화산과 지진이 잦음',
      '대서양 중앙 해령에서 새로운 해양지각이 생성됨'
    ],
    observationActivity: {
      title: '퇴적물 층 쌓기 실험으로 지층 형성 이해',
      description: '다른 색의 모래와 흙을 순서대로 쌓아 지층 생성 원리를 재현합니다.',
      prediction: '나중에 넣은 물질일수록 위쪽 층에 위치할 것이다',
      materials: ['색이 다른 모래·흙 여러 종류', '투명한 병', '물'],
      steps: [
        '1. 투명한 병에 색이 다른 모래를 순서대로 넣습니다',
        '2. 층이 쌓이는 순서를 기록합니다',
        '3. 물을 약간 부어 층이 어떻게 정렬되는지 관찰합니다',
        '4. 지층누중의 법칙과 연결지어 설명합니다'
      ],
      safetyWarning: '모래가 눈에 들어가지 않도록 주의하세요'
    },
    questions: ['middle-earth-01-q01', 'middle-earth-01-q02', 'middle-earth-01-q03', 'middle-earth-01-q04', 'middle-earth-01-q05', 'middle-earth-01-q06']
  },
  {
    id: 'middle-astro-01',
    subject: 'astronomy',
    grade: 8,
    level: 'curriculum',
    unit: '별과 은하',
    title: '별의 일생과 은하',
    summary: '별은 탄생부터 소멸까지 일생을 거치며, 수많은 별들이 모여 은하를 이룬다.',
    keywords: ['별', '은하', '주계열성', '초신성', '성운'],
    misconceptions: ['모든 별은 영원히 빛난다', '태양계 전체가 우주의 중심이다'],
    explanation: {
      basic: '별은 가스와 먼지로 이루어진 성운에서 태어나 오랫동안 빛나다가 결국 일생을 마칩니다. 태양처럼 수많은 별들이 모여 은하를 이룹니다.',
      curriculum: '별의 진화: 성운 → 원시별 → 주계열성 → (질량에 따라) 적색거성/초거성 → 백색왜성 또는 초신성 폭발 → 중성자별/블랙홀. 우리은하는 약 수천억 개의 별로 이루어진 나선은하입니다.',
      university: 'H-R도(Hertzsprung-Russell diagram)로 본 별의 분류와 진화 경로. 항성 내부의 핵융합 반응(수소 연소, 헬륨 연소 등)과 찬드라세카르 한계. 은하의 분류(나선, 타원, 불규칙)와 은하 회전곡선으로 추정하는 암흑물질.'
    },
    deepDive: [
      '별의 최후는 질량에 따라 크게 달라집니다. 태양 정도 질량의 별은 적색거성을 거쳐 백색왜성으로 조용히 생을 마치지만, 훨씬 무거운 별은 초신성으로 폭발한 뒤 중성자별이나 블랙홀이 됩니다.',
      '태양계는 우리은하 안에 있는 수천억 개의 별 중 하나의 항성계에 불과하며, 우리은하 역시 우주에 존재하는 수천억 개의 은하 중 하나입니다.'
    ],
    examples: [
      '오리온 대성운은 별이 활발히 탄생하는 지역',
      '초신성 폭발의 잔해인 게성운',
      '안드로메다 은하는 우리은하에서 가장 가까운 대형 은하'
    ],
    observationActivity: {
      title: '별의 밝기와 거리의 관계 이해하기',
      description: '손전등과의 거리를 다르게 하여 겉보기 밝기가 어떻게 변하는지 관찰합니다.',
      prediction: '거리가 멀어질수록 밝기는 거리의 제곱에 반비례해 어두워질 것이다',
      materials: ['손전등', '조도계 또는 스마트폰 조도앱', '줄자'],
      steps: [
        '1. 손전등을 일정한 밝기로 켭니다',
        '2. 1m, 2m, 4m 거리에서 밝기를 측정합니다',
        '3. 거리와 밝기의 관계를 표와 그래프로 나타냅니다',
        '4. 역제곱 법칙과 별의 겉보기 밝기 개념을 연결짓습니다'
      ],
      safetyWarning: '어두운 곳에서 이동할 때 넘어지지 않도록 주의하세요'
    },
    questions: ['middle-astro-01-q01', 'middle-astro-01-q02', 'middle-astro-01-q03', 'middle-astro-01-q04', 'middle-astro-01-q05', 'middle-astro-01-q06']
  }
];

// 석사 수준 레슨
export const masterLessons: Concept[] = [
  {
    id: 'master-phys-01',
    subject: 'physics',
    grade: 16,
    level: 'expert',
    unit: '양자역학',
    title: 'Schrödinger 방정식과 파동함수',
    summary: '양자계의 상태를 파동함수로 표현하고 시간 진화를 Schrödinger 방정식으로 기술한다.',
    keywords: ['파동함수', 'Schrödinger', '고유값', '기저', '확률 진폭'],
    misconceptions: ['파동함수가 입자의 실제 경로이다', '측정하지 않으면 입자의 위치가 정해지지 않는다'],
    explanation: {
      basic: '양자 입자의 상태는 ψ(r,t)로 표현되며, |ψ|²이 위치 확률 밀도입니다. 입자의 운동은 Schrödinger 방정식 iℏ∂ψ/∂t = Ĥψ로 결정됩니다.',
      curriculum: 'Time-dependent Schrödinger equation. 정상 상태 해: Ĥψ_n = E_n ψ_n. 무한 정사각형 우물, 조화 진동자, 수소 원자의 정확한 해. 각운동량 연산자 L̂.',
      university: '함수해석학 기초: Hilbert 공간, 선형 연산자, 고유값 문제. 힐버트 공간에서의 내적 ⟨ψ₁|ψ₂⟩ = ∫ψ₁*ψ₂ dr. Dirac 표기법. 표현 변환(position, momentum, energy basis). 시간 진화 연산자 U(t) = exp(-iĤt/ℏ).'
    },
    examples: [
      '입자의 상태가 중첩(superposition)될 수 있다',
      '측정은 파동함수를 붕괴시킨다(collapse)',
      '불확정성 원리 Δx·Δp ≥ ℏ/2'
    ],
    observationActivity: {
      title: '수치 해법으로 Schrödinger 방정식 풀이',
      description: '간단한 퍼텐셜에서 정상 상태를 수치적으로 구하고 가시화합니다.',
      prediction: '에너지 준위가 양자화될 것이다',
      materials: ['컴퓨터', 'Python/NumPy'],
      steps: [
        '1. 무한 정사각형 우물 문제를 행렬 형식으로 이산화',
        '2. 고유값 해석(eigenvalue decomposition)으로 에너지 준위 구함',
        '3. 고유함수(파동함수) 계산',
        '4. 결과를 시각화하고 이론값과 비교'
      ],
      safetyWarning: '계산 정확도 주의'
    },
    questions: ['master-phys-01-q01', 'master-phys-01-q02', 'master-phys-01-q03', 'master-phys-01-q04', 'master-phys-01-q05', 'master-phys-01-q06']
  },
  {
    id: 'master-phys-02',
    subject: 'physics',
    grade: 16,
    level: 'expert',
    unit: '통계역학',
    title: '분배함수와 열역학 함수',
    summary: '미시 상태의 확률 분포로부터 거시 열역학 성질을 유도한다.',
    keywords: ['분배함수', '열역학', '엔트로피', '자유 에너지', '앙상블'],
    misconceptions: ['온도는 평균 운동 에너지이다', '엔트로피는 항상 증가한다'],
    explanation: {
      basic: '많은 입자의 미시 상태를 모르지만, 통계적으로 분석할 수 있습니다. 분배함수 Z로부터 내부 에너지, 엔트로피, 자유 에너지 등을 구할 수 있습니다.',
      curriculum: '정준 앙상블(canonical ensemble): Z = Σ_n exp(-E_n/k_B T). 자유 에너지 F = -k_B T ln Z. 내부 에너지 U = -∂ln Z/∂β. 엔트로피 S = k_B(∂ln Z/∂T)_N.',
      university: '미시정준 앙상블(microcanonical), 정준 앙상블(canonical), 그랜드 캐노니컬 앙상블(grand canonical)의 동등성. Boltzmann 분포 P(E_n) = exp(-E_n/k_B T)/Z. Gibbs entropy S = -k_B Σ P_n ln P_n. 응답 이론과 상관 함수.'
    },
    examples: [
      '이상 기체의 상태 방정식 PV = Nk_B T 유도',
      '이성분 혼합물의 화학 포텐셜',
      '상 전이: 1차, 2차 전이와 특이점'
    ],
    observationActivity: {
      title: 'Monte Carlo 시뮬레이션으로 상(phase) 관찰',
      description: '2D Ising 모델을 시뮬레이션하여 온도에 따른 상 변화를 관찰합니다.',
      prediction: '임계 온도 이상에서 무질서 상으로 전이될 것이다',
      materials: ['컴퓨터', 'Python'],
      steps: [
        '1. 2D 격자의 스핀 배열을 초기화',
        '2. Metropolis 알고리즘으로 thermal 평형 달성',
        '3. 다양한 온도에서 자화(magnetization) 계산',
        '4. 상 다이어그램 그리기'
      ],
      safetyWarning: '컴퓨터 자원 사용에 주의'
    },
    questions: ['master-phys-02-q01', 'master-phys-02-q02', 'master-phys-02-q03', 'master-phys-02-q04', 'master-phys-02-q05', 'master-phys-02-q06']
  }
];

// 박사 수준 레슨
export const phdLessons: Concept[] = [
  {
    id: 'phd-phys-01',
    subject: 'physics',
    grade: 19,
    level: 'research',
    unit: '장 이론',
    title: '양자장론의 기초',
    summary: '양자역학과 장론을 결합하여 상대론적 입자 이론을 구성한다.',
    keywords: ['양자장론', '라그랑주', '게이지 대칭', '재규격화'],
    misconceptions: ['입자는 실체이고 장은 추상적이다', '진공은 텅 비어있다'],
    explanation: {
      basic: '양자장론은 공간의 각 점에서 장이 진동하며, 그 양자는 입자입니다. 입자 생성과 소멸, 상호작용을 자연스럽게 기술합니다.',
      curriculum: 'Real scalar field φ(x): L = ½(∂_μφ)² - ½m²φ². 정규 양자화(canonical quantization). 교환 관계 [φ(x), π(y)] = iδ(x-y). 입자 해석: 생성/소멸 연산자 a†, a.',
      university: '경로 적분(path integral) 정식화. Green 함수와 propagator. Feynman 다이어그램. 상호작용 그림(interaction picture). Dyson 급수. 1-loop, 2-loop 계산. Dimensional regularization과 재규격화.'
    },
    examples: [
      'λφ⁴ 상호작용의 산란 단면적 계산',
      '전자-광자 상호작용 (QED)',
      '표준 모형의 약한 상호작용 (W, Z 보손)'
    ],
    observationActivity: {
      title: 'Feynman 다이어그램 분석과 계산',
      description: '구체적인 산란 과정의 Feynman 다이어그램을 그리고 진폭을 계산합니다.',
      prediction: '루프 적분의 발산이 counterterm으로 상쇄될 것이다',
      materials: ['논문', '수치 계산 소프트웨어'],
      steps: [
        '1. 2→2 산란의 tree-level 다이어그램 확인',
        '2. 1-loop 보정 다이어그램 분류',
        '3. 발산하는 항 확인',
        '4. 재규격화 과정 수행'
      ],
      safetyWarning: '계산의 정확성과 물리적 의미 검토 중요'
    },
    questions: ['phd-phys-01-q01', 'phd-phys-01-q02', 'phd-phys-01-q03', 'phd-phys-01-q04', 'phd-phys-01-q05', 'phd-phys-01-q06']
  }
];

// 모든 레슨 통합
export const allLessons = [
  ...elementaryLessons,
  ...middleLessons,
  ...highSchoolLessons,
  ...masterLessons,
  ...phdLessons
];
