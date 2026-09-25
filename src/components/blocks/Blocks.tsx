import type { Block } from '../../content/types'
import Rich from '../Rich'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="block-heading">{block.text}</h2>
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
              <span className="block-examples__es">
                <Rich text={item.es} />
              </span>
              {item.pt && <span className="block-examples__pt">{item.pt}</span>}
            </li>
          ))}
        </ul>
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
