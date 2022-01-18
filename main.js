
const img_top_films = document.getElementById("img_top_films");
fetch('http://127.0.0.1:8000/api/v1/titles/?page_size=4')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((titles) => {
      let img_src = document.createElement('img');
      img_src.src = titles.image_url;
      img_top_films.appendChild(img_src)
    })
  });

const img_adventure = document.getElementById("img_adventure");
fetch('http://127.0.0.1:8000/api/v1/titles/?page_size=4&genre=adventure')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((titles) => {
      let img_src = document.createElement('img');
      img_src.src = titles.image_url;
      img_adventure.appendChild(img_src)
    })
  });

const img_comedy = document.getElementById("img_comedy");
fetch('http://127.0.0.1:8000/api/v1/titles/?page_size=4&genre=comedy')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((titles) => {
      let img_src = document.createElement('img');
      img_src.src = titles.image_url;
      img_comedy.appendChild(img_src)
    })
  });
  
const img_musical = document.getElementById("img_musical");
fetch('http://127.0.0.1:8000/api/v1/titles/?page_size=4&genre=musical')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((titles) => {
      let img_src = document.createElement('img');
      img_src.src = titles.image_url;
      img_musical.appendChild(img_src)
    })
  });