import { useState } from 'react'
import { Logo, AppNavLink } from '../ui/index.js'
import { ChevronDownIcon } from '../icons/index.js'
import ModelsMegaMenu from './ModelsMegaMenu.jsx'

export default function NavBar() {
  const [modelsOpen, setModelsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
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
