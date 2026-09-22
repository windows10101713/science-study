import { SUBJECTS, LEVELS } from './subjects'
import type { Concept } from '../types'
import type { Question } from './questions'

const topicsBySubject: Record<string, string[]> = {
  physics: ['운동학', '뉴턴 역학', '일과 에너지', '운동량과 충돌', '회전 운동', '열과 통계물리', '전기장과 전위', '전자기 유도', '파동과 광학', '현대 물리'],
  chemistry: ['원자 구조', '주기율과 결합', '화학량론', '기체와 용액', '열화학', '반응속도론', '산염기 평형', '전기화학', '유기 반응', '분석화학'],
  math: ['수와 함수', '방정식과 부등식', '기하와 벡터', '수열과 급수', '미분법', '적분법', '선형대수', '확률과 통계', '수치해석', '수리 모델링'],
  biology: ['세포 구조', '생체분자', '유전과 DNA', '진화와 계통', '생태계', '식물 생리', '동물 생리', '미생물학', '신경과학', '생명정보학'],
  earthscience: ['지구 시스템', '광물과 암석', '지질 구조', '판구조론', '대기와 날씨', '해양과 순환', '기후 변화', '지진과 화산', '지질시대', '환경과 자원'],
  astronomy: ['천체 관측', '태양계', '달과 행성', '별의 탄생', '별의 진화', '은하', '우주론', '중력과 시공간', '외계행성', '우주생물학'],
  medicine: ['인체 구조', '항상성과 건강', '혈액과 순환', '호흡과 대사', '면역과 감염', '신경계', '내분비계', '약리학', '역학과 예방', '의생명 연구'],
  engineering: ['공학 설계', '재료공학', '회로와 전자', '제어공학', '로봇공학', '열유체 시스템', '구조와 역학', '환경공학', '컴퓨터 시스템', '바이오공학'],
  programming: ['Python 기초', 'C 언어', 'HTML과 CSS', 'Java 프로그래밍', 'JavaScript', '자료구조', '알고리즘', '객체지향 설계', '웹 개발', '소프트웨어 테스트'],
  computer: ['컴퓨터 구조', '운영체제', '데이터베이스', '컴퓨터 네트워크', '인공지능', '컴파일러', '보안과 암호', '분산시스템', '그래픽스', '휴먼컴퓨터상호작용'],
  networking: ['인터넷 구조', 'OSI와 TCP/IP', 'IP 주소와 서브넷', '라우팅', '스위칭과 VLAN', 'Wi-Fi 전파', '무선 보안', 'DNS와 DHCP', '클라우드 네트워크', '네트워크 모니터링'],
  electronics: ['전압과 전류', '다이오드', '트랜지스터', '연산증폭기', '디지털 논리', '마이크로컨트롤러', '센서 회로', 'PCB 설계', '전력전자', '임베디드 시스템'],
  datascience: ['데이터 수집', '정제와 전처리', '확률과 통계', '시각화', '회귀분석', '분류모델', '군집화', '머신러닝 평가', '딥러닝 기초', '데이터 윤리'],
}

const levelDescriptions: Record<string, { unit: string; basic: string; curriculum: string; advanced: string }> = {
  elementary: { unit: '관찰과 기초 개념', basic: '주변에서 볼 수 있는 사례와 간단한 관찰로 핵심 개념을 이해합니다.', curriculum: '용어와 대표 원리를 그림과 활동으로 정리합니다.', advanced: '간단한 수치와 증거를 사용해 현상을 설명합니다.' },
  middle: { unit: '핵심 원리와 적용', basic: '일상 사례에서 원인을 찾아 개념의 의미를 설명합니다.', curriculum: '변인과 관계를 구분하고 기본 법칙을 적용합니다.', advanced: '자료를 비교하고 조건에 따른 결과를 예측합니다.' },
  high: { unit: '수식과 모델', basic: '현상을 모델과 변수의 관계로 표현합니다.', curriculum: '공식과 그래프를 이용해 정량적으로 분석합니다.', advanced: '가정과 한계를 평가하며 여러 개념을 연결합니다.' },
  master: { unit: '이론과 방법론', basic: '전문 개념을 구조화하고 관련 이론을 비교합니다.', curriculum: '수학적 형식과 실험 설계를 사용해 문제를 분석합니다.', advanced: '모델의 가정, 오차, 재현성을 비판적으로 평가합니다.' },
  phd: { unit: '연구와 증거', basic: '연구 질문과 기존 이론의 관계를 정리합니다.', curriculum: '연구 설계, 데이터, 통계적 추론을 연결합니다.', advanced: '문헌의 한계와 새로운 검증 가능 가설을 제안합니다.' },
}

