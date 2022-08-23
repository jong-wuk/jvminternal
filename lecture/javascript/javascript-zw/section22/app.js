const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy',1);
dbRequest.onupgradeneeded = function (event){
    const db = event.target.result;

    const objStore = db.createObjectStore('products',{keyPath: 'id'});

    objStore.transaction.oncomplete = function (event){
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');
        productsStore.add({id:'p1', title:'A First Product', price:12.99, tags: ['Expensive', 'Luxury']});
    }
};
dbRequest.onerror = function (event){
    console.log('ERROR!');};


storeButton.addEventListener('click', () => {
    const userId = 'user12';
    const user = {name:'abc', age: 30}
    document.cookie = `uid=${userId}; max-age=360`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton.addEventListener('click', () => {
    const  cookieData= document.cookie.split(";");
    const data = cookieData.map(i=>{
        return i.trim();
    });
    console.log(data[1].split("=")[1]);
});