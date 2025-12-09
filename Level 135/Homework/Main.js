import { products } from './Products.js';
import { addToCart } from './Cart.js';

const container = document.getElementById('products');

products.forEach(product => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>₾${product.price}</p>
    <button>დამატება კალათაში</button>
  `;
  div.querySelector('button').addEventListener('click', () => {
    addToCart(product);
  });

  container.appendChild(div);
});
