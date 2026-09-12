// 초등 과학 레슨 (4-6학년)
export const elementaryLessons = [
  {
    id: 'elem-sci-01',
    subject: 'science',
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
    questions: ['elem-sci-01-q01', 'elem-sci-01-q02', 'elem-sci-01-q03', 'elem-sci-01-q04']
  },
  {
    id: 'elem-sci-02',
    subject: 'science',
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
    questions: ['elem-sci-02-q01', 'elem-sci-02-q02', 'elem-sci-02-q03', 'elem-sci-02-q04']
  },
  {
    id: 'elem-sci-03',
    subject: 'science',
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
    questions: ['elem-sci-03-q01', 'elem-sci-03-q02', 'elem-sci-03-q03', 'elem-sci-03-q04']
  },
  {
    id: 'elem-sci-04',
    subject: 'science',
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
    questions: ['elem-sci-04-q01', 'elem-sci-04-q02', 'elem-sci-04-q03', 'elem-sci-04-q04']
  },
  {
    id: 'elem-sci-05',
    subject: 'science',
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
    questions: ['elem-sci-05-q01', 'elem-sci-05-q02', 'elem-sci-05-q03', 'elem-sci-05-q04']
  }
];

// 고등 과학 레슨 (10-12학년)
export const highSchoolLessons = [
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
    questions: ['high-phys-01-q01', 'high-phys-01-q02', 'high-phys-01-q03', 'high-phys-01-q04', 'high-phys-01-q05']
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
    questions: ['high-phys-02-q01', 'high-phys-02-q02', 'high-phys-02-q03', 'high-phys-02-q04', 'high-phys-02-q05']
  }
];

// 석사 수준 레슨
export const masterLessons = [
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
export const phdLessons = [
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
  ...highSchoolLessons,
  ...masterLessons,
  ...phdLessons
];
