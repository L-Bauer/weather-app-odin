import { getCityInfo } from "./api";

const info = await getCityInfo("London");
console.log(info);

const second = await getCityInfo("L12Lds");
console.log(second);
