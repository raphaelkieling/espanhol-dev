import { Link } from 'react-router-dom'

/**
 * Renders inline marks used in content:
 * **bold**, ~~strike~~, [[highlighted text|note shown on hover]] and [link text](https://…).
 * Links starting with / are app routes and open in place: [tarjetas](/tarjetas).
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
        if (part.startsWith('~~') && part.endsWith('~~')) return <s key={i}>{part.slice(2, -2)}</s>
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const [marked, note] = part.slice(2, -2).split('|')
          return (
            <mark key={i} className="hl" tabIndex={note ? 0 : undefined} data-note={note}>
              {marked}
            </mark>
          )
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link?.[2].startsWith('/'))
          return (
            <Link key={i} className="rich-link" to={link[2]}>
              {link[1]}
            </Link>
          )
        if (link)
          return (
            <a key={i} className="rich-link" href={link[2]} target="_blank" rel="noreferrer">
              {link[1]}
            </a>
          )
        return part
      })}
    </>
  )
}
