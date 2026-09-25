/**
 * Renders inline marks used in content:
 * **bold**, ~~strike~~ and [[highlighted text|note shown on hover]].
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\[\[[^\]]+\]\])/g)
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
        return part
      })}
    </>
  )
}
