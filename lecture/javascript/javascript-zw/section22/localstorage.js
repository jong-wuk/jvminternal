const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');
const userId = 'u123';
const user = {
    name: 'Max',
    age: 24,
    hobbies: ['Sports', 'Cooking'],

};

storeButton.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId);
    sessionStorage.setItem('user', JSON.stringify(user));
});

retrieveButton.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem("uid");
    const extractedUser = JSON.parse(sessionStorage.getItem("user"));
    if (extractedId || extractedUser) {
        console.log(`Got the id = ${extractedId}`);
        console.log(`Got the User = ${JSON.stringify(extractedUser)}`);
    } else {
        console.log("I can't find Id")
    }
})