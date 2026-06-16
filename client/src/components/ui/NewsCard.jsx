import { Link } from 'react-router-dom'
import './NewsCard.css'

const NewsCard = ({ image, category, title, author, date, readTime, excerpt, featured }) => {
  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      <div className="news-card-image">
        <img src={image} alt={title} />
        <span className={`news-badge ${category.toLowerCase()}`}>
          {category}
        </span>
      </div>
      <div className="news-card-body">
        <h3>
          <Link to="#">{title}</Link>
        </h3>
        <div className="news-card-meta">
          <span><i className="fas fa-user"></i> {author}</span>
          <span><i className="fas fa-calendar-alt"></i> {date}</span>
          {readTime && <span><i className="fas fa-clock"></i> {readTime}</span>}
        </div>
        {excerpt && <p className="news-card-excerpt">{excerpt}</p>}
        <Link to="#" className="news-read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  )
}

export default NewsCard