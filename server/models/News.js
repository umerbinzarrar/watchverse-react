const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  excerpt:  { type: String, required: true },
  content:  { type: String, required: true },
  category: { type: String, enum: ['Anime', 'Movies', 'TV', 'Industry'], required: true },
  author:   { type: String, required: true },
  image:    { type: String },
  readTime: { type: String },
  featured: { type: Boolean, default: false },
  createdAt:{ type: Date, default: Date.now },
})

module.exports = mongoose.model('News', NewsSchema)