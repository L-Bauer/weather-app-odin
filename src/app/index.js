import { getCurrentWeather, getForecastWeather } from "./api";

const info = await getCurrentWeather("London");
console.log(info);

const forecast = await getForecastWeather("Chicago");
console.log(forecast);
