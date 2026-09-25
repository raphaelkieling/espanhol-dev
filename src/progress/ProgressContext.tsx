import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { countsForProgress, moduleSections } from '../content/helpers'
import type { Module } from '../content/types'
import { localProgressStore, sectionKey, type ProgressState, type ProgressStore } from './store'

type ProgressContextValue = {
  isCompleted: (key: string) => boolean
  complete: (key: string, score: number) => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ store = localProgressStore, children }: { store?: ProgressStore; children: ReactNode }) {
  const [state, setState] = useState<ProgressState>({})

  useEffect(() => {
    store.load().then(setState)
  }, [store])

  const complete = useCallback(
    (key: string, score: number) => {
      const progress = { score, completedAt: new Date().toISOString() }
      setState((prev) => ({ ...prev, [key]: progress }))
      store.save(key, progress)
    },
    [store],
  )

  const value = useMemo(() => ({ isCompleted: (key: string) => key in state, complete }), [state, complete])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}

export function useModuleProgress(module: Module) {
  const { isCompleted } = useProgress()
  const sections = moduleSections(module).filter(countsForProgress)
  const completed = (s: { slug: string }) => isCompleted(sectionKey(module.slug, s.slug))
  const done = sections.filter(completed).length
  const examPassed = sections.some((s) => s.kind === 'exam' && completed(s))
  /** Completion of each lesson section, in order (exam excluded). */
  const lessons = sections.filter((s) => s.kind !== 'exam').map(completed)
  return { done, total: sections.length, examPassed, lessons }
}
