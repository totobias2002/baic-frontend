import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVehicleBySlug, selectVehicleDetail, selectVehicleDetailStatus } from '../features/vehicleDetail/index.js'
import { modelDetails } from '../data/modelDetails.js'

function formatStatValue(current, original) {
  const isDecimal = String(original).includes('.')
  if (isDecimal) return current.toFixed(2)
  return Math.round(current).toLocaleString('es-AR')
}

function StatCounter({ value, active, duration = 2200 }) {
  const target = parseFloat(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active || Number.isNaN(target)) return undefined
    const start = performance.now()
    let raf
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(target * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return <strong>{formatStatValue(active ? current : 0, value)}</strong>
}

function Section({ section, index }) {
  const side = index % 2 === 0 ? 'is-right' : 'is-left'
  const isWideStats = Boolean(section.counters)
  const style = section.bg && !isWideStats ? { backgroundImage: `url(${section.bg})` } : undefined
  const sectionRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    if (!section.counters) return undefined
    const el = sectionRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [section.counters])

  // Sección especial de stats con contador animado: en vez de recortar la foto como
  // fondo (lo que tapaba el auto), se apila logo / foto completa / números para que
  // nada se superponga al vehículo, igual que se ve en la web original.
  if (isWideStats) {
    return (
      <section className="vehicle-section vehicle-stats-section" ref={sectionRef}>
        {section.logo && <img src={section.logo} alt="" className="vehicle-stats-section__logo" />}
        {section.bg && <img src={section.bg} alt="" className="vehicle-stats-section__photo" />}
        <div className="vehicle-stats vehicle-stats--center">
          {section.items.map((s, i) => (
            <div className="vehicle-stats__item" key={i}>
              {s.label && <span className="vehicle-stats__label">{s.label}</span>}
              <span className="vehicle-stats__value">
                {s.value && /^-?\d+(\.\d+)?$/.test(s.value)
                  ? <StatCounter value={s.value} active={statsVisible} />
                  : s.value && <strong>{s.value}</strong>} {s.suffix}
              </span>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Sección de foto completa con título siempre visible y texto que solo aparece
  // al pasar el cursor (mismo widget "premium-banner" que usa el original para "Interior").
  if (section.hoverReveal) {
    return (
      <section className="vehicle-section vehicle-photogrid vehicle-photogrid--single" ref={sectionRef}>
        <div className="vehicle-photogrid__item" style={{ backgroundImage: `url(${section.bg})` }}>
          <span className="vehicle-photogrid__scrim" />
          <div className="vehicle-photogrid__caption">
            {section.heading && <span className="vehicle-photogrid__title">{section.heading}</span>}
            {section.body?.map((p, i) => <p className="vehicle-photogrid__text" key={i}>{p}</p>)}
          </div>
        </div>
      </section>
    )
  }

  // Grilla de fotos (mosaico): reemplaza las cards de solo texto por las fotos reales
  // del modelo, con el título superpuesto abajo a la izquierda, igual que el original.
  if (section.type === 'photo-grid') {
    return (
      <section className={`vehicle-section vehicle-photogrid vehicle-photogrid--${section.layout || 'equal'}`} ref={sectionRef}>
        {section.items.map((item, i) => (
          <div className="vehicle-photogrid__item" key={i} style={{ backgroundImage: `url(${item.image})` }}>
            <span className="vehicle-photogrid__scrim" />
            <div className="vehicle-photogrid__caption">
              <span className="vehicle-photogrid__title">{item.title}</span>
              {item.text && <p className="vehicle-photogrid__text">{item.text}</p>}
            </div>
          </div>
        ))}
      </section>
    )
  }

  return (
    <section className={`vehicle-section ${side} ${section.bg ? '' : 'vehicle-section--plain'}`} style={style} ref={sectionRef}>
      {section.bg && <div className="vehicle-section__scrim" />}
      <div className={`vehicle-section__inner ${section.wide ? 'vehicle-section__inner--wide' : ''}`}>
        {section.heading && <h2>{section.heading}</h2>}

        {section.type === 'text' && section.body.map((p, i) => <p key={i}>{p}</p>)}

        {section.type === 'stats' && (
          <div className="vehicle-stats">
            {section.items.map((s, i) => (
              <div className="vehicle-stats__item" key={i}>
                {s.label && <span className="vehicle-stats__label">{s.label}</span>}
                <span className="vehicle-stats__value">
                  {s.value && <strong>{s.value}</strong>} {s.suffix}
                </span>
              </div>
            ))}
          </div>
        )}

        {section.type === 'list' && (
          <ul className="vehicle-list">
            {section.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}

        {section.type === 'grid' && (
          <div className="vehicle-grid">
            {section.items.map((item, i) => (
              <div className="vehicle-grid__item" key={i}>
                {item.video && (
                  <video className="vehicle-grid__media" src={item.video} autoPlay loop muted playsInline />
                )}
                {item.image && !item.video && (
                  <img className="vehicle-grid__media" src={item.image} alt="" />
                )}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function GalleryCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const count = images.length

  const goTo = (i) => setIndex(((i % count) + count) % count)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  useEffect(() => {
    images.forEach((src) => { const img = new Image(); img.src = src })
  }, [images])

  return (
    <section className="vehicle-gallery">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`vehicle-gallery__img ${i === index ? 'is-active' : ''}`}
        />
      ))}

      <button type="button" className="vehicle-gallery__arrow vehicle-gallery__arrow--prev" onClick={prev} aria-label="Foto anterior">
        <span>&#8249;</span>
      </button>
      <button type="button" className="vehicle-gallery__arrow vehicle-gallery__arrow--next" onClick={next} aria-label="Foto siguiente">
        <span>&#8250;</span>
      </button>

      <div className="vehicle-gallery__dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`vehicle-gallery__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// Sección de video a pantalla completa con controles nativos (no autoplay/loop),
// igual al video que usa el original justo después del hero.
function VideoFeature({ src, poster }) {
  return (
    <section className="vehicle-section vehicle-video-feature">
      <video className="vehicle-video-feature__media" src={src} poster={poster} controls playsInline />
    </section>
  )
}

function ThreeSixtyViewer({ images }) {
  const containerRef = useRef(null)
  const dragRef = useRef({ dragging: false, startX: 0, startFrame: 0, moved: false })
  const [frame, setFrame] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [lens, setLens] = useState({ x: 0, y: 0 })
  const frameCount = images.length
  const lensSize = 170
  const zoomFactor = 2.4

  useEffect(() => {
    images.forEach((src) => { const img = new Image(); img.src = src })
  }, [images])

  const updateFrameFromDrag = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const delta = clientX - dragRef.current.startX
    if (Math.abs(delta) > 3) dragRef.current.moved = true
    const framesDelta = Math.round((delta / rect.width) * frameCount * 1.6)
    let next = (dragRef.current.startFrame - framesDelta) % frameCount
    if (next < 0) next += frameCount
    setFrame(next)
  }

  const updateLens = (clientX, clientY) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    const y = Math.min(Math.max(clientY - rect.top, 0), rect.height)
    setLens({ x, y, rectW: rect.width, rectH: rect.height })
  }

  const onPointerDown = (e) => {
    dragRef.current = { dragging: true, startX: e.clientX, startFrame: frame, moved: false }
    containerRef.current.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    updateLens(e.clientX, e.clientY)
    if (dragRef.current.dragging) updateFrameFromDrag(e.clientX)
  }
  const onPointerUp = (e) => {
    dragRef.current.dragging = false
    try { containerRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }

  const showLens = hovering && !dragRef.current.dragging

  return (
    <div
      className="threesixty"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => { setHovering(false); dragRef.current.dragging = false }}
    >
      <img src={images[frame]} alt="Vista 360" className="threesixty__img" draggable={false} />

      {showLens && lens.rectW && (
        <div
          className="threesixty__lens"
          style={{
            left: lens.x - lensSize / 2,
            top: lens.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            backgroundImage: `url(${images[frame]})`,
            backgroundSize: `${lens.rectW * zoomFactor}px ${lens.rectH * zoomFactor}px`,
            backgroundPosition: `-${lens.x * zoomFactor - lensSize / 2}px -${lens.y * zoomFactor - lensSize / 2}px`
          }}
        />
      )}

      <div className="threesixty__badge">
        <span>360°</span>
        <small>view</small>
      </div>
    </div>
  )
}

const DFLIP_CSS = 'https://baic.com.ar/wp-content/plugins/3d-flipbook-dflip-lite/assets/css/dflip.min.css'
const DFLIP_JQUERY = 'https://baic.com.ar/wp-includes/js/jquery/jquery.min.js'
const DFLIP_JS = 'https://baic.com.ar/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/dflip.min.js'

function loadAsset(tag, attrs, testSelector) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(testSelector)
    if (existing) {
      if (existing.dataset.loaded === 'true') return resolve()
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }
    const el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => { el[k] = v })
    el.addEventListener('load', () => { el.dataset.loaded = 'true'; resolve() }, { once: true })
    el.addEventListener('error', reject, { once: true })
    document.head.appendChild(el)
  })
}

// Widget "3D FlipBook - dFlip" idéntico al que usa baic.com.ar (mismo JS/CSS del plugin
// y misma estructura de markup + config que genera su shortcode de Elementor).
function DflipBrochure({ pdfUrl, slug, title }) {
  const bookId = `df_${slug}`

  useEffect(() => {
    let cancelled = false

    loadAsset('link', { rel: 'stylesheet', href: DFLIP_CSS }, 'link[href*="dflip.min.css"]')
      .then(() => loadAsset('script', { src: DFLIP_JQUERY }, 'script[src*="jquery.min.js"]'))
      .then(() => loadAsset('script', { src: DFLIP_JS }, 'script[src*="dflip.min.js"]'))
      .then(() => {
        if (cancelled) return
        window[`option_${bookId}`] = {
          outline: [],
          backgroundColor: '#FFFFFF',
          autoEnableOutline: 'false',
          autoEnableThumbnail: 'false',
          overwritePDFOutline: 'false',
          direction: '1',
          pageSize: '1',
          pageMode: '1',
          singlePageMode: '2',
          soundEnable: 'false',
          source: pdfUrl,
          wpOptions: 'true'
        }
        if (window.DFLIP && window.DFLIP.parseBooks) {
          window.DFLIP.parseBooks()
        }
      })
      .catch(() => { /* si el CDN del plugin no responde, se deja el contenedor vacío */ })

    return () => { cancelled = true }
  }, [pdfUrl, bookId])

  return (
    <div
      className="_df_book df-lite df-element"
      id={bookId}
      _slug={slug}
      data-title={title}
      wpoptions="true"
      thumbtype=""
    />
  )
}

export default function VehicleDetailPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const vehicle = useSelector(selectVehicleDetail)
  const status = useSelector(selectVehicleDetailStatus)
  const detail = modelDetails[slug]
  const [colorIndex, setColorIndex] = useState(0)
  const containerRef = useRef(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    dispatch(fetchVehicleBySlug(slug))
    window.scrollTo(0, 0)
    setColorIndex(0)
  }, [dispatch, slug])

  // Scroll paginado: una rueda de mouse/trackpad avanza exactamente una pantalla,
  // igual que el comportamiento de la web original.
  useEffect(() => {
    if (detail?.comingSoon) return undefined
    const container = containerRef.current
    if (!container) return undefined

    const getSections = () => Array.from(container.querySelectorAll('.vehicle-hero, .vehicle-video-feature, .vehicle-gallery, .vehicle-section, .vehicle-360'))

    const getCurrentIndex = (sections) => {
      const y = window.scrollY + 5
      let idx = 0
      sections.forEach((el, i) => {
        if (el.offsetTop <= y) idx = i
      })
      return idx
    }

    const animateTo = (el) => {
      isAnimatingRef.current = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => { isAnimatingRef.current = false }, 650)
    }

    const onWheel = (e) => {
      if (isAnimatingRef.current) { e.preventDefault(); return }
      const sections = getSections()
      if (!sections.length) return
      const currentIndex = getCurrentIndex(sections)
      const lastSection = sections[sections.length - 1]
      const inFooterZone = window.scrollY > lastSection.offsetTop + lastSection.offsetHeight - 5

      if (e.deltaY > 0) {
        if (currentIndex < sections.length - 1) {
          e.preventDefault()
          animateTo(sections[currentIndex + 1])
        }
        // en la última sección se deja el scroll libre para llegar al footer
      } else if (e.deltaY < 0) {
        if (inFooterZone) {
          e.preventDefault()
          animateTo(lastSection)
        } else if (currentIndex > 0) {
          e.preventDefault()
          animateTo(sections[currentIndex - 1])
        }
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [detail, slug, vehicle])

  if (status === 'loading' && !vehicle) return <div className="container"><p>Cargando modelo...</p></div>
  if (!vehicle) return <div className="container"><p>No encontramos este modelo.</p></div>

  if (detail?.comingSoon) {
    return (
      <section className="vehicle-teaser">
        <div className="vehicle-teaser__logo">BAIC</div>
        <h1 className="vehicle-teaser__model">{detail.hero.title}</h1>
        <p className="vehicle-teaser__tagline">{detail.hero.tagline[0]}</p>
      </section>
    )
  }

  const hero = detail?.hero
  const colors = detail?.colors
  const heroImage = (colors && colors[colorIndex]?.image) || detail?.heroImage || vehicle.image

  return (
    <div className="vehicle-detail" ref={containerRef}>
      <section className="vehicle-hero">
        <div className="vehicle-hero__text">
          <h1>{hero ? hero.title : vehicle.name}</h1>
          {(hero ? hero.tagline : [vehicle.tagline]).map((line, i) => <p key={i}>{line}</p>)}
          {hero?.note && <p className="vehicle-hero__note">{hero.note}</p>}
          {colors && (
            <div className="vehicle-hero__colors">
              {colors.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  className={`vehicle-hero__color ${i === colorIndex ? 'is-active' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Color ${i + 1}`}
                  onClick={() => setColorIndex(i)}
                />
              ))}
            </div>
          )}
          <button type="button" className="vehicle-hero__catalogo">CATÁLOGO</button>
        </div>
        <div className="vehicle-hero__image">
          {heroImage ? <img src={heroImage} alt={vehicle.name} /> : <div className="ph">{vehicle.name}</div>}
        </div>
      </section>

      {detail?.video && <VideoFeature src={detail.video.src} poster={detail.video.poster} />}

      {detail?.gallery && <GalleryCarousel images={detail.gallery.images} />}

      {detail?.sections?.map((section, i) => <Section section={section} index={i} key={i} />)}

      {detail?.view360 && (
        <section className="vehicle-360">
          {detail.view360.bgText && <span className="vehicle-360__bgtext">{detail.view360.bgText}</span>}
          <div className="vehicle-360__car">
            {detail.view360.images
              ? <ThreeSixtyViewer images={detail.view360.images} />
              : <img src={detail.view360.image} alt={`${vehicle.name} 360`} />}
          </div>
          {detail?.footnote && <p className="vehicle-footnote vehicle-footnote--360">{detail.footnote}</p>}
        </section>
      )}

      {!detail?.view360 && detail?.footnote && <p className="vehicle-footnote">{detail.footnote}</p>}

      {detail?.brochure && (
        <section className="vehicle-brochure">
          <div className="vehicle-brochure__frame">
            <div className="vehicle-brochure__bar">
              <span>MANUAL {hero ? hero.title : vehicle.name}</span>
              <a href={detail.brochure.pdf} target="_blank" rel="noopener noreferrer" download className="vehicle-brochure__download">
                Descargar folleto
              </a>
            </div>
            <DflipBrochure pdfUrl={detail.brochure.pdf} slug={slug} title={hero ? hero.title : vehicle.name} />
          </div>
        </section>
      )}
    </div>
  )
}
