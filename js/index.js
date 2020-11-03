const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
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
    if (emailValue.length < 7 || emailValue.indexOf(' ') === -1) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }
})

email.addEventListener('focus', function() {
    setSuccessFor(email);
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