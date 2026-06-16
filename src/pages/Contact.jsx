import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  { icon: 'fas fa-envelope', title: 'Email Us',      value: 'hello@watchverse.com'  },
  { icon: 'fas fa-comments', title: 'Discord',       value: 'discord.gg/watchverse' },
  { icon: 'fas fa-twitter',  title: 'Twitter / X',   value: '@WatchVerseHQ'         },
  { icon: 'fas fa-clock',    title: 'Response Time', value: 'Within 24 hours'       },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <div className="contact-hero">
        <h1>Get in <span className="accent-text">Touch</span></h1>
        <p>Have a question, suggestion, or want to collaborate? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">

        {/* ── Info Cards ── */}
        <div className="contact-info-grid">
          {contactInfo.map((info, i) => (
            <div className="contact-info-card" key={i}>
              <div className="contact-info-icon">
                <i className={info.icon}></i>
              </div>
              <div>
                <h4>{info.title}</h4>
                <p>{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Form + FAQ ── */}
        <div className="contact-layout">

          {/* ── Form ── */}
          <div className="contact-form-section">
            <h2>Send Us a <span className="accent-text">Message</span></h2>

            {submitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  className="cta-button"
                  onClick={() => { setSubmitted(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="review">Review Request</option>
                    <option value="collab">Collaboration</option>
                    <option value="bug">Report an Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="cta-button submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── FAQ ── */}
          <div className="contact-faq">
            <h2>Common <span className="accent-text">Questions</span></h2>
            <div className="faq-list">
              {[
                { q: 'How do I request an anime review?',     a: 'Use the contact form above and select "Review Request" as the subject. Include the anime title and why you think it deserves coverage.' },
                { q: 'Can I write for WatchVerse?',          a: 'Yes! We welcome guest writers. Send us a sample of your writing along with your areas of expertise and we will be in touch.' },
                { q: 'How often is the site updated?',        a: 'We publish new articles and news daily. Our anime library and movie sections are updated weekly with new titles and reviews.' },
                { q: 'Do you cover seasonal anime?',          a: 'Absolutely. Seasonal anime coverage is one of our core focuses. We review new episodes and publish seasonal roundups regularly.' },
              ].map((faq, i) => (
                <div className="faq-item" key={i}>
                  <h4><i className="fas fa-question-circle"></i> {faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact