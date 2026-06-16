const express = require('express')
const router  = express.Router()
const Anime   = require('../models/Anime')
const auth    = require('../middleware/auth')

// GET all anime
router.get('/', async (req, res) => {
  try {
    const { genre, status, sort } = req.query
    let query = {}
    if (genre  && genre  !== 'All') query.genre  = genre
    if (status && status !== 'All') query.status = status

    const sortObj = sort === 'title' ? { title: 1 } : { rating: -1 }
    const anime = await Anime.find(query).sort(sortObj)
    res.json(anime)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET single anime
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id)
    if (!anime) return res.status(404).json({ message: 'Not found' })
    res.json(anime)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST create (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const anime = await Anime.create(req.body)
    res.status(201).json(anime)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// PUT update (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(anime)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETE (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Anime.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router