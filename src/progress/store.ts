export type SectionProgress = {
  score: number
  completedAt: string
}

export type ProgressState = Record<string, SectionProgress>

/**
 * Persistence boundary for progress. Async so a remote API can replace
 * the localStorage implementation without touching the UI.
 */
export interface ProgressStore {
  load(): Promise<ProgressState>
  save(key: string, progress: SectionProgress): Promise<void>
  clear(): Promise<void>
}

const STORAGE_KEY = 'espanol-para-devs:progress:v1'

export const localProgressStore: ProgressStore = {
  async load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as ProgressState
    } catch {
      return {}
    }
  },
  async save(key, progress) {
    const state = await this.load()
    state[key] = progress
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  },
  async clear() {
    localStorage.removeItem(STORAGE_KEY)
  },
}

export const sectionKey = (moduleSlug: string, sectionSlug: string) => `${moduleSlug}/${sectionSlug}`
