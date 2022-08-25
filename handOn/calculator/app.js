const userInput = document.getElementById("input-text");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const modal = document.getElementById("LogModal");
const defaultResult = 0;
let currentResult = defaultResult;

function resetNumber() {
    currentResult = 0;
    currentResultOutput.value = 0;
    userInput.value = '';
}



buttons.addEventListener('click', function (event) {
    const target = event.target;
    const btnText = target.textContent;
    const buttonContent = target.textContent;
    if (btnText.includes("=")) {
        currentResult = eval(userInput.valueOf().value);
        currentResultOutput.textContent = currentResult;
        userInput.value += "\r\n";
        // logResult.push(currentResult);
        userInput.scrollTop = userInput.scrollHeight;
    } else if (btnText.includes("CLEAR")) {
        resetNumber();
    } else {
        userInput.valueOf().value += buttonContent;
    }

})

window.addEventListener("keydown", (ev) => {
    const regexNum =/\d/;
    const regexSpecial=/[+\/*-]/;
    const regexAlphabetic = /[a-zA-z]/;
    if (regexNum.test(ev.key)) {
        userInput.valueOf().value += ev.key;
    } else if (ev.key.includes("Enter")) {
        currentResult = eval(userInput.valueOf().value);
        currentResultOutput.textContent = currentResult;
        userInput.value += "\r\n";
        // logResult.push(currentResult);
        userInput.scrollTop = userInput.scrollHeight;
    } else if (regexSpecial.test(ev.key)) {
        userInput.valueOf().value += ev.key;
    } else if (regexAlphabetic.test(ev.key)) {
        ev.stopPropagation();
    }
})



