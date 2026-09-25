import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
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

export function useModuleProgress(module: { slug: string; sections: { slug: string }[] }) {
  const { isCompleted } = useProgress()
  const done = module.sections.filter((s) => isCompleted(sectionKey(module.slug, s.slug))).length
  return { done, total: module.sections.length }
}
