const buttons = document.querySelectorAll("button");

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

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log(event);
})