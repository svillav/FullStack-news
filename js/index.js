const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const idCard = document.getElementById('idCard');
const phoneNumber = document.getElementById('phoneNumber');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const submit = document.getElementById('submit');
const error = document.getElementsByClassName('error');
var dataMessage = '';
var errorMessage = '';

form.addEventListener('submit', e => {
    e.preventDefault();
})

submit.addEventListener('click', function() {
    if (errorMessage === '') {
        alert(dataMessage);
    } else {
        alert(errorMessage);
        errorMessage = '';
    }
})

// Username Validation
username.addEventListener('blur', function() {
    const usernameValue = username.value.trim();
    if (usernameValue.length < 7) {
        error[0].innerHTML = 'It must have more than 6 letters.';
        setErrorFor(username);
        errorMessage += 'Username must have more than 6 letters.\n';
    } else if (usernameValue.indexOf(' ') === -1) {
        error[0].innerHTML = 'It must have a space between names.';
        setErrorFor(username);
        errorMessage += 'Username must have a space between names.\n';
    } else {
        setSuccessFor(username)
        dataMessage += `Username: ${usernameValue}\n`;
    }
})
username.addEventListener('focus', function() {
    setSuccessFor(username);
})

// Email Validation
email.addEventListener('blur', function() {
    const emailValue = email.value.trim();
    if (!isEmail(emailValue)) {
        error[1].innerHTML = 'It must be a valid email.';
        setErrorFor(email);
        errorMessage += 'Email must be a valid email.\n';
    } else {
        setSuccessFor(email);
        dataMessage += `Email: ${emailValue}\n`;
    }
})
email.addEventListener('focus', function() {
    setSuccessFor(email);
})

// Password Validation
password.addEventListener('blur', function() {
    const passwordValue = password.value.trim();
    var regNumExp = /[0-9]/;
    var regAlfExp = /[a-zA-Z]/;
    if (passwordValue.length < 8) {
        error[2].innerHTML = 'It must be at least 8 characters long.';
        setErrorFor(password);
        errorMessage += 'Password must be at least 8 characters long.\n';
    } else if (!regAlfExp.test(passwordValue) || !regNumExp.test(passwordValue)) {
        error[2].innerHTML = 'It must have numbers and letters.';
        setErrorFor(password);
        errorMessage += 'Password must have numbers and letters.\n';
    } else {
        setSuccessFor(password);
        dataMessage += `Password: ${passwordValue}\n`;
    }
})
password.addEventListener('focus', function() {
    setSuccessFor(password);
})

// Age Validation
age.addEventListener('blur', function() {
    const ageValue = age.value.trim();
    if (ageValue < 18 || !Number.isInteger(Number(ageValue))) {
        error[3].innerHTML = 'Must be 18 or over.';
        setErrorFor(age);
        errorMessage += 'Age must be 18 or over.\n';
    } else {
        setSuccessFor(age);
        dataMessage += `Age: ${ageValue}\n`;
    }
})
age.addEventListener('focus', function() {
    setSuccessFor(age);
})

// ID Card Validation
idCard.addEventListener('blur', function() {
    const idCardValue = idCard.value.trim();
    if (idCardValue.length < 7 || idCardValue.length > 8) {
        error[4].innerHTML = 'It must be a 7 or 8 digit number.';
        setErrorFor(idCard);
        errorMessage += 'ID Card must be a 7 or 8 digit number.\n';
    } else {
        setSuccessFor(idCard);
        dataMessage += `ID Card: ${idCardValue}\n`;
    }
})
idCard.addEventListener('focus', function() {
    setSuccessFor(idCard);
})

// Phone Number
phoneNumber.addEventListener('blur', function() {
    const phoneNumberValue = phoneNumber.value.trim();
    if (phoneNumberValue.length < 7) {
        error[5].innerHTML = 'It must have at least 7 digits.';
        setErrorFor(phoneNumber);
        errorMessage += 'Phone Number must have at least 7 digits.\n';
    } else if (phoneNumberValue.indexOf('-') !== -1) {
        error[5].innerHTML = 'It should not contain hyphens.';
        setErrorFor(phoneNumber);
        errorMessage += 'Phone Number should not contain hyphens.\n';
    } else {
        setSuccessFor(phoneNumber);
        dataMessage += `Phone Number: ${phoneNumberValue}\n`;
    }
})
phoneNumber.addEventListener('focus', function() {
    setSuccessFor(phoneNumber);
})

// Address Validation
address.addEventListener('blur', function() {
    const addressValue = address.value.trim();
    var regNumExp = /[0-9]/;
    var regAlfExp = /[a-zA-Z]/;
    if (addressValue.length < 5) {
        error[6].innerHTML = 'It must be at least 5 characters long.';
        setErrorFor(address);
        errorMessage += 'Address must be at least 5 characters long.\n';
    } else if (!regAlfExp.test(addressValue) || !regNumExp.test(addressValue)) {
        error[6].innerHTML = 'It must have numbers and letters.';
        setErrorFor(address);
        errorMessage += 'Address must have numbers and letters.\n';
    } else if (addressValue.indexOf(' ') === -1) {
        error[6].innerHTML = 'It must have a space between.';
        setErrorFor(address);
        errorMessage += 'Address must have a space between.\n';
    } else {
        setSuccessFor(address);
        dataMessage += `Address: ${addressValue}\n`;
    }
})
address.addEventListener('focus', function() {
    setSuccessFor(address);
})

// City Validation
city.addEventListener('blur', function() {
    const cityValue = city.value.trim();
    var regAlfExp = /[^a-zA-Z]/;
    if (regAlfExp.test(cityValue)) {
        error[7].innerHTML = 'It must contain letters only.';
        setErrorFor(city);
        errorMessage += 'City must contain letters only.\n';
    } else if (cityValue.length < 3) {
        error[7].innerHTML = 'It must be at least 3 letters long.';
        setErrorFor(city);
        errorMessage += 'City must be at least 3 letters long.\n';
    } else {
        setSuccessFor(city);
        dataMessage += `City: ${cityValue}\n`;
    }
})
city.addEventListener('focus', function() {
    setSuccessFor(city);
})

// ZIP Validation
zip.addEventListener('blur', function() {
    const zipValue = zip.value.trim();
    if (zipValue.length < 3) {
        error[8].innerHTML = 'It must contain at least 3 characters.';
        setErrorFor(zip);
        errorMessage += 'ZIP must contain at least 3 characters.\n';
    } else {
        setSuccessFor(zip);
        dataMessage += `ZIP: ${zipValue}\n`;
    }
})
zip.addEventListener('focus', function() {
    setSuccessFor(zip);
})


function setErrorFor(input) {
    const formField = input.parentElement;
    const formInput = formField.querySelector('input');
    formInput.style.border = '2px solid rgb(255, 34, 34)';
}

function setSuccessFor(input) {
    const formField = input.parentElement;
    const errorElement = formField.querySelector('p');
    const formInput = formField.querySelector('input');
    errorElement.innerHTML = '';
    formInput.style.border = '1px solid rgb(23, 219, 23)';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}