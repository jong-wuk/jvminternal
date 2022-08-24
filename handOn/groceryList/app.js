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


clearBtn.addEventListener('click', clearItems);

function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        })
        container.classList.add("show-container");
    }
}

window.addEventListener('DOMContentLoaded', setupItems)

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    removeFromLocalStorage();
    displayAlert('empty list', 'danger');
    setBackToDefault();
}


function createListItem(id, value) {
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
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);
}

function addItem(e) {
    e.preventDefault();
    const value = grocery.valueOf().value;
    const id = new Date().getTime().toString();
    console.log(removeTag(value));
    if (value && !editFlag) {
        createListItem(id, value);
        displayAlert('item added to the list', 'success');
        container.classList.add('show-container');

        addToLocalStorage(id, value);
        setBackToDefault();
    } else if (value && editFlag) {
        editElment.innerHTML = value;
        displayAlert('value changed', 'success');
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("please enter value", 'danger');
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }

    displayAlert('item Removed', 'danger');
    setBackToDefault();
    removeFromLocalStorageById(id);
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElment = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElment.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "수정";
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "추가";
}


function addToLocalStorage(id, value) {
    const addedGrocery = {id, value};
    let items = getLocalStorage();
    items.push(addedGrocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorageById(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage() {
    let items = getLocalStorage();

    localStorage.removeItem("list");
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function editLocalStorage(editID, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === editID) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}