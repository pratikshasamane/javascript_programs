"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/* Simple XMLHTTPRequest */

/*

const getCountries = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.response);

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>

              </div>
            </article>
      `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};

getCountries("india");
getCountries("canada");

*/

//******************************************************************************************************* */
/* This approch is use if we dont want to change the sequence of country after refresh. this approach called as Callback Hell */

// const getCountries = function (country) {
//   // AJAX 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.response);

//   request.addEventListener("load", function () {
//     // data 1
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country
//     renderCountries(data);

//     // neighbour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       console.log(this.responseText);
//       // data 2 (neighbour country)
//       const [data2] = JSON.parse(this.responseText);

//       // render neighbour country
//       renderCountries(data2, "neighbour");
//     });
//   });
// };

// function renderCountries(data, className = "") {
//   const html = `
//         <article class="country ${className}">
//                 <img class="country__img" src="${data.flags.png}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name.common}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                   ).toFixed(1)} people</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages.eng
//                   }</p>

//                 </div>
//               </article>
//         `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
// }
// getCountries("india");

//****************************************************************************************************************

// Promises (best alternative for callback hell)

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountries(data[0]);
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountries(data[0], "neighbour"))
    .catch((error) => console.error(error.message));
};

getCountryData("india");

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

/*
daily 2 program practice - interview
AJAX- watch 4 videos udemy 
interview questions - oops,core java, mysql, js ( daily one subject)
Node js - start learning.
*/
