const apiKey = "12708416b49647a2b90145252232306";

async function getCityInfo(City) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${City}`,
    {
      mode: "cors",
      method: "GET",
    },
  )
    .catch((err) => err.json());
  return response.json();
}

export { getCityInfo };
