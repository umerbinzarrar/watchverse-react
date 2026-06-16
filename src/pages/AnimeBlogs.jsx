import { useState } from 'react'
import './AnimeBlogs.css'

import anime1 from '../assets/images/anime1.jpg'
import anime2 from '../assets/images/anime2.jpg'
import anime3 from '../assets/images/anime3.jpg'
import anime4 from '../assets/images/anime4.jpg'
import anime5 from '../assets/images/anime5.jpg'
import anime6 from '../assets/images/anime6.jpg'

const blogs = [
  {
    id: 1,
    image: anime1,
    category: 'Review',
    title: 'Demon Slayer Season 3 — A Visual Masterpiece That Redefines Anime',
    author: 'Jessica Tanaka',
    date: 'June 18, 2025',
    readTime: '8 min read',
    rating: 9.5,
    excerpt: 'Ufotable has once again outdone itself with the Entertainment District Arc. The fluidity of animation, combined with Yuki Kajiura\'s haunting score, creates an experience unlike anything else in modern anime.',
    tags: ['Demon Slayer', 'Review', 'Action'],
  },
  {
    id: 2,
    image: anime2,
    category: 'Analysis',
    title: 'Attack on Titan\'s Ending — Why It Was Both Perfect and Divisive',
    author: 'Kenji Sato',
    date: 'June 15, 2025',
    readTime: '12 min read',
    rating: 8.8,
    excerpt: 'The final episode of Attack on Titan left the anime community split right down the middle. A decade of storytelling culminated in a finale that challenged every expectation fans had built up.',
    tags: ['AoT', 'Analysis', 'Ending'],
  },
  {
    id: 3,
    image: anime3,
    category: 'Review',
    title: 'Jujutsu Kaisen — Does Season 2 Live Up To The Hype?',
    author: 'Hana Mori',
    date: 'June 12, 2025',
    readTime: '7 min read',
    rating: 9.2,
    excerpt: 'After the jaw-dropping first season, MAPPA faced enormous pressure delivering Season 2. The Shibuya Incident arc had fans bracing for chaos — and chaos is exactly what they got, in the best possible way.',
    tags: ['JJK', 'Review', 'Season 2'],
  },
  {
    id: 4,
    image: anime4,
    category: 'Deep Dive',
    title: 'Made in Abyss — The Anime That Dares To Go Deeper Than You Expect',
    author: 'Akira Yamamoto',
    date: 'June 10, 2025',
    readTime: '10 min read',
    rating: 9.4,
    excerpt: 'On the surface Made in Abyss appears to be a cute adventure story. But Akihito Tsukushi\'s world is one of the most meticulously crafted and genuinely disturbing settings in all of anime.',
    tags: ['Made in Abyss', 'Deep Dive', 'Adventure'],
  },
  {
    id: 5,
    image: anime5,
    category: 'Review',
    title: 'Dandadan Is The Most Chaotic and Fun Anime of 2024',
    author: 'Yuki Nakamura',
    date: 'June 8, 2025',
    readTime: '6 min read',
    rating: 8.9,
    excerpt: 'Science SARU has absolutely nailed the adaptation of Yukinobu Tatsu\'s manga. Dandadan is loud, weird, fast-paced and completely unhinged — and that is precisely why it works so well.',
    tags: ['Dandadan', 'Review', 'Comedy'],
  },
  {
    id: 6,
    image: anime6,
    category: 'Analysis',
    title: 'Kaiju No. 8 — A Fresh Take On The Monster Genre',
    author: 'Michael Chen',
    date: 'June 5, 2025',
    readTime: '9 min read',
    rating: 8.6,
    excerpt: 'The monster genre has been done to death, but Kaiju No. 8 manages to inject fresh life into familiar tropes. The protagonist\'s transformation mechanic creates a fascinating dual-identity narrative.',
    tags: ['Kaiju No.8', 'Analysis', 'Action'],
  },
]

const categories = ['All', 'Review', 'Analysis', 'Deep Dive']

const RatingBadge = ({ rating }) => (
  <div className="rating-badge">
    <i className="fas fa-star"></i>
    <span>{rating}</span>
  </div>
)

const BlogCard = ({ blog, featured }) => (
  <article className={`blog-card ${featured ? 'featured' : ''}`}>
    <div className="blog-card-image">
      <img src={blog.image} alt={blog.title} />
      <span className={`blog-category-badge ${blog.category.toLowerCase().replace(' ', '-')}`}>
        {blog.category}
      </span>
      <RatingBadge rating={blog.rating} />
    </div>
    <div className="blog-card-body">
      <h3>{blog.title}</h3>
      <div className="blog-meta">
        <span><i className="fas fa-user"></i> {blog.author}</span>
        <span><i className="fas fa-calendar-alt"></i> {blog.date}</span>
        <span><i className="fas fa-clock"></i> {blog.readTime}</span>
      </div>
      <p className="blog-excerpt">{blog.excerpt}</p>
      <div className="blog-footer">
        <div className="blog-tags">
          {blog.tags.map((tag, i) => (
            <span key={i} className="blog-tag">#{tag}</span>
          ))}
        </div>
        <a href="#" className="blog-read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </article>
)

const AnimeBlogs = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = blogs
    .filter(b => activeCategory === 'All' || b.category === activeCategory)
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()))

  const featured = filtered[0]
  const rest     = filtered.slice(1)

  return (
    <div className="blogs-page">

      {/* ── Hero ── */}
      <div className="blogs-hero">
        <div className="blogs-hero-content">
          <h1>Anime <span className="accent-text">Blogs</span></h1>
          <p>In-depth reviews, analysis and deep dives into the world of anime</p>
        </div>
      </div>

      <div className="blogs-container">

        {/* ── Toolbar ── */}
        <div className="blogs-toolbar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-search" onClick={() => setSearch('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No blogs found matching your search.</p>
            <button
              className="cta-button"
              onClick={() => { setSearch(''); setActiveCategory('All') }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            {/* ── Featured Blog ── */}
            {featured && (
              <section className="featured-blog">
                <h2 className="section-label">
                  <i className="fas fa-fire"></i> Featured Post
                </h2>
                <BlogCard blog={featured} featured={true} />
              </section>
            )}

            {/* ── Results count ── */}
            {rest.length > 0 && (
              <div className="results-bar">
                <span>{rest.length} more article{rest.length !== 1 ? 's' : ''}</span>
              </div>
            )}

            {/* ── Blog Grid ── */}
            {rest.length > 0 && (
              <div className="blogs-grid">
                {rest.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AnimeBlogs