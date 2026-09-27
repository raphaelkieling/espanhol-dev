import { Volume2 } from 'lucide-react'
import { canSpeak, speak } from '../speech/speech'

/** Small button that reads a Spanish sentence aloud. Renders nothing when the browser has no speech support. */
export default function SpeakButton({ text, className = '' }: { text: string; className?: string }) {
  if (!canSpeak) return null
  return (
    <button
      type="button"
      className={`speak-button ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        speak(text)
      }}
      aria-label="Escuchar"
      title="Escuchar"
    >
      <Volume2 size={16} aria-hidden="true" />
    </button>
  )
}
