import { createContext } from 'react'

export type ProgressContextValue = {
  isCompleted: (key: string) => boolean
  complete: (key: string, score: number) => void
}

/** Kept in its own module so hot reloads of the provider or hooks don't recreate the context. */
export const ProgressContext = createContext<ProgressContextValue | null>(null)
