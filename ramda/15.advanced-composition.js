const R = require('ramda')
const cities = require('./cities.json')
const percentil = require('./percentil')

const kelvinToCelsius = k => k - 272.15