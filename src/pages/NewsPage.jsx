import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppLink } from '../components/ui/index.js'
import { fetchNews, selectNews } from '../features/news/index.js'
import { newsHero } from '../data/newsHero.js'

export default function NewsPage() {
  const dispatch = useDispatch()
  const items = useSelector(selectNews)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <>
      <section className="news-hero" style={newsHero ? { backgroundImage: `url(${newsHero})` } : undefined}>
        {!newsHero && <div className="ph">Foto de novedades BAIC (X55 II)</div>}
        <div className="news-hero__badge">
          <h2>Novedades de BAIC en Argentina y el Mundo.</h2>
        </div>
      </section>

      <div className="container news-page">
        <div className="news-grid">
          {items.map((item) => (
            <article key={item.id} className="news-card">
              <AppLink to={`/novedades/${item.id}`} className="news-card__img">
                {item.image ? (
                  <div className="news-card__img-inner" style={{ backgroundImage: `url(${item.image})` }} />
                ) : (
                  <div className="ph">Imagen: {item.title}</div>
                )}
                <span className="news-card__img-overlay" />
              </AppLink>
              <h4><AppLink to={`/novedades/${item.id}`}>{item.title}</AppLink></h4>
              <p>{item.excerpt}</p>
              <AppLink to={`/novedades/${item.id}`} className="news-card__read">Leer más »</AppLink>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
