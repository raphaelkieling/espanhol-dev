/** Renders inline marks used in content: **bold** and ~~strike~~. */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
        if (part.startsWith('~~') && part.endsWith('~~')) return <s key={i}>{part.slice(2, -2)}</s>
        return part
      })}
    </>
  )
}
