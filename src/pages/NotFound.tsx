import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="module">
      <h1 className="module__title">No encontrado</h1>
      <Link to="/" className="next">← Volver al inicio</Link>
    </section>
  )
}
