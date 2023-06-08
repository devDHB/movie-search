const url = window.location.search
const arr = url.slice(1, url.length);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ2MDljY2M4YTk2OGQ4NmY3MDY5MGE5MmU3ZWMwMCIsInN1YiI6IjY0NzA4YTIwNzcwNzAwMDExOTI0ODFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NjHTZbzSO0wzPIHy0BTBCKG3LvrIYUl4GMa0h1E5VE",
  },
};

document.addEventListener("DOMContentLoaded", detailload);
function detailload() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const rows = data["results"];
      const moviedata = rows.find(data => data.id == arr);
      const movie1 = [moviedata];

      const infoBox = document.querySelector(".movieImgScript");
      const titleBox = document.querySelector(".movieTitleAve");

      infoBox.innerHTML = movie1.map(
        (movie1) => `<img src="https://image.tmdb.org/t/p/w500${movie1.poster_path}" alt="${movie1.title}" class="infoImg">
        <div class="infoOverview">${movie1.overview}</div>
        `
      );
      titleBox.innerHTML = movie1.map(
        (movie1) => `<h3 class="infoTitle">${movie1.title}</h3>
        <p class="infoAverage">${movie1.vote_average}</p>`
      )
    })
};
