const express = require('express')
const router  = express.Router()
const Movie   = require('../models/Movie')
const auth    = require('../middleware/auth')

router.get('/', async (req, res) => {
  try {
    const { type, genre } = req.query
    let query = {}
    if (type  && type  !== 'All') query.type  = type
    if (genre && genre !== 'All') query.genre = genre
    const movies = await Movie.find(query).sort({ rating: -1 })
    res.json(movies)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id',    async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (!movie) return res.status(404).json({ message: 'Not found' })
    res.json(movie)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/',      auth, async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.put('/:id',    auth, async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(movie)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router