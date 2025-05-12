
const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const incrementInput = document.getElementById('increment');
const decrementInput = document.getElementById('decrement');

let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}

increaseButton.addEventListener('click', () => {
    const incrementValue = parseInt(incrementInput.value) || 1; 
    counter += incrementValue;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    const decrementValue = parseInt(decrementInput.value) || 1; 
    counter -= decrementValue;
    updateCounter();
});


resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});
