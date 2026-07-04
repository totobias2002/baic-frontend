import { AppLink } from '../ui/index.js'
import descargasImg from '../../assets/images/misc/descargas.jpeg'

export default function DownloadsCta() {
  return (
    <div className="split-cta">
      <div className="split-cta__content">
        <h3>CENTRO DE DESCARGAS</h3>
        <AppLink to="/descargas" className="ui-button ui-button--dark ui-button--md">VER MÁS</AppLink>
      </div>
      <img className="split-cta__image" src={descargasImg} alt="Centro de descargas" />
    </div>
  )
}
