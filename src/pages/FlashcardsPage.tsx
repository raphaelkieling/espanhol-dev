import { CalendarClock, Info, Layers, Sparkles, type LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Rating, State, type Grade } from 'ts-fsrs'
import Rich from '../components/Rich'
import { flashcards } from '../content/flashcards'
import { pad } from '../content/helpers'
import { isDue, useDeck, type DeckCard } from '../flashcards/deck'

/** Cards rated again before this window closes come back in the same session. */
const SESSION_WINDOW_MS = 10 * 60 * 1000

const PAGE_SIZE = 10

const dateFormat = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })

const STATE_LABELS: Record<State, string> = {
  [State.New]: 'Nueva',
  [State.Learning]: 'Aprendiendo',
  [State.Review]: 'Repaso',
  [State.Relearning]: 'Reaprendiendo',
}

const GRADES: { grade: Grade; label: string; key: string; tone: string }[] = [
  { grade: Rating.Again, label: 'Mal', key: '1', tone: 'again' },
  { grade: Rating.Hard, label: 'Difícil', key: '2', tone: 'hard' },
  { grade: Rating.Good, label: 'Bien', key: '3', tone: 'good' },
]

export default function FlashcardsPage() {
  const { cards, review } = useDeck()
  const [queue, setQueue] = useState<string[] | null>(null)

  const due = cards.filter((c) => isDue(c))
  const fresh = cards.filter((c) => c.state.state === State.New).length

  return (
    <section className="module">
      <Link to="/" className="back">
        ← Inicio
      </Link>

      <header className="words__head">
        <div>
          <h1 className="module__title">Tarjetas</h1>
          <p className="module__subtitle">Repaso espaciado de las palabras de cada módulo que terminas.</p>
        </div>
      </header>

      {queue && (
        <Session
          queue={queue}
          cards={cards}
          onRate={(id, grade) => {
            const next = review(id, grade)
            const rest = queue.slice(1)
            const comesBack = next.due.getTime() - Date.now() < SESSION_WINDOW_MS
            setQueue(comesBack ? [...rest, id] : rest)
          }}
          onExit={() => setQueue(null)}
        />
      )}

      {cards.length === 0 ? (
        <p className="deck__empty">Termina la prueba de un módulo para desbloquear sus tarjetas.</p>
      ) : due.length === 0 ? (
        <p className="deck__empty">¡Todo al día! Vuelve más tarde para repasar.</p>
      ) : (
        <button type="button" className="button" onClick={() => setQueue(due.map((c) => c.id))}>
          Empezar ({due.length})
        </button>
      )}

      <div className="deck__stats">
        <Stat
          icon={Layers}
          value={cards.length}
          label={`de ${flashcards.length} desbloqueadas`}
          info="Tarjetas de los módulos cuya prueba ya aprobaste. Las demás se desbloquean al terminar cada módulo."
        />
        <Stat
          icon={CalendarClock}
          value={due.length}
          label="para repasar hoy"
          info="Tarjetas que el algoritmo programó para ahora. Repasarlas a tiempo es lo que fija la palabra en la memoria."
        />
        <Stat
          icon={Sparkles}
          value={fresh}
          label="nuevas"
          info="Tarjetas desbloqueadas que todavía no estudiaste ni una vez."
        />
      </div>

      <CardTable cards={cards} />
    </section>
  )
}

/** Every flashcard in the course, locked ones included, with its review status. */
function CardTable({ cards }: { cards: DeckCard[] }) {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(flashcards.length / PAGE_SIZE)
  const unlocked = new Map(cards.map((c) => [c.id, c]))
  const rows = flashcards.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  return (
    <section className="deck__all">
      <h2 className="settings__section-title">Todas las tarjetas</h2>
      <figure className="block-table deck__table">
        <table>
          <thead>
            <tr>
              <th>Palabra</th>
              <th>Significado</th>
              <th>Módulo</th>
              <th>Estado</th>
              <th>Próximo repaso</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const card = unlocked.get(c.id)
              return (
                <tr key={c.id} className={card ? undefined : 'is-locked'}>
                  <td>{c.word}</td>
                  <td>{c.back}</td>
                  <td>{pad(c.module)}</td>
                  <td>{card ? STATE_LABELS[card.state.state] : 'Bloqueada'}</td>
                  <td>{!card ? '—' : isDue(card) ? 'Ahora' : dateFormat.format(card.state.due)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </figure>

      {pages > 1 && (
        <nav className="pagination" aria-label="Páginas">
          <button type="button" className="button button--ghost" disabled={page === 0} onClick={() => setPage(page - 1)}>
            ← Anterior
          </button>
          <span className="pagination__label">
            {page + 1} / {pages}
          </span>
          <button type="button" className="button button--ghost" disabled={page === pages - 1} onClick={() => setPage(page + 1)}>
            Siguiente →
          </button>
        </nav>
      )}
    </section>
  )
}

function Stat({ icon: Icon, value, label, info }: { icon: LucideIcon; value: number; label: string; info: string }) {
  return (
    <div className="deck__stat">
      <span className="deck__stat-icon">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="deck__stat-text">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
      <span className="deck__stat-info" tabIndex={0} data-note={info} aria-label={info}>
        <Info size={12} aria-hidden="true" />
      </span>
    </div>
  )
}

function Session({
  queue,
  cards,
  onRate,
  onExit,
}: {
  queue: string[]
  cards: DeckCard[]
  onRate: (id: string, grade: Grade) => void
  onExit: () => void
}) {
  const [flipped, setFlipped] = useState(false)
  const card = cards.find((c) => c.id === queue[0])

  const rate = (grade: Grade) => {
    if (!card) return
    setFlipped(false)
    onRate(card.id, grade)
  }

  // The page behind the dialog shouldn't scroll while studying
  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  // Esc closes, space flips the card, 1–3 rate it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onExit()
      if (!card) return
      if (!flipped && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        setFlipped(true)
      } else if (flipped) {
        const match = GRADES.find((g) => g.key === e.key)
        if (match) rate(match.grade)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const content = !card ? (
    <div className="deck__done">
      <p className="deck__empty">¡Sesión terminada!</p>
      <button type="button" className="button" onClick={onExit}>
        Volver
      </button>
    </div>
  ) : (
    <div className="flashcard-session">
      <div className="flashcard-session__head">
        <span className="module__number">Quedan {queue.length}</span>
        <button type="button" className="button button--ghost" onClick={onExit}>
          Salir
        </button>
      </div>

      <div className="flashcard">
        <p className="flashcard__front">
          <Rich text={card.front} />
        </p>
        {flipped && (
          <div className="flashcard__back">
            <p className="flashcard__meaning">
              <strong>{card.word}</strong> · {card.back}
            </p>
            <p className="flashcard__example">{card.context}</p>
          </div>
        )}
      </div>

      <div className="flashcard__actions">
        {flipped ? (
          GRADES.map((g) => (
            <button key={g.grade} type="button" className={`button flashcard__grade flashcard__grade--${g.tone}`} onClick={() => rate(g.grade)}>
              {g.label}
            </button>
          ))
        ) : (
          <button type="button" className="button" onClick={() => setFlipped(true)}>
            Ver respuesta
          </button>
        )}
      </div>
    </div>
  )

  return createPortal(
    <div className="study" role="dialog" aria-modal="true" aria-label="Repaso de tarjetas">
      {content}
    </div>,
    document.body,
  )
}
