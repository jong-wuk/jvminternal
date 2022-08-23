function add(n1, n2) {
    return n1 + n2;
}

console.log(add(1, 5));
console.log(add(12, 52));

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 2,));

const hobbies = ['SPorts', 'Cooking'];

function printHobbies(h) {
    h.push('new HOBBY');

    console.log(h);
}

printHobbies(hobbies);
let multiplier = 1.1;
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier);
        return amount * tax *multiplier;
    }

    return calculateTax;
}


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
multiplier = 1.2

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(100));

let userName = 'Max';

function greetUser(){
    // let name = 'Anna';
    console.log("hi"+name);
}
let name = 'lexical';

userName = 'Manuel';

greetUser();

(function(){
    var age = 30;
    console.log(age);
})()
// console.log(age); //Error 발생 "age is not defined"

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return (x * (powerOf(x,n-1)));

    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));