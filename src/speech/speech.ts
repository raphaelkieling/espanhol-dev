/** Spanish text-to-speech with the browser's built-in voices (Web Speech API). */

export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

/** Removes inline marks so only the Spanish sentence is read. Struck text is the wrong form, so it's dropped. */
const plain = (text: string) =>
  text
    .replace(/~~[^~]+~~\s*(→\s*)?/g, '')
    .replace(/\[\[([^|\]]+)(\|[^\]]*)?\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/___/g, '…')
    .trim()

// Chrome fills getVoices() asynchronously; wait for it once, but don't hang if it never fires
const voicesReady: Promise<void> = !canSpeak
  ? Promise.resolve()
  : speechSynthesis.getVoices().length
    ? Promise.resolve()
    : new Promise((resolve) => {
        speechSynthesis.addEventListener('voiceschanged', () => resolve(), { once: true })
        setTimeout(resolve, 1000)
      })

// Natural-sounding voices, best first: Google (Chrome), macOS/iOS, Microsoft (Edge/Windows)
const PREFERRED_VOICES = [
  'Google español de Estados Unidos',
  'Google español',
  'Paulina',
  'Mónica',
  'Monica',
  'Microsoft Elvira',
  'Microsoft Helena',
  'Microsoft Sabina',
]

// macOS "Eloquence" and novelty voices: robotic, and Chrome often gets stuck on them with no audio.
// They're also what Chrome picks for es-ES when no voice is set, so a voice must always be chosen.
const BAD_VOICES = /^(Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley|Bad News|Bells|Boing|Bubbles|Jester|Organ|Superstar|Trinoids|Whisper|Zarvox)\b/

const spanishVoice = () => {
  const voices = speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith('es') && !BAD_VOICES.test(v.name))
  for (const name of PREFERRED_VOICES) {
    const match = voices.find((v) => v.name === name) ?? voices.find((v) => v.name.startsWith(name))
    if (match) return match
  }
  return voices.find((v) => v.localService) ?? voices[0]
}

// Chrome garbage-collects utterances that nothing references and drops their audio
let current: SpeechSynthesisUtterance | null = null
let pending: ReturnType<typeof setTimeout> | undefined
// Only the latest speak() call may play: earlier ones can still be waiting on voicesReady
let request = 0

export function speak(text: string) {
  if (!canSpeak) return
  const sentence = plain(text)
  if (!sentence) return

  const id = ++request
  clearTimeout(pending)
  const wasBusy = speechSynthesis.speaking || speechSynthesis.pending
  if (wasBusy) speechSynthesis.cancel()

  voicesReady.then(() => {
    if (id !== request) return
    // Chrome ignores speak() called right after cancel(), so give it a moment
    pending = setTimeout(
      () => {
        const utterance = new SpeechSynthesisUtterance(sentence)
        const voice = spanishVoice()
        utterance.lang = voice?.lang ?? 'es-ES'
        if (voice) utterance.voice = voice
        utterance.rate = 0.95
        utterance.onend = utterance.onerror = () => {
          if (current === utterance) current = null
        }
        current = utterance
        // Chrome can get stuck paused after the tab was in the background
        speechSynthesis.resume()
        speechSynthesis.speak(utterance)
      },
      wasBusy ? 80 : 0,
    )
  })
}

export function stopSpeaking() {
  if (!canSpeak) return
  request++
  clearTimeout(pending)
  current = null
  speechSynthesis.cancel()
}
