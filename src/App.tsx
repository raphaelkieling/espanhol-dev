import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useProgress } from './progress/ProgressContext'

export default function App() {
  const { pathname } = useLocation()
  const { reset } = useProgress()

  const confirmReset = () => {
    if (window.confirm('¿Borrar todo tu progreso? Las secciones y pruebas completadas vuelven a cero.')) reset()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="brand">
          Español<span>/</span>devs
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <span>
          Iconos de <a href="https://www.thiings.co/things" target="_blank" rel="noreferrer">Thiings</a>
        </span>
        <nav className="footer__links">
          <Link to="/diccionario">Diccionario</Link>
          <button type="button" className="footer__reset" onClick={confirmReset}>
            Reiniciar progreso
          </button>
        </nav>
      </footer>
    </div>
  )
}
