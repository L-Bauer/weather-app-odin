const apiKey = "12708416b49647a2b90145252232306";

function getCityInfo(City) {
  const currentWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${City}`;
  console.log(currentWeather);
}

export { getCityInfo };
