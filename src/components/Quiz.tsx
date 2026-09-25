import { useState } from 'react'
import type { Quiz as QuizData } from '../content/types'
import CheckIcon from './CheckIcon'
import Rich from './Rich'

type Props = {
  quiz: QuizData
  completed: boolean
  onPass: (score: number) => void
}

export default function Quiz({ quiz, completed, onPass }: Props) {
  const { questions, passScore = 0.8 } = quiz
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)

  const correct = answers.filter((a, i) => a === questions[i].answer).length
  const needed = Math.ceil(questions.length * passScore)
  const passed = correct >= needed
  const allAnswered = answers.every((a) => a !== null)

  const choose = (q: number, option: number) => {
    if (submitted) return
    setAnswers((prev) => prev.map((a, i) => (i === q ? option : a)))
  }

  const submit = () => {
    setSubmitted(true)
    if (correct >= needed) onPass(correct / questions.length)
  }

  const retry = () => {
    setAnswers(questions.map(() => null))
    setSubmitted(false)
  }

  return (
    <section className="quiz">
      <header className="quiz__head">
        <h2>Mini desafío</h2>
        {completed ? (
          <span className="quiz__done">
            <CheckIcon size={18} /> Completado
          </span>
        ) : (
          <span className="quiz__hint">
            Acierta {needed} de {questions.length}
          </span>
        )}
      </header>

      <ol className="quiz__questions">
        {questions.map((q, qi) => (
          <li key={qi} className="question">
            <p className="question__prompt">
              <Rich text={q.prompt} />
            </p>
            <div className="question__options">
              {q.options.map((option, oi) => {
                const selected = answers[qi] === oi
                let state = selected ? ' is-selected' : ''
                if (submitted && oi === q.answer) state = ' is-correct'
                else if (submitted && selected) state = ' is-wrong'
                return (
                  <button
                    key={oi}
                    type="button"
                    className={`option${state}`}
                    onClick={() => choose(qi, oi)}
                    disabled={submitted}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            {submitted && q.explanation && (
              <p className="question__explanation">
                <Rich text={q.explanation} />
              </p>
            )}
          </li>
        ))}
      </ol>

      <footer className="quiz__foot">
        {submitted ? (
          <>
            <p className={`quiz__result${passed ? ' is-passed' : ''}`}>
              {correct} de {questions.length} · {passed ? '¡Sección completada!' : `Necesitas ${needed}.`}
            </p>
            {!passed && (
              <button type="button" className="button" onClick={retry}>
                Intentar de nuevo
              </button>
            )}
          </>
        ) : (
          <button type="button" className="button" onClick={submit} disabled={!allAnswered}>
            Comprobar
          </button>
        )}
      </footer>
    </section>
  )
}
