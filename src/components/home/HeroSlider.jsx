import { useEffect, useState } from 'react'
import { AppLink } from '../ui/index.js'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/index.js'
import { heroSlides } from '../../data/heroSlides.js'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5300)
    return () => clearInterval(id)
  }, [])

  const goTo = (i) => setCurrent((i + heroSlides.length) % heroSlides.length)

  return (
    <section className="hero">
      {heroSlides.map((slide, i) => (
        <div key={slide.id} className={`slide ${i === current ? 'active' : ''}`}>
          {slide.image ? (
            <img className="slide-bg" src={slide.image} alt={slide.title} />
          ) : (
            <div className="ph">Banner {slide.title}</div>
          )}
          <div className="slide-content">
            {slide.logo ? (
              <img className="slide-logo" src={slide.logo} alt={slide.title} />
            ) : (
              <h2>{slide.title}</h2>
            )}
            <AppLink to={slide.to} className="ui-button ui-button--outline ui-button--md">{slide.cta}</AppLink>
          </div>
        </div>
      ))}
      <button className="slide-arrow prev" onClick={() => goTo(current - 1)} aria-label="Anterior">
        <ChevronLeftIcon size={64} />
      </button>
      <button className="slide-arrow next" onClick={() => goTo(current + 1)} aria-label="Siguiente">
        <ChevronRightIcon size={64} />
      </button>
      <div className="slide-dots">
        {heroSlides.map((slide, i) => (
          <button key={slide.id} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Ir a slide ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
