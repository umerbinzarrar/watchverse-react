import HeroSection from '../components/ui/HeroSection'
import ScrollRow from '../components/ui/ScrollRow'

// ── Images ──
import heroImg from '../assets/images/home-header.jpg'
import anime1 from '../assets/images/anime1.jpg'
import anime2 from '../assets/images/anime2.jpg'
import anime3 from '../assets/images/anime3.jpg'
import anime4 from '../assets/images/anime4.jpg'
import anime5 from '../assets/images/anime5.jpg'
import anime6 from '../assets/images/anime6.jpg'
import movie1 from '../assets/images/movie1.jpg'
import movie2 from '../assets/images/movie2.jpg'
import movie3 from '../assets/images/movie3.jpg'

// ── Static data (will be replaced with API calls later) ──
const trendingAnime = [
  { title: 'Demon Slayer',      image: anime1, genre: 'Action / Fantasy'       },
  { title: 'Attack on Titan',   image: anime2, genre: 'Action / Drama'          },
  { title: 'Jujutsu Kaisen',    image: anime3, genre: 'Action / Supernatural'   },
  { title: 'Made in Abyss',     image: anime4, genre: 'Adventure / Mystery'     },
  { title: 'Dandadan',          image: anime5, genre: 'Action / Comedy'         },
  { title: 'Kaiju No. 8',      image: anime6, genre: 'Action / Sci-Fi'         },
]

const popularMovies = [
  { title: 'Dune: Part Two',    image: movie1, genre: 'Sci-Fi / Adventure'      },
  { title: 'Oppenheimer',       image: movie2, genre: 'Historical / Drama'       },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'       },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'       },
  { title: 'Avengers: Endgame', image: movie3, genre: 'Action / Superhero'       },
]

const Home = () => {
  return (
    <>
      <HeroSection
        image={heroImg}
        title="Discover, Watch, Enjoy"
        subtitle="Your hub for Anime, Movies & TV Shows"
        ctaText="Explore Now"
        ctaLink="/anime"
      />

      <ScrollRow
        title="Trending Anime"
        items={trendingAnime}
        seeAllLink="/anime"
      />

      <ScrollRow
        title="Popular Movies"
        items={popularMovies}
        seeAllLink="/movies"
      />
    </>
  )
}

export default Home