import { Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pad } from '../content/helpers'
import type { Module } from '../content/types'
import { useModuleProgress } from '../progress/ProgressContext'
import CheckIcon from './CheckIcon'

/** `wide` spans the full row, for a module that would otherwise sit alone on the last one. */
type Props = { module: Module; featured?: boolean; wide?: boolean; locked?: boolean }

export default function ModuleCard({ module, featured = false, wide = false, locked = false }: Props) {
  const { examPassed, lessons } = useModuleProgress(module)
  const className = `card${featured ? ' card--featured' : ''}${wide ? ' card--wide' : ''}${locked ? ' card--locked' : ''}`

  const content = (
    <>
      <span className="card__number">{pad(module.id)}</span>
      <img className="card__icon" src={module.icon} alt="" loading="lazy" />
      <div className="card__text">
        <h3 className="card__title">{module.title}</h3>
        <p className="card__subtitle">{module.subtitle}</p>
      </div>
      <span className="card__dots" aria-hidden="true">
        {lessons.map((done, i) => (
          <span key={i} className={`card__dot${done ? ' is-done' : ''}`} />
        ))}
      </span>
      {locked ? (
        <span className="card__done card__lock" title="Completa la prueba del módulo anterior para desbloquearlo">
          <Lock size={20} strokeWidth={2.5} aria-label="Bloqueado" role="img" />
        </span>
      ) : (
        examPassed && (
          <span className="card__done" title="Módulo completado">
            <CheckIcon size={24} />
          </span>
        )
      )}
    </>
  )

  return locked ? (
    <div className={className} aria-disabled="true">
      {content}
    </div>
  ) : (
    <Link to={`/modulo/${module.id}`} className={className}>
      {content}
    </Link>
  )
}
