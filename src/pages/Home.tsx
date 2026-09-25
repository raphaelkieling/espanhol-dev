import ModuleCard from '../components/ModuleCard'
import { modules } from '../data/modules'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">Español para devs</h1>
        <p className="hero__meta">{modules.length} módulos · 7 días</p>
      </section>

      <div className="grid">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} featured={m.id === 1} />
        ))}
      </div>
    </>
  )
}
