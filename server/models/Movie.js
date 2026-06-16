const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  type:        { type: String, enum: ['Movie', 'TV Show'], required: true },
  genre:       { type: String, required: true },
  rating:      { type: Number, min: 0, max: 10 },
  year:        { type: Number },
  duration:    { type: String },
  status:      { type: String, enum: ['Released', 'Completed', 'Upcoming'], default: 'Released' },
  image:       { type: String },
  createdAt:   { type: Date, default: Date.now },
})

module.exports = mongoose.model('Movie', MovieSchema)