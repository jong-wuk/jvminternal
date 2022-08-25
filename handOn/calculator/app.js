const userInput = document.getElementById("input-text");
const buttons = document.getElementById("calc-actions");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
const logButton = document.querySelector(".iconBtn");
const modal = document.getElementById("LogModal");
const closeSpan = document.getElementsByClassName("close")[0];
const defaultResult = 0;
let currentResult = defaultResult;
let logResult = [];
function resetNumber(){
    currentResult = 0;
    outputResult(0,"0");
    userInput.value = '';
}

function createLogResult(logResult,logDescription){
    const element = document.createElement("div");
    element.innerHTML = `
        <p>${logResult}</p>
        <p>${logDescription}</p>
    `;

}
function printLogResult(){
    logResult.forEach(log=>{
        createLogResult(log,"");
    })
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

logButton.addEventListener('click',function(){
    //클릭시 팝업
    modal.style.display = "block";
    printLogResult();
})

closeSpan.addEventListener('click',function(){
    modal.style.display = "none";
})

window.addEventListener("click", function (event){
    if(event.target === modal){
        modal.style.display = "none";
    }
})

buttons.addEventListener('click', function (event) {
    const target = event.target;
    const btnText = target.textContent;
    const buttonContent = target.textContent;
    if(btnText ==="="){
        currentResult +=  eval(userInput.valueOf().value);
        currentResultOutput.textContent =currentResult;
        outputResult(eval(userInput.valueOf().value),userInput.valueOf().value);
        logResult.push(currentResult);
    }else if(btnText ==="CLEAR"){
        resetNumber();
    }
    else{
        userInput.valueOf().value += buttonContent;
    }

})

window.addEventListener("keydown", (ev) => {


    if (ev.key >= "0" && ev.key <= "9") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key === "Enter") {
        outputResult(eval(userInput.valueOf().value),userInput.valueOf().value);
    } else if (ev.key === "+" || ev.key === "-" || ev.key === "*" || ev.key === "/") {
        userInput.valueOf().value += ev.key;
    } else if (ev.key >= "a" && ev.key <= "z") {
        ev.stopPropagation();
    }
})

