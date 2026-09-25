/**
 * Content model shared by every module.
 * Text fields accept inline marks: **bold** and ~~strike~~.
 */

export type Block =
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'table'; columns: string[]; rows: string[][]; caption?: string }
  | { type: 'note'; tone?: 'tip' | 'warning'; title?: string; text: string }
  | { type: 'examples'; items: { es: string; pt?: string }[] }

export type Question = {
  prompt: string
  options: string[]
  /** Index of the correct option. */
  answer: number
  explanation?: string
}

export type Quiz = {
  questions: Question[]
  /** Fraction of correct answers needed to pass. Defaults to 0.8. */
  passScore?: number
}

export type Section = {
  slug: string
  title: string
  summary?: string
  /** Sections without blocks are listed as upcoming. */
  blocks?: Block[]
  quiz?: Quiz
}

export type Module = {
  id: number
  slug: string
  title: string
  subtitle: string
  days: string
  icon: string
  sections: Section[]
}
