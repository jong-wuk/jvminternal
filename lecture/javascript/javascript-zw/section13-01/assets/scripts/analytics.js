const intervalId = setInterval(() => {
    console.log("sending analytic data");
}, 2000);


document.getElementById("stop-analytics-btn").addEventListener('click', ()=>{
    clearInterval(intervalId);
})

let sBrowser;
const sUserAgent = navigator.userAgent;
if(sUserAgent.indexOf("Chrome") > -1){
    sBrowser = "Google Chrome User";
}
alert('You are using' + sBrowser);