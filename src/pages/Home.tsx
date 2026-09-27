import { Link } from 'react-router-dom'
import CheckIcon from '../components/CheckIcon'
import ModuleCard from '../components/ModuleCard'
import { INTRO_KEY } from '../content/introduccion'
import { EXAM_SLUG } from '../content/helpers'
import { modules } from '../content/modules'
import { useCourseProgress, useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'
import { useSetting } from '../settings/settings'

export default function Home() {
  const { isCompleted } = useProgress()
  const [lockModules] = useSetting('lockModules')
  const { done, total } = useCourseProgress()
  const percent = Math.round((done / total) * 100)

  return (
    <>
      {/* <section className="hero">
        <h1 className="hero__title">Español para devs</h1>
        <p className="hero__meta">{modules.length} módulos</p>
      </section> */}

      <section className="course-progress" aria-label="Progreso del curso">
        <div className="course-progress__head">
          <span className="course-progress__label">Tu progreso</span>
          <span className="course-progress__count">
            {done} de {total} secciones · <strong>{percent}%</strong>
          </span>
        </div>
        <div className="course-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}>
          <span className="course-progress__fill" style={{ width: `${percent}%` }} />
        </div>
      </section>

      <div className="grid">
        <Link to="/introduccion" className="card card--intro">
          <span className="card__number">00</span>
          <span className="card__days">Antes de empezar</span>
          <img className="card__icon" src={`${import.meta.env.BASE_URL}icons/treasure-map.png`} alt="" loading="lazy" />
          <div className="card__text">
            <h3 className="card__title">Introducción</h3>
            <p className="card__subtitle">Cómo estudiar: conversación, flashcards y las herramientas que recomendamos</p>
          </div>
          {isCompleted(INTRO_KEY) && (
            <span className="card__done" title="Introducción completada">
              <CheckIcon size={24} />
            </span>
          )}
        </Link>
        {modules.map((m, i) => {
          // Only the home enforces the order; direct URLs still open locked modules
          const prev = modules[i - 1]
          const unlocked = prev ? isCompleted(sectionKey(prev.slug, EXAM_SLUG)) : isCompleted(INTRO_KEY)
          const locked = lockModules && !unlocked
          return <ModuleCard key={m.id} module={m} featured={m.id === 1} locked={locked} />
        })}
      </div>
    </>
  )
}
