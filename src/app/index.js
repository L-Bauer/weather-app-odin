import { getCurrentWeather } from "./api";

const info = await getCurrentWeather("London");
console.log(info);

const second = await getCurrentWeather("L12Lds");
console.log(second);
