const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const addNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5✨</p>
        </div>
</div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const deleteMovie = (movieId) => {
    let identifiedIndex = 0;
    for (const movie of movies) {
        if (movieId === movie.id) {
            break;
        }
        identifiedIndex++;
    }
    movies.splice(identifiedIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[identifiedIndex].remove();
};

const closeMovieDeletionModal = () =>{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    // deleteMovie(movieId);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');

};

const closeMovieModal = () =>{
    addMovieModal.classList.remove('visible');
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInput();
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
};
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageValue.trim() === '' || ratingValue === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert("값을 입력해주세요! (rating은 1과 5 사이의 값 입니다.)")
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageValue,
        rating: ratingValue,
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    addNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}


startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);