const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.static('dist'))

app.get('/cool/:name', (req, res) => {
  res.json({cool: false})
})

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(3000, () => console.log("Server is up"))
