let counterValue = 0;


function decrement() {
    counterValue -= 1;
    
    render();
}


function increment() {
    counterValue += 1;
    
    render();
}

function render() {
    ref.htmlValue.textContent = counterValue;
}

const ref = {
    buttonDecrement: document.querySelector('.decrement'),
    buttonIncrement: document.querySelector('.increment'),
    htmlValue: document.querySelector('#value'),
};

ref.buttonDecrement.addEventListener('click', decrement);


ref.buttonIncrement.addEventListener('click', increment);
