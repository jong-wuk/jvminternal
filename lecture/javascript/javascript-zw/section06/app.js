const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER}?`, '').toUpperCase();
    if (selection !== SCISSORS
        && selection !== ROCK
        && selection !== PAPER) {
        alert("유효하지 않은 값 입니다! 대신 " + DEFAULT_USER_CHOICE + "를 선택 해드렸습니다!");
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}


const getWinner = (computerChoice, playerChoice) =>
    computerChoice === playerChoice
        ? RESULT_DRAW
        : (computerChoice === ROCK && playerChoice === PAPER) ||
        (computerChoice === PAPER && playerChoice === SCISSORS) ||
        (computerChoice === SCISSORS && playerChoice === ROCK)
            ? RESULT_PLAYER_WINS
            : RESULT_COMPUTER_WINS;

/*if (computerChoice === playerChoice) {
    return RESULT_DRAW;
} else if (
    computerChoice === ROCK && playerChoice === PAPER ||
    computerChoice === PAPER && playerChoice === SCISSORS ||
    computerChoice === SCISSORS && playerChoice === ROCK
) {
    return RESULT_PLAYER_WINS;

} else {
    return RESULT_COMPUTER_WINS;
}*/


startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);

    let message = `You Picked ${playerChoice}, computer Picked ${computerChoice}, therefore you had a `;
    if (winner === RESULT_DRAW) {
        message += `${RESULT_DRAW}`;
    } else if (winner === RESULT_PLAYER_WINS) {
        message += `${RESULT_PLAYER_WINS}`;
    } else {
        message += `${RESULT_COMPUTER_WINS}`;
    }

    alert(message);
    gameIsRunning = false;

});
