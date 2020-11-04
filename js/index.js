const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
const error = document.getElementsByClassName('error');

username.focus();

form.addEventListener('submit', e => {
    e.preventDefault();
});


// Username Validation
username.addEventListener('blur', function() {
    const usernameValue = username.value.trim();
    if (usernameValue.length < 7) {
        error[0].style.visibility = 'visible';
        error[0].innerHTML = 'It must have more than 6 letters.';
        setErrorFor(username);
    } else if (usernameValue.indexOf(' ') === -1) {
        error[0].style.visibility = 'visible';
        error[0].innerHTML = 'It must have a space between names.';
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }
})
username.addEventListener('focus', function() {
    setSuccessFor(username);
})

// Email Validation
email.addEventListener('blur', function() {
    const emailValue = email.value.trim();
    if (!isEmail(emailValue)) {
        error[1].style.visibility = 'visible';
        error[1].innerHTML = 'It must be a valid email.';
        setErrorFor(email);
    } else {
        setSuccessFor(email);
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
        error[2].style.visibility = 'visible';
        error[2].innerHTML = 'It must be at least 8 characters long.';
        setErrorFor(password);
    } else if (!regAlfExp.test(passwordValue) || !regNumExp.test(passwordValue)) {
        error[2].style.visibility = 'visible';
        error[2].innerHTML = 'It must have numbers and letters.';
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }
})
password.addEventListener('focus', function() {
    setSuccessFor(password);
})

// Age Validation
age.addEventListener('blur', function() {
    const ageValue = age.value.trim();
    if (ageValue < 18 || !Number.isInteger(Number(ageValue))) {
        error[3].style.visibility = 'visible';
        error[3].innerHTML = 'Must be 18 or over.';
        setErrorFor(age);
    } else {
        setSuccessFor(age);
    }
})
age.addEventListener('focus', function() {
    setSuccessFor(age);
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