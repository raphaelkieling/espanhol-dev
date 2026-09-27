import { Dumbbell, MessageSquare } from 'lucide-react'
import type { Block } from '../../content/types'
import AudioPlayer from '../AudioPlayer'
import FillBlank from '../FillBlank'
import Rich from '../Rich'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="block-heading">{block.text}</h2>
    case 'card': {
      const isPractice = block.blocks.some((b) => b.type === 'fill')
      return (
        <section className="block-card">
          {block.title && (
            <h2 className="block-card__title">
              {isPractice && (
                <span className="block-card__icon" aria-hidden="true">
                  <Dumbbell size={16} strokeWidth={2.2} />
                </span>
              )}
              {block.title}
            </h2>
          )}
          <Blocks blocks={block.blocks} />
        </section>
      )
    }
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
                <MessageSquare size={14} />
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
