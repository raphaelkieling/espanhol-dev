/**
 * Content model shared by every module.
 * Text fields accept inline marks: **bold**, ~~strike~~, [[highlight|note]] and [link](url).
 */

export type Block =
  | { type: 'heading'; text: string }
  /** White card grouping related blocks, so each sub-topic reads as its own unit. */
  | { type: 'card'; title?: string; blocks: Block[] }
  | { type: 'text'; text: string }
  | { type: 'table'; columns: string[]; rows: string[][]; caption?: string }
  | { type: 'note'; tone?: 'tip' | 'warning'; title?: string; text: string }
  | { type: 'examples'; items: { es: string; pt?: string }[] }
  /**
   * Typing exercise: each sentence has a ___ gap and the learner types the missing word.
   * `answer` accepts alternatives; matching ignores case and accents.
   */
  | { type: 'fill'; items: { es: string; answer: string | string[]; pt?: string }[] }
  | {
      type: 'reading'
      title?: string
      /** Audio file path relative to /public, e.g. 'audio/el-dorado.mp3'. */
      audio?: string
      paragraphs: string[]
    }

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
  /** The module exam is generated from Module.exam and always comes last. */
  kind?: 'lesson' | 'exam'
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
  icon: string
  sections: Section[]
  /** Final exam covering the whole module. Passing requires every answer right. */
  exam?: Quiz
}

/** Vocabulary entry for the dictionary page (src/content/words.ts). */
export type Word = {
  /** Spanish word or expression, as the learner would look it up: 'todavía', 'hacer un deploy'. */
  es: string
  /** Where or how it's used at work, in Portuguese: 'Na daily, para falar do que falta'. */
  context: string
  /** Meaning in Portuguese. */
  pt: string
  /** 1–2 Spanish example sentences from real work situations. Accept inline marks. */
  examples: string[]
  /** Id of the module that teaches it. */
  module: number
}

/**
 * Flashcard for spaced repetition, built from a dictionary Word (src/content/flashcards.ts).
 * It joins the learner's deck once the exam of its module is passed.
 */
export type Flashcard = {
  /** Stable id: review history is saved under it. */
  id: string
  /** Spanish sentence with the tested word in bold, shown first. */
  front: string
  /** The word being tested, as in the dictionary. */
  word: string
  /** Meaning in Portuguese, shown after flipping. */
  back: string
  /** Where or how it's used, in Portuguese. */
  context: string
  /** Id of the module that unlocks it. */
  module: number
}
