const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 로그를 만들고 출력하는 함수
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function writeToLog(operationIdentifier, previousResult, operationNumber, newResult) {
    const logEntry ={
        operation: operationIdentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult

    };
    logEntries.push(logEntry);
    console.log(logEntries);
}



function calculate(operation){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if(operation === "ADD"){
        currentResult += enteredNumber;
        operator = '+';
        createAndWriteLog('+', initialResult, enteredNumber);
        writeToLog('ADD', initialResult, enteredNumber, currentResult);
    }else if (operation === "SUBTRACT"){
        currentResult -= enteredNumber;
        operator = '-';
        createAndWriteLog('-', initialResult, enteredNumber);
        writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
    }else if(operation === "MULTIPLY"){
        currentResult *= enteredNumber;
        operator = '*';
        createAndWriteLog('*', initialResult, enteredNumber);
        writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
    }else {
        currentResult /= enteredNumber;
        operator = '/';
    }
        createAndWriteLog(operator, initialResult, enteredNumber);
        writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, "ADD"));
subtractBtn.addEventListener('click', calculate.bind(this,"SUBTRACT"));
multiplyBtn.addEventListener('click', calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener('click', calculate.bind(this, "DIVIDE"));


