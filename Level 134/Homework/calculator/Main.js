import { plus } from './Plus.js';
import { minus } from './Minus.js';
import { multiply } from './Multiply.js';
import { divide } from './Divide.js';

window.calculate = function () {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const resultElement = document.getElementById('result');

  let result;

  switch (operation) {
    case 'plus':
      result = plus(num1, num2);
      break;
    case 'minus':
      result = minus(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      result = 'არასწორი ოპერაცია';
  }

  resultElement.textContent = result;
};
