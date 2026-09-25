export default function CheckIcon({ size = 20 }: { size?: number }) {
  return (
    <svg className="check" width={size} height={size} viewBox="0 0 20 20" aria-label="Completado" role="img">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
