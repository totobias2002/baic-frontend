import { useState, useRef } from 'react'
import { Logo, AppNavLink } from '../ui/index.js'
import { ChevronDownIcon } from '../icons/index.js'
import ModelsMegaMenu from './ModelsMegaMenu.jsx'

const CLOSE_DELAY = 400

export default function NavBar() {
  const [modelsOpen, setModelsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)

  const openModels = () => {
    clearTimeout(closeTimer.current)
    setModelsOpen(true)
  }

  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setModelsOpen(false), CLOSE_DELAY)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Logo />
        <button className="menu-toggle" onClick={() => setMobileOpen((o) => !o)} aria-label="Abrir menú">
          &#9776;
        </button>
        <nav className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          <div
            className={`dropdown ${modelsOpen ? 'open' : ''}`}
            onMouseEnter={openModels}
            onMouseLeave={scheduleClose}
          >
            <button className="navbar__models-trigger" onClick={() => setModelsOpen((o) => !o)}>
              Modelos <ChevronDownIcon size={14} />
            </button>
            <ModelsMegaMenu />
          </div>
          <AppNavLink to="/nosotros">BAIC</AppNavLink>
          <AppNavLink to="/concesionarios">Concesionarios</AppNavLink>
          <AppNavLink to="/service">Service</AppNavLink>
          <AppNavLink to="/novedades">Novedades</AppNavLink>
          <AppNavLink to="/contacto">Contacto</AppNavLink>
        </nav>
      </div>
    </header>
  )
}
