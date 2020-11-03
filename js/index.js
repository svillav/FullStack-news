const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

username.focus();

form.addEventListener('submit', e => {
    e.preventDefault();
});

username.addEventListener('blur', function() {
    const usernameValue = username.value.trim();
    if (usernameValue.length < 7 || usernameValue.indexOf(' ') === -1) {
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }
})

username.addEventListener('focus', function() {
    setSuccessFor(username);
})


email.addEventListener('blur', function() {
    const emailValue = email.value.trim();
    if (!isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }
})

email.addEventListener('focus', function() {
    setSuccessFor(email);
})



password.addEventListener('blur', function() {
    const passwordValue = password.value.trim();
    var regularExpression = /[^0-9a-zA-Z]/;
    if (passwordValue.length < 8 || regularExpression.test(passwordValue)) {
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }
})

password.addEventListener('focus', function() {
    setSuccessFor(password);
})










function setErrorFor(input) {
    const formField = input.parentElement;
    const errorElement = formField.querySelector('p');
    const formInput = formField.querySelector('input');
    errorElement.style.visibility = 'visible';
    formInput.style.border = '2px solid rgb(255, 34, 34)';
}

function setSuccessFor(input) {
    const formField = input.parentElement;
    const errorElement = formField.querySelector('p');
    const formInput = formField.querySelector('input');
    errorElement.style.visibility = 'hidden';
    formInput.style.border = '1px solid rgb(23, 219, 23)';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}