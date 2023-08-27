const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddmovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');


//to take userinputs
const movies = [];

//update the UI
const updateUI = () => {
    if (movies.length == 0) {
        entryTextSection.style.display = 'block';
    }
    else {
        entryTextSection.style.display = 'none'
    }
}


//visiblity of background
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');

}
//display cards on screen
const renderNewMovieElement = (id,title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML =
        `<div class = "movie-element_image">
    <img src="${imageUrl}" alt = "${title}">
    </div>
    <div class="movie-element_info">
    <h2>${title}</h2>
    <p>${rating}</p>
</div> 
    `
    newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
  };
const deleteMovie = (movieId) =>
{
    let movieIndex = 0;
    for (let movie of movies) {
        if (movie.id == movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    console.log('hello',movies)
    const listRoot = document.getElementById('movie-list');
   listRoot.children[movieIndex].remove();
    closeMovieDeletionModal()


}



const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton =deleteMovieModal.querySelector('.btn--danger');
    
  cancelDeletionButton.addEventListener('click',closeMovieDeletionModal)
  confirmDeletionButton.addEventListener('click',
  deleteMovie.bind(null,movieId))
  // deleteMovie(movieId);
}


const closemovieModel = () => {
    addMovieModal.classList.remove('visible');
}
const showMovieModel = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

//clear input fields
const clearMovieInput = () => {
    for (let input of userInput) {
        input.value = ''; 
    }

}
//cancel button
const cancelAddMovieHandler = () => {
    closemovieModel();
    toggleBackdrop(); 
    clearMovieInput();
}

const backdropClickHandler = () => {
    closemovieModel();
    closeMovieDeletionModal();
    clearMovieInput();
}

const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    //for userinput validation

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 || +ratingValue > 5
    ) {
        alert('Please enter valid values(rating between 1 to 5).');
    }

    const newMovie = {
        id : Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log(movies);
    closemovieModel();
    toggleBackdrop();
    updateUI();
    renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating);
    clearMovieInput();
}

//add movie 
startAddMovieButton.addEventListener('click', showMovieModel);
//when click anywhere expect form
backdrop.addEventListener('click', backdropClickHandler);
//cancel the form
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
//add button of the form
confirmAddmovieButton.addEventListener('click', addMovieHandler);
