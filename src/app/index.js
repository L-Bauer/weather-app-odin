import { getForecastWeather } from "./api";

const search = document.querySelector(".search-box-input");
const input = search.value;

const forecast = await getForecastWeather("Fond du Lac");
console.log(forecast);

let data;

search.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    data = await getForecastWeather(input);
  }
});

console.log(data);
