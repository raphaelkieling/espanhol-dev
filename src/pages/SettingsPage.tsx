import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../progress/ProgressContext'

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

  const confirmReset = () => {
    if (window.confirm('¿Borrar todo tu progreso? Las secciones y pruebas completadas vuelven a cero.')) reset()
  }

  return (
    <section className="module">
      <Link to="/" className="back">
        ← Inicio
      </Link>

      <h1 className="module__title">Configuración</h1>

      <SettingsSection title="Progreso">
        <SettingsRow
          label="Reiniciar progreso"
          description="Las secciones y pruebas completadas vuelven a cero. No se puede deshacer."
        >
          <button type="button" className="button button--danger" onClick={confirmReset}>
            Reiniciar
          </button>
        </SettingsRow>
      </SettingsSection>
    </section>
  )
}
