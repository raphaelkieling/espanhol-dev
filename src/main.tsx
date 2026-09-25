import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="modulo/:id" element={<ModulePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
