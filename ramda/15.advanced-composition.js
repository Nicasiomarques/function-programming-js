const R = require('ramda')
const cities = require('./cities.json')
const percentil = require('./percentil')

const kelvinToCelsius = k => k - 272.15
const kelvinToFahrenheit = k => k * 9 / 5 - 459.67

const updateTemperature = R.curry((convertFn, city) => {
  const temperature = Math.round(convertFn(city.temperature))
  return R.merge(city, { temperature })
})

const groupByPropReducer = (acc, city) => {
  const { costs = [], internetSpeeds = [] } = acc
  return R.merge(acc, {
    costs: R.append(city.cost, costs),
    internetSpeeds: R.append(city.internetSpeed, internetSpeeds)
  })
}