const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts)

    });
}

const setTimer = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
};

async function trackUserHandler() {
    // let positionData;
    let timerData;
    let posData;
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error);
    }
    console.log(timerData, posData);
    // .then(posData => {
    //     positionData = posData;
    //     return setTimer(2000);
    // })
    // .catch(err => {
    //     console.log(err);
    //     console.log("on we go");
    // })
    // .then(data => {
    //     console.log(data, positionData);
    // });
    setTimer(1000).then(() => {
        console.log("Timer done..!");
    })





    console.log('Getting Position....');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for(let i = 0; i < 100000000; i++){
//   result += i;
// }
//
// console.log(result);