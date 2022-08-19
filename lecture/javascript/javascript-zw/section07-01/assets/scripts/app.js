const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');

};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const backdropClickHandler = () => {
    toggleMovieModal();
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
        title: titleValue,
        image: imageValue,
        rating: ratingValue,
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);