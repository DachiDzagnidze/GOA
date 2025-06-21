export let cart = [];

export function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

export function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - ₾' + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = total;
}
