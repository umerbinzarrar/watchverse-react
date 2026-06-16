import './About.css'
import aboutImg from '../assets/images/about-mission.jpg'

const team = [
  { name: 'Jessica Tanaka',  role: 'Founder & Editor',      icon: 'fas fa-crown'      },
  { name: 'Kenji Sato',      role: 'Lead Anime Reviewer',   icon: 'fas fa-pen-nib'    },
  { name: 'Michael Chen',    role: 'Movies & TV Editor',    icon: 'fas fa-film'       },
  { name: 'Hana Mori',       role: 'News Correspondent',    icon: 'fas fa-newspaper'  },
]

const values = [
  { icon: 'fas fa-star',        title: 'Quality Content',    desc: 'Every review and article is written by passionate fans who deeply understand the medium.' },
  { icon: 'fas fa-shield-alt',  title: 'No Spoilers',        desc: 'We clearly mark all spoiler content so you can read safely at your own pace.'          },
  { icon: 'fas fa-users',       title: 'Community First',    desc: 'WatchVerse exists for the fans. Your feedback directly shapes the content we create.'   },
  { icon: 'fas fa-bolt',        title: 'Always Current',     desc: 'Our team covers the latest news, releases and industry developments as they happen.'    },
]

const About = () => {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <div className="about-hero">
        <h1>About <span className="accent-text">WatchVerse</span></h1>
        <p>The home of anime enthusiasts, movie lovers, and TV show fans</p>
      </div>

      {/* ── Mission ── */}
      <section className="about-mission">
        <div className="mission-image">
          <img src={aboutImg} alt="Our Mission" />
        </div>
        <div className="mission-content">
          <h2>Our <span className="accent-text">Mission</span></h2>
          <p>
            WatchVerse was born from a simple idea — create one place where
            anime fans, movie lovers, and TV show enthusiasts can find honest
            reviews, breaking news, and deep-dive analysis without the noise.
          </p>
          <p>
            We believe great content deserves great coverage. Whether it's a
            10-year-old classic or a brand new seasonal release, every title
            on WatchVerse gets the attention it deserves.
          </p>
          <div className="mission-stats">
            <div className="mission-stat">
              <span className="stat-number">500+</span>
              <span className="stat-desc">Anime Titles</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">1000+</span>
              <span className="stat-desc">Articles Written</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">50K+</span>
              <span className="stat-desc">Monthly Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="about-values-inner">
          <h2 className="section-center-title">
            What We <span className="accent-text">Stand For</span>
          </h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">
                  <i className={v.icon}></i>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="about-team-inner">
          <h2 className="section-center-title">
            Meet the <span className="accent-text">Team</span>
          </h2>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <i className={member.icon}></i>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About