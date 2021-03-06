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
      let dl = document.createElement('dl');

      let titre = document.createElement('dt');
      titre.textContent = "Title : ";
      let title = document.createElement('dd');
      title.textContent = data.title;
      let category = document.createElement('dt');
      category.textContent = "Category : ";
      let genre = document.createElement('dd');
      genre.textContent = data.genres;
      let annee = document.createElement('dt');
      annee.textContent = "Year : ";
      let year = document.createElement('dd');
      year.textContent = data.year;
      let score = document.createElement('dt');
      score.textContent = "Score : ";
      let avg_vote = document.createElement('dd');
      avg_vote.textContent = + data.avg_vote;
      let score_imdb = document.createElement('dt');
      score_imdb.textContent = "IMDB Score : ";
      let imdb_score = document.createElement('dd');
      imdb_score.textContent = data.imdb_score;
      let directeurs = document.createElement('dt');
      directeurs.textContent = "Director : ";
      let directors = document.createElement('dd');
      directors.textContent = data.directors;
      let acteurs = document.createElement('dt');
      acteurs.textContent = "Actors : ";
      let actors = document.createElement('dd');
      actors.textContent = data.actors;
      let duree = document.createElement('dt');
      duree.textContent = "Duration : ";
      let duration = document.createElement('dd');
      duration.textContent = data.duration + " min";
      let pays = document.createElement('dt');
      pays.textContent = "Countrie : ";
      let countries = document.createElement('dd');
      countries.textContent = data.countries;
      let worldwide = document.createElement('dt');
      worldwide.textContent = "BoxOffice Results : ";
      let worldwide_gross_income = document.createElement('dd');
      worldwide_gross_income.textContent = data.worldwide_gross_income+ " $";
      let long_desc = document.createElement('dt');
      long_desc.textContent = "Description : ";
      let long_description = document.createElement('dd');
      long_description.textContent = data.long_description;
      
      text_div.appendChild(image)
      dl.appendChild(titre);
      dl.appendChild(title);
      dl.appendChild(category);
      dl.appendChild(genre);
      dl.appendChild(annee);
      dl.appendChild(year);
      dl.appendChild(score);
      dl.appendChild(avg_vote);
      dl.appendChild(score_imdb);
      dl.appendChild(imdb_score);
      dl.appendChild(directeurs);
      dl.appendChild(directors);
      dl.appendChild(acteurs);
      dl.appendChild(actors);
      dl.appendChild(duree);
      dl.appendChild(duration);
      dl.appendChild(pays);
      dl.appendChild(countries);
      dl.appendChild(worldwide);
      dl.appendChild(worldwide_gross_income);
      dl.appendChild(long_desc);
      dl.appendChild(long_description);
      text_div.appendChild(dl);
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
