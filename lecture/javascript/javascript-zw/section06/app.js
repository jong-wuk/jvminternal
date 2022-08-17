const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;


const getPlayerChoice = function () {
    const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER}?`, '').toUpperCase();
    if (selection !== SCISSORS
        && selection !== ROCK
        && selection !== PAPER)
    {
        alert("유효하지 않은 값 입니다! 대신 " + DEFAULT_USER_CHOICE + "를 선택 해드렸습니다!");
        return DEFAULT_USER_CHOICE;
    }
    return selection;
        }

startGameBtn.addEventListener("click", function startGame() {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});


