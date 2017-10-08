const express = require('express')
const router = express.Router()
const cars = require('./data')

const MAX_LATENCY = 1500

const send = (res, data) => {
  const latency = Math.floor(Math.random() * MAX_LATENCY)
  setTimeout(() => res.send(JSON.stringify(data)), latency)
}

/* GET cars. */
router.get('/cars', (req, res) => {
  send(res, cars)
})

module.exports = router