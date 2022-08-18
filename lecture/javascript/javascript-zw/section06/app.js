const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const OPERATION_SUBTRACT = "SUBTRACT";
const OPERATION_ADD = "ADD";

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER}?`, '').toUpperCase();
    if (selection !== SCISSORS
        && selection !== ROCK
        && selection !== PAPER) {
        alert("유효하지 않은 값 입니다! 대신 " + DEFAULT_USER_CHOICE + "를 선택 해드렸습니다!");
        return;
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


const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) =>
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
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice, playerChoice);
    }
    let message = `You Picked ${playerChoice || DEFAULT_USER_CHOICE}, computer Picked ${computerChoice}, therefore you had a `;
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

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let operation_result = 0;
    for (const num of numbers) {
        if (operation === OPERATION_ADD) {
            operation_result += validateNumber(num);
        } else {
            operation_result -= validateNumber(num);
        }
    }
    resultHandler(operation_result, "The result after adding all number is : ");

};

/*const subtractUp = function (resultHandler, ...numbers) {
    let subtract = 0;
    for (const num of numbers) {
        subtract -= num;
    }
    resultHandler(subtract,"The result after subtracting all number is : ");


};*/

const showResult = (messageText,result) => {
    alert(messageText+"" + result);
};
combine(showResult.bind(this, "The result after adding all number is:"), OPERATION_ADD, 1, 'asd', 10, -3, 6, 10);
combine(showResult.bind(this, "The result after adding all number is:"), OPERATION_ADD, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, "The result after subtracting all number is:"), OPERATION_SUBTRACT, 1, 5, 1, 2, 3, 555, 6, 7);