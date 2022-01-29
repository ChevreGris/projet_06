var top_film_page = 1
var adventure_film_page = 1
var comedy_film_page = 1
var musical_film_page = 1

function get_films(source, page, category, button) {
  const films = document.getElementById(source);
  fetch('http://127.0.0.1:8000/api/v1/titles/?page=' + page + '&page_size=4&genre=' + category + '&sort_by=-imdb_score')
    .then(response => response.json())
    .then(data => {
      data.results.forEach((titles) => {
        let div = document.createElement('div');
        div.className = "container"
        let img_src = document.createElement('img');
        img_src.className = "raw_image"
        img_src.src = titles.image_url;
        div.appendChild(img_src)
        let img_div = document.createElement('div');
        img_div.className = "image_overlay"
        let img_name = document.createElement('div');
        img_name.className = "title"
        img_name.textContent = titles.title;
        img_div.appendChild(img_name)
        div.appendChild(img_div)
        films.appendChild(div)
        add_click_event(img_div, titles.id)
      })
    document.getElementById(source).appendChild(
    document.getElementById(button)
      );
    });
}

function suggested_films(source) {
  var page = Math.floor(Math.random() * 85850);
  const films = document.getElementById(source);
  fetch('http://127.0.0.1:8000/api/v1/titles/?page=' + page + '&page_size=1')
    .then(response => response.json())
    .then(data => {
      data.results.forEach((titles) => {
        let div = document.createElement('div');
        div.className = "container"
        let img_src = document.createElement('img');
        img_src.className = "raw_image"
        img_src.src = titles.image_url;
        div.appendChild(img_src)
        let img_div = document.createElement('div');
        img_div.className = "image_overlay"
        let img_name = document.createElement('div');
        img_name.className = "title"
        img_name.textContent = titles.title;
        img_div.appendChild(img_name)
        div.appendChild(img_div)
        films.appendChild(div)
        add_click_event(img_div, titles.id)
      })
    document.getElementById(source).appendChild(
    document.getElementById(button)
    );
    });
}

function next(source, page, category, button) {
  var parent = document.getElementById(source);
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  get_films(source, page, category, button)
}

function back(source, page, category, button) {
  var parent = document.getElementById(source);
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
  var child = parent.getElementsByClassName("container")[0];
  parent.removeChild(child)
 get_films(source, page, category, button)
}

suggested_films("suggested_films")
get_films("img_top_films", top_film_page, "", "top_films_next")
get_films("img_adventure", adventure_film_page, "adventure", "adventure_next")
get_films("img_comedy", comedy_film_page, "comedy", "comedy_next")
get_films("img_musical", musical_film_page, "musical", "musical_next")

function top_films_next() {
  top_film_page = top_film_page + 1;
  next("img_top_films", top_film_page, "", "top_films_next")
}

function top_films_back() {
  if (top_film_page == 1) {
    top_film_page == 1;
  }
  if (top_film_page > 1) {
    top_film_page = top_film_page - 1;
    back("img_top_films", top_film_page, "", "top_films_next")
  }
}

function adventure_next() {
  adventure_film_page = adventure_film_page + 1;
  next("img_adventure", adventure_film_page, "adventure", "adventure_next")
}

function adventure_back() {
  if (adventure_film_page == 1) {
    adventure_film_page == 1;
  }
  if (adventure_film_page > 1) {
    adventure_film_page = adventure_film_page - 1;
    back("img_adventure", adventure_film_page, "adventure", "adventure_next")
  }
}

function comedy_next() {
  comedy_film_page = comedy_film_page + 1;
  next("img_comedy", comedy_film_page, "comedy", "comedy_next")
}

function comedy_back() {
  if (comedy_film_page == 1) {
    comedy_film_page == 1;
  }
  if (comedy_film_page > 1) {
    comedy_film_page = comedy_film_page - 1;
    back("img_comedy", comedy_film_page, "comedy", "comedy_next")
  }
}

function musical_next() {
  musical_film_page = musical_film_page + 1;
  next("img_musical", musical_film_page, "musical", "musical_next")
}

function musical_back() {
  if (musical_film_page == 1) {
    musical_film_page == 1;
  }
  if (musical_film_page > 1) {
    musical_film_page = musical_film_page - 1;
    back("img_musical", musical_film_page, "musical", "musical_next")
  }
}

var images = document.getElementsByClassName("image_overlay")
for (const image of Object.values(images)) {
  console.log(image)
  image.onclick = function() {
    console.log("click", image)
  }
}

var modal = document.getElementById("myModal");
function add_click_event(div, id) {
  div.onclick = function() {
    var modal = document.getElementById("myModal");
    console.log("click")
    fetch('http://127.0.0.1:8000/api/v1/titles/' + id)
    .then(response => response.json())
    .then(data => {
      modal.style.display = "block";
      console.log(data);
      var text_space = document.getElementById('text_space');
      let text_div = document.createElement('div');
      text_div.className = "text_div";
      let image = document.createElement('img');
      image.src = data.image_url;
      let title = document.createElement('p');
      title.textContent = "Title : " + data.title;
      let genre = document.createElement('p');
      genre.textContent = "Category : " + data.genres;
      let year = document.createElement('p');
      year.textContent = "Year : " + data.year;
      let avg_vote = document.createElement('p');
      avg_vote.textContent = "Score : " + data.avg_vote;
      let imdb_score = document.createElement('p');
      imdb_score.textContent = "IMDB Score : " + data.imdb_score;
      let directors = document.createElement('p');
      directors.textContent = "Director : " + data.directors;
      let actors = document.createElement('p');
      actors.textContent = "Actors : " + data.actors;
      let duration = document.createElement('p');
      duration.textContent = "Duration : " + data.duration + " min";
      let countries = document.createElement('p');
      countries.textContent = "Countrie : " + data.countries;
      let worldwide_gross_income = document.createElement('p');
      worldwide_gross_income.textContent = "BoxOffice Results : " + data.worldwide_gross_income+ " $";
      let long_description = document.createElement('p');
      long_description.textContent = "Description : " + data.long_description;
      
      text_div.appendChild(image)
      text_div.appendChild(title);
      text_div.appendChild(genre);
      text_div.appendChild(year);
      text_div.appendChild(avg_vote);
      text_div.appendChild(imdb_score);
      text_div.appendChild(directors);
      text_div.appendChild(actors);
      text_div.appendChild(duration);
      text_div.appendChild(countries);
      text_div.appendChild(worldwide_gross_income);
      text_div.appendChild(long_description);
      text_space.appendChild(text_div)
    })
  }
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  let parent = document.getElementById("text_space");
  let child = parent.getElementsByClassName("text_div")[0];
  parent.removeChild(child)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let parent = document.getElementById("text_space");
    let child = parent.getElementsByClassName("text_div")[0];
    parent.removeChild(child)
  }
}
