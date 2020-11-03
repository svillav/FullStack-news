const form = document.getElementById('form');
const username = document.getElementById('username');
const submit = document.getElementById('submit');

username.focus();

form.addEventListener('submit', e => {
    e.preventDefault();
});

username.addEventListener('blur', function() {
    const usernameValue = username.value.trim();

    if (usernameValue.length < 7 || usernameValue.indexOf(' ') === -1) {
        console.log('Username invalid')
    } else {
        console.log('Username valid')
    }
})