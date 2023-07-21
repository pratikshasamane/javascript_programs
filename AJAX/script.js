"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const getCountryData = function (country) {
  countriesContainer.innerHTML = "";
  if (!`https://restcountries.com/v3.1/name/${country}`)
    throw new Error(`The country you entered is wrong!`);
  return fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountries(data[0]);
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => {
      return renderCountries(data[0], "neighbour");
    })
    .catch((error) => {
      renderAlert(`Country is not availabele`);
      console.error(error.message);
    });
};

function renderAlert(msg) {
  const html = `<div class="alert">
 ${msg}
</div>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
}

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
