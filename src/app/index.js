import { getForecastWeather } from './api'

const submitSearch = document.querySelector('#search-form')
const main = document.querySelector('.main')

let forecast

function mainView (weatherData) {
  const location = weatherData.location.name
  const region = weatherData.location.region

  const regionHTML = document.createElement('p')
  const locationHTML = document.createElement('p')
  regionHTML.innerText = region
  locationHTML.innerText = location
  main.appendChild(locationHTML)
  main.appendChild(regionHTML)
}

submitSearch.addEventListener('submit', async (e) => {
  e.preventDefault()
  const form = new FormData(submitSearch)
  const city = form.get('location')
  forecast = await getForecastWeather(city)
  mainView(forecast)
  console.log(forecast)
})
