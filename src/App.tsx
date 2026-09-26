import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="brand">
          Español<span>/</span>devs
        </Link>
        <ThemeToggle />
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
          <Link to="/configuracion">Configuración</Link>
        </nav>
      </footer>
    </div>
  )
}
