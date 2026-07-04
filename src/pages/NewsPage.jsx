import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppLink } from '../components/ui/index.js'
import { fetchNews, selectNews } from '../features/news/index.js'
import { formatDate, truncateText } from '../helpers/formatters.js'

export default function NewsPage() {
  const dispatch = useDispatch()
  const items = useSelector(selectNews)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className="container news-page">
      <h1>Novedades</h1>
      <div className="news-grid">
        {items.map((item) => (
          <div key={item.id} className="news-card">
            <div className="ph">Imagen: {item.title}</div>
            <h4>{item.title}</h4>
            <p>{formatDate(item.date)}</p>
            <p>{truncateText(item.excerpt, 140)}</p>
            <AppLink to={`/novedades/${item.id}`} className="read">Leer más »</AppLink>
          </div>
        ))}
      </div>
    </div>
  )
}
