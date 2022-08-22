const buttons = document.querySelectorAll("button");

// button.onclick = function (){
//
// }

const buttonClickHandler = (event) => {
    event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('clicked!');
};


// button.onclick = anotherButtonClickHandler;
// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);
buttons.forEach(btn =>{
    btn.addEventListener('click', buttonClickHandler);
})
// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);
