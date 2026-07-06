import { Logo, AppLink } from '../ui/index.js'
import { models } from '../../data/models.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h5>Modelos</h5>
          <span className="footer__rule" />
          <ul>
            {models.map((m) => (
              <li key={m.slug}><AppLink to={`/modelos/${m.slug}`}>{m.name}</AppLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Nosotros</h5>
          <span className="footer__rule" />
          <ul>
            <li><AppLink to="/nosotros">Empresa</AppLink></li>
            <li><AppLink to="/concesionarios">Concesionarios</AppLink></li>
            <li><AppLink to="/service">Service</AppLink></li>
            <li><AppLink to="/nosotros#vision">Visión</AppLink></li>
            <li><AppLink to="/contacto">Contacto</AppLink></li>
            <li><AppLink to="/descargas">Centro de Descargas</AppLink></li>
          </ul>
        </div>
        <div>
          <h5>Novedades</h5>
          <span className="footer__rule" />
          <ul>
            <li><AppLink to="/novedades">Noticias</AppLink></li>
          </ul>
        </div>
        <div className="footer__brand">
          <Logo />
        </div>
      </div>
      <p className="footer__legal">
        Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas
        y equipamiento de cada vehículo en la Red de Concesionarios Oficiales de BAIC Argentina.
      </p>
      <p className="footer__copyright">© 2026 BAIC Argentina | Todos los derechos reservados.</p>
    </footer>
  )
}
