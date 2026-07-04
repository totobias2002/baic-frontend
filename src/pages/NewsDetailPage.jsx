import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNews } from '../features/news/index.js'
import { formatDate } from '../helpers/formatters.js'

export default function NewsDetailPage() {
  const { newsId } = useParams()
  const items = useSelector(selectNews)
  const item = items.find((n) => n.id === newsId)

  if (!item) return <div className="container"><p>No encontramos esta noticia.</p></div>

  return (
    <div className="container news-page">
      <h1>{item.title}</h1>
      <p>{formatDate(item.date)} — {item.category}</p>
      <div className="ph" style={{ aspectRatio: '16/9', marginBottom: 20 }}>Imagen: {item.title}</div>
      <p>{item.excerpt}</p>
    </div>
  )
}
