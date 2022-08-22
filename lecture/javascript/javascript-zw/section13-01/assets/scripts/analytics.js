const intervalId = setInterval(() => {
    console.log("sending analytic data");
}, 2000);


document.getElementById("stop-analytics-btn").addEventListener('click', ()=>{
    clearInterval(intervalId);
})