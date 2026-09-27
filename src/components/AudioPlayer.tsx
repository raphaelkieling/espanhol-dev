import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

type Status = 'idle' | 'playing' | 'paused' | 'unavailable'

/** Play/pause button for a file in /public. Shows as unavailable until the file exists. */
export default function AudioPlayer({ src }: { src: string }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [progress, setProgress] = useState(0)

  const toggle = () => {
    const el = audio.current
    if (!el) return
    if (el.paused) el.play().catch(() => setStatus('unavailable'))
    else el.pause()
  }

  const unavailable = status === 'unavailable'
  const playing = status === 'playing'

  return (
    <div className={`audio${unavailable ? ' is-unavailable' : ''}`}>
      <button
        type="button"
        className="audio__button"
        onClick={toggle}
        disabled={unavailable}
        aria-label={playing ? 'Pausar' : 'Escuchar'}
      >
        {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
      </button>
      <span className="audio__label">{unavailable ? 'Audio próximamente' : playing ? 'Pausar' : 'Escuchar'}</span>
      <span className="audio__track">
        <span className="audio__progress" style={{ width: `${progress * 100}%` }} />
      </span>
      <audio
        ref={audio}
        src={`${import.meta.env.BASE_URL}${src}`}
        preload="metadata"
        onPlay={() => setStatus('playing')}
        onPause={() => setStatus('paused')}
        onEnded={() => {
          setStatus('idle')
          setProgress(0)
        }}
        onTimeUpdate={(e) => {
          const el = e.currentTarget
          if (el.duration) setProgress(el.currentTime / el.duration)
        }}
        onError={() => setStatus('unavailable')}
      />
    </div>
  )
}
