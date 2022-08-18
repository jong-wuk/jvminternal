// const listItemElements = document.querySelectorAll('li')
const listItemElements = document.getElementsByTagName('li');
const h1 = document.getElementById("main-title");

// const ul = li.parentElement;

h1.textContent = "새로운 타이틀";
h1.style.color = "white";
h1.style.backgroundColor = 'black';

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "change";


for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}