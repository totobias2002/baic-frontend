import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppLink } from '../components/ui/index.js'
import { fetchVehicleBySlug, selectVehicleDetail, selectVehicleDetailStatus } from '../features/vehicleDetail/index.js'

export default function VehicleDetailPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const vehicle = useSelector(selectVehicleDetail)
  const status = useSelector(selectVehicleDetailStatus)

  useEffect(() => {
    dispatch(fetchVehicleBySlug(slug))
  }, [dispatch, slug])

  if (status === 'loading') return <div className="container"><p>Cargando modelo...</p></div>
  if (!vehicle) return <div className="container"><p>No encontramos este modelo.</p></div>

  return (
    <div className="container vehicle-detail-page">
      <div className="ph vehicle-detail-page__gallery">{vehicle.name}</div>
      <div>
        <h1>{vehicle.name}</h1>
        <p>{vehicle.tagline}</p>
        <AppLink to="/concesionarios" className="ui-button ui-button--primary ui-button--md">Ver concesionarios</AppLink>
      </div>
    </div>
  )
}
