import type { Question } from '../data/questions'

// 서술형/계산형 채점을 위한 정규화: 공백·구두점·대소문자 차이를 무시한다
function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s.,!?~·、。]/g, '')
    .replace(/^(약|대략|거의)/, '')
}

// 숫자 비교인 경우 근사값(허용 오차 2%)까지 정답으로 인정한다
function isNumericMatch(user: string, answer: string): boolean {
  const userNum = Number(user.replace(/[^0-9.\-]/g, ''))
  const answerNum = Number(answer.replace(/[^0-9.\-]/g, ''))
  if (Number.isNaN(userNum) || Number.isNaN(answerNum)) return false
  if (answerNum === 0) return userNum === 0
  return Math.abs(userNum - answerNum) / Math.abs(answerNum) <= 0.02
}

// 객관식은 정확히, 서술형·계산형은 관대함/엄격함 모드에 따라 채점한다
export function isAnswerCorrect(
  question: Question,
  userAnswer: string | undefined,
  mode: 'lenient' | 'strict' = 'lenient'
): boolean {
  if (!userAnswer || !userAnswer.trim()) return false

  if (question.type === 'multiple_choice') {
    return userAnswer === question.answer
  }

  const candidates = Array.isArray(question.answer) ? question.answer : [question.answer]
  const normalizedUser = normalize(userAnswer)

  return candidates.some((answer) => {
    const normalizedAnswer = normalize(answer)
    if (!normalizedAnswer) return false
    if (normalizedUser === normalizedAnswer) return true
    if (mode === 'strict') return false
    if (question.type === 'calculation' && isNumericMatch(userAnswer, answer)) return true
    // 서술형: 정답 핵심어를 포함하거나(사용자가 더 길게 답한 경우), 사용자의 답이 정답에 포함되는 경우(짧게 요약한 경우) 모두 인정
    return normalizedUser.includes(normalizedAnswer) || normalizedAnswer.includes(normalizedUser)
  })
}
