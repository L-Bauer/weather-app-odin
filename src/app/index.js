import { getForecastWeather } from "./api";

const submitSearch = document.querySelector("#search-form");

// const forecast = await getForecastWeather("Fond du Lac");
// console.log(forecast);

submitSearch.addEventListener("submit", async (e) => {
  // const data = await getForecastWeather(input);
  e.preventDefault();
  const form = new FormData(submitSearch);
  const location = form.get("location");
  console.log(location);
  const forecast = await getForecastWeather(location);
  console.log(forecast);
});
