const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posdData =>{
    console.log(posdData);
  },error=>{
    console.log(error);
  });
  console.log('Getting Position....');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for(let i = 0; i < 100000000; i++){
//   result += i;
// }
//
// console.log(result);