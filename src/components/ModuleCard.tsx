import { Link } from 'react-router-dom'
import { type Module, pad } from '../data/modules'

export default function ModuleCard({ module, featured = false }: { module: Module; featured?: boolean }) {
  return (
    <Link to={`/modulo/${module.id}`} className={`card${featured ? ' card--featured' : ''}`}>
      <span className="card__number">{pad(module.id)}</span>
      <span className="card__days">{module.days}</span>
      <img className="card__icon" src={module.icon} alt="" loading="lazy" />
      <div className="card__text">
        <h3 className="card__title">{module.title}</h3>
        <p className="card__subtitle">{module.subtitle}</p>
      </div>
    </Link>
  )
}
