function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#Humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector(".weater-app-icon");
  
  iconElement.innerHTML = ` <img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}"/>`;
  
  timeElement.innerHTML = formatDate(date);
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`;
}

  return `${day} ${hours}:${minutes}`;
}

function searchCity (city) {
let apiKey = "e34395o3e105b4b61f3t4af72402c233";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");
   
    searchCity(searchInputElement.value);
}

function displayForecast() {

  let days = [`Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
  let forecastHtml = "";

days.forEach(function(day) {
 forecastHtml =forecastHtml +`
   <div class="weather-forecast-day">
     <div class="weather-forecast-date">${day}</div>
     <div class="weather-forecast-icon">⛅</div>
     <div class="weather-forecast-temperatures">
       <div class="weather-forecast-temperature">
         <strong> 18&deg;</strong>
       </div>
       <div class="weather-forecast-temperature-low">14&deg;</div>
     </div>
   </div>
 `; 
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}


let seacherFormElement = document.querySelector("#search-form");
 seacherFormElement.addEventListener("submit", handleSearchSubmit);

 searchCity("Cape Town");
 displayForecast();