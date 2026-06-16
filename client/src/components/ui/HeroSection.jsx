import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = ({ image, title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero-section">
      <img src={image} alt="WatchVerse Hero" />
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to={ctaLink} className="cta-button">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}

export default HeroSection