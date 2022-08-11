const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add() {
    let enteredNumber = getUserNumberInput;
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult +enteredNumber;
    outputResult(currentResult,calcDescription);
}


addBtn.addEventListener('click', add);


