import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'
import './LatestNews.css'

import newsImg  from '../../assets/images/news.jpg'
import news1Img from '../../assets/images/news1.jpg'
import news2Img from '../../assets/images/news2.jpg'

const latestNews = [
  {
    image:    newsImg,
    category: 'Anime',
    title:    'Demon Slayer Season 4 Premiere Date Announced Along With New Trailer',
    author:   'Jessica Tanaka',
    date:     'June 18, 2025',
    readTime: '3 min read',
    excerpt:  'Ufotable has officially revealed the premiere date for Demon Slayer\'s highly anticipated Hashira Training Arc, set to debut on November 15th...',
    featured: true,
  },
  {
    image:    news1Img,
    category: 'Movies',
    title:    'Marvel Studios Announces New Avengers Trilogy With Original Cast Returning',
    author:   'Michael Chen',
    date:     'June 17, 2025',
    readTime: '5 min read',
    excerpt:  'In a surprise announcement at their annual showcase, Marvel Studios confirmed a brand-new Avengers trilogy is in development...',
  },
  {
    image:    news2Img,
    category: 'Industry',
    title:    'Netflix Invests $500M in Japanese Animation Studios',
    author:   'Akira Yamamoto',
    date:     'June 16, 2025',
    readTime: '4 min read',
    excerpt:  'Netflix has announced a landmark $500 million investment into several major Japanese animation studios, signalling a deepening commitment to anime content...',
  },
]

const LatestNews = () => {
  return (
    <section className="latest-news-section">
      <div className="latest-news-header">
        <h2 className="section-title">Latest News</h2>
        <Link to="/news" className="see-all-link">
          View All News <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <div className="latest-news-grid">
        {latestNews.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default LatestNews