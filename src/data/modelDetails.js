// Contenido real extraído de cada página de modelo en baic.com.ar.
// Las fotos ambientales/de detalle se referencian directo desde el CDN de BAIC
// (no forman parte de los assets locales del proyecto).
import x35 from '../assets/images/models/x35.png'
import x55ii from '../assets/images/models/x55-ii.png'
import x55plus from '../assets/images/models/x55-plus.webp'
import bj304x2 from '../assets/images/models/bj30-4x2.png'
import bj304x4 from '../assets/images/models/bj30-4x4.png'
import bj40plus from '../assets/images/models/bj40-plus.png'
import bj60 from '../assets/images/models/bj60.webp'
import u5plus from '../assets/images/models/u5-plus.png'
import eu5 from '../assets/images/models/eu5.png'

const CDN = 'https://baic.com.ar/wp-content/uploads'

export const modelDetails = {
  'x35': {
    heroImage: x35,
    hero: {
      title: 'X35',
      tagline: ["La nueva tendencia de SUV's.", 'Experiencia de conducción segura, agradable y de alta calidad.']
    },
    colors: [
      { hex: '#c91c1d', image: `${CDN}/2023/07/roja-1-1024x452.png` },
      { hex: '#ffffff', image: `${CDN}/2023/07/blanca-1-1024x452.png` },
      { hex: '#1b61d0', image: `${CDN}/2023/07/azul-1-1024x452.png` },
      { hex: '#480807', image: `${CDN}/2023/07/marron-1-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'DINÁMICO, ÚNICO Y VANGUARDISTA', body: ['La combinación perfecta de potencia, tecnología y confort, libera tu experiencia de conducción.'], bg: `${CDN}/2024/02/X35-ImagenWeb-5.jpg` },
      { type: 'text', heading: 'FAROS OJOS DE HALCÓN BIÓNICOS', body: ['205 LED de alta calidad y diseño.'], bg: `${CDN}/2024/02/X35-ImagenWeb-2.jpg` },
      { type: 'text', heading: 'EXPERIENCIA DE MANEJO PREMIUM', body: ['La tecnología simplifica el proceso de conducción y te hace sentir más cómodo y seguro.'], bg: `${CDN}/2024/02/X35-ImagenWeb-4.jpg` },
      { type: 'text', heading: 'TECNOLOGÍA, DISEÑO Y UN AMPLIO ESPACIO INTERIOR', body: ['Los viajes familiares se disfrutan al máximo, gracias al amplio espacio interior y a su diseño envolvente. La consola central es fácil de utilizar y en conjunto con su pantalla de 8” garantizan una excelente experiencia audiovisual.'], bg: `${CDN}/2024/02/X35-ImagenWeb-3.jpg` },
      { type: 'stats', heading: 'MOTOR 1.5 TURBO', items: [
        { label: '', value: '150', suffix: 'CV de pura potencia' },
        { label: '', value: '11.2', suffix: 'segundos de 0 a 100 km/h' },
        { label: '', value: '', suffix: 'Caja automática CVT' }
      ], bg: `${CDN}/2024/02/X35-ImagenWeb-6.jpg` },
      { type: 'list', heading: 'SEGURIDAD Y ASISTENCIA A LA CONDUCCIÓN', items: [
        'ABS + EBD (Anti-lock Braking System + Electronic Brake Distribution)',
        'EBA (Electronic Brake Assistant)',
        'ESP (Electronic Stability Program)',
        'TCS (Traction Control System)',
        'HHC (Hill Hold Assist)'
      ], bg: `${CDN}/2024/02/X35-ImagenWeb-7.jpg` }
    ],
    view360: {
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/07/BAIC-X35-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x35.pdf' }
  },

  'x55-ii': {
    heroImage: x55ii,
    hero: {
      title: 'X55 II',
      tagline: ['La SUV que llegó para cambiarlo todo.', 'Diseño vanguardista, conducción confortable y múltiples sistemas avanzados de asistencia al conductor (ADAS). Configuración inteligente.']
    },
    colors: [
      { hex: '#e8e62a', image: `${CDN}/2023/07/Amarillo-1024x452.png` },
      { hex: '#ff3b30', image: `${CDN}/2023/07/Rojo-1024x452.png` },
      { hex: '#26bfa0', image: `${CDN}/2023/07/Verde-1024x452.png` },
      { hex: '#3a3c3f', image: `${CDN}/2023/07/Gris-Oscuro-1024x452.png` },
      { hex: '#b3b5b8', image: `${CDN}/2023/07/Gris-1024x452.png` },
      { hex: '#eef1f4', image: `${CDN}/2023/07/Blanco-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'DISEÑO FUTURISTA', body: ['Grilla frontal de diseño paramétrico con siluetas de diamantes.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-1.jpg` },
      { type: 'text', heading: 'ÓPTICAS', body: ['Leds de colores para crear una iluminación ambiental estilo halo de estrellas.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-3.jpg` },
      { type: 'text', heading: 'MANIJAS OCULTAS INDUCTIVAS', body: ['Con sistema "pop out" totalmente automático.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-7.jpg` },
      { type: 'text', heading: 'INTERIOR', body: ['Diseño envolvente, iluminación LED, tecnología y acabados premium para vivir una experiencia de lujo.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-5.jpg` },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO INTUITIVO', body: ['Cierre automático durante los días de lluvia.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-6.jpg` },
      { type: 'stats', heading: 'MOTOR MAGIC CORE 1.5 TGV', items: [
        { label: '', value: '183', suffix: 'Potencia Máxima: HP' },
        { label: '', value: '305', suffix: 'Máximo par: Nm' },
        { label: '', value: '7.84', suffix: 'Aceleración de 0-100 Km: s' }
      ], bg: `${CDN}/2024/02/X55II-ImagenWeb-8.jpg` },
      { type: 'list', heading: 'MÚLTIPLES SENSORES Y ASISTENCIA A LA CONDUCCIÓN', items: [
        'Control Crucero Adaptativo e Inteligente',
        'Estacionamiento Autónomo',
        'Imagen 3D Panorámica de 360°',
        'Frenado de Emergencia Autónomo',
        'Asistencia autónoma en Embotellamientos'
      ], bg: `${CDN}/2024/02/X55II-ImagenWeb-9-e1707244164921.jpg` },
      { type: 'text', heading: '8 AIRBAGS', body: ['Sistema de seguridad pasiva en todas las direcciones para minimizar lesiones en casos de emergencia.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-11.jpg` }
    ],
    view360: {
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/07/BAIC-X55II-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x55-ii.pdf' }
  },

  'x55-plus': {
    heroImage: x55plus,
    hero: {
      title: 'X55 PLUS',
      tagline: ['Un SUV pensado para aquellos que buscan la excelencia.']
    },
    colors: [
      { hex: '#d8d9db', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-2-1024x529.png` },
      { hex: '#808285', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-1-1024x529.png` },
      { hex: '#1c1c1e', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-3-1024x529.png` },
      { hex: '#f5f6f8', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-7-1024x529.png` },
      { hex: '#e0483e', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-8-1024x529.png` },
      { hex: '#3f7fd1', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-9-1024x529.png` }
    ],
    sections: [
      { type: 'stats', items: [
        { label: 'POTENCIA', value: '180', suffix: 'HP' },
        { label: 'TORQUE', value: '305', suffix: 'NM' },
        { label: '0 - 100 KM/H', value: '9.87', suffix: 'S' },
        { label: 'MOTOR', value: '1498', suffix: 'CC' },
        { label: 'DISTANCIA ENTRE EJES', value: '2888', suffix: 'MM' }
      ], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-28.jpg` },
      { type: 'grid', heading: 'DISEÑO EXTERIOR', items: [
        { title: 'Llantas', text: 'Su tamaño de 19 pulgadas está acompañado de un exclusivo diseño que combina líneas delgadas y delicadas, con detalles en color negro brillante, proporcionando gran personalidad.' },
        { title: 'Diseño', text: 'El modelado de este vehículo se adhiere perfectamente al lenguaje que caracteriza a la marca y que es mundialmente conocido como "Capital Beauty".' },
        { title: 'Faros Traseros', text: 'El diseño se enmarca dentro del concepto Digital Matrix, delineando lo que la marca define como "Kylin Wing".' },
        { title: 'Modernas Salidas de Escape', text: 'El diseño de escape cuádruple y bilateral resalta la dinámica y la potencia del X55 Plus.' }
      ] },
      { type: 'text', heading: 'INTERIOR', body: ['La calidad de los materiales y el aprovechamiento al máximo del espacio interior, garantizan que cada centímetro esté optimizado para ofrecer las mejores soluciones de almacenamiento y un inmejorable confort tanto para el conductor como sus acompañantes.'] },
      { type: 'grid', items: [
        { title: 'Altavoces Flotantes', text: 'Con un diseño futurista, ofrecen una experiencia de sonido que desafía la gravedad.' },
        { title: 'Iluminación Ambiental', text: 'Con 64 colores y funciones de bienvenida, proporciona una experiencia integrada para todos los pasajeros.' },
        { title: 'Salida de Aire Transversal', text: 'Este diseño ofrece una excelente filtración del aire y un sistema de aire acondicionado que brinda diversas opciones de confort.' },
        { title: 'Asientos Ergonómicos', text: 'Incluyendo un asiento premium para cada pasajero, ofrecen una experiencia de lujo, adaptándose al cuerpo y reduciendo la fatiga muscular.' },
        { title: 'Panel Texturizado en Negro', text: 'Este elemento distintivo crea una estética moderna y audaz, elevando la sensación general del interior.' }
      ] },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO', body: ['Con un tamaño líder en su clase de 1320 x 850 mm, ofrece una experiencia visual inmersiva y cinematográfica.'] },
      { type: 'text', heading: 'INTELIGENCIA', body: ['Embárquese en un viaje hacia el futuro con las funciones de conducción inteligente de nuestro vehículo. Disfrute de la libertad que ofrece la conducción inteligente, cuando cada decisión y maniobra se ve mejorada por tecnología de vanguardia.'] },
      { type: 'grid', items: [
        { title: 'Control de Crucero Adaptativo Integrado (IACC)', text: 'Se ajusta de manera inteligente a la velocidad preestablecida y cambia automáticamente de objetivo, permitiendo una conducción más relajada.' },
        { title: 'Advertencia de Salida de Carril (LDW)', text: 'Ayuda a minimizar el riesgo de salidas involuntarias del carril en autopistas y rutas principales mediante alertas visuales y auditivas.' },
        { title: 'Detección de Punto Ciego (BSD)', text: 'Utiliza un radar de ondas milimétricas para detectar puntos ciegos en la parte trasera del vehículo, reduciendo el riesgo de accidentes.' },
        { title: 'Advertencia de Colisión Frontal (FCW)', text: 'Alerta al conductor cuando la distancia con el vehículo delantero es peligrosamente cercana, ayudando a mantener una distancia segura y prevenir accidentes.' },
        { title: 'Frenado Autónomo de Emergencia (AEB)', text: 'Detecta peatones o vehículos al frente, emitiendo alarmas y controlando la seguridad, para minimizar cualquier tipo de accidente.' },
        { title: 'Asistencia de Arranque en Pendientes (HHC)', text: 'Evita que el vehículo se deslice al arrancar en una pendiente, mejorando la seguridad en la conducción.' },
        { title: 'Asistente de Luz de Carretera (HMA)', text: 'Enciende o apaga automáticamente las luces altas y bajas para evitar encandilar a otros conductores.' },
        { title: 'Control de Descenso de Pendientes (HDC)', text: 'Permite un descenso gradual para promover la seguridad y el confort, controlando automáticamente la velocidad.' }
      ] },
      { type: 'text', heading: 'MOTORIZACIÓN', body: ['Es el resultado de una innovadora combinación de tecnología de vanguardia con ingeniería de excelencia para crear el equilibrio perfecto entre potencia y precisión.'] },
      { type: 'grid', items: [
        { title: 'Motor 1.5T "Magic Core"', text: 'Galardonado con el premio "China Heart" Top Ten Engine en 2021, cuenta con una eficiencia térmica del 39.2%, 21 tecnologías de reducción de ruido y una relación de flujo de más de 350 bar.' },
        { title: 'Turbocompresor VGT', text: 'Mejora en un 43% la respuesta dinámica a baja velocidad. Su diseño ligero y de configuración eficiente brindan un rendimiento excepcional, ofreciendo una experiencia de conducción emocionante.' }
      ] }
    ],
    view360: {
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
        .map((n) => {
          const ext = (n >= 1 && n <= 3) || (n >= 17 && n <= 21) || (n >= 35 && n <= 37) ? 'webp' : 'png'
          return `https://baic.com.ar/wp-content/uploads/2025/01/X55-Plus_BAIC-Argentina-360-${n}.${ext}`
        }),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x55-plus.pdf' }
  },

  'bj30-4x2': {
    heroImage: bj304x2,
    hero: {
      title: 'BJ30 4x2',
      tagline: ['Un SUV híbrido, calidad premium y seguridad.']
    },
    sections: [
      { type: 'stats', items: [
        { label: 'POTENCIA', value: '330', suffix: 'PH' },
        { label: 'TRACCIÓN', value: '4x2', suffix: '' },
        { label: 'TRANSMISIÓN', value: 'DHT', suffix: '' },
        { label: 'AUTONOMÍA', value: '1000', suffix: 'KM' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-16.jpg` },
      { type: 'text', heading: 'ILUMINACIÓN DELANTERA', body: ['Presenta una parrilla frontal con cinco faros incorporados.'] },
      { type: 'grid', items: [
        { title: 'Diseño Frontal Familiar', text: 'Combina un diseño robusto con tecnología avanzada para ofrecer una experiencia de conducción versátil y eficiente.' },
        { title: 'Diseño Trasero Elegante', text: 'La luz trasera vertical cuenta con un patrón en doble-D, lo que la hace aún más reconocible.' }
      ] },
      { type: 'text', heading: 'SELECTOR DE MARCHAS ELECTRÓNICO', body: ['Adopta un diseño inspirado en un propulsor aeroespacial, haciéndolo más avanzado tecnológicamente.'] },
      { type: 'grid', items: [
        { title: 'Panel de Instrumentos Integrados', text: 'Combinación de doble pantalla de 10.25 pulgadas + 14.6 pulgadas.' },
        { title: 'Espacio de Combinación Flexible', text: 'Los asientos delanteros y traseros se pueden reclinar libremente, adaptándose a cualquier necesidad, creando un espacio versátil.' }
      ] },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO', body: ['Eléctrico con protección UV y apertura ajustable, integrado en la carrocería para reducir el ruido aerodinámico.'] },
      { type: 'text', heading: 'ROBUSTA ESTRUCTURA DE SEGURIDAD', body: ['La optimización del chasis y la aplicación de tecnologías de seguridad, garantizan que la carrocería permanezca sin distorsiones y libre de deformaciones. La estructura frontal de absorción de energía en tres etapas asegura que el compartimento de pasajeros se mantenga firme y confiable.'] },
      { type: 'stats', items: [
        { label: 'ACERO DE ALTA RESISTENCIA', value: '63.4', suffix: '%' },
        { label: 'MÁXIMA RIGIDEZ DE TORSIÓN', value: '25420', suffix: 'NM' },
        { label: 'ACERO FORMADO TÉRMICAMENTE', value: '20', suffix: 'POSICIONES' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-20.jpg` },
      { type: 'text', heading: 'CÁMARA CON VISIÓN 360°', body: ['Diseñada para eliminar puntos ciegos y facilitar maniobras en cualquier entorno.'] }
    ]
  },

  'bj30-4x4': {
    heroImage: bj304x4,
    hero: {
      title: 'BJ30 4x4',
      tagline: ['Un todoterreno moderno,', 'híbrido y muy confortable.']
    },
    sections: [
      { type: 'stats', items: [
        { label: 'POTENCIA', value: '404', suffix: 'HP' },
        { label: 'TRACCIÓN', value: '4x4', suffix: '' },
        { label: 'TRANSMISIÓN', value: 'Doble DHT', suffix: '' },
        { label: '0 - 100 KM/H', value: '6.9', suffix: 'S' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-16.jpg` },
      { type: 'text', heading: 'ILUMINACIÓN DELANTERA', body: ['Presenta una parrilla frontal con cinco faros integrados.'] },
      { type: 'grid', items: [
        { title: 'Diseño Frontal Familiar', text: 'Combina un diseño robusto con tecnología avanzada para ofrecer una experiencia de conducción versátil y eficiente.' },
        { title: 'Diseño Trasero Elegante', text: 'La luz trasera vertical cuenta con un patrón en doble-D, lo que la hace aún más reconocible.' }
      ] },
      { type: 'text', heading: 'SELECTOR DE MARCHAS ELECTRÓNICO', body: ['Adopta un diseño inspirado en un propulsor aeroespacial, haciéndolo más avanzado tecnológicamente.'] },
      { type: 'grid', items: [
        { title: 'Panel de Instrumentos Integrados', text: 'Combinación de doble pantalla de 10.25 pulgadas + 14.6 pulgadas.' },
        { title: 'Espacio de Combinación Flexible', text: 'Los asientos delanteros y traseros se pueden reclinar libremente, adaptándose a cualquier necesidad, creando un espacio versátil.' }
      ] },
      { type: 'text', heading: 'EXCELENTE RENDIMIENTO TODOTERRENO', body: ['El chasis sólido le otorga al vehículo una excelente capacidad todoterreno.', 'Ha pasado rigurosas pruebas y verificaciones, garantizando un rendimiento confiable en condiciones extremas.'] },
      { type: 'text', heading: 'ROBUSTA ESTRUCTURA DE SEGURIDAD', body: ['La optimización del chasis y la aplicación de tecnologías de seguridad, garantizan que la carrocería permanezca sin distorsiones y libre de deformaciones. La estructura frontal de absorción de energía en tres etapas asegura que el compartimento de pasajeros se mantenga firme y confiable.'] },
      { type: 'stats', items: [
        { label: 'ACERO DE ALTA RESISTENCIA', value: '63.4', suffix: '%' },
        { label: 'MÁXIMA RIGIDEZ DE TORSIÓN', value: '25420', suffix: 'NM' },
        { label: 'ACERO FORMADO TÉRMICAMENTE', value: '20', suffix: 'POSICIONES' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-20.jpg` },
      { type: 'text', heading: 'SISTEMA DE CONTROL TODOTERRENO (ATS)', body: ['Puede optimizar automáticamente los diversos sistemas de control del vehículo, permitiendo que se adapte a diferentes tipos de terrenos.'] }
    ]
  },

  'bj40-pro': {
    comingSoon: true,
    hero: {
      title: 'BJ40 PRO',
      tagline: ['Elegancia se encuentra con expedición']
    }
  },

  'bj40-plus': {
    heroImage: bj40plus,
    hero: {
      title: 'BJ40 PLUS',
      tagline: ['Tanto en la ciudad como en la naturaleza extrema, un Todoterreno que personaliza todas tus exigencias.'],
      note: 'Motor nafta 2.0T, 221 caballos de fuerza, alta capacidad de carga y excelente rendimiento.'
    },
    sections: [
      { type: 'text', heading: 'SILUETA ROBUSTA CON ESTILO URBANO', body: ['Diseñado para ser completamente funcional.', 'No hay caminos que no puedas explorar con BAIC.'], bg: `${CDN}/2023/11/BJ40-1.jpg` },
      { type: 'text', heading: 'PERFORMANCE', body: [
        'El nuevo BJ40 PLUS cuenta con un motor de 2.0L Turbo, 221 caballos de fuerza y un torque de 380 (Nm/rpm) de rápida aceleración, baja velocidad de rotación, ahorro de energía y excelente rendimiento.',
        'Ángulo de entrada 37° · Ángulo de salida 31° · Ángulo ventral 23° · Profundidad máxima de vadeo >600 mm · Anchura máxima de cruce de zanjas >500 mm · Altura de cruce de barricada 350 mm',
        'VEHÍCULO MILITAR · Más de 1.000.000 km de Road Tests con los más altos estándares de calidad y tecnología militar.'
      ], bg: `${CDN}/2024/01/BJ40-3-BaicAR-Ene24-e1704769600997.jpg` },
      { type: 'text', heading: 'DISEÑO · ANILLOS LUMINOSOS', body: ['Potentes luces con 200 LED para explorar con total visibilidad los terrenos más salvajes y en condiciones meteorológicas adversas. Faros traseros full led con efecto "túnel".'], bg: `${CDN}/2023/11/BJ40-3.jpg` },
      { type: 'list', heading: 'EXPLORÁ UN NUEVO MUNDO OUTDOOR', items: [
        'Jaula antivuelco de alta resistencia de diseño reticular, garantizando al máximo la seguridad de los pasajeros.',
        'Chasis unido de forma flexible a la carrocería, lo que permite absorber mejor la energía y los impactos.',
        'Ganchos de remolque delanteros y traseros, pintados de rojo, otorgando gran personalidad y gran resistencia.',
        'Suspensión delantera y trasera optimizada para off road.',
        'Techo desmontable en 3 piezas.'
      ], bg: `${CDN}/2024/01/BJ40-5-B-BaicAR-Ene24.jpg` },
      { type: 'grid', heading: 'CONFIGURACIÓN INTELIGENTE', items: [
        { title: 'Motor 2.0T – 221CV – 380Nm', text: 'Inyección directa, variador árbol de levas y escape integral ofreciendo torque, potencia, bajo consumo y bajas emisiones.' },
        { title: 'Sistema de Tracción 2WD o 4WD', text: 'Modos de conducción: Snow, Sport, Comfort y Economy. Gracias a los 4 modos de conducción, podrá enfrentarse fácilmente a una gran variedad de condiciones meteorológicas y terrenos.' },
        { title: 'Caja de Cambios 8AT (marca ZF)', text: 'Ahorro de energía de alta eficiencia. Con un cambio suave y un rendimiento fiable, puede explorar todos los terrenos off road y on-road con estilo y comodidad.' },
        { title: 'Neumáticos Anchos 265/R17', text: 'De alta resistencia, fuerte absorción de impactos y alta capacidad de carga que mejoran la tracción de manera efectiva.' }
      ], bg: `${CDN}/2024/01/BJ40-6-BaicAR-Ene24.jpg` },
      { type: 'list', heading: 'BJ40, DISEÑADO PARA SER COMPLETAMENTE FUNCIONAL. PARA QUE SIEMPRE DISFRUTES DEL RECORRIDO.', items: [
        'Pantalla central touch de 10” Mirror Link, Bluetooth, y puerto USB para reproducción de video. Comando de voz. Imagen de marcha atrás en alta definición (HD).',
        'Tablero LCD de 12.3” con Survival y Off Road System. Muestra información de navegación como: ángulo de inclinación, dirección, presión de neumáticos, altitud y la presión atmosférica. Para dar rienda suelta a tus aventuras.',
        'Panel de control multimedia de estilo moderno y suave al tacto. Comandos de calefacción de asientos. Freno de mano eléctrico y modo AutoHold. Todas las funciones al alcance de tu mano.'
      ], bg: `${CDN}/2024/01/BJ40-17-BaicAR-Ene24.jpg` },
      { type: 'text', heading: 'INTERIOR', body: ['Cabina de amplias dimensiones diseñada con asientos electrónicos y calefaccionados, volante de cuero multifunción calefaccionado, iluminación LED multicolor aportando vitalidad y espíritu deportivo al ambiente. Espejo retrovisor con cámara de transmisión multimedia para maximizar el ángulo de visón trasera. Sistema inteligente de control de temperatura.'], bg: `${CDN}/2024/01/BJ40-PLUS-INTERIOR-1.jpg` },
      { type: 'text', heading: 'CONECTÁ CON TU ESTILO', body: ['Off Road.'], bg: `${CDN}/2024/01/BJ40-2-BaicAR-Ene24.jpg` },
      { type: 'text', heading: 'NUEVAS DIMENSIONES', body: ['Nuevas dimensiones del BJ40 Plus con una mayor distancia entre ejes garantizando una experiencia de conducción más estable y cómoda.', 'Para recorrer todo tipo de terrenos sin restricciones.'], bg: `${CDN}/2024/01/BJ40-PLUS-EXTERIOR.jpg` }
    ]
  },

  'bj60': {
    heroImage: bj60,
    hero: {
      title: 'BJ60',
      tagline: ['Un todoterreno híbrido', 'del más alto nivel.']
    },
    sections: [
      { type: 'stats', items: [
        { label: 'POTENCIA', value: '263', suffix: 'HP' },
        { label: 'TORQUE', value: '406', suffix: 'NM' },
        { label: 'MOTOR', value: '2000', suffix: 'CC' },
        { label: 'MILD HYBRID', value: '48', suffix: 'V' },
        { label: 'DISTANCIA ENTRE EJES', value: '2820', suffix: 'MM' }
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-25.jpg` },
      { type: 'grid', items: [
        { title: 'Llantas', text: 'Su tamaño de 20 pulgadas y su diseño moderno, logran que este todoterreno se destaque en cualquier situación.' },
        { title: 'Luces Traseras LED', text: 'Presentan un patrón abstracto que mejora la visibilidad y aporta un toque distintivo al diseño.' },
        { title: 'Luz de Freno', text: 'Inspirada en los baluartes de flechas de la Gran Muralla, simboliza fuerza y protección.' },
        { title: 'Parrilla Frontal Iluminada', text: 'En este modelo se incorpora una iluminación especial, heredando elementos característicos de la familia de los vehículos todoterreno de BAIC.' }
      ] },
      { type: 'text', heading: 'INTERIOR', body: ['El sistema de sonido premium Infinity, en combinación con los asientos de primera clase, lujosos y cómodos, proporcionan una experiencia de confort inigualable.'] },
      { type: 'grid', items: [
        { title: 'Interfaz de Cuatro Pantallas', text: 'Incorpora un sistema de visualización frontal W-HUD, ideal para escenarios todoterreno, con una distancia de proyección de hasta 2.2 metros.' },
        { title: 'Amplio Espacio · 7 asientos', text: 'Este modelo cuenta con una tercera fila de asientos, de muy fácil acceso, para adaptarse a diversas necesidades.' },
        { title: 'Techo Solar Panorámico', text: 'Incluye de serie un techo panorámico transparente de 0.82 m², ofreciendo una agradable sensación de amplitud y conexión con el exterior.' }
      ] },
      { type: 'text', heading: 'PERFORMANCE', body: ['El BJ60 es un todoterreno que combina un diseño robusto con tecnología de última generación para ofrecer una experiencia de conducción superior.'] },
      { type: 'grid', items: [
        { title: 'Sistema Global de Control Inteligente', text: 'Ofrece 9 modos de conducción y 17 combinaciones de manejo, optimizando el rendimiento del vehículo de acuerdo al terreno que esté transitando.' },
        { title: 'Neumáticos', text: '275/50 R20-HT' }
      ] },
      { type: 'grid', heading: 'TECNOLOGÍA', items: [
        { title: 'Imágenes Panorámicas 360°', text: 'Cámaras de alta definición que utilizan tecnología avanzada para proporcionar una vista completa alrededor del vehículo.' },
        { title: 'Chasis Transparente 180°', text: 'Muestra información precisa de los puntos ciegos debajo del chasis, reduciendo los riesgos durante la conducción.' },
        { title: 'Vista Aérea', text: 'Ofrece una visión del entorno, brindando una experiencia de conducción más segura.' },
        { title: 'Estacionamiento Autónomo', text: 'Con un solo clic, el vehículo puede estacionarse automáticamente, facilitando las maniobras en espacios reducidos.' }
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-14-C.jpg` },
      { type: 'list', heading: 'SISTEMAS AVANZADOS DE ASISTENCIA A LA CONDUCCIÓN', items: [
        'Advertencia de Apertura de Puertas',
        'Frenado de Emergencia Activo',
        'Advertencia de Tráfico Cruzado en Reversa',
        'Control de Crucero Adaptativo',
        'Reconocimiento de Señales de Tráfico',
        'Advertencia de Colisión Frontal',
        'Asistente de Mantenimiento de Carril'
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-15-V2.jpg` }
    ]
  },

  'u5-plus': {
    heroImage: u5plus,
    hero: {
      title: 'U5 PLUS',
      tagline: ['Es posible tener todo en un sedán.', 'Performance, Confort y Tecnología.']
    },
    sections: [
      { type: 'text', heading: 'EXTERIOR ELEGANTE, INTERIOR ESPACIOSO', body: ['Dimensiones (largo x ancho x alto): 4.660 x 1.820 x 1.480 mm', 'Distancia entre ejes: 2.670 mm'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-8.webp` },
      { type: 'text', heading: 'EXCELENTE COEFICIENTE AERODINÁMICO (0.28)', body: ['Disminución del consumo de combustible de manera eficiente y una mejor estabilidad en el camino.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-7.webp` },
      { type: 'text', heading: 'ESTRUCTURA DE SEGURIDAD ULTRA RESISTENTE', body: ['Acero de alta resistencia de hasta 1.500 MPa, para una mayor seguridad de los ocupantes ante una colisión.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-6.webp` },
      { type: 'text', heading: 'FAROS LED DE ÚLTIMA GENERACIÓN', body: ['Ajuste de altura y apagado retardado.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-9.webp` },
      { type: 'text', heading: 'DISEÑO INTERIOR ENVOLVENTE', body: ['Pantalla táctil central de 12,3”, conexión inalámbrica mirrorlink y bluetooth. Volante de cuero con comandos multifunción.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-10.webp` },
      { type: 'text', heading: 'CÓMODOS ASIENTOS MULTIFUNCIONALES', body: ['Tapizados en ecocuero con espuma engrosada y alargada.', 'Asientos integrados de gravedad cero.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-12.webp` },
      { type: 'text', heading: 'CABINA SILENCIOSA "TIPO BIBLIOTECA"', body: ['Gracias a una novedosa incorporación, el habitáculo logra obtener un volumen interior del ralentí de 40dB.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-5.jpg` }
    ]
  },

  'eu5': {
    heroImage: eu5,
    hero: {
      title: 'EU5',
      tagline: ['100% Eléctrico. Excelente Rendimiento, Potencia y Tecnología.'],
      note: 'Conducción confortable y sistemas avanzados de asistencia al conductor.'
    },
    sections: [
      { type: 'text', heading: 'ÚNICO EN SU ESTILO', body: ['Desde su diseño aerodinámico hasta sus líneas elegantes, este vehículo cautiva con su presencia.'], bg: `${CDN}/2024/11/BAIC-EU5-5.jpg` },
      { type: 'text', heading: 'GRAN DISTANCIA ENTRE EJES', body: ['|- 2670 MM -|', 'Además para mayor confort en la conducción, cuenta con suspensión multibrazo.'], bg: `${CDN}/2024/12/BAIC-EU5-17.jpg` },
      { type: 'text', heading: 'ÓPTICAS LED', body: ['Una estética moderna, logrando un equilibrio perfecto entre forma y funcionalidad.'], bg: `${CDN}/2024/11/BAIC-EU5-10.jpg` },
      { type: 'text', heading: 'FAROS TRASEROS', body: ['Los faros LED de alta tecnología proporcionan una iluminación nítida y potente, además de garantizar un menor consumo de energía, contribuyendo a su eficiencia.'], bg: `${CDN}/2024/11/BAIC-EU5-7.jpg` },
      { type: 'text', heading: 'ESPACIO INTERIOR CONFORTABLE', body: ['Una experiencia inigualable para cada uno de sus ocupantes.'], bg: `${CDN}/2024/11/BAIC-EU5-6.jpg` },
      { type: 'text', heading: 'PANTALLA MULTIMEDIA DE 9"', body: ['Con una interfaz intuitiva y funciones inteligentes, disfrutá del control total mientras navegás con estilo y seguridad.'], bg: `${CDN}/2024/11/BAIC-EU5-3.jpg` },
      { type: 'text', heading: 'MÁXIMO TORQUE QUE ALCANZA LOS 240 NM', body: ['Potencia de 120kw y una aceleración de 0 a 100 km/h en 8,8".'], bg: `${CDN}/2024/11/BAIC-EU5-9.jpg` },
      { type: 'list', heading: 'BATERÍA DE ALTA ENERGÍA DE NUEVA GENERACIÓN DE CATL 151WH/KG', items: [
        'Buen rendimiento de trabajo en condiciones de temperatura baja.',
        'El grado de protección del sello de toda la estructura alcanzó IP67.',
        'Más de 30 estándares de pruebas internacionales.'
      ], bg: `${CDN}/2024/11/BAIC-EU5-1.jpg` }
    ]
  }
}
