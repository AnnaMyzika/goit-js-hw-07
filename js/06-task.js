
const inputRef = document.querySelector('#validation-input');

const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
  inputRef.classList.add('invalid');
  if (inputRef.value.length === dataLength) {
    inputRef.classList.replace('invalid', 'valid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.replace('valid', 'invalid');
  }
});