import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { downloads } from '../data/downloads.js'

export default function DownloadsPage() {
  return (
    <>
      <section className="downloads-hero">
        <h1>Centro de Descargas BAIC</h1>
      </section>
      <div className="container downloads-page">
        <div className="downloads-grid">
          {downloads.map((item) => (
            <div key={item.id} className="download-card">
              <h4>{item.name}</h4>
              {item.image && <img src={item.image} alt={item.name} className="download-card__img" />}
              <a href={item.url} target="_blank" rel="noreferrer" className="download-card__btn">
                <FontAwesomeIcon icon={faDownload} />
                DESCARGAR FOTOS Y VIDEOS
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
