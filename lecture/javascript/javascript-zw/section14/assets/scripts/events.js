const button = document.querySelector("button");

// button.onclick = function (){
//
// }

const buttonClickHandler = () => {
    alert('Button was Clicked!');
    button.style.background = "black";
};

const anotherButtonClickHandler = () => {
    console.log('clicked!');
};


// button.onclick = anotherButtonClickHandler;
// button.onclick = buttonClickHandler;

button.addEventListener('click', buttonClickHandler.bind(this));

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler.bind(this));
}, 2000);
