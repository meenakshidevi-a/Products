let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear entire cart
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Render cart on page
function renderCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  const clearButton = document.getElementById("clearCart");

  if (!cartList || !totalElement || !clearButton) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((c, index) => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `
      ${c.item} - $${c.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">❌ Remove</button>
    `;
    cartList.appendChild(newItem);
    total += c.price;
  });

  totalElement.textContent = "Total: $" + total;
  clearButton.style.display = cart.length > 0 ? "inline-block" : "none";
}

// Load cart when page opens
window.onload = renderCart;
