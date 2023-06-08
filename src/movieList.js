const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ2MDljY2M4YTk2OGQ4NmY3MDY5MGE5MmU3ZWMwMCIsInN1YiI6IjY0NzA4YTIwNzcwNzAwMDExOTI0ODFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NjHTZbzSO0wzPIHy0BTBCKG3LvrIYUl4GMa0h1E5VE",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    let rows = data["results"];
    rows.forEach((a) => {
      let title = a["title"];
      let overview = a["overview"];
      let img = a["poster_path"];
      let grade = a["vote_average"];
      let id = a["id"];
      //카드를 클릭하면  id가 alert이 되는 함수를 실행한다.//
      //카드 뒤집는 태그가 차례로 있다.//
      let temp_html = `<div class="flip-box" onclick="select(${id})">
                          <div class="flip">
                              <div class="front">
                              <div class="img-cut"> 
                              <img src="https://image.tmdb.org/t/p/original/${img}"
                              class="card-background">
                              <img src="https://image.tmdb.org/t/p/original/${img}"
                              class="card-img">
                              </div>
                              <h5 id="movie_title" class="card-title">${title}</h5>                                                                                               
                              </div>
                              <div class="back">
                              <p class="card-grade">-${grade}-</p>
                              <p class="card-text">${overview}</p>
                              </div>
                          </div>`;
      document
        .querySelector("#cards-box")
        .insertAdjacentHTML("beforeend", temp_html); //append()가 태그까지 같이 붙혀버려서 insertAdjacentHTML(태그요소만 넣는 메소드)를 사용//
    });
  })
  .catch((err) => console.error(err));

function search() {
  const search_Input = document.querySelector("#search-input"); //검색 값을 가져온다.//
  console.log(search_Input)
  const search_word = search_Input.value.toLowerCase(); //검색 값을 소문자화 시킨다.//
  const movie_list = document.querySelectorAll(".flip-box"); //영화 제목을 깡그리 가져온다.//

  movie_list.forEach((a) => {
    const movie_title = a
      .querySelector("#movie_title")
      .textContent.toLowerCase(); //가져온 영화제목을 전부 소문자화 한다.

    if (movie_title.indexOf(search_word) !== -1) {
      //검색값과 영화의 제목이 일치하는게 있다면 스타일 display css를 block으로 전환//
      a.style.display = "block";
    } else {
      a.style.display = "none"; //검색값과 같은게 없다면 스타일 display css를 none으로 전환//
    }
  });
}

// 상세페이지로 id값 넘기기 (방두현)
function select(id) {
  alert(`영화 id: ${id}`);
  alert((window.location.href = "detail.html?" + id));
}
