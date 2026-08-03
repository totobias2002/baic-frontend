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

  const closeAll = () => {
    clearTimeout(closeTimer.current)
    setModelsOpen(false)
    setMobileOpen(false)
  }

  // En desktop el hover ya abre/cierra el menú; si el click también hiciera
  // toggle, un click con mouse (que primero dispara el hover) lo abriría y
  // lo cerraría en el mismo gesto, generando el parpadeo/"transparencia" que
  // se veía a mitad de la transición de opacity. En mobile no hay hover, así
  // que ahí sí necesitamos que el tap alterne.
  const handleTriggerClick = () => {
    if (mobileOpen) {
      setModelsOpen((o) => !o)
    } else {
      openModels()
    }
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
            onMouseEnter={mobileOpen ? undefined : openModels}
            onMouseLeave={mobileOpen ? undefined : scheduleClose}
          >
            <button className="navbar__models-trigger" onClick={handleTriggerClick}>
              Modelos <ChevronDownIcon size={14} />
            </button>
            <ModelsMegaMenu onNavigate={closeAll} />
          </div>
          <AppNavLink to="/nosotros" onClick={closeAll}>BAIC</AppNavLink>
          <AppNavLink to="/concesionarios" onClick={closeAll}>Concesionarios</AppNavLink>
          <AppNavLink to="/service" onClick={closeAll}>Service</AppNavLink>
          <AppNavLink to="/novedades" onClick={closeAll}>Novedades</AppNavLink>
          <AppNavLink to="/contacto" onClick={closeAll}>Contacto</AppNavLink>
        </nav>
      </div>
    </header>
  )
}
