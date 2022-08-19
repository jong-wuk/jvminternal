/*
const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array(5);
// const moreNumbers = Array(5);
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");


const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const analysticsData = [[1.2, 2.5], [2.17, 1.17]];
const hobbies = ['Sports', 'Cooking'];
hobbies.push(2);
hobbies.unshift(3);
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);
console.log(poppedValue);

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
console.log(hobbies, hobbies[4]);

hobbies.splice(0, 0, 'Good Food');
console.log(hobbies);

hobbies.splice(-1, 1);
console.log(hobbies);*/


const testLists = [1, 5.3, 1.5, 10.988, -5, 10];
const sliceTestLists = testLists.slice(-2, -1);
console.log(sliceTestLists);
sliceTestLists.push(10);
console.log(testLists);