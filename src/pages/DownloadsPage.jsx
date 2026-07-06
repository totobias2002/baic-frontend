import { downloads } from '../data/downloads.js'

export default function DownloadsPage() {
  return (
    <div className="container downloads-page">
      <h1>Centro de Descargas BAIC</h1>
      <p className="downloads-page__lead">Fotos y videos de prensa de cada modelo, listos para descargar.</p>
      <div className="downloads-grid">
        {downloads.map((item) => (
          <div key={item.id} className="download-card">
            <h4>{item.name}</h4>
            {item.image && <img src={item.image} alt={item.name} className="download-card__img" />}
            <a href={item.url} target="_blank" rel="noreferrer" className="ui-button ui-button--dark ui-button--sm">
              DESCARGAR FOTOS Y VIDEOS
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
