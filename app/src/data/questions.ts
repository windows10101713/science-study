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
  },

  // 초등 - 소리의 성질 (elem-phys-02)
  {
    id: 'elem-phys-02-q01',
    type: 'multiple_choice',
    question: '소리가 생기는 근본 원인은?',
    options: ['물체의 온도 변화', '물체의 떨림(진동)', '물체의 색깔', '물체의 무게'],
    answer: '물체의 떨림(진동)',
    explanation: '소리는 물체가 떨릴 때(진동할 때) 발생하며, 이 떨림이 공기 등의 매질을 통해 전달됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-phys-02-q02',
    type: 'short_answer',
    question: '소리의 높낮이를 결정하는 것은 무엇인가?',
    options: [],
    answer: '진동수(주파수)',
    explanation: '진동수가 클수록 높은 소리, 작을수록 낮은 소리가 납니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-phys-02-q03',
    type: 'multiple_choice',
    question: '소리의 크기(세기)를 결정하는 것은?',
    options: ['진동수', '진폭', '파장', '색깔'],
    answer: '진폭',
    explanation: '진폭이 클수록 큰 소리, 작을수록 작은 소리가 납니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-phys-02-q04',
    type: 'short_answer',
    question: '진공에서 소리가 전달되지 않는 이유는?',
    options: [],
    answer: '소리를 전달할 매질(입자)이 없기 때문',
    explanation: '소리는 입자의 진동으로 전달되는 파동이므로 입자가 없는 진공에서는 전달될 수 없습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-phys-02-q05',
    type: 'multiple_choice',
    question: '실 전화기에서 실이 팽팽할 때와 느슨할 때의 차이는?',
    options: [
      '팽팽할 때 소리가 더 잘 전달된다',
      '느슨할 때 소리가 더 잘 전달된다',
      '차이가 없다',
      '팽팽하면 소리가 아예 전달되지 않는다'
    ],
    answer: '팽팽할 때 소리가 더 잘 전달된다',
    explanation: '실이 팽팽해야 떨림이 잘 전달되어 소리가 더 명확하게 들립니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-phys-02-q06',
    type: 'short_answer',
    question: '천둥소리가 번개보다 늦게 들리는 이유는?',
    options: [],
    answer: '소리의 속력이 빛의 속력보다 훨씬 느리기 때문',
    explanation: '빛은 거의 순간적으로 도달하지만 소리는 초당 약 340m로 훨씬 느리게 이동해 늦게 들립니다.',
    difficulty: 'medium'
  },

  // 초등 - 혼합물의 분리 (elem-chem-02)
  {
    id: 'elem-chem-02-q01',
    type: 'multiple_choice',
    question: '소금물에서 소금을 다시 얻는 방법은?',
    options: ['거름', '증발', '자석 이용', '체로 거르기'],
    answer: '증발',
    explanation: '물을 증발시키면 소금 결정만 남아 소금을 회수할 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-02-q02',
    type: 'short_answer',
    question: '철가루와 모래의 혼합물을 분리하는 가장 쉬운 방법은?',
    options: [],
    answer: '자석을 이용한다',
    explanation: '철가루는 자성을 띠므로 자석을 가까이 하면 철가루만 붙어 분리할 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-02-q03',
    type: 'multiple_choice',
    question: '모래와 자갈처럼 크기가 다른 고체를 분리하는 방법은?',
    options: ['체로 거르기', '증발', '자석 이용', '거름종이 사용'],
    answer: '체로 거르기',
    explanation: '입자 크기 차이를 이용해 체로 거르면 크기별로 분리할 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-02-q04',
    type: 'short_answer',
    question: '혼합물을 물리적 방법으로 분리할 수 있는 이유는?',
    options: [],
    answer: '혼합된 성분들이 화학적으로 결합하지 않고 각자의 성질을 유지하기 때문',
    explanation: '혼합물의 각 성분은 화학반응 없이 섞여 있을 뿐이라 원래의 성질(녹는점, 자성 등)을 그대로 유지합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-02-q05',
    type: 'multiple_choice',
    question: '소금과 모래의 혼합물에서 모래만 걸러내는 데 사용하는 도구는?',
    options: ['거름종이와 깔때기', '자석', '온도계', '저울'],
    answer: '거름종이와 깔때기',
    explanation: '소금물을 거름종이에 부으면 물에 녹지 않는 모래만 걸러집니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-02-q06',
    type: 'short_answer',
    question: '순물질과 달리 혼합물이 화학반응 없이 분리 가능한 근본적 이유는?',
    options: [],
    answer: '혼합물의 성분들이 화학결합을 이루지 않은 상태이기 때문',
    explanation: '순물질(화합물)은 화학결합으로 이루어져 화학반응이 필요하지만, 혼합물은 단순히 섞여있을 뿐이라 물리적 방법으로 분리가 가능합니다.',
    difficulty: 'hard'
  },

  // 초등 - 생활 속 산성과 염기성 (elem-chem-03)
  {
    id: 'elem-chem-03-q01',
    type: 'multiple_choice',
    question: '다음 중 산성 물질은?',
    options: ['식초', '비눗물', '베이킹소다 용액', '수산화나트륨 용액'],
    answer: '식초',
    explanation: '식초는 아세트산을 포함한 대표적인 약산성 물질입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-03-q02',
    type: 'short_answer',
    question: '파란 리트머스 종이를 빨갛게 만드는 물질의 성질은?',
    options: [],
    answer: '산성',
    explanation: '산성 물질은 파란 리트머스 종이를 붉게 변화시킵니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-chem-03-q03',
    type: 'multiple_choice',
    question: '산과 염기가 만나 일어나는 반응은?',
    options: ['중화 반응', '연소 반응', '광합성', '증발'],
    answer: '중화 반응',
    explanation: '산과 염기가 만나면 서로의 성질을 상쇄하는 중화 반응이 일어나 물과 염이 생성됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-03-q04',
    type: 'short_answer',
    question: '위산과다일 때 제산제(염기성)를 먹는 이유는?',
    options: [],
    answer: '중화 반응으로 위산의 산성을 낮추기 위해서',
    explanation: '제산제는 염기성 물질로 위산(산성)과 중화 반응을 일으켜 속쓰림을 줄여줍니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-03-q05',
    type: 'multiple_choice',
    question: '식초(약한 산성)에 대한 설명으로 옳은 것은?',
    options: [
      '항상 위험하다',
      '일상에서 안전하게 사용된다',
      'pH가 14에 가깝다',
      '염기성 물질이다'
    ],
    answer: '일상에서 안전하게 사용된다',
    explanation: '식초는 약한 산성으로 일상 요리 등에서 안전하게 사용됩니다. 산성 자체가 항상 위험한 것은 아닙니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-chem-03-q06',
    type: 'short_answer',
    question: '자주색 양배추 물이 천연 지시약으로 사용될 수 있는 이유는?',
    options: [],
    answer: '산성·염기성에 따라 색이 다르게 변하는 색소를 포함하고 있기 때문',
    explanation: '양배추의 안토시아닌 색소는 pH에 따라 색이 변해 산성·염기성을 구별하는 지시약으로 쓸 수 있습니다.',
    difficulty: 'medium'
  },

  // 초등 - 도형의 넓이와 둘레 (elem-math-02)
  {
    id: 'elem-math-02-q01',
    type: 'calculation',
    question: '가로 5cm, 세로 3cm인 직사각형의 넓이는?',
    options: [],
    answer: '15cm²',
    explanation: '직사각형의 넓이 = 가로×세로 = 5×3 = 15cm²',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-02-q02',
    type: 'calculation',
    question: '밑변 6cm, 높이 4cm인 삼각형의 넓이는?',
    options: [],
    answer: '12cm²',
    explanation: '삼각형의 넓이 = 밑변×높이÷2 = 6×4÷2 = 12cm²',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-02-q03',
    type: 'short_answer',
    question: '직사각형의 둘레를 구하는 식은?',
    options: [],
    answer: '(가로+세로)×2',
    explanation: '둘레는 네 변의 길이를 모두 더한 것으로, (가로+세로)×2로 계산합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-02-q04',
    type: 'multiple_choice',
    question: '둘레가 같은 직사각형 중 넓이가 가장 큰 것은?',
    options: ['가로세로 비율이 매우 다른 경우', '정사각형에 가까운 경우', '넓이는 항상 같다', '둘레와 넓이는 무관하다'],
    answer: '정사각형에 가까운 경우',
    explanation: '둘레가 같을 때 가로세로 비율이 1:1(정사각형)에 가까울수록 넓이가 최대가 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-math-02-q05',
    type: 'short_answer',
    question: '넓이의 단위에 제곱(²)이 붙는 이유는?',
    options: [],
    answer: '넓이는 길이×길이로 계산되는 양이기 때문',
    explanation: '넓이는 "길이×길이"의 차원을 가지므로 cm², m²처럼 제곱 단위를 사용합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-02-q06',
    type: 'calculation',
    question: '밑변 8cm, 높이 5cm인 평행사변형의 넓이는?',
    options: [],
    answer: '40cm²',
    explanation: '평행사변형의 넓이 = 밑변×높이 = 8×5 = 40cm²',
    difficulty: 'medium'
  },

  // 초등 - 규칙과 대응 (elem-math-03)
  {
    id: 'elem-math-03-q01',
    type: 'calculation',
    question: '세발자전거 4대의 바퀴 수는?',
    options: [],
    answer: '12개',
    explanation: '바퀴 수 = 자전거 수×3 = 4×3 = 12개',
    difficulty: 'easy'
  },
  {
    id: 'elem-math-03-q02',
    type: 'short_answer',
    question: '한 변의 길이가 x인 정사각형의 둘레를 식으로 나타내면?',
    options: [],
    answer: '4×x (또는 4x)',
    explanation: '정사각형은 네 변의 길이가 모두 같으므로 둘레는 한 변의 길이의 4배입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-03-q03',
    type: 'multiple_choice',
    question: '정비례 관계의 특징으로 옳은 것은?',
    options: [
      'x가 2배가 되면 y도 2배가 된다',
      'x가 2배가 되면 y는 절반이 된다',
      'x와 y는 항상 같은 값이다',
      'x가 늘어도 y는 변하지 않는다'
    ],
    answer: 'x가 2배가 되면 y도 2배가 된다',
    explanation: '정비례 관계 y=ax에서는 x가 커지는 비율만큼 y도 커집니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-03-q04',
    type: 'short_answer',
    question: '모든 두 양의 관계가 정비례라고 할 수 없는 이유는?',
    options: [],
    answer: '반비례 관계 등 다른 종류의 대응 관계도 존재하기 때문',
    explanation: '어떤 관계는 한쪽이 커지면 다른 쪽이 작아지는 반비례 관계를 가질 수 있어, 표를 통해 확인하는 것이 중요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-math-03-q05',
    type: 'calculation',
    question: '정삼각형을 한 개씩 이어 붙일 때 필요한 성냥개비 수의 규칙이 "2n+1"(n=삼각형 개수)이라면 삼각형 5개에 필요한 성냥개비 수는?',
    options: [],
    answer: '11개',
    explanation: '2×5+1 = 11개',
    difficulty: 'medium'
  },
  {
    id: 'elem-math-03-q06',
    type: 'short_answer',
    question: '표를 만들어 규칙을 찾는 것이 중요한 이유는?',
    options: [],
    answer: '규칙을 정확히 파악해 잘못된 관계(예: 무조건 정비례라고 착각)를 피할 수 있기 때문',
    explanation: '표로 실제 값의 변화를 확인하면 정비례, 반비례 등 정확한 관계를 파악할 수 있습니다.',
    difficulty: 'medium'
  },

  // 초등 - 우리 몸의 구조와 기능 (elem-bio-03)
  {
    id: 'elem-bio-03-q01',
    type: 'multiple_choice',
    question: '우리 몸을 지탱하고 내부 장기를 보호하는 것은?',
    options: ['뼈(골격계)', '혈액', '소화액', '신경'],
    answer: '뼈(골격계)',
    explanation: '골격계는 몸을 지지하고 뇌, 심장 같은 내부 장기를 보호하는 역할을 합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-bio-03-q02',
    type: 'short_answer',
    question: '온몸에 피를 보내는 펌프 역할을 하는 기관은?',
    options: [],
    answer: '심장',
    explanation: '심장은 규칙적인 수축과 이완으로 혈액을 온몸에 순환시킵니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-bio-03-q03',
    type: 'multiple_choice',
    question: '뼈에 대한 설명으로 옳은 것은?',
    options: [
      '뼈는 죽은 조직이라 변화가 없다',
      '뼈는 살아있는 조직으로 계속 재생된다',
      '뼈에는 혈관이 없다',
      '뼈는 한 번 부러지면 절대 붙지 않는다'
    ],
    answer: '뼈는 살아있는 조직으로 계속 재생된다',
    explanation: '뼈는 혈관과 신경이 분포한 살아있는 조직으로, 끊임없이 재생되며 골절 후에도 붙을 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-bio-03-q04',
    type: 'short_answer',
    question: '팔을 굽힐 때 수축하는 근육의 이름은?',
    options: [],
    answer: '이두근',
    explanation: '팔을 굽힐 때는 팔 앞쪽의 이두근이 수축합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-bio-03-q05',
    type: 'multiple_choice',
    question: '운동을 하면 심장박동이 빨라지는 이유는?',
    options: [
      '근육에 더 많은 산소와 영양분을 공급하기 위해',
      '심장이 지쳐서',
      '체온을 낮추기 위해서만',
      '아무 이유 없이 무작위로'
    ],
    answer: '근육에 더 많은 산소와 영양분을 공급하기 위해',
    explanation: '운동 중에는 근육의 에너지 요구가 늘어나 심장이 더 빨리 뛰어 혈액 공급을 늘립니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-bio-03-q06',
    type: 'short_answer',
    question: '심장이 뇌의 명령 없이도 스스로 규칙적으로 뛸 수 있는 이유는?',
    options: [],
    answer: '심장 자체에 리듬을 만드는 특수한 전기 신호 시스템(동방결절)이 있기 때문',
    explanation: '심장에는 동방결절이라는 자체적인 전기 신호 발생 장치가 있어 스스로 규칙적인 박동을 만듭니다.',
    difficulty: 'hard'
  },

  // 초등 - 날씨와 기후의 변화 (elem-earth-02)
  {
    id: 'elem-earth-02-q01',
    type: 'multiple_choice',
    question: '날씨와 기후의 차이로 옳은 것은?',
    options: [
      '날씨는 짧은 기간, 기후는 오랜 기간의 대기 상태이다',
      '둘은 완전히 같은 뜻이다',
      '기후는 하루 단위로 바뀐다',
      '날씨는 수십 년 단위의 평균이다'
    ],
    answer: '날씨는 짧은 기간, 기후는 오랜 기간의 대기 상태이다',
    explanation: '날씨는 오늘·이번 주의 대기 상태이고, 기후는 한 지역의 수십 년간 평균적인 대기 패턴입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-earth-02-q02',
    type: 'short_answer',
    question: '우리나라의 기후를 한 단어로 표현하면?',
    options: [],
    answer: '온대 기후(사계절이 뚜렷함)',
    explanation: '우리나라는 사계절이 뚜렷한 온대 기후에 속합니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-earth-02-q03',
    type: 'multiple_choice',
    question: '겨울에 눈이 왔다고 "지구온난화가 사실이 아니다"라고 말하는 것이 오류인 이유는?',
    options: [
      '날씨와 기후를 혼동했기 때문',
      '눈은 겨울에 절대 오지 않기 때문',
      '지구온난화는 실제로 존재하지 않기 때문',
      '기후변화는 하루 만에 일어나기 때문'
    ],
    answer: '날씨와 기후를 혼동했기 때문',
    explanation: '기후변화는 수십 년 단위의 평균적 경향을 다루므로, 하루의 날씨로 판단할 수 없습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-02-q04',
    type: 'short_answer',
    question: '기후에 영향을 미치는 요인을 2가지 이상 쓰시오.',
    options: [],
    answer: '위도, 고도, 바다와의 거리 등',
    explanation: '위도(적도에 가까울수록 따뜻함), 고도(높을수록 서늘함), 바다와의 거리(해양성 기후) 등이 기후를 결정합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-02-q05',
    type: 'multiple_choice',
    question: '사막 지역의 기후 특징은?',
    options: ['강수량이 매우 적다', '일 년 내내 눈이 온다', '습도가 항상 높다', '기온이 항상 낮다'],
    answer: '강수량이 매우 적다',
    explanation: '사막은 건조 기후로 강수량이 매우 적은 것이 특징입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-earth-02-q06',
    type: 'short_answer',
    question: '날씨를 나타낼 때 사용하는 요소를 3가지 이상 쓰시오.',
    options: [],
    answer: '기온, 습도, 강수량, 바람 등',
    explanation: '날씨는 기온, 습도, 바람, 강수량 등이 짧은 시간에 변하는 대기 상태로 나타냅니다.',
    difficulty: 'easy'
  },

  // 초등 - 화산과 지진 (elem-earth-03)
  {
    id: 'elem-earth-03-q01',
    type: 'multiple_choice',
    question: '화산이 폭발할 때 지표로 분출되는 것은?',
    options: ['용암', '얼음', '순수한 산소', '눈'],
    answer: '용암',
    explanation: '화산은 마그마가 지표로 분출되며 용암, 화산재, 가스를 내뿜습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-earth-03-q02',
    type: 'short_answer',
    question: '지진이 일어나는 근본적인 원인은?',
    options: [],
    answer: '지각에 쌓인 힘(응력)이 갑자기 방출되기 때문',
    explanation: '지진은 지각에 오랫동안 쌓인 힘이 한계를 넘어 갑자기 방출되며 땅이 흔들리는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-03-q03',
    type: 'multiple_choice',
    question: '화산 활동이 인간에게 주는 이점이 아닌 것은?',
    options: ['비옥한 화산토양', '지열발전', '온천', '예고 없는 대규모 피해(이점 아님)'],
    answer: '예고 없는 대규모 피해(이점 아님)',
    explanation: '화산은 위험하기도 하지만 비옥한 토양, 온천, 지열발전 같은 이점도 제공합니다. 피해는 이점이 아닙니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-03-q04',
    type: 'short_answer',
    question: '용암이 식어 굳으면 어떤 암석이 되는가?',
    options: [],
    answer: '화성암',
    explanation: '마그마나 용암이 식어 굳으면 화성암이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-03-q05',
    type: 'multiple_choice',
    question: '우리나라에 대한 설명으로 옳은 것은?',
    options: [
      '지진이 전혀 일어나지 않는다',
      '크고 작은 지진이 실제로 관측된다',
      '세계에서 화산활동이 가장 활발하다',
      '지진 대비가 전혀 필요 없다'
    ],
    answer: '크고 작은 지진이 실제로 관측된다',
    explanation: '우리나라도 실제로 크고 작은 지진이 관측되고 있어 내진 설계 등 대비가 필요합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-earth-03-q06',
    type: 'short_answer',
    question: '백두산은 어떤 지형에 해당하는가?',
    options: [],
    answer: '화산(한반도의 대표적인 화산)',
    explanation: '백두산은 한반도를 대표하는 화산으로, 화산활동으로 만들어진 지형입니다.',
    difficulty: 'easy'
  },

  // 초등 - 달의 위상 변화 (elem-astro-02)
  {
    id: 'elem-astro-02-q01',
    type: 'multiple_choice',
    question: '달이 스스로 빛나지 않고 밝게 보이는 이유는?',
    options: ['태양빛을 반사하기 때문', '달 자체가 빛을 낸다', '지구가 빛을 비춰서', '별빛을 반사해서'],
    answer: '태양빛을 반사하기 때문',
    explanation: '달은 스스로 빛나지 않고 태양빛을 반사해서 우리 눈에 밝게 보입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-02-q02',
    type: 'short_answer',
    question: '달의 위상이 변하는 주기는 약 며칠인가?',
    options: [],
    answer: '약 29.5일',
    explanation: '달의 위상 변화 주기(삭망월)는 약 29.5일입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-astro-02-q03',
    type: 'multiple_choice',
    question: '달의 위상이 변하는 근본적인 이유는?',
    options: [
      '태양-지구-달의 상대적 위치가 달라지기 때문',
      '달의 모양이 실제로 변하기 때문',
      '지구의 자전 때문',
      '달이 사라졌다 나타나기 때문'
    ],
    answer: '태양-지구-달의 상대적 위치가 달라지기 때문',
    explanation: '달이 지구 주위를 공전하며 태양빛을 받는 부분 중 지구에서 보이는 부분이 달라져 위상이 변합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-astro-02-q04',
    type: 'short_answer',
    question: '월식과 달의 위상 변화의 차이는?',
    options: [],
    answer: '월식은 달이 지구 그림자에 가려지는 특별한 현상이고, 위상 변화는 매일 반복되는 정상적인 현상이다',
    explanation: '월식은 보름달일 때 가끔 일어나는 특별한 현상으로, 매일 일어나는 위상 변화와는 다른 현상입니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-astro-02-q05',
    type: 'multiple_choice',
    question: '보름달이 보이는 시기의 특징은?',
    options: ['밤새 둥글고 밝게 보인다', '전혀 보이지 않는다', '반달 모양으로 보인다', '낮에만 보인다'],
    answer: '밤새 둥글고 밝게 보인다',
    explanation: '보름달일 때는 달 전체가 태양빛을 받아 밤새 둥글고 밝게 보입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-02-q06',
    type: 'short_answer',
    question: '달은 지구를 향해 항상 어떤 면을 보이는가?',
    options: [],
    answer: '같은 반구(앞면)',
    explanation: '달은 자전주기와 공전주기가 같아서 항상 같은 반구를 지구로 향하고 있습니다.',
    difficulty: 'hard'
  },

  // 초등 - 별자리와 계절 (elem-astro-03)
  {
    id: 'elem-astro-03-q01',
    type: 'multiple_choice',
    question: '겨울철 밤하늘의 대표적인 별자리는?',
    options: ['오리온자리', '사자자리', '백조자리', '페가수스자리'],
    answer: '오리온자리',
    explanation: '오리온자리는 겨울철 밤하늘의 대표적인 별자리입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-03-q02',
    type: 'short_answer',
    question: '계절에 따라 보이는 별자리가 달라지는 근본적인 이유는?',
    options: [],
    answer: '지구가 태양 주위를 공전하기 때문',
    explanation: '지구가 공전하면서 밤에 태양 반대편 하늘을 보는 방향이 계절마다 바뀌기 때문입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-astro-03-q03',
    type: 'multiple_choice',
    question: '별자리에 대한 올바른 설명은?',
    options: [
      '별자리를 이루는 별들은 실제 우주에서도 서로 가깝다',
      '별자리는 지구에서 본 겉보기 배열일 뿐이다',
      '별자리는 매일 모양이 바뀐다',
      '별자리는 실제 존재하는 물리적 구조물이다'
    ],
    answer: '별자리는 지구에서 본 겉보기 배열일 뿐이다',
    explanation: '별자리를 이루는 별들은 지구에서 가까워 보일 뿐, 실제 거리는 서로 매우 다른 경우가 많습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-astro-03-q04',
    type: 'short_answer',
    question: '북극성을 찾는 데 흔히 이용되는 별자리는?',
    options: [],
    answer: '북두칠성',
    explanation: '북두칠성의 국자 끝 두 별을 연결해 늘리면 북극성을 찾을 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-03-q05',
    type: 'multiple_choice',
    question: '여름철 밤하늘에서 볼 수 있는 별자리는?',
    options: ['백조자리', '오리온자리', '겨울철 대삼각형', '없음'],
    answer: '백조자리',
    explanation: '백조자리는 여름철 밤하늘에서 볼 수 있는 대표적인 별자리입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-astro-03-q06',
    type: 'short_answer',
    question: '별자리 안의 별들의 실제 거리에 대한 올바른 설명은?',
    options: [],
    answer: '겉보기에는 가까워 보이지만 실제로는 지구로부터의 거리가 서로 매우 다를 수 있다',
    explanation: '같은 별자리 안의 별이라도 3차원적으로는 전혀 가깝지 않은 경우가 많습니다.',
    difficulty: 'hard'
  },

  // 초등 - 건강한 생활 습관 (elem-med-01)
  {
    id: 'elem-med-01-q01',
    type: 'multiple_choice',
    question: '건강한 생활 습관의 기본 세 가지는?',
    options: [
      '균형 잡힌 식사, 충분한 수면, 꾸준한 운동',
      '게임, 간식, 늦잠',
      '편식, 야식, 앉아있기',
      '단식, 밤샘, 무리한 운동'
    ],
    answer: '균형 잡힌 식사, 충분한 수면, 꾸준한 운동',
    explanation: '균형 잡힌 식사, 충분한 수면, 꾸준한 운동은 건강을 지키는 세 가지 기본 습관입니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-med-01-q02',
    type: 'short_answer',
    question: '성장기에 필요한 하루 수면 시간은 대략 얼마인가?',
    options: [],
    answer: '8~10시간',
    explanation: '성장기에는 성장호르몬 분비와 신체 회복을 위해 하루 8~10시간의 수면이 필요합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-01-q03',
    type: 'multiple_choice',
    question: '좋아하는 음식만 먹으면 생기는 문제는?',
    options: [
      '특정 영양소는 넘치고 다른 영양소는 부족해질 수 있다',
      '아무 문제가 없다',
      '모든 영양소가 완벽하게 균형을 이룬다',
      '오히려 더 건강해진다'
    ],
    answer: '특정 영양소는 넘치고 다른 영양소는 부족해질 수 있다',
    explanation: '편식을 하면 영양 불균형이 생길 수 있어 여러 종류의 음식을 골고루 먹는 것이 중요합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-01-q04',
    type: 'short_answer',
    question: '수면이 성장기에 중요한 이유는?',
    options: [],
    answer: '깊은 잠을 자는 동안 성장호르몬이 많이 분비되기 때문',
    explanation: '수면 중, 특히 깊은 잠 단계에서 성장호르몬이 활발히 분비되어 성장에 중요한 역할을 합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-01-q05',
    type: 'multiple_choice',
    question: '규칙적인 운동이 주는 효과가 아닌 것은?',
    options: ['근육과 뼈를 튼튼하게 함', '심폐 기능 향상', '무조건적인 수면시간 단축', '건강 증진'],
    answer: '무조건적인 수면시간 단축',
    explanation: '운동은 근육, 뼈, 심폐 기능을 튼튼하게 하지만 수면 시간을 무조건 줄이는 것을 의미하지는 않습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-01-q06',
    type: 'short_answer',
    question: '"잠은 적게 잘수록 좋다"는 생각이 오개념인 이유는?',
    options: [],
    answer: '수면 부족은 성장과 회복에 필요한 성장호르몬 분비 등을 방해할 수 있기 때문',
    explanation: '수면은 단순한 휴식이 아니라 성장과 회복에 필수적인 시간이므로 무조건 줄이는 것은 좋지 않습니다.',
    difficulty: 'hard'
  },

  // 초등 - 몸을 지키는 청결과 예방 (elem-med-02)
  {
    id: 'elem-med-02-q01',
    type: 'multiple_choice',
    question: '손 씻기가 감염병 예방에 중요한 이유는?',
    options: [
      '손에 붙은 세균이나 바이러스를 없앨 수 있기 때문',
      '손이 예뻐지기 때문',
      '아무 효과가 없기 때문',
      '물을 아끼기 위해서'
    ],
    answer: '손에 붙은 세균이나 바이러스를 없앨 수 있기 때문',
    explanation: '비누로 손을 씻으면 병을 옮기는 세균과 바이러스를 효과적으로 제거할 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-med-02-q02',
    type: 'short_answer',
    question: '"눈에 보이지 않으면 세균이 없는 것이다"라는 생각이 잘못된 이유는?',
    options: [],
    answer: '세균과 바이러스는 매우 작아 눈에 보이지 않지만 실제로 우리 주변에 존재하기 때문',
    explanation: '세균과 바이러스는 크기가 매우 작아 육안으로 볼 수 없지만 실제로는 여러 곳에 존재합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-02-q03',
    type: 'multiple_choice',
    question: '기침할 때 올바른 예절은?',
    options: ['소매로 입과 코를 가린다', '손으로만 가린다', '아무렇게나 한다', '주변 사람에게 향한다'],
    answer: '소매로 입과 코를 가린다',
    explanation: '소매로 가리면 손을 통한 병원체 전파를 줄일 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 'elem-med-02-q04',
    type: 'short_answer',
    question: '한 번 손을 씻으면 하루 종일 깨끗하다는 생각이 틀린 이유는?',
    options: [],
    answer: '손은 여러 물건을 만지며 다시 오염될 수 있기 때문',
    explanation: '손은 계속해서 여러 물건과 접촉하므로 자주, 특히 식사 전과 화장실 사용 후에 씻어야 합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-02-q05',
    type: 'multiple_choice',
    question: '예방접종의 역할은?',
    options: [
      '면역계가 병원체를 미리 학습하게 한다',
      '병을 반드시 낫게 한다',
      '모든 질병을 완전히 없앤다',
      '아무 효과가 없다'
    ],
    answer: '면역계가 병원체를 미리 학습하게 한다',
    explanation: '예방접종은 실제 감염 없이 면역계가 병원체를 미리 인식하고 대비하게 하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-02-q06',
    type: 'short_answer',
    question: '비누가 세균을 없애는 데 효과적인 이유는?',
    options: [],
    answer: '세균을 둘러싼 지질막(기름 성분)을 파괴해 씻어낼 수 있게 하기 때문',
    explanation: '비누는 기름 성분을 가진 세균의 막을 분해해 물로 쉽게 씻어낼 수 있게 합니다.',
    difficulty: 'hard'
  },

  // 초등 - 응급처치의 기초 (elem-med-03)
  {
    id: 'elem-med-03-q01',
    type: 'multiple_choice',
    question: '상처 처리의 올바른 순서는?',
    options: ['지혈-세척-소독-보호', '보호-소독-세척-지혈', '소독-지혈-보호-세척', '순서는 상관없다'],
    answer: '지혈-세척-소독-보호',
    explanation: '상처는 먼저 지혈하고, 깨끗이 씻고, 소독한 뒤, 밴드 등으로 보호하는 순서로 처리합니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-03-q02',
    type: 'short_answer',
    question: '위급한 상황을 발견했을 때 가장 먼저 해야 할 일은?',
    options: [],
    answer: '현장이 안전한지 확인하고 도움을 요청한다(119 신고 등)',
    explanation: '응급처치의 기본 원칙은 먼저 현장 안전을 확인하고 침착하게 도움을 요청하는 것입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-03-q03',
    type: 'multiple_choice',
    question: '작은 상처를 방치하면 안 되는 이유는?',
    options: [
      '세균 감염으로 상처가 덧날 수 있기 때문',
      '아무 문제가 없기 때문',
      '상처가 저절로 커지기 때문',
      '피부색이 변하기 때문'
    ],
    answer: '세균 감염으로 상처가 덧날 수 있기 때문',
    explanation: '작은 상처라도 깨끗이 씻고 소독하지 않으면 세균 감염으로 악화될 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-03-q04',
    type: 'short_answer',
    question: '코피가 날 때 올바른 대처법은?',
    options: [],
    answer: '고개를 약간 숙이고 콧등을 지그시 눌러준다',
    explanation: '고개를 뒤로 젖히면 피가 목으로 넘어갈 수 있어, 숙인 자세로 콧등을 눌러주는 것이 올바른 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'elem-med-03-q05',
    type: 'multiple_choice',
    question: '응급 상황에서 "무조건 빨리 움직이는 것이 최선이다"라는 생각이 위험할 수 있는 이유는?',
    options: [
      '성급하게 행동하다 구조자 자신이 위험해질 수 있기 때문',
      '빨리 움직이면 항상 안전하기 때문',
      '침착함은 전혀 필요 없기 때문',
      '위험한 상황이 존재하지 않기 때문'
    ],
    answer: '성급하게 행동하다 구조자 자신이 위험해질 수 있기 때문',
    explanation: '먼저 상황의 안전을 확인하지 않고 서두르면 구조자 자신도 위험에 처할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'elem-med-03-q06',
    type: 'short_answer',
    question: '위급 상황에서 신고해야 하는 번호는?',
    options: [],
    answer: '119',
    explanation: '화재, 사고, 응급 의료 상황에서는 119에 신고합니다.',
    difficulty: 'easy'
  },

  // 중등 - 전기 회로의 기초 (middle-phys-03)
  {
    id: 'middle-phys-03-q01',
    type: 'multiple_choice',
    question: '옴의 법칙 V=IR에서 전류 I를 구하는 식은?',
    options: ['I=V/R', 'I=VR', 'I=R/V', 'I=V+R'],
    answer: 'I=V/R',
    explanation: 'V=IR을 I에 대해 정리하면 I=V/R이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-03-q02',
    type: 'short_answer',
    question: '전지가 회로에서 하는 역할은?',
    options: [],
    answer: '전류를 흐르게 하는 힘(전압)을 제공한다',
    explanation: '전지는 펌프처럼 전하를 밀어내는 힘(전압)을 제공해 전류가 흐르게 합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-phys-03-q03',
    type: 'multiple_choice',
    question: '병렬로 연결된 전구 중 하나가 꺼지면 나머지는 어떻게 되는가?',
    options: ['계속 켜져 있다', '모두 꺼진다', '더 밝아진다', '알 수 없다'],
    answer: '계속 켜져 있다',
    explanation: '병렬 연결은 각 전구가 독립된 경로를 가지므로 하나가 꺼져도 나머지는 영향을 받지 않습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-03-q04',
    type: 'short_answer',
    question: '직렬로 연결된 전구 중 하나가 끊어지면 어떻게 되는가?',
    options: [],
    answer: '전체 회로가 끊어져 모두 꺼진다',
    explanation: '직렬 연결은 하나의 경로로만 전류가 흐르므로 하나가 끊어지면 전체 회로가 끊어집니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-03-q05',
    type: 'multiple_choice',
    question: '전류가 저항을 지나며 전기 에너지가 주로 변환되는 형태는?',
    options: ['열이나 빛 에너지', '핵에너지', '중력 에너지', '원자력 에너지'],
    answer: '열이나 빛 에너지',
    explanation: '전류가 저항을 지나면 전기 에너지의 일부가 열이나 빛 에너지로 전환됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-phys-03-q06',
    type: 'short_answer',
    question: '"전류가 흐르며 소모되어 없어진다"는 생각이 틀린 이유는?',
    options: [],
    answer: '전하량 자체는 보존되며, 전기 에너지만 다른 형태로 전환되는 것이기 때문',
    explanation: '전류(전하의 흐름) 자체가 소모되는 것이 아니라, 전기 에너지가 저항을 지나며 열 등으로 전환되는 것입니다.',
    difficulty: 'hard'
  },

  // 중등 - 화학 반응과 질량 보존 (middle-chem-02)
  {
    id: 'middle-chem-02-q01',
    type: 'multiple_choice',
    question: '질량 보존 법칙을 제안한 과학자는?',
    options: ['라부아지에', '뉴턴', '아인슈타인', '멘델레예프'],
    answer: '라부아지에',
    explanation: '라부아지에는 화학 반응 전후 물질의 총 질량이 변하지 않는다는 질량 보존 법칙을 제안했습니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-chem-02-q02',
    type: 'short_answer',
    question: '밀폐된 용기에서 화학 반응이 일어날 때 반응 전후의 총 질량은?',
    options: [],
    answer: '변하지 않는다(보존된다)',
    explanation: '닫힌계에서는 화학 반응이 일어나도 원자가 새로 생기거나 없어지지 않으므로 총 질량은 보존됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-chem-02-q03',
    type: 'multiple_choice',
    question: '열린 용기에서 기체가 발생하는 반응의 질량을 측정하면?',
    options: [
      '기체가 빠져나가 질량이 줄어든 것처럼 보인다',
      '항상 질량이 늘어난다',
      '질량이 절대 변하지 않는다',
      '측정이 불가능하다'
    ],
    answer: '기체가 빠져나가 질량이 줄어든 것처럼 보인다',
    explanation: '열린 용기에서는 발생한 기체가 공기 중으로 빠져나가 질량이 줄어든 것처럼 측정됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-02-q04',
    type: 'short_answer',
    question: '철이 녹슬 때(산소와 결합) 질량은 어떻게 변하는가?',
    options: [],
    answer: '산소와 결합해 질량이 늘어난다',
    explanation: '철이 산소와 결합해 산화철이 되면서 산소의 질량만큼 전체 질량이 늘어납니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-02-q05',
    type: 'multiple_choice',
    question: '화학 반응식의 계수를 맞추는 것(균형 맞추기)이 반영하는 법칙은?',
    options: ['질량 보존 법칙', '만유인력의 법칙', '관성의 법칙', '에너지 보존 법칙만'],
    answer: '질량 보존 법칙',
    explanation: '반응식의 계수를 맞추는 것은 반응 전후 원자의 종류와 개수가 같아야 한다는 질량 보존 법칙을 반영합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-02-q06',
    type: 'short_answer',
    question: '나무가 타서 재가 되면 가벼워 보이는데, 질량 보존 법칙과 모순되지 않는 이유는?',
    options: [],
    answer: '연소로 발생한 기체와 연기까지 포함하면 전체 질량은 보존되기 때문',
    explanation: '재만 보면 가벼워 보이지만, 연소 중 발생한 이산화탄소와 수증기 등을 모두 포함하면 총 질량은 변하지 않습니다.',
    difficulty: 'hard'
  },

  // 중등 - 중학교 산과 염기 (middle-chem-03)
  {
    id: 'middle-chem-03-q01',
    type: 'short_answer',
    question: 'pH가 7일 때는 어떤 상태인가?',
    options: [],
    answer: '중성',
    explanation: 'pH 7은 중성을 나타내며, 7보다 작으면 산성, 크면 염기성입니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-chem-03-q02',
    type: 'multiple_choice',
    question: '산과 염기가 반응해 생성되는 것은?',
    options: ['물과 염', '산소와 수소', '이산화탄소', '전기'],
    answer: '물과 염',
    explanation: '산과 염기의 중화 반응은 물과 염을 생성합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-03-q03',
    type: 'short_answer',
    question: 'BTB 용액이 산성 용액에서 나타내는 색은?',
    options: [],
    answer: '노란색',
    explanation: 'BTB 용액은 산성에서 노랑, 중성에서 초록, 염기성에서 파랑을 나타냅니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-03-q04',
    type: 'multiple_choice',
    question: '"pH가 낮으면 항상 위험하다"는 생각이 틀린 이유는?',
    options: [
      '위산(pH 약 1.5~3.5)처럼 우리 몸에 자연적으로 존재하는 경우도 있기 때문',
      'pH는 항상 안전과 무관하기 때문',
      '낮은 pH는 항상 안전하기 때문',
      'pH는 실제로 측정할 수 없기 때문'
    ],
    answer: '위산(pH 약 1.5~3.5)처럼 우리 몸에 자연적으로 존재하는 경우도 있기 때문',
    explanation: '위산은 낮은 pH를 가지지만 소화에 필수적인 정상적인 신체 구성 요소입니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-chem-03-q05',
    type: 'short_answer',
    question: '산성 토양을 개선하기 위해 뿌리는 물질은?',
    options: [],
    answer: '석회(염기성 물질)',
    explanation: '석회는 염기성 물질로 산성 토양을 중화시켜 개선하는 데 사용됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-chem-03-q06',
    type: 'multiple_choice',
    question: '중화 반응 후 최종 pH가 항상 정확히 7이 아닐 수 있는 이유는?',
    options: [
      '생성된 염의 종류에 따라 최종 pH가 달라질 수 있기 때문',
      '중화 반응은 항상 pH 7을 만들기 때문',
      '중화 반응에는 예외가 없기 때문',
      'pH는 온도와 무관하기 때문'
    ],
    answer: '생성된 염의 종류에 따라 최종 pH가 달라질 수 있기 때문',
    explanation: '약산-강염기 반응처럼 생성된 염의 성질에 따라 최종 pH가 7보다 높거나 낮을 수 있습니다.',
    difficulty: 'hard'
  },

  // 중등 - 연립방정식 (middle-math-02)
  {
    id: 'middle-math-02-q01',
    type: 'calculation',
    question: '연립방정식 x+y=10, x-y=2를 풀면 x, y는?',
    options: [],
    answer: 'x=6, y=4',
    explanation: '두 식을 더하면 2x=12, x=6. 첫 식에 대입하면 y=4',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-02-q02',
    type: 'short_answer',
    question: '연립방정식을 푸는 대표적인 두 가지 방법은?',
    options: [],
    answer: '대입법과 가감법',
    explanation: '연립방정식은 한 식을 다른 식에 대입하는 대입법이나, 두 식을 더하거나 빼서 미지수를 소거하는 가감법으로 풉니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-math-02-q03',
    type: 'multiple_choice',
    question: '두 일차방정식이 나타내는 직선이 평행하면 연립방정식의 해는?',
    options: ['없다', '무수히 많다', '하나만 있다', '항상 (0,0)이다'],
    answer: '없다',
    explanation: '평행한 두 직선은 교점이 없으므로 연립방정식의 해가 존재하지 않습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-02-q04',
    type: 'short_answer',
    question: '두 식이 사실상 같은 직선을 나타내면 해는 몇 개인가?',
    options: [],
    answer: '무수히 많다',
    explanation: '두 식이 같은 직선이면 모든 점이 공통이므로 해가 무수히 많습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-02-q05',
    type: 'multiple_choice',
    question: '연립방정식의 해가 기하학적으로 의미하는 것은?',
    options: ['두 직선의 교점', '두 직선의 평균', '직선의 기울기', '직선의 y절편'],
    answer: '두 직선의 교점',
    explanation: '연립방정식을 만족하는 (x,y)는 두 직선이 만나는 교점의 좌표입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-02-q06',
    type: 'short_answer',
    question: '두 식을 각각 따로 풀면 답을 구할 수 없는 이유는?',
    options: [],
    answer: '미지수가 두 개이므로 두 조건(식)을 동시에 만족해야 값이 정해지기 때문',
    explanation: '미지수가 하나 남은 식 하나만으로는 특정 값을 구할 수 없으며, 두 식을 함께 고려해야 합니다.',
    difficulty: 'hard'
  },

  // 중등 - 도형의 합동과 닮음 (middle-math-03)
  {
    id: 'middle-math-03-q01',
    type: 'short_answer',
    question: '모양과 크기가 완전히 같은 두 도형의 관계는?',
    options: [],
    answer: '합동',
    explanation: '합동은 모양과 크기가 완전히 같은 도형 사이의 관계입니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-math-03-q02',
    type: 'multiple_choice',
    question: '닮음비가 2배인 두 도형의 넓이의 비는?',
    options: ['4배', '2배', '8배', '1배'],
    answer: '4배',
    explanation: '닮음비가 k배이면 넓이의 비는 k²배이므로 2²=4배입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-03-q03',
    type: 'short_answer',
    question: '닮음비가 3배인 두 입체도형의 부피의 비는?',
    options: [],
    answer: '27배(3³)',
    explanation: '닮음비가 k배이면 부피의 비는 k³배이므로 3³=27배입니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-math-03-q04',
    type: 'multiple_choice',
    question: '닮은 도형이 항상 합동인 것은 아닌 이유는?',
    options: [
      '닮음은 모양만 같고 크기는 다를 수 있기 때문',
      '닮음과 합동은 완전히 같은 뜻이기 때문',
      '닮음은 크기가 항상 같기 때문',
      '합동은 모양이 달라도 되기 때문'
    ],
    answer: '닮음은 모양만 같고 크기는 다를 수 있기 때문',
    explanation: '합동은 닮음비가 1인 특별한 경우이며, 일반적인 닮음은 크기가 다를 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-03-q05',
    type: 'short_answer',
    question: '삼각형의 대응각이 모두 같을 때 성립하는 닮음 조건은?',
    options: [],
    answer: 'AA 닮음',
    explanation: '두 삼각형의 대응하는 두 각이 각각 같으면 AA 닮음 조건에 의해 두 삼각형은 닮음입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-math-03-q06',
    type: 'calculation',
    question: '막대의 높이가 1m, 그림자가 2m일 때, 그림자가 10m인 나무의 높이는?',
    options: [],
    answer: '5m',
    explanation: '닮음비를 이용하면 1:2 = x:10, x=5m',
    difficulty: 'medium'
  },

  // 중등 - 광합성과 호흡 (middle-bio-02)
  {
    id: 'middle-bio-02-q01',
    type: 'multiple_choice',
    question: '광합성이 일어나는 세포소기관은?',
    options: ['엽록체', '미토콘드리아', '핵', '리보솜'],
    answer: '엽록체',
    explanation: '광합성은 엽록소를 포함한 엽록체에서 일어납니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-bio-02-q02',
    type: 'short_answer',
    question: '세포호흡이 일어나는 세포소기관은?',
    options: [],
    answer: '미토콘드리아',
    explanation: '세포호흡은 미토콘드리아에서 일어나며 포도당과 산소로부터 에너지를 만듭니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-bio-02-q03',
    type: 'multiple_choice',
    question: '"식물은 밤에는 호흡하지 않는다"는 생각이 틀린 이유는?',
    options: [
      '식물은 낮과 밤 구분 없이 항상 호흡하기 때문',
      '식물은 실제로 호흡을 하지 않기 때문',
      '식물은 밤에만 호흡하기 때문',
      '호흡은 동물에게만 있는 현상이기 때문'
    ],
    answer: '식물은 낮과 밤 구분 없이 항상 호흡하기 때문',
    explanation: '식물은 항상 호흡을 하며, 낮에는 광합성이 더 활발해 순 산소 방출이 두드러질 뿐입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-02-q04',
    type: 'short_answer',
    question: '광합성의 반응물 두 가지는?(빛 제외)',
    options: [],
    answer: '이산화탄소와 물',
    explanation: '광합성은 이산화탄소와 물을 이용해 빛에너지로 포도당과 산소를 만듭니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-02-q05',
    type: 'multiple_choice',
    question: '광합성과 호흡의 관계에 대한 올바른 설명은?',
    options: [
      '두 과정은 반응물과 생성물이 서로 반대인 별개의 과정이다',
      '광합성과 호흡은 완전히 같은 과정이다',
      '호흡은 식물에게만 일어난다',
      '광합성은 동물에게도 일어난다'
    ],
    answer: '두 과정은 반응물과 생성물이 서로 반대인 별개의 과정이다',
    explanation: '광합성은 에너지를 저장하는 과정, 호흡은 저장된 에너지를 꺼내 쓰는 과정으로 서로 반대되는 별개의 과정입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-02-q06',
    type: 'short_answer',
    question: '어두운 곳에 오래 둔 화분이 시드는 이유는?',
    options: [],
    answer: '광합성이 부족해 양분(에너지)을 충분히 만들지 못하기 때문',
    explanation: '빛이 부족하면 광합성이 제대로 일어나지 않아 식물이 필요한 양분을 만들지 못해 시들게 됩니다.',
    difficulty: 'medium'
  },

  // 중등 - 소화와 순환 (middle-bio-03)
  {
    id: 'middle-bio-03-q01',
    type: 'multiple_choice',
    question: '대부분의 영양분이 흡수되는 소화기관은?',
    options: ['소장', '위', '식도', '대장'],
    answer: '소장',
    explanation: '소장의 융털은 표면적을 넓혀 대부분의 영양분 흡수가 이곳에서 일어납니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-03-q02',
    type: 'short_answer',
    question: '탄수화물을 분해하는 침 속 소화효소는?',
    options: [],
    answer: '아밀레이스',
    explanation: '침 속의 아밀레이스는 탄수화물(전분)을 분해하기 시작합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-03-q03',
    type: 'multiple_choice',
    question: '"소화는 위에서 대부분 끝난다"는 생각이 오개념인 이유는?',
    options: [
      '대부분의 영양분 흡수는 소장에서 일어나기 때문',
      '위에서 모든 소화가 완료되기 때문',
      '소장은 소화에 관여하지 않기 때문',
      '위는 소화에 전혀 관여하지 않기 때문'
    ],
    answer: '대부분의 영양분 흡수는 소장에서 일어나기 때문',
    explanation: '위는 예비 분해와 살균 역할을 하고, 실제 영양분 흡수의 대부분은 소장에서 일어납니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-03-q04',
    type: 'short_answer',
    question: '혈액이 운반하는 물질을 산소 외에 2가지 이상 쓰시오.',
    options: [],
    answer: '영양분, 노폐물, 호르몬 등',
    explanation: '혈액은 산소뿐 아니라 영양분, 노폐물, 호르몬, 면역세포 등 다양한 물질을 운반합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-03-q05',
    type: 'multiple_choice',
    question: '운동 시 근육으로 가는 혈류량이 증가하는 이유는?',
    options: [
      '근육이 더 많은 산소와 영양분을 필요로 하기 때문',
      '심장이 지쳐서',
      '혈액이 갑자기 늘어나서',
      '체온이 낮아져서'
    ],
    answer: '근육이 더 많은 산소와 영양분을 필요로 하기 때문',
    explanation: '운동 중에는 근육의 에너지 요구가 늘어나 그에 맞춰 혈류량이 증가합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-bio-03-q06',
    type: 'short_answer',
    question: '지방을 분해하는 소화효소는?',
    options: [],
    answer: '라이페이스',
    explanation: '라이페이스는 지방을 지방산과 글리세롤로 분해하는 소화효소입니다.',
    difficulty: 'hard'
  },

  // 중등 - 대기와 해양의 순환 (middle-earth-02)
  {
    id: 'middle-earth-02-q01',
    type: 'multiple_choice',
    question: '대기와 해양이 순환하는 근본적인 원동력은?',
    options: [
      '적도와 극지방의 태양열 차이',
      '지구의 색깔',
      '달의 위상 변화',
      '화산 활동'
    ],
    answer: '적도와 극지방의 태양열 차이',
    explanation: '적도는 태양열을 많이 받고 극지방은 적게 받는 온도 차이가 대기와 해양의 순환을 일으킵니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-02-q02',
    type: 'short_answer',
    question: '지구 자전으로 바람의 방향이 휘어지는 효과의 이름은?',
    options: [],
    answer: '코리올리 효과',
    explanation: '코리올리 효과는 지구 자전으로 인해 움직이는 물체(바람 등)의 경로가 휘어지는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-02-q03',
    type: 'multiple_choice',
    question: '표층 해류를 주로 움직이는 힘은?',
    options: ['바람', '중력', '자기장', '달의 인력만'],
    answer: '바람',
    explanation: '표층 해류는 지속적으로 부는 바람의 마찰력에 의해 주로 형성됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-02-q04',
    type: 'short_answer',
    question: '"바람은 무작위로 분다"는 생각이 틀린 이유는?',
    options: [],
    answer: '바람은 기압 차이와 코리올리 효과로 일정한 패턴(무역풍, 편서풍 등)을 이루며 불기 때문',
    explanation: '바람은 무작위가 아니라 기압 차이와 지구 자전의 영향으로 규칙적인 패턴을 가집니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-02-q05',
    type: 'multiple_choice',
    question: '멕시코 만류가 유럽 기후에 미치는 영향은?',
    options: ['유럽의 기후를 온화하게 한다', '유럽을 매우 춥게 한다', '아무 영향이 없다', '사막화를 일으킨다'],
    answer: '유럽의 기후를 온화하게 한다',
    explanation: '따뜻한 멕시코 만류는 유럽 서부 지역의 기후를 비교적 온화하게 만들어줍니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-02-q06',
    type: 'short_answer',
    question: '심층 해류를 주로 움직이는 요인은?',
    options: [],
    answer: '온도와 염분 차이에 따른 밀도차',
    explanation: '심층 해류는 표층과 달리 바람이 아니라 온도와 염분에 의한 밀도차로 순환합니다.',
    difficulty: 'hard'
  },

  // 중등 - 물의 순환과 수자원 (middle-earth-03)
  {
    id: 'middle-earth-03-q01',
    type: 'multiple_choice',
    question: '물의 순환을 일으키는 근본적인 에너지원은?',
    options: ['태양 에너지', '지열 에너지', '풍력 에너지', '원자력 에너지'],
    answer: '태양 에너지',
    explanation: '태양 에너지가 물을 증발시키는 근본적인 동력입니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-earth-03-q02',
    type: 'short_answer',
    question: '기체 상태의 물이 액체로 변하는 과정을 무엇이라 하는가?',
    options: [],
    answer: '응결',
    explanation: '수증기가 냉각되어 물방울(구름)이 되는 과정을 응결이라고 합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-earth-03-q03',
    type: 'multiple_choice',
    question: '"비가 내리면 물이 사라진다"는 생각이 틀린 이유는?',
    options: [
      '물은 형태만 바뀌며 계속 순환하기 때문',
      '비는 실제로 물을 없애기 때문',
      '지구의 물은 계속 새로 생기기 때문',
      '비가 오면 물의 양이 줄어들기 때문'
    ],
    answer: '물은 형태만 바뀌며 계속 순환하기 때문',
    explanation: '비가 내려도 물은 사라지지 않고 강, 지하수를 거쳐 다시 바다로 흘러가며 순환합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-03-q04',
    type: 'short_answer',
    question: '빗물이 땅속으로 스며들어 만들어지는 물은?',
    options: [],
    answer: '지하수',
    explanation: '빗물이 지표면 아래로 스며들어 지하수를 형성합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-earth-03-q05',
    type: 'multiple_choice',
    question: '지구의 물에 대한 올바른 설명은?',
    options: [
      '새로 생기거나 사라지지 않고 형태만 바꾸며 순환한다',
      '매년 새로 생성된다',
      '시간이 지나면 점점 줄어든다',
      '순환하지 않고 고정되어 있다'
    ],
    answer: '새로 생기거나 사라지지 않고 형태만 바꾸며 순환한다',
    explanation: '물의 순환에서 물의 총량은 형태(고체·액체·기체)만 바뀔 뿐 새로 생기거나 사라지지 않습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-earth-03-q06',
    type: 'short_answer',
    question: '기후변화가 물 순환에 미칠 수 있는 영향은?',
    options: [],
    answer: '강수 패턴과 증발산량의 지역적 불균형이 심화되어 가뭄과 홍수 빈도에 영향을 줄 수 있다',
    explanation: '기후변화는 전 지구적 물수지의 균형을 흔들어 가뭄과 홍수 같은 극단적 현상의 빈도를 높일 수 있습니다.',
    difficulty: 'hard'
  },

  // 중등 - 태양의 구조와 활동 (middle-astro-02)
  {
    id: 'middle-astro-02-q01',
    type: 'multiple_choice',
    question: '태양이 에너지를 만드는 방법은?',
    options: ['핵융합 반응', '일반적인 연소(산소와의 반응)', '전기 분해', '화학 반응'],
    answer: '핵융합 반응',
    explanation: '태양은 중심부에서 수소가 헬륨으로 융합되는 핵융합 반응으로 에너지를 만듭니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-02-q02',
    type: 'short_answer',
    question: '태양 표면에서 주변보다 온도가 낮아 어둡게 보이는 부분은?',
    options: [],
    answer: '흑점',
    explanation: '흑점은 강한 자기장으로 주변보다 온도가 낮아 어둡게 보이는 영역입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-02-q03',
    type: 'multiple_choice',
    question: '"태양은 불타고 있다(일반 연소)"는 생각이 틀린 이유는?',
    options: [
      '태양은 핵융합이라는 전혀 다른 과정으로 에너지를 만들기 때문',
      '태양은 실제로 일반 연소를 하기 때문',
      '태양은 에너지를 전혀 만들지 않기 때문',
      '태양은 차갑기 때문'
    ],
    answer: '태양은 핵융합이라는 전혀 다른 과정으로 에너지를 만들기 때문',
    explanation: '일반적인 연소(산소와의 화학반응)로는 태양처럼 오랫동안 강하게 빛날 수 없으며, 핵융합이 진짜 원인입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-02-q04',
    type: 'short_answer',
    question: '태양에서 방출되는 하전 입자의 흐름을 무엇이라 하는가?',
    options: [],
    answer: '태양풍',
    explanation: '태양풍은 태양에서 방출되는 하전 입자(주로 전자와 양성자)의 흐름입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-02-q05',
    type: 'multiple_choice',
    question: '개기일식 때 육안으로 관찰할 수 있는 태양의 바깥층은?',
    options: ['코로나', '광구', '흑점', '핵'],
    answer: '코로나',
    explanation: '개기일식으로 광구가 가려지면 평소 보기 힘든 태양의 대기층인 코로나를 볼 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-02-q06',
    type: 'short_answer',
    question: '태양의 흑점 수는 대략 몇 년 주기로 증감하는가?',
    options: [],
    answer: '약 11년',
    explanation: '태양 흑점의 수는 약 11년을 주기로 증가와 감소를 반복합니다.',
    difficulty: 'hard'
  },

  // 중등 - 우주 탐사의 역사와 기술 (middle-astro-03)
  {
    id: 'middle-astro-03-q01',
    type: 'multiple_choice',
    question: '로켓이 추진력을 얻는 원리는?',
    options: ['작용-반작용의 법칙', '관성의 법칙만', '만유인력의 법칙만', '에너지 보존 법칙만'],
    answer: '작용-반작용의 법칙',
    explanation: '로켓은 연료를 뒤로 뿜어내는 힘(작용)에 대한 반작용으로 추진력을 얻습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-03-q02',
    type: 'short_answer',
    question: '인공위성이 궤도를 유지하는 원리를 한 문장으로 설명하면?',
    options: [],
    answer: '지구로 떨어지는 만큼 옆으로도 빠르게 이동해 계속 지구를 도는 것(자유낙하와 비슷)',
    explanation: '인공위성은 중력에 의해 떨어지지만 동시에 매우 빠른 옆방향 속도를 가져 계속 지구를 도는 궤도를 유지합니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-astro-03-q03',
    type: 'multiple_choice',
    question: '"우주에는 중력이 전혀 없다"는 생각이 틀린 이유는?',
    options: [
      '우주비행사는 계속 자유낙하하는 상태일 뿐 중력은 여전히 작용하기 때문',
      '우주에는 실제로 중력이 없기 때문',
      '중력은 지구에서만 작용하기 때문',
      '우주선은 중력의 영향을 받지 않기 때문'
    ],
    answer: '우주비행사는 계속 자유낙하하는 상태일 뿐 중력은 여전히 작용하기 때문',
    explanation: '무중력처럼 보이는 것은 중력이 없어서가 아니라 우주선과 함께 계속 떨어지고 있는 자유낙하 상태이기 때문입니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-astro-03-q04',
    type: 'short_answer',
    question: '국제우주정거장(ISS)은 약 몇 분마다 지구를 한 바퀴 도는가?',
    options: [],
    answer: '약 90분',
    explanation: 'ISS는 약 90분에 한 번 지구를 공전합니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-astro-03-q05',
    type: 'multiple_choice',
    question: '인공위성이 시간이 지나며 궤도 수정이 필요한 이유는?',
    options: [
      '대기 저항이나 다른 천체의 중력 영향으로 궤도가 서서히 변하기 때문',
      '위성이 스스로 궤도를 벗어나고 싶어하기 때문',
      '궤도는 절대 변하지 않기 때문',
      '위성의 연료가 중력을 만들기 때문'
    ],
    answer: '대기 저항이나 다른 천체의 중력 영향으로 궤도가 서서히 변하기 때문',
    explanation: '미세한 대기 저항이나 다른 천체의 중력 영향이 누적되어 궤도가 서서히 변하므로 주기적 수정이 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-astro-03-q06',
    type: 'short_answer',
    question: '태양계 밖으로 나아가고 있는 대표적인 탐사선의 이름은?',
    options: [],
    answer: '보이저 탐사선',
    explanation: '보이저 1호와 2호는 태양계를 벗어나 성간 우주로 나아가고 있는 대표적인 탐사선입니다.',
    difficulty: 'medium'
  },

  // 중등 - 영양소와 소화 (middle-med-01)
  {
    id: 'middle-med-01-q01',
    type: 'multiple_choice',
    question: '3대 영양소에 해당하지 않는 것은?',
    options: ['탄수화물', '단백질', '지방', '비타민'],
    answer: '비타민',
    explanation: '3대 영양소는 탄수화물, 단백질, 지방이며 비타민과 무기질은 별도로 분류됩니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-med-01-q02',
    type: 'short_answer',
    question: '단백질을 분해하는 위 속 소화효소는?',
    options: [],
    answer: '펩신',
    explanation: '위에서 분비되는 펩신은 단백질을 분해하는 소화효소입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-01-q03',
    type: 'multiple_choice',
    question: '"지방은 무조건 몸에 나쁘다"는 생각이 틀린 이유는?',
    options: [
      '지방은 세포막 구성, 비타민 흡수 등에 필수적인 역할을 하기 때문',
      '지방은 몸에 전혀 필요 없기 때문',
      '지방은 에너지를 전혀 만들지 못하기 때문',
      '지방은 소화되지 않기 때문'
    ],
    answer: '지방은 세포막 구성, 비타민 흡수 등에 필수적인 역할을 하기 때문',
    explanation: '지방은 세포막 구성, 지용성 비타민 흡수, 에너지 저장 등 중요한 역할을 하는 필수 영양소입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-01-q04',
    type: 'short_answer',
    question: '뇌와 근육의 주요 에너지원이 되는 영양소는?',
    options: [],
    answer: '탄수화물',
    explanation: '탄수화물(포도당)은 뇌와 근육이 주로 사용하는 에너지원입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-01-q05',
    type: 'multiple_choice',
    question: '기초대사량에 영향을 미치는 요인이 아닌 것은?',
    options: ['체성분(근육량)', '나이', '성별', '좋아하는 색깔'],
    answer: '좋아하는 색깔',
    explanation: '기초대사량은 체성분, 나이, 성별 등에 영향을 받으며 좋아하는 색깔과는 무관합니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-med-01-q06',
    type: 'short_answer',
    question: '탄수화물을 무조건 끊는 것보다 더 건강한 접근법은?',
    options: [],
    answer: '정제된 탄수화물을 줄이고 통곡물 같은 복합 탄수화물을 적절히 섭취하는 것',
    explanation: '탄수화물 자체를 없애기보다 종류를 잘 선택해 균형 있게 섭취하는 것이 권장됩니다.',
    difficulty: 'medium'
  },

  // 중등 - 감염병의 예방과 관리 (middle-med-02)
  {
    id: 'middle-med-02-q01',
    type: 'multiple_choice',
    question: '항생제가 효과가 있는 대상은?',
    options: ['세균', '바이러스', '모든 병원체', '독감 바이러스'],
    answer: '세균',
    explanation: '항생제는 세균의 세포벽이나 단백질 합성을 표적으로 하여 세균 감염에 효과가 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-02-q02',
    type: 'short_answer',
    question: '바이러스성 질환(감기 등)에 항생제를 남용하면 생길 수 있는 문제는?',
    options: [],
    answer: '항생제 내성균이 늘어날 수 있다',
    explanation: '바이러스에는 효과가 없는 항생제를 남용하면 오히려 항생제 내성균만 증가시킬 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-02-q03',
    type: 'multiple_choice',
    question: '집단면역이 형성되기 위해 필요한 조건은?',
    options: [
      '인구 집단의 일정 비율 이상이 면역을 가져야 한다',
      '한 사람만 예방접종을 하면 된다',
      '아무도 예방접종을 하지 않아도 된다',
      '병원체가 없어야만 가능하다'
    ],
    answer: '인구 집단의 일정 비율 이상이 면역을 가져야 한다',
    explanation: '집단면역은 충분히 많은 사람이 면역을 가질 때 감염병의 전파가 억제되는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-02-q04',
    type: 'short_answer',
    question: '모기가 매개하는 대표적인 감염병을 하나 쓰시오.',
    options: [],
    answer: '말라리아(또는 뎅기열)',
    explanation: '말라리아와 뎅기열은 모기를 매개로 전파되는 대표적인 감염병입니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-med-02-q05',
    type: 'multiple_choice',
    question: '"한 사람만 조심하면 감염병 확산을 막을 수 있다"는 생각이 부족한 이유는?',
    options: [
      '지역사회 전체의 예방접종률과 방역 수칙 준수가 함께 필요하기 때문',
      '한 사람의 노력만으로 충분하기 때문',
      '감염병은 개인과 무관하기 때문',
      '예방접종은 효과가 없기 때문'
    ],
    answer: '지역사회 전체의 예방접종률과 방역 수칙 준수가 함께 필요하기 때문',
    explanation: '감염병 확산 방지는 개인의 노력뿐 아니라 지역사회 전체의 협력이 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-med-02-q06',
    type: 'short_answer',
    question: '결핵이 전파되는 주된 경로는?',
    options: [],
    answer: '공기를 통한 비말',
    explanation: '결핵은 공기 중 비말을 통해 전파되는 세균성 감염병입니다.',
    difficulty: 'medium'
  },

  // 중등 - 운동과 근골격계 건강 (middle-med-03)
  {
    id: 'middle-med-03-q01',
    type: 'multiple_choice',
    question: '적절한 근력운동이 뼈에 미치는 영향은?',
    options: ['골밀도를 높이는 데 도움이 된다', '성장을 완전히 멈춘다', '뼈를 약하게 만든다', '아무 영향이 없다'],
    answer: '골밀도를 높이는 데 도움이 된다',
    explanation: '적절한 강도의 운동은 뼈에 자극을 주어 골밀도를 높이는 데 도움이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-03-q02',
    type: 'short_answer',
    question: '유산소운동의 대표적인 효과는?',
    options: [],
    answer: '심폐지구력 향상',
    explanation: '달리기, 수영 같은 유산소운동은 심장과 폐의 지구력을 향상시킵니다.',
    difficulty: 'easy'
  },
  {
    id: 'middle-med-03-q03',
    type: 'multiple_choice',
    question: '"근력운동을 하면 성장이 멈춘다"는 생각이 틀린 이유는?',
    options: [
      '적절한 강도의 운동은 오히려 골밀도를 높이는 데 도움이 되기 때문',
      '근력운동은 항상 성장판을 손상시키기 때문',
      '운동은 뼈와 전혀 관련이 없기 때문',
      '성장은 운동과 무관하게 결정되기 때문'
    ],
    answer: '적절한 강도의 운동은 오히려 골밀도를 높이는 데 도움이 되기 때문',
    explanation: '문제가 되는 것은 무리한 중량이나 잘못된 자세이며, 적절한 운동은 성장에 오히려 도움이 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-03-q04',
    type: 'short_answer',
    question: '뼈가 역학적 자극에 반응해 재형성되는 현상과 관련된 법칙은?',
    options: [],
    answer: 'Wolff의 법칙',
    explanation: 'Wolff의 법칙은 뼈가 받는 역학적 부하에 따라 골재형성이 일어난다는 것을 설명합니다.',
    difficulty: 'hard'
  },
  {
    id: 'middle-med-03-q05',
    type: 'multiple_choice',
    question: '성장판(골단연골) 손상의 주된 원인은?',
    options: [
      '과도하고 반복적인 충격이나 잘못된 자세',
      '적절한 강도의 운동',
      '충분한 수면',
      '균형 잡힌 식사'
    ],
    answer: '과도하고 반복적인 충격이나 잘못된 자세',
    explanation: '무리한 중량이나 부적절한 자세로 인한 과도한 충격이 성장판 손상의 원인이 될 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'middle-med-03-q06',
    type: 'short_answer',
    question: '운동이 근육 외에 긍정적 영향을 주는 신체 기능을 2가지 이상 쓰시오.',
    options: [],
    answer: '뼈, 관절, 심장, 폐, 뇌 기능(집중력, 기분) 등',
    explanation: '운동은 근육뿐 아니라 뼈, 관절, 심폐 기능, 뇌 기능에도 전신적으로 긍정적인 영향을 미칩니다.',
    difficulty: 'medium'
  },

  // 고등 - 열역학 법칙과 엔트로피 (high-phys-03)
  {
    id: 'high-phys-03-q01',
    type: 'short_answer',
    question: '열역학 제1법칙을 식으로 나타내면?',
    options: [],
    answer: 'ΔU=Q-W',
    explanation: '내부에너지 변화(ΔU)는 계에 가해진 열(Q)에서 계가 한 일(W)을 뺀 것과 같습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-03-q02',
    type: 'multiple_choice',
    question: '열역학 제2법칙이 말하는 것은?',
    options: [
      '열은 저절로 뜨거운 곳에서 찬 곳으로만 흐른다',
      '에너지는 새로 생길 수 있다',
      '모든 열기관은 100% 효율을 가질 수 있다',
      '엔트로피는 항상 감소한다'
    ],
    answer: '열은 저절로 뜨거운 곳에서 찬 곳으로만 흐른다',
    explanation: '열역학 제2법칙은 열이 자발적으로 찬 곳에서 뜨거운 곳으로 흐르지 않는다는 방향성을 설명합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-phys-03-q03',
    type: 'short_answer',
    question: '카르노 효율 공식은?',
    options: [],
    answer: 'η=1-Tc/Th',
    explanation: '카르노 효율은 두 열저장고의 절대온도(Tc, Th)만으로 결정되는 이론적 최대 효율입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-phys-03-q04',
    type: 'multiple_choice',
    question: '"에너지 효율은 100%가 가능하다"는 생각이 틀린 이유는?',
    options: [
      '두 열저장고의 온도차가 유한한 한 카르노 효율의 한계를 넘을 수 없기 때문',
      '에너지 효율은 항상 100%이기 때문',
      '효율은 온도와 무관하기 때문',
      '실제로는 효율의 한계가 없기 때문'
    ],
    answer: '두 열저장고의 온도차가 유한한 한 카르노 효율의 한계를 넘을 수 없기 때문',
    explanation: '아무리 이상적으로 설계해도 열기관은 카르노 효율을 넘을 수 없어 100% 효율은 불가능합니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-phys-03-q05',
    type: 'short_answer',
    question: '냉장고 내부의 엔트로피가 감소해도 열역학 제2법칙에 모순되지 않는 이유는?',
    options: [],
    answer: '냉장고+주변 전체의 엔트로피는 여전히 증가하기 때문',
    explanation: '부분계(냉장고 내부)는 엔트로피가 감소할 수 있지만, 외부에서 에너지를 투입한 전체 계의 엔트로피는 증가합니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-phys-03-q06',
    type: 'multiple_choice',
    question: '통계역학적으로 엔트로피 S는 어떻게 정의되는가?',
    options: ['S=k_B ln Ω', 'S=mc²', 'S=F/m', 'S=IR'],
    answer: 'S=k_B ln Ω',
    explanation: '볼츠만 엔트로피 공식 S=k_B ln Ω는 미시상태의 수(Ω)와 엔트로피의 관계를 나타냅니다.',
    difficulty: 'hard'
  },

  // 고등 - 산화·환원 반응 (high-chem-02)
  {
    id: 'high-chem-02-q01',
    type: 'short_answer',
    question: '전자를 잃는 반응을 무엇이라 하는가?',
    options: [],
    answer: '산화',
    explanation: '산화는 물질이 전자를 잃는 반응입니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-chem-02-q02',
    type: 'multiple_choice',
    question: '산화수가 증가하면 어떤 반응이 일어난 것인가?',
    options: ['산화', '환원', '중화', '가수분해'],
    answer: '산화',
    explanation: '산화수가 증가하는 것은 전자를 잃었다는 의미로 산화에 해당합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-02-q03',
    type: 'short_answer',
    question: '"산화는 항상 산소와 결합하는 것만을 의미한다"는 생각이 틀린 이유는?',
    options: [],
    answer: '산소가 관여하지 않아도 전자를 잃으면 산화이기 때문',
    explanation: '금속이 전자를 잃고 양이온이 되는 것도 산소 없이 일어나는 산화의 예입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-02-q04',
    type: 'multiple_choice',
    question: '산화와 환원의 관계로 옳은 것은?',
    options: ['항상 동시에 일어난다', '따로 일어날 수 있다', '전혀 관련이 없다', '항상 산화만 일어난다'],
    answer: '항상 동시에 일어난다',
    explanation: '한 물질이 전자를 잃으면(산화) 다른 물질이 그 전자를 얻어야(환원) 하므로 항상 함께 일어납니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-02-q05',
    type: 'short_answer',
    question: '전지의 기전력을 표준환원전위로 나타내는 식은?',
    options: [],
    answer: 'ΔE°=E°(환원전극)-E°(산화전극)',
    explanation: '전지의 기전력은 환원전극과 산화전극의 표준환원전위 차이로 계산됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-chem-02-q06',
    type: 'multiple_choice',
    question: '철못이 녹스는 현상은 어떤 반응인가?',
    options: ['철의 산화 반응', '철의 환원 반응', '중화 반응', '핵반응'],
    answer: '철의 산화 반응',
    explanation: '철이 산소와 반응해 전자를 잃으며 녹이 스는 것은 산화 반응의 대표적인 예입니다.',
    difficulty: 'easy'
  },

  // 고등 - 화학 평형과 르샤틀리에 원리 (high-chem-03)
  {
    id: 'high-chem-03-q01',
    type: 'multiple_choice',
    question: '화학 평형 상태에 대한 올바른 설명은?',
    options: [
      '정반응과 역반응이 같은 속도로 계속 일어나는 동적 상태이다',
      '반응이 완전히 멈춘 상태이다',
      '반응물만 남은 상태이다',
      '생성물만 남은 상태이다'
    ],
    answer: '정반응과 역반응이 같은 속도로 계속 일어나는 동적 상태이다',
    explanation: '화학 평형은 반응이 멈춘 것이 아니라 정반응과 역반응이 같은 속도로 계속 일어나는 동적 평형입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-03-q02',
    type: 'short_answer',
    question: '르샤틀리에 원리를 한 문장으로 설명하면?',
    options: [],
    answer: '평형계에 변화가 가해지면 그 변화를 상쇄하는 방향으로 평형이 이동한다',
    explanation: '농도, 압력, 온도의 변화가 가해지면 평형은 그 변화를 완화하는 방향으로 이동합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-03-q03',
    type: 'multiple_choice',
    question: '반응지수 Q와 평형상수 K를 비교했을 때 Q<K이면?',
    options: ['정반응이 진행된다', '역반응이 진행된다', '반응이 멈춘다', '평형상수가 변한다'],
    answer: '정반응이 진행된다',
    explanation: 'Q<K이면 생성물이 부족한 상태이므로 정반응이 진행되어 평형에 도달합니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-chem-03-q04',
    type: 'short_answer',
    question: '평형상수 K를 변화시킬 수 있는 유일한 조건은?',
    options: [],
    answer: '온도 변화',
    explanation: '농도나 압력 변화는 평형의 위치만 이동시킬 뿐, 평형상수 K 자체는 온도가 일정하면 변하지 않습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-chem-03-q05',
    type: 'multiple_choice',
    question: '탄산음료의 뚜껑을 열면 기포가 발생하는 이유를 르샤틀리에 원리로 설명하면?',
    options: [
      '압력이 낮아져 이산화탄소가 기체로 빠져나가는 방향으로 평형이 이동',
      '온도가 높아졌기 때문',
      '평형상수가 변했기 때문',
      '반응이 멈췄기 때문'
    ],
    answer: '압력이 낮아져 이산화탄소가 기체로 빠져나가는 방향으로 평형이 이동',
    explanation: '뚜껑을 열면 압력이 낮아져 용해 평형이 기체 방출 방향으로 이동해 기포가 발생합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-chem-03-q06',
    type: 'short_answer',
    question: '평형에 도달해도 반응이 완전히 멈춘 것이 아닌 이유는?',
    options: [],
    answer: '정반응과 역반응이 동일한 속도로 계속 일어나는 동적 평형 상태이기 때문',
    explanation: '겉보기에는 변화가 없어 보이지만 실제로는 정반응과 역반응이 끊임없이 일어나고 있습니다.',
    difficulty: 'medium'
  },

  // 고등 - 수열과 급수 (high-math-02)
  {
    id: 'high-math-02-q01',
    type: 'calculation',
    question: '등차수열 1, 3, 5, 7,...의 10번째 항은?',
    options: [],
    answer: '19',
    explanation: 'aₙ=a₁+(n-1)d = 1+(10-1)×2 = 19',
    difficulty: 'medium'
  },
  {
    id: 'high-math-02-q02',
    type: 'short_answer',
    question: '무한등비급수가 수렴하기 위한 공비 r의 조건은?',
    options: [],
    answer: '|r|<1',
    explanation: '공비의 절댓값이 1보다 작아야 무한등비급수가 특정 값으로 수렴합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-02-q03',
    type: 'calculation',
    question: '무한등비급수 1+1/2+1/4+1/8+...의 합은?',
    options: [],
    answer: '2',
    explanation: 'S=a₁/(1-r) = 1/(1-1/2) = 2',
    difficulty: 'medium'
  },
  {
    id: 'high-math-02-q04',
    type: 'multiple_choice',
    question: '"무한히 더하면 항상 무한대가 된다"는 생각이 틀린 이유는?',
    options: [
      '더하는 항이 충분히 빠르게 작아지면 유한한 값으로 수렴할 수 있기 때문',
      '무한급수는 항상 발산하기 때문',
      '유한한 항만 더할 수 있기 때문',
      '무한급수는 정의되지 않기 때문'
    ],
    answer: '더하는 항이 충분히 빠르게 작아지면 유한한 값으로 수렴할 수 있기 때문',
    explanation: '공비의 절댓값이 1보다 작은 무한등비급수처럼, 항이 충분히 빠르게 작아지면 합이 수렴할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-math-02-q05',
    type: 'short_answer',
    question: '등비수열의 합이 발산하는 조건은?',
    options: [],
    answer: '|r|≥1',
    explanation: '공비의 절댓값이 1 이상이면 등비수열의 합은 발산합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-02-q06',
    type: 'calculation',
    question: '등차수열의 합 공식 Sₙ=n(a₁+aₙ)/2을 이용해 1부터 100까지의 합을 구하면?',
    options: [],
    answer: '5050',
    explanation: 'Sₙ=100(1+100)/2=100×101/2=5050',
    difficulty: 'medium'
  },

  // 고등 - 벡터와 행렬의 기초 (high-math-03)
  {
    id: 'high-math-03-q01',
    type: 'calculation',
    question: '벡터 a=(2,1), b=(1,3)의 합 a+b는?',
    options: [],
    answer: '(3,4)',
    explanation: '벡터의 덧셈은 성분별로 계산합니다: (2+1, 1+3)=(3,4)',
    difficulty: 'easy'
  },
  {
    id: 'high-math-03-q02',
    type: 'short_answer',
    question: '벡터와 스칼라의 근본적인 차이는?',
    options: [],
    answer: '벡터는 크기와 방향을 모두 가지고, 스칼라는 크기만 가진다',
    explanation: '속력(스칼라)과 속도(벡터)의 차이처럼, 벡터는 방향 정보를 추가로 가집니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-03-q03',
    type: 'multiple_choice',
    question: '행렬의 곱셈에 대한 올바른 설명은?',
    options: ['일반적으로 AB≠BA이다', '항상 AB=BA이다', '행렬은 곱셈이 불가능하다', '순서는 항상 무관하다'],
    answer: '일반적으로 AB≠BA이다',
    explanation: '행렬의 곱셈은 일반적으로 교환법칙이 성립하지 않아 순서에 따라 결과가 달라집니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-math-03-q04',
    type: 'short_answer',
    question: '두 벡터의 내적이 0이면 두 벡터는 어떤 관계인가?',
    options: [],
    answer: '수직(직교)이다',
    explanation: '두 벡터의 내적이 0이면 두 벡터 사이의 각도는 90도, 즉 서로 수직입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-03-q05',
    type: 'multiple_choice',
    question: '행렬을 이용해 효율적으로 표현할 수 있는 것은?',
    options: ['연립방정식과 도형의 변환', '단순한 덧셈만', '색깔의 종류', '소리의 크기'],
    answer: '연립방정식과 도형의 변환',
    explanation: '행렬은 연립방정식을 간결하게 표현하고, 회전이나 확대 같은 도형의 변환을 나타내는 데 사용됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-math-03-q06',
    type: 'short_answer',
    question: '"벡터는 크기만 있는 양이다"라는 생각이 틀린 이유는?',
    options: [],
    answer: '벡터는 크기뿐 아니라 방향도 함께 나타내는 양이기 때문',
    explanation: '벡터는 화살표처럼 크기와 방향을 모두 가지는 양으로, 크기만 있는 스칼라와 구분됩니다.',
    difficulty: 'medium'
  },

  // 고등 - 생태계와 개체군 (high-bio-02)
  {
    id: 'high-bio-02-q01',
    type: 'short_answer',
    question: '같은 종의 생물 무리를 무엇이라 하는가?',
    options: [],
    answer: '개체군',
    explanation: '개체군은 일정 지역에 사는 같은 종의 생물 무리를 말합니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-bio-02-q02',
    type: 'multiple_choice',
    question: '개체군의 성장이 결국 둔화되는 이유는?',
    options: ['환경수용력에 도달하기 때문', '자원이 무한하기 때문', '천적이 없기 때문', '개체군은 항상 무한히 증가하기 때문'],
    answer: '환경수용력에 도달하기 때문',
    explanation: '자원의 한계(환경수용력)에 도달하면 개체군 성장은 로지스틱 곡선처럼 둔화됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-02-q03',
    type: 'short_answer',
    question: '로지스틱 성장 방정식 dN/dt=rN(1-N/K)에서 K가 의미하는 것은?',
    options: [],
    answer: '환경수용력',
    explanation: 'K는 환경이 지속적으로 부양할 수 있는 개체군의 최대 크기(환경수용력)를 나타냅니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-bio-02-q04',
    type: 'multiple_choice',
    question: '먹이사슬에서 상위 단계로 갈수록 개체 수가 줄어드는 이유는?',
    options: [
      '에너지가 각 단계를 거칠 때마다 대부분 열로 손실되기 때문',
      '상위 포식자가 번식을 하지 않기 때문',
      '에너지가 늘어나기 때문',
      '먹이가 무한하기 때문'
    ],
    answer: '에너지가 각 단계를 거칠 때마다 대부분 열로 손실되기 때문',
    explanation: '에너지 전달 과정에서 약 90%가 손실되어 상위 영양단계로 갈수록 이용 가능한 에너지와 개체 수가 줄어듭니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-02-q05',
    type: 'short_answer',
    question: '"한 생태계 안의 자원은 무한하다"는 생각이 틀린 이유는?',
    options: [],
    answer: '자원은 유한하며 개체군은 결국 환경수용력에 도달해 성장이 제한되기 때문',
    explanation: '자원(먹이, 공간, 물 등)은 유한하므로 개체군 성장은 환경수용력에 의해 제한됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-02-q06',
    type: 'multiple_choice',
    question: '외래종의 유입이 기존 생태계에 미칠 수 있는 영향은?',
    options: ['기존 생태계 균형을 깨뜨릴 수 있다', '항상 생태계를 안정시킨다', '아무 영향이 없다', '반드시 멸종을 막아준다'],
    answer: '기존 생태계 균형을 깨뜨릴 수 있다',
    explanation: '외래종은 기존 종과의 경쟁, 포식 등을 통해 생태계의 균형을 깨뜨릴 수 있습니다.',
    difficulty: 'medium'
  },

  // 고등 - 신경계와 호르몬의 조절 (high-bio-03)
  {
    id: 'high-bio-03-q01',
    type: 'multiple_choice',
    question: '신경 신호와 호르몬 신호의 차이로 옳은 것은?',
    options: [
      '신경 신호는 빠르고 짧게, 호르몬 신호는 느리고 오래 지속된다',
      '둘의 속도와 지속시간은 완전히 같다',
      '호르몬 신호가 항상 더 빠르다',
      '신경 신호는 혈액을 통해 전달된다'
    ],
    answer: '신경 신호는 빠르고 짧게, 호르몬 신호는 느리고 오래 지속된다',
    explanation: '신경계는 전기 신호로 빠르게, 호르몬은 혈액을 통해 서서히 오래 작용합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-03-q02',
    type: 'short_answer',
    question: '뉴런과 뉴런 사이의 신호 전달이 일어나는 부위는?',
    options: [],
    answer: '시냅스',
    explanation: '시냅스는 뉴런들 사이에서 신경전달물질을 통해 신호가 전달되는 부위입니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-bio-03-q03',
    type: 'multiple_choice',
    question: '혈당을 낮추는 역할을 하는 호르몬은?',
    options: ['인슐린', '아드레날린', '성장호르몬', '갑상선호르몬'],
    answer: '인슐린',
    explanation: '인슐린은 이자에서 분비되어 혈당을 낮추는 역할을 하는 호르몬입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-03-q04',
    type: 'short_answer',
    question: '호르몬 조절에서 가장 흔하게 나타나는 조절 방식은?',
    options: [],
    answer: '음성 되먹임',
    explanation: '대부분의 호르몬 조절은 변화를 감지해 반대 방향으로 되돌리는 음성 되먹임 방식으로 이루어집니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-03-q05',
    type: 'multiple_choice',
    question: '"호르몬은 특정 기관에만 영향을 준다"는 생각이 틀린 이유는?',
    options: [
      '하나의 호르몬이 여러 기관에 동시에 영향을 미칠 수 있기 때문',
      '호르몬은 하나의 기관에만 작용하도록 정해져 있기 때문',
      '호르몬은 실제로 아무 기관에도 영향을 주지 않기 때문',
      '호르몬은 신경계와 동일하기 때문'
    ],
    answer: '하나의 호르몬이 여러 기관에 동시에 영향을 미칠 수 있기 때문',
    explanation: '아드레날린처럼 하나의 호르몬이 심장, 혈관, 간, 폐 등 여러 기관에 동시에 영향을 줄 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-bio-03-q06',
    type: 'short_answer',
    question: '활동전위가 발생하는 데 관여하는 주요 이온 채널 두 가지는?',
    options: [],
    answer: 'Na⁺ 채널과 K⁺ 채널',
    explanation: '활동전위는 나트륨(Na⁺)과 칼륨(K⁺) 이온 채널의 개폐로 발생하는 막전위 변화입니다.',
    difficulty: 'hard'
  },

  // 고등 - 대기 대순환과 기후 변화 (high-earth-01)
  {
    id: 'high-earth-01-q01',
    type: 'multiple_choice',
    question: '온실효과에 대한 올바른 설명은?',
    options: [
      '지구를 생명이 살 수 있는 온도로 유지해주는 자연스러운 현상이다',
      '온실효과 자체가 나쁜 현상이다',
      '온실효과는 최근에 새로 생긴 현상이다',
      '온실효과는 대기와 무관하다'
    ],
    answer: '지구를 생명이 살 수 있는 온도로 유지해주는 자연스러운 현상이다',
    explanation: '온실효과는 지구를 적정 온도로 유지해주는 필수적인 자연 현상이며, 문제는 그 효과의 과도한 강화입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-01-q02',
    type: 'short_answer',
    question: '지구 대기 대순환을 이루는 세 개의 순환 세포는?',
    options: [],
    answer: '해들리 순환, 페렐 순환, 극순환',
    explanation: '대기 대순환은 적도부터 극지방까지 해들리, 페렐, 극순환의 세 세포로 나뉩니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-01-q03',
    type: 'multiple_choice',
    question: '빙하-알베도 되먹임의 방향은?',
    options: [
      '빙하가 녹으면 반사율이 줄어 온난화를 가속하는 양의 되먹임',
      '빙하가 녹으면 온난화를 완화하는 음의 되먹임',
      '빙하와 온도는 서로 무관하다',
      '빙하는 항상 늘어난다'
    ],
    answer: '빙하가 녹으면 반사율이 줄어 온난화를 가속하는 양의 되먹임',
    explanation: '빙하가 녹으면 어두운 표면이 드러나 태양복사를 더 많이 흡수해 온난화가 가속되는 양의 되먹임이 일어납니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-01-q04',
    type: 'short_answer',
    question: '"기후변화는 인간 활동과 무관한 자연적 변동일 뿐이다"라는 주장에 대한 반론의 핵심은?',
    options: [],
    answer: '현재의 급격한 온난화 추세는 대기 중 CO₂ 농도의 급격한 증가와 밀접히 연관되어 있다는 다수의 과학적 증거가 있다',
    explanation: '자연적 요인도 있지만, 현재 관측되는 급격한 온난화는 인간 활동에 의한 온실기체 증가와 강하게 연관되어 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-01-q05',
    type: 'multiple_choice',
    question: '복사강제력 개념이 나타내는 것은?',
    options: [
      '온실기체 증가가 지구 에너지 수지에 미치는 영향의 크기',
      '지구의 자전 속도',
      '태양의 밝기',
      '해류의 속도'
    ],
    answer: '온실기체 증가가 지구 에너지 수지에 미치는 영향의 크기',
    explanation: '복사강제력은 온실기체 등의 변화가 지구의 에너지 균형에 미치는 영향을 정량화한 값입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-01-q06',
    type: 'short_answer',
    question: '해들리 순환은 지구의 어느 위도대에서 일어나는가?',
    options: [],
    answer: '적도에서 위도 약 30도 부근까지',
    explanation: '해들리 순환은 적도의 상승기류와 위도 약 30도 부근의 하강기류로 이루어진 순환 세포입니다.',
    difficulty: 'medium'
  },

  // 고등 - 해양의 물리적 성질과 순환 (high-earth-02)
  {
    id: 'high-earth-02-q01',
    type: 'short_answer',
    question: '깊이에 따라 수온이 급격히 변하는 층은?',
    options: [],
    answer: '수온약층',
    explanation: '수온약층은 표층과 심해 사이에서 수온이 급격히 감소하는 층입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-02-q02',
    type: 'multiple_choice',
    question: '심층 해류를 주로 형성하는 요인은?',
    options: ['온도와 염분에 따른 밀도차', '바람', '달의 인력', '대기압'],
    answer: '온도와 염분에 따른 밀도차',
    explanation: '심층 해류(열염순환)는 온도와 염분에 의한 밀도차로 형성됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-02-q03',
    type: 'short_answer',
    question: '"바다는 표면부터 바닥까지 온도가 거의 같다"는 생각이 틀린 이유는?',
    options: [],
    answer: '표층은 태양열로 따뜻하지만 심해는 수온약층 아래로 항상 매우 차갑기 때문',
    explanation: '바다는 깊이에 따라 온도가 크게 다르며, 심해는 표층과 달리 항상 차갑습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-02-q04',
    type: 'multiple_choice',
    question: '전 지구 열염순환(컨베이어 벨트)이 시작되는 대표적인 지역은?',
    options: ['북대서양', '적도 태평양', '남중국해', '지중해'],
    answer: '북대서양',
    explanation: '북대서양에서 차갑고 짠 해수가 가라앉으며 전 지구 열염순환이 시작됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-02-q05',
    type: 'short_answer',
    question: '엘니뇨는 어떤 현상의 이상 변화로 발생하는가?',
    options: [],
    answer: '태평양 표층 수온의 이상 변화',
    explanation: '엘니뇨는 태평양의 표층 수온이 평년보다 비정상적으로 높아지는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-02-q06',
    type: 'multiple_choice',
    question: '"해류는 표층에서만 존재한다"는 생각이 틀린 이유는?',
    options: [
      '심층에서도 밀도차에 의한 해류가 존재하기 때문',
      '심층에는 물이 없기 때문',
      '해류는 표층에만 정의되기 때문',
      '심층은 항상 정지 상태이기 때문'
    ],
    answer: '심층에서도 밀도차에 의한 해류가 존재하기 때문',
    explanation: '표층뿐 아니라 심층에서도 밀도차에 의한 해류(열염순환)가 존재해 전 지구를 순환합니다.',
    difficulty: 'medium'
  },

  // 고등 - 지구의 자기장과 오로라 (high-earth-03)
  {
    id: 'high-earth-03-q01',
    type: 'multiple_choice',
    question: '지구 자기장이 생성되는 원리를 설명하는 이론은?',
    options: ['다이나모 이론', '판구조론', '대륙이동설', '빅뱅이론'],
    answer: '다이나모 이론',
    explanation: '다이나모 이론은 액체 외핵의 대류와 지구 자전이 결합해 자기장을 생성한다고 설명합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-03-q02',
    type: 'short_answer',
    question: '태양풍의 입자가 지구 자기장과 상호작용해 만드는 현상은?',
    options: [],
    answer: '오로라',
    explanation: '태양풍의 하전 입자가 극지방 대기와 충돌하며 오로라를 만듭니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-earth-03-q03',
    type: 'multiple_choice',
    question: '"지구 자기장은 막대자석이 지구 속에 박혀있어서 생긴다"는 생각이 틀린 이유는?',
    options: [
      '실제로는 액체 외핵의 대류 운동으로 생성되는 전자기 유도 효과이기 때문',
      '지구 속에는 실제로 거대한 막대자석이 있기 때문',
      '자기장은 지구 표면에서만 존재하기 때문',
      '자기장은 태양이 만드는 것이기 때문'
    ],
    answer: '실제로는 액체 외핵의 대류 운동으로 생성되는 전자기 유도 효과이기 때문',
    explanation: '지구 자기장은 고정된 자석이 아니라 액체 외핵의 움직임으로 생성되는 다이나모 효과입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-earth-03-q04',
    type: 'short_answer',
    question: '지자기 역전의 증거를 제공한 해저의 특징적인 패턴은?',
    options: [],
    answer: '고지자기 줄무늬',
    explanation: '해양저의 고지자기 줄무늬는 정상 자화와 역전 자화가 교대로 나타나는 패턴으로 지자기 역전과 해저확장의 증거입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-03-q05',
    type: 'multiple_choice',
    question: '"자기장은 항상 일정하며 절대 변하지 않는다"는 생각이 틀린 이유는?',
    options: [
      '지질학적으로 수십만 년마다 N극과 S극이 뒤바뀌는 지자기 역전이 있었기 때문',
      '자기장은 실제로 변한 적이 없기 때문',
      '자기장은 하루에 한 번씩 바뀌기 때문',
      '자기장은 태양에 의해서만 결정되기 때문'
    ],
    answer: '지질학적으로 수십만 년마다 N극과 S극이 뒤바뀌는 지자기 역전이 있었기 때문',
    explanation: '지구 자기장은 서서히 변화하며 지질 기록에 따르면 여러 차례 극이 뒤바뀌는 역전이 있었습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-earth-03-q06',
    type: 'short_answer',
    question: '지구 자기권이 생명체를 보호하는 방식은?',
    options: [],
    answer: '태양풍의 하전 입자를 가두거나 편향시켜 우주방사선으로부터 대기와 생명체를 보호한다',
    explanation: '자기권은 태양풍의 위험한 입자들이 지표로 직접 들어오는 것을 막아주는 보호막 역할을 합니다.',
    difficulty: 'medium'
  },

  // 고등 - 별의 스펙트럼과 분류 (high-astro-02)
  {
    id: 'high-astro-02-q01',
    type: 'multiple_choice',
    question: '표면온도가 가장 높은 별의 색깔은?',
    options: ['푸른색', '붉은색', '노란색', '흰색만'],
    answer: '푸른색',
    explanation: '표면온도가 높을수록 별은 푸른색을 띠고, 온도가 낮을수록 붉은색을 띱니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-02-q02',
    type: 'short_answer',
    question: '태양의 분광형은 무엇인가?',
    options: [],
    answer: 'G형',
    explanation: '태양은 표면온도 약 5800K의 G형 별입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-02-q03',
    type: 'multiple_choice',
    question: '별빛의 스펙트럼에 나타나는 흡수선을 통해 알 수 있는 것은?',
    options: [
      '별을 이루는 원소의 종류',
      '별의 정확한 크기',
      '별의 정확한 나이',
      '별의 색깔만'
    ],
    answer: '별을 이루는 원소의 종류',
    explanation: '흡수선의 위치는 그 별의 대기를 이루는 원소들의 고유한 지문과 같아 화학 성분을 알려줍니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-02-q04',
    type: 'short_answer',
    question: '흡수선의 도플러 편이로 알 수 있는 별의 정보는?',
    options: [],
    answer: '별의 시선 방향 운동 속도',
    explanation: '적색편이나 청색편이의 정도로 별이 우리로부터 멀어지는지 가까워지는지, 그 속도를 계산할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-astro-02-q05',
    type: 'multiple_choice',
    question: '"모든 별은 흰색으로만 보인다"는 생각이 틀린 이유는?',
    options: [
      '별은 표면 온도에 따라 실제로 다른 색을 띠기 때문',
      '모든 별은 실제로 흰색이기 때문',
      '별의 색깔은 관측할 수 없기 때문',
      '별은 색이 없는 천체이기 때문'
    ],
    answer: '별은 표면 온도에 따라 실제로 다른 색을 띠기 때문',
    explanation: '뜨거운 별은 푸르스름하게, 차가운 별은 붉게 보이는 등 온도에 따라 색이 다릅니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-02-q06',
    type: 'short_answer',
    question: 'H-R도의 두 축은 각각 무엇을 나타내는가?',
    options: [],
    answer: '표면온도(또는 색)와 광도',
    explanation: 'H-R도는 별의 표면온도(또는 색)를 x축, 광도를 y축으로 그린 그래프입니다.',
    difficulty: 'medium'
  },

  // 고등 - 블랙홀과 강한 중력 (high-astro-03)
  {
    id: 'high-astro-03-q01',
    type: 'short_answer',
    question: '블랙홀에서 빛조차 빠져나올 수 없는 경계를 무엇이라 하는가?',
    options: [],
    answer: '사건의 지평선',
    explanation: '사건의 지평선은 그 안에서는 어떤 정보나 빛도 빠져나올 수 없는 경계입니다.',
    difficulty: 'easy'
  },
  {
    id: 'high-astro-03-q02',
    type: 'multiple_choice',
    question: '"블랙홀은 우주의 모든 것을 진공청소기처럼 빨아들인다"는 생각이 틀린 이유는?',
    options: [
      '충분히 멀리서 보면 블랙홀의 중력은 같은 질량의 별과 다르지 않기 때문',
      '블랙홀은 실제로 아무것도 끌어당기지 않기 때문',
      '블랙홀은 중력이 전혀 없기 때문',
      '블랙홀 주위는 항상 안전하기 때문'
    ],
    answer: '충분히 멀리서 보면 블랙홀의 중력은 같은 질량의 별과 다르지 않기 때문',
    explanation: '멀리서는 블랙홀도 같은 질량의 별과 동일한 중력을 가지며, 궤도를 도는 천체는 그냥 계속 궤도를 돕니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-03-q03',
    type: 'short_answer',
    question: '슈바르츠실트 반지름을 구하는 식은?',
    options: [],
    answer: 'rs=2GM/c²',
    explanation: '슈바르츠실트 반지름은 블랙홀의 사건의 지평선 크기를 나타내는 식입니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-astro-03-q04',
    type: 'multiple_choice',
    question: '2015년 LIGO가 최초로 검출한 것은?',
    options: ['중력파', '전자기파', '중성미자', '우주배경복사'],
    answer: '중력파',
    explanation: '2015년 LIGO는 두 블랙홀 병합에서 발생한 중력파를 최초로 직접 검출했습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-03-q05',
    type: 'short_answer',
    question: '우리은하 중심에 있는 초대질량 블랙홀의 이름은?',
    options: [],
    answer: '궁수자리 A*',
    explanation: '궁수자리 A*는 우리은하 중심에 위치한 초대질량 블랙홀입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-astro-03-q06',
    type: 'multiple_choice',
    question: '"블랙홀 근처에 가면 반드시 빨려 들어간다"는 생각에 대한 올바른 설명은?',
    options: [
      '사건의 지평선보다 충분히 먼 거리에서는 안전하게 공전할 수 있다',
      '블랙홀 근처는 항상 위험하며 예외가 없다',
      '블랙홀은 거리와 무관하게 항상 빨아들인다',
      '블랙홀 주변에는 아무 궤도도 존재하지 않는다'
    ],
    answer: '사건의 지평선보다 충분히 먼 거리에서는 안전하게 공전할 수 있다',
    explanation: '위험한 것은 사건의 지평선에 매우 가깝게 접근했을 때뿐이며, 충분히 먼 거리에서는 안전하게 궤도를 돌 수 있습니다.',
    difficulty: 'medium'
  },

  // 고등 - 약물과 신체 반응 (high-med-02)
  {
    id: 'high-med-02-q01',
    type: 'multiple_choice',
    question: '"약은 많이 먹을수록 더 빨리 낫는다"는 생각이 위험한 이유는?',
    options: [
      '적정 용량을 넘으면 독성이나 부작용이 나타날 수 있기 때문',
      '약은 많이 먹어도 전혀 문제가 없기 때문',
      '약효는 용량과 무관하기 때문',
      '용량이 많을수록 항상 안전해지기 때문'
    ],
    answer: '적정 용량을 넘으면 독성이나 부작용이 나타날 수 있기 때문',
    explanation: '약물의 효과는 용량-반응 관계를 따르며, 적정 용량을 넘으면 오히려 위험할 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-02-q02',
    type: 'short_answer',
    question: '약물이 몸속에서 흡수-분포-대사-배설되는 과정을 연구하는 분야는?',
    options: [],
    answer: '약동학',
    explanation: '약동학은 약물이 몸속에서 이동하고 처리되는 과정을 연구하는 분야입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-02-q03',
    type: 'multiple_choice',
    question: '"모든 사람에게 같은 약이 똑같이 효과가 있다"는 생각이 틀린 이유는?',
    options: [
      '약물대사효소의 유전적 차이로 효과와 부작용이 사람마다 다를 수 있기 때문',
      '모든 사람의 몸은 완전히 동일하기 때문',
      '약물은 유전자와 무관하게 작용하기 때문',
      '개인차는 존재하지 않기 때문'
    ],
    answer: '약물대사효소의 유전적 차이로 효과와 부작용이 사람마다 다를 수 있기 때문',
    explanation: '유전적 차이(약물유전체학)로 인해 같은 약이라도 사람마다 반응이 다를 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-02-q04',
    type: 'short_answer',
    question: '항생제를 처방된 기간 동안 끝까지 복용하지 않으면 생길 수 있는 문제는?',
    options: [],
    answer: '항생제 내성균이 생길 수 있다',
    explanation: '항생제를 중간에 끊으면 살아남은 세균이 내성을 가지게 될 위험이 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-02-q05',
    type: 'multiple_choice',
    question: '약물의 효과가 용량에 비례해 무한정 커지지 않는 이유는?',
    options: [
      '적정 용량 구간을 넘으면 독성이나 부작용이 나타날 수 있기 때문',
      '용량이 늘어날수록 항상 효과도 무한정 커지기 때문',
      '약물은 용량과 무관하게 작용하기 때문',
      '부작용은 절대 발생하지 않기 때문'
    ],
    answer: '적정 용량 구간을 넘으면 독성이나 부작용이 나타날 수 있기 때문',
    explanation: '약물은 정해진 용법과 용량을 지켜야 안전하고 효과적으로 작용합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-02-q06',
    type: 'short_answer',
    question: '약력학이 연구하는 것은 무엇인가?',
    options: [],
    answer: '용량과 효과의 관계',
    explanation: '약력학은 약물의 용량과 그에 따른 신체 반응(효과)의 관계를 연구합니다.',
    difficulty: 'medium'
  },

  // 고등 - 유전질환과 예방의학 (high-med-03)
  {
    id: 'high-med-03-q01',
    type: 'multiple_choice',
    question: '"유전질환은 반드시 부모가 걸렸어야만 자녀에게 나타난다"는 생각이 틀린 이유는?',
    options: [
      '열성 유전병은 부모가 증상 없는 보인자여도 자녀에게 나타날 수 있기 때문',
      '유전질환은 부모의 병력과 완전히 무관하기 때문',
      '열성 유전은 절대 자녀에게 나타나지 않기 때문',
      '모든 유전질환은 우성으로만 유전되기 때문'
    ],
    answer: '열성 유전병은 부모가 증상 없는 보인자여도 자녀에게 나타날 수 있기 때문',
    explanation: '부모가 각각 열성 대립유전자를 하나씩 물려주면 증상이 없던 부모에게서도 자녀에게 열성 유전병이 나타날 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'high-med-03-q02',
    type: 'short_answer',
    question: '단일유전자 질환과 다인자 질환의 차이는?',
    options: [],
    answer: '단일유전자 질환은 하나의 유전자 이상으로, 다인자 질환은 여러 유전자와 환경 요인이 함께 작용해 발생한다',
    explanation: '낭포성 섬유증은 단일유전자 질환의 예이고, 당뇨병·고혈압은 다인자 질환의 대표적 예입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-03-q03',
    type: 'multiple_choice',
    question: '"유전적 소인이 있으면 반드시 병에 걸린다"는 생각이 틀린 이유는?',
    options: [
      '다인자 질환은 유전자와 환경이 함께 작용해 생활습관 관리로 위험을 낮출 수 있기 때문',
      '유전적 소인은 질병 발생과 전혀 무관하기 때문',
      '유전자만으로 모든 질병이 100% 결정되기 때문',
      '환경적 요인은 질병에 영향을 주지 않기 때문'
    ],
    answer: '다인자 질환은 유전자와 환경이 함께 작용해 생활습관 관리로 위험을 낮출 수 있기 때문',
    explanation: '유전적 소인이 있어도 생활습관 관리를 통해 발병 위험을 낮출 수 있는 경우가 많습니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-03-q04',
    type: 'short_answer',
    question: '가계도 분석과 유전자 검사를 통해 질환의 재발 위험을 평가하는 것을 무엇이라 하는가?',
    options: [],
    answer: '유전 상담',
    explanation: '유전 상담은 가계도와 유전자 검사를 바탕으로 질환의 유전 위험을 평가하고 안내하는 과정입니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-03-q05',
    type: 'multiple_choice',
    question: '예방의학이 목표로 하는 것은?',
    options: [
      '조기 선별검사와 생활습관 중재로 발병률과 중증도를 낮추는 것',
      '이미 발생한 질병만 치료하는 것',
      '유전자를 완전히 바꾸는 것',
      '모든 질병을 무조건 예방접종으로 해결하는 것'
    ],
    answer: '조기 선별검사와 생활습관 중재로 발병률과 중증도를 낮추는 것',
    explanation: '예방의학은 질병이 발생하기 전 위험을 낮추고 조기에 발견하는 것을 목표로 합니다.',
    difficulty: 'medium'
  },
  {
    id: 'high-med-03-q06',
    type: 'short_answer',
    question: '낭포성 섬유증은 어떤 유전 방식을 따르는 대표적인 질환인가?',
    options: [],
    answer: '열성 유전',
    explanation: '낭포성 섬유증은 열성 유전 질환의 대표적인 예입니다.',
    difficulty: 'medium'
  },

  // 석사 - 고체물리학 개론 (master-phys-03)
  {
    id: 'master-phys-03-q01',
    type: 'multiple_choice',
    question: '띠간격이 없는 물질은 무엇으로 분류되는가?',
    options: ['도체', '절연체', '반도체', '초전도체만'],
    answer: '도체',
    explanation: '원자가띠와 전도띠 사이에 띠간격이 없으면 전자가 자유롭게 이동할 수 있는 도체가 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-phys-03-q02',
    type: 'short_answer',
    question: '주기적 퍼텐셜 속 전자의 파동함수가 평면파와 주기함수의 곱으로 나타난다는 정리는?',
    options: [],
    answer: '블로흐 정리',
    explanation: '블로흐 정리는 결정 속 전자의 파동함수 구조를 설명하며 에너지띠 이론의 기초가 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-03-q03',
    type: 'multiple_choice',
    question: '반도체의 도핑이 하는 역할은?',
    options: [
      '불순물 준위를 띠간격 안에 도입해 전도성을 조절한다',
      '띠간격을 완전히 없앤다',
      '물질을 절연체로만 만든다',
      '전자를 모두 제거한다'
    ],
    answer: '불순물 준위를 띠간격 안에 도입해 전도성을 조절한다',
    explanation: '도핑은 불순물을 첨가해 띠간격 안에 새로운 에너지 준위를 만들어 전도성을 정밀하게 조절합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-03-q04',
    type: 'short_answer',
    question: '"반도체는 절연체와 완전히 다른 원리로 작동한다"는 생각이 부정확한 이유는?',
    options: [],
    answer: '반도체는 절연체보다 띠간격이 작을 뿐, 같은 띠 구조 원리를 공유하기 때문',
    explanation: '반도체와 절연체는 근본적으로 다른 원리가 아니라 띠간격 크기의 차이일 뿐입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-phys-03-q05',
    type: 'multiple_choice',
    question: '온도가 올라갈 때 반도체의 저항은 일반적으로 어떻게 변하는가?',
    options: ['감소한다', '증가한다', '변하지 않는다', '무한대가 된다'],
    answer: '감소한다',
    explanation: '온도가 올라가면 열에너지로 전자가 전도띠로 여기되어 반도체의 전도성이 증가(저항 감소)합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-phys-03-q06',
    type: 'short_answer',
    question: '실리콘(Si)이 대표적인 반도체 물질로 사용되는 이유와 관련된 성질은?',
    options: [],
    answer: '적절한 크기의 띠간격을 가지고 있어 도핑으로 전도성을 정밀하게 조절할 수 있기 때문',
    explanation: '실리콘은 적당한 띠간격을 가져 다양한 전자소자에 활용하기 적합한 반도체 물질입니다.',
    difficulty: 'hard'
  },

  // 석사 - 화학열역학 (master-chem-01)
  {
    id: 'master-chem-01-q01',
    type: 'short_answer',
    question: '깁스 자유에너지 변화 ΔG의 계산식은?',
    options: [],
    answer: 'ΔG=ΔH-TΔS',
    explanation: '깁스 자유에너지는 엔탈피, 온도, 엔트로피 변화로 계산됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-01-q02',
    type: 'multiple_choice',
    question: 'ΔG가 음수이면 반응은 어떻게 되는가?',
    options: ['자발적으로 일어난다', '비자발적이다', '평형 상태이다', '반응이 멈춘다'],
    answer: '자발적으로 일어난다',
    explanation: 'ΔG<0이면 반응은 자발적으로 진행됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-01-q03',
    type: 'short_answer',
    question: '"발열 반응은 항상 자발적이다"는 생각이 틀린 이유는?',
    options: [],
    answer: '엔트로피가 크게 감소하는 경우 높은 온도에서는 TΔS 항이 커져 ΔG가 양수가 될 수 있기 때문',
    explanation: '자발성은 ΔH뿐 아니라 ΔS와 온도가 함께 결정하므로 발열 반응도 조건에 따라 비자발적일 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-01-q04',
    type: 'multiple_choice',
    question: '표준 자유에너지 변화와 평형상수의 관계는?',
    options: ['ΔG°=-RT ln K', 'ΔG°=RT/K', 'ΔG°=K/RT', 'ΔG°=RTK'],
    answer: 'ΔG°=-RT ln K',
    explanation: '이 식은 표준 자유에너지 변화와 평형상수 K를 연결하는 열역학 관계식입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-01-q05',
    type: 'short_answer',
    question: '엔트로피가 감소하는 반응(ΔS<0)이 자발적일 수 있는 조건은?',
    options: [],
    answer: '발열량이 충분히 크고(ΔH가 매우 음수) 온도가 낮을 때',
    explanation: 'ΔH가 충분히 음수이면 TΔS 항을 압도해 ΔG가 음수가 되어 자발적일 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-01-q06',
    type: 'multiple_choice',
    question: '물이 얼음이 되는 반응이 낮은 온도에서만 자발적인 이유는?',
    options: [
      'ΔS<0이지만 낮은 온도에서는 ΔH<0의 효과가 더 크게 작용하기 때문',
      '얼음은 항상 자발적으로 생기기 때문',
      '엔트로피는 이 과정에서 증가하기 때문',
      '온도는 자발성과 무관하기 때문'
    ],
    answer: 'ΔS<0이지만 낮은 온도에서는 ΔH<0의 효과가 더 크게 작용하기 때문',
    explanation: '온도가 낮으면 TΔS 항이 작아져 ΔH<0의 효과가 지배적이 되어 ΔG가 음수(자발적)가 됩니다.',
    difficulty: 'hard'
  },

  // 석사 - 화학 반응속도론 (master-chem-02)
  {
    id: 'master-chem-02-q01',
    type: 'short_answer',
    question: '아레니우스 식은?',
    options: [],
    answer: 'k=Ae^(-Ea/RT)',
    explanation: '아레니우스 식은 반응속도상수 k가 활성화에너지와 온도에 어떻게 의존하는지 보여줍니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-02-q02',
    type: 'multiple_choice',
    question: '"반응속도는 항상 반응물 농도에 정비례한다"는 생각이 틀린 이유는?',
    options: [
      '반응차수는 실험으로 결정되며 계수와 항상 같지는 않기 때문',
      '반응속도는 농도와 전혀 무관하기 때문',
      '반응차수는 항상 1이기 때문',
      '반응속도는 항상 일정하기 때문'
    ],
    answer: '반응차수는 실험으로 결정되며 계수와 항상 같지는 않기 때문',
    explanation: '반응차수는 반응식의 계수와 다를 수 있으며 실험을 통해서만 정확히 결정할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-02-q03',
    type: 'short_answer',
    question: '여러 단계 반응에서 전체 속도를 결정하는 가장 느린 단계를 무엇이라 하는가?',
    options: [],
    answer: '율속 단계',
    explanation: '율속 단계는 반응 메커니즘 중 가장 느려서 전체 반응 속도를 결정하는 단계입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-02-q04',
    type: 'multiple_choice',
    question: '"촉매는 반응의 평형 위치를 바꾼다"는 생각이 틀린 이유는?',
    options: [
      '촉매는 정반응과 역반응의 활성화에너지를 동일하게 낮출 뿐 평형상수는 바꾸지 않기 때문',
      '촉매는 평형상수를 항상 크게 만들기 때문',
      '촉매는 반응 자체를 멈추기 때문',
      '촉매는 화학반응과 무관하기 때문'
    ],
    answer: '촉매는 정반응과 역반응의 활성화에너지를 동일하게 낮출 뿐 평형상수는 바꾸지 않기 때문',
    explanation: '촉매는 반응 속도만 높일 뿐 평형의 위치(최종 생성물 비율)에는 영향을 주지 않습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-02-q05',
    type: 'short_answer',
    question: '생체 내 반응의 활성화에너지를 낮추는 생체 촉매는?',
    options: [],
    answer: '효소',
    explanation: '효소는 생체 내에서 반응의 활성화에너지를 낮춰 반응 속도를 크게 높이는 생체 촉매입니다.',
    difficulty: 'easy'
  },
  {
    id: 'master-chem-02-q06',
    type: 'multiple_choice',
    question: '온도가 반응 속도에 미치는 영향은?',
    options: ['온도가 높을수록 반응이 빨라진다', '온도가 높을수록 반응이 느려진다', '온도와 무관하다', '항상 일정하다'],
    answer: '온도가 높을수록 반응이 빨라진다',
    explanation: '아레니우스 식에 따르면 온도가 높아지면 반응속도상수 k가 커져 반응이 빨라집니다.',
    difficulty: 'medium'
  },

  // 석사 - 분광학 기초 (master-chem-03)
  {
    id: 'master-chem-03-q01',
    type: 'short_answer',
    question: '결합의 진동을 이용해 작용기를 확인하는 분광법은?',
    options: [],
    answer: 'IR(적외선) 분광법',
    explanation: 'IR 분광법은 분자 내 결합의 진동 패턴을 분석해 작용기를 확인하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-03-q02',
    type: 'multiple_choice',
    question: '핵자기공명(NMR)이 분석하는 것은?',
    options: [
      '원자핵 주위의 화학적 환경',
      '분자의 색깔만',
      '분자의 질량만',
      '분자의 부피만'
    ],
    answer: '원자핵 주위의 화학적 환경',
    explanation: 'NMR은 원자핵 주위 전자의 가림 효과(화학적 환경)를 분석해 분자 구조를 밝힙니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-03-q03',
    type: 'short_answer',
    question: '"분광학은 물질의 색깔만 알려준다"는 생각이 틀린 이유는?',
    options: [],
    answer: '분광학은 결합 종류, 화학적 환경, 전자 배치 등 분자의 상세한 구조 정보를 제공하기 때문',
    explanation: '분광학은 색깔뿐 아니라 화학결합, 원자 배치 등 훨씬 다양한 구조 정보를 제공합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-03-q04',
    type: 'multiple_choice',
    question: 'UV-Vis 분광법이 주로 이용하는 현상은?',
    options: ['전자전이', '핵의 스핀', '결합의 진동', '원자핵의 붕괴'],
    answer: '전자전이',
    explanation: 'UV-Vis 분광법은 전자가 에너지 준위 사이를 전이하며 특정 파장의 빛을 흡수하는 현상을 이용합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-chem-03-q05',
    type: 'short_answer',
    question: '여러 분광법을 종합해 미지 화합물의 구조를 결정하는 과정을 무엇이라 하는가?',
    options: [],
    answer: '구조결정론(구조 결정 과정)',
    explanation: '하나의 분광법만으로는 부족하여 IR, NMR, UV-Vis 등을 종합해 구조를 결정합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-chem-03-q06',
    type: 'multiple_choice',
    question: '용액이 흡수하는 색의 보색이 우리 눈에 보이는 색이 되는 이유는?',
    options: [
      '흡수되지 않고 반사·투과된 색만 우리 눈에 도달하기 때문',
      '흡수된 색이 그대로 보이기 때문',
      '색은 흡수와 무관하게 결정되기 때문',
      '보색 관계는 실제로 존재하지 않기 때문'
    ],
    answer: '흡수되지 않고 반사·투과된 색만 우리 눈에 도달하기 때문',
    explanation: '용액이 특정 색을 흡수하면 나머지 색이 우리 눈에 도달해 보색 관계의 색으로 보입니다.',
    difficulty: 'medium'
  },

  // 석사 - 선형대수학 (master-math-01)
  {
    id: 'master-math-01-q01',
    type: 'short_answer',
    question: '고유값과 고유벡터의 관계식은?',
    options: [],
    answer: 'Av=λv',
    explanation: '행렬 A에 대해 Av=λv를 만족하는 v가 고유벡터, λ가 고유값입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-01-q02',
    type: 'multiple_choice',
    question: '"벡터공간은 항상 3차원 이하만을 의미한다"는 생각이 틀린 이유는?',
    options: [
      '다항식이나 함수의 집합도 벡터공간이 될 수 있기 때문',
      '벡터공간은 항상 정확히 3차원이기 때문',
      '벡터공간은 화살표로만 정의되기 때문',
      '고차원 벡터공간은 존재하지 않기 때문'
    ],
    answer: '다항식이나 함수의 집합도 벡터공간이 될 수 있기 때문',
    explanation: '덧셈과 상수배 성질만 만족하면 추상적인 대상들의 집합도 벡터공간이 될 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-01-q03',
    type: 'short_answer',
    question: '대각화 가능한 행렬을 A=PDP⁻¹로 표현할 때 D는 무엇인가?',
    options: [],
    answer: '고유값들로 이루어진 대각행렬',
    explanation: 'D는 A의 고유값들을 대각선에 배치한 대각행렬입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-01-q04',
    type: 'multiple_choice',
    question: '"모든 정사각행렬은 대각화가 가능하다"는 생각이 틀린 이유는?',
    options: [
      '고유값의 중복도와 고유벡터의 개수가 일치하지 않는 결함행렬이 존재하기 때문',
      '모든 행렬은 예외 없이 대각화되기 때문',
      '대각화는 정사각행렬에만 적용되지 않기 때문',
      '고유값이 없는 행렬은 없기 때문'
    ],
    answer: '고유값의 중복도와 고유벡터의 개수가 일치하지 않는 결함행렬이 존재하기 때문',
    explanation: '결함행렬은 대각화할 수 없어 조르당 표준형 같은 대안적 형태가 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-01-q05',
    type: 'short_answer',
    question: '데이터의 차원을 축소하는 데 고유벡터를 이용하는 기법은?',
    options: [],
    answer: '주성분분석(PCA)',
    explanation: '주성분분석은 공분산 행렬의 고유벡터를 이용해 데이터의 차원을 축소하는 기법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-01-q06',
    type: 'multiple_choice',
    question: '대칭행렬의 고유값에 대한 성질은?',
    options: ['항상 실수이다', '항상 복소수이다', '항상 0이다', '존재하지 않는다'],
    answer: '항상 실수이다',
    explanation: '스펙트럼 정리에 따르면 대칭행렬은 항상 실수 고유값을 가지며 직교대각화가 가능합니다.',
    difficulty: 'hard'
  },

  // 석사 - 해석학 기초 (master-math-02)
  {
    id: 'master-math-02-q01',
    type: 'short_answer',
    question: 'ε-δ 논법에서 극한의 정의는 무엇을 이용해 표현하는가?',
    options: [],
    answer: '임의의 ε>0에 대해 어떤 δ>0가 존재해 조건을 만족하는지',
    explanation: 'ε-δ 정의는 "얼마나 가까운지"를 엄밀한 부등식으로 표현합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-02-q02',
    type: 'multiple_choice',
    question: '실수의 완비성이 보장하는 것은?',
    options: ['모든 코시수열이 수렴한다', '모든 수열이 발산한다', '유리수만 존재한다', '극한이 존재하지 않는다'],
    answer: '모든 코시수열이 수렴한다',
    explanation: '실수의 완비성은 모든 코시수열이 실수 범위 안에서 수렴함을 보장하는 근본 공리입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-02-q03',
    type: 'short_answer',
    question: 'fₙ(x)=xⁿ가 [0,1]에서 점별수렴하는 극한함수가 불연속인 지점은?',
    options: [],
    answer: 'x=1',
    explanation: 'x<1에서는 극한이 0, x=1에서는 극한이 1이 되어 불연속점이 생깁니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-02-q04',
    type: 'multiple_choice',
    question: '"직관적으로 이해되면 엄밀한 증명은 필요 없다"는 생각이 위험한 이유는?',
    options: [
      '직관만으로는 미묘하게 틀린 결론에 도달할 수 있기 때문',
      '직관은 항상 완벽하게 정확하기 때문',
      '증명은 수학에서 중요하지 않기 때문',
      '엄밀한 정의는 아무 의미가 없기 때문'
    ],
    answer: '직관만으로는 미묘하게 틀린 결론에 도달할 수 있기 때문',
    explanation: '균등수렴이 아닌 함수열의 극한이 항상 연속이라는 잘못된 직관처럼, 엄밀한 증명이 필요한 경우가 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-02-q05',
    type: 'short_answer',
    question: '균등수렴이 점별수렴보다 강한 조건인 이유는?',
    options: [],
    answer: '균등수렴은 극한함수의 연속성과 적분가능성 등을 보장하지만 점별수렴은 보장하지 않기 때문',
    explanation: '균등수렴은 모든 점에서 동시에 균일한 속도로 수렴하는 더 강한 조건입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-02-q06',
    type: 'multiple_choice',
    question: '중간값 정리가 성립하기 위한 기반이 되는 실수의 성질은?',
    options: ['완비성', '유한성', '이산성', '정수성'],
    answer: '완비성',
    explanation: '중간값 정리는 실수의 완비성에 기반해 증명됩니다.',
    difficulty: 'hard'
  },

  // 석사 - 위상수학 입문 (master-math-03)
  {
    id: 'master-math-03-q01',
    type: 'short_answer',
    question: '위상공간을 정의하는 데 사용되는 기본 개념은?',
    options: [],
    answer: '열린집합',
    explanation: '위상공간은 거리 없이 열린집합의 모임만으로 정의됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-03-q02',
    type: 'multiple_choice',
    question: '"위상수학은 거리와 각도를 다루는 기하학과 같다"는 생각이 틀린 이유는?',
    options: [
      '위상수학은 정확한 거리 없이 연결성이나 구멍의 유무 같은 유연한 성질을 다루기 때문',
      '위상수학은 유클리드 기하학과 완전히 동일하기 때문',
      '위상수학은 거리만을 다루기 때문',
      '위상수학에는 변형 개념이 없기 때문'
    ],
    answer: '위상수학은 정확한 거리 없이 연결성이나 구멍의 유무 같은 유연한 성질을 다루기 때문',
    explanation: '위상수학은 "고무판 기하학"이라 불릴 만큼 거리보다 훨씬 유연한 성질을 연구합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-03-q03',
    type: 'short_answer',
    question: '도넛과 커피잔이 위상적으로 같다고 말하는 이유는?',
    options: [],
    answer: '둘 다 구멍이 하나씩 있어 연속적인 변형으로 서로 옮겨질 수 있기 때문',
    explanation: '위상수학에서는 구멍의 개수 같은 성질이 보존되면 같은 것으로 간주합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-math-03-q04',
    type: 'multiple_choice',
    question: '"컴팩트성은 단순히 유계라는 뜻이다"는 생각이 부정확한 이유는?',
    options: [
      '일반 위상공간에서는 유계와 컴팩트가 항상 같지 않기 때문',
      '컴팩트는 항상 무한집합을 의미하기 때문',
      '유계는 컴팩트와 완전히 무관한 개념이기 때문',
      '컴팩트성은 정의되지 않는 개념이기 때문'
    ],
    answer: '일반 위상공간에서는 유계와 컴팩트가 항상 같지 않기 때문',
    explanation: '유클리드 공간에서는 하이네-보렐 정리로 둘이 연결되지만, 일반 위상공간에서는 그렇지 않습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-03-q05',
    type: 'short_answer',
    question: '실수 전체 집합 ℝ이 컴팩트하지 않은 이유는?',
    options: [],
    answer: '무한히 뻗어있어 유한 부분덮개로 덮을 수 없기 때문',
    explanation: 'ℝ은 유계가 아니므로 컴팩트 공간의 조건을 만족하지 못합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-math-03-q06',
    type: 'multiple_choice',
    question: '닫힌 구간 [0,1]은 어떤 공간의 대표적인 예인가?',
    options: ['컴팩트 공간', '비컴팩트 공간', '무한 공간', '이산 공간만'],
    answer: '컴팩트 공간',
    explanation: '닫힌 구간 [0,1]은 유클리드 공간에서 유계이고 닫혀있어 컴팩트 공간의 대표적 예입니다.',
    difficulty: 'medium'
  },

  // 석사 - 분자생물학 (master-bio-01)
  {
    id: 'master-bio-01-q01',
    type: 'short_answer',
    question: '유전자 발현의 두 단계는?',
    options: [],
    answer: '전사와 번역',
    explanation: '유전자 발현은 DNA에서 mRNA로의 전사와 mRNA에서 단백질로의 번역 두 단계로 이루어집니다.',
    difficulty: 'easy'
  },
  {
    id: 'master-bio-01-q02',
    type: 'multiple_choice',
    question: '"모든 유전자는 항상 발현되어 단백질을 만든다"는 생각이 틀린 이유는?',
    options: [
      '세포는 필요한 유전자만 선택적으로 발현시키기 때문',
      '모든 세포는 모든 유전자를 항상 발현하기 때문',
      '유전자는 발현 조절이 불가능하기 때문',
      '세포 분화는 유전자 발현과 무관하기 때문'
    ],
    answer: '세포는 필요한 유전자만 선택적으로 발현시키기 때문',
    explanation: '간세포와 신경세포처럼 같은 DNA를 가져도 발현되는 유전자가 달라 다른 기능을 수행합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-01-q03',
    type: 'short_answer',
    question: '여러 유전자를 하나의 프로모터로 함께 조절하는 원핵생물의 구조는?',
    options: [],
    answer: '오페론',
    explanation: '오페론은 관련된 여러 유전자를 하나의 조절 단위로 묶어 함께 발현을 조절하는 구조입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-01-q04',
    type: 'multiple_choice',
    question: '분자생물학의 중심원리(DNA→RNA→단백질)에 대한 예외를 보이는 바이러스는?',
    options: ['레트로바이러스(HIV 등)', '박테리오파지 일반', '독감 바이러스', '노로바이러스'],
    answer: '레트로바이러스(HIV 등)',
    explanation: '레트로바이러스는 역전사효소로 RNA를 DNA로 역전사하는 예외적인 경로를 사용합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-01-q05',
    type: 'short_answer',
    question: 'DNA가 히스톤 단백질을 감싸며 일어나는 후성유전학적 조절의 예는?',
    options: [],
    answer: '히스톤 아세틸화(크로마틴 리모델링)',
    explanation: '히스톤의 화학적 변형(아세틸화 등)은 DNA 서열 변화 없이 유전자 발현을 조절합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-01-q06',
    type: 'multiple_choice',
    question: '대장균의 젖당 오페론이 관련 유전자를 발현하는 조건은?',
    options: ['젖당이 있을 때', '포도당이 있을 때', '항상 발현된다', '절대 발현되지 않는다'],
    answer: '젖당이 있을 때',
    explanation: '젖당 오페론은 젖당이 존재할 때만 관련 유전자를 발현시켜 효율적인 자원 이용을 돕습니다.',
    difficulty: 'medium'
  },

  // 석사 - 발생생물학 (master-bio-02)
  {
    id: 'master-bio-02-q01',
    type: 'short_answer',
    question: '몸의 앞뒤 축을 따라 신체 부위의 정체성을 결정하는 유전자군은?',
    options: [],
    answer: '혹스(Hox) 유전자',
    explanation: '혹스 유전자는 배아 발생 중 몸의 구획별 정체성을 결정하는 핵심 유전자군입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-02-q02',
    type: 'multiple_choice',
    question: '"세포 분화 과정에서 유전자 자체가 사라지거나 변형된다"는 생각이 틀린 이유는?',
    options: [
      '분화는 DNA 서열 변화가 아니라 유전자 발현 조절(후성유전학적 변화)로 일어나기 때문',
      '분화 과정에서 DNA가 실제로 사라지기 때문',
      '모든 세포는 서로 다른 DNA를 가지기 때문',
      '분화는 유전자와 무관한 현상이기 때문'
    ],
    answer: '분화는 DNA 서열 변화가 아니라 유전자 발현 조절(후성유전학적 변화)로 일어나기 때문',
    explanation: '세포 분화는 대부분 DNA 서열은 그대로 두고 어떤 유전자를 켜고 끌지 조절하는 방식으로 일어납니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-02-q03',
    type: 'short_answer',
    question: '체세포를 역분화시켜 여러 세포로 분화할 수 있게 만든 세포를 무엇이라 하는가?',
    options: [],
    answer: '유도만능줄기세포(iPSC)',
    explanation: '야마나카 인자를 이용해 체세포를 역분화시킨 것이 유도만능줄기세포입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-02-q04',
    type: 'multiple_choice',
    question: '형태형성물질의 농도 기울기가 세포에 제공하는 정보는?',
    options: ['위치 정보', '온도 정보', '색깔 정보', '나이 정보'],
    answer: '위치 정보',
    explanation: '형태형성물질의 농도 기울기는 세포가 배아 내 자신의 위치를 파악하는 신호가 됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-02-q05',
    type: 'short_answer',
    question: '초파리의 혹스 유전자 돌연변이가 만드는 기형의 예는?',
    options: [],
    answer: '다리가 머리에서 자라는 기형',
    explanation: '혹스 유전자 돌연변이는 신체 부위의 정체성이 잘못 지정되어 예상치 못한 위치에 기관이 형성되는 기형을 유발할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-02-q06',
    type: 'multiple_choice',
    question: '"몸의 각 부위가 형성되는 위치는 무작위이다"는 생각이 틀린 이유는?',
    options: [
      '형태형성물질의 농도 기울기와 조절 유전자 발현 패턴에 의해 정밀하게 결정되기 때문',
      '실제로 완전히 무작위로 결정되기 때문',
      '조절 유전자는 위치 결정과 무관하기 때문',
      '배아 발생은 아무 규칙이 없기 때문'
    ],
    answer: '형태형성물질의 농도 기울기와 조절 유전자 발현 패턴에 의해 정밀하게 결정되기 때문',
    explanation: '배아 발생의 위치 결정은 정교한 분자적 신호 체계에 의해 조절됩니다.',
    difficulty: 'hard'
  },

  // 석사 - 신경과학 개론 (master-bio-03)
  {
    id: 'master-bio-03-q01',
    type: 'short_answer',
    question: '시냅스 연결의 강도가 경험에 따라 변하는 성질을 무엇이라 하는가?',
    options: [],
    answer: '시냅스 가소성',
    explanation: '시냅스 가소성은 학습과 기억의 세포적 기반이 되는 시냅스 강도 변화 성질입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-03-q02',
    type: 'multiple_choice',
    question: '"사람은 뇌의 10%만 사용한다"는 생각에 대한 올바른 평가는?',
    options: [
      '근거 없는 통념으로, 뇌 영상 연구에 따르면 거의 모든 부위가 활성화된다',
      '과학적으로 완전히 증명된 사실이다',
      '뇌의 90%는 실제로 필요 없는 부분이다',
      '뇌 영상 연구로 확인할 수 없는 주장이다'
    ],
    answer: '근거 없는 통념으로, 뇌 영상 연구에 따르면 거의 모든 부위가 활성화된다',
    explanation: '뇌 영상 연구는 하루 동안 뇌의 거의 모든 부위가 어떤 형태로든 활성화됨을 보여줍니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-03-q03',
    type: 'short_answer',
    question: '반복 자극으로 시냅스 전달 효율이 오래 지속적으로 증가하는 현상은?',
    options: [],
    answer: '장기강화(LTP)',
    explanation: '장기강화(LTP)는 학습과 기억의 세포적 메커니즘으로 여겨지는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-bio-03-q04',
    type: 'multiple_choice',
    question: 'LTP가 일어나는 데 중요한 역할을 하는 수용체는?',
    options: ['NMDA 수용체', '인슐린 수용체', '아세틸콜린에스테라아제', '헤모글로빈'],
    answer: 'NMDA 수용체',
    explanation: 'NMDA 수용체를 통한 칼슘 유입이 LTP 유도의 핵심 기전으로 알려져 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-03-q05',
    type: 'short_answer',
    question: '"기억은 뇌의 한 곳에 고정된 파일처럼 저장된다"는 생각이 틀린 이유는?',
    options: [],
    answer: '기억은 여러 뇌 영역에 걸친 신경회로의 분산된 패턴으로 저장되기 때문',
    explanation: '기억은 하나의 위치가 아니라 여러 뇌 영역에 분산되어 저장되는 것으로 여겨집니다(분산 표상 이론).',
    difficulty: 'hard'
  },
  {
    id: 'master-bio-03-q06',
    type: 'multiple_choice',
    question: '새로운 기억 형성에 중요한 역할을 하는 뇌 영역은?',
    options: ['해마', '소뇌', '척수', '망막'],
    answer: '해마',
    explanation: '해마는 새로운 기억을 형성하는 데 중요한 역할을 하는 뇌 영역입니다.',
    difficulty: 'medium'
  },

  // 석사 - 지구화학 (master-earth-01)
  {
    id: 'master-earth-01-q01',
    type: 'short_answer',
    question: '탄소가 대기-생물권-암석권 사이를 오가는 순환을 무엇이라 하는가?',
    options: [],
    answer: '탄소 순환',
    explanation: '탄소 순환은 여러 저장고 사이에서 탄소가 형태를 바꾸며 이동하는 과정입니다.',
    difficulty: 'easy'
  },
  {
    id: 'master-earth-01-q02',
    type: 'multiple_choice',
    question: '방사성 연대측정에 이용되는 것은?',
    options: ['반감기가 알려진 동위원소의 붕괴 비율', '암석의 색깔', '암석의 무게만', '암석의 온도'],
    answer: '반감기가 알려진 동위원소의 붕괴 비율',
    explanation: '방사성 연대측정은 알려진 반감기를 가진 동위원소의 붕괴 비율을 이용해 나이를 추정합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-01-q03',
    type: 'short_answer',
    question: '"원소는 지구 안에서 새로 생성되거나 사라진다"는 생각이 틀린 이유는?',
    options: [],
    answer: '핵반응이 아닌 한 원소는 형태(저장고)만 바꾸며 순환할 뿐 새로 생기거나 사라지지 않기 때문',
    explanation: '지구화학적 순환은 원소가 여러 저장고 사이를 이동하는 과정이지, 원소 자체가 생성·소멸되는 것이 아닙니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-01-q04',
    type: 'multiple_choice',
    question: '¹⁴C 연대측정이 주로 사용되는 대상은?',
    options: ['비교적 최근의 유기물(고고학 유물 등)', '수십억 년 된 암석', '순수한 금속', '기체 상태의 물질만'],
    answer: '비교적 최근의 유기물(고고학 유물 등)',
    explanation: '¹⁴C는 반감기가 비교적 짧아 수만 년 이내의 유기물 연대측정에 주로 사용됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-01-q05',
    type: 'short_answer',
    question: '방사성 연대측정의 정확도에 영향을 줄 수 있는 요인은?',
    options: [],
    answer: '시료의 오염, 초기 동위원소 비율 가정의 불확실성, 개방계 여부 등',
    explanation: '이런 요인들 때문에 방사성 연대측정은 여러 방법으로 교차 검증하는 것이 중요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-01-q06',
    type: 'multiple_choice',
    question: '빙하 코어의 산소동위원소비로 알 수 있는 것은?',
    options: ['과거의 기온', '암석의 나이', '화산 폭발 시기만', '지진의 규모'],
    answer: '과거의 기온',
    explanation: '빙하 코어의 산소동위원소비는 과거 기온을 복원하는 데 중요한 고기후 지표로 사용됩니다.',
    difficulty: 'hard'
  },

  // 석사 - 고기후학 (master-earth-02)
  {
    id: 'master-earth-02-q01',
    type: 'short_answer',
    question: '온도계 기록이 없는 과거 기후를 복원하는 데 사용하는 자연 기록을 무엇이라 하는가?',
    options: [],
    answer: '고기후 대체자료(프록시)',
    explanation: '나이테, 빙하 코어, 퇴적물 등은 과거 기후를 알려주는 대체자료(프록시)입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-02-q02',
    type: 'multiple_choice',
    question: '남극 빙하 코어를 통해 알 수 있는 것은?',
    options: ['과거 대기의 CO₂ 농도', '미래의 기후', '해양의 깊이', '지진의 위치'],
    answer: '과거 대기의 CO₂ 농도',
    explanation: '빙하 속 공기 방울은 과거 대기 조성을 직접 보존하고 있어 CO₂ 농도 변화를 알 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-02-q03',
    type: 'short_answer',
    question: '"과거 기후는 온도계 기록이 없어 전혀 알 수 없다"는 생각이 틀린 이유는?',
    options: [],
    answer: '나이테, 빙하, 퇴적물 등 자연물에 남은 화학적·물리적 흔적을 분석해 복원할 수 있기 때문',
    explanation: '온도계가 없던 시기의 기후도 여러 대체자료를 정교하게 해독해 복원할 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-02-q04',
    type: 'multiple_choice',
    question: '고기후 복원의 신뢰도를 높이기 위한 표준적인 방법은?',
    options: [
      '여러 독립적인 대체자료를 통합하는 다중 프록시 접근',
      '하나의 자료만 사용하는 것',
      '추정치를 사용하지 않는 것',
      '현재 기후만 연구하는 것'
    ],
    answer: '여러 독립적인 대체자료를 통합하는 다중 프록시 접근',
    explanation: '여러 독립적인 대체자료를 교차 비교하는 다중 프록시 접근이 신뢰도를 높이는 표준적인 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-02-q05',
    type: 'short_answer',
    question: '고기후 자료가 기후모델 연구에 활용되는 방식은?',
    options: [],
    answer: '과거 기후 변화 패턴이 현재 모델로 얼마나 잘 재현되는지 검증하는 데 사용됨',
    explanation: '고기후 자료는 기후모델의 신뢰도를 검증하는 중요한 기준이 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-02-q06',
    type: 'multiple_choice',
    question: '나이테 폭이 넓은 해에 대한 일반적인 해석은?',
    options: ['성장 조건(강수량 등)이 좋았을 것이다', '가뭄이 있었을 것이다', '화산이 폭발했을 것이다', '지진이 있었을 것이다'],
    answer: '성장 조건(강수량 등)이 좋았을 것이다',
    explanation: '나이테가 넓다는 것은 그 해의 성장 조건(수분, 온도 등)이 좋았음을 시사합니다.',
    difficulty: 'medium'
  },

  // 석사 - 지진학 (master-earth-03)
  {
    id: 'master-earth-03-q01',
    type: 'short_answer',
    question: '고체와 액체를 모두 통과할 수 있는 지진파는?',
    options: [],
    answer: 'P파(종파)',
    explanation: 'P파는 종파로 고체와 액체 모두를 통과할 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-03-q02',
    type: 'multiple_choice',
    question: 'S파가 통과하지 못하는 지구 내부 영역은?',
    options: ['외핵(액체)', '지각', '내핵(고체)', '맨틀'],
    answer: '외핵(액체)',
    explanation: 'S파는 전단력을 전달할 수 없는 액체를 통과하지 못하므로 액체 상태인 외핵을 통과하지 못합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-earth-03-q03',
    type: 'short_answer',
    question: 'S파가 도달하지 않는 지역을 발견해 알아낸 사실은?',
    options: [],
    answer: '외핵이 액체 상태라는 것',
    explanation: '지진파 그림자대(S파가 도달하지 않는 지역)의 발견은 외핵이 액체임을 밝힌 결정적 증거입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-03-q04',
    type: 'multiple_choice',
    question: '"지진파는 지구 내부 어디든 똑같은 속도로 전달된다"는 생각이 틀린 이유는?',
    options: [
      '매질의 밀도와 탄성이 바뀔 때마다 지진파의 속도가 변하기 때문',
      '지진파는 항상 일정한 속도로만 이동하기 때문',
      '지구 내부는 완전히 균일한 매질이기 때문',
      '지진파는 매질과 무관하게 전달되기 때문'
    ],
    answer: '매질의 밀도와 탄성이 바뀔 때마다 지진파의 속도가 변하기 때문',
    explanation: '지구 내부는 균일하지 않아 지진파의 속도가 층마다 달라지고, 이 변화가 내부 구조를 밝히는 단서가 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-03-q05',
    type: 'short_answer',
    question: '지각과 맨틀의 경계를 나타내는 지진파 불연속면의 이름은?',
    options: [],
    answer: '모호면(모호로비치치 불연속면)',
    explanation: '모호면은 지진파 속도가 급격히 변하는 지점으로 지각과 맨틀의 경계를 나타냅니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-earth-03-q06',
    type: 'multiple_choice',
    question: '지진파 토모그래피가 확장해 규명하는 것은?',
    options: ['맨틀 대류의 3차원 구조', '표층 기온', '해류의 방향만', '대기압 분포'],
    answer: '맨틀 대류의 3차원 구조',
    explanation: '지진파 토모그래피는 지진파 속도 분포를 3차원적으로 분석해 맨틀 대류 구조를 추정합니다.',
    difficulty: 'hard'
  },

  // 석사 - 항성천문학 (master-astro-01)
  {
    id: 'master-astro-01-q01',
    type: 'short_answer',
    question: '태양과 비슷한 질량의 별이 주로 이용하는 핵융합 과정은?',
    options: [],
    answer: '양성자-양성자 연쇄반응',
    explanation: '태양처럼 가벼운 별은 양성자-양성자 연쇄반응이 주된 에너지원입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-01-q02',
    type: 'multiple_choice',
    question: '더 무거운 별에서 지배적인 핵융합 과정은?',
    options: ['CNO 순환', '양성자-양성자 연쇄반응만', '중성자 포획만', '전자 포획만'],
    answer: 'CNO 순환',
    explanation: '무거운 별은 탄소, 질소, 산소를 촉매로 이용하는 CNO 순환이 주된 에너지원이 됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-01-q03',
    type: 'short_answer',
    question: '백색왜성이 넘으면 안정적으로 존재할 수 없는 질량 한계는?',
    options: [],
    answer: '찬드라세카르 한계(약 1.4 태양질량)',
    explanation: '찬드라세카르 한계를 넘는 축퇴 잔해는 전자축퇴압으로 중력을 버티지 못해 붕괴합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-01-q04',
    type: 'multiple_choice',
    question: '"모든 별은 같은 방식으로 핵융합을 한다"는 생각이 틀린 이유는?',
    options: [
      '별의 질량에 따라 양성자-양성자 연쇄반응 또는 CNO 순환 등 다른 과정이 지배적이기 때문',
      '모든 별은 예외 없이 동일한 과정을 거치기 때문',
      '핵융합은 별의 질량과 무관하기 때문',
      '가벼운 별은 핵융합을 하지 않기 때문'
    ],
    answer: '별의 질량에 따라 양성자-양성자 연쇄반응 또는 CNO 순환 등 다른 과정이 지배적이기 때문',
    explanation: '별의 질량에 따라 지배적인 핵융합 경로가 다릅니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-01-q05',
    type: 'short_answer',
    question: '항성의 질량-광도 관계에서 무거운 별의 수명이 짧은 이유는?',
    options: [],
    answer: '무거운 별일수록 훨씬 밝지만 연료를 훨씬 빠르게 소진하기 때문',
    explanation: '무거운 별은 광도가 매우 커서 연료 소모 속도가 빨라 수명이 상대적으로 짧습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-01-q06',
    type: 'multiple_choice',
    question: '별의 밝기(광도)를 결정하는 요인은?',
    options: ['크기(반지름)와 표면온도', '색깔만', '나이만', '거리만'],
    answer: '크기(반지름)와 표면온도',
    explanation: '광도 L∝R²T⁴ 관계에 따라 별의 크기와 표면온도가 밝기를 함께 결정합니다.',
    difficulty: 'hard'
  },

  // 석사 - 은하천문학 (master-astro-02)
  {
    id: 'master-astro-02-q01',
    type: 'short_answer',
    question: '은하 회전곡선이 바깥쪽에서도 평탄하게 유지되는 현상을 설명하기 위해 제안된 것은?',
    options: [],
    answer: '암흑물질',
    explanation: '보이는 물질만으로는 설명되지 않는 평탄한 회전곡선을 설명하기 위해 암흑물질이 제안되었습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-02-q02',
    type: 'multiple_choice',
    question: '암흑물질의 존재를 뒷받침하는 증거가 아닌 것은?',
    options: ['별의 색깔 분포', '은하 회전곡선', '은하단의 중력렌즈 효과', '우주배경복사의 비등방성'],
    answer: '별의 색깔 분포',
    explanation: '별의 색깔 분포는 암흑물질과 직접적인 관련이 없으며, 회전곡선과 중력렌즈, 우주배경복사가 주요 증거입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-02-q03',
    type: 'short_answer',
    question: '"암흑물질은 이미 직접 관측되어 정체가 밝혀졌다"는 생각이 틀린 이유는?',
    options: [],
    answer: '암흑물질의 존재는 여러 증거로 뒷받침되지만 그것을 이루는 입자는 아직 직접 검출되지 않았기 때문',
    explanation: '존재의 증거와 정체 규명은 서로 다른 문제이며, 후자는 아직 미해결 상태입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-02-q04',
    type: 'multiple_choice',
    question: '총알 은하단 관측이 보여주는 것은?',
    options: [
      '암흑물질과 일반물질이 분리될 수 있다는 것',
      '암흑물질이 존재하지 않는다는 것',
      '모든 물질은 같은 방식으로 움직인다는 것',
      '은하단에는 물질이 없다는 것'
    ],
    answer: '암흑물질과 일반물질이 분리될 수 있다는 것',
    explanation: '총알 은하단은 충돌 과정에서 암흑물질과 일반물질(가스)이 분리되는 모습을 보여주는 중요한 관측 증거입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-02-q05',
    type: 'short_answer',
    question: '암흑물질 후보로 연구되는 입자를 하나 쓰시오.',
    options: [],
    answer: 'WIMP(또는 액시온)',
    explanation: 'WIMP와 액시온은 암흑물질을 이루는 입자의 대표적인 후보입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-02-q06',
    type: 'multiple_choice',
    question: '은하의 질량을 보이는 물질만으로 계산하면 실제 관측된 회전속도와 비교했을 때?',
    options: [
      '실제 관측값보다 훨씬 작게 예측된다',
      '정확히 일치한다',
      '실제 관측값보다 훨씬 크게 예측된다',
      '전혀 관련이 없다'
    ],
    answer: '실제 관측값보다 훨씬 작게 예측된다',
    explanation: '보이는 물질만으로 계산한 질량은 실제 회전속도를 설명하기에 크게 부족해 암흑물질이 필요합니다.',
    difficulty: 'hard'
  },

  // 석사 - 관측천문학 기법 (master-astro-03)
  {
    id: 'master-astro-03-q01',
    type: 'short_answer',
    question: '망원경의 이론적 해상도를 제한하는 물리 현상은?',
    options: [],
    answer: '회절',
    explanation: '망원경의 해상도는 빛의 회절 현상에 의해 이론적 한계(회절 한계)를 가집니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-03-q02',
    type: 'multiple_choice',
    question: '지상 망원경의 해상도를 저하시키는 요인은?',
    options: ['대기의 흔들림(시상)', '망원경의 색깔', '망원경의 무게', '망원경의 재질만'],
    answer: '대기의 흔들림(시상)',
    explanation: '대기의 흔들림(시상)은 지상 망원경의 실제 해상도를 이론적 한계보다 저하시킵니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-03-q03',
    type: 'short_answer',
    question: '대기 요동을 실시간으로 보정해 지상 망원경의 해상도를 높이는 기술은?',
    options: [],
    answer: '적응광학',
    explanation: '적응광학은 대기의 흔들림을 실시간으로 감지하고 보정하는 기술입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-astro-03-q04',
    type: 'multiple_choice',
    question: '"망원경은 배율만 높이면 무조건 더 잘 보인다"는 생각이 틀린 이유는?',
    options: [
      '구경이 작으면 상이 흐릿하고 어두워 오히려 관측이 어려워지기 때문',
      '배율은 항상 해상도와 정비례하기 때문',
      '구경은 관측 품질과 무관하기 때문',
      '배율이 높을수록 항상 밝게 보이기 때문'
    ],
    answer: '구경이 작으면 상이 흐릿하고 어두워 오히려 관측이 어려워지기 때문',
    explanation: '빛을 모으는 구경과 회절 한계로 결정되는 해상도가 배율보다 훨씬 중요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-03-q05',
    type: 'short_answer',
    question: '관측 데이터에서 검출기 자체의 잡음과 불균일한 감도를 제거하는 보정 작업을 무엇이라 하는가?',
    options: [],
    answer: '다크 프레임, 플랫 프레임 보정',
    explanation: '다크 프레임과 플랫 프레임 보정은 관측 데이터의 신뢰도를 높이는 필수적인 후처리 과정입니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-astro-03-q06',
    type: 'multiple_choice',
    question: '허블우주망원경이 매우 선명한 상을 얻을 수 있는 이유는?',
    options: [
      '대기의 영향을 받지 않기 때문',
      '배율이 매우 높기 때문',
      '지상 망원경보다 구경이 항상 크기 때문',
      '색깔이 다르기 때문'
    ],
    answer: '대기의 영향을 받지 않기 때문',
    explanation: '우주에 있는 허블우주망원경은 대기의 시상 문제 없이 회절 한계에 가까운 선명한 상을 얻을 수 있습니다.',
    difficulty: 'medium'
  },

  // 석사 - 병태생리학 (master-med-01)
  {
    id: 'master-med-01-q01',
    type: 'short_answer',
    question: '염증의 4대 징후는?',
    options: [],
    answer: '발적, 발열, 부종, 통증',
    explanation: '염증의 4대 징후는 발적(붉어짐), 발열, 부종(붓기), 통증입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-01-q02',
    type: 'multiple_choice',
    question: '"염증은 항상 나쁜 것이므로 무조건 억제해야 한다"는 생각이 틀린 이유는?',
    options: [
      '염증은 손상과 감염으로부터 몸을 보호하고 치유를 돕는 정상적인 방어 반응이기 때문',
      '염증은 몸에 전혀 필요 없는 반응이기 때문',
      '염증은 항상 만성적으로만 나타나기 때문',
      '염증은 감염과 무관하기 때문'
    ],
    answer: '염증은 손상과 감염으로부터 몸을 보호하고 치유를 돕는 정상적인 방어 반응이기 때문',
    explanation: '문제가 되는 것은 과도하거나 만성화된 염증이며, 급성 염증 자체는 필수적인 방어 기전입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-01-q03',
    type: 'short_answer',
    question: '혈류 부족으로 세포에 산소와 영양 공급이 차단되는 현상은?',
    options: [],
    answer: '허혈',
    explanation: '허혈은 혈류 부족으로 조직이 산소와 영양을 공급받지 못하는 상태입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-01-q04',
    type: 'multiple_choice',
    question: '"증상이 없으면 질병이 진행되고 있지 않은 것이다"는 생각이 위험한 이유는?',
    options: [
      '몸의 보상기전으로 초기에는 증상 없이 질병이 진행될 수 있기 때문',
      '증상은 항상 질병 초기부터 뚜렷하게 나타나기 때문',
      '보상기전은 존재하지 않기 때문',
      '질병은 증상 없이는 절대 진행되지 않기 때문'
    ],
    answer: '몸의 보상기전으로 초기에는 증상 없이 질병이 진행될 수 있기 때문',
    explanation: '만성 신장질환처럼 상당히 진행될 때까지 증상이 뚜렷하지 않은 질병들이 있어 정기 검진이 중요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-med-01-q05',
    type: 'short_answer',
    question: '고혈압이 "침묵의 살인자"로 불리는 이유는?',
    options: [],
    answer: '오랫동안 증상 없이 진행되기 때문',
    explanation: '고혈압은 뚜렷한 증상 없이 오랫동안 진행되어 발견이 늦어질 수 있어 이런 별칭이 붙었습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-01-q06',
    type: 'multiple_choice',
    question: '만성 염증이 지속될 때 나타날 수 있는 문제는?',
    options: ['조직 손상이나 섬유화', '항상 완전한 치유', '즉각적인 회복만', '아무 문제도 없음'],
    answer: '조직 손상이나 섬유화',
    explanation: '만성 염증은 대식세포와 림프구가 지속적으로 관여해 조직 손상이나 섬유화를 유발할 수 있습니다.',
    difficulty: 'hard'
  },

  // 석사 - 약리학 심화 (master-med-02)
  {
    id: 'master-med-02-q01',
    type: 'short_answer',
    question: '여러 약물의 대사에 관여하는 간의 대표적인 효소군은?',
    options: [],
    answer: 'CYP450',
    explanation: 'CYP450 효소군은 간에서 여러 약물의 대사에 핵심적인 역할을 합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-02-q02',
    type: 'multiple_choice',
    question: '"천연 성분이라면 약물과 함께 먹어도 항상 안전하다"는 생각이 틀린 이유는?',
    options: [
      '자몽주스처럼 천연 성분도 약물대사효소에 영향을 줄 수 있기 때문',
      '천연 성분은 절대 약물과 상호작용하지 않기 때문',
      '천연 성분은 몸에 흡수되지 않기 때문',
      '약물 상호작용은 실제로 존재하지 않기 때문'
    ],
    answer: '자몽주스처럼 천연 성분도 약물대사효소에 영향을 줄 수 있기 때문',
    explanation: '자몽주스는 CYP450 효소를 억제해 일부 약물의 혈중농도를 위험하게 높일 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-02-q03',
    type: 'short_answer',
    question: '치료지수가 좁은 약물이 필요로 하는 것은?',
    options: [],
    answer: '세심한 용량 조절',
    explanation: '치료지수가 좁으면 치료 용량과 독성 용량의 차이가 작아 세심한 용량 조절이 필요합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-02-q04',
    type: 'multiple_choice',
    question: '"모든 사람에게 같은 용량이 같은 효과를 낸다"는 생각이 틀린 이유는?',
    options: [
      '약물대사효소의 유전적 다형성으로 개인마다 혈중농도가 다르게 나타나기 때문',
      '모든 사람의 대사 능력은 완전히 동일하기 때문',
      '용량은 효과와 무관하기 때문',
      '유전적 차이는 약물 반응에 영향을 주지 않기 때문'
    ],
    answer: '약물대사효소의 유전적 다형성으로 개인마다 혈중농도가 다르게 나타나기 때문',
    explanation: '느린 대사자와 빠른 대사자의 차이로 같은 용량이라도 효과가 다르게 나타날 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-med-02-q05',
    type: 'short_answer',
    question: '항응고제(와파린 등)가 다른 약물과의 상호작용에 특히 민감한 이유는?',
    options: [],
    answer: '치료 범위가 좁고 여러 대사경로의 영향을 받기 쉽기 때문',
    explanation: '와파린은 치료 범위가 좁아 다른 약물이나 음식과의 상호작용에 특히 주의가 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-med-02-q06',
    type: 'multiple_choice',
    question: '개인의 유전적 특성을 고려한 맞춤형 처방을 연구하는 분야는?',
    options: ['약물유전체학', '일반생물학', '지질학', '천문학'],
    answer: '약물유전체학',
    explanation: '약물유전체학은 개인의 유전적 차이를 고려해 최적의 약물과 용량을 찾는 연구 분야입니다.',
    difficulty: 'medium'
  },

  // 석사 - 임상역학 (master-med-03)
  {
    id: 'master-med-03-q01',
    type: 'short_answer',
    question: '치료 효과를 편향 없이 평가하는 가장 신뢰도 높은 연구 방법은?',
    options: [],
    answer: '무작위 대조시험(RCT)',
    explanation: '무작위 대조시험은 참가자를 무작위로 배정해 편향을 최소화하는 가장 신뢰도 높은 연구 설계입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-03-q02',
    type: 'multiple_choice',
    question: '"한 건의 성공 사례만으로도 치료법의 효과를 증명할 수 있다"는 생각이 틀린 이유는?',
    options: [
      '일화적 증거는 우연이나 다른 요인의 영향일 수 있어 충분한 근거가 되지 못하기 때문',
      '한 건의 사례만으로 항상 충분한 증거가 되기 때문',
      '임상시험은 필요 없는 절차이기 때문',
      '증거의 질은 중요하지 않기 때문'
    ],
    answer: '일화적 증거는 우연이나 다른 요인의 영향일 수 있어 충분한 근거가 되지 못하기 때문',
    explanation: '신뢰할 수 있는 결론을 위해서는 충분한 표본과 대조군을 갖춘 체계적인 연구가 필요합니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-03-q03',
    type: 'short_answer',
    question: '노출과 결과 모두에 영향을 미쳐 인과관계를 왜곡할 수 있는 제3의 변수는?',
    options: [],
    answer: '교란변수',
    explanation: '교란변수는 상관관계를 인과관계로 잘못 해석하게 만들 수 있는 변수입니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-03-q04',
    type: 'multiple_choice',
    question: '아이스크림 판매량과 익사 사고가 상관관계를 보이는 이유는?',
    options: [
      '여름철 더위라는 교란변수가 둘 다에 영향을 미치기 때문',
      '아이스크림이 익사의 직접적인 원인이기 때문',
      '익사가 아이스크림 판매를 늘리기 때문',
      '두 변수는 아무 관계가 없기 때문'
    ],
    answer: '여름철 더위라는 교란변수가 둘 다에 영향을 미치기 때문',
    explanation: '더운 여름에 아이스크림 소비와 물놀이(익사 위험)가 모두 증가해 상관관계가 나타나지만 인과관계는 아닙니다.',
    difficulty: 'medium'
  },
  {
    id: 'master-med-03-q05',
    type: 'short_answer',
    question: '근거 수준 피라미드에서 개별 RCT보다도 높은 수준으로 평가되는 연구는?',
    options: [],
    answer: '체계적 문헌고찰과 메타분석',
    explanation: '여러 RCT를 종합적으로 분석하는 체계적 문헌고찰과 메타분석은 가장 높은 수준의 근거로 평가됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'master-med-03-q06',
    type: 'multiple_choice',
    question: '특정 집단을 장기간 추적해 위험요인과 질병 발생의 관계를 분석하는 연구는?',
    options: ['코호트 연구', '사례 보고', '실험실 연구만', '메타분석'],
    answer: '코호트 연구',
    explanation: '코호트 연구는 특정 집단을 장기간 추적 관찰하며 위험요인과 질병의 관계를 분석합니다.',
    difficulty: 'medium'
  },

  // 박사 - 끈이론 개론 (phd-phys-02)
  {
    id: 'phd-phys-02-q01',
    type: 'short_answer',
    question: '끈이론에서 서로 다른 입자는 무엇의 차이로 나타나는가?',
    options: [],
    answer: '끈의 진동 모드(방식)',
    explanation: '끈이론에서는 끈의 서로 다른 진동 모드가 전자, 광자, 중력자 등 서로 다른 입자로 나타납니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-phys-02-q02',
    type: 'multiple_choice',
    question: '일관성 있는 초끈이론이 요구하는 시공간의 차원은?',
    options: ['10차원(또는 M이론의 11차원)', '4차원', '3차원', '무한 차원'],
    answer: '10차원(또는 M이론의 11차원)',
    explanation: '초끈이론은 보통 10차원을, M이론은 11차원 시공간을 요구합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-02-q03',
    type: 'short_answer',
    question: '"끈이론은 이미 실험적으로 완전히 검증되었다"는 생각이 틀린 이유는?',
    options: [],
    answer: '예측하는 에너지 규모(플랑크 규모)가 현재 실험 범위를 훨씬 넘어서 직접 검증이 이루어지지 않았기 때문',
    explanation: '끈이론은 수학적으로 정교하지만 아직 직접적인 실험적 검증은 이루어지지 않았습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-02-q04',
    type: 'multiple_choice',
    question: '다섯 가지 서로 다른 초끈이론이 통합될 수 있음을 보여준 것은?',
    options: ['듀얼리티 관계(M이론)', '뉴턴의 법칙', '양자역학의 불확정성 원리', '열역학 제2법칙'],
    answer: '듀얼리티 관계(M이론)',
    explanation: '다섯 초끈이론은 듀얼리티 관계를 통해 M이론의 서로 다른 극한으로 통합될 수 있음이 밝혀졌습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-02-q05',
    type: 'short_answer',
    question: '끈의 가장 낮은 진동 모드 중 하나가 대응한다고 예측되는 입자는?',
    options: [],
    answer: '중력자(graviton)',
    explanation: '끈이론에서 특정 진동 모드는 중력을 매개하는 입자인 중력자에 대응한다고 예측됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-02-q06',
    type: 'multiple_choice',
    question: '끈이론과 양자장론을 연결하는 중요한 개념은?',
    options: ['AdS/CFT 대응성', '뉴턴 역학', '멘델의 법칙', '옴의 법칙'],
    answer: 'AdS/CFT 대응성',
    explanation: 'AdS/CFT 대응성은 끈이론(중력이론)과 경계상의 양자장론을 연결하는 중요한 이론적 도구입니다.',
    difficulty: 'hard'
  },

  // 박사 - 응집물질물리학 개론 (phd-phys-03)
  {
    id: 'phd-phys-03-q01',
    type: 'short_answer',
    question: '내부는 절연체이지만 표면은 전기가 잘 통하는 특이한 물질은?',
    options: [],
    answer: '위상절연체',
    explanation: '위상절연체는 벌크(내부)는 절연체이지만 표면(경계)에는 갭이 없는 전도 상태가 존재하는 물질입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-phys-03-q02',
    type: 'multiple_choice',
    question: '전통적인 상전이 이론(란다우 이론)이 상을 구분하는 기준은?',
    options: ['대칭성 깨짐', '위상불변량', '온도만', '색깔만'],
    answer: '대칭성 깨짐',
    explanation: '란다우의 전통적 상전이 이론은 대칭성 깨짐으로 상을 분류합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-phys-03-q03',
    type: 'short_answer',
    question: '위상절연체 같은 위상적 상을 구분하는 기준은?',
    options: [],
    answer: '위상불변량(천 수 등)',
    explanation: '위상적 상은 대칭성이 아니라 연속적 변형에도 바뀌지 않는 위상불변량으로 구분됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-03-q04',
    type: 'multiple_choice',
    question: '"위상절연체의 표면은 일반 도체 표면과 다르지 않다"는 생각이 틀린 이유는?',
    options: [
      '위상절연체의 표면 상태는 불순물에 강건한 위상적으로 보호된 성질을 가지기 때문',
      '위상절연체의 표면은 실제로 전기가 통하지 않기 때문',
      '일반 도체와 위상절연체는 완전히 동일한 물질이기 때문',
      '표면 상태는 온도에 따라 사라지기 때문'
    ],
    answer: '위상절연체의 표면 상태는 불순물에 강건한 위상적으로 보호된 성질을 가지기 때문',
    explanation: '위상절연체의 표면 전도 상태는 불순물이나 결함에 쉽게 파괴되지 않는 특별한 보호를 받습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-03-q05',
    type: 'short_answer',
    question: '양자홀효과에서 홀전도도가 가지는 특징은?',
    options: [],
    answer: '매우 정밀하게 양자화된 값만 가진다',
    explanation: '양자홀효과의 홀전도도는 특정 정수배로만 양자화되는 놀라운 정밀도를 보입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-phys-03-q06',
    type: 'multiple_choice',
    question: '벌크-경계 대응이 말하는 것은?',
    options: [
      '서로 다른 위상불변량을 가진 물질 사이의 경계에는 반드시 갭이 없는 상태가 존재해야 한다',
      '벌크와 경계는 서로 무관하다',
      '경계 상태는 항상 절연체이다',
      '벌크는 항상 도체여야 한다'
    ],
    answer: '서로 다른 위상불변량을 가진 물질 사이의 경계에는 반드시 갭이 없는 상태가 존재해야 한다',
    explanation: '벌크-경계 대응은 위상불변량이 다른 두 물질의 경계에서 갭이 없는 도체 상태가 나타남을 설명합니다.',
    difficulty: 'hard'
  },

  // 박사 - 양자화학: 분자 오비탈 이론 (phd-chem-01)
  {
    id: 'phd-chem-01-q01',
    type: 'short_answer',
    question: '원자오비탈의 선형결합으로 분자오비탈을 근사하는 방법의 약자는?',
    options: [],
    answer: 'LCAO',
    explanation: 'LCAO(Linear Combination of Atomic Orbitals)는 분자오비탈을 원자오비탈의 선형결합으로 근사하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-01-q02',
    type: 'multiple_choice',
    question: '산소 분자(O₂)가 상자성을 띠는 현상을 잘 설명하는 이론은?',
    options: ['분자오비탈 이론', '원자가결합 이론만', '옥텟 규칙만', '이온결합 이론'],
    answer: '분자오비탈 이론',
    explanation: '분자오비탈 이론은 O₂의 반결합성 오비탈에 있는 홀전자로 상자성을 정확히 설명합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-01-q03',
    type: 'short_answer',
    question: '"화학결합은 두 원자 사이에 전자가 고정된 단순한 선으로 설명된다"는 생각의 한계는?',
    options: [],
    answer: '분자오비탈 관점에서는 전자가 분자 전체에 퍼진 확률적 파동함수로 더 정확히 기술되기 때문',
    explanation: '단순한 결합선 표현으로는 O₂의 상자성 같은 현상을 설명하기 어렵습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-01-q04',
    type: 'multiple_choice',
    question: '전자 간 상호작용을 평균장 근사로 다루는 계산화학 방법은?',
    options: ['Hartree-Fock 방법', '뉴턴 역학', '고전열역학', '통계역학만'],
    answer: 'Hartree-Fock 방법',
    explanation: 'Hartree-Fock 방법은 전자 간 상호작용을 평균장으로 근사하는 대표적인 계산화학 방법입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-01-q05',
    type: 'short_answer',
    question: 'Hartree-Fock 이후 전자상관을 포함해 정확도를 높이는 방법의 예를 하나 쓰시오.',
    options: [],
    answer: 'MP2 또는 CCSD (또는 밀도범함수이론 DFT)',
    explanation: '후Hartree-Fock 방법(MP2, CCSD 등)이나 DFT는 전자상관을 포함해 계산 정확도를 높입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-01-q06',
    type: 'multiple_choice',
    question: '"계산화학은 실험 없이는 전혀 신뢰할 수 없다"는 생각에 대한 올바른 평가는?',
    options: [
      '계산화학은 실험을 대체하는 것이 아니라 보완하며, 검증된 방법은 유용한 예측을 제공한다',
      '계산화학은 실험과 완전히 무관하게 절대적으로 정확하다',
      '계산화학은 실험 결과와 항상 일치하지 않아 쓸모없다',
      '계산화학은 화학 연구에 전혀 사용되지 않는다'
    ],
    answer: '계산화학은 실험을 대체하는 것이 아니라 보완하며, 검증된 방법은 유용한 예측을 제공한다',
    explanation: '계산화학은 실험과 지속적으로 비교·검증되며 신약 개발, 촉매 설계 등에 실질적으로 활용됩니다.',
    difficulty: 'hard'
  },

  // 박사 - 촉매화학 (phd-chem-02)
  {
    id: 'phd-chem-02-q01',
    type: 'short_answer',
    question: '반응물과 같은 상에 존재하는 촉매를 무엇이라 하는가?',
    options: [],
    answer: '균일 촉매',
    explanation: '균일 촉매는 반응물과 같은 상(예: 용액)에 존재하는 촉매입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-02-q02',
    type: 'multiple_choice',
    question: '"촉매는 반응에 소모되어 없어진다"는 생각이 틀린 이유는?',
    options: [
      '촉매는 반응 후 원래 형태로 돌아와 소모되지 않기 때문',
      '촉매는 항상 완전히 소모되기 때문',
      '촉매는 반응에 전혀 참여하지 않기 때문',
      '촉매는 한 번만 사용할 수 있기 때문'
    ],
    answer: '촉매는 반응 후 원래 형태로 돌아와 소모되지 않기 때문',
    explanation: '촉매는 반응 과정에 참여하지만 끝나면 원래 형태로 돌아와 반복적으로 사용될 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-02-q03',
    type: 'short_answer',
    question: '촉매 설계가 이론적으로 기반하는 것은?',
    options: [],
    answer: '전이상태 이론(전이상태 에너지를 안정화)',
    explanation: '촉매는 전이상태의 에너지를 낮춰 반응이 더 쉬운 경로로 가도록 설계됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-02-q04',
    type: 'multiple_choice',
    question: '"더 강한 촉매일수록 항상 더 좋다"는 생각이 틀린 이유는?',
    options: [
      '원하지 않는 부반응까지 촉진해 선택성이 떨어질 수 있기 때문',
      '강한 촉매는 항상 완벽한 선택성을 보장하기 때문',
      '촉매의 활성은 선택성과 무관하기 때문',
      '촉매는 활성이 강할수록 항상 안전하기 때문'
    ],
    answer: '원하지 않는 부반응까지 촉진해 선택성이 떨어질 수 있기 때문',
    explanation: '활성과 선택성의 균형이 촉매 설계에서 매우 중요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-02-q05',
    type: 'short_answer',
    question: '하버-보슈법에서 암모니아 합성을 돕는 촉매는?',
    options: [],
    answer: '철 촉매',
    explanation: '하버-보슈법은 철 촉매를 이용해 질소와 수소로부터 암모니아를 합성합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-02-q06',
    type: 'multiple_choice',
    question: '효소가 산업 촉매와 비교했을 때 가지는 특징은?',
    options: [
      '상온·상압에서도 매우 높은 반응 속도와 선택성을 보인다',
      '항상 매우 높은 온도에서만 작동한다',
      '선택성이 전혀 없다',
      '반응 속도를 오히려 늦춘다'
    ],
    answer: '상온·상압에서도 매우 높은 반응 속도와 선택성을 보인다',
    explanation: '효소는 생체 조건(상온·상압)에서도 매우 효율적이고 선택적인 촉매 작용을 합니다.',
    difficulty: 'medium'
  },

  // 박사 - 초분자화학 (phd-chem-03)
  {
    id: 'phd-chem-03-q01',
    type: 'short_answer',
    question: '초분자화학이 다루는 결합의 종류는?',
    options: [],
    answer: '비공유 상호작용(수소결합, 반데르발스 힘 등)',
    explanation: '초분자화학은 공유결합이 아닌 약한 비공유 상호작용을 이용한 분자 조립을 연구합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-03-q02',
    type: 'multiple_choice',
    question: '"분자 사이의 약한 결합은 화학적으로 중요하지 않다"는 생각이 틀린 이유는?',
    options: [
      '여러 개가 협력적으로 작용하면 매우 안정적이고 정교한 구조를 만들 수 있기 때문',
      '약한 결합은 실제로 아무 역할도 하지 않기 때문',
      '공유결합만이 화학적으로 의미가 있기 때문',
      '약한 결합은 항상 무시할 수 있는 크기이기 때문'
    ],
    answer: '여러 개가 협력적으로 작용하면 매우 안정적이고 정교한 구조를 만들 수 있기 때문',
    explanation: 'DNA 이중나선의 안정성처럼 수많은 약한 상호작용이 협력해 매우 안정적인 구조를 만듭니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-03-q03',
    type: 'short_answer',
    question: '특정 크기의 이온만 선택적으로 포획하는 호스트 분자의 예는?',
    options: [],
    answer: '크라운 에테르',
    explanation: '크라운 에테르는 특정 크기의 이온과 선택적으로 결합하는 대표적인 호스트 분자입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-chem-03-q04',
    type: 'multiple_choice',
    question: '"자기조립은 무작위 과정이라 예측할 수 없다"는 생각이 틀린 이유는?',
    options: [
      '자기조립은 열역학적으로 가장 안정한 구조를 향해 자발적으로 진행되기 때문',
      '자기조립은 실제로 완전히 무작위이기 때문',
      '자기조립은 예측이 불가능한 카오스 현상이기 때문',
      '분자 설계는 자기조립 결과와 무관하기 때문'
    ],
    answer: '자기조립은 열역학적으로 가장 안정한 구조를 향해 자발적으로 진행되기 때문',
    explanation: '분자 구조를 정교하게 설계하면 원하는 자기조립 결과를 상당히 예측 가능하게 유도할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-03-q05',
    type: 'short_answer',
    question: 'DNA 이중나선의 안정성에 기여하는 초분자적 상호작용을 2가지 쓰시오.',
    options: [],
    answer: '수소결합과 염기쌓임 상호작용',
    explanation: 'DNA 이중나선은 염기쌍 사이의 수소결합과 염기들 사이의 쌓임 상호작용으로 안정화됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-chem-03-q06',
    type: 'multiple_choice',
    question: '분자인식이 활용되는 응용 분야가 아닌 것은?',
    options: ['일반 연소 엔진 설계', '분자기계', '약물전달체', '자기조립 나노구조'],
    answer: '일반 연소 엔진 설계',
    explanation: '분자인식은 분자기계, 약물전달체, 자기조립 나노구조 설계 등에 활용되며 연소 엔진과는 직접적 관련이 적습니다.',
    difficulty: 'medium'
  },

  // 박사 - 미분기하학 (phd-math-01)
  {
    id: 'phd-math-01-q01',
    type: 'short_answer',
    question: '표면이 내재적으로 가지는 곡률로, 표면을 구부려도 보존되는 양은?',
    options: [],
    answer: '가우스 곡률',
    explanation: '가우스의 놀라운 정리에 따르면 가우스 곡률은 표면을 구부리거나 늘이지 않는 한 보존됩니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-math-01-q02',
    type: 'multiple_choice',
    question: '"곡률은 우리가 3차원 공간 밖에서 봐야만 알 수 있다"는 생각이 틀린 이유는?',
    options: [
      '가우스의 놀라운 정리에 따르면 곡률은 표면 위에서 직접 측정한 정보만으로 계산할 수 있기 때문',
      '곡률은 항상 외부에서만 관측 가능하기 때문',
      '곡률은 실제로 계산할 수 없는 양이기 때문',
      '곡률은 3차원 공간과 무관한 개념이기 때문'
    ],
    answer: '가우스의 놀라운 정리에 따르면 곡률은 표면 위에서 직접 측정한 정보만으로 계산할 수 있기 때문',
    explanation: '곡률은 표면 내에서 직접 측정한 거리 정보만으로 계산 가능한 내재적 성질입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-01-q03',
    type: 'short_answer',
    question: '구면의 가우스 곡률의 부호는?',
    options: [],
    answer: '양수(양의 곡률)',
    explanation: '구면은 양의 곡률을, 평면은 0, 쌍곡면은 음의 곡률을 가집니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-math-01-q04',
    type: 'multiple_choice',
    question: '"평평해 보이는 표면은 곡률이 항상 0이다"는 생각이 틀린 이유는?',
    options: [
      '안장 모양의 표면처럼 평평해 보여도 음의 곡률을 가질 수 있기 때문',
      '모든 평평한 표면은 곡률이 항상 0이기 때문',
      '곡률은 겉모습만으로 결정되기 때문',
      '곡률은 표면의 색깔에 의해 결정되기 때문'
    ],
    answer: '안장 모양의 표면처럼 평평해 보여도 음의 곡률을 가질 수 있기 때문',
    explanation: '겉보기와 실제 곡률은 다를 수 있어, 정확한 계산이 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-01-q05',
    type: 'short_answer',
    question: '리치 곡률과 스칼라 곡률이 핵심적으로 사용되는 물리 이론은?',
    options: [],
    answer: '일반상대성이론',
    explanation: '아인슈타인 방정식은 리치 곡률과 스칼라 곡률을 이용해 시공간의 곡률과 물질-에너지 분포를 연결합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-01-q06',
    type: 'multiple_choice',
    question: '원기둥의 가우스 곡률은?',
    options: ['0', '양수', '음수', '무한대'],
    answer: '0',
    explanation: '원기둥은 겉보기에 휘어져 보이지만 펼치면 평면이 되므로 가우스 곡률은 0입니다.',
    difficulty: 'hard'
  },

  // 박사 - 확률과정론 (phd-math-02)
  {
    id: 'phd-math-02-q01',
    type: 'short_answer',
    question: '다음 상태가 오직 현재 상태에만 의존하는 확률과정의 성질은?',
    options: [],
    answer: '마르코프 성질',
    explanation: '마르코프 성질은 다음 상태가 과거 전체가 아닌 현재 상태에만 의존한다는 성질입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-math-02-q02',
    type: 'multiple_choice',
    question: '액체 속 입자의 무작위한 움직임을 모델링하는 대표적인 확률과정은?',
    options: ['브라운 운동', '마르코프 연쇄만', '이항분포', '정규분포만'],
    answer: '브라운 운동',
    explanation: '브라운 운동은 액체 속 입자의 무작위한 움직임을 모델링하는 연속시간 확률과정입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-math-02-q03',
    type: 'short_answer',
    question: '확률미분방정식(SDE)의 일반적인 형태는?',
    options: [],
    answer: 'dXt=μ(Xt,t)dt+σ(Xt,t)dWt',
    explanation: 'SDE는 결정론적 변화(드리프트)와 확률적 변동(확산)을 함께 기술합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-02-q04',
    type: 'multiple_choice',
    question: '"마르코프 성질은 아무것도 기억하지 않는다는 뜻이다"는 생각이 부정확한 이유는?',
    options: [
      '현재 상태 자체가 과거의 영향을 이미 압축해서 담고 있기 때문',
      '마르코프 성질은 미래를 전혀 예측하지 못하게 하기 때문',
      '마르코프 과정은 확률과 전혀 무관하기 때문',
      '마르코프 성질은 현재 상태조차 고려하지 않기 때문'
    ],
    answer: '현재 상태 자체가 과거의 영향을 이미 압축해서 담고 있기 때문',
    explanation: '마르코프 성질은 "현재 상태만 알면 과거 전체 이력이 더 이상 필요 없다"는 의미입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-02-q05',
    type: 'short_answer',
    question: '금융공학에서 옵션 가격결정에 사용되는 확률과정 기반 모형은?',
    options: [],
    answer: '블랙-숄즈 모형',
    explanation: '블랙-숄즈 옵션가격 모형은 확률미분방정식에 기반한 금융공학의 대표적인 모형입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-02-q06',
    type: 'multiple_choice',
    question: '"무작위 현상은 수학적으로 정밀하게 다룰 수 없다"는 생각이 틀린 이유는?',
    options: [
      '확률과정론이 확률분포와 장기적 패턴을 정밀하게 분석하는 도구를 제공하기 때문',
      '무작위 현상은 실제로 아무 규칙이 없기 때문',
      '수학은 확률적 현상을 다룰 수 없기 때문',
      '무작위성은 예측이 전혀 불가능한 개념이기 때문'
    ],
    answer: '확률과정론이 확률분포와 장기적 패턴을 정밀하게 분석하는 도구를 제공하기 때문',
    explanation: '개별 결과는 예측 불가능해도 확률적 패턴은 매우 정밀하게 분석 가능합니다.',
    difficulty: 'hard'
  },

  // 박사 - 대수적 위상수학 (phd-math-03)
  {
    id: 'phd-math-03-q01',
    type: 'short_answer',
    question: '공간 위의 폐곡선들을 변형 가능성에 따라 분류한 대수적 구조는?',
    options: [],
    answer: '기본군',
    explanation: '기본군은 공간 위의 고리들이 서로 연속적으로 변형 가능한지에 따라 분류하는 군입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-math-03-q02',
    type: 'multiple_choice',
    question: '원의 기본군은 무엇과 같은가?',
    options: ['정수의 덧셈군(ℤ)', '자명군', '실수 전체 집합', '자연수 집합'],
    answer: '정수의 덧셈군(ℤ)',
    explanation: '원의 기본군은 고리가 원을 몇 바퀴 감았는지로 분류되어 정수의 덧셈군과 같습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-03-q03',
    type: 'short_answer',
    question: '기본군보다 계산하기 쉬우면서도 공간의 위상적 정보를 담는 대수적 불변량은?',
    options: [],
    answer: '호몰로지군',
    explanation: '호몰로지군은 기본군보다 계산이 쉬우면서도 유용한 위상적 정보를 제공합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-03-q04',
    type: 'multiple_choice',
    question: '"두 공간의 오일러 지표가 같으면 두 공간은 반드시 위상동형이다"는 생각이 틀린 이유는?',
    options: [
      '오일러 지표는 하나의 불변량일 뿐이며 완전한 분류에는 여러 불변량이 필요하기 때문',
      '오일러 지표가 같으면 항상 완전히 같은 공간이기 때문',
      '오일러 지표는 위상수학과 무관하기 때문',
      '위상동형은 오일러 지표만으로 정의되기 때문'
    ],
    answer: '오일러 지표는 하나의 불변량일 뿐이며 완전한 분류에는 여러 불변량이 필요하기 때문',
    explanation: '완전한 위상적 분류를 위해서는 기본군, 호몰로지군 등 여러 불변량을 함께 고려해야 합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-03-q05',
    type: 'short_answer',
    question: '호몰로지를 이용해 데이터의 형태적 특징을 추출하는 현대적 응용 분야는?',
    options: [],
    answer: '위상 데이터 분석(TDA)',
    explanation: '위상 데이터 분석(TDA)은 호몰로지 개념을 이용해 복잡한 데이터의 형태적 특징을 추출하는 현대적 응용 분야입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-math-03-q06',
    type: 'multiple_choice',
    question: '구의 기본군은?',
    options: ['자명군(모든 고리가 한 점으로 수축 가능)', '정수의 덧셈군', '실수군', '무한군'],
    answer: '자명군(모든 고리가 한 점으로 수축 가능)',
    explanation: '구 표면 위의 모든 고리는 한 점으로 수축될 수 있어 구의 기본군은 자명군입니다.',
    difficulty: 'hard'
  },

  // 박사 - 후성유전학 (phd-bio-01)
  {
    id: 'phd-bio-01-q01',
    type: 'short_answer',
    question: 'DNA 서열의 변화 없이 유전자 발현을 조절하는 화학적 표지의 예를 하나 쓰시오.',
    options: [],
    answer: 'DNA 메틸화(또는 히스톤 변형)',
    explanation: 'DNA 메틸화와 히스톤 변형은 서열 변화 없이 유전자 발현을 조절하는 대표적인 후성유전학적 표지입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-bio-01-q02',
    type: 'multiple_choice',
    question: '"생물의 형질은 오직 DNA 염기서열만으로 완전히 결정된다"는 생각이 틀린 이유는?',
    options: [
      '후성유전학적 표지에 따라 같은 유전자라도 발현 정도와 시기가 달라질 수 있기 때문',
      'DNA 서열은 형질 결정과 전혀 관련이 없기 때문',
      '후성유전학적 조절은 실제로 존재하지 않기 때문',
      '모든 형질은 환경에만 의존하기 때문'
    ],
    answer: '후성유전학적 표지에 따라 같은 유전자라도 발현 정도와 시기가 달라질 수 있기 때문',
    explanation: '일란성 쌍둥이도 후성유전학적 차이로 서로 다른 표현형을 보일 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-01-q03',
    type: 'short_answer',
    question: '부모 중 한쪽에서 유래한 대립유전자만 발현되도록 표지되는 현상은?',
    options: [],
    answer: '게놈 각인',
    explanation: '게놈 각인은 부모 유래에 따라 대립유전자의 발현 여부가 달라지는 후성유전학적 현상입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-01-q04',
    type: 'multiple_choice',
    question: '"후천적으로 얻은 형질은 절대 자손에게 전달될 수 없다"는 전통적 견해에 대한 최근 연구 결과는?',
    options: [
      '제한적이지만 경세대 후성유전학적 전달의 증거가 일부 제시되고 있다',
      '완전히 확정적으로 증명되어 반박의 여지가 없다',
      '전혀 재검토되지 않고 있다',
      '라마르크의 용불용설이 완전히 옳았음을 증명했다'
    ],
    answer: '제한적이지만 경세대 후성유전학적 전달의 증거가 일부 제시되고 있다',
    explanation: '경세대 전달은 제한적이고 복잡한 현상으로, 라마르크의 이론과 동일시하는 것은 지나친 단순화입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-01-q05',
    type: 'short_answer',
    question: '암세포에서 흔히 관찰되는 후성유전학적 이상의 예는?',
    options: [],
    answer: '종양억제유전자의 비정상적 메틸화',
    explanation: '종양억제유전자가 비정상적으로 메틸화되어 발현이 억제되는 것은 암세포에서 흔히 관찰되는 후성유전학적 변화입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-01-q06',
    type: 'multiple_choice',
    question: '프래더-윌리 증후군과 안젤만 증후군이 보여주는 것은?',
    options: [
      '같은 부위의 결실이라도 부모의 유래에 따라 다른 질환을 일으키는 각인 효과',
      '두 증후군은 완전히 같은 질환이다',
      '유전자 결실은 항상 같은 결과를 낳는다',
      '부모의 유래는 질환 발생과 무관하다'
    ],
    answer: '같은 부위의 결실이라도 부모의 유래에 따라 다른 질환을 일으키는 각인 효과',
    explanation: '이 두 증후군은 게놈 각인 현상을 보여주는 대표적인 임상 사례입니다.',
    difficulty: 'hard'
  },

  // 박사 - 계통발생학 (phd-bio-02)
  {
    id: 'phd-bio-02-q01',
    type: 'short_answer',
    question: '생물들이 공통 조상으로부터 어떻게 갈라져 나왔는지 나타내는 그림은?',
    options: [],
    answer: '계통수',
    explanation: '계통수는 생물종 사이의 진화적 관계를 나뭇가지 모양으로 나타낸 그림입니다.',
    difficulty: 'easy'
  },
  {
    id: 'phd-bio-02-q02',
    type: 'multiple_choice',
    question: '"진화는 하등생물에서 고등생물로 일직선으로 발전하는 사다리 같은 과정이다"는 생각이 틀린 이유는?',
    options: [
      '진화는 공통조상에서 여러 방향으로 가지를 뻗어나가는 나무에 가깝기 때문',
      '진화는 실제로 사다리처럼 일직선으로 진행되기 때문',
      '오늘날 생물은 진화가 덜 된 상태이기 때문',
      '모든 생물은 같은 방향으로 진화하기 때문'
    ],
    answer: '진화는 공통조상에서 여러 방향으로 가지를 뻗어나가는 나무에 가깝기 때문',
    explanation: '오늘날 존재하는 모든 생물은 각자의 환경에 적응해온 동등하게 진화한 결과물입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-02-q03',
    type: 'short_answer',
    question: '특정 유전자의 돌연변이가 비교적 일정한 속도로 축적된다고 가정해 종분화 시기를 추정하는 방법은?',
    options: [],
    answer: '분자시계',
    explanation: '분자시계는 유전자 서열의 변화 속도를 이용해 종분화 시기를 추정하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-bio-02-q04',
    type: 'multiple_choice',
    question: '돌고래(포유류)와 상어(어류)가 비슷한 유선형 몸을 가지는 현상은?',
    options: ['수렴진화', '공통조상으로부터의 직접 유전', '동일한 계통', '우연한 형태적 일치'],
    answer: '수렴진화',
    explanation: '수렴진화는 비슷한 환경 압력에 대해 계통적으로 먼 생물들이 독립적으로 비슷한 형태로 적응하는 현상입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-bio-02-q05',
    type: 'short_answer',
    question: '"겉모습이 비슷하면 반드시 가까운 친척이다"는 생각이 틀린 이유는?',
    options: [],
    answer: '수렴진화로 인해 계통적으로 먼 생물도 비슷한 형태를 가질 수 있기 때문',
    explanation: '돌고래와 상어처럼 형태적 유사성이 항상 가까운 계통 관계를 의미하지는 않습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-02-q06',
    type: 'multiple_choice',
    question: '고래의 계통적 위치에 대한 올바른 설명은?',
    options: [
      '형태는 물고기와 비슷하지만 유전적으로는 육상 포유류에 가깝다',
      '고래는 어류에 속한다',
      '고래는 물고기와 계통적으로 가장 가깝다',
      '고래의 계통적 위치는 밝혀지지 않았다'
    ],
    answer: '형태는 물고기와 비슷하지만 유전적으로는 육상 포유류에 가깝다',
    explanation: '고래는 형태적으로 물고기와 유사하지만 계통적으로는 육상 포유류에서 진화했습니다.',
    difficulty: 'medium'
  },

  // 박사 - 합성생물학 (phd-bio-03)
  {
    id: 'phd-bio-03-q01',
    type: 'short_answer',
    question: '특정 DNA 서열을 정밀하게 자르고 편집할 수 있는 유전자 편집 도구는?',
    options: [],
    answer: 'CRISPR-Cas9',
    explanation: 'CRISPR-Cas9은 특정 DNA 서열을 정밀하게 표적해 편집할 수 있는 강력한 도구입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-bio-03-q02',
    type: 'multiple_choice',
    question: '"합성생물학은 유전공학과 완전히 동일한 것이다"는 생각이 부정확한 이유는?',
    options: [
      '합성생물학은 여러 표준화된 부품을 조합해 예측 가능한 복잡한 시스템을 설계하는 공학적 철학을 강조하기 때문',
      '합성생물학은 유전자 조작을 전혀 사용하지 않기 때문',
      '유전공학은 합성생물학보다 훨씬 최근에 등장했기 때문',
      '둘은 서로 완전히 무관한 분야이기 때문'
    ],
    answer: '합성생물학은 여러 표준화된 부품을 조합해 예측 가능한 복잡한 시스템을 설계하는 공학적 철학을 강조하기 때문',
    explanation: '합성생물학은 유전공학의 도구를 사용하지만 모듈화와 표준화라는 공학적 접근을 강조합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-03-q03',
    type: 'short_answer',
    question: 'CRISPR-Cas9의 정밀도와 관련한 중요한 연구 과제는?',
    options: [],
    answer: '오프타겟 효과(의도하지 않은 부위 편집)를 최소화하는 것',
    explanation: 'CRISPR-Cas9은 강력하지만 완벽하지 않아 오프타겟 효과를 줄이는 것이 중요한 과제입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-03-q04',
    type: 'multiple_choice',
    question: '"CRISPR는 어떤 유전자든 완벽하게 오류 없이 편집할 수 있다"는 생각이 틀린 이유는?',
    options: [
      '의도한 위치가 아닌 유사한 서열을 잘못 편집하는 오프타겟 효과가 발생할 수 있기 때문',
      'CRISPR는 편집 오류가 절대 발생하지 않기 때문',
      'CRISPR는 유전자 편집에 전혀 사용되지 않기 때문',
      '오프타겟 효과는 실제로 존재하지 않기 때문'
    ],
    answer: '의도한 위치가 아닌 유사한 서열을 잘못 편집하는 오프타겟 효과가 발생할 수 있기 때문',
    explanation: 'CRISPR-Cas9의 표적 특이성에는 한계가 있어 오프타겟 효과가 여전히 중요한 연구 과제입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-bio-03-q05',
    type: 'short_answer',
    question: '유전 회로 설계에 사용되는 표준화된 유전 부품의 예를 2가지 쓰시오.',
    options: [],
    answer: '프로모터, 리보솜결합부위 등',
    explanation: '프로모터와 리보솜결합부위 같은 표준화된 부품을 조합해 유전 회로를 설계합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-bio-03-q06',
    type: 'multiple_choice',
    question: '합성생물학으로 인슐린을 대량 생산하는 방법은?',
    options: [
      '미생물 균주에 유전 회로를 삽입해 인슐린을 생산하게 한다',
      '동물의 인슐린을 직접 추출만 한다',
      '화학적으로만 합성한다',
      '식물에서만 얻는다'
    ],
    answer: '미생물 균주에 유전 회로를 삽입해 인슐린을 생산하게 한다',
    explanation: '합성생물학 기술로 미생물을 조작해 인슐린 같은 유용 물질을 대량 생산할 수 있습니다.',
    difficulty: 'medium'
  },

  // 박사 - 지구시스템과학 (phd-earth-01)
  {
    id: 'phd-earth-01-q01',
    type: 'short_answer',
    question: '변화를 완화하는 방향으로 작용하는 되먹임을 무엇이라 하는가?',
    options: [],
    answer: '음의 되먹임',
    explanation: '음의 되먹임은 변화가 일어나면 그것을 상쇄하는 방향으로 작용하는 되먹임입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-01-q02',
    type: 'multiple_choice',
    question: '빙하-알베도 되먹임은 어떤 종류의 되먹임인가?',
    options: ['양의 되먹임(온난화 가속)', '음의 되먹임(온난화 완화)', '되먹임이 아니다', '무작위 되먹임'],
    answer: '양의 되먹임(온난화 가속)',
    explanation: '빙하가 녹으면 반사율이 줄어 태양복사를 더 흡수해 온난화가 가속되는 양의 되먹임입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-01-q03',
    type: 'short_answer',
    question: '"지구의 각 권역은 서로 독립적으로 작동한다"는 생각이 틀린 이유는?',
    options: [],
    answer: '해양의 CO₂ 흡수, 식물의 증산작용 등 여러 권역이 서로 밀접하게 상호작용하기 때문',
    explanation: '대기, 바다, 육지, 생물권은 서로 긴밀하게 연결되어 영향을 주고받습니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-01-q04',
    type: 'multiple_choice',
    question: '식물의 광합성 증가가 대기 중 CO₂를 더 흡수하는 것은 어떤 되먹임의 예인가?',
    options: ['음의 되먹임', '양의 되먹임', '되먹임이 아니다', '무작위 되먹임'],
    answer: '음의 되먹임',
    explanation: '이는 온난화를 완화하는 방향으로 작용하는 음의 되먹임의 예입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-01-q05',
    type: 'short_answer',
    question: '지구시스템 모델이 통합적으로 다루는 4가지 권역은?',
    options: [],
    answer: '대기권, 해양(수권), 빙권, 생물권',
    explanation: '지구시스템 모델은 대기-해양-빙권-생물권의 상호작용을 수치적으로 결합해 시뮬레이션합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-01-q06',
    type: 'multiple_choice',
    question: '아마존 열대우림 파괴가 지구시스템에 미치는 영향은?',
    options: [
      '지역 강수 패턴과 전 지구적 탄소 순환에 영향을 준다',
      '아무 영향도 없다',
      '오직 그 지역에만 국한된 영향을 미친다',
      '대기와는 전혀 무관하다'
    ],
    answer: '지역 강수 패턴과 전 지구적 탄소 순환에 영향을 준다',
    explanation: '열대우림은 지역 기후뿐 아니라 전 지구적 탄소 순환에도 중요한 역할을 합니다.',
    difficulty: 'medium'
  },

  // 박사 - 행성지질학 (phd-earth-02)
  {
    id: 'phd-earth-02-q01',
    type: 'short_answer',
    question: '단위 면적당 충돌구의 개수로 표면의 상대적 나이를 추정하는 방법은?',
    options: [],
    answer: '크레이터(충돌구) 계수법',
    explanation: '크레이터 계수법은 충돌구 밀도를 이용해 행성 표면의 상대적 나이를 추정하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-02-q02',
    type: 'multiple_choice',
    question: '화성 표면의 마른 하천 지형이 시사하는 것은?',
    options: [
      '과거 화성에 액체 물이 흘렀을 가능성',
      '화성에는 물이 전혀 존재한 적이 없다는 것',
      '화성 표면이 매우 최근에 형성되었다는 것',
      '화성에 판구조론이 활발히 일어난다는 것'
    ],
    answer: '과거 화성에 액체 물이 흘렀을 가능성',
    explanation: '마른 하천 지형은 과거 화성 표면에 액체 물이 흘렀음을 시사하는 중요한 증거입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-02-q03',
    type: 'short_answer',
    question: '"충돌구가 많으면 그 표면은 항상 매우 젊다"는 생각이 틀린 이유는?',
    options: [],
    answer: '충돌구가 많다는 것은 오히려 오랫동안 침식되지 않은 오래된 표면임을 시사하기 때문',
    explanation: '충돌구 밀도가 높을수록 지질활동 없이 오랫동안 보존된 오래된 표면임을 나타내며, 반대로 충돌구가 적으면 최근 지질활동(화산, 침식 등)으로 지워졌을 가능성이 있어 젊은 표면일 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-02-q04',
    type: 'multiple_choice',
    question: '유로파(목성의 위성)에서 추정되는 것은?',
    options: [
      '얼음 지각 아래 액체 바다가 있을 가능성',
      '표면 전체가 용암으로 덮여 있다는 것',
      '대기가 지구보다 두껍다는 것',
      '판구조론이 활발하다는 것'
    ],
    answer: '얼음 지각 아래 액체 바다가 있을 가능성',
    explanation: '유로파는 얼음 지각 아래에 액체 상태의 바다가 존재할 것으로 추정되는 목성의 위성입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-02-q05',
    type: 'short_answer',
    question: '행성지질학에서 표면 광물 조성을 추정하는 데 사용하는 방법은?',
    options: [],
    answer: '스펙트럼 원격탐사',
    explanation: '스펙트럼 원격탐사는 반사된 빛의 스펙트럼을 분석해 표면 광물 조성을 추정하는 방법입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-02-q06',
    type: 'multiple_choice',
    question: '"다른 행성의 지질학적 원리는 지구와 완전히 다르다"는 생각이 부정확한 이유는?',
    options: [
      '화산활동, 침식, 충돌구 형성 같은 기본 과정은 여러 천체에 공통된 물리·화학 법칙을 따르기 때문',
      '지질학적 원리는 지구에서만 적용되기 때문',
      '다른 행성에는 지질학적 과정이 전혀 없기 때문',
      '판구조론은 모든 행성에서 동일하게 일어나기 때문'
    ],
    answer: '화산활동, 침식, 충돌구 형성 같은 기본 과정은 여러 천체에 공통된 물리·화학 법칙을 따르기 때문',
    explanation: '판구조론처럼 지구에 특화된 현상도 있지만 기본적인 지질 과정은 여러 천체에 공통적으로 적용됩니다.',
    difficulty: 'hard'
  },

  // 박사 - 고지자기학 (phd-earth-03)
  {
    id: 'phd-earth-03-q01',
    type: 'short_answer',
    question: '암석이 형성될 때 기록된 당시 지구 자기장의 방향과 세기를 무엇이라 하는가?',
    options: [],
    answer: '잔류자기',
    explanation: '잔류자기는 암석 형성 시점의 지구 자기장이 자성 광물에 "동결"된 것입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-earth-03-q02',
    type: 'multiple_choice',
    question: '해양저의 고지자기 줄무늬가 뒷받침하는 것은?',
    options: ['해저확장과 지자기 역전', '대륙은 절대 움직이지 않는다는 것', '지구 자기장은 변하지 않는다는 것', '판구조론이 틀렸다는 것'],
    answer: '해저확장과 지자기 역전',
    explanation: '해양저의 대칭적인 고지자기 줄무늬는 해저확장설과 지자기 역전의 결정적 증거입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-03-q03',
    type: 'short_answer',
    question: '"암석의 자기 기록은 시간이 지나면 계속 변한다"는 생각이 틀린 이유는?',
    options: [],
    answer: '암석이 크게 재가열되지 않는 한 형성 당시의 잔류자기는 거의 변하지 않기 때문',
    explanation: '잔류자기의 안정성 덕분에 수백만 년 전의 자기장 기록을 오늘날에도 읽어낼 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-03-q04',
    type: 'multiple_choice',
    question: '겉보기 극이동 곡선이 실제로 반영하는 것은?',
    options: [
      '대륙 자체의 이동',
      '지자기극의 실제 이동',
      '지구 자전축의 변화만',
      '태양의 이동'
    ],
    answer: '대륙 자체의 이동',
    explanation: '겉보기 극이동 곡선은 실제로는 지자기극이 아니라 대륙 자체가 이동했음을 반영합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-03-q05',
    type: 'short_answer',
    question: '가장 최근의 지자기 역전의 이름과 대략적인 시기는?',
    options: [],
    answer: '브런즈-마츠야마 역전, 약 78만 년 전',
    explanation: '가장 최근의 지자기 역전은 브런즈-마츠야마 역전으로 약 78만 년 전에 일어났습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-earth-03-q06',
    type: 'multiple_choice',
    question: '"지자기 역전은 매우 규칙적인 주기로 일어난다"는 생각이 틀린 이유는?',
    options: [
      '역전 시기는 매우 불규칙하며 외핵의 유체 운동이 비선형적이고 카오스적이기 때문',
      '지자기 역전은 정확히 100만 년마다 일어나기 때문',
      '지자기 역전은 실제로 일어난 적이 없기 때문',
      '역전 주기는 태양 활동으로만 결정되기 때문'
    ],
    answer: '역전 시기는 매우 불규칙하며 외핵의 유체 운동이 비선형적이고 카오스적이기 때문',
    explanation: '지자기 역전의 시기는 매우 불규칙하며 외핵의 복잡한 유체 운동과 관련이 있습니다.',
    difficulty: 'hard'
  },

  // 박사 - 우주론 특강 (phd-astro-01)
  {
    id: 'phd-astro-01-q01',
    type: 'short_answer',
    question: '우주의 가속 팽창을 일으키는 정체불명의 에너지는?',
    options: [],
    answer: '암흑에너지',
    explanation: '암흑에너지는 우주의 가속 팽창을 일으키는 것으로 추정되는 정체불명의 에너지입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-01-q02',
    type: 'multiple_choice',
    question: '우주 가속 팽창을 발견하는 데 결정적인 역할을 한 관측 대상은?',
    options: ['Ia형 초신성', '우리은하의 별들', '태양계 행성', '지구의 대기'],
    answer: 'Ia형 초신성',
    explanation: 'Ia형 초신성은 항상 비슷한 밝기를 가지는 표준촛불로 사용되어 우주 가속 팽창 발견에 핵심적인 역할을 했습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-01-q03',
    type: 'short_answer',
    question: '"우주의 팽창은 시간이 지나며 항상 느려지고 있다"는 생각이 틀린 이유는?',
    options: [],
    answer: '약 50억 년 전부터는 암흑에너지의 영향으로 오히려 가속 팽창하고 있기 때문',
    explanation: '과거에는 물질의 중력으로 감속되었지만 최근에는 암흑에너지로 가속되고 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-01-q04',
    type: 'multiple_choice',
    question: '"암흑에너지와 암흑물질은 같은 것이다"는 생각이 틀린 이유는?',
    options: [
      '암흑물질은 중력으로 끌어당기고, 암흑에너지는 공간을 밀어내며 팽창을 가속하기 때문',
      '둘은 실제로 완전히 같은 개념이기 때문',
      '암흑물질은 존재하지 않기 때문',
      '암흑에너지는 물질의 일종이기 때문'
    ],
    answer: '암흑물질은 중력으로 끌어당기고, 암흑에너지는 공간을 밀어내며 팽창을 가속하기 때문',
    explanation: '암흑물질과 암흑에너지는 이름은 비슷하지만 우주에 미치는 영향이 정반대에 가깝습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-01-q05',
    type: 'short_answer',
    question: '가장 단순한 암흑에너지 모델은 무엇으로 표현되는가?',
    options: [],
    answer: '아인슈타인의 우주상수 Λ',
    explanation: '가장 단순한 암흑에너지 모델은 아인슈타인이 도입한 우주상수 Λ로 표현됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-01-q06',
    type: 'multiple_choice',
    question: '우주의 에너지 구성에서 암흑에너지가 차지하는 비율은 대략 얼마로 추정되는가?',
    options: ['약 68%', '약 5%', '약 27%', '약 100%'],
    answer: '약 68%',
    explanation: '우주는 약 68% 암흑에너지, 27% 암흑물질, 5% 일반물질로 구성된 것으로 추정됩니다.',
    difficulty: 'medium'
  },

  // 박사 - 외계행성 대기 분석 (phd-astro-02)
  {
    id: 'phd-astro-02-q01',
    type: 'short_answer',
    question: '외계행성이 항성 앞을 지날 때 별빛 스펙트럼을 분석해 대기 성분을 알아내는 방법은?',
    options: [],
    answer: '통과 분광법',
    explanation: '통과 분광법은 행성이 별 앞을 지날 때 대기를 통과한 별빛의 흡수선을 분석하는 방법입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-02-q02',
    type: 'multiple_choice',
    question: '"외계행성의 대기는 직접 가지 않고는 절대 알 수 없다"는 생각이 틀린 이유는?',
    options: [
      '통과 분광법으로 별빛에 남은 스펙트럼 흔적을 분석해 원격으로 대기 성분을 알 수 있기 때문',
      '외계행성의 대기는 어떤 방법으로도 알 수 없기 때문',
      '통과 분광법은 대기 성분과 무관하기 때문',
      '외계행성은 대기를 가지지 않기 때문'
    ],
    answer: '통과 분광법으로 별빛에 남은 스펙트럼 흔적을 분석해 원격으로 대기 성분을 알 수 있기 때문',
    explanation: '현대 천문학은 직접 방문하지 않고도 원격 분광 관측으로 외계행성 대기를 분석할 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-02-q03',
    type: 'short_answer',
    question: '생명체 존재를 암시할 수 있는 대기 성분 조합을 무엇이라 하는가?',
    options: [],
    answer: '바이오시그니처',
    explanation: '바이오시그니처는 생명체 존재를 암시할 수 있는 대기 성분(예: 산소와 메탄의 동시 존재)을 말합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-02-q04',
    type: 'multiple_choice',
    question: '"산소가 발견되면 그 자체로 생명체의 확실한 증거이다"는 생각이 틀린 이유는?',
    options: [
      '산소는 비생물학적 광화학 반응으로도 생성될 수 있기 때문',
      '산소는 생명체 없이는 절대 만들어질 수 없기 때문',
      '산소는 대기에서 발견될 수 없는 물질이기 때문',
      '바이오시그니처는 산소만으로 정의되기 때문'
    ],
    answer: '산소는 비생물학적 광화학 반응으로도 생성될 수 있기 때문',
    explanation: '산소만으로는 생명체 존재를 확신할 수 없으며 다른 분자와의 조합, 환경을 종합적으로 고려해야 합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-02-q05',
    type: 'short_answer',
    question: '여러 지구형 행성을 가진 것으로 유명한 외계 행성계는?',
    options: [],
    answer: 'TRAPPIST-1',
    explanation: 'TRAPPIST-1은 여러 개의 지구형 행성을 가진 대표적인 연구 대상 행성계입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-02-q06',
    type: 'multiple_choice',
    question: '외계행성 대기 관측에서 최근 활약하고 있는 최신 관측 장비는?',
    options: ['제임스웹우주망원경', '허블우주망원경만', '갈릴레오 망원경', '전파망원경만'],
    answer: '제임스웹우주망원경',
    explanation: '제임스웹우주망원경은 이전보다 훨씬 정밀한 외계행성 대기 스펙트럼을 제공하고 있습니다.',
    difficulty: 'medium'
  },

  // 박사 - 중력파 천문학 (phd-astro-03)
  {
    id: 'phd-astro-03-q01',
    type: 'short_answer',
    question: '2015년 최초로 중력파를 직접 검출한 관측소는?',
    options: [],
    answer: 'LIGO',
    explanation: 'LIGO는 2015년 두 블랙홀 병합에서 발생한 중력파를 최초로 직접 검출했습니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-03-q02',
    type: 'multiple_choice',
    question: '"중력파는 이론적으로만 존재하며 직접 관측된 적이 없다"는 생각이 틀린 이유는?',
    options: [
      '2015년 LIGO가 실제로 중력파를 직접 검출했기 때문',
      '중력파는 실제로 존재하지 않는 개념이기 때문',
      '중력파는 관측이 원천적으로 불가능하기 때문',
      '중력파는 전자기파와 동일하기 때문'
    ],
    answer: '2015년 LIGO가 실제로 중력파를 직접 검출했기 때문',
    explanation: '중력파는 더 이상 이론적 예측에 머물지 않고 여러 차례 직접 검출되었습니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-astro-03-q03',
    type: 'short_answer',
    question: '중력파와 전자기파가 동시에 관측된 대표적인 사건은?',
    options: [],
    answer: 'GW170817(중성자별 병합)',
    explanation: 'GW170817은 중력파와 감마선 폭발이 동시에 관측된 중성자별 병합 사건입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-03-q04',
    type: 'multiple_choice',
    question: '"중력파와 전자기파는 본질적으로 같은 것이다"는 생각이 틀린 이유는?',
    options: [
      '전자기파는 전하의 가속으로, 중력파는 질량의 비대칭적 가속으로 발생하는 전혀 다른 현상이기 때문',
      '둘은 완전히 동일한 물리적 현상이기 때문',
      '중력파는 실제로 전자기파의 일종이기 때문',
      '전자기파는 질량과 무관하게 발생하지 않기 때문'
    ],
    answer: '전자기파는 전하의 가속으로, 중력파는 질량의 비대칭적 가속으로 발생하는 전혀 다른 현상이기 때문',
    explanation: '중력파는 시공간 자체의 기하학적 요동으로, 전자기장의 파동인 전자기파와는 근본적으로 다릅니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-03-q05',
    type: 'short_answer',
    question: '중력파 검출 방법으로 팔 길이의 극도로 미세한 변화를 측정하는 장비는?',
    options: [],
    answer: '레이저 간섭계',
    explanation: '레이저 간섭계는 중력파가 지나갈 때 생기는 극도로 미세한 길이 변화를 측정합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-astro-03-q06',
    type: 'multiple_choice',
    question: '다중신호천문학이 의미하는 것은?',
    options: [
      '중력파와 전자기파를 함께 관측해 하나의 천체 사건을 다각도로 분석하는 것',
      '오직 중력파만 사용하는 관측 방법',
      '오직 전자기파만 사용하는 관측 방법',
      '천체를 관측하지 않는 이론적 방법'
    ],
    answer: '중력파와 전자기파를 함께 관측해 하나의 천체 사건을 다각도로 분석하는 것',
    explanation: '다중신호천문학은 여러 종류의 신호를 결합해 천체 현상을 더 풍부하게 이해하는 새로운 관측 패러다임입니다.',
    difficulty: 'hard'
  },

  // 박사 - 중개연구방법론 (phd-med-01)
  {
    id: 'phd-med-01-q01',
    type: 'short_answer',
    question: '세포·동물실험으로 안전성과 효능의 기초 자료를 얻는 단계는?',
    options: [],
    answer: '전임상시험',
    explanation: '전임상시험은 사람에게 적용하기 전 세포와 동물실험으로 기초 자료를 얻는 단계입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-med-01-q02',
    type: 'multiple_choice',
    question: '"실험실에서 효과가 있으면 곧바로 환자에게 사용해도 된다"는 생각이 틀린 이유는?',
    options: [
      '종간 차이, 용량 차이 등으로 전임상 결과가 임상시험에서 재현되지 않는 경우가 흔하기 때문',
      '전임상 결과는 항상 임상시험 결과와 완전히 일치하기 때문',
      '임상시험 단계는 불필요한 절차이기 때문',
      '동물실험과 인체 실험은 완전히 동일하기 때문'
    ],
    answer: '종간 차이, 용량 차이 등으로 전임상 결과가 임상시험에서 재현되지 않는 경우가 흔하기 때문',
    explanation: '탈리도마이드 사건처럼 종간 차이로 인해 단계적 검증이 필수적입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-01-q03',
    type: 'short_answer',
    question: '임상시험 1상의 주된 목적은?',
    options: [],
    answer: '안전성과 적정 용량 확인',
    explanation: '1상 임상시험은 주로 소수의 참가자를 대상으로 안전성과 적정 용량을 확인합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-med-01-q04',
    type: 'multiple_choice',
    question: '"임상시험의 모든 단계는 같은 목적을 가진다"는 생각이 틀린 이유는?',
    options: [
      '1상은 안전성, 2상은 효능 신호, 3상은 대규모 비교검증, 4상은 시판 후 감시로 목적이 다르기 때문',
      '모든 단계는 완전히 동일한 목적으로 설계되기 때문',
      '임상시험은 하나의 단계만 존재하기 때문',
      '단계별 목적 구분은 실제로 무의미하기 때문'
    ],
    answer: '1상은 안전성, 2상은 효능 신호, 3상은 대규모 비교검증, 4상은 시판 후 감시로 목적이 다르기 때문',
    explanation: '각 임상시험 단계는 서로 다른 구체적인 목적을 가지고 설계됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-01-q05',
    type: 'short_answer',
    question: '신약 개발에서 환자를 효율적으로 층화하는 데 핵심적인 역할을 하는 것은?',
    options: [],
    answer: '바이오마커',
    explanation: '바이오마커는 특정 치료에 잘 반응할 환자군을 미리 예측하는 데 활용됩니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-01-q06',
    type: 'multiple_choice',
    question: '중개연구(translational research)가 강조하는 다리 역할은?',
    options: [
      '기초연구에서 임상으로, 그리고 임상에서 실제 진료 현장으로의 양방향 연결',
      '오직 기초연구만을 위한 것',
      '오직 임상시험만을 위한 것',
      '연구와 진료는 완전히 분리되어야 한다는 것'
    ],
    answer: '기초연구에서 임상으로, 그리고 임상에서 실제 진료 현장으로의 양방향 연결',
    explanation: '중개연구는 T1(기초→임상)뿐 아니라 T2(임상→진료 현장)의 양방향 다리 역할을 강조합니다.',
    difficulty: 'hard'
  },

  // 박사 - 정밀의학 (phd-med-02)
  {
    id: 'phd-med-02-q01',
    type: 'short_answer',
    question: '특정 유전자 변이가 있는 환자군에게만 효과적인 항암제를 미리 선별하는 검사는?',
    options: [],
    answer: '동반진단',
    explanation: '동반진단은 특정 치료에 잘 반응할 환자를 미리 예측하는 검사입니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-med-02-q02',
    type: 'multiple_choice',
    question: '"정밀의학은 모든 사람에게 완전히 다른 치료법을 새로 만드는 것이다"는 생각이 부정확한 이유는?',
    options: [
      '기존 치료법과 약물 중에서 개별 환자에게 가장 적합한 것을 선택하고 최적화하는 접근에 가깝기 때문',
      '정밀의학은 매번 완전히 새로운 약을 발명하는 것이기 때문',
      '정밀의학은 기존 치료법을 전혀 사용하지 않기 때문',
      '정밀의학은 개인차를 고려하지 않기 때문'
    ],
    answer: '기존 치료법과 약물 중에서 개별 환자에게 가장 적합한 것을 선택하고 최적화하는 접근에 가깝기 때문',
    explanation: '정밀의학은 완전히 새로운 발명이 아니라 최적의 선택과 용량 조정에 가깝습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-02-q03',
    type: 'short_answer',
    question: 'HER2 양성 유방암 환자에게 효과적인 표적치료제는?',
    options: [],
    answer: '트라스투주맙',
    explanation: '트라스투주맙은 HER2 양성 유방암 환자에게 효과적인 대표적인 표적치료제입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-02-q04',
    type: 'multiple_choice',
    question: '"유전체 정보만 있으면 모든 질병을 완벽하게 예측할 수 있다"는 생각이 틀린 이유는?',
    options: [
      '대부분의 질병은 유전자와 환경적 요인이 복잡하게 상호작용한 결과이기 때문',
      '유전체 정보는 질병 예측과 전혀 무관하기 때문',
      '환경적 요인은 질병에 영향을 주지 않기 때문',
      '모든 질병은 순수하게 유전자로만 결정되기 때문'
    ],
    answer: '대부분의 질병은 유전자와 환경적 요인이 복잡하게 상호작용한 결과이기 때문',
    explanation: '유전체 정보는 매우 유용하지만 환경 요인과의 상호작용도 함께 고려해야 정확한 예측이 가능합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-02-q05',
    type: 'short_answer',
    question: '정밀의학이 활용하는 다양한 오믹스(omics) 데이터의 예를 2가지 쓰시오.',
    options: [],
    answer: '유전체, 단백체(또는 대사체)',
    explanation: '정밀의학은 유전체, 단백체, 대사체 등 다양한 오믹스 데이터를 통합 분석합니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-med-02-q06',
    type: 'multiple_choice',
    question: '약물유전체 검사를 통해 확인할 수 있는 것은?',
    options: [
      '특정 항응고제의 적정 용량 예측',
      '환자의 키와 몸무게',
      '환자의 취미',
      '병원의 위치'
    ],
    answer: '특정 항응고제의 적정 용량 예측',
    explanation: '약물유전체 검사는 개인의 유전형에 따라 적정 약물 용량을 예측하는 데 활용됩니다.',
    difficulty: 'medium'
  },

  // 박사 - 의생명통계학 (phd-med-03)
  {
    id: 'phd-med-03-q01',
    type: 'short_answer',
    question: '귀무가설이 참일 때 관찰된 결과가 나올 확률을 나타내는 통계량은?',
    options: [],
    answer: 'p값',
    explanation: 'p값은 귀무가설 하에서 관찰된(또는 더 극단적인) 결과가 나올 확률을 나타냅니다.',
    difficulty: 'medium'
  },
  {
    id: 'phd-med-03-q02',
    type: 'multiple_choice',
    question: '"p값이 0.05보다 작으면 그 결과는 의학적으로도 매우 중요한 효과이다"는 생각이 틀린 이유는?',
    options: [
      '매우 큰 표본에서는 임상적으로 무의미한 작은 차이도 통계적으로 유의하게 나타날 수 있기 때문',
      'p값은 항상 임상적 중요성과 정확히 일치하기 때문',
      'p값이 작으면 효과 크기도 항상 크기 때문',
      '통계적 유의성과 임상적 중요성은 같은 개념이기 때문'
    ],
    answer: '매우 큰 표본에서는 임상적으로 무의미한 작은 차이도 통계적으로 유의하게 나타날 수 있기 때문',
    explanation: 'p값이 작다는 것은 우연이 아니라는 의미이지 효과 크기가 크다는 의미는 아닙니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-03-q03',
    type: 'short_answer',
    question: '여러 하위그룹을 동시에 분석할 때 필요한 통계적 보정은?',
    options: [],
    answer: '다중비교 보정(예: 본페로니 보정)',
    explanation: '다중비교는 우연히 유의한 결과가 나올 확률을 높이므로 보정이 필요합니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-03-q04',
    type: 'multiple_choice',
    question: '"통계적으로 유의하지 않으면 효과가 전혀 없다는 것이 증명된 것이다"는 생각이 틀린 이유는?',
    options: [
      '현재 자료로 효과가 있다는 증거를 찾지 못했다는 의미일 뿐, 검정력 부족일 수도 있기 때문',
      '통계적으로 유의하지 않으면 항상 효과가 전혀 없다는 것이 확실히 증명되기 때문',
      '검정력은 결과 해석과 무관하기 때문',
      '유의하지 않은 결과는 항상 신뢰할 수 없기 때문'
    ],
    answer: '현재 자료로 효과가 있다는 증거를 찾지 못했다는 의미일 뿐, 검정력 부족일 수도 있기 때문',
    explanation: '유의하지 않은 결과는 효과가 없다는 증명이 아니라, 표본 크기 등의 한계일 수 있습니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-03-q05',
    type: 'short_answer',
    question: '암 치료 효과 비교에 흔히 사용되는 생존분석 그래프는?',
    options: [],
    answer: '카플란-마이어 생존곡선',
    explanation: '카플란-마이어 생존곡선은 시간에 따른 생존율을 시각화하는 대표적인 생존분석 도구입니다.',
    difficulty: 'hard'
  },
  {
    id: 'phd-med-03-q06',
    type: 'multiple_choice',
    question: '실제로 효과가 있을 때 이를 올바르게 검출할 확률을 무엇이라 하는가?',
    options: ['통계적 검정력', 'p값', '신뢰구간', '표본 크기'],
    answer: '통계적 검정력',
    explanation: '통계적 검정력은 실제 효과를 올바르게 검출할 확률로, 충분한 표본 크기가 이를 보장하는 데 중요합니다.',
    difficulty: 'hard'
  }
];

// ID로 빠르게 찾을 수 있도록 맵 생성
export const questionsMap = new Map(allQuestions.map(q => [q.id, q]));

export function getQuestionsByLessonId(lessonId: string): Question[] {
  const prefix = lessonId.split('-').slice(0, -1).join('-');
  return allQuestions.filter(q => q.id.startsWith(prefix));
}
