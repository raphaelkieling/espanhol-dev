import { Check, Copy } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { CodeLang } from '../content/types'
import { dedent, highlight } from './blocks/highlight'
import Rich from './Rich'

const LABELS: Record<CodeLang, string> = {
  java: 'Java',
  ts: 'TypeScript',
  go: 'Go',
  csharp: 'C#',
  kotlin: 'Kotlin',
  sql: 'SQL',
  yaml: 'YAML',
  bash: 'Terminal',
  dockerfile: 'Dockerfile',
  proto: 'Protobuf',
  json: 'JSON',
  xml: 'XML',
  properties: 'Properties',
  http: 'HTTP',
  text: 'Texto',
}

type Props = { snippets: { lang: CodeLang; code: string; label?: string }[]; caption?: string }

/** Highlighted code. Several snippets become tabs, so the Java version sits next to TypeScript, Go or C#. */
export default function CodeBlock({ snippets, caption }: Props) {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const snippet = snippets[active]
  const code = useMemo(() => dedent(snippet.code), [snippet.code])
  const tokens = useMemo(() => highlight(code, snippet.lang), [code, snippet.lang])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = () => navigator.clipboard?.writeText(code).then(() => setCopied(true))
  const label = (s: Props['snippets'][number]) => s.label ?? LABELS[s.lang]

  return (
    <figure className="block-code">
      <div className="block-code__bar">
        {snippets.length > 1 ? (
          <div className="block-code__tabs" role="tablist">
            {snippets.map((s, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`block-code__tab${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {label(s)}
              </button>
            ))}
          </div>
        ) : (
          <span className="block-code__lang">{label(snippet)}</span>
        )}
        <button type="button" className="block-code__copy" onClick={copy} aria-label="Copiar código" title="Copiar">
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        </button>
      </div>
      <pre className="block-code__pre">
        <code>
          {tokens.map((t, i) =>
            t.kind ? (
              <span key={i} className={`tok-${t.kind}`}>
                {t.text}
              </span>
            ) : (
              t.text
            ),
          )}
        </code>
      </pre>
      {caption && (
        <figcaption>
          <Rich text={caption} />
        </figcaption>
      )}
    </figure>
  )
}
