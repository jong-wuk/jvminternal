// const ids = new Set(['hi','from','set']);
// ids.add(2);
// ids.delete('hi');
// console.log(ids.has(2));
//
// const entries = ids.entries();
// for (const entry of entries) {
//     console.log(entry);
// }

const person1 = {name: "Max"};
const person2 = {name: "Manuel"};

const personData = new Map([[person1, [{data: 'yesterday', price: 10, product: "Book"}]]]);
personData.set(person2, [{data:'two weeks ago', price: 100}]);
console.log(personData);
console.log(personData.get(person1));

for (const [key,value] of personData.entries()) {
    console.log(key,value);
}
for (const key of personData.keys()) {
    console.log(key);
}
for (const value of personData.values()) {
    console.log(value);
}