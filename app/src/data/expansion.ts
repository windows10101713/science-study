import type { Concept } from '../types'
import type { Question } from './questions'

const activity = (title: string, description: string, materials: string[], steps: string[]) => ({
  title,
  description,
  prediction: '조건을 바꾸면 관찰 결과에도 뚜렷한 차이가 나타날 것이다',
  materials,
  steps,
  safetyWarning: '실험 전 주변을 정리하고 보호 장비와 안전 수칙을 확인하세요.',
})

export const expandedLessons: Concept[] = [
  {
    id: 'elem-exp-01', subject: 'astronomy', grade: 4, level: 'basic', unit: '지구와 우주', title: '달의 모양 변화',
    summary: '달이 스스로 빛을 내는 것이 아니라 태양빛을 반사하며, 위치에 따라 보이는 모양이 달라진다.',
    keywords: ['달', '위상', '태양빛', '공전', '초승달'], misconceptions: ['달이 매일 모양을 바꾼다', '달의 그림자가 달 모양을 만든다'],
    explanation: { basic: '달은 태양빛을 반사합니다. 달이 지구 주위를 돌면서 밝게 보이는 부분의 모양이 달라집니다.', curriculum: '달의 위상은 태양-지구-달의 상대적 위치와 관측 방향으로 결정됩니다.', university: '삭망월은 약 29.5일이며 항성월과 다릅니다. 위상각과 조명률을 기하학적으로 계산할 수 있습니다.' },
    examples: ['초승달', '반달', '보름달'], observationActivity: activity('달 관찰 기록장', '한 달 동안 같은 시간에 달의 모양과 위치를 기록합니다.', ['관찰 기록지', '연필', '시계'], ['매일 같은 시간에 달을 찾습니다', '모양을 간단히 그립니다', '며칠 간격의 변화를 비교합니다']),
    questions: ['elem-exp-01-q01', 'elem-exp-01-q02', 'elem-exp-01-q03', 'elem-exp-01-q04']
  },
  {
    id: 'elem-exp-02', subject: 'chemistry', grade: 5, level: 'basic', unit: '물질의 성질', title: '용해와 용액',
    summary: '어떤 물질은 물에 녹아 고르게 섞이며, 온도와 저어 주는 정도에 따라 녹는 속도가 달라진다.',
    keywords: ['용해', '용질', '용매', '용액', '용해도'], misconceptions: ['녹으면 물질이 사라진다', '모든 고체는 물에 녹는다'],
    explanation: { basic: '설탕이 물에 녹으면 설탕물이라는 용액이 됩니다. 설탕은 용질, 물은 용매입니다.', curriculum: '용해는 입자가 용매 속에 고르게 퍼지는 과정이며 용해도는 조건에 따라 달라집니다.', university: '용해 과정은 용질-용매 상호작용과 엔탈피, 엔트로피 변화의 경쟁으로 설명할 수 있습니다.' },
    examples: ['소금물', '탄산음료', '식초'], observationActivity: activity('온도별 설탕 용해 비교', '차가운 물과 따뜻한 물에서 설탕이 녹는 시간을 비교합니다.', ['물', '설탕', '투명 컵', '온도계'], ['물의 양을 같게 합니다', '온도만 다르게 준비합니다', '같은 양의 설탕을 넣고 녹는 시간을 기록합니다']),
    questions: ['elem-exp-02-q01', 'elem-exp-02-q02', 'elem-exp-02-q03', 'elem-exp-02-q04']
  },
  {
    id: 'middle-exp-01', subject: 'biology', grade: 7, level: 'curriculum', unit: '생태계', title: '먹이그물과 생태계 평형',
    summary: '생태계의 생물은 먹이 관계로 연결되며 한 종의 변화가 다른 생물에게 연쇄적으로 영향을 준다.',
    keywords: ['생태계', '생산자', '소비자', '분해자', '먹이그물'], misconceptions: ['먹이사슬은 항상 한 줄이다', '분해자는 생태계에서 중요하지 않다'],
    explanation: { basic: '식물은 먹이를 만드는 생산자이고, 동물은 다른 생물을 먹는 소비자입니다. 죽은 생물을 분해자는 다시 자연으로 돌려보냅니다.', curriculum: '먹이그물은 여러 먹이사슬이 연결된 구조이며 에너지와 물질의 흐름을 함께 보여줍니다.', university: '영양 단계가 높아질수록 에너지 전달 효율이 감소하고 생태 피라미드의 크기가 제한됩니다.' },
    examples: ['풀-메뚜기-개구리-뱀', '숲의 탄소 순환', '부패한 낙엽'], observationActivity: activity('학교 주변 먹이그물 그리기', '주변에서 관찰되는 생물의 먹이 관계를 화살표로 연결합니다.', ['관찰 노트', '연필', '돋보기'], ['식물과 동물을 관찰합니다', '누가 누구를 먹는지 조사합니다', '여러 먹이사슬을 하나의 그물로 연결합니다']),
    questions: ['middle-exp-01-q01', 'middle-exp-01-q02', 'middle-exp-01-q03', 'middle-exp-01-q04']
  },
  {
    id: 'middle-exp-02', subject: 'physics', grade: 8, level: 'curriculum', unit: '전기와 자기', title: '전기 회로와 저항',
    summary: '전압은 전하를 움직이게 하는 원인이고, 전류와 저항의 관계는 옴의 법칙으로 표현된다.',
    keywords: ['전압', '전류', '저항', '직렬회로', '병렬회로'], misconceptions: ['전류는 전지에서 소모된다', '전구를 직렬로 연결하면 항상 더 밝다'],
    explanation: { basic: '전지는 전하를 움직이게 하고 전선 속에서 전류가 흐릅니다. 전구는 전류의 에너지를 빛과 열로 바꿉니다.', curriculum: '옴의 법칙은 V=IR이며 직렬 회로에서는 전류가 같고 병렬 회로에서는 각 가지의 전압이 같습니다.', university: '저항은 물질의 비저항과 형상으로 R=ρL/A로 나타내며 키르히호프 법칙으로 복잡한 회로를 해석합니다.' },
    examples: ['손전등', '가정용 병렬 배선', 'LED 회로'], observationActivity: activity('직렬·병렬 전구 비교', '같은 전지를 이용해 직렬과 병렬 연결의 밝기를 비교합니다.', ['건전지', '전구', '전선', '스위치'], ['직렬 회로를 구성합니다', '전구의 밝기를 기록합니다', '병렬 회로로 바꾸어 비교합니다']),
    questions: ['middle-exp-02-q01', 'middle-exp-02-q02', 'middle-exp-02-q03', 'middle-exp-02-q04']
  },
  {
    id: 'high-exp-01', subject: 'physics', grade: 10, level: 'advanced', unit: '파동과 빛', title: '파동의 간섭과 회절',
    summary: '파동은 서로 겹쳐질 때 보강 또는 상쇄 간섭을 만들고 좁은 틈을 지나며 회절한다.',
    keywords: ['파동', '간섭', '회절', '위상', '파장'], misconceptions: ['간섭 후 파동 에너지가 사라진다', '회절은 입자에서만 일어난다'],
    explanation: { basic: '두 물결이 만날 때 높이가 더해지면 보강되고 서로 지우면 상쇄됩니다.', curriculum: '경로차가 정수배 파장이면 보강, 반정수배면 상쇄 간섭이 나타납니다.', university: '중첩 원리와 푸리에 해석은 이중슬릿, 회절격자, 양자 확률진폭 해석의 공통 수학 구조입니다.' },
    examples: ['이중슬릿 무늬', '소음 제거 헤드폰', '비눗방울 색'], observationActivity: activity('물결 간섭 무늬 관찰', '두 점에서 만든 물결이 만나는 위치의 무늬를 관찰합니다.', ['얕은 투명 용기', '물', '스포이드 2개'], ['물을 얕게 담습니다', '두 지점을 같은 간격으로 톡 건드립니다', '마루와 골이 만나는 무늬를 스케치합니다']),
    questions: ['high-exp-01-q01', 'high-exp-01-q02', 'high-exp-01-q03', 'high-exp-01-q04']
  },
  {
    id: 'high-exp-02', subject: 'chemistry', grade: 11, level: 'advanced', unit: '반응과 에너지', title: '화학 평형과 르샤틀리에 원리',
    summary: '가역 반응은 정반응과 역반응이 같은 속도가 되는 동적 평형에 도달하며 조건 변화에 반응한다.',
    keywords: ['화학 평형', '가역 반응', '평형상수', '르샤틀리에', '촉매'], misconceptions: ['평형에서는 반응이 멈춘다', '촉매는 평형상수를 바꾼다'],
    explanation: { basic: '평형은 반응이 멈춘 상태가 아니라 양쪽 반응이 같은 속도로 계속되는 상태입니다.', curriculum: '농도, 압력, 온도 변화에 따라 평형의 위치가 이동하며 촉매는 평형 도달 시간을 줄입니다.', university: '평형상수는 활동도 비로 정의되고 반트호프 식은 온도에 따른 K 변화를 설명합니다.' },
    examples: ['암모니아 합성', '탄산음료의 CO₂ 평형', '산-염기 완충 용액'], observationActivity: activity('탄산음료 기체 평형 관찰', '뚜껑을 열기 전후의 기포와 압력 변화를 관찰합니다.', ['탄산음료', '투명 컵', '온도계'], ['차가운 음료를 준비합니다', '개봉 순간을 관찰합니다', '시간에 따른 기포 변화를 기록합니다']),
    questions: ['high-exp-02-q01', 'high-exp-02-q02', 'high-exp-02-q03', 'high-exp-02-q04']
  },
  {
    id: 'master-exp-01', subject: 'math', grade: 16, level: 'expert', unit: '확률과 통계', title: '베이즈 추론과 사후확률',
    summary: '새로운 증거가 들어올 때 사전확률을 갱신하여 가설의 사후확률을 계산한다.',
    keywords: ['베이즈 정리', '사전확률', '우도', '사후확률', '조건부확률'], misconceptions: ['검사 양성이면 질병 확률은 항상 높다', '사전확률은 주관적이라 쓸 수 없다'],
    explanation: { basic: '어떤 일이 일어날 가능성과 새로운 단서를 함께 사용해 판단을 업데이트하는 방법입니다.', curriculum: 'P(A|B)=P(B|A)P(A)/P(B)로 관측된 증거 B 아래에서 가설 A의 확률을 구합니다.', university: '계층 베이즈 모델과 MCMC는 불확실성을 포함한 매개변수 추정에 사용됩니다.' },
    examples: ['의료 검사 해석', '스팸 필터', '센서 융합'], observationActivity: activity('검사 정확도 표 만들기', '유병률과 검사 민감도·특이도를 바꿔 양성예측도를 비교합니다.', ['계산기', '스프레드시트 또는 종이'], ['가상의 1만 명 집단을 정합니다', '질병 보유자와 비보유자를 나눕니다', '검사 결과별 실제 환자 수를 계산합니다']),
    questions: ['master-exp-01-q01', 'master-exp-01-q02', 'master-exp-01-q03', 'master-exp-01-q04']
  },
  {
    id: 'master-exp-02', subject: 'biology', grade: 17, level: 'expert', unit: '분자생물학', title: '유전자 발현 조절',
    summary: '세포는 전사인자와 후성유전 조절을 이용해 필요한 유전자만 선택적으로 발현한다.',
    keywords: ['전사인자', '프로모터', '후성유전', '메틸화', '오페론'], misconceptions: ['모든 세포는 같은 유전자를 같은 양으로 사용한다', 'DNA 메틸화는 항상 유전자 발현을 높인다'],
    explanation: { basic: '몸의 세포는 같은 DNA를 가지고 있어도 사용하는 유전자가 달라 서로 다른 기능을 합니다.', curriculum: '프로모터, 인핸서, 전사인자와 염색질 상태가 RNA 중합효소의 접근성을 조절합니다.', university: '히스톤 변형과 DNA 메틸화, 3차원 게놈 구조가 전사 네트워크의 동역학을 결정합니다.' },
    examples: ['줄기세포 분화', '락 오페론', '암세포의 유전자 침묵'], observationActivity: activity('공개 발현 데이터 비교', '두 조직의 유전자 발현 표를 비교해 공통·특이 유전자를 찾습니다.', ['발현 데이터 표', '그래프 용지', '계산기'], ['두 조직의 값을 정리합니다', '차이가 큰 유전자를 표시합니다', '가능한 생물학적 기능을 추론합니다']),
    questions: ['master-exp-02-q01', 'master-exp-02-q02', 'master-exp-02-q03', 'master-exp-02-q04']
  },
  {
    id: 'phd-exp-01', subject: 'earthscience', grade: 19, level: 'research', unit: '기후과학', title: '기후 피드백과 불확실성',
    summary: '기후 시스템의 양의·음의 피드백은 외부 강제력에 대한 지구 온도 반응을 증폭하거나 완화한다.',
    keywords: ['기후 피드백', '알베도', '수증기', '복사강제력', '불확실성'], misconceptions: ['모든 피드백은 변화를 줄인다', '모델 불확실성은 과학적 무지를 뜻한다'],
    explanation: { basic: '얼음이 녹으면 햇빛을 덜 반사해 더 따뜻해지는 것처럼 변화가 스스로 커질 수 있습니다.', curriculum: '얼음-알베도와 수증기 피드백은 양의 피드백이고 복사·대류 과정은 기후 민감도에 영향을 줍니다.', university: '기후 민감도는 에너지수지 모델과 결합모델에서 매개변수·구조·시나리오 불확실성으로 분해됩니다.' },
    examples: ['빙하 감소', '구름 피드백', '해수면 상승'], observationActivity: activity('간단한 알베도 모델', '밝은 표면과 어두운 표면의 가열 속도를 비교해 반사율 효과를 살핍니다.', ['램프', '흰 종이', '검은 종이', '온도계'], ['두 표면을 같은 거리에서 비춥니다', '일정 시간 간격으로 온도를 잽니다', '반사율과 온도 상승을 비교합니다']),
    questions: ['phd-exp-01-q01', 'phd-exp-01-q02', 'phd-exp-01-q03', 'phd-exp-01-q04']
  },
  {
    id: 'phd-exp-02', subject: 'medicine', grade: 20, level: 'research', unit: '신경과학', title: '신경가소성과 학습',
    summary: '신경회로는 경험과 반복에 따라 연결 강도와 구조가 변하며 기억 형성의 기반이 된다.',
    keywords: ['신경가소성', 'LTP', '시냅스', '해마', '기억'], misconceptions: ['성인이 되면 뇌 연결은 변하지 않는다', '기억은 한 곳에만 저장된다'],
    explanation: { basic: '새로운 것을 반복해 연습하면 뇌의 신경세포 연결이 더 효율적으로 바뀔 수 있습니다.', curriculum: '장기강화는 특정 시냅스의 반응성이 오래 증가하는 현상이며 학습의 세포 수준 모델입니다.', university: 'NMDA 수용체, Ca²⁺ 신호, AMPA 수용체 삽입과 단백질 합성이 LTP의 단계별 기전을 이룹니다.' },
    examples: ['운동 기술 학습', '간격 반복', '수면과 기억 고정'], observationActivity: activity('간격 반복 기억 실험', '같은 단어를 몰아서 외울 때와 간격을 두고 외울 때 회상률을 비교합니다.', ['단어 목록', '타이머', '기록지'], ['두 학습 조건을 준비합니다', '즉시 회상과 다음 날 회상을 측정합니다', '학습 간격과 기억률을 비교합니다']),
    questions: ['phd-exp-02-q01', 'phd-exp-02-q02', 'phd-exp-02-q03', 'phd-exp-02-q04']
  }
]

