import { version } from "html-webpack-plugin";
import { getForecastWeather } from "./api";

const submitSearch = document.querySelector("#search-form");
const main = document.querySelector("main");

let forecast;

function views(data) {
  console.log(data.current.temp_f);
  console.log(data.current.condition.text);
  console.log(data.current.feelslike_f);
}

const viewFactory = (weatherData) => {
  const mainView = () => {
    const location = weatherData.location.name;
    const region = weatherData.location;
    const p = document.createElement("p");
    main.appendChild(p.textContent = location);
  };
  return mainView;
};

submitSearch.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(submitSearch);
  const city = form.get("location");
  forecast = await getForecastWeather(city);
  console.log(forecast);
  views(forecast);
});
