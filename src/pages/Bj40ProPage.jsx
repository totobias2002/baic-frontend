import { useEffect, useRef, useState, useCallback } from 'react'
import { bj40ProSlides, bj40ProHero } from '../data/bj40ProContent.js'

// BJ40 Pro usa, en el sitio real, un microsite aparte (baic.com.ar/bj40pro/) que es un
// slideshow a pantalla completa: cada "pantalla" ocupa el 100% del viewport y se avanza
// de a una con la rueda del mouse o el dedo (nunca hay scroll libre), con paginación a la
// derecha y flechas arriba/abajo. Este componente reproduce esa mecánica exacta -a
// diferencia del resto de los modelos, que son páginas de scroll normal- porque así es
// como se ve el original.

function StatValue({ value, active, suffix }) {
  const isNumeric = /^-?\d+(\.\d+)?$/.test(value)
  const target = parseFloat(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isNumeric || !active) return undefined
    const start = performance.now()
    const duration = 1800
    let raf
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(target * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, isNumeric, target])

  if (!isNumeric) return <strong>{value}</strong>
  const display = String(value).includes('.') ? current.toFixed(2) : Math.round(current).toLocaleString('es-AR')
  return <><strong>{display}</strong> {suffix}</>
}

function HeroSlide({ active }) {
  return (
    <div className={`bj40pro-slide bj40pro-slide--hero ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-slide__bg bj40pro-slide__bg--kenburns" style={{ backgroundImage: `url(${bj40ProHero.bg})` }} />
      <div className="bj40pro-slide__scrim bj40pro-slide__scrim--center" />
      <div className="bj40pro-hero-brand">
        <span className="bj40pro-hero-brand__baic">{bj40ProHero.brand}</span>
        <span className="bj40pro-hero-brand__model">{bj40ProHero.model}</span>
        <span className="bj40pro-hero-brand__tagline">{bj40ProHero.tagline}</span>
      </div>
    </div>
  )
}

function ContentSlide({ slide, active }) {
  return (
    <div className={`bj40pro-slide ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-slide__bg" style={{ backgroundImage: `url(${slide.bg})` }} />
      <div className="bj40pro-slide__scrim" />
      <div className="bj40pro-slide__caption">
        <h2>{slide.heading}</h2>
        <p>{slide.body}</p>
      </div>
    </div>
  )
}

function AtsSlide({ slide, active, terrainIndex, onSelectTerrain }) {
  const terrain = slide.terrain[terrainIndex]
  return (
    <div className={`bj40pro-slide ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-slide__bg" style={{ backgroundImage: `url(${terrain.bg})` }} />
      <div className="bj40pro-slide__scrim" />
      <div className="bj40pro-slide__caption">
        <h2>{slide.heading}</h2>
        <p>{slide.body}</p>
      </div>
      <div className="bj40pro-terrain">
        {slide.terrain.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={`bj40pro-terrain__btn ${i === terrainIndex ? 'is-active' : ''}`}
            onClick={() => onSelectTerrain(i)}
          >
            <img src={t.icon} alt="" />
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function SpecsSlide({ slide, active }) {
  // "esargument-img" es un gráfico ya compuesto (fondo transparente) con el diagrama de
  // ángulos de aproximación/salida dibujado adentro -no una foto de fondo-, así que se
  // muestra tal cual (object-fit:contain) en vez de estirarlo como background y duplicar
  // el texto encima.
  return (
    <div className={`bj40pro-slide bj40pro-slide--specs ${active ? 'is-active' : ''}`}>
      <img className="bj40pro-specs-diagram" src={slide.bg} alt="" />

      <div className="bj40pro-specs-row">
        {slide.stats.map((s) => (
          <div className="bj40pro-specs-row__item" key={s.label}>
            <span className="bj40pro-specs-row__label">{s.label}</span>
            <span className="bj40pro-specs-row__value"><StatValue value={s.value} suffix={s.suffix} active={active} /></span>
          </div>
        ))}
      </div>

      <div className="bj40pro-specs-row bj40pro-specs-row--secondary">
        {slide.extra.map((s) => (
          <div className="bj40pro-specs-row__item" key={s.label}>
            <span className="bj40pro-specs-row__label">{s.label}</span>
            <span className="bj40pro-specs-row__value"><StatValue value={s.value} suffix={s.suffix} active={active} /></span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CarouselSlide({ slide, active, subIndex, onPrev, onNext }) {
  const item = slide.items[subIndex]
  return (
    <div className={`bj40pro-slide ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-slide__bg" style={{ backgroundImage: `url(${item.image})` }} />
      <div className="bj40pro-slide__scrim" />
      <span className="bj40pro-slide__eyebrow">{slide.heading}</span>
      <div className="bj40pro-slide__caption bj40pro-slide__caption--carousel">
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>

      <button type="button" className="bj40pro-carousel-arrow bj40pro-carousel-arrow--prev" onClick={onPrev} aria-label="Anterior" disabled={subIndex === 0}>
        <span>&#8249;</span>
      </button>
      <button type="button" className="bj40pro-carousel-arrow bj40pro-carousel-arrow--next" onClick={onNext} aria-label="Siguiente" disabled={subIndex === slide.items.length - 1}>
        <span>&#8250;</span>
      </button>

      <div className="bj40pro-carousel-dots">
        {slide.items.map((_, i) => (
          <span key={i} className={`bj40pro-carousel-dots__dot ${i === subIndex ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default function Bj40ProPage() {
  const total = bj40ProSlides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [terrainIndex, setTerrainIndex] = useState(0)
  const [released, setReleased] = useState(false)
  const lockRef = useRef(false)
  const touchStartRef = useRef(0)
  const rootRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const currentSlide = bj40ProSlides[activeIndex]
  const isCarousel = currentSlide.type === 'carousel'
  const subMax = isCarousel ? currentSlide.items.length - 1 : 0

  const lock = useCallback(() => {
    lockRef.current = true
    window.setTimeout(() => { lockRef.current = false }, 750)
  }, [])

  const goTo = useCallback((index) => {
    if (index < 0 || index > total - 1) return
    lock()
    setActiveIndex(index)
    setSubIndex(0)
    if (index !== activeIndex) setTerrainIndex(0)
  }, [activeIndex, lock, total])

  const advance = useCallback((dir) => {
    if (lockRef.current) return false

    if (isCarousel) {
      if (dir > 0 && subIndex < subMax) { lock(); setSubIndex((s) => s + 1); return true }
      if (dir < 0 && subIndex > 0) { lock(); setSubIndex((s) => s - 1); return true }
    }

    if (dir > 0) {
      if (activeIndex < total - 1) { goTo(activeIndex + 1); return true }
      setReleased(true)
      return false
    }
    if (activeIndex > 0) { goTo(activeIndex - 1); return true }
    return false
  }, [activeIndex, goTo, isCarousel, lock, subIndex, subMax, total])

  // Mientras no se llegó a la última pantalla, cada gesto de rueda/touch/flecha avanza
  // exactamente una pantalla (preventDefault bloquea el scroll nativo). Al llegar al final
  // se deja de interceptar el wheel y el scroll normal del navegador revela el footer.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const onWheel = (e) => {
      if (released) return
      // Se bloquea SIEMPRE el scroll nativo mientras dure el recorrido paginado (aunque
      // este evento puntual esté dentro de la ventana de lock), para que un gesto de rueda
      // con muchos eventos wheel seguidos no "filtre" scroll real de a poco.
      e.preventDefault()
      advance(e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e) => {
      if (released) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') advance(1)
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') advance(-1)
    }
    const onTouchStart = (e) => { touchStartRef.current = e.touches[0].clientY }
    const onTouchMove = (e) => {
      if (released) return
      const delta = touchStartRef.current - e.touches[0].clientY
      if (Math.abs(delta) > 8) e.preventDefault()
    }
    const onTouchEnd = (e) => {
      const delta = touchStartRef.current - e.changedTouches[0].clientY
      if (Math.abs(delta) > 40) advance(delta > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [advance, released])

  return (
    <div className={`bj40pro ${released ? 'bj40pro--released' : ''}`} ref={rootRef}>
      <div className="bj40pro-pager">
        {bj40ProSlides.map((slide, i) => {
          const active = i === activeIndex
          if (!active && Math.abs(i - activeIndex) > 1) return null

          if (slide.type === 'hero') return <HeroSlide key={i} active={active} />
          if (slide.type === 'ats') {
            return (
              <AtsSlide
                key={i}
                slide={slide}
                active={active}
                terrainIndex={active ? terrainIndex : 0}
                onSelectTerrain={setTerrainIndex}
              />
            )
          }
          if (slide.type === 'specs') return <SpecsSlide key={i} slide={slide} active={active} />
          if (slide.type === 'carousel') {
            return (
              <CarouselSlide
                key={i}
                slide={slide}
                active={active}
                subIndex={active ? subIndex : 0}
                onPrev={() => setSubIndex((s) => Math.max(0, s - 1))}
                onNext={() => setSubIndex((s) => Math.min(slide.items.length - 1, s + 1))}
              />
            )
          }
          return <ContentSlide key={i} slide={slide} active={active} />
        })}

        <button type="button" className="bj40pro-navchevron bj40pro-navchevron--up" onClick={() => advance(-1)} aria-label="Pantalla anterior" style={{ opacity: activeIndex === 0 ? 0.25 : 1 }}>
          <span>&#8963;</span>
        </button>
        <button type="button" className="bj40pro-navchevron bj40pro-navchevron--down" onClick={() => advance(1)} aria-label="Pantalla siguiente">
          <span>&#8964;</span>
        </button>

        <div className="bj40pro-dots">
          {bj40ProSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`bj40pro-dots__dot ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a la pantalla ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {released && (
        <button type="button" className="bj40pro-back-top" onClick={() => { setReleased(false); setActiveIndex(total - 1) }}>
          Volver al recorrido ↑
        </button>
      )}
    </div>
  )
}
