
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];


//taken default argument
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filterMovies = !filter ? movies :
    movies.filter((movie) => movie.info.title.includes(filter))

  //by using foreach getting inner info of obj.

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement('li');

    //destructuring the object
    const { info, ...otherProps } = movie;
    const { title: movieTitle } = info;
    
    let  {getFormattedTitle} = movie;
    // let text = getFormattedTitle() + '-'; //it will not work
    getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle() + '-'; //now by the bind() it'll work
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key} : ${info[key]}`
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
  console.log(movies)
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle : function(){
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {

  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);

}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

