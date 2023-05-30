const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ2MDljY2M4YTk2OGQ4NmY3MDY5MGE5MmU3ZWMwMCIsInN1YiI6IjY0NzA4YTIwNzcwNzAwMDExOTI0ODFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NjHTZbzSO0wzPIHy0BTBCKG3LvrIYUl4GMa0h1E5VE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));