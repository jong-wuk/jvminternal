const callBackFnButton = document.getElementById("callBack");
const promiseButton = document.getElementById("promise");
const awaitAndSyncButton = document.getElementById("awaitAndSync");
const fetchFnButton = document.getElementById("fetch");
const imageWrapperElement = document.getElementById("phone-list-wrapper");
const RunButton = document.getElementById("runAjax");
const listElement = document.getElementById("phone-list");
const phoneUl = document.getElementById("phone-ul");
const xmlHttpRequest = new XMLHttpRequest();

RunButton.addEventListener("click", isCheckFunction);
// useCallBack();

function showFuncFor() {

    let checkedButtonValue = isCheckFunction();

    imageWrapperElement.innerHTML = checkedButtonValue;

}

function isCheckFunction() {
    let checkedValue;
    // 만약 체크 된 버튼이 콜백 이면 콜백 리턴
    if (callBackFnButton.checked === true) {
        useCallBack();
        checkedValue = callBackFnButton.value;
        return checkedValue;
    } else if (promiseButton.checked === true) {
        checkedValue = promiseButton.value;
        return checkedValue;
    } else if (awaitAndSyncButton.checked === true) {
        checkedValue = awaitAndSyncButton.value;
        return checkedValue;
    }else{
        checkedValue = fetchFnButton.value;
        return checkedValue;
    }
}

function renderList(listOfPhone) {
    for (const phoneName in listOfPhone) {
        const phoneDetails = listOfPhone[phoneName];
        console.debug(phoneName, phoneDetails.name);
        const phoneUlElement = document.getElementById("phone_ul");
        const phoneLiElement = document.createElement("li");
        let phoneDetailName = phoneDetails.name;
        let imageResource = phoneDetails.productImg;
        phoneLiElement.classList.add("class",`phone-li`);
        phoneLiElement.innerHTML = `
            <li id="phone-list">
            <h4>${phoneDetailName}</h4>
            <div id="image-wrapper">
            <img alt="none" src="${imageResource}"></img>
            </div>
        `
        phoneUlElement.appendChild(phoneLiElement);

    }
}

function useCallBack(){
    xmlHttpRequest.open("GET","/api/phone.list.json");
    xmlHttpRequest.responseType = "json";
    xmlHttpRequest.onload= function(){
        const listOfPhone = xmlHttpRequest.response;
        renderList(listOfPhone);
    };
    xmlHttpRequest.send();
}

