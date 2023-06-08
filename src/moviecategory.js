//TMDB
// API키, 기본 ULR, API URL
const API_KEY = 'api_key=f066e8214f6a77c78c3f06f293b03ed3';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main')



  const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  const tagsEL = document.getElementById('tags')

  var selectedGenre = []

 setGenre();
 function setGenre() {
  tagsEL.innerHTML = '';
  genres.forEach(genre => {
    const t = document.createElement('div');
    t.classList.add('tag');
    t.id = genre.id;
    t.innerHTML = genre.name;
    t.addEventListener('click', () => {
      if (selectedGenre.length === 0) {
        selectedGenre.push(genre.id);
      } else {
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
      getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')));
    });
    console.log();
    tagsEL.append(t);
  });
}
        

getMovies(API_URL);

function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {

     showMovies(data.results);
  })

}


function showMovies(data) {

  data.forEach(movie => {
    const { title, poster_path, vote_average, overview, id, genre_ids } = movie;
    const movieEL = document.createElement('div');
    movieEL.classList.add('movie');
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
    document.querySelector('#cards-box').insertAdjacentHTML('beforeend', movieEL.outerHTML);
  });
}





// function cateGory() {

// //영화 제목을 깡그리 가져온다.//
//   const movie_genre = document.querySelector('genre_ids')


//       if (movie_title.indexOf(movie_genre) !== -1) {
//           //검색값과 영화의 제목이 일치하는게 있다면 스타일 display css를 block으로 전환//
//           a.style.display = 'block';
//       } else {
//           //검색값과 같은게 없다면 스타일 display css를 none으로 전환//
//           a.style.display = 'none';
//       }
//   };
