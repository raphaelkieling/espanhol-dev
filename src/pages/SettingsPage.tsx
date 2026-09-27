import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { clearReviews } from '../flashcards/deck'
import { useProgress } from '../progress/ProgressContext'
import { useSetting } from '../settings/settings'

function SettingsSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="settings__section">
      <h2 className="settings__section-title">{title}</h2>
      <div className="settings__card">{children}</div>
    </section>
  )
}

function SettingsRow({ label, description, children }: { label: string; description?: string; children: ReactNode }) {
  return (
    <div className="settings__row">
      <div className="settings__text">
        <span className="settings__label">{label}</span>
        {description && <p className="settings__description">{description}</p>}
      </div>
      <div className="settings__action">{children}</div>
    </div>
  )
}

export default function SettingsPage() {
  const { reset } = useProgress()
  const [lockModules, setLockModules] = useSetting('lockModules')
  const [compactHome, setCompactHome] = useSetting('compactHome')
  const [music, setMusic] = useSetting('music')
  const [volume, setVolume] = useSetting('musicVolume')

  const confirmReset = () => {
    if (window.confirm('¿Borrar todo tu progreso? Las secciones, pruebas y tarjetas vuelven a cero.')) {
      reset()
      clearReviews()
    }
  }

  return (
    <section className="module">
      <Link to="/" className="back">
        ← Inicio
      </Link>

      <h1 className="module__title">Configuración</h1>

      <SettingsSection title="Apariencia">
        <SettingsRow label="Inicio compacto" description="Muestra la introducción y los módulos de dos en dos, en tarjetas pequeñas.">
          <input
            type="checkbox"
            role="switch"
            className="switch"
            checked={compactHome}
            onChange={(e) => setCompactHome(e.target.checked)}
            aria-label="Inicio compacto"
          />
        </SettingsRow>
      </SettingsSection>

      <SettingsSection title="Música">
        <SettingsRow label="Música lofi" description="Muestra un reproductor en la esquina para estudiar con música de fondo.">
          <input
            type="checkbox"
            role="switch"
            className="switch"
            checked={music}
            onChange={(e) => setMusic(e.target.checked)}
            aria-label="Música lofi"
          />
        </SettingsRow>
        <SettingsRow label="Volumen" description={`${Math.round(volume * 100)}%`}>
          <input
            type="range"
            className="range"
            style={{ '--value': `${volume * 100}%` } as CSSProperties}
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            disabled={!music}
            aria-label="Volumen de la música"
          />
        </SettingsRow>
      </SettingsSection>

      <SettingsSection title="Progreso">
        <SettingsRow
          label="Módulos en orden"
          description="Bloquea cada módulo en el inicio hasta que apruebes la prueba del anterior."
        >
          <input
            type="checkbox"
            role="switch"
            className="switch"
            checked={lockModules}
            onChange={(e) => setLockModules(e.target.checked)}
            aria-label="Módulos en orden"
          />
        </SettingsRow>
        <SettingsRow
          label="Reiniciar progreso"
          description="Las secciones, pruebas y tarjetas vuelven a cero. No se puede deshacer."
        >
          <button type="button" className="button button--danger" onClick={confirmReset}>
            Reiniciar
          </button>
        </SettingsRow>
      </SettingsSection>
    </section>
  )
}
