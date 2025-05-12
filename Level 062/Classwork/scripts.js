const counterElement = document.getElementById('counter');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

let counterValue = 0;


function updateCounter() {
  counterElement.textContent = counterValue;
  if (counterValue > 0) {
    counterElement.className = 'positive';
  } else if (counterValue < 0) {
    counterElement.className = 'negative';
  } else {
    counterElement.className = '';
  }
}


decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  counterValue = 0;
  updateCounter();
});


updateCounter();
