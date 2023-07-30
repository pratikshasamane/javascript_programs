"use strict";
const btn = document.querySelector(".btn-country");
const weatherContainer = document.querySelector(".Weather_app");

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  var inputElement = document.getElementById("search-input");
  var inputValue = inputElement.value;
  weatherData(inputValue);
});

const weatherData = function (inputValue) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=937df16a20f11a111d08916bdaee15b3`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("City not found or API error");
      }
      return res.json();
    })
    .then((data) => {
      return rendarMovieHTML(data);
    })
    .catch((error) => {
      const html = `
      <h2 class="notice">${error.message}</h2>
      `;
      clearPreviousMarkup();

      weatherContainer.insertAdjacentHTML("beforeend", html);
      console.error(error.message);
    });
};

const clearPreviousMarkup = function () {
  if (weatherContainer.hasChildNodes()) {
    while (weatherContainer.firstChild) {
      weatherContainer.removeChild(weatherContainer.firstChild);
    }
  }
};

const rendarMovieHTML = function (data) {
  let image = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const country = data.sys.country;

  clearPreviousMarkup();

  const html = `
          <div id="weather_cont" class="weather">
          <img class="weather_img" src="${image}" />
          <div class="weather_data">
            <h3 class="weather_name"><span> ${Math.floor(
              data.main.temp - 273.15
            )} &#8451;</span></h3>
            <h4 class="weather_desp ">${data.weather[0].description}</h4>
            <p class="weather_location"><img width="50px" height="50px" src="images/location.png"/><span class="_text">${
              data.name
            } ${country}</span>
           
            <div class="container-sub">
            
                <div class="feels-like">
                    ${Math.floor(
                      data.main.feels_like - 273.15
                    )}&#8451; <span>Feels like</span></div>
                <div class="humidity">${
                  data.main.humidity
                }% <span>Humidity</span></div>
            </div>
        </div>
        </div>
      `;

  weatherContainer.insertAdjacentHTML("beforeend", html);
};
