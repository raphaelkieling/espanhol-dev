import { useId, useState } from 'react'
import CheckIcon from './CheckIcon'
import Rich from './Rich'

const GAP = '___'

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()

type Props = {
  /** Sentence with a ___ gap: 'Yo ___ desarrollador.' */
  es: string
  /** Accepted answers; the first one is shown once solved. */
  answer: string | string[]
  pt?: string
}

/** A sentence with a gap and a text field below it. Solves as soon as the typed text matches. */
export default function FillBlank({ es, answer, pt }: Props) {
  const answers = Array.isArray(answer) ? answer : [answer]
  const [value, setValue] = useState('')
  const solved = answers.some((a) => normalize(a) === normalize(value))
  const id = useId()
  const [before, after = ''] = es.split(GAP)

  return (
    <li className={`fill${solved ? ' is-solved' : ''}`}>
      <label className="fill__sentence" htmlFor={id}>
        <Rich text={before} />
        <span className="fill__gap">{solved ? answers[0] : ' '}</span>
        <Rich text={after} />
      </label>
      {pt && <span className="fill__pt">{pt}</span>}
      <div className="fill__field">
        <input
          id={id}
          className="fill__input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={solved}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Escribe aquí"
        />
        {solved && <CheckIcon size={20} />}
      </div>
    </li>
  )
}
