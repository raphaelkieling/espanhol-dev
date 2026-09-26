import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Rich from '../components/Rich'
import { pad } from '../content/helpers'
import { modules } from '../content/modules'
import type { Word } from '../content/types'
import { words } from '../content/words'

const toHtml = (text: string) => text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/[\t\n]/g, ' ')

/** Tab-separated file that Anki imports as Basic notes: Spanish on the front, the rest on the back. */
function downloadForAnki(list: Word[]) {
  const rows = list.map((w) => {
    const back = [`<b>${w.pt}</b>`, `<i>${w.context}</i>`, ...w.examples].map(toHtml).join('<br>')
    return `${toHtml(w.es)}\t${back}`
  })
  const tsv = ['#separator:tab', '#html:true', ...rows].join('\n')
  const url = URL.createObjectURL(new Blob([tsv], { type: 'text/tab-separated-values' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'espanol-para-devs-diccionario.txt'
  a.click()
  URL.revokeObjectURL(url)
}

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
          <p className="module__subtitle">{words.length} palabras del curso</p>
        </div>
        <button type="button" className="button button--ghost" onClick={() => downloadForAnki(words)}>
          Exportar a Anki
        </button>
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
