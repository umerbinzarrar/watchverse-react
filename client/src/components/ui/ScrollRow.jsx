import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './ScrollRow.css'

const ScrollRow = ({ title, items, seeAllLink }) => {
  const rowRef = useRef(null)

  const scroll = (direction) => {
    rowRef.current.scrollBy({
      left: direction * 300,
      behavior: 'smooth'
    })
  }

  return (
    <section className="scroll-section">
      <h2 className="section-title">{title}</h2>

      <div className="scroll-wrapper">
        <button
          className="scroll-btn left"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          &#8249;
        </button>

        <div className="card-row" ref={rowRef}>
          {items.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="card-info">
                <h3>{item.title}</h3>
                {item.genre && <span className="card-genre">{item.genre}</span>}
              </div>
            </div>
          ))}
        </div>

        <button
          className="scroll-btn right"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>

      {seeAllLink && (
        <Link to={seeAllLink} className="see-all-btn">
          See All →
        </Link>
      )}
    </section>
  )
}

export default ScrollRow