const express = require('express')
const router  = express.Router()
const News    = require('../models/News')
const auth    = require('../middleware/auth')

router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    let query = {}
    if (category && category !== 'All') query.category = category
    const news = await News.find(query).sort({ createdAt: -1 })
    res.json(news)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const item = await News.findById(req.params.id)
    if (!item) return res.status(404).json({ message: 'Not found' })
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/',    auth, async (req, res) => {
  try {
    const item = await News.create(req.body)
    res.status(201).json(item)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const item = await News.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(item)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router