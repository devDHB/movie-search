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
      //find함수를 사용해서 필요한 데이터만 뽑음//
      const moviedata = rows.find(data => data.id == arr);
      //find로 뽑은 데이터는 객체기 때문에 배열을 래핑함//
      const movie1 = [moviedata];
      //map으로 붙힐 부분 //
      const infoBox = document.querySelector(".movieImgScript");
      const titleBox = document.querySelector(".movieTitleAve");
      //map으로 innerHTML에 붙힘//
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
//패스워드에 최대상한을 정함//
function handleOnInput(a, maxlength) {
  if(a.value.length > maxlength)  {
    a.value 
      = a.value.substr(0, maxlength);
  }
}
