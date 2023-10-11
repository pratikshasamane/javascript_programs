"use strict";

const btn = document.querySelector(".btn-country");
const moviesContainer = document.querySelector(".movies");

const movieData = function (title) {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=6633dcdd`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      return rendarMovieHTML(data);
    });
};

const rendarMovieHTML = function (data) {
  const html = `
    <article class="movie">
          <img class="movie__img" src="${data.Poster}" />
          <div class="movie__data">
            <h3 class="movie__name">${data.Title}</h3>
            <p class="movie__row"><span class="_text">Writer: </span>${
              data.Writer
            }</p>
            <p class="movie__row"><span class="_text">Director: </span>${
              data.Director
            }</p>
            <p class="movie__row"><span class="_text">Actors: </span>${
              data.Actors
            }</p>
            <p class="movie__row"><span class="_text">Ratings: </span>${
              data.Ratings[0] && data.Ratings[0]?.Value
                ? data.Ratings[0].Value
                : "Not Available"
            }</p>
            <p class="movie__row"><span class="_text">Date of Released: </span>${
              data.Year
            }</p>

        </div>
        </article>
    `;

  moviesContainer.insertAdjacentHTML("beforeend", html);
};

movieData("avengers");
movieData("avatar");
movieData("A Beautiful Mind");
movieData("Jaane Jaan");
