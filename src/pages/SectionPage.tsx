import { Link, useParams } from 'react-router-dom'
import Blocks from '../components/blocks/Blocks'
import Quiz from '../components/Quiz'
import { hasContent, pad } from '../content/helpers'
import { findModule } from '../content/modules'
import { useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'
import NotFound from './NotFound'

export default function SectionPage() {
  const { id, section: slug } = useParams()
  const { isCompleted, complete } = useProgress()
  const module = findModule(id)
  const index = module?.sections.findIndex((s) => s.slug === slug) ?? -1
  const section = module?.sections[index]

  if (!module || !section || !hasContent(section)) return <NotFound />

  const key = sectionKey(module.slug, section.slug)
  const next = module.sections.slice(index + 1).find(hasContent)

  return (
    <article className="section">
      <Link to={`/modulo/${module.id}`} className="back">
        ← {pad(module.id)} {module.title}
      </Link>

      <header className="section__head">
        <span className="module__number">Sección {pad(index + 1)}</span>
        <h1 className="section__title">{section.title}</h1>
        {section.summary && <p className="module__subtitle">{section.summary}</p>}
      </header>

      <Blocks blocks={section.blocks!} />

      {section.quiz && (
        <Quiz key={key} quiz={section.quiz} completed={isCompleted(key)} onPass={(score) => complete(key, score)} />
      )}

      <Link to={next ? `/modulo/${module.id}/${next.slug}` : `/modulo/${module.id}`} className="next">
        {next ? `Siguiente: ${next.title} →` : `Volver a ${module.title} →`}
      </Link>
    </article>
  )
}
