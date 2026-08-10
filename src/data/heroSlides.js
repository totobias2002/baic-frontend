import x55iiHybrid from '../assets/images/hero/x55ii-hybrid.jpg'
import arcfox from '../assets/images/hero/arcfox.jpg'
import bj40pro from '../assets/images/hero/bj40-pro.jpg'
import bj30 from '../assets/images/hero/bj30-v2.webp'
import x55plus from '../assets/images/hero/x55-plus.jpg'
import x55ii from '../assets/images/hero/x55-ii.jpg'
import bj60 from '../assets/images/hero/bj60.jpg'
import u5plus from '../assets/images/hero/u5-plus.jpg'

import logo1 from '../assets/images/hero/carousel/carousel-1.png'
import logo2 from '../assets/images/hero/carousel/carousel-2.png'
import logo3 from '../assets/images/hero/carousel/carousel-3.png'
import logo4 from '../assets/images/hero/carousel/carousel-4.png'
import logo5 from '../assets/images/hero/carousel/carousel-5.png'
import logo6 from '../assets/images/hero/carousel/carousel-6.png'
import logo7 from '../assets/images/hero/carousel/carousel-7.png'
import logo8 from '../assets/images/hero/carousel/carousel-8.png'

// position/logoClass/variant replican exactamente las clases pos-left/pos-right, logo-arcfox
// y el override especial de la slide x55hybrid tal como están en baic.com.ar (inspeccionado con devtools).
export const heroSlides = [
  { id: 'x55ii-hybrid', title: 'X55 II HYBRID', cta: 'RED DE CONCESIONARIOS', to: '/concesionarios', image: x55iiHybrid, logo: logo1, position: 'left', variant: 'x55hybrid' },
  { id: 'arcfox', title: 'ARCFOX', cta: 'DESCUBRILOS', to: 'https://arcfox.com.ar/', image: arcfox, logo: logo2, position: 'left', logoClass: 'logo-arcfox' },
  { id: 'bj40-pro', title: 'BJ40 PRO', cta: 'DESCUBRILO', to: '/modelos/bj40-pro', image: bj40pro, logo: logo3, position: 'left' },
  { id: 'bj30', title: 'BJ30', cta: 'DESCUBRILO', to: '/modelos/bj30-4x4', image: bj30, logo: logo4, position: 'right' },
  { id: 'x55-plus', title: 'X55 PLUS', cta: 'DESCUBRILO', to: '/modelos/x55-plus', image: x55plus, logo: logo5, position: 'right' },
  { id: 'x55-ii', title: 'X55 II', cta: 'DESCUBRILO', to: '/modelos/x55-ii', image: x55ii, logo: logo6, position: 'left' },
  { id: 'bj60', title: 'BJ60', cta: 'DESCUBRILO', to: '/modelos/bj60', image: bj60, logo: logo7, position: 'left' },
  { id: 'u5-plus', title: 'U5 PLUS', cta: 'DESCUBRILO', to: '/modelos/u5-plus', image: u5plus, logo: logo8, position: 'left' }
]
