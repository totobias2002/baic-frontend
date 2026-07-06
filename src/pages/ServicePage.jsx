import { useMemo } from 'react'
import { serviceCenters } from '../data/serviceCenters.js'
import { WhatsappIcon } from '../components/icons/index.js'

function groupByProvince(list) {
  const groups = new Map()
  list.forEach((center) => {
    const key = center.province || 'Otros'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(center)
  })
  return Array.from(groups.entries())
}

export default function ServicePage() {
  const groups = useMemo(() => groupByProvince(serviceCenters), [])

  return (
    <div className="container service-page">
      <h1>Service</h1>
      <h2 className="service-page__subtitle">Centro de Servicios y Postventa</h2>
      <p className="service-page__lead">
        Nuestros técnicos especialistas te brindarán asistencia en todas tus consultas para garantizar el
        rendimiento óptimo de tu modelo BAIC.
      </p>

      {groups.map(([province, items]) => (
        <section key={province} className="dealers-page__group">
          <h3 className="dealers-page__province">{province}</h3>
          <div className="dealers-grid">
            {items.map((center) => (
              <div key={center.id} className="dealer-card">
                <h4>{center.name}</h4>
                <p className="dealer-card__address">{center.address}</p>
                {center.phone && (
                  <p className="dealer-card__phone">
                    {center.phoneHref ? <a href={center.phoneHref}>{center.phone}</a> : center.phone}
                  </p>
                )}
                <div className="dealer-card__links">
                  {center.whatsapp && (
                    <a href={`https://api.whatsapp.com/send/?phone=${center.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <WhatsappIcon size={18} />
                    </a>
                  )}
                  {center.email && <a href={`mailto:${center.email}`} className="dealer-card__email">{center.email}</a>}
                </div>
                {center.tags?.length > 0 && (
                  <ul className="dealer-card__tags">
                    {center.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
