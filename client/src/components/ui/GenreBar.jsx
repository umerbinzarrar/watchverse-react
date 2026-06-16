import { Link } from 'react-router-dom'
import './GenreBar.css'

const genres = [
  { label: 'Action',      icon: 'fas fa-fist-raised',   color: '#e91e8c' },
  { label: 'Romance',     icon: 'fas fa-heart',          color: '#ff6b6b' },
  { label: 'Sci-Fi',      icon: 'fas fa-rocket',         color: '#00b4d8' },
  { label: 'Thriller',    icon: 'fas fa-skull',          color: '#7b2fff' },
  { label: 'Comedy',      icon: 'fas fa-laugh-squint',   color: '#ff9f43' },
  { label: 'Fantasy',     icon: 'fas fa-dragon',         color: '#1dd1a1' },
  { label: 'Horror',      icon: 'fas fa-ghost',          color: '#576574' },
  { label: 'Sports',      icon: 'fas fa-running',        color: '#ff6b35' },
]

const GenreBar = () => {
  return (
    <section className="genre-bar-section">
      <h2 className="section-title genre-bar-title">Browse by Genre</h2>
      <div className="genre-bar">
        {genres.map((genre, index) => (
          <Link
            to={`/anime?genre=${genre.label.toLowerCase()}`}
            className="genre-pill"
            key={index}
            style={{ '--genre-color': genre.color }}
          >
            <i className={genre.icon}></i>
            <span>{genre.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GenreBar