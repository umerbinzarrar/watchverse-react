import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'
import Home     from './pages/Home'
import Anime    from './pages/Anime'
import AnimeBlogsPage from './pages/AnimeBlogs'
import Movies   from './pages/Movies'
import News     from './pages/News'
import About    from './pages/About'
import Contact  from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<Home />}     />
          <Route path="/anime"       element={<Anime />}    />
          <Route path="/anime/blogs" element={<AnimeBlogsPage />} />
          <Route path="/movies"      element={<Movies />}   />
          <Route path="/news"        element={<News />}     />
          <Route path="/about"       element={<About />}    />
          <Route path="/contact"     element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App