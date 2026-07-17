// Contenido real extraído del microsite Nuxt (https://baic.com.ar/bj40pro/) que BAIC usa
// para el BJ40 Pro. A diferencia del resto de los modelos (páginas WordPress/Elementor con
// scroll normal), esta página es un slideshow a pantalla completa: cada "page" ocupa toda
// la pantalla y se avanza de a una con la rueda del mouse / touch, nunca con scroll libre.
// Por eso este modelo tiene su propio componente (Bj40ProPage.jsx) en vez de reusar el
// VehicleDetailPage genérico.

const NUXT = 'https://baic.com.ar/bj40pro/_nuxt'
const STATIC = 'https://baic.com.ar/bj40pro/static/bj40'

export const bj40ProSlides = [
  { type: 'hero' },

  {
    type: 'content',
    heading: 'Sistema de 4WD a Tiempo Parcial',
    body: 'Equipado con un sistema de tracción integral inteligente, soporta el cambio de cuatro modos de 2H, 4H, 4L, 4A mediante un selector electrónico, adaptándose a las diferentes necesidades de conducción.',
    bg: `${NUXT}/page2_cover.Cs_lHSfs.webp`
  },

  {
    type: 'ats',
    heading: 'Sistema de ATS',
    body: 'El sistema de control todo terreno de ATS soporta hasta 11 modos de conducción. Mediante un cambio inteligente, el sistema ofrece la mejor distribución de potencia al vehículo.',
    bg: `${NUXT}/page3_cover.EcHOjjTm.webp`,
    terrain: [
      { label: 'Rocoso', icon: `${STATIC}/ats/yanshi_orange.webp`, bg: `${NUXT}/stone_vista.DnnpBR5Q.webp` },
      { label: 'Nevado', icon: `${STATIC}/ats/xuehua_orange.webp`, bg: `${NUXT}/snow_vista.DGDn_8jd.webp` },
      { label: 'Desierto', icon: `${STATIC}/ats/shamo_orange.webp`, bg: `${NUXT}/shamo_vista.CRkx3-DY.webp` }
    ]
  },

  {
    type: 'specs',
    bg: `${NUXT}/esargument-img.BbaYZZVg.webp`,
    stats: [
      { label: 'POTENCIA', value: '241.38', suffix: 'HP' },
      { label: 'PAR', value: '386', suffix: 'N·M' },
      { label: 'MOTOR', value: '2.0 T', suffix: '' },
      { label: 'MODOS DE CONDUCCIÓN', value: '11', suffix: '' }
    ],
    angles: [
      { value: '37°', label: 'ÁNGULO DE APROXIMACIÓN', side: 'left' },
      { value: '31°', label: 'ÁNGULO DE SALIDA', side: 'right' }
    ],
    extra: [
      { label: 'ALTURA AL SUELO', value: '220', suffix: 'MM' },
      { label: 'PROFUNDIDAD DE VADEO', value: '750', suffix: 'MM' }
    ]
  },

  {
    type: 'content',
    heading: 'Estructura Tubular de Alta Resistencia',
    body: 'Estructura de la jaula diseñada con exigencia militar, reduciendo eficazmente las deformaciones por colisión. Proporción de acero de alta resistencia conformado en caliente: 79.8%. Coeficiente de ligereza: 4.34.',
    bg: `${NUXT}/page5_cover.DXzACCtP.webp`
  },
  {
    type: 'content',
    heading: 'Chasis Todoterreno de Grado Militar',
    body: 'Diseño de chasis con viga integral de dos vigas longitudinales y ocho transversales, combinando acero de alta resistencia y acero ultra alto. Proporción de acero de hasta el 52% que asegura estabilidad incluso en condiciones extremas de conducción off-road.',
    bg: `${NUXT}/page6_cover.CQYV3Jlp.webp`
  },
  {
    type: 'content',
    heading: 'Tecnología Lumínica de Alta Intensidad: Visibilidad Total',
    body: 'Parrilla LED de cinco orificios integra un sistema de iluminación envolvente de última generación. Proyecta una potencia lumínica superior para enfrentar terrenos nocturnos con total confianza, mientras que optimiza la refrigeración del motor.',
    bg: `${NUXT}/page7_cover.CvuK3ecd.webp`
  },
  {
    type: 'content',
    heading: 'Sensación de Libertad Total',
    body: 'La ausencia de marcos superiores te regala una vista lateral más amplia y despejada para dominar cada sendero, combinada con una estructura robusta garantizando seguridad y aventura.',
    bg: `${NUXT}/page8_cover.CynH4R7H.webp`
  },
  {
    type: 'content',
    heading: 'Puerta Trasera Dividida',
    body: 'La puerta trasera dividida ofrece dos formas de acceder a tu mundo. Este sistema maximiza la funcionalidad en cada situación, demostrando que la verdadera belleza del off-road está en la versatilidad.',
    bg: `${NUXT}/page9_cover.CXQUpRUY.webp`
  },

  {
    type: 'carousel',
    heading: 'Diseño de Interiores',
    items: [
      { image: `${STATIC}/trim/img1.webp`, title: 'Habitáculo Panorámico, Tecnología y Visión', text: 'Interior diseñado para ofrecer una visibilidad panorámica excepcional, además de un espacio amplio y cómodo.' },
      { image: `${STATIC}/trim/img2.webp`, title: 'Central de Mando Digital: Primera Configuración Quíntuple del Off-Road', text: 'Sistema de cinco pantallas integradas, con una distribución pensada para que cada ocupante tenga el control que necesita. Equipado con el procesador más avanzado de la industria, el SD 8155 garantiza una fluidez absoluta incluso en las condiciones más extremas.' },
      { image: `${STATIC}/trim/img3.webp`, title: 'Techo Panorámico con Mandos Inteligentes', text: 'Techo panorámico ultra amplio con interruptores inteligentes permiten su operación con movimientos precisos e intuitivos, sin apartar la vista del camino.' },
      { image: `${STATIC}/trim/img4.webp`, title: 'Infinity: El Audio que Evoluciona con la Velocidad', text: 'Equipado con un sistema de 12 altavoces de alta eficiencia más un amplificador externo que entrega la potencia necesaria para llenar el amplio habitáculo sin distorsión, marcando la diferencia con una ecualización dinámica por velocidad.' },
      { image: `${STATIC}/trim/img5.webp`, title: 'Asientos con Abatimiento: Baúl con Gran Capacidad', text: 'Con un único botón, los asientos traseros se abaten completamente, transformando el área de carga en un piso perfectamente plano. Versatilidad para ampliar la capacidad de guardado o facilitar un espacio de acampe.' },
      { image: `${STATIC}/trim/img6.webp`, title: 'Central de Energía: Carga Rápida de 50W y 10 Puertos a Bordo', text: 'El cargador inalámbrico integrado de 50W es de los más potentes del mercado, compatible con carga rápida para los últimos modelos de smartphones. Además, 10 puertos de carga distribuidos por el interior.' }
    ]
  },
  {
    type: 'carousel',
    heading: 'Experiencia de Conducción',
    items: [
      { image: `${STATIC}/driving/img1.webp`, title: 'Volante Multifunción: Tres Modos, Cuatro Movimientos', text: 'Seleccioná entre tres modos de asistencia: Ligero, Estándar y Deportivo. Para que cada conductor encuentre su posición ideal, el volante cuenta con ajuste eléctrico en 4 direcciones (arriba, abajo, adentro, afuera) memorizando tu preferencia.' },
      { image: `${STATIC}/driving/img2.webp`, title: 'Giro Asistido con Radio Reducido', text: 'Al activarlo, el vehículo bloquea electrónicamente la rueda trasera interna, generando un punto de giro sobre sí misma mientras las demás ruedas siguen avanzando. El resultado: un radio de giro reducido que te permite rotar sobre terreno complicado con una facilidad asombrosa.' },
      { image: `${STATIC}/driving/img3.webp`, title: '2.5 T de Capacidad de Remolque', text: 'Incorpora una toma de remolque reforzada y una toma de electricidad dedicada (para luces y freno del trailer). La capacidad máxima de tracción es de 2.5 toneladas (2.500 kg).' }
    ]
  }
]

export const bj40ProHero = {
  brand: 'BAIC',
  model: 'BJ40 PRO',
  tagline: 'Elegancia se encuentra con expedición',
  bg: `${STATIC}/bg1.webp`
}
