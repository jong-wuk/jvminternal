const button = document.querySelector("button");

// button.onclick = function (){
//
// }

const buttonClickHandler = (event) => {
    // event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('clicked!');
};


// button.onclick = anotherButtonClickHandler;
// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);
// buttons.forEach(btn =>{
//     btn.addEventListener('mouseenter', buttonClickHandler);
// })
// // setTimeout(() => {
// //     button.removeEventListener('click', buttonClickHandler);
// // }, 2000);
//
// window.addEventListener('scroll',event =>{
//     console.log(event);
// })

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
})


const div = document.querySelector("div");
div.addEventListener('mouseenter', event => {
    console.log("CLICKED DIV");
    console.log(event);
});

button.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("CLICKED BUTTON");
    console.log(event);
    console.log(this);
})
// const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", function (event){
    // console.log(event.currentTarget);
    //     event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    button.click();
    console.log(this);
});

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });