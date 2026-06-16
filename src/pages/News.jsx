import { useState } from 'react'
import NewsCard from '../components/ui/NewsCard'
import './News.css'

import newsImg  from '../assets/images/news.jpg'
import news1Img from '../assets/images/news1.jpg'
import news2Img from '../assets/images/news2.jpg'
import anime1   from '../assets/images/anime1.jpg'
import anime2   from '../assets/images/anime2.jpg'
import anime3   from '../assets/images/anime3.jpg'
import movie1   from '../assets/images/movie1.jpg'
import movie2   from '../assets/images/movie2.jpg'

const allNews = [
  {
    image:    newsImg,
    category: 'Anime',
    title:    'Demon Slayer Season 4 Premiere Date Announced Along With New Trailer',
    author:   'Jessica Tanaka',
    date:     'June 18, 2025',
    readTime: '3 min read',
    excerpt:  "Ufotable has officially revealed the premiere date for Demon Slayer's Hashira Training Arc, set to debut on November 15th with a special extended episode.",
    featured: true,
  },
  {
    image:    news1Img,
    category: 'Movies',
    title:    'Marvel Studios Announces New Avengers Trilogy With Original Cast Returning',
    author:   'Michael Chen',
    date:     'June 17, 2025',
    readTime: '5 min read',
    excerpt:  'In a surprise announcement at their annual showcase, Marvel Studios confirmed a brand-new Avengers trilogy is in development with original cast members.',
  },
  {
    image:    news2Img,
    category: 'Industry',
    title:    'Netflix Invests $500M in Japanese Animation Studios',
    author:   'Akira Yamamoto',
    date:     'June 16, 2025',
    readTime: '4 min read',
    excerpt:  'Netflix has announced a landmark $500 million investment into several major Japanese animation studios, signalling a deepening commitment to anime.',
  },
  {
    image:    anime1,
    category: 'Anime',
    title:    'Jujutsu Kaisen Final Arc Gets Release Window for Late 2025',
    author:   'Hana Mori',
    date:     'June 15, 2025',
    readTime: '3 min read',
    excerpt:  'MAPPA studio has confirmed the final arc of Jujutsu Kaisen will premiere in late 2025, bringing the beloved series to its epic conclusion.',
  },
  {
    image:    anime2,
    category: 'Anime',
    title:    'Attack on Titan Spin-Off Series Officially Greenlit by Wit Studio',
    author:   'Kenji Sato',
    date:     'June 14, 2025',
    readTime: '4 min read',
    excerpt:  'Wit Studio has officially greenlit a spin-off series set in the Attack on Titan universe, exploring events that took place before the main story.',
  },
  {
    image:    movie1,
    category: 'Movies',
    title:    'Dune Part Three Confirmed: Denis Villeneuve Returns to Direct',
    author:   'Sarah Miller',
    date:     'June 13, 2025',
    readTime: '3 min read',
    excerpt:  'Warner Bros has confirmed that Dune Part Three is officially in development with Denis Villeneuve returning to direct the epic sci-fi conclusion.',
  },
  {
    image:    anime3,
    category: 'Anime',
    title:    'Dandadan Season 2 Confirmed After Record Breaking Viewership Numbers',
    author:   'Yuki Nakamura',
    date:     'June 12, 2025',
    readTime: '2 min read',
    excerpt:  'Science SARU has confirmed Dandadan Season 2 following the massive success of the first season which broke streaming records across multiple platforms.',
  },
  {
    image:    movie2,
    category: 'TV',
    title:    'Stranger Things Final Season Release Date Set for October 2025',
    author:   'Emma Johnson',
    date:     'June 11, 2025',
    readTime: '3 min read',
    excerpt:  'Netflix has officially announced the final season of Stranger Things will premiere in October 2025, promising the biggest and most epic season yet.',
  },
  {
    image:    news2Img,
    category: 'Industry',
    title:    'Crunchyroll and Funimation Complete Full Merger Operations',
    author:   'David Park',
    date:     'June 10, 2025',
    readTime: '5 min read',
    excerpt:  'The complete operational merger of Crunchyroll and Funimation has been finalized, creating the largest dedicated anime streaming platform in the world.',
  },
]

const categories = ['All', 'Anime', 'Movies', 'TV', 'Industry']

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = allNews[0]
  const filtered = allNews
    .slice(1)
    .filter(n => activeCategory === 'All' || n.category === activeCategory)

  return (
    <div className="news-page">

      {/* ── Page Hero ── */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1>Latest <span className="accent-text">News</span></h1>
          <p>Stay up to date with the latest in anime, movies, and TV shows</p>
        </div>
      </div>

      <div className="news-container">

        {/* ── Featured Article ── */}
        <section className="featured-article">
          <h2 className="section-label">
            <i className="fas fa-fire"></i> Featured Story
          </h2>
          <div className="featured-card">
            <div className="featured-image">
              <img src={featured.image} alt={featured.title} />
              <span className={`news-badge ${featured.category.toLowerCase()}`}>
                {featured.category}
              </span>
            </div>
            <div className="featured-body">
              <h2>{featured.title}</h2>
              <div className="news-card-meta">
                <span><i className="fas fa-user"></i> {featured.author}</span>
                <span><i className="fas fa-calendar-alt"></i> {featured.date}</span>
                <span><i className="fas fa-clock"></i> {featured.readTime}</span>
              </div>
              <p>{featured.excerpt}</p>
              <a href="#" className="cta-button">Read Full Story</a>
            </div>
          </div>
        </section>

        {/* ── Main Content + Sidebar ── */}
        <div className="news-layout">

          {/* ── Left: Tabs + Grid ── */}
          <div className="news-main">
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

            {filtered.length > 0 ? (
              <div className="news-grid">
                {filtered.map((item, i) => (
                  <NewsCard key={i} {...item} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <i className="fas fa-newspaper"></i>
                <p>No articles found in this category yet.</p>
              </div>
            )}
          </div>

          {/* ── Right: Sidebar ── */}
          <aside className="news-sidebar">

            <div className="sidebar-widget">
              <h3 className="widget-title">
                <i className="fas fa-chart-line"></i> Trending Now
              </h3>
              <ul className="trending-list">
                {allNews.slice(0, 5).map((item, i) => (
                  <li key={i} className="trending-item">
                    <span className="trending-number">0{i + 1}</span>
                    <div className="trending-info">
                      <p>{item.title}</p>
                      <span className={`news-badge ${item.category.toLowerCase()}`}>
                        {item.category}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">
                <i className="fas fa-tags"></i> Categories
              </h3>
              <ul className="category-list">
                {categories.filter(c => c !== 'All').map((cat, i) => (
                  <li key={i}>
                    <button
                      className={`category-list-btn ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      <span>{cat}</span>
                      <span className="cat-count">
                        {allNews.filter(n => n.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget newsletter-widget">
              <h3 className="widget-title">
                <i className="fas fa-envelope"></i> Newsletter
              </h3>
              <p>Get the latest news delivered to your inbox.</p>
              <form onSubmit={e => e.preventDefault()} className="sidebar-newsletter">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}

export default News