const express = require('express')
const consola = require('consola')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const {Nuxt, Builder} = require('nuxt')
const app = express()
const dbName = 'myProject'
const mongoClient = new MongoClient(db.url, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

/*mongoClient.connect((err, client) => {
  if (err) return console.log(err)
  require('./routes')(app, client.db(dbName))
})*/

mongoClient.connect()
  .then(client => {
    require('./routes')(app, client.db(dbName))
  })
  .catch(err => console.log(err))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {host, port} = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
