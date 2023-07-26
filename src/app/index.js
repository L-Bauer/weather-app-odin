import { getForecastWeather } from './api'

const submitSearch = document.querySelector('#search-form')
const main = document.querySelector('.main')

let forecast

function mainView (weatherData) {
  const location = weatherData.location.name
  const region = weatherData.location.region
  const currentTemp = weatherData.current.temp_f

  const regionHTML = document.querySelector('.region')
  const locationHTML = document.querySelector('.location')
  const currentTempHtml = document.querySelector('.current')
  
  regionHTML.innerText = region
  locationHTML.innerText = location
  currentTempHtml.innerText = "Current Temp: " + currentTemp
}

submitSearch.addEventListener('submit', async (e) => {
  e.preventDefault()
  const form = new FormData(submitSearch)
  const city = form.get('location')
  forecast = await getForecastWeather(city)
  mainView(forecast)
  console.log(forecast)
})
