const apiKey = "12708416b49647a2b90145252232306";

function weatherUrl(api) {
  // Create url to get different data from weather api
  const url = `http://api.weatherapi.com/v1/${api}.json?key=${apiKey}&q=`;
  return url;
}

async function getWeatherData(url, Place) {
  // Get the current weather for the location
  let response;
  const currentUrl = `${url + Place}&days=3&aqi=yes&alerts=no`;
  // fetch weather data from weather api
  try {
    response = await fetch(
      currentUrl,
      {
        mode: "cors",
        method: "GET",
      },
    );
  } catch (error) {
    // Error if the fetch operation is not completed
    console.log("There has been a problem with your fetch operation:", error);
  }

  let placeData;
  // If the response from the fetch has an error, log error status
  if (response?.ok) {
    placeData = await response.json();
  } else {
    console.log(`HTTP Response Code: ${response?.status}`);
  }
  return placeData;
}

async function getForecastWeather(location) {
  // Get forecast and current weather
  const forecastUrl = weatherUrl("forecast");
  const forecastWeatherData = getWeatherData(forecastUrl, location);
  return forecastWeatherData;
}

export { getForecastWeather };
