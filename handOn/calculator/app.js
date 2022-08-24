const userInput = document.getElementById("input-text");
const clearBtn = document.getElementById("btn-clear");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

buttons.addEventListener('click', function (event) {
    const target = event.target;
    const btnText = target.textContent;
    const buttonContent = target.textContent;
    if(btnText ==="="){
        currentResultOutput.textContent = eval(userInput.valueOf().value);
    }else if(btnText ==="CLEAR"){
        userInput.valueOf().value = "";
        currentResultOutput.textContent = "";
    }
    else{
        userInput.valueOf().value += buttonContent;
    }

})

window.addEventListener("keydown", (ev) => {

    if (ev.key >= "0" && ev.key <= "9") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key === "Enter") {
        currentResultOutput.textContent = eval(userInput.valueOf().value);
    } else if (ev.key === "+" || ev.key === "-" || ev.key === "*" || ev.key === "/") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key >= "a" && ev.key <= "z") {
        ev.preventDefault();
    }
})

