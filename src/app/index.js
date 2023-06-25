import { getCurrentWeather, getForecastWeather } from "./api";

const info = await getCurrentWeather("London");
console.log(info);

const second = await getCurrentWeather("L12Lds");
console.log(second);

const forecast = await getForecastWeather("Chicago");
console.log(forecast);
