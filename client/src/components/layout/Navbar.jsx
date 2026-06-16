import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [animeDropdown, setAnimeDropdown] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => {
    setMenuOpen(false)
    setAnimeDropdown(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAnimeDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="main-header">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        WatchVerse
      </NavLink>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>

        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

        {/* ── Anime Dropdown ── */}
        <div
          className={`nav-dropdown ${animeDropdown ? 'open' : ''}`}
          ref={dropdownRef}
        >
          <button
            className="dropdown-trigger"
            onClick={() => setAnimeDropdown(prev => !prev)}
          >
            Anime <i className={`fas fa-chevron-down ${animeDropdown ? 'rotated' : ''}`}></i>
          </button>
          <div className="dropdown-menu">
            <NavLink
              to="/anime"
              onClick={closeMenu}
              className="dropdown-item"
            >
              <i className="fas fa-th-large"></i>
              <div>
                <span>Anime Library</span>
                <small>Browse & filter titles</small>
              </div>
            </NavLink>
            <NavLink
              to="/anime/blogs"
              onClick={closeMenu}
              className="dropdown-item"
            >
              <i className="fas fa-pen-nib"></i>
              <div>
                <span>Anime Blogs</span>
                <small>Reviews & articles</small>
              </div>
            </NavLink>
          </div>
        </div>

        <NavLink to="/movies"  onClick={closeMenu}>Movies & Shows</NavLink>
        <NavLink to="/news"    onClick={closeMenu}>News</NavLink>
        <NavLink to="/about"   onClick={closeMenu}>About</NavLink>
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