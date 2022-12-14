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
const selfIntroduction = document.getElementById("selfIntroduction");
const selfIntroductionTextLengthWrap = document.getElementById("selfIntroduction_textLength_wrap");
const dateBirth = document.getElementById("dateBirth");
const age = document.getElementById("age");
const profilePicture = document.getElementById("profilePicture");
const moreDetails = document.getElementById("moreDetails");
const personalInfo = document.getElementById("personalInfo");
const agreeRadioButtons = document.querySelectorAll(".agree-radio");
const radioButtonWrapper = document.getElementById("radio-button-wrapper");
const SELFINTRODUCTION_MIN_VALUE = 10;
const SELFINTRODUCTION_MAX_VALUE = 100;


personalInfo.addEventListener('scroll', controlButton)
moreDetails.addEventListener("click", openCloseContent);
profilePicture.addEventListener('change', updateImageDisplay);



function openCloseContent() {
    if(personalInfo.style.display ==='block'){
        personalInfo.style.display = 'none';
    }else{
        personalInfo.style.display = 'block';
    }
}

phoneNumber.onkeyup = autoHyphenPhoneNumber;
selfIntroduction.onkeyup = getCurrentTextLength;



form.addEventListener('submit', formEvent);


function formEvent(event) {
    event.preventDefault();
    const MIN_NAME_LENGTH = 3;
    const MAX_PASSWORD_LENGTH = 8;
    const MIN_BIRTHDAY = 0;
    const MAX_BIRTHDAY = 31;
    if (checkRequired([username, email, password, passwordCheck, birth, birthDay])) {
        const selectedValueArray = getSelectedValueArray(arrInterestSelectBoxOptions);
        checkLength(username, MIN_NAME_LENGTH);
        checkLength(password, MAX_PASSWORD_LENGTH);

profilePicture.addEventListener('change', updateImageDisplay);
form.addEventListener('submit', formEvent);

function checkProfilePicture(input) {
    let uploadImageFileCount = input.files.length;
    console.log(uploadImageFileCount);
    if (uploadImageFileCount === 0) {
        showError(input, "????????? ????????? ?????????????????????.");
    } else {
        showSuccess(input);
    }
}

        checkPassword(password);
        checkPasswordMatch(password, passwordCheck);
        checkEmail(email);
        checkBirth(birth);

        checkBirthDay(birthDay, MIN_BIRTHDAY, MAX_BIRTHDAY);

        checkGender(inputRadioButtons);
        checkHobbyChecking(arrHobbyCheckbox);
        checkInterestSelected(selectedValueArray);
        checkZipcode(zipCode);
        checkDetailAddress(detailAddress);
        checkPhoneNumber(phoneNumber);
        getSelfIntroduction(selfIntroduction);
        checkEnteredDateBirth(dateBirth);
        checkNumber(age);
        checkProfilePicture(profilePicture);

        checkTerms(agreeRadioButtons);

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

function showErrorTextColor(input) {
    const selfIntroductionTextLengthPtag = input.nextElementSibling;
    selfIntroductionTextLengthPtag.className = "selfIntroduction-textLength error";
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function showSuccessTextColor(input) {
    const selfIntroductionTextLengthPtag = input.nextElementSibling;
    selfIntroductionTextLengthPtag.className = "selfIntroduction-textLength success";
}


function changeTextLimit(input) {
    let textLength;
    let textValue;
    textValue = input.value;
    textLength = textValue.length;
    if (textLength > SELFINTRODUCTION_MAX_VALUE) {
        input.blur();
        input.value = textValue.substring(0, 100);
        input.focus();
    }
}

function checkEmail(input) {
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!checkRequired([input])) {
        if (regEmail.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, `??? ${getFieldName(input)}??? ????????? ?????? ????????????`);
        }
    }
}


function isFieldNameExist(input, required) {
    if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} ??? ?????? ????????? ?????????.`);
        required = true;
    } else {
        showSuccess(input);
    }
    return required;
}

function checkRequired(inputArr) {
    let required = false;
    inputArr.forEach(input => {
        required = isFieldNameExist(input, required);
    });
    return required;

}

function checkLength(input, min) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}??? ?????? ${min}?????? ?????? ?????????.`);
    } else {
        showSuccess(input);
    }
}

function checkPassword(input) {
    const regPassword = /(?=.*\d)((?=.*[A-Z])(?=.*[a-z])(?=.*\W)).{8,}/; //??????????????? 8?????? ??????, ????????? ???,?????????, ??????????????? ???????????? ?????????.
    if (!checkRequired([input])) {
        if (regPassword.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, `${getFieldName(input)}??? 8?????? ??????, ????????? ???,?????????, ??????????????? ???????????? ?????????.`);
        }
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "??????????????? ???????????? ????????????.");
    }
}

function checkBirth(input) {
    const regBirth = /^[0-9]{4}/;
    const birthYear = input.value;
    if (regBirth.test(birthYear)) {
        if (parseInt(birthYear) <= 1899) {
            showError(input, `${getFieldName(input)}??? 1900?????? ?????????.`);
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
        showError(input, `${getFieldName(input)}??? 1??? 31????????? ?????? ?????????.`);
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
        showError(inputs[0], "????????? ????????? ?????????!")
    }
}


function checkTerms(inputs) {
    inputs.forEach((input) => {
        if (input.checked) {
            if (input.value === "checkDisagree") {
                showError(inputs[0], "???????????? ????????? ???????????? ????????? ????????? ????????? ??????????????? ");
                radioButtonWrapper.classList.add("radio-button-wrapper");
            } else if (input.value === "checkAgree") {
                showSuccess(inputs[0]);
                radioButtonWrapper.classList.add("radio-button-wrapper");
            } else {
                return;
            }
        }

    });
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
        showError(inputs[0], "???????????? ?????? 1??? ?????? ????????? ?????????");
    }
}

