const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const setName = function (event) {
    if (inputRef.value === '') {
        outputRef.textContent = 'незнакомец'
    } else {
        outputRef.textContent = event.target.value;
    }
}


inputRef.addEventListener('input', setName);
