const result = 0;
let currentResult = result;

function add(num1, num2) {
    return num1 + num2;
}

currentResult = add(1, 2);

let calculationDescription = `(${currentResult}+10)* 3 / 2 - 1`;


outputResult(currentResult, calculationDescription);