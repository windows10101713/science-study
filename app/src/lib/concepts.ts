import type { CustomConcept } from '../types'

const customConceptsKey = 'customConcepts'

export function getCustomConcepts(): CustomConcept[] {
  try {
    return JSON.parse(localStorage.getItem(customConceptsKey) || '[]') as CustomConcept[]
  } catch {
    return []
  }
}

export function saveCustomConcept(concept: CustomConcept) {
  localStorage.setItem(customConceptsKey, JSON.stringify([...getCustomConcepts(), concept]))
}

export function getCustomConcept(id: string) {
  return getCustomConcepts().find((concept) => concept.id === id)
}