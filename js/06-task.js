const validInputRef = document.querySelector('#validation-input');

validInputRef.addEventListener('blur', handleValidInput);

function handleValidInput() {
    if (validInputRef.value.length < validInputRef.dataset.length ||
        validInputRef.value.length > validInputRef.dataset.length
    ) {
        validInputRef.classList.add('.invalid');
        validInputRef.classList.remove('.valid');
    } else {
        validInputRef.classList.add('.valid');
        validInputRef.classList.remove('.invalid');
    }
}