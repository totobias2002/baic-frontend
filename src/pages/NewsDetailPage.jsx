import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNews } from '../features/news/index.js'
import { newsDetails } from '../data/newsDetails.js'

export default function NewsDetailPage() {
  const { newsId } = useParams()
  const items = useSelector(selectNews)
  const item = items.find((n) => n.id === newsId)
  const detail = newsDetails[newsId]

  if (!item) {
    return (
      <div className="container news-page">
        <p>No encontramos esta noticia.</p>
      </div>
    )
  }

  const media = detail?.media
  const titleStyle = detail
    ? { fontSize: detail.titleSize ? `${detail.titleSize}px` : undefined, fontWeight: detail.titleWeight || undefined }
    : undefined
  const bodyMarginTop = detail ? (detail.bodyMarginTop ?? (media?.type === 'full' ? 0 : 88)) : undefined

  return (
    <div className="container news-page news-detail">
      {media?.type === 'badge' && (
        media.src ? (
          <img className="news-detail__badge" src={media.src} alt={item.title} />
        ) : (
          <div className="ph news-detail__badge">Imagen: {item.title}</div>
        )
      )}

      {!detail && (
        <div className="news-detail__img" style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}>
          {!item.image && <div className="ph">Imagen: {item.title}</div>}
        </div>
      )}

      <h1 style={titleStyle}>{item.title}</h1>

      {media?.type === 'full' && (
        media.src ? (
          <img
            className="news-detail__media"
            style={{ aspectRatio: media.aspect, maxWidth: media.maxWidth ? `${media.maxWidth}px` : undefined }}
            src={media.src}
            alt={item.title}
          />
        ) : (
          <div
            className="ph news-detail__media"
            style={{ aspectRatio: media.aspect, maxWidth: media.maxWidth ? `${media.maxWidth}px` : undefined }}
          >
            Imagen: {item.title}
          </div>
        )
      )}

      {detail ? (
        <div className="news-detail__body" style={{ marginTop: bodyMarginTop }}>
          {detail.body.map((block, i) => {
            if (block.type === 'list') {
              return (
                <ul key={i} className="news-detail__list">
                  {block.items.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              )
            }
            if (block.type === 'divider') {
              return <hr key={i} className="news-detail__divider" />
            }
            if (block.type === 'image') {
              return block.src ? (
                <img
                  key={i}
                  className="news-detail__inline-media"
                  style={{ aspectRatio: block.aspect, maxWidth: block.maxWidth ? `${block.maxWidth}px` : undefined }}
                  src={block.src}
                  alt={item.title}
                />
              ) : (
                <div
                  key={i}
                  className="ph news-detail__inline-media"
                  style={{ aspectRatio: block.aspect, maxWidth: block.maxWidth ? `${block.maxWidth}px` : undefined }}
                >
                  Imagen: {item.title}
                </div>
              )
            }
            const style = block.align ? { textAlign: block.align } : undefined
            if (block.html) {
              return <p key={i} style={style} dangerouslySetInnerHTML={{ __html: block.html }} />
            }
            return <p key={i} className={block.italic ? 'is-italic' : undefined} style={style}>{block.text}</p>
          })}
          {detail.footnote && <p className="news-detail__footnote">{detail.footnote}</p>}
        </div>
      ) : (
        <p>{item.excerpt}</p>
      )}
    </div>
  )
}
