import { useMemo, useSyncExternalStore } from 'react'
import { createEmptyCard, fsrs, State, type Card, type Grade } from 'ts-fsrs'
import { flashcards } from '../content/flashcards'
import { EXAM_SLUG } from '../content/helpers'
import { modules } from '../content/modules'
import type { Flashcard } from '../content/types'
import { useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'

/** FSRS scheduling state per flashcard id. Cards never reviewed have no entry. */
type Reviews = Record<string, Card>

const STORAGE_KEY = 'espanol-para-devs:flashcards:v2'
// v1 held the hand-written test cards, which no longer exist
localStorage.removeItem('espanol-para-devs:flashcards:v1')
const scheduler = fsrs()
const listeners = new Set<() => void>()

let cache: { raw: string | null; reviews: Reviews } | undefined

// JSON turns dates into strings; revive them so the rest of the app always sees Dates
const parse = (raw: string | null): Reviews => {
  try {
    const saved = JSON.parse(raw ?? '{}') as Record<string, Card>
    return Object.fromEntries(
      Object.entries(saved).map(([id, c]) => [id, { ...c, due: new Date(c.due), last_review: c.last_review && new Date(c.last_review) }]),
    )
  } catch {
    return {}
  }
}

const read = () => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (cache?.raw !== raw) cache = { raw, reviews: parse(raw) }
  return cache.reviews
}

const write = (reviews: Reviews) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  listeners.forEach((l) => l())
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export const clearReviews = () => {
  localStorage.removeItem(STORAGE_KEY)
  listeners.forEach((l) => l())
}

export type DeckCard = Flashcard & { state: Card }

/** Flashcards unlocked by passed module exams, with their scheduling state. */
export function useDeck() {
  const { isCompleted } = useProgress()
  const reviews = useSyncExternalStore(subscribe, read)

  const cards = useMemo(() => {
    const unlocked = new Set(modules.filter((m) => isCompleted(sectionKey(m.slug, EXAM_SLUG))).map((m) => m.id))
    return flashcards
      .filter((c) => unlocked.has(c.module))
      .map((c): DeckCard => ({ ...c, state: reviews[c.id] ?? createEmptyCard() }))
  }, [isCompleted, reviews])

  const review = (id: string, grade: Grade, now = new Date()) => {
    const current = read()[id] ?? createEmptyCard(now)
    const { card } = scheduler.next(current, now, grade)
    write({ ...read(), [id]: card })
    return card
  }

  return { cards, review }
}

export const isDue = (card: DeckCard, now = new Date()) => card.state.due.getTime() <= now.getTime()

/** Share of all course cards already reviewed once (seen) and graduated to review (learned). */
export function useDeckProgress() {
  const { cards } = useDeck()
  const seen = cards.filter((c) => c.state.state !== State.New).length
  const learned = cards.filter((c) => c.state.state === State.Review).length
  return { seen, learned, total: flashcards.length }
}
