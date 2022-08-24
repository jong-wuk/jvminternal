const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


let editElment;
let editFlag = false;
let editID = "";

form.addEventListener('submit', addItem)


function addItem(e) {
    e.preventDefault();
    const value = grocery.valueOf().value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");

        element.classList.add("grocery-item");
        const attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = ` <p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`;
        list.appendChild(element);
        displayAlert('item added to the list', 'success');
        container.classList.add('show-container');

        addToLocalStorage(id, value);
        setBackToDefault();
    } else if (value && editFlag) {
        console.log('editing');
    } else {
        displayAlert("please enter value", 'danger');
    }
}


function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

function addToLocalStorage(id, value) {
    console.log("addToLocalStorage");
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent ="추가";
}