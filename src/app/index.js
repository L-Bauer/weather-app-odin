import { getForecastWeather } from "./api";

const forecast = await getForecastWeather("Fond du Lac");
console.log(forecast);
