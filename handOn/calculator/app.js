const userInput = document.getElementById("input-text");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const modal = document.getElementById("LogModal");
const defaultResult = 0;
let currentResult = defaultResult;
let logResult = [];

function resetNumber() {
    currentResult = 0;
    currentResultOutput.value = 0;
    userInput.value = '';
    logResult = [];
}

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

buttons.addEventListener('click', function (event) {
    const target = event.target;
    const btnText = target.textContent;
    const buttonContent = target.textContent;
    if (btnText === "=") {
        currentResult = eval(userInput.valueOf().value);
        currentResultOutput.textContent = currentResult;
        userInput.value += "\r\n";
        logResult.push(currentResult);
        userInput.scrollTop = userInput.scrollHeight;
    } else if (btnText === "CLEAR") {
        resetNumber();
    } else {
        userInput.valueOf().value += buttonContent;
    }

})

window.addEventListener("keydown", (ev) => {


    if (ev.key >= "0" && ev.key <= "9") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key === "Enter") {
        currentResult = eval(userInput.valueOf().value);
        currentResultOutput.textContent = currentResult;
        userInput.value += "\r\n";
        userInput.scrollTop = userInput.scrollHeight;
    } else if (ev.key === "+" || ev.key === "-" || ev.key === "*" || ev.key === "/") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key >= "a" && ev.key <= "z") {
        ev.stopPropagation();
    }
})



