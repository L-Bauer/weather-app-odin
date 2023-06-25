import { getForecastWeather } from "./api";

const forecast = await getForecastWeather("Chicago");
console.log(forecast);