function getSelectedValueArray(inputs) {
    let result = [];
    let options = inputs;
    let opt;

    for (let option_i = 0; option_i < inputs.length; option_i++) {
        opt = options[option_i];


        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    console.debug(result);
    return result;
}

function checkInterestSelected(result) {

    let selected = false;
    result.forEach(text => {
        if (text === "choose") {
            showError(interest, "????????? ?????? 1??? ?????? ????????? ?????????");
            selected = true;
        }
    })
    if (!selected) {

        showSuccess(interest);
    }
}

function checkZipcode(input) {
    const zipCodeRegex = /^\d{5}/
    const zipCodeValue = input.value;
    if (zipCodeValue.length > 5) {
        showError(input, "??????????????? ?????? 5?????? ?????? ?????????.");
    } else {
        if (zipCodeRegex.test(zipCodeValue)) {
            showSuccess(input);
        } else {
            showError(input, "????????? ????????? ?????????!");
        }
    }
}

function checkDetailAddress(input) {
    const detailAddressValue = input.value;
    if (detailAddressValue === '') {
        showError(input, "????????? ??????????????????.");
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
        showError(input, "????????? ????????? ??????????????????.");
    }
}


function autoHyphenPhoneNumber() {
    this.value = this.value.replace(/[^0-9]/g, "");

    const value = this.value.split("");

    const textArr = [
        // ????????? ?????? (00 or 000)
        [0, value.length > 9 ? 3 : 2],
        // ????????? ?????? (000 or 0000)
        [0, value.length > 10 ? 4 : 3],
        // ?????? ????????? ?????? ??????
        [0, 4]
    ];

    this.value = textArr
        .map(function (v) {
            return value.splice(v[0], v[1]).join("")
        })
        .filter(function (text) {
            return text
        })
        .join("-");
}

function getSelfIntroduction(input) {
    const selfIntroductionValue = input.value;
    const selfIntroductionValueLength = selfIntroductionValue.length;

    if (selfIntroductionValueLength <= SELFINTRODUCTION_MIN_VALUE) {
        showError(input, "??????????????? ?????? 10?????? ?????? ??????????????????.");
        return;
    }
    if (selfIntroductionValueLength >= SELFINTRODUCTION_MAX_VALUE) {
        showError(input, "??????????????? ?????? 100???????????? ????????? ??? ????????????.");
    } else {
        showSuccess(input);
    }
}

function checkEnteredDateBirth(input) {
    if (input.value === '') {
        showError(input, "??????????????? ?????? ?????? ??????????????????");
    } else {
        showSuccess(input);
    }
}

function getCurrentTextLength() {
    let currentTextLength;
    let currentSelfIntroductionTextLength;
    currentTextLength = this.value.length;
    currentSelfIntroductionTextLength = `(${currentTextLength}/100)`;
    selfIntroductionTextLengthWrap.firstElementChild.innerHTML = currentSelfIntroductionTextLength;
    changeTextLimit(this);
    if (currentTextLength <= 10) {
        showErrorTextColor(this);
    } else {
        if (currentTextLength >= 100) {
            alert("???????????? 100??? ?????? ?????????.");
            showErrorTextColor(this);
        } else {
            showSuccessTextColor(this);
        }
    }
}


function checkNumber(input) {
    const MIN_AGE = 0;
    const MAX_AGE = 99;
    const enteredNumberString = input.value;
    const enteredNumberInt = parseInt(input.value);
    if (enteredNumberInt > MAX_AGE) {
        showError(input, "????????? 1~99?????? ?????? ??? ??? ????????????.");
        return;
    } else if (enteredNumberString === '') {
        showError(input, "????????? ??????????????????!");
        return;
    } else {
        showSuccess(input);
    }
    if (enteredNumberInt <= MIN_AGE) {
        showError(input, "????????? 1~99?????? ?????? ??? ??? ????????????.");
    } else {
        showSuccess(input);
    }
}

function updateImageDisplay() {
    console.log(this.nextElementSibling);
    const currentFile = profilePicture.files[0];
    console.log(currentFile);
    const image = document.createElement("img");
    image.style.width = '100px';
    image.src = URL.createObjectURL(currentFile);
    this.nextElementSibling.appendChild(image);
    if (this.nextElementSibling.hasChildNodes()) {
        this.nextElementSibling.removeChild(this.nextElementSibling.firstChild);
    }

}


function controlButton() {
    const scrollTop = personalInfo.scrollTop;
    radioButtonWrapper.classList.add("hidden");
    if (scrollTop === 932) {
        radioButtonWrapper.classList.remove("hidden");
        radioButtonWrapper.classList.add("show");
    } else {
        radioButtonWrapper.classList.remove("show");
        radioButtonWrapper.classList.add("hidden");
    }
}

function openCloseContent() {
    if (personalInfo.style.display === 'block') {
        personalInfo.style.display = 'none';
    } else {
        personalInfo.style.display = 'block';
    }
}

function checkProfilePicture(input) {
    let uploadImageFileCount = input.files.length;
    console.log(uploadImageFileCount);
    if (uploadImageFileCount === 0) {
        showError(input, "????????? ????????? ?????????????????????.");
    } else {
        showSuccess(input);
    }
}

