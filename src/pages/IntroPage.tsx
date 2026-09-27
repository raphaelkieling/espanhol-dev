import { Link } from 'react-router-dom'
import Blocks from '../components/blocks/Blocks'
import Quiz from '../components/Quiz'
import { INTRO_KEY, introduccion } from '../content/introduccion'
import { pad } from '../content/helpers'
import { modules } from '../content/modules'
import { useProgress } from '../progress/ProgressContext'

export default function IntroPage() {
  const first = modules[0]
  const { isCompleted, complete } = useProgress()

  return (
    <article className="section">
      <Link to="/" className="back">
        ← Inicio
      </Link>

      <header className="module__head section__head">
        <img className="module__icon" src={`${import.meta.env.BASE_URL}icons/treasure-map.png`} alt="" />
        <div>
          <span className="module__number">00 · Antes de empezar</span>
          <h1 className="section__title">{introduccion.title}</h1>
          {introduccion.summary && <p className="module__subtitle">{introduccion.summary}</p>}
        </div>
      </header>

      {introduccion.blocks && <Blocks blocks={introduccion.blocks} />}

      {introduccion.quiz && (
        <Quiz quiz={introduccion.quiz} completed={isCompleted(INTRO_KEY)} onPass={(score) => complete(INTRO_KEY, score)} />
      )}

      <Link to={`/modulo/${first.id}`} className="next">
        Empezar: {pad(first.id)} {first.title} →
      </Link>
    </article>
  )
}
