const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');


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