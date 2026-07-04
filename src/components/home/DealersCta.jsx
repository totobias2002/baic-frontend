import { AppLink } from '../ui/index.js'
import { MapPinIcon } from '../icons/index.js'

export default function DealersCta() {
  return (
    <div className="cta-banner cta-banner--map">
      <MapPinIcon size={38} className="cta-banner__pin" />
      <h3>CONCESIONARIOS BAIC</h3>
      <AppLink to="/concesionarios" className="ui-button ui-button--dark ui-button--md">VER CONCESIONARIOS</AppLink>
    </div>
  )
}
