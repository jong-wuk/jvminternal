const Movie = {
    'first Name': "Movie",

}

Movie.name = "testMovieName";
console.log(Movie);

delete Movie.name;
console.log(Movie);

console.log(Movie['first Name']);