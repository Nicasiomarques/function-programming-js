const R = require('ramda')
const cities = require('./cities.json')
const percentil = require('./percentil')

const kelvinToCelsius = k => k - 272.15
const kelvinToFahrenheit = k => k * 9 / 5 - 459.67