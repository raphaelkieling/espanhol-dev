import { Pencil } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import CheckIcon from '../components/CheckIcon'
import { hasContent, moduleSections, pad } from '../content/helpers'
import { findModule, modules } from '../content/modules'
import type { Module, Section } from '../content/types'
import { useModuleProgress, useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'
import NotFound from './NotFound'

export default function ModulePage() {
  const { id } = useParams()
  const module = findModule(id)
  if (!module) return <NotFound />
  return <ModuleView key={module.id} module={module} />
}

function ModuleView({ module }: { module: Module }) {
  const { done, total } = useModuleProgress(module)
  const next = modules.find((m) => m.id === module.id + 1)
  const sections = moduleSections(module)
  const lessons = sections.filter((s) => s.kind !== 'exam')
  const exam = sections[sections.length - 1]

  return (
    <section className="module">
      <Link to="/" className="back">← Todos los módulos</Link>
      <div className="module__head">
        <img className="module__icon" src={module.icon} alt="" />
        <div>
          <span className="module__number">
            {pad(module.id)} · {done}/{total}
          </span>
          <h1 className="module__title">{module.title}</h1>
          <p className="module__subtitle">{module.subtitle}</p>
        </div>
      </div>

      <ol className="sections">
        {lessons.map((section, i) => (
          <li key={section.slug}>
            <SectionRow module={module} section={section} label={pad(i + 1)} />
          </li>
        ))}
      </ol>

      <div className="sections sections--exam">
        <SectionRow module={module} section={exam} label={<Pencil size={16} strokeWidth={2.5} aria-hidden="true" />} />
      </div>

      {next && (
        <Link to={`/modulo/${next.id}`} className="next">
          Siguiente módulo: {pad(next.id)} {next.title} →
        </Link>
      )}
    </section>
  )
}

function SectionRow({ module, section, label }: { module: Module; section: Section; label: ReactNode }) {
  const { isCompleted } = useProgress()
  const content = (
    <>
      <span className="sections__number">{label}</span>
      <span className="sections__title">{section.title}</span>
      {isCompleted(sectionKey(module.slug, section.slug)) ? (
        <CheckIcon />
      ) : (
        !hasContent(section) && <span className="sections__soon">Próximamente</span>
      )}
    </>
  )
  return hasContent(section) ? (
    <Link to={`/modulo/${module.id}/${section.slug}`} className="sections__item">
      {content}
    </Link>
  ) : (
    <div className="sections__item is-disabled">{content}</div>
  )
}
