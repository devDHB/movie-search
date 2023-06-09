//TMDB
// API키, 기본 ULR, API URL
const API_KEY = "api_key=f066e8214f6a77c78c3f06f293b03ed3";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";


// 장르 객체 데이터 설정
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

//  HTML파일에 tags를 액세스 해오기
const tagsEL = document.getElementById("tags");

var selectedGenre = [];

// setGenre 함수 실행
setGenre();
function setGenre() {
  // 버튼 모양의 html 코드 불러온다.
  tagsEL.innerHTML = "";

  // forEach 함수를 통해 배열로 데이터 뿌려주기
  genres.forEach((genre) => {
    const t = document.createElement("div");
    t.classList.add("tag");
    t.id = genre.id;

    // 장르값
    t.innerHTML = genre.name;
    // 이벤트 리스너를 통해 Clcik 이벤트 발생,  if문으로 조건문을 돌려준다.
    t.addEventListener("click", () => {
      if (selectedGenre.length === 0) {
        // push 함수로 id 값을 넣어준다
        selectedGenre.push(genre.id);
      } else {
// includes 함수로 해당 id값을 반환해준다.
        if (selectedGenre.includes(genre.id)) {
          selectedGenre.forEach((id, idx) => {
            if (id === genre.id) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genre.id);
        }
      }
      console.log(selectedGenre);
      getMovies(API_URL + "&with_genres=" + encodeURI(selectedGenre.join(",")));
    });
    console.log();
    tagsEL.append(t);
  });
}

getMovies(API_URL);

a = document.querySelectorAll("#btn-modal");


// getMovies 함수로 showMovies를 불러오는 함수
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

// querySelector 로 전체 영화 데이터를 불러옴

function showMovies(data) {
  // 카드 박스 부분을 querySelector로 지정해서 innerHTML로 넣어줄거야
  document.querySelector("#cards-box").innerHTML = "";
  data.forEach((movie) => {
    // 구조분해 할당으로 데이터 값들을 변수로 지정
    const { title, poster_path, vote_average, overview, id, genre_ids } = movie;

    // html요소를 만들어 반환
    const movieEL = document.createElement("div");
    movieEL.classList.add("movie");
    // innerHTML을 통해 HTML요소를 불러온다.
    movieEL.innerHTML = `<div class="flip-box" onclick="select(${id},${genre_ids})">
        <div class="flip">
            <div class="front">
            <div class="img-cut">
            <img src="https://image.tmdb.org/t/p/original/${poster_path}"
            class="card-background">
            <img src="https://image.tmdb.org/t/p/original/${poster_path}"
            class="card-img">
            </div>
            <h5 id="movie_title" class="card-title">${title}</h5>
            </div>
            <div class="back">
            <p class="card-grade">-${vote_average}-</p>
            <p class="card-text">${overview}</p>
            </div>
        </div>
    </div>`;
// document 이벤트 생성
    document
      .querySelector("#cards-box")
      .insertAdjacentHTML("beforeend", movieEL.outerHTML);
  });
}