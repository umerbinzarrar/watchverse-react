import { useState } from 'react'
import './Movies.css'

import movie1 from '../assets/images/movie1.jpg'
import movie2 from '../assets/images/movie2.jpg'
import movie3 from '../assets/images/movie3.jpg'
import anime1 from '../assets/images/anime1.jpg'
import anime2 from '../assets/images/anime2.jpg'
import anime3 from '../assets/images/anime3.jpg'

const allContent = [
  {
    id: 1,
    title: 'Dune: Part Two',
    image: movie1,
    type: 'Movie',
    genre: 'Sci-Fi',
    rating: 9.0,
    year: 2024,
    duration: '2h 46m',
    status: 'Released',
    description: 'Paul Atreides unites with the Fremen of Arrakis as he begins a journey to become a mythical figure fulfilling an ancient prophecy.',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    image: movie2,
    type: 'Movie',
    genre: 'Drama',
    rating: 9.2,
    year: 2023,
    duration: '3h 0m',
    status: 'Released',
    description: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
  },
  {
    id: 3,
    title: 'Avengers: Endgame',
    image: movie3,
    type: 'Movie',
    genre: 'Action',
    rating: 8.8,
    year: 2019,
    duration: '3h 2m',
    status: 'Released',
    description: 'The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.',
  },
  {
    id: 4,
    title: 'Demon Slayer: Mugen Train',
    image: anime1,
    type: 'Movie',
    genre: 'Anime',
    rating: 9.1,
    year: 2020,
    duration: '1h 57m',
    status: 'Released',
    description: 'Tanjiro and his friends embark on a new mission aboard the Mugen Train where over 40 people have mysteriously disappeared.',
  },
  {
    id: 5,
    title: 'Attack on Titan: The Final Chapters',
    image: anime2,
    type: 'TV Show',
    genre: 'Anime',
    rating: 9.8,
    year: 2023,
    duration: '12 Episodes',
    status: 'Completed',
    description: 'The final arc of Attack on Titan as Eren Yeager unleashes the Rumbling upon the world outside the walls.',
  },
  {
    id: 6,
    title: 'Jujutsu Kaisen Season 2',
    image: anime3,
    type: 'TV Show',
    genre: 'Anime',
    rating: 9.0,
    year: 2023,
    duration: '23 Episodes',
    status: 'Completed',
    description: 'The Shibuya Incident arc brings chaos and tragedy as cursed spirits and sorcerers clash in an epic battle.',
  },
]

const types   = ['All', 'Movie', 'TV Show']
const genres  = ['All', 'Action', 'Sci-Fi', 'Drama', 'Anime', 'Thriller', 'Comedy']
const sortOptions = [
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest First',  value: 'year'   },
  { label: 'Title A–Z',     value: 'title'  },
]

const ContentCard = ({ item }) => (
  <div className="content-card">
    <div className="content-card-image">
      <img src={item.image} alt={item.title} />
      <span className={`type-badge ${item.type.toLowerCase().replace(' ', '-')}`}>
        {item.type}
      </span>
      <span className={`status-badge ${item.status.toLowerCase()}`}>
        {item.status}
      </span>
      <div className="content-card-overlay">
        <p>{item.description}</p>
      </div>
    </div>
    <div className="content-card-body">
      <h3>{item.title}</h3>
      <div className="content-rating">
        <i className="fas fa-star"></i>
        <span>{item.rating}</span>
      </div>
      <div className="content-meta">
        <span><i className="fas fa-calendar"></i> {item.year}</span>
        <span><i className="fas fa-clock"></i> {item.duration}</span>
      </div>
      <span className="content-genre">{item.genre}</span>
    </div>
  </div>
)

const Movies = () => {
  const [activeType,  setActiveType]  = useState('All')
  const [activeGenre, setActiveGenre] = useState('All')
  const [sortBy,      setSortBy]      = useState('rating')
  const [search,      setSearch]      = useState('')

  const filtered = allContent
    .filter(i => activeType  === 'All' || i.type  === activeType)
    .filter(i => activeGenre === 'All' || i.genre === activeGenre)
    .filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'year')   return b.year   - a.year
      if (sortBy === 'title')  return a.title.localeCompare(b.title)
      return 0
    })

  return (
    <div className="movies-page">

      <div className="movies-hero">
        <div className="movies-hero-content">
          <h1>Movies & <span className="accent-text">Shows</span></h1>
          <p>Browse our collection of movies and TV shows</p>
        </div>
      </div>

      <div className="movies-container">

        {/* ── Toolbar ── */}
        <div className="movies-toolbar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search movies & shows..."
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

        {/* ── Filters ── */}
        <div className="filter-bar">
          <div className="filter-group">
            <span className="filter-label">Type</span>
            <div className="filter-pills">
              {types.map(t => (
                <button
                  key={t}
                  className={`filter-pill ${activeType === t ? 'active' : ''}`}
                  onClick={() => setActiveType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
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
        </div>

        {/* ── Results ── */}
        <div className="results-bar">
          <span>{filtered.length} titles found</span>
          {(activeType !== 'All' || activeGenre !== 'All' || search) && (
            <button
              className="clear-filters"
              onClick={() => {
                setActiveType('All')
                setActiveGenre('All')
                setSearch('')
              }}
            >
              <i className="fas fa-times"></i> Clear Filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="content-grid">
            {filtered.map(item => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <i className="fas fa-film"></i>
            <p>No titles found matching your filters.</p>
            <button
              className="cta-button"
              onClick={() => {
                setActiveType('All')
                setActiveGenre('All')
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

export default Movies