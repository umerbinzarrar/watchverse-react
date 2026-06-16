import './StatsBar.css'

const stats = [
  { icon: 'fas fa-film', value: '500+', label: 'Anime Titles' },
  { icon: 'fas fa-tv', value: '300+', label: 'Movies & Shows' },
  { icon: 'fas fa-newspaper', value: '1000+', label: 'News Articles' },
  { icon: 'fas fa-star', value: 'Daily', label: 'Fresh Reviews' },
]

const StatsBar = () => {
  return (
    <div className="stats-bar">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <i className={stat.icon}></i>
          <div className="stat-text">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsBar