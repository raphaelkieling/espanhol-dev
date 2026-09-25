import { Link, useParams } from 'react-router-dom'
import CheckIcon from '../components/CheckIcon'
import { hasContent, pad } from '../content/helpers'
import { findModule, modules } from '../content/modules'
import { useModuleProgress, useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'
import NotFound from './NotFound'

export default function ModulePage() {
  const { id } = useParams()
  const module = findModule(id)
  if (!module) return <NotFound />
  return <ModuleView key={module.id} module={module} />
}

function ModuleView({ module }: { module: NonNullable<ReturnType<typeof findModule>> }) {
  const { isCompleted } = useProgress()
  const { done, total } = useModuleProgress(module)
  const next = modules.find((m) => m.id === module.id + 1)

  return (
    <section className="module">
      <Link to="/" className="back">← Todos los módulos</Link>
      <div className="module__head">
        <img className="module__icon" src={module.icon} alt="" />
        <div>
          <span className="module__number">
            {pad(module.id)} · {module.days} · {done}/{total}
          </span>
          <h1 className="module__title">{module.title}</h1>
          <p className="module__subtitle">{module.subtitle}</p>
        </div>
      </div>

      <ol className="sections">
        {module.sections.map((section, i) => {
          const content = (
            <>
              <span className="sections__number">{pad(i + 1)}</span>
              <span className="sections__title">{section.title}</span>
              {isCompleted(sectionKey(module.slug, section.slug)) ? (
                <CheckIcon />
              ) : (
                !hasContent(section) && <span className="sections__soon">Próximamente</span>
              )}
            </>
          )
          return (
            <li key={section.slug}>
              {hasContent(section) ? (
                <Link to={`/modulo/${module.id}/${section.slug}`} className="sections__item">
                  {content}
                </Link>
              ) : (
                <div className="sections__item is-disabled">{content}</div>
              )}
            </li>
          )
        })}
      </ol>

      {next && (
        <Link to={`/modulo/${next.id}`} className="next">
          Siguiente módulo: {pad(next.id)} {next.title} →
        </Link>
      )}
    </section>
  )
}
