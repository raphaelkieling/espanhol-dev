import ModuleCard from '../components/ModuleCard'
import { EXAM_SLUG } from '../content/helpers'
import { modules } from '../content/modules'
import { useProgress } from '../progress/ProgressContext'
import { sectionKey } from '../progress/store'
import { useSetting } from '../settings/settings'

export default function Home() {
  const { isCompleted } = useProgress()
  const [lockModules] = useSetting('lockModules')

  return (
    <>
      {/* <section className="hero">
        <h1 className="hero__title">Español para devs</h1>
        <p className="hero__meta">{modules.length} módulos · 7 días</p>
      </section> */}

      <div className="grid">
        {modules.map((m, i) => {
          // Only the home enforces the order; direct URLs still open locked modules
          const prev = modules[i - 1]
          const locked = lockModules && prev !== undefined && !isCompleted(sectionKey(prev.slug, EXAM_SLUG))
          return <ModuleCard key={m.id} module={m} featured={m.id === 1} locked={locked} />
        })}
      </div>
    </>
  )
}
