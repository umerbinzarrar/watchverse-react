import HeroSection  from '../components/ui/HeroSection'
import StatsBar     from '../components/ui/StatsBar'
import ScrollRow    from '../components/ui/ScrollRow'
import GenreBar     from '../components/ui/GenreBar'
import LatestNews   from '../components/ui/LatestNews'
import './Home.css'

// ── Images ──
import heroImg from '../assets/images/home-header.jpg'
import anime1  from '../assets/images/anime1.jpg'
import anime2  from '../assets/images/anime2.jpg'
import anime3  from '../assets/images/anime3.jpg'
import anime4  from '../assets/images/anime4.jpg'
import anime5  from '../assets/images/anime5.jpg'
import anime6  from '../assets/images/anime6.jpg'
import movie1  from '../assets/images/movie1.jpg'
import movie2  from '../assets/images/movie2.jpg'
import movie3  from '../assets/images/movie3.jpg'

// ── Static data (replaced with API calls in Phase 3) ──
const trendingAnime = [
  { title: 'Demon Slayer',      image: anime1, genre: 'Action / Fantasy'     },
  { title: 'Attack on Titan',   image: anime2, genre: 'Action / Drama'        },
  { title: 'Jujutsu Kaisen',    image: anime3, genre: 'Action / Supernatural' },
  { title: 'Made in Abyss',     image: anime4, genre: 'Adventure / Mystery'   },
  { title: 'Dandadan',          image: anime5, genre: 'Action / Comedy'       },
  { title: 'Kaiju No. 8',       image: anime6, genre: 'Action / Sci-Fi'      },
]

const popularMovies = [
  { title: 'Dune: Part Two',    image: movie1, genre: 'Sci-Fi / Adventure' },
  { title: 'Oppenheimer',       image: movie2, genre: 'Historical / Drama'  },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'  },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'  },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'  },
]

const Home = () => {
  return (
    <div className="home-page">

      {/* 1. Hero */}
      <HeroSection
        image={heroImg}
        title="Discover, Watch, Enjoy"
        subtitle="Your hub for Anime, Movies & TV Shows"
        ctaText="Explore Now"
        ctaLink="/anime"
      />

      {/* 2. Stats */}
      <StatsBar />

      {/* 3. Carousels + Genre */}
      <div className="home-carousels">
        <ScrollRow
          title="Trending Anime"
          items={trendingAnime}
          seeAllLink="/anime"
        />

        <GenreBar />

        <ScrollRow
          title="Popular Movies"
          items={popularMovies}
          seeAllLink="/movies"
        />
      </div>

      {/* 4. Latest News */}
      <LatestNews />

    </div>
  )
}

export default Home