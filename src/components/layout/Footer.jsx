import { Logo } from '../ui/index.js'
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
              <li key={m.slug}><a href={`/modelos/${m.slug}`}>{m.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Nosotros</h5>
          <span className="footer__rule" />
          <ul>
            <li><a href="/nosotros">Empresa</a></li>
            <li><a href="/concesionarios">Concesionarios</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/nosotros#vision">Visión</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/descargas">Centro de Descargas</a></li>
          </ul>
        </div>
        <div>
          <h5>Novedades</h5>
          <span className="footer__rule" />
          <ul>
            <li><a href="/novedades">Noticias</a></li>
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
