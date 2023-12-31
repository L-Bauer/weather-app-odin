const apiKey = "12708416b49647a2b90145252232306";

async function getCurrentWeather(Place) {
  // Get the current weather for the location
  let response;
  // fetch weather data from weather api
  try {
    response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Place}`,
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

export { getCurrentWeather };
