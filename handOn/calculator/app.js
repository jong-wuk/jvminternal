const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
let logEntries=[];
let currentResult = 0;
keys.addEventListener("click",(e)=>{
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if(!action){
        if (displayedNum === '0') {
            display.textContent = keyContent;
            logEntries.push(keyContent);
        }else{
            display.textContent = displayedNum + keyContent;
             logEntries.push(keyContent);
        }
    }else if(action ==='clear'){
        logEntries = [];
        currentResult = 0;
        display.textContent = '0';
    }
})
