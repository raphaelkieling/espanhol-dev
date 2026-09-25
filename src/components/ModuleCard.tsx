import { Link } from 'react-router-dom'
import { pad } from '../content/helpers'
import type { Module } from '../content/types'
import { useModuleProgress } from '../progress/ProgressContext'
import CheckIcon from './CheckIcon'

export default function ModuleCard({ module, featured = false }: { module: Module; featured?: boolean }) {
  const { done, total } = useModuleProgress(module)

  return (
    <Link to={`/modulo/${module.id}`} className={`card${featured ? ' card--featured' : ''}`}>
      <span className="card__number">{pad(module.id)}</span>
      <span className="card__days">
        {done === total ? <CheckIcon size={16} /> : done > 0 && `${done}/${total} · `}
        {module.days}
      </span>
      <img className="card__icon" src={module.icon} alt="" loading="lazy" />
      <div className="card__text">
        <h3 className="card__title">{module.title}</h3>
        <p className="card__subtitle">{module.subtitle}</p>
      </div>
    </Link>
  )
}
