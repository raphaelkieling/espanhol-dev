import { slugify } from './helpers'
import type { Flashcard } from './types'
import { words } from './words'

/**
 * One card per dictionary word. The front is the word's first example, so the
 * learner recalls the meaning from context instead of from the bare word.
 */
export const flashcards: Flashcard[] = words.map((w) => ({
  id: slugify(w.es),
  front: w.examples[0],
  word: w.es,
  back: w.pt,
  context: w.context,
  module: w.module,
}))
