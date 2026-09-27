import type { Block } from '../../content/types'
import AudioPlayer from '../AudioPlayer'
import FillBlank from '../FillBlank'
import Rich from '../Rich'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="block-heading">{block.text}</h2>
    case 'card':
      return (
        <section className="block-card">
          {block.title && <h2 className="block-card__title">{block.title}</h2>}
          <Blocks blocks={block.blocks} />
        </section>
      )
    case 'text':
      return (
        <p className="block-text">
          <Rich text={block.text} />
        </p>
      )
    case 'table':
      return (
        <figure className="block-table">
          <table>
            <thead>
              <tr>
                {block.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <Rich text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'note':
      return (
        <aside className={`block-note block-note--${block.tone ?? 'tip'}`}>
          {block.title && <strong className="block-note__title">{block.title}</strong>}
          <p>
            <Rich text={block.text} />
          </p>
        </aside>
      )
    case 'examples':
      return (
        <ul className="block-examples">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="block-examples__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16A2.5 2.5 0 0 1 4 13.5z" />
                </svg>
              </span>
              <span className="block-examples__es">
                <Rich text={item.es} />
              </span>
              {item.pt && <span className="block-examples__pt">{item.pt}</span>}
            </li>
          ))}
        </ul>
      )
    case 'fill':
      return (
        <ol className="block-fill">
          {block.items.map((item, i) => (
            <FillBlank key={i} {...item} />
          ))}
        </ol>
      )
    case 'reading':
      return (
        <article className="block-reading">
          <header className="block-reading__head">
            {block.title && <h2 className="block-reading__title">{block.title}</h2>}
            {block.audio && <AudioPlayer src={block.audio} />}
          </header>
          {block.paragraphs.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </article>
      )
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="blocks">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  )
}
