// 영화 제목들을 저장하기 위한 변수
let titleAll = [];
// 영화 평점들을 저장하기 위한 변수
let ratingAll = [];
// 클릭한 버튼의 data-id를 저장
// char-asc / char-desc / rating-asc / rating-desc  네가지로 분류
let clickData = "";

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

    // 정렬 버튼 추가 //
    sortBtn = document.querySelectorAll(".sort-btn");
    // 각 버튼에 클릭 이벤트를 추가하기 위해
    // 버튼수만큼 반복문 추가
    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener("click", function (e) {
        // 클릭한 버튼의 data-id를 저장
        let clickData = e.target.dataset.id;
        // 오름차순 정렬 (숫자, abc 순)
        for (let x = 0; x < rows.length; x++) {
          if (clickData == "char-asc") {
            // 배열에 제목 저장
            titleAll.push(rows[x].title);
            // 숫자 오름차순 정렬
            titleAll = titleAll.sort(function (a, b) {
              return a - b;
            });
            // 가나다 순 정렬
            titleAll.sort();
          }
          // 내림차순 정렬 (숫자 역순, cba 순)
          else if (clickData == "char-desc") {
            titleAll.push(rows[x].title);
            // 숫자 내림차순 정렬
            titleAll.sort(function (a, b) {
              return b - a;
            });
            // 다나가 순 정렬
            titleAll.sort(function (a, b) {
              if (a < b) {
                return 1;
              } else {
                return -1;
              }
            });
          }
          // 평점 오름차순 정렬 조건식
          else if (clickData == "rating-asc") {
            ratingAll.push(rows[x].vote_average);
            // 숫자 오름차순 정렬
            ratingAll.sort(function (a, b) {
              return a - b;
            });
          }
          // 평점 내림차순 정렬 조건식
          else if (clickData == "rating-desc") {
            ratingAll.push(rows[x].vote_average);
            // 숫자 내림차순 정렬
            ratingAll.sort(function (a, b) {
              return b - a;
            });
          }
        }
        // 클릭한 버튼의 dataid(clickData)와
        // 각 버튼의 data id의 유형을 비교하여 정렬 함수 실행
        switch (clickData) {
          case "char-asc":
            titleSort();
            break;
          case "char-desc":
            titleSort();
            break;
          case "rating-asc":
            ratingSort();
            break;
          case "rating-desc":
            ratingSort();
            break;
        }

        // ABC순 정렬 함수 (오름차순, 내림차순)
        function titleSort() {
          document.querySelector("#cards-box").innerHTML = "";

          titleAll.forEach((title) => {
            console.log(title);
            rows.forEach((a) => {
              if (a["title"] == title) {
                let title = a["title"];
                let overview = a["overview"];
                let img = a["poster_path"];
                let grade = a["vote_average"];
                let id = a["id"];

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
                                </div>
                            </div>`;
                document
                  .querySelector("#cards-box")
                  .insertAdjacentHTML("beforeend", temp_html); //append()가 태그까지 같이 붙혀버려서 insertAdjacentHTML(태그요소만 넣는 메소드)를 사용//
              }
            });
          });
        }

        // 평점순 정렬 함수 (오름차순, 내림차순)
        function ratingSort() {
          document.querySelector("#cards-box").innerHTML = "";
          // 배열안에 중복값 제거
          ratingAll = new Set(ratingAll);
          ratingAll.forEach((rating) => {
            console.log(rating);
            rows.forEach((a) => {
              if (a["vote_average"] == rating) {
                let title = a["title"];
                let overview = a["overview"];
                let img = a["poster_path"];
                let grade = a["vote_average"];
                let id = a["id"];

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
                                </div>
                            </div>`;
                document
                  .querySelector("#cards-box")
                  .insertAdjacentHTML("beforeend", temp_html); //append()가 태그까지 같이 붙혀버려서 insertAdjacentHTML(태그요소만 넣는 메소드)를 사용//
              }
            });
          });
        }

        // 정렬 후 제목, 평점 배열 초기화
        titleAll = [];
        ratingAll = [];
      });
    }

    // 페이지 준비 후 영화 데이터 출력
    rows.forEach((a) => {
      // 영화 제목 저장
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
  const search_word = search_Input.value.toLowerCase(); //검색 값을 소문자화 시킨다.//
  const movie_list = document.querySelectorAll(".flip-box"); //영화 제목을 깡그리 가져온다.//

  // 정규식 - 영어 숫자만 가능
  enRegExp = /[^0-9a-zA-Z]/g;

  // match 메소드를 사용하여 정규식 체크
  // 정규식에 일치하지 않으면 경고창
  if (search_Input.value.match(enRegExp)) {
    alert("영문, 숫자로 입력해주세요");
  } else {
    // 일치하면 검색기능
    movie_list.forEach((a) => {
      const movie_title = a
        .querySelector("#movie_title")
        .textContent.toLowerCase(); //가져온 영화제목을 전부 소문자화 한다.

      if (movie_title.indexOf(search_word) !== -1) {
        //검색값과 영화의 제목이 일치하는게 있다면 스타일 display css를 block으로 전환//
        a.style.display = "block";
      } else {
        //검색값과 같은게 없다면 스타일 display css를 none으로 전환//
        a.style.display = "none";
      }
    });
  }
}

// 상세페이지로 id값 넘기기 //
function select(id) {
  alert(`영화 id: ${id}`);
  alert((window.location.href = "detail.html?" + id));
}
