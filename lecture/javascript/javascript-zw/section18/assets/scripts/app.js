const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {

    });
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        // headers: {
        //     "Content-Type": "application/json",
        //     "Set-Cookie": "logined"
        // }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something Wrong! Server Side');
            })
        }
    }).catch(error => {
        console.log(error.message);
        throw new Error('Something Wrong!');
    });
    //
    //     const xhr = new XMLHttpRequest();
    //     xhr.open(method, url);
    //
    //     xhr.responseType = "json";
    //
    //     xhr.onload = function () {
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //             resolve(xhr.response);
    //         }else{
    //             reject(new Error('Something Wrong!!!'));
    //         }
    //         // const listOfPosts =JSON.parse(xhr.response);
    //
    //     };
    //
    //     xhr.onerror = function () {
    //         reject(new Error('Something occur!!'));
    //     }
    //
    //     xhr.send(JSON.stringify(data));
    // });

}

async function fetchPosts() {
    try{
    const responseData = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    const listOfPosts = responseData;
    console.log(listOfPosts);
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
    }

    }catch (error){
        alert(error.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: console,
        userId: userId
    };
    const fd = new FormData(form);
    // fd.append('title',title);
    // fd.append('body',content);
    fd.append('userId', userId);

    sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

fetchButton.addEventListener('click', fetchPosts)
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
})
createPost('DUMMY', 'A DUMMy post!');

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})

