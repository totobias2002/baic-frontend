import { AppLink } from '../ui/index.js'
import baicArgentina from '../../assets/images/misc/baic-argentina.webp'
import visionBaic from '../../assets/images/misc/vision-baic.webp'

export default function DoubleLinks() {
  return (
    <div className="double-links">
      <AppLink to="/nosotros">
        <img className="double-links__img" src={baicArgentina} alt="BAIC Argentina" />
        <h3><strong>BAIC</strong> Argentina</h3>
      </AppLink>
      <AppLink to="/nosotros#vision">
        <img className="double-links__img" src={visionBaic} alt="Visión BAIC" />
        <h3>Visión <strong>BAIC</strong></h3>
      </AppLink>
    </div>
  )
}
