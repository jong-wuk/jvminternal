const form = document.getElementById("form");
const username = document.getElementById("userId");
const password = document.getElementById("password");
const email = document.getElementById("email");
const passwordCheck = document.getElementById("passwordCheck");
const birth = document.getElementById("birth");
const birthDay = document.getElementById("day");
const inputRadioButtons = document.querySelectorAll(".input-radio");
const arrHobbyCheckbox = document.getElementsByName("hobby");
const interest = document.getElementById("interest");
const arrInterestSelectBoxOptions = document.getElementById("interest").options;
const zipCode = document.getElementById("zip");
const detailAddress = document.getElementById("detailAddress");
const phoneNumber = document.getElementById("phoneNumber");

phoneNumber.onkeyup = autoHyphenPhoneNumber;
form.addEventListener('submit', formEvent);

function formEvent(ev) {
    ev.preventDefault();
    if (checkRequired([username, email, password, passwordCheck, birth, birthDay])) {
        const selectedValueArray = getSelectedValueArray(arrInterestSelectBoxOptions);
        checkLength(username, 3);
        checkLength(password, 8);
        checkPassword(password);
        checkPasswordMatch(password, passwordCheck);
        checkEmail(email);
        checkBirth(birth);
        checkBirthDay(birthDay, 0, 31);
        checkGender(inputRadioButtons);
        checkHobbyChecking(arrHobbyCheckbox);
        checkInterestSelected(selectedValueArray);
        checkZipcode(zipCode);
        checkDetailAddress(detailAddress);
        checkPhoneNumber(phoneNumber);
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

function checkBirth(input) {
    const regBirth = /^[0-9]{4}/;
    const birthYear = input.value;
    if (regBirth.test(birthYear)) {
        if (parseInt(birthYear) <= 1899) {
            showError(input, `${getFieldName(input)}은 1900이상 입니다.`);
        } else {
            showSuccess(input);
        }
    }

}

function checkBirthDay(input, minBirthDay, maxBirthDay) {
    const birthDayValue = input.value;
    if (birthDayValue > minBirthDay && birthDayValue <= maxBirthDay) {
        console.debug("success");
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)}은 1과 31사이의 숫자 입니다.`);
    }
}

function checkGender(inputs) {
    let selected = false;
    inputs.forEach((input) => {
        if (input.checked) {
            showSuccess(input);
            selected = true;
        }
    })
    if (!selected) {
        showError(inputs[0], "성별을 선택해 주세요!")
    }
}

function checkHobbyChecking(inputs) {
    let checked = false;
    inputs.forEach((input) => {
        if (input.checked) {
            showSuccess(input);
            checked = true;
        }
    })
    if (!checked) {
        showError(inputs[0], "관심사를 최소 1개 이상 선택해 주세요");
    }
}

function getSelectedValueArray(inputs) {
    let result = [];
    let options = inputs;
    let opt;
    for (let i = 0; i < inputs.length; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    console.debug(result);
    return result;
}

function checkInterestSelected(result) {
    let flag = false;
    result.forEach(text => {
        if (text === "choose") {
            showError(interest, "취미를 최소 1개 이상 선택해 주세요");
            flag = true;
        }
    })
    if (!flag) {
        showSuccess(interest);
    }
}

function checkZipcode(input) {
    const zipCodeRegex = /^\d{5}/
    const zipCodeValue = input.value;
    if (zipCodeValue.length > 5) {
        showError(input, "우편번호는 최대 5글자 까지 입니다.");
    } else {
        if (zipCodeRegex.test(zipCodeValue)) {
            showSuccess(input);
        } else {
            showError(input, "숫자만 입력해 주세요!");
        }
    }
}

function checkDetailAddress(input) {
    const detailAddressValue = input.value;
    if (detailAddressValue === '') {
        showError(input, "주소를 입력해주세요.");
    } else {
        showSuccess(input);
    }
}


function checkPhoneNumber(input) {
    let phoneNumberValue = input.value;
    console.log(phoneNumberValue);
    const checkedNumberWithRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/.test(phoneNumberValue);
    if (checkedNumberWithRegex && phoneNumberValue.length <= 13) {
        showSuccess(input);
        console.log(phoneNumberValue.length);
    } else {
        showError(input, "핸드폰 번호를 입력해주세요.");
    }
}


function autoHyphenPhoneNumber(){
    this.value = this.value.replace(/[^0-9]/g, "");

    const value = this.value.split("");

    const textArr = [
        // 첫번째 구간 (00 or 000)
        [0, value.length > 9 ? 3 : 2],
        // 두번째 구간 (000 or 0000)
        [0, value.length > 10 ? 4 : 3],
        // 남은 마지막 모든 숫자
        [0, 4]
    ];

    this.value = textArr
        .map(function(v)  {
            return value.splice(v[0], v[1]).join("")
        })
        .filter(function(text) {
            return text
        })
        .join("-");
}
