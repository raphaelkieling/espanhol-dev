import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Rich from '../components/Rich'
import { pad } from '../content/helpers'
import { modules } from '../content/modules'
import { words } from '../content/words'


export default function DictionaryPage() {
  const groups = modules
    .map((m) => ({ module: m, words: words.filter((w) => w.module === m.id) }))
    .filter((g) => g.words.length)

  return (
    <section className="module">
      <Link to="/" className="back">
        ← Inicio
      </Link>

      <header className="words__head">
        <div>
          <h1 className="module__title">Diccionario</h1>
          <p className="module__subtitle">{words.length} palabras del guia</p>
        </div>
      </header>

      <figure className="block-table words__table">
        <table>
          <thead>
            <tr>
              <th>Palabra</th>
              <th>Contexto</th>
              <th>Significado</th>
              <th>Ejemplos</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(({ module, words }) => (
              <Fragment key={module.id}>
                <tr className="words__module">
                  <td colSpan={4}>
                    {pad(module.id)} · {module.title}
                  </td>
                </tr>
                {words.map((w) => (
                  <tr key={w.es}>
                    <td>{w.es}</td>
                    <td>{w.context}</td>
                    <td>{w.pt}</td>
                    <td>
                      <ul className="words__examples">
                        {w.examples.map((ex, i) => (
                          <li key={i}>
                            <Rich text={ex} />
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </figure>
    </section>
  )
}
