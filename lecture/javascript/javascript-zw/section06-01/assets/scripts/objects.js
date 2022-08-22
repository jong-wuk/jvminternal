const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]:'a',
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
};

// ...

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = 'first name';
const hello = 1.5;
const greet = 'greet';
console.log(person[keyName]);
console.log(person[hello]);
console.log(person['level']);
console.log(person);
console.log(person[greet]);