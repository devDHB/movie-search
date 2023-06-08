const url = window.location.search
const arr = url.slice(1,url.length);
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
        
        review.innerHTML = movie1.map( (movie1) =>
            `<input id="comment" placeholder="please leave comment" autocomplete="off" autofocus></input>
                      <div class = "login">
                 <input id="writter" placeholder="name" autocomplete="off" >
                     <input type="password" id="password" placeholder="password" autocomplete="off" >
                     </div>
                     <div class = "buttons">
                 <button class="save" id="${movie1.id}" type="button">작성</button>
                 <button class="edit" id="${movie1.id}" type=" button">수정</button>
                 <button class="delete" id="${movie1.id}" type=" button">삭제</button>
            </div>
            `);

            movies = rows.map(movie => ({ ...movie }))
            for (let i = 0; i < movies.length; i++) {
              let movieid = movies[i]['id']
              if (!(localStorage.getItem(movieid+"writters"))) {
                  localStorage.setItem(movieid+"writters", "|");
              }}

      })

    }
    
    const review = document.querySelector("#review");
    const comment = document.querySelector("#comment");
    let movies = [];
    let writtersarray = (localStorage.getItem(arr +'writters')).split("|")

    for (let i = writtersarray.length - 1; i > 1; i--) {
        let p = `<p id="view">[코멘트]</p>
                <p class="content" id="reviewcontent2">
                ${localStorage.getItem(writtersarray[i] + arr +"input")}</p>
                <p id="name">[이름]</p>
                <p class="content" id="writter2">${writtersarray[i]} </p>`
        let div = document.createElement("div")
        div.className = "commentviewbox"
        div.innerHTML = p
        comment.appendChild(div)
    }
  

    review.addEventListener("click", clickDetails)



    function clickDetails({ target }) {
    
    
        let inputcomment = document.querySelector("#comment").value
        let writtercomment = document.querySelector("#writter").value
        let passwordcomment = document.querySelector("#password").value
    
    
        if (target === review) return;
    
        if (target.matches(".save")) {
          localStorage.setItem(writtercomment + arr + "input", inputcomment)
          localStorage.setItem(writtercomment + arr + "pw", passwordcomment)
          if (!localStorage.getItem(arr + 'writters')) { localStorage.setItem(arr + 'writters', "|") }
          localStorage.setItem(arr + 'writters', localStorage.getItem(arr + 'writters') + "|" + writtercomment)
          location.reload()
      }
      else if (target.matches(".edit")) {
          if (passwordcomment == localStorage.getItem(writtercomment + arr + "pw")) {
              localStorage.setItem(writtercomment + arr + "input", inputcomment)
              location.reload()
          }
          else if (passwordcomment !== localStorage.getItem(writtercomment + arr + "pw")) { alert("비밀번호가 일치하지 않습니다.") }
      }
      else if (target.matches(".delete")) {
          if (passwordcomment == localStorage.getItem(writtercomment + arr + "pw")) {
              localStorage.removeItem(writtercomment + arr + "input");
              localStorage.removeItem(writtercomment + arr + "pw");
              let newwritters = (localStorage.getItem(arr + 'writters')).replace("|" + writtercomment, "")
              localStorage.setItem(arr + 'writters', newwritters)
              location.reload()
  
          }
          else if (passwordcomment !== localStorage.getItem(writtercomment + arr + "pw")) { alert("비밀번호가 일치하지 않습니다.") }
      }
  
  }
  