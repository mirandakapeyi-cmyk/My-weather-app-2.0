function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city
  temperatureElement.innerHTML = Math.round(temperature);
}
function seacherCity (city) {
let apiKey = "e34395o3e105b4b61f3t4af72402c233";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSeacherSubmit(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");
   
    seacherCity(searchInputElement.value);
}

let seacherFormElement = document.querySelector("#search-form");
 seacherFormElement.addEventListener("submit", handleSeacherSubmit);

 seacherCity("Cape Town");