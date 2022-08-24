const userInput = document.getElementById("input-text");
const clearBtn = document.getElementById("btn-clear");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

buttons.addEventListener('click', function(event){
    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;
    if(action === "number"){
        userInput.valueOf().value += buttonContent;
    }
})

function clearLogAndNumber() {
    userInput.valueOf().value = "";
    outputResult(0, "0");
}

clearBtn.addEventListener('click',clearLogAndNumber);


