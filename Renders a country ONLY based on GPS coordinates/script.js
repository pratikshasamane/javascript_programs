// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const whereAmI = function (lat, lng) {
  // fetch(
  //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  // )
  fetch(`https://photon.komoot.io/reverse?lon=${lng}&lat=${lat}
`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.features[0].properties.country);
      console.log(
        `You are in ${data.features[0].properties.country} and city is ${data.features[0].properties.city}`
      );
      return fetch(
        `https://restcountries.com/v3.1/name/${data.features[0].properties.country}`
      )
        .then((response) => {
          if (!response.ok)
            throw new Error(`Problem with geocoding ${response.status}`);
          return response.json();
        })
        .then((data) => {
          renderCountries(data[0]);
        });
    })
    .catch((err) => console.error(`${err.message}`));
};

whereAmI(18.608110696409707, 73.7625548606378);
whereAmI(51.5074, 0.1278);

//https://nominatim.openstreetmap.org/reverse?format=json&lat=51.5074&lon=%200.1278
whereAmI(-33.933, 18.474);

function renderCountries(data, className = "") {
  const html = `
          <article class="country ${className}">
                  <img class="country__img" src="${data.flags.png}" />
                  <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages.eng
                    }</p>

                  </div>
                </article>
          `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
}
