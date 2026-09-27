import { Settings } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import MusicPlayer from './components/MusicPlayer'
import ThemeToggle from './components/ThemeToggle'
import { useSetting } from './settings/settings'

export default function App() {
  const { pathname } = useLocation()
  const [music] = useSetting('music')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="brand">
          Español<span>/</span>devs
        </Link>
        <div className="topbar__actions">
          <ThemeToggle />
          <Link to="/configuracion" className="icon-button" aria-label="Configuración" title="Configuración">
            <Settings size={18} />
          </Link>
        </div>
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
        </nav>
      </footer>
      {music && <MusicPlayer />}
    </div>
  )
}
