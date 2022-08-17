var name = "Max";
let hobbies;
if(name === 'Max'){
  hobbies = ['Sports', 'Cooking'];
  console.log("inner ",hobbies);
  if(true){
    console.log("inner-inner ",hobbies);
  }
}

function greet(){
  var age = 30;
  var name = 'Wook';
  console.log(name, age,hobbies);
}
console.log(name,hobbies);
greet();
console.log(name);