import { ArrowLeft, ArrowRight, Music, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useSetting } from '../settings/settings'

const TRACKS = [
  { title: 'Crescent Moon', file: 'Crescent-Moon.mp3' },
  { title: 'Celestia', file: 'Ghostrifter-Official-Celestia.mp3' },
  { title: 'Lost and Found', file: 'Lost-and-Found.mp3' },
  { title: 'Otjanbird Pt. II', file: 'Otjanbird-Pt.-II.mp3' },
  { title: 'Silent Wood', file: 'silent-wood.mp3' },
]

/** Lofi player pinned to the corner. Cycles through /public/music and starts paused. */
export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const track = TRACKS[index]
  const [volume] = useSetting('musicVolume')

  useEffect(() => {
    if (audio.current) audio.current.volume = volume
  }, [volume])

  // Keep playing across track changes when the player was already on
  useEffect(() => {
    if (playing) audio.current?.play().catch(() => setPlaying(false))
  }, [index])

  const toggle = () => {
    const el = audio.current
    if (!el) return
    if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    else {
      el.pause()
      setPlaying(false)
    }
  }

  const next = () => setIndex((i) => (i + 1) % TRACKS.length)
  const previous = () => setIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length)

  return (
    <aside className="music" aria-label="Música">
      <span className={`music__icon${playing ? ' is-playing' : ''}`} aria-hidden="true">
        <Music size={14} />
      </span>
      <span className="music__title" title={track.title}>
        {track.title}
      </span>
      <button type="button" className="music__button" onClick={previous} aria-label="Canción anterior">
        <ArrowLeft size={16} />
      </button>
      <button type="button" className="music__button" onClick={toggle} aria-label={playing ? 'Pausar' : 'Reproducir'}>
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <button type="button" className="music__button" onClick={next} aria-label="Siguiente canción">
        <ArrowRight size={16} />
      </button>
      <audio ref={audio} src={`${import.meta.env.BASE_URL}music/${track.file}`} preload="none" onEnded={next} />
    </aside>
  )
}
