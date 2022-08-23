const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');


storeButton.addEventListener('click', () => {
    const userId = 'user12';
    document.cookie = `uid=${userId}`;
});

retrieveButton.addEventListener('click', () => {
    console.log(document.cookie);
})