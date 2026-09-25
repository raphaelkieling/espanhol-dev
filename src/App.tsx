import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

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
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        Iconos de <a href="https://www.thiings.co/things" target="_blank" rel="noreferrer">Thiings</a>
      </footer>
    </div>
  )
}
