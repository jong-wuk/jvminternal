const callBackFnButton = document.getElementById("callBack");
const promiseButton = document.getElementById("promise");
const awaitAndSyncButton = document.getElementById("awaitAndSync");
const fetchFnButton = document.getElementById("fetch");
const imageWrapperElement = document.getElementById("phone-list-wrapper");
const RunButton = document.getElementById("runAjax");
const listElement = document.getElementById("phone-list");
const phoneUl = document.getElementById("phone_ul");
const nextBtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-button");
const listWrapper = document.querySelector(".list-wrapper");
const xmlHttpRequest = new XMLHttpRequest();

RunButton.addEventListener("click", isCheckFunction);
nextBtn.addEventListener("click",next);
previousBtn.addEventListener("click",previous);
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
        getPhonesUsePromise();
        checkedValue = promiseButton.value;
        return checkedValue;
    } else if (awaitAndSyncButton.checked === true) {
        getPhonesUseAwaitAndAsync();
        checkedValue = awaitAndSyncButton.value;
        return checkedValue;
    } else {
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
        phoneLiElement.classList.add("class", `phone-li`);
        phoneLiElement.innerHTML = `
           <div class="carousel">
            <h4>${phoneDetailName}</h4>
                <img alt="none" src="${imageResource}" style="height: 200px; width: 230px;"/>
                </div>
        `;
        phoneUlElement.appendChild(phoneLiElement);

    }
}

function useCallBack() {
    xmlHttpRequest.open("GET", "/api/phone.list.json");
    xmlHttpRequest.responseType = "json";
    xmlHttpRequest.onload = function () {
        const listOfPhone = xmlHttpRequest.response;
        renderList(listOfPhone);
    };
    xmlHttpRequest.send();
}

function usePromise(method, url) {
    return new Promise((resolve) => {
        xmlHttpRequest.open(method, url);
        xmlHttpRequest.responseType = "json";
        xmlHttpRequest.onload = function () {
            const listOfPhone = xmlHttpRequest.response;
            resolve(listOfPhone);

        };
        xmlHttpRequest.send();
    });
}

function getPhonesUsePromise() {
    usePromise("GET", "/api/phone.list.json").then(listOfPhone => {
        renderList(listOfPhone);
    });
}

function useAsyncAwait(method, url) {
    xmlHttpRequest.open(method, url);
    xmlHttpRequest.responseType = "json";
    xmlHttpRequest.onload = async function () {
        const listOfPhone = xmlHttpRequest.response;
        await renderList(listOfPhone);
    };
    xmlHttpRequest.send();
}

function getPhonesUseAwaitAndAsync() {
    useAsyncAwait("GET", "/api/phone.list.json");

}

function next(){
    let y = listWrapper.scrollTop;
    let x = listWrapper.scrollLeft;
    let disabled =  true;
    if(listWrapper.scrollTop >= 900){
        console.log(nextBtn.disabled);
        nextBtn.disabled = disabled;
    }else{
    listWrapper.scrollTo(x,y+300);
        console.log(nextBtn.disabled);
        nextBtn.disabled = !disabled;

    }


}

function previous(){
let y = listWrapper.scrollTop;
let x = listWrapper.scrollLeft;
    //만약 wrapper의 y좌표 값이 0이면 previous버튼 해제
    if(listWrapper.scrollTop === 0){
        previousBtn.disabled = true;
    }else {
        listWrapper.scrollTo(x, y - 300);
    }

    //아니면 기존 y좌표 -300
}
