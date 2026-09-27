import { useSyncExternalStore } from 'react'

type Settings = {
  /** The home locks each module until the previous module's exam is passed. */
  lockModules: boolean
  /** The home lists the intro and modules two per row, in small cards. */
  compactHome: boolean
  /** Shows the lofi player in the corner. */
  music: boolean
  /** Lofi player volume, from 0 to 1. */
  musicVolume: number
}

const DEFAULTS: Settings = { lockModules: true, compactHome: false, music: true, musicVolume: 0.1 }

const storageKey = (name: keyof Settings) => `espanol-para-devs:${name}`
const listeners = new Set<() => void>()

const read = <K extends keyof Settings>(name: K): Settings[K] => {
  const saved = localStorage.getItem(storageKey(name))
  return saved === null ? DEFAULTS[name] : (JSON.parse(saved) as Settings[K])
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** A persisted preference, kept in sync across every component that reads it. */
export function useSetting<K extends keyof Settings>(name: K) {
  const value = useSyncExternalStore(subscribe, () => read(name))
  const set = (next: Settings[K]) => {
    localStorage.setItem(storageKey(name), JSON.stringify(next))
    listeners.forEach((l) => l())
  }
  return [value, set] as const
}
