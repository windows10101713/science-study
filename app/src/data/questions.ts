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
  {
    id: 'elem-sci-01-q05',
    type: 'short_answer',
    question: '자석을 두 조각으로 자르면 어떻게 되는가?',
    options: [],
    answer: '각각 새로운 N극과 S극을 가진 자석이 된다',
    explanation: '자석을 아무리 작게 잘라도 항상 N극과 S극이 함께 있는 새로운 자석이 만들어집니다. 홀로 존재하는 자기 홀극은 발견되지 않았습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-01-q06',
    type: 'multiple_choice',
    question: '전자석의 특징으로 옳은 것은?',
    options: [
      '전류를 흘려야만 자석의 성질이 생긴다',
      '항상 자석의 성질을 가진다',
      '금속이 아니어도 작동한다',
      '온도에 영향을 받지 않는다'
    ],
    answer: '전류를 흘려야만 자석의 성질이 생긴다',
    explanation: '전자석은 코일에 전류가 흐를 때만 자기장이 생기며, 전류를 끊으면 자석의 성질이 사라집니다.',
    difficulty: 'medium'
  },

  // 초등 - 식물 성장 (elem-sci-02)
  {
    id: 'elem-sci-02-q05',
    type: 'multiple_choice',
    question: '뿌리의 주된 역할이 아닌 것은?',
    options: ['물 흡수', '양분 저장', '광합성', '식물 고정'],
    answer: '광합성',
    explanation: '광합성은 주로 엽록소가 있는 잎에서 일어납니다. 뿌리는 물과 무기양분 흡수, 저장, 지지 역할을 합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-02-q06',
    type: 'short_answer',
    question: '증산작용이란 무엇인가?',
    options: [],
    answer: '잎의 기공을 통해 물이 수증기로 빠져나가는 현상',
    explanation: '증산작용은 식물이 뿌리에서 흡수한 물을 잎의 기공을 통해 수증기 형태로 내보내는 현상으로, 물 순환과 온도 조절에 중요합니다.',
    difficulty: 'medium'
  },

  // 초등 - 지구의 자전과 공전 (elem-sci-03)
  {
    id: 'elem-sci-03-q01',
    type: 'multiple_choice',
    question: '낮과 밤이 생기는 이유는?',
    options: ['지구의 공전', '지구의 자전', '달의 공전', '태양의 이동'],
    answer: '지구의 자전',
    explanation: '지구가 자전축을 중심으로 하루에 한 바퀴 돌기 때문에 태양을 향한 쪽은 낮, 반대쪽은 밤이 됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-03-q02',
    type: 'short_answer',
    question: '계절이 바뀌는 주된 이유는?',
    options: [],
    answer: '지구 자전축이 기울어진 채 공전하기 때문',
    explanation: '지구 자전축이 23.5도 기울어진 채로 태양 주위를 공전하기 때문에 지역별로 받는 태양 에너지의 양이 달라져 계절이 생깁니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-03-q03',
    type: 'multiple_choice',
    question: '지구의 자전 주기는 약 얼마인가?',
    options: ['1시간', '24시간', '30일', '365일'],
    answer: '24시간',
    explanation: '지구는 약 24시간(정확히는 23시간 56분)에 한 번 자전합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-03-q04',
    type: 'short_answer',
    question: '지구의 공전 주기는 약 얼마인가?',
    options: [],
    answer: '365일 (1년)',
    explanation: '지구가 태양 주위를 한 바퀴 도는 데 약 365.25일이 걸리며, 이것이 1년의 기준이 됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-03-q05',
    type: 'multiple_choice',
    question: '남반구의 계절이 북반구와 반대인 이유는?',
    options: [
      '지구가 거꾸로 돌기 때문',
      '자전축 기울기 방향 때문에 태양 에너지를 받는 정도가 반대이기 때문',
      '남반구가 더 뜨겁기 때문',
      '실제로는 반대가 아니다'
    ],
    answer: '자전축 기울기 방향 때문에 태양 에너지를 받는 정도가 반대이기 때문',
    explanation: '지구 공전 중 북반구가 태양쪽으로 기울어지면 북반구는 여름, 남반구는 겨울이 되고 그 반대의 경우도 마찬가지입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-03-q06',
    type: 'short_answer',
    question: '그림자가 하루 중 가장 짧아지는 시간은 언제인가?',
    options: [],
    answer: '정오(태양이 가장 높이 떴을 때)',
    explanation: '태양이 하늘에서 가장 높이 위치하는 정오 무렵에 그림자의 길이가 가장 짧아집니다.',
    difficulty: 'easy'
  },

  // 초등 - 열의 이동 (elem-sci-04)
  {
    id: 'elem-sci-04-q01',
    type: 'multiple_choice',
    question: '열은 어느 방향으로 이동하는가?',
    options: ['찬 곳에서 뜨거운 곳으로', '뜨거운 곳에서 찬 곳으로', '이동하지 않는다', '무작위로 이동한다'],
    answer: '뜨거운 곳에서 찬 곳으로',
    explanation: '열은 항상 온도가 높은 곳에서 낮은 곳으로 이동하며, 두 물체의 온도가 같아지면(열평형) 이동이 멈춥니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-04-q02',
    type: 'short_answer',
    question: '고체를 통한 열의 이동 방식을 무엇이라 하는가?',
    options: [],
    answer: '전도',
    explanation: '전도는 물질을 구성하는 입자의 진동이 이웃 입자에 전달되며 열이 이동하는 방식으로, 고체에서 잘 일어납니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-04-q03',
    type: 'multiple_choice',
    question: '액체나 기체에서 열이 이동하는 주된 방식은?',
    options: ['전도', '대류', '복사', '증발'],
    answer: '대류',
    explanation: '대류는 데워진 유체가 위로 올라가고 차가운 유체가 아래로 내려오며 순환하는 열 이동 방식입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-04-q04',
    type: 'short_answer',
    question: '태양열이 진공인 우주 공간을 지나 지구에 도달하는 열 이동 방식은?',
    options: [],
    answer: '복사',
    explanation: '복사는 매질 없이 전자기파 형태로 열이 전달되는 방식으로, 태양열이 진공을 통과해 지구에 도달하는 방식입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-04-q05',
    type: 'multiple_choice',
    question: '금속 손잡이와 나무 손잡이 냄비 중 어느 것이 손에 덜 뜨겁게 느껴지는가?',
    options: ['금속 손잡이', '나무 손잡이', '둘 다 같다', '알 수 없다'],
    answer: '나무 손잡이',
    explanation: '나무는 금속보다 열전도율이 낮아 열을 천천히 전달하므로 손에 덜 뜨겁게 느껴집니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-04-q06',
    type: 'short_answer',
    question: '검은색 옷이 흰색 옷보다 여름에 더 덥게 느껴지는 이유는?',
    options: [],
    answer: '검은색이 빛(복사 에너지)을 더 많이 흡수하기 때문',
    explanation: '검은색 물체는 다양한 파장의 빛을 흡수하는 비율이 높아 복사 에너지를 더 많이 흡수하여 온도가 더 많이 올라갑니다.',
    difficulty: 'medium'
  },

  // 초등 - 동물의 생식과 성장 (elem-sci-05)
  {
    id: 'elem-sci-05-q01',
    type: 'multiple_choice',
    question: '암수가 결합하여 새끼를 만드는 생식 방법은?',
    options: ['무성생식', '유성생식', '분열생식', '출아생식'],
    answer: '유성생식',
    explanation: '유성생식은 암컷과 수컷의 생식세포가 결합하여 새로운 개체를 만드는 방법으로, 유전적 다양성을 높입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-05-q02',
    type: 'short_answer',
    question: '알을 낳아 번식하는 방법을 무엇이라 하는가?',
    options: [],
    answer: '난생',
    explanation: '난생은 어미가 알을 낳고 알 속에서 배아가 발생하여 부화하는 번식 방법으로, 새와 대부분의 곤충, 파충류가 해당합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-05-q03',
    type: 'multiple_choice',
    question: '나비의 완전변태 순서로 옳은 것은?',
    options: [
      '알 → 애벌레 → 번데기 → 성충',
      '알 → 번데기 → 애벌레 → 성충',
      '애벌레 → 알 → 번데기 → 성충',
      '알 → 애벌레 → 성충 → 번데기'
    ],
    answer: '알 → 애벌레 → 번데기 → 성충',
    explanation: '나비, 딱정벌레 등은 알-애벌레-번데기-성충의 네 단계를 거치는 완전변태를 합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-05-q04',
    type: 'short_answer',
    question: '새끼를 낳아 젖을 먹여 기르는 동물의 무리를 무엇이라 하는가?',
    options: [],
    answer: '포유류',
    explanation: '포유류는 태생으로 새끼를 낳고 어미의 젖으로 새끼를 기르는 동물 무리입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-sci-05-q05',
    type: 'multiple_choice',
    question: '메뚜기와 같이 번데기 단계 없이 자라는 변태를 무엇이라 하는가?',
    options: ['완전변태', '불완전변태', '무변태', '역변태'],
    answer: '불완전변태',
    explanation: '불완전변태는 알-약충(어린벌레)-성충 단계를 거치며 번데기 단계가 없는 변태로, 메뚜기, 잠자리 등이 해당합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-sci-05-q06',
    type: 'short_answer',
    question: '동물이 성장하며 몸의 크기와 형태가 바뀌는 과정을 무엇이라 하는가?',
    options: [],
    answer: '변태(성장 발달)',
    explanation: '변태는 동물이 발생 과정에서 몸의 형태와 구조가 뚜렷하게 변화하는 현상입니다.',
    difficulty: 'easy'
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
  {
    id: 'high-phys-01-q06',
    type: 'multiple_choice',
    question: '등가속도 운동에서 v² = v₀² + 2as 식이 유도되는 근거는?',
    options: [
      'v = v₀ + at와 s = v₀t + ½at²를 연립하여 t를 소거',
      '뉴턴의 제3법칙',
      '에너지 보존 법칙만으로 유도',
      '단순 암기 공식'
    ],
    answer: 'v = v₀ + at와 s = v₀t + ½at²를 연립하여 t를 소거',
    explanation: '두 운동 방정식에서 시간 t를 소거하면 v² = v₀² + 2as를 얻을 수 있으며, 시간 정보 없이 속도와 변위를 연결할 수 있습니다.',
    difficulty: 'medium'
  },

  // 고등 - Maxwell 방정식과 전자기파 (high-phys-02)
  {
    id: 'high-phys-02-q01',
    type: 'multiple_choice',
    question: '전자기파를 이루는 두 장(field)은?',
    options: ['전기장과 자기장', '중력장과 전기장', '자기장과 온도장', '전기장과 압력장'],
    answer: '전기장과 자기장',
    explanation: '전자기파는 서로 수직으로 진동하는 전기장과 자기장이 함께 공간을 진행하는 파동입니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-phys-02-q02',
    type: 'calculation',
    question: '진공에서 전자기파의 속도 c는 ε₀와 μ₀로 어떻게 표현되는가?',
    options: [],
    answer: 'c = 1/√(ε₀μ₀)',
    explanation: 'Maxwell 방정식으로부터 유도되는 파동방정식에서 전자기파의 속도는 c = 1/√(ε₀μ₀) ≈ 3×10⁸ m/s입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-phys-02-q03',
    type: 'short_answer',
    question: '전자기파가 매질 없이 진공에서도 전파될 수 있는 이유는?',
    options: [],
    answer: '변하는 전기장이 자기장을, 변하는 자기장이 전기장을 유도하며 서로를 전파시키기 때문',
    explanation: '역학파와 달리 전자기파는 전기장과 자기장이 서로를 유도하며 전파되므로 매질이 필요 없습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-02-q04',
    type: 'multiple_choice',
    question: '다음 중 전자기파가 아닌 것은?',
    options: ['가시광선', '음파', 'X선', '라디오파'],
    answer: '음파',
    explanation: '음파는 매질(공기, 물 등)의 압력 진동으로 전파되는 역학적 파동이며, 전자기파가 아닙니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-phys-02-q05',
    type: 'short_answer',
    question: '전자기파 스펙트럼에서 파장이 짧을수록 광자의 에너지는 어떻게 되는가?',
    options: [],
    answer: '에너지가 커진다',
    explanation: '광자 에너지 E = hc/λ이므로 파장 λ가 짧을수록(주파수가 높을수록) 에너지가 커집니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-02-q06',
    type: 'multiple_choice',
    question: '금속 그물망(패러데이 케이지)이 전자기파를 차단할 수 있는 이유는?',
    options: [
      '금속 내부에서 전자기파가 유도전류를 만들어 상쇄시키기 때문',
      '금속이 빛을 흡수하지 않기 때문',
      '금속의 온도가 낮기 때문',
      '금속에는 전자가 없기 때문'
    ],
    answer: '금속 내부에서 전자기파가 유도전류를 만들어 상쇄시키기 때문',
    explanation: '도체 표면에 유도된 전류가 만드는 역방향 전자기장이 외부 전자기파를 상쇄시켜 내부를 차폐합니다.',
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

  // 석사 - 분배함수와 열역학 함수 (master-phys-02)
  {
    id: 'master-phys-02-q01',
    type: 'short_answer',
    question: '정준 앙상블에서 분배함수 Z의 정의는?',
    options: [],
    answer: 'Z = Σ_n exp(-E_n/k_B T)',
    explanation: '분배함수는 계가 취할 수 있는 모든 미시상태에 대해 볼츠만 인자를 합한 것으로, 모든 열역학량을 유도하는 출발점입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-phys-02-q02',
    type: 'multiple_choice',
    question: '자유 에너지 F와 분배함수 Z의 관계는?',
    options: ['F = k_B T ln Z', 'F = -k_B T ln Z', 'F = Z/k_B T', 'F = -k_B T / Z'],
    answer: 'F = -k_B T ln Z',
    explanation: '헬름홀츠 자유 에너지는 F = -k_B T ln Z로 정의되며, 여기서 내부 에너지와 엔트로피를 모두 유도할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-02-q03',
    type: 'short_answer',
    question: '온도가 평균 운동 에너지와 같다는 설명이 오개념인 이유는?',
    options: [],
    answer: '온도는 통계적 개념으로 에너지 분포와 관련되며 단순 평균 운동에너지만으로 정의되지 않기 때문',
    explanation: '온도는 계의 미시상태에 대한 통계적 분포(볼츠만 분포)를 결정하는 매개변수이며, 특정 자유도의 평균 에너지로 항상 정확히 설명되지는 않습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-02-q04',
    type: 'calculation',
    question: '이상기체의 상태방정식 PV = Nk_BT는 어떤 앙상블에서 유도되는가?',
    options: [],
    answer: '정준 앙상블(또는 그랜드 캐노니컬 앙상블)',
    explanation: '입자 사이 상호작용이 없는 이상기체 모델에 정준 앙상블의 분배함수를 적용하면 PV = Nk_BT가 자연스럽게 유도됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-02-q05',
    type: 'short_answer',
    question: '엔트로피가 항상 증가한다는 설명이 정확하지 않은 이유는?',
    options: [],
    answer: '열역학 제2법칙은 고립계의 총 엔트로피에 대해서만 성립하며, 부분계는 감소할 수 있기 때문',
    explanation: '냉장고처럼 부분계의 엔트로피는 외부에서 일을 가하면 감소할 수 있습니다. 단, 계+주변을 합한 전체 엔트로피는 항상 증가하거나 유지됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-02-q06',
    type: 'multiple_choice',
    question: '2차 상전이의 특징은?',
    options: [
      '잠열이 존재하고 부피가 불연속적으로 변한다',
      '잠열이 없고 비열 등 2차 미분량이 불연속적이다',
      '온도가 무한대가 된다',
      '항상 기체에서만 일어난다'
    ],
    answer: '잠열이 없고 비열 등 2차 미분량이 불연속적이다',
    explanation: '2차 상전이(연속 상전이)는 자유에너지의 2차 미분(비열, 압축률 등)이 불연속이거나 발산하지만 잠열은 없습니다.',
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
  },

  // 초등 - 물질의 상태 변화 (elem-chem-01)
  {
    id: 'elem-chem-01-q01',
    type: 'multiple_choice',
    question: '물이 얼음이 되는 상태 변화를 무엇이라 하는가?',
    options: ['융해', '응고', '기화', '액화'],
    answer: '응고',
    explanation: '응고는 액체가 고체로 변하는 상태 변화입니다. 물이 얼음이 되는 것이 대표적인 예입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-01-q02',
    type: 'short_answer',
    question: '고체가 액체로 변하는 상태 변화를 무엇이라 하는가?',
    options: [],
    answer: '융해',
    explanation: '융해는 고체가 액체로 변하는 현상으로, 얼음이 녹아 물이 되는 것이 대표적인 예입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-01-q03',
    type: 'multiple_choice',
    question: '드라이아이스가 액체 없이 바로 기체가 되는 현상은?',
    options: ['융해', '기화', '승화', '액화'],
    answer: '승화',
    explanation: '승화는 고체가 액체를 거치지 않고 바로 기체로 변하는(또는 그 반대) 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-01-q04',
    type: 'short_answer',
    question: '물질의 상태가 변할 때 변하지 않는 것은?',
    options: [],
    answer: '물질의 종류(성분)',
    explanation: '상태 변화는 물질의 생김새(상태)만 바뀔 뿐, 물질을 이루는 성분 자체는 바뀌지 않습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-01-q05',
    type: 'multiple_choice',
    question: '물이 끓어 수증기로 변하는 상태 변화는?',
    options: ['기화', '액화', '응고', '승화'],
    answer: '기화',
    explanation: '기화는 액체가 기체로 변하는 현상으로, 끓음과 증발 두 가지 방식이 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-01-q06',
    type: 'short_answer',
    question: '물질이 상태변화하는 동안 온도가 잠시 멈추는 이유는?',
    options: [],
    answer: '흡수하거나 방출한 열이 입자 배열을 바꾸는 데 사용되기 때문',
    explanation: '상태변화 구간에서는 열에너지가 온도를 올리는 대신 잠열의 형태로 입자 배열 변화에 쓰이므로 온도가 일정하게 유지됩니다.',
    difficulty: 'hard'
  },

  // 초등 - 분수와 소수의 이해 (elem-math-01)
  {
    id: 'elem-math-01-q01',
    type: 'short_answer',
    question: '피자 한 판을 8조각으로 나누었을 때 한 조각을 분수로 나타내면?',
    options: [],
    answer: '1/8',
    explanation: '전체를 8등분한 것 중 1개이므로 1/8로 나타냅니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-01-q02',
    type: 'calculation',
    question: '1/4을 소수로 나타내면?',
    options: [],
    answer: '0.25',
    explanation: '1/4은 1÷4=0.25로 계산됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-01-q03',
    type: 'multiple_choice',
    question: '1/2과 1/3 중 더 큰 분수는?',
    options: ['1/2', '1/3', '둘은 같다', '비교할 수 없다'],
    answer: '1/2',
    explanation: '분자가 같을 때(여기선 1) 분모가 작을수록 분수의 크기는 큽니다. 전체를 2등분한 것이 3등분한 것보다 한 조각이 더 큽니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-01-q04',
    type: 'short_answer',
    question: '분모가 2와 5의 거듭제곱으로만 이루어진 분수를 소수로 나타내면 어떤 소수가 되는가?',
    options: [],
    answer: '유한소수',
    explanation: '분모가 2와 5의 거듭제곱만으로 이루어지면 나눗셈이 끝나는 유한소수가 됩니다. 그 외에는 순환소수가 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-math-01-q05',
    type: 'calculation',
    question: '3/4 + 1/4 은 얼마인가?',
    options: [],
    answer: '1',
    explanation: '분모가 같으므로 분자끼리 더합니다: 3/4+1/4 = 4/4 = 1',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-01-q06',
    type: 'short_answer',
    question: '분수를 통분해야 하는 경우는 언제인가?',
    options: [],
    answer: '분모가 다른 분수끼리 크기를 비교하거나 더하고 뺄 때',
    explanation: '분모가 다른 분수는 직접 비교하거나 계산할 수 없으므로, 공통분모로 맞추는 통분 과정이 필요합니다.',
    difficulty: 'medium'
  },

  // 초등 - 태양계와 행성 (elem-astro-01)
  {
    id: 'elem-astro-01-q01',
    type: 'short_answer',
    question: '태양계에서 태양으로부터 세 번째 행성은?',
    options: [],
    answer: '지구',
    explanation: '태양에서 가까운 순서로 수성, 금성, 지구, 화성 순이며 지구는 세 번째 행성입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-01-q02',
    type: 'multiple_choice',
    question: '태양계에서 가장 큰 행성은?',
    options: ['지구', '토성', '목성', '해왕성'],
    answer: '목성',
    explanation: '목성은 태양계에서 가장 큰 행성으로, 지구 지름의 약 11배에 달합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-01-q03',
    type: 'short_answer',
    question: '별과 행성의 가장 큰 차이는 무엇인가?',
    options: [],
    answer: '별은 스스로 빛을 내고 행성은 빛을 반사한다',
    explanation: '별은 핵융합 반응으로 스스로 빛을 내는 천체이고, 행성은 스스로 빛을 내지 못하고 별빛을 반사합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-astro-01-q04',
    type: 'multiple_choice',
    question: '뚜렷한 고리를 가진 것으로 유명한 행성은?',
    options: ['화성', '토성', '수성', '금성'],
    answer: '토성',
    explanation: '토성은 얼음과 암석 조각으로 이루어진 뚜렷한 고리를 가진 것으로 유명합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-01-q05',
    type: 'short_answer',
    question: '태양에서 멀리 있는 행성일수록 공전 주기가 긴 이유는?',
    options: [],
    answer: '태양의 중력이 거리 제곱에 반비례해 약해지기 때문',
    explanation: '케플러의 법칙에 따르면 태양에서 멀수록 중력의 영향이 약해져 더 느리고 큰 궤도를 돌게 되어 공전 주기가 길어집니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-astro-01-q06',
    type: 'multiple_choice',
    question: '지구형 행성에 속하지 않는 것은?',
    options: ['수성', '금성', '화성', '목성'],
    answer: '목성',
    explanation: '지구형 행성(수성, 금성, 지구, 화성)은 암석으로 이루어져 있고, 목성형 행성(목성, 토성, 천왕성, 해왕성)은 기체나 얼음으로 이루어져 있습니다.',
    difficulty: 'medium'
  },

  // 고등 - 몰과 화학량론 (high-chem-01)
  {
    id: 'high-chem-01-q01',
    type: 'short_answer',
    question: '1몰에 해당하는 입자의 개수(아보가드로수)는?',
    options: [],
    answer: '6.02×10^23',
    explanation: '아보가드로수 N_A = 6.02×10²³ /mol은 1몰에 들어있는 입자의 개수를 나타냅니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-01-q02',
    type: 'calculation',
    question: '물(H₂O)의 몰질량이 18 g/mol일 때, 물 36g은 몇 몰인가?',
    options: [],
    answer: '2몰',
    explanation: '몰수 = 질량 ÷ 몰질량 = 36g ÷ 18g/mol = 2몰',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-01-q03',
    type: 'multiple_choice',
    question: '화학 반응식 2H₂ + O₂ → 2H₂O에서 계수의 의미는?',
    options: ['질량 비율', '몰 비율', '부피 비율(항상)', '농도 비율'],
    answer: '몰 비율',
    explanation: '화학 반응식의 계수는 반응물과 생성물의 몰수 비율을 나타내며, 질량 비율이 아닙니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-01-q04',
    type: 'short_answer',
    question: '표준상태(STP)에서 기체 1몰의 부피는?',
    options: [],
    answer: '22.4 L',
    explanation: '표준상태(0°C, 1기압)에서 이상기체 1몰은 약 22.4L의 부피를 차지합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-01-q05',
    type: 'calculation',
    question: '수소 4몰과 산소 1몰을 반응시키면 어느 반응물이 한계 반응물인가? (2H₂ + O₂ → 2H₂O)',
    options: [],
    answer: '산소',
    explanation: '수소 4몰과 반응하려면 산소 2몰이 필요한데 1몰만 있으므로 산소가 먼저 소진되는 한계 반응물입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-chem-01-q06',
    type: 'short_answer',
    question: '몰 농도(M)의 정의는?',
    options: [],
    answer: '용액 1리터에 녹아있는 용질의 몰수',
    explanation: '몰 농도 M = 용질의 몰수 / 용액의 부피(L)로 정의되며, 용액의 진하기를 나타내는 표준적인 단위입니다.',
    difficulty: 'medium'
  },

  // 고등 - 함수의 극한과 미분 (high-math-01)
  {
    id: 'high-math-01-q01',
    type: 'calculation',
    question: 'f(x) = x²에서 미분계수 f\'(3)의 값은?',
    options: [],
    answer: '6',
    explanation: 'f\'(x) = 2x 이므로 f\'(3) = 2×3 = 6',
    difficulty: 'medium'
  },
  {
    id: 'high-math-01-q02',
    type: 'short_answer',
    question: '극한 lim(x→2) (x²-4)/(x-2) 의 값은?',
    options: [],
    answer: '4',
    explanation: '인수분해하면 (x-2)(x+2)/(x-2) = x+2 이고, x→2일 때 값은 4입니다. 이는 x=2에서 정의되지 않아도 극한이 존재하는 예입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-math-01-q03',
    type: 'multiple_choice',
    question: '미분계수의 기하학적 의미는?',
    options: ['그 점에서의 함수값', '그 점에서의 접선의 기울기', '함수의 최댓값', 'x절편'],
    answer: '그 점에서의 접선의 기울기',
    explanation: '미분계수 f\'(a)는 함수 그래프 위의 점 (a, f(a))에서 그은 접선의 기울기를 의미합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-01-q04',
    type: 'short_answer',
    question: '함수가 미분가능하면 반드시 연속인가? 그 역은 성립하는가?',
    options: [],
    answer: '미분가능하면 연속이지만, 연속이라고 항상 미분가능한 것은 아니다',
    explanation: '예를 들어 f(x)=|x|는 x=0에서 연속이지만 그 점에서 미분가능하지 않습니다(뾰족한 점).',
    difficulty: 'hard'
  },
  {
    id: 'high-math-01-q05',
    type: 'calculation',
    question: 'f(x) = 3x² - 2x + 1의 도함수 f\'(x)는?',
    options: [],
    answer: 'f\'(x) = 6x - 2',
    explanation: '항별로 미분하면 3x²의 미분은 6x, -2x의 미분은 -2, 상수 1의 미분은 0이므로 f\'(x)=6x-2입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-01-q06',
    type: 'short_answer',
    question: '평균변화율과 순간변화율(미분계수)의 차이는?',
    options: [],
    answer: '평균변화율은 구간 전체의 변화율이고, 순간변화율은 구간을 한없이 좁혔을 때의 극한값이다',
    explanation: '평균변화율은 [f(b)-f(a)]/(b-a)이고, 순간변화율은 이 구간을 0으로 좁혔을 때의 극한, 즉 미분계수입니다.',
    difficulty: 'medium'
  },

  // 고등 - 유전의 법칙과 DNA (high-bio-01)
  {
    id: 'high-bio-01-q01',
    type: 'multiple_choice',
    question: '우성과 열성에 대한 설명으로 옳은 것은?',
    options: [
      '우성 형질이 더 좋은 형질이다',
      '이형접합일 때 표현형으로 드러나는 형질이 우성이다',
      '열성 형질은 집단에서 매우 드물다',
      '우성은 항상 더 흔한 형질이다'
    ],
    answer: '이형접합일 때 표현형으로 드러나는 형질이 우성이다',
    explanation: '우성과 열성은 좋고 나쁨이 아니라, 이형접합(Rr)일 때 어느 형질이 표현형으로 나타나는지를 나타내는 개념일 뿐입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-01-q02',
    type: 'short_answer',
    question: 'DNA와 유전자의 관계를 한 문장으로 설명하면?',
    options: [],
    answer: '유전자는 DNA 중 특정 단백질을 만드는 정보를 담은 부분이다',
    explanation: 'DNA는 유전 정보 전체를 담은 화학 분자이고, 유전자는 그중 특정 형질(단백질)을 결정하는 부분 구간입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-01-q03',
    type: 'calculation',
    question: '이형접합(Rr)끼리 교배했을 때 표현형 비율은 대략 얼마인가?',
    options: [],
    answer: '우성:열성 = 3:1',
    explanation: 'Rr × Rr 교배에서 유전자형은 RR:Rr:rr = 1:2:1이 나오며, R이 우성이면 표현형은 우성(RR+Rr):열성(rr) = 3:1이 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-bio-01-q04',
    type: 'multiple_choice',
    question: 'DNA의 구조를 가장 잘 설명한 것은?',
    options: ['단일 가닥의 나선', '이중나선 구조', '삼중나선 구조', '고리 모양의 단일 가닥'],
    answer: '이중나선 구조',
    explanation: 'DNA는 두 가닥이 서로 꼬여있는 이중나선 구조이며, A-T, G-C의 염기쌍 결합으로 정보가 저장됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-bio-01-q05',
    type: 'short_answer',
    question: '멘델의 분리의 법칙이란?',
    options: [],
    answer: '생식세포가 형성될 때 대립유전자 쌍이 분리되어 각각 다른 생식세포로 들어간다',
    explanation: '분리의 법칙은 감수분열 과정에서 한 쌍의 대립유전자가 서로 분리되어 서로 다른 생식세포로 전달된다는 원리입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-01-q06',
    type: 'short_answer',
    question: '염색체, DNA, 유전자를 크기 순서(큰 것부터)로 나열하면?',
    options: [],
    answer: '염색체 > DNA > 유전자',
    explanation: '염색체는 DNA가 히스톤 단백질에 응축된 구조이며, 하나의 DNA 분자 안에 여러 개의 유전자가 존재합니다.',
    difficulty: 'hard'
  },

  // 고등 - 우주의 팽창과 빅뱅 이론 (high-astro-01)
  {
    id: 'high-astro-01-q01',
    type: 'multiple_choice',
    question: '허블의 법칙 v = H₀d가 의미하는 것은?',
    options: [
      '멀리 있는 은하일수록 후퇴속도가 크다',
      '모든 은하는 같은 속도로 움직인다',
      '가까운 은하일수록 빨리 멀어진다',
      '은하의 속도는 거리와 무관하다'
    ],
    answer: '멀리 있는 은하일수록 후퇴속도가 크다',
    explanation: '허블의 법칙은 은하의 후퇴속도가 거리에 비례한다는 것을 보여주며, 이는 우주 팽창의 강력한 증거입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-01-q02',
    type: 'short_answer',
    question: '우주배경복사(CMB)란 무엇인가?',
    options: [],
    answer: '빅뱅 후 우주가 투명해지며 방출된 빛의 흔적(잔광)',
    explanation: '우주배경복사는 빅뱅 후 약 38만 년 뒤 우주가 식으며 투명해질 때 방출된 빛이 오늘날까지 남아있는 것으로, 절대온도 약 2.7K의 마이크로파로 관측됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-astro-01-q03',
    type: 'multiple_choice',
    question: '빅뱅에 대한 올바른 설명은?',
    options: [
      '기존의 빈 공간 속에서 일어난 폭발이다',
      '공간 자체가 팽창하기 시작한 사건이다',
      '태양계가 형성된 사건이다',
      '은하가 서로 충돌한 사건이다'
    ],
    answer: '공간 자체가 팽창하기 시작한 사건이다',
    explanation: '빅뱅은 이미 존재하던 공간 속의 폭발이 아니라, 공간 자체가 팽창하기 시작한 사건입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-astro-01-q04',
    type: 'short_answer',
    question: '적색편이(redshift)는 무엇을 알려주는가?',
    options: [],
    answer: '천체가 관측자로부터 멀어지고 있다는 것(후퇴속도)',
    explanation: '빛의 파장이 늘어나 붉은 쪽으로 치우치는 적색편이는 천체가 우리로부터 멀어지고 있음을 나타내며, 도플러 효과와 유사한 원리입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-01-q05',
    type: 'multiple_choice',
    question: '우주의 나이는 약 얼마로 추정되는가?',
    options: ['약 138억 년', '약 46억 년', '약 1억 년', '약 1000만 년'],
    answer: '약 138억 년',
    explanation: '허블 상수와 우주배경복사 관측 등을 종합하여 우주의 나이는 약 138억 년으로 추정됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-astro-01-q06',
    type: 'short_answer',
    question: '풍선 표면의 점 비유가 우주 팽창을 설명하는 방식은?',
    options: [],
    answer: '풍선을 불면 표면의 모든 점 사이 거리가 고르게 멀어지듯, 공간 자체가 팽창하며 모든 은하가 서로 멀어진다',
    explanation: '풍선 표면에 찍힌 점들은 스스로 움직이지 않아도 풍선(공간)이 팽창하면 서로 멀어집니다. 이는 은하가 공간 속을 이동하는 것이 아니라 공간 자체가 늘어난다는 것을 보여주는 비유입니다.',
    difficulty: 'medium'
  },

  // 고등 - 인체의 항상성과 면역 (high-med-01)
  {
    id: 'high-med-01-q01',
    type: 'short_answer',
    question: '항상성이란 무엇인가?',
    options: [],
    answer: '체온, 혈당 등 몸속 환경을 일정한 범위로 유지하려는 성질',
    explanation: '항상성은 외부 환경이 변해도 체온, 혈당, 수분량 등 내부 환경을 일정한 범위로 유지하려는 생물의 조절 능력입니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-med-01-q02',
    type: 'multiple_choice',
    question: '체온이나 혈당 조절에서 흔히 나타나는 조절 방식은?',
    options: ['양성 되먹임', '음성 되먹임', '무작위 조절', '조절되지 않음'],
    answer: '음성 되먹임',
    explanation: '음성 되먹임은 변화를 감지하면 그 반대 방향으로 되돌리는 조절 방식으로, 체온과 혈당 조절의 기본 원리입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-01-q03',
    type: 'short_answer',
    question: '선천면역과 후천면역의 차이는?',
    options: [],
    answer: '선천면역은 태어날 때부터 있는 비특이적 방어이고, 후천면역은 특정 병원체를 기억하는 특이적 방어이다',
    explanation: '선천면역(피부, 백혈구의 식균작용)은 병원체 종류와 무관하게 작동하고, 후천면역(항체, 기억세포)은 특정 병원체를 인식하고 기억합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-01-q04',
    type: 'multiple_choice',
    question: '예방접종의 원리로 옳은 것은?',
    options: [
      '실제 감염 없이 면역계에 병원체를 미리 기억시킨다',
      '체온을 영구적으로 높인다',
      '병원체를 완전히 제거해 다시는 생기지 않게 한다',
      '항상 완치를 보장한다'
    ],
    answer: '실제 감염 없이 면역계에 병원체를 미리 기억시킨다',
    explanation: '예방접종은 약독화되거나 불활성화된 병원체(또는 그 일부)를 이용해 실제 감염 없이 기억세포를 만들어 두는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-01-q05',
    type: 'short_answer',
    question: '한 번 걸린 감염병에 대해 재감염 시 더 빠르게 대응할 수 있는 이유는?',
    options: [],
    answer: '면역계가 그 병원체를 기억하는 기억세포를 만들어두기 때문',
    explanation: '1차 면역반응 후 만들어진 기억세포는 같은 병원체가 다시 침입하면 더 빠르고 강한 2차 면역반응을 일으킵니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-01-q06',
    type: 'multiple_choice',
    question: '체온이 항상 정확히 고정되어 있다는 설명이 오개념인 이유는?',
    options: [
      '체온은 하루 중, 활동에 따라 좁은 범위 안에서 변동하기 때문',
      '체온은 사실 존재하지 않는 개념이기 때문',
      '체온은 나이와 무관하게 항상 똑같기 때문',
      '체온은 측정할 수 없기 때문'
    ],
    answer: '체온은 하루 중, 활동에 따라 좁은 범위 안에서 변동하기 때문',
    explanation: '체온은 정확히 고정된 값이 아니라 하루 중 시간대, 활동량, 환경에 따라 좁은 범위 내에서 오르내리며 조절됩니다.',
    difficulty: 'medium'
  },

  // 중등 - 힘과 운동의 관계 (middle-phys-01)
  {
    id: 'middle-phys-01-q01',
    type: 'multiple_choice',
    question: '뉴턴의 제1법칙(관성의 법칙)이 설명하는 것은?',
    options: [
      '힘이 없으면 물체는 반드시 정지한다',
      '외부 힘이 없으면 물체는 현재의 운동 상태를 유지한다',
      '무거운 물체는 항상 빨리 떨어진다',
      '힘은 항상 쌍으로 존재하지 않는다'
    ],
    answer: '외부 힘이 없으면 물체는 현재의 운동 상태를 유지한다',
    explanation: '관성의 법칙은 외부 힘이 작용하지 않으면 물체가 정지 또는 등속 직선 운동 상태를 유지한다는 것을 말합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-01-q02',
    type: 'calculation',
    question: '질량 2kg인 물체에 10N의 힘을 가하면 가속도는?',
    options: [],
    answer: '5 m/s²',
    explanation: 'F=ma에서 a=F/m=10/2=5 m/s²',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-01-q03',
    type: 'short_answer',
    question: '버스가 갑자기 출발할 때 몸이 뒤로 쏠리는 현상을 설명하는 법칙은?',
    options: [],
    answer: '관성의 법칙(뉴턴 제1법칙)',
    explanation: '몸은 원래 정지 상태를 유지하려 하지만 버스만 앞으로 움직이므로 상대적으로 몸이 뒤로 쏠리는 것처럼 느껴집니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-01-q04',
    type: 'multiple_choice',
    question: '같은 힘으로 밀 때 질량이 더 큰 물체는 어떻게 되는가?',
    options: ['가속도가 더 크다', '가속도가 더 작다', '가속도는 질량과 무관하다', '즉시 멈춘다'],
    answer: '가속도가 더 작다',
    explanation: 'a=F/m 관계에 따라 힘이 같을 때 질량이 클수록 가속도는 작아집니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-01-q05',
    type: 'short_answer',
    question: '로켓이 가스를 뒤로 분출하며 앞으로 나아가는 원리를 설명하는 법칙은?',
    options: [],
    answer: '작용-반작용의 법칙(뉴턴 제3법칙)',
    explanation: '로켓이 가스를 뒤로 미는 힘(작용)에 대해 가스가 로켓을 앞으로 미는 반작용의 힘이 작용해 로켓이 나아갑니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-01-q06',
    type: 'calculation',
    question: '무게가 없는 마찰이 없는 얼음판 위에서 힘을 가하지 않은 물체는 어떻게 움직이는가?',
    options: [],
    answer: '등속 직선 운동을 계속한다',
    explanation: '외부 힘(마찰 포함)이 없으므로 관성의 법칙에 따라 물체는 속도를 바꾸지 않고 등속 직선 운동을 계속합니다.',
    difficulty: 'hard'
  },

  // 중등 - 일과 에너지 보존 (middle-phys-02)
  {
    id: 'middle-phys-02-q01',
    type: 'calculation',
    question: '질량 2kg인 물체를 5m 들어올렸을 때 위치에너지는? (g=10m/s²)',
    options: [],
    answer: '100 J',
    explanation: 'PE = mgh = 2×10×5 = 100 J',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-02-q02',
    type: 'calculation',
    question: '질량 1kg 물체가 4m/s로 움직일 때 운동에너지는?',
    options: [],
    answer: '8 J',
    explanation: 'KE = ½mv² = ½×1×4² = 8 J',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-02-q03',
    type: 'multiple_choice',
    question: '마찰이 없는 상황에서 롤러코스터가 내려갈 때 일어나는 일은?',
    options: [
      '위치에너지가 운동에너지로 전환된다',
      '에너지가 사라진다',
      '운동에너지가 위치에너지로 전환된다',
      '에너지가 새로 생긴다'
    ],
    answer: '위치에너지가 운동에너지로 전환된다',
    explanation: '높이가 낮아지면서 위치에너지가 줄고, 그만큼 운동에너지가 늘어나며 역학적 에너지 총량은 보존됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-02-q04',
    type: 'short_answer',
    question: '마찰이 있는 계에서 에너지가 "사라지는 것처럼" 보이는 이유는?',
    options: [],
    answer: '역학적 에너지가 열이나 소리 등 다른 형태로 전환되기 때문',
    explanation: '에너지는 실제로 사라지지 않고 마찰로 인해 열 에너지나 소리 에너지 등 다른 형태로 전환된 것입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-02-q05',
    type: 'multiple_choice',
    question: '위치에너지의 크기를 결정하는 요인이 아닌 것은?',
    options: ['질량', '높이', '중력가속도', '물체의 색깔'],
    answer: '물체의 색깔',
    explanation: '위치에너지 PE=mgh는 질량, 높이, 중력가속도로 결정되며 물체의 색깔과는 무관합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-phys-02-q06',
    type: 'calculation',
    question: '높이 10m에서 정지 상태로 떨어뜨린 물체가 지면에 닿기 직전 속력은? (마찰 무시, g=10m/s²)',
    options: [],
    answer: '약 14.1 m/s',
    explanation: '에너지 보존: mgh=½mv² → v=√(2gh)=√(2×10×10)=√200≈14.1 m/s',
    difficulty: 'hard'
  },

  // 중등 - 원소와 원자 (middle-chem-01)
  {
    id: 'middle-chem-01-q01',
    type: 'short_answer',
    question: '원자를 구성하는 세 가지 기본 입자는?',
    options: [],
    answer: '양성자, 중성자, 전자',
    explanation: '원자는 원자핵을 이루는 양성자와 중성자, 그 주위를 도는 전자로 구성됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-chem-01-q02',
    type: 'multiple_choice',
    question: '원소와 화합물의 차이로 옳은 것은?',
    options: [
      '원소는 두 종류 이상의 원자로 이루어진 물질이다',
      '화합물은 한 종류의 원자로만 이루어진 물질이다',
      '원소는 한 종류의 원자로, 화합물은 여러 원소가 결합해 이루어진다',
      '둘은 같은 개념이다'
    ],
    answer: '원소는 한 종류의 원자로, 화합물은 여러 원소가 결합해 이루어진다',
    explanation: '원소(예: 산소 O₂)는 한 종류의 원자로만 이루어지고, 화합물(예: 물 H₂O)은 서로 다른 원소가 결합하여 만들어집니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-01-q03',
    type: 'short_answer',
    question: '원자번호는 무엇을 의미하는가?',
    options: [],
    answer: '원자핵 속 양성자의 개수',
    explanation: '원자번호는 원자핵에 들어있는 양성자의 개수를 나타내며, 원소를 구별하는 기준이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-01-q04',
    type: 'multiple_choice',
    question: '주기율표에서 같은 세로줄(족)에 있는 원소들의 공통점은?',
    options: ['원자번호가 같다', '화학적 성질이 비슷하다', '항상 색깔이 같다', '전자가 없다'],
    answer: '화학적 성질이 비슷하다',
    explanation: '같은 족 원소는 가장 바깥 전자껍질의 전자 수(원자가전자 수)가 같아 화학적 성질이 비슷합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-01-q05',
    type: 'short_answer',
    question: '원자를 눈으로 직접 볼 수 없다고 해서 존재하지 않는다고 말할 수 없는 이유는?',
    options: [],
    answer: '전자현미경 등으로 실제로 관찰되고 조작할 수 있기 때문',
    explanation: '원자는 일반 광학현미경으로는 볼 수 없지만, 전자현미경이나 원자간력현미경(AFM) 등으로 실제 관측 및 조작이 가능합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-01-q06',
    type: 'multiple_choice',
    question: '전자를 잃거나 얻어 전하를 띠게 된 원자를 무엇이라 하는가?',
    options: ['동위원소', '이온', '분자', '화합물'],
    answer: '이온',
    explanation: '원자가 전자를 잃으면 양이온, 전자를 얻으면 음이온이 됩니다.',
    difficulty: 'medium'
  },

  // 중등 - 일차방정식 (middle-math-01)
  {
    id: 'middle-math-01-q01',
    type: 'calculation',
    question: '방정식 x + 5 = 12의 해는?',
    options: [],
    answer: 'x = 7',
    explanation: '양변에서 5를 빼면 x = 12 - 5 = 7',
    difficulty: 'easy'
  },
  {
    id: 'middle-math-01-q02',
    type: 'calculation',
    question: '방정식 3x - 2 = 10의 해는?',
    options: [],
    answer: 'x = 4',
    explanation: '양변에 2를 더하면 3x=12, 양변을 3으로 나누면 x=4',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-01-q03',
    type: 'multiple_choice',
    question: '등식의 성질로 옳지 않은 것은?',
    options: [
      '양변에 같은 수를 더해도 등식은 성립한다',
      '양변에 같은 수를 곱해도 등식은 성립한다',
      '양변을 0으로 나누어도 등식은 성립한다',
      '양변에서 같은 수를 빼도 등식은 성립한다'
    ],
    answer: '양변을 0으로 나누어도 등식은 성립한다',
    explanation: '0으로 나누는 연산은 정의되지 않으므로 등식의 성질에서 제외됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-01-q04',
    type: 'short_answer',
    question: '어떤 수의 2배에서 3을 뺀 값이 15일 때, 그 수를 구하는 방정식은?',
    options: [],
    answer: '2x - 3 = 15',
    explanation: '어떤 수를 x라 하면 "2배에서 3을 뺀 값"은 2x-3이고, 이것이 15와 같으므로 2x-3=15로 세울 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-01-q05',
    type: 'calculation',
    question: '위 방정식 2x - 3 = 15를 풀면 x는?',
    options: [],
    answer: 'x = 9',
    explanation: '양변에 3을 더하면 2x=18, 양변을 2로 나누면 x=9',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-01-q06',
    type: 'short_answer',
    question: '일차방정식이 해가 무수히 많아지는 경우는 언제인가?',
    options: [],
    answer: '정리했을 때 양변이 항등식(항상 참)이 되는 경우',
    explanation: '예를 들어 2x+4=2(x+2)처럼 정리하면 양변이 같아지는 항등식이 되는 경우, x에 어떤 값을 넣어도 성립하므로 해가 무수히 많습니다.',
    difficulty: 'hard'
  },

  // 중등 - 세포와 물질대사 (middle-bio-01)
  {
    id: 'middle-bio-01-q01',
    type: 'multiple_choice',
    question: '동물세포에는 없고 식물세포에만 있는 구조는?',
    options: ['핵', '세포막', '세포벽과 엽록체', '미토콘드리아'],
    answer: '세포벽과 엽록체',
    explanation: '식물세포는 세포벽, 엽록체, 큰 액포를 가지지만 동물세포는 이러한 구조가 없습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-01-q02',
    type: 'short_answer',
    question: '세포호흡을 통해 에너지를 생산하는 세포소기관은?',
    options: [],
    answer: '미토콘드리아',
    explanation: '미토콘드리아는 포도당과 산소를 이용해 세포호흡을 하며 에너지(ATP)를 생산하는 "세포의 발전소" 역할을 합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-bio-01-q03',
    type: 'multiple_choice',
    question: '세포호흡의 반응물과 생성물로 옳은 것은?',
    options: [
      '포도당+산소 → 이산화탄소+물+에너지',
      '이산화탄소+물 → 포도당+산소',
      '단백질+지방 → 포도당',
      '물+에너지 → 포도당+산소'
    ],
    answer: '포도당+산소 → 이산화탄소+물+에너지',
    explanation: '세포호흡은 광합성과 반대로 포도당과 산소를 이용해 이산화탄소, 물, 에너지(ATP)를 생성합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-01-q04',
    type: 'short_answer',
    question: '코끼리가 생쥐보다 큰 주된 이유는 세포 크기 때문인가, 세포 수 때문인가?',
    options: [],
    answer: '세포의 수가 훨씬 많기 때문(세포 크기는 비슷함)',
    explanation: '대부분의 생물 세포 크기는 종에 관계없이 비슷하며, 몸집의 차이는 세포의 개수 차이에서 주로 비롯됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-bio-01-q05',
    type: 'multiple_choice',
    question: '식물세포의 세포벽에 대한 설명으로 옳은 것은?',
    options: [
      '세포벽이 있으면 세포막은 없다',
      '세포벽은 세포막 바깥을 감싸는 구조이며 세포막도 함께 존재한다',
      '세포벽은 물질 출입을 조절한다',
      '세포벽은 동물세포에도 있다'
    ],
    answer: '세포벽은 세포막 바깥을 감싸는 구조이며 세포막도 함께 존재한다',
    explanation: '식물세포는 세포막 바깥에 단단한 세포벽을 추가로 가지고 있으며, 물질 출입 조절은 여전히 세포막이 담당합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-01-q06',
    type: 'short_answer',
    question: '산소가 없을 때 효모가 에너지를 얻는 방법은?',
    options: [],
    answer: '발효',
    explanation: '효모는 산소가 부족한 환경에서 발효(무산소 호흡)를 통해 포도당을 분해하여 에너지를 얻고 알코올과 이산화탄소를 만듭니다.',
    difficulty: 'medium'
  },

  // 중등 - 지층과 판구조론 (middle-earth-01)
  {
    id: 'middle-earth-01-q01',
    type: 'multiple_choice',
    question: '판의 경계 중 판이 서로 멀어지는 경계는?',
    options: ['수렴 경계', '발산 경계', '보존 경계', '고정 경계'],
    answer: '발산 경계',
    explanation: '발산 경계에서는 판이 서로 멀어지며 새로운 해양지각이 생성됩니다(예: 대서양 중앙 해령).',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-01-q02',
    type: 'short_answer',
    question: '지층누중의 법칙이란?',
    options: [],
    answer: '지층이 교란되지 않았다면 아래쪽 지층이 위쪽 지층보다 먼저 쌓인 것(더 오래된 것)이다',
    explanation: '퇴적물은 아래에서부터 순서대로 쌓이므로, 특별한 지각변동이 없다면 아래층이 더 오래된 지층입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-01-q03',
    type: 'multiple_choice',
    question: '히말라야 산맥이 형성된 원인은?',
    options: [
      '화산 폭발',
      '인도판과 유라시아판의 충돌(수렴 경계)',
      '판의 어긋남(보존 경계)',
      '해저 화산 활동'
    ],
    answer: '인도판과 유라시아판의 충돌(수렴 경계)',
    explanation: '인도판이 유라시아판과 충돌하며 두 대륙 사이의 지각이 솟아올라 히말라야 산맥이 만들어졌습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-01-q04',
    type: 'short_answer',
    question: '지진이 아무 이유 없이 무작위로 발생한다는 설명이 오개념인 이유는?',
    options: [],
    answer: '지진은 판 경계에 축적된 변형 에너지가 갑자기 방출되는 물리적 원인에 의해 발생하기 때문',
    explanation: '지진은 무작위 현상이 아니라 판의 상대적 움직임으로 오랫동안 쌓인 응력이 한계를 넘으면서 갑자기 방출되는 현상입니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-earth-01-q05',
    type: 'multiple_choice',
    question: '태평양 주변에 화산과 지진이 집중된 지역을 무엇이라 부르는가?',
    options: ['불의 고리(Ring of Fire)', '대서양 중앙 해령', '그랜드 캐니언', '판게아'],
    answer: '불의 고리(Ring of Fire)',
    explanation: '태평양 주변은 여러 판이 만나는 수렴 경계가 많아 화산과 지진 활동이 활발한 "불의 고리"로 불립니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-earth-01-q06',
    type: 'short_answer',
    question: '대륙이동설이 처음에 받아들여지지 않았던 이유는?',
    options: [],
    answer: '대륙을 이동시키는 힘(원동력)을 설명하지 못했기 때문',
    explanation: '베게너의 대륙이동설은 대륙 이동의 증거는 제시했지만 그 원동력을 설명하지 못해 초기에는 받아들여지지 않았고, 이후 맨틀대류 개념으로 보완되었습니다.',
    difficulty: 'hard'
  },

  // 중등 - 별의 일생과 은하 (middle-astro-01)
  {
    id: 'middle-astro-01-q01',
    type: 'short_answer',
    question: '별이 태어나는 가스와 먼지의 집합체를 무엇이라 하는가?',
    options: [],
    answer: '성운',
    explanation: '성운은 가스와 먼지가 모여있는 성간 물질의 집합체로, 중력 수축을 통해 별이 탄생하는 공간입니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-astro-01-q02',
    type: 'multiple_choice',
    question: '태양과 비슷한 질량의 별이 생을 마치는 순서로 옳은 것은?',
    options: [
      '주계열성 → 적색거성 → 백색왜성',
      '주계열성 → 초신성 → 블랙홀',
      '적색거성 → 주계열성 → 중성자별',
      '백색왜성 → 초신성 → 주계열성'
    ],
    answer: '주계열성 → 적색거성 → 백색왜성',
    explanation: '태양 정도 질량의 별은 주계열성으로 오래 빛나다가 적색거성을 거쳐 백색왜성으로 생을 마칩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-01-q03',
    type: 'short_answer',
    question: '아주 무거운 별이 폭발하며 생을 마치는 현상을 무엇이라 하는가?',
    options: [],
    answer: '초신성 폭발',
    explanation: '무거운 별은 핵융합 연료가 소진되면 초신성으로 폭발하며 중성자별이나 블랙홀을 남깁니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-01-q04',
    type: 'multiple_choice',
    question: '우리은하에 대한 설명으로 옳은 것은?',
    options: [
      '태양계 전체가 우주의 중심이다',
      '수천억 개의 별로 이루어진 나선은하이다',
      '별이 하나만 존재한다',
      '우주에 존재하는 유일한 은하이다'
    ],
    answer: '수천억 개의 별로 이루어진 나선은하이다',
    explanation: '우리은하는 태양을 포함해 수천억 개의 별로 이루어진 나선은하이며, 우주에는 수천억 개의 다른 은하가 더 존재합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-01-q05',
    type: 'short_answer',
    question: '별빛의 밝기는 거리와 어떤 관계가 있는가?',
    options: [],
    answer: '거리의 제곱에 반비례한다(역제곱 법칙)',
    explanation: '별의 겉보기 밝기는 거리가 멀어질수록 거리의 제곱에 반비례해 어두워집니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-astro-01-q06',
    type: 'multiple_choice',
    question: '우리은하에서 가장 가까운 대형 은하는?',
    options: ['안드로메다 은하', '오리온 대성운', '게성운', '유클리드 은하'],
    answer: '안드로메다 은하',
    explanation: '안드로메다 은하는 우리은하에서 가장 가까운 대형 나선은하로, 약 250만 광년 떨어져 있습니다.',
    difficulty: 'easy'
  }
];

// ID로 빠르게 찾을 수 있도록 맵 생성
export const questionsMap = new Map(allQuestions.map(q => [q.id, q]));

export function getQuestionsByLessonId(lessonId: string): Question[] {
  const prefix = lessonId.split('-').slice(0, -1).join('-');
  return allQuestions.filter(q => q.id.startsWith(prefix));
}
