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

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateIncomeTaxAmount(1000));
console.log(calculateVatAmount(100));