const productsContainer = document.getElementById("products");
const cartBtn = document.getElementById("cartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

// gamovitanot productebis cardebu map()-is gamokenebit
parts.map(product => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}₾</p>
        <button class="add-btn" ${product.inStock ? "" : "disabled"} data-id="${product.id}">Add to Cart</button>
    `;

    productsContainer.appendChild(card);
});

// productebis kalatashi damatebis function 

productsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-btn")) {
        const id = parseInt(e.target.dataset.id);
        const product = parts.find(p => p.id === id);
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }
});

// Open / Close kalatis
cartBtn.addEventListener("click", () => {
    cartOverlay.style.display = "flex";
});
closeCart.addEventListener("click", () => {
    cartOverlay.style.display = "none";
});

// Update cart UI
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <p>${item.price}₾ x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="decrease" data-id="${item.id}">−</button>
                <button class="increase" data-id="${item.id}">+</button>
                <button class="remove" data-id="${item.id}">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartCount.innerText = count;
    cartTotal.innerText = total;
}

// raodenobis shemcireba
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCart();
}

// raodenobis momateba
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// itemis washla kalatidan
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// eventlistenerebis buttonebis damateba kalatashi
cartItemsContainer.addEventListener("click", function (e) {
    const id = parseInt(e.target.dataset.id);

    if (e.target.classList.contains("decrease")) {
        decreaseQuantity(id);
    }
    if (e.target.classList.contains("increase")) {
        increaseQuantity(id);
    }
    if (e.target.classList.contains("remove")) {
        removeItem(id);
    }
});
