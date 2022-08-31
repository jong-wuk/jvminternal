const form = document.getElementById("form");
const username = document.getElementById("userId");
const password = document.getElementById("password");
const email = document.getElementById("email");
const passwordCheck = document.getElementById("passwordCheck");


form.addEventListener('submit', formEvent)

function formEvent(ev) {
    ev.preventDefault();
    if (checkRequired([username, email, password, passwordCheck])) {
        checkLength(username, 3);
        checkLength(password, 8);
        checkPassword(password);
        checkPasswordMatch(password, passwordCheck);
        checkEmail(email);
    }
}

function getFieldName(input) {

    return input.labels[0].textContent;
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!checkRequired([input])) {
        if (regEmail.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, `이 ${getFieldName(input)}은 형식에 맞지 않습니다`);
        }
    }
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} 은 필수 입력값 입니다.`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

function checkLength(input, min) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}은 최소 ${min}글자 이상 입니다.`);
    } else {
        showSuccess(input);
    }
}

function checkPassword(input) {
    const regPassword = /(?=.*\d)((?=.*[A-Z])(?=.*[a-z])(?=.*\W)).{8,}/; //패스워드는 8글자 이상, 영문자 대,소문자, 특수기호를 포함해야 됩니다.
    if (!checkRequired([input])) {
        if (regPassword.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, `${getFieldName(input)}는 8글자 이상, 영문자 대,소문자, 특수기호를 포함해야 됩니다.`);
        }
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "패스워드가 일치하지 않습니다.");
    }
}