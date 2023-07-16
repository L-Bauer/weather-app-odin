import { getForecastWeather } from './api'

const submitSearch = document.querySelector('#search-form')
const main = document.querySelector('.main')

let forecast

function mainView (weatherData) {
  const location = weatherData.location.name
  const region = weatherData.location.region
  main.innerHTML = location
  const p = document.createElement('p')
  p.innerText = region
  main.appendChild(p)
}

submitSearch.addEventListener('submit', async (e) => {
  e.preventDefault()
  const form = new FormData(submitSearch)
  const city = form.get('location')
  forecast = await getForecastWeather(city)
  mainView(forecast)
  console.log(forecast)
})
