import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDealers, selectDealers } from '../features/dealers/index.js'
import { MapPinIcon, WhatsappIcon, InstagramIcon } from '../components/icons/index.js'

function groupByProvince(list) {
  const groups = new Map()
  list.forEach((dealer) => {
    const key = dealer.province || 'Otros'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(dealer)
  })
  return Array.from(groups.entries())
}

export default function DealersPage() {
  const dispatch = useDispatch()
  const dealers = useSelector(selectDealers)
  const groups = useMemo(() => groupByProvince(dealers), [dealers])

  useEffect(() => {
    dispatch(fetchDealers())
  }, [dispatch])

  return (
    <div className="container dealers-page">
      <h1>Concesionarios</h1>
      <p className="dealers-page__lead">Encontrá el concesionario oficial BAIC más cercano a vos.</p>

      {groups.map(([province, items]) => (
        <section key={province} className="dealers-page__group">
          <h2 className="dealers-page__province">{province}</h2>
          <div className="dealers-grid">
            {items.map((dealer) => (
              <div key={dealer.id} className="dealer-card">
                <h4>{dealer.name}</h4>
                {dealer.address && (
                  <p className="dealer-card__address">
                    <MapPinIcon size={16} />
                    {dealer.mapsUrl ? (
                      <a href={dealer.mapsUrl} target="_blank" rel="noreferrer">{dealer.address}</a>
                    ) : (
                      <span>{dealer.address}</span>
                    )}
                  </p>
                )}
                {dealer.phone && (
                  <p className="dealer-card__phone">
                    {dealer.phoneHref ? <a href={dealer.phoneHref}>{dealer.phone}</a> : dealer.phone}
                  </p>
                )}
                <div className="dealer-card__links">
                  {dealer.whatsapp && (
                    <a href={`https://api.whatsapp.com/send/?phone=${dealer.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <WhatsappIcon size={18} />
                    </a>
                  )}
                  {dealer.instagram && (
                    <a href={dealer.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <InstagramIcon size={18} />
                    </a>
                  )}
                  {dealer.email && <a href={`mailto:${dealer.email}`} className="dealer-card__email">{dealer.email}</a>}
                  {dealer.website && <a href={dealer.website} target="_blank" rel="noreferrer">Sitio web</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
