function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekDay = days[date.getDay()];

  let day = date.getDate();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[date.getMonth()];

  let year = date.getFullYear();

  let formattedDate = `${hours}:${minutes} - ${weekDay}, ${day} ${month} ${year}`;

  return formattedDate;
}

let currentTimeSettings = document.querySelector("#current-time-date-year");
currentTimeSettings.innerHTML = formatDate(new Date());

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
  document.querySelector("#max-temperature").innerHTML = `${Math.round(
    response.data.main.temp_max
  )}°`;
  document.querySelector("#min-temperature").innerHTML = `${Math.round(
    response.data.main.temp_min
  )}°`;
  document.querySelector("#feels-like").innerHTML = `${Math.round(
    response.data.main.feels_like
  )}°`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )} km/h`;

  celsiusTemperature = response.data.main.temp;

  let weatherSituation = response.data.weather[0].main;
  if (weatherSituation === "Clear") {
    document.querySelector(
      "#quote"
    ).innerHTML = `We need clear days to see the horizons.`;
    document.querySelector("#description").innerHTML = `It's a clear day.`;
    document.querySelector("#background-image").classList.add("containerClear");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Clouds") {
    document.querySelector(
      "#quote"
    ).innerHTML = `<em>Reninventando negocios...</em>`;
    document.querySelector("#description").innerHTML = `It's cloudy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Mist") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I tried to catch the fog, but I mist.`;
    document.querySelector("#description").innerHTML = `It's a misty day.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Smoke") {
    document.querySelector(
      "#quote"
    ).innerHTML = `<em>A grey day provides the best light...</em>`;
    document.querySelector("#description").innerHTML = `It's cloudy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Haze") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I tried to catch the fog, but I mist.`;
    document.querySelector("#description").innerHTML = `It's a misty day.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Dust") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Complaining about the weather...`;
    document.querySelector("#description").innerHTML = `It's dusty outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Fog") {
    document.querySelector(
      "#quote"
    ).innerHTML = `<em>Beyond the fog lies clarity...</em>`;
    document.querySelector("#description").innerHTML = `It's foggy outside.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Sand") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Complaining about the weather...`;
    document.querySelector("#description").innerHTML = `It's dusty outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Ash") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Complaining about the weather...`;
    document.querySelector("#description").innerHTML = `It's ashy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Squal") {
    document.querySelector(
      "#quote"
    ).innerHTML = `<em>The wind plays its own music...</em>`;
    document.querySelector("#description").innerHTML = `It's windy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Tornado") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Be careful, thunderstorm outside.`;
    document.querySelector("#description").innerHTML = `It's stormy outside`;
    document
      .querySelector("#background-image")
      .classList.add("containerThunderstorm");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Snow") {
    document.querySelector(
      "#quote"
    ).innerHTML = `<em>Winter is coming...</em> or maybe it's just snowing.`;
    document.querySelector("#description").innerHTML = `It's snowy outside.`;
    document.querySelector("#background-image").classList.add("containerSnow");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Rain") {
    document.querySelector(
      "#quote"
    ).innerHTML = `The meteorological equivalent of a bad date.`;
    document.querySelector("#description").innerHTML = `It's rainy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerRaining");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Drizzle") {
    document.querySelector(
      "#quote"
    ).innerHTML = `The meteorological equivalent of a bad date.`;
    document.querySelector("#description").innerHTML = `It's rainy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerRaining");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Thunderstorm") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Be careful, thunderstorm outside.`;
    document.querySelector("#description").innerHTML = `It's stormy outside.`;
    document
      .querySelector("#background-image")
      .classList.add("containerThunderstorm");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow"
      );
  }
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];

    let weatherIconSituation = forecast.weather[0].main;
    let icon = "";

    if (weatherIconSituation === "Clear") {
      icon = `<span class="icon-clear"></span>`;
    }
    if (weatherIconSituation === "Clouds") {
      icon = `<span class="icon-clouds"></span>`;
    }
    if (weatherIconSituation === "Mist") {
      icon = `<span class="icon-mist"></span>`;
    }
    if (weatherIconSituation === "Haze") {
      icon = `<span class="icon-mist"></span>`;
    }
    if (weatherIconSituation === "Dust") {
      icon = `<span class="icon-clouds"></span>`;
    }
    if (weatherIconSituation === "Fog") {
      icon = `<span class="icon-mist"></span>`;
    }
    if (weatherIconSituation === "Sand") {
      icon = `<span class="icon-clear"></span>`;
    }
    if (weatherIconSituation === "Ash") {
      icon = `<span class="icon-mist"></span>`;
    }
    if (weatherIconSituation === "Squall") {
      icon = `<span class="icon-cloud"></span>`;
    }
    if (weatherIconSituation === "Tornado") {
      icon = `<span class="icon-thunderstorm"></span>`;
    }
    if (weatherIconSituation === "Snow") {
      icon = `<span class="icon-snow"></span>`;
    }
    if (weatherIconSituation === "Rain") {
      icon = `<span class="icon-rain"></span>`;
    }
    if (weatherIconSituation === "Drizzle") {
      icon = `<span class="icon-rain"></span>`;
    }
    if (weatherIconSituation === "Thunderstorm") {
      icon = `<span class="icon-thunderstorm"></span>`;
    }

    forecastElement.innerHTML += `  
  <div class="forecast">
    <span class="icon">${icon}</span>
    <p>${formatHours(forecast.dt * 1000)}</p>
    <span class="weather-forecast-temperature">${Math.round(
      forecast.main.temp_max
    )}° ${Math.round(forecast.main.temp_min)}°</span>
  </div>`;
  }
}

function searchCity(city) {
  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Moscow");

//Current location

function showCurrentLocation(position) {
  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

//Feature Celsius to Fahrenheit

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
