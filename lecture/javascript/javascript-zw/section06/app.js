const startGameBtn = document.getElementById('start-game-btn');



const start = function() {
    console.log("Game is starting...");
};

/*const start = function() {
    console.log("Game is starting...");
};*/
/*function start() {
    console.log("Game is starting...",age);
}*/
/*const person = {
    name:'Max',
    greet: function greet(){
        console.log("hello there");
    }
};

person.greet();*/
// console.dir(startGame);

startGameBtn.addEventListener("click", function startGame() {
    console.log("Game is starting...",age);
});
startGameBtn.addEventListener("click", start);
