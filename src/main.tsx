import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import SectionPage from './pages/SectionPage'
import DictionaryPage from './pages/DictionaryPage'
import SettingsPage from './pages/SettingsPage'
import IntroPage from './pages/IntroPage'
import FlashcardsPage from './pages/FlashcardsPage'
import { ProgressProvider } from './progress/ProgressContext'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="introduccion" element={<IntroPage />} />
            <Route path="modulo/:id" element={<ModulePage />} />
            <Route path="modulo/:id/:section" element={<SectionPage />} />
            <Route path="diccionario" element={<DictionaryPage />} />
            <Route path="tarjetas" element={<FlashcardsPage />} />
            <Route path="configuracion" element={<SettingsPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  </StrictMode>,
)
