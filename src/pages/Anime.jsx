import { useState } from 'react'
import './Anime.css'

import anime1 from '../assets/images/anime1.jpg'
import anime2 from '../assets/images/anime2.jpg'
import anime3 from '../assets/images/anime3.jpg'
import anime4 from '../assets/images/anime4.jpg'
import anime5 from '../assets/images/anime5.jpg'
import anime6 from '../assets/images/anime6.jpg'

const allAnime = [
  {
    id: 1,
    title: 'Demon Slayer',
    image: anime1,
    genre: 'Action',
    season: 'Fall 2024',
    rating: 9.2,
    episodes: 44,
    status: 'Ongoing',
    description: 'Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon.',
  },
  {
    id: 2,
    title: 'Attack on Titan',
    image: anime2,
    genre: 'Action',
    season: 'Winter 2024',
    rating: 9.8,
    episodes: 94,
    status: 'Completed',
    description: 'In a world where humanity lives inside cities surrounded by enormous walls, a young boy vows revenge after titans destroy his hometown.',
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    image: anime3,
    genre: 'Action',
    season: 'Fall 2024',
    rating: 9.0,
    episodes: 47,
    status: 'Ongoing',
    description: 'A boy swallows a cursed talisman and becomes host to a powerful curse, joining a secret organization of Jujutsu Sorcerers.',
  },
  {
    id: 4,
    title: 'Made in Abyss',
    image: anime4,
    genre: 'Adventure',
    season: 'Summer 2022',
    rating: 9.1,
    episodes: 25,
    status: 'Completed',
    description: 'A girl and a robot boy descend into the Abyss, a mysterious and dangerous chasm filled with relics of a lost civilization.',
  },
  {
    id: 5,
    title: 'Dandadan',
    image: anime5,
    genre: 'Comedy',
    season: 'Fall 2024',
    rating: 8.8,
    episodes: 12,
    status: 'Ongoing',
    description: 'A high school girl who believes in ghosts and a boy who believes in aliens team up after encountering both supernatural phenomena.',
  },
  {
    id: 6,
    title: 'Kaiju No. 8',
    image: anime6,
    genre: 'Action',
    season: 'Spring 2024',
    rating: 8.6,
    episodes: 12,
    status: 'Ongoing',
    description: 'A man who dreams of joining the anti-kaiju defense force gains the ability to transform into a powerful kaiju himself.',
  },
]

const genres    = ['All', 'Action', 'Adventure', 'Comedy', 'Romance', 'Fantasy', 'Sci-Fi']
const statuses  = ['All', 'Ongoing', 'Completed']
const sortOptions = [
  { label: 'Highest Rated', value: 'rating'  },
  { label: 'Most Episodes', value: 'episodes' },
  { label: 'Title A–Z',     value: 'title'    },
]

const StarRating = ({ rating }) => {
  const stars = Math.round(rating / 2)
  return (
    <div className="star-rating">
      {[1,2,3,4,5].map(s => (
        <i
          key={s}
          className={`fas fa-star ${s <= stars ? 'filled' : ''}`}
        ></i>
      ))}
      <span>{rating}</span>
    </div>
  )
}

const AnimeCard = ({ anime }) => (
  <div className="anime-card">
    <div className="anime-card-image">
      <img src={anime.image} alt={anime.title} />
      <span className={`status-badge ${anime.status.toLowerCase()}`}>
        {anime.status}
      </span>
      <div className="anime-card-overlay">
        <p>{anime.description}</p>
        <button className="overlay-btn">
          <i className="fas fa-plus"></i> Add to List
        </button>
      </div>
    </div>
    <div className="anime-card-body">
      <h3>{anime.title}</h3>
      <StarRating rating={anime.rating} />
      <div className="anime-meta">
        <span><i className="fas fa-tag"></i> {anime.genre}</span>
        <span><i className="fas fa-film"></i> {anime.episodes} eps</span>
      </div>
      <span className="anime-season">{anime.season}</span>
    </div>
  </div>
)

const Anime = () => {
  const [activeGenre,  setActiveGenre]  = useState('All')
  const [activeStatus, setActiveStatus] = useState('All')
  const [sortBy,       setSortBy]       = useState('rating')
  const [search,       setSearch]       = useState('')

  const filtered = allAnime
    .filter(a => activeGenre  === 'All' || a.genre  === activeGenre)
    .filter(a => activeStatus === 'All' || a.status === activeStatus)
    .filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'rating')   return b.rating   - a.rating
      if (sortBy === 'episodes') return b.episodes - a.episodes
      if (sortBy === 'title')    return a.title.localeCompare(b.title)
      return 0
    })

  return (
    <div className="anime-page">

      {/* ── Hero ── */}
      <div className="anime-hero">
        <div className="anime-hero-content">
          <h1>Anime <span className="accent-text">Library</span></h1>
          <p>Explore our full collection of anime titles</p>
        </div>
      </div>

      <div className="anime-container">

        {/* ── Search + Sort Bar ── */}
        <div className="anime-toolbar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search anime..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-search" onClick={() => setSearch('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="sort-box">
            <label><i className="fas fa-sort"></i> Sort by</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="filter-bar">
          <div className="filter-group">
            <span className="filter-label">Genre</span>
            <div className="filter-pills">
              {genres.map(g => (
                <button
                  key={g}
                  className={`filter-pill ${activeGenre === g ? 'active' : ''}`}
                  onClick={() => setActiveGenre(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Status</span>
            <div className="filter-pills">
              {statuses.map(s => (
                <button
                  key={s}
                  className={`filter-pill ${activeStatus === s ? 'active' : ''}`}
                  onClick={() => setActiveStatus(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Results Count ── */}
        <div className="results-bar">
          <span>{filtered.length} titles found</span>
          {(activeGenre !== 'All' || activeStatus !== 'All' || search) && (
            <button
              className="clear-filters"
              onClick={() => {
                setActiveGenre('All')
                setActiveStatus('All')
                setSearch('')
              }}
            >
              <i className="fas fa-times"></i> Clear Filters
            </button>
          )}
        </div>

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="anime-grid">
            {filtered.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No anime found matching your filters.</p>
            <button
              className="cta-button"
              onClick={() => {
                setActiveGenre('All')
                setActiveStatus('All')
                setSearch('')
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Anime