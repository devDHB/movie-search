let arr = [];
    arr = location.href.split("?");
    const pageId = arr[1];
    
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
        const movie1 = rows.filter(data => data.id == arr[1]);

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

      })

    }
    
    const review = document.querySelector("#review");
    const comment = document.querySelector("#comment");

    let writterarray = [];
    let writtersarray = (localStorage.getItem(pageId +'writters')).split("|")

    for (let i = writtersarray.length - 1; i > 1; i--) {
        let p = `<p id="view">[코멘트]</p>
                <p class="content" id="reviewcontent2">
                ${localStorage.getItem(writtersarray[i] + pageId +"input")}</p>
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
          localStorage.setItem(writtercomment + pageId + "input", inputcomment)
          localStorage.setItem(writtercomment + pageId + "pw", passwordcomment)
          if (!localStorage.getItem(pageId + 'writters')) { localStorage.setItem(pageId + 'writters', "|") }
          localStorage.setItem(pageId + 'writters', localStorage.getItem(pageId + 'writters') + "|" + writtercomment)
          location.reload()
      }
      else if (target.matches(".edit")) {
          if (passwordcomment == localStorage.getItem(writtercomment + pageId + "pw")) {
              localStorage.setItem(writtercomment + pageId + "input", inputcomment)
              location.reload()
          }
          else if (passwordcomment !== localStorage.getItem(writtercomment + pageId + "pw")) { alert("비밀번호가 일치하지 않습니다.") }
      }
      else if (target.matches(".delete")) {
          if (passwordcomment == localStorage.getItem(writtercomment + pageId + "pw")) {
              localStorage.removeItem(writtercomment + pageId + "input");
              localStorage.removeItem(writtercomment + pageId + "pw");
              let newwritters = (localStorage.getItem(pageId + 'writters')).replace("|" + writtercomment, "")
              localStorage.setItem(pageId + 'writters', newwritters)
              location.reload()
  
          }
          else if (passwordcomment !== localStorage.getItem(writtercomment + pageId + "pw")) { alert("비밀번호가 일치하지 않습니다.") }
      }
  
  }
  