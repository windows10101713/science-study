import type { Concept } from '../types'
import type { Question } from './questions'
import { SUBJECTS, LEVELS } from './subjects'
import { curatedLibraryBooks } from './curatedLibrary'

const gradeByLevel = { elementary: 5, middle: 8, high: 11, master: 16, phd: 19 } as const
const levelOrder = ['elementary', 'middle', 'high', 'master', 'phd'] as const

function lessonFromBook(book: (typeof curatedLibraryBooks)[number], levelId: typeof levelOrder[number], index: number): Concept {
  const level = LEVELS.find((item) => item.id === levelId)!
  const firstChapter = book.chapters[0]
  const secondChapter = book.chapters[1]
  const id = `curated-lesson-${book.subject}-${index + 1}`
  return {
    id,
    subject: book.subject,
    grade: gradeByLevel[levelId],
    level: level.conceptLevel,
    unit: book.title,
    title: `${book.title}: 핵심 레슨`,
    summary: book.description,
    keywords: [...(firstChapter.keyTerms || []), book.title].slice(0, 6),
    misconceptions: ['공식이나 용어만 외우면 조건을 확인하지 않아도 된다', '한 사례의 결과를 모든 상황에 그대로 적용할 수 있다'],
    explanation: {
      basic: `${book.title}은(는) ${book.description} 먼저 핵심 용어와 관찰 대상을 구분해 보세요.`,
      curriculum: `${firstChapter.content}\n\n${secondChapter.content}`,
      university: `${firstChapter.content}\n\n${secondChapter.content}\n\n이론의 가정과 적용 한계를 자료와 수식으로 검토하고, 다른 조건에서 결과가 어떻게 달라지는지 분석합니다.`,
    },
    deepDive: book.chapters.slice(2, 5).map((chapter) => chapter.content),
    examples: book.chapters.slice(0, 3).map((chapter) => chapter.title),
    observationActivity: {
      title: `${book.title} 자료 분석 활동`,
      description: `${book.title}의 핵심 현상을 자료, 수식, 모형 또는 코드로 확인합니다.`,
      prediction: '조건과 변인을 명확히 하면 결과의 차이를 설명할 수 있을 것이다.',
      materials: ['기록지', '계산기 또는 스프레드시트', '관련 도서 챕터'],
      steps: ['1. 첫 챕터의 핵심 개념을 정의합니다.', '2. 바꿀 변인과 고정할 조건을 정합니다.', '3. 자료를 표나 코드로 기록합니다.', '4. 결과와 오차, 모델의 한계를 설명합니다.'],
      safetyWarning: book.subject === 'medicine' ? '실제 진단이나 처치를 대신하지 않으며 의료 정보는 전문가와 확인하세요.' : '실험 장비를 사용할 때는 해당 장비의 안전 지침을 따르세요.',
    },
    questions: Array.from({ length: 4 }, (_, questionIndex) => `${id}-q0${questionIndex + 1}`),
  }
}

export const curatedLessons: Concept[] = SUBJECTS.flatMap((subject) => {
  const books = curatedLibraryBooks.filter((book) => book.subject === subject.id).slice(0, 7)
  return books.map((book, index) => lessonFromBook(book, levelOrder[index % levelOrder.length], index))
})

export const curatedQuestions: Question[] = curatedLessons.flatMap((lesson) => {
  const focus = lesson.keywords[0] || lesson.title
  return [
    { id: `${lesson.id}-q01`, type: 'multiple_choice', question: `${lesson.title}에서 가장 먼저 확인해야 할 것은?`, options: [focus, '조건과 무관한 결론', '측정할 수 없는 주장', '반례를 무시한 설명'], answer: focus, explanation: `이 레슨은 ${focus}의 뜻과 적용 조건을 확인하는 데서 시작합니다.`, difficulty: 'easy' },
    { id: `${lesson.id}-q02`, type: 'short_answer', question: `${lesson.title}의 핵심 내용을 자신의 말로 정의해 보세요.`, options: [], answer: focus, explanation: `핵심 용어 ${focus}를 원인·과정·결과와 연결해 설명해야 합니다.`, difficulty: 'medium' },
    { id: `${lesson.id}-q03`, type: 'multiple_choice', question: '과학적 설명을 검증할 때 가장 적절한 방법은?', options: ['조건과 측정 방법을 공개하고 반복한다', '한 번의 관찰만으로 확정한다', '반대 자료를 제외한다', '단위를 생략한다'], answer: '조건과 측정 방법을 공개하고 반복한다', explanation: '반복과 조건 공개가 다른 사람이 결과를 검토할 수 있게 합니다.', difficulty: 'medium' },
    { id: `${lesson.id}-q04`, type: 'short_answer', question: `${lesson.title}의 적용 한계를 확인하기 위해 바꿔 볼 조건은?`, options: [], answer: '변인과 조건', explanation: '조건을 바꾸어 결과가 유지되는지 확인하면 모델의 적용 범위를 알 수 있습니다.', difficulty: 'hard' },
  ]
})
