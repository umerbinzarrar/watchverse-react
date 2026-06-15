import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="main-header">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        WatchVerse
      </NavLink>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/anime" onClick={closeMenu}>Anime</NavLink>
        <NavLink to="/movies" onClick={closeMenu}>Movies & Shows</NavLink>
        <NavLink to="/news" onClick={closeMenu}>News</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>

      <div
        className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </header>
  )
}

export default Navbar