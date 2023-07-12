import { getForecastWeather } from "./api";

const submitSearch = document.querySelector("#search-form");

let forecast;

function views(data) {
  console.log(data.current.temp_f);
  console.log(data.current.condition.text);
  console.log(data.current.feelslike_f);
}

submitSearch.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(submitSearch);
  const city = form.get("location");
  forecast = await getForecastWeather(city);
  console.log(forecast);
  views(forecast);
});
