import { Link, useParams } from 'react-router-dom'
import { modules, pad } from '../data/modules'

export default function ModulePage() {
  const { id } = useParams()
  const module = modules.find((m) => m.id === Number(id))

  if (!module) {
    return (
      <section className="module">
        <h1 className="module__title">Módulo no encontrado</h1>
        <Link to="/" className="back">← Volver</Link>
      </section>
    )
  }

  const next = modules.find((m) => m.id === module.id + 1)

  return (
    <section className="module">
      <Link to="/" className="back">← Todos los módulos</Link>
      <div className="module__head">
        <img className="module__icon" src={module.icon} alt="" />
        <div>
          <span className="module__number">
            {pad(module.id)} · {module.days}
          </span>
          <h1 className="module__title">{module.title}</h1>
          <p className="module__subtitle">{module.subtitle}</p>
        </div>
      </div>
      <ol className="topics">
        {module.topics.map((topic, i) => (
          <li key={topic}>
            <span>{pad(i + 1)}</span>
            {topic}
          </li>
        ))}
      </ol>
      {next && (
        <Link to={`/modulo/${next.id}`} className="next">
          Siguiente: {pad(next.id)} {next.title} →
        </Link>
      )}
    </section>
  )
}