const buildQuestions = (id: string, title: string, topic: string): Question[] => [
  { id: `${id}-q01`, type: 'multiple_choice', question: `${title}에서 가장 먼저 확인해야 할 핵심 개념은?`, options: [topic, '근거 없이 정한 결론', '측정과 무관한 의견', '항상 고정된 결과'], answer: topic, explanation: `${topic}의 정의와 적용 조건을 확인하는 것이 이 단원의 출발점입니다.`, difficulty: 'easy' },
  { id: `${id}-q02`, type: 'short_answer', question: `${title}을 설명할 때 사용할 핵심 키워드는?`, options: [], answer: topic, explanation: `핵심 키워드 ${topic}를 원인, 과정, 결과와 연결해 설명해야 합니다.`, difficulty: 'medium' },
  { id: `${id}-q03`, type: 'multiple_choice', question: `${title}에 대한 과학적 설명으로 가장 적절한 것은?`, options: ['조건과 증거를 함께 제시한다', '관찰 없이 결론을 확정한다', '한 사례를 모든 상황에 적용한다', '반례를 무시한다'], answer: '조건과 증거를 함께 제시한다', explanation: '과학적 주장은 조건과 관찰 가능한 증거를 바탕으로 검토해야 합니다.', difficulty: 'medium' },
  { id: `${id}-q04`, type: 'calculation', question: `${title}의 결과를 비교할 때 가장 먼저 정해야 하는 것은?`, options: [], answer: '변인과 측정 기준', explanation: '비교 가능한 자료를 만들려면 독립변인, 종속변인, 측정 기준을 먼저 정해야 합니다.', difficulty: 'hard' },
]

export const generatedQuestions: Question[] = []

export const generatedLessons: Concept[] = SUBJECTS.flatMap((subject) => {
  const topics = topicsBySubject[subject.id] || topicsBySubject.physics
  return LEVELS.flatMap((level) => {
    const guide = levelDescriptions[level.id]
    return topics.map((topic, index) => {
      const id = `catalog-${subject.id}-${level.id}-${String(index + 1).padStart(2, '0')}`
      const title = `${topic}: ${level.label} 탐구 ${index + 1}`
      const questions = buildQuestions(id, title, topic)
      generatedQuestions.push(...questions)
      return {
        id,
        subject: subject.id,
        grade: level.min + (index % Math.max(1, level.max - level.min + 1)),
        level: level.conceptLevel,
        unit: guide.unit,
        title,
        summary: `${subject.label}의 ${topic}을(를) ${level.label} 수준에서 단계적으로 탐구합니다.`,
        keywords: [topic, subject.label, level.label, '탐구', '증거'],
        misconceptions: [`${topic}은 배경 지식 없이도 완전히 이해할 수 있다`, '하나의 사례가 모든 조건을 설명한다'],
        explanation: {
          basic: guide.basic,
          curriculum: `${guide.curriculum} 이 레슨에서는 ${topic}의 핵심 용어와 대표 사례를 연결합니다.`,
          university: `${guide.advanced} ${topic}을 연구 질문, 모델, 자료 해석의 관점에서 확장합니다.`,
        },
        deepDive: [
          `${topic}은 ${subject.label}에서 반복적으로 등장하는 핵심 주제입니다. 정의만 외우기보다 관찰 가능한 현상과 연결해야 합니다.`,
          `${level.label} 수준에서는 조건을 명확히 하고, 자료의 출처와 측정 방법을 확인하는 습관이 중요합니다.`,
        ],
        examples: [`${topic}의 일상 사례 관찰`, `${topic} 관련 자료를 표와 그래프로 정리`, `${topic}의 조건을 바꾼 비교 실험`],
        observationActivity: {
          title: `${topic} 탐구 설계하기`,
          description: `${topic}에 관한 질문을 정하고 변인과 관찰 기준을 설계합니다.`,
          prediction: '조건을 명확히 하면 결과를 더 정확히 비교할 수 있을 것이다',
          materials: ['기록지', '계산기', '관찰 자료'],
          steps: ['1. 탐구 질문을 정합니다', '2. 독립변인과 종속변인을 구분합니다', '3. 자료를 기록하고 표로 정리합니다', '4. 결과와 한계를 해석합니다'],
          safetyWarning: '실험이 필요한 경우 지도자와 안전 수칙을 먼저 확인하세요.',
        },
        questions: questions.map((question) => question.id),
      }
    })
  })
})
