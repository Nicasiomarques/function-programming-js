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

const groupedByProp = R.reduce(groupByPropReducer, {}, cities)

const calculateScore = city => {
  const { cost = 0, internetSpeed = 0 } = city
  const costPercentile = percentil(groupedByProp.costs, cost)
  const internetSpeedPercentile = percentil(
    groupedByProp.internetSpeeds,
    internetSpeed
  )

  const score = 100 * (1.0 - costPercentile) + 20 * internetSpeedPercentile
  return R.merge(city, { score })
}