const questionSets: Array<{ lessonId: string; title: string; key: string }> = [
  { lessonId: 'elem-exp-01', title: '달의 모양 변화', key: '달의 위상' },
  { lessonId: 'elem-exp-02', title: '용해와 용액', key: '용질과 용매' },
  { lessonId: 'middle-exp-01', title: '먹이그물과 생태계 평형', key: '생태계의 상호작용' },
  { lessonId: 'middle-exp-02', title: '전기 회로와 저항', key: '옴의 법칙' },
  { lessonId: 'high-exp-01', title: '파동의 간섭과 회절', key: '중첩 원리' },
  { lessonId: 'high-exp-02', title: '화학 평형과 르샤틀리에 원리', key: '동적 평형' },
  { lessonId: 'master-exp-01', title: '베이즈 추론과 사후확률', key: '조건부확률' },
  { lessonId: 'master-exp-02', title: '유전자 발현 조절', key: '선택적 발현' },
  { lessonId: 'phd-exp-01', title: '기후 피드백과 불확실성', key: '기후 피드백' },
  { lessonId: 'phd-exp-02', title: '신경가소성과 학습', key: '신경가소성' },
]

export const expandedQuestions: Question[] = questionSets.flatMap(({ lessonId, title, key }) => [
  { id: `${lessonId}-q01`, type: 'multiple_choice', question: `${title}의 핵심 개념으로 가장 알맞은 것은?`, options: [key, '관찰과 무관한 임의의 현상', '항상 변하지 않는 고정값', '측정할 수 없는 추측'], answer: key, explanation: `${title}을 이해하려면 ${key}의 정의와 조건을 먼저 확인해야 합니다.`, difficulty: 'easy' },
  { id: `${lessonId}-q02`, type: 'short_answer', question: `${title}을 설명할 때 반드시 포함해야 하는 핵심 용어는?`, options: [], answer: key, explanation: `핵심 용어인 ${key}가 현상의 원인과 결과를 연결합니다.`, difficulty: 'medium' },
  { id: `${lessonId}-q03`, type: 'multiple_choice', question: `${title}에 대한 설명 중 올바른 것은?`, options: ['조건과 맥락에 따라 결과가 달라질 수 있다', '관찰 없이 결과를 확정할 수 있다', '모든 상황에서 같은 결과만 나온다', '증거보다 직관이 항상 우선한다'], answer: '조건과 맥락에 따라 결과가 달라질 수 있다', explanation: '과학적 설명은 조건, 측정, 증거를 함께 고려해야 합니다.', difficulty: 'medium' },
  { id: `${lessonId}-q04`, type: 'short_answer', question: `${title}을 실제 사례에 적용할 때 확인할 것은?`, options: [], answer: '조건과 근거', explanation: '실제 사례에서는 적용 조건과 관찰 근거를 함께 확인해야 과도한 일반화를 피할 수 있습니다.', difficulty: 'hard' },
])
