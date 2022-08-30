const userInput = document.getElementById("input-text");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const modal = document.getElementById("LogModal");
const DEFAULT_RESULT = 0;
const NEWLINE = "\r\n";
let currentResult = DEFAULT_RESULT;

function resetValue() {
    currentResult = DEFAULT_RESULT;
    currentResultOutput.value = DEFAULT_RESULT;
    userInput.value = '';
}

function scrollDown() {
    userInput.value += NEWLINE;
    userInput.scrollTop = userInput.scrollHeight;
}

function evaluateResult(curResult) {
    currentResultOutput.textContent = curResult;
}

buttons.addEventListener('click', function (event) {
    const target = event.target;
    const btnText = target.textContent;
    const buttonContent = target.textContent;
    if (btnText.includes("=")) {
        currentResult = eval(userInput.valueOf().value);
        evaluateResult(currentResult);
        scrollDown();
    } else if (btnText.includes("CLEAR")) {
        resetValue();
    } else {
        userInput.valueOf().value += buttonContent;
    }

})


function pressedKeyFor(ev) {
    let pressedKey = ev.key;
    const regexNum = /\d/;
    const regexSpecial = /[+\/*-]/;
    const regexAlphabetic = /[a-zA-z]/;
    console.log(pressedKey);
    if (regexNum.test(pressedKey)) {
        userInput.valueOf().value += pressedKey;
    }else if (pressedKey.includes("Enter")) {
        currentResult = eval(userInput.valueOf().value);
        evaluateResult(currentResult);
        scrollDown();
    } else if (regexSpecial.test(pressedKey)) {
        userInput.valueOf().value += pressedKey;
    } else if (regexAlphabetic.test(pressedKey)) {
        ev.stopPropagation();
    }
}

    window.addEventListener("keydown", (ev) => {

        pressedKeyFor(ev);
    });



