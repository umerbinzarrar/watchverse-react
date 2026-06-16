const dotenv = require('dotenv')
dotenv.config()

const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
const dns      = require('node:dns')
const dnsPromises = dns.promises

const app = express()

// Force public DNS resolvers for MongoDB SRV lookups when local DNS blocks SRV queries.
const mongoDnsServers = process.env.MONGO_DNS_SERVERS
  ? process.env.MONGO_DNS_SERVERS.split(',').map(s => s.trim()).filter(Boolean)
  : ['8.8.8.8', '1.1.1.1']
dns.setServers(mongoDnsServers)

// ── Middleware ──
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// ── Routes ──
app.use('/api/anime',  require('./routes/anime'))
app.use('/api/news',   require('./routes/news'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/auth',   require('./routes/auth'))

// ── Health Check ──
app.get('/', (req, res) => res.json({ message: 'WatchVerse API running' }))

const buildSeedlistUriFromSrv = async (mongoUri) => {
  const match = mongoUri.match(/^mongodb\+srv:\/\/([^@]+@)?([^/?]+)(\/[^?]*)?(\?.*)?$/)
  if (!match) return null

  const authPart = match[1] || ''
  const srvHost = match[2]
  const dbPath = match[3] || '/'
  const queryString = match[4] || ''

  const records = await dnsPromises.resolveSrv(`_mongodb._tcp.${srvHost}`)
  if (!records.length) return null

  const hosts = records.map(record => `${record.name}:${record.port}`).join(',')
  const params = new URLSearchParams(queryString.startsWith('?') ? queryString.slice(1) : queryString)

  if (!params.has('tls') && !params.has('ssl')) params.set('tls', 'true')
  if (!params.has('authSource')) params.set('authSource', 'admin')

  return `mongodb://${authPart}${hosts}${dbPath}?${params.toString()}`
}

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    return
  } catch (error) {
    const msg = error?.message || ''
    const shouldFallback = msg.includes('queryTxt') || msg.includes('querySrv')

    if (!shouldFallback || !process.env.MONGO_URI?.startsWith('mongodb+srv://')) {
      throw error
    }

    const fallbackUri = await buildSeedlistUriFromSrv(process.env.MONGO_URI)
    if (!fallbackUri) throw error

    await mongoose.connect(fallbackUri)
  }
}

const startServer = async () => {
  try {
    await connectToMongo()
    console.log('MongoDB connected')
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    )
  } catch (err) {
    console.error('DB Error:', err.message)
  }
}

startServer()