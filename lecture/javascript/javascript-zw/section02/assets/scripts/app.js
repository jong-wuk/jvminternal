const result = 0;
let currentResult = result;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' +result);
}

add(1,2);
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${result}+10)* 3 / 2 - 1`;
let errorMessage = 'An error' + ' occured!';


outputResult(currentResult, errorMessage);