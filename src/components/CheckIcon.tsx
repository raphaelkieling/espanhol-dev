import { CircleCheck } from 'lucide-react'

export default function CheckIcon({ size = 20 }: { size?: number }) {
  return <CircleCheck className="check" size={size} strokeWidth={2.5} aria-label="Completado" role="img" />
}
