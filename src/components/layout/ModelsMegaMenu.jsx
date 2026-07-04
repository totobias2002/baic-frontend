import { useSelector } from 'react-redux'
import { AppLink } from '../ui/index.js'
import { selectVehicles } from '../../features/vehicles/index.js'

export default function ModelsMegaMenu() {
  const vehicles = useSelector(selectVehicles)

  return (
    <div className="megamenu">
      {vehicles.map((vehicle) => (
        <AppLink key={vehicle.slug} to={`/modelos/${vehicle.slug}`} className="model-card">
          {vehicle.image ? (
            <img className="model-card__img" src={vehicle.image} alt={vehicle.name} />
          ) : (
            <div className="ph">{vehicle.name}</div>
          )}
          <h4>{vehicle.name}</h4>
          <span className="ui-button ui-button--primary ui-button--sm">VER MÁS</span>
        </AppLink>
      ))}
    </div>
  )
}
