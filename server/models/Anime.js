const mongoose = require('mongoose')

const AnimeSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  genre:       { type: String, required: true },
  status:      { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' },
  rating:      { type: Number, min: 0, max: 10 },
  episodes:    { type: Number, default: 0 },
  season:      { type: String },
  image:       { type: String },
  tags:        [String],
  createdAt:   { type: Date, default: Date.now },
})

module.exports = mongoose.model('Anime', AnimeSchema